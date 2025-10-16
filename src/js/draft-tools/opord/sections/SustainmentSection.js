/**
 * Sustainment Section Component
 * OPORD Paragraph 4 - Sustainment
 * Extends BaseSectionComponent for reusability
 *
 * Supports all 11 standardized echelons (Platoon through Theater)
 *
 * @module SustainmentSection
 */

import { BaseSectionComponent } from './BaseSectionComponent.js';
import { FormBuilder } from '../../ui/FormBuilder.js';

export class SustainmentSection extends BaseSectionComponent {
    constructor(eventBus, portionMarkingManager = null) {
        super('sustainment', '4. SUSTAINMENT', eventBus, portionMarkingManager);

        // Initialize FormBuilder for dynamic form generation
        this.formBuilder = new FormBuilder(eventBus);
        this.formBuilder.initialize();

        // Validation rules for sustainment fields
        this.validationRules = {
            logistics: {
                required: true,
                label: 'Logistics',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Logistics contains placeholder text' };
                    }
                    if (value && value.length < 50) {
                        return { warning: 'Logistics description seems brief (less than 50 characters)' };
                    }
                    return {};
                }
            },
            personnel: {
                required: true,
                label: 'Personnel',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Personnel contains placeholder text' };
                    }
                    return {};
                }
            },
            healthServiceSupport: {
                required: true,
                label: 'Health Service Support',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Health Service Support contains placeholder text' };
                    }
                    if (value && value.length < 30) {
                        return { warning: 'Health Service Support seems brief (less than 30 characters)' };
                    }
                    return {};
                }
            }
        };
        
        // Echelon-specific examples for all 11 echelons
        this.echelonExamples = {
            'platoon': {
                logistics: 'Supply: Class I/III/V resupply at company trains. Class VIII from company medic. Transportation: Organic vehicles. Services: Maintenance at company level.',
                personnel: 'Strength: 30 PAX. Replacements: Through company. EPW: Evacuate to company CP.',
                healthServiceSupport: 'Medical: Platoon medic provides point of injury care. Evacuation: To company aid station. Preventive medicine: Water purification, field sanitation.',
                maintenance: 'Operator maintenance on all equipment. Deadline equipment to company maintenance.',
                supplyPoints: 'Resupply at company trains vic grid AB 123456.',
                casualtyCollection: 'CCP at platoon CP. Evacuation route: Axis BLUE to company aid station.',
                resupplyProcedures: 'Resupply on order. Priority: Class V, Class III, Class I.'
            },
            'company': {
                logistics: 'Supply: Class I/III/V/VIII from battalion. Class II/IV on request. Transportation: Organic and battalion assets. Services: Company trains at grid AB 234567. Field feeding, water distribution.',
                personnel: 'Strength: 120 PAX. Replacements: From battalion. EPW: Collect at company CP, evacuate to battalion.',
                healthServiceSupport: 'Medical: Company aid station at grid AB 234500. Evacuation: Ground ambulance to battalion aid station. Preventive medicine: Unit field sanitation team.',
                maintenance: 'Company maintenance section at trains. Deadline equipment to battalion maintenance.',
                supplyPoints: 'ASP at grid AB 234600. ATP at grid AB 234700. Water point at grid AB 234800.',
                casualtyCollection: 'CCP at company aid station. Evacuation route: MSR BLUE to battalion aid station.',
                resupplyProcedures: 'Resupply daily at 1800. Emergency resupply on request. Priority: Class V, Class III, Class I, Class VIII.'
            },
            'squadron': {
                logistics: 'Supply: All classes from regiment. Forward arming and refueling point (FARP) at grid CD 345678. Transportation: Organic aviation and ground vehicles. Services: Squadron support troop provides field services.',
                personnel: 'Strength: 400 PAX. Replacements: From regimental personnel section. EPW: Collect and evacuate to regiment.',
                healthServiceSupport: 'Medical: Squadron physician assistant and medics. Evacuation: MEDEVAC by air or ground to regimental aid station. Preventive medicine: Aviation medicine support.',
                maintenance: 'Squadron maintenance troop. Aviation maintenance at FARP. Ground vehicle maintenance at squadron trains.',
                supplyPoints: 'FARP EAGLE at grid CD 345678. Class I/III/V at squadron trains. Class IX aviation at FARP.',
                casualtyCollection: 'CCP at squadron aid station. Air MEDEVAC priority. Ground evacuation via MSR RED.',
                resupplyProcedures: 'FARP operations continuous. Ground resupply twice daily. Emergency resupply by air.'
            },
            'battalion': {
                logistics: 'Supply: All classes from brigade. Battalion support area at grid CD 456789. Transportation: Battalion transportation platoon, brigade assets on request. Services: Field feeding, water purification, laundry, showers.',
                personnel: 'Strength: 600 PAX. Replacements: From brigade personnel section. EPW: Battalion EPW collection point at grid CD 456700, evacuate to brigade.',
                healthServiceSupport: 'Medical: Battalion aid station at grid CD 456750. Physician, physician assistant, medics. Evacuation: Ground ambulance to brigade support area. Role 2 medical at brigade. Preventive medicine: Battalion surgeon cell.',
                maintenance: 'Battalion maintenance company. Recovery operations. Deadline equipment to brigade maintenance.',
                supplyPoints: 'BSA at grid CD 456789. ASP, ATP, water point, Class IX. Ammunition transfer point at grid CD 456800.',
                casualtyCollection: 'Battalion aid station. Multiple CCPs. Evacuation routes: Primary MSR BLUE, Alternate MSR RED.',
                resupplyProcedures: 'Resupply operations twice daily (0600, 1800). Emergency resupply on request. Logistics release point (LRP) procedures.'
            },
            'group': {
                logistics: 'Supply: All classes from theater special operations command. Forward operating base (FOB) sustainment. Transportation: Organic aviation, contracted ground transport. Services: Contracted support, organic field services.',
                personnel: 'Strength: 800 PAX. Replacements: From USASOC. EPW: Special handling procedures, evacuate to joint interrogation facility.',
                healthServiceSupport: 'Medical: Group surgeon, special operations medics. Evacuation: Dedicated MEDEVAC, CASEVAC by mission aircraft. Role 2+ at FOB. Preventive medicine: Operational medicine support.',
                maintenance: 'Group maintenance company. Aviation maintenance at FOB. Contractor logistics support (CLS) for specialized equipment.',
                supplyPoints: 'FOB logistics at secure location. Class I/III/V/IX. Specialized equipment through USASOC supply chain.',
                casualtyCollection: 'Role 2+ facility at FOB. Forward surgical team. Multiple evacuation options: air, ground, maritime.',
                resupplyProcedures: 'Resupply by air (rotary/fixed wing). Ground resupply via secure routes. Emergency resupply by any means available.'
            },
            'regiment': {
                logistics: 'Supply: All classes from division or corps. Regimental support squadron provides logistics. Transportation: Organic transportation company, division assets. Services: Field feeding, water, maintenance, supply.',
                personnel: 'Strength: 2000 PAX. Replacements: From division personnel. EPW: Regimental EPW holding area, evacuate to division.',
                healthServiceSupport: 'Medical: Regimental aid station with physicians. Evacuation: Ground and air ambulance to division support area. Role 2 medical. Preventive medicine: Regimental surgeon section.',
                maintenance: 'Regimental maintenance company. Recovery and repair. Deadline equipment to division maintenance.',
                supplyPoints: 'Regimental support area. ASP, ATP, water point, Class II/IV/IX. Multiple distribution points.',
                casualtyCollection: 'Regimental aid station. Battalion CCPs. Evacuation routes: Multiple MSRs to division support area.',
                resupplyProcedures: 'Continuous resupply operations. Logistics package (LOGPAC) to battalions twice daily. Aerial resupply capability.'
            },
            'brigade': {
                logistics: 'Supply: All classes from division. Brigade support battalion provides brigade logistics. Transportation: Brigade transportation company, division assets. Services: Brigade support area provides all field services.',
                personnel: 'Strength: 3500 PAX. Replacements: From division personnel replacement company. EPW: Brigade EPW collection point, evacuate to division.',
                healthServiceSupport: 'Medical: Brigade support medical company. Role 2 medical treatment facility. Evacuation: Ground and air ambulance to division support area. Preventive medicine: Brigade surgeon cell.',
                maintenance: 'Brigade support battalion maintenance company. Forward support companies with battalions. Division maintenance support.',
                supplyPoints: 'Brigade support area at secure location. ASP, ATP, water point, Class II/IV/VII/IX. Distribution company.',
                casualtyCollection: 'Brigade medical treatment facility. Battalion aid stations. Multiple evacuation routes to division.',
                resupplyProcedures: 'LOGPACs to battalions twice daily. Emergency resupply within 2 hours. Aerial resupply by division aviation.'
            },
            'division': {
                logistics: 'Supply: All classes from corps. Division sustainment brigade provides logistics. Transportation: Division transportation battalion, corps assets. Services: Division support area provides all sustainment functions.',
                personnel: 'Strength: 15000 PAX. Replacements: From corps personnel replacement battalion. EPW: Division EPW holding area, evacuate to corps.',
                healthServiceSupport: 'Medical: Division support medical company. Role 2+ medical treatment facilities. Evacuation: Ground and air ambulance to corps support area. Role 3 medical at corps. Preventive medicine: Division surgeon section.',
                maintenance: 'Division sustainment brigade maintenance battalion. Forward maintenance companies. Corps maintenance support.',
                supplyPoints: 'Division support area. Multiple ASPs, ATPs, water points. Class II/IV/VII/IX supply. Distribution companies.',
                casualtyCollection: 'Division medical treatment facilities. Brigade medical companies. Evacuation to corps Role 3 medical.',
                resupplyProcedures: 'Continuous sustainment operations. LOGPACs to brigades. Aerial resupply by division and corps aviation. Contracted support.'
            },
            'corps': {
                logistics: 'Supply: All classes from theater sustainment command. Corps sustainment brigade provides logistics. Transportation: Corps transportation brigade, theater assets. Services: Corps support area provides all sustainment.',
                personnel: 'Strength: 40000 PAX. Replacements: From theater personnel replacement system. EPW: Corps EPW holding facility, evacuate to theater.',
                healthServiceSupport: 'Medical: Corps medical brigade. Role 3 medical treatment facilities with surgical capability. Evacuation: Ground and air ambulance to theater medical facilities. Preventive medicine: Corps surgeon section.',
                maintenance: 'Corps sustainment brigade maintenance battalion. Theater maintenance support. Contractor logistics support.',
                supplyPoints: 'Corps support area. Theater opening, multiple distribution centers. All classes of supply. Ammunition supply points.',
                casualtyCollection: 'Corps Role 3 medical facilities. Division medical companies. Strategic evacuation to CONUS.',
                resupplyProcedures: 'Theater distribution system. Continuous sustainment operations. Contracted transportation. Aerial resupply by theater aviation.'
            },
            'army': {
                logistics: 'Supply: All classes from theater sustainment command and strategic partners. Army sustainment command coordinates. Transportation: Theater transportation command, strategic airlift/sealift. Services: Theater-wide sustainment operations.',
                personnel: 'Strength: 100000+ PAX. Replacements: From CONUS replacement system. EPW: Theater EPW facilities, repatriation procedures.',
                healthServiceSupport: 'Medical: Theater medical command. Role 3/4 medical facilities. Strategic evacuation system. Preventive medicine: Theater preventive medicine.',
                maintenance: 'Theater maintenance command. Strategic maintenance support. Contractor logistics support. Reset operations.',
                supplyPoints: 'Theater distribution system. Strategic ports and airfields. Theater sustainment bases. All classes of supply.',
                casualtyCollection: 'Theater medical system. Strategic evacuation to CONUS. Role 4 medical facilities.',
                resupplyProcedures: 'Theater distribution system. Strategic airlift/sealift. Contracted support. Host nation support. Continuous operations.'
            },
            'theater': {
                logistics: 'Supply: Strategic supply chain from CONUS and coalition partners. Theater sustainment command provides strategic logistics. Transportation: Strategic airlift/sealift, theater transportation. Services: Theater-wide sustainment across all domains.',
                personnel: 'Strength: Theater-wide forces. Replacements: Strategic personnel system. EPW: Theater detention operations, international law compliance.',
                healthServiceSupport: 'Medical: Theater medical system. Role 1-4 medical facilities. Strategic evacuation. Global health engagement. Preventive medicine: Theater-wide.',
                maintenance: 'Theater maintenance operations. Strategic reset. Contractor support. Coalition maintenance support. Depot-level maintenance.',
                supplyPoints: 'Theater distribution system. Strategic ports of debarkation. Theater sustainment bases. Coalition logistics.',
                casualtyCollection: 'Theater medical evacuation system. Strategic evacuation to CONUS and coalition facilities. Role 4 definitive care.',
                resupplyProcedures: 'Strategic distribution system. Airlift/sealift operations. Coalition support. Host nation support. Contracted logistics. Continuous global operations.'
            }
        };
    }

    /**
     * Render section-specific fields
     */
    renderFields() {
        const examples = this.echelonExamples[this.echelon] || this.echelonExamples['company'];

        // Build validation summary
        const validationSummary = this.formBuilder.buildValidationSummary('sustainment-form');

        // Build echelon selector using FormBuilder
        const echelonField = this.formBuilder.buildSelectField({
            id: 'sustainment-echelon',
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

        // Build Logistics field
        const logisticsField = this.formBuilder.buildTextAreaField({
            id: 'logistics',
            name: 'logistics',
            label: 'Supply, Transportation, Field Services',
            value: this.data.logistics || '',
            placeholder: examples.logistics,
            rows: 4,
            required: true,
            helpText: 'Specify supply classes, transportation assets, and field services',
            tooltip: 'Include all supply classes (I-X), transportation methods, and field services (feeding, water, etc.)',
            validation: {
                required: true,
                minLength: 50,
                maxLength: 2500
            }
        });

        // Build Personnel field
        const personnelField = this.formBuilder.buildTextAreaField({
            id: 'personnel',
            name: 'personnel',
            label: 'Strength, Replacements, EPW Handling',
            value: this.data.personnel || '',
            placeholder: examples.personnel,
            rows: 3,
            required: true,
            helpText: 'Specify personnel strength, replacement procedures, and EPW handling',
            tooltip: 'Include current strength, replacement flow, and enemy prisoner of war procedures',
            validation: {
                required: true,
                minLength: 20,
                maxLength: 1500
            }
        });

        // Build Health Service Support field
        const healthServiceSupportField = this.formBuilder.buildTextAreaField({
            id: 'healthServiceSupport',
            name: 'healthServiceSupport',
            label: 'Medical Treatment, Evacuation, Preventive Medicine',
            value: this.data.healthServiceSupport || '',
            placeholder: examples.healthServiceSupport,
            rows: 3,
            required: true,
            helpText: 'Specify medical treatment facilities, evacuation procedures, and preventive medicine',
            tooltip: 'Include aid station locations, MEDEVAC procedures, and preventive medicine measures',
            validation: {
                required: true,
                minLength: 30,
                maxLength: 2000
            }
        });

        // Build advanced sustainment fields
        const maintenanceField = this.formBuilder.buildTextAreaField({
            id: 'maintenance',
            name: 'maintenance',
            label: 'Maintenance Procedures',
            value: this.data.maintenance || '',
            placeholder: examples.maintenance,
            rows: 2,
            required: false,
            helpText: 'Specify maintenance procedures and support locations',
            validation: { maxLength: 1000 }
        });

        const supplyPointsField = this.formBuilder.buildTextAreaField({
            id: 'supplyPoints',
            name: 'supplyPoints',
            label: 'Supply Point Locations',
            value: this.data.supplyPoints || '',
            placeholder: examples.supplyPoints,
            rows: 2,
            required: false,
            helpText: 'Specify locations of supply points (ASP, ATP, water points, etc.)',
            validation: { maxLength: 1000 }
        });

        const casualtyCollectionField = this.formBuilder.buildTextAreaField({
            id: 'casualtyCollection',
            name: 'casualtyCollection',
            label: 'Casualty Collection Points and Evacuation',
            value: this.data.casualtyCollection || '',
            placeholder: examples.casualtyCollection,
            rows: 2,
            required: false,
            helpText: 'Specify casualty collection point locations and evacuation routes',
            validation: { maxLength: 1000 }
        });

        const resupplyProceduresField = this.formBuilder.buildTextAreaField({
            id: 'resupplyProcedures',
            name: 'resupplyProcedures',
            label: 'Resupply Procedures',
            value: this.data.resupplyProcedures || '',
            placeholder: examples.resupplyProcedures,
            rows: 2,
            required: false,
            helpText: 'Specify resupply schedule, priorities, and procedures',
            validation: { maxLength: 1000 }
        });

        return `
            ${validationSummary}
            ${echelonField}

            <!-- Logistics -->
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(236, 72, 153, 0.1); border-left: 4px solid #ec4899; border-radius: 6px;">
                <h4 style="margin: 0 0 16px 0; color: #ec4899; font-size: 16px;">
                    <i class="fas fa-boxes" style="margin-right: 8px;"></i>Logistics
                </h4>
                ${logisticsField}
            </div>

            <!-- Personnel -->
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(168, 85, 247, 0.1); border-left: 4px solid #a855f7; border-radius: 6px;">
                <h4 style="margin: 0 0 16px 0; color: #a855f7; font-size: 16px;">
                    <i class="fas fa-users" style="margin-right: 8px;"></i>Personnel
                </h4>
                ${personnelField}
            </div>

            <!-- Health Service Support -->
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(34, 197, 94, 0.1); border-left: 4px solid #22c55e; border-radius: 6px;">
                <h4 style="margin: 0 0 16px 0; color: #22c55e; font-size: 16px;">
                    <i class="fas fa-medkit" style="margin-right: 8px;"></i>Health Service Support
                </h4>
                ${healthServiceSupportField}
            </div>

            <!-- Progressive Disclosure: Additional Sustainment Details -->
            <div style="margin-top: 20px;">
                <button type="button" id="toggle-additional-sustainment-details"
                    style="background: #1e293b; border: 1px solid #374151; border-radius: 6px; padding: 10px 16px; color: #f8fafc; cursor: pointer; font-size: 14px; width: 100%;">
                    <i class="fas fa-plus-circle" style="margin-right: 8px;"></i>Add Additional Sustainment Details
                </button>
                <div id="additional-sustainment-details" style="display: none; margin-top: 16px; padding: 16px; background: rgba(100, 116, 139, 0.1); border-radius: 6px;">
                    ${maintenanceField}

                    ${supplyPointsField}

                    ${casualtyCollectionField}

                    ${resupplyProceduresField}
                </div>
            </div>
        `;
    }

    /**
     * Attach event handlers after rendering
     */
    attachEventHandlers() {
        super.attachEventHandlers();

        // Attach portion marking handlers (Phase 3)
        this.attachPortionMarkingHandlers();

        // Echelon selector change handler
        const echelonSelect = this.container.querySelector('#sustainment-echelon');
        if (echelonSelect) {
            echelonSelect.addEventListener('change', (e) => {
                this.setEchelon(e.target.value);
                this.eventBus.emit('draft:echelon-changed', { echelon: e.target.value, section: this.sectionId });
                this.render(); // Re-render to update examples
            });
        }

        // Real-time validation for main fields
        const mainFields = ['logistics', 'personnel', 'healthServiceSupport'];
        mainFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Real-time validation for advanced fields
        const advancedFields = ['maintenance', 'supplyPoints', 'casualtyCollection', 'resupplyProcedures'];
        advancedFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Progressive disclosure toggle
        const toggleBtn = this.container.querySelector('#toggle-additional-sustainment-details');
        const detailsDiv = this.container.querySelector('#additional-sustainment-details');
        if (toggleBtn && detailsDiv) {
            toggleBtn.addEventListener('click', () => {
                const isHidden = detailsDiv.style.display === 'none';
                detailsDiv.style.display = isHidden ? 'block' : 'none';
                toggleBtn.innerHTML = isHidden
                    ? '<i class="fas fa-minus-circle" style="margin-right: 8px;"></i>Hide Additional Sustainment Details'
                    : '<i class="fas fa-plus-circle" style="margin-right: 8px;"></i>Add Additional Sustainment Details';
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
        this.formBuilder.displayValidationSummary('sustainment-form', errors);
    }
}

