/**
 * OPORD Examples - Brigade Level
 * UNCLASSIFIED content for brigade-level OPORD examples
 * Follows FM 5-0 standards with realistic unit designations
 */

export const brigadeExampleModule = {
    id: 'examples-brigade',
    title: 'Brigade Level OPORD Example',
    echelon: 'brigade',
    level: 'operational',
    classification: 'UNCLASSIFIED//FOUO',

    getContent: function() {
        return `
            <!-- Brigade Level Complete OPORD Example - Operation WARSAW STORM -->
            <div id="brigade-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-flag" style="margin-right: 8px; color: #3b82f6; font-size: 16px;"></i>
                        OPERATION ORDER 24-036 (WARSAW STORM) - Brigade Level
                    </h3>
                    <p style="color: #93c5fd; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - 1st Armored Brigade Combat Team, 1st Armored Division, Operation WARSAW THUNDER
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">171200ZDEC24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">TAC CP BRADLEY, Warsaw</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">Warsaw City Center Sector</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-96, FM 3-90</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:50,000 Urban Series</span>
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

                    <!-- Section 1: Situation - Brigade Area of Operations -->
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
                                1. SITUATION - Brigade Area of Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - 1st ABCT AOR encompasses 125 km² Warsaw city center with critical government infrastructure, urban terrain, and high-value targets.
                            </p>

                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Brigade Boundaries & Urban Terrain</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Krakowskie Przedmieście to Nowy Świat (52°14'N)</li>
                                    <li>South: Aleje Jerozolimskie to Marszałkowska (52°13'N)</li>
                                    <li>East: Vistula River embankment (21°01'E)</li>
                                    <li>West: Aleje Ujazdowskie to Królewska (20°59'E)</li>
                                    <li>Key Areas: Old Town, Government District, Royal Castle</li>
                                    <li>Urban Density: 85% built-up, narrow streets, historic buildings</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">High-Value Targets & Government Infrastructure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Government: Parliament (Sejm), Presidential Palace, Prime Minister's Office</li>
                                    <li>Military: Ministry of Defense, General Staff headquarters</li>
                                    <li>Infrastructure: Central telecom hub, power distribution center</li>
                                    <li>Transportation: Central railway station, metro hub, major bridges</li>
                                    <li>Cultural: Royal Castle, National Museum, historic sites</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Urban Terrain & Tactical Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Building Types: 4-6 story historic, modern government complexes</li>
                                    <li>Street Network: Narrow medieval streets, wide boulevards</li>
                                    <li>Obstacles: Vistula River, parks, underground systems</li>
                                    <li>Civilian Population: 185,000 residents, 45,000 daily workers</li>
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
                                a. Enemy Forces - 1st Motorized Battalion
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Enemy 1st Motorized Battalion with 2,800 personnel, urban warfare capabilities, and integrated defense in Warsaw city center.
                            </p>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Battalion Level</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Ground Forces: 1st Motorized Battalion (2.8K personnel), 28 MBTs, 42 IFVs</li>
                                    <li>Air Forces: 6 aircraft (3 fighters, 2 attack, 1 transport)</li>
                                    <li>Air Defense: 1 SAM site, 4 MANPADS, integrated network</li>
                                    <li>Special Forces: 65 personnel, urban warfare specialists</li>
                                    <li>Militia Forces: 850 irregular fighters, 2 affiliated groups</li>
                                    <li>Cyber Units: Battalion-level cyber warfare capabilities</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Battalion Defense Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Urban Defense: Fortified government buildings, prepared positions</li>
                                    <li>Anti-Tank: 15 ATGM systems, building-based firing positions</li>
                                    <li>Electronic Warfare: 1 battalion jammer, communications disruption</li>
                                    <li>IED Networks: Government district placement, battalion coordination</li>
                                    <li>Logistics: 10-day supply, distributed caches in buildings</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action Assessment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Most Likely COA:</strong> Government building fortress defense</li>
                                    <li><strong>Most Dangerous COA:</strong> Coordinated attacks on Parliament</li>
                                    <li><strong>Asymmetric Options:</strong> Cyber attacks, building demolition</li>
                                    <li><strong>Withdrawal Options:</strong> Underground tunnel systems</li>
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
                                b. Friendly Forces - Brigade & Supporting Elements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-battalion brigade with 3,635 personnel, integrated command structure, and comprehensive tactical capabilities across Warsaw city center.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Division Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Command:</strong> Operation WARSAW THUNDER tactical guidance</li>
                                    <li><strong>Joint Support:</strong> Air support, artillery coordination</li>
                                    <li><strong>Coalition Command:</strong> NATO integration, Polish coordination</li>
                                    <li><strong>Regional Partners:</strong> 3 NATO nations, 2 partner nations</li>
                                    <li><strong>Division Support:</strong> Artillery, aviation, logistics assets</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Eastern Brigade:</strong> Praga district operations</li>
                                    <li><strong>Western Brigade:</strong> Wola district operations</li>
                                    <li><strong>Air Support:</strong> Close air support, reconnaissance</li>
                                    <li><strong>Artillery Support:</strong> Division artillery, precision fires</li>
                                    <li><strong>Special Operations:</strong> Brigade reconnaissance, urban operations</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade Forces & Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Battalion Forces:</strong> 3 battalions (1st Infantry, 2nd Armor, 3rd Combined Arms), 3,635 personnel</li>
                                    <li><strong>Brigade Assets:</strong> Artillery, engineers, intelligence, logistics</li>
                                    <li><strong>Coalition Forces:</strong> 800 Polish personnel, specialized capabilities</li>
                                    <li><strong>Support Elements:</strong> 4 tactical bases, urban logistics</li>
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
                                c. Attachments and Detachments - Brigade Force Modifications
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Brigade-level force modifications for Operation WARSAW STORM with urban warfare capabilities and coalition integration.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Attached to Brigade</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Assets:</strong> 1st Field Artillery Battery</li>
                                    <li><strong>Aviation Support:</strong> Attack helicopter section</li>
                                    <li><strong>Engineer Support:</strong> Urban breaching team</li>
                                    <li><strong>Intelligence Support:</strong> Military Intelligence detachment</li>
                                    <li><strong>Coalition Forces:</strong> Polish 1st Warsaw Infantry Battalion</li>
                                    <li><strong>Special Operations:</strong> Special Forces team</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Detached from Brigade</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Reserve:</strong> 2nd Armor Company (to Division)</li>
                                    <li><strong>Eastern Operations:</strong> 1st Reconnaissance Platoon (to Eastern Brigade)</li>
                                    <li><strong>Training Mission:</strong> Military advisor team</li>
                                    <li><strong>Logistics Support:</strong> Forward support team</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Coalition Integration & Command Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>NATO Integration:</strong> Multinational battalion headquarters</li>
                                    <li><strong>Bilateral Agreements:</strong> Polish host nation support</li>
                                    <li><strong>Command Authority:</strong> OPCON, TACON, coordination relationships</li>
                                    <li><strong>Interoperability:</strong> Standardized urban warfare procedures</li>
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
                                d. Assumptions - Brigade Planning Assumptions
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Critical brigade-level assumptions for Operation WARSAW STORM planning and execution across Warsaw city center.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Urban & Coalition Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Support:</strong> Division provides fires and aviation per timeline</li>
                                    <li><strong>Coalition Unity:</strong> Polish forces maintain tactical commitment</li>
                                    <li><strong>Air Support:</strong> Close air support available for urban operations</li>
                                    <li><strong>Urban Infrastructure:</strong> Government buildings remain functional</li>
                                    <li><strong>Intelligence Flow:</strong> Division intelligence fusion remains effective</li>
                                    <li><strong>Logistics Support:</strong> Urban supply lines remain secure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Tactical & Environmental Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Weather Conditions:</strong> Winter urban operations capability maintained</li>
                                    <li><strong>Civilian Population:</strong> 500,000 civilians remain in city center</li>
                                    <li><strong>Infrastructure:</strong> Parliament and ministry buildings functional</li>
                                    <li><strong>Enemy Capabilities:</strong> 1st Motorized Battalion maintains current strength</li>
                                    <li><strong>Force Generation:</strong> Battalions deploy per established timelines</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Risk Mitigation & Contingencies</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Assumption Failure:</strong> Branch plans for coalition withdrawal</li>
                                    <li><strong>Building Damage:</strong> Alternative command locations identified</li>
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
                                e. Environmental Considerations - Urban OAKOC Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive environmental analysis for Warsaw city center operations including dense urban warfare considerations.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Observation & Fields of Fire (O)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Urban Observation:</strong> Government buildings, Parliament complex</li>
                                    <li><strong>Weather Impact:</strong> Winter visibility 200m-1km, urban canyons</li>
                                    <li><strong>City Center:</strong> Dense building concentration, narrow streets</li>
                                    <li><strong>Electronic Environment:</strong> Dense urban electromagnetic spectrum</li>
                                    <li><strong>Surveillance Assets:</strong> Brigade UAV coverage, building sensors</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Avenues of Approach & Key Terrain (AK)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Urban Approaches:</strong> Krakowskie Przedmieście, Nowy Świat</li>
                                    <li><strong>Key Terrain:</strong> Parliament building, Presidential Palace</li>
                                    <li><strong>Mobility Corridors:</strong> Major streets, underground passages</li>
                                    <li><strong>Chokepoints:</strong> Street intersections, building entrances</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Obstacles & Cover/Concealment (OC)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Natural Obstacles:</strong> Parks, winter weather effects</li>
                                    <li><strong>Man-made Obstacles:</strong> Buildings, barriers, underground systems</li>
                                    <li><strong>Urban Cover:</strong> Buildings, parking structures, monuments</li>
                                    <li><strong>Civil Considerations:</strong> 500,000 population, government personnel</li>
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
                                f. Time and Space - Brigade Tactical Factors
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Brigade-level time and space considerations for Operation WARSAW STORM across Warsaw city center.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Brigade Timeline & Tactical Phases</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Planning Time:</strong> 7 days tactical planning, 3 days execution prep</li>
                                    <li><strong>Deployment Phase:</strong> 7 days battalion deployment and staging</li>
                                    <li><strong>Operations Phase:</strong> 14 days major combat operations</li>
                                    <li><strong>Transition Phase:</strong> 21 days stability operations</li>
                                    <li><strong>Total Duration:</strong> 6 weeks tactical commitment</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Brigade Space & Geographic Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade AOR:</strong> 125 km² Warsaw city center</li>
                                    <li><strong>Tactical Depth:</strong> 15 km maximum extent</li>
                                    <li><strong>Coalition Span:</strong> 3 NATO nations, 2 partners</li>
                                    <li><strong>Population Density:</strong> 500,000 civilians in AOR</li>
                                    <li><strong>Infrastructure:</strong> Government buildings, cultural sites</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Critical Time-Space Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Decision Cycles:</strong> Brigade 3 hours, battalion 1.5 hours</li>
                                    <li><strong>Logistics Flow:</strong> 12-hour tactical resupply cycle</li>
                                    <li><strong>Coalition Coordination:</strong> 3-hour consensus building</li>
                                    <li><strong>Information Operations:</strong> Urban information environment</li>
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
                                Section 1 Summary - Brigade Situation Analysis Complete
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive brigade-level situation analysis completed with all required substeps per FM 5-0 standards.
                            </p>

                            <div style="background-color: rgba(107, 114, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6b7280; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Section 1 Substeps Completed</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1a. Enemy Forces:</strong> 1st Motorized Battalion analysis ✓</li>
                                    <li><strong>1b. Friendly Forces:</strong> Brigade and supporting elements ✓</li>
                                    <li><strong>1c. Attachments/Detachments:</strong> Brigade force modifications ✓</li>
                                    <li><strong>1d. Assumptions:</strong> Brigade planning assumptions ✓</li>
                                    <li><strong>1e. Environmental:</strong> Urban OAKOC analysis ✓</li>
                                    <li><strong>1f. Time and Space:</strong> Brigade tactical factors ✓</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(156, 163, 175, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #9ca3af;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 6px 0;">Ready for Mission Development</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Brigade situation analysis provides comprehensive foundation for tactical mission development and battalion-level planning per FM 5-0 requirements.
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
                                2. MISSION - Brigade Tactical Objectives
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - 1st ABCT conducts Operation WARSAW STORM as main effort for Division Operation WARSAW THUNDER.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.3); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Brigade Mission Statement</h5>
                                <p style="color: #dbeafe; font-size: 12px; line-height: 1.5; margin: 0; font-weight: 500;">
                                    1st ABCT conducts Operation WARSAW STORM from 171400ZDEC24 to 181400ZDEC24 to defeat enemy 1st Motorized Battalion in AOR WARSAW CENTER, secure Parliament and government district, and establish tactical control IOT support Division tactical objectives and enable follow-on operations.
                                </p>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Commander's Intent - Brigade Vision</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Purpose:</strong> Defeat enemy battalion, secure government district</li>
                                    <li><strong>Method:</strong> Combined arms urban assault, building-by-building clearing</li>
                                    <li><strong>End State:</strong> Government functions restored, Parliament secured</li>
                                    <li><strong>Key Tasks:</strong> Destroy enemy forces, secure HVTs, preserve infrastructure</li>
                                    <li><strong>Risk Guidance:</strong> Accept tactical risk to minimize civilian casualties</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Brigade Task Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Main Effort:</strong> 2-77 Armor - Parliament complex, government buildings</li>
                                    <li><strong>Supporting Effort:</strong> 1-87 Infantry - Old Town, Royal Castle area</li>
                                    <li><strong>Economy of Force:</strong> 3-16 Field Artillery - Fire support, counter-battery</li>
                                    <li><strong>Reserve:</strong> Polish 2nd Company - Urban specialists, liaison</li>
                                    <li><strong>Support:</strong> 16th Engineer Battalion - Obstacle reduction, EOD</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 3: Execution - Brigade Operations Plan -->
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
                                3. EXECUTION - Brigade Operations Plan
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Combined arms urban assault with two-phase tactical plan supporting Division Operation WARSAW THUNDER timeline.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Concept of Operations - Urban Combined Arms</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 1:</strong> Urban Assault (D-Day to D+1) - Penetrate city center defenses</li>
                                    <li><strong>Phase 2:</strong> Government Seizure (D+1 to D+2) - Secure Parliament/ministries</li>
                                    <li><strong>Decisive Point:</strong> Parliament building seizure, enemy command destruction</li>
                                    <li><strong>Main Effort:</strong> 2-77 Armor advance through Krakowskie Przedmieście</li>
                                    <li><strong>Supporting Effort:</strong> 1-87 Infantry secure Old Town approaches</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Tasks & Tactical Objectives</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>2-77 Armor:</strong> Advance on Parliament, secure government district</li>
                                    <li><strong>1-87 Infantry:</strong> Clear Old Town, secure Royal Castle</li>
                                    <li><strong>3-16 Field Artillery:</strong> Fire support, counter-battery operations</li>
                                    <li><strong>16th Engineers:</strong> Obstacle reduction, route clearance</li>
                                    <li><strong>Polish Company:</strong> Urban warfare expertise, civilian coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Coordinating Instructions & Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase Lines:</strong> PL STORM (D-Day), PL THUNDER (D+1), PL VICTORY (D+2)</li>
                                    <li><strong>Objectives:</strong> OBJ PARLIAMENT, OBJ CASTLE, OBJ PALACE</li>
                                    <li><strong>Decision Points:</strong> Enemy withdrawal, civilian evacuation</li>
                                    <li><strong>ROE:</strong> Minimize damage to historic buildings</li>
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

                    <!-- Brigade Tactical Coordination -->
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
                                <i class="fas fa-users-cog" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Brigade Tactical Coordination & Planning
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive brigade-level tactical coordination supporting Operation WARSAW STORM across 125 km² Warsaw city center with multi-battalion synchronization.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Multi-Battalion Coordination Matrix</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>2-77 Armor:</strong> Main effort, government district, Parliament complex</li>
                                    <li><strong>1-87 Infantry:</strong> Supporting effort, Old Town, Royal Castle</li>
                                    <li><strong>3-16 FA:</strong> Fire support, precision engagement, minimal collateral</li>
                                    <li><strong>16th Engineers:</strong> Mobility/countermobility, urban breaching</li>
                                    <li><strong>Polish 2nd Company:</strong> Host nation coordination, urban expertise</li>
                                    <li><strong>Brigade Support Battalion:</strong> Logistics hub, medical support</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Synchronization Timeline</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>H-60:</strong> Final intelligence update, Polish coordination conference</li>
                                    <li><strong>H-30:</strong> Battalion commanders brief, final equipment checks</li>
                                    <li><strong>H-15:</strong> Move to assault positions, establish overwatch</li>
                                    <li><strong>H-Hour:</strong> Simultaneous multi-battalion assault initiation</li>
                                    <li><strong>H+30:</strong> Phase line WARSAW secured, consolidation begins</li>
                                    <li><strong>H+60:</strong> Phase line STORM secured, transition to stability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Decision Points & Branch Plans</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>DP 1:</strong> Enemy reinforcement from Praga district</li>
                                    <li><strong>DP 2:</strong> Civilian evacuation completion status</li>
                                    <li><strong>DP 3:</strong> Infrastructure damage assessment</li>
                                    <li><strong>Branch Plan A:</strong> Hasty defense, consolidate gains</li>
                                    <li><strong>Branch Plan B:</strong> Rapid withdrawal to assembly areas</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(134, 239, 172, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #86efac;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Polish Integration & Coalition Coordination</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Polish Command:</strong> Liaison at brigade TOC, real-time coordination</li>
                                    <li><strong>Host Nation Support:</strong> Urban expertise, civilian coordination</li>
                                    <li><strong>Interoperability:</strong> Communication systems, tactical procedures</li>
                                    <li><strong>Cultural Considerations:</strong> Historic preservation, local customs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Brigade Fire Support & Effects Coordination -->
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
                                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #dc2626; font-size: 12px;"></i>
                                Brigade Fire Support & Effects Coordination
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive fire support coordination for urban operations with precision engagement and minimal collateral damage across Warsaw city center.
                            </p>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Brigade Fire Support Assets</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>3-16 FA Battalion:</strong> 18 M777A2 howitzers, precision munitions</li>
                                    <li><strong>Mortar Platoons:</strong> 12 M120 mortars (4 per battalion)</li>
                                    <li><strong>Air Support:</strong> 2 AH-64 Apache, 1 AC-130 on call</li>
                                    <li><strong>Naval Gunfire:</strong> 1 destroyer, Wisła River support</li>
                                    <li><strong>Polish Artillery:</strong> 6 Krab howitzers, coalition integration</li>
                                    <li><strong>Precision Munitions:</strong> 95% guided, minimal collateral damage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Targeting & Engagement Procedures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>High-Value Targets:</strong> Enemy command posts, communication nodes</li>
                                    <li><strong>Deliberate Targeting:</strong> 15-minute cycle, detailed analysis</li>
                                    <li><strong>Dynamic Targeting:</strong> 3-minute cycle, immediate threats</li>
                                    <li><strong>Collateral Damage:</strong> Historic building preservation priority</li>
                                    <li><strong>Polish Coordination:</strong> Cultural site protection, civilian safety</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #991b1b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Fire Support Coordination Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Fire Support Coordination Line:</strong> Wisła River to Aleje Jerozolimskie</li>
                                    <li><strong>No Fire Areas:</strong> Royal Castle, historic churches, hospitals</li>
                                    <li><strong>Restricted Fire Areas:</strong> Government buildings, embassies</li>
                                    <li><strong>Free Fire Areas:</strong> Enemy-controlled industrial zones</li>
                                    <li><strong>Polish Coordination:</strong> Joint targeting board, cultural advisors</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(153, 27, 27, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #b91c1c;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Effects Assessment & Battle Damage</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Real-Time Assessment:</strong> UAV surveillance, ground observers</li>
                                    <li><strong>Damage Criteria:</strong> Enemy neutralized, infrastructure preserved</li>
                                    <li><strong>Civilian Impact:</strong> Zero tolerance, immediate medical response</li>
                                    <li><strong>Historic Preservation:</strong> UNESCO site protection protocols</li>
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

                    <!-- Brigade Annexes A-L, T -->
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
                                ANNEXES A-L, T - Brigade Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive brigade-level annexes supporting Operation WARSAW STORM with detailed multi-domain operations and Polish integration.
                            </p>

                            <div style="background-color: rgba(6, 182, 212, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex A - Task Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>2-77 Armor:</strong> 1,200 personnel, 45 M1A2, government district</li>
                                    <li><strong>1-87 Infantry:</strong> 800 personnel, 35 M2A3, Old Town sector</li>
                                    <li><strong>3-16 FA:</strong> 450 personnel, 18 M777A2, fire support</li>
                                    <li><strong>16th Engineers:</strong> 350 personnel, urban breaching, mobility</li>
                                    <li><strong>Polish 2nd Company:</strong> 185 personnel, urban specialists</li>
                                    <li><strong>Brigade Support Battalion:</strong> 650 personnel, logistics hub</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(14, 165, 233, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #0ea5e9; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex B - Intelligence</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade S-2:</strong> 25 personnel, multi-source intelligence fusion</li>
                                    <li><strong>Collection Assets:</strong> 8 RQ-11, 2 Gray Eagle, SIGINT teams</li>
                                    <li><strong>Polish Intelligence:</strong> Host nation sources, urban networks</li>
                                    <li><strong>Analysis Cell:</strong> Real-time processing, tactical products</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Annex C - Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 1:</strong> Multi-battalion assault, building clearing</li>
                                    <li><strong>Phase 2:</strong> Consolidation, stability operations</li>
                                    <li><strong>Transition:</strong> Handover to Polish security forces</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Annex D - Fires</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Fires:</strong> 3-16 FA, air support, naval gunfire</li>
                                    <li><strong>Targeting:</strong> 15-minute deliberate, 3-minute dynamic</li>
                                    <li><strong>Polish Coordination:</strong> Cultural site protection</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Annex F - Engineer</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>16th Engineers:</strong> Urban breaching, mobility operations</li>
                                    <li><strong>Capabilities:</strong> Building entry, obstacle reduction</li>
                                    <li><strong>Polish Support:</strong> Building expertise, structural knowledge</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Annex I - Information Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Information Operations:</strong> Public affairs, psychological operations</li>
                                    <li><strong>Media Management:</strong> International press, social media</li>
                                    <li><strong>Polish Coordination:</strong> Government messaging, public safety</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Brigade Intelligence Requirements & Assessment -->
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
                                Brigade Intelligence Requirements & Assessment
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive intelligence requirements and threat assessment for Operation WARSAW STORM with multi-source collection and Polish integration.
                            </p>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Priority Intelligence Requirements (PIR)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>PIR 1:</strong> Enemy 3rd Motorized Brigade disposition across Warsaw sectors</li>
                                    <li><strong>PIR 2:</strong> Civilian population (850,000) evacuation status and safe areas</li>
                                    <li><strong>PIR 3:</strong> Critical infrastructure status (power, water, communications)</li>
                                    <li><strong>PIR 4:</strong> Enemy reinforcement capabilities from Praga district</li>
                                    <li><strong>PIR 5:</strong> Polish government continuity and coordination status</li>
                                    <li><strong>PIR 6:</strong> Historic site preservation requirements and restrictions</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Multi-Source Collection Plan</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>GEOINT:</strong> 8 RQ-11 Raven, 2 MQ-1C Gray Eagle, satellite imagery</li>
                                    <li><strong>SIGINT:</strong> 4 collection teams, communications intercept</li>
                                    <li><strong>HUMINT:</strong> Polish sources, civilian networks, government contacts</li>
                                    <li><strong>OSINT:</strong> Media monitoring, social media analysis, government statements</li>
                                    <li><strong>Polish Intelligence:</strong> Host nation sources, urban surveillance</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #991b1b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Brigade Threat Assessment Matrix</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>High Threat:</strong> Government district (3,500 enemy), Parliament complex</li>
                                    <li><strong>Medium Threat:</strong> Old Town (2,200 enemy), Royal Castle area</li>
                                    <li><strong>Low Threat:</strong> Residential areas (800 enemy), commercial zones</li>
                                    <li><strong>Civilian Risk:</strong> Critical (850,000 civilians), mass evacuation required</li>
                                    <li><strong>Infrastructure Risk:</strong> High (UNESCO sites), preservation priority</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(153, 27, 27, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #b91c1c;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Real-Time Intelligence Cycle</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>H-120:</strong> Final intelligence preparation, Polish coordination</li>
                                    <li><strong>H-60:</strong> Enemy disposition update, civilian status</li>
                                    <li><strong>H-30:</strong> Last-minute changes, weather assessment</li>
                                    <li><strong>H-Hour:</strong> Real-time tactical updates, enemy response</li>
                                    <li><strong>H+30:</strong> Battle damage assessment, civilian casualties</li>
                                    <li><strong>H+60:</strong> Operation assessment, transition planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Sixth Row: Sustainment & Command & Control -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Section 4: Sustainment - Brigade Logistics Operations -->
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
                                4. SUSTAINMENT - Brigade Logistics Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive sustainment operations supporting 3,635 personnel across Warsaw city center with urban logistics and Polish coalition integration.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Brigade Sustainment & Urban Logistics</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Sustainment:</strong> 385 personnel, urban logistics operations</li>
                                    <li><strong>Urban Mobility:</strong> Warsaw city center, restricted movement corridors</li>
                                    <li><strong>Daily Throughput:</strong> 85 tons cargo, multi-battalion resupply</li>
                                    <li><strong>Strategic Reserves:</strong> 7-day supply all classes, distributed storage</li>
                                    <li><strong>Distribution:</strong> 5 logistics nodes, 12 forward supply points</li>
                                    <li><strong>Polish Support:</strong> Host nation urban coordination, infrastructure access</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Personnel & Health Service Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Total Strength:</strong> 3,635 (U.S. 3,485, Polish 150)</li>
                                    <li><strong>Replacement Flow:</strong> 25/month, brigade processing center</li>
                                    <li><strong>R&R Operations:</strong> 72-hour cycles, Warsaw area rotation</li>
                                    <li><strong>Medical Support:</strong> 85 personnel, brigade aid station</li>
                                    <li><strong>Medical Facilities:</strong> 1 brigade aid station, 3 battalion aid stations</li>
                                    <li><strong>MEDEVAC:</strong> Ground/air evacuation, urban coverage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Maintenance & Polish Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Maintenance:</strong> 5 maintenance companies, field/urban support</li>
                                    <li><strong>Equipment:</strong> 850 vehicles, 125 weapons systems</li>
                                    <li><strong>Polish Integration:</strong> Polish urban support, interoperability protocols</li>
                                    <li><strong>Contractor Support:</strong> 85 contractors, urban augmentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Command & Control - Brigade C2 Architecture -->
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
                                5. COMMAND & CONTROL - Brigade C2 Architecture
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive command and control architecture supporting brigade combat team operations across Warsaw city center with Polish integration.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Command Structure & Locations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Commander:</strong> COL exercises OPCON over assigned battalions</li>
                                    <li><strong>Main CP:</strong> Warsaw University (primary command post)</li>
                                    <li><strong>Tactical CP:</strong> City Hall complex (forward operations)</li>
                                    <li><strong>Alternate CP:</strong> Metro station complex (continuity operations)</li>
                                    <li><strong>Command Relationships:</strong> OPCON to battalions, TACON for operations</li>
                                    <li><strong>Polish Integration:</strong> Polish battalion commander, liaison officers</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Signal & Communication Architecture</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary:</strong> SINCGARS networks via Division, brigade coverage</li>
                                    <li><strong>Alternate:</strong> Satellite communications, urban networks</li>
                                    <li><strong>Polish Networks:</strong> Polish brigade radios, interoperability</li>
                                    <li><strong>Communication Security:</strong> Encrypted systems, brigade updates</li>
                                    <li><strong>Redundancy:</strong> Multiple pathways, urban backup systems</li>
                                    <li><strong>Urban Communications:</strong> City infrastructure, emergency networks</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Succession & Information Management</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Succession:</strong> 1) Brigade CO, 2) DCO, 3) S-3, 4) 1st Battalion CO</li>
                                    <li><strong>Key Leaders:</strong> CO (Main CP), DCO (Tactical CP), Battalion COs (AORs)</li>
                                    <li><strong>Information Management:</strong> Brigade reports, Polish coordination</li>
                                    <li><strong>Battle Rhythm:</strong> 15-minute updates, 30-minute assessments</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Seventh Row: Brigade Tactical Operations & Coordination -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Brigade Urban Assault Procedures -->
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
                                <i class="fas fa-city" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Brigade Urban Assault Procedures
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive brigade-level urban assault procedures for Warsaw city center with multi-battalion coordination and civilian protection protocols.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1st Battalion - Old Town Sector</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary Mission:</strong> Historic district control, UNESCO site protection</li>
                                    <li><strong>Key Objectives:</strong> Royal Castle, Market Square, Cathedral</li>
                                    <li><strong>Personnel:</strong> 850 soldiers, 3 companies plus support</li>
                                    <li><strong>Tactical Approach:</strong> Precision operations, minimal damage protocols</li>
                                    <li><strong>Polish Coordination:</strong> Historic preservation specialists, local guides</li>
                                    <li><strong>Timeline:</strong> 4-hour operation, phased clearing</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">2nd Battalion - Financial District</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary Mission:</strong> Banking sector, financial infrastructure</li>
                                    <li><strong>Key Objectives:</strong> Stock Exchange, Central Bank, Commercial towers</li>
                                    <li><strong>Personnel:</strong> 850 soldiers, mechanized operations</li>
                                    <li><strong>Tactical Approach:</strong> High-rise clearing, electronic warfare</li>
                                    <li><strong>Special Equipment:</strong> Urban breaching tools, communications jammers</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">3rd Battalion - Government Quarter</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary Mission:</strong> Government buildings, administrative control</li>
                                    <li><strong>Key Objectives:</strong> Ministry buildings, Embassy district</li>
                                    <li><strong>Personnel:</strong> 850 soldiers, combined arms operations</li>
                                    <li><strong>Diplomatic Considerations:</strong> Embassy protection, international law</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(134, 239, 172, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #86efac;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Polish Battalion - Cultural Sites</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary Mission:</strong> Cultural preservation, local coordination</li>
                                    <li><strong>Personnel:</strong> 150 Polish soldiers, cultural specialists</li>
                                    <li><strong>Special Role:</strong> Civilian liaison, heritage protection</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Brigade Tactical Timeline & Multi-Battalion Coordination -->
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
                                Brigade Tactical Timeline & Multi-Battalion Coordination
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Detailed brigade tactical timeline for Operation WARSAW STORM with precise multi-battalion coordination and synchronization requirements.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">H-Hour Timeline (180600ZDEC24)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>H-60:</strong> Final brigade coordination, Polish integration check</li>
                                    <li><strong>H-45:</strong> Battalion movement to assault positions</li>
                                    <li><strong>H-30:</strong> Final intelligence update, weather assessment</li>
                                    <li><strong>H-15:</strong> Communications check, fire support coordination</li>
                                    <li><strong>H-Hour:</strong> Simultaneous multi-battalion assault initiation</li>
                                    <li><strong>H+30:</strong> Phase line ALPHA, initial objectives secured</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Multi-Battalion Coordination Requirements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Coordination:</strong> Artillery support, aviation assets, reinforcement</li>
                                    <li><strong>Polish Coordination:</strong> Urban access, civilian evacuation, cultural protection</li>
                                    <li><strong>International Coordination:</strong> Embassy security, diplomatic protocols</li>
                                    <li><strong>Emergency Services:</strong> Police, fire, medical, utilities coordination</li>
                                    <li><strong>Media Management:</strong> Information operations, international press</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Brigade Success Criteria & Metrics</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary:</strong> Warsaw city center secured, enemy neutralized</li>
                                    <li><strong>Secondary:</strong> Zero civilian casualties, cultural sites preserved</li>
                                    <li><strong>Tertiary:</strong> City functions restored within 6 hours</li>
                                    <li><strong>Timeline:</strong> Brigade operation complete within 4 hours</li>
                                    <li><strong>Transition:</strong> Handover to Polish civil authorities</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(254, 240, 138, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fde047;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Brigade Contingency Planning</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Enemy Reinforcement:</strong> Division support, rapid withdrawal procedures</li>
                                    <li><strong>Mass Casualties:</strong> Medical surge, evacuation procedures</li>
                                    <li><strong>Infrastructure Damage:</strong> Engineering assessment, alternative routes</li>
                                    <li><strong>International Incident:</strong> Diplomatic protocols, escalation procedures</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Eighth Row: Brigade Annexes & Intelligence Requirements -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Brigade Annexes A-L, T -->
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
                                ANNEXES A-L, T - Brigade Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive brigade-level annexes supporting Operation WARSAW STORM with detailed urban assault operations and Polish coalition integration.
                            </p>

                            <div style="background-color: rgba(6, 182, 212, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex A - Task Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1st Battalion:</strong> 850 personnel, Old Town sector operations</li>
                                    <li><strong>2nd Battalion:</strong> 850 personnel, Financial district operations</li>
                                    <li><strong>3rd Battalion:</strong> 850 personnel, Government quarter operations</li>
                                    <li><strong>Polish Battalion:</strong> 150 personnel, cultural site specialists</li>
                                    <li><strong>Brigade Support:</strong> 935 personnel, logistics and fires</li>
                                    <li><strong>Brigade HQ:</strong> 85 personnel, command and control</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(14, 165, 233, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #0ea5e9; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">Annex B - Intelligence</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade S-2:</strong> 25 personnel, intelligence fusion center</li>
                                    <li><strong>Collection Assets:</strong> 12 RQ-11, urban sensors, Polish networks</li>
                                    <li><strong>HUMINT:</strong> Polish civilians, government officials, business leaders</li>
                                    <li><strong>Analysis:</strong> Real-time fusion, tactical intelligence products</li>
                                    <li><strong>Dissemination:</strong> Battalion commanders, real-time updates</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Annex C - Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 1:</strong> Multi-battalion urban assault, city center penetration</li>
                                    <li><strong>Decision Points:</strong> Enemy surrender, civilian evacuation complete</li>
                                    <li><strong>Branch Plans:</strong> Hasty defense, reinforcement operations</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Annex D - Fires</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Fires:</strong> 3 artillery batteries, precision engagement</li>
                                    <li><strong>Targeting:</strong> 5-minute deliberate, 1-minute dynamic</li>
                                    <li><strong>Munitions:</strong> Precision (98%), minimal collateral damage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Annex F - Engineer</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Engineer Support:</strong> 85 personnel, urban breaching operations</li>
                                    <li><strong>Capabilities:</strong> Building breaching, obstacle reduction, route clearance</li>
                                    <li><strong>Polish Support:</strong> Urban expertise, structural engineering knowledge</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Annex L - Reconnaissance & Surveillance</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Reconnaissance:</strong> Urban surveillance, enemy disposition monitoring</li>
                                    <li><strong>Surveillance:</strong> Continuous coverage, real-time intelligence</li>
                                    <li><strong>Polish Integration:</strong> Local knowledge networks, surveillance assets</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Brigade Intelligence Requirements & Assessment -->
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
                                Brigade Intelligence Requirements & Assessment
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive intelligence requirements and threat assessment for Operation WARSAW STORM with real-time collection and multi-battalion analysis.
                            </p>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Priority Intelligence Requirements (PIR)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>PIR 1:</strong> Enemy 1st Motorized Battalion disposition across city center</li>
                                    <li><strong>PIR 2:</strong> Civilian population (1.8M total) evacuation status and locations</li>
                                    <li><strong>PIR 3:</strong> Critical infrastructure status (power, water, communications)</li>
                                    <li><strong>PIR 4:</strong> Enemy reinforcement capabilities from surrounding areas</li>
                                    <li><strong>PIR 5:</strong> International diplomatic presence and security requirements</li>
                                    <li><strong>PIR 6:</strong> Polish military and civil authority coordination status</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Brigade Collection Requirements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Visual Surveillance:</strong> High-rise buildings, major intersections, bridges</li>
                                    <li><strong>Electronic Surveillance:</strong> Communications intercept, urban networks</li>
                                    <li><strong>Human Intelligence:</strong> Polish contacts, business leaders, government officials</li>
                                    <li><strong>Technical Intelligence:</strong> City infrastructure, utilities, transportation systems</li>
                                    <li><strong>Open Source:</strong> International media, social media, government statements</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #991b1b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Brigade Threat Assessment Matrix</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>High Threat:</strong> Government quarter (2,850 enemy personnel)</li>
                                    <li><strong>Medium Threat:</strong> Financial district (1,850 personnel), Old Town (1,250 personnel)</li>
                                    <li><strong>Low Threat:</strong> Residential areas (850 personnel), commercial zones</li>
                                    <li><strong>Civilian Risk:</strong> Very High (1.8M civilians), mass evacuation required</li>
                                    <li><strong>Infrastructure Risk:</strong> High (UNESCO sites), international preservation priority</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(153, 27, 27, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #b91c1c;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Real-Time Intelligence Cycle</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>H-120:</strong> Final intelligence preparation, international coordination</li>
                                    <li><strong>H-60:</strong> Enemy disposition update, civilian evacuation status</li>
                                    <li><strong>H-30:</strong> Last-minute changes, weather and infrastructure assessment</li>
                                    <li><strong>H-Hour:</strong> Real-time tactical updates, multi-battalion coordination</li>
                                    <li><strong>H+60:</strong> Battle damage assessment, civilian casualty reports</li>
                                    <li><strong>H+120:</strong> Operation assessment, transition to civil authority</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED//FOUO - Brigade Level OPORD Example - Operation WARSAW STORM - FM 5-0 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
