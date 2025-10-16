/**
 * Mission Section Component
 * OPORD Paragraph 2: Mission Statement
 * Implements the 5 W's (Who, What, When, Where, Why) with real-time mission statement generation
 *
 * DESIGN PATTERN: Extends BaseSectionComponent for reusability in MDMP/JPP tools
 * ECHELON-AGNOSTIC: Supports all 11 echelons (Squad/Team through Theater)
 * PHASE 7: Integrated with FormBuilder for dynamic form generation and validation
 *
 * @module MissionSection
 */

import { BaseSectionComponent } from './BaseSectionComponent.js';
import { FormBuilder } from '../../ui/FormBuilder.js';

export class MissionSection extends BaseSectionComponent {
    constructor(eventBus, portionMarkingManager = null) {
        super('mission', '2. MISSION', eventBus, portionMarkingManager);

        // Initialize FormBuilder for dynamic form generation
        this.formBuilder = new FormBuilder(eventBus);
        this.formBuilder.initialize();

        // Define validation rules for mission fields
        this.validationRules = {
            who: {
                required: true,
                label: 'Who (Unit)',
                validate: (value) => {
                    if (value && value.includes('[')) {
                        return { warning: 'Unit designation contains placeholder text' };
                    }
                    return {};
                }
            },
            what: {
                required: true,
                label: 'What (Task)',
                validate: (value) => {
                    if (value && value.length < 10) {
                        return { warning: 'Task description may be too brief' };
                    }
                    return {};
                }
            },
            when: {
                required: true,
                label: 'When (Time)',
                pattern: /NLT|NMT|H-|H\+|\d{6}Z/i,
                validate: (value) => {
                    if (value && !value.match(/NLT|NMT|H-|H\+|\d{6}Z/i)) {
                        return { warning: 'Time should include NLT (No Later Than) or military time format' };
                    }
                    return {};
                }
            },
            where: {
                required: true,
                label: 'Where (Location)',
                validate: (value) => {
                    if (value && value.length < 5) {
                        return { warning: 'Location may be too vague' };
                    }
                    return {};
                }
            },
            why: {
                required: true,
                label: 'Why (Purpose)',
                validate: (value) => {
                    if (value && value.length < 15) {
                        return { warning: 'Purpose should clearly state the reason for the operation' };
                    }
                    return {};
                }
            }
        };

        // Echelon-specific examples (11 standardized echelons)
        this.echelonExamples = {
            'platoon': {
                who: '1st Platoon, Alpha Company, 1-87th Infantry',
                what: 'seizes OBJ ALPHA',
                when: 'NLT 151200Z JAN 25',
                where: 'vic grid AB 123456',
                why: 'to enable company seizure of OBJ BRAVO'
            },
            'company': {
                who: 'Alpha Company, 1-87th Infantry Regiment',
                what: 'attacks to seize OBJ ALPHA',
                when: 'NLT 151200Z JAN 25',
                where: 'vic grid AB 123456',
                why: 'to enable battalion seizure of OBJ BRAVO'
            },
            'squadron': {
                who: '1st Squadron, 3rd Armored Cavalry Regiment',
                what: 'conducts reconnaissance and security operations',
                when: 'NLT 181200Z JAN 25',
                where: 'along Axis SABER from PL RED to PL BLUE',
                why: 'to provide early warning and security for regiment main body'
            },
            'battalion': {
                who: '1-87th Infantry Regiment',
                what: 'defends Battle Position STEEL',
                when: 'NLT 201800Z JAN 25',
                where: 'vic grid CD 789012',
                why: 'to defeat enemy attack and retain key terrain'
            },
            'group': {
                who: '160th Special Operations Aviation Regiment (Airborne)',
                what: 'conducts air assault operations',
                when: 'NLT 220300Z JAN 25',
                where: 'LZ HAWK vic grid EF 456789',
                why: 'to insert special operations forces into objective area'
            },
            'regiment': {
                who: '75th Ranger Regiment',
                what: 'conducts airborne assault to seize OBJ RANGER',
                when: 'NLT 250600Z JAN 25',
                where: 'DZ APACHE vic grid GH 234567',
                why: 'to secure airfield and enable follow-on forces'
            },
            'brigade': {
                who: '1st Brigade Combat Team, 10th Mountain Division',
                what: 'conducts movement to contact along Axis LIGHTNING',
                when: 'NLT 051200Z FEB 25',
                where: 'from AA THUNDER to OBJ STORM',
                why: 'to maintain contact with withdrawing enemy forces'
            },
            'division': {
                who: '10th Mountain Division',
                what: 'conducts offensive operations to seize OBJ MOUNTAIN',
                when: 'NLT 101200Z FEB 25',
                where: 'AO EAGLE',
                why: 'to destroy enemy division and enable corps exploitation'
            },
            'corps': {
                who: 'XVIII Airborne Corps',
                what: 'conducts joint forcible entry operations',
                when: 'NLT 150600Z MAR 25',
                where: 'Joint Operations Area FALCON',
                why: 'to establish lodgment for follow-on forces'
            },
            'army': {
                who: 'Third Army (ARCENT)',
                what: 'conducts theater-level offensive operations',
                when: 'NLT 010001Z APR 25',
                where: 'Theater of Operations CENTCOM AOR',
                why: 'to defeat enemy forces and restore regional stability'
            },
            'theater': {
                who: 'U.S. Central Command',
                what: 'conducts joint and combined operations',
                when: 'NLT 010001Z MAY 25',
                where: 'CENTCOM Area of Responsibility',
                why: 'to achieve national strategic objectives and protect U.S. interests'
            }
        };
    }

    /**
     * Render mission section fields
     */
    renderFields() {
        const example = this.echelonExamples[this.echelon] || this.echelonExamples['company'];

        // Build validation summary
        const validationSummary = this.formBuilder.buildValidationSummary('mission-form');

        // Build echelon selector using FormBuilder
        const echelonField = this.formBuilder.buildSelectField({
            id: 'mission-echelon',
            name: 'echelon',
            label: 'Echelon Level',
            value: this.echelon,
            options: [
                { value: 'platoon', label: 'Platoon' },
                { value: 'company', label: 'Company' },
                { value: 'squadron', label: 'Squadron' },
                { value: 'battalion', label: 'Battalion' },
                { value: 'group', label: 'Group' },
                { value: 'regiment', label: 'Regiment' },
                { value: 'brigade', label: 'Brigade' },
                { value: 'division', label: 'Division' },
                { value: 'corps', label: 'Corps' },
                { value: 'army', label: 'Army' },
                { value: 'theater', label: 'Theater' }
            ],
            helpText: 'Select the echelon level for this operation. Examples will adjust accordingly.'
        });

        // Build 5 W's fields using FormBuilder with validation
        const whoField = this.formBuilder.buildTextField({
            id: 'who',
            name: 'who',
            label: '1. WHO (Unit)',
            value: this.data.who || '',
            placeholder: example.who,
            required: true,
            helpText: 'The unit conducting the operation (e.g., "Alpha Company, 1-87th Infantry Regiment")',
            tooltip: 'Enter the unit designation that will conduct this operation',
            validation: {
                required: true,
                minLength: 3,
                maxLength: 200
            }
        });

        const whatField = this.formBuilder.buildTextField({
            id: 'what',
            name: 'what',
            label: '2. WHAT (Task)',
            value: this.data.what || '',
            placeholder: example.what,
            required: true,
            helpText: 'The tactical task to be accomplished (e.g., "attacks to seize OBJ ALPHA")',
            tooltip: 'Enter the primary tactical task',
            validation: {
                required: true,
                minLength: 10,
                maxLength: 300
            }
        });

        const whenField = this.formBuilder.buildTextField({
            id: 'when',
            name: 'when',
            label: '3. WHEN (Time)',
            value: this.data.when || '',
            placeholder: example.when,
            required: true,
            helpText: 'Time or condition for execution (e.g., "NLT 151200Z JAN 25" or "H+30")',
            tooltip: 'Enter the time or condition for mission execution',
            validation: {
                required: true,
                minLength: 3,
                maxLength: 100,
                pattern: 'NLT|NMT|H-|H\\+|\\d{6}Z',
                patternMessage: 'Time should include NLT, NMT, H-hour notation, or military DTG format'
            }
        });

        const whereField = this.formBuilder.buildTextField({
            id: 'where',
            name: 'where',
            label: '4. WHERE (Location)',
            value: this.data.where || '',
            placeholder: example.where,
            required: true,
            helpText: 'Location of the operation (e.g., "vic grid AB 123456" or "AO EAGLE")',
            tooltip: 'Enter the location where the operation will be conducted',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 200
            }
        });

        const whyField = this.formBuilder.buildTextField({
            id: 'why',
            name: 'why',
            label: '5. WHY (Purpose)',
            value: this.data.why || '',
            placeholder: example.why,
            required: true,
            helpText: 'The purpose of the operation - why it must be accomplished',
            tooltip: 'Enter the purpose that explains why this mission is necessary',
            validation: {
                required: true,
                minLength: 15,
                maxLength: 300
            }
        });

        return `
            <div class="mission-fields">
                <!-- Validation Summary -->
                ${validationSummary}

                <!-- Echelon Selector -->
                ${echelonField}

                <!-- 5 W's Fields -->
                <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                    <h4 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin-bottom: 16px;">
                        <i class="fas fa-list-ol" style="margin-right: 8px;"></i>
                        Mission Elements (5 W's)
                    </h4>

                    ${whoField}

                    ${whatField}

                    ${whenField}

                    ${whereField}

                    ${whyField}
                </div>

                <!-- Generated Mission Statement -->
                <div style="background: #1f2937; border: 2px solid #3b82f6; border-radius: 8px; padding: 20px;">
                    <h4 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                        <i class="fas fa-file-alt" style="margin-right: 8px;"></i>
                        Generated Mission Statement
                    </h4>
                    <div id="mission-statement-preview" style="background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 16px; color: #f8fafc; font-size: 14px; line-height: 1.8; font-family: 'Courier New', monospace; min-height: 60px;">
                        ${this.generateMissionStatement()}
                    </div>
                    <div style="color: #9ca3af; font-size: 12px; margin-top: 8px;">
                        <i class="fas fa-info-circle" style="margin-right: 4px;"></i>
                        This statement is automatically generated from the 5 W's above and updates in real-time.
                    </div>
                </div>

                <!-- Additional Mission Details (Progressive Disclosure) -->
                <div style="margin-top: 20px;">
                    <button id="toggle-additional-details" type="button"
                        style="background: #374151; color: #f8fafc; padding: 10px 16px; border: 1px solid #4b5563; border-radius: 6px; font-size: 14px; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                        <i class="fas fa-plus-circle"></i>
                        Add Additional Mission Details
                    </button>
                    <div id="additional-mission-details" style="display: none; margin-top: 16px;">
                        ${this.formBuilder.buildTextAreaField({
                            id: 'constraints',
                            name: 'constraints',
                            label: 'Constraints',
                            value: this.data.constraints || '',
                            rows: 3,
                            placeholder: 'Restrictions or limitations on the operation (e.g., "Minimize civilian casualties", "No fires beyond PL RED")',
                            helpText: 'Constraints are restrictions placed on the command by higher headquarters',
                            validation: {
                                maxLength: 1000
                            }
                        })}

                        ${this.formBuilder.buildTextAreaField({
                            id: 'restraints',
                            name: 'restraints',
                            label: 'Restraints',
                            value: this.data.restraints || '',
                            rows: 3,
                            placeholder: 'Actions prohibited by higher headquarters (e.g., "Do not cross international border")',
                            helpText: 'Restraints are prohibitions on action',
                            validation: {
                                maxLength: 1000
                            }
                        })}

                        ${this.formBuilder.buildTextAreaField({
                            id: 'endState',
                            name: 'endState',
                            label: 'Desired End State',
                            value: this.data.endState || '',
                            rows: 3,
                            placeholder: 'Conditions that define mission success (e.g., "Enemy destroyed, OBJ ALPHA secured, unit prepared for follow-on operations")',
                            helpText: 'The desired conditions that define mission accomplishment',
                            validation: {
                                maxLength: 1000
                            }
                        })}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Attach event handlers
     */
    attachEventHandlers() {
        // Call parent method
        super.attachEventHandlers();

        // Attach portion marking handlers (Phase 3)
        this.attachPortionMarkingHandlers();

        // Echelon selector handler
        const echelonSelect = this.container.querySelector('#mission-echelon');
        if (echelonSelect) {
            echelonSelect.addEventListener('change', (e) => {
                this.setEchelon(e.target.value);
                this.eventBus.emit('draft:echelon-changed', { echelon: e.target.value });
            });
        }

        // Real-time mission statement generation and validation
        const missionFields = ['who', 'what', 'when', 'where', 'why'];
        missionFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                // Update mission statement on input
                field.addEventListener('input', () => {
                    this.updateMissionStatementPreview();
                });

                // Validate on blur
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Validation for additional fields
        const additionalFields = ['constraints', 'restraints', 'endState'];
        additionalFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Toggle additional details
        const toggleBtn = this.container.querySelector('#toggle-additional-details');
        const detailsDiv = this.container.querySelector('#additional-mission-details');
        if (toggleBtn && detailsDiv) {
            toggleBtn.addEventListener('click', () => {
                const isVisible = detailsDiv.style.display !== 'none';
                detailsDiv.style.display = isVisible ? 'none' : 'block';
                toggleBtn.innerHTML = isVisible ?
                    '<i class="fas fa-plus-circle"></i> Add Additional Mission Details' :
                    '<i class="fas fa-minus-circle"></i> Hide Additional Mission Details';
            });
        }
    }

    /**
     * Validate individual field
     * Override parent method to use FormBuilder validation while maintaining compatibility
     * @param {string} fieldName - Field name
     * @param {*} fieldValue - Field value (optional, will use this.data if not provided)
     * @param {Object} rules - Validation rules (optional, will use this.validationRules if not provided)
     * @returns {Object} - { errors: [], warnings: [] }
     */
    validateField(fieldName, fieldValue = null, rules = null) {
        const errors = [];
        const warnings = [];

        // Get field value
        const value = fieldValue !== null ? fieldValue : this.data[fieldName];

        // Get validation rules - use provided rules or fall back to this.validationRules
        const fieldRules = rules || this.validationRules[fieldName];

        if (!fieldRules) {
            return { errors, warnings };
        }

        // Use parent class validation logic for compatibility
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

        // If we have a container and field element, update UI with FormBuilder
        if (this.container) {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                // Display or clear errors using FormBuilder
                if (errors.length > 0) {
                    this.formBuilder.displayFieldError(fieldName, errors[0]);
                } else {
                    this.formBuilder.clearFieldError(fieldName);
                }
                this.updateValidationSummary();
            }
        }

        return { errors, warnings };
    }

    /**
     * Update validation summary
     */
    updateValidationSummary() {
        const errors = [];

        // Collect all field errors
        this.formBuilder.fieldErrors.forEach((message, fieldId) => {
            errors.push({ fieldId, message });
        });

        // Display validation summary
        this.formBuilder.displayValidationSummary('mission-form', errors);
    }

    /**
     * Generate mission statement from 5 W's
     */
    generateMissionStatement() {
        const who = this.data.who || '[UNIT]';
        const what = this.data.what || '[TASK]';
        const when = this.data.when || '[TIME]';
        const where = this.data.where || '[LOCATION]';
        const why = this.data.why || '[PURPOSE]';

        // Check if all fields are filled
        const allFilled = this.data.who && this.data.what && this.data.when && 
                         this.data.where && this.data.why;

        if (!allFilled) {
            return '<span style="color: #9ca3af; font-style: italic;">Fill in the 5 W\'s above to generate the mission statement...</span>';
        }

        // Generate formatted mission statement
        return `${who} ${what} NLT ${when} ${where} in order to ${why}.`;
    }

    /**
     * Update mission statement preview in real-time
     */
    updateMissionStatementPreview() {
        const previewEl = this.container.querySelector('#mission-statement-preview');
        if (previewEl) {
            previewEl.innerHTML = this.generateMissionStatement();
        }

        // Store generated statement in data
        this.data.fullStatement = this.generateMissionStatement();
    }

    /**
     * Get formatted mission statement for export
     */
    getFormattedMissionStatement() {
        return this.generateMissionStatement().replace(/<[^>]*>/g, ''); // Strip HTML tags
    }
}

export default MissionSection;

