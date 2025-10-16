/**
 * OPORD Examples - Company Level
 * Complete OPORD example for company-level operations
 * Follows FM 5-0 standards with realistic unit designations
 */

export const companyExampleModule = {
    id: 'examples-company',
    title: 'Company Level OPORD Example',
    echelon: 'company',
    level: 'tactical',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Company Level Complete OPORD Example - Operation VISTULA SHIELD -->
            <div id="company-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-shield-alt" style="margin-right: 8px; color: #3b82f6; font-size: 16px;"></i>
                        OPERATION ORDER 24-032 (VISTULA SHIELD) - Company Level
                    </h3>
                    <p style="color: #93c5fd; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - Alpha Company, 1-77 Armor Regiment, Operation WARSAW STORM
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">151200ZFEB24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">TAC CP ALPHA, Śródmieście</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">Śródmieście District Sector</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-20.21</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:25,000 Urban Series</span>
                        </div>
                    </div>
                </div>

                <!-- First Row: Situation & Enemy Forces -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 1: Situation - Company Area of Operations -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #dc2626; font-size: 14px;"></i>
                            1. SITUATION - Company Area (Śródmieście District, Warsaw)
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Alpha Company AOR encompasses 8.5 km² Śródmieście District with government buildings, commercial centers, and residential areas.
                        </p>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Company Boundaries & Urban Terrain</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li>North: Senatorska to Miodowa Street (52°14'30"N)</li>
                                <li>South: Aleje Jerozolimskie to Świętokrzyska (52°13'15"N)</li>
                                <li>East: Marszałkowska to Nowy Świat (21°01'15"E)</li>
                                <li>West: Żurawia to Bracka Street (20°59'30"E)</li>
                                <li>Key Buildings: Presidential Palace, Parliament, Ministry buildings</li>
                                <li>Urban Density: 85% built-up, mixed government/commercial/residential</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Critical Government Infrastructure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Primary: Presidential Palace (NV 147 478), Parliament Building (NV 148 477)</li>
                                <li>Secondary: Ministry buildings (8), Embassy district</li>
                                <li>Infrastructure: Government communications center, power grid</li>
                                <li>Transportation: Metro stations (3), major intersections (12)</li>
                                <li>Security: Government security facilities, checkpoints</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Enemy Forces Card -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-crosshairs" style="margin-right: 8px; color: #f87171; font-size: 14px;"></i>
                            a. Enemy Forces - Reinforced Company
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            UNCLASSIFIED//FOUO - Enemy reinforced company with 180 personnel, mechanized capabilities, and integrated defense of government district.
                        </p>
                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Company Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                <li>Ground Forces: Reinforced company (180 personnel), 12 vehicles, 24 crew-served weapons</li>
                                <li>Air Forces: No organic air assets; limited UAV capability</li>
                                <li>Air Defense: 4 MANPADS teams, government building positions</li>
                                <li>Special Forces: 24 personnel, government building specialists</li>
                                <li>Militia Forces: 45 irregular fighters, government sympathizers</li>
                                <li>Cyber Units: Company-level electronic warfare and cyber capabilities</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(220, 38, 38, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Company Defense Capabilities</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Government Defense: Presidential Palace strongpoint, Parliament secondary</li>
                                <li>Anti-Armor: 8 ATGM positions, building-based firing positions</li>
                                <li>Electronic Warfare: 3 company jammers, communications disruption</li>
                                <li>IED Networks: Government building placement, company coordination</li>
                                <li>Logistics: 5-day supply, distributed caches in government buildings</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Second Row: Mission & Execution -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Section 2: Mission -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-bullseye" style="margin-right: 8px; color: #2563eb; font-size: 14px;"></i>
                            2. MISSION
                        </h4>
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0 0 12px 0; background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb;">
                            Alpha Company conducts combined arms attack to seize and secure Śródmieście District government sector NLT 151800ZFEB24 to enable battalion advance to OBJ PARLIAMENT.
                        </p>
                        <div style="background-color: rgba(37, 99, 235, 0.2); border: 1px solid #2563eb; border-radius: 6px; padding: 10px; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Commander's Intent</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Purpose:</strong> Eliminate enemy resistance and secure government facilities</li>
                                <li><strong>Method:</strong> Coordinated platoon-level combined arms operations</li>
                                <li><strong>End State:</strong> District secured; government buildings intact; ready for follow-on</li>
                                <li><strong>Key Tasks:</strong> Secure Presidential Palace, protect government infrastructure</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(59, 130, 246, 0.2); border: 1px solid #3b82f6; border-radius: 6px; padding: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Task Organization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st Platoon:</strong> Main effort; Presidential Palace (OBJ CROWN)</li>
                                <li><strong>2nd Platoon:</strong> Supporting effort; Parliament Building (OBJ DOME)</li>
                                <li><strong>3rd Platoon:</strong> Reserve; Ministry buildings (OBJ TOWER)</li>
                                <li><strong>Weapons Platoon:</strong> Overwatch and direct fire support</li>
                                <li><strong>Engineer Squad:</strong> Breaching and obstacle reduction</li>
                            </ul>
                        </div>
                    </div>

                    <!-- 3a. Concept of Operations -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 400px;">
                        <h4 style="font-size: 16px; font-weight:600; color:white; margin:0 0 12px 0; display: flex; align-items: center;"><i class="fas fa-cogs" style="margin-right:8px; color:#f59e0b; font-size:14px;"></i>3a. Concept of Operations</h4>
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Five-Phase Combined Arms Attack</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Phase I (H-Hour 151200Z):</strong> Movement to PL ALPHA; overwatch positions set by H+30</li>
                                <li><strong>Phase II (H+45):</strong> Breach operations at OBJ CROWN; 1st PLT inside by H+75</li>
                                <li><strong>Phase III (H+90):</strong> Assault OBJ DOME; 2nd PLT secures Parliament by H+120</li>
                                <li><strong>Phase IV (H+150):</strong> Consolidation; 3rd PLT clears Ministry buildings</li>
                                <li><strong>Phase V (H+240):</strong> Reorganization; prepare for follow-on operations</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Decision Points & Synchronization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>DP1:</strong> Commit reserve (3rd PLT) if 1st PLT stalled at OBJ CROWN</li>
                                <li><strong>DP2:</strong> Shift fires from OBJ CROWN to OBJ DOME at H+75</li>
                                <li><strong>DP3:</strong> Request battalion support if enemy counterattack ≥ platoon</li>
                                <li><strong>Synchronization:</strong> Fires lift +60s before entry; EN breach + Inf assault</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #d97706;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Control Measures</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Phase Lines:</strong> PL ALPHA (NV 146 479), PL BRAVO (NV 147 478)</li>
                                <li><strong>Objectives:</strong> OBJ CROWN/DOME/TOWER</li>
                                <li><strong>Checkpoints:</strong> CP1-CP6 for coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Third Row: Tasks to Subordinates & Sustainment -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- 3b. Tasks to Subordinate Units -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 16px; font-weight:600; color:white; margin:0 0 12px 0; display: flex; align-items: center;"><i class="fas fa-list-check" style="margin-right:8px; color:#60a5fa; font-size:14px;"></i>3b. Tasks to Subordinate Units</h4>
                        <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>1st Platoon:</strong> Main effort; breach and secure Presidential Palace (OBJ CROWN) NLT H+75</li>
                                <li><strong>2nd Platoon:</strong> Supporting effort; assault and secure Parliament Building (OBJ DOME) NLT H+120</li>
                                <li><strong>3rd Platoon:</strong> Reserve; clear Ministry buildings (OBJ TOWER) on order; QRF for company</li>
                                <li><strong>Weapons Platoon:</strong> Provide overwatch and direct fire support from BP1/BP2</li>
                                <li><strong>Engineer Squad:</strong> Provide breaching support to 1st PLT; obstacle reduction</li>
                                <li><strong>Mortar Section:</strong> Priority fires to main effort; shift fires on order</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Section 4: Sustainment -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 16px; font-weight:600; color:white; margin:0 0 12px 0; display: flex; align-items: center;"><i class="fas fa-truck" style="margin-right:8px; color:#fbbf24; font-size:14px;"></i>4. SUSTAINMENT</h4>
                        <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Class I:</strong> 48-hour rations; water resupply every 8 hours via battalion trains</li>
                                <li><strong>Class III:</strong> Battalion push at H+180; emergency cache at TAC CP</li>
                                <li><strong>Class V:</strong> Basic load + 100%; redistribution at company CCP</li>
                                <li><strong>Medical:</strong> Company aid station at TAC CP; platoon medics with units</li>
                                <li><strong>CASEVAC:</strong> Via battalion at grid NV 146 480; LZ MERCY</li>
                                <li><strong>Maintenance:</strong> Company level; report via battalion S-4</li>
                                <li><strong>Personnel:</strong> 180 personnel; replacement via battalion</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Fourth Row: C2 & Annexes -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 12px;">
                    <!-- Section 5: Command & Control -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 16px; font-weight:600; color:white; margin:0 0 12px 0; display: flex; align-items: center;"><i class="fas fa-satellite-dish" style="margin-right:8px; color:#8b5cf6; font-size:14px;"></i>5. COMMAND & CONTROL</h4>
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                <li><strong>Command:</strong> CO at TAC CP (NV 146 479); XO at Main CP</li>
                                <li><strong>Succession:</strong> CO → XO → 1st PLT LDR → 2nd PLT LDR</li>
                                <li><strong>Signal:</strong> Primary FM; Alt SINCGARS; Contingency runners</li>
                                <li><strong>Reports:</strong> SITREP to battalion every 30 minutes</li>
                                <li><strong>Battle Rhythm:</strong> Update brief at H-60; continuous monitoring</li>
                                <li><strong>Key Leaders:</strong> CO with main effort; XO controls support</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Annexes A-L, T (Complete) -->
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 360px;">
                        <h4 style="font-size: 16px; font-weight:600; color:white; margin:0 0 12px 0; display: flex; align-items: center;"><i class="fas fa-folder-open" style="margin-right:8px; color:#06b6d4; font-size:14px;"></i>ANNEXES A–L, T (Complete)</h4>
                        <!-- Annex A: Task Organization -->
                        <div style="background-color: rgba(6,182,212,0.1); border:1px solid #06b6d4; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#67e8f9; font-size:11px; font-weight:600;">Annex A – Task Organization</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Co HQ (12):</strong> CO, XO, 1SG, RTOs, FO, Medic</li>
                                <li><strong>1st PLT (42):</strong> 3x rifle squads; 1x weapons squad</li>
                                <li><strong>2nd PLT (42):</strong> 3x rifle squads; 1x weapons squad</li>
                                <li><strong>3rd PLT (42):</strong> 3x rifle squads; 1x weapons squad</li>
                                <li><strong>Weapons PLT (24):</strong> 4x M240B; 2x Javelin; 2x M3E1</li>
                                <li><strong>EN Squad (12):</strong> Breaching; demo; obstacle reduction</li>
                            </ul>
                        </div>
                        <!-- Annex B: Intelligence -->
                        <div style="background-color: rgba(239,68,68,0.1); border:1px solid #ef4444; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#fca5a5; font-size:11px; font-weight:600;">Annex B – Intelligence</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>PIR 1:</strong> ATGM positions in government buildings</li>
                                <li><strong>PIR 2:</strong> IED networks along approach routes</li>
                                <li><strong>CCIR:</strong> Loss of breach capability; enemy ≥ company</li>
                            </ul>
                        </div>
                        <!-- Annex D: Fires -->
                        <div style="background-color: rgba(245,158,11,0.1); border:1px solid #f59e0b; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#fbbf24; font-size:11px; font-weight:600;">Annex D – Fires</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Assets:</strong> Bn 120mm (4 tubes); Co 60mm (6 tubes)</li>
                                <li><strong>Targets:</strong> TGT C-101/102/103 HE/Smoke/Illum</li>
                            </ul>
                        </div>
                        <!-- Annex F: Engineer -->
                        <div style="background-color: rgba(34,197,94,0.1); border:1px solid #22c55e; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#4ade80; font-size:11px; font-weight:600;">Annex F – Engineer</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Mobility:</strong> Breach government building doors</li>
                                <li><strong>Survivability:</strong> Fighting positions at objectives</li>
                            </ul>
                        </div>
                        <!-- Annex L: R&S -->
                        <div style="background-color: rgba(30,64,175,0.1); border:1px solid #1d4ed8; border-radius:6px; padding:8px; margin-bottom:6px;">
                            <h5 style="margin:0 0 4px 0; color:#93c5fd; font-size:11px; font-weight:600;">Annex L – R&S</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>Collection:</strong> Each PLT–assigned objectives</li>
                                <li><strong>Reporting:</strong> SITREP every 30 min; CCIR immediate</li>
                            </ul>
                        </div>
                        <!-- Annex T: CEMA -->
                        <div style="background-color: rgba(99,102,241,0.1); border:1px solid #6366f1; border-radius:6px; padding:8px;">
                            <h5 style="margin:0 0 4px 0; color:#c7d2fe; font-size:11px; font-weight:600;">Annex T – CEMA</h5>
                            <ul style="margin:0; padding-left:12px; color:#d1d5db; font-size:11px; line-height:1.4;">
                                <li><strong>EW Threat:</strong> Government jammers; COMSEC discipline</li>
                                <li><strong>PACE:</strong> FM → SINCGARS → Cell → Runner</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED - Company Level OPORD Example - FM 5-0 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
