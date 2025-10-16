/**
 * OPORD Examples - Division Level
 * UNCLASSIFIED content for division-level OPORD examples
 * Follows FM 5-0 standards with realistic unit designations
 */

export const divisionExampleModule = {
    id: 'examples-division',
    title: 'Division Level OPORD Example',
    echelon: 'division',
    level: 'tactical',
    classification: 'UNCLASSIFIED//FOUO',

    getContent: function() {
        return `
            <!-- Division Level Complete OPORD Example - Operation WARSAW THUNDER -->
            <div id="division-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-shield" style="margin-right: 8px; color: #dc2626; font-size: 16px;"></i>
                        OPERATION ORDER 24-035 (WARSAW THUNDER) - Division Level
                    </h3>
                    <p style="color: #fca5a5; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - 1st Armored Division, V Corps, Operation STEEL RESOLVE
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">171000ZDEC24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">CP ABRAMS, Zagan, Poland</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">Warsaw Metropolitan Sector</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-0, FM 3-90</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:100,000 Tactical Series</span>
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

                    <!-- Section 1: Situation - Division Area of Operations -->
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
                            <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #dc2626; font-size: 14px;"></i>
                                1. SITUATION - Division Area of Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - 1st Armored Division AOR encompasses 8,500 km² Warsaw metropolitan sector with critical urban infrastructure, transportation hubs, and population centers.
                            </p>

                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Division Boundaries & Tactical Geography</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Modlin-Nasielsk line (52°30'N)</li>
                                    <li>South: Piaseczno-Gora Kalwaria line (52°00'N)</li>
                                    <li>East: Vistula River bend (21°15'E)</li>
                                    <li>West: Sochaczew-Grodzisk line (20°15'E)</li>
                                    <li>Urban Areas: Warsaw (1.8M), Pruszków, Legionowo, Otwock</li>
                                    <li>Key Terrain: Vistula River, Warsaw Escarpment, Kampinos Forest</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Critical Infrastructure & Military Installations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Military Bases: Zagan Training Area, Bemowo Piskie, Drawsko Pomorskie</li>
                                    <li>Airports: Warsaw Chopin (civilian), Okecie (military), Modlin (tactical)</li>
                                    <li>Transportation: A2 motorway, S8/S7 expressways, rail hub</li>
                                    <li>Infrastructure: Power plants (2), water treatment (4), telecom centers (6)</li>
                                    <li>Government: Parliament, ministries, NATO coordination center</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Terrain & Weather Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Climate: Continental, temperatures -12°C to 28°C</li>
                                    <li>Winter Operations: Dec-Feb, ground mobility impact</li>
                                    <li>Terrain: Urban (35%), plains (45%), forests (20%)</li>
                                    <li>Hydrology: Vistula River, tributaries, flood plains</li>
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
                            <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #dc2626; font-size: 14px;"></i>
                                a. Enemy Forces - 2nd Motorized Brigade
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Enemy 2nd Motorized Brigade with 8,500 personnel, mechanized capabilities, and integrated air defense in Warsaw metropolitan sector.
                            </p>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Brigade Level</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Ground Forces: 2nd Motorized Brigade (8.5K personnel), 85 MBTs, 125 IFVs</li>
                                    <li>Air Forces: 18 aircraft (8 fighters, 6 attack, 4 transport)</li>
                                    <li>Air Defense: 3 SAM sites, 12 MANPADS, integrated network</li>
                                    <li>Special Forces: 185 personnel, urban warfare specialists</li>
                                    <li>Militia Forces: 2,200 irregular fighters, 3 affiliated groups</li>
                                    <li>Cyber Units: Brigade-level cyber warfare capabilities</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Brigade Defense Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Urban Defense: Prepared positions, building fortifications</li>
                                    <li>Anti-Tank: 45 ATGM systems, tank traps, obstacles</li>
                                    <li>Electronic Warfare: 1 brigade jammer, communications disruption</li>
                                    <li>IED Networks: Urban placement, brigade coordination</li>
                                    <li>Logistics: 15-day supply, distributed caches</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action Assessment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Most Likely COA:</strong> Urban defense with government district stronghold</li>
                                    <li><strong>Most Dangerous COA:</strong> Coordinated attacks on infrastructure</li>
                                    <li><strong>Asymmetric Options:</strong> Cyber attacks, IED campaigns</li>
                                    <li><strong>Withdrawal Options:</strong> Phased withdrawal across Vistula River</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Second Row: Friendly Forces & Attachments -->
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
                                b. Friendly Forces - Division & Supporting Elements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-brigade division with 25,000 personnel, integrated command structure, and comprehensive tactical capabilities across Warsaw Metropolitan Sector.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Corps Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Corps Command:</strong> Operation STEEL RESOLVE tactical guidance</li>
                                    <li><strong>Joint Support:</strong> Air support, naval coordination, special operations</li>
                                    <li><strong>Coalition Command:</strong> NATO integration, multinational coordination</li>
                                    <li><strong>Regional Partners:</strong> 5 NATO nations, 3 partner nations</li>
                                    <li><strong>Corps Support:</strong> Artillery, aviation, logistics assets</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Northern Division:</strong> Gdansk operations, logistics coordination</li>
                                    <li><strong>Southern Division:</strong> Krakow operations, strategic reserve</li>
                                    <li><strong>Air Support:</strong> Tactical air operations, close air support</li>
                                    <li><strong>Naval Support:</strong> Vistula River operations, logistics support</li>
                                    <li><strong>Special Operations:</strong> Division SOF, reconnaissance operations</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Division Forces & Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Forces:</strong> 3 brigades (1st Armored, 2nd Infantry, 3rd Stryker), 25,000 personnel</li>
                                    <li><strong>Division Assets:</strong> Artillery, aviation, engineers, intelligence</li>
                                    <li><strong>Coalition Forces:</strong> 5,000 allied personnel, specialized capabilities</li>
                                    <li><strong>Support Elements:</strong> 8 tactical bases, metropolitan logistics</li>
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
                                c. Attachments and Detachments - Division Force Modifications
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Division-level force modifications for Operation WARSAW THUNDER with specialized capabilities and coalition integration.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Attached to Division</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Corps Assets:</strong> 3rd Field Artillery Battalion</li>
                                    <li><strong>Aviation Support:</strong> 1st Attack Helicopter Battalion</li>
                                    <li><strong>Engineer Support:</strong> 7th Engineer Battalion</li>
                                    <li><strong>Intelligence Support:</strong> Military Intelligence Company</li>
                                    <li><strong>Coalition Forces:</strong> Polish 1st Warsaw Mechanized Brigade</li>
                                    <li><strong>Special Operations:</strong> Special Forces Operational Detachment Alpha</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Detached from Division</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Corps Reserve:</strong> 1st Armored Brigade Combat Team (to Corps)</li>
                                    <li><strong>Northern Operations:</strong> 2nd Cavalry Squadron (to Northern Division)</li>
                                    <li><strong>Training Mission:</strong> Military Transition Team elements</li>
                                    <li><strong>Homeland Support:</strong> Civil Affairs team</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Coalition Integration & Command Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>NATO Integration:</strong> Multinational brigade headquarters</li>
                                    <li><strong>Bilateral Agreements:</strong> Polish host nation support</li>
                                    <li><strong>Command Authority:</strong> OPCON, TACON, coordination relationships</li>
                                    <li><strong>Interoperability:</strong> Standardized procedures, communication systems</li>
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
                                d. Assumptions - Division Planning Assumptions
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Critical division-level assumptions for Operation WARSAW THUNDER planning and execution across Warsaw Metropolitan Sector.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Tactical & Coalition Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Corps Support:</strong> Corps provides fires and aviation per timeline</li>
                                    <li><strong>Coalition Unity:</strong> Polish forces maintain tactical commitment</li>
                                    <li><strong>Air Support:</strong> Joint air component provides close air support</li>
                                    <li><strong>Urban Operations:</strong> Warsaw infrastructure remains functional</li>
                                    <li><strong>Intelligence Flow:</strong> Corps intelligence fusion remains effective</li>
                                    <li><strong>Logistics Support:</strong> Metropolitan supply lines remain secure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Urban & Environmental Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Weather Conditions:</strong> Winter urban operations capability maintained</li>
                                    <li><strong>Civilian Population:</strong> 1.8 million civilians remain in Warsaw</li>
                                    <li><strong>Infrastructure:</strong> Government buildings remain functional</li>
                                    <li><strong>Enemy Capabilities:</strong> 2nd Motorized Brigade maintains current strength</li>
                                    <li><strong>Force Generation:</strong> Brigades deploy per established timelines</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Risk Mitigation & Contingencies</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Assumption Failure:</strong> Branch plans for coalition withdrawal</li>
                                    <li><strong>Infrastructure Damage:</strong> Alternative command locations identified</li>
                                    <li><strong>Civilian Evacuation:</strong> Humanitarian coordination mechanisms</li>
                                    <li><strong>Urban Combat:</strong> Extended timeline contingencies</li>
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
                                e. Environmental Considerations - Warsaw OAKOC Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive environmental analysis for Warsaw Metropolitan Sector operations including urban warfare considerations.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Observation & Fields of Fire (O)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Urban Observation:</strong> High-rise buildings, government complexes</li>
                                    <li><strong>Weather Impact:</strong> Winter visibility 500m-2km, urban heat effects</li>
                                    <li><strong>Metropolitan Areas:</strong> Warsaw city center, government quarter</li>
                                    <li><strong>Electronic Environment:</strong> Dense urban electromagnetic spectrum</li>
                                    <li><strong>Surveillance Assets:</strong> Division UAV coverage, urban sensors</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Avenues of Approach & Key Terrain (AK)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Urban Approaches:</strong> Major boulevards, Vistula River crossings</li>
                                    <li><strong>Key Terrain:</strong> Parliament, Presidential Palace, ministry buildings</li>
                                    <li><strong>Mobility Corridors:</strong> Aleje Jerozolimskie, Marszałkowska Street</li>
                                    <li><strong>Chokepoints:</strong> Vistula bridges, major intersections, tunnels</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Obstacles & Cover/Concealment (OC)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Natural Obstacles:</strong> Vistula River, parks, winter weather</li>
                                    <li><strong>Man-made Obstacles:</strong> Buildings, underground systems, barriers</li>
                                    <li><strong>Urban Cover:</strong> Buildings, underground tunnels, parking structures</li>
                                    <li><strong>Civil Considerations:</strong> 1.8 million population, government personnel</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Fourth Row: Time and Space & Section Summary -->
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
                                f. Time and Space - Division Tactical Factors
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Division-level time and space considerations for Operation WARSAW THUNDER across Warsaw Metropolitan Sector.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Division Timeline & Tactical Phases</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Planning Time:</strong> 15 days tactical planning, 7 days execution prep</li>
                                    <li><strong>Deployment Phase:</strong> 14 days brigade deployment and staging</li>
                                    <li><strong>Operations Phase:</strong> 21 days major combat operations</li>
                                    <li><strong>Transition Phase:</strong> 45 days stability operations</li>
                                    <li><strong>Total Duration:</strong> 3 months tactical commitment</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Division Space & Geographic Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Division AOR:</strong> 2,500 km² Warsaw Metropolitan Sector</li>
                                    <li><strong>Tactical Depth:</strong> 85 km maximum extent</li>
                                    <li><strong>Coalition Span:</strong> 5 NATO nations, 3 partners</li>
                                    <li><strong>Population Density:</strong> 1.8 million civilians in AOR</li>
                                    <li><strong>Infrastructure:</strong> Government buildings, transportation hubs</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Critical Time-Space Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Decision Cycles:</strong> Division 6 hours, brigade 3 hours</li>
                                    <li><strong>Logistics Flow:</strong> 1-day tactical resupply cycle</li>
                                    <li><strong>Coalition Coordination:</strong> 6-hour consensus building</li>
                                    <li><strong>Information Operations:</strong> Metropolitan information environment</li>
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
                                <i class="fas fa-info-circle" style="margin-right: 8px; color: #6b7280; font-size: 12px;"></i>
                                Section 1 Summary - Division Situation Analysis Complete
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive division-level situation analysis completed with all required substeps per FM 5-0 standards.
                            </p>

                            <div style="background-color: rgba(107, 114, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6b7280; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Section 1 Substeps Completed</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1a. Enemy Forces:</strong> 2nd Motorized Brigade analysis ✓</li>
                                    <li><strong>1b. Friendly Forces:</strong> Division and supporting elements ✓</li>
                                    <li><strong>1c. Attachments/Detachments:</strong> Division force modifications ✓</li>
                                    <li><strong>1d. Assumptions:</strong> Division planning assumptions ✓</li>
                                    <li><strong>1e. Environmental:</strong> Warsaw OAKOC analysis ✓</li>
                                    <li><strong>1f. Time and Space:</strong> Division tactical factors ✓</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(156, 163, 175, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #9ca3af;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 6px 0;">Ready for Mission Development</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Division situation analysis provides comprehensive foundation for tactical mission development and brigade-level planning per FM 5-0 requirements.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Fifth Row: Mission & Execution -->
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
                                2. MISSION - Division Tactical Objectives
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - 1st Armored Division conducts Operation WARSAW THUNDER as main effort for V Corps Operation STEEL RESOLVE.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.3); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Division Mission Statement</h5>
                                <p style="color: #dbeafe; font-size: 12px; line-height: 1.5; margin: 0; font-weight: 500;">
                                    1st Armored Division conducts Operation WARSAW THUNDER from 171200ZDEC24 to 171200ZFEB25 to defeat enemy 2nd Motorized Brigade in AOR WARSAW METROPOLITAN, secure critical government infrastructure, and establish conditions for follow-on operations IOT support Corps tactical objectives and enable Army operational success.
                                </p>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Commander's Intent - Division Vision</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Purpose:</strong> Defeat enemy 2nd Motorized Brigade, secure Warsaw government district</li>
                                    <li><strong>Method:</strong> Combined arms urban operations, minimal civilian casualties</li>
                                    <li><strong>End State:</strong> Enemy defeated, government functions restored, follow-on enabled</li>
                                    <li><strong>Key Tasks:</strong> Destroy enemy forces, secure Parliament/ministries, enable logistics</li>
                                    <li><strong>Risk Guidance:</strong> Accept tactical risk to preserve civilian infrastructure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Division Task Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Main Effort:</strong> 1st ABCT - Warsaw city center, government district</li>
                                    <li><strong>Supporting Effort:</strong> 2nd ABCT - Praga district, Vistula crossings</li>
                                    <li><strong>Economy of Force:</strong> 3rd ABCT - Outer suburbs, screening operations</li>
                                    <li><strong>Reserve:</strong> Polish 1st Warsaw Brigade - Division reserve, urban specialists</li>
                                    <li><strong>Aviation:</strong> 1st CAB - Close air support, reconnaissance, logistics</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 3: Execution - Division Operations Plan -->
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
                                3. EXECUTION - Division Operations Plan
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Combined arms urban operations with three-phase tactical plan supporting Corps Operation STEEL RESOLVE timeline.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Concept of Operations - Urban Combined Arms</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 1:</strong> Tactical Shaping (D-Day to D+7) - Isolate Warsaw, suppress air defense</li>
                                    <li><strong>Phase 2:</strong> Urban Penetration (D+7 to D+21) - Combined arms city assault</li>
                                    <li><strong>Phase 3:</strong> Consolidation (D+21 to D+60) - Area security, transition</li>
                                    <li><strong>Decisive Point:</strong> Government district seizure, enemy command destruction</li>
                                    <li><strong>Main Effort:</strong> 1st ABCT advance through city center to Parliament</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Tasks & Tactical Objectives</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st ABCT:</strong> Advance on Warsaw center, secure government district</li>
                                    <li><strong>2nd ABCT:</strong> Advance on Praga, secure Vistula crossings</li>
                                    <li><strong>3rd ABCT:</strong> Screen outer suburbs, prevent enemy withdrawal</li>
                                    <li><strong>1st CAB:</strong> Close air support, reconnaissance, air mobility</li>
                                    <li><strong>Polish Brigade:</strong> Urban warfare expertise, civilian coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Coordinating Instructions & Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase Lines:</strong> PL WARSAW (D-Day), PL VISTULA (D+7), PL VICTORY (D+21)</li>
                                    <li><strong>Objectives:</strong> OBJ PARLIAMENT, OBJ PALACE, OBJ BRIDGE</li>
                                    <li><strong>Decision Points:</strong> Enemy withdrawal, civilian evacuation, Polish integration</li>
                                    <li><strong>ROE:</strong> Minimize civilian casualties, preserve infrastructure</li>
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

                    <!-- Section 4: Sustainment - Division Logistics -->
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
                                4. SUSTAINMENT - Division Logistics Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive sustainment operations supporting 15,000 personnel across Warsaw metropolitan AOR with tactical mobility and Polish integration.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Division Sustainment Command & Tactical Mobility</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Sustainment:</strong> 1,200 personnel, tactical logistics</li>
                                    <li><strong>Tactical Mobility:</strong> Warsaw Chopin Airport, rail terminals</li>
                                    <li><strong>Daily Throughput:</strong> 125 tons cargo, 25 passengers</li>
                                    <li><strong>Tactical Reserves:</strong> 15-day supply all classes</li>
                                    <li><strong>Distribution:</strong> 3 logistics support areas, 6 forward arming points</li>
                                    <li><strong>Polish Support:</strong> Host nation logistics coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Personnel & Health Service Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Total Strength:</strong> 15K (U.S. 12K, Polish 3K)</li>
                                    <li><strong>Replacement Flow:</strong> 45/month, tactical processing</li>
                                    <li><strong>R&R Operations:</strong> 7-day cycles, European rotation</li>
                                    <li><strong>Medical Command:</strong> 485 personnel, Role 2 capability</li>
                                    <li><strong>Medical Facilities:</strong> 1 FST, 2 aid stations</li>
                                    <li><strong>MEDEVAC:</strong> 2 UH-60M, tactical coverage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Maintenance & Polish Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Maintenance:</strong> 1 maintenance battalion, field/direct support</li>
                                    <li><strong>Equipment:</strong> 2.8K vehicles, 85 aircraft, 485 weapons systems</li>
                                    <li><strong>Polish Integration:</strong> Polish logistics support, interoperability</li>
                                    <li><strong>Contractor Support:</strong> 285 contractors, tactical augmentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Command & Control - Division C2 Architecture -->
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
                                5. COMMAND & CONTROL - Division C2 Architecture
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive command and control architecture supporting combined arms operations across Warsaw metropolitan AOR with Polish integration.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Command Structure & Locations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Commander:</strong> BG exercises OPCON over assigned brigades</li>
                                    <li><strong>Main CP:</strong> Zagan, Poland (primary command post)</li>
                                    <li><strong>Tactical CP:</strong> Warsaw suburbs (forward operations)</li>
                                    <li><strong>Alternate CP:</strong> Bemowo Piskie (continuity operations)</li>
                                    <li><strong>Command Relationships:</strong> OPCON to brigades, TACON for operations</li>
                                    <li><strong>Polish Integration:</strong> Polish liaison officers, interoperability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Signal & Communication Architecture</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary:</strong> SIPR/NIPR networks via Corps, tactical coverage</li>
                                    <li><strong>Alternate:</strong> SATCOM (tactical), 85 Mbps bandwidth</li>
                                    <li><strong>Polish Networks:</strong> Polish tactical systems, interoperability</li>
                                    <li><strong>Communication Security:</strong> Type 1 encryption, tactical updates</li>
                                    <li><strong>Redundancy:</strong> Multiple pathways, tactical backup systems</li>
                                    <li><strong>Mobile Communications:</strong> Tactical satellite, HF backup</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Succession & Information Management</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Succession:</strong> 1) Division CG, 2) ADC-M, 3) COS, 4) G-3 Director</li>
                                    <li><strong>Key Leaders:</strong> CG (Main CP), ADC-M (Tactical CP), Brigade CGs (AORs)</li>
                                    <li><strong>Information Management:</strong> CPCE, DCGS-A, Polish systems integration</li>
                                    <li><strong>Battle Rhythm:</strong> 4-hour updates, daily assessments</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Fourth Row: Annexes A-D & E-H -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Annexes A-D: Core Operations -->
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
                                ANNEXES A-D - Core Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Core operational annexes supporting Division tactical operations with detailed task organization, intelligence, operations, and fires coordination.
                            </p>

                            <div style="background-color: rgba(6, 182, 212, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex A - Task Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1st ABCT:</strong> 3,500 personnel, 87 M1A2, 126 M2A3, main effort</li>
                                    <li><strong>2nd ABCT:</strong> 3,500 personnel, 87 M1A2, 126 M2A3, supporting effort</li>
                                    <li><strong>3rd ABCT:</strong> 3,500 personnel, 87 M1A2, 126 M2A3, economy of force</li>
                                    <li><strong>1st CAB:</strong> 2,800 personnel, 48 AH-64E, 36 UH-60M, 12 CH-47F</li>
                                    <li><strong>Polish 1st Warsaw Bde:</strong> 2,200 personnel, Leopard 2A5, urban specialists</li>
                                    <li><strong>Division Artillery:</strong> 1,200 personnel, 18 M777, 9 HIMARS</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(14, 165, 233, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #0ea5e9; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex B - Intelligence</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Division G-2:</strong> 185 personnel, tactical intelligence fusion</li>
                                    <li><strong>ISR Assets:</strong> 6 MQ-1C, 12 RQ-11, ground sensors</li>
                                    <li><strong>HUMINT:</strong> 4 teams, urban collection, Polish coordination</li>
                                    <li><strong>SIGINT:</strong> 2 stations, tactical intercept, analysis</li>
                                    <li><strong>Analysis:</strong> 24/7 operations, tactical products</li>
                                    <li><strong>Dissemination:</strong> Real-time feeds, brigade integration</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Annex C - Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 1:</strong> Tactical shaping, air defense suppression</li>
                                    <li><strong>Phase 2:</strong> Urban penetration, combined arms assault</li>
                                    <li><strong>Phase 3:</strong> Consolidation, area security</li>
                                    <li><strong>Decision Points:</strong> Enemy withdrawal, civilian evacuation</li>
                                    <li><strong>Branch Plans:</strong> Hasty defense, rapid pursuit</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Annex D - Fires</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Artillery:</strong> 18 M777, 9 HIMARS, tactical fires</li>
                                    <li><strong>Targeting:</strong> 4-hour deliberate, 15-minute dynamic</li>
                                    <li><strong>Munitions:</strong> Precision (70%), conventional (30%)</li>
                                    <li><strong>Polish Fires:</strong> Polish artillery integration</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Annexes E-H: Support Operations -->
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
                                <i class="fas fa-cogs" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                ANNEXES E-H - Support Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Support operations annexes covering protection, signal, sustainment, and aviation operations for Division tactical success.
                            </p>

                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Annex E - Protection</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Force Protection:</strong> 285 personnel, tactical security</li>
                                    <li><strong>Air Defense:</strong> 2 SHORAD batteries, 8 Stinger teams</li>
                                    <li><strong>CBRN Defense:</strong> 1 CBRN company, detection/decontamination</li>
                                    <li><strong>Physical Security:</strong> CP security, critical asset protection</li>
                                    <li><strong>OPSEC:</strong> Tactical OPSEC, communications security</li>
                                    <li><strong>Polish Integration:</strong> Polish force protection procedures</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Annex F - Signal</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Signal Battalion:</strong> 485 personnel, tactical communications</li>
                                    <li><strong>Networks:</strong> SIPR/NIPR, tactical radio, SATCOM</li>
                                    <li><strong>Bandwidth:</strong> 85 Mbps tactical, redundant pathways</li>
                                    <li><strong>Cybersecurity:</strong> Network defense, incident response</li>
                                    <li><strong>Polish Networks:</strong> Interoperability, liaison systems</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Annex G - Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Sustainment Brigade:</strong> 1,200 personnel, tactical logistics</li>
                                    <li><strong>Supply:</strong> 15-day tactical reserves, 3 LSAs</li>
                                    <li><strong>Transportation:</strong> 185 vehicles, tactical mobility</li>
                                    <li><strong>Maintenance:</strong> Field/direct support, 95% OR</li>
                                    <li><strong>Medical:</strong> Role 2 capability, MEDEVAC</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Annex H - Aviation</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st CAB:</strong> 2,800 personnel, tactical aviation</li>
                                    <li><strong>Attack:</strong> 48 AH-64E Apache, close air support</li>
                                    <li><strong>Assault:</strong> 36 UH-60M Black Hawk, air mobility</li>
                                    <li><strong>Cargo:</strong> 12 CH-47F Chinook, tactical lift</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Fifth Row: Annexes I-L & Special Annexes -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Annexes I-L: Information & Civil Operations -->
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
                                <i class="fas fa-broadcast-tower" style="margin-right: 8px; color: #f97316; font-size: 12px;"></i>
                                ANNEXES I-L - Information & Civil Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Information operations, civil affairs, and reconnaissance annexes supporting Division tactical operations in Warsaw metropolitan area.
                            </p>

                            <div style="background-color: rgba(249, 115, 22, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f97316; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fb923c; font-size: 12px; margin: 0 0 8px 0;">Annex I - Information Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>IO Cell:</strong> 45 personnel, tactical information operations</li>
                                    <li><strong>PSYOP:</strong> 2 teams, tactical psychological operations</li>
                                    <li><strong>EW:</strong> 1 company, tactical electronic warfare</li>
                                    <li><strong>Themes:</strong> Constitutional legitimacy, humanitarian focus</li>
                                    <li><strong>Target Audiences:</strong> Warsaw civilians, enemy forces</li>
                                    <li><strong>Polish Integration:</strong> Polish information operations coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 8px 0;">Annex J - Public Affairs</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>PA Team:</strong> 12 personnel, tactical media operations</li>
                                    <li><strong>Media Strategy:</strong> Daily briefings, embedded journalists (8)</li>
                                    <li><strong>Warsaw Messaging:</strong> Local coordination, unified narrative</li>
                                    <li><strong>Social Media:</strong> Real-time updates, counter-disinformation</li>
                                    <li><strong>Crisis Communication:</strong> Rapid response protocols</li>
                                    <li><strong>Polish PA:</strong> Polish media coordination, joint messaging</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Annex K - Civil Affairs Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>CA Company:</strong> 85 personnel, civil-military operations</li>
                                    <li><strong>Government Liaison:</strong> Warsaw city government, ministries</li>
                                    <li><strong>Infrastructure:</strong> Power, water, transportation coordination</li>
                                    <li><strong>Humanitarian:</strong> Civilian protection, refugee coordination</li>
                                    <li><strong>Polish Coordination:</strong> Polish civil affairs integration</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(6, 182, 212, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Annex L - Reconnaissance & Surveillance</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Cavalry:</strong> 1 squadron, tactical reconnaissance</li>
                                    <li><strong>ISR Integration:</strong> Manned/unmanned, tactical coverage</li>
                                    <li><strong>Collection:</strong> 6 MQ-1C, 12 RQ-11, ground sensors</li>
                                    <li><strong>Polish ISR:</strong> Polish reconnaissance assets coordination</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Annex T & Division Summary -->
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
                                <i class="fas fa-shield-virus" style="margin-right: 8px; color: #dc2626; font-size: 12px;"></i>
                                ANNEX T & Division Summary
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Cyber electromagnetic activities and comprehensive Division tactical summary for Operation WARSAW THUNDER.
                            </p>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Annex T - Cyber Electromagnetic Activities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Cyber Operations:</strong> Defensive (24/7 monitoring), offensive coordination</li>
                                    <li><strong>Electronic Warfare:</strong> EA (jamming), EP (protection), ES (SIGINT)</li>
                                    <li><strong>Spectrum Management:</strong> Division frequency coordination</li>
                                    <li><strong>Key Systems:</strong> CREW, tactical EW, division-level capabilities</li>
                                    <li><strong>Integration:</strong> Brigade EW coordination, tactical synchronization</li>
                                    <li><strong>Polish CEMA:</strong> Polish cyber/EW interoperability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(6, 182, 212, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                <p style="margin: 0; font-weight: 600; color: #67e8f9; font-size: 12px;">Division Force Structure - 15,000 Personnel</p>
                            </div>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>1st ABCT (Main Effort):</strong> 3.5K personnel, 87 M1A2, Warsaw center</li>
                                    <li><strong>2nd ABCT (Supporting):</strong> 3.5K personnel, 87 M1A2, Praga district</li>
                                    <li><strong>3rd ABCT (Economy):</strong> 3.5K personnel, 87 M1A2, outer suburbs</li>
                                    <li><strong>1st CAB:</strong> 2.8K personnel, 48 AH-64E, 36 UH-60M, 12 CH-47F</li>
                                    <li><strong>Polish 1st Warsaw Bde:</strong> 2.2K personnel, Leopard 2A5, urban specialists</li>
                                    <li><strong>Division Artillery:</strong> 1.2K personnel, 18 M777, 9 HIMARS</li>
                                    <li><strong>Division Support:</strong> 2.3K personnel (sustainment, signal, medical)</li>
                                </ul>
                            </div>

                            <div style="margin-top: 12px; padding: 8px; background-color: #374151; border-radius: 4px;">
                                <h5 style="font-weight: 600; color: #60a5fa; font-size: 12px; margin: 0 0 6px 0;">Division Intelligence Requirements</h5>
                                <ul style="color: #d1d5db; font-size: 11px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Enemy 2nd Motorized Brigade disposition in Warsaw sectors</li>
                                    <li>Opposition air defense network effectiveness (3 SAM sites)</li>
                                    <li>Critical infrastructure: 2 power plants, 4 water treatment status</li>
                                    <li>Civilian population (1.8M) movement patterns, evacuation routes</li>
                                    <li>Polish integration: Warsaw Brigade readiness, interoperability</li>
                                    <li>Weather: Winter operations impact (Dec-Feb), mobility windows</li>
                                </ul>
                                <div style="margin-top: 8px; padding: 6px; background-color: #1f2937; border-radius: 4px;">
                                    <p style="margin: 0; font-size: 11px;"><strong>Collection Assets:</strong> 6 ISR platforms (6 MQ-1C, 12 RQ-11), HUMINT (4 teams), SIGINT (2 stations)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED//FOUO - Division Level OPORD Example - Operation WARSAW THUNDER - FM 5-0 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
