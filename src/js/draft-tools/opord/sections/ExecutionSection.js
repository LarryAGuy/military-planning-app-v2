/**
 * Execution Section Component
 * OPORD Paragraph 3 - Execution
 * Extends BaseSectionComponent for reusability
 *
 * Supports all 11 standardized echelons (Platoon through Theater)
 *
 * @module ExecutionSection
 */

import { BaseSectionComponent } from './BaseSectionComponent.js';
import { FormBuilder } from '../../ui/FormBuilder.js';

export class ExecutionSection extends BaseSectionComponent {
    constructor(eventBus, portionMarkingManager = null) {
        super('execution', '3. EXECUTION', eventBus, portionMarkingManager);

        // Initialize FormBuilder for dynamic form generation
        this.formBuilder = new FormBuilder(eventBus);
        this.formBuilder.initialize();

        // Validation rules for execution fields
        this.validationRules = {
            commandersIntentPurpose: {
                required: true,
                label: 'Commander\'s Intent - Purpose',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Commander\'s Intent - Purpose contains placeholder text' };
                    }
                    return {};
                }
            },
            commandersIntentMethod: {
                required: true,
                label: 'Commander\'s Intent - Method',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Commander\'s Intent - Method contains placeholder text' };
                    }
                    return {};
                }
            },
            commandersIntentEndState: {
                required: true,
                label: 'Commander\'s Intent - End State',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Commander\'s Intent - End State contains placeholder text' };
                    }
                    return {};
                }
            },
            conceptOfOperations: {
                required: true,
                label: 'Concept of Operations',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Concept of Operations contains placeholder text' };
                    }
                    if (value && value.length < 50) {
                        return { warning: 'Concept of Operations seems brief (less than 50 characters)' };
                    }
                    return {};
                }
            },
            schemeOfManeuver: {
                required: true,
                label: 'Scheme of Maneuver'
            },
            tasksToSubordinateUnits: {
                required: true,
                label: 'Tasks to Subordinate Units'
            },
            coordinatingInstructions: {
                required: true,
                label: 'Coordinating Instructions'
            }
        };
        
        // Echelon-specific examples for all 11 echelons
        this.echelonExamples = {
            'platoon': {
                commandersIntentPurpose: 'Seize OBJ ALPHA to enable company seizure of OBJ BRAVO',
                commandersIntentMethod: 'Conduct hasty attack along Axis BLUE using fire and maneuver',
                commandersIntentEndState: 'Platoon controls OBJ ALPHA, enemy destroyed or withdrawn, prepared to support company operations',
                conceptOfOperations: '1st Platoon attacks along Axis BLUE to seize OBJ ALPHA. 1st Squad leads, 2nd Squad follows, Weapons Squad provides overwatch.',
                schemeOfManeuver: '1st Squad advances to PL RED, establishes support by fire. 2nd Squad assaults through to OBJ ALPHA. Weapons Squad displaces forward.',
                tasksToSubordinateUnits: '1st Squad: Establish SBF position vic grid AB 123456. 2nd Squad: Assault OBJ ALPHA on order. Weapons Squad: Provide overwatch from PL RED.',
                coordinatingInstructions: 'LD: 151200Z JAN 25. PL RED: Grid AB 123400. Fire support on call. ROE: Positive ID required.'
            },
            'company': {
                commandersIntentPurpose: 'Seize OBJ BRAVO to enable battalion seizure of OBJ CHARLIE',
                commandersIntentMethod: 'Conduct deliberate attack with two platoons forward, one in reserve',
                commandersIntentEndState: 'Company controls OBJ BRAVO, enemy destroyed, prepared to continue attack to OBJ CHARLIE',
                conceptOfOperations: 'Alpha Company attacks with 1st and 2nd Platoons forward, 3rd Platoon in reserve. Breach obstacle at PL RED, seize OBJ BRAVO.',
                schemeOfManeuver: '1st Platoon attacks along Axis BLUE (north). 2nd Platoon attacks along Axis RED (south). 3rd Platoon follows 1st Platoon, prepared to exploit.',
                tasksToSubordinateUnits: '1st Platoon: Seize northern half of OBJ BRAVO. 2nd Platoon: Seize southern half of OBJ BRAVO. 3rd Platoon: Follow 1st Platoon, be prepared to exploit success.',
                coordinatingInstructions: 'H-Hour: 151200Z JAN 25. LD: PL GREEN. Fire support: Priority to 1st Platoon. Breach site: Grid AB 123456. ROE: Card 1.'
            },
            'squadron': {
                commandersIntentPurpose: 'Conduct reconnaissance and security operations to provide early warning for regiment',
                commandersIntentMethod: 'Establish screen line along PL BLUE, conduct reconnaissance along Axis SABER',
                commandersIntentEndState: 'Squadron maintains contact with enemy, provides continuous intelligence to regiment, denies enemy reconnaissance',
                conceptOfOperations: '1st Squadron establishes screen line along PL BLUE with three troops forward. Conducts aggressive reconnaissance along Axis SABER to locate enemy main body.',
                schemeOfManeuver: 'A Troop screens north sector. B Troop screens center sector. C Troop screens south sector. D Troop (tank) in reserve prepared to reinforce.',
                tasksToSubordinateUnits: 'A Troop: Screen north sector vic grid AB 123456. B Troop: Screen center sector vic grid AB 234567. C Troop: Screen south sector vic grid AB 345678. D Troop: Reserve, prepared to reinforce any troop.',
                coordinatingInstructions: 'Screen line established NLT 181200Z JAN 25. Contact drills per SOP. Artillery priority to B Troop. CAS on call. ROE: Engage enemy reconnaissance.'
            },
            'battalion': {
                commandersIntentPurpose: 'Defeat enemy battalion to enable brigade seizure of OBJ STEEL',
                commandersIntentMethod: 'Conduct deliberate attack with two companies forward, one in reserve, supported by fires',
                commandersIntentEndState: 'Battalion controls Battle Position STEEL, enemy battalion destroyed, prepared to defend or continue attack',
                conceptOfOperations: '1-87th Infantry attacks with Alpha and Bravo Companies forward, Charlie Company in reserve. Breach enemy obstacles, seize BP STEEL, destroy enemy forces.',
                schemeOfManeuver: 'Alpha Company attacks north along Axis BLUE. Bravo Company attacks south along Axis RED. Charlie Company follows Alpha Company, prepared to exploit or reinforce.',
                tasksToSubordinateUnits: 'Alpha Company: Seize northern sector of BP STEEL. Bravo Company: Seize southern sector of BP STEEL. Charlie Company: Follow Alpha Company, be prepared to exploit success or reinforce. FSC: Establish BSA vic grid CD 789012.',
                coordinatingInstructions: 'H-Hour: 201800Z JAN 25. LD: PL GREEN. Fire support: Priority to Alpha Company. Breach site: Grid CD 123456. CAS: On call. ROE: Card 2. MOPP 2.'
            },
            'group': {
                commandersIntentPurpose: 'Insert special operations forces into objective area to conduct direct action',
                commandersIntentMethod: 'Conduct air assault operations using MH-47 and MH-60 aircraft with AH-64 escort',
                commandersIntentEndState: 'SOF inserted on LZ HAWK, aircraft return to FARP, prepared for extraction operations',
                conceptOfOperations: '160th SOAR conducts air assault to insert SOF on LZ HAWK. 1st Battalion provides MH-47 lift, 2nd Battalion provides MH-60 lift and AH-64 escort.',
                schemeOfManeuver: 'Flight route: FARP EAGLE → Axis TALON → LZ HAWK. MH-47s insert first chalk, MH-60s insert second chalk. AH-64s provide overwatch and escort.',
                tasksToSubordinateUnits: '1st Battalion: Provide 4x MH-47 for primary lift. 2nd Battalion: Provide 6x MH-60 for secondary lift and 4x AH-64 for escort. 3rd Battalion: Maintain QRF at FARP EAGLE.',
                coordinatingInstructions: 'Infiltration: 220300Z JAN 25. LZ HAWK: Grid EF 456789. Alternate LZ FALCON: Grid EF 567890. Fire support: Priority to LZ. CAS: On call. ROE: Card 3. Weather minimums: 500ft/1mi.'
            },
            'regiment': {
                commandersIntentPurpose: 'Seize OBJ RANGER to secure airfield and enable follow-on forces',
                commandersIntentMethod: 'Conduct airborne assault with three battalions, seize and hold airfield',
                commandersIntentEndState: 'Regiment controls OBJ RANGER, airfield secured, prepared to receive follow-on forces',
                conceptOfOperations: '75th Ranger Regiment conducts airborne assault on DZ APACHE. 1st and 2nd Battalions seize airfield, 3rd Battalion secures perimeter.',
                schemeOfManeuver: '1st Battalion drops on DZ APACHE north, seizes north end of airfield. 2nd Battalion drops on DZ APACHE south, seizes south end. 3rd Battalion drops on DZ COMANCHE, secures perimeter.',
                tasksToSubordinateUnits: '1st Battalion: Seize north end of airfield, clear terminal. 2nd Battalion: Seize south end of airfield, clear hangars. 3rd Battalion: Secure perimeter, establish blocking positions. RSB: Establish at airfield, prepared to receive casualties.',
                coordinatingInstructions: 'H-Hour: 250600Z JAN 25. DZ APACHE: Grid GH 234567. DZ COMANCHE: Grid GH 345678. Fire support: Priority to 1st Battalion. CAS: Continuous. ROE: Card 4. Airfield open for C-17 NLT H+4.'
            },
            'brigade': {
                commandersIntentPurpose: 'Maintain contact with withdrawing enemy forces to enable division destruction',
                commandersIntentMethod: 'Conduct movement to contact along Axis LIGHTNING with two battalions forward',
                commandersIntentEndState: 'Brigade maintains contact with enemy, fixes enemy forces, enables division envelopment',
                conceptOfOperations: '1st BCT conducts movement to contact from AA THUNDER to OBJ STORM. 1-87th and 2-10th lead, 3-75th follows. Fix enemy, enable division envelopment.',
                schemeOfManeuver: '1-87th Infantry advances along Axis LIGHTNING north. 2-10th Mountain advances along Axis THUNDER south. 3-75th Rangers follows 1-87th, prepared to exploit.',
                tasksToSubordinateUnits: '1-87th Infantry: Advance along Axis LIGHTNING north, fix enemy forces. 2-10th Mountain: Advance along Axis THUNDER south, fix enemy forces. 3-75th Rangers: Follow 1-87th, be prepared to exploit success. BSB: Establish BSA vic grid IJ 123456.',
                coordinatingInstructions: 'LD: 051200Z FEB 25. PL RED: Grid IJ 234567. PL BLUE: Grid IJ 345678. Fire support: Priority to 1-87th. CAS: On call. ROE: Card 5. Phase Line GOLD: Consolidate and reorganize.'
            },
            'division': {
                commandersIntentPurpose: 'Destroy enemy division to enable corps exploitation',
                commandersIntentMethod: 'Conduct offensive operations with two brigades forward, one in reserve, supported by division assets',
                commandersIntentEndState: 'Division controls OBJ MOUNTAIN, enemy division destroyed, prepared to continue attack or transition to defense',
                conceptOfOperations: '10th Mountain Division attacks with 1st and 2nd BCTs forward, 3rd BCT in reserve. Breach enemy defenses, seize OBJ MOUNTAIN, destroy enemy forces.',
                schemeOfManeuver: '1st BCT attacks north along Axis AVALANCHE. 2nd BCT attacks south along Axis SUMMIT. 3rd BCT follows 1st BCT, prepared to exploit or reinforce. Division cavalry screens flanks.',
                tasksToSubordinateUnits: '1st BCT: Seize northern sector of OBJ MOUNTAIN. 2nd BCT: Seize southern sector of OBJ MOUNTAIN. 3rd BCT: Follow 1st BCT, be prepared to exploit success. CAB: Provide close air support and reconnaissance. DIVARTY: Priority of fires to 1st BCT. DISCOM: Establish DSA vic grid KL 789012.',
                coordinatingInstructions: 'D-Day: 101200Z FEB 25. LD: PL GREEN. Fire support: Priority to 1st BCT. Breach sites: North (Grid KL 123456), South (Grid KL 234567). CAS: Continuous. ROE: Card 6. MOPP 2. Phase Line SUMMIT: Consolidate and reorganize.'
            },
            'corps': {
                commandersIntentPurpose: 'Establish lodgment for follow-on forces through joint forcible entry',
                commandersIntentMethod: 'Conduct joint forcible entry with airborne and air assault operations, supported by joint fires',
                commandersIntentEndState: 'Corps controls Joint Operations Area FALCON, lodgment established, prepared to receive follow-on forces',
                conceptOfOperations: 'XVIII Airborne Corps conducts joint forcible entry into JOA FALCON. 82nd Airborne secures airfield, 101st Airborne secures port, 3rd Infantry follows.',
                schemeOfManeuver: '82nd Airborne conducts airborne assault to seize airfield. 101st Airborne conducts air assault to seize port. 3rd Infantry Division conducts air-land operations to expand lodgment.',
                tasksToSubordinateUnits: '82nd Airborne Division: Seize and secure airfield complex. 101st Airborne Division: Seize and secure port facilities. 3rd Infantry Division: Conduct air-land operations, expand lodgment. Corps artillery: Priority of fires to 82nd. Corps aviation: Support all divisions. COSCOM: Establish corps support area.',
                coordinatingInstructions: 'C-Day: 150600Z MAR 25. Airfield seizure: H-Hour. Port seizure: H+2. Air-land operations: C+1. Fire support: Joint fires, priority to 82nd. CAS: Continuous. ROE: Card 7. MOPP 2. Airfield open for C-17 NLT H+6. Port open for ships NLT C+3.'
            },
            'army': {
                commandersIntentPurpose: 'Defeat enemy forces and restore regional stability',
                commandersIntentMethod: 'Conduct theater-level offensive operations with multiple corps, supported by joint and coalition forces',
                commandersIntentEndState: 'Third Army controls theater of operations, enemy forces defeated, regional stability restored, transition to Phase IV operations',
                conceptOfOperations: 'Third Army (ARCENT) conducts theater-level offensive with XVIII Airborne Corps and III Armored Corps. Joint and coalition forces provide support.',
                schemeOfManeuver: 'XVIII Airborne Corps conducts joint forcible entry in north. III Armored Corps conducts ground offensive in south. Coalition forces secure flanks and lines of communication.',
                tasksToSubordinateUnits: 'XVIII Airborne Corps: Conduct joint forcible entry, seize key terrain in north. III Armored Corps: Conduct ground offensive, destroy enemy forces in south. Coalition forces: Secure flanks and LOCs. ARCENT support command: Establish theater logistics. ARCENT aviation: Provide theater aviation support.',
                coordinatingInstructions: 'A-Day: 010001Z APR 25. Phase I: Joint forcible entry. Phase II: Ground offensive. Phase III: Exploitation. Phase IV: Stability operations. Fire support: Joint fires coordination. CAS: Theater-wide. ROE: Card 8. Strategic communications plan in effect.'
            },
            'theater': {
                commandersIntentPurpose: 'Achieve national strategic objectives and protect U.S. interests',
                commandersIntentMethod: 'Conduct joint and combined operations across multiple domains with interagency coordination',
                commandersIntentEndState: 'CENTCOM AOR stabilized, national strategic objectives achieved, transition to steady-state operations',
                conceptOfOperations: 'U.S. Central Command conducts joint and combined operations across CENTCOM AOR. Integrate land, air, maritime, space, and cyber operations with coalition and interagency partners.',
                schemeOfManeuver: 'Land component (ARCENT) conducts ground operations. Air component (AFCENT) conducts air operations. Maritime component (NAVCENT) conducts maritime operations. SOF component (SOCCENT) conducts special operations.',
                tasksToSubordinateUnits: 'ARCENT: Conduct ground operations, defeat enemy land forces. AFCENT: Conduct air operations, establish air superiority. NAVCENT: Conduct maritime operations, secure sea lanes. SOCCENT: Conduct special operations, direct action and unconventional warfare. Coalition forces: Support operations per bilateral agreements.',
                coordinatingInstructions: 'T-Day: 010001Z MAY 25. Phase 0: Shaping. Phase I: Deter. Phase II: Seize initiative. Phase III: Dominate. Phase IV: Stabilize. Phase V: Enable civil authority. Joint fires: JFACC coordination. Strategic communications: STRATCOM. Interagency coordination: Country team. ROE: Presidential approval.'
            }
        };
    }

    /**
     * Render section-specific fields
     */
    renderFields() {
        const examples = this.echelonExamples[this.echelon] || this.echelonExamples['company'];

        // Build validation summary
        const validationSummary = this.formBuilder.buildValidationSummary('execution-form');

        // Build echelon selector using FormBuilder
        const echelonField = this.formBuilder.buildSelectField({
            id: 'execution-echelon',
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

        // Build Commander's Intent fields
        const commandersIntentPurposeField = this.formBuilder.buildTextAreaField({
            id: 'commandersIntentPurpose',
            name: 'commandersIntentPurpose',
            label: 'Purpose (Why)',
            value: this.data.commandersIntentPurpose || '',
            placeholder: examples.commandersIntentPurpose,
            rows: 3,
            required: true,
            helpText: 'State the purpose of the operation - why it must be accomplished',
            tooltip: 'The purpose explains why the operation is being conducted and its importance to the overall mission',
            validation: {
                required: true,
                minLength: 20,
                maxLength: 1000
            }
        });

        const commandersIntentMethodField = this.formBuilder.buildTextAreaField({
            id: 'commandersIntentMethod',
            name: 'commandersIntentMethod',
            label: 'Method (How)',
            value: this.data.commandersIntentMethod || '',
            placeholder: examples.commandersIntentMethod,
            rows: 3,
            required: true,
            helpText: 'Describe how the operation will be conducted',
            tooltip: 'The method describes the general approach and key actions to accomplish the mission',
            validation: {
                required: true,
                minLength: 20,
                maxLength: 1000
            }
        });

        const commandersIntentEndStateField = this.formBuilder.buildTextAreaField({
            id: 'commandersIntentEndState',
            name: 'commandersIntentEndState',
            label: 'End State (Desired Outcome)',
            value: this.data.commandersIntentEndState || '',
            placeholder: examples.commandersIntentEndState,
            rows: 3,
            required: true,
            helpText: 'Describe the desired end state - what success looks like',
            tooltip: 'The end state describes the desired conditions that define mission success',
            validation: {
                required: true,
                minLength: 20,
                maxLength: 1000
            }
        });

        // Build Concept of Operations field
        const conceptOfOperationsField = this.formBuilder.buildTextAreaField({
            id: 'conceptOfOperations',
            name: 'conceptOfOperations',
            label: 'Concept of Operations',
            value: this.data.conceptOfOperations || '',
            placeholder: examples.conceptOfOperations,
            rows: 4,
            required: true,
            helpText: 'Describe the overall concept of how the operation will be conducted',
            tooltip: 'The concept of operations provides a clear, concise statement of how the unit will accomplish the mission',
            validation: {
                required: true,
                minLength: 50,
                maxLength: 3000
            }
        });

        // Build Scheme of Maneuver field
        const schemeOfManeuverField = this.formBuilder.buildTextAreaField({
            id: 'schemeOfManeuver',
            name: 'schemeOfManeuver',
            label: 'Scheme of Maneuver',
            value: this.data.schemeOfManeuver || '',
            placeholder: examples.schemeOfManeuver,
            rows: 4,
            required: true,
            helpText: 'Describe how forces will be positioned and moved to accomplish the mission',
            tooltip: 'The scheme of maneuver describes the tactical employment of forces',
            validation: {
                required: true,
                minLength: 50,
                maxLength: 3000
            }
        });

        // Build Tasks to Subordinate Units field
        const tasksToSubordinateUnitsField = this.formBuilder.buildTextAreaField({
            id: 'tasksToSubordinateUnits',
            name: 'tasksToSubordinateUnits',
            label: 'Tasks to Subordinate Units',
            value: this.data.tasksToSubordinateUnits || '',
            placeholder: examples.tasksToSubordinateUnits,
            rows: 4,
            required: true,
            helpText: 'Specify tasks assigned to each subordinate unit',
            tooltip: 'Tasks to subordinate units specify what each subordinate element must accomplish',
            validation: {
                required: true,
                minLength: 30,
                maxLength: 3000
            }
        });

        // Build Coordinating Instructions field
        const coordinatingInstructionsField = this.formBuilder.buildTextAreaField({
            id: 'coordinatingInstructions',
            name: 'coordinatingInstructions',
            label: 'Coordinating Instructions',
            value: this.data.coordinatingInstructions || '',
            placeholder: examples.coordinatingInstructions,
            rows: 4,
            required: true,
            helpText: 'Provide instructions that apply to two or more subordinate units',
            tooltip: 'Coordinating instructions ensure unity of effort across subordinate units',
            validation: {
                required: true,
                minLength: 30,
                maxLength: 3000
            }
        });

        // Build advanced execution fields
        const timelineField = this.formBuilder.buildTextAreaField({
            id: 'timeline',
            name: 'timeline',
            label: 'Timeline / Synchronization Matrix',
            value: this.data.timeline || '',
            placeholder: 'H-Hour: [TIME]. H+1: [EVENT]. H+2: [EVENT]...',
            rows: 3,
            required: false,
            helpText: 'Specify timeline and synchronization of key events',
            validation: { maxLength: 2000 }
        });

        const fireSupportCoordinationField = this.formBuilder.buildTextAreaField({
            id: 'fireSupportCoordination',
            name: 'fireSupportCoordination',
            label: 'Fire Support Coordination',
            value: this.data.fireSupportCoordination || '',
            placeholder: 'Priority of fires: [UNIT]. CAS: [AVAILABILITY]. Artillery: [SUPPORT]...',
            rows: 3,
            required: false,
            helpText: 'Specify fire support coordination measures and priorities',
            validation: { maxLength: 2000 }
        });

        const movementTechniquesField = this.formBuilder.buildTextAreaField({
            id: 'movementTechniques',
            name: 'movementTechniques',
            label: 'Movement Techniques',
            value: this.data.movementTechniques || '',
            placeholder: 'Traveling: [CONDITIONS]. Traveling overwatch: [CONDITIONS]. Bounding overwatch: [CONDITIONS]...',
            rows: 3,
            required: false,
            helpText: 'Specify movement techniques for different conditions',
            validation: { maxLength: 1500 }
        });

        return `
            ${validationSummary}
            ${echelonField}

            <!-- Commander's Intent -->
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; border-radius: 6px;">
                <h4 style="margin: 0 0 16px 0; color: #3b82f6; font-size: 16px;">
                    <i class="fas fa-star" style="margin-right: 8px;"></i>Commander's Intent
                </h4>
                ${commandersIntentPurposeField}

                ${commandersIntentMethodField}

                ${commandersIntentEndStateField}
            </div>

            <!-- Concept of Operations -->
            ${conceptOfOperationsField}

            <!-- Scheme of Maneuver -->
            ${schemeOfManeuverField}

            <!-- Tasks to Subordinate Units -->
            ${tasksToSubordinateUnitsField}

            <!-- Coordinating Instructions -->
            ${coordinatingInstructionsField}

            <!-- Progressive Disclosure: Additional Details -->
            <div style="margin-top: 20px;">
                <button type="button" id="toggle-additional-execution-details"
                    style="background: #1e293b; border: 1px solid #374151; border-radius: 6px; padding: 10px 16px; color: #f8fafc; cursor: pointer; font-size: 14px; width: 100%;">
                    <i class="fas fa-plus-circle" style="margin-right: 8px;"></i>Add Additional Details (Timeline, Fire Support, Movement)
                </button>
                <div id="additional-execution-details" style="display: none; margin-top: 16px; padding: 16px; background: rgba(100, 116, 139, 0.1); border-radius: 6px;">
                    ${timelineField}

                    ${fireSupportCoordinationField}

                    ${movementTechniquesField}
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
        const echelonSelect = this.container.querySelector('#execution-echelon');
        if (echelonSelect) {
            echelonSelect.addEventListener('change', (e) => {
                this.setEchelon(e.target.value);
                this.eventBus.emit('draft:echelon-changed', { echelon: e.target.value, section: this.sectionId });
                this.render(); // Re-render to update examples
            });
        }

        // Real-time validation for Commander's Intent fields
        const commandersIntentFields = ['commandersIntentPurpose', 'commandersIntentMethod', 'commandersIntentEndState'];
        commandersIntentFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Real-time validation for main execution fields
        const mainFields = ['conceptOfOperations', 'schemeOfManeuver', 'tasksToSubordinateUnits', 'coordinatingInstructions'];
        mainFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Real-time validation for advanced fields
        const advancedFields = ['timeline', 'fireSupportCoordination', 'movementTechniques'];
        advancedFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Progressive disclosure toggle
        const toggleBtn = this.container.querySelector('#toggle-additional-execution-details');
        const detailsDiv = this.container.querySelector('#additional-execution-details');
        if (toggleBtn && detailsDiv) {
            toggleBtn.addEventListener('click', () => {
                const isHidden = detailsDiv.style.display === 'none';
                detailsDiv.style.display = isHidden ? 'block' : 'none';
                toggleBtn.innerHTML = isHidden
                    ? '<i class="fas fa-minus-circle" style="margin-right: 8px;"></i>Hide Additional Details'
                    : '<i class="fas fa-plus-circle" style="margin-right: 8px;"></i>Add Additional Details (Timeline, Fire Support, Movement)';
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
        this.formBuilder.displayValidationSummary('execution-form', errors);
    }
}

