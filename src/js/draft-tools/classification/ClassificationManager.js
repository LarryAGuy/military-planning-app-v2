/**
 * Comprehensive DoD/IC Classification Manager
 * Implements complete DoD/Intelligence Community classification system
 * Based on OPORD Public implementation with separated control architecture
 * 
 * @version 2.0.0
 * @date 2025-10-06
 */

export class ClassificationManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        
        // Current classification state with separated controls
        this.currentClassification = {
            level: 'UNCLASSIFIED',
            disseminationControls: [],
            sciCompartments: [],
            sapPrograms: [], // SAP program identifiers (e.g., ['BP', 'ABC', 'DEF'])
            releaseControls: [],
            handlingCaveats: [],
            releaseAuthority: '',
            portionMarking: '(U)',
            bannerText: 'UNCLASSIFIED',
            networkAuthorization: 'UNCLASSIFIED'
        };
        
        // Classification Levels (5 levels including CUI)
        // Official DoD Colors per DoD Manual 5200.01
        this.classificationLevels = {
            'UNCLASSIFIED': {
                rank: 0,
                abbreviation: 'U',
                backgroundColor: '#007A33', // Pantone 356 C (Official DoD Green)
                textColor: '#ffffff',
                networkAuth: ['UNCLASSIFIED', 'CUI', 'CONFIDENTIAL', 'SECRET', 'TOP_SECRET'],
                description: 'Information that does not meet the standards for classification'
            },
            'CUI': {
                rank: 0.5,
                abbreviation: 'CUI',
                backgroundColor: '#502B85', // Official DoD Purple for CUI
                textColor: '#ffffff',
                networkAuth: ['CUI', 'CONFIDENTIAL', 'SECRET', 'TOP_SECRET'],
                description: 'Controlled Unclassified Information'
            },
            'CONFIDENTIAL': {
                rank: 1,
                abbreviation: 'C',
                backgroundColor: '#0033A0', // Pantone 286 C (Official DoD Blue)
                textColor: '#ffffff',
                networkAuth: ['CONFIDENTIAL', 'SECRET', 'TOP_SECRET'],
                description: 'Information that could cause damage to national security'
            },
            'SECRET': {
                rank: 2,
                abbreviation: 'S',
                backgroundColor: '#C8102E', // Pantone 186 C (Official DoD Red)
                textColor: '#ffffff',
                networkAuth: ['SECRET', 'TOP_SECRET'],
                description: 'Information that could cause serious damage to national security'
            },
            'TOP SECRET': {
                rank: 3,
                abbreviation: 'TS',
                backgroundColor: '#FF671F', // Pantone 165 C (Official DoD Orange)
                textColor: '#000000',
                networkAuth: ['TOP_SECRET'],
                description: 'Information that could cause exceptionally grave damage to national security'
            }
        };
        
        // Dissemination Controls (How information is handled)
        // NOTE: SAP (Special Access Program) has been REMOVED from dissemination controls
        // SAP is now a separate control type with program identifiers (see sapPrograms array)
        // SAP programs are managed via addSAPProgram() and removeSAPProgram() methods
        this.disseminationControls = {
            'SCI': {
                name: 'Sensitive Compartmented Information',
                abbreviation: 'SCI',
                precedence: 2,
                applicableTo: ['TOP SECRET'],
                hasCompartments: true,
                description: 'Information concerning intelligence sources and methods'
            },
            'ORCON': {
                name: 'Originator Controlled',
                abbreviation: 'OC',
                precedence: 12,
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Dissemination and extraction controlled by originator'
            },
            'IMCON': {
                name: 'Imagery Intelligence Controlled',
                abbreviation: 'IMCON',
                precedence: 13,
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Imagery-derived information requiring special controls'
            },
            'WINTEL': {
                name: 'Warning Notice Intelligence Sources',
                abbreviation: 'WINTEL',
                precedence: 14,
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Intelligence information requiring warning notice'
            },
            'PROPIN': {
                name: 'Proprietary Information',
                abbreviation: 'PROPIN',
                precedence: 7,
                applicableTo: ['UNCLASSIFIED', 'CUI', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Proprietary information involved'
            }
        };
        
        // SCI Compartments (Sub-caveats of SCI)
        //
        // CRITICAL: SCI COMPARTMENT ORDERING RULES (per CAPCO Register and IC Marking Manuals)
        // =====================================================================================
        // SCI compartments MUST be listed in ALPHABETICAL ORDER by their abbreviation.
        // The "precedence" values below represent DISPLAY ORDER (alphabetical), NOT sensitivity hierarchy.
        // There is NO formal hierarchy of sensitivity or protection level among SCI controls.
        // All SCI compartments are equivalent in category and require specific access approvals.
        //
        // CORRECT ALPHABETICAL ORDER:
        // 1. HCS (H - alphabetically first)
        // 2. SI (S - alphabetically second)
        // 3. G (Gamma - sub-compartment of SI, always displayed as "SI-G")
        // 4. TK (T - alphabetically third)
        // 5. KDK, KLONDIKE, VRK (follow alphabetically after T)
        //
        // SPECIAL RULE - GAMMA (G) COUPLING:
        // G (Gamma) is a sub-compartment of SI and must ALWAYS be displayed as "SI-G" (never standalone "G").
        // When G is selected, SI is automatically added (enforced in addSCICompartment() method).
        // When SI is removed, G is automatically removed (enforced in removeSCICompartment() method).
        //
        // EXAMPLES OF CORRECT ORDERED MARKINGS:
        // - TOP SECRET//HCS/TK (H before T)
        // - TOP SECRET//SI/TK (S before T)
        // - TOP SECRET//HCS/SI-G/TK (H, then S with sub-G, then T)
        // - TOP SECRET//HCS/SI/TK (alphabetical: H, S, T)
        //
        this.sciCompartments = {
            'HCS': {
                name: 'HUMINT Control System',
                abbreviation: 'HCS',
                precedence: 1, // H - alphabetically first
                applicableTo: ['TOP SECRET'],
                description: 'Human intelligence information'
            },
            'SI': {
                name: 'Special Intelligence',
                abbreviation: 'SI',
                precedence: 2, // S - alphabetically second
                applicableTo: ['TOP SECRET'],
                description: 'Special Intelligence information'
            },
            'G': {
                name: 'Gamma',
                abbreviation: 'G',
                precedence: 3, // G - sub-compartment of SI (displayed as SI-G)
                applicableTo: ['TOP SECRET'],
                description: 'Special Intelligence - Gamma (always displayed as SI-G)',
                requiresSI: true // Special flag indicating G requires SI
            },
            'TK': {
                name: 'Talent Keyhole',
                abbreviation: 'TK',
                precedence: 4, // T - alphabetically third
                applicableTo: ['TOP SECRET'],
                description: 'Satellite imagery intelligence'
            }
        };
        
        // Release Controls (Who can access information)
        this.releaseControls = {
            'NOFORN': {
                name: 'Not Releasable to Foreign Nationals',
                abbreviation: 'NF',
                precedence: 5,
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Information that may not be released to foreign nationals'
            },
            'NOCONTRACTOR': {
                name: 'Not Releasable to Contractors',
                abbreviation: 'NC',
                precedence: 6,
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Information that may not be released to contractors'
            },
            'RELTO': {
                name: 'Releasable To',
                abbreviation: 'REL',
                precedence: 8,
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                requiresCountries: true,
                description: 'Information releasable to specific countries'
            },
            'FVEY': {
                name: 'Five Eyes',
                abbreviation: 'FVEY',
                precedence: 7,
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Releasable to Five Eyes (USA, GBR, CAN, AUS, NZL)'
            },
            'RELIDO': {
                name: 'Releasable by Information Disclosure Official',
                abbreviation: 'RELIDO',
                precedence: 9,
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'Releasable by Information Disclosure Official'
            }
        };
        
        // Handling Caveats (Special handling requirements)
        this.handlingCaveats = {
            'FOUO': {
                name: 'For Official Use Only',
                abbreviation: 'FOUO',
                precedence: 11,
                applicableTo: ['UNCLASSIFIED'],
                description: 'Unclassified information that requires protection'
            },
            'SBU': {
                name: 'Sensitive But Unclassified',
                abbreviation: 'SBU',
                precedence: 9,
                applicableTo: ['UNCLASSIFIED'],
                description: 'Sensitive but unclassified information'
            },
            'LES': {
                name: 'Law Enforcement Sensitive',
                abbreviation: 'LES',
                precedence: 10,
                applicableTo: ['UNCLASSIFIED'],
                description: 'Law enforcement sensitive information'
            },
            'EYES ONLY': {
                name: 'Eyes Only',
                abbreviation: 'EO',
                precedence: 15,
                applicableTo: ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'],
                description: 'For addressee eyes only'
            }
        };
        
        // Release Authorities (for RELTO)
        this.releaseAuthorities = [
            'REL TO USA',
            'REL TO USA, AUS',
            'REL TO USA, AUS, CAN',
            'REL TO USA, AUS, CAN, GBR',
            'REL TO USA, AUS, CAN, GBR, NZL',
            'REL TO NATO',
            'REL TO FVEY'
        ];
        
        // Network authorization levels
        this.networkAuthLevels = {
            'UNCLASSIFIED': ['UNCLASSIFIED'],
            'CUI': ['UNCLASSIFIED', 'CUI'],
            'CONFIDENTIAL': ['UNCLASSIFIED', 'CUI', 'CONFIDENTIAL'],
            'SECRET': ['UNCLASSIFIED', 'CUI', 'CONFIDENTIAL', 'SECRET'],
            'TOP_SECRET': ['UNCLASSIFIED', 'CUI', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET']
        };
    }
    
    /**
     * Set classification level
     * @param {string} level - Classification level
     */
    setClassificationLevel(level) {
        if (!this.classificationLevels[level]) {
            console.error(`Invalid classification level: ${level}`);
            return;
        }
        
        this.currentClassification.level = level;
        this.updateClassificationState();
    }
    
    /**
     * Add dissemination control with validation
     *
     * Validates control incompatibilities per DoDM 5200.01 Volume 2
     * ORCON and IMCON are mutually exclusive - ORCON takes precedence
     *
     * @param {string} control - Dissemination control name
     * @returns {Object} Result object with success status and error details
     * @returns {boolean} result.success - True if control was added, false if validation failed
     * @returns {Object} [result.error] - Error object if validation failed
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     *
     * @example
     * const result = manager.addDisseminationControl('ORCON');
     * if (!result.success) {
     *     alert(result.error.message);
     * }
     */
    addDisseminationControl(control) {
        // Validate control exists
        if (!this.disseminationControls[control]) {
            console.error(`Invalid dissemination control: ${control}`);
            return {
                success: false,
                error: {
                    type: 'INVALID_CONTROL',
                    severity: 'ERROR',
                    message: `Invalid dissemination control: ${control}`
                }
            };
        }

        // Check if already present
        if (this.currentClassification.disseminationControls.includes(control)) {
            return { success: true }; // Already present, no action needed
        }

        // Check for incompatibilities with existing controls
        const testState = {
            ...this.currentClassification,
            disseminationControls: [...this.currentClassification.disseminationControls, control]
        };

        const incompatibilityCheck = this.checkControlIncompatibilities(testState);

        if (incompatibilityCheck.hasErrors) {
            const error = incompatibilityCheck.errors[0];

            // Emit event for UI to display
            this.eventBus.emit('classification:validation-error', error);

            console.warn(
                `[ClassificationManager] Control incompatibility detected: ${error.message}. ` +
                `Per DoDM 5200.01 Volume 2, incompatible controls will be resolved by precedence.`
            );

            // For dissemination controls, we auto-resolve by removing lower precedence
            // This matches the behavior in parsePortionMarking()
            const resolvedControls = this.resolveIncompatibleControls(
                testState.disseminationControls,
                'dissemination'
            );

            // Update with resolved controls
            this.currentClassification.disseminationControls = resolvedControls;
            this.updateClassificationState();

            return {
                success: true,
                warning: error.message,
                resolved: true
            };
        }

        // Valid - add the control
        this.currentClassification.disseminationControls.push(control);
        this.updateClassificationState();

        return { success: true };
    }
    
    /**
     * Remove dissemination control
     * @param {string} control - Dissemination control name
     */
    removeDisseminationControl(control) {
        const index = this.currentClassification.disseminationControls.indexOf(control);
        if (index > -1) {
            this.currentClassification.disseminationControls.splice(index, 1);

            // SCI dissemination control and SCI compartments are independent
            // Removing SCI does NOT clear SCI compartments
            // Compartments (SI, G, TK, HCS) persist regardless of SCI dissemination state

            this.updateClassificationState();
        }
    }

    /**
     * Add SAP (Special Access Program) program identifier
     * SAP programs are formatted as SAR-[program-id] in banner/portion markings
     *
     * CRITICAL: SAP is NOT a dissemination control - it's a separate control type
     * that requires program-specific identifiers per DoDM 5200.01 Volume 2
     *
     * NOTE: Real SAP program names are CLASSIFIED. Examples shown are fictional placeholders.
     *
     * @param {string} programId - SAP program identifier (e.g., 'XXX', 'EXAMPLE1', 'EXAMPLE2')
     * @returns {Object} Result object with success status and error details
     * @returns {boolean} result.success - True if program was added, false if validation failed
     * @returns {Object} [result.error] - Error object if validation failed
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     * Banner Format: CLASSIFICATION//SCI//SAP//DISSEM//RELEASE
     * Example: TOP SECRET//SI/TK//SAR-[PROGRAM-ID]//ORCON//NOFORN
     *
     * @example
     * const result = manager.addSAPProgram('EXAMPLE1'); // Fictional placeholder
     * if (!result.success) {
     *     alert(result.error.message);
     * }
     */
    addSAPProgram(programId) {
        // Validate input
        if (!programId || typeof programId !== 'string') {
            console.error('Invalid SAP program ID: must be a non-empty string');
            return {
                success: false,
                error: {
                    type: 'INVALID_FORMAT',
                    severity: 'ERROR',
                    message: 'SAP program ID must be a non-empty string'
                }
            };
        }

        // Normalize to uppercase and trim
        const normalized = programId.toUpperCase().trim();

        // Validate format (alphanumeric only, 1-10 characters)
        if (!/^[A-Z0-9]{1,10}$/.test(normalized)) {
            console.error(`Invalid SAP program ID format: ${programId}`);
            return {
                success: false,
                error: {
                    type: 'INVALID_FORMAT',
                    severity: 'ERROR',
                    message: 'SAP program ID must contain only letters and numbers (1-10 characters)'
                }
            };
        }

        // Validate classification level
        // SAP can only be applied to CONFIDENTIAL, SECRET, or TOP SECRET
        const level = this.currentClassification.level;
        if (!['CONFIDENTIAL', 'SECRET', 'TOP SECRET'].includes(level)) {
            console.error(`Cannot add SAP to ${level} classification`);
            return {
                success: false,
                error: {
                    type: 'INVALID_LEVEL',
                    severity: 'ERROR',
                    message: `SAP requires CONFIDENTIAL, SECRET, or TOP SECRET classification (current: ${level})`
                }
            };
        }

        // Check if already present (idempotent)
        if (this.currentClassification.sapPrograms.includes(normalized)) {
            return { success: true }; // Already present, no action needed
        }

        // Add program and update state
        this.currentClassification.sapPrograms.push(normalized);
        this.updateClassificationState();

        console.log(`✅ SAP program added: SAR-${normalized}`);
        return { success: true };
    }

    /**
     * Remove SAP program identifier
     * @param {string} programId - SAP program identifier to remove
     */
    removeSAPProgram(programId) {
        if (!programId || typeof programId !== 'string') {
            return;
        }

        const normalized = programId.toUpperCase().trim();
        const index = this.currentClassification.sapPrograms.indexOf(normalized);

        if (index > -1) {
            this.currentClassification.sapPrograms.splice(index, 1);
            this.updateClassificationState();
            console.log(`✅ SAP program removed: SAR-${normalized}`);
        }
    }

    /**
     * Get current SAP programs
     * @returns {Array<string>} Array of SAP program identifiers
     */
    getSAPPrograms() {
        return [...this.currentClassification.sapPrograms];
    }

    /**
     * Add SCI compartment with validation
     * Independent selection - does NOT automatically add SCI dissemination control
     * Special case: G (Gamma) automatically adds SI since G is always used as "SI-G"
     *
     * CRITICAL SECURITY: Validates SCI network authorization per DoDM 5200.01 Volume 2
     * SCI compartments can ONLY be used with TOP SECRET classification
     *
     * @param {string} compartment - SCI compartment name
     * @returns {Object} Result object with success status and error details
     * @returns {boolean} result.success - True if compartment was added, false if validation failed
     * @returns {Object} [result.error] - Error object if validation failed
     *
     * Reference: DoDM 5200.01 Volume 2, Network Authorization Matrix
     *
     * @example
     * const result = manager.addSCICompartment('SI');
     * if (!result.success) {
     *     alert(result.error.message);
     * }
     */
    addSCICompartment(compartment) {
        // Validate compartment exists
        if (!this.sciCompartments[compartment]) {
            console.error(`Invalid SCI compartment: ${compartment}`);
            return {
                success: false,
                error: {
                    type: 'INVALID_COMPARTMENT',
                    severity: 'ERROR',
                    message: `Invalid SCI compartment: ${compartment}`
                }
            };
        }

        // CRITICAL SECURITY: Validate SCI network authorization
        // SCI compartments can ONLY be used with TOP SECRET classification
        const currentLevel = this.currentClassification.level;
        if (currentLevel !== 'TOP SECRET') {
            const error = this.createSCINetworkAuthorizationError(compartment, currentLevel);

            // Emit event for UI to display
            this.eventBus.emit('classification:validation-error', error);

            console.error(
                `[ClassificationManager] CRITICAL SECURITY VIOLATION: ` +
                `SCI compartment (${compartment}) on ${currentLevel}. ` +
                `SCI requires TOP SECRET and JWICS/NSANET (.ic.gov) network. ` +
                `Per DoDM 5200.01 Volume 2.`
            );

            return { success: false, error: error };
        }

        // Check if already present
        if (this.currentClassification.sciCompartments.includes(compartment)) {
            return { success: true }; // Already present, no action needed
        }

        // Valid - add the compartment
        this.currentClassification.sciCompartments.push(compartment);

        // Special case: G (Gamma) requires SI
        // Automatically add SI if G is selected and SI is not already present
        if (compartment === 'G' && !this.currentClassification.sciCompartments.includes('SI')) {
            this.currentClassification.sciCompartments.push('SI');
            console.log('🔗 Auto-added SI (required for Gamma)');
        }

        this.updateClassificationState();

        return { success: true };
    }

    /**
     * Remove SCI compartment
     * Independent selection - does NOT automatically remove SCI dissemination control
     * Special case: Removing SI automatically removes G since G requires SI
     * @param {string} compartment - SCI compartment name
     */
    removeSCICompartment(compartment) {
        const index = this.currentClassification.sciCompartments.indexOf(compartment);
        if (index > -1) {
            this.currentClassification.sciCompartments.splice(index, 1);

            // Special case: If removing SI, also remove G (since G requires SI)
            if (compartment === 'SI' && this.currentClassification.sciCompartments.includes('G')) {
                const gIndex = this.currentClassification.sciCompartments.indexOf('G');
                if (gIndex > -1) {
                    this.currentClassification.sciCompartments.splice(gIndex, 1);
                    console.log('🔗 Auto-removed G (requires SI)');
                }
            }

            // Independent selection - do NOT automatically remove SCI dissemination control
            // User has full control over both SCI and compartments
            this.updateClassificationState();
        }
    }

    /**
     * Add release control with validation
     *
     * Validates control incompatibilities per DoDM 5200.01 Volume 2
     * NOFORN, FVEY, and REL TO are mutually exclusive with precedence rules:
     * - NOFORN (precedence 100) > REL TO (80) > FVEY (70)
     *
     * NOFORN Mutual Exclusion Logic (Enhanced 2025-10-14):
     * - If NOFORN is selected: Automatically remove FVEY, RELTO, and clear releaseAuthority
     * - If FVEY or RELTO is selected: Automatically remove NOFORN
     * - Explicit logging for debugging and user feedback
     *
     * @param {string} control - Release control name
     * @returns {Object} Result object with success status and error details
     * @returns {boolean} result.success - True if control was added, false if validation failed
     * @returns {Object} [result.error] - Error object if validation failed
     * @returns {string} [result.warning] - Warning message if auto-resolved
     * @returns {boolean} [result.resolved] - True if incompatibility was auto-resolved
     * @returns {Array<string>} [result.removedControls] - Controls removed due to mutual exclusion
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     *
     * @example
     * const result = manager.addReleaseControl('NOFORN');
     * if (!result.success) {
     *     alert(result.error.message);
     * }
     */
    addReleaseControl(control) {
        // Validate control exists
        if (!this.releaseControls[control]) {
            console.error(`Invalid release control: ${control}`);
            return {
                success: false,
                error: {
                    type: 'INVALID_CONTROL',
                    severity: 'ERROR',
                    message: `Invalid release control: ${control}`
                }
            };
        }

        // Check if already present
        if (this.currentClassification.releaseControls.includes(control)) {
            return { success: true }; // Already present, no action needed
        }

        // NOFORN Mutual Exclusion Logic (Enhanced 2025-10-14)
        // Explicit handling BEFORE incompatibility check for better logging and UX
        let removedControls = [];
        let clearedReleaseAuthority = false;

        if (control === 'NOFORN') {
            // NOFORN supersedes all other release controls
            const conflictingControls = this.currentClassification.releaseControls.filter(c =>
                c === 'FVEY' || c === 'RELTO'
            );

            if (conflictingControls.length > 0) {
                // Remove FVEY and RELTO
                this.currentClassification.releaseControls =
                    this.currentClassification.releaseControls.filter(c => c !== 'FVEY' && c !== 'RELTO');
                removedControls = conflictingControls;

                console.log(`🔒 NOFORN selected - removed conflicting release controls: ${conflictingControls.join(', ')}`);
            }

            // Clear release authority (REL TO countries)
            if (this.currentClassification.releaseAuthority && this.currentClassification.releaseAuthority.trim() !== '') {
                console.log(`🔒 NOFORN selected - cleared release authority: ${this.currentClassification.releaseAuthority}`);
                this.currentClassification.releaseAuthority = '';
                clearedReleaseAuthority = true;
            }
        } else if (control === 'FVEY' || control === 'RELTO') {
            // FVEY or RELTO selected - remove NOFORN if present
            if (this.currentClassification.releaseControls.includes('NOFORN')) {
                this.currentClassification.releaseControls =
                    this.currentClassification.releaseControls.filter(c => c !== 'NOFORN');
                removedControls = ['NOFORN'];

                console.log(`🔒 ${control} selected - removed NOFORN (mutual exclusion)`);
            }
        }

        // Check for incompatibilities with existing controls
        const testState = {
            ...this.currentClassification,
            releaseControls: [...this.currentClassification.releaseControls, control]
        };

        const incompatibilityCheck = this.checkControlIncompatibilities(testState);

        if (incompatibilityCheck.hasErrors) {
            const error = incompatibilityCheck.errors[0];

            // Emit event for UI to display
            this.eventBus.emit('classification:validation-error', error);

            console.warn(
                `[ClassificationManager] Control incompatibility detected: ${error.message}. ` +
                `Per DoDM 5200.01 Volume 2, incompatible controls will be resolved by precedence.`
            );

            // For release controls, we auto-resolve by removing lower precedence
            // This matches the behavior in parsePortionMarking()
            const resolvedControls = this.resolveIncompatibleControls(
                testState.releaseControls,
                'release'
            );

            // Update with resolved controls
            this.currentClassification.releaseControls = resolvedControls;
            this.updateClassificationState();

            return {
                success: true,
                warning: error.message,
                resolved: true,
                removedControls: removedControls,
                clearedReleaseAuthority: clearedReleaseAuthority
            };
        }

        // Valid - add the control
        this.currentClassification.releaseControls.push(control);
        this.updateClassificationState();

        return {
            success: true,
            removedControls: removedControls,
            clearedReleaseAuthority: clearedReleaseAuthority
        };
    }

    /**
     * Remove release control
     * @param {string} control - Release control name
     */
    removeReleaseControl(control) {
        const index = this.currentClassification.releaseControls.indexOf(control);
        if (index > -1) {
            this.currentClassification.releaseControls.splice(index, 1);
            this.updateClassificationState();
        }
    }

    /**
     * Check if NOFORN is currently selected
     * Used by UI components to disable conflicting release control options
     *
     * @returns {boolean} True if NOFORN is selected
     *
     * Added 2025-10-14 for NOFORN mutual exclusion UI support
     *
     * @example
     * if (classificationManager.hasNOFORN()) {
     *     // Disable FVEY and RELTO checkboxes
     * }
     */
    hasNOFORN() {
        return this.currentClassification.releaseControls.includes('NOFORN');
    }

    /**
     * Check if FVEY or RELTO is currently selected
     * Used by UI components to disable NOFORN option
     *
     * @returns {boolean} True if FVEY or RELTO is selected
     *
     * Added 2025-10-14 for NOFORN mutual exclusion UI support
     *
     * @example
     * if (classificationManager.hasForeignRelease()) {
     *     // Disable NOFORN checkbox
     * }
     */
    hasForeignRelease() {
        return this.currentClassification.releaseControls.includes('FVEY') ||
               this.currentClassification.releaseControls.includes('RELTO');
    }

    /**
     * Add handling caveat with validation
     *
     * Validates caveat applicability per DoDM 5200.01 Volume 2
     * FOUO, SBU, and LES only apply to UNCLASSIFIED classification
     * EYES ONLY can apply to any classification level
     *
     * @param {string} caveat - Handling caveat name
     * @returns {Object} Result object with success status and error details
     * @returns {boolean} result.success - True if caveat was added, false if validation failed
     * @returns {Object} [result.error] - Error object if validation failed
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     *
     * @example
     * const result = manager.addHandlingCaveat('FOUO');
     * if (!result.success) {
     *     alert(result.error.message);
     * }
     */
    addHandlingCaveat(caveat) {
        // Validate caveat exists
        if (!this.handlingCaveats[caveat]) {
            console.error(`Invalid handling caveat: ${caveat}`);
            return {
                success: false,
                error: {
                    type: 'INVALID_CAVEAT',
                    severity: 'ERROR',
                    message: `Invalid handling caveat: ${caveat}`
                }
            };
        }

        // Check if already present
        if (this.currentClassification.handlingCaveats.includes(caveat)) {
            return { success: true }; // Already present, no action needed
        }

        // Validate applicability to current classification level
        const currentLevel = this.currentClassification.level;
        const caveatInfo = this.handlingCaveats[caveat];

        if (!caveatInfo.applicableTo.includes(currentLevel)) {
            const error = {
                type: 'HANDLING_CAVEAT_APPLICABILITY_VIOLATION',
                severity: 'WARNING',
                message: `⚠️ Handling Caveat Applicability Issue`,
                details: `${caveat} can only be used with ${caveatInfo.applicableTo.join(', ')} classification.`,
                current: `${currentLevel} with ${caveat} caveat`,
                required: `${caveatInfo.applicableTo.join(' or ')} with ${caveat} caveat`,
                remediation: [
                    `Change classification level to ${caveatInfo.applicableTo.join(' or ')}, or`,
                    'Remove the handling caveat'
                ],
                reference: 'DoDM 5200.01 Volume 2, Handling Caveat Applicability'
            };

            // Emit event for UI to display
            this.eventBus.emit('classification:validation-error', error);

            console.warn(
                `[ClassificationManager] Handling caveat applicability issue: ${caveat} on ${currentLevel}. ` +
                `${caveat} only applies to ${caveatInfo.applicableTo.join(', ')}. ` +
                `Per DoDM 5200.01 Volume 2.`
            );

            return { success: false, error: error };
        }

        // Valid - add the caveat
        this.currentClassification.handlingCaveats.push(caveat);
        this.updateClassificationState();

        return { success: true };
    }

    /**
     * Remove handling caveat
     * @param {string} caveat - Handling caveat name
     */
    removeHandlingCaveat(caveat) {
        const index = this.currentClassification.handlingCaveats.indexOf(caveat);
        if (index > -1) {
            this.currentClassification.handlingCaveats.splice(index, 1);
            this.updateClassificationState();
        }
    }

    /**
     * Set release authority
     * @param {string} authority - Release authority string
     */
    setReleaseAuthority(authority) {
        this.currentClassification.releaseAuthority = authority;
        this.updateClassificationState();
    }

    /**
     * Order controls by precedence
     *
     * For SCI compartments: Precedence values represent ALPHABETICAL ORDER by abbreviation,
     * NOT sensitivity hierarchy. This ensures consistent display across DoD/IC systems per
     * CAPCO Register and IC Marking Manuals.
     *
     * For other controls: Precedence values represent display order per DoD/IC standards.
     *
     * @param {Array<string>} controls - Array of control names
     * @param {Object} controlsObject - Object containing control definitions
     * @returns {Array<string>} Ordered array of controls
     *
     * @example
     * // SCI compartments ordered alphabetically: HCS (1), SI (2), G (3), TK (4)
     * orderByPrecedence(['TK', 'HCS', 'SI'], this.sciCompartments)
     * // Returns: ['HCS', 'SI', 'TK'] (alphabetical: H, S, T)
     */
    orderByPrecedence(controls, controlsObject) {
        return controls.sort((a, b) => {
            const precA = controlsObject[a]?.precedence || 999;
            const precB = controlsObject[b]?.precedence || 999;
            return precA - precB;
        });
    }

    /**
     * Generate banner text from current classification state
     *
     * Format: LEVEL//SCI1/SCI2//DISSEM1/DISSEM2//RELEASE1/RELEASE2//HANDLING1/HANDLING2
     *
     * Delimiter Rules (per DoDM 5200.45 January 2025):
     * - Double forward slash (//) separates MAJOR component blocks
     * - Single forward slash (/) separates items WITHIN a component block
     *
     * Component Blocks (in order):
     * 1. Classification Level
     * 2. SCI Compartments (SI, G, TK, HCS)
     * 3. Dissemination Controls (SAP, SCI, ORCON, IMCON, WINTEL, PROPIN)
     * 4. Release Controls (NOFORN, NOCONTRACTOR, RELTO)
     * 5. Handling Caveats (FOUO, SBU, LES, EYES ONLY)
     *
     * @returns {string} Banner text
     */
    generateBannerText() {
        const { level, disseminationControls, sciCompartments, releaseControls, handlingCaveats, releaseAuthority } = this.currentClassification;

        let banner = level;

        // Add SCI compartments as a block (separated by / within block)
        // SCI compartments come BEFORE dissemination controls in DoD format
        //
        // ORDERING: SCI compartments are sorted ALPHABETICALLY by abbreviation (per CAPCO Register)
        // This is NOT a sensitivity hierarchy - all SCI compartments are equivalent in category
        // Correct alphabetical order: HCS (H), SI (S), TK (T)
        //
        // SPECIAL HANDLING - GAMMA (G) COUPLING:
        // G (Gamma) is a sub-compartment of SI and must be displayed as "SI-G" (not "SI/G")
        // When both SI and G are present, they are combined into a single "SI-G" token
        if (sciCompartments.length > 0) {
            const orderedCompartments = this.orderByPrecedence([...sciCompartments], this.sciCompartments);

            // Handle SI-G coupling: If both SI and G are present, display as "SI-G"
            const hasSI = orderedCompartments.includes('SI');
            const hasG = orderedCompartments.includes('G');

            let displayCompartments = [];

            if (hasSI && hasG) {
                // Both SI and G present - display as "SI-G" (single hyphenated token)
                for (const comp of orderedCompartments) {
                    if (comp === 'SI') {
                        displayCompartments.push('SI-G'); // Combine SI and G
                    } else if (comp === 'G') {
                        // Skip G - already combined with SI above
                        continue;
                    } else {
                        displayCompartments.push(comp);
                    }
                }
            } else if (hasG && !hasSI) {
                // G present without SI - this should not happen due to coupling logic
                // Display as "SI-G" and log warning
                console.warn(
                    '⚠️ [ClassificationManager] Inconsistent state: G present without SI. ' +
                    'Displaying as "SI-G" (G requires SI per DoD/IC standards).'
                );
                for (const comp of orderedCompartments) {
                    if (comp === 'G') {
                        displayCompartments.push('SI-G');
                    } else {
                        displayCompartments.push(comp);
                    }
                }
            } else {
                // No G present, or only SI present - display compartments as-is
                displayCompartments = orderedCompartments;
            }

            banner += '//' + displayCompartments.join('/');
        }

        // Add SAP programs as a block (separated by / within block)
        // SAP comes AFTER SCI compartments, BEFORE dissemination controls
        // Per DoDM 5200.01 Volume 2: CLASSIFICATION//SCI//SAP//DISSEM//RELEASE
        //
        // Format: SAR-[program-id] where [program-id] is the program identifier
        // Multiple SAPs are alphabetically ordered: SAR-EXAMPLE1/SAR-EXAMPLE2
        // NOTE: Real SAP program names are CLASSIFIED. Examples are fictional placeholders.
        if (this.currentClassification.sapPrograms && this.currentClassification.sapPrograms.length > 0) {
            // Sort alphabetically
            const sortedPrograms = [...this.currentClassification.sapPrograms].sort();
            // Format as SAR-[id]
            const formattedPrograms = sortedPrograms.map(id => `SAR-${id}`);
            banner += '//' + formattedPrograms.join('/');
        }

        // Add dissemination controls as a block (separated by / within block)
        // NOTE: SAP has been removed from dissemination controls (now separate control type)
        if (disseminationControls.length > 0) {
            const ordered = this.orderByPrecedence([...disseminationControls], this.disseminationControls);
            banner += '//' + ordered.join('/');
        }

        // Add release controls as a block (separated by / within block)
        if (releaseControls.length > 0) {
            const ordered = this.orderByPrecedence([...releaseControls], this.releaseControls);
            // If we have a release authority (REL TO ...), do not redundantly include RELTO token
            const filtered = (this.currentClassification.releaseAuthority && this.currentClassification.releaseAuthority.trim() !== '')
                ? ordered.filter(c => c !== 'RELTO')
                : ordered;
            if (filtered.length > 0) {
                banner += '//' + filtered.join('/');
            }
        }

        // Add handling caveats as a block (separated by / within block)
        if (handlingCaveats.length > 0) {
            const ordered = this.orderByPrecedence([...handlingCaveats], this.handlingCaveats);
            banner += '//' + ordered.join('/');
        }

        // Add release authority (RELTO countries)
        // CRITICAL SAFEGUARD (2025-10-14): Do NOT add release authority if NOFORN is present
        // NOFORN (No Foreign Nationals) and REL TO (Release To countries) are mutually exclusive
        // NOFORN prohibits ALL foreign release, so country codes should never appear with NOFORN
        const hasNOFORN = releaseControls.includes('NOFORN');
        if (releaseAuthority && releaseAuthority.trim() !== '' && !hasNOFORN) {
            banner += '//' + releaseAuthority;
        } else if (releaseAuthority && releaseAuthority.trim() !== '' && hasNOFORN) {
            // Log warning if this inconsistent state is detected
            console.warn(
                `⚠️ [ClassificationManager] Inconsistent state detected: NOFORN present with release authority "${releaseAuthority}". ` +
                `Suppressing release authority in banner (NOFORN prohibits all foreign release).`
            );
        }

        return banner;
    }

    /**
     * Generate portion marking using CAPCO abbreviations
     *
     * Format: (LEVEL//SCI1/SCI2//DISSEM1/DISSEM2//RELEASE1/RELEASE2//HANDLING1/HANDLING2)
     *
     * Delimiter Rules (per DoDM 5200.45 January 2025):
     * - Double forward slash (//) separates MAJOR component blocks
     * - Single forward slash (/) separates items WITHIN a component block
     *
     * @returns {string} Portion marking
     */
    generatePortionMarking() {
        const { level, disseminationControls, sciCompartments, releaseControls, handlingCaveats, releaseAuthority } = this.currentClassification;

        const levelInfo = this.classificationLevels[level];
        let marking = levelInfo.abbreviation;

        // Add SCI compartments as a block (separated by / within block)
        //
        // ORDERING: SCI compartments are sorted ALPHABETICALLY by abbreviation (per CAPCO Register)
        // This is NOT a sensitivity hierarchy - all SCI compartments are equivalent in category
        // Correct alphabetical order: HCS (H), SI (S), TK (T)
        //
        // SPECIAL HANDLING - GAMMA (G) COUPLING:
        // G (Gamma) is a sub-compartment of SI and must be displayed as "SI-G" (not "SI/G")
        // When both SI and G are present, they are combined into a single "SI-G" token
        if (sciCompartments.length > 0) {
            const orderedCompartments = this.orderByPrecedence([...sciCompartments], this.sciCompartments);

            // Handle SI-G coupling: If both SI and G are present, display as "SI-G"
            const hasSI = orderedCompartments.includes('SI');
            const hasG = orderedCompartments.includes('G');

            let compartmentAbbrevs = [];

            if (hasSI && hasG) {
                // Both SI and G present - display as "SI-G" (single hyphenated token)
                for (const comp of orderedCompartments) {
                    if (comp === 'SI') {
                        compartmentAbbrevs.push('SI-G'); // Combine SI and G
                    } else if (comp === 'G') {
                        // Skip G - already combined with SI above
                        continue;
                    } else {
                        compartmentAbbrevs.push(this.sciCompartments[comp].abbreviation);
                    }
                }
            } else if (hasG && !hasSI) {
                // G present without SI - this should not happen due to coupling logic
                // Display as "SI-G" and log warning
                console.warn(
                    '⚠️ [ClassificationManager] Inconsistent state: G present without SI in portion marking. ' +
                    'Displaying as "SI-G" (G requires SI per DoD/IC standards).'
                );
                for (const comp of orderedCompartments) {
                    if (comp === 'G') {
                        compartmentAbbrevs.push('SI-G');
                    } else {
                        compartmentAbbrevs.push(this.sciCompartments[comp].abbreviation);
                    }
                }
            } else {
                // No G present, or only SI present - display compartments as-is
                compartmentAbbrevs = orderedCompartments.map(c => this.sciCompartments[c].abbreviation);
            }

            marking += '//' + compartmentAbbrevs.join('/');
        }

        // Add SAP programs as a block (separated by / within block)
        // SAP comes AFTER SCI compartments, BEFORE dissemination controls
        // Per DoDM 5200.01 Volume 2: CLASSIFICATION//SCI//SAP//DISSEM//RELEASE
        //
        // Format: SAR-[program-id] where [program-id] is the program identifier
        // Multiple SAPs are alphabetically ordered: SAR-EXAMPLE1/SAR-EXAMPLE2
        // NOTE: Real SAP program names are CLASSIFIED. Examples are fictional placeholders.
        if (this.currentClassification.sapPrograms && this.currentClassification.sapPrograms.length > 0) {
            // Sort alphabetically
            const sortedPrograms = [...this.currentClassification.sapPrograms].sort();
            // Format as SAR-[id]
            const formattedPrograms = sortedPrograms.map(id => `SAR-${id}`);
            marking += '//' + formattedPrograms.join('/');
        }

        // Add dissemination controls as a block (separated by / within block)
        // NOTE: SAP has been removed from dissemination controls (now separate control type)
        if (disseminationControls.length > 0) {
            const ordered = this.orderByPrecedence([...disseminationControls], this.disseminationControls);
            const dissemAbbrevs = ordered.map(c => this.disseminationControls[c].abbreviation);
            marking += '//' + dissemAbbrevs.join('/');
        }

        // Add release controls as a block (separated by / within block)
        if (releaseControls.length > 0) {
            const ordered = this.orderByPrecedence([...releaseControls], this.releaseControls);
            // If release authority is present, omit RELTO token to avoid 'REL/REL TO ...'
            const filtered = (this.currentClassification.releaseAuthority && this.currentClassification.releaseAuthority.trim() !== '')
                ? ordered.filter(c => c !== 'RELTO')
                : ordered;
            if (filtered.length > 0) {
                const releaseAbbrevs = filtered.map(c => this.releaseControls[c].abbreviation);
                marking += '//' + releaseAbbrevs.join('/');
            }
        }

        // Add handling caveats as a block (separated by / within block)
        if (handlingCaveats.length > 0) {
            const ordered = this.orderByPrecedence([...handlingCaveats], this.handlingCaveats);
            const caveatAbbrevs = ordered.map(c => this.handlingCaveats[c].abbreviation);
            marking += '//' + caveatAbbrevs.join('/');
        }

        // Add release authority (RELTO countries)
        // CRITICAL SAFEGUARD (2025-10-14): Do NOT add release authority if NOFORN is present
        // NOFORN (No Foreign Nationals) and REL TO (Release To countries) are mutually exclusive
        const hasNOFORN = releaseControls.includes('NOFORN');
        if (releaseAuthority && releaseAuthority.trim() !== '' && !hasNOFORN) {
            marking += '//' + releaseAuthority;
        } else if (releaseAuthority && releaseAuthority.trim() !== '' && hasNOFORN) {
            // Log warning if this inconsistent state is detected
            console.warn(
                `⚠️ [ClassificationManager] Inconsistent state detected: NOFORN present with release authority "${releaseAuthority}". ` +
                `Suppressing release authority in portion marking (NOFORN prohibits all foreign release).`
            );
        }

        return `(${marking})`;
    }

    /**
     * Update classification state and emit events
     */
    updateClassificationState() {
        // 1) Re-resolve incompatibilities and prune items that don't apply at the current level
        const level = this.currentClassification.level;

        // Re-resolve release/dissemination incompatibilities using precedence rules
        if (this.currentClassification.releaseControls && this.currentClassification.releaseControls.length > 1) {
            this.currentClassification.releaseControls = this.resolveIncompatibleControls(
                [...this.currentClassification.releaseControls],
                'release'
            );
        }
        if (this.currentClassification.disseminationControls && this.currentClassification.disseminationControls.length > 1) {
            this.currentClassification.disseminationControls = this.resolveIncompatibleControls(
                [...this.currentClassification.disseminationControls],
                'dissemination'
            );
        }

        // Remove handling caveats that are not applicable to the overall classification level (e.g., FOUO on TS)
        if (Array.isArray(this.currentClassification.handlingCaveats)) {
            this.currentClassification.handlingCaveats = this.currentClassification.handlingCaveats.filter(c => {
                const def = this.handlingCaveats[c];
                return def && Array.isArray(def.applicableTo) && def.applicableTo.includes(level);
            });
        }

        // If a release authority is present, omit the RELTO token from release controls to avoid 'RELTO//REL TO ...'
        if (this.currentClassification.releaseAuthority && this.currentClassification.releaseAuthority.trim() !== '') {
            this.currentClassification.releaseControls = (this.currentClassification.releaseControls || []).filter(c => c !== 'RELTO');
        }

        // Normalize release authority to 'REL TO <COUNTRIES>' with proper spacing and uppercase
        if (this.currentClassification.releaseAuthority) {
            let auth = this.currentClassification.releaseAuthority.trim();
            if (auth) {
                auth = auth.replace(/^RELTO\b/i, 'REL TO');
                auth = auth.replace(/^REL\s+(?!TO\b)/i, 'REL TO ');
                auth = auth.replace(/^REL\s+TO\s*/i, 'REL TO ');
                auth = auth.replace(/,\s*/g, ', ');
                this.currentClassification.releaseAuthority = auth.toUpperCase();
            }
        }

        // 2) Generate banner text and portion marking from cleaned state
        this.currentClassification.bannerText = this.generateBannerText();
        this.currentClassification.portionMarking = this.generatePortionMarking();

        // 3) Emit classification changed event
        if (this.eventBus) {
            this.eventBus.emit('classification:changed', {
                level: this.currentClassification.level,
                disseminationControls: [...this.currentClassification.disseminationControls],
                sciCompartments: [...this.currentClassification.sciCompartments],
                sapPrograms: [...this.currentClassification.sapPrograms],
                releaseControls: [...this.currentClassification.releaseControls],
                handlingCaveats: [...this.currentClassification.handlingCaveats],
                releaseAuthority: this.currentClassification.releaseAuthority,
                bannerText: this.currentClassification.bannerText,
                portionMarking: this.currentClassification.portionMarking
            });
        }

        // Reduced logging: Only log if classification actually changed
        // (Prevents excessive logging from duplicate events)
        if (!this._lastBannerText || this._lastBannerText !== this.currentClassification.bannerText) {
            console.log('🔒 Classification updated:', this.currentClassification.bannerText);
            this._lastBannerText = this.currentClassification.bannerText;
        }
    }

    /**
     * Get current classification state
     * @returns {Object} Current classification state
     */
    getCurrentClassification() {
        return {
            ...this.currentClassification,
            disseminationControls: [...this.currentClassification.disseminationControls],
            sciCompartments: [...this.currentClassification.sciCompartments],
            sapPrograms: [...this.currentClassification.sapPrograms],
            releaseControls: [...this.currentClassification.releaseControls],
            handlingCaveats: [...this.currentClassification.handlingCaveats]
        };
    }

    /**
     * Reset classification to UNCLASSIFIED
     */
    resetClassification() {
        this.currentClassification = {
            level: 'UNCLASSIFIED',
            disseminationControls: [],
            sciCompartments: [],
            sapPrograms: [],
            releaseControls: [],
            handlingCaveats: [],
            releaseAuthority: '',
            portionMarking: '(U)',
            bannerText: 'UNCLASSIFIED',
            networkAuthorization: 'UNCLASSIFIED'
        };

        this.updateClassificationState();
    }

    /**
     * Check if classification level is authorized for current network
     * @param {string} level - Classification level to check
     * @returns {boolean} True if authorized
     */
    isAuthorizedForNetwork(level) {
        const networkAuth = this.currentClassification.networkAuthorization;
        const authorizedLevels = this.networkAuthLevels[networkAuth] || ['UNCLASSIFIED'];
        return authorizedLevels.includes(level);
    }

    /**
     * Get available dissemination controls for current classification level
     * @returns {Array<Object>} Array of available dissemination controls
     */
    getAvailableDisseminationControls() {
        const level = this.currentClassification.level;
        const available = [];

        for (const [name, control] of Object.entries(this.disseminationControls)) {
            if (control.applicableTo.includes(level)) {
                available.push({
                    name,
                    ...control
                });
            }
        }

        return available;
    }

    /**
     * Get available SCI compartments
     * @returns {Array<Object>} Array of available SCI compartments
     */
    getAvailableSCICompartments() {
        const level = this.currentClassification.level;
        const available = [];

        for (const [name, compartment] of Object.entries(this.sciCompartments)) {
            if (compartment.applicableTo.includes(level)) {
                available.push({
                    name,
                    ...compartment
                });
            }
        }

        return available;
    }

    /**
     * Get available release controls for current classification level
     * @returns {Array<Object>} Array of available release controls
     */
    getAvailableReleaseControls() {
        const level = this.currentClassification.level;
        const available = [];

        for (const [name, control] of Object.entries(this.releaseControls)) {
            if (control.applicableTo.includes(level)) {
                available.push({
                    name,
                    ...control
                });
            }
        }

        return available;
    }

    /**
     * Get available handling caveats for current classification level
     * @returns {Array<Object>} Array of available handling caveats
     */
    getAvailableHandlingCaveats() {
        const level = this.currentClassification.level;
        const available = [];

        for (const [name, caveat] of Object.entries(this.handlingCaveats)) {
            if (caveat.applicableTo.includes(level)) {
                available.push({
                    name,
                    ...caveat
                });
            }
        }

        return available;
    }

    /**
     * Get release authorities
     * @returns {Array<string>} Array of release authority options
     */
    getReleaseAuthorities() {
        return [...this.releaseAuthorities];
    }

    /**
     * Get classification color for a given level
     * Used by OpordDraftTool for badge styling
     * Special case: TOP SECRET//SCI uses yellow (Pantone 101 C)
     * @param {string} level - Classification level (optional, uses current if not provided)
     * @returns {string} Background color hex code
     */
    getClassificationColor(level) {
        // If no level provided, use current classification level
        const targetLevel = level || this.currentClassification.level;

        const levelInfo = this.classificationLevels[targetLevel];
        if (!levelInfo) {
            console.warn(`Unknown classification level: ${targetLevel}`);
            return '#64748b'; // Default gray
        }

        // Special case: TOP SECRET//SCI uses yellow (Pantone 101 C)
        if (targetLevel === 'TOP SECRET' && this.currentClassification.disseminationControls.includes('SCI')) {
            return '#F7EA48'; // Pantone 101 C (Official DoD Yellow for TS//SCI)
        }

        return levelInfo.backgroundColor;
    }

    /**
     * Get text color for a given classification level
     * Used by OpordDraftTool for badge text styling
     * Special case: TOP SECRET//SCI uses black text on yellow background
     * @param {string} level - Classification level (optional, uses current if not provided)
     * @returns {string} Text color hex code
     */
    getTextColor(level) {
        // If no level provided, use current classification level
        const targetLevel = level || this.currentClassification.level;

        const levelInfo = this.classificationLevels[targetLevel];
        if (!levelInfo) {
            console.warn(`Unknown classification level: ${targetLevel}`);
            return '#ffffff'; // Default white
        }

        // Special case: TOP SECRET//SCI uses black text on yellow background
        if (targetLevel === 'TOP SECRET' && this.currentClassification.disseminationControls.includes('SCI')) {
            return '#000000'; // Black text for yellow background
        }

        return levelInfo.textColor;
    }

    /**
     * Get authorized classification levels for current network
     * Used by ClassificationUI for level selection
     * @returns {Array<string>} Array of authorized classification level names
     */
    getAuthorizedClassificationLevels() {
        // For now, return all levels
        // In production, this would check network authorization
        return Object.keys(this.classificationLevels);
    }

    /**
     * Get classification level info
     * @param {string} level - Classification level
     * @returns {Object} Classification level information
     */
    getClassificationLevelInfo(level) {
        return this.classificationLevels[level] || null;
    }

    /**
     * Get network authorization for current classification
     * @returns {string} Network authorization level
     */
    getNetworkAuthorization() {
        return this.currentClassification.networkAuthorization;
    }

    /**
     * Check if a classification level is valid
     * @param {string} level - Classification level to check
     * @returns {boolean} True if valid
     */
    isValidClassificationLevel(level) {
        return this.classificationLevels.hasOwnProperty(level);
    }

    /**
     * Get all dissemination controls (not filtered by level)
     * Used by ClassificationUI for rendering all options
     * @returns {Object} All dissemination controls
     */
    getAllDisseminationControls() {
        return this.disseminationControls;
    }

    /**
     * Get all SCI compartments (not filtered by level)
     * Used by ClassificationUI for rendering all options
     * @returns {Object} All SCI compartments
     */
    getAllSCICompartments() {
        return this.sciCompartments;
    }

    /**
     * Get all release controls (not filtered by level)
     * Used by ClassificationUI for rendering all options
     * @returns {Object} All release controls
     */
    getAllReleaseControls() {
        return this.releaseControls;
    }

    /**
     * Get all handling caveats (not filtered by level)
     * Used by ClassificationUI for rendering all options
     * @returns {Object} All handling caveats
     */
    getAllHandlingCaveats() {
        return this.handlingCaveats;
    }

    // ========================================================================
    // PORTION MARKING PARSING AND COMPARISON METHODS
    // Phase 1: Dynamic Portion Marking Implementation
    // ========================================================================

    /**
     * Portion marking regex pattern per DoDM 5200.45 January 2025
     * Format: (LEVEL//CONTROLS)
     * Examples: (U), (S), (S//NF), (TS//SI), (TS//SI-G/TK//NF), (TS//SAR-XXX)
     * Allows optional whitespace around delimiters for flexibility
     * Includes digits (0-9) to support SAP program identifiers (e.g., SAR-EXAMPLE1)
     */
    static PORTION_MARKING_REGEX = /^\(\s*([A-Z]+)\s*(?:\/\/\s*([A-Z0-9\-\/\s,]+)\s*)?\)$/;

    /**
     * Control weights for classification comparison
     * Used to determine overall classification weight beyond base level
     */
    static CONTROL_WEIGHTS = {
        // SCI Compartments (highest weight)
        'SI': 0.15,
        'G': 0.15,
        'TK': 0.15,
        'HCS': 0.15,

        // SAP Programs (separate control type, not dissemination control)
        // Weight applies to any SAR-[program-id] token
        'SAR': 0.12,  // Generic SAP weight (applies to all SAR-* programs)

        // Dissemination Controls
        // NOTE: SAP removed - now separate control type (see sapPrograms array)
        'SCI': 0.12,
        'ORCON': 0.08,
        'OC': 0.08,  // Abbreviation for ORCON
        'IMCON': 0.08,
        'WINTEL': 0.08,
        'PROPIN': 0.08,

        // Release Controls
        'NOFORN': 0.10,
        'NF': 0.10,  // Abbreviation for NOFORN
        'NOCONTRACTOR': 0.08,
        'NC': 0.08,  // Abbreviation for NOCONTRACTOR
        'RELTO': 0.05,
        'REL': 0.05,
        'FVEY': 0.05,

        // Handling Caveats
        'FOUO': 0.03,
        'SBU': 0.03,
        'LES': 0.03,
        'EYES ONLY': 0.10,
        'EO': 0.10  // Abbreviation for EYES ONLY
    };

    /**
     * Control incompatibilities per DoDM 5200.01 Volume 2 and ICD 710
     * Defines mutually exclusive control markings that cannot coexist
     *
     * CRITICAL CORRECTION (2025-10-08): ORCON and IMCON are NOT mutually exclusive.
     * Per ICD 710, ORCON and IMCON can be used together when both restrictions apply.
     * Example: (S//IMC/OC) for SECRET//IMCON/ORCON
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     *            Intelligence Community Directive (ICD) 710
     */
    static CONTROL_INCOMPATIBILITIES = {
        // Release Controls - NOFORN prohibits ALL foreign release
        'NOFORN': ['FVEY', 'RELTO', 'RELIDO'],
        'FVEY': ['NOFORN', 'RELTO'],      // Five Eyes incompatible with other foreign release
        'RELTO': ['NOFORN', 'FVEY'],      // REL TO incompatible with NOFORN and FVEY
        'RELIDO': ['NOFORN']              // RELIDO incompatible with NOFORN

        // Dissemination Controls - ORCON and IMCON are COMPATIBLE (can be used together)
        // No dissemination control incompatibilities defined
    };

    /**
     * Control precedence rules per DoDM 5200.01 Volume 2
     * Higher values take precedence when resolving incompatible controls
     *
     * CRITICAL CORRECTION (2025-10-08): Removed ORCON/IMCON precedence.
     * ORCON and IMCON are compatible and can coexist - no precedence needed.
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     */
    static CONTROL_PRECEDENCE = {
        // Release Controls (NOFORN has absolute precedence)
        'NOFORN': 100,        // Highest - prohibits all foreign release
        'NOCONTRACTOR': 90,
        'RELTO': 80,
        'FVEY': 70,
        'RELIDO': 60

        // Dissemination Controls - No precedence rules (ORCON and IMCON are compatible)
    };

    /**
     * Parse portion marking into classification object
     * Supports DoDM 5200.45 January 2025 compliant format
     *
     * @param {string} marking - Portion marking (e.g., "(TS//SI-G/TK//NF)")
     * @returns {Object|null} Parsed classification object or null if invalid
     *
     * @example
     * parsePortionMarking('(S//NF)')
     * // Returns: { level: 'SECRET', releaseControls: ['NOFORN'], ... }
     *
     * @example
     * parsePortionMarking('(TS//SI-G/TK//NF)')
     * // Returns: { level: 'TOP SECRET', sciCompartments: ['SI', 'G', 'TK'],
     * //           releaseControls: ['NOFORN'], ... }
     */
    parsePortionMarking(marking) {
        if (!marking || typeof marking !== 'string') {
            return null;
        }

        const match = marking.match(ClassificationManager.PORTION_MARKING_REGEX);
        if (!match) {
            return null;
        }

        const levelAbbr = match[1];
        const controlsString = match[2] || '';

        // Expand level abbreviation
        const level = this.expandLevelAbbreviation(levelAbbr);
        if (!level) {
            return null;
        }

        // Parse controls (separated by //)
        const controlBlocks = controlsString ? controlsString.split('//') : [];

        let result = {
            level: level,
            sciCompartments: [],
            sapPrograms: [], // SAP program identifiers (e.g., ['BP', 'ABC', 'DEF'])
            disseminationControls: [],
            releaseControls: [],
            handlingCaveats: [],
            releaseAuthority: ''
        };

        // Process each control block
        for (const block of controlBlocks) {
            const trimmedBlock = block.trim();
            if (!trimmedBlock) continue;

            if (trimmedBlock.startsWith('REL TO') || trimmedBlock.startsWith('REL')) {
                // Release authority (e.g., "REL TO USA, GBR")
                result.releaseControls.push('RELTO');
                result.releaseAuthority = trimmedBlock;
            } else if (trimmedBlock.startsWith('SAR-')) {
                // SAP program block (e.g., "SAR-XXX" or "SAR-EXAMPLE1/SAR-EXAMPLE2")
                // NOTE: Real SAP program names are CLASSIFIED. Examples are fictional placeholders.
                // Split by / to handle multiple SAP programs
                const sapTokens = trimmedBlock.split('/');
                for (const sapToken of sapTokens) {
                    const trimmedSAP = sapToken.trim();
                    if (trimmedSAP.startsWith('SAR-')) {
                        // Extract program ID (everything after "SAR-")
                        const programId = trimmedSAP.substring(4); // Remove "SAR-" prefix
                        if (programId && !result.sapPrograms.includes(programId)) {
                            result.sapPrograms.push(programId);
                        }
                    }
                }
            } else if (trimmedBlock.includes('/') || trimmedBlock.includes('-')) {
                // Could be SCI compartments (e.g., "SI-G/TK") or multiple controls (e.g., "NF/FVEY")
                const parts = trimmedBlock.split(/[-\/]/);

                for (const part of parts) {
                    const trimmedPart = part.trim();
                    if (this.isSCICompartment(trimmedPart)) {
                        // SCI compartment
                        if (!result.sciCompartments.includes(trimmedPart)) {
                            result.sciCompartments.push(trimmedPart);
                        }
                    } else {
                        // Not an SCI compartment - categorize as control
                        this.categorizeControl(trimmedPart, result);
                    }
                }
            } else if (this.isSCICompartment(trimmedBlock)) {
                // Single SCI compartment (e.g., "SI", "HCS")
                if (!result.sciCompartments.includes(trimmedBlock)) {
                    result.sciCompartments.push(trimmedBlock);
                }
            } else {
                // Other single control - categorize it
                this.categorizeControl(trimmedBlock, result);
            }
        }

        // Validate and resolve incompatible controls per DoDM 5200.01 Volume 2
        result = this.validateAndResolveControls(result);

        return result;
    }

    /**
     * Expand classification level abbreviation to full name
     *
     * @param {string} abbr - Classification abbreviation (e.g., 'TS', 'S', 'C')
     * @returns {string|null} Full classification level or null if invalid
     *
     * @example
     * expandLevelAbbreviation('TS') // Returns: 'TOP SECRET'
     * expandLevelAbbreviation('S')  // Returns: 'SECRET'
     */
    expandLevelAbbreviation(abbr) {
        const abbreviations = {
            'U': 'UNCLASSIFIED',
            'CUI': 'CUI',
            'C': 'CONFIDENTIAL',
            'S': 'SECRET',
            'TS': 'TOP SECRET'
        };
        return abbreviations[abbr] || null;
    }

    /**
     * Check if control is an SCI compartment
     *
     * @param {string} control - Control to check
     * @returns {boolean} True if SCI compartment
     *
     * @example
     * isSCICompartment('SI')  // Returns: true
     * isSCICompartment('NF')  // Returns: false
     */
    isSCICompartment(control) {
        const sciCompartments = ['SI', 'G', 'TK', 'HCS'];
        return sciCompartments.includes(control);
    }

    /**
     * Categorize control into appropriate array (dissemination, release, or handling)
     *
     * @param {string} control - Control abbreviation or full name
     * @param {Object} result - Result object to populate
     *
     * @example
     * categorizeControl('NF', result)
     * // Adds 'NOFORN' to result.releaseControls
     */
    categorizeControl(control, result) {
        // Expand abbreviation
        const expanded = this.expandControlAbbreviation(control);

        if (this.isDisseminationControl(expanded)) {
            if (!result.disseminationControls.includes(expanded)) {
                result.disseminationControls.push(expanded);
            }
        } else if (this.isReleaseControl(expanded)) {
            if (!result.releaseControls.includes(expanded)) {
                result.releaseControls.push(expanded);
            }
        } else if (this.isHandlingCaveat(expanded)) {
            if (!result.handlingCaveats.includes(expanded)) {
                result.handlingCaveats.push(expanded);
            }
        }
    }

    /**
     * Validate and resolve incompatible controls per DoDM 5200.01 Volume 2
     * Applies precedence rules to remove incompatible control markings
     *
     * @param {Object} result - Parsed classification object
     * @returns {Object} Validated classification object with incompatibilities resolved
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     *
     * @example
     * validateAndResolveControls({ level: 'SECRET', releaseControls: ['NOFORN', 'FVEY'] })
     * // Returns: { level: 'SECRET', releaseControls: ['NOFORN'] }
     * // FVEY removed due to NOFORN precedence
     */
    validateAndResolveControls(result) {
        // Resolve incompatible release controls
        if (result.releaseControls && result.releaseControls.length > 1) {
            result.releaseControls = this.resolveIncompatibleControls(
                result.releaseControls,
                'release'
            );
        }

        // Resolve incompatible dissemination controls
        if (result.disseminationControls && result.disseminationControls.length > 1) {
            result.disseminationControls = this.resolveIncompatibleControls(
                result.disseminationControls,
                'dissemination'
            );
        }

        // Validate control applicability (SCI compartments, NOFORN, etc.)
        this.validateControlApplicability(result);

        return result;
    }

    /**
     * Resolve incompatible controls using precedence rules
     * Per DoDM 5200.01 Volume 2, certain controls are mutually exclusive
     *
     * @param {Array<string>} controls - Array of control markings
     * @param {string} type - Control type ('release' or 'dissemination')
     * @returns {Array<string>} Resolved controls with incompatibilities removed
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     *
     * @example
     * resolveIncompatibleControls(['NOFORN', 'FVEY'], 'release')
     * // Returns: ['NOFORN'] - FVEY removed due to lower precedence
     */
    resolveIncompatibleControls(controls, type) {
        if (!controls || controls.length <= 1) {
            return controls;
        }

        // Find highest precedence control
        let highestPrecedence = -1;
        let highestControl = null;

        for (const control of controls) {
            const precedence = ClassificationManager.CONTROL_PRECEDENCE[control] || 0;
            if (precedence > highestPrecedence) {
                highestPrecedence = precedence;
                highestControl = control;
            }
        }

        if (!highestControl) {
            return controls;
        }

        // Get incompatibilities for highest precedence control
        const incompatibilities = ClassificationManager.CONTROL_INCOMPATIBILITIES[highestControl] || [];

        // Filter out incompatible controls
        const resolvedControls = controls.filter(control => {
            if (control === highestControl) {
                return true; // Keep highest precedence control
            }
            if (incompatibilities.includes(control)) {
                console.warn(
                    `[ClassificationManager] Removing incompatible control "${control}" ` +
                    `due to "${highestControl}" precedence (DoDM 5200.01 Volume 2)`
                );
                return false; // Remove incompatible control
            }
            return true; // Keep compatible control
        });

        // If NOFORN is present, clear releaseAuthority
        if (type === 'release' && resolvedControls.includes('NOFORN')) {
            // This will be handled in validateControlApplicability
        }

        return resolvedControls;
    }

    /**
     * Validate control applicability per DoDM 5200.01 Volume 2
     * - SCI compartments only apply to TOP SECRET
     * - NOFORN only applies to CONFIDENTIAL, SECRET, TOP SECRET
     * - Clear releaseAuthority when NOFORN is present
     *
     * CRITICAL SECURITY: SCI compartment violations are now BLOCKING errors
     * to prevent unauthorized network deployment of SCI information.
     *
     * @param {Object} result - Parsed classification object (modified in place)
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     * Reference: Network Authorization Matrix (see project memories)
     *
     * @example
     * validateControlApplicability({ level: 'SECRET', sciCompartments: ['SI'] })
     * // Adds validation error (SCI requires TOP SECRET)
     */
    validateControlApplicability(result) {
        // Initialize validation errors array if not present
        if (!result.validationErrors) {
            result.validationErrors = [];
        }

        // Validate SCI compartments - only apply to TOP SECRET
        // CRITICAL SECURITY: This is now a BLOCKING error, not a silent correction
        if (result.sciCompartments && result.sciCompartments.length > 0) {
            if (result.level !== 'TOP SECRET') {
                // Determine target network based on classification level
                const networkMapping = {
                    'UNCLASSIFIED': 'NIPR (.mil/.gov)',
                    'CUI': 'NIPR (.mil/.gov)',
                    'CONFIDENTIAL': 'SIPR (.smil.mil)',
                    'SECRET': 'SIPR (.smil.mil)',
                    'TOP SECRET': 'JWICS/NSANET (.ic.gov)'
                };

                const currentNetwork = networkMapping[result.level] || 'Unknown';
                const requiredNetwork = networkMapping['TOP SECRET'];

                const error = {
                    type: 'SCI_NETWORK_AUTHORIZATION_VIOLATION',
                    severity: 'CRITICAL',
                    message: '⚠️ SECURITY VIOLATION PREVENTED',
                    details: `SCI compartments (${result.sciCompartments.join(', ')}) can only be used with TOP SECRET classification.`,
                    current: `${result.level} with ${result.sciCompartments.join(', ')} compartment(s)`,
                    required: `TOP SECRET with ${result.sciCompartments.join(', ')} compartment(s)`,
                    networkImpact: {
                        current: `${result.level} → ${currentNetwork} - NOT AUTHORIZED for SCI`,
                        required: `TOP SECRET → ${requiredNetwork} - AUTHORIZED for SCI`
                    },
                    remediation: [
                        'Change classification level to TOP SECRET, or',
                        'Remove the SCI compartment(s)'
                    ],
                    reference: 'DoDM 5200.01 Volume 2, Network Authorization Matrix'
                };

                result.validationErrors.push(error);

                console.error(
                    `[ClassificationManager] CRITICAL SECURITY VIOLATION: ` +
                    `SCI compartments (${result.sciCompartments.join(', ')}) on ${result.level}. ` +
                    `SCI requires TOP SECRET and JWICS/NSANET (.ic.gov) network. ` +
                    `Current level would deploy to ${currentNetwork} - UNAUTHORIZED for SCI. ` +
                    `Per DoDM 5200.01 Volume 2.`
                );
            }
        }

        // Validate NOFORN applicability - only on classified levels
        // This is auto-corrected (not blocking) since it's less critical than SCI
        if (result.releaseControls && result.releaseControls.includes('NOFORN')) {
            const classifiedLevels = ['CONFIDENTIAL', 'SECRET', 'TOP SECRET'];
            if (!classifiedLevels.includes(result.level)) {
                console.warn(
                    `[ClassificationManager] Auto-correcting: Removing NOFORN from ${result.level} ` +
                    `(NOFORN only applies to classified levels per DoDM 5200.01 Volume 2)`
                );
                result.releaseControls = result.releaseControls.filter(c => c !== 'NOFORN');

                // Add warning (not blocking error)
                if (!result.validationWarnings) {
                    result.validationWarnings = [];
                }
                result.validationWarnings.push({
                    type: 'NOFORN_APPLICABILITY',
                    severity: 'WARNING',
                    message: 'NOFORN removed - only applies to classified levels',
                    autocorrected: true
                });
            } else {
                // NOFORN present - clear releaseAuthority
                if (result.releaseAuthority && result.releaseAuthority.length > 0) {
                    console.warn(
                        `[ClassificationManager] Auto-correcting: Clearing releaseAuthority due to NOFORN ` +
                        `(NOFORN prohibits foreign release per DoDM 5200.01 Volume 2)`
                    );
                    result.releaseAuthority = '';

                    // Add warning (not blocking error)
                    if (!result.validationWarnings) {
                        result.validationWarnings = [];
                    }
                    result.validationWarnings.push({
                        type: 'RELEASE_AUTHORITY_CLEARED',
                        severity: 'WARNING',
                        message: 'Release authority cleared - NOFORN prohibits foreign release',
                        autoCorrect: true
                    });
                }
            }
        }

        // Validate handling caveats - FOUO/SBU/LES only on UNCLASSIFIED
        // This is auto-corrected (not blocking) since it's less critical than SCI
        if (result.handlingCaveats && result.handlingCaveats.length > 0) {
            const unclassifiedCaveats = ['FOUO', 'SBU', 'LES'];
            const invalidCaveats = result.handlingCaveats.filter(caveat =>
                unclassifiedCaveats.includes(caveat) && result.level !== 'UNCLASSIFIED'
            );

            if (invalidCaveats.length > 0) {
                console.warn(
                    `[ClassificationManager] Auto-correcting: Removing ${invalidCaveats.join(', ')} from ${result.level} ` +
                    `(FOUO/SBU/LES only apply to UNCLASSIFIED per DoDM 5200.01 Volume 2)`
                );
                result.handlingCaveats = result.handlingCaveats.filter(
                    caveat => !invalidCaveats.includes(caveat)
                );

                // Add warning (not blocking error)
                if (!result.validationWarnings) {
                    result.validationWarnings = [];
                }
                result.validationWarnings.push({
                    type: 'HANDLING_CAVEAT_APPLICABILITY',
                    severity: 'WARNING',
                    message: `${invalidCaveats.join(', ')} removed - only applies to UNCLASSIFIED`,
                    autoCorrect: true
                });
            }
        }
    }

    /**
     * Check if a parsed portion marking has validation errors
     *
     * @param {Object} result - Parsed portion marking result
     * @returns {boolean} True if validation errors exist
     *
     * @example
     * const result = manager.parsePortionMarking('(S//SI)');
     * if (manager.hasValidationErrors(result)) {
     *     console.error('Invalid portion marking:', result.validationErrors);
     * }
     */
    hasValidationErrors(result) {
        return result && result.validationErrors && result.validationErrors.length > 0;
    }

    /**
     * Get formatted validation error message for display
     *
     * @param {Object} result - Parsed portion marking result
     * @returns {string} Formatted error message
     *
     * @example
     * const result = manager.parsePortionMarking('(S//SI)');
     * if (manager.hasValidationErrors(result)) {
     *     alert(manager.getValidationErrorMessage(result));
     * }
     */
    getValidationErrorMessage(result) {
        if (!this.hasValidationErrors(result)) {
            return '';
        }

        const error = result.validationErrors[0]; // Get first critical error

        let message = `${error.message}\n\n`;
        message += `${error.details}\n\n`;
        message += `Current selection: ${error.current}\n`;
        message += `Required: ${error.required}\n\n`;
        message += `Network Authorization:\n`;
        message += `- ${error.networkImpact.current}\n`;
        message += `- ${error.networkImpact.required}\n\n`;
        message += `Per ${error.reference}, SCI information must be handled on appropriately authorized networks.\n\n`;
        message += `Please either:\n`;
        error.remediation.forEach((step, index) => {
            message += `${index + 1}. ${step}\n`;
        });

        return message;
    }

    /**
     * Create SCI network authorization error object
     *
     * Generates a comprehensive error object for SCI compartment violations
     * per DoDM 5200.01 Volume 2 Network Authorization Matrix
     *
     * @param {string} compartment - SCI compartment that caused the violation
     * @param {string} currentLevel - Current classification level
     * @returns {Object} Error object with detailed violation information
     *
     * Reference: DoDM 5200.01 Volume 2, Network Authorization Matrix
     *
     * @private
     *
     * @example
     * const error = this.createSCINetworkAuthorizationError('SI', 'SECRET');
     * // Returns comprehensive error object with network impact details
     */
    createSCINetworkAuthorizationError(compartment, currentLevel) {
        const networkMapping = {
            'UNCLASSIFIED': 'NIPR (.mil/.gov)',
            'CUI': 'NIPR (.mil/.gov)',
            'CONFIDENTIAL': 'SIPR (.smil.mil)',
            'SECRET': 'SIPR (.smil.mil)',
            'TOP SECRET': 'JWICS/NSANET (.ic.gov)'
        };

        const currentNetwork = networkMapping[currentLevel] || 'Unknown';
        const requiredNetwork = networkMapping['TOP SECRET'];

        return {
            type: 'SCI_NETWORK_AUTHORIZATION_VIOLATION',
            severity: 'CRITICAL',
            message: '⚠️ SECURITY VIOLATION PREVENTED',
            details: `SCI compartments (${compartment}) can only be used with TOP SECRET classification.`,
            current: `${currentLevel} with ${compartment} compartment`,
            required: `TOP SECRET with ${compartment} compartment`,
            networkImpact: {
                current: `${currentLevel} → ${currentNetwork} - NOT AUTHORIZED for SCI`,
                required: `TOP SECRET → ${requiredNetwork} - AUTHORIZED for SCI`
            },
            remediation: [
                'Change classification level to TOP SECRET, or',
                'Remove the SCI compartment'
            ],
            reference: 'DoDM 5200.01 Volume 2, Network Authorization Matrix'
        };
    }

    /**
     * Check for control incompatibilities in a classification state
     *
     * Validates that controls in a classification state don't violate
     * incompatibility rules per DoDM 5200.01 Volume 2
     *
     * @param {Object} state - Classification state to check
     * @param {string} state.level - Classification level
     * @param {Array<string>} state.releaseControls - Release controls
     * @param {Array<string>} state.disseminationControls - Dissemination controls
     * @returns {Object} Validation result
     * @returns {boolean} result.hasErrors - True if incompatibilities found
     * @returns {Array<Object>} result.errors - Array of error objects
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     *
     * @private
     *
     * @example
     * const result = this.checkControlIncompatibilities({
     *     level: 'SECRET',
     *     releaseControls: ['NOFORN', 'FVEY']
     * });
     * // Returns: { hasErrors: true, errors: [...] }
     */
    checkControlIncompatibilities(state) {
        const errors = [];

        // Check release control incompatibilities
        if (state.releaseControls && state.releaseControls.length > 1) {
            const incompatible = this.findIncompatibleControls(state.releaseControls, 'release');
            if (incompatible.length > 0) {
                errors.push({
                    type: 'CONTROL_INCOMPATIBILITY',
                    severity: 'WARNING',
                    message: `Incompatible release controls detected: ${incompatible.join(', ')}. ` +
                             `Highest precedence control will be retained.`,
                    controls: incompatible,
                    controlType: 'release'
                });
            }
        }

        // Check dissemination control incompatibilities
        if (state.disseminationControls && state.disseminationControls.length > 1) {
            const incompatible = this.findIncompatibleControls(state.disseminationControls, 'dissemination');
            if (incompatible.length > 0) {
                errors.push({
                    type: 'CONTROL_INCOMPATIBILITY',
                    severity: 'WARNING',
                    message: `Incompatible dissemination controls detected: ${incompatible.join(', ')}. ` +
                             `Highest precedence control will be retained.`,
                    controls: incompatible,
                    controlType: 'dissemination'
                });
            }
        }

        return {
            hasErrors: errors.length > 0,
            errors: errors
        };
    }

    /**
     * Find incompatible controls in a control array
     *
     * Identifies controls that are mutually exclusive per DoDM 5200.01 Volume 2
     *
     * @param {Array<string>} controls - Array of control markings
     * @param {string} type - Control type ('release' or 'dissemination')
     * @returns {Array<string>} Array of incompatible control names
     *
     * Reference: DoDM 5200.01 Volume 2, Section 4 - Marking Requirements
     *
     * @private
     *
     * @example
     * this.findIncompatibleControls(['NOFORN', 'FVEY'], 'release')
     * // Returns: ['NOFORN', 'FVEY'] - these are incompatible
     */
    findIncompatibleControls(controls, type) {
        const incompatible = [];

        for (let i = 0; i < controls.length; i++) {
            const control1 = controls[i];
            const incompatibilities = ClassificationManager.CONTROL_INCOMPATIBILITIES[control1] || [];

            for (let j = i + 1; j < controls.length; j++) {
                const control2 = controls[j];

                if (incompatibilities.includes(control2)) {
                    if (!incompatible.includes(control1)) {
                        incompatible.push(control1);
                    }
                    if (!incompatible.includes(control2)) {
                        incompatible.push(control2);
                    }
                }
            }
        }

        return incompatible;
    }

    /**
     * Expand control abbreviation to full name
     *
     * @param {string} control - Control abbreviation
     * @returns {string} Full control name or original if not found
     *
     * @example
     * expandControlAbbreviation('NF')  // Returns: 'NOFORN'
     * expandControlAbbreviation('OC')  // Returns: 'ORCON'
     */
    expandControlAbbreviation(control) {
        const abbreviations = {
            'NF': 'NOFORN',
            'NC': 'NOCONTRACTOR',
            'OC': 'ORCON',
            'EO': 'EYES ONLY',
            'REL': 'RELTO'
        };
        return abbreviations[control] || control;
    }

    /**
     * Check if control is a dissemination control
     *
     * @param {string} control - Control name
     * @returns {boolean} True if dissemination control
     */
    isDisseminationControl(control) {
        return this.disseminationControls.hasOwnProperty(control);
    }

    /**
     * Check if control is a release control
     *
     * @param {string} control - Control name
     * @returns {boolean} True if release control
     */
    isReleaseControl(control) {
        return this.releaseControls.hasOwnProperty(control);
    }

    /**
     * Check if control is a handling caveat
     *
     * @param {string} control - Control name
     * @returns {boolean} True if handling caveat
     */
    isHandlingCaveat(control) {
        return this.handlingCaveats.hasOwnProperty(control);
    }

    /**
     * Get classification weight for comparison
     * Uses base rank plus weighted controls to determine overall classification level
     *
     * Formula: weight = baseRank + sum(controlWeights)
     *
     * @param {Object} classification - Classification object (from parsePortionMarking or currentClassification)
     * @returns {number} Numeric weight (0.0 to ~5.0)
     *
     * @example
     * getClassificationWeight({ level: 'SECRET', releaseControls: ['NOFORN'] })
     * // Returns: 2.10 (2.0 base + 0.10 for NOFORN)
     *
     * @example
     * getClassificationWeight({ level: 'TOP SECRET', sciCompartments: ['SI', 'G', 'TK'],
     *                           releaseControls: ['NOFORN'] })
     * // Returns: 3.55 (3.0 base + 0.45 SCI + 0.10 NOFORN)
     */
    getClassificationWeight(classification) {
        if (!classification || !classification.level) {
            return 0;
        }

        // Get base rank
        const levelInfo = this.classificationLevels[classification.level];
        let weight = levelInfo ? levelInfo.rank : 0;

        // Add SCI compartment weights
        if (classification.sciCompartments && Array.isArray(classification.sciCompartments)) {
            for (const compartment of classification.sciCompartments) {
                weight += ClassificationManager.CONTROL_WEIGHTS[compartment] || 0;
            }
        }

        // Add dissemination control weights
        if (classification.disseminationControls && Array.isArray(classification.disseminationControls)) {
            for (const control of classification.disseminationControls) {
                weight += ClassificationManager.CONTROL_WEIGHTS[control] || 0;
            }
        }

        // Add release control weights
        if (classification.releaseControls && Array.isArray(classification.releaseControls)) {
            for (const control of classification.releaseControls) {
                weight += ClassificationManager.CONTROL_WEIGHTS[control] || 0;
            }
        }

        // Add handling caveat weights
        if (classification.handlingCaveats && Array.isArray(classification.handlingCaveats)) {
            for (const caveat of classification.handlingCaveats) {
                weight += ClassificationManager.CONTROL_WEIGHTS[caveat] || 0;
            }
        }

        return weight;
    }

    /**
     * Compare two classification markings
     * Returns -1 if marking1 is lower, 0 if equal, 1 if marking1 is higher
     *
     * @param {string} marking1 - First portion marking (e.g., "(S)")
     * @param {string} marking2 - Second portion marking (e.g., "(TS)")
     * @returns {number} -1, 0, or 1
     *
     * @example
     * compareClassifications('(S)', '(TS)')      // Returns: -1 (S < TS)
     * compareClassifications('(TS)', '(S)')      // Returns: 1  (TS > S)
     * compareClassifications('(S)', '(S)')       // Returns: 0  (S = S)
     * compareClassifications('(S//NF)', '(S)')   // Returns: 1  (S//NF > S)
     */
    compareClassifications(marking1, marking2) {
        const parsed1 = this.parsePortionMarking(marking1);
        const parsed2 = this.parsePortionMarking(marking2);

        if (!parsed1 && !parsed2) return 0;
        if (!parsed1) return -1;
        if (!parsed2) return 1;

        const weight1 = this.getClassificationWeight(parsed1);
        const weight2 = this.getClassificationWeight(parsed2);

        if (weight1 < weight2) return -1;
        if (weight1 > weight2) return 1;
        return 0;
    }

    /**
     * Get highest classification from array of portion markings
     * Parses all markings and returns the one with highest weight
     *
     * @param {Array<string>} markingsArray - Array of portion markings
     * @returns {Object|null} Highest classification object with additional metadata
     *
     * @example
     * getHighestClassification(['(U)', '(S)', '(S//NF)', '(TS//SI)'])
     * // Returns: {
     * //   level: 'TOP SECRET',
     * //   sciCompartments: ['SI'],
     * //   portionMarking: '(TS//SI)',
     * //   weight: 3.15
     * // }
     */
    getHighestClassification(markingsArray) {
        if (!markingsArray || !Array.isArray(markingsArray) || markingsArray.length === 0) {
            return null;
        }

        let highestClassification = null;
        let highestWeight = -1;
        let highestMarking = null;

        for (const marking of markingsArray) {
            const parsed = this.parsePortionMarking(marking);
            if (!parsed) continue;

            const weight = this.getClassificationWeight(parsed);
            if (weight > highestWeight) {
                highestWeight = weight;
                highestClassification = parsed;
                highestMarking = marking;
            }
        }

        if (highestClassification) {
            // Add metadata
            highestClassification.portionMarking = highestMarking;
            highestClassification.weight = highestWeight;
        }

        return highestClassification;
    }
}

