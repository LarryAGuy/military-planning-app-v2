/**
 * Base Section Component
 * Reusable base class for all OPORD section components
 * Provides common functionality for form rendering, validation, and data management
 *
 * DESIGN PATTERN: This base class will be reused for Draft MDMP and Draft JPP tools
 * ECHELON-AGNOSTIC: Supports all 11 standardized echelons (Platoon through Theater)
 *
 * @module BaseSectionComponent
 */

import { PortionMarkingPopover } from '../../../components/PortionMarkingPopover.js';

export class BaseSectionComponent {
    constructor(sectionId, sectionTitle, eventBus, portionMarkingManager = null) {
        this.sectionId = sectionId;
        this.sectionTitle = sectionTitle;
        this.eventBus = eventBus;
        this.portionMarkingManager = portionMarkingManager; // Phase 3: Portion marking support
        this.container = null;
        this.data = {};
        this.validationRules = {};
        this.initialized = false;
        this.echelon = 'company'; // Default echelon, can be changed
        this.portionMarkings = []; // Phase 3: Track portion markings for this section
        this.portionMarkingPopovers = new Map(); // Phase 2: Store popover instances
    }

    /**
     * Initialize section component
     */
    async initialize(container) {
        if (this.initialized) {
            console.log(`⚠️ ${this.sectionTitle} already initialized`);
            return;
        }

        this.container = typeof container === 'string' ? 
            document.querySelector(container) : container;

        if (!this.container) {
            throw new Error(`Container not found for ${this.sectionTitle}`);
        }

        // Setup event listeners
        this.setupEventListeners();

        // Render initial UI
        this.render();

        this.initialized = true;
        console.log(`✅ ${this.sectionTitle} initialized`);

        // Emit initialization event
        this.eventBus.emit(`section:initialized`, {
            sectionId: this.sectionId,
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Setup event listeners (to be overridden by subclasses)
     */
    setupEventListeners() {
        // Listen for data updates
        this.eventBus.on(`section:${this.sectionId}:update`, (data) => {
            this.updateData(data);
        });

        // Listen for validation requests
        this.eventBus.on(`section:${this.sectionId}:validate`, () => {
            this.validate();
        });

        // Listen for echelon changes
        this.eventBus.on('draft:echelon-changed', (data) => {
            this.setEchelon(data.echelon);
        });

        // SECURITY FIX: Listen for portion marking clear all event
        // When user clicks "Clear All" in ClassificationPickerInline,
        // all portion markings must be removed from fields to prevent
        // classification security violations (DoDM 5200.01 Volume 2)
        this.eventBus.on('portion-marking:cleared', () => {
            this.clearAllPortionMarkingsFromFields();
        });
    }

    /**
     * Render section UI (to be overridden by subclasses)
     */
    render() {
        if (!this.container) return;

        const html = `
            <div class="section-component" data-section="${this.sectionId}">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin-bottom: 16px;">
                    ${this.sectionTitle}
                </h3>
                <div class="section-fields">
                    ${this.renderFields()}
                </div>
            </div>
        `;

        this.container.innerHTML = html;

        // Attach event handlers after rendering
        this.attachEventHandlers();
    }

    /**
     * Render form fields (to be overridden by subclasses)
     */
    renderFields() {
        return '<p style="color: #9ca3af;">No fields defined</p>';
    }

    /**
     * Attach event handlers (to be overridden by subclasses)
     */
    attachEventHandlers() {
        // Attach blur handlers for auto-save
        this.container.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('blur', () => this.handleFieldChange(field));
            field.addEventListener('input', () => this.handleFieldInput(field));
        });

        // Initialize portion marking popovers (Phase 2)
        this.initializePortionMarkingPopovers();
    }

    /**
     * Handle field change (blur event)
     */
    handleFieldChange(field) {
        const fieldName = field.name || field.id;
        const fieldValue = field.value;

        // Update data
        this.data[fieldName] = fieldValue;

        // Emit change event
        this.eventBus.emit(`section:${this.sectionId}:changed`, {
            field: fieldName,
            value: fieldValue,
            data: this.getData()
        });

        // Trigger validation
        this.validateField(fieldName);
    }

    /**
     * Handle field input (real-time updates)
     */
    handleFieldInput(field) {
        const fieldName = field.name || field.id;
        const fieldValue = field.value;

        // Update data
        this.data[fieldName] = fieldValue;

        // Emit input event for live preview
        this.eventBus.emit(`section:${this.sectionId}:input`, {
            field: fieldName,
            value: fieldValue,
            data: this.getData()
        });
    }

    /**
     * Validate section data
     */
    validate() {
        const errors = [];
        const warnings = [];

        // Validate each field according to rules
        for (const [fieldName, rules] of Object.entries(this.validationRules)) {
            const fieldValue = this.data[fieldName];
            const fieldErrors = this.validateField(fieldName, fieldValue, rules);
            
            if (fieldErrors.errors.length > 0) {
                errors.push(...fieldErrors.errors);
            }
            if (fieldErrors.warnings.length > 0) {
                warnings.push(...fieldErrors.warnings);
            }
        }

        const result = {
            valid: errors.length === 0,
            errors: errors,
            warnings: warnings,
            sectionId: this.sectionId
        };

        // Emit validation result
        this.eventBus.emit(`section:${this.sectionId}:validated`, result);

        return result;
    }

    /**
     * Validate individual field
     */
    validateField(fieldName, fieldValue = null, rules = null) {
        const errors = [];
        const warnings = [];

        const value = fieldValue !== null ? fieldValue : this.data[fieldName];
        const fieldRules = rules || this.validationRules[fieldName];

        if (!fieldRules) {
            return { errors, warnings };
        }

        // Required field validation
        if (fieldRules.required && (!value || value.trim() === '')) {
            errors.push(`${fieldRules.label || fieldName} is required`);
        }

        // Pattern validation
        if (fieldRules.pattern && value && !fieldRules.pattern.test(value)) {
            warnings.push(`${fieldRules.label || fieldName} format may be incorrect`);
        }

        // Custom validation function
        if (fieldRules.validate && typeof fieldRules.validate === 'function') {
            const customResult = fieldRules.validate(value, this.data);
            if (customResult.error) errors.push(customResult.error);
            if (customResult.warning) warnings.push(customResult.warning);
        }

        // Update field UI with validation state
        this.updateFieldValidationUI(fieldName, errors, warnings);

        return { errors, warnings };
    }

    /**
     * Update field validation UI
     */
    updateFieldValidationUI(fieldName, errors, warnings) {
        const field = this.container.querySelector(`[name="${fieldName}"], #${fieldName}`);
        if (!field) return;

        // Remove existing validation classes
        field.classList.remove('field-valid', 'field-warning', 'field-error');

        // Add appropriate class
        if (errors.length > 0) {
            field.classList.add('field-error');
            field.style.borderColor = '#ef4444';
        } else if (warnings.length > 0) {
            field.classList.add('field-warning');
            field.style.borderColor = '#f59e0b';
        } else if (field.value && field.value.trim() !== '') {
            field.classList.add('field-valid');
            field.style.borderColor = '#10b981';
        } else {
            field.style.borderColor = '#374151';
        }

        // Update or create validation message
        let messageEl = this.container.querySelector(`#${fieldName}-validation`);
        if (!messageEl) {
            messageEl = document.createElement('div');
            messageEl.id = `${fieldName}-validation`;
            messageEl.style.cssText = 'font-size: 12px; margin-top: 4px;';
            field.parentNode.appendChild(messageEl);
        }

        if (errors.length > 0) {
            messageEl.textContent = errors[0];
            messageEl.style.color = '#ef4444';
        } else if (warnings.length > 0) {
            messageEl.textContent = warnings[0];
            messageEl.style.color = '#f59e0b';
        } else {
            messageEl.textContent = '';
        }
    }

    /**
     * Get section data
     */
    getData() {
        return { ...this.data };
    }

    /**
     * Set section data
     */
    setData(data) {
        this.data = { ...data };
        this.render();
    }

    /**
     * Update section data
     */
    updateData(updates) {
        this.data = { ...this.data, ...updates };
        this.render();
    }

    /**
     * Clear section data
     */
    clearData() {
        this.data = {};
        this.render();
    }

    /**
     * Set echelon level
     */
    setEchelon(echelon) {
        this.echelon = echelon;
        console.log(`📊 ${this.sectionTitle} echelon set to: ${echelon}`);
        
        // Re-render to show/hide echelon-specific fields
        this.render();
    }

    /**
     * Get echelon level
     */
    getEchelon() {
        return this.echelon;
    }

    /**
     * Check if field should be visible for current echelon
     */
    isFieldVisibleForEchelon(fieldConfig) {
        if (!fieldConfig.echelons) return true;
        return fieldConfig.echelons.includes(this.echelon);
    }

    /**
     * Render form field helper
     */
    renderFormField(config) {
        const {
            name,
            label,
            type = 'text',
            placeholder = '',
            required = false,
            helpText = '',
            rows = 3,
            echelons = null
        } = config;

        // Check echelon visibility
        if (echelons && !echelons.includes(this.echelon)) {
            return '';
        }

        const value = this.data[name] || '';
        const requiredMark = required ? '<span style="color: #ef4444;">*</span>' : '';

        let fieldHtml = '';

        if (type === 'textarea') {
            fieldHtml = `
                <textarea 
                    id="${name}" 
                    name="${name}" 
                    rows="${rows}"
                    placeholder="${placeholder}"
                    style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px; color: #f8fafc; font-size: 14px; font-family: monospace; line-height: 1.6; resize: vertical;"
                >${value}</textarea>
            `;
        } else if (type === 'select') {
            const options = config.options || [];
            fieldHtml = `
                <select 
                    id="${name}" 
                    name="${name}"
                    style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px; color: #f8fafc; font-size: 14px;">
                    ${options.map(opt => `<option value="${opt.value}" ${value === opt.value ? 'selected' : ''}>${opt.label}</option>`).join('')}
                </select>
            `;
        } else {
            fieldHtml = `
                <input 
                    type="${type}" 
                    id="${name}" 
                    name="${name}" 
                    value="${value}"
                    placeholder="${placeholder}"
                    style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px; color: #f8fafc; font-size: 14px;">
            `;
        }

        return `
            <div class="form-field" style="margin-bottom: 20px;">
                <label for="${name}" style="color: #f8fafc; font-size: 14px; font-weight: 500; display: block; margin-bottom: 8px;">
                    ${label} ${requiredMark}
                </label>
                ${fieldHtml}
                ${helpText ? `<div style="color: #9ca3af; font-size: 12px; margin-top: 4px;">${helpText}</div>` : ''}
            </div>
        `;
    }

    /**
     * Render portion marking popover field (Phase 2 - Updated)
     * @param {string} fieldName - Field name/ID
     * @param {string} label - Field label
     * @param {string} currentMarking - Current portion marking (e.g., "(U)", "(S)", "(TS//SI)")
     * @returns {string} HTML for portion marking button and display
     */
    renderPortionMarkingField(fieldName, label, currentMarking = '(U)') {
        if (!this.portionMarkingManager) {
            return ''; // No portion marking support if manager not provided
        }

        return `
            <div class="portion-marking-field" style="margin-bottom: 16px;">
                <label for="${fieldName}-portion-marking-btn" style="color: #f8fafc; font-size: 13px; font-weight: 500; display: block; margin-bottom: 6px;">
                    ${label} - Portion Marking
                </label>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <button
                        id="${fieldName}-portion-marking-btn"
                        class="portion-marking-button"
                        data-field-name="${fieldName}"
                        data-current-value="${currentMarking}"
                        type="button"
                        style="background: #3b82f6; color: #ffffff; border: none; border-radius: 6px; padding: 10px 16px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;"
                    >
                        Portion Marking
                    </button>
                    <div class="portion-marking-display" style="color: #cbd5e1; font-family: 'Courier New', monospace; font-size: 13px; font-weight: 600;">
                        ${currentMarking}
                    </div>
                </div>
                <div style="color: #94a3b8; font-size: 11px; margin-top: 4px;">
                    Click button to select classification level for this field
                </div>
            </div>
        `;
    }

    /**
     * Extract portion markings from section data (Phase 2 - Updated)
     * Collects all portion markings from fields in this section
     * Scans both popover buttons AND text content for portion marking patterns
     * Uses enhanced regex from prototype with validation filtering
     * @returns {Array<string>} Array of portion markings (e.g., ["(U)", "(S)", "(TS//SI)"])
     */
    extractPortionMarkings() {
        const markings = [];

        if (!this.container) {
            return markings;
        }

        // 1. Find all portion marking buttons (popovers)
        const buttons = this.container.querySelectorAll('.portion-marking-button');
        buttons.forEach(button => {
            const marking = button.dataset.currentValue;
            if (marking && marking.trim() !== '') {
                markings.push(marking);
            }
        });

        // 2. Scan all text inputs and textareas for portion marking patterns
        // Enhanced regex from prototype: matches ANY content in parentheses, then filters
        // This catches edge cases like "(U )" (with space) or "(u)" (lowercase)
        const portionMarkingRegex = /\(\s*([^)]+)\s*\)/gi;

        const textInputs = this.container.querySelectorAll('input[type="text"], textarea');
        textInputs.forEach(input => {
            const text = input.value;
            if (text) {
                const matches = text.match(portionMarkingRegex);
                if (matches) {
                    matches.forEach(match => {
                        // Normalize: trim, uppercase, then validate
                        const normalized = match.trim().toUpperCase();
                        const content = normalized.replace(/[()]/g, '').trim();

                        // Validate that this is a real portion marking
                        if (this.looksLikeClassificationMarking(content)) {
                            markings.push(normalized);
                        }
                    });
                }
            }
        });

        return markings;
    }

    /**
     * Validate if content looks like a DoD classification marking (Phase 3)
     * Enhanced validation from prototype with comprehensive pattern matching
     * @param {string} content - Content without parentheses (e.g., "S", "TS//SI")
     * @returns {boolean} True if content looks like a classification marking
     */
    looksLikeClassificationMarking(content) {
        if (!content) return false;

        // Comprehensive classification patterns from prototype
        const classificationPatterns = [
            /^U$/i,                           // (U)
            /^CUI$/i,                         // (CUI)
            /^C$/i,                           // (C)
            /^S$/i,                           // (S)
            /^TS$/i,                          // (TS)
            /^[UCTS]+\/\//i,                  // Complex markings with //
            /FOUO/i,                          // Contains FOUO
            /NOFORN/i,                        // Contains NOFORN
            /NF$/i,                           // Ends with NF (shorthand for NOFORN)
            /REL\s+(TO\s+)?/i,                // Contains REL or REL TO
            /FVEY/i,                          // Contains FVEY
            /SI/i,                            // Contains SI (Special Intelligence)
            /TK/i,                            // Contains TK (Talent Keyhole)
            /SAP/i,                           // Contains SAP (Special Access Program)
            /HCS/i,                           // Contains HCS (HUMINT Control System)
            /ORCON/i,                         // Contains ORCON (Originator Controlled)
            /IMCON/i,                         // Contains IMCON (IMAGERY Controlled)
            /PROPIN/i,                        // Contains PROPIN (Proprietary Information)
            /RELIDO/i                         // Contains RELIDO (Releasable by Information Disclosure Official)
        ];

        return classificationPatterns.some(pattern => pattern.test(content));
    }

    /**
     * Validate if a string is a valid DoD portion marking (Phase 3)
     * DEPRECATED: Use looksLikeClassificationMarking() instead
     * Kept for backward compatibility
     * @param {string} marking - Potential portion marking (e.g., "(S)", "(TS//SI)")
     * @returns {boolean} True if valid portion marking
     */
    isValidPortionMarking(marking) {
        const content = marking.replace(/[()]/g, '').trim();
        return this.looksLikeClassificationMarking(content);
    }

    /**
     * Initialize portion marking popovers (Phase 2 - Refactored for FAB-only workflow)
     * Creates PortionMarkingPopover instances for all text input fields
     * Called automatically by attachEventHandlers() after rendering
     *
     * NOTE: This method no longer relies on portion marking buttons.
     * Popovers are created for text fields directly and opened via FAB.
     */
    initializePortionMarkingPopovers() {
        if (!this.container || !this.portionMarkingManager) {
            return; // No portion marking support
        }

        // Find all text input fields (textarea and input[type="text"])
        const textFields = this.container.querySelectorAll('textarea, input[type="text"]');

        let popoverCount = 0;

        textFields.forEach(field => {
            const fieldName = field.id || field.name;

            if (!fieldName) {
                return; // Skip fields without id or name
            }

            // Skip fields that shouldn't have portion marking (e.g., echelon selectors)
            if (this.shouldSkipPortionMarking(fieldName)) {
                return;
            }

            // Get current portion marking from data (if exists)
            const markingKey = `${fieldName}Marking`;
            const currentValue = this.data[markingKey] || '(U)';

            // Create popover instance (without button)
            const popover = new PortionMarkingPopover({
                button: null, // No button - FAB will trigger opening
                classificationManager: this.portionMarkingManager.classificationManager,
                currentValue: currentValue,
                targetField: field,
                onApply: (portionMarking) => {
                    // Store portion marking in data
                    this.data[markingKey] = portionMarking;

                    // Insert portion marking into text field
                    this.insertPortionMarkingIntoField(field, portionMarking);

                    // Notify portion marking change
                    this.notifyPortionMarkingChange();

                    console.log(`✅ Portion marking applied for ${fieldName}:`, portionMarking);
                },
                onCancel: () => {
                    console.log(`❌ Portion marking cancelled for ${fieldName}`);
                }
            });

            // Store popover instance
            this.portionMarkingPopovers.set(fieldName, popover);
            popoverCount++;
        });

        console.log(`🎨 Initialized ${popoverCount} portion marking popovers for ${this.sectionId}`);
    }

    /**
     * Check if a field should skip portion marking initialization
     * @param {string} fieldName - Field name/ID
     * @returns {boolean} True if field should be skipped
     */
    shouldSkipPortionMarking(fieldName) {
        // Skip echelon selectors
        if (fieldName.includes('-echelon') || fieldName === 'echelon') {
            return true;
        }

        // Skip other non-content fields
        const skipPatterns = [
            'toggle-',
            'btn-',
            'button-',
            'selector-'
        ];

        return skipPatterns.some(pattern => fieldName.includes(pattern));
    }

    /**
     * Insert portion marking into text field at cursor position
     * @param {HTMLElement} field - Text input or textarea element
     * @param {string} portionMarking - Portion marking to insert (e.g., "(S)")
     */
    insertPortionMarkingIntoField(field, portionMarking) {
        if (!field || !portionMarking) return;

        const isTextarea = field.tagName.toLowerCase() === 'textarea';
        const isInput = field.tagName.toLowerCase() === 'input';

        if (!isTextarea && !isInput) return;

        // Get current value and cursor position
        const currentValue = field.value || '';
        const cursorPos = field.selectionStart || 0;

        // Insert portion marking at cursor position (or beginning if empty)
        let newValue;
        if (currentValue.trim() === '') {
            // Empty field - insert at beginning with space after
            newValue = `${portionMarking} `;
        } else {
            // Insert at cursor position
            newValue = currentValue.substring(0, cursorPos) + portionMarking + ' ' + currentValue.substring(cursorPos);
        }

        // Update field value
        field.value = newValue;

        // Set cursor position after inserted portion marking
        const newCursorPos = cursorPos + portionMarking.length + 1;
        field.setSelectionRange(newCursorPos, newCursorPos);

        // Focus the field
        field.focus();

        // Trigger input event to update data model
        field.dispatchEvent(new Event('input', { bubbles: true }));

        console.log(`📝 Inserted "${portionMarking}" into field at position ${cursorPos}`);

        // Phase 2: Update inline badge visual feedback
        this.updateInlineBadgeVisual(field, portionMarking);
    }

    /**
     * Update inline badge visual feedback (Phase 2)
     * Adds visual styling to help users identify portion markings in field values
     * @param {HTMLElement} field - Text input or textarea element
     * @param {string} portionMarking - Portion marking that was inserted
     */
    updateInlineBadgeVisual(field, portionMarking) {
        if (!field) return;

        // Add a data attribute to track that this field has a portion marking
        field.setAttribute('data-has-portion-marking', 'true');
        field.setAttribute('data-portion-marking', portionMarking);

        // Add CSS class for enhanced styling
        field.classList.add('has-portion-marking');

        // Emit event for other components to react
        if (this.eventBus) {
            this.eventBus.emit('portion-marking:visual-updated', {
                fieldId: field.id || field.name,
                portionMarking: portionMarking,
                timestamp: new Date().toISOString()
            });
        }
    }

    /**
     * Notify portion marking change (Phase 3)
     * Called when user changes a portion marking (via popover or text input)
     * Registers the updated markings with PortionMarkingManager
     */
    notifyPortionMarkingChange() {
        if (!this.portionMarkingManager) {
            return; // No portion marking support
        }

        // Extract all portion markings from this section
        const markings = this.extractPortionMarkings();

        // Store in instance variable
        this.portionMarkings = markings;

        // Register with PortionMarkingManager
        this.portionMarkingManager.registerPortionMarkings(this.sectionId, markings);

        console.log(`📋 Portion markings updated for ${this.sectionId}:`, markings);
    }

    /**
     * Attach portion marking event handlers (Phase 3)
     * Should be called after rendering portion marking fields
     * Attaches listeners to both dropdowns AND text inputs
     * Enhanced with blur and paste event listeners from prototype
     */
    attachPortionMarkingHandlers() {
        if (!this.container || !this.portionMarkingManager) {
            return;
        }

        // Prevent duplicate listener attachment
        if (this.container.hasAttribute('data-portion-handlers-attached')) {
            console.log(`📋 Portion marking handlers already attached for ${this.sectionId}`);
            return;
        }
        this.container.setAttribute('data-portion-handlers-attached', 'true');

        // 1. Attach listeners to portion marking select elements (dropdowns)
        const selects = this.container.querySelectorAll('.portion-marking-select');
        selects.forEach(select => {
            select.addEventListener('change', () => {
                this.notifyPortionMarkingChange();
            });
        });

        // 2. Attach listeners to text inputs and textareas for manual portion marking entry
        const textInputs = this.container.querySelectorAll('input[type="text"], textarea');
        textInputs.forEach(input => {
            // Prevent duplicate listeners on individual fields
            if (input.hasAttribute('data-portion-detection')) {
                return;
            }
            input.setAttribute('data-portion-detection', 'true');

            // a) INPUT event - Real-time detection as user types (debounced)
            input.addEventListener('input', () => {
                // Debounce to avoid excessive updates while typing
                clearTimeout(this._portionMarkingDebounce);
                this._portionMarkingDebounce = setTimeout(() => {
                    this.notifyPortionMarkingChange();
                }, 500); // Wait 500ms after user stops typing
            });

            // b) BLUR event - Final validation when field loses focus
            input.addEventListener('blur', () => {
                // Clear any pending debounced updates
                clearTimeout(this._portionMarkingDebounce);
                // Immediate update on blur
                this.notifyPortionMarkingChange();
            });

            // c) PASTE event - Detect pasted content with portion markings
            input.addEventListener('paste', () => {
                // Use setTimeout to detect after paste content is inserted
                setTimeout(() => {
                    this.notifyPortionMarkingChange();
                }, 100);
            });
        });

        console.log(`📋 Portion marking handlers attached for ${this.sectionId} (${selects.length} dropdowns, ${textInputs.length} text inputs with 3 event types each)`);
    }

    /**
     * Clear all portion markings from all fields in this section
     *
     * SECURITY FIX: Called when user clicks "Clear All" in ClassificationPickerInline
     * to prevent classification security violations where portion markings remain
     * in fields while overall banner is UNCLASSIFIED (violates DoDM 5200.01 Volume 2)
     *
     * This method:
     * 1. Finds all text inputs and textareas in the section
     * 2. Removes portion markings from field values using regex
     * 3. Clears portion marking data attributes
     * 4. Removes visual styling classes
     * 5. Clears stored portion marking data
     * 6. Triggers input events to update data model
     */
    clearAllPortionMarkingsFromFields() {
        if (!this.container) return;

        console.log(`🧹 Clearing all portion markings from ${this.sectionId} section...`);

        // Find all text inputs and textareas
        const fields = this.container.querySelectorAll('input[type="text"], textarea');
        let clearedCount = 0;

        console.log(`🔍 Found ${fields.length} fields in ${this.sectionId} section`);

        fields.forEach(field => {
            const fieldName = field.id || field.name;
            if (!fieldName) {
                console.log(`⚠️ Skipping field with no id/name`);
                return;
            }

            // Skip fields that shouldn't have portion marking
            if (this.shouldSkipPortionMarking(fieldName)) {
                console.log(`⏭️ Skipping field ${fieldName} (shouldSkipPortionMarking returned true)`);
                return;
            }

            // Get current value
            const currentValue = field.value || '';

            // DEBUG: Log field details
            console.log(`📝 Field: ${fieldName}`);
            console.log(`   Type: ${field.tagName.toLowerCase()}`);
            console.log(`   Current value: "${currentValue.substring(0, 100)}${currentValue.length > 100 ? '...' : ''}"`);
            console.log(`   Has portion marking attr: ${field.getAttribute('data-has-portion-marking')}`);
            console.log(`   Portion marking attr: ${field.getAttribute('data-portion-marking')}`);

            // Remove portion markings from the value using regex
            // Matches patterns like: (U), (S), (TS//SI/TK//NF), (TS//SI/TK//REL FVEY), etc.
            // Regex explanation:
            // \(                      - Opening parenthesis
            // [A-Z]+                  - Classification level (U, C, S, TS)
            // (?:\/\/[A-Z0-9\/\s\-,]+)*  - Optional compartments/controls (//SI/TK//NF, //SAR-123)
            //         ↑ Added / and 0-9 to match forward slashes and SAP program numbers
            // \)                      - Closing parenthesis
            // \s*                     - Optional trailing whitespace
            const portionMarkingRegex = /\([A-Z]+(?:\/\/[A-Z0-9\/\s\-,]+)*\)\s*/g;
            const matches = currentValue.match(portionMarkingRegex);

            if (matches) {
                console.log(`   🎯 Regex matched: ${JSON.stringify(matches)}`);
            } else {
                console.log(`   ❌ Regex did NOT match any portion markings`);
            }

            const newValue = currentValue.replace(portionMarkingRegex, '');

            console.log(`   New value: "${newValue.substring(0, 100)}${newValue.length > 100 ? '...' : ''}"`);
            console.log(`   Value changed: ${newValue !== currentValue}`);

            // Only update if value changed
            if (newValue !== currentValue) {
                field.value = newValue;
                clearedCount++;

                // Trigger input event to update data model
                field.dispatchEvent(new Event('input', { bubbles: true }));
                console.log(`   ✅ Cleared portion marking from ${fieldName}`);
            }

            // Clear portion marking data attributes
            field.removeAttribute('data-has-portion-marking');
            field.removeAttribute('data-portion-marking');

            // Remove visual styling class
            field.classList.remove('has-portion-marking');

            // Clear stored portion marking data
            const markingKey = `${fieldName}Marking`;
            if (this.data && this.data[markingKey]) {
                delete this.data[markingKey];
                console.log(`   🗑️ Deleted ${markingKey} from section data`);
            }
        });

        console.log(`✅ Cleared ${clearedCount} portion markings from ${this.sectionId} section`);

        // Notify portion marking change (will update PortionMarkingManager)
        this.notifyPortionMarkingChange();
    }

    /**
     * Destroy component
     */
    destroy() {
        // Clean up portion marking popovers (Phase 2)
        if (this.portionMarkingPopovers && this.portionMarkingPopovers.size > 0) {
            this.portionMarkingPopovers.forEach(popover => {
                if (popover && typeof popover.destroy === 'function') {
                    popover.destroy();
                }
            });
            this.portionMarkingPopovers.clear();
            console.log(`🗑️ Cleaned up ${this.portionMarkingPopovers.size} portion marking popovers`);
        }

        // Remove event listeners
        this.eventBus.off(`section:${this.sectionId}:update`);
        this.eventBus.off(`section:${this.sectionId}:validate`);
        this.eventBus.off('draft:echelon-changed');
        this.eventBus.off('portion-marking:cleared');

        // Clear container
        if (this.container) {
            this.container.innerHTML = '';
        }

        this.initialized = false;
        console.log(`🗑️ ${this.sectionTitle} destroyed`);
    }
}

export default BaseSectionComponent;

