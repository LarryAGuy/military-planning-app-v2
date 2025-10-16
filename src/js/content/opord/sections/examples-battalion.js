/**
 * OPORD Examples - Battalion Level
 * Complete OPORD example for battalion-level operations
 * Follows FM 5-0 standards with realistic unit designations
 */

export const battalionExampleModule = {
    id: 'examples-battalion',
    title: 'Battalion Level OPORD Example',
    echelon: 'battalion',
    level: 'tactical',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Battalion Level Complete OPORD Example - Operation VISTULA STORM -->
            <div id="battalion-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-tank" style="margin-right: 8px; color: #dc2626; font-size: 16px;"></i>
                        OPERATION ORDER 24-041 (VISTULA STORM) - Battalion Level
                    </h3>
                    <p style="color: #fca5a5; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - 1-77 Armor Battalion, 3rd ABCT, 1st AD, Operation WARSAW STORM
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">250800ZAPR24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">TAA STEEL, Warsaw South</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">Warsaw Multi-Sector Operations</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-20.15</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:50,000 Combined Arms</span>
                        </div>
                    </div>
                </div>

                <!-- First Row: Enemy Forces & Friendly Forces -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 1a: Enemy Forces -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-crosshairs" style="margin-right: 8px; color: #dc2626; font-size: 14px;"></i>
                            1a. Enemy Forces - Warsaw Multi-Sector Defense
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Enemy reinforced regiment with 1,200 personnel, integrated combined arms defense, and multi-layered obstacle systems across 125 km² Warsaw multi-sector operations area.
                        </p>
                        <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Regiment Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li>Ground Forces: Reinforced regiment (1,200 personnel), 96 IFVs, 120 crew-served weapons</li>
                                <li>Armor: 24 main battle tanks, 36 IFVs, prepared defensive positions</li>
                                <li>Artillery: 18 self-propelled howitzers (152mm), counter-battery radar, MLRS capability</li>
                                <li>Air Defense: 12 MANPADS teams, 4 SA-8 systems, integrated air defense network</li>
                                <li>Engineers: Obstacle emplacement, IED networks, bridge demolition teams</li>
                                <li>Special Forces: 48 personnel, urban warfare specialists, sabotage teams</li>
                                <li>Militia Forces: 150 irregular fighters, local knowledge, urban specialists</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Defensive Capabilities</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Integrated Defense: Multi-layered obstacle systems, interlocking fires</li>
                                <li>Anti-Armor: 24 ATGM positions, tank hunter-killer teams, mines</li>
                                <li>Electronic Warfare: Regiment-level jammers, communications disruption</li>
                                <li>Urban Warfare: Building fortification, tunnel networks, IED placement</li>
                                <li>Logistics: 10-day supply, distributed ammunition caches</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(220, 38, 38, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #dc2626;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Most Likely:</strong> Defense in depth with counterattack capability</li>
                                <li><strong>Most Dangerous:</strong> Coordinated combined arms counterattack</li>
                                <li><strong>Asymmetric:</strong> Urban warfare, infrastructure destruction</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 1b: Friendly Forces -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-users" style="margin-right: 8px; color: #2563eb; font-size: 14px;"></i>
                            1b. Friendly Forces - Brigade Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Armored battalion with 650 personnel, integrated combined arms capabilities, and multi-domain operations support across Warsaw multi-sector area.
                        </p>
                        <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Brigade Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>3rd ABCT:</strong> Multi-axis combined arms attack, Operation WARSAW STORM</li>
                                <li><strong>Division Support:</strong> Artillery brigade, aviation brigade, intelligence assets</li>
                                <li><strong>Coalition Integration:</strong> Polish armored brigade, joint operations</li>
                                <li><strong>Joint Assets:</strong> Air Force CAS, Navy SIGINT, Special Operations</li>
                                <li><strong>Brigade Support:</strong> Fires battalion, engineer battalion, sustainment</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>2-77 AR:</strong> Northern axis attack, coordination required</li>
                                <li><strong>1-77 IN:</strong> Southern axis attack, mutual support</li>
                                <li><strong>Aviation Brigade:</strong> CAS, reconnaissance, MEDEVAC support</li>
                                <li><strong>Fires Battalion:</strong> Priority fires, counter-battery operations</li>
                                <li><strong>Polish Forces:</strong> Sector coordination, cultural guidance</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Battalion Tactical Organization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>A Company:</strong> 180 personnel, 4x tank platoons, main effort</li>
                                <li><strong>B Company:</strong> 180 personnel, 4x tank platoons, supporting effort</li>
                                <li><strong>C Company:</strong> 180 personnel, 4x tank platoons, reserve</li>
                                <li><strong>D Company:</strong> 72 personnel, 3x mech platoons, overwatch</li>
                                <li><strong>Battalion HQ:</strong> 36 personnel, command and control</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Second Row: Attachments/Detachments & Assumptions -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 1c: Attachments and Detachments -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-exchange-alt" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                            1c. Attachments and Detachments
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Battalion task organization with specialized attachments for combined arms operations and detachments for higher headquarters support.
                        </p>
                        <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Attachments to Battalion</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>Engineer Company:</strong> 120 personnel, mobility/counter-mobility/survivability</li>
                                <li><strong>Artillery Battery:</strong> 96 personnel, 8x M109A7, direct support fires</li>
                                <li><strong>Air Defense Platoon:</strong> 24 personnel, 4x Avenger systems</li>
                                <li><strong>Military Intelligence Company:</strong> 48 personnel, HUMINT/SIGINT/GEOINT</li>
                                <li><strong>Electronic Warfare Platoon:</strong> 18 personnel, communications disruption</li>
                                <li><strong>Polish Liaison Company:</strong> 24 personnel, cultural/language support</li>
                                <li><strong>Medical Company:</strong> 36 personnel, enhanced trauma capability</li>
                                <li><strong>Maintenance Company:</strong> 72 personnel, forward repair operations</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Detachments from Battalion</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tank Company:</strong> 180 personnel to Brigade for deep operations</li>
                                <li><strong>Communications Platoon:</strong> 24 personnel to Division for SIGINT</li>
                                <li><strong>Reconnaissance Platoon:</strong> 36 personnel to Special Operations</li>
                                <li><strong>Maintenance Platoon:</strong> 24 personnel to Brigade for support</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c7d2fe; font-size: 12px; margin: 0 0 8px 0;">Net Battalion Strength</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Total Personnel:</strong> 650 personnel (base 648 + 438 attached - 264 detached)</li>
                                <li><strong>Vehicles:</strong> 158 vehicles (96 combat, 62 support)</li>
                                <li><strong>Key Equipment:</strong> 58 M1A2 tanks, 24 M2A3 IFVs, 8 M109A7 howitzers</li>
                                <li><strong>Enhanced Capabilities:</strong> Engineer, fires, air defense, intelligence</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 1d: Assumptions -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-lightbulb" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                            1d. Assumptions - Battalion Planning Assumptions
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Critical planning assumptions for battalion combined arms operations with multi-domain and coalition considerations.
                        </p>
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Operational Assumptions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>Brigade Support:</strong> Available within 30 minutes for fires and aviation</li>
                                <li><strong>Coalition Coordination:</strong> Polish forces integrated, continuous liaison</li>
                                <li><strong>EW Environment:</strong> Severely degraded communications, SATCOM backup</li>
                                <li><strong>Civil Population:</strong> Mixed cooperation, significant displaced persons</li>
                                <li><strong>Medical Evacuation:</strong> Air MEDEVAC via brigade in 20 minutes</li>
                                <li><strong>Logistics Support:</strong> Resupply window every 6 hours via brigade</li>
                                <li><strong>Weather Conditions:</strong> Winter operations, visibility 200-800m</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Intelligence & Threat Assumptions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Enemy Capabilities:</strong> Integrated defense, counterattack capability</li>
                                <li><strong>Threat Level:</strong> Regiment-sized force, combined arms defense</li>
                                <li><strong>Information Environment:</strong> Active propaganda, cyber attacks</li>
                                <li><strong>Asymmetric Threats:</strong> IEDs, sabotage, infrastructure attacks</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #d97706;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Logistical & Technical Assumptions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Fuel Consumption:</strong> 200% normal rate due to combat operations</li>
                                <li><strong>Ammunition:</strong> Basic load + 100% for sustained operations</li>
                                <li><strong>Maintenance:</strong> Forward repair teams, parts availability</li>
                                <li><strong>Communications:</strong> SATCOM primary due to EW environment</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Third Row: Environmental Considerations & Time/Space -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 1e: Environmental Considerations (OAKOC) -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-globe-europe" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                            1e. Environmental Considerations - OAKOC Analysis
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Comprehensive OAKOC analysis for Warsaw multi-sector combined arms operations with urban/suburban mixed terrain.
                        </p>
                        <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Observation and Fields of Fire</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li>Urban high-rises provide observation to 12km, excellent for overwatch</li>
                                <li>Industrial complexes limit tank fields of fire to 400-1200m</li>
                                <li>River valleys offer long-range engagement areas to 3km</li>
                                <li>Suburban areas provide concealed firing positions</li>
                                <li>Winter conditions reduce visibility to 200-800m, affects targeting</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Avenues of Approach & Key Terrain</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Primary MSRs:</strong> E30 highway, S8 expressway, A2 motorway</li>
                                <li><strong>Tank Avenues:</strong> Industrial corridors, highway overpasses</li>
                                <li><strong>Key Terrain:</strong> Vistula River bridges, airport, rail yards</li>
                                <li><strong>Decisive Terrain:</strong> Highway interchanges, government district</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                            <h5 style="font-weight: 600; color: #34d399; font-size: 12px; margin: 0 0 8px 0;">Obstacles & Cover/Concealment</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Natural:</strong> Vistula River, urban canals, elevation changes</li>
                                <li><strong>Man-made:</strong> Highway barriers, industrial complexes, bridges</li>
                                <li><strong>Cover:</strong> Reinforced buildings, underground facilities</li>
                                <li><strong>Concealment:</strong> Industrial smoke, urban clutter, weather</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 1f: Time and Space -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-clock" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                            1f. Time and Space - Tactical Factors
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Time and space analysis for battalion combined arms operations with multi-domain synchronization.
                        </p>
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #c7d2fe; font-size: 12px; margin: 0 0 8px 0;">Timeline Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>Planning Phase:</strong> 6 hours; detailed combined arms coordination</li>
                                <li><strong>Preparation Phase:</strong> 4 hours; fires preparation and positioning</li>
                                <li><strong>Execution Phase:</strong> 18 hours; five-phase combined arms attack</li>
                                <li><strong>Consolidation:</strong> 4 hours; reorganization and resupply</li>
                                <li><strong>Total Duration:</strong> 32 hours; sustained combat operations</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(147, 51, 234, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #c7d2fe; font-size: 12px; margin: 0 0 8px 0;">Space and Distance Factors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>AOR Size:</strong> 125 km² Warsaw multi-sector operations</li>
                                <li><strong>Movement Times:</strong> 30-90 minutes between objectives</li>
                                <li><strong>Command Distance:</strong> 20km max from battalion CP</li>
                                <li><strong>Communications Range:</strong> FM 12km, digital 25km, SATCOM unlimited</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c7d2fe; font-size: 12px; margin: 0 0 6px 0;">Synchronization Requirements</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Battle Rhythm:</strong> 1-hour reporting cycle with brigade</li>
                                <li><strong>Coordination:</strong> 30-minute battle update briefings</li>
                                <li><strong>Resupply Cycle:</strong> 6-hour logistics window</li>
                                <li><strong>Relief Operations:</strong> 12-hour rotation capability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Fourth Row: Mission & Execution -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 2: Mission -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-bullseye" style="margin-right: 8px; color: #2563eb; font-size: 14px;"></i>
                            2. MISSION
                        </h4>
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0 0 12px 0; background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb;">
                            1-77 AR attacks to destroy enemy forces in EA STEEL NLT 252000ZAPR24 to enable brigade advance to OBJ THUNDER.
                        </p>
                        <div style="background-color: rgba(37, 99, 235, 0.2); border: 1px solid #2563eb; border-radius: 6px; padding: 10px; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Commander's Intent</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Purpose:</strong> Destroy enemy regiment; secure key terrain</li>
                                <li><strong>Method:</strong> Combined arms attack with fires</li>
                                <li><strong>End State:</strong> Enemy destroyed; ready for exploitation</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(59, 130, 246, 0.2); border: 1px solid #3b82f6; border-radius: 6px; padding: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Task Organization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>A Company:</strong> Main effort; northern axis</li>
                                <li><strong>B Company:</strong> Supporting effort; central axis</li>
                                <li><strong>C Company:</strong> Reserve; exploitation</li>
                                <li><strong>D Company:</strong> Support by fire; overwatch</li>
                                <li><strong>Engineer Company:</strong> Breaching operations</li>
                                <li><strong>Artillery:</strong> Priority fires to main effort</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Fifth Row: Concept of Operations & Tasks to Subordinates -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 3a: Concept of Operations -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-cogs" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                            3a. Concept of Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Five-phase combined arms attack with integrated fires, engineer support, and multi-domain synchronization.
                        </p>
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Five-Phase Combined Arms Attack</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>Phase I (H-30 to H-Hour):</strong> Fires preparation; artillery prep fires; engineer reconnaissance</li>
                                <li><strong>Phase II (H-Hour to H+60):</strong> Movement to contact; cross LD; establish overwatch positions</li>
                                <li><strong>Phase III (H+60 to H+180):</strong> Breach operations; penetrate enemy defense; establish foothold</li>
                                <li><strong>Phase IV (H+180 to H+300):</strong> Exploitation; seize OBJ THUNDER; destroy enemy reserves</li>
                                <li><strong>Phase V (H+300 to H+360):</strong> Consolidation; reorganization; prepare for follow-on operations</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Decision Points & Synchronization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>DP1:</strong> Commit C Company (reserve) if A Company stalled at breach</li>
                                <li><strong>DP2:</strong> Request brigade fires if enemy counterattack ≥ battalion</li>
                                <li><strong>DP3:</strong> Shift to alternate axis if main effort fails</li>
                                <li><strong>Synchronization:</strong> Fires lift +2 min before assault; engineer breach + tank assault</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #d97706;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Control Measures & Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Phase Lines:</strong> PL STEEL (LD), PL IRON (intermediate), PL THUNDER (objective)</li>
                                <li><strong>Objectives:</strong> OBJ THUNDER (primary), OBJ LIGHTNING (alternate)</li>
                                <li><strong>Boundaries:</strong> Coordination with 2-77 AR (north), 1-77 IN (south)</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 3b: Tasks to Subordinate Units -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-list-check" style="margin-right: 8px; color: #60a5fa; font-size: 14px;"></i>
                            3b. Tasks to Subordinate Units
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Detailed mission assignments for battalion companies with specific objectives and support requirements.
                        </p>
                        <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Maneuver Companies - Primary Missions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>A Company:</strong> Main effort; breach enemy defense at BP ALPHA; seize OBJ THUNDER NLT H+240</li>
                                <li><strong>B Company:</strong> Supporting effort; exploit A Company success; secure OBJ LIGHTNING NLT H+300</li>
                                <li><strong>C Company:</strong> Battalion reserve; committed on order; prepared for counterattack defense</li>
                                <li><strong>D Company:</strong> Support by fire; overwatch from BP DELTA; anti-armor operations</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Support Elements - Enabling Tasks</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Engineer Company:</strong> Breach operations; obstacle reduction; survivability</li>
                                <li><strong>Artillery Battery:</strong> Priority fires to A Company; counter-battery operations</li>
                                <li><strong>Air Defense Platoon:</strong> Protect battalion CP and logistics; early warning</li>
                                <li><strong>MI Company:</strong> Intelligence collection; enemy situation development</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #60a5fa;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Coordination Requirements</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Boundary Coordination:</strong> With 2-77 AR (north), 1-77 IN (south)</li>
                                <li><strong>Fire Support:</strong> Priority to main effort; shift on order</li>
                                <li><strong>Medical Support:</strong> Company medics; battalion aid station</li>
                                <li><strong>Logistics:</strong> Company-level resupply; battalion trains support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Sixth Row: Coordinating Instructions & Sustainment -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 3c: Coordinating Instructions -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-handshake" style="margin-right: 8px; color: #22c55e; font-size: 14px;"></i>
                            3c. Coordinating Instructions
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Essential coordination measures for battalion combined arms operations with multi-domain synchronization.
                        </p>
                        <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Rules of Engagement & Control Measures</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>ROE:</strong> Engage all enemy forces; minimize collateral damage</li>
                                <li><strong>Self-Defense:</strong> Always authorized; protect civilians when possible</li>
                                <li><strong>Control Measures:</strong> LD/LC times; phase line procedures; objective seizure</li>
                                <li><strong>Phase Lines:</strong> PL STEEL (LD), PL IRON (intermediate), PL THUNDER (objective)</li>
                                <li><strong>Boundaries:</strong> Coordinate with adjacent battalions; no-fire areas marked</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #34d399; font-size: 12px; margin: 0 0 8px 0;">Reporting & Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Reporting:</strong> SITREP to brigade every 30 minutes; format per SOP</li>
                                <li><strong>CCIR:</strong> Enemy counterattack ≥ battalion; loss of company; breach failure</li>
                                <li><strong>Communications:</strong> Primary SATCOM; alternate digital; emergency FM</li>
                                <li><strong>Battle Damage:</strong> Immediate report; casualty evacuation procedures</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(34, 197, 94, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Timeline & Synchronization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>H-Hour:</strong> 250800ZAPR24; all companies cross LD by H+30</li>
                                <li><strong>Phase Transitions:</strong> On order or time; report completion</li>
                                <li><strong>Resupply Windows:</strong> Every 6 hours; coordinate with battalion S-4</li>
                                <li><strong>Relief Operations:</strong> 12-hour rotation capability if required</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 4: Sustainment -->

                    <!-- Section 4: Sustainment -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-truck" style="margin-right: 8px; color: #fbbf24; font-size: 14px;"></i>
                            4. SUSTAINMENT
                        </h4>
                        <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Logistics:</strong> Brigade support area; forward logistics elements</li>
                                <li><strong>Personnel:</strong> 650 personnel; replacement via brigade</li>
                                <li><strong>Class I/III/V:</strong> Push system; emergency resupply on call</li>
                                <li><strong>Medical:</strong> Battalion aid station; ground/air MEDEVAC</li>
                                <li><strong>Maintenance:</strong> Field maintenance team; recovery assets</li>
                                <li><strong>Transportation:</strong> 58 vehicles; mobility corridors</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Third Row: C2 & Annexes -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 12px;">
                    <!-- Section 5: Command & Control -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                            5. COMMAND & CONTROL
                        </h4>
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Command:</strong> Battalion CO at Main CP; XO at TAC CP</li>
                                <li><strong>Succession:</strong> CO → XO → S-3 → A Company CO</li>
                                <li><strong>Signal:</strong> Primary Digital; Alt FM; Contingency SATCOM</li>
                                <li><strong>Reports:</strong> SITREP to brigade every 30 minutes</li>
                                <li><strong>Battle Rhythm:</strong> Update brief at H-60; continuous ops</li>
                                <li><strong>Key Leaders:</strong> CO with main effort; S-3 controls battle</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Annexes A-L, T (Complete) -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-folder-open" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                            ANNEXES A–L, T
                        </h4>
                        <!-- Annex A: Task Organization -->
                        <div style="background-color: rgba(6,182,212,0.1); border:1px solid #06b6d4; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#67e8f9; font-size:11px; font-weight:600;">Annex A – Task Organization</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Bn HQ (36):</strong> CO, XO, S-1/2/3/4, Staff, RTOs, Polish Liaison</li>
                                <li><strong>A Company (180):</strong> 4x tank platoons; main effort; northern axis</li>
                                <li><strong>B Company (180):</strong> 4x tank platoons; supporting effort; central axis</li>
                                <li><strong>C Company (180):</strong> 4x tank platoons; reserve; exploitation</li>
                                <li><strong>D Company (72):</strong> 3x mech platoons; AT section; overwatch</li>
                                <li><strong>Attachments:</strong> Engineer Co (120), Artillery Btry (96), MI Co (48)</li>
                            </ul>
                        </div>
                        <!-- Annex B: Intelligence -->
                        <div style="background-color: rgba(239,68,68,0.1); border:1px solid #ef4444; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#fca5a5; font-size:11px; font-weight:600;">Annex B – Intelligence</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>PIR 1:</strong> Location/strength enemy armor in EA STEEL</li>
                                <li><strong>PIR 2:</strong> Enemy artillery positions/capabilities</li>
                                <li><strong>PIR 3:</strong> Enemy reserve locations and intentions</li>
                                <li><strong>CCIR:</strong> Loss of company; enemy counterattack ≥ battalion</li>
                                <li><strong>Collection:</strong> MI company; UAV; SIGINT; ground reconnaissance</li>
                                <li><strong>Analysis:</strong> Battalion S-2; real-time intelligence fusion</li>
                            </ul>
                        </div>
                        <!-- Annex C: Operations -->
                        <div style="background-color: rgba(59,130,246,0.1); border:1px solid #3b82f6; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#93c5fd; font-size:11px; font-weight:600;">Annex C – Operations</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Control Measures:</strong> LD/LC; phase lines; objectives</li>
                                <li><strong>Graphics:</strong> Overlay with boundaries, routes, targets</li>
                                <li><strong>Decision Points:</strong> DP1-DP3 for reserve commitment</li>
                                <li><strong>Coordination:</strong> Adjacent battalion boundaries and procedures</li>
                            </ul>
                        </div>
                        <!-- Annex D: Fires -->
                        <div style="background-color: rgba(245,158,11,0.1); border:1px solid #f59e0b; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#fbbf24; font-size:11px; font-weight:600;">Annex D – Fires</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Assets:</strong> Brigade 155mm (18 tubes); Bn Artillery Btry (8 tubes)</li>
                                <li><strong>Targets:</strong> TGT B-101/102/103 HE/Smoke/DPICM/Illum</li>
                                <li><strong>Priority:</strong> A Company (main effort); shift on order</li>
                                <li><strong>Clearance:</strong> Battalion FSO; danger-close procedures</li>
                                <li><strong>Counter-battery:</strong> Immediate suppression; Q-36 radar support</li>
                            </ul>
                        </div>
                        <!-- Annex F: Engineer -->
                        <div style="background-color: rgba(34,197,94,0.1); border:1px solid #22c55e; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#4ade80; font-size:11px; font-weight:600;">Annex F – Engineer</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Mobility:</strong> Breach operations; obstacle reduction; route clearance</li>
                                <li><strong>Counter-mobility:</strong> Obstacle emplacement; deny enemy movement</li>
                                <li><strong>Survivability:</strong> Fighting positions; protective works; hardening</li>
                                <li><strong>Assets:</strong> Engineer company (120 personnel); specialized equipment</li>
                            </ul>
                        </div>
                        <!-- Annex G: Civil Affairs -->
                        <div style="background-color: rgba(168,85,247,0.1); border:1px solid #a855f7; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#c084fc; font-size:11px; font-weight:600;">Annex G – Civil Affairs</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Civil Coordination:</strong> Polish liaison company; local authorities</li>
                                <li><strong>Population Protection:</strong> Minimize civilian casualties; evacuation routes</li>
                                <li><strong>Infrastructure:</strong> Protect critical facilities; coordinate repairs</li>
                            </ul>
                        </div>
                        <!-- Annex H: Air Defense -->
                        <div style="background-color: rgba(236,72,153,0.1); border:1px solid #ec4899; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#f9a8d4; font-size:11px; font-weight:600;">Annex H – Air Defense</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Assets:</strong> Air defense platoon (24 personnel); 4x Avenger</li>
                                <li><strong>Priority:</strong> Battalion CP and logistics; early warning</li>
                                <li><strong>Coordination:</strong> Brigade air defense; airspace management</li>
                            </ul>
                        </div>
                        <!-- Annex L: R&S -->
                        <div style="background-color: rgba(30,64,175,0.1); border:1px solid #1d4ed8; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#93c5fd; font-size:11px; font-weight:600;">Annex L – R&S</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Collection Plan:</strong> Company reconnaissance; UAV support</li>
                                <li><strong>Reporting:</strong> SITREP every 30 min; PIR immediate</li>
                                <li><strong>Assets:</strong> Ground reconnaissance; aviation; sensors; HUMINT</li>
                                <li><strong>Analysis:</strong> Battalion S-2; MI company support</li>
                            </ul>
                        </div>
                        <!-- Annex T: CEMA -->
                        <div style="background-color: rgba(99,102,241,0.1); border:1px solid #6366f1; border-radius:6px; padding:8px;">
                            <h5 style="margin:0 0 4px 0; color:#c7d2fe; font-size:11px; font-weight:600;">Annex T – CEMA</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>EW Threat:</strong> Enemy jammers; COMSEC discipline required</li>
                                <li><strong>PACE Plan:</strong> SATCOM → Digital → FM → Runner</li>
                                <li><strong>Cyber Defense:</strong> Network security; data protection protocols</li>
                                <li><strong>EW Assets:</strong> EW platoon; communications intercept capability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED//FOUO - Battalion Level OPORD Example - Operation VISTULA STORM - FM 5-0 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
