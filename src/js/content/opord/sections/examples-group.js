/**
 * OPORD Examples - Special Forces Group Level
 * UNCLASSIFIED content for Special Forces Group-level OPORD examples
 * Follows FM 5-0 and FM 3-05 standards with realistic unit designations
 */

export const groupExampleModule = {
    id: 'examples-group',
    title: 'Special Forces Group Level OPORD Example',
    echelon: 'group',
    level: 'operational',
    classification: 'UNCLASSIFIED//FOUO',

    getContent: function() {
        return `
            <!-- Special Forces Group Level Complete OPORD Example - Operation WARSAW SHADOW -->
            <div id="group-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-user-secret" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        OPERATION ORDER 24-039 (WARSAW SHADOW) - Special Forces Group Level
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - 10th Special Forces Group (Airborne), 1st Special Forces Command, Operation WARSAW THUNDER
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">161200ZDEC24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">SFOB ALPHA, Okęcie Airfield</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">Warsaw Metropolitan Area</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-05, FM 3-05.102</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:50,000 Metropolitan</span>
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

                    <!-- Section 1: Situation - Special Forces Group Area of Operations -->
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
                                1. SITUATION - Special Forces Group Area of Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - 10th SFG AOR encompasses 2,500 km² Warsaw Metropolitan Area with critical government infrastructure, strategic facilities, and key terrain across five operational sectors.
                            </p>

                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Special Forces Group Boundaries & Operational Sectors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Żoliborz to Bielany districts (52°18'00"N)</li>
                                    <li>South: Wilanów to Ursynów districts (52°09'00"N)</li>
                                    <li>East: Praga-Północ to Rembertów districts (21°08'00"E)</li>
                                    <li>West: Bemowo to Ursus districts (20°52'00"E)</li>
                                    <li>Key Infrastructure: Government quarter, military installations, airports</li>
                                    <li>Metropolitan Density: 65% urban, 1.8 million population, strategic facilities</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Critical Strategic Targets & Infrastructure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Primary: Government quarter, Parliament, Presidential Palace, Ministry of Defense</li>
                                    <li>Secondary: Okęcie Airport, military installations, communication centers</li>
                                    <li>Infrastructure: Power grid, telecommunications, transportation hubs</li>
                                    <li>Strategic: Wisła River crossings, fuel depots, logistics centers</li>
                                    <li>Security: NATO facilities, embassy district, critical infrastructure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Metropolitan Operational Environment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Terrain: Urban metropolitan, historic districts, modern suburbs</li>
                                    <li>Infrastructure: Extensive metro system, major highways, river barriers</li>
                                    <li>Obstacles: Dense urban areas, government security zones, traffic control</li>
                                    <li>Civilian Population: 1.8 million residents, 500,000 government/military personnel</li>
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
                                a. Enemy Forces - 5th Motorized Division
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Enemy 5th Motorized Division with 12,000 personnel, multi-domain capabilities, and integrated defense across Warsaw Metropolitan Area.
                            </p>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Division Level</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Ground Forces: 5th Motorized Division (12,000 personnel), 125 MBTs, 185 IFVs</li>
                                    <li>Air Forces: 24 aircraft (12 fighters, 8 attack helicopters, 4 transport)</li>
                                    <li>Air Defense: 8 SAM systems, integrated network, MANPADS teams</li>
                                    <li>Special Forces: 350 personnel, Spetsnaz units, urban specialists</li>
                                    <li>Militia Forces: 3,500 irregular fighters, 15 affiliated groups</li>
                                    <li>Cyber Units: Division-level cyber warfare capabilities, electronic warfare</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Division Defense Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Metropolitan Defense: Government quarter fortress, prepared positions</li>
                                    <li>Anti-Tank: 45 ATGM systems, building-based firing positions</li>
                                    <li>Electronic Warfare: 8 division jammers, communications disruption</li>
                                    <li>IED Networks: Metropolitan placement, division coordination</li>
                                    <li>Logistics: 30-day supply, distributed caches across Warsaw</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action Assessment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Most Likely COA:</strong> Metropolitan fortress defense, government quarter</li>
                                    <li><strong>Most Dangerous COA:</strong> Coordinated attacks on NATO facilities</li>
                                    <li><strong>Asymmetric Options:</strong> Cyber attacks, infrastructure sabotage</li>
                                    <li><strong>Withdrawal Options:</strong> Underground metro system, river crossings</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Second Row: Mission & Execution -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Section 2: Mission Statement & Commander's Intent -->
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
                                <i class="fas fa-bullseye" style="margin-right: 8px; color: #2563eb; font-size: 12px;"></i>
                                2. MISSION - Special Forces Group Strategic Objectives
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - 10th Special Forces Group conducts Operation WARSAW SHADOW as supporting effort for Division Operation WARSAW THUNDER.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.3); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Special Forces Group Mission Statement</h5>
                                <p style="color: #dbeafe; font-size: 12px; line-height: 1.5; margin: 0; font-weight: 500;">
                                    10th Special Forces Group conducts Operation WARSAW SHADOW from 161200ZDEC24 to 181200ZDEC24 to conduct direct action, special reconnaissance, and foreign internal defense operations across Warsaw Metropolitan Area IOT disrupt enemy command and control, neutralize high-value targets, and enable Division tactical objectives.
                                </p>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Commander's Intent - Special Forces Group Vision</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Purpose:</strong> Disrupt enemy division, neutralize HVTs, enable Division operations</li>
                                    <li><strong>Method:</strong> Multi-domain special operations, precision targeting, Polish integration</li>
                                    <li><strong>End State:</strong> Enemy C2 degraded, strategic targets secured, government restored</li>
                                    <li><strong>Key Tasks:</strong> Direct action, special reconnaissance, foreign internal defense</li>
                                    <li><strong>Risk Guidance:</strong> Accept operational risk to preserve strategic infrastructure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Special Forces Group Task Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Main Effort:</strong> 1st SFB - Government quarter, HVT operations</li>
                                    <li><strong>Supporting Effort:</strong> 2nd SFB - Infrastructure targets, special reconnaissance</li>
                                    <li><strong>Economy of Force:</strong> 3rd SFB - Airport security, logistics interdiction</li>
                                    <li><strong>Reserve:</strong> Polish Special Operations Regiment - Host nation integration</li>
                                    <li><strong>Support:</strong> Group Support Battalion - Logistics, aviation, intelligence</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 3: Execution - Company Operations Plan -->
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
                                <i class="fas fa-cogs" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                3. EXECUTION - Special Forces Group Operations Plan
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-domain special operations with strategic plan supporting Division Operation WARSAW THUNDER timeline.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Concept of Operations - Multi-Domain Special Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 1:</strong> Infiltration & Reconnaissance (H-48 to H-Hour) - Covert insertion</li>
                                    <li><strong>Phase 2:</strong> Direct Action (H-Hour to H+24) - HVT neutralization</li>
                                    <li><strong>Phase 3:</strong> Special Reconnaissance (H+24 to H+48) - Intelligence collection</li>
                                    <li><strong>Decisive Point:</strong> Enemy division C2 destruction, government restoration</li>
                                    <li><strong>Main Effort:</strong> 1st SFB government quarter operations</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Tasks & Strategic Objectives</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st SFB:</strong> Government quarter, HVT operations, Parliament complex</li>
                                    <li><strong>2nd SFB:</strong> Infrastructure targets, power grid, telecommunications</li>
                                    <li><strong>3rd SFB:</strong> Airport security, logistics interdiction, transportation hubs</li>
                                    <li><strong>Group Support Battalion:</strong> Aviation support, intelligence fusion, logistics</li>
                                    <li><strong>Polish SOCOM:</strong> Host nation integration, government coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Coordinating Instructions & Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase Lines:</strong> PL SHADOW (H-48), PL WARSAW (H-Hour), PL THUNDER (H+48)</li>
                                    <li><strong>Objectives:</strong> OBJ GOVERNMENT, OBJ INFRASTRUCTURE, OBJ AIRPORT</li>
                                    <li><strong>Decision Points:</strong> Enemy reinforcement, civilian evacuation, government restoration</li>
                                    <li><strong>ROE:</strong> Preserve strategic infrastructure, minimize civilian casualties</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Third Row: Sustainment & Command & Control -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Section 4: Sustainment - Company Logistics -->
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
                                <i class="fas fa-truck" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                                4. SUSTAINMENT - Special Forces Group Logistics Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive sustainment operations supporting 2,500 personnel across Warsaw Metropolitan Area with strategic mobility and Polish integration.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Special Forces Group Sustainment & Strategic Mobility</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Group Sustainment:</strong> 350 personnel, strategic logistics</li>
                                    <li><strong>Strategic Mobility:</strong> Okęcie Airfield, multiple insertion points</li>
                                    <li><strong>Daily Throughput:</strong> 125 tons cargo, strategic resupply</li>
                                    <li><strong>Strategic Reserves:</strong> 14-day supply all classes</li>
                                    <li><strong>Distribution:</strong> 5 logistics hubs, 15 forward supply points</li>
                                    <li><strong>Polish Support:</strong> Host nation strategic coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Personnel & Health Service Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Total Strength:</strong> 2,500 (U.S. 2,200, Polish 300)</li>
                                    <li><strong>Replacement Flow:</strong> 25/month, strategic processing</li>
                                    <li><strong>R&R Operations:</strong> 72-hour cycles, strategic rotation</li>
                                    <li><strong>Medical Support:</strong> 85 personnel, strategic medical facilities</li>
                                    <li><strong>Medical Facilities:</strong> 3 aid stations, field hospital capability</li>
                                    <li><strong>MEDEVAC:</strong> Air/ground evacuation, strategic coverage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Maintenance & Polish Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Maintenance:</strong> 5 maintenance sections, strategic support</li>
                                    <li><strong>Equipment:</strong> 485 vehicles, 125 weapons systems, aviation assets</li>
                                    <li><strong>Polish Integration:</strong> Polish strategic support, interoperability</li>
                                    <li><strong>Contractor Support:</strong> 85 contractors, strategic augmentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Command & Control - Company C2 Architecture -->
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
                                <i class="fas fa-satellite-dish" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
                                5. COMMAND & CONTROL - Special Forces Group C2 Architecture
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive command and control architecture supporting multi-domain special operations across Warsaw Metropolitan Area with Polish integration.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Command Structure & Locations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Group Commander:</strong> COL exercises OPCON over assigned battalions</li>
                                    <li><strong>Main CP:</strong> SFOB ALPHA, Okęcie Airfield (primary command post)</li>
                                    <li><strong>Tactical CP:</strong> Government quarter (forward operations)</li>
                                    <li><strong>Alternate CP:</strong> Underground facility (continuity operations)</li>
                                    <li><strong>Command Relationships:</strong> OPCON to battalions, TACON for operations</li>
                                    <li><strong>Polish Integration:</strong> Polish SOCOM liaison, interoperability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Signal & Communication Architecture</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary:</strong> Secure satellite communications via Division, strategic coverage</li>
                                    <li><strong>Alternate:</strong> HF radio networks, secure cellular</li>
                                    <li><strong>Polish Networks:</strong> Polish SOCOM radios, interoperability</li>
                                    <li><strong>Communication Security:</strong> Encrypted systems, strategic updates</li>
                                    <li><strong>Redundancy:</strong> Multiple pathways, strategic backup systems</li>
                                    <li><strong>Special Communications:</strong> Covert networks, emergency systems</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Succession & Information Management</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Succession:</strong> 1) Group CO, 2) DCO, 3) Group S-3, 4) 1st SFB CO</li>
                                    <li><strong>Key Leaders:</strong> CO (Main CP), DCO (Tactical CP), Battalion COs (AORs)</li>
                                    <li><strong>Information Management:</strong> Strategic reports, Polish coordination</li>
                                    <li><strong>Battle Rhythm:</strong> 60-minute updates, 6-hour assessments</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Fourth Row: Detailed Tactical Planning -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Detailed Room Clearing Procedures -->
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
                                <i class="fas fa-user-secret" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Special Forces Operations Procedures
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive special operations procedures for Warsaw Metropolitan Area with strategic precision and multi-domain capabilities.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Direct Action Operations (1st SFB)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Target Set:</strong> Government quarter HVTs, enemy division command</li>
                                    <li><strong>Insertion Methods:</strong> Helicopter infiltration, ground vehicles, covert entry</li>
                                    <li><strong>Key Objectives:</strong> Parliament complex, Presidential Palace, Ministry of Defense</li>
                                    <li><strong>Tactical Considerations:</strong> Urban environment, civilian presence, precision required</li>
                                    <li><strong>Civilian Protection:</strong> Evacuation coordination, safe areas, medical support</li>
                                    <li><strong>Polish Coordination:</strong> Government liaison, security protocols, interoperability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Special Reconnaissance Operations (2nd SFB)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Target Set:</strong> Infrastructure targets, power grid, telecommunications</li>
                                    <li><strong>Collection Methods:</strong> Covert observation, technical surveillance, HUMINT</li>
                                    <li><strong>Key Equipment:</strong> Advanced sensors, communication intercept, surveillance systems</li>
                                    <li><strong>Security Measures:</strong> Covert insertion, electronic countermeasures, escape routes</li>
                                    <li><strong>Intelligence Products:</strong> Real-time reporting, target assessment, BDA</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Foreign Internal Defense Operations (3rd SFB)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Partner Forces:</strong> Polish Special Operations, government security forces</li>
                                    <li><strong>Training Focus:</strong> Urban operations, government protection, interoperability</li>
                                    <li><strong>Advisory Role:</strong> Tactical advisors, equipment training, operational planning</li>
                                    <li><strong>Coordination:</strong> Polish SOCOM integration, government liaison, capability building</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Tactical Timeline & Coordination -->
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
                                <i class="fas fa-clock" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                                Strategic Timeline & Coordination
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Detailed strategic timeline for Operation WARSAW SHADOW with precise coordination and synchronization requirements.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">H-Hour Timeline (161200ZDEC24)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>H-48:</strong> Covert infiltration, reconnaissance teams insertion</li>
                                    <li><strong>H-24:</strong> Final intelligence update, Polish coordination conference</li>
                                    <li><strong>H-12:</strong> Move to assault positions, establish overwatch</li>
                                    <li><strong>H-Hour:</strong> Simultaneous multi-domain operations initiation</li>
                                    <li><strong>H+12:</strong> Secure primary objectives, establish control</li>
                                    <li><strong>H+24:</strong> Phase transition, special reconnaissance operations</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Strategic Coordination Requirements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Coordination:</strong> Fire support, air support, strategic reinforcement</li>
                                    <li><strong>Polish Coordination:</strong> Government access, civilian evacuation, security protocols</li>
                                    <li><strong>Government Coordination:</strong> Government officials, security services, continuity planning</li>
                                    <li><strong>Emergency Services:</strong> National police, fire services, medical services</li>
                                    <li><strong>Media Management:</strong> Strategic information operations, international press</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Success Criteria & Strategic Metrics</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary:</strong> Enemy division C2 degraded, strategic targets secured</li>
                                    <li><strong>Secondary:</strong> Minimal civilian casualties, infrastructure preserved</li>
                                    <li><strong>Tertiary:</strong> Government functions restored within 48 hours</li>
                                    <li><strong>Timeline:</strong> Operation complete within 72 hours</li>
                                    <li><strong>Transition:</strong> Handover to Polish government forces</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(254, 240, 138, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fde047;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Strategic Contingency Planning</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Enemy Reinforcement:</strong> Strategic withdrawal, Division support</li>
                                    <li><strong>Government Hostages:</strong> Negotiation teams, strategic patience</li>
                                    <li><strong>Infrastructure Damage:</strong> Strategic assessment, alternative operations</li>
                                    <li><strong>Communication Loss:</strong> Satellite backup, strategic communication</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Fifth Row: Annexes & Intelligence Requirements -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Company Annexes A-F -->
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
                                <i class="fas fa-folder-open" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                ANNEXES A-L, T - Special Forces Group Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Special Forces Group-level annexes supporting Operation WARSAW SHADOW with detailed task organization, intelligence, and special operations.
                            </p>

                            <div style="background-color: rgba(6, 182, 212, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex A - Task Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1st SFB:</strong> 650 personnel, direct action, government quarter operations</li>
                                    <li><strong>2nd SFB:</strong> 650 personnel, special reconnaissance, infrastructure targets</li>
                                    <li><strong>3rd SFB:</strong> 650 personnel, foreign internal defense, airport security</li>
                                    <li><strong>Group Support Battalion:</strong> 350 personnel, aviation, intelligence, logistics</li>
                                    <li><strong>Polish SOCOM Regiment:</strong> 300 personnel, host nation integration</li>
                                    <li><strong>Group HQ:</strong> 85 personnel, command and control</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(14, 165, 233, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #0ea5e9; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex B - Intelligence</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Group S-2:</strong> 45 personnel, strategic intelligence fusion</li>
                                    <li><strong>Collection Assets:</strong> 12 RQ-11, 4 Gray Eagle, SIGINT teams, Polish sources</li>
                                    <li><strong>HUMINT:</strong> Polish government sources, strategic networks</li>
                                    <li><strong>Analysis:</strong> Real-time strategic updates, intelligence products</li>
                                    <li><strong>Dissemination:</strong> Battalion commanders, strategic updates</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Annex C - Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 1:</strong> Multi-domain infiltration, strategic penetration</li>
                                    <li><strong>Decision Points:</strong> Enemy division response, government restoration</li>
                                    <li><strong>Branch Plans:</strong> Strategic withdrawal, Division reinforcement</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Annex D - Fires</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Group Fires:</strong> Aviation assets, precision engagement</li>
                                    <li><strong>Targeting:</strong> 30-minute deliberate, 5-minute dynamic</li>
                                    <li><strong>Munitions:</strong> Precision (98%), minimal collateral damage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Annex E - Protection</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Force Protection:</strong> 125 personnel, strategic security</li>
                                    <li><strong>CBRN Defense:</strong> Advanced detection, decontamination capabilities</li>
                                    <li><strong>Physical Security:</strong> Metropolitan security, access control</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Annex F - Signal</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Signal Battalion:</strong> 85 personnel, strategic communications</li>
                                    <li><strong>Networks:</strong> Satellite, secure HF, strategic communications</li>
                                    <li><strong>Polish Networks:</strong> Strategic interoperability, liaison systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Intelligence Requirements & Assessment -->
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
                                <i class="fas fa-search" style="margin-right: 8px; color: #dc2626; font-size: 12px;"></i>
                                Strategic Intelligence Requirements & Assessment
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive strategic intelligence requirements and threat assessment for Operation WARSAW SHADOW with real-time collection and analysis.
                            </p>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Priority Intelligence Requirements (PIR)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>PIR 1:</strong> Enemy 5th Motorized Division disposition across Warsaw Metropolitan Area</li>
                                    <li><strong>PIR 2:</strong> Civilian population (1.8 million) evacuation status and safe areas</li>
                                    <li><strong>PIR 3:</strong> Strategic infrastructure status (power, communications, transportation)</li>
                                    <li><strong>PIR 4:</strong> Enemy reinforcement capabilities from adjacent regions</li>
                                    <li><strong>PIR 5:</strong> Polish government continuity and coordination capabilities</li>
                                    <li><strong>PIR 6:</strong> Polish Special Operations forces coordination and interoperability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Collection Requirements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Visual Surveillance:</strong> Building exterior, entry points, windows</li>
                                    <li><strong>Electronic Surveillance:</strong> Communications intercept, building systems</li>
                                    <li><strong>Human Intelligence:</strong> Polish staff, security personnel, maintenance</li>
                                    <li><strong>Technical Intelligence:</strong> Building blueprints, security systems, utilities</li>
                                    <li><strong>Open Source:</strong> Media reports, government statements, social media</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #991b1b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Threat Assessment Matrix</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>High Threat:</strong> Parliament main chamber (125 enemy personnel)</li>
                                    <li><strong>Medium Threat:</strong> Committee rooms (45 personnel), offices (25 personnel)</li>
                                    <li><strong>Low Threat:</strong> Administrative areas (15 personnel), storage (5 personnel)</li>
                                    <li><strong>Civilian Risk:</strong> High (1,860 civilians), evacuation priority</li>
                                    <li><strong>Infrastructure Risk:</strong> Medium (historic building), preservation required</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(153, 27, 27, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #b91c1c;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Real-Time Intelligence Updates</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>H-30:</strong> Final enemy disposition, civilian evacuation status</li>
                                    <li><strong>H-15:</strong> Building security systems status, access control</li>
                                    <li><strong>H-5:</strong> Last-minute changes, Polish coordination updates</li>
                                    <li><strong>H-Hour:</strong> Real-time tactical updates, enemy response</li>
                                    <li><strong>H+15:</strong> Battle damage assessment, civilian casualties</li>
                                    <li><strong>H+30:</strong> Operation completion, transition planning</li>
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
                                b. Friendly Forces - Special Forces Group & Supporting Elements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-battalion Special Forces Group with 1,800 personnel, specialized capabilities, and unconventional warfare expertise across Warsaw Metropolitan Area.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Special Operations Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>SOCOM Command:</strong> Operation WARSAW THUNDER special operations guidance</li>
                                    <li><strong>Joint Support:</strong> CIA coordination, NSA intelligence, diplomatic liaison</li>
                                    <li><strong>Coalition Command:</strong> NATO SOF integration, multinational coordination</li>
                                    <li><strong>Regional Partners:</strong> Polish GROM, German KSK, British SAS</li>
                                    <li><strong>Theater Support:</strong> Aviation, intelligence, logistics assets</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Northern SOF:</strong> Gdansk operations, maritime coordination</li>
                                    <li><strong>Southern SOF:</strong> Krakow operations, strategic reconnaissance</li>
                                    <li><strong>Air Support:</strong> Special operations aviation, insertion/extraction</li>
                                    <li><strong>Intelligence Support:</strong> Human intelligence, signals intelligence</li>
                                    <li><strong>Cyber Operations:</strong> Electronic warfare, information operations</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Special Forces Group Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st SF Battalion:</strong> 450 personnel, direct action operations</li>
                                    <li><strong>2nd SF Battalion:</strong> 450 personnel, unconventional warfare</li>
                                    <li><strong>3rd SF Battalion:</strong> 450 personnel, foreign internal defense</li>
                                    <li><strong>Support Elements:</strong> 350 personnel, intelligence/logistics</li>
                                    <li><strong>Command Element:</strong> 100 personnel, C2 operations</li>
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
                                c. Attachments and Detachments - Special Forces Group Modifications
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Special Forces Group force modifications for Operation WARSAW SHADOW with specialized capabilities and unconventional warfare integration.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Attached to Special Forces Group</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>SOCOM Assets:</strong> Psychological Operations Company</li>
                                    <li><strong>Aviation Support:</strong> 160th Special Operations Aviation Regiment</li>
                                    <li><strong>Intelligence Support:</strong> Military Intelligence Battalion (Special Operations)</li>
                                    <li><strong>Cyber Support:</strong> Cyber Operations Team</li>
                                    <li><strong>Coalition Forces:</strong> Polish GROM Operational Detachment</li>
                                    <li><strong>CIA Support:</strong> Special Activities Division Team</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Detached from Special Forces Group</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>To Theater SOF:</strong> ODA 7312 (Strategic Reconnaissance)</li>
                                    <li><strong>To Coalition Forces:</strong> Military Training Team</li>
                                    <li><strong>To Joint Operations:</strong> Special Operations Liaison Element</li>
                                    <li><strong>To National Command:</strong> Strategic Communications Team</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Command Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>OPCON:</strong> All attached units under Group operational control</li>
                                    <li><strong>TACON:</strong> Aviation assets tactical control for missions</li>
                                    <li><strong>Direct Support:</strong> Intelligence battalion direct support relationship</li>
                                    <li><strong>General Support:</strong> Cyber operations team general support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Third Row: Assumptions & Environmental Considerations -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Section 1d: Assumptions -->
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
                                <i class="fas fa-lightbulb" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                                d. Assumptions - Special Forces Group Planning Assumptions
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Critical Special Forces Group assumptions for Operation WARSAW SHADOW planning and execution across Warsaw Metropolitan Area.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Special Operations & Coalition Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>SOCOM Support:</strong> Theater SOF provides aviation and intelligence per timeline</li>
                                    <li><strong>Coalition Unity:</strong> Polish GROM maintains operational commitment</li>
                                    <li><strong>Air Support:</strong> 160th SOAR provides insertion/extraction capability</li>
                                    <li><strong>Urban Operations:</strong> Warsaw infrastructure supports clandestine operations</li>
                                    <li><strong>Intelligence Flow:</strong> CIA and NSA intelligence fusion remains effective</li>
                                    <li><strong>Logistics Support:</strong> Unconventional logistics networks remain secure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Operational & Environmental Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Weather Conditions:</strong> Winter operations, limited visibility aids concealment</li>
                                    <li><strong>Civilian Population:</strong> Urban population provides cover for operations</li>
                                    <li><strong>Infrastructure:</strong> Communications and transportation networks functional</li>
                                    <li><strong>Electronic Warfare:</strong> Urban electromagnetic environment manageable</li>
                                    <li><strong>Medical Support:</strong> Clandestine medical capabilities available</li>
                                    <li><strong>Exfiltration Routes:</strong> Multiple extraction options remain viable</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Risk Mitigation Strategies</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Contingency Planning:</strong> Multiple infiltration/exfiltration routes</li>
                                    <li><strong>Force Protection:</strong> Compartmentalized operations, OPSEC protocols</li>
                                    <li><strong>Coalition Coordination:</strong> Secure communications, joint planning</li>
                                    <li><strong>Unconventional Warfare:</strong> Specialized training, indigenous support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 1e: Environmental Considerations -->
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
                                <i class="fas fa-globe-europe" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                e. Environmental Considerations - Warsaw Metropolitan OAKOC Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive environmental analysis for Warsaw Metropolitan Area special operations including clandestine warfare considerations.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Observation & Fields of Fire (O)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Urban Observation:</strong> High-rise buildings, government complexes, surveillance systems</li>
                                    <li><strong>Weather Impact:</strong> Winter visibility 200m-800m, urban concealment opportunities</li>
                                    <li><strong>Metropolitan Areas:</strong> Dense urban environment, multiple districts</li>
                                    <li><strong>Electronic Environment:</strong> Complex electromagnetic spectrum, SIGINT opportunities</li>
                                    <li><strong>Surveillance Assets:</strong> Group ISR capabilities, human intelligence networks</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Avenues of Approach & Key Terrain (AK)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Infiltration Routes:</strong> Multiple entry points, transportation networks</li>
                                    <li><strong>Clandestine Movement:</strong> Underground systems, service tunnels</li>
                                    <li><strong>Key Terrain:</strong> Government quarter, diplomatic district, financial center</li>
                                    <li><strong>Mobility Corridors:</strong> Public transportation, pedestrian areas</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Obstacles & Cover/Concealment (OC)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Natural Obstacles:</strong> Vistula River, urban parks, weather conditions</li>
                                    <li><strong>Man-made Obstacles:</strong> Security checkpoints, surveillance systems</li>
                                    <li><strong>Cover/Concealment:</strong> Dense urban environment, civilian population</li>
                                    <li><strong>Operational Security:</strong> Electronic countermeasures, physical security</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Fourth Row: Time and Space & Section 1 Summary -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Section 1f: Time and Space -->
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
                                <i class="fas fa-clock" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
                                f. Time and Space - Special Forces Group Operational Factors
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Special Forces Group time and space considerations for Operation WARSAW SHADOW across Warsaw Metropolitan Area.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Special Operations Timeline & Phases</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Planning Time:</strong> 14 days operational planning, 7 days mission prep</li>
                                    <li><strong>Infiltration Phase:</strong> 3 days covert insertion and positioning</li>
                                    <li><strong>Operations Phase:</strong> 21 days special operations missions</li>
                                    <li><strong>Exfiltration Phase:</strong> 2 days extraction and recovery</li>
                                    <li><strong>Total Duration:</strong> 7 weeks operational commitment</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Space & Geographic Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Area of Operations:</strong> 500 km² Warsaw Metropolitan Area</li>
                                    <li><strong>Population Density:</strong> 3,500 civilians per km² (average)</li>
                                    <li><strong>Urban Complexity:</strong> Multiple districts, government/diplomatic areas</li>
                                    <li><strong>Operational Security:</strong> High-threat surveillance environment</li>
                                    <li><strong>Command Distance:</strong> 50km max from SFOB to forward elements</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Special Operations Timing Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Decision Cycle:</strong> 6-hour operational decision timeline</li>
                                    <li><strong>Movement Times:</strong> 2-4 hours cross-metropolitan movement</li>
                                    <li><strong>Coordination Windows:</strong> 12-hour planning cycles</li>
                                    <li><strong>Resupply Schedule:</strong> Weekly clandestine logistics operations</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 1 Summary -->
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
                                <i class="fas fa-check-circle" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                Section 1 - Situation Analysis Complete
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive Special Forces Group situation analysis for Operation WARSAW SHADOW provides operational foundation for mission development.
                            </p>

                            <div style="background-color: rgba(107, 114, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6b7280; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Section 1 Substeps Completed</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1a. Enemy Forces:</strong> High-value target analysis ✓</li>
                                    <li><strong>1b. Friendly Forces:</strong> Special Forces Group and supporting elements ✓</li>
                                    <li><strong>1c. Attachments/Detachments:</strong> Special Forces Group modifications ✓</li>
                                    <li><strong>1d. Assumptions:</strong> Special operations planning assumptions ✓</li>
                                    <li><strong>1e. Environmental:</strong> Warsaw Metropolitan OAKOC analysis ✓</li>
                                    <li><strong>1f. Time and Space:</strong> Special operations factors ✓</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(156, 163, 175, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #9ca3af;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 6px 0;">Ready for Mission Development</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Special Forces Group situation analysis provides comprehensive foundation for special operations mission development and battalion-level planning per FM 5-0 and FM 3-05 requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-user-secret" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED//FOUO - Special Forces Group Level OPORD Example - Operation WARSAW SHADOW - FM 5-0 & FM 3-05 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
