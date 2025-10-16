/**
 * JPP Step 2: Mission Analysis - Army Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign mission analysis examples
 * Authorized to exceed 300-line limit due to extensive strategic content requirements
 * Target: 35,000-45,000 characters of comprehensive practical content
 */

export const armyPracticalModule = {
  getContent() {
    return `
        <div style="padding: 20px;">
            <!-- Army Mission Analysis Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-star" style="margin-right: 12px; color: #3b82f6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Army Level Mission Analysis - European Campaign</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 2 Practical Examples - 4-Star General Command Level</p>
                </div>
            </div>

            <!-- 2x2 Practical Examples Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Example 1: Army Mission Statement Development -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(16, 185, 129, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-bullseye" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                        Army Mission Statement Development - European Theater Army
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Strategic Context: U.S. Army Europe and Africa (USAREUR-AF)</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Scenario:</strong> General Johnson, Commanding General, U.S. Army Europe and Africa, receives mission from USEUCOM to establish and command the theater army for large-scale combat operations in Eastern Europe, integrating with NATO land forces.</p>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Higher Commander's Intent (USEUCOM):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Purpose:</strong> Establish theater army to command and control land operations in Eastern Europe</li>
                                    <li style="margin-bottom: 4px;"><strong>Method:</strong> Multi-corps operations with NATO integration and strategic sustainment</li>
                                    <li style="margin-bottom: 4px;"><strong>End State:</strong> Adversary land forces defeated, NATO territory secured, regional stability restored</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #6ee7b7;">Army Mission Variables (Strategic METT-TC):</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Mission:</strong> Command and control theater land operations</li>
                                    <li style="margin-bottom: 4px;"><strong>Enemy:</strong> Peer adversary ground forces with advanced capabilities</li>
                                    <li style="margin-bottom: 4px;"><strong>Terrain:</strong> Eastern European plains, urban centers, river barriers</li>
                                    <li style="margin-bottom: 4px;"><strong>Troops:</strong> 3 U.S. corps, NATO land forces, 200,000+ personnel</li>
                                    <li style="margin-bottom: 4px;"><strong>Time:</strong> Deployment and operations within 45-90 days</li>
                                    <li><strong>Civil:</strong> 50 million civilians in operational area</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Army Mission Statement Construction</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Developed Army Mission Statement:</strong></p>
                                <div style="background: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"U.S. Army Europe and Africa commands and controls theater land operations in Eastern Europe, integrating with NATO allies and partners, to defeat adversary ground forces, secure NATO Article 5 territory, and enable theater strategic objectives, commencing NLT D+45, in order to restore regional stability and demonstrate collective defense commitment."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Five W's Analysis:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Who:</strong> U.S. Army Europe and Africa with NATO land forces</li>
                                    <li style="margin-bottom: 4px;"><strong>What:</strong> Theater land operations command and control</li>
                                    <li style="margin-bottom: 4px;"><strong>When:</strong> Commencing no later than D+45</li>
                                    <li style="margin-bottom: 4px;"><strong>Where:</strong> Eastern Europe operational area</li>
                                    <li><strong>Why:</strong> Restore regional stability, demonstrate collective defense</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.6);">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Army Essential Tasks and Success Criteria</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Specified Tasks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Establish theater army headquarters in Eastern Europe</li>
                                    <li style="margin-bottom: 4px;">Command and control 3 U.S. corps and NATO land forces</li>
                                    <li style="margin-bottom: 4px;">Coordinate with USEUCOM and NATO Land Command</li>
                                    <li>Establish theater sustainment and logistics architecture</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Implied Tasks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Establish theater intelligence architecture and fusion</li>
                                    <li style="margin-bottom: 4px;">Coordinate host nation support across multiple countries</li>
                                    <li style="margin-bottom: 4px;">Plan for theater-level casualty evacuation</li>
                                    <li>Develop theater information operations campaign</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Success Criteria:</strong> Theater army operational within 45 days, 3 corps effectively commanded, NATO integration achieved, adversary ground forces defeated within 120 days.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 2: Army Operational Environment Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-globe" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                        Army Operational Environment Analysis - Eastern European Land Operations
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Eastern European Land Operations PMESII-PT</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Political Factors (Land Operations Focus):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">NATO Article 5 invocation and collective defense implementation</li>
                                    <li style="margin-bottom: 4px;">Host nation agreements for land force deployment and operations</li>
                                    <li style="margin-bottom: 4px;">European Union coordination for civilian protection and refugee support</li>
                                    <li style="margin-bottom: 4px;">Bilateral military cooperation agreements with frontline states</li>
                                    <li>United Nations humanitarian coordination and civilian protection mandates</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Military Factors (Land Domain Focus):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">NATO Land Command integration and multinational corps coordination</li>
                                    <li style="margin-bottom: 4px;">U.S. Army corps: XVIII Airborne, V Corps, VII Corps deployment capabilities</li>
                                    <li style="margin-bottom: 4px;">European allies land forces: German, French, British, Polish divisions</li>
                                    <li style="margin-bottom: 4px;">Theater sustainment and logistics infrastructure for 200,000+ personnel</li>
                                    <li>Joint fires integration with air, naval, and space-based assets</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Economic Factors (Land Operations Impact):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Defense industrial base surge production for land systems and ammunition</li>
                                    <li style="margin-bottom: 4px;">Transportation infrastructure capacity for strategic mobility</li>
                                    <li style="margin-bottom: 4px;">Host nation economic support for military operations</li>
                                    <li style="margin-bottom: 4px;">Critical supply chain protection for military logistics</li>
                                    <li>Economic warfare considerations affecting military sustainment</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Social, Information, Infrastructure, Physical Environment, Time:</strong> 50 million civilians in operational area, multilingual information operations, extensive rail and road networks, diverse terrain from plains to urban centers, extended deployment timelines for corps-level operations.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Army Land Operations Centers of Gravity</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Friendly Army Center of Gravity:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Center of Gravity:</strong> Multinational Land Force Integration and Command Unity</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Capabilities:</strong> Multi-corps coordination, NATO interoperability, sustained operations</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Requirements:</strong> Unified command structure, interoperable communications, shared logistics</li>
                                    <li><strong>Critical Vulnerabilities:</strong> Command coordination challenges, logistics complexity, cultural differences</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Enemy Land Forces Center of Gravity:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Center of Gravity:</strong> Integrated Ground Force Command and Control</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Capabilities:</strong> Rapid maneuver, combined arms coordination, defensive operations</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Requirements:</strong> Command connectivity, logistics support, air defense</li>
                                    <li><strong>Critical Vulnerabilities:</strong> Extended supply lines, air superiority dependence, command isolation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.6);">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Army Operational Variables Integration</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Land Operations METT-TC Integration:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Political factors directly impact corps deployment timelines and host nation support</li>
                                    <li style="margin-bottom: 4px;">Economic considerations affect sustainment capacity and logistics infrastructure</li>
                                    <li style="margin-bottom: 4px;">Information environment shapes public support and alliance cohesion for land operations</li>
                                    <li style="margin-bottom: 4px;">Infrastructure capabilities determine strategic mobility and theater sustainment</li>
                                    <li>Time factors influenced by multinational coordination and corps deployment sequences</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 3: Army Enemy Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-crosshairs" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                        Army Enemy Analysis - Adversary Ground Forces Assessment
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Adversary Ground Forces Capabilities Assessment</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Land Force Structure:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Ground Forces: 180,000+ personnel in theater, 1,800+ main battle tanks, 2,400+ armored vehicles</li>
                                    <li style="margin-bottom: 4px;">Artillery Systems: 1,200+ artillery pieces, multiple rocket launcher systems, precision-guided munitions</li>
                                    <li style="margin-bottom: 4px;">Air Defense: Integrated air defense systems, mobile SAM systems, electronic warfare units</li>
                                    <li style="margin-bottom: 4px;">Engineer Forces: Obstacle construction, bridge building, urban warfare capabilities</li>
                                    <li>Special Operations: Reconnaissance, sabotage, and unconventional warfare units</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Ground Force Doctrine and Tactics:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Combined arms operations with integrated air defense and electronic warfare</li>
                                    <li style="margin-bottom: 4px;">Defensive operations in depth with prepared positions and obstacles</li>
                                    <li style="margin-bottom: 4px;">Rapid maneuver and exploitation of tactical success</li>
                                    <li style="margin-bottom: 4px;">Urban warfare and civilian infrastructure targeting</li>
                                    <li>Information warfare and psychological operations integration</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Ground Force Command Structure:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Theater ground force command with 3 combined arms armies</li>
                                    <li style="margin-bottom: 4px;">Integrated command and control with air and naval forces</li>
                                    <li style="margin-bottom: 4px;">Decentralized execution with centralized planning</li>
                                    <li>Redundant communications and battle management systems</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Enemy Ground Force Courses of Action</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Most Likely Course of Action (Ground Forces):</strong></p>
                                <div style="background: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"Adversary ground forces conduct defensive operations in depth, utilizing prepared positions and obstacles to attrit NATO forces, while conducting limited counterattacks to exploit tactical opportunities and maintain initiative."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Most Dangerous Course of Action (Ground Forces):</strong></p>
                                <div style="background: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"Adversary launches coordinated ground offensive across multiple axes, employs tactical nuclear weapons against NATO force concentrations, conducts deep strikes against logistics nodes, and attempts to achieve rapid territorial gains before NATO can respond effectively."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Enemy Ground Force Decision Points:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">NATO ground force deployment exceeds 100,000 personnel</li>
                                    <li style="margin-bottom: 4px;">Allied air superiority achieved over operational area</li>
                                    <li style="margin-bottom: 4px;">Strategic logistics infrastructure under sustained attack</li>
                                    <li>Ground force casualties exceed 20% of combat strength</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.6);">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Army Intelligence Collection Requirements</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Army Priority Intelligence Requirements:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">What are enemy ground force deployment patterns and defensive preparations?</li>
                                    <li style="margin-bottom: 4px;">What are enemy artillery and rocket system locations and capabilities?</li>
                                    <li style="margin-bottom: 4px;">What are enemy logistics nodes and supply route vulnerabilities?</li>
                                    <li>What are enemy ground force reserve locations and employment doctrine?</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Army Named Areas of Interest:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Major ground force assembly areas and staging bases</li>
                                    <li style="margin-bottom: 4px;">Artillery positions and ammunition storage sites</li>
                                    <li style="margin-bottom: 4px;">Ground force command posts and communications nodes</li>
                                    <li>Logistics hubs and transportation infrastructure</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 4: Army Friendly Forces and Constraints -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-shield-alt" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                        Army Friendly Forces and Strategic Constraints Analysis
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Army Land Force Structure Assessment</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">U.S. Army Corps Available:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">XVIII Airborne Corps: 82nd Airborne Division, 101st Airborne Division, 3rd Infantry Division</li>
                                    <li style="margin-bottom: 4px;">V Corps: 1st Armored Division, 1st Infantry Division, 3rd Armored Brigade Combat Team</li>
                                    <li style="margin-bottom: 4px;">VII Corps: 1st Cavalry Division, 4th Infantry Division, 2nd Armored Brigade Combat Team</li>
                                    <li style="margin-bottom: 4px;">Theater Enablers: 18th Fires Brigade, 35th Air Defense Artillery Brigade</li>
                                    <li>Special Operations: 1st Special Forces Command (Airborne) elements</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">NATO Allied Land Forces:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">German Army: 10th Armored Division, 1st Armored Division, Rapid Response Forces</li>
                                    <li style="margin-bottom: 4px;">French Army: 1st Armored Division, 3rd Infantry Division, Foreign Legion elements</li>
                                    <li style="margin-bottom: 4px;">British Army: 3rd (UK) Division, 1st Armoured Infantry Brigade</li>
                                    <li style="margin-bottom: 4px;">Polish Army: 11th Armoured Cavalry Division, 16th Mechanized Division</li>
                                    <li>Multinational Corps Northeast and Southeast integration</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">Army Sustainment Capabilities:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Theater Sustainment Command with 200,000+ personnel support capacity</li>
                                    <li style="margin-bottom: 4px;">Strategic mobility through European rail and road networks</li>
                                    <li style="margin-bottom: 4px;">Ammunition supply points and forward logistics elements</li>
                                    <li>Medical support with Role 3 medical facilities and casualty evacuation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Army Strategic Constraints</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Command and Control Constraints:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">NATO Land Command coordination requirements for multinational operations</li>
                                    <li style="margin-bottom: 4px;">Host nation coordination for cross-border operations</li>
                                    <li style="margin-bottom: 4px;">Rules of engagement coordination across 29 NATO allies</li>
                                    <li style="margin-bottom: 4px;">Interoperability challenges with different equipment and procedures</li>
                                    <li>Language barriers and cultural differences in multinational staff</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Operational Constraints:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Strategic mobility limited by transportation infrastructure capacity</li>
                                    <li style="margin-bottom: 4px;">Civilian population density requiring precision in targeting and maneuver</li>
                                    <li style="margin-bottom: 4px;">Environmental considerations and infrastructure protection requirements</li>
                                    <li style="margin-bottom: 4px;">Logistics complexity across multiple national supply systems</li>
                                    <li>Weather and seasonal considerations affecting operations</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Resource Limitations:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Ammunition stockpiles and precision munitions availability</li>
                                    <li style="margin-bottom: 4px;">Fuel and petroleum products distribution capacity</li>
                                    <li style="margin-bottom: 4px;">Spare parts and maintenance support for diverse equipment</li>
                                    <li>Medical supplies and casualty treatment capacity</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.6);">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Army Strategic Risk Assessment</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">High-Priority Army Risks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;"><strong>Command Coordination Failure:</strong> Multinational command breakdown affecting operations (High Impact/Medium Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Logistics Disruption:</strong> Strategic supply line attacks affecting sustainment (High Impact/High Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Tactical Nuclear Employment:</strong> Enemy tactical nuclear use against corps formations (High Impact/Low Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Civilian Casualties:</strong> High civilian casualties affecting political support (Medium Impact/Medium Probability)</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Risk Mitigation Strategies:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Establish redundant command and control systems with NATO integration</li>
                                    <li style="margin-bottom: 4px;">Develop distributed logistics networks with multiple supply routes</li>
                                    <li style="margin-bottom: 4px;">Maintain tactical dispersion and mobility to reduce nuclear targeting</li>
                                    <li>Implement strict civilian protection measures and information operations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Mission Analysis Excellence Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(168, 85, 247, 0.1); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                <h3 style="color: #a855f7; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); position: relative; z-index: 1;">
                    <i class="fas fa-star" style="margin-right: 12px; font-size: 20px; text-shadow: 0 0 12px rgba(168, 85, 247, 0.5);"></i>
                    Army Mission Analysis Excellence Framework - European Campaign
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; position: relative; z-index: 1;">
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Army Strategic Integration</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Theater strategic guidance integration and land operations alignment</li>
                            <li style="margin-bottom: 4px;">Multi-corps coordination and NATO land force integration</li>
                            <li style="margin-bottom: 4px;">Eastern European operational environment comprehensive assessment</li>
                            <li>Army-level risk assessment and strategic mitigation planning</li>
                        </ul>
                    </div>
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Army Strategic Products</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Army mission statement with multinational land force integration</li>
                            <li style="margin-bottom: 4px;">Eastern European land operations environment analysis</li>
                            <li style="margin-bottom: 4px;">Adversary ground forces courses of action and decision points</li>
                            <li>Multi-corps force structure analysis and constraint assessment</li>
                        </ul>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.4); position: relative; z-index: 1;">
                    <h4 style="color: #c084fc; font-size: 16px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(168, 85, 247, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-medal" style="margin-right: 12px; font-size: 18px;"></i>
                        Army Strategic Command Excellence Summary (4-Star General Level)
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Army Strategic Leader Responsibilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Theater Integration:</strong> Translate theater guidance into Army land operations objectives</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Multi-Corps Leadership:</strong> Synchronize 3 corps under unified Army command</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Strategic Risk Management:</strong> Balance Army objectives with strategic risk across land domain</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Army Strategic Planning Excellence</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Comprehensive Analysis:</strong> Systematic application of JP 5-0 and FM 5-0 doctrine</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Strategic Integration:</strong> Seamless coordination from theater to corps execution</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Multi-Corps Synchronization:</strong> Unified planning across corps formations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (Joint Planning), Chapter 4 — Mission Analysis | JP 3-0 (Joint Operations) | FM 5-0 (Planning and Orders Production) | FM 3-0 (Operations) | European Campaign Land Operations Analysis
                </div>
            </div>
        </div>
    `;
  }
};

export default armyPracticalModule;

