/**
 * OPORD Examples - Army Level
 * UNCLASSIFIED content for army-level OPORD examples
 * Follows FM 5-0 standards with realistic unit designations
 */

export const armyExampleModule = {
    id: 'examples-army',
    title: 'Army Level OPORD Example',
    echelon: 'army',
    level: 'operational',
    classification: 'UNCLASSIFIED//FOUO',

    getContent: function() {
        return `
            <!-- Army Level Complete OPORD Example - Operation IRON THUNDER -->
            <div id="army-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-star" style="margin-right: 8px; color: #f59e0b; font-size: 16px;"></i>
                        OPERATION ORDER 24-015 (IRON THUNDER) - Army Level
                    </h3>
                    <p style="color: #fbbf24; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - U.S. Army Europe and Africa, European Command
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">151000ZDEC24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">CP PATTON, Wiesbaden, Germany</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">Central European Region</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, FM 3-0, FM 3-93</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:500,000 European Series</span>
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

                    <!-- Section 1: Situation - Army Area of Operations -->
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
                                <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                                1. SITUATION - Army Area of Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Third Army AOR encompasses 850,000 km² across 8 states with critical infrastructure and strategic military installations.
                            </p>

                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Army Boundaries & Geographic Scope</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Baltic Sea coast (55°N)</li>
                                    <li>South: Alpine region (47°N)</li>
                                    <li>East: Polish border (15°E)</li>
                                    <li>West: Rhine River (6°E)</li>
                                    <li>Countries: Germany, Poland, Czech Republic, parts of Austria</li>
                                    <li>Major Cities: Berlin, Warsaw, Prague, Munich, Hamburg</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Critical Infrastructure & Military Installations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Military Bases: 35 NATO installations, 8 major training areas</li>
                                    <li>Ports: Hamburg, Bremen, Gdansk, Rostock (strategic mobility)</li>
                                    <li>Airfields: 25 military, 65 civilian (airlift capable)</li>
                                    <li>Transportation: Autobahn network, rail corridors, Danube waterway</li>
                                    <li>Power Grid: 45 GW generation, nuclear facilities (8)</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Environmental & Weather Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Climate: Continental, temperatures -10°C to 30°C</li>
                                    <li>Winter Season: Nov-Mar, ground operations impact</li>
                                    <li>Terrain: Plains (50%), forests (30%), urban/industrial (20%)</li>
                                    <li>Hydrology: Rhine, Elbe, Oder rivers, Baltic Sea access</li>
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
                                a. Enemy Forces - Regional Opposition Coalition
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-state opposition coalition with 95,000 personnel, integrated command structure, and asymmetric capabilities.
                            </p>

                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Army Level</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Ground Forces: 2 Divisions (95K personnel), 650 MBTs, 950 IFVs</li>
                                    <li>Air Forces: 185 aircraft (80 fighters, 45 attack, 35 transport, 25 rotary)</li>
                                    <li>Naval Forces: 8 surface vessels, 2 submarines, coastal defense</li>
                                    <li>Special Operations: 1,800 personnel across 4 units</li>
                                    <li>Militia Forces: 22,000 irregular fighters, 15 affiliated groups</li>
                                    <li>Cyber Units: Regional persistent threat capabilities</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(220, 38, 38, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Regional Defense Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Air Defense: 25 SAM sites, 95 MANPADS, regional network</li>
                                    <li>Coastal Defense: 12 anti-ship missile batteries</li>
                                    <li>Electronic Warfare: 4 regional jammers, GPS denial</li>
                                    <li>Cyber Warfare: Infrastructure targeting, regional scope</li>
                                    <li>IED Networks: Urban/rural placement, regional coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action Assessment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Most Likely COA:</strong> Defensive operations with urban strongholds</li>
                                    <li><strong>Most Dangerous COA:</strong> Coordinated attacks on critical infrastructure</li>
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
                                b. Friendly Forces - Army & Supporting Elements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-corps army with 185,000 personnel, integrated command structure, and comprehensive operational capabilities across Central European Region.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Theater Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Theater Command:</strong> Operation ALLIED RESOLVE strategic guidance</li>
                                    <li><strong>Joint Task Force:</strong> Multi-service coordination, strategic assets</li>
                                    <li><strong>NATO Command:</strong> Alliance integration, multinational coordination</li>
                                    <li><strong>Coalition Partners:</strong> 15 NATO nations, 8 partner nations</li>
                                    <li><strong>Strategic Support:</strong> EUCOM resources, global logistics</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Northern Army:</strong> Baltic operations, logistics coordination</li>
                                    <li><strong>Southern Army:</strong> Mediterranean operations, strategic reserve</li>
                                    <li><strong>Air Component:</strong> Theater air operations, strategic airlift</li>
                                    <li><strong>Naval Component:</strong> Maritime operations, amphibious support</li>
                                    <li><strong>Special Operations:</strong> Theater SOF, strategic reconnaissance</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Army Forces & Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Corps Forces:</strong> 3 corps (V, VII, XVIII), 185,000 personnel</li>
                                    <li><strong>Army Assets:</strong> Artillery, aviation, logistics, intelligence</li>
                                    <li><strong>Coalition Forces:</strong> 45,000 allied personnel, specialized capabilities</li>
                                    <li><strong>Support Elements:</strong> 25 strategic bases, regional logistics network</li>
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
                                c. Attachments and Detachments - Army Force Modifications
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Army-level force modifications for Operation IRON THUNDER with specialized capabilities and coalition integration.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Attached to Army</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Assets:</strong> 1st Intelligence Brigade (Theater)</li>
                                    <li><strong>Aviation Support:</strong> 12th Combat Aviation Brigade</li>
                                    <li><strong>Fires Support:</strong> 41st Field Artillery Brigade</li>
                                    <li><strong>Logistics Support:</strong> 21st Sustainment Command elements</li>
                                    <li><strong>Coalition Forces:</strong> German 1st Armoured Division</li>
                                    <li><strong>Special Operations:</strong> Joint Special Operations Task Force</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Detached from Army</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Reserve:</strong> 82nd Airborne Division (to Theater)</li>
                                    <li><strong>Southern Operations:</strong> 173rd Airborne Brigade (to Southern Army)</li>
                                    <li><strong>Training Mission:</strong> 1st Security Force Assistance Brigade</li>
                                    <li><strong>Homeland Support:</strong> National Guard elements</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Coalition Integration & Command Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>NATO Integration:</strong> Multinational corps headquarters</li>
                                    <li><strong>Bilateral Agreements:</strong> Host nation support packages</li>
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
                                d. Assumptions - Army Planning Assumptions
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Critical army-level assumptions for Operation IRON THUNDER planning and execution across Central European Region.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Operational & Coalition Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Theater Support:</strong> Theater command provides strategic assets per timeline</li>
                                    <li><strong>Coalition Unity:</strong> NATO partners maintain operational commitment</li>
                                    <li><strong>Host Nation Support:</strong> Regional allies provide basing and logistics</li>
                                    <li><strong>Air Superiority:</strong> Joint air component achieves air superiority</li>
                                    <li><strong>Intelligence Sharing:</strong> Coalition intelligence fusion remains effective</li>
                                    <li><strong>Logistics Flow:</strong> Strategic supply lines remain secure</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Tactical & Environmental Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Force Generation:</strong> Corps deploy per established timelines</li>
                                    <li><strong>Weather Conditions:</strong> Winter operations capability maintained</li>
                                    <li><strong>Civilian Population:</strong> 28 million civilians remain in place</li>
                                    <li><strong>Infrastructure:</strong> Key infrastructure remains functional</li>
                                    <li><strong>Enemy Capabilities:</strong> Opposition maintains current force levels</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Risk Mitigation & Branch Planning</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Assumption Failure:</strong> Branch plans for coalition fracture</li>
                                    <li><strong>Logistics Disruption:</strong> Alternative supply routes identified</li>
                                    <li><strong>Escalation Management:</strong> De-escalation procedures in place</li>
                                    <li><strong>Civilian Protection:</strong> Humanitarian coordination mechanisms</li>
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
                                e. Environmental Considerations - Regional OAKOC Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive environmental analysis for Central European Region operations including weather, terrain, and civil considerations.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Observation & Fields of Fire (O)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Regional Observation:</strong> Mixed terrain, urban/rural areas</li>
                                    <li><strong>Weather Impact:</strong> Winter visibility 2-5km, cloud cover 70%</li>
                                    <li><strong>Electronic Environment:</strong> Dense civilian/military spectrum</li>
                                    <li><strong>Surveillance Assets:</strong> UAV coverage, ground sensors</li>
                                    <li><strong>Information Domain:</strong> Regional media, social networks</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Avenues of Approach & Key Terrain (AK)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Regional Approaches:</strong> Highway networks, rail corridors</li>
                                    <li><strong>Key Terrain:</strong> Regional capitals, major airfields, ports</li>
                                    <li><strong>Mobility Corridors:</strong> River valleys, highway intersections</li>
                                    <li><strong>Chokepoints:</strong> Major bridges, mountain passes, urban areas</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Obstacles & Cover/Concealment (OC)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Natural Obstacles:</strong> Rivers, forests, winter weather</li>
                                    <li><strong>Man-made Obstacles:</strong> Urban areas, industrial complexes</li>
                                    <li><strong>Regional Cover:</strong> Forested areas, urban concealment</li>
                                    <li><strong>Civil Considerations:</strong> 28 million population, refugee potential</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Fourth Row: Time and Space Factors -->
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
                                f. Time and Space - Army Operational Factors
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Army-level time and space considerations for Operation IRON THUNDER across Central European Region.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Army Timeline & Operational Phases</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Planning Time:</strong> 60 days operational planning, 30 days tactical</li>
                                    <li><strong>Deployment Phase:</strong> 45 days corps deployment and staging</li>
                                    <li><strong>Operations Phase:</strong> 90 days major combat operations</li>
                                    <li><strong>Transition Phase:</strong> 180 days stability operations</li>
                                    <li><strong>Total Duration:</strong> 12 months operational commitment</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Army Space & Geographic Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Army AOR:</strong> 850,000 km² Central European Region</li>
                                    <li><strong>Operational Depth:</strong> 1,200 km maximum extent</li>
                                    <li><strong>Coalition Span:</strong> 15 NATO nations, 8 partners</li>
                                    <li><strong>Population Density:</strong> 28 million civilians in AOR</li>
                                    <li><strong>Infrastructure:</strong> Regional transportation, communication networks</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Critical Time-Space Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Decision Cycles:</strong> Army 24 hours, corps 12 hours</li>
                                    <li><strong>Logistics Flow:</strong> 3-day operational resupply cycle</li>
                                    <li><strong>Coalition Coordination:</strong> 24-hour consensus building</li>
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
                                Section 1 Summary - Army Situation Analysis Complete
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive army-level situation analysis completed with all required substeps per FM 5-0 standards.
                            </p>

                            <div style="background-color: rgba(107, 114, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6b7280; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Section 1 Substeps Completed</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1a. Enemy Forces:</strong> Regional opposition coalition analysis ✓</li>
                                    <li><strong>1b. Friendly Forces:</strong> Army and supporting elements ✓</li>
                                    <li><strong>1c. Attachments/Detachments:</strong> Army force modifications ✓</li>
                                    <li><strong>1d. Assumptions:</strong> Army planning assumptions ✓</li>
                                    <li><strong>1e. Environmental:</strong> Regional OAKOC analysis ✓</li>
                                    <li><strong>1f. Time and Space:</strong> Army operational factors ✓</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(156, 163, 175, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #9ca3af;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 6px 0;">Ready for Mission Development</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Army situation analysis provides comprehensive foundation for operational mission development and corps-level planning per FM 5-0 requirements.
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
                                2. MISSION - Operational Objectives & Intent
                            </h4>

                            <div style="background-color: rgba(37, 99, 235, 0.3); padding: 12px; border-radius: 6px; border: 2px solid #2563eb; margin-bottom: 16px;">
                                <h5 style="font-weight: 700; color: white; font-size: 13px; margin: 0 0 8px 0; text-align: center;">MISSION STATEMENT</h5>
                                <p style="color: #dbeafe; font-size: 12px; line-height: 1.5; margin: 0; font-weight: 500;">
                                    Third Army conducts Operation IRON THUNDER as part of Operation ALLIED RESOLVE from 151200ZDEC24 to 151200ZJUN25 to defeat regional opposition forces in AOR SOUTHEAST, restore constitutional order, secure critical infrastructure, and establish conditions for civil authority transition IOT support CENTCOM strategic objectives and achieve regional stability.
                                </p>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Commander's Intent - Operational Vision</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Purpose:</strong> Defeat opposition coalition, restore constitutional government</li>
                                    <li><strong>Method:</strong> Multi-domain operations, minimal civilian casualties, coalition integration</li>
                                    <li><strong>End State:</strong> Constitutional order restored, infrastructure secure, civil authority functioning</li>
                                    <li><strong>Key Tasks:</strong> Neutralize enemy forces, secure population centers, enable civil transition</li>
                                    <li><strong>Risk Guidance:</strong> Accept operational risk to minimize strategic/political risk</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Operational Objectives & Success Criteria</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Political:</strong> Constitutional government restoration, democratic processes</li>
                                    <li><strong>Military:</strong> Enemy force neutralization, area control, infrastructure security</li>
                                    <li><strong>Economic:</strong> Critical infrastructure protection, commerce restoration</li>
                                    <li><strong>Information:</strong> Narrative control, population support, media management</li>
                                    <li><strong>Timeline:</strong> Phase completion NLT specified dates, transition by D+180</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Task Organization - Operation IRON THUNDER</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Main Effort:</strong> III Corps - Ground operations, area control</li>
                                    <li><strong>Supporting Effort:</strong> XVIII Airborne Corps - Rapid response, special operations</li>
                                    <li><strong>Shaping Effort:</strong> I Corps - Information operations, civil affairs</li>
                                    <li><strong>Reserve:</strong> 82nd Airborne Division - Strategic reserve, contingency response</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 3: Execution - Campaign Design -->
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
                                3. EXECUTION - Four-Phase Campaign Plan
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-domain campaign employing joint/coalition forces across four sequential phases aligned with Theater Operation ALLIED RESOLVE.
                            </p>

                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Phase 1: Regional Shaping (D-15 to D-Day)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Force Deployment:</strong> 110K U.S. forces, 25K coalition forces</li>
                                    <li><strong>Information Operations:</strong> Strategic messaging, population preparation</li>
                                    <li><strong>Intelligence Preparation:</strong> ISR surge, target development</li>
                                    <li><strong>Civil Preparation:</strong> Humanitarian coordination, infrastructure assessment</li>
                                    <li><strong>Coalition Integration:</strong> Command structure, interoperability</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Phase 2: Decisive Operations (D-Day to D+60)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Ground Operations:</strong> Multi-axis advance, urban operations</li>
                                    <li><strong>Air Operations:</strong> Air superiority, close air support, interdiction</li>
                                    <li><strong>Special Operations:</strong> Direct action, reconnaissance, FID</li>
                                    <li><strong>Information Warfare:</strong> Cyber operations, electronic warfare</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(52, 211, 153, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #34d399; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Phase 3-4: Exploitation → Transition</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 3 (D+60-120):</strong> Area control, infrastructure security</li>
                                    <li><strong>Phase 4 (D+120-180):</strong> Civil authority transition, force reduction</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(110, 231, 183, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6ee7b7;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Coordinating Instructions & Decision Points</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>ROE:</strong> Matrix BRAVO, escalation procedures, civilian protection</li>
                                    <li><strong>Decision Points:</strong> Phase transitions, reserve commitment</li>
                                    <li><strong>Coordination:</strong> Joint/coalition deconfliction, airspace management</li>
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

                    <!-- Section 4: Sustainment - Army Logistics -->
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
                                4. SUSTAINMENT - Army Logistics Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive sustainment operations supporting 135,000 personnel across 8-state AOR with strategic mobility and coalition integration.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Army Logistics Command & Strategic Mobility</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>13th ESC:</strong> Army sustainment command, 8K personnel</li>
                                    <li><strong>Strategic Mobility:</strong> 4 aerial ports, 2 seaports (Hamburg, Gdansk)</li>
                                    <li><strong>Daily Throughput:</strong> 850 tons cargo, 150 passengers</li>
                                    <li><strong>Strategic Reserves:</strong> 45-day supply all classes</li>
                                    <li><strong>Distribution:</strong> 12 logistics support areas, forward arming points</li>
                                    <li><strong>Host Nation Support:</strong> 4 countries, NATO agreements, host nation forces</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Personnel & Health Service Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Total Strength:</strong> 135K (U.S. 110K, Coalition 25K)</li>
                                    <li><strong>Replacement Flow:</strong> 450/month, regional processing</li>
                                    <li><strong>R&R Operations:</strong> 14-day cycles, CONUS rotation</li>
                                    <li><strong>Medical Command:</strong> 4.5K personnel, Role 3 capability</li>
                                    <li><strong>Medical Facilities:</strong> 1 CSH (248 beds), 4 FSTs</li>
                                    <li><strong>MEDEVAC:</strong> 12 UH-60M, 4 HH-60G, regional coverage</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Maintenance & Coalition Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Maintenance:</strong> 3 maintenance battalions, field/sustainment level</li>
                                    <li><strong>Equipment:</strong> 15K vehicles, 850 aircraft, 2.5K weapons systems</li>
                                    <li><strong>Coalition Support:</strong> POL/GER/CZE logistics integration</li>
                                    <li><strong>Contractor Support:</strong> 2.8K contractors, logistics augmentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Command & Control - Army C2 Architecture -->
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
                                5. COMMAND & CONTROL - Army C2 Architecture
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive command and control architecture supporting multi-domain operations across 8-state AOR with coalition integration.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Command Structure & Locations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Army Commander:</strong> LTG exercises OPCON over all assigned forces</li>
                                    <li><strong>Main CP:</strong> Wiesbaden, Germany (primary command post)</li>
                                    <li><strong>Forward CP:</strong> Poznan, Poland (tactical operations)</li>
                                    <li><strong>Alternate CP:</strong> Grafenwoehr, Germany (continuity operations)</li>
                                    <li><strong>Command Relationships:</strong> OPCON to corps, TACON for operations</li>
                                    <li><strong>Coalition Integration:</strong> POL/GER/CZE liaison officers</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Signal & Communication Architecture</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary:</strong> SIPR/NIPR networks via DISA, regional coverage</li>
                                    <li><strong>Alternate:</strong> SATCOM (DSCS constellation), 850 Mbps bandwidth</li>
                                    <li><strong>Coalition Networks:</strong> CENTRIXS, POL/GER/CZE integration</li>
                                    <li><strong>Communication Security:</strong> Type 1 encryption, daily updates</li>
                                    <li><strong>Redundancy:</strong> Multiple pathways, backup systems</li>
                                    <li><strong>Mobile Communications:</strong> Tactical satellite, HF backup</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Succession & Information Management</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Succession:</strong> 1) Army CG, 2) DCG, 3) COS, 4) G-3 Director</li>
                                    <li><strong>Key Leaders:</strong> CG (Main CP), DCG (Forward CP), Corps CGs (AORs)</li>
                                    <li><strong>Information Management:</strong> CPCE, DCGS-A, coalition systems</li>
                                    <li><strong>Battle Rhythm:</strong> Daily updates, weekly assessments</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Army-Level Annexes Section -->
                <div style="margin-bottom: 24px;">
                    <h3 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-folder-open" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                        ARMY-LEVEL ANNEXES A-T (FM 5-0 ALPHABETICAL ORDER)
                    </h3>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 20px 0;">
                        UNCLASSIFIED//FOUO - Complete operational-level annexes supporting Operation IRON THUNDER within Theater Operation ALLIED RESOLVE framework.
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
                                    <p style="margin: 0; font-weight: 600;">Army Force Structure - 135,000 Personnel</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>III Corps (Main Effort):</strong> 1st AD (15K), 3rd ID (14K), 1st CAV (16K) = 45K</li>
                                    <li><strong>XVIII Airborne Corps:</strong> 82nd ABN (18K), 101st AASLT (17K) = 35K</li>
                                    <li><strong>I Corps (Shaping):</strong> 25th ID (13K), 4th ID (14K) = 27K</li>
                                    <li><strong>Army Assets:</strong> 18th Fires Bde (3.2K), 35th ADA Bde (2.8K)</li>
                                    <li><strong>Coalition Forces:</strong> POL 11th Armoured Div (12K), GER 10th Pz Div (14K), CZE 4th Bde (4K)</li>
                                    <li><strong>Special Operations:</strong> 75th RGR (3.5K), 5th/7th SFG (2.8K)</li>
                                    <li><strong>Sustainment:</strong> 13th ESC (8K), Medical Command (4.5K)</li>
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
                                    <li>Enemy 2nd/4th Divisions disposition in POL/GER/CZE sectors</li>
                                    <li>Opposition air defense network effectiveness (25 SAM sites)</li>
                                    <li>Critical infrastructure: 8 nuclear plants, 6 major ports status</li>
                                    <li>Civilian population (28M) movement patterns, refugee flows</li>
                                    <li>Coalition interoperability: POL/GER/CZE integration readiness</li>
                                    <li>Weather: Winter storm impact (Nov-Mar), operational windows</li>
                                </ul>
                                <div style="margin-top: 8px; padding: 6px; background-color: #374151; border-radius: 4px;">
                                    <p style="margin: 0; font-size: 11px;"><strong>Collection Assets:</strong> 8 ISR platforms (4 MQ-9, 2 U-2, 2 RC-135), HUMINT (12 teams), SIGINT (6 stations)</p>
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
                                    <p style="margin: 0; font-weight: 600;">Operational Graphics & Phase Lines</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Phase Lines:</strong> PL IRON (D-Day), PL THUNDER (D+30), PL VICTORY (D+90)</li>
                                    <li><strong>Objectives:</strong> OBJ WARSAW (urban), OBJ GDANSK (port), OBJ BERLIN (air)</li>
                                    <li><strong>Decision Points:</strong> DP 1 (air superiority), DP 2 (coalition readiness)</li>
                                    <li><strong>Branch Plans:</strong> STEEL (WMD response), STORM (winter weather), SHIELD (withdrawal)</li>
                                    <li><strong>Sequel Plans:</strong> Post-conflict stability, civil authority transition</li>
                                    <li><strong>Boundaries:</strong> V Corps (POL/N), XVIII ABN (GER/S), I Corps (CZE/AUT)</li>
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
                                    <p style="margin: 0; font-weight: 600;">Army Fires & Joint Targeting</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Priority Targets:</strong> 25 C2 nodes, 65 air defense sites, 15 logistics hubs</li>
                                    <li><strong>Army Fires:</strong> 18th Fires Bde (72 M777, 36 HIMARS, 24 MLRS)</li>
                                    <li><strong>Air Support:</strong> A-10C (24), F-16C (36), AH-64E (48)</li>
                                    <li><strong>Naval Fires:</strong> 1 DDG, 96 Tomahawk missiles available</li>
                                    <li><strong>Targeting Cycle:</strong> 48-hour deliberate, 15-minute dynamic</li>
                                    <li><strong>Munitions:</strong> Precision (75%), conventional (25%), CAS integration</li>
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
                                    <li><strong>CBRN Defense:</strong> 6 decontamination sites, 180 detection systems</li>
                                    <li><strong>Force Protection:</strong> FPCON BRAVO army-wide, 285 security personnel</li>
                                    <li><strong>Physical Security:</strong> Critical asset protection, perimeter defense</li>
                                    <li><strong>Antiterrorism:</strong> Threat assessment teams, random security measures</li>
                                    <li><strong>Critical Assets:</strong> 3 Corps CPs, 8 logistics nodes, 12 airfields</li>
                                    <li><strong>Survivability:</strong> Hardened facilities, protective construction</li>
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
                                    <p style="margin: 0; font-weight: 600;">Army Construction & Infrastructure</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Construction:</strong> 4 engineer battalions, 1,200 personnel</li>
                                    <li><strong>Mobility:</strong> Route clearance (A1/A2 motorways), bridge construction</li>
                                    <li><strong>Countermobility:</strong> Defensive positions, obstacle emplacement</li>
                                    <li><strong>Infrastructure:</strong> Airfield repair (12 sites), port rehabilitation</li>
                                    <li><strong>Survivability:</strong> Command post hardening, protective construction</li>
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
                                    <li><strong>Host Nation Coordination:</strong> 4 countries, NATO agreements, host nation forces</li>
                                    <li><strong>Civil-Military Operations:</strong> 850 CA personnel, liaison teams</li>
                                    <li><strong>Governance Support:</strong> State/local government continuity</li>
                                    <li><strong>Economic Development:</strong> Infrastructure projects, commerce restoration</li>
                                    <li><strong>Cultural Awareness:</strong> Regional customs, historical sites</li>
                                    <li><strong>Population Support:</strong> 28M civilians, refugee coordination</li>
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
                                    <p style="margin: 0; font-weight: 600;">Army Air & Missile Defense</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>PATRIOT Systems:</strong> 6 batteries (35th ADA Bde), regional coverage</li>
                                    <li><strong>THAAD Integration:</strong> 1 battery, ballistic missile defense</li>
                                    <li><strong>SHORAD:</strong> 24 systems, point defense of critical assets</li>
                                    <li><strong>Early Warning:</strong> Regional radar network, satellite integration</li>
                                    <li><strong>Command & Control:</strong> AADC coordination, sector management</li>
                                    <li><strong>Counter-UAS:</strong> 18 systems, drone threat mitigation</li>
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
                                    <p style="margin: 0; font-weight: 600;">Army Narrative & Target Audiences</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Army Narrative:</strong> Restore constitutional order, protect civilians</li>
                                    <li><strong>Target Audiences:</strong> Enemy forces, 28M regional population</li>
                                    <li><strong>IO Capabilities:</strong> PSYOPS (4th POG), MILDEC, EW integration</li>
                                    <li><strong>Themes:</strong> Constitutional legitimacy, humanitarian focus</li>
                                    <li><strong>Media Operations:</strong> Regional press, social media coordination</li>
                                    <li><strong>Counter-Disinformation:</strong> Rapid response, fact verification</li>
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
                                    <p style="margin: 0; font-weight: 600;">Regional Media Strategy & Communication</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Media Strategy:</strong> Daily briefings, embedded journalists (25)</li>
                                    <li><strong>Regional Messaging:</strong> 8-state coordination, unified narrative</li>
                                    <li><strong>Army Communication:</strong> Regional audience engagement</li>
                                    <li><strong>Social Media:</strong> Real-time updates, counter-disinformation</li>
                                    <li><strong>Crisis Communication:</strong> Rapid response protocols</li>
                                    <li><strong>Coalition PA:</strong> POL/GER/CZE media coordination</li>
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
                                    <li><strong>Humanitarian Assistance:</strong> 850K displaced persons, 18 NGO coordination</li>
                                    <li><strong>Governance Support:</strong> State/local government continuity</li>
                                    <li><strong>Essential Services:</strong> Healthcare, education, utilities restoration</li>
                                    <li><strong>Economic Recovery:</strong> Banking system, commerce restoration</li>
                                    <li><strong>Rule of Law:</strong> Judicial system, law enforcement support</li>
                                    <li><strong>Infrastructure:</strong> Critical services, transportation networks</li>
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
                                    <p style="margin: 0; font-weight: 600;">Army ISR Integration & Collection</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Army ISR:</strong> Theater coordination, national asset integration</li>
                                    <li><strong>Army Assets:</strong> MQ-9 (4), U-2S (2), RC-135 (2)</li>
                                    <li><strong>Corps ISR:</strong> MQ-1C (12), RQ-7 (18), ground sensors</li>
                                    <li><strong>Processing:</strong> 2 analysis centers, 24/7 operations</li>
                                    <li><strong>Dissemination:</strong> Real-time feeds, tactical integration</li>
                                    <li><strong>Coalition ISR:</strong> POL/GER/CZE asset coordination</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Complete Annexes Summary -->
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
                                    <p style="margin: 0; font-weight: 600;">Army Assessment & Operational Indicators</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>MOEs:</strong> Regional stability, coalition unity, civilian protection</li>
                                    <li><strong>MOPs:</strong> Enemy attrition, territory control, force readiness</li>
                                    <li><strong>Army Indicators:</strong> Operational progress, logistical status</li>
                                    <li><strong>Assessment Framework:</strong> Weekly reports, bi-weekly reviews</li>
                                    <li><strong>Data Collection:</strong> 8 assessment teams, automated systems</li>
                                    <li><strong>Reporting:</strong> Theater coordination, national-level updates</li>
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
                                    <p style="margin: 0; font-weight: 600;">Army SATCOM & Space-Based Support</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>SATCOM:</strong> DSCS/WGS access, 850 Mbps army bandwidth</li>
                                    <li><strong>GPS:</strong> Precision navigation, timing, coalition integration</li>
                                    <li><strong>Space-Based ISR:</strong> Theater asset coordination</li>
                                    <li><strong>Space Control:</strong> Situational awareness, debris tracking</li>
                                    <li><strong>Space Protection:</strong> Jamming resistance, backup systems</li>
                                    <li><strong>Army Integration:</strong> Corps-level space support coordination</li>
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
                                    <p style="margin: 0; font-weight: 600;">State Agreements & Capabilities</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>NATO Agreements:</strong> 4 countries, NATO framework</li>
                                    <li><strong>Host Nation Forces:</strong> NATO support, logistics coordination</li>
                                    <li><strong>Infrastructure Access:</strong> Ports, airfields, facilities</li>
                                    <li><strong>Local Procurement:</strong> Fuel (65%), water (45%), supplies</li>
                                    <li><strong>Cultural Support:</strong> Regional liaisons, interpreters</li>
                                    <li><strong>Legal Framework:</strong> State/federal coordination, authorities</li>
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
                                    <p style="margin: 0; font-weight: 600;">Army Information Sharing & Lessons</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Information Sharing:</strong> SIPR/NIPR portals, coalition networks</li>
                                    <li><strong>Lessons Learned:</strong> After action reviews, best practices</li>
                                    <li><strong>Knowledge Repositories:</strong> Army databases, archives</li>
                                    <li><strong>Training Integration:</strong> Professional military education</li>
                                    <li><strong>Innovation:</strong> Emerging technologies, adaptive solutions</li>
                                    <li><strong>Coalition Sharing:</strong> POL/GER/CZE knowledge exchange</li>
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
                                    <p style="margin: 0; font-weight: 600;">Army Specialized Capabilities</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Specialized Capabilities:</strong> [DETAILS CLASSIFIED]</li>
                                    <li><strong>Technical Units:</strong> Collection, analysis, specialized support</li>
                                    <li><strong>Advanced Technologies:</strong> Emerging warfare capabilities</li>
                                    <li><strong>Coordination:</strong> Theater assets, national agencies</li>
                                    <li><strong>Security:</strong> Compartmented access, need-to-know</li>
                                    <li><strong>Integration:</strong> Corps-level specialized operations</li>
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
                                    <p style="margin: 0; font-weight: 600;">Army Cyber & EW Operations</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Cyber Operations:</strong> Defensive (24/7 monitoring), offensive coordination</li>
                                    <li><strong>Electronic Warfare:</strong> EA (jamming), EP (protection), ES (SIGINT)</li>
                                    <li><strong>Spectrum Management:</strong> Army frequency coordination</li>
                                    <li><strong>Key Systems:</strong> CREW, SUTER, army-level capabilities</li>
                                    <li><strong>Integration:</strong> Corps EW coordination, theater synchronization</li>
                                    <li><strong>Coalition CEMA:</strong> POL/GER/CZE interoperability</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Complete Annexes Summary -->
                    <div style="background-color: #374151; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                        <h3 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; text-align: center;">
                            <i class="fas fa-check-circle" style="margin-right: 8px; color: #10b981; font-size: 14px;"></i>
                            COMPLETE ARMY ANNEXES COVERAGE - OPERATION IRON THUNDER
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
                                Complete FM 5-0 November 2024 Army-Level Annexes - 16 Operational Annexes Implemented
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div style="background-color: #374151; border-radius: 6px; padding: 12px; text-align: center;">
                    <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                        UNCLASSIFIED//FOUO - Army Level OPORD Example - Operation IRON THUNDER - FM 5-0 Compliant
                    </p>
                </div>
            </div>
        `;
    }
};
