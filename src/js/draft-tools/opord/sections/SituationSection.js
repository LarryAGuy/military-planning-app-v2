/**
 * Situation Section Component
 * OPORD Paragraph 1 - Situation
 * Extends BaseSectionComponent for reusability
 *
 * Supports all 11 standardized echelons (Platoon through Theater)
 * PHASE 7: Integrated with FormBuilder for dynamic form generation and validation
 *
 * @module SituationSection
 */

import { BaseSectionComponent } from './BaseSectionComponent.js';
import { FormBuilder } from '../../ui/FormBuilder.js';

export class SituationSection extends BaseSectionComponent {
    constructor(eventBus, portionMarkingManager = null) {
        super('situation', '1. SITUATION', eventBus, portionMarkingManager);

        // Initialize FormBuilder for dynamic form generation
        this.formBuilder = new FormBuilder(eventBus);
        this.formBuilder.initialize();

        // Validation rules for situation fields
        this.validationRules = {
            enemyForces: {
                required: true,
                label: 'Enemy Forces',
                validate: (value) => {
                    // Check placeholder text first (higher priority)
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Enemy Forces contains placeholder text' };
                    }
                    if (value && value.length < 50) {
                        return { warning: 'Enemy Forces description seems brief (less than 50 characters)' };
                    }
                    return {};
                }
            },
            friendlyForces: {
                required: true,
                label: 'Friendly Forces',
                validate: (value) => {
                    if (value && value.includes('[') && value.includes(']')) {
                        return { warning: 'Friendly Forces contains placeholder text' };
                    }
                    return {};
                }
            },
            attachmentsDetachments: {
                required: false,
                label: 'Attachments and Detachments'
            },
            civilConsiderations: {
                required: false,
                label: 'Civil Considerations (ASCOPE)'
            },
            terrain: {
                required: true,
                label: 'Terrain (OAKOC)',
                validate: (value) => {
                    if (value && value.length < 30) {
                        return { warning: 'Terrain analysis seems brief (less than 30 characters)' };
                    }
                    return {};
                }
            },
            weather: {
                required: true,
                label: 'Weather'
            }
        };
        
        // Echelon-specific examples for all 11 echelons
        this.echelonExamples = {
            'platoon': {
                enemyForces: 'Enemy squad (9 PAX) occupies defensive positions vic grid AB 123456. Equipped with small arms, 1x PKM, 1x RPG-7. Likely COA: Defend in place. Dangerous COA: Counterattack from concealed positions.',
                friendlyForces: 'Alpha Company attacks to seize OBJ BRAVO NLT 151200Z JAN 25. 2nd Platoon on right, 3rd Platoon in reserve. Adjacent: 2nd Platoon (left), Bravo Company (right).',
                attachmentsDetachments: 'Attached: 1x MRAP (from Company HQ). Detached: Weapons Squad (to Company reserve).',
                civilConsiderations: 'Rural area, 50 civilians in village. No critical infrastructure. Local elder cooperative.',
                terrain: 'Open terrain with scattered trees. Good observation north and east. Avenue of approach along road. Key terrain: Hill 203. Obstacles: Stream (fordable). Concealment limited.',
                weather: 'Clear, temp 15°C, winds 5 mph from west. Visibility unlimited. No precipitation forecast.'
            },
            'company': {
                enemyForces: 'Enemy company (120 PAX) defends BP STEEL vic grid AB 234567. 3x platoons, crew-served weapons, possible AT capability. Likely COA: Defend in depth. Dangerous COA: Spoiling attack to disrupt our LD.',
                friendlyForces: '1-87th Infantry attacks to seize OBJ CHARLIE NLT 201800Z JAN 25. Bravo Company on left, Charlie Company in reserve. Adjacent: Bravo Company (left), 2-10th Infantry (right). Supporting: 1x artillery battery.',
                attachmentsDetachments: 'Attached: 1x engineer squad, 1x FO team. Detached: 3rd Platoon (to battalion reserve).',
                civilConsiderations: 'Urban area, 500 civilians. Hospital and school present. Mayor supportive but population nervous.',
                terrain: 'Mixed urban/rural. Good observation from high ground. 2x avenues of approach (north road, south trail). Key terrain: Bridge at grid AB 234500. Obstacles: River (not fordable). Urban areas provide cover.',
                weather: 'Partly cloudy, temp 10°C, winds 10 mph from north. Visibility 5 km. Light rain possible afternoon.'
            },
            'squadron': {
                enemyForces: 'Enemy cavalry battalion (400 PAX, 12x BMP, 4x T-72) screens along PL BLUE. Aggressive reconnaissance posture. Likely COA: Screen and report. Dangerous COA: Delay action with AT ambushes.',
                friendlyForces: '3rd Armored Cavalry Regiment conducts reconnaissance to locate enemy main body. 2nd Squadron on left, 3rd Squadron in reserve. Adjacent: 2nd Squadron (left), 1st Brigade (right). Supporting: Attack aviation on call.',
                attachmentsDetachments: 'Attached: 1x engineer platoon, 1x CBRN team. Detached: C Troop (to regimental reserve).',
                civilConsiderations: 'Sparse population, farming communities. Limited infrastructure. Refugees moving west.',
                terrain: 'Rolling hills with tree lines. Observation limited to 2 km. Multiple avenues of approach. Key terrain: Ridgeline at grid CD 345678. Obstacles: Minefields reported. Tree lines provide concealment.',
                weather: 'Overcast, temp 5°C, winds 15 mph from east. Visibility 3 km in haze. Rain likely evening.'
            },
            'battalion': {
                enemyForces: 'Enemy battalion (600 PAX, 30x BMP, 10x T-72) defends along PL RED. Prepared positions, obstacles emplaced. Likely COA: Defend in sector. Dangerous COA: Counterattack with armor reserve.',
                friendlyForces: '1st Brigade attacks to penetrate enemy defenses NLT 101200Z FEB 25. 2-10th Infantry on left, 3-75th Rangers in reserve. Adjacent: 2-10th Infantry (left), 2nd Brigade (right). Supporting: Division artillery, CAS on call.',
                attachmentsDetachments: 'Attached: 1x tank company, 1x engineer company, 1x ADA platoon. Detached: Charlie Company (to brigade reserve).',
                civilConsiderations: 'Mixed urban/rural, 2000 civilians. Critical infrastructure: power plant, water treatment. IDP camp present.',
                terrain: 'Complex terrain with urban areas and open fields. Observation varies 1-5 km. 3x avenues of approach. Key terrain: Hill 456, Bridge complex. Obstacles: River, urban rubble, minefields. Urban areas provide cover and concealment.',
                weather: 'Cloudy, temp 8°C, winds 12 mph from south. Visibility 4 km. Intermittent rain.'
            },
            'group': {
                enemyForces: 'Enemy air defense network: 4x SA-15, 2x SA-11, multiple MANPADS. Integrated early warning. Likely COA: Defend key sites. Dangerous COA: Mobile ambush tactics.',
                friendlyForces: '160th SOAR supports SOF operations throughout AO. 1st Battalion provides MH-47 lift, 2nd Battalion provides MH-60 and AH-64. Adjacent: Conventional aviation (north), SOF ground elements (throughout). Supporting: SEAD, EW assets.',
                attachmentsDetachments: 'Attached: 1x CSAR element, 1x SIGINT team. Detached: None.',
                civilConsiderations: 'Denied area, minimal civilian presence. Enemy sympathizers likely. No friendly infrastructure.',
                terrain: 'Mountainous with valleys. Observation limited by terrain. Flight routes constrained by terrain and threat. Key terrain: LZ HAWK, FARP EAGLE. Obstacles: High terrain, weather. Valleys provide concealment for low-level flight.',
                weather: 'Variable mountain weather, temp 0-10°C, winds 20 mph gusting 30 mph. Visibility 2-8 km. Snow possible at altitude.'
            },
            'regiment': {
                enemyForces: 'Enemy brigade (2000 PAX, 60x BMP, 30x T-72, artillery battalion) defends key terrain. Prepared defenses, reserve positioned. Likely COA: Defend in depth with counterattack. Dangerous COA: Preemptive strike on airfield.',
                friendlyForces: '75th Ranger Regiment conducts airborne assault to seize airfield complex. 1st and 2nd Battalions assault, 3rd Battalion secures perimeter. Adjacent: 82nd Airborne (follow-on), Air Force (airlift). Supporting: Joint fires, CAS continuous.',
                attachmentsDetachments: 'Attached: 1x PSYOP team, 1x CA team, 1x TACP. Detached: None (all battalions committed).',
                civilConsiderations: 'Urban area, 5000 civilians near airfield. Critical infrastructure: airfield, fuel storage. Population uncertain.',
                terrain: 'Flat terrain around airfield, urban areas adjacent. Excellent observation from control tower. Limited avenues of approach. Key terrain: Airfield, fuel storage, terminal. Obstacles: Perimeter fence, urban areas. Limited concealment on airfield.',
                weather: 'Clear, temp 18°C, winds 8 mph from west. Visibility unlimited. Ideal jump conditions.'
            },
            'brigade': {
                enemyForces: 'Enemy division (10,000 PAX, mechanized/armor) withdrawing along Axis THUNDER. Rearguard actions expected. Likely COA: Delay and withdraw. Dangerous COA: Stand and fight at key terrain.',
                friendlyForces: '10th Mountain Division conducts pursuit operations. 2nd BCT on left, 3rd BCT in reserve. Adjacent: 2nd BCT (left), 1st Cavalry Division (right). Supporting: Division assets, joint fires, CAS priority.',
                attachmentsDetachments: 'Attached: 1x cavalry squadron, 1x engineer battalion, 1x ADA battery. Detached: 3-75th Rangers (to division reserve).',
                civilConsiderations: 'Multiple towns along axis, 20,000 civilians. Infrastructure damaged. Humanitarian concerns. Local government collapsed.',
                terrain: 'Mixed terrain, urban areas and open country. Observation 3-10 km. Multiple avenues of approach. Key terrain: Bridge sites, road junctions, high ground. Obstacles: Demolished bridges, minefields. Varied cover and concealment.',
                weather: 'Partly cloudy, temp 12°C, winds 10 mph from north. Visibility 8 km. Weather stable.'
            },
            'division': {
                enemyForces: 'Enemy corps (40,000 PAX, 3x divisions) defends in depth. Prepared positions, obstacles, reserves. Likely COA: Defend in sector with counterattack. Dangerous COA: Spoiling attack to disrupt our preparations.',
                friendlyForces: 'XVIII Airborne Corps conducts joint forcible entry. 82nd Airborne (airfield), 101st Airborne (port), 3rd Infantry (follow-on). Adjacent: 101st Airborne (left), III Corps (right). Supporting: Joint fires, air superiority, maritime support.',
                attachmentsDetachments: 'Attached: 1x armored brigade, 1x aviation brigade, 1x fires brigade, 1x sustainment brigade. Detached: 3rd BCT (to corps reserve).',
                civilConsiderations: 'Major urban areas, 200,000 civilians. Critical infrastructure throughout. Government in exile. Humanitarian crisis.',
                terrain: 'Complex terrain, urban centers, mountains, rivers. Observation varies widely. Multiple avenues of approach. Key terrain: Airfield, port, road network, bridges. Obstacles: Rivers, urban areas, mountains. Varied cover and concealment.',
                weather: 'Variable, temp 10-20°C, winds 12 mph. Visibility 5-10 km. Weather window 72 hours.'
            },
            'corps': {
                enemyForces: 'Enemy theater forces (100,000+ PAX, multiple corps) defend strategic depth. Integrated air defense, strategic reserves. Likely COA: Defend in depth, attrit forces. Dangerous COA: WMD employment.',
                friendlyForces: 'Third Army conducts theater offensive. XVIII Airborne Corps (north), III Armored Corps (south). Adjacent: Coalition forces (flanks). Supporting: Joint and coalition forces, strategic assets.',
                attachmentsDetachments: 'Attached: Theater assets (aviation, fires, sustainment, cyber). Detached: Forces to coalition partners.',
                civilConsiderations: 'Multiple nations, millions of civilians. Critical infrastructure: ports, airfields, power, water. Complex political situation. Refugee crisis.',
                terrain: 'Theater-wide terrain varies: urban, desert, mountains, rivers. Observation varies by area. Multiple strategic avenues. Key terrain: Capitals, ports, airfields, LOCs. Obstacles: Rivers, mountains, urban areas. Varied cover and concealment.',
                weather: 'Regional weather patterns, temp -10 to 40°C depending on area. Visibility varies. Seasonal considerations.'
            },
            'army': {
                enemyForces: 'Enemy strategic forces across theater. Multiple armies, integrated air/naval forces, strategic weapons. Likely COA: Strategic defense with operational counterattacks. Dangerous COA: Escalation to strategic weapons.',
                friendlyForces: 'CENTCOM conducts joint campaign. Land component (ARCENT), air component (AFCENT), maritime component (NAVCENT), SOF component (SOCCENT). Adjacent: Other COCOMs. Supporting: National strategic assets.',
                attachmentsDetachments: 'Attached: Coalition forces, interagency partners. Detached: Forces to other theaters.',
                civilConsiderations: 'Regional population, multiple nations, diverse cultures. Strategic infrastructure. International relations. Humanitarian operations.',
                terrain: 'Theater terrain spans multiple climate zones and terrain types. Strategic geography includes maritime, air, land, space, cyber domains. Key terrain: Strategic ports, airfields, capitals, LOCs. Obstacles: Political boundaries, geographic barriers.',
                weather: 'Theater-wide weather varies by region and season. Climate considerations affect operations. Long-range forecasting required.'
            },
            'theater': {
                enemyForces: 'Peer adversary with global reach. Strategic nuclear forces, conventional forces, cyber capabilities, space assets. Likely COA: Multi-domain strategic defense. Dangerous COA: Strategic escalation across all domains.',
                friendlyForces: 'National Command Authority directs joint campaign. Multiple COCOMs, interagency, coalition partners. Adjacent: Global partners. Supporting: National strategic capabilities across all domains.',
                attachmentsDetachments: 'Attached: Coalition forces, interagency elements, international partners. Detached: Forces to other strategic priorities.',
                civilConsiderations: 'Global population considerations. International law and norms. Strategic communications. Humanitarian implications. Post-conflict planning.',
                terrain: 'Global strategic geography. Multi-domain considerations: land, maritime, air, space, cyber, information. Key terrain: Strategic chokepoints, capitals, critical infrastructure. Obstacles: Political, geographic, technological.',
                weather: 'Global weather patterns affect operations worldwide. Climate considerations. Environmental factors across all domains.'
            }
        };
    }

    /**
     * Render section-specific fields
     */
    renderFields() {
        const examples = this.echelonExamples[this.echelon] || this.echelonExamples['company'];

        // Build validation summary
        const validationSummary = this.formBuilder.buildValidationSummary('situation-form');

        // Build echelon selector using FormBuilder
        const echelonField = this.formBuilder.buildSelectField({
            id: 'situation-echelon',
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

        // Build Enemy Forces field
        const enemyForcesField = this.formBuilder.buildTextAreaField({
            id: 'enemyForces',
            name: 'enemyForces',
            label: 'Composition, Disposition, Capabilities, COAs',
            value: this.data.enemyForces || '',
            placeholder: examples.enemyForces,
            rows: 4,
            required: true,
            helpText: 'Describe enemy composition, disposition, capabilities, and likely/dangerous courses of action',
            tooltip: 'Include strength, equipment, positions, and enemy COAs',
            validation: {
                required: true,
                minLength: 50,
                maxLength: 2000
            }
        });

        // Build Friendly Forces field
        const friendlyForcesField = this.formBuilder.buildTextAreaField({
            id: 'friendlyForces',
            name: 'friendlyForces',
            label: 'Higher Mission, Adjacent Units, Supporting Units',
            value: this.data.friendlyForces || '',
            placeholder: examples.friendlyForces,
            rows: 4,
            required: true,
            helpText: 'Describe higher unit mission, adjacent units, and supporting units',
            tooltip: 'Include higher mission, left/right units, and support available',
            validation: {
                required: true,
                minLength: 30,
                maxLength: 2000
            }
        });

        // Build Attachments and Detachments field
        const attachmentsField = this.formBuilder.buildTextAreaField({
            id: 'attachmentsDetachments',
            name: 'attachmentsDetachments',
            label: 'Attachments and Detachments',
            value: this.data.attachmentsDetachments || '',
            placeholder: examples.attachmentsDetachments,
            rows: 3,
            required: false,
            helpText: 'List units attached to or detached from your command',
            tooltip: 'Include attached units and detached units',
            validation: {
                maxLength: 1000
            }
        });

        // Build Terrain field
        const terrainField = this.formBuilder.buildTextAreaField({
            id: 'terrain',
            name: 'terrain',
            label: 'Terrain (OAKOC)',
            value: this.data.terrain || '',
            placeholder: examples.terrain,
            rows: 4,
            required: true,
            helpText: 'Analyze terrain using OAKOC: Observation, Avenues, Key terrain, Obstacles, Cover/Concealment',
            tooltip: 'Provide comprehensive OAKOC analysis',
            validation: {
                required: true,
                minLength: 30,
                maxLength: 2000
            }
        });

        // Build Weather field
        const weatherField = this.formBuilder.buildTextAreaField({
            id: 'weather',
            name: 'weather',
            label: 'Weather',
            value: this.data.weather || '',
            placeholder: examples.weather,
            rows: 2,
            required: true,
            helpText: 'Describe weather conditions and forecast',
            tooltip: 'Include temperature, visibility, precipitation, and forecast',
            validation: {
                required: true,
                minLength: 20,
                maxLength: 1000
            }
        });

        return `
            <!-- Validation Summary -->
            ${validationSummary}

            <!-- Echelon Selector -->
            ${echelonField}

            <!-- Enemy Forces -->
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(220, 38, 38, 0.1); border-left: 4px solid #dc2626; border-radius: 6px;">
                <h4 style="margin: 0 0 16px 0; color: #dc2626; font-size: 16px;">
                    <i class="fas fa-crosshairs" style="margin-right: 8px;"></i>Enemy Forces
                </h4>
                ${enemyForcesField}
            </div>

            <!-- Friendly Forces -->
            <div style="margin-bottom: 24px; padding: 16px; background: rgba(37, 99, 235, 0.1); border-left: 4px solid #2563eb; border-radius: 6px;">
                <h4 style="margin: 0 0 16px 0; color: #2563eb; font-size: 16px;">
                    <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>Friendly Forces
                </h4>
                ${friendlyForcesField}
            </div>

            <!-- Attachments and Detachments -->
            ${attachmentsField}

            <!-- Terrain (OAKOC) -->
            ${terrainField}

            <!-- Weather -->
            ${weatherField}

            <!-- Map & Weather Tool Button -->
            <div style="margin: 20px 0;">
                <button type="button" id="open-mapping-weather-tool" class="mapping-weather-tool-btn"
                    style="background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); border: none; border-radius: 6px; padding: 12px 20px; color: #ffffff; cursor: pointer; font-size: 14px; font-weight: 600; width: 100%; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); transition: all 0.2s;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>Open Map & Weather Tool
                    <span style="margin-left: 8px; font-size: 12px; opacity: 0.9;">(Tactical Mapping, Coordinates, Weather Data)</span>
                </button>
            </div>

            <!-- Progressive Disclosure: Advanced Analysis -->
            <div style="margin-top: 20px;">
                <button type="button" id="toggle-additional-situation-details"
                    style="background: #1e293b; border: 1px solid #374151; border-radius: 6px; padding: 10px 16px; color: #f8fafc; cursor: pointer; font-size: 14px; width: 100%;">
                    <i class="fas fa-plus-circle" style="margin-right: 8px;"></i>Add Advanced Analysis (OAKOC Details, ASCOPE, Intelligence)
                </button>
                <div id="additional-situation-details" style="display: none; margin-top: 16px; padding: 16px; background: rgba(100, 116, 139, 0.1); border-radius: 6px;">
                    ${this.formBuilder.buildTextAreaField({
                        id: 'civilConsiderations',
                        name: 'civilConsiderations',
                        label: 'Civil Considerations (ASCOPE)',
                        value: this.data.civilConsiderations || '',
                        placeholder: examples.civilConsiderations,
                        rows: 3,
                        required: false,
                        helpText: 'Analyze civil considerations using ASCOPE: Areas, Structures, Capabilities, Organizations, People, Events',
                        validation: { maxLength: 1500 }
                    })}

                    ${this.formBuilder.buildTextAreaField({
                        id: 'oakocObservation',
                        name: 'oakocObservation',
                        label: 'OAKOC - Observation and Fields of Fire',
                        value: this.data.oakocObservation || '',
                        placeholder: 'Describe observation capabilities and fields of fire...',
                        rows: 2,
                        required: false,
                        helpText: 'Describe observation capabilities and fields of fire for both friendly and enemy forces',
                        validation: { maxLength: 1000 }
                    })}

                    ${this.formBuilder.buildTextAreaField({
                        id: 'oakocAvenues',
                        name: 'oakocAvenues',
                        label: 'OAKOC - Avenues of Approach',
                        value: this.data.oakocAvenues || '',
                        placeholder: 'Identify and describe avenues of approach...',
                        rows: 2,
                        required: false,
                        helpText: 'Identify and describe avenues of approach for both friendly and enemy forces',
                        validation: { maxLength: 1000 }
                    })}
                    ${this.formBuilder.buildTextAreaField({
                        id: 'oakocKeyTerrain',
                        name: 'oakocKeyTerrain',
                        label: 'OAKOC - Key Terrain',
                        value: this.data.oakocKeyTerrain || '',
                        placeholder: 'Identify key terrain and its significance...',
                        rows: 2,
                        required: false,
                        helpText: 'Identify key terrain and explain its tactical significance',
                        validation: { maxLength: 1000 }
                    })}

                    ${this.formBuilder.buildTextAreaField({
                        id: 'oakocObstacles',
                        name: 'oakocObstacles',
                        label: 'OAKOC - Obstacles',
                        value: this.data.oakocObstacles || '',
                        placeholder: 'Describe natural and man-made obstacles...',
                        rows: 2,
                        required: false,
                        helpText: 'Describe natural and man-made obstacles that affect movement',
                        validation: { maxLength: 1000 }
                    })}

                    ${this.formBuilder.buildTextAreaField({
                        id: 'oakocCover',
                        name: 'oakocCover',
                        label: 'OAKOC - Cover and Concealment',
                        value: this.data.oakocCover || '',
                        placeholder: 'Describe available cover and concealment...',
                        rows: 2,
                        required: false,
                        helpText: 'Describe available cover and concealment for both friendly and enemy forces',
                        validation: { maxLength: 1000 }
                    })}
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
        const echelonSelect = this.container.querySelector('#situation-echelon');
        if (echelonSelect) {
            echelonSelect.addEventListener('change', (e) => {
                this.setEchelon(e.target.value);
                this.eventBus.emit('draft:echelon-changed', { echelon: e.target.value, section: this.sectionId });
                this.render(); // Re-render to update examples
            });
        }

        // Real-time validation for main fields
        const mainFields = ['enemyForces', 'friendlyForces', 'attachmentsDetachments', 'terrain', 'weather'];
        mainFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Real-time validation for advanced fields
        const advancedFields = ['civilConsiderations', 'oakocObservation', 'oakocAvenues',
                               'oakocKeyTerrain', 'oakocObstacles', 'oakocCover'];
        advancedFields.forEach(fieldName => {
            const field = this.container.querySelector(`#${fieldName}`);
            if (field) {
                field.addEventListener('blur', () => {
                    this.validateField(fieldName, field.value);
                });
            }
        });

        // Progressive disclosure toggle
        const toggleBtn = this.container.querySelector('#toggle-additional-situation-details');
        const detailsDiv = this.container.querySelector('#additional-situation-details');
        if (toggleBtn && detailsDiv) {
            toggleBtn.addEventListener('click', () => {
                const isHidden = detailsDiv.style.display === 'none';
                detailsDiv.style.display = isHidden ? 'block' : 'none';
                toggleBtn.innerHTML = isHidden
                    ? '<i class="fas fa-minus-circle" style="margin-right: 8px;"></i>Hide Advanced Analysis'
                    : '<i class="fas fa-plus-circle" style="margin-right: 8px;"></i>Add Advanced Analysis (OAKOC Details, ASCOPE, Intelligence)';
            });
        }

        // Map & Weather Tool button
        const mapWeatherBtn = this.container.querySelector('#open-mapping-weather-tool');
        if (mapWeatherBtn) {
            mapWeatherBtn.addEventListener('click', () => {
                this.openMappingWeatherTool();
            });

            // Add hover effects (CSP-compliant)
            mapWeatherBtn.addEventListener('mouseover', () => {
                mapWeatherBtn.style.transform = 'translateY(-2px)';
                mapWeatherBtn.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
            });

            mapWeatherBtn.addEventListener('mouseout', () => {
                mapWeatherBtn.style.transform = 'translateY(0)';
                mapWeatherBtn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
            });
        }
    }

    /**
     * Open Mapping & Weather Tool in modal
     * EXTENSION HOOK: This method provides integration with the mapping and weather tool
     */
    async openMappingWeatherTool() {
        console.log('🗺️ Opening Mapping & Weather Tool from OPORD Situation section...');

        try {
            // Dynamically import MappingWeatherTool
            const { MappingWeatherTool } = await import('../../../mapping-weather/MappingWeatherTool.js');

            // Define action buttons HTML for modal header
            const actionButtonsHTML = `
                <button id="insert-terrain-data" class="btn-primary" style="
                    background: #10b981;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    color: white;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                    line-height: 1.4;
                ">
                    <i class="fas fa-map-marked-alt" style="margin-right: 4px;"></i>Insert Terrain Data
                </button>
                <button id="insert-weather-data" class="btn-primary" style="
                    background: #3b82f6;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    color: white;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                    line-height: 1.4;
                ">
                    <i class="fas fa-cloud-sun" style="margin-right: 4px;"></i>Insert Weather Data
                </button>
                <button id="insert-all-data" class="btn-primary" style="
                    background: #8b5cf6;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    color: white;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    white-space: nowrap;
                    line-height: 1.4;
                ">
                    <i class="fas fa-check-double" style="margin-right: 4px;"></i>Insert All Data
                </button>
            `;

            // Create modal overlay with action buttons in header
            const modal = this.createToolModal('Mapping & Weather Tool - OPORD Integration', 'opord-mapping-weather-modal', actionButtonsHTML);

            // Create combined container
            const container = document.createElement('div');
            container.id = 'opord-mapping-weather-container';
            container.innerHTML = `

                <!-- Grid Container for Map, Coordinate Converter, and Weather Sections -->
                <div class="mapping-weather-display" style="display: grid; grid-template-columns: 7fr 3fr; grid-template-rows: auto auto; gap: 1rem;">
                    <!-- Row 1, Column 1: Map Section -->
                    <div class="map-section">
                        <div id="opord-map-container" style="height: 500px;"></div>
                    </div>

                    <!-- Row 1, Column 2: Coordinate Converter -->
                    <div class="coordinate-converter-section" id="opord-coord-converter-container">
                        <!-- Coordinate converter HTML will be inserted here -->
                    </div>

                    <!-- Row 2, Spans both columns: Weather Section -->
                    <div class="weather-section" id="opord-weather-container" style="grid-column: 1 / -1;">
                        <!-- Weather data will be inserted here -->
                    </div>
                </div>
            `;
            modal.querySelector('.modal-body').appendChild(container);

            // Initialize combined tool
            const mappingWeatherTool = new MappingWeatherTool();
            await mappingWeatherTool.initialize('opord-map-container');

            // Set integration mode for OPORD
            mappingWeatherTool.setIntegrationMode('opord', {
                section: 'situation',
                echelon: this.echelon
            });

            // Insert coordinate converter HTML into its own container
            const coordConverterContainer = document.getElementById('opord-coord-converter-container');
            const weatherContainer = document.getElementById('opord-weather-container');

            if (coordConverterContainer && weatherContainer) {
                const coordConverterHTML = mappingWeatherTool.getCoordinateConverterHTML();

                // Insert coordinate converter into its dedicated container
                coordConverterContainer.innerHTML = coordConverterHTML;

                // Insert weather fetch button into weather container
                weatherContainer.innerHTML = `
                    <div style="padding: 20px; background: #1f2937; border-radius: 8px; text-align: center;">
                        <i class="fas fa-cloud-sun" style="color: #3b82f6; font-size: 48px; margin-bottom: 16px;"></i>
                        <p style="color: #f9fafb; font-size: 16px; font-weight: 600; margin-bottom: 8px;">Weather Data Ready</p>
                        <p style="color: #9ca3af; font-size: 14px; margin-bottom: 16px;">Click the button below to fetch weather data for the map center</p>
                        <button id="fetch-weather-now" style="background: #3b82f6; border: none; padding: 10px 20px; border-radius: 6px; color: white; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            <i class="fas fa-sync-alt" style="margin-right: 8px;"></i>Fetch Weather for Map Center
                        </button>
                        <p style="color: #6b7280; font-size: 12px; margin-top: 12px;">
                            <i class="fas fa-info-circle" style="margin-right: 4px;"></i>
                            Weather API requires Vercel deployment. On localhost, this will show an error.
                        </p>
                    </div>
                `;

                // Attach DOM event listeners for coordinate converter
                mappingWeatherTool.getCoordinateConverterUI().attachDOMEventListeners();

                // TASK 2: Auto-update weather on map click
                // CRITICAL FIX: Store event listener reference for cleanup and add validation
                const weatherAutoUpdateHandler = async (data) => {
                    // CRITICAL: Get fresh reference to weather container each time
                    const currentWeatherContainer = document.getElementById('opord-weather-container');

                    if (!currentWeatherContainer) {
                        console.warn('⚠️ Weather container not found in DOM');
                        return;
                    }

                    // CRITICAL: Validate coordinates before proceeding to prevent NaN errors
                    if (!data || typeof data !== 'object') {
                        console.warn('⚠️ Invalid data object received, skipping weather fetch:', data);
                        return;
                    }

                    if (!data.lat || !data.lon || isNaN(data.lat) || isNaN(data.lon)) {
                        console.warn('⚠️ Invalid coordinates received (NaN or missing), skipping weather fetch:', data);
                        return;
                    }

                    // Additional validation: Check if coordinates are within valid ranges
                    if (data.lat < -90 || data.lat > 90 || data.lon < -180 || data.lon > 180) {
                        console.warn('⚠️ Coordinates out of valid range, skipping weather fetch:', data);
                        return;
                    }

                    console.log('🗺️ Coordinate converted - Auto-fetching weather for new location:', data);

                    // Show loading state in weather container
                    currentWeatherContainer.innerHTML = `
                        <div style="padding: 20px; background: #1f2937; border-radius: 8px; text-align: center;">
                            <i class="fas fa-spinner fa-spin" style="color: #3b82f6; font-size: 48px; margin-bottom: 16px;"></i>
                            <p style="color: #f9fafb; font-size: 16px; font-weight: 600; margin-bottom: 8px;">Fetching Weather Data...</p>
                            <p style="color: #9ca3af; font-size: 14px;">Loading weather for ${data.lat.toFixed(4)}, ${data.lon.toFixed(4)}</p>
                        </div>
                    `;

                    try {
                        // Fetch weather for the clicked location
                        const weatherResult = await mappingWeatherTool.fetchWeatherForMapCenter();

                        if (weatherResult.success) {
                            // Update weather container with weather data
                            const weatherHTML = mappingWeatherTool.getWeatherTool().createWeatherDisplayHTML();
                            currentWeatherContainer.innerHTML = weatherHTML;
                            console.log('✅ Weather auto-updated for clicked location');
                        } else {
                            currentWeatherContainer.innerHTML = `
                                <div style="padding: 20px; background: #1f2937; border-radius: 8px; text-align: center;">
                                    <i class="fas fa-exclamation-triangle" style="color: #f59e0b; font-size: 48px; margin-bottom: 16px;"></i>
                                    <p style="color: #f9fafb; font-size: 16px; font-weight: 600; margin-bottom: 8px;">Weather Data Unavailable</p>
                                    <p style="color: #9ca3af; font-size: 14px;">${weatherResult.error}</p>
                                    <p style="color: #6b7280; font-size: 12px; margin-top: 12px;">
                                        This is expected on localhost. Weather API requires Vercel deployment.
                                    </p>
                                </div>
                            `;
                        }
                    } catch (error) {
                        console.error('Weather auto-fetch error:', error);
                        currentWeatherContainer.innerHTML = `
                            <div style="padding: 20px; background: #1f2937; border-radius: 8px; text-align: center;">
                                <i class="fas fa-cloud-slash" style="color: #ef4444; font-size: 48px; margin-bottom: 16px;"></i>
                                <p style="color: #f9fafb; font-size: 16px; font-weight: 600; margin-bottom: 8px;">Weather Service Error</p>
                                <p style="color: #9ca3af; font-size: 14px;">${error.message}</p>
                                <p style="color: #6b7280; font-size: 12px; margin-top: 12px;">
                                    This is expected on localhost. Test on Vercel preview deployment.
                                </p>
                            </div>
                        `;
                    }
                };

                // Attach the event listener
                this.eventBus.on('coord-converter:converted', weatherAutoUpdateHandler);

                // CRITICAL FIX: Clean up event listener when modal closes to prevent memory leaks
                const cleanupEventListener = () => {
                    this.eventBus.off('coord-converter:converted', weatherAutoUpdateHandler);
                    console.log('🧹 Cleaned up weather auto-update event listener');
                };

                // Store cleanup function on modal for later use
                modal._weatherAutoUpdateCleanup = cleanupEventListener;

                // Add event listener for fetch weather button (manual trigger)
                const fetchWeatherBtn = document.getElementById('fetch-weather-now');
                if (fetchWeatherBtn) {
                    fetchWeatherBtn.addEventListener('click', async () => {
                        fetchWeatherBtn.disabled = true;
                        fetchWeatherBtn.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>Fetching...';

                        try {
                            const weatherResult = await mappingWeatherTool.fetchWeatherForMapCenter();
                            if (weatherResult.success) {
                                // Update weather container with weather data only
                                const weatherHTML = mappingWeatherTool.getWeatherTool().createWeatherDisplayHTML();
                                weatherContainer.innerHTML = weatherHTML;
                            } else {
                                weatherContainer.innerHTML = `
                                    <div style="padding: 20px; background: #1f2937; border-radius: 8px; text-align: center;">
                                        <i class="fas fa-exclamation-triangle" style="color: #f59e0b; font-size: 48px; margin-bottom: 16px;"></i>
                                        <p style="color: #f9fafb; font-size: 16px; font-weight: 600; margin-bottom: 8px;">Weather Data Unavailable</p>
                                        <p style="color: #9ca3af; font-size: 14px;">${weatherResult.error}</p>
                                        <p style="color: #6b7280; font-size: 12px; margin-top: 12px;">
                                            This is expected on localhost. Weather API requires Vercel deployment.
                                        </p>
                                    </div>
                                `;
                            }
                        } catch (error) {
                            console.error('Weather fetch error:', error);
                            weatherContainer.innerHTML = `
                                <div style="padding: 20px; background: #1f2937; border-radius: 8px; text-align: center;">
                                    <i class="fas fa-cloud-slash" style="color: #ef4444; font-size: 48px; margin-bottom: 16px;"></i>
                                    <p style="color: #f9fafb; font-size: 16px; font-weight: 600; margin-bottom: 8px;">Weather Service Error</p>
                                    <p style="color: #9ca3af; font-size: 14px;">${error.message}</p>
                                    <p style="color: #6b7280; font-size: 12px; margin-top: 12px;">
                                        This is expected on localhost. Test on Vercel preview deployment.
                                    </p>
                                </div>
                            `;
                        }
                    });
                }
            }

            // Attach button handlers
            this.attachToolModalHandlers(modal, mappingWeatherTool);

            console.log('✅ Mapping & Weather Tool opened successfully');
        } catch (error) {
            console.error('❌ Error opening Mapping & Weather Tool:', error);
            alert('Failed to open Mapping & Weather Tool. Please try again.');
        }
    }

    /**
     * Attach event handlers for tool modal buttons
     */
    attachToolModalHandlers(modal, mappingWeatherTool) {
        // Insert Terrain Data button
        const insertTerrainBtn = modal.querySelector('#insert-terrain-data');
        if (insertTerrainBtn) {
            insertTerrainBtn.addEventListener('click', () => {
                this.insertTerrainData(mappingWeatherTool);
            });
        }

        // Insert Weather Data button
        const insertWeatherBtn = modal.querySelector('#insert-weather-data');
        if (insertWeatherBtn) {
            insertWeatherBtn.addEventListener('click', () => {
                this.insertWeatherData(mappingWeatherTool);
            });
        }

        // Insert All Data button
        const insertAllBtn = modal.querySelector('#insert-all-data');
        if (insertAllBtn) {
            insertAllBtn.addEventListener('click', () => {
                this.insertTerrainData(mappingWeatherTool);
                this.insertWeatherData(mappingWeatherTool);

                // CRITICAL FIX: Clean up event listeners before removing modal
                if (modal._weatherAutoUpdateCleanup) {
                    modal._weatherAutoUpdateCleanup();
                }

                modal.remove();
            });
        }
    }

    /**
     * Insert terrain data from mapping tool into OPORD terrain field
     * CRITICAL: Enforces MGRS format for grid coordinates per military standards
     */
    insertTerrainData(mappingWeatherTool) {
        const integrationData = mappingWeatherTool.getIntegrationData();
        const mapData = integrationData.map;

        // Build terrain description from map data
        let terrainText = '';
        let coordinateWarning = '';

        if (mapData.center) {
            // CRITICAL: Convert to MGRS format for military grid coordinates
            const converter = mappingWeatherTool.getCoordinateConverterUI().converter;
            const mgrsResult = converter.latLonToMGRS(mapData.center.lat, mapData.center.lon, 5);

            if (mgrsResult.success) {
                // Use MGRS format (military standard)
                terrainText += `AO Center (MGRS): ${mgrsResult.mgrs}\n`;
                console.log('✅ Terrain coordinates inserted in MGRS format:', mgrsResult.mgrs);
            } else {
                // Fallback to UTM if MGRS fails
                const utmResult = converter.latLonToUTM(mapData.center.lat, mapData.center.lon);

                if (utmResult.success) {
                    terrainText += `AO Center (UTM): ${utmResult.utm}\n`;
                    coordinateWarning = `⚠️ MGRS conversion failed (${mgrsResult.error}). Using UTM format instead.`;
                    console.warn(coordinateWarning);
                } else {
                    // Final fallback to Lat/Lon
                    terrainText += `AO Center (Lat/Lon): ${mapData.center.lat.toFixed(6)}, ${mapData.center.lon.toFixed(6)}\n`;
                    coordinateWarning = `⚠️ MGRS and UTM conversion failed. Using Lat/Lon format instead.\nMGRS Error: ${mgrsResult.error}\nUTM Error: ${utmResult.error}`;
                    console.warn(coordinateWarning);
                }
            }
        }

        if (mapData.graphics && mapData.graphics.features && mapData.graphics.features.length > 0) {
            terrainText += `\nTactical Graphics:\n`;
            mapData.graphics.features.forEach((feature, index) => {
                const type = feature.geometry.type;
                terrainText += `- ${type} ${index + 1}\n`;
            });
        }

        terrainText += `\nOAKOC Analysis:\n`;
        terrainText += `- Observation: [Describe observation and fields of fire]\n`;
        terrainText += `- Avenues of Approach: [Describe mobility corridors]\n`;
        terrainText += `- Key Terrain: [Identify key terrain features]\n`;
        terrainText += `- Obstacles: [Describe natural and man-made obstacles]\n`;
        terrainText += `- Cover and Concealment: [Describe available cover]\n`;

        // Insert into terrain field
        const terrainField = this.container.querySelector('#terrain');
        if (terrainField) {
            terrainField.value = terrainText;
            this.data.terrain = terrainText;
            this.eventBus.emit('draft:field-updated', {
                section: this.sectionId,
                field: 'terrain',
                value: terrainText
            });
        }

        // Show warning if MGRS conversion failed
        if (coordinateWarning) {
            alert(coordinateWarning);
        }

        console.log('✅ Terrain data inserted into OPORD');
    }

    /**
     * Insert weather data from weather tool into OPORD weather field
     */
    insertWeatherData(mappingWeatherTool) {
        const integrationData = mappingWeatherTool.getIntegrationData();
        const weatherData = integrationData.weather;

        // Build weather description
        let weatherText = '';

        if (weatherData.weather && weatherData.weather.main) {
            const w = weatherData.weather;
            weatherText += `Current Conditions (${integrationData.location || 'Unknown Location'}):\n`;
            weatherText += `- Temperature: ${Math.round(w.main.temp)}°F (Feels like ${Math.round(w.main.feels_like)}°F)\n`;
            weatherText += `- Conditions: ${w.weather[0].description}\n`;
            weatherText += `- Visibility: ${(w.visibility / 1609.34).toFixed(1)} miles\n`;
            weatherText += `- Wind: ${Math.round(w.wind.speed)} mph from ${this.getWindDirection(w.wind.deg)}\n`;
            weatherText += `- Humidity: ${w.main.humidity}%\n`;
        }

        if (weatherData.forecast && weatherData.forecast.length > 0) {
            weatherText += `\n3-Day Forecast:\n`;
            weatherData.forecast.forEach((day, index) => {
                weatherText += `Day ${index + 1}: High ${Math.round(day.high)}°F / Low ${Math.round(day.low)}°F - ${day.description}\n`;
            });
        }

        if (weatherData.tactical) {
            const t = weatherData.tactical;
            weatherText += `\nTactical Data:\n`;
            if (t.bmnt) weatherText += `- BMNT: ${t.bmnt}\n`;
            if (t.sunrise) weatherText += `- Sunrise: ${t.sunrise}\n`;
            if (t.sunset) weatherText += `- Sunset: ${t.sunset}\n`;
            if (t.eent) weatherText += `- EENT: ${t.eent}\n`;
            if (t.moonPhase) weatherText += `- Moon Phase: ${t.moonPhase}\n`;
            if (t.moonIllumination) weatherText += `- Moon Illumination: ${Math.round(t.moonIllumination * 100)}%\n`;
        }

        // Insert into weather field
        const weatherField = this.container.querySelector('#weather');
        if (weatherField) {
            weatherField.value = weatherText;
            this.data.weather = weatherText;
            this.eventBus.emit('draft:field-updated', {
                section: this.sectionId,
                field: 'weather',
                value: weatherText
            });
        }

        console.log('✅ Weather data inserted into OPORD');
    }

    /**
     * Get wind direction from degrees
     */
    getWindDirection(degrees) {
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        const index = Math.round(degrees / 22.5) % 16;
        return directions[index];
    }

    /**
     * Create modal for tool display
     * @param {string} title - Modal title
     * @param {string} id - Modal ID
     * @param {string} actionButtonsHTML - Optional HTML for action buttons to display in header
     */
    createToolModal(title, id, actionButtonsHTML = '') {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.id = id;
        overlay.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.right = '0';
        overlay.style.bottom = '0';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '9999';

        // Create modal content
        overlay.innerHTML = `
            <div class="bg-gray-800 rounded-lg max-w-7xl w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col" style="background: #1f2937; border-radius: 8px; max-width: 1280px; width: 100%; margin: 0 16px; max-height: 90vh; overflow: hidden; display: flex; flex-direction: column;">
                <div class="modal-header" style="display: flex; align-items: center; justify-content: space-between; padding: 16px; border-bottom: 1px solid #374151; gap: 16px;">
                    <h2 class="text-xl font-bold text-white" style="font-size: 20px; font-weight: 700; color: white; flex-shrink: 0;">${title}</h2>
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        ${actionButtonsHTML}
                        <button class="modal-close text-gray-400 hover:text-white text-2xl" style="color: #9ca3af; font-size: 24px; background: none; border: none; cursor: pointer; padding: 0; margin-left: 8px;">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="modal-body p-6 overflow-y-auto flex-1" style="padding: 24px; overflow-y: auto; flex: 1;">
                    <!-- Tool content will be inserted here -->
                </div>
            </div>
        `;

        // Add close button event listener (CSP-compliant)
        const closeBtn = overlay.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                // CRITICAL FIX: Clean up event listeners before removing modal
                if (overlay._weatherAutoUpdateCleanup) {
                    overlay._weatherAutoUpdateCleanup();
                }
                overlay.remove();
            });
        }

        // Add to document
        document.body.appendChild(overlay);

        return overlay;
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
        this.formBuilder.displayValidationSummary('situation-form', errors);
    }
}

