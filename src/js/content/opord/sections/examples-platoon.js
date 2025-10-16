/**
 * OPORD Examples - Platoon Level
 * UNCLASSIFIED content for platoon-level OPORD examples
 * Follows FM 5-0 standards with realistic unit designations
 */

export const platoonExampleModule = {
    id: 'examples-platoon',
    title: 'Platoon Level OPORD Example',
    echelon: 'platoon',
    level: 'tactical',
    classification: 'UNCLASSIFIED//FOUO',

    getContent: function() {
        return `
            <!-- Platoon Level Complete OPORD Example - Operation VISTULA GUARD -->
            <div id="platoon-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-users" style="margin-right: 8px; color: #f59e0b; font-size: 16px;"></i>
                        OPERATION ORDER 24-045 (VISTULA GUARD) - Platoon Level
                    </h3>
                    <p style="color: #fbbf24; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - 1st Platoon, Alpha Company, 1-77 Infantry, Operation WARSAW STORM
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">171200ZDEC24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">Platoon CP, Krakowskie Przedmieście</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">University District Sector</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-21.8</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:10,000 Urban Detail</span>
                        </div>
                    </div>
                </div>

                <!-- First Row: Situation & Enemy Forces -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Section 1: Situation - Platoon Area of Operations -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #dc2626; font-size: 12px;"></i>
                                1. SITUATION - Platoon Area of Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - 1st Platoon AOR encompasses 2.5 km² University District with Warsaw University campus, student housing, and academic facilities.
                            </p>

                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Platoon Boundaries & Campus Terrain</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Krakowskie Przedmieście to Oboźna Street (52°14'15"N)</li>
                                    <li>South: Nowy Świat to Świętokrzyska Street (52°13'45"N)</li>
                                    <li>East: Bednarska to Dobra Street (21°01'00"E)</li>
                                    <li>West: Nowy Świat to Smolna Street (20°59'45"E)</li>
                                    <li>Key Buildings: Main University building, Library, Student dormitories</li>
                                    <li>Campus Density: 75% built-up, academic complexes, pedestrian areas</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Critical Academic Targets & Infrastructure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Primary: Main University building, Central Library</li>
                                    <li>Secondary: Student dormitories (3), Faculty buildings (5)</li>
                                    <li>Infrastructure: Campus communications center, power substation</li>
                                    <li>Transportation: Metro entrance, bus stops (4), parking areas</li>
                                    <li>Security: Campus security office, emergency call boxes (12)</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Urban Tactical Environment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Building Types: 2-4 story academic, 6-8 story dormitories</li>
                                    <li>Street Network: Pedestrian walkways, limited vehicle access</li>
                                    <li>Obstacles: Courtyards, academic quads, underground passages</li>
                                    <li>Civilian Population: 8,500 students, 1,200 faculty/staff</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Enemy Forces Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                                a. Enemy Forces - 2nd Squad, 3rd Platoon
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Enemy 2nd Squad with 45 personnel, campus defense capabilities, and integrated security in University District.
                            </p>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Squad Level</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Ground Forces: 2nd Squad (45 personnel), 2 light vehicles, 8 crew-served weapons</li>
                                    <li>Air Forces: No organic air assets</li>
                                    <li>Air Defense: 2 MANPADS teams, campus-based positions</li>
                                    <li>Special Forces: 8 personnel, campus specialists</li>
                                    <li>Militia Forces: 15 irregular fighters, student sympathizers</li>
                                    <li>Cyber Units: Squad-level electronic warfare capabilities</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Squad Defense Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Campus Defense: Main University building strongpoint, prepared positions</li>
                                    <li>Anti-Personnel: 3 machine gun positions, building-based firing positions</li>
                                    <li>Electronic Warfare: 1 squad jammer, communications disruption</li>
                                    <li>IED Networks: Campus building placement, squad coordination</li>
                                    <li>Logistics: 3-day supply, distributed caches in academic buildings</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action Assessment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Most Likely COA:</strong> Main University building defense</li>
                                    <li><strong>Most Dangerous COA:</strong> Coordinated attacks on students/faculty</li>
                                    <li><strong>Asymmetric Options:</strong> Campus infrastructure sabotage</li>
                                    <li><strong>Withdrawal Options:</strong> Underground campus tunnels</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- Second Row: Friendly Forces & Attachments/Detachments -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Section 1b: Friendly Forces -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-users" style="margin-right: 8px; color: #2563eb; font-size: 12px;"></i>
                                b. Friendly Forces - Platoon & Supporting Elements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Infantry platoon with 42 personnel, integrated squad structure, and specialized capabilities across University District Sector.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Company Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Company Command:</strong> Operation WARSAW STORM tactical guidance</li>
                                    <li><strong>Battalion Support:</strong> Fires, medical, logistics assets</li>
                                    <li><strong>Coalition Integration:</strong> Polish liaison team</li>
                                    <li><strong>Regional Partners:</strong> Local police coordination</li>
                                    <li><strong>Company Support:</strong> Weapons squad, medical team</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>2nd Platoon:</strong> Northern sector operations, coordination</li>
                                    <li><strong>3rd Platoon:</strong> Southern sector operations, reserve</li>
                                    <li><strong>Weapons Squad:</strong> Direct fire support, overwatch</li>
                                    <li><strong>Medic Team:</strong> Casualty evacuation, medical support</li>
                                    <li><strong>Polish Liaison:</strong> Local coordination, cultural guidance</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Platoon Tactical Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st Squad:</strong> 12 personnel, rifle squad operations</li>
                                    <li><strong>2nd Squad:</strong> 12 personnel, rifle squad operations</li>
                                    <li><strong>3rd Squad:</strong> 12 personnel, rifle squad operations</li>
                                    <li><strong>Platoon HQ:</strong> 6 personnel, command and control</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 1c: Attachments and Detachments -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-exchange-alt" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                c. Attachments and Detachments - Platoon Force Modifications
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Platoon-level force modifications for Operation VISTULA GUARD with specialized capabilities and urban warfare integration.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Attached to Platoon</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Company Assets:</strong> Weapons Squad Section (6 personnel)</li>
                                    <li><strong>Engineer Support:</strong> Breaching Team (4 personnel)</li>
                                    <li><strong>Medical Support:</strong> Combat Medic (1 personnel)</li>
                                    <li><strong>Communications:</strong> RTO Team (2 personnel)</li>
                                    <li><strong>Polish Support:</strong> Liaison Team (2 personnel)</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Detached from Platoon</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>To Company Reserve:</strong> Fire Team Alpha (4 personnel)</li>
                                    <li><strong>To Battalion Support:</strong> Reconnaissance Team (2 personnel)</li>
                                    <li><strong>To Polish Forces:</strong> Liaison NCO (1 personnel)</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Command Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>OPCON:</strong> All attached units under platoon operational control</li>
                                    <li><strong>TACON:</strong> Weapons squad section tactical control only</li>
                                    <li><strong>Direct Support:</strong> Engineer team direct support relationship</li>
                                    <li><strong>General Support:</strong> Medical team general support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Third Row: Assumptions & Environmental Considerations -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 1d: Assumptions -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-lightbulb" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                            d. Assumptions - Platoon Planning Assumptions
                        </h4>
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Company Support:</strong> Available within 30 minutes for fires and medical</li>
                                <li><strong>Polish Liaison:</strong> On-call for cultural/legal coordination</li>
                                <li><strong>EW Threat:</strong> Intermittent jamming, line-of-sight reliable</li>
                                <li><strong>Civil Presence:</strong> Students/faculty sheltering in place</li>
                                <li><strong>Medical Evac:</strong> CASEVAC via company in 20 minutes</li>
                                <li><strong>Logistics:</strong> Resupply window every 4 hours</li>
                                <li><strong>Weather:</strong> Winter conditions, limited visibility after H+6</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 1e: Environmental Considerations (OAKOC) -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-globe-europe" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                            e. Environmental Considerations - OAKOC Analysis
                        </h4>
                        <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Observation/Fields of Fire:</strong> Rooftops and courtyards allow overwatch</li>
                                <li><strong>Avenues of Approach:</strong> Krakowskie Przedmieście, campus walkways</li>
                                <li><strong>Key Terrain:</strong> Main University Building (NV 146 476), Central Library (NV 146 475)</li>
                                <li><strong>Obstacles:</strong> Underground passages, barricades, narrow corridors</li>
                                <li><strong>Cover/Concealment:</strong> Dense academic structures, tree lines</li>
                                <li><strong>Weather Impact:</strong> Winter visibility 200-600m, affects movement</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Fourth Row: Time/Space & Section 2 (Mission) -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 1f: Time and Space -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-clock" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
                            f. Time and Space - Tactical Factors
                        </h4>
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Timeline:</strong> Planning 2 hours; Execution 6 hours; Total 8 hours</li>
                                <li><strong>Movement:</strong> 5-10 minutes between objectives</li>
                                <li><strong>Coordination:</strong> 30-minute battle rhythm with company</li>
                                <li><strong>Resupply:</strong> 4-hour cycle; ammo/water priority</li>
                                <li><strong>Area:</strong> 2.5 km² University District sector</li>
                                <li><strong>Command Distance:</strong> 800m max from platoon CP</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 2: Mission -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-bullseye" style="margin-right: 8px; color: #2563eb; font-size: 12px;"></i>
                            2. MISSION - Statement & Intent
                        </h4>
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0 0 12px 0;">
                            1st Platoon seizes and secures the University District sector NLT 171400ZDEC24 to deny enemy use of academic facilities and enable company advance.
                        </p>
                        <div style="background-color: rgba(37, 99, 235, 0.2); border: 1px solid #2563eb; border-radius: 6px; padding: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Commander's Intent</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Purpose:</strong> Eliminate enemy resistance and protect civilians</li>
                                <li><strong>Method:</strong> Coordinated squad-level clearing operations</li>
                                <li><strong>End State:</strong> Sector secured; ready for follow-on operations</li>
                                <li><strong>Key Tasks:</strong> Secure Main University building, protect students/faculty</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Fifth Row: Execution (3a-3c) -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- 3a. Concept of Operations -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-cogs" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                            3a. Concept of Operations
                        </h4>
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>H-Hour 171200Z:</strong> Phase I – Move to PL ALPHA; overwatch set by H+15</li>
                                <li><strong>H+30:</strong> Phase II – Breach OBJ LECTERN; 1st SQD inside by H+45</li>
                                <li><strong>H+90:</strong> Phase III – Shift to OBJ STACK; checkpoints CP2/CP3 active</li>
                                <li><strong>Decision Points:</strong> DP1 (commit reserve) at CP2; DP2 (fires shift) at PL BRAVO</li>
                                <li><strong>Synchronization:</strong> Fires lift +30s before entry; EN breach + Inf entry</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 3b. Tasks to Subordinate Units -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-list-check" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                            3b. Tasks to Subordinate Units
                        </h4>
                        <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>1st Squad:</strong> Main effort; breach and clear Main Building (OBJ LECTERN)</li>
                                <li><strong>2nd Squad:</strong> Support effort; secure Library (OBJ STACK) and overwatch</li>
                                <li><strong>3rd Squad:</strong> Reserve; establish CCP and quick reaction force</li>
                                <li><strong>Weapons Section:</strong> Provide overwatch/suppressive fire from CP1</li>
                                <li><strong>Engineer Team:</strong> Provide breaching and obstacle reduction</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Sixth Row: Coordinating Instructions & Sustainment -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- 3c. Coordinating Instructions -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-handshake" style="margin-right: 8px; color: #22c55e; font-size: 12px;"></i>
                            3c. Coordinating Instructions
                        </h4>
                        <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>ROE:</strong> Minimize collateral damage; protect civilians</li>
                                <li><strong>Control Measures:</strong> Phase lines ALPHA/BRAVO; CCP at Library</li>
                                <li><strong>Reporting:</strong> SALUTE reports every 30 minutes</li>
                                <li><strong>Timeline:</strong> H-Hour 171200Z; phase shifts at H+90/H+180</li>
                                <li><strong>Checkpoints:</strong> CP1 (NV 145 478), CP2 (NV 146 477), CP3 (NV 146 475)</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Section 4: Sustainment -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-truck" style="margin-right: 8px; color: #fbbf24; font-size: 12px;"></i>
                            4. SUSTAINMENT
                        </h4>
                        <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Class I:</strong> 24-hour rations; water resupply every 4 hours</li>
                                <li><strong>Class III:</strong> Company push at H+120; emergency cache on campus</li>
                                <li><strong>Class V:</strong> Basic load + 50%; redistribution at CCP</li>
                                <li><strong>Medical:</strong> CCP at Library (NV 146 475); Medic with 2nd Squad</li>
                                <li><strong>CASEVAC:</strong> Via Company at grid NV 145 480</li>
                                <li><strong>Maintenance:</strong> Organizational level; report via Company XO</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Seventh Row: C2 & Annexes -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 12px;">
                    <!-- Section 5: Command & Control -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
                            5. COMMAND & CONTROL
                        </h4>
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Command:</strong> PL at Main Building; PSG at CCP (Library)</li>
                                <li><strong>Succession:</strong> PL → PSG → 1st Squad Leader</li>
                                <li><strong>Signal:</strong> Primary FM; Alt intra-squad; Contingency runners</li>
                                <li><strong>Reports:</strong> SALUTE/SITREP to Company every 30 minutes</li>
                                <li><strong>Battle Rhythm:</strong> Update brief at H-30; continuous monitoring</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Annexes A-L, T (Complete) -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-folder-open" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                            ANNEXES A–L, T (Complete)
                        </h4>
                        <!-- Annex A: Task Organization -->
                        <div style="background-color: rgba(6,182,212,0.1); border:1px solid #06b6d4; border-radius:6px; padding:8px; margin-bottom:8px;">
                            <h5 style="margin:0 0 4px 0; color:#67e8f9; font-size:11px; font-weight:600;">Annex A – Task Organization</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>PLT HQ (6):</strong> PL, PSG, RTO, FO, Medic, Driver</li>
                                <li><strong>1st Squad (12):</strong> SL; 2x fire teams; 1x AT-4 ea</li>
                                <li><strong>2nd Squad (12):</strong> SL; 2x fire teams; 1x M240B</li>
                                <li><strong>3rd Squad (12):</strong> SL; 2x fire teams; 1x SMAW-D</li>
                                <li><strong>Weapons Section (6):</strong> 2x M240B teams; 1x M3E1</li>
                                <li><strong>EN Breach Team (4):</strong> APOBS, Bangalore, demo</li>
                            </ul>
                        </div>
                        <!-- Annex B: Intelligence -->
                        <div style="background-color: rgba(239,68,68,0.1); border:1px solid #ef4444; border-radius:6px; padding:8px; margin-bottom:8px;">
                            <h5 style="margin:0 0 4px 0; color:#fca5a5; font-size:11px; font-weight:600;">Annex B – Intelligence</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>PIR 1:</strong> MG/AT positions in Main Building</li>
                                <li><strong>PIR 2:</strong> IED presence along quad paths</li>
                                <li><strong>CCIR:</strong> Loss of breach capability; enemy ≥10 pax</li>
                                <li><strong>Collection:</strong> OPs, UAV orbit, campus CCTV</li>
                            </ul>
                        </div>
                        <!-- Annex C: Operations -->
                        <div style="background-color: rgba(59,130,246,0.1); border:1px solid #3b82f6; border-radius:6px; padding:8px; margin-bottom:8px;">
                            <h5 style="margin:0 0 4px 0; color:#93c5fd; font-size:11px; font-weight:600;">Annex C – Operations</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Phase Lines:</strong> PL ALPHA/BRAVO</li>
                                <li><strong>Objectives:</strong> OBJ LECTERN/STACK</li>
                                <li><strong>Decision Points:</strong> DP1 at CP2; DP2 at OBJ LECTERN</li>
                            </ul>
                        </div>
                        <!-- Annex D: Fires -->
                        <div style="background-color: rgba(245,158,11,0.1); border:1px solid #f59e0b; border-radius:6px; padding:8px; margin-bottom:8px;">
                            <h5 style="margin:0 0 4px 0; color:#fbbf24; font-size:11px; font-weight:600;">Annex D – Fires</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Assets:</strong> Co 60mm (2 tubes)</li>
                                <li><strong>Targets:</strong> TGT L-101/102 HE/Illum</li>
                                <li><strong>Clearance:</strong> Co FSO; danger-close 100m</li>
                            </ul>
                        </div>
                        <!-- Annex F: Engineer -->
                        <div style="background-color: rgba(34,197,94,0.1); border:1px solid #22c55e; border-radius:6px; padding:8px; margin-bottom:8px;">
                            <h5 style="margin:0 0 4px 0; color:#4ade80; font-size:11px; font-weight:600;">Annex F – Engineer</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Mobility:</strong> Breach main door; secondary saw</li>
                                <li><strong>Survivability:</strong> Fighting positions at OBJ</li>
                            </ul>
                        </div>
                        <!-- Annex L: R&S -->
                        <div style="background-color: rgba(30,64,175,0.1); border:1px solid #1d4ed8; border-radius:6px; padding:8px; margin-bottom:8px;">
                            <h5 style="margin:0 0 4px 0; color:#93c5fd; font-size:11px; font-weight:600;">Annex L – R&S</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Collection:</strong> 1st SQD–OBJ LECTERN; 2nd SQD–OBJ STACK</li>
                                <li><strong>Reporting:</strong> SALUTE every 30 min; CCIR immediate</li>
                            </ul>
                        </div>
                        <!-- Annex T: CEMA -->
                        <div style="background-color: rgba(99,102,241,0.1); border:1px solid #6366f1; border-radius:6px; padding:8px;">
                            <h5 style="margin:0 0 4px 0; color:#c7d2fe; font-size:11px; font-weight:600;">Annex T – CEMA</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>EW Threat:</strong> Campus jammer; COMSEC discipline</li>
                                <li><strong>PACE:</strong> FM → Intra-squad → Cell → Runner</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED//FOUO - Platoon Level OPORD Example - Operation VISTULA GUARD - FM 5-0 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
