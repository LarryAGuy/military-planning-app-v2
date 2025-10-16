/**
 * Command and Control Section Component
 * OPORD Paragraph 5 - Command and Signal
 * Extends BaseSectionComponent for reusability
 *
 * Supports all 11 standardized echelons (Platoon through Theater)
 *
 * @module CommandControlSection
 */

import { BaseSectionComponent } from './BaseSectionComponent.js';
import { FormBuilder } from '../../ui/FormBuilder.js';

export class CommandControlSection extends BaseSectionComponent {
    constructor(eventBus, portionMarkingManager = null) {
        super('command-control', '5. COMMAND AND SIGNAL', eventBus, portionMarkingManager);

        // Initialize FormBuilder for dynamic form generation
        this.formBuilder = new FormBuilder(eventBus);
        this.formBuilder.initialize();

        // Validation rules for command and control fields
        this.validationRules = {
            command: {
                required: true,
                label: 'Command',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Command contains placeholder text' };
                    }
                    if (value && value.length < 30) {
                        return { warning: 'Command information seems brief (less than 30 characters)' };
                    }
                    return {};
                }
            },
            signal: {
                required: true,
                label: 'Signal',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Signal contains placeholder text' };
                    }
                    if (value && value.length < 30) {
                        return { warning: 'Signal information seems brief (less than 30 characters)' };
                    }
                    return {};
                }
            },
            reports: {
                required: false,
                label: 'Reports'
            }
        };
        
        // Echelon-specific examples for all 11 echelons
        this.echelonExamples = {
            'platoon': {
                command: 'Platoon Leader at 1st Squad. Succession: PSG, 1st Squad Leader. Liaison: Company CP.',
                signal: 'Freq: Company net 56.000. Call signs: Per SOI. Pyro: Green star cluster = objective secure. Visual: Arm and hand signals per FM 3-21.8.',
                reports: 'SITREP every 30 minutes. SPOTREP immediately. MEDEVAC request via company net.',
                soiIndex: 'SOI Index: ALPHA-1. Valid: 151200Z-161200Z JAN 25.',
                challengePassword: 'Challenge: THUNDER. Password: LIGHTNING. Valid: 151200Z-152400Z JAN 25.',
                runningPassword: 'Running password: RANGER. Changes daily at 1200Z.',
                recognitionSignals: 'Ground: IR strobe. Air: VS-17 panel. Vehicle: Blue VS-17 on hood.'
            },
            'company': {
                command: 'Company CP at grid AB 234567. Commander with 1st Platoon. Succession: XO, 1st Platoon Leader. Liaison: Battalion TOC, adjacent companies.',
                signal: 'Freq: Company cmd 56.000, Battalion cmd 57.000. Call signs: Per SOI. Pyro: Red star cluster = enemy contact, green = objective secure. Reports: SITREP hourly, SPOTREP immediate.',
                reports: 'SITREP to battalion hourly. SPOTREP immediate. MEDEVAC via battalion net. LOGSTAT at 1800 daily. Personnel status at 0600 daily.',
                soiIndex: 'SOI Index: BRAVO-2. Valid: 151200Z-221200Z JAN 25. Authenticate tables: ALPHA-CHARLIE.',
                challengePassword: 'Challenge: APACHE. Password: WARRIOR. Valid: 151200Z-161200Z JAN 25. Changes daily.',
                runningPassword: 'Running password: AIRBORNE. Changes daily at 1200Z. Disseminate to all personnel.',
                recognitionSignals: 'Ground: IR strobe, VS-17 panel. Air: Smoke (color per mission). Vehicle: Blue VS-17, thermal tape.'
            },
            'squadron': {
                command: 'Squadron TOC at grid CD 345678. Commander airborne in C2 aircraft. Succession: XO, S3. Liaison: Regiment, adjacent squadrons, supported ground units.',
                signal: 'Freq: Squadron cmd 60.000, Regiment cmd 61.000, Air-ground 62.000. Call signs: Per SOI. Data link: SADL/EPLRS. Reports: SITREP every 2 hours.',
                reports: 'SITREP to regiment every 2 hours. SPOTREP immediate. Air mission reports per SOP. Fuel status hourly. Aircraft status continuous.',
                soiIndex: 'SOI Index: CAVALRY-3. Valid: 151200Z-311200Z JAN 25. Crypto: KY-57, KY-58, SINCGARS.',
                challengePassword: 'Challenge: SABER. Password: CAVALRY. Valid: 151200Z-161200Z JAN 25. Air challenge: EAGLE/TALON.',
                runningPassword: 'Running password: SCOUT. Changes daily at 1200Z. Air running password: HUNTER.',
                recognitionSignals: 'Ground: IR strobe, VS-17. Air: Mode 3 IFF, visual signals. Vehicle: Blue thermal tape, IR beacon.'
            },
            'battalion': {
                command: 'Battalion TOC at grid CD 456789. Commander with main effort company. Succession: XO, S3, senior company commander. Liaison: Brigade, adjacent battalions, supporting units.',
                signal: 'Freq: Battalion cmd 57.000, Brigade cmd 58.000, Fires 59.000. Call signs: Per SOI. Data: JCR, FBCB2. Retrans: Hill 203. Reports: SITREP every 2 hours to brigade.',
                reports: 'SITREP to brigade every 2 hours. SPOTREP immediate. LOGSTAT daily at 1800. Personnel status daily at 0600. Intelligence summaries every 6 hours.',
                soiIndex: 'SOI Index: DELTA-4. Valid: 011200Z-281200Z FEB 25. Crypto: SINCGARS, ASIP, JCR. Authenticate: TANGO-UNIFORM.',
                challengePassword: 'Challenge: IRON. Password: STEEL. Valid: 151200Z-161200Z JAN 25. Changes daily at 1200Z.',
                runningPassword: 'Running password: DRAGON. Changes daily at 1200Z. Disseminate to company level.',
                recognitionSignals: 'Ground: IR strobe, VS-17, thermal tape. Air: Smoke, panels. Vehicle: Blue thermal tape, IR beacon, IFF.'
            },
            'group': {
                command: 'Group TOC at FOB. Commander location varies by mission. Succession: Deputy Commander, Chief of Staff. Liaison: TSOC, supported commands, coalition partners.',
                signal: 'Freq: Group cmd (secure VHF/UHF), SATCOM primary. Call signs: Per TSOC SOI. Data: SIPR, JWICS, tactical SATCOM. Reports: Mission reports per TSOC SOP.',
                reports: 'Mission reports to TSOC. SITREP every 4 hours. SPOTREP immediate. Intelligence reports continuous. Operational summaries daily.',
                soiIndex: 'SOI Index: SPECIAL-5. Valid: Monthly. Crypto: Type 1 encryption, TACLANE, SATCOM crypto. Authenticate: Per TSOC.',
                challengePassword: 'Challenge/Password: Per mission. Changes per operation. Special authentication procedures.',
                runningPassword: 'Running password: Mission-specific. Changes per operation. Special handling.',
                recognitionSignals: 'Ground: IR devices, special panels. Air: Mode 3/4 IFF, special signals. Vehicle: Special markings, IR/thermal.'
            },
            'regiment': {
                command: 'Regimental TOC at grid EF 567890. Commander with main effort battalion. Succession: Deputy Commander, Chief of Staff, senior battalion commander. Liaison: Division, adjacent regiments, supporting units.',
                signal: 'Freq: Regiment cmd 61.000, Division cmd 62.000, Fires 63.000. Call signs: Per SOI. Data: JCR, FBCB2, AFATDS. Retrans: Multiple sites. Reports: SITREP every 4 hours.',
                reports: 'SITREP to division every 4 hours. SPOTREP immediate. LOGSTAT daily. Intelligence summaries every 6 hours. Operational reports per division SOP.',
                soiIndex: 'SOI Index: ECHO-6. Valid: Monthly. Crypto: SINCGARS, ASIP, JCR, SATCOM. Authenticate: VICTOR-WHISKEY.',
                challengePassword: 'Challenge: RANGER. Password: LEAD. Valid: Daily. Changes at 1200Z. Special operations challenge separate.',
                runningPassword: 'Running password: STRIKE. Changes daily at 1200Z. Disseminate to battalion level.',
                recognitionSignals: 'Ground: IR strobe, VS-17, thermal tape. Air: Smoke, panels, IFF. Vehicle: Blue thermal tape, IR beacon, IFF Mode 3/4.'
            },
            'brigade': {
                command: 'Brigade TOC at grid EF 678901. Commander with main effort battalion. Succession: Deputy Commander, Chief of Staff, senior battalion commander. Liaison: Division, adjacent brigades, supporting brigades.',
                signal: 'Freq: Brigade cmd 58.000, Division cmd 62.000, Fires 63.000, Aviation 64.000. Call signs: Per SOI. Data: JCR, FBCB2, AFATDS, DCGS-A. Reports: SITREP every 4 hours.',
                reports: 'SITREP to division every 4 hours. SPOTREP immediate. LOGSTAT daily at 1800. Personnel status daily at 0600. Intelligence summaries every 6 hours. Operational summaries daily.',
                soiIndex: 'SOI Index: FOXTROT-7. Valid: Monthly. Crypto: SINCGARS, ASIP, JCR, SATCOM, TACLANE. Authenticate: XRAY-YANKEE.',
                challengePassword: 'Challenge: STRIKE. Password: FORCE. Valid: Daily. Changes at 1200Z.',
                runningPassword: 'Running password: COMBAT. Changes daily at 1200Z. Disseminate to battalion level.',
                recognitionSignals: 'Ground: IR devices, VS-17, thermal tape. Air: Smoke, panels, IFF Mode 3/4. Vehicle: Combat identification panels, IR beacon.'
            },
            'division': {
                command: 'Division Main CP at grid GH 789012. Tactical CP with main effort brigade. Succession: Assistant Division Commander, Chief of Staff, senior brigade commander. Liaison: Corps, adjacent divisions, supporting commands.',
                signal: 'Freq: Division cmd 62.000, Corps cmd 65.000, Fires 63.000, Aviation 64.000. Call signs: Per SOI. Data: JCR, FBCB2, AFATDS, DCGS-A, CPOF. SATCOM: Multiple channels. Reports: SITREP every 6 hours.',
                reports: 'SITREP to corps every 6 hours. SPOTREP immediate. LOGSTAT daily. Intelligence summaries every 6 hours. Operational summaries twice daily. Commander\'s update brief daily.',
                soiIndex: 'SOI Index: GOLF-8. Valid: Monthly. Crypto: All systems Type 1 encryption. SATCOM crypto. Authenticate: ZULU-ALPHA.',
                challengePassword: 'Challenge: MOUNTAIN. Password: DIVISION. Valid: Daily. Changes at 1200Z.',
                runningPassword: 'Running password: VICTORY. Changes daily at 1200Z. Disseminate to brigade level.',
                recognitionSignals: 'Ground: Combat identification panels, IR devices. Air: IFF Mode 3/4, special signals. Vehicle: Combat ID panels, IR/thermal.'
            },
            'corps': {
                command: 'Corps Main CP at secure location. Tactical CP forward. Succession: Deputy Commanding General, Chief of Staff, senior division commander. Liaison: Army, adjacent corps, joint forces, coalition partners.',
                signal: 'Freq: Corps cmd 65.000, Army cmd 66.000, Joint 67.000. Call signs: Per SOI. Data: CPOF, DCGS-A, AFATDS, JADOCS. SATCOM: Multiple channels. Reports: SITREP every 12 hours.',
                reports: 'SITREP to army every 12 hours. SPOTREP immediate. Intelligence summaries every 12 hours. Operational summaries daily. Commander\'s update brief twice daily. Joint reports per OPORD.',
                soiIndex: 'SOI Index: HOTEL-9. Valid: Monthly. Crypto: All systems Type 1 encryption. SATCOM, TACLANE. Authenticate: BRAVO-CHARLIE.',
                challengePassword: 'Challenge: CORPS. Password: STRIKE. Valid: Daily. Changes at 1200Z. Joint challenge separate.',
                runningPassword: 'Running password: THUNDER. Changes daily at 1200Z. Disseminate to division level.',
                recognitionSignals: 'Ground: Combat ID panels, IR devices. Air: IFF Mode 3/4/5, joint signals. Vehicle: Combat ID panels, blue force tracker.'
            },
            'army': {
                command: 'Army HQ at theater location. Forward CP as required. Succession: Deputy Commanding General, Chief of Staff. Liaison: Theater command, joint forces, coalition partners, interagency.',
                signal: 'Freq: Army cmd 66.000, Theater cmd 68.000, Joint 67.000. Call signs: Per theater SOI. Data: CPOF, DCGS-A, joint systems. SATCOM: Strategic channels. Reports: SITREP daily.',
                reports: 'SITREP to theater daily. Intelligence summaries daily. Operational summaries daily. Commander\'s update brief daily. Joint and coalition reports per theater OPORD.',
                soiIndex: 'SOI Index: INDIA-10. Valid: Monthly. Crypto: All systems Type 1 encryption. Strategic SATCOM. Authenticate: DELTA-ECHO.',
                challengePassword: 'Challenge: ARMY. Password: STRONG. Valid: Daily. Changes at 1200Z. Joint/coalition challenge separate.',
                runningPassword: 'Running password: FREEDOM. Changes daily at 1200Z. Disseminate to corps level.',
                recognitionSignals: 'Ground: Combat ID panels, IR devices. Air: IFF Mode 3/4/5, joint signals. Vehicle: Combat ID panels, blue force tracker, coalition markings.'
            },
            'theater': {
                command: 'Theater HQ at secure location. Component commands distributed. Succession: Deputy Commander, Chief of Staff. Liaison: National command, joint forces, coalition partners, interagency, international organizations.',
                signal: 'Freq: Theater cmd 68.000, Strategic 69.000, Joint 67.000. Call signs: Per national SOI. Data: CPOF, DCGS-A, joint/coalition systems. SATCOM: Strategic and tactical. Reports: Daily to national command.',
                reports: 'SITREP to national command daily. Intelligence summaries daily. Operational summaries daily. Commander\'s update brief daily. Joint, coalition, and interagency reports per strategic guidance.',
                soiIndex: 'SOI Index: JULIET-11. Valid: Monthly. Crypto: All systems Type 1 encryption. Strategic SATCOM. National crypto. Authenticate: FOXTROT-GOLF.',
                challengePassword: 'Challenge: THEATER. Password: COMMAND. Valid: Daily. Changes at 1200Z. Joint/coalition/interagency challenge separate.',
                runningPassword: 'Running password: LIBERTY. Changes daily at 1200Z. Disseminate to component commands.',
                recognitionSignals: 'Ground: Combat ID panels, IR devices, coalition markings. Air: IFF Mode 3/4/5, joint/coalition signals. Vehicle: Combat ID panels, blue force tracker, coalition/host nation markings.'
            }
        };
    }

    /**
     * Render section-specific fields
     */
    renderFields() {
        const examples = this.echelonExamples[this.echelon] || this.echelonExamples['company'];

        // Build validation summary
        const validationSummary = this.formBuilder.buildValidationSummary('command-control-form');

        // Build echelon selector using FormBuilder
        const echelonField = this.formBuilder.buildSelectField({
            id: 'command-control-echelon',
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

        // Build Command field
        const commandField = this.formBuilder.buildTextAreaField({
            id: 'command',
            name: 'command',
            label: 'Location of Commander, Succession of Command, Liaison',
            value: this.data.command || '',
            placeholder: examples.command,
            rows: 3,
            required: true,
            helpText: 'Specify location of commander, succession of command, and liaison requirements',
            tooltip: 'Include CP location, commander position, succession order, and liaison with adjacent/higher units',
            validation: {
                required: true,
                minLength: 30,
                maxLength: 2000
            }
        });

        // Build Signal field
        const signalField = this.formBuilder.buildTextAreaField({
            id: 'signal',
            name: 'signal',
            label: 'Frequencies, Call Signs, Pyrotechnics, Visual Signals',
            value: this.data.signal || '',
            placeholder: examples.signal,
            rows: 4,
            required: true,
            helpText: 'Specify frequencies, call signs, pyrotechnics, and visual signals',
            tooltip: 'Include radio frequencies, call signs per SOI, pyrotechnic signals, and visual recognition signals',
            validation: {
                required: true,
                minLength: 30,
                maxLength: 2000
            }
        });

        // Build Reports field
        const reportsField = this.formBuilder.buildTextAreaField({
            id: 'reports',
            name: 'reports',
            label: 'Reports Required (SITREP, SPOTREP, etc.)',
            value: this.data.reports || '',
            placeholder: examples.reports,
            rows: 3,
            required: false,
            helpText: 'Specify required reports and reporting schedule',
            tooltip: 'Include SITREP, SPOTREP, MEDEVAC, LOGSTAT, and other required reports with frequency',
            validation: {
                maxLength: 1500
            }
        });

        // Build advanced C2 fields
        const soiIndexField = this.formBuilder.buildTextAreaField({
            id: 'soiIndex',
            name: 'soiIndex',
            label: 'SOI Index and Crypto',
            value: this.data.soiIndex || '',
            placeholder: examples.soiIndex,
            rows: 2,
            required: false,
            helpText: 'Specify SOI index, crypto systems, and authentication tables',
            validation: { maxLength: 1000 }
        });

        const challengePasswordField = this.formBuilder.buildTextAreaField({
            id: 'challengePassword',
            name: 'challengePassword',
            label: 'Challenge and Password',
            value: this.data.challengePassword || '',
            placeholder: examples.challengePassword,
            rows: 2,
            required: false,
            helpText: 'Specify challenge and password with validity period',
            validation: { maxLength: 500 }
        });

        const runningPasswordField = this.formBuilder.buildTextAreaField({
            id: 'runningPassword',
            name: 'runningPassword',
            label: 'Running Password',
            value: this.data.runningPassword || '',
            placeholder: examples.runningPassword,
            rows: 2,
            required: false,
            helpText: 'Specify running password and change schedule',
            validation: { maxLength: 500 }
        });

        const recognitionSignalsField = this.formBuilder.buildTextAreaField({
            id: 'recognitionSignals',
            name: 'recognitionSignals',
            label: 'Recognition Signals',
            value: this.data.recognitionSignals || '',
            placeholder: examples.recognitionSignals,
            rows: 2,
            required: false,
            helpText: 'Specify ground, air, and vehicle recognition signals',
            validation: { maxLength: 1000 }
        });

        return `
            ${validationSummary}
            ${echelonField}

            <!-- Command -->
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; border-radius: 6px;">
                <h4 style="margin: 0 0 16px 0; color: #3b82f6; font-size: 16px;">
                    <i class="fas fa-star" style="margin-right: 8px;"></i>Command
                </h4>
                ${commandField}
            </div>

            <!-- Signal -->
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(20, 184, 166, 0.1); border-left: 4px solid #14b8a6; border-radius: 6px;">
                <h4 style="margin: 0 0 16px 0; color: #14b8a6; font-size: 16px;">
                    <i class="fas fa-broadcast-tower" style="margin-right: 8px;"></i>Signal
                </h4>
                ${signalField}
            </div>

            <!-- Reports -->
            ${reportsField}

            <!-- Progressive Disclosure: Additional C2 Details -->
            <div style="margin-top: 20px;">
                <button type="button" id="toggle-additional-c2-details"
                    style="background: #1e293b; border: 1px solid #374151; border-radius: 6px; padding: 10px 16px; color: #f8fafc; cursor: pointer; font-size: 14px; width: 100%;">
                    <i class="fas fa-plus-circle" style="margin-right: 8px;"></i>Add Additional C2 Details
                </button>
                <div id="additional-c2-details" style="display: none; margin-top: 16px; padding: 16px; background: rgba(100, 116, 139, 0.1); border-radius: 6px;">
                    ${soiIndexField}

                    ${challengePasswordField}

                    ${runningPasswordField}

                    ${recognitionSignalsField}
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
        const echelonSelect = this.container.querySelector('#command-control-echelon');
        if (echelonSelect) {
            echelonSelect.addEventListener('change', (e) => {
                this.setEchelon(e.target.value);
                this.eventBus.emit('draft:echelon-changed', { echelon: e.target.value, section: this.sectionId });
                this.render(); // Re-render to update examples
            });
        }

        // Real-time validation for main fields
        const mainFields = ['command', 'signal', 'reports'];
        mainFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Real-time validation for advanced fields
        const advancedFields = ['soiIndex', 'challengePassword', 'runningPassword', 'recognitionSignals'];
        advancedFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Progressive disclosure toggle
        const toggleBtn = this.container.querySelector('#toggle-additional-c2-details');
        const detailsDiv = this.container.querySelector('#additional-c2-details');
        if (toggleBtn && detailsDiv) {
            toggleBtn.addEventListener('click', () => {
                const isHidden = detailsDiv.style.display === 'none';
                detailsDiv.style.display = isHidden ? 'block' : 'none';
                toggleBtn.innerHTML = isHidden
                    ? '<i class="fas fa-minus-circle" style="margin-right: 8px;"></i>Hide Additional C2 Details'
                    : '<i class="fas fa-plus-circle" style="margin-right: 8px;"></i>Add Additional C2 Details';
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
        this.formBuilder.displayValidationSummary('command-control-form', errors);
    }
}

