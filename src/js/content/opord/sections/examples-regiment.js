/**
 * OPORD Examples - Regiment Level
 * UNCLASSIFIED content for regiment-level OPORD examples
 * Follows FM 5-0 standards with realistic unit designations
 */

export const regimentExampleModule = {
    id: 'examples-regiment',
    title: 'Regiment Level OPORD Example',
    echelon: 'regiment',
    level: 'operational',
    classification: 'UNCLASSIFIED//FOUO',

    getContent: function() {
        return `
            <!-- Regiment Level Complete OPORD Example - Operation VISTULA STRIKE -->
            <div id="regiment-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-star" style="margin-right: 8px; color: #f59e0b; font-size: 16px;"></i>
                        OPERATION ORDER 24-037 (VISTULA STRIKE) - Regiment Level
                    </h3>
                    <p style="color: #fbbf24; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - 2nd Combined Arms Battalion (2-77 Armor), 1st ABCT, Operation WARSAW STORM
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">171400ZDEC24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">TAC CP PATTON, Śródmieście</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">Śródmieście District Sector</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-21, FM 3-20</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:25,000 Urban Detail</span>
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

                    <!-- Section 1: Situation - Regiment Area of Operations -->
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
                                1. SITUATION - Regiment Area of Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - 2-77 Armor AOR encompasses 35 km² Śródmieście district with Parliament complex, government ministries, and critical urban infrastructure.
                            </p>

                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Regiment Boundaries & District Terrain</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Plac Teatralny to Plac Bankowy (52°14'30"N)</li>
                                    <li>South: Plac Konstytucji to Plac Zbawiciela (52°13'30"N)</li>
                                    <li>East: Wisła embankment to Marszałkowska (21°00'30"E)</li>
                                    <li>West: Aleje Jerozolimskie to Nowy Świat (20°59'30"E)</li>
                                    <li>Key Buildings: Parliament, Supreme Court, National Bank</li>
                                    <li>District Density: 90% built-up, government complexes, narrow streets</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Critical Government Targets & Infrastructure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Primary: Parliament building (Sejm), Senate building</li>
                                    <li>Secondary: Supreme Court, Constitutional Tribunal, National Bank</li>
                                    <li>Infrastructure: Government telecom center, emergency services HQ</li>
                                    <li>Transportation: Metro stations (3), bus terminals (2), taxi stands</li>
                                    <li>Security: Government security checkpoints, police stations (4)</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Urban Tactical Environment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Building Types: 3-5 story government, 6-8 story residential</li>
                                    <li>Street Network: Wide boulevards, narrow side streets</li>
                                    <li>Obstacles: Security barriers, underground passages</li>
                                    <li>Civilian Population: 65,000 residents, 25,000 government workers</li>
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
                                a. Enemy Forces - 3rd Motorized Company
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Enemy 3rd Motorized Company with 950 personnel, government building defense capabilities, and integrated security in Śródmieście district.
                            </p>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Company Level</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Ground Forces: 3rd Motorized Company (950 personnel), 9 MBTs, 14 IFVs</li>
                                    <li>Air Forces: 2 aircraft (1 fighter, 1 transport)</li>
                                    <li>Air Defense: 1 MANPADS team, integrated network</li>
                                    <li>Special Forces: 25 personnel, government building specialists</li>
                                    <li>Militia Forces: 285 irregular fighters, 1 affiliated group</li>
                                    <li>Cyber Units: Company-level cyber warfare capabilities</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Company Defense Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Government Defense: Parliament building fortress, prepared positions</li>
                                    <li>Anti-Tank: 5 ATGM systems, building-based firing positions</li>
                                    <li>Electronic Warfare: 1 company jammer, communications disruption</li>
                                    <li>IED Networks: Government building placement, company coordination</li>
                                    <li>Logistics: 7-day supply, distributed caches in government buildings</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action Assessment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Most Likely COA:</strong> Parliament building fortress defense</li>
                                    <li><strong>Most Dangerous COA:</strong> Coordinated attacks on government officials</li>
                                    <li><strong>Asymmetric Options:</strong> Cyber attacks, building demolition</li>
                                    <li><strong>Withdrawal Options:</strong> Underground government tunnels</li>
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

                    <!-- Section 4: Sustainment - Regiment Logistics -->
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
                                4. SUSTAINMENT - Regiment Logistics Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive sustainment operations supporting 1,200 personnel across Śródmieście district with tactical mobility and Polish integration.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Regiment Sustainment & Tactical Mobility</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Regiment Sustainment:</strong> 125 personnel, tactical logistics</li>
                                    <li><strong>Tactical Mobility:</strong> Government district, emergency access</li>
                                    <li><strong>Daily Throughput:</strong> 25 tons cargo, tactical resupply</li>
                                    <li><strong>Tactical Reserves:</strong> 5-day supply all classes</li>
                                    <li><strong>Distribution:</strong> 3 logistics points, 6 forward supply points</li>
                                    <li><strong>Polish Support:</strong> Host nation district coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Personnel & Health Service Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Total Strength:</strong> 1,200 (U.S. 1,155, Polish 45)</li>
                                    <li><strong>Replacement Flow:</strong> 8/month, tactical processing</li>
                                    <li><strong>R&R Operations:</strong> 48-hour cycles, district rotation</li>
                                    <li><strong>Medical Support:</strong> 25 personnel, tactical aid station</li>
                                    <li><strong>Medical Facilities:</strong> 2 aid stations, government medical center</li>
                                    <li><strong>MEDEVAC:</strong> Ground/air evacuation, tactical coverage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Maintenance & Polish Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Maintenance:</strong> 3 maintenance sections, field support</li>
                                    <li><strong>Equipment:</strong> 285 vehicles, 45 weapons systems</li>
                                    <li><strong>Polish Integration:</strong> Polish district support, interoperability</li>
                                    <li><strong>Contractor Support:</strong> 25 contractors, tactical augmentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Command & Control - Regiment C2 Architecture -->
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
                                5. COMMAND & CONTROL - Regiment C2 Architecture
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive command and control architecture supporting combined arms operations across Śródmieście district with Polish integration.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Command Structure & Locations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Regiment Commander:</strong> LTC exercises OPCON over assigned companies</li>
                                    <li><strong>Main CP:</strong> Government security center (primary command post)</li>
                                    <li><strong>Tactical CP:</strong> Parliament security office (forward operations)</li>
                                    <li><strong>Alternate CP:</strong> Government basement (continuity operations)</li>
                                    <li><strong>Command Relationships:</strong> OPCON to companies, TACON for operations</li>
                                    <li><strong>Polish Integration:</strong> Polish platoon leader, interoperability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Signal & Communication Architecture</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary:</strong> SINCGARS networks via Brigade, tactical coverage</li>
                                    <li><strong>Alternate:</strong> Satellite communications, government networks</li>
                                    <li><strong>Polish Networks:</strong> Polish tactical radios, interoperability</li>
                                    <li><strong>Communication Security:</strong> Encrypted radios, tactical updates</li>
                                    <li><strong>Redundancy:</strong> Multiple pathways, tactical backup systems</li>
                                    <li><strong>Government Communications:</strong> Government intercom, emergency systems</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Succession & Information Management</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Succession:</strong> 1) Regiment CO, 2) XO, 3) S-3, 4) Alpha Company CO</li>
                                    <li><strong>Key Leaders:</strong> CO (Main CP), XO (Tactical CP), Company COs (AORs)</li>
                                    <li><strong>Information Management:</strong> Tactical reports, Polish coordination</li>
                                    <li><strong>Battle Rhythm:</strong> 30-minute updates, hourly assessments</li>
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

                    <!-- Regiment Building Assault Procedures -->
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
                                <i class="fas fa-building" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Regiment Building Assault Procedures
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive building-by-building assault procedures for government district with tactical precision and civilian protection protocols.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Parliament Complex (Primary Target)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Alpha Company:</strong> Main building, chamber assault, 400 personnel</li>
                                    <li><strong>Entry Points:</strong> Main entrance, VIP entrance, emergency exits (6)</li>
                                    <li><strong>Clearing Sequence:</strong> Ground floor → Upper floors → Basement</li>
                                    <li><strong>Key Areas:</strong> Main chamber, Speaker's office, committee rooms (12)</li>
                                    <li><strong>Tactical Considerations:</strong> Large complex, multiple levels, security systems</li>
                                    <li><strong>Polish Coordination:</strong> Building layout expertise, security protocols</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Supreme Court Building (Secondary Target)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Bravo Company:</strong> Court building, judicial chambers, 300 personnel</li>
                                    <li><strong>Building Layout:</strong> 5-story judicial complex, courtrooms (8)</li>
                                    <li><strong>Clearing Method:</strong> Simultaneous entry, floor-by-floor clearing</li>
                                    <li><strong>Key Equipment:</strong> Legal archives, judicial systems, security cameras</li>
                                    <li><strong>Document Protection:</strong> Preserve legal records, secure storage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">National Bank Building (Tertiary Target)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Charlie Company:</strong> Bank building, financial systems, 250 personnel</li>
                                    <li><strong>Security Features:</strong> Vault systems, electronic locks, surveillance</li>
                                    <li><strong>Tactical Challenges:</strong> Reinforced construction, multiple security layers</li>
                                    <li><strong>Financial Protection:</strong> Preserve monetary systems, secure assets</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(134, 239, 172, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #86efac;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Government Office Buildings (Supporting Targets)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Delta Company:</strong> Ministry buildings, administrative offices, 250 personnel</li>
                                    <li><strong>Office Layout:</strong> Multiple ministry buildings, administrative complexes</li>
                                    <li><strong>Clearing Priority:</strong> Key ministries, government communications</li>
                                    <li><strong>Polish Coordination:</strong> Government staff evacuation, continuity planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Regiment Tactical Timeline & Coordination -->
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
                                Regiment Tactical Timeline & Coordination
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Detailed tactical timeline for Operation VISTULA STRIKE with precise coordination and synchronization requirements.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">H-Hour Timeline (171400ZDEC24)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>H-30:</strong> Final equipment check, Polish coordination, radio check</li>
                                    <li><strong>H-20:</strong> Move to assault positions, establish overwatch</li>
                                    <li><strong>H-10:</strong> Final intelligence update, enemy disposition</li>
                                    <li><strong>H-Hour:</strong> Simultaneous building breach, multi-company assault</li>
                                    <li><strong>H+15:</strong> Secure primary buildings, establish control</li>
                                    <li><strong>H+30:</strong> Building clearing complete, document security</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Multi-Company Coordination Requirements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Coordination:</strong> Fire support, medical evacuation, reinforcement</li>
                                    <li><strong>Polish Coordination:</strong> Building access, civilian evacuation, security protocols</li>
                                    <li><strong>Government Coordination:</strong> Government staff, security services, continuity</li>
                                    <li><strong>Emergency Services:</strong> Police, fire department, medical services</li>
                                    <li><strong>Media Management:</strong> Information operations, public affairs, press access</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Success Criteria & Metrics</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary:</strong> Government district secured, enemy neutralized</li>
                                    <li><strong>Secondary:</strong> Zero civilian casualties, buildings preserved</li>
                                    <li><strong>Tertiary:</strong> Government functions restored within 4 hours</li>
                                    <li><strong>Timeline:</strong> Operation complete within 2 hours</li>
                                    <li><strong>Transition:</strong> Handover to Polish security forces</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(254, 240, 138, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fde047;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Contingency Planning</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Enemy Reinforcement:</strong> Rapid withdrawal, Brigade support</li>
                                    <li><strong>Civilian Hostages:</strong> Negotiation team, tactical patience</li>
                                    <li><strong>Building Damage:</strong> Structural assessment, alternative routes</li>
                                    <li><strong>Communication Loss:</strong> Visual signals, runner system</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Fifth Row: Comprehensive Annexes & Intelligence -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Regiment Annexes A-L, T -->
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
                                ANNEXES A-L, T - Regiment Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive regiment-level annexes supporting Operation VISTULA STRIKE with detailed building assault operations and Polish integration.
                            </p>

                            <div style="background-color: rgba(6, 182, 212, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex A - Task Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Alpha Company:</strong> 400 personnel, Parliament complex assault</li>
                                    <li><strong>Bravo Company:</strong> 300 personnel, Supreme Court building</li>
                                    <li><strong>Charlie Company:</strong> 250 personnel, National Bank building</li>
                                    <li><strong>Delta Company:</strong> 250 personnel, government office buildings</li>
                                    <li><strong>Polish Platoon:</strong> 45 personnel, building specialists</li>
                                    <li><strong>Regiment HQ:</strong> 35 personnel, command and control</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(14, 165, 233, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #0ea5e9; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex B - Intelligence</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Regiment S-2:</strong> 8 personnel, tactical intelligence fusion</li>
                                    <li><strong>Collection Assets:</strong> 4 RQ-11, building sensors, Polish sources</li>
                                    <li><strong>HUMINT:</strong> Polish government staff, security personnel</li>
                                    <li><strong>Analysis:</strong> Real-time updates, tactical products</li>
                                    <li><strong>Dissemination:</strong> Company commanders, tactical updates</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Annex C - Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 1:</strong> Building assault, government district penetration</li>
                                    <li><strong>Decision Points:</strong> Enemy surrender, civilian evacuation</li>
                                    <li><strong>Branch Plans:</strong> Hasty withdrawal, reinforcement</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Annex D - Fires</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Regiment Fires:</strong> Company weapons, precision engagement</li>
                                    <li><strong>Targeting:</strong> 10-minute deliberate, 2-minute dynamic</li>
                                    <li><strong>Munitions:</strong> Precision (95%), minimal collateral damage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Annex F - Engineer</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Engineer Support:</strong> 25 personnel, building breaching</li>
                                    <li><strong>Capabilities:</strong> Door breaching, obstacle reduction</li>
                                    <li><strong>Polish Support:</strong> Building expertise, structural knowledge</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Annex L - Reconnaissance & Surveillance</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Reconnaissance:</strong> Building surveillance, enemy disposition</li>
                                    <li><strong>Surveillance:</strong> Continuous monitoring, real-time updates</li>
                                    <li><strong>Polish Integration:</strong> Local knowledge, surveillance networks</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Regiment Intelligence Requirements & Assessment -->
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
                                Regiment Intelligence Requirements & Assessment
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive intelligence requirements and threat assessment for Operation VISTULA STRIKE with real-time collection and analysis.
                            </p>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Priority Intelligence Requirements (PIR)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>PIR 1:</strong> Enemy 3rd Motorized Company disposition in government buildings</li>
                                    <li><strong>PIR 2:</strong> Civilian population (90,000 total) location and evacuation status</li>
                                    <li><strong>PIR 3:</strong> Government building security systems status (alarms, locks, cameras)</li>
                                    <li><strong>PIR 4:</strong> Enemy reinforcement capabilities from adjacent districts</li>
                                    <li><strong>PIR 5:</strong> Government staff cooperation and building knowledge</li>
                                    <li><strong>PIR 6:</strong> Polish security forces coordination and interoperability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Collection Requirements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Visual Surveillance:</strong> Building exteriors, entry points, windows</li>
                                    <li><strong>Electronic Surveillance:</strong> Communications intercept, building systems</li>
                                    <li><strong>Human Intelligence:</strong> Polish staff, security personnel, maintenance</li>
                                    <li><strong>Technical Intelligence:</strong> Building blueprints, security systems, utilities</li>
                                    <li><strong>Open Source:</strong> Media reports, government statements, social media</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #991b1b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Threat Assessment Matrix</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>High Threat:</strong> Parliament complex (950 enemy personnel)</li>
                                    <li><strong>Medium Threat:</strong> Supreme Court (285 personnel), National Bank (185 personnel)</li>
                                    <li><strong>Low Threat:</strong> Government offices (125 personnel), administrative areas</li>
                                    <li><strong>Civilian Risk:</strong> High (90,000 civilians), evacuation priority</li>
                                    <li><strong>Infrastructure Risk:</strong> Medium (government buildings), preservation required</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(153, 27, 27, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #b91c1c;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Real-Time Intelligence Updates</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>H-60:</strong> Final enemy disposition, civilian evacuation status</li>
                                    <li><strong>H-30:</strong> Building security systems status, access control</li>
                                    <li><strong>H-10:</strong> Last-minute changes, Polish coordination updates</li>
                                    <li><strong>H-Hour:</strong> Real-time tactical updates, enemy response</li>
                                    <li><strong>H+30:</strong> Battle damage assessment, civilian casualties</li>
                                    <li><strong>H+60:</strong> Operation completion, transition planning</li>
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
                                b. Friendly Forces - Regiment & Supporting Elements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-battalion regiment with 3,500 personnel, integrated command structure, and specialized capabilities across Śródmieście District Sector.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Brigade Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Command:</strong> Operation WARSAW STORM tactical guidance</li>
                                    <li><strong>Division Support:</strong> Artillery, aviation, intelligence assets</li>
                                    <li><strong>Coalition Integration:</strong> Polish mechanized elements</li>
                                    <li><strong>Regional Partners:</strong> 3 NATO nations, 2 partner nations</li>
                                    <li><strong>Brigade Support:</strong> Fires, logistics, medical assets</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Northern Regiment:</strong> Żoliborz operations, logistics coordination</li>
                                    <li><strong>Southern Regiment:</strong> Mokotów operations, tactical reserve</li>
                                    <li><strong>Air Support:</strong> Close air support, reconnaissance assets</li>
                                    <li><strong>Engineer Support:</strong> Urban mobility, obstacle reduction</li>
                                    <li><strong>Special Operations:</strong> Regiment SOF, urban reconnaissance</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Regiment Tactical Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st Battalion:</strong> 850 personnel, mechanized infantry</li>
                                    <li><strong>2nd Battalion:</strong> 850 personnel, armor operations</li>
                                    <li><strong>3rd Battalion:</strong> 850 personnel, combined arms</li>
                                    <li><strong>Support Elements:</strong> 950 personnel, logistics/medical</li>
                                    <li><strong>Command Element:</strong> 200 personnel, C2 operations</li>
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
                                c. Attachments and Detachments - Regiment Force Modifications
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Regiment-level force modifications for Operation VISTULA STRIKE with specialized capabilities and urban warfare integration.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Attached to Regiment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Assets:</strong> 2nd Field Artillery Battery</li>
                                    <li><strong>Engineer Support:</strong> Urban Assault Engineer Company</li>
                                    <li><strong>Intelligence Support:</strong> Military Intelligence Detachment</li>
                                    <li><strong>Aviation Support:</strong> Attack Helicopter Section</li>
                                    <li><strong>Coalition Forces:</strong> Polish Urban Warfare Company</li>
                                    <li><strong>Special Operations:</strong> Special Forces Team Alpha</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Detached from Regiment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>To Brigade Reserve:</strong> Alpha Company, 1st Battalion</li>
                                    <li><strong>To Division Support:</strong> Reconnaissance Platoon</li>
                                    <li><strong>To Coalition Forces:</strong> Liaison Team Bravo</li>
                                    <li><strong>To Corps Operations:</strong> Electronic Warfare Section</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Command Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>OPCON:</strong> All attached units under regiment operational control</li>
                                    <li><strong>TACON:</strong> Aviation assets tactical control only</li>
                                    <li><strong>Direct Support:</strong> Artillery battery direct support relationship</li>
                                    <li><strong>General Support:</strong> Engineer company general support</li>
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
                                d. Assumptions - Regiment Planning Assumptions
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Critical regiment-level assumptions for Operation VISTULA STRIKE planning and execution across Śródmieście District Sector.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Tactical & Coalition Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Support:</strong> Brigade provides fires and aviation per timeline</li>
                                    <li><strong>Coalition Unity:</strong> Polish forces maintain tactical commitment</li>
                                    <li><strong>Air Support:</strong> Division air component provides close air support</li>
                                    <li><strong>Urban Operations:</strong> Śródmieście infrastructure remains functional</li>
                                    <li><strong>Intelligence Flow:</strong> Brigade intelligence fusion remains effective</li>
                                    <li><strong>Logistics Support:</strong> District supply lines remain secure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Operational & Environmental Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Weather Conditions:</strong> Winter operations, limited visibility</li>
                                    <li><strong>Civilian Population:</strong> Minimal civilian interference expected</li>
                                    <li><strong>Infrastructure:</strong> Urban utilities remain operational</li>
                                    <li><strong>Communications:</strong> Electronic warfare environment manageable</li>
                                    <li><strong>Medical Support:</strong> Division medical assets available</li>
                                    <li><strong>Resupply Operations:</strong> Urban logistics routes secure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Risk Mitigation Strategies</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Contingency Planning:</strong> Alternative routes, backup communications</li>
                                    <li><strong>Force Protection:</strong> Enhanced security measures, threat assessment</li>
                                    <li><strong>Coalition Coordination:</strong> Liaison teams, joint planning</li>
                                    <li><strong>Urban Warfare:</strong> Specialized training, equipment modifications</li>
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
                                e. Environmental Considerations - Śródmieście OAKOC Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive environmental analysis for Śródmieście District operations including dense urban warfare considerations.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Observation & Fields of Fire (O)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Urban Observation:</strong> Historic buildings, commercial complexes</li>
                                    <li><strong>Weather Impact:</strong> Winter visibility 300m-1km, urban effects</li>
                                    <li><strong>District Areas:</strong> Old Town, commercial district, government quarter</li>
                                    <li><strong>Electronic Environment:</strong> Dense urban electromagnetic spectrum</li>
                                    <li><strong>Surveillance Assets:</strong> Regiment UAV coverage, urban sensors</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Avenues of Approach & Key Terrain (AK)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary Avenues:</strong> Marszałkowska Street, Nowy Świat Street</li>
                                    <li><strong>Secondary Routes:</strong> Krakowskie Przedmieście, Aleje Jerozolimskie</li>
                                    <li><strong>Key Terrain:</strong> Palace of Culture, Central Station</li>
                                    <li><strong>Mobility Corridors:</strong> Metro tunnels, major intersections</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Obstacles & Cover/Concealment (OC)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Natural Obstacles:</strong> Vistula River, urban parks</li>
                                    <li><strong>Man-made Obstacles:</strong> Building complexes, traffic infrastructure</li>
                                    <li><strong>Cover/Concealment:</strong> Dense urban environment, underground systems</li>
                                    <li><strong>Mobility Restrictions:</strong> Narrow streets, pedestrian zones</li>
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
                                f. Time and Space - Regiment Tactical Factors
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Regiment-level time and space considerations for Operation VISTULA STRIKE across Śródmieście District Sector.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Regiment Timeline & Tactical Phases</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Planning Time:</strong> 7 days tactical planning, 3 days execution prep</li>
                                    <li><strong>Deployment Phase:</strong> 5 days battalion deployment and staging</li>
                                    <li><strong>Operations Phase:</strong> 14 days major combat operations</li>
                                    <li><strong>Transition Phase:</strong> 21 days stability operations</li>
                                    <li><strong>Total Duration:</strong> 6 weeks tactical commitment</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Space & Geographic Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Area of Operations:</strong> 25 km² Śródmieście District</li>
                                    <li><strong>Population Density:</strong> 15,000 civilians per km²</li>
                                    <li><strong>Urban Complexity:</strong> Dense historic and commercial areas</li>
                                    <li><strong>Mobility Constraints:</strong> Narrow streets, pedestrian zones</li>
                                    <li><strong>Command Distance:</strong> 5km max from TAC CP to forward elements</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Tactical Timing Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Decision Cycle:</strong> 2-hour tactical decision timeline</li>
                                    <li><strong>Movement Times:</strong> 30-45 minutes cross-district movement</li>
                                    <li><strong>Coordination Windows:</strong> 4-hour planning cycles</li>
                                    <li><strong>Resupply Schedule:</strong> Daily logistics operations</li>
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
                                UNCLASSIFIED//FOUO - Comprehensive regiment-level situation analysis for Operation VISTULA STRIKE provides tactical foundation for mission development.
                            </p>

                            <div style="background-color: rgba(107, 114, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6b7280; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Section 1 Substeps Completed</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1a. Enemy Forces:</strong> 3rd Motorized Company analysis ✓</li>
                                    <li><strong>1b. Friendly Forces:</strong> Regiment and supporting elements ✓</li>
                                    <li><strong>1c. Attachments/Detachments:</strong> Regiment force modifications ✓</li>
                                    <li><strong>1d. Assumptions:</strong> Regiment planning assumptions ✓</li>
                                    <li><strong>1e. Environmental:</strong> Śródmieście OAKOC analysis ✓</li>
                                    <li><strong>1f. Time and Space:</strong> Regiment tactical factors ✓</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(156, 163, 175, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #9ca3af;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 6px 0;">Ready for Mission Development</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Regiment situation analysis provides comprehensive foundation for tactical mission development and battalion-level planning per FM 5-0 requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED//FOUO - Regiment Level OPORD Example - Operation VISTULA STRIKE - FM 5-0 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
