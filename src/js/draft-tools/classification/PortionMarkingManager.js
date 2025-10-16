/**
 * Portion Marking Manager
 * Manages portion markings across OPORD sections and updates overall classification
 * 
 * Coordinates with ClassificationManager to track portion markings for each section
 * and automatically update the document's overall classification banner to the
 * highest classification level among all portion markings.
 * 
 * @version 1.0.0
 * @date 2025-10-07
 */

export class PortionMarkingManager {
    /**
     * Create a new PortionMarkingManager
     * 
     * @param {Object} eventBus - Event bus for inter-component communication
     * @param {ClassificationManager} classificationManager - ClassificationManager instance
     * 
     * @example
     * const portionMarkingManager = new PortionMarkingManager(eventBus, classificationManager);
     */
    constructor(eventBus, classificationManager) {
        this.eventBus = eventBus;
        this.classificationManager = classificationManager;
        
        /**
         * Map of section IDs to their portion markings
         * Key: sectionId (e.g., 'situation', 'mission', 'execution-concept')
         * Value: Array of portion marking strings (e.g., ['(S)', '(S//NF)', '(TS//SI)'])
         * 
         * @type {Map<string, string[]>}
         */
        this.portionMarkings = new Map();
        
        /**
         * Current highest classification across all sections
         * Cached to avoid recalculation on every query
         * 
         * @type {Object|null}
         * @property {string} level - Classification level (e.g., 'TOP SECRET')
         * @property {string} portionMarking - Portion marking string (e.g., '(TS//SI)')
         * @property {number} weight - Classification weight for comparison
         */
        this.currentHighest = null;
        
        // Bind methods
        this.registerPortionMarkings = this.registerPortionMarkings.bind(this);
        this.updateOverallClassification = this.updateOverallClassification.bind(this);
        this.validatePortionMarking = this.validatePortionMarking.bind(this);
    }

    /**
     * Register portion markings for a specific section
     * 
     * Stores the portion markings for the given section and triggers an update
     * to the overall classification banner.
     * 
     * @param {string} sectionId - Unique identifier for the section (e.g., 'situation', 'mission')
     * @param {string[]} markings - Array of portion marking strings (e.g., ['(S)', '(S//NF)'])
     * 
     * @example
     * portionMarkingManager.registerPortionMarkings('situation', ['(S)', '(S//NF)', '(TS//SI)']);
     * 
     * @example
     * portionMarkingManager.registerPortionMarkings('execution-concept', ['(U)', '(S)']);
     */
    registerPortionMarkings(sectionId, markings) {
        if (!sectionId || typeof sectionId !== 'string') {
            console.warn('⚠️ PortionMarkingManager: Invalid sectionId provided');
            return;
        }

        if (!Array.isArray(markings)) {
            console.warn('⚠️ PortionMarkingManager: Markings must be an array');
            return;
        }

        // Validate all markings before storing
        const validMarkings = markings.filter(marking => {
            const validation = this.validatePortionMarking(marking);
            if (!validation.valid) {
                console.warn(`⚠️ PortionMarkingManager: Invalid marking "${marking}" for section "${sectionId}": ${validation.error}`);
                return false;
            }
            return true;
        });

        // Store markings for this section
        this.portionMarkings.set(sectionId, validMarkings);

        // Emit event for tracking
        this.eventBus.emit('portion-marking:registered', {
            sectionId: sectionId,
            markings: validMarkings,
            timestamp: new Date().toISOString()
        });

        // Update overall classification
        this.updateOverallClassification();
    }

    /**
     * Update overall classification based on highest portion marking
     *
     * Collects all portion markings from all sections, determines the highest
     * classification level, and updates the ClassificationManager state.
     *
     * Phase 5: Added validation error checking to reject invalid portion markings
     *
     * @fires portion-marking:banner-updated
     *
     * @example
     * portionMarkingManager.updateOverallClassification();
     * // Emits: { level: 'TOP SECRET', portionMarking: '(TS//SI)', weight: 3.15 }
     */
    updateOverallClassification() {
        // Get all portion markings from all sections
        const allMarkings = this.getAllPortionMarkings();

        if (allMarkings.length === 0) {
            // No markings - reset to UNCLASSIFIED
            this.currentHighest = null;
            this.classificationManager.setClassificationLevel('UNCLASSIFIED');

            this.eventBus.emit('portion-marking:banner-updated', {
                level: 'UNCLASSIFIED',
                portionMarking: '(U)',
                weight: 0,
                timestamp: new Date().toISOString()
            });
            return;
        }

        // Phase 5: Filter out invalid portion markings before processing
        const validMarkings = [];
        const invalidMarkings = [];

        for (const marking of allMarkings) {
            const parsed = this.classificationManager.parsePortionMarking(marking);

            if (!parsed) {
                console.warn(`⚠️ PortionMarkingManager: Could not parse marking "${marking}"`);
                invalidMarkings.push({ marking, reason: 'Parse failed' });
                continue;
            }

            // Phase 5: Check for validation errors
            if (this.checkValidationErrors(parsed)) {
                // Validation error detected - reject this portion marking
                const error = this.emitValidationError(marking, parsed);
                this.logValidationError(marking, error);
                invalidMarkings.push({ marking, reason: 'Validation error', error });
                continue;
            }

            // Valid marking - include in overall classification
            validMarkings.push(marking);
        }

        // Log summary if any markings were rejected
        if (invalidMarkings.length > 0) {
            console.warn(
                `⚠️ PortionMarkingManager: Rejected ${invalidMarkings.length} invalid portion marking(s):\n` +
                invalidMarkings.map(m => `   - ${m.marking}: ${m.reason}`).join('\n')
            );
        }

        // If no valid markings remain, reset to UNCLASSIFIED
        if (validMarkings.length === 0) {
            console.warn('⚠️ PortionMarkingManager: No valid portion markings found, resetting to UNCLASSIFIED');
            this.currentHighest = null;
            this.classificationManager.setClassificationLevel('UNCLASSIFIED');

            this.eventBus.emit('portion-marking:banner-updated', {
                level: 'UNCLASSIFIED',
                portionMarking: '(U)',
                weight: 0,
                timestamp: new Date().toISOString()
            });
            return;
        }

        // Get highest classification from VALID markings only
        const highest = this.classificationManager.getHighestClassification(validMarkings);

        if (!highest) {
            console.warn('⚠️ PortionMarkingManager: Could not determine highest classification');
            return;
        }

        // Cache the result
        this.currentHighest = highest;

        // Aggregate components from ALL valid portion markings (not just the highest)
        const parsedResults = validMarkings
            .map(m => this.classificationManager.parsePortionMarking(m))
            .filter(p => !!p);

        // Build overall sets
        const sciSet = new Set();
        const sapSet = new Set(); // SAP programs (added 2025-10-14)
        const dissemSet = new Set();
        const releaseSet = new Set();
        const caveatSet = new Set();
        const relCountries = new Set();

        // Helper to extract countries from a release authority string
        const collectCountries = (authority) => {
            if (!authority) return;
            let s = authority.trim();
            s = s.replace(/^RELTO\b/i, 'REL TO');
            s = s.replace(/^REL\s+(?!TO\b)/i, 'REL TO ');
            s = s.replace(/^REL\s+TO\s*/i, 'REL TO ');
            const idx = s.toUpperCase().indexOf('REL TO ');
            let list = idx > -1 ? s.substring(idx + 7) : s; // after 'REL TO '
            list.split(',').map(x => x.trim()).filter(Boolean).forEach(c => relCountries.add(c.toUpperCase()));
        };

        for (const p of parsedResults) {
            (p.sciCompartments || []).forEach(c => sciSet.add(c));
            (p.sapPrograms || []).forEach(c => sapSet.add(c)); // Aggregate SAP programs (added 2025-10-14)
            (p.disseminationControls || []).forEach(c => dissemSet.add(c));
            (p.releaseControls || []).forEach(c => releaseSet.add(c));
            (p.handlingCaveats || []).forEach(c => caveatSet.add(c));
            if (p.releaseAuthority) collectCountries(p.releaseAuthority);
        }

        // Clear previous state, then set overall level and apply aggregated components
        this.classificationManager.resetClassification();
        this.classificationManager.setClassificationLevel(highest.level);

        sciSet.forEach(c => this.classificationManager.addSCICompartment(c));

        // Add SAP programs (CRITICAL FIX 2025-10-14)
        // SAP programs must be aggregated from all portion markings, just like SCI compartments
        // Per DoDM 5200.01 Volume 2, SAP appears AFTER SCI, BEFORE dissemination controls
        sapSet.forEach(programId => this.classificationManager.addSAPProgram(programId));

        dissemSet.forEach(c => this.classificationManager.addDisseminationControl(c));

        // CRITICAL FIX (2025-10-14): When aggregating release controls from multiple portion markings,
        // we need to add ALL controls first, then resolve conflicts based on precedence.
        // The mutual exclusion logic in addReleaseControl() is designed for interactive UI selection,
        // NOT for aggregating portion markings from multiple fields.
        //
        // Problem: If we call addReleaseControl() for each control sequentially:
        //   1. addReleaseControl('NOFORN') - adds NOFORN
        //   2. addReleaseControl('FVEY') - removes NOFORN (mutual exclusion logic)
        //   Result: FVEY overrides NOFORN (WRONG!)
        //
        // Solution: Add all controls directly to the array, then resolve conflicts using precedence.
        //   This ensures NOFORN (precedence 100) takes precedence over FVEY (precedence 70).

        // Add all release controls directly to the array (bypass mutual exclusion logic)
        const releaseControls = Array.from(releaseSet);
        this.classificationManager.currentClassification.releaseControls = releaseControls;

        // Resolve conflicts using precedence rules (NOFORN precedence 100 > FVEY precedence 70)
        if (releaseControls.length > 1) {
            const resolvedControls = this.classificationManager.resolveIncompatibleControls(
                releaseControls,
                'release'
            );
            this.classificationManager.currentClassification.releaseControls = resolvedControls;

            // Log if conflicts were resolved
            if (resolvedControls.length < releaseControls.length) {
                const removed = releaseControls.filter(c => !resolvedControls.includes(c));
                console.log(
                    `🔒 Resolved release control conflicts in aggregated portion markings: ` +
                    `Kept ${resolvedControls.join('/')} (higher precedence), removed ${removed.join('/')}`
                );
            }
        }

        caveatSet.forEach(c => this.classificationManager.addHandlingCaveat(c));

        // CRITICAL FIX (2025-10-14): If NOFORN is present, clear release authority (REL TO countries)
        // NOFORN means "Not Releasable to Foreign Nationals" - it is fundamentally incompatible
        // with REL TO [countries] which authorizes release to specific foreign countries.
        // This must be done BEFORE setting release authority to prevent NOFORN + REL TO appearing together.
        const finalReleaseControls = this.classificationManager.currentClassification.releaseControls;
        const hasNOFORN = finalReleaseControls.includes('NOFORN');

        if (hasNOFORN && relCountries.size > 0) {
            // NOFORN is present - do NOT set release authority
            console.log(
                `🔒 NOFORN present - cleared release authority (REL TO ${Array.from(relCountries).join(', ')}). ` +
                `NOFORN prohibits all foreign release.`
            );
            // Ensure releaseAuthority is empty
            this.classificationManager.currentClassification.releaseAuthority = '';
        } else if (relCountries.size > 0) {
            // No NOFORN - set release authority normally
            const authority = 'REL TO ' + Array.from(relCountries).join(', ');
            this.classificationManager.setReleaseAuthority(authority);
        }

        // Trigger classification state update to regenerate banner text and portion marking
        this.classificationManager.updateClassificationState();

        // Emit event for UI updates
        this.eventBus.emit('portion-marking:banner-updated', {
            level: highest.level,
            portionMarking: highest.portionMarking,
            weight: highest.weight,
            validMarkingsCount: validMarkings.length,
            invalidMarkingsCount: invalidMarkings.length,
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Get all portion markings from all sections
     * 
     * Flattens the Map of section markings into a single array.
     * 
     * @returns {string[]} Array of all portion marking strings
     * 
     * @example
     * const allMarkings = portionMarkingManager.getAllPortionMarkings();
     * // Returns: ['(S)', '(S//NF)', '(TS//SI)', '(U)', '(C)']
     */
    getAllPortionMarkings() {
        const allMarkings = [];
        
        for (const markings of this.portionMarkings.values()) {
            allMarkings.push(...markings);
        }
        
        return allMarkings;
    }

    /**
     * Validate a portion marking format
     *
     * Checks if the portion marking follows DoDM 5200.45 January 2025 format:
     * - Must be enclosed in parentheses
     * - Must be uppercase
     * - Must use // as delimiter between major blocks
     * - Must have valid classification level
     *
     * NOFORN Mutual Exclusion Validation (Added 2025-10-14):
     * - Detects if NOFORN coexists with FVEY or RELTO
     * - Returns warning (not error) since ClassificationManager auto-resolves conflicts
     * - NOFORN takes precedence (more restrictive control)
     *
     * @param {string} marking - Portion marking to validate (e.g., '(TS//SI)')
     * @returns {Object} Validation result
     * @returns {boolean} result.valid - Whether the marking is valid
     * @returns {string} [result.error] - Error message if invalid
     * @returns {string} [result.warning] - Warning message if NOFORN conflict detected
     *
     * @example
     * portionMarkingManager.validatePortionMarking('(TS//SI)');
     * // Returns: { valid: true }
     *
     * @example
     * portionMarkingManager.validatePortionMarking('TS//SI');
     * // Returns: { valid: false, error: 'Portion marking must be enclosed in parentheses' }
     *
     * @example
     * portionMarkingManager.validatePortionMarking('(TS//SI//NOFORN//FVEY)');
     * // Returns: { valid: true, warning: 'NOFORN supersedes FVEY - FVEY will be removed' }
     */
    validatePortionMarking(marking) {
        // Check if marking is a string
        if (typeof marking !== 'string') {
            return {
                valid: false,
                error: 'Portion marking must be a string'
            };
        }

        // Check if marking is empty
        if (marking.trim() === '') {
            return {
                valid: false,
                error: 'Portion marking cannot be empty'
            };
        }

        // Check if marking is enclosed in parentheses
        if (!marking.startsWith('(') || !marking.endsWith(')')) {
            return {
                valid: false,
                error: 'Portion marking must be enclosed in parentheses'
            };
        }

        // Check if marking is uppercase
        if (marking !== marking.toUpperCase()) {
            return {
                valid: false,
                error: 'Portion marking must be uppercase'
            };
        }

        // Check if marking matches the regex pattern
        const regex = this.classificationManager.constructor.PORTION_MARKING_REGEX;
        if (!regex.test(marking)) {
            return {
                valid: false,
                error: 'Portion marking format is invalid (must follow DoDM 5200.45 format)'
            };
        }

        // Try to parse the marking
        const parsed = this.classificationManager.parsePortionMarking(marking);
        if (!parsed) {
            return {
                valid: false,
                error: 'Portion marking contains invalid classification level or controls'
            };
        }

        // NOFORN Mutual Exclusion Validation (Added 2025-10-14)
        // Check if NOFORN coexists with FVEY or RELTO
        const hasNOFORN = parsed.disseminationControls && parsed.disseminationControls.includes('NOFORN');
        const hasFVEY = parsed.releaseControls && parsed.releaseControls.includes('FVEY');
        const hasRELTO = parsed.releaseControls && parsed.releaseControls.includes('RELTO');

        if (hasNOFORN && (hasFVEY || hasRELTO)) {
            const conflictingControls = [];
            if (hasFVEY) conflictingControls.push('FVEY');
            if (hasRELTO) conflictingControls.push('RELTO');

            console.warn(
                `⚠️ Portion marking conflict detected: NOFORN + ${conflictingControls.join('/')} in "${marking}". ` +
                `NOFORN takes precedence (more restrictive) - ${conflictingControls.join('/')} will be removed.`
            );

            return {
                valid: true,
                warning: `NOFORN supersedes ${conflictingControls.join('/')} - ${conflictingControls.join('/')} will be removed`
            };
        }

        // All checks passed
        return {
            valid: true
        };
    }

    /**
     * Get portion markings for a specific section
     * 
     * @param {string} sectionId - Section identifier
     * @returns {string[]} Array of portion markings for the section
     * 
     * @example
     * const markings = portionMarkingManager.getPortionMarkings('situation');
     * // Returns: ['(S)', '(S//NF)', '(TS//SI)']
     */
    getPortionMarkings(sectionId) {
        return this.portionMarkings.get(sectionId) || [];
    }

    /**
     * Get current highest classification
     * 
     * @returns {Object|null} Highest classification object or null if no markings
     * 
     * @example
     * const highest = portionMarkingManager.getCurrentHighest();
     * // Returns: { level: 'TOP SECRET', portionMarking: '(TS//SI)', weight: 3.15 }
     */
    getCurrentHighest() {
        return this.currentHighest;
    }

    /**
     * Clear all portion markings
     *
     * Removes all stored portion markings and resets classification to UNCLASSIFIED.
     *
     * @example
     * portionMarkingManager.clearAll();
     */
    clearAll() {
        this.portionMarkings.clear();
        this.currentHighest = null;
        this.updateOverallClassification();

        this.eventBus.emit('portion-marking:cleared', {
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Check if a parsed portion marking has validation errors
     *
     * Uses ClassificationManager's hasValidationErrors() method to detect
     * critical security violations like SCI compartments on non-TOP SECRET.
     *
     * @param {Object} parsed - Parsed portion marking from parsePortionMarking()
     * @returns {boolean} True if validation errors exist, false otherwise
     *
     * Phase 5: Surgical Fix - Validation Error Handling
     *
     * @example
     * const parsed = classificationManager.parsePortionMarking('(C//SI//NOFORN)');
     * const hasErrors = portionMarkingManager.checkValidationErrors(parsed);
     * // Returns: true (SCI on CONFIDENTIAL is invalid)
     */
    checkValidationErrors(parsed) {
        if (!parsed) {
            return false;
        }

        return this.classificationManager.hasValidationErrors(parsed);
    }

    /**
     * Emit validation error event to event bus
     *
     * Notifies UI components about validation errors so they can display
     * appropriate error messages to users.
     *
     * @param {string} portionMarking - The invalid portion marking string
     * @param {Object} parsed - Parsed portion marking object
     * @param {string} sectionId - Section ID where the error occurred (optional)
     *
     * @fires classification:validation-error
     *
     * Phase 5: Surgical Fix - Validation Error Handling
     *
     * @example
     * portionMarkingManager.emitValidationError('(C//SI//NOFORN)', parsed, 'situation');
     */
    emitValidationError(portionMarking, parsed, sectionId = null) {
        const errorMessage = this.classificationManager.getValidationErrorMessage(parsed);

        const error = {
            type: 'PORTION_MARKING_VALIDATION_ERROR',
            severity: 'CRITICAL',
            message: '⚠️ Invalid Portion Marking Detected',
            portionMarking: portionMarking,
            sectionId: sectionId,
            details: errorMessage,
            timestamp: new Date().toISOString()
        };

        this.eventBus.emit('classification:validation-error', error);

        return error;
    }

    /**
     * Log validation error with appropriate severity
     *
     * Logs validation errors to console with detailed information for debugging.
     *
     * @param {string} portionMarking - The invalid portion marking string
     * @param {Object} error - Error object from emitValidationError()
     * @param {string} sectionId - Section ID where the error occurred (optional)
     *
     * Phase 5: Surgical Fix - Validation Error Handling
     *
     * @example
     * portionMarkingManager.logValidationError('(C//SI//NOFORN)', error, 'situation');
     */
    logValidationError(portionMarking, error, sectionId = null) {
        const sectionInfo = sectionId ? ` in section "${sectionId}"` : '';

        console.error(
            `🔴 [PortionMarkingManager] CRITICAL VALIDATION ERROR${sectionInfo}:\n` +
            `   Portion Marking: ${portionMarking}\n` +
            `   Error: ${error.details}\n` +
            `   Timestamp: ${error.timestamp}`
        );
    }
}

