/**
 * OPORD Examples - Squadron Level
 * Complete OPORD example for squadron-level operations
 * Follows FM 5-0 standards with realistic unit designations
 */

export const squadronExampleModule = {
    id: 'examples-squadron',
    title: 'Squadron Level OPORD Example',
    echelon: 'squadron',
    level: 'tactical',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Squadron Level Complete OPORD Example - Operation VISTULA SWORD -->
            <div id="squadron-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-search" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        OPERATION ORDER 24-038 (VISTULA SWORD) - Squadron Level
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - 2nd Squadron, 3rd Armored Cavalry Regiment, Operation WARSAW STORM
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">201000ZMAR24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">TAA SABER, Warsaw Outskirts</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">Warsaw Sector East</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-20.96</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:50,000 Recon Series</span>
                        </div>
                    </div>
                </div>

                <!-- First Row: Enemy Forces & Friendly Forces -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 1a: Enemy Forces -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-crosshairs" style="margin-right: 8px; color: #dc2626; font-size: 14px;"></i>
                            1a. Enemy Forces - Warsaw Sector East
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Enemy mechanized battalion with 450 personnel, integrated air defense, and reconnaissance denial capabilities across 45 km² Warsaw Sector East.
                        </p>
                        <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Battalion Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li>Ground Forces: Mechanized battalion (450 personnel), 36 IFVs, 48 crew-served weapons</li>
                                <li>Armor: 12 main battle tanks, prepared defensive positions</li>
                                <li>Artillery: 6 self-propelled howitzers (122mm), counter-reconnaissance fires</li>
                                <li>Air Defense: 8 MANPADS teams, 2 SA-8 systems, distributed positions</li>
                                <li>Special Forces: 36 personnel, reconnaissance/counter-reconnaissance specialists</li>
                                <li>Militia Forces: 75 irregular fighters, local sympathizers, urban specialists</li>
                                <li>Cyber Units: Battalion-level EW and cyber capabilities, communications disruption</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Defensive Capabilities</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Reconnaissance Denial: Active counter-reconnaissance operations, sensor networks</li>
                                <li>Anti-Armor: 12 ATGM positions, tank hunter-killer teams</li>
                                <li>Electronic Warfare: 2 battalion jammers, communications intercept capability</li>
                                <li>IED Networks: Urban placement, battalion-level coordination</li>
                                <li>Logistics: 7-day supply, distributed caches across sector</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(220, 38, 38, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #dc2626;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action Assessment</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Most Likely COA:</strong> Reconnaissance denial with mobile defense</li>
                                <li><strong>Most Dangerous COA:</strong> Coordinated counter-reconnaissance attacks</li>
                                <li><strong>Asymmetric Options:</strong> Infrastructure sabotage, civilian shields</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 1b: Friendly Forces -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-users" style="margin-right: 8px; color: #2563eb; font-size: 14px;"></i>
                            1b. Friendly Forces - Regiment Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Armored cavalry squadron with 280 personnel, integrated reconnaissance capabilities, and multi-domain operations across Warsaw Sector East.
                        </p>
                        <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Regiment Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>3rd ACR:</strong> Multi-axis reconnaissance operations, Operation WARSAW STORM</li>
                                <li><strong>Division Support:</strong> Artillery, aviation, intelligence assets</li>
                                <li><strong>Coalition Integration:</strong> Polish armored reconnaissance battalion</li>
                                <li><strong>Joint Assets:</strong> Air Force ISR, Navy SIGINT support</li>
                                <li><strong>Regiment Support:</strong> Aviation squadron, fires battalion, sustainment</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st Squadron:</strong> Western sector reconnaissance, coordination required</li>
                                <li><strong>3rd Squadron:</strong> Southern sector security, mutual support</li>
                                <li><strong>Aviation Squadron:</strong> Aerial reconnaissance, overwatch, MEDEVAC</li>
                                <li><strong>Fires Battalion:</strong> Priority fires, counter-battery operations</li>
                                <li><strong>Polish Forces:</strong> Local coordination, cultural guidance, liaison</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Squadron Tactical Organization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>A Troop:</strong> 72 personnel, 3x scout platoons, eastern sector</li>
                                <li><strong>B Troop:</strong> 72 personnel, 3x scout platoons, central sector</li>
                                <li><strong>C Troop:</strong> 72 personnel, 3x scout platoons, western sector</li>
                                <li><strong>D Troop:</strong> 48 personnel, 2x tank platoons, reserve/security</li>
                                <li><strong>Squadron HQ:</strong> 24 personnel, command and control</li>
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
                            UNCLASSIFIED//FOUO - Squadron task organization with specialized attachments for reconnaissance operations and detachments for higher headquarters support.
                        </p>
                        <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Attachments to Squadron</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>Engineer Platoon:</strong> 24 personnel, mobility/counter-mobility operations</li>
                                <li><strong>Air Defense Section:</strong> 12 personnel, 2x Stinger teams, air defense</li>
                                <li><strong>Military Intelligence Team:</strong> 8 personnel, HUMINT/SIGINT collection</li>
                                <li><strong>Electronic Warfare Section:</strong> 6 personnel, communications intercept</li>
                                <li><strong>Polish Liaison Team:</strong> 4 personnel, cultural/language support</li>
                                <li><strong>Medical Team:</strong> 6 personnel, enhanced medical capability</li>
                                <li><strong>Maintenance Team:</strong> 12 personnel, forward repair capability</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Detachments from Squadron</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Scout Platoon:</strong> 24 personnel to Regiment for deep reconnaissance</li>
                                <li><strong>Communications Section:</strong> 8 personnel to Division for SIGINT</li>
                                <li><strong>Sniper Team:</strong> 4 personnel to Special Operations Task Force</li>
                                <li><strong>Maintenance Section:</strong> 6 personnel to Regiment for support</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c7d2fe; font-size: 12px; margin: 0 0 8px 0;">Net Squadron Strength</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Total Personnel:</strong> 280 personnel (base 288 + 72 attached - 42 detached)</li>
                                <li><strong>Vehicles:</strong> 65 vehicles (48 combat, 17 support)</li>
                                <li><strong>Key Equipment:</strong> 24 M3A3 CFVs, 12 M1A2 tanks, 8 M113A3s</li>
                                <li><strong>Communications:</strong> Enhanced SIGINT/EW capability</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 1d: Assumptions -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-lightbulb" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                            1d. Assumptions - Squadron Planning Assumptions
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Key planning assumptions for squadron reconnaissance operations in Warsaw Sector East with multi-domain considerations.
                        </p>
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Operational Assumptions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>Regiment Support:</strong> Available within 60 minutes for fires and aviation</li>
                                <li><strong>Polish Coordination:</strong> Continuous liaison for cultural/legal issues</li>
                                <li><strong>EW Environment:</strong> Degraded communications, line-of-sight reliable</li>
                                <li><strong>Civil Population:</strong> Mixed cooperation, some hostile elements</li>
                                <li><strong>Medical Evacuation:</strong> Air MEDEVAC via regiment in 45 minutes</li>
                                <li><strong>Logistics Support:</strong> Resupply window every 8 hours via regiment</li>
                                <li><strong>Weather Conditions:</strong> Winter operations, visibility 400-1200m</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Intelligence Assumptions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Enemy Capabilities:</strong> Active counter-reconnaissance, sensor networks</li>
                                <li><strong>Threat Level:</strong> Battalion-sized mechanized force, integrated defense</li>
                                <li><strong>Information Environment:</strong> Enemy propaganda, disinformation campaigns</li>
                                <li><strong>Cyber Threats:</strong> Network intrusion attempts, communications jamming</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #d97706;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Logistical Assumptions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Fuel Consumption:</strong> 150% normal rate due to reconnaissance operations</li>
                                <li><strong>Ammunition:</strong> Basic load sufficient for 72-hour operations</li>
                                <li><strong>Maintenance:</strong> Forward repair teams available, parts resupply</li>
                                <li><strong>Communications:</strong> SATCOM backup for degraded environment</li>
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
                            UNCLASSIFIED//FOUO - Comprehensive OAKOC analysis for Warsaw Sector East reconnaissance operations with urban/suburban mixed terrain considerations.
                        </p>
                        <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Observation and Fields of Fire</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li>Urban high-rises provide excellent observation to 8km</li>
                                <li>Suburban areas offer concealed observation posts</li>
                                <li>Industrial complexes limit fields of fire to 200-800m</li>
                                <li>River valleys provide long-range observation corridors</li>
                                <li>Winter conditions reduce visibility to 400-1200m</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Avenues of Approach & Key Terrain</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Primary MSRs:</strong> E30 highway, S8 expressway, A2 motorway</li>
                                <li><strong>Secondary Routes:</strong> Urban arterials, suburban connectors</li>
                                <li><strong>Key Terrain:</strong> Vistula River bridges (3), airport complex</li>
                                <li><strong>Decisive Terrain:</strong> Highway interchanges, river crossings</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                            <h5 style="font-weight: 600; color: #34d399; font-size: 12px; margin: 0 0 8px 0;">Obstacles & Cover/Concealment</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Natural:</strong> Vistula River, urban canals, elevation changes</li>
                                <li><strong>Man-made:</strong> Highway overpasses, industrial complexes</li>
                                <li><strong>Cover:</strong> Dense urban structures, underground passages</li>
                                <li><strong>Concealment:</strong> Tree lines, industrial smoke, weather</li>
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
                            UNCLASSIFIED//FOUO - Time and space analysis for squadron reconnaissance operations with multi-domain synchronization requirements.
                        </p>
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #c7d2fe; font-size: 12px; margin: 0 0 8px 0;">Timeline Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>Planning Phase:</strong> 4 hours; detailed reconnaissance plan</li>
                                <li><strong>Movement Phase:</strong> 2 hours; deployment to AO SABER</li>
                                <li><strong>Execution Phase:</strong> 14 hours; zone reconnaissance operations</li>
                                <li><strong>Consolidation:</strong> 2 hours; information processing and reporting</li>
                                <li><strong>Total Duration:</strong> 22 hours; continuous operations capability</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(147, 51, 234, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #c7d2fe; font-size: 12px; margin: 0 0 8px 0;">Space and Distance Factors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>AOR Size:</strong> 45 km² Warsaw Sector East</li>
                                <li><strong>Movement Times:</strong> 15-45 minutes between NAI</li>
                                <li><strong>Command Distance:</strong> 12km max from squadron CP</li>
                                <li><strong>Communications Range:</strong> FM 8km, digital 15km</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c7d2fe; font-size: 12px; margin: 0 0 6px 0;">Synchronization Requirements</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Battle Rhythm:</strong> 2-hour reporting cycle with regiment</li>
                                <li><strong>Coordination:</strong> 60-minute battle update briefings</li>
                                <li><strong>Resupply Cycle:</strong> 8-hour logistics window</li>
                                <li><strong>Relief Operations:</strong> 24-hour rotation capability</li>
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
                            2nd Squadron conducts zone reconnaissance in AO SABER to locate and report enemy forces NLT 202400ZMAR24 to support regiment's advance to OBJ WARSAW.
                        </p>
                        <div style="background-color: rgba(37, 99, 235, 0.2); border: 1px solid #2563eb; border-radius: 6px; padding: 10px; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Commander's Intent</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Purpose:</strong> Locate enemy forces and identify key terrain</li>
                                <li><strong>Method:</strong> Multi-axis zone reconnaissance with security</li>
                                <li><strong>End State:</strong> Enemy located; routes cleared; regiment informed</li>
                                <li><strong>Key Tasks:</strong> Answer PIR; maintain contact; protect civilians</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(59, 130, 246, 0.2); border: 1px solid #3b82f6; border-radius: 6px; padding: 10px; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Task Organization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>A Troop:</strong> Eastern sector reconnaissance (NAI 1-4)</li>
                                <li><strong>B Troop:</strong> Central sector reconnaissance (NAI 5-8)</li>
                                <li><strong>C Troop:</strong> Western sector reconnaissance (NAI 9-12)</li>
                                <li><strong>D Troop:</strong> Squadron reserve and security operations</li>
                                <li><strong>Aviation Section:</strong> Aerial reconnaissance and overwatch</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(147, 197, 253, 0.2); border: 1px solid #93c5fd; border-radius: 6px; padding: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Priority Intelligence Requirements (PIR)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>PIR 1:</strong> Location and strength of enemy mechanized forces</li>
                                <li><strong>PIR 2:</strong> Condition of key bridges and MSRs</li>
                                <li><strong>PIR 3:</strong> Enemy air defense positions and capabilities</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Second Row: Execution & Sustainment -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 3a: Concept of Operations -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-cogs" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                            3a. Concept of Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Four-phase zone reconnaissance with multi-axis approach, integrated intelligence collection, and continuous security operations.
                        </p>
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Four-Phase Zone Reconnaissance Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>Phase I (H-Hour 201000Z):</strong> Movement to AO SABER; troops cross LD by H+60; establish overwatch</li>
                                <li><strong>Phase II (H+90):</strong> Zone reconnaissance; NAI 1-12 coverage by H+180; PIR collection begins</li>
                                <li><strong>Phase III (H+240):</strong> Detailed reconnaissance; PIR answered by H+360; maintain contact</li>
                                <li><strong>Phase IV (H+420):</strong> Consolidation and withdrawal; all troops clear AO by H+480</li>
                                <li><strong>Continuous:</strong> Security operations, communications, medical support throughout</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Decision Points & Synchronization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>DP1:</strong> Commit D Troop (reserve) if A Troop encounters ≥ company resistance</li>
                                <li><strong>DP2:</strong> Request regiment fires if enemy counter-reconnaissance ≥ battalion</li>
                                <li><strong>DP3:</strong> Initiate withdrawal if mission compromise or ≥ 25% casualties</li>
                                <li><strong>Synchronization:</strong> Aviation overwatch +30 min before ground movement</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #d97706;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Control Measures & Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Phase Lines:</strong> PL ALPHA (LD), PL BRAVO (intermediate), PL CHARLIE (LC)</li>
                                <li><strong>Named Areas:</strong> NAI 1-12 with specific reconnaissance objectives</li>
                                <li><strong>Checkpoints:</strong> CP1-CP8 for movement coordination and reporting</li>
                                <li><strong>Battle Handover:</strong> With adjacent squadrons at boundaries</li>
                            </ul>
                        </div>
                    </div>

                <!-- Fifth Row: Tasks to Subordinates & Coordinating Instructions -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 3b: Tasks to Subordinate Units -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-list-check" style="margin-right: 8px; color: #60a5fa; font-size: 14px;"></i>
                            3b. Tasks to Subordinate Units
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Detailed mission assignments for squadron troops with specific reconnaissance objectives and support requirements.
                        </p>
                        <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Reconnaissance Troops - Primary Missions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>A Troop:</strong> Main effort; eastern sector reconnaissance NAI 1-4; answer PIR 1 (enemy mechanized forces); establish OP EAGLE at NAI 2</li>
                                <li><strong>B Troop:</strong> Supporting effort; central sector reconnaissance NAI 5-8; answer PIR 2 (bridge conditions); secure MSR crossings</li>
                                <li><strong>C Troop:</strong> Supporting effort; western sector reconnaissance NAI 9-12; answer PIR 3 (air defense positions); coordinate with 1st Squadron</li>
                                <li><strong>D Troop:</strong> Squadron reserve; security operations; QRF for reconnaissance troops; anti-armor overwatch</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Support Elements - Enabling Tasks</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Aviation Section:</strong> Aerial reconnaissance; overwatch for ground troops; MEDEVAC on call</li>
                                <li><strong>Engineer Platoon:</strong> Route reconnaissance; obstacle assessment; mobility support</li>
                                <li><strong>MI Team:</strong> SIGINT collection; enemy communications intercept; analysis</li>
                                <li><strong>EW Section:</strong> Electronic warfare; communications jamming; cyber defense</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #60a5fa;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Coordination Requirements</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Boundary Coordination:</strong> With 1st Squadron (west), 3rd Squadron (south)</li>
                                <li><strong>Fire Support:</strong> Priority to A Troop; shift on order</li>
                                <li><strong>Medical Support:</strong> Troop medics; squadron aid station backup</li>
                                <li><strong>Logistics:</strong> Troop-level resupply; squadron trains support</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Section 3c: Coordinating Instructions -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-handshake" style="margin-right: 8px; color: #22c55e; font-size: 14px;"></i>
                            3c. Coordinating Instructions
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Essential coordination measures for squadron reconnaissance operations with multi-domain synchronization requirements.
                        </p>
                        <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Rules of Engagement & Control Measures</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li><strong>ROE:</strong> Avoid decisive engagement; report and bypass enemy ≥ company</li>
                                <li><strong>Self-Defense:</strong> Authorized for direct threat; minimize collateral damage</li>
                                <li><strong>Control Measures:</strong> LD/LC times; NAI 1-12 assignments; checkpoint procedures</li>
                                <li><strong>Phase Lines:</strong> PL ALPHA (LD), PL BRAVO (intermediate), PL CHARLIE (LC)</li>
                                <li><strong>Boundaries:</strong> Coordinate with adjacent squadrons; no-fire areas marked</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #34d399; font-size: 12px; margin: 0 0 8px 0;">Reporting & Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Reporting:</strong> SALUTE reports every 60 minutes; PIR immediate</li>
                                <li><strong>SITREP:</strong> To regiment every 2 hours; format per SOP</li>
                                <li><strong>CCIR:</strong> Enemy ≥ battalion; loss of troop; mission compromise</li>
                                <li><strong>Communications:</strong> Primary digital; alternate FM; emergency SATCOM</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(34, 197, 94, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Timeline & Synchronization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>H-Hour:</strong> 201000ZMAR24; all troops cross LD by H+60</li>
                                <li><strong>Phase Transitions:</strong> On order or time; report phase completion</li>
                                <li><strong>Resupply Windows:</strong> Every 8 hours; coordinate with squadron S-4</li>
                                <li><strong>Relief Operations:</strong> 24-hour rotation capability if required</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Sixth Row: Sustainment & C2 -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 4: Sustainment -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-truck" style="margin-right: 8px; color: #fbbf24; font-size: 14px;"></i>
                            4. SUSTAINMENT
                        </h4>
                        <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Logistics Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Class I:</strong> 72-hour rations; water resupply every 12 hours</li>
                                <li><strong>Class III:</strong> Mobile refuel points; emergency caches at NAI</li>
                                <li><strong>Class V:</strong> Basic load + 150%; redistribution at squadron trains</li>
                                <li><strong>Medical:</strong> Squadron aid station; air MEDEVAC capability</li>
                                <li><strong>CASEVAC:</strong> Via regiment at grid NV 345 680; LZ SABER</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Personnel & Maintenance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Personnel:</strong> 280 personnel; replacement via regiment</li>
                                <li><strong>Maintenance:</strong> Squadron level; forward support teams</li>
                                <li><strong>Recovery:</strong> M88A2 recovery teams; evacuation routes</li>
                                <li><strong>Transportation:</strong> 65 vehicles; mobility corridors</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(251, 191, 36, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #fbbf24;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Health Service Support</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Aid Station:</strong> Squadron CP; trauma capability</li>
                                <li><strong>Medics:</strong> Troop medics with each unit</li>
                                <li><strong>Evacuation:</strong> Ground and air MEDEVAC procedures</li>
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
                                <li><strong>Command:</strong> Squadron CO at Main CP (NV 345 679); XO at TAC CP</li>
                                <li><strong>Succession:</strong> CO → XO → S-3 → A Troop CO → B Troop CO</li>
                                <li><strong>Signal:</strong> Primary Digital; Alt FM; Contingency SATCOM</li>
                                <li><strong>Reports:</strong> SITREP to regiment every 60 minutes</li>
                                <li><strong>Battle Rhythm:</strong> Update brief at H-120; continuous monitoring</li>
                                <li><strong>Key Leaders:</strong> CO with main effort; S-3 controls operations</li>
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
                                <li><strong>Squadron HQ (24):</strong> CO, XO, S-1/2/3/4, RTOs, Staff, Polish Liaison</li>
                                <li><strong>A Troop (72):</strong> 3x scout platoons; 1x support platoon; eastern sector</li>
                                <li><strong>B Troop (72):</strong> 3x scout platoons; 1x support platoon; central sector</li>
                                <li><strong>C Troop (72):</strong> 3x scout platoons; 1x support platoon; western sector</li>
                                <li><strong>D Troop (48):</strong> 2x tank platoons; 1x mech platoon; reserve/security</li>
                                <li><strong>Aviation Section (12):</strong> 2x OH-58D; maintenance team; overwatch</li>
                                <li><strong>Attachments:</strong> Engineer PLT (24), MI Team (8), EW Section (6)</li>
                            </ul>
                        </div>
                        <!-- Annex B: Intelligence -->
                        <div style="background-color: rgba(239,68,68,0.1); border:1px solid #ef4444; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#fca5a5; font-size:11px; font-weight:600;">Annex B – Intelligence</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>PIR 1:</strong> Location/strength enemy mechanized forces NAI 1-12</li>
                                <li><strong>PIR 2:</strong> Condition key bridges/MSRs for regiment advance</li>
                                <li><strong>PIR 3:</strong> Enemy air defense positions/capabilities</li>
                                <li><strong>CCIR:</strong> Loss of troop; enemy ≥ battalion; mission compromise</li>
                                <li><strong>Collection Assets:</strong> Ground scouts, aviation, SIGINT, HUMINT</li>
                                <li><strong>Analysis:</strong> MI team; real-time processing; dissemination</li>
                            </ul>
                        </div>
                        <!-- Annex C: Operations -->
                        <div style="background-color: rgba(59,130,246,0.1); border:1px solid #3b82f6; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#93c5fd; font-size:11px; font-weight:600;">Annex C – Operations</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Control Measures:</strong> LD/LC times; NAI 1-12; CP1-CP8</li>
                                <li><strong>Phase Lines:</strong> PL ALPHA (LD), PL BRAVO, PL CHARLIE (LC)</li>
                                <li><strong>Decision Points:</strong> DP1-DP3 for reserve commitment</li>
                                <li><strong>Boundaries:</strong> Coordination with 1st/3rd Squadrons</li>
                                <li><strong>Graphics:</strong> Overlay with NAI, routes, objectives</li>
                            </ul>
                        </div>
                        <!-- Annex D: Fires -->
                        <div style="background-color: rgba(245,158,11,0.1); border:1px solid #f59e0b; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#fbbf24; font-size:11px; font-weight:600;">Annex D – Fires</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Assets:</strong> Regiment 155mm (12 tubes); Squadron 120mm (4 tubes)</li>
                                <li><strong>Targets:</strong> TGT S-101/102/103 HE/Smoke/Illum</li>
                                <li><strong>Priority:</strong> A Troop (main effort); shift on order</li>
                                <li><strong>Clearance:</strong> Squadron FSO; danger-close procedures</li>
                            </ul>
                        </div>
                        <!-- Annex F: Engineer -->
                        <div style="background-color: rgba(34,197,94,0.1); border:1px solid #22c55e; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#4ade80; font-size:11px; font-weight:600;">Annex F – Engineer</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Mobility:</strong> Route reconnaissance; obstacle assessment</li>
                                <li><strong>Counter-mobility:</strong> Obstacle emplacement if required</li>
                                <li><strong>Survivability:</strong> Fighting positions; protective works</li>
                                <li><strong>Assets:</strong> Engineer platoon (24 personnel); specialized equipment</li>
                            </ul>
                        </div>
                        <!-- Annex G: Civil Affairs -->
                        <div style="background-color: rgba(168,85,247,0.1); border:1px solid #a855f7; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#c084fc; font-size:11px; font-weight:600;">Annex G – Civil Affairs</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Civil Coordination:</strong> Polish liaison team; local authorities</li>
                                <li><strong>Population:</strong> Minimize disruption; protect civilians</li>
                                <li><strong>Infrastructure:</strong> Assess damage; coordinate repairs</li>
                            </ul>
                        </div>
                        <!-- Annex L: R&S -->
                        <div style="background-color: rgba(30,64,175,0.1); border:1px solid #1d4ed8; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#93c5fd; font-size:11px; font-weight:600;">Annex L – R&S</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Collection Plan:</strong> Each troop assigned NAI sectors</li>
                                <li><strong>Reporting:</strong> SALUTE every 60 min; PIR immediate</li>
                                <li><strong>Assets:</strong> Ground scouts; aviation; sensors; SIGINT</li>
                                <li><strong>Analysis:</strong> Squadron S-2; MI team support</li>
                            </ul>
                        </div>
                        <!-- Annex T: CEMA -->
                        <div style="background-color: rgba(99,102,241,0.1); border:1px solid #6366f1; border-radius:6px; padding:8px;">
                            <h5 style="margin:0 0 4px 0; color:#c7d2fe; font-size:11px; font-weight:600;">Annex T – CEMA</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>EW Threat:</strong> Enemy jammers; COMSEC discipline required</li>
                                <li><strong>PACE Plan:</strong> Digital → FM → SATCOM → Runner</li>
                                <li><strong>Cyber Defense:</strong> Network security; data protection protocols</li>
                                <li><strong>EW Assets:</strong> EW section; communications intercept capability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED//FOUO - Squadron Level OPORD Example - Operation VISTULA SWORD - FM 5-0 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
