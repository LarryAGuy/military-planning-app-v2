/**
 * OPORD Examples - Corps Level
 * UNCLASSIFIED content for corps-level OPORD examples
 * Follows FM 5-0 standards with realistic unit designations
 */

export const corpsExampleModule = {
    id: 'examples-corps',
    title: 'Corps Level OPORD Example',
    echelon: 'corps',
    level: 'tactical',
    classification: 'UNCLASSIFIED//FOUO',

    getContent: function() {
        return `
            <!-- Corps Level Complete OPORD Example - Operation STEEL RESOLVE -->
            <div id="corps-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-shield" style="margin-right: 8px; color: #dc2626; font-size: 16px;"></i>
                        OPERATION ORDER 24-025 (STEEL RESOLVE) - Corps Level
                    </h3>
                    <p style="color: #fca5a5; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - V Corps, U.S. Army Europe, Operation IRON THUNDER
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">161200ZDEC24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">CP PATTON, Poznan, Poland</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">Northern Poland Sector</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-0, FM 3-92</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:250,000 European Series</span>
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

                    <!-- Section 1: Situation - Corps Area of Operations -->
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
                                1. SITUATION - Corps Area of Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - V Corps AOR encompasses 185,000 km² across Northern Poland with critical ports, infrastructure, and population centers.
                            </p>

                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Corps Boundaries & Geographic Scope</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Baltic Sea coast (54°30'N)</li>
                                    <li>South: Carpathian foothills (49°45'N)</li>
                                    <li>East: Bug River (23°30'E)</li>
                                    <li>West: Oder River (14°30'E)</li>
                                    <li>Region: Northern Poland, parts of eastern Germany</li>
                                    <li>Major Cities: Warsaw, Gdansk, Poznan, Wroclaw, Szczecin</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Critical Infrastructure & Military Installations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Military Bases: Poznan, Drawsko Pomorskie, Zagan, Powidz</li>
                                    <li>Ports: Gdansk (Baltic strategic), Szczecin (Oder access)</li>
                                    <li>Airfields: 6 military, 18 civilian (tactical airlift capable)</li>
                                    <li>Transportation: A1/A2 motorways, rail networks, Vistula waterway</li>
                                    <li>Power Grid: 12 GW generation, coal plants (6), nuclear (1)</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Terrain & Weather Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Climate: Continental, temperatures -8°C to 25°C</li>
                                    <li>Winter Season: Dec-Feb, ground operations impact</li>
                                    <li>Terrain: Plains (60%), forests (25%), urban/industrial (15%)</li>
                                    <li>Hydrology: Vistula River, Oder River, Baltic Sea access</li>
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
                                a. Enemy Forces - 2nd Opposition Division
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Enemy 2nd Division with 35,000 personnel, mechanized capabilities, and integrated air defense in Northern Poland sector.
                            </p>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Division Level</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Ground Forces: 2nd Division (35K personnel), 285 MBTs, 420 IFVs</li>
                                    <li>Air Forces: 65 aircraft (28 fighters, 18 attack, 12 transport, 7 rotary)</li>
                                    <li>Naval Forces: 3 surface vessels, coastal defense elements</li>
                                    <li>Special Operations: 650 personnel across 2 units</li>
                                    <li>Militia Forces: 8,500 irregular fighters, 6 affiliated groups</li>
                                    <li>Cyber Units: Division-level cyber warfare capabilities</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Division Defense Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Air Defense: 8 SAM sites, 35 MANPADS, integrated network</li>
                                    <li>Coastal Defense: 4 anti-ship missile batteries</li>
                                    <li>Electronic Warfare: 2 divisional jammers, GPS denial</li>
                                    <li>Cyber Warfare: Infrastructure targeting, divisional scope</li>
                                    <li>IED Networks: Urban/rural placement, divisional coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action Assessment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Most Likely COA:</strong> Defensive operations with Warsaw/Gdansk strongholds</li>
                                    <li><strong>Most Dangerous COA:</strong> Coordinated attacks on ports and airfields</li>
                                    <li><strong>Asymmetric Options:</strong> Cyber attacks, IED campaigns, militia activation</li>
                                    <li><strong>Withdrawal Options:</strong> Phased withdrawal to prepared positions</li>
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
                                b. Friendly Forces - Corps & Supporting Elements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-division corps with 65,000 personnel, integrated command structure, and comprehensive tactical capabilities across Northern Poland Sector.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Army Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Army Command:</strong> Operation IRON THUNDER operational guidance</li>
                                    <li><strong>Joint Support:</strong> Air component, naval support, special operations</li>
                                    <li><strong>Coalition Command:</strong> NATO integration, multinational coordination</li>
                                    <li><strong>Regional Partners:</strong> 8 NATO nations, 4 partner nations</li>
                                    <li><strong>Theater Support:</strong> Strategic assets, logistics network</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Eastern Corps:</strong> Baltic operations, logistics coordination</li>
                                    <li><strong>Western Corps:</strong> German border operations, strategic reserve</li>
                                    <li><strong>Air Support:</strong> Regional air operations, close air support</li>
                                    <li><strong>Naval Support:</strong> Baltic Sea operations, amphibious capability</li>
                                    <li><strong>Special Operations:</strong> Corps SOF, reconnaissance operations</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Corps Forces & Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Forces:</strong> 2 divisions (1st Armored, 3rd Infantry), 65,000 personnel</li>
                                    <li><strong>Corps Assets:</strong> Artillery, aviation, engineers, intelligence</li>
                                    <li><strong>Coalition Forces:</strong> 15,000 allied personnel, specialized capabilities</li>
                                    <li><strong>Support Elements:</strong> 12 tactical bases, regional logistics</li>
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
                                c. Attachments and Detachments - Corps Force Modifications
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Corps-level force modifications for Operation STEEL RESOLVE with specialized capabilities and coalition integration.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Attached to Corps</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Army Assets:</strong> 17th Field Artillery Brigade</li>
                                    <li><strong>Aviation Support:</strong> 4th Combat Aviation Brigade</li>
                                    <li><strong>Engineer Support:</strong> 36th Engineer Brigade</li>
                                    <li><strong>Intelligence Support:</strong> Military Intelligence Battalion</li>
                                    <li><strong>Coalition Forces:</strong> Polish 11th Armoured Cavalry Division</li>
                                    <li><strong>Special Operations:</strong> Special Forces Operational Detachment</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Detached from Corps</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Army Reserve:</strong> 2nd Armored Brigade Combat Team (to Army)</li>
                                    <li><strong>Western Operations:</strong> 1st Cavalry Regiment (to Western Corps)</li>
                                    <li><strong>Training Mission:</strong> Military Transition Team elements</li>
                                    <li><strong>Homeland Support:</strong> Civil Affairs elements</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Coalition Integration & Command Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>NATO Integration:</strong> Multinational division headquarters</li>
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
                                d. Assumptions - Corps Planning Assumptions
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Critical corps-level assumptions for Operation STEEL RESOLVE planning and execution across Northern Poland Sector.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Tactical & Coalition Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Army Support:</strong> Army provides fires and logistics per timeline</li>
                                    <li><strong>Coalition Unity:</strong> Polish forces maintain operational commitment</li>
                                    <li><strong>Air Support:</strong> Joint air component provides close air support</li>
                                    <li><strong>Naval Support:</strong> Baltic fleet maintains sea control</li>
                                    <li><strong>Intelligence Flow:</strong> Army intelligence fusion remains effective</li>
                                    <li><strong>Logistics Support:</strong> Regional supply lines remain secure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Environmental & Operational Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Weather Conditions:</strong> Winter operations capability maintained</li>
                                    <li><strong>Civilian Population:</strong> 12 million civilians remain in sector</li>
                                    <li><strong>Infrastructure:</strong> Baltic ports remain functional</li>
                                    <li><strong>Enemy Capabilities:</strong> 2nd Division maintains current strength</li>
                                    <li><strong>Force Generation:</strong> Divisions deploy per established timelines</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Risk Mitigation & Contingencies</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Assumption Failure:</strong> Branch plans for coalition withdrawal</li>
                                    <li><strong>Port Damage:</strong> Alternative logistics routes identified</li>
                                    <li><strong>Civilian Evacuation:</strong> Humanitarian coordination mechanisms</li>
                                    <li><strong>Weather Delays:</strong> Extended timeline contingencies</li>
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
                                e. Environmental Considerations - Sector OAKOC Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive environmental analysis for Northern Poland Sector operations including Baltic coastal considerations.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Observation & Fields of Fire (O)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Coastal Observation:</strong> Baltic Sea visibility, port areas</li>
                                    <li><strong>Weather Impact:</strong> Winter visibility 1-3km, frequent fog</li>
                                    <li><strong>Urban Areas:</strong> Gdansk, Szczecin metropolitan areas</li>
                                    <li><strong>Electronic Environment:</strong> Dense coastal radar, communications</li>
                                    <li><strong>Surveillance Assets:</strong> Corps UAV coverage, coastal sensors</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Avenues of Approach & Key Terrain (AK)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Coastal Approaches:</strong> Baltic Sea routes, amphibious landing sites</li>
                                    <li><strong>Key Terrain:</strong> Gdansk port, Szczecin port, coastal highways</li>
                                    <li><strong>Mobility Corridors:</strong> Coastal plains, river valleys</li>
                                    <li><strong>Chokepoints:</strong> Port entrances, major bridges, urban centers</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Obstacles & Cover/Concealment (OC)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Natural Obstacles:</strong> Baltic Sea, rivers, winter weather</li>
                                    <li><strong>Man-made Obstacles:</strong> Port facilities, urban areas</li>
                                    <li><strong>Coastal Cover:</strong> Forested areas, industrial complexes</li>
                                    <li><strong>Civil Considerations:</strong> 12 million population, refugee flows</li>
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
                                f. Time and Space - Corps Tactical Factors
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Corps-level time and space considerations for Operation STEEL RESOLVE across Northern Poland Sector.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Corps Timeline & Tactical Phases</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Planning Time:</strong> 30 days tactical planning, 15 days execution prep</li>
                                    <li><strong>Deployment Phase:</strong> 21 days division deployment and staging</li>
                                    <li><strong>Operations Phase:</strong> 45 days major combat operations</li>
                                    <li><strong>Transition Phase:</strong> 90 days stability operations</li>
                                    <li><strong>Total Duration:</strong> 6 months tactical commitment</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Corps Space & Geographic Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Corps AOR:</strong> 185,000 km² Northern Poland Sector</li>
                                    <li><strong>Tactical Depth:</strong> 450 km maximum extent</li>
                                    <li><strong>Coalition Span:</strong> 8 NATO nations, 4 partners</li>
                                    <li><strong>Population Density:</strong> 12 million civilians in AOR</li>
                                    <li><strong>Infrastructure:</strong> Coastal ports, highway networks</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Critical Time-Space Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Decision Cycles:</strong> Corps 12 hours, division 6 hours</li>
                                    <li><strong>Logistics Flow:</strong> 2-day tactical resupply cycle</li>
                                    <li><strong>Coalition Coordination:</strong> 12-hour consensus building</li>
                                    <li><strong>Information Operations:</strong> Regional information environment</li>
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
                                Section 1 Summary - Corps Situation Analysis Complete
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive corps-level situation analysis completed with all required substeps per FM 5-0 standards.
                            </p>

                            <div style="background-color: rgba(107, 114, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6b7280; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Section 1 Substeps Completed</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1a. Enemy Forces:</strong> 2nd Opposition Division analysis ✓</li>
                                    <li><strong>1b. Friendly Forces:</strong> Corps and supporting elements ✓</li>
                                    <li><strong>1c. Attachments/Detachments:</strong> Corps force modifications ✓</li>
                                    <li><strong>1d. Assumptions:</strong> Corps planning assumptions ✓</li>
                                    <li><strong>1e. Environmental:</strong> Sector OAKOC analysis ✓</li>
                                    <li><strong>1f. Time and Space:</strong> Corps tactical factors ✓</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(156, 163, 175, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #9ca3af;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 6px 0;">Ready for Mission Development</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Corps situation analysis provides comprehensive foundation for tactical mission development and division-level planning per FM 5-0 requirements.
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
                                <i class="fas fa-bullseye" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                                2. MISSION - Tactical Objectives & Intent
                            </h4>

                            <div style="background-color: rgba(37, 99, 235, 0.3); padding: 12px; border-radius: 6px; border: 2px solid #2563eb; margin-bottom: 16px;">
                                <h5 style="font-weight: 700; color: white; font-size: 13px; margin: 0 0 8px 0; text-align: center;">MISSION STATEMENT</h5>
                                <p style="color: #dbeafe; font-size: 12px; line-height: 1.5; margin: 0; font-weight: 500;">
                                    V Corps conducts Operation STEEL RESOLVE as part of Army Operation IRON THUNDER from 161200ZDEC24 to 161200ZMAR25 to defeat enemy 2nd Division in AOR NORTHERN POLAND, secure critical infrastructure (Gdansk/Szczecin ports), and establish conditions for follow-on operations IOT support Army tactical objectives and enable Theater strategic success.
                                </p>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Commander's Intent - Tactical Vision</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Purpose:</strong> Defeat enemy 2nd Division, secure critical Baltic ports</li>
                                    <li><strong>Method:</strong> Combined arms operations, minimal infrastructure damage</li>
                                    <li><strong>End State:</strong> Enemy defeated, ports secure, follow-on operations enabled</li>
                                    <li><strong>Key Tasks:</strong> Destroy enemy forces, secure Gdansk/Szczecin, enable logistics flow</li>
                                    <li><strong>Risk Guidance:</strong> Accept tactical risk to preserve strategic infrastructure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Tactical Objectives & Success Criteria</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Military:</strong> Enemy 2nd Division neutralized, area control established</li>
                                    <li><strong>Infrastructure:</strong> Gdansk/Szczecin ports secured, operational capacity maintained</li>
                                    <li><strong>Geographic:</strong> A1/A2 motorways secured, logistics flow enabled</li>
                                    <li><strong>Temporal:</strong> Phase completion NLT specified dates, transition by D+90</li>
                                    <li><strong>Coalition:</strong> Polish Brigade integration, interoperability maintained</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Task Organization - Operation STEEL RESOLVE</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Main Effort:</strong> 1st Armored Division - Warsaw axis, enemy destruction</li>
                                    <li><strong>Supporting Effort:</strong> 3rd Infantry Division - Gdansk axis, port security</li>
                                    <li><strong>Economy of Force:</strong> 1st Cavalry Division - Poznan/Wroclaw, area security</li>
                                    <li><strong>Reserve:</strong> Polish 11th Armoured Brigade - Corps reserve, contingency response</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 3: Execution - Tactical Operations -->
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
                                <i class="fas fa-chess-board" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                3. EXECUTION - Three-Phase Tactical Plan
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Combined arms operations employing 3 divisions across three sequential phases aligned with Army Operation IRON THUNDER.
                            </p>

                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Phase 1: Tactical Shaping (D-Day to D+15)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1st AD:</strong> Advance on Warsaw axis, fix enemy main body</li>
                                    <li><strong>3rd ID:</strong> Advance on Gdansk axis, secure port approaches</li>
                                    <li><strong>1st CAV:</strong> Screen Poznan/Wroclaw, economy of force</li>
                                    <li><strong>Air Operations:</strong> Establish air superiority, close air support</li>
                                    <li><strong>Information Operations:</strong> Tactical messaging, population preparation</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Phase 2: Decisive Operations (D+15 to D+45)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Combined Arms:</strong> Coordinated division attacks, enemy destruction</li>
                                    <li><strong>Urban Operations:</strong> Warsaw/Gdansk clearance, infrastructure protection</li>
                                    <li><strong>Port Security:</strong> Gdansk/Szczecin seizure, operational restoration</li>
                                    <li><strong>Reserve Employment:</strong> Polish Brigade commitment as required</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(52, 211, 153, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #34d399; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Phase 3: Exploitation & Transition (D+45-90)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Area Security:</strong> Population centers, critical infrastructure</li>
                                    <li><strong>Logistics Flow:</strong> Port operations, supply line security</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(110, 231, 183, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6ee7b7;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Coordinating Instructions & Decision Points</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>ROE:</strong> Matrix CHARLIE, escalation procedures, infrastructure protection</li>
                                    <li><strong>Decision Points:</strong> Phase transitions, reserve commitment, Polish integration</li>
                                    <li><strong>Coordination:</strong> Division boundaries, fire support coordination</li>
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

                    <!-- Section 4: Sustainment - Corps Logistics -->
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
                                4. SUSTAINMENT - Corps Logistics Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive sustainment operations supporting 55,000 personnel across Northern Poland AOR with tactical mobility and coalition integration.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Corps Sustainment Command & Tactical Mobility</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>3rd ESC:</strong> Corps sustainment command, 3.2K personnel</li>
                                    <li><strong>Tactical Mobility:</strong> 2 aerial ports (Poznan, Drawsko), 1 seaport (Gdansk)</li>
                                    <li><strong>Daily Throughput:</strong> 425 tons cargo, 75 passengers</li>
                                    <li><strong>Tactical Reserves:</strong> 30-day supply all classes</li>
                                    <li><strong>Distribution:</strong> 6 logistics support areas, 12 forward arming points</li>
                                    <li><strong>Host Nation Support:</strong> Polish/German Armed Forces coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Personnel & Health Service Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Total Strength:</strong> 55K (U.S. 45K, Polish 10K)</li>
                                    <li><strong>Replacement Flow:</strong> 185/month, tactical processing</li>
                                    <li><strong>R&R Operations:</strong> 14-day cycles, European rotation</li>
                                    <li><strong>Medical Command:</strong> 1.8K personnel, Role 2+ capability</li>
                                    <li><strong>Medical Facilities:</strong> 3 FSTs, 1 CSH (forward)</li>
                                    <li><strong>MEDEVAC:</strong> 6 UH-60M, 2 HH-60G, tactical coverage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Maintenance & Coalition Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Maintenance:</strong> 2 maintenance battalions, field/direct support</li>
                                    <li><strong>Equipment:</strong> 6.5K vehicles, 285 aircraft, 1.2K weapons systems</li>
                                    <li><strong>Polish Integration:</strong> Polish logistics support, interoperability</li>
                                    <li><strong>Contractor Support:</strong> 850 contractors, tactical augmentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Command & Control - Corps C2 Architecture -->
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
                                5. COMMAND & CONTROL - Corps C2 Architecture
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive command and control architecture supporting combined arms operations across Northern Poland AOR with coalition integration.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Command Structure & Locations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Corps Commander:</strong> LTG exercises OPCON over assigned divisions</li>
                                    <li><strong>Main CP:</strong> Poznan, Poland (primary command post)</li>
                                    <li><strong>Tactical CP:</strong> Warsaw, Poland (forward operations)</li>
                                    <li><strong>Alternate CP:</strong> Drawsko Pomorskie, Poland (continuity operations)</li>
                                    <li><strong>Command Relationships:</strong> OPCON to divisions, TACON for operations</li>
                                    <li><strong>Polish Integration:</strong> Polish liaison officers, interoperability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Signal & Communication Architecture</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary:</strong> SIPR/NIPR networks via Army, tactical coverage</li>
                                    <li><strong>Alternate:</strong> SATCOM (tactical), 285 Mbps bandwidth</li>
                                    <li><strong>Polish Networks:</strong> Polish tactical systems, interoperability</li>
                                    <li><strong>Communication Security:</strong> Type 1 encryption, tactical updates</li>
                                    <li><strong>Redundancy:</strong> Multiple pathways, tactical backup systems</li>
                                    <li><strong>Mobile Communications:</strong> Tactical satellite, HF backup</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Succession & Information Management</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Succession:</strong> 1) Corps CG, 2) DCG, 3) COS, 4) G-3 Director</li>
                                    <li><strong>Key Leaders:</strong> CG (Main CP), DCG (Tactical CP), Division CGs (AORs)</li>
                                    <li><strong>Information Management:</strong> CPCE, DCGS-A, Polish systems integration</li>
                                    <li><strong>Battle Rhythm:</strong> 6-hour updates, daily assessments</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Corps-Level Annexes Section -->
                <div style="margin-bottom: 24px;">
                    <h3 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-folder-open" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                        CORPS-LEVEL ANNEXES A-T (FM 5-0 ALPHABETICAL ORDER)
                    </h3>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 20px 0;">
                        UNCLASSIFIED//FOUO - Complete tactical-level annexes supporting Operation STEEL RESOLVE within Army Operation IRON THUNDER framework.
                    </p>

                    <!-- Annexes Grid - Row 1: A-B -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex A - Task Organization -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #06b6d4; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-sitemap" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX A - TASK ORGANIZATION
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(6, 182, 212, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Force Structure - 55,000 Personnel</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>1st AD (Main Effort):</strong> 15K personnel, 3 ABCTs, 1 CAB, Warsaw axis</li>
                                    <li><strong>3rd ID (Supporting):</strong> 14K personnel, 2 IBCTs, 1 SBCT, Gdansk axis</li>
                                    <li><strong>1st CAV (Economy):</strong> 16K personnel, 2 ABCTs, 1 CAB, Poznan/Wroclaw</li>
                                    <li><strong>Polish 11th Armoured Bde:</strong> 10K personnel, Leopard 2 tanks, Corps reserve</li>
                                    <li><strong>214th Fires Bde:</strong> 2.8K personnel, 36 M777, 18 HIMARS, 12 MLRS</li>
                                    <li><strong>108th ADA Bde:</strong> 2.2K personnel, 3 PATRIOT batteries, 12 SHORAD</li>
                                    <li><strong>3rd ESC:</strong> 3.2K personnel, sustainment operations</li>
                                    <li><strong>Medical Command:</strong> 1.8K personnel, Role 2+ medical support</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Annex B - Intelligence -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #ef4444; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-eye" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX B - INTELLIGENCE
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(239, 68, 68, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Priority Intelligence Requirements (PIR)</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li>Enemy 2nd Division disposition: 2 brigades Warsaw, 1 brigade Gdansk</li>
                                    <li>Opposition air defense: 8 SAM sites (4 SA-11, 4 SA-15), 35 MANPADS</li>
                                    <li>Critical infrastructure: Gdansk port (80% capacity), Szczecin (60%)</li>
                                    <li>Civilian population: 12M total, 850K potential refugees</li>
                                    <li>Polish Brigade readiness: 95% equipment, 100% personnel</li>
                                    <li>Weather: Winter storm probability 45% (Nov-Mar), 48-hour windows</li>
                                    <li>Enemy reserves: 1 mechanized brigade, 48-hour response time</li>
                                    <li>Logistics nodes: 6 major supply depots, 12 fuel sites</li>
                                </ul>
                                <div style="margin-top: 8px; padding: 6px; background-color: #374151; border-radius: 4px;">
                                    <p style="margin: 0; font-size: 11px;"><strong>Collection Assets:</strong> 4 ISR platforms (2 MQ-9, 1 U-2, 1 RC-135), HUMINT (6 teams), SIGINT (3 stations)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Annexes Grid - Row 2: C-D -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex C - Operations -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #16a34a; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-map" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX C - OPERATIONS
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(22, 163, 74, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Tactical Graphics & Phase Lines</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Phase Lines:</strong> PL STEEL (D-Day), PL RESOLVE (D+15), PL VICTORY (D+45)</li>
                                    <li><strong>Objectives:</strong> OBJ WARSAW (urban), OBJ GDANSK (port), OBJ POZNAN (airfield)</li>
                                    <li><strong>Decision Points:</strong> DP 1 (enemy reserves), DP 2 (Polish commitment)</li>
                                    <li><strong>Branch Plans:</strong> IRON (reinforcement), STORM (winter weather), SHIELD (withdrawal)</li>
                                    <li><strong>Sequel Plans:</strong> Stability operations, port restoration</li>
                                    <li><strong>Boundaries:</strong> 1st AD (north), 3rd ID (southeast), 1st CAV (west)</li>
                                    <li><strong>Control Measures:</strong> 3 checkpoints, 6 battle positions, 4 assembly areas</li>
                                    <li><strong>Coordination:</strong> Fire support coordination line, no-fire areas</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Annex D - Fires -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #f59e0b; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-crosshairs" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX D - FIRES
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(245, 158, 11, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Fires & Targeting</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Priority Targets:</strong> 12 C2 nodes, 8 air defense sites, 6 logistics hubs</li>
                                    <li><strong>214th Fires Bde:</strong> 36 M777 howitzers, 18 HIMARS, 12 MLRS</li>
                                    <li><strong>Air Support:</strong> A-10C (12), F-16C (18), AH-64E (24)</li>
                                    <li><strong>Polish Fires:</strong> Krab self-propelled artillery (18 systems)</li>
                                    <li><strong>Targeting Cycle:</strong> 24-hour deliberate, 10-minute dynamic</li>
                                    <li><strong>Munitions:</strong> Precision (80%), conventional (20%), Polish integration</li>
                                    <li><strong>Fire Support:</strong> 3 FSCCs, division fire support elements</li>
                                    <li><strong>Coordination:</strong> Airspace deconfliction, fratricide prevention</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Annexes Grid - Row 3: E-F -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex E - Protection -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #dc2626; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-shield" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX E - PROTECTION
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(220, 38, 38, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">CBRN Defense & Force Protection</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>CBRN Defense:</strong> 3 decontamination sites, 85 detection systems</li>
                                    <li><strong>Force Protection:</strong> FPCON CHARLIE corps-wide, 125 security personnel</li>
                                    <li><strong>Physical Security:</strong> 3 division CPs, 6 logistics nodes, 4 airfields</li>
                                    <li><strong>Antiterrorism:</strong> Random security measures, threat assessment teams</li>
                                    <li><strong>Critical Assets:</strong> Corps CP, Polish Brigade, Gdansk port</li>
                                    <li><strong>Survivability:</strong> Hardened facilities, protective construction</li>
                                    <li><strong>Polish Integration:</strong> Polish force protection procedures</li>
                                    <li><strong>Civilian Protection:</strong> Population centers, refugee coordination</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Annex F - Engineer -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #f59e0b; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-hard-hat" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX F - ENGINEER
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(245, 158, 11, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Construction & Infrastructure</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Construction:</strong> 2 engineer battalions, 650 personnel</li>
                                    <li><strong>Mobility:</strong> Route clearance (A1/A2/S3 motorways), bridge construction</li>
                                    <li><strong>Countermobility:</strong> Defensive positions, obstacle emplacement</li>
                                    <li><strong>Infrastructure:</strong> Airfield repair (Poznan, Drawsko Pomorskie)</li>
                                    <li><strong>Survivability:</strong> Command post hardening, protective construction</li>
                                    <li><strong>Port Operations:</strong> Gdansk port rehabilitation, pier repair</li>
                                    <li><strong>Polish Engineers:</strong> Polish Engineers integration, specialized equipment</li>
                                    <li><strong>Utilities:</strong> Power grid restoration, water treatment facilities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Annexes Grid - Row 4: G-H -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex G - Civil Affairs -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #8b5cf6; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-handshake" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX G - CIVIL AFFAIRS
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(139, 92, 246, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">State Coordination & CMO</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Host Nation Coordination:</strong> Poland/Germany, Armed Forces liaison</li>
                                    <li><strong>Civil-Military Operations:</strong> 285 CA personnel, liaison teams</li>
                                    <li><strong>Governance Support:</strong> State/local government continuity</li>
                                    <li><strong>Economic Development:</strong> Port operations, commerce restoration</li>
                                    <li><strong>Cultural Awareness:</strong> Regional customs, historical sites</li>
                                    <li><strong>Population Support:</strong> 12M civilians, 850K refugee coordination</li>
                                    <li><strong>Polish Coordination:</strong> Polish civil affairs integration</li>
                                    <li><strong>Infrastructure:</strong> Essential services, transportation networks</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Annex H - Air Defense -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #2563eb; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-rocket" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX H - AIR DEFENSE
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(37, 99, 235, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Air & Missile Defense</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>PATRIOT Systems:</strong> 3 batteries (108th ADA Bde), corps coverage</li>
                                    <li><strong>SHORAD:</strong> 12 systems, point defense of critical assets</li>
                                    <li><strong>Early Warning:</strong> Corps radar network, satellite integration</li>
                                    <li><strong>Command & Control:</strong> AADC coordination, sector management</li>
                                    <li><strong>Counter-UAS:</strong> 8 systems, drone threat mitigation</li>
                                    <li><strong>Polish Integration:</strong> POPRAD air defense systems, interoperability</li>
                                    <li><strong>Coverage Areas:</strong> Warsaw, Gdansk, Poznan priority zones</li>
                                    <li><strong>Coordination:</strong> Airspace management, friendly aircraft deconfliction</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Annexes Grid - Row 5: I-J -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex I - Information Operations -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #8b5cf6; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-broadcast-tower" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX I - INFORMATION OPERATIONS
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(139, 92, 246, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Narrative & Target Audiences</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Corps Narrative:</strong> Restore order, protect civilians, enable commerce</li>
                                    <li><strong>Target Audiences:</strong> Enemy forces, 12M regional population</li>
                                    <li><strong>IO Capabilities:</strong> PSYOPS team, MILDEC, EW integration</li>
                                    <li><strong>Themes:</strong> Constitutional legitimacy, humanitarian focus, Polish partnership</li>
                                    <li><strong>Media Operations:</strong> Polish/German press, social media</li>
                                    <li><strong>Counter-Disinformation:</strong> Rapid response, fact verification</li>
                                    <li><strong>Polish Integration:</strong> Polish information operations coordination</li>
                                    <li><strong>Tactical Messaging:</strong> Division-level coordination, unified themes</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Annex J - Public Affairs -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #06b6d4; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-microphone" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX J - PUBLIC AFFAIRS
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(6, 182, 212, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Media Strategy & Communication</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Media Strategy:</strong> Daily briefings, embedded journalists (12)</li>
                                    <li><strong>Regional Messaging:</strong> Polish/German coordination</li>
                                    <li><strong>Corps Communication:</strong> Tactical audience engagement</li>
                                    <li><strong>Social Media:</strong> Real-time updates, counter-disinformation</li>
                                    <li><strong>Crisis Communication:</strong> Rapid response protocols</li>
                                    <li><strong>Polish PA:</strong> Polish media coordination, joint messaging</li>
                                    <li><strong>Local Media:</strong> Warsaw, Gdansk, Poznan press relations</li>
                                    <li><strong>Community Engagement:</strong> Town halls, public information</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Annexes Grid - Row 6: K-L -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex K - Civil Affairs Operations -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #10b981; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-heart" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX K - CIVIL AFFAIRS OPERATIONS
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(16, 185, 129, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Humanitarian Assistance & Governance</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Humanitarian Assistance:</strong> 850K displaced persons, 8 NGO coordination</li>
                                    <li><strong>Governance Support:</strong> Polish/German government continuity</li>
                                    <li><strong>Essential Services:</strong> Healthcare, education, utilities restoration</li>
                                    <li><strong>Economic Recovery:</strong> Banking system, port commerce restoration</li>
                                    <li><strong>Rule of Law:</strong> Judicial system, law enforcement support</li>
                                    <li><strong>Infrastructure:</strong> Critical services, A1/A2 transportation</li>
                                    <li><strong>Polish Coordination:</strong> Polish humanitarian assistance integration</li>
                                    <li><strong>Refugee Operations:</strong> 6 processing centers, temporary housing</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Annex L - Reconnaissance & Surveillance -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #06b6d4; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-satellite" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX L - RECONNAISSANCE & SURVEILLANCE
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(6, 182, 212, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps ISR Integration & Collection</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Corps ISR:</strong> Army coordination, tactical asset integration</li>
                                    <li><strong>Corps Assets:</strong> MQ-9 (2), U-2S (1), RC-135 (1)</li>
                                    <li><strong>Division ISR:</strong> MQ-1C (6), RQ-7 (9), ground sensors</li>
                                    <li><strong>Processing:</strong> 1 analysis center, 24/7 operations</li>
                                    <li><strong>Dissemination:</strong> Real-time feeds, tactical integration</li>
                                    <li><strong>Polish ISR:</strong> Polish reconnaissance assets coordination</li>
                                    <li><strong>Collection Management:</strong> PIR-driven, priority targeting</li>
                                    <li><strong>Tactical Integration:</strong> Division G-2 coordination, real-time sharing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Annexes Grid - Row 7: M-N -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex M - Assessment -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #f59e0b; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-chart-line" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX M - ASSESSMENT
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(245, 158, 11, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Assessment & Tactical Indicators</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>MOEs:</strong> Enemy defeat, port security, civilian protection</li>
                                    <li><strong>MOPs:</strong> Enemy attrition, territory control, force readiness</li>
                                    <li><strong>Corps Indicators:</strong> Tactical progress, logistical status</li>
                                    <li><strong>Assessment Framework:</strong> Daily reports, weekly reviews</li>
                                    <li><strong>Data Collection:</strong> 3 assessment teams, automated systems</li>
                                    <li><strong>Reporting:</strong> Army coordination, division-level updates</li>
                                    <li><strong>Polish Integration:</strong> Polish assessment procedures</li>
                                    <li><strong>Tactical Metrics:</strong> Phase line progress, objective seizure</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Annex N - Space Operations -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #8b5cf6; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-satellite-dish" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX N - SPACE OPERATIONS
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(139, 92, 246, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps SATCOM & Space-Based Support</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>SATCOM:</strong> Army allocation, 285 Mbps corps bandwidth</li>
                                    <li><strong>GPS:</strong> Precision navigation, timing, Polish integration</li>
                                    <li><strong>Space-Based ISR:</strong> Army asset coordination</li>
                                    <li><strong>Space Control:</strong> Situational awareness, debris tracking</li>
                                    <li><strong>Space Protection:</strong> Jamming resistance, backup systems</li>
                                    <li><strong>Corps Integration:</strong> Division-level space support coordination</li>
                                    <li><strong>Polish Space:</strong> Polish space capabilities integration</li>
                                    <li><strong>Tactical Applications:</strong> Navigation, timing, communications</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Annexes Grid - Row 8: P-Q -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex P - Host Nation Support -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #06b6d4; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-flag" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX P - HOST NATION SUPPORT
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(6, 182, 212, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">NATO Agreements & Capabilities</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>NATO Agreements:</strong> Poland/Germany, Article 5 framework</li>
                                    <li><strong>Polish Armed Forces:</strong> Territorial Defense, logistics coordination</li>
                                    <li><strong>Infrastructure Access:</strong> Baltic ports, airfields, facilities</li>
                                    <li><strong>Local Procurement:</strong> Fuel (60%), water (80%), supplies</li>
                                    <li><strong>Cultural Support:</strong> Polish liaisons, interpreters</li>
                                    <li><strong>Legal Framework:</strong> NATO/bilateral coordination, SOFA</li>
                                    <li><strong>German Support:</strong> Cross-border logistics coordination</li>
                                    <li><strong>Contractor Support:</strong> European services, specialized capabilities</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Annex Q - Knowledge Management -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #ef4444; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-database" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX Q - KNOWLEDGE MANAGEMENT
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(239, 68, 68, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Information Sharing & Lessons</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Information Sharing:</strong> SIPR/NIPR portals, Polish networks</li>
                                    <li><strong>Lessons Learned:</strong> After action reviews, best practices</li>
                                    <li><strong>Knowledge Repositories:</strong> Corps databases, archives</li>
                                    <li><strong>Training Integration:</strong> Professional military education</li>
                                    <li><strong>Innovation:</strong> Emerging technologies, adaptive solutions</li>
                                    <li><strong>Polish Sharing:</strong> Polish knowledge exchange</li>
                                    <li><strong>Tactical Lessons:</strong> Division-level sharing, real-time updates</li>
                                    <li><strong>Historical Analysis:</strong> Previous operations, comparative studies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Annexes Grid - Row 9: S-T -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex S - Special Technical Operations -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #dc2626; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-user-secret" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX S - SPECIAL TECHNICAL OPERATIONS
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(220, 38, 38, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Specialized Capabilities</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Specialized Capabilities:</strong> [DETAILS CLASSIFIED]</li>
                                    <li><strong>Technical Units:</strong> Collection, analysis, specialized support</li>
                                    <li><strong>Advanced Technologies:</strong> Emerging warfare capabilities</li>
                                    <li><strong>Coordination:</strong> Army assets, national agencies</li>
                                    <li><strong>Security:</strong> Compartmented access, need-to-know</li>
                                    <li><strong>Integration:</strong> Division-level specialized operations</li>
                                    <li><strong>Polish Coordination:</strong> Polish special technical capabilities</li>
                                    <li><strong>Tactical Applications:</strong> Division support, specialized missions</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Annex T - Cyber Electromagnetic Activities -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: #10b981; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-shield-alt" style="margin-right: 8px; font-size: 12px;"></i>
                                ANNEX T - CYBER ELECTROMAGNETIC ACTIVITIES
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(16, 185, 129, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Corps Cyber & EW Operations</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Cyber Operations:</strong> Defensive (24/7 monitoring), offensive coordination</li>
                                    <li><strong>Electronic Warfare:</strong> EA (jamming), EP (protection), ES (SIGINT)</li>
                                    <li><strong>Spectrum Management:</strong> Corps frequency coordination</li>
                                    <li><strong>Key Systems:</strong> CREW, SUTER, corps-level capabilities</li>
                                    <li><strong>Integration:</strong> Division EW coordination, army synchronization</li>
                                    <li><strong>Polish CEMA:</strong> Polish cyber/EW interoperability</li>
                                    <li><strong>Tactical Cyber:</strong> Division support, network defense</li>
                                    <li><strong>Threat Response:</strong> Rapid cyber incident response, recovery</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Complete Annexes Summary -->
                    <div style="background-color: #374151; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                        <h3 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; text-align: center;">
                            <i class="fas fa-check-circle" style="margin-right: 8px; color: #10b981; font-size: 14px;"></i>
                            COMPLETE CORPS ANNEXES COVERAGE - OPERATION STEEL RESOLVE
                        </h3>
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; font-size: 11px;">
                            <div>
                                <div style="color: #10b981; font-weight: 600; margin-bottom: 6px;">Annexes A-D</div>
                                <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                    <li><strong>A:</strong> Task Organization</li>
                                    <li><strong>B:</strong> Intelligence</li>
                                    <li><strong>C:</strong> Operations</li>
                                    <li><strong>D:</strong> Fires</li>
                                </ul>
                            </div>
                            <div>
                                <div style="color: #10b981; font-weight: 600; margin-bottom: 6px;">Annexes E-H</div>
                                <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                    <li><strong>E:</strong> Protection</li>
                                    <li><strong>F:</strong> Engineer</li>
                                    <li><strong>G:</strong> Civil Affairs</li>
                                    <li><strong>H:</strong> Air Defense</li>
                                </ul>
                            </div>
                            <div>
                                <div style="color: #10b981; font-weight: 600; margin-bottom: 6px;">Annexes I-L</div>
                                <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                    <li><strong>I:</strong> Information Operations</li>
                                    <li><strong>J:</strong> Public Affairs</li>
                                    <li><strong>K:</strong> Civil Affairs Operations</li>
                                    <li><strong>L:</strong> Reconnaissance & Surveillance</li>
                                </ul>
                            </div>
                            <div>
                                <div style="color: #10b981; font-weight: 600; margin-bottom: 6px;">Annexes M-T</div>
                                <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                    <li><strong>M:</strong> Assessment</li>
                                    <li><strong>N:</strong> Space Operations</li>
                                    <li><strong>P:</strong> Host Nation Support</li>
                                    <li><strong>Q:</strong> Knowledge Management</li>
                                    <li><strong>S:</strong> Special Technical Operations</li>
                                    <li><strong>T:</strong> Cyber Electromagnetic Activities</li>
                                </ul>
                            </div>
                        </div>
                        <div style="margin-top: 12px; padding: 12px; background-color: rgba(16, 185, 129, 0.2); border-radius: 6px; border: 1px solid #10b981;">
                            <p style="color: #6ee7b7; font-size: 12px; margin: 0; text-align: center; font-weight: 600;">
                                <i class="fas fa-award" style="margin-right: 6px;"></i>
                                Complete FM 5-0 November 2024 Corps-Level Annexes - 16 Tactical Annexes Fully Implemented
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED//FOUO - Corps Level OPORD Example - Operation STEEL RESOLVE - FM 5-0 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
