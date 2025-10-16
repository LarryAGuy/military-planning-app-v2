/**
 * JPP Step 7: Plan Development - Army Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign LSCO army-level plan development scenario
 * Authorized to exceed 300-line limit due to extensive strategic content requirements
 * Primary Sources: FM 5-0 (Operations Process), Chapter 4 - Plan Development; ADP 3-0 (Operations), Chapter 2
 * Supporting Sources: JP 5-0 (Joint Planning), Chapter 4; FM 3-0 (Operations), Chapter 2 - Army Warfighting Functions
 * Doctrinal Focus: Army operational-level planning as Service Component with corps task organization and sustainment coordination
 */

export function getArmyPlanDevelopmentExample() {
    return `
        <div style="padding: 20px;">
            <!-- Army Plan Development Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-star" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 7: Plan Development - Army Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Army Strategic Implementation and Multi-Corps Coordination</p>
                </div>
            </div>

            <!-- Army Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                    Army Command Implementation - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Army Command:</strong> First Army (FIARMY) - Land Component Command<br>
                            <strong>Commanding General:</strong> General Michael D. Richardson, USA (4-Star)<br>
                            <strong>Army Area of Operations:</strong> Eastern European Defense Sector - Poland/Baltic Region<br>
                            <strong>Mission Type:</strong> Multi-Corps Large Scale Combat Operations (LSCO) Implementation
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> XVIII Airborne Corps, V Corps, III Armored Corps, 1st Armored Division (Army Reserve)<br>
                            <strong>Force Structure:</strong> 155,000 U.S. personnel across 3 Corps, 8 Divisions, 24 Brigade Combat Teams<br>
                            <strong>Operational Area:</strong> 600km front from Baltic Sea to Carpathian Mountains<br>
                            <strong>Planning Timeline:</strong> 120-hour Army Design Methodology with 72-hour execution preparation (LSCO compressed timeline)
                        </p>
                    </div>
                </div>
            </div>

            <!-- Army Strategic Implementation Framework - 2xN Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Army Strategic Guidance Implementation (Green Theme) -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(16, 185, 129, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-flag-usa" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                            Army Strategic Guidance Implementation
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(16, 185, 129, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(16, 185, 129, 0.1);
                        ">
                            <h5 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-scroll" style="margin-right: 6px; color: #10b981;"></i>
                                Theater Strategic Directive Translation
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                General Richardson receives Theater Strategic Directive from USAREUR-AF commanding general, translating strategic objectives into Army-level operational guidance. Theater directive specifies: (1) Defend NATO Article 5 territory against peer adversary aggression, (2) Conduct multi-domain operations across 800km front, (3) Integrate with 18 allied nations contributing 100,000 personnel, (4) Achieve operational objectives within 12-month timeline. Army planning staff develops detailed implementation guidance for three subordinate corps, establishing operational boundaries, phase lines, coordination measures, and resource allocation priorities. Strategic guidance emphasizes coalition integration, multi-domain synchronization, and adaptive planning for emerging threats.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(16, 185, 129, 0.3);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-chess-king" style="margin-right: 5px; color: #10b981;"></i>
                                Army Commander's Intent and Planning Guidance
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                General Richardson issues comprehensive commander's intent following ADP 3-0 guidance: "First Army will conduct decisive multi-corps operations to defeat adversary forces, restore NATO territorial integrity, and establish conditions for lasting peace. We will maintain coalition unity, protect civilian populations, and demonstrate American commitment to Article 5 collective defense." Planning guidance establishes Army Warfighting Functions integration (FM 3-0, Chapter 2): (1) XVIII Airborne Corps - Northern Sector (Baltic States), (2) V Corps - Central Sector (Poland), (3) III Armored Corps - Southern Sector (Slovakia/Hungary), (4) 1st Armored Division - Army Reserve (Germany). Each corps receives specific mission, boundaries, priorities, and coordination requirements. Army planning follows FM 5-0 procedures with compressed LSCO timeline: 120-hour Army Design Methodology, 72-hour execution preparation.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.10) 0%, rgba(16, 185, 129, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(16, 185, 129, 0.25);
                        ">
                            <h6 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-sitemap" style="margin-right: 5px; color: #10b981;"></i>
                                Army Planning Organization and Battle Rhythm
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army establishes comprehensive planning organization: Army Planning Group (APG) with 85 planners from G-3/5/7 (25), G-2 Intelligence (15), G-4 Logistics (12), G-6 Communications (8), G-1 Personnel (5), G-8 Financial Management (3), G-9 Civil Affairs (4), Special Staff (13). Planning battle rhythm includes: Daily APG synchronization (0700-0800), Corps coordination calls (0900, 1500, 2100), Weekly strategic assessment (Mondays 1400), Bi-weekly coalition planning conference (Wednesdays 1000), Monthly Army planning review (first Friday). Critical decision points at 30, 60, and 90-day marks for plan refinement, resource validation, and execution authorization. Planning products distributed through secure networks with appropriate classification levels and need-to-know restrictions.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Multi-Corps Coordination and Task Organization (Blue Theme) -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(37, 99, 235, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-project-diagram" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                            Multi-Corps Coordination and Task Organization
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(37, 99, 235, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(37, 99, 235, 0.1);
                        ">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-layer-group" style="margin-right: 6px; color: #2563eb;"></i>
                                Army Task Organization and Corps Assignment
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Army develops comprehensive task organization for three-corps operation: XVIII Airborne Corps (62,000 personnel) - 82nd Airborne Division, 101st Air Assault Division, 3rd Infantry Division, plus 173rd Airborne Brigade, 2nd Cavalry Regiment. V Corps (68,000 personnel) - 1st Infantry Division, 1st Cavalry Division, 1st Armored Division, plus 2nd Armored Brigade Combat Team, 11th Armored Cavalry Regiment. VII Corps (55,000 personnel) - 1st Armored Division (Forward), 4th Infantry Division, 2nd Infantry Division, plus 3rd Armored Brigade Combat Team. Army Reserve: 1st Armored Division (18,000 personnel) positioned in Germany for strategic flexibility. Each corps receives specific mission, area of operations, priority of support, and coordination requirements with adjacent units and coalition forces.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(37, 99, 235, 0.3);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #bfdbfe; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-map-marked" style="margin-right: 5px; color: #2563eb;"></i>
                                Operational Boundaries and Coordination Measures
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army establishes detailed operational boundaries and coordination measures: XVIII Airborne Corps AO extends from Baltic Sea to Vistula River (280km front), V Corps AO covers central Poland from Vistula to Oder Rivers (320km front), VII Corps AO spans from Oder River to Carpathian Mountains (200km front). Phase lines established every 50km depth with coordinated fire support coordination measures. Boundary coordination includes: liaison officer exchange, communication protocols, fire support coordination, air space management, logistics coordination, and civil-military cooperation. Army coordination center maintains 24/7 operations with direct communication links to all corps headquarters, coalition partners, and higher headquarters. Daily coordination conferences at 0800, 1400, and 2000 hours ensure synchronized operations across all sectors.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(37, 99, 235, 0.10) 0%, rgba(37, 99, 235, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(37, 99, 235, 0.25);
                        ">
                            <h6 style="color: #bfdbfe; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-handshake" style="margin-right: 5px; color: #2563eb;"></i>
                                Coalition Integration and Multinational Coordination
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army integrates 100,000 coalition personnel across three corps sectors: XVIII Airborne Corps integrates with UK 3rd Division (12,000), Estonian Defence Forces (3,500), Latvian National Armed Forces (2,800). V Corps coordinates with Polish 16th Mechanized Division (18,000), German 10th Panzer Division (15,000), Canadian 1st Division (8,500). VII Corps operates alongside Czech 4th Rapid Deployment Brigade (4,200), Slovak Armed Forces (3,800), Hungarian Defence Forces (6,400). Coalition coordination includes: standardized procedures, interoperability protocols, communication systems, logistics support, medical evacuation, and legal frameworks. Weekly multinational planning conferences ensure unity of effort, burden sharing, and coordinated operations. Cultural liaison teams facilitate communication and understanding between national contingents.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Operational Planning and Resource Management - Second Row -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 3: Army Operational Planning and Phasing (Red Theme) -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(220, 38, 38, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-chess-board" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                            Army Operational Planning and Phasing
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(220, 38, 38, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(220, 38, 38, 0.1);
                        ">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-calendar-alt" style="margin-right: 6px; color: #dc2626;"></i>
                                Army Campaign Phasing and Timeline
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Army develops detailed campaign phasing aligned with theater strategic timeline: PHASE I (Months 1-3) - Force deployment and defensive positioning, establish corps operational areas, integrate coalition forces, complete logistics buildup. PHASE II (Months 4-6) - Initial defensive operations, adversary containment, coalition consolidation, intelligence collection and targeting. PHASE III (Months 7-10) - Decisive offensive operations, multi-corps synchronized attacks, adversary defeat, territory liberation. PHASE IV (Months 11-12) - Stability operations, reconstruction support, transition preparation. Each phase includes specific objectives for each corps, resource requirements, success criteria, and transition conditions. Army planning staff coordinates phase transitions with theater headquarters and subordinate corps to ensure synchronized operations across 800km front.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(220, 38, 38, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(220, 38, 38, 0.3);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #fecaca; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-crosshairs" style="margin-right: 5px; color: #dc2626;"></i>
                                Army Deep Operations and Targeting
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army coordinates deep operations beyond corps boundaries: Long-range precision fires targeting adversary command and control, logistics nodes, air defense systems, and reserve formations. Army Tactical Missile System (ATACMS) batteries provide 300km range precision strikes. High Mobility Artillery Rocket System (HIMARS) units conduct counter-battery and interdiction missions. Army aviation assets including AH-64 Apache helicopters and UH-60 Black Hawks support deep reconnaissance and special operations. Coordination with Air Force for close air support, interdiction, and strategic attack missions. Intelligence, surveillance, and reconnaissance (ISR) assets including MQ-9 Reaper drones, RC-12 Guardrail aircraft, and satellite imagery provide targeting support. Army targeting cell coordinates with joint targeting coordination board for synchronized effects across all domains.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.10) 0%, rgba(220, 38, 38, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(220, 38, 38, 0.25);
                        ">
                            <h6 style="color: #fecaca; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-shield-virus" style="margin-right: 5px; color: #dc2626;"></i>
                                Army Branch Planning and Contingencies
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army develops comprehensive branch plans for operational contingencies: BRANCH ALPHA - Northern sector breakthrough requiring XVIII Airborne Corps reinforcement. BRANCH BRAVO - Central sector penetration necessitating V Corps reserve commitment. BRANCH CHARLIE - Southern sector threat requiring VII Corps boundary adjustment. BRANCH DELTA - Coalition partner withdrawal requiring U.S. force reallocation. BRANCH ECHO - Adversary escalation to chemical/biological weapons requiring CBRN response. BRANCH FOXTROT - Cyber attack on command and control systems requiring alternate communication procedures. Each branch plan includes decision criteria, resource requirements, timeline for implementation, and coordination procedures. Army reserve (1st Armored Division) positioned for rapid deployment to support any contingency. Branch activation authority delegated to corps commanders with immediate notification to Army headquarters.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Army Logistics and Sustainment Planning (Amber Theme) -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(245, 158, 11, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-truck-loading" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                            Army Logistics and Sustainment Planning
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(245, 158, 11, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(245, 158, 11, 0.1);
                        ">
                            <h5 style="color: #fcd34d; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-warehouse" style="margin-right: 6px; color: #f59e0b;"></i>
                                Army Sustainment Architecture and Distribution
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Army establishes comprehensive sustainment architecture supporting 185,000 U.S. personnel across three corps: Army Sustainment Command (ASC) coordinates strategic logistics from Kaiserslautern, Germany. Forward logistics bases: Poznan, Poland (V Corps support), Vilnius, Lithuania (XVIII Airborne Corps support), Bratislava, Slovakia (VII Corps support). Daily consumption requirements: 1,850 tons ammunition, 2,775 tons fuel, 925 tons food and water, 555 tons medical supplies, 370 tons maintenance parts. Distribution network includes: 285 Heavy Equipment Transporter (HET) systems, 450 Palletized Load System (PLS) trucks, 180 fuel tankers, 95 ammunition carriers. Army coordinates with theater logistics for strategic lift, host nation support agreements, and coalition burden sharing. Automated logistics information systems track supply status, transportation assets, and maintenance requirements across all corps areas.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(245, 158, 11, 0.3);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #fde68a; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-medkit" style="margin-right: 5px; color: #f59e0b;"></i>
                                Army Medical and Personnel Support
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army coordinates comprehensive medical and personnel support: Army Medical Command establishes three Combat Support Hospitals (CSH) - 212th CSH (Poznan), 86th CSH (Vilnius), 67th CSH (Bratislava). Medical evacuation capabilities include: 45 UH-60 MEDEVAC helicopters, 18 C-130 aeromedical evacuation aircraft, ground ambulance companies in each corps area. Personnel services include: replacement operations, casualty reporting, postal services, financial management, legal support, and chaplain services. Army Personnel Command coordinates individual replacements through European Replacement Depot in Germany. Mortuary affairs teams provide dignified transfer of fallen personnel. Mental health support teams address combat stress and psychological casualties. Medical logistics ensure adequate blood products, pharmaceuticals, and medical equipment across all operational areas.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.10) 0%, rgba(245, 158, 11, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(245, 158, 11, 0.25);
                        ">
                            <h6 style="color: #fde68a; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-tools" style="margin-right: 5px; color: #f59e0b;"></i>
                                Army Maintenance and Equipment Readiness
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army maintains equipment readiness across 2,100 combat vehicles, 3,200 support vehicles, and 285 aircraft: Army Materiel Command coordinates maintenance support through forward maintenance companies in each corps area. Field maintenance includes organizational and direct support levels performed by unit mechanics and maintenance companies. Intermediate maintenance provided by Army maintenance battalions with specialized repair capabilities. Depot-level maintenance coordinated through European logistics bases with contractor support. Equipment readiness targets: 90% for combat vehicles, 85% for support vehicles, 95% for aircraft. Maintenance management systems track equipment status, parts availability, and repair timelines. Battle damage assessment and repair (BDAR) teams provide rapid restoration of combat-damaged equipment. Maintenance float ensures continuous operations during equipment repair cycles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Intelligence and Information Operations - Third Row -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 5: Army Intelligence and Reconnaissance (Green Theme) -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(16, 185, 129, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-search" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                            Army Intelligence and Reconnaissance
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(16, 185, 129, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(16, 185, 129, 0.1);
                        ">
                            <h5 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-satellite" style="margin-right: 6px; color: #10b981;"></i>
                                Army Intelligence Architecture and Collection
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Army establishes comprehensive intelligence architecture supporting multi-corps operations: Army Intelligence and Security Command (INSCOM) coordinates strategic intelligence from Wiesbaden, Germany. Intelligence collection assets include: 12 MQ-9 Reaper unmanned aircraft systems, 8 RC-12 Guardrail signals intelligence aircraft, 6 MC-12 Liberty intelligence, surveillance, and reconnaissance platforms. Ground-based collection includes: Long Range Surveillance (LRS) teams, Special Forces reconnaissance elements, Military Intelligence (MI) companies with each corps. Signals intelligence (SIGINT) collection through 35th Signal Brigade intercept sites. Human intelligence (HUMINT) operations coordinated with CIA and coalition intelligence services. Geospatial intelligence (GEOINT) provided through National Geospatial-Intelligence Agency (NGA) support teams. All-source intelligence fusion centers at Army and corps levels provide 24/7 intelligence support to commanders.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(16, 185, 129, 0.3);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-crosshairs" style="margin-right: 5px; color: #10b981;"></i>
                                Army Targeting and Intelligence Preparation
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army conducts comprehensive intelligence preparation of the battlefield (IPB) and targeting operations: IPB process analyzes terrain, weather, adversary capabilities, and civilian considerations across 800km operational area. Target development focuses on high-value targets including command and control nodes, air defense systems, logistics facilities, and reserve formations. Army targeting cell coordinates with joint targeting coordination board for synchronized lethal and non-lethal effects. Intelligence requirements management ensures priority intelligence requirements (PIR) support commander's critical information requirements (CCIR). Threat assessment includes adversary order of battle, capabilities analysis, courses of action development, and decision point identification. Counter-intelligence operations protect friendly information and detect adversary intelligence collection efforts. Intelligence sharing protocols ensure timely dissemination to subordinate corps and coalition partners.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.10) 0%, rgba(16, 185, 129, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(16, 185, 129, 0.25);
                        ">
                            <h6 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-shield-alt" style="margin-right: 5px; color: #10b981;"></i>
                                Army Cyber and Electronic Warfare Integration
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army integrates cyber and electronic warfare capabilities across all operations: 780th Military Intelligence Brigade (Cyber) provides defensive cyber operations for Army networks and systems. Electronic warfare companies with each corps conduct signals intelligence collection and electronic attack missions. Cyber electromagnetic activities (CEMA) cell coordinates with U.S. Cyber Command for offensive cyber operations. Electronic warfare systems include: AN/MLQ-40 Prophet Enhanced signals intelligence systems, AN/VLQ-12 Counter Communications System jammers, AN/TSQ-300 Integrated Personnel and Electronic Warfare System. Cyber security measures protect command and control systems, logistics networks, and intelligence databases. Information assurance programs ensure operational security and communications security. Electromagnetic spectrum management coordinates frequency allocation and interference mitigation across all Army units and coalition partners.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Army Command and Control Systems (Blue Theme) -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(37, 99, 235, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-broadcast-tower" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                            Army Command and Control Systems
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(37, 99, 235, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(37, 99, 235, 0.1);
                        ">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-network-wired" style="margin-right: 6px; color: #2563eb;"></i>
                                Army Command Post and Communications Architecture
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Army establishes robust command and control architecture supporting multi-corps operations: Army Tactical Command Post (TAC CP) located in Poznan, Poland with 125 personnel providing 24/7 operations. Army Main Command Post (MAIN CP) in Kaiserslautern, Germany with 285 personnel for detailed planning and coordination. Communications systems include: Warfighter Information Network-Tactical (WIN-T) providing secure voice, data, and video communications. Satellite communications through Defense Satellite Communications System (DSCS) and Commercial Satellite Communications (COMSATCOM). High Frequency (HF) radio networks for long-range backup communications. Army Battle Command System (ABCS) integrates command and control applications including: All Source Analysis System (ASAS), Advanced Field Artillery Tactical Data System (AFATDS), and Maneuver Control System (MCS). Redundant communications ensure continuous command and control across 800km operational area.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(37, 99, 235, 0.3);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #bfdbfe; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-desktop" style="margin-right: 5px; color: #2563eb;"></i>
                                Army Battle Management and Decision Support
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army implements comprehensive battle management systems supporting commander decision-making: Command Post Computing Environment (CPCE) provides integrated planning and execution tools. Joint Capabilities Release (JCR) enables real-time situational awareness and blue force tracking. Global Command and Control System-Army (GCCS-A) integrates with joint and coalition command systems. Battle Damage Assessment (BDA) systems track operational effectiveness and target engagement results. Logistics automation systems including Global Combat Support System-Army (GCSS-Army) and Integrated Logistics Analysis Program (ILAP). Personnel management systems track strength, casualties, and replacement requirements. Intelligence systems including Distributed Common Ground System-Army (DCGS-A) for all-source intelligence fusion. Decision support tools provide course of action analysis, wargaming capabilities, and risk assessment functions.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(37, 99, 235, 0.10) 0%, rgba(37, 99, 235, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(37, 99, 235, 0.25);
                        ">
                            <h6 style="color: #bfdbfe; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-shield-alt" style="margin-right: 5px; color: #2563eb;"></i>
                                Army Information Assurance and Cybersecurity
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army implements comprehensive information assurance and cybersecurity measures: Network Enterprise Technology Command (NETCOM) provides network operations and cybersecurity support. Information Systems Security Manager (ISSM) programs ensure compliance with DoD security standards. Continuous monitoring systems detect and respond to cyber threats in real-time. Encryption systems protect classified communications and data transmission. Access control systems limit information access based on security clearance and need-to-know requirements. Backup and recovery procedures ensure continuity of operations during system failures or cyber attacks. Cybersecurity training programs educate personnel on operational security and threat awareness. Incident response teams provide rapid reaction to cybersecurity events. Coordination with U.S. Cyber Command ensures integration with national cybersecurity efforts and threat intelligence sharing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Risk Management and Assessment - Fourth Row -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 7: Army Risk Management and Mitigation (Red Theme) -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(220, 38, 38, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                            Army Risk Management and Mitigation
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(220, 38, 38, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(220, 38, 38, 0.1);
                        ">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-chart-line" style="margin-right: 6px; color: #dc2626;"></i>
                                Army Operational Risk Assessment Matrix
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Army develops comprehensive operational risk assessment covering strategic, operational, and tactical levels: HIGH RISK - Coalition partner withdrawal (probability: medium, impact: high), adversary escalation to WMD (probability: low, impact: extreme), major logistics disruption (probability: medium, impact: high). MEDIUM RISK - Cyber attack on command systems (probability: high, impact: medium), adverse weather affecting operations (probability: high, impact: medium), civilian casualty incidents (probability: medium, impact: medium). LOW RISK - Equipment failure rates (probability: medium, impact: low), personnel replacement delays (probability: low, impact: low). Risk mitigation strategies include: redundant systems, contingency planning, coalition coordination, strategic reserves, and adaptive planning procedures. Risk assessment updated weekly with input from all corps and functional areas.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(220, 38, 38, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(220, 38, 38, 0.3);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #fecaca; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-shield-virus" style="margin-right: 5px; color: #dc2626;"></i>
                                Army CBRN and Force Protection Measures
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army implements comprehensive Chemical, Biological, Radiological, and Nuclear (CBRN) defense and force protection measures: 20th CBRN Command provides specialized CBRN defense capabilities including detection, decontamination, and medical countermeasures. Force protection measures include: base defense operations, convoy security procedures, personnel security protocols, and threat warning systems. CBRN detection systems deployed at all major installations and command posts. Decontamination capabilities available at corps and division levels. Medical countermeasures include vaccines, antidotes, and treatment protocols. Personal protective equipment (PPE) stockpiled for all personnel. Training programs ensure CBRN readiness and response procedures. Coordination with host nation authorities for civilian protection and emergency response. Intelligence collection focused on adversary CBRN capabilities and intentions.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.10) 0%, rgba(220, 38, 38, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(220, 38, 38, 0.25);
                        ">
                            <h6 style="color: #fecaca; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-heartbeat" style="margin-right: 5px; color: #dc2626;"></i>
                                Army Casualty Estimation and Medical Planning
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army conducts detailed casualty estimation and medical planning for large-scale combat operations: Casualty estimates based on historical data and operational analysis: Phase I (Defensive) - 2-3% casualty rate, Phase II (Transition) - 4-5% casualty rate, Phase III (Offensive) - 6-8% casualty rate. Medical planning includes: evacuation procedures, treatment capabilities, blood supply management, and replacement operations. Medical evacuation timeline: point of injury to Role 1 (unit level) within 10 minutes, Role 1 to Role 2 (forward surgical) within 1 hour, Role 2 to Role 3 (combat support hospital) within 4 hours. Psychological health support for combat stress casualties and post-traumatic stress. Mortuary affairs planning for dignified transfer of fallen personnel. Family readiness group support and casualty notification procedures. Medical logistics ensure adequate supplies and equipment for sustained operations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Army Assessment and Adaptation (Amber Theme) -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(245, 158, 11, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-sync-alt" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                            Army Assessment and Adaptation
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(245, 158, 11, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(245, 158, 11, 0.1);
                        ">
                            <h5 style="color: #fcd34d; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-chart-bar" style="margin-right: 6px; color: #f59e0b;"></i>
                                Army Performance Assessment Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Army establishes comprehensive performance assessment framework measuring operational effectiveness across all corps: Daily operational assessments track tactical progress, enemy capabilities, friendly readiness, and resource consumption. Weekly operational assessments evaluate corps performance, coalition integration, logistics sustainment, and intelligence effectiveness. Monthly strategic assessments analyze campaign progress, strategic objectives achievement, adversary adaptation, and coalition cohesion. Quarterly comprehensive reviews with theater headquarters assess overall Army performance, resource requirements, strategic guidance implementation, and end-state progress. Assessment metrics include: mission accomplishment rates, casualty ratios, equipment readiness levels, logistics consumption rates, intelligence collection effectiveness, and coalition coordination success. Assessment results inform adaptive planning, resource allocation, and strategic decision-making at all levels.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(245, 158, 11, 0.3);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #fde68a; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-lightbulb" style="margin-right: 5px; color: #f59e0b;"></i>
                                Army Lessons Learned and Innovation
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army implements comprehensive lessons learned program promoting continuous improvement and innovation: Daily after-action reviews at unit level with weekly consolidation at corps level. Monthly lessons learned conferences with all corps commanders and staff principals. Quarterly strategic lessons learned sessions with theater headquarters and coalition partners. Best practices identification and rapid dissemination through Army Knowledge Online (AKO) and professional military education networks. Innovation initiatives encourage tactical and technical solutions to operational challenges. Center for Army Lessons Learned (CALL) provides institutional memory and historical analysis. Training program updates based on operational experience and lessons learned. Doctrine development recommendations for institutional learning and capability improvement. Technology integration assessments for emerging capabilities and systems. Knowledge management systems capture, store, and retrieve operational experience for future operations.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.10) 0%, rgba(245, 158, 11, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(245, 158, 11, 0.25);
                        ">
                            <h6 style="color: #fde68a; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-cogs" style="margin-right: 5px; color: #f59e0b;"></i>
                                Army Adaptive Planning and Plan Refinement
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Army maintains adaptive planning capability for continuous plan refinement and modification: Army Planning Group (APG) dedicated cell for ongoing plan assessment and improvement. Scenario development for emerging threats, opportunities, and changing conditions. Branch plan activation procedures with 48-hour implementation timeline for corps-level adjustments. Resource reallocation mechanisms for changing operational requirements and priorities. Coalition coordination procedures for plan modifications affecting multinational operations. Strategic communication plans for explaining plan changes to subordinate commands and coalition partners. Legal review processes for modified operations ensuring compliance with rules of engagement and international law. Quality assurance procedures ensuring plan coherence, feasibility, and synchronization across all warfighting functions. Documentation and distribution systems for plan updates, modifications, and fragmentary orders (FRAGOs).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Implementation Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-star" style="margin-right: 8px;"></i>
                    Army Plan Development Implementation Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Key Army Outcomes</h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            First Army successfully translates theater strategic guidance into operational implementation across three corps (XVIII Airborne, V Corps, VII Corps) covering 800km front with 185,000 U.S. personnel. Comprehensive planning integrates coalition forces (100,000 personnel), multi-domain operations, logistics sustainment, and adaptive planning capabilities. Army command and control systems ensure synchronized operations and unity of effort across all subordinate commands.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Critical Success Factors</h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Success depends on: (1) Effective multi-corps coordination and boundary management, (2) Robust logistics sustainment and distribution networks, (3) Comprehensive intelligence and reconnaissance capabilities, (4) Reliable command and control systems with redundancy, (5) Adaptive planning and continuous assessment, (6) Coalition integration and multinational coordination, and (7) Risk management and force protection measures.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const armyPracticalModule = {
    getContent() {
        return getArmyPlanDevelopmentExample();
    }
};

export default armyPracticalModule;
