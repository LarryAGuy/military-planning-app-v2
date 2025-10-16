/**
 * OPORD Examples - Theater Level
 * UNCLASSIFIED content for theater-level OPORD examples
 * Follows FM 5-0 standards with realistic unit designations
 */

export const theaterExampleModule = {
    id: 'examples-theater',
    title: 'Theater Level OPORD Example',
    echelon: 'theater',
    level: 'strategic',
    classification: 'UNCLASSIFIED//FOUO',
    
    getContent: function() {
        return `
            <!-- Theater Level Complete OPORD Example - Operation ALLIED RESOLVE -->
            <div id="theater-example-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-globe" style="margin-right: 8px; color: #8b5cf6; font-size: 16px;"></i>
                        OPERATION ORDER 24-011 (ALLIED RESOLVE) - Theater Level
                    </h3>
                    <p style="color: #c4b5fd; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED//FOUO - U.S. European Command, Department of War
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px; margin-top: 12px;">
                        <div>
                            <strong style="color: #60a5fa;">DTG:</strong> <span style="color: #d1d5db;">301000ZNOV24</span><br>
                            <strong style="color: #60a5fa;">Location:</strong> <span style="color: #d1d5db;">EUCOM HQ, Stuttgart, Germany</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">AOR:</strong> <span style="color: #d1d5db;">European Command Theater</span><br>
                            <strong style="color: #60a5fa;">Time Zone:</strong> <span style="color: #d1d5db;">ZULU (UTC)</span>
                        </div>
                        <div>
                            <strong style="color: #60a5fa;">References:</strong> <span style="color: #d1d5db;">FM 5-0, JP 5-0, JP 3-0</span><br>
                            <strong style="color: #60a5fa;">Maps:</strong> <span style="color: #d1d5db;">1:5,000,000 European Series</span>
                        </div>
                    </div>
                </div>

                <!-- 2x2 Content Card Grid -->
                <div style="
                    display: grid; 
                    grid-template-columns: 1fr 1fr; 
                    gap: 16px; 
                    margin-bottom: 24px;
                    min-height: calc(100vh - 300px);
                ">

                    <!-- Section 1: Situation - Theater Area of Operations -->
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
                                <i class="fas fa-globe-americas" style="margin-right: 8px; color: #dc2626; font-size: 14px;"></i>
                                1. SITUATION - Theater Area of Responsibility
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - CENTCOM AOR encompasses 4.2 million km² across 20 countries with critical global strategic importance.
                            </p>
                            
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Theater Boundaries & Strategic Geography</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: 71°N Latitude (Arctic Ocean/Svalbard)</li>
                                    <li>South: 35°N Latitude (Mediterranean Sea)</li>
                                    <li>East: 60°E Longitude (Ural Mountains/Caspian Sea)</li>
                                    <li>West: 25°W Longitude (Atlantic Ocean/Iceland)</li>
                                    <li>Maritime: North Sea, Baltic Sea, Mediterranean Sea, Black Sea</li>
                                    <li>Critical Chokepoints: English Channel, Gibraltar, Bosphorus, Suez Canal</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Strategic Infrastructure & Key Terrain</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Energy Infrastructure: North Sea oil/gas, 15 nuclear plants, 3,200km pipelines</li>
                                    <li>Strategic Ports: Rotterdam, Hamburg, Antwerp, Portsmouth, 8 naval bases</li>
                                    <li>Airfields: 35 strategic airlift capable, 22 fighter-capable, 12 bomber-capable</li>
                                    <li>Communications: 25 satellite ground stations, 8 undersea cable landing points</li>
                                    <li>Power Grid: 185 GW generation capacity, 125,000km transmission lines</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Environmental Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Climate: Temperate oceanic, temperatures -15°C to 35°C, winter storms Oct-Mar</li>
                                    <li>Terrain: 45% plains, 35% hills/mountains, 20% urban/industrial</li>
                                    <li>Water Sources: Abundant freshwater, major rivers (Rhine, Danube, Thames)</li>
                                    <li>Seasonal Impact: Winter weather affects ground operations, North Sea storms</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Enemy Situation Card -->
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
                                a. Enemy Forces - Regional Coalition Threat
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Three-nation coalition with 450,000 personnel, integrated A2/AD capabilities, and asymmetric warfare capacity.
                            </p>
                            
                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle - Strategic Level</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Ground Forces: 12 Divisions (450K personnel), 2,800 MBTs, 3,500 IFVs</li>
                                    <li>Air Forces: 850 aircraft (320 fighters, 180 attack, 120 transport, 230 rotary)</li>
                                    <li>Naval Forces: 45 surface vessels, 12 submarines, 25 fast attack craft</li>
                                    <li>Strategic Forces: 45 ballistic missiles (range 300-2000km)</li>
                                    <li>Special Operations: 8,500 personnel across 12 units</li>
                                    <li>Proxy Forces: 25,000 irregular fighters, 15 affiliated groups</li>
                                </ul>
                            </div>
                            
                            <div style="background-color: rgba(220, 38, 38, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">A2/AD Capabilities & Threat Systems</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Integrated Air Defense: 120 SAM sites (S-300/400 equivalent), 450 MANPADS</li>
                                    <li>Coastal Defense: 85 anti-ship missile batteries, 12 submarine bases</li>
                                    <li>Electronic Warfare: 25 strategic jammers, GPS denial capability</li>
                                    <li>Cyber Warfare: Advanced persistent threat groups, critical infrastructure targeting</li>
                                    <li>Chemical Weapons: Suspected stockpiles at 8 facilities (unconfirmed)</li>
                                </ul>
                            </div>
                            
                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Courses of Action Assessment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Most Likely COA:</strong> Defensive operations with strategic depth, A2/AD employment</li>
                                    <li><strong>Most Dangerous COA:</strong> Preemptive strikes on coalition staging areas</li>
                                    <li><strong>Asymmetric Options:</strong> Proxy force activation, cyber attacks, SLOC interdiction</li>
                                    <li><strong>Escalation Potential:</strong> WMD employment if regime survival threatened</li>
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
                            <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-users" style="margin-right: 8px; color: #2563eb; font-size: 14px;"></i>
                                b. Friendly Forces - Coalition & Supporting Elements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-national coalition with 850,000 personnel, integrated command structure, and comprehensive strategic capabilities across European theater.
                            </p>

                            <div style="background-color: rgba(37, 99, 235, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Headquarters - Strategic Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>DoW/Joint Staff:</strong> Strategic guidance, national objectives, resource allocation</li>
                                    <li><strong>NATO Supreme Command:</strong> Alliance coordination, Article 5 implementation</li>
                                    <li><strong>EUCOM:</strong> Theater strategic command, coalition integration</li>
                                    <li><strong>National Commands:</strong> 28 NATO nations, 12 partner nations</li>
                                    <li><strong>UN Security Council:</strong> International legitimacy, humanitarian coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Commands & Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>CENTCOM:</strong> Middle East coordination, logistics support</li>
                                    <li><strong>AFRICOM:</strong> Southern flank security, logistics routes</li>
                                    <li><strong>NORTHCOM:</strong> Strategic reserve, homeland defense</li>
                                    <li><strong>PACOM:</strong> Global strategic coordination, resource sharing</li>
                                    <li><strong>SOCOM:</strong> Special operations, strategic reconnaissance</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Coalition Forces & Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>NATO Forces:</strong> 650,000 personnel, 28 nations, integrated command</li>
                                    <li><strong>Partner Nations:</strong> 200,000 personnel, 12 nations, specialized capabilities</li>
                                    <li><strong>Strategic Assets:</strong> Nuclear deterrent, space capabilities, cyber warfare</li>
                                    <li><strong>Logistics Network:</strong> 45 strategic bases, global supply chain</li>
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
                            <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-exchange-alt" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                                c. Attachments and Detachments - Force Modifications
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Strategic force modifications for Operation ALLIED RESOLVE with specialized capabilities and coalition integration requirements.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Attached to Theater Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Reconnaissance:</strong> 2nd Intelligence Brigade (INSCOM)</li>
                                    <li><strong>Cyber Operations:</strong> Joint Cyber Command elements</li>
                                    <li><strong>Space Operations:</strong> Space Force theater elements</li>
                                    <li><strong>Special Operations:</strong> JSOC task force elements</li>
                                    <li><strong>Strategic Airlift:</strong> AMC theater support package</li>
                                    <li><strong>Coalition Integration:</strong> NATO Response Force elements</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Units Detached from Theater Command</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Reserve:</strong> XVIII Airborne Corps (to CENTCOM)</li>
                                    <li><strong>Pacific Support:</strong> 3rd Fleet elements (to PACOM)</li>
                                    <li><strong>Homeland Defense:</strong> Air Defense elements (to NORTHCOM)</li>
                                    <li><strong>Training Mission:</strong> Security Force Assistance elements</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Coalition Attachments & Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>NATO Integration:</strong> Multinational command elements</li>
                                    <li><strong>Partner Nations:</strong> Specialized capability packages</li>
                                    <li><strong>International Organizations:</strong> UN, EU coordination elements</li>
                                    <li><strong>Command Relationships:</strong> OPCON, TACON, coordination authorities</li>
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
                            <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-lightbulb" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                                d. Assumptions - Strategic Planning Assumptions
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Critical strategic assumptions for Operation ALLIED RESOLVE planning and execution across European theater operations.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Strategic & Political Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Coalition Unity:</strong> NATO Article 5 consensus maintained throughout operation</li>
                                    <li><strong>International Support:</strong> UN Security Council authorization sustained</li>
                                    <li><strong>Host Nation Support:</strong> European allies provide basing and logistics</li>
                                    <li><strong>Strategic Deterrence:</strong> Nuclear escalation remains controlled</li>
                                    <li><strong>Information Environment:</strong> Coalition maintains information superiority</li>
                                    <li><strong>Economic Stability:</strong> Global markets remain stable during operations</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Operational & Tactical Assumptions</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Force Generation:</strong> Coalition forces deploy per established timelines</li>
                                    <li><strong>Logistics Support:</strong> Strategic supply lines remain secure</li>
                                    <li><strong>Intelligence Sharing:</strong> Coalition intelligence fusion effective</li>
                                    <li><strong>Command Integration:</strong> Multinational command structure functions</li>
                                    <li><strong>Technology Advantage:</strong> Coalition maintains technological superiority</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Risk Mitigation & Contingencies</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Assumption Failure:</strong> Branch plans activated if assumptions invalid</li>
                                    <li><strong>Coalition Fracture:</strong> Bilateral agreements maintain core capabilities</li>
                                    <li><strong>Escalation Management:</strong> De-escalation mechanisms in place</li>
                                    <li><strong>Strategic Communication:</strong> Narrative adaptation for assumption changes</li>
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
                            <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-globe-europe" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                                e. Environmental Considerations - OAKOC Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive environmental analysis for European theater operations including weather, terrain, and civil considerations.
                            </p>

                            <div style="background-color: rgba(22, 163, 74, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Observation & Fields of Fire (O)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Observation:</strong> Satellite coverage, strategic reconnaissance</li>
                                    <li><strong>Theater Visibility:</strong> European plain, urban centers, coastal areas</li>
                                    <li><strong>Weather Impact:</strong> Winter conditions limit visibility, cloud cover</li>
                                    <li><strong>Electronic Environment:</strong> Dense electromagnetic spectrum</li>
                                    <li><strong>Information Domain:</strong> Global media coverage, social media</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Avenues of Approach & Key Terrain (AK)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Approaches:</strong> Atlantic, Mediterranean, Baltic Sea routes</li>
                                    <li><strong>Land Corridors:</strong> European highway network, rail systems</li>
                                    <li><strong>Key Terrain:</strong> Capital cities, strategic ports, airfields</li>
                                    <li><strong>Chokepoints:</strong> Straits, mountain passes, major bridges</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(74, 222, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 6px 0;">Obstacles & Cover/Concealment (OC)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Natural Obstacles:</strong> Rivers, mountains, forests, weather</li>
                                    <li><strong>Man-made Obstacles:</strong> Urban areas, infrastructure, fortifications</li>
                                    <li><strong>Strategic Cover:</strong> Underground facilities, hardened structures</li>
                                    <li><strong>Civil Considerations:</strong> 450 million population, refugee flows</li>
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
                            <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-clock" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                                f. Time and Space - Strategic Factors
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Strategic time and space considerations for Operation ALLIED RESOLVE across European theater with global implications.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Strategic Timeline & Phases</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Planning Time:</strong> 120 days strategic planning, 60 days operational</li>
                                    <li><strong>Deployment Phase:</strong> 90 days force generation and deployment</li>
                                    <li><strong>Operations Phase:</strong> 180 days major combat operations</li>
                                    <li><strong>Transition Phase:</strong> 365 days stability and reconstruction</li>
                                    <li><strong>Total Duration:</strong> 24 months strategic commitment</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Strategic Space & Geographic Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Theater Size:</strong> 10.2 million km² European theater</li>
                                    <li><strong>Strategic Depth:</strong> 4,000 km Atlantic to Urals</li>
                                    <li><strong>Coalition Span:</strong> 28 NATO nations, 12 partners</li>
                                    <li><strong>Population Density:</strong> 450 million civilians in AOR</li>
                                    <li><strong>Infrastructure:</strong> Dense transportation, communication networks</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Critical Time-Space Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Decision Cycles:</strong> Strategic 72 hours, operational 24 hours</li>
                                    <li><strong>Logistics Flow:</strong> 7-day strategic resupply cycle</li>
                                    <li><strong>Coalition Coordination:</strong> 48-hour consensus building</li>
                                    <li><strong>Information Operations:</strong> Real-time global information environment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Placeholder for future expansion -->
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
                                <i class="fas fa-info-circle" style="margin-right: 8px; color: #6b7280; font-size: 14px;"></i>
                                Section 1 Summary - Situation Analysis Complete
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Comprehensive situation analysis completed with all required substeps per FM 5-0 standards.
                            </p>

                            <div style="background-color: rgba(107, 114, 128, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6b7280; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 8px 0;">Section 1 Substeps Completed</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>1a. Enemy Forces:</strong> Regional coalition threat analysis ✓</li>
                                    <li><strong>1b. Friendly Forces:</strong> Coalition and supporting elements ✓</li>
                                    <li><strong>1c. Attachments/Detachments:</strong> Force modifications ✓</li>
                                    <li><strong>1d. Assumptions:</strong> Strategic planning assumptions ✓</li>
                                    <li><strong>1e. Environmental:</strong> OAKOC analysis complete ✓</li>
                                    <li><strong>1f. Time and Space:</strong> Strategic factors assessed ✓</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(156, 163, 175, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #9ca3af;">
                                <h5 style="font-weight: 600; color: #9ca3af; font-size: 12px; margin: 0 0 6px 0;">Ready for Mission Development</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Situation analysis provides comprehensive foundation for strategic mission development and operational planning per FM 5-0 Chapter 10 requirements.
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
                            <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-bullseye" style="margin-right: 8px; color: #2563eb; font-size: 14px;"></i>
                                2. MISSION - Strategic Objectives & Intent
                            </h4>

                            <div style="background-color: rgba(37, 99, 235, 0.3); padding: 12px; border-radius: 6px; border: 2px solid #2563eb; margin-bottom: 16px;">
                                <h5 style="font-weight: 700; color: white; font-size: 13px; margin: 0 0 8px 0; text-align: center;">MISSION STATEMENT</h5>
                                <p style="color: #dbeafe; font-size: 12px; line-height: 1.5; margin: 0; font-weight: 500;">
                                    U.S. Central Command conducts joint, coalition, and interagency operations in AOR CENTRAL from 301200ZNOV24 to 151200ZMAR25 to defeat the regional coalition threat, restore regional stability, secure critical infrastructure, and establish conditions for post-conflict reconstruction IOT achieve U.S. national strategic objectives and maintain global security.
                                </p>
                            </div>

                            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Commander's Intent - Strategic Vision</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Purpose:</strong> Defeat regional coalition, restore stability, prevent WMD proliferation</li>
                                    <li><strong>Method:</strong> Multi-domain operations, coalition integration, minimal civilian casualties</li>
                                    <li><strong>End State:</strong> Legitimate governance, secure borders, functioning institutions</li>
                                    <li><strong>Key Tasks:</strong> Neutralize A2/AD, secure SLOCs, enable humanitarian assistance</li>
                                    <li><strong>Risk Guidance:</strong> Accept tactical risk to minimize strategic/operational risk</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(96, 165, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Strategic Objectives & Success Criteria</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Political:</strong> Regime change, democratic transition, regional integration</li>
                                    <li><strong>Military:</strong> Enemy force destruction, A2/AD neutralization, area control</li>
                                    <li><strong>Economic:</strong> Oil flow restoration, infrastructure protection, reconstruction</li>
                                    <li><strong>Information:</strong> Narrative dominance, coalition unity, domestic support</li>
                                    <li><strong>Timeline:</strong> Phase completion NLT specified dates, transition by D+365</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(147, 197, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #93c5fd;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Task Organization - Operation ALLIED RESOLVE</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Main Effort:</strong> JFLCC - Ground operations, area control</li>
                                    <li><strong>Supporting Effort:</strong> JFACC - Air superiority, strategic attack</li>
                                    <li><strong>Shaping Effort:</strong> JFMCC - Maritime security, amphibious operations</li>
                                    <li><strong>Enabling Effort:</strong> JSOTF - Direct action, FID, reconnaissance</li>
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
                            <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-cogs" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                                3. EXECUTION - Five-Phase Campaign Plan
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Multi-domain campaign employing joint/coalition forces across five sequential phases to achieve strategic objectives.
                            </p>

                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Phase 1: Theater Shaping (D-30 to D-Day)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Deployment:</strong> 180K U.S. forces, 220K coalition forces</li>
                                    <li><strong>Information Operations:</strong> Strategic narrative, coalition messaging</li>
                                    <li><strong>Intelligence Preparation:</strong> ISR surge, target development</li>
                                    <li><strong>Diplomatic Engagement:</strong> UN resolutions, regional partnerships</li>
                                    <li><strong>Cyber Preparation:</strong> Network mapping, defensive measures</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(34, 197, 94, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #22c55e; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Phase 2: Joint Force Entry (D-Day to D+45)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Air Campaign:</strong> SEAD/DEAD, strategic attack, air superiority</li>
                                    <li><strong>Maritime Operations:</strong> SLOC security, amphibious operations</li>
                                    <li><strong>Ground Operations:</strong> Lodgment establishment, force buildup</li>
                                    <li><strong>Special Operations:</strong> Direct action, reconnaissance, FID</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(52, 211, 153, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #34d399; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Phase 3-5: Decisive Operations → Transition</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Phase 3 (D+45-120):</strong> Enemy main force destruction, area control</li>
                                    <li><strong>Phase 4 (D+120-180):</strong> Exploitation, pursuit, stability operations</li>
                                    <li><strong>Phase 5 (D+180-365):</strong> Transition, reconstruction, redeployment</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(110, 231, 183, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #6ee7b7;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Coordinating Instructions & Decision Points</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>ROE:</strong> Matrix Alpha, escalation procedures, civilian protection</li>
                                    <li><strong>Decision Points:</strong> Phase transitions, branch/sequel activation</li>
                                    <li><strong>Deconfliction:</strong> Coalition coordination, airspace management</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Third Row: Sustainment & Command Control -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">

                    <!-- Section 4: Sustainment Operations -->
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
                                <i class="fas fa-truck" style="margin-right: 8px; color: #fbbf24; font-size: 14px;"></i>
                                4. SUSTAINMENT - Theater Logistics Enterprise
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Theater Sustainment Command coordinates strategic mobility and logistics for 485,000 personnel across 4.2M km² AOR.
                            </p>

                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Strategic Mobility & Distribution</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>Aerial Ports:</strong> 3 strategic (Al Udeid, Kuwait, Bahrain), 2,500 tons/day</li>
                                    <li><strong>Seaports:</strong> 2 deep-water (Dammam, Jebel Ali), 15,000 TEU/month</li>
                                    <li><strong>Distribution Network:</strong> 12 forward logistics sites, 450 vehicles</li>
                                    <li><strong>Strategic Reserves:</strong> 45-day supply all classes, 8 storage facilities</li>
                                    <li><strong>Host Nation Support:</strong> Fuel (85%), water (60%), local procurement</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(251, 191, 36, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Personnel & Medical Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Personnel Strength:</strong> 485K total (U.S. 180K, Coalition 220K, Contractors 85K)</li>
                                    <li><strong>Replacement Operations:</strong> 2,500/month, 14-day R&R cycles</li>
                                    <li><strong>Medical Facilities:</strong> 3 CSH (248 beds each), 8 FST, 2 Fleet Hospitals</li>
                                    <li><strong>MEDEVAC Assets:</strong> 24 UH-60M, 12 HH-60G, strategic aeromedical</li>
                                    <li><strong>Blood Supply:</strong> Type O maintained at 14-day level, 3 blood banks</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(252, 211, 77, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fcd34d; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Maintenance & Equipment Readiness</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Maintenance Strategy:</strong> 3-level (organizational, intermediate, depot)</li>
                                    <li><strong>Repair Facilities:</strong> 2 theater-level, 8 intermediate sites</li>
                                    <li><strong>Class IX Supply:</strong> 72-hour CONUS to theater delivery</li>
                                    <li><strong>Readiness Target:</strong> 90% operational rate, battle damage repair</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(254, 240, 138, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #fef08a;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Contractor & Host Nation Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Contractors:</strong> 85K personnel, logistics/maintenance/security</li>
                                    <li><strong>Host Nation:</strong> 6 countries, ACSA/SOFA agreements</li>
                                    <li><strong>Coalition Logistics:</strong> Multinational logistics coordination center</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Section 5: Command & Control Architecture -->
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
                                <i class="fas fa-satellite-dish" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                                5. COMMAND & CONTROL - Theater C2 Architecture
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED//FOUO - Strategic command structure enabling unified command and control across joint, coalition, and interagency operations.
                            </p>

                            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Command Structure & Authorities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>CENTCOM Commander:</strong> COCOM over all assigned forces, strategic decisions</li>
                                    <li><strong>Main CP:</strong> MacDill AFB, FL - strategic planning, policy coordination</li>
                                    <li><strong>Forward CP:</strong> Al Udeid AB, Qatar - operational control, battle management</li>
                                    <li><strong>Alternate CP:</strong> Camp Arifjan, Kuwait - continuity of operations</li>
                                    <li><strong>Component Commands:</strong> OPCON for operations, TACON for specific missions</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(167, 139, 250, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a78bfa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Communications & Information Systems</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Primary Networks:</strong> SIPR/NIPR via DISA, 2.5 Gbps theater bandwidth</li>
                                    <li><strong>Satellite Communications:</strong> DSCS/WGS constellation, global coverage</li>
                                    <li><strong>Coalition Networks:</strong> BICES/CENTRIXS, 28-nation integration</li>
                                    <li><strong>Tactical Data Links:</strong> Link 16, SADL, SINCGARS interoperability</li>
                                    <li><strong>Cyber Defense:</strong> 24/7 monitoring, USCYBERCOM coordination</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(196, 181, 253, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #c4b5fd; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Succession of Command & Key Leaders</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Succession:</strong> CCDR → DCCDR → Chief of Staff → J-3 Director</li>
                                    <li><strong>CCDR Location:</strong> Main CP (strategic) / Forward CP (operational)</li>
                                    <li><strong>Component Commanders:</strong> JFLCC (Kuwait), JFACC (Qatar), JFMCC (Bahrain)</li>
                                    <li><strong>Coalition Coordination:</strong> CAOC (Al Udeid), MOC (Bahrain)</li>
                                </ul>
                            </div>

                            <div style="background-color: rgba(221, 214, 254, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ddd6fe;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Decision-Making & Battle Rhythm</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Decisions:</strong> CCDR approval required, NSC coordination</li>
                                    <li><strong>Operational Decisions:</strong> Component commander authority within guidance</li>
                                    <li><strong>Battle Rhythm:</strong> Daily VTC 0600Z, weekly assessment 1200Z Sunday</li>
                                    <li><strong>Crisis Response:</strong> 15-minute notification, 1-hour decision cycle</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Comprehensive Annexes Section -->
                <div style="margin-bottom: 24px;">
                    <div style="text-align: center; margin-bottom: 20px; padding: 16px; background-color: #374151; border-radius: 8px;">
                        <h3 style="font-size: 16px; font-weight: 700; color: white; margin: 0; display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-folder-open" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                            THEATER ANNEXES A-T - OPERATION ALLIED RESOLVE
                        </h3>
                        <p style="color: #9ca3af; font-size: 12px; margin: 8px 0 0 0;">
                            Comprehensive theater-level annexes per FM 5-0 November 2024 standards
                        </p>
                    </div>

                    <!-- Annexes Grid - Row 1: A-B -->
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">

                        <!-- Annex A - Task Organization -->
                        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                            <h4 style="font-size: 16px; font-weight: 600; color: #06b6d4; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-sitemap" style="margin-right: 8px; font-size: 14px;"></i>
                                ANNEX A - TASK ORGANIZATION
                            </h4>
                            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                                <div style="background-color: rgba(6, 182, 212, 0.2); padding: 8px; border-radius: 4px; margin-bottom: 8px;">
                                    <p style="margin: 0; font-weight: 600;">Joint Force Structure - 485,000 Personnel</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>JFLCC (ARCENT):</strong> Third Army - 180K personnel, 3 Corps, 8 Divisions</li>
                                    <li><strong>JFACC (AFCENT):</strong> 9th Air Force - 450 aircraft, 35K personnel</li>
                                    <li><strong>JFMCC (NAVCENT):</strong> 5th Fleet - 2 CSGs, 1 ESG, 45K personnel</li>
                                    <li><strong>JSOTF (SOCCENT):</strong> Special Operations - 8.5K personnel</li>
                                    <li><strong>Coalition Partners:</strong> 28 nations, 220K personnel</li>
                                    <li><strong>Interagency:</strong> State (2.5K), USAID (1.2K), IC (classified)</li>
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
                                    <li>Enemy A2/AD capability locations and effectiveness</li>
                                    <li>WMD storage/production facility locations</li>
                                    <li>Critical infrastructure vulnerability assessments</li>
                                    <li>Coalition force disposition and intentions</li>
                                    <li>Civilian population movement patterns</li>
                                </ul>
                                <div style="margin-top: 8px; padding: 6px; background-color: #374151; border-radius: 4px;">
                                    <p style="margin: 0; font-size: 11px;"><strong>Collection Assets:</strong> 15 ISR platforms, HUMINT networks, SIGINT stations</p>
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
                                    <p style="margin: 0; font-weight: 600;">Phase Lines & Operational Graphics</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Phase Lines:</strong> PL ALPHA (D-Day), PL BRAVO (D+45), PL CHARLIE (D+120)</li>
                                    <li><strong>Objectives:</strong> OBJ DIAMOND (strategic ports), OBJ EMERALD (airfields)</li>
                                    <li><strong>Decision Points:</strong> DP 1 (coalition readiness), DP 2 (air superiority)</li>
                                    <li><strong>Branch Plans:</strong> ALPHA (WMD), BRAVO (withdrawal), CHARLIE (expansion)</li>
                                    <li><strong>Sequel Plans:</strong> Post-conflict reconstruction, regional security</li>
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
                                    <p style="margin: 0; font-weight: 600;">Strategic Attack & Joint Targeting</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Targets:</strong> 45 C2 nodes, 120 IADS sites, 25 critical infrastructure</li>
                                    <li><strong>Joint Fires Assets:</strong> B-52H (12), B-1B (8), B-2A (4), F-22A (48)</li>
                                    <li><strong>Naval Fires:</strong> 2 CSGs, 192 Tomahawk missiles</li>
                                    <li><strong>Targeting Cycle:</strong> 72-hour deliberate, 30-minute dynamic</li>
                                    <li><strong>Munitions:</strong> PGMs (85%), conventional (15%)</li>
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
                                    <li><strong>CBRN Defense:</strong> 12 decontamination sites, detection networks</li>
                                    <li><strong>Force Protection:</strong> FPCON BRAVO theater-wide, critical asset security</li>
                                    <li><strong>Physical Security:</strong> 450 security personnel, perimeter defense</li>
                                    <li><strong>Antiterrorism:</strong> Threat assessment, random security measures</li>
                                    <li><strong>Critical Assets:</strong> Command posts, logistics nodes, airfields</li>
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
                                    <p style="margin: 0; font-weight: 600;">Theater Construction & Infrastructure</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Construction:</strong> 8 engineer battalions, 2,500 personnel</li>
                                    <li><strong>Mobility:</strong> Route clearance, bridge construction, obstacle removal</li>
                                    <li><strong>Countermobility:</strong> Defensive positions, obstacle emplacement</li>
                                    <li><strong>Infrastructure:</strong> Airfield repair, port rehabilitation, utilities</li>
                                    <li><strong>Survivability:</strong> Hardened facilities, protective construction</li>
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
                                    <p style="margin: 0; font-weight: 600;">Host Nation Coordination & CMO</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Host Nation Support:</strong> 6 countries, SOFA/ACSA agreements</li>
                                    <li><strong>Civil-Military Operations:</strong> 2,500 CA personnel, liaison teams</li>
                                    <li><strong>Governance Support:</strong> Institution building, rule of law</li>
                                    <li><strong>Economic Development:</strong> Infrastructure projects, capacity building</li>
                                    <li><strong>Cultural Awareness:</strong> Religious sites, tribal dynamics</li>
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
                                    <p style="margin: 0; font-weight: 600;">Theater Air & Missile Defense</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>PATRIOT Systems:</strong> 12 batteries, 360° coverage</li>
                                    <li><strong>THAAD Integration:</strong> 2 batteries, ballistic missile defense</li>
                                    <li><strong>SHORAD:</strong> 45 systems, point defense of critical assets</li>
                                    <li><strong>Early Warning:</strong> Radar network, satellite integration</li>
                                    <li><strong>Command & Control:</strong> AADC, sector coordination</li>
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
                                    <p style="margin: 0; font-weight: 600;">Strategic Narrative & Target Audiences</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic Narrative:</strong> Restore stability, protect civilians, defeat aggression</li>
                                    <li><strong>Target Audiences:</strong> Enemy forces, regional populations, international community</li>
                                    <li><strong>IO Capabilities:</strong> PSYOPS (4th POG), MILDEC, EW, Strategic Communication</li>
                                    <li><strong>Themes:</strong> Coalition legitimacy, humanitarian focus, post-conflict reconstruction</li>
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
                                    <p style="margin: 0; font-weight: 600;">Media Strategy & Strategic Communication</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Media Strategy:</strong> Daily briefings, embedded journalists</li>
                                    <li><strong>Coalition Messaging:</strong> Unified narrative, 28-nation coordination</li>
                                    <li><strong>Strategic Communication:</strong> Global audience engagement</li>
                                    <li><strong>Social Media:</strong> Real-time updates, counter-disinformation</li>
                                    <li><strong>Crisis Communication:</strong> Rapid response protocols</li>
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
                                    <p style="margin: 0; font-weight: 600;">Humanitarian Assistance & Governance Support</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Humanitarian Assistance:</strong> 2.3M refugees, 45 NGO coordination</li>
                                    <li><strong>Governance Support:</strong> Institution building, democratic transition</li>
                                    <li><strong>Essential Services:</strong> Healthcare, education, utilities restoration</li>
                                    <li><strong>Economic Recovery:</strong> Banking system, currency stabilization</li>
                                    <li><strong>Rule of Law:</strong> Judicial system, police training, corrections</li>
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
                                    <p style="margin: 0; font-weight: 600;">ISR Integration & Collection Management</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Strategic ISR:</strong> National assets (classified), theater coordination</li>
                                    <li><strong>Theater Assets:</strong> U-2S (4), Global Hawk (6), Rivet Joint (3)</li>
                                    <li><strong>Tactical ISR:</strong> Predator/Reaper (24), coalition assets</li>
                                    <li><strong>Processing:</strong> 3 analysis centers, 24/7 operations, AI-assisted</li>
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
                                    <p style="margin: 0; font-weight: 600;">Campaign Assessment & Strategic Indicators</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>MOEs:</strong> Regional stability, coalition unity, civilian protection</li>
                                    <li><strong>MOPs:</strong> Enemy attrition, territory control, force readiness</li>
                                    <li><strong>Strategic Indicators:</strong> Political progress, economic recovery</li>
                                    <li><strong>Assessment Framework:</strong> Weekly reports, monthly reviews</li>
                                    <li><strong>Data Collection:</strong> 15 assessment teams, automated systems</li>
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
                                    <p style="margin: 0; font-weight: 600;">Satellite Communications & Space-Based ISR</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>SATCOM:</strong> DSCS/WGS constellation, 2.5 Gbps theater bandwidth</li>
                                    <li><strong>GPS:</strong> Precision navigation, timing, coalition integration</li>
                                    <li><strong>Space-Based ISR:</strong> National assets, theater coordination</li>
                                    <li><strong>Space Control:</strong> Situational awareness, debris tracking</li>
                                    <li><strong>Space Protection:</strong> Jamming resistance, backup systems</li>
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
                                    <p style="margin: 0; font-weight: 600;">Agreements & Capabilities Coordination</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>SOFA Agreements:</strong> 6 countries, legal framework</li>
                                    <li><strong>ACSA Agreements:</strong> Logistics support, cost sharing</li>
                                    <li><strong>Infrastructure Access:</strong> Ports, airfields, facilities</li>
                                    <li><strong>Local Procurement:</strong> Fuel (85%), water (60%), supplies</li>
                                    <li><strong>Cultural Support:</strong> Interpreters, liaison officers</li>
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
                                    <p style="margin: 0; font-weight: 600;">Information Sharing & Lessons Learned</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Information Sharing:</strong> SIPR/NIPR portals, coalition networks</li>
                                    <li><strong>Lessons Learned:</strong> After action reviews, best practices</li>
                                    <li><strong>Knowledge Repositories:</strong> Operational databases, archives</li>
                                    <li><strong>Training Integration:</strong> Professional military education</li>
                                    <li><strong>Innovation:</strong> Emerging technologies, adaptive solutions</li>
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
                                    <p style="margin: 0; font-weight: 600;">Classified Capabilities & Specialized Units</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Classified Capabilities:</strong> [DETAILS CLASSIFIED]</li>
                                    <li><strong>Specialized Units:</strong> Technical collection, analysis</li>
                                    <li><strong>Advanced Technologies:</strong> Emerging warfare capabilities</li>
                                    <li><strong>Coordination:</strong> National agencies, coalition partners</li>
                                    <li><strong>Security:</strong> Compartmented access, need-to-know</li>
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
                                    <p style="margin: 0; font-weight: 600;">Multi-Domain Cyber & EW Operations</p>
                                </div>
                                <ul style="margin: 0; padding-left: 16px;">
                                    <li><strong>Cyber Operations:</strong> Defensive (24/7 monitoring), Offensive (strategic targets)</li>
                                    <li><strong>Electronic Warfare:</strong> EA (jamming), EP (protection), ES (SIGINT)</li>
                                    <li><strong>Spectrum Management:</strong> Theater frequency coordination, deconfliction</li>
                                    <li><strong>Key Systems:</strong> CREW, SUTER, classified capabilities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Complete Annexes Summary -->
                <div style="background-color: #374151; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                    <h3 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; text-align: center;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #10b981; font-size: 14px;"></i>
                        COMPLETE THEATER ANNEXES COVERAGE - FM 5-0 ALPHABETICAL ORDER
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
                            Complete FM 5-0 November 2024 Annexes Coverage - 16 Theater-Level Annexes in Alphabetical Order
                        </p>
                    </div>
                </div>

                <!-- Strategic Timeline & Decision Matrix -->
                <div style="margin-bottom: 24px;">
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px;">
                        <h3 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; text-align: center; display: flex; align-items: center; justify-content: center;">
                            <i class="fas fa-calendar-alt" style="margin-right: 8px; color: #fbbf24; font-size: 14px;"></i>
                            OPERATION ALLIED RESOLVE - STRATEGIC CAMPAIGN TIMELINE
                        </h3>

                        <!-- Phase Timeline Grid -->
                        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; margin-bottom: 20px;">
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center; border: 2px solid #fbbf24;">
                                <div style="color: #fbbf24; font-weight: 700; font-size: 12px; margin-bottom: 6px;">PHASE 1</div>
                                <div style="color: #d1d5db; font-size: 11px; font-weight: 600;">D-30 to D-Day</div>
                                <div style="color: #9ca3af; font-size: 10px; margin-top: 4px;">Theater Shaping</div>
                                <div style="color: #fbbf24; font-size: 10px; margin-top: 6px;">30 Days</div>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center; border: 2px solid #ef4444;">
                                <div style="color: #ef4444; font-weight: 700; font-size: 12px; margin-bottom: 6px;">PHASE 2</div>
                                <div style="color: #d1d5db; font-size: 11px; font-weight: 600;">D-Day to D+45</div>
                                <div style="color: #9ca3af; font-size: 10px; margin-top: 4px;">Joint Force Entry</div>
                                <div style="color: #ef4444; font-size: 10px; margin-top: 6px;">45 Days</div>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center; border: 2px solid #16a34a;">
                                <div style="color: #16a34a; font-weight: 700; font-size: 12px; margin-bottom: 6px;">PHASE 3</div>
                                <div style="color: #d1d5db; font-size: 11px; font-weight: 600;">D+45 to D+120</div>
                                <div style="color: #9ca3af; font-size: 10px; margin-top: 4px;">Decisive Operations</div>
                                <div style="color: #16a34a; font-size: 10px; margin-top: 6px;">75 Days</div>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center; border: 2px solid #2563eb;">
                                <div style="color: #2563eb; font-weight: 700; font-size: 12px; margin-bottom: 6px;">PHASE 4</div>
                                <div style="color: #d1d5db; font-size: 11px; font-weight: 600;">D+120 to D+180</div>
                                <div style="color: #9ca3af; font-size: 10px; margin-top: 4px;">Exploitation</div>
                                <div style="color: #2563eb; font-size: 10px; margin-top: 6px;">60 Days</div>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center; border: 2px solid #8b5cf6;">
                                <div style="color: #8b5cf6; font-weight: 700; font-size: 12px; margin-bottom: 6px;">PHASE 5</div>
                                <div style="color: #d1d5db; font-size: 11px; font-weight: 600;">D+180 to D+365</div>
                                <div style="color: #9ca3af; font-size: 10px; margin-top: 4px;">Transition</div>
                                <div style="color: #8b5cf6; font-size: 10px; margin-top: 6px;">185 Days</div>
                            </div>
                        </div>

                        <!-- Decision Points Matrix -->
                        <div style="background-color: #374151; padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; text-align: center;">
                                STRATEGIC DECISION POINTS & BRANCH PLANS
                            </h4>
                            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; font-size: 11px;">
                                <div>
                                    <div style="color: #fbbf24; font-weight: 600; margin-bottom: 6px;">Phase Transition Criteria</div>
                                    <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                        <li>Phase 1→2: Coalition deployment 85% complete</li>
                                        <li>Phase 2→3: Air superiority achieved, lodgments secure</li>
                                        <li>Phase 3→4: Enemy main forces defeated</li>
                                        <li>Phase 4→5: Area control established</li>
                                    </ul>
                                </div>
                                <div>
                                    <div style="color: #ef4444; font-weight: 600; margin-bottom: 6px;">Branch Plans</div>
                                    <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                        <li>BRANCH ALPHA: WMD employment response</li>
                                        <li>BRANCH BRAVO: Coalition partner withdrawal</li>
                                        <li>BRANCH CHARLIE: Regional conflict expansion</li>
                                        <li>BRANCH DELTA: Humanitarian crisis response</li>
                                    </ul>
                                </div>
                                <div>
                                    <div style="color: #16a34a; font-weight: 600; margin-bottom: 6px;">Sequel Plans</div>
                                    <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                        <li>SEQUEL 1: Post-conflict reconstruction</li>
                                        <li>SEQUEL 2: Regional security cooperation</li>
                                        <li>SEQUEL 3: Force redeployment</li>
                                        <li>SEQUEL 4: Long-term partnership</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Success Metrics -->
                        <div style="background-color: rgba(16, 185, 129, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #10b981;">
                            <h4 style="font-size: 12px; font-weight: 600; color: #6ee7b7; margin: 0 0 8px 0;">MEASURES OF EFFECTIVENESS (MOEs) & PERFORMANCE (MOPs)</h4>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 11px;">
                                <div>
                                    <div style="color: #6ee7b7; font-weight: 600; margin-bottom: 4px;">Strategic MOEs</div>
                                    <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.3;">
                                        <li>Regional stability index improvement</li>
                                        <li>Coalition unity maintenance >90%</li>
                                        <li>Civilian casualty minimization <1%</li>
                                        <li>Critical infrastructure protection >95%</li>
                                    </ul>
                                </div>
                                <div>
                                    <div style="color: #6ee7b7; font-weight: 600; margin-bottom: 4px;">Operational MOPs</div>
                                    <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.3;">
                                        <li>Enemy force attrition >75%</li>
                                        <li>Territory control >85% AOR</li>
                                        <li>Coalition force readiness >90%</li>
                                        <li>Logistics throughput 2,500 tons/day</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Knowledge Reference & Footer -->
                <div style="background-color: #374151; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                    <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; text-align: center;">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                        DOCTRINAL REFERENCES & AUTHORITIES
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 12px;">
                        <div>
                            <div style="color: #60a5fa; font-weight: 600; margin-bottom: 6px;">Primary References</div>
                            <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                <li>FM 5-0, Planning and Orders Production (Nov 2024)</li>
                                <li>JP 5-0, Joint Planning (Dec 2020)</li>
                                <li>JP 3-0, Joint Operations (Oct 2018)</li>
                                <li>FM 3-0, Operations (Oct 2022)</li>
                            </ul>
                        </div>
                        <div>
                            <div style="color: #60a5fa; font-weight: 600; margin-bottom: 6px;">Theater Guidance</div>
                            <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                <li>CENTCOM Campaign Plan 2024-2028</li>
                                <li>National Defense Strategy 2022</li>
                                <li>Joint Strategic Planning System</li>
                                <li>Theater Security Cooperation Plan</li>
                            </ul>
                        </div>
                        <div>
                            <div style="color: #60a5fa; font-weight: 600; margin-bottom: 6px;">Legal Authorities</div>
                            <ul style="color: #d1d5db; margin: 0; padding-left: 16px; line-height: 1.4;">
                                <li>UN Charter, Chapter VII</li>
                                <li>Geneva Conventions (1949)</li>
                                <li>Law of Armed Conflict</li>
                                <li>Coalition Partnership Agreements</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Final Footer -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; text-align: center;">
                    <div style="margin-bottom: 12px;">
                        <div style="color: #10b981; font-size: 14px; font-weight: 600; margin-bottom: 4px;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            UNCLASSIFIED//FOR OFFICIAL USE ONLY
                        </div>
                        <div style="color: #9ca3af; font-size: 12px;">
                            Theater Level OPORD Example - Operation ALLIED RESOLVE
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; font-size: 11px; color: #6b7280;">
                        <div>
                            <div style="font-weight: 600; color: #9ca3af; margin-bottom: 4px;">Document Control</div>
                            <div>Version: 1.0</div>
                            <div>Date: 30 NOV 2024</div>
                            <div>Pages: Comprehensive</div>
                        </div>
                        <div>
                            <div style="font-weight: 600; color: #9ca3af; margin-bottom: 4px;">Authority</div>
                            <div>FM 5-0 Compliant</div>
                            <div>Theater Level</div>
                            <div>Strategic Campaign</div>
                        </div>
                        <div>
                            <div style="font-weight: 600; color: #9ca3af; margin-bottom: 4px;">Distribution</div>
                            <div>Joint Force Components</div>
                            <div>Coalition Partners</div>
                            <div>Interagency Stakeholders</div>
                        </div>
                    </div>

                    <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #374151;">
                        <p style="color: #6b7280; font-size: 11px; margin: 0; font-style: italic;">
                            This comprehensive theater-level OPORD example demonstrates strategic military planning at the CENTCOM level,
                            serving as the authoritative template for subordinate echelon development across all command levels.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
