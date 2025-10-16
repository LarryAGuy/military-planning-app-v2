/**
 * JPP Step 2: Mission Analysis - Squadron Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign mission analysis examples
 * Authorized to exceed 300-line limit due to extensive tactical content requirements
 * Target: 25,000-35,000 characters of comprehensive practical content
 */

export const squadronPracticalModule = {
  getContent() {
    return `
        <div style="padding: 20px;">
            <!-- Squadron Mission Analysis Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-horse-head" style="margin-right: 12px; color: #3b82f6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Squadron Level Mission Analysis - European Campaign</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 2 Practical Examples - Lieutenant Colonel Command Level (Cavalry/Aviation/Support)</p>
                </div>
            </div>

            <!-- 2x2 Practical Examples Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Example 1: Squadron Mission Statement Development -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(16, 185, 129, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-bullseye" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                        Squadron Mission Statement Development - 1st Squadron
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Tactical Context: 1st Squadron (Cavalry)</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Scenario:</strong> Lieutenant Colonel Williams, Commanding Officer, 1st Squadron, receives mission from 2nd Cavalry Regiment to conduct reconnaissance operations in assigned sector, providing early warning and intelligence collection for regiment operations.</p>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Higher Commander's Intent (2nd Cavalry Regiment):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Purpose:</strong> Conduct reconnaissance operations to provide early warning and intelligence</li>
                                    <li style="margin-bottom: 4px;"><strong>Method:</strong> Multi-troop reconnaissance with supporting fires and aviation</li>
                                    <li style="margin-bottom: 4px;"><strong>End State:</strong> Enemy forces located, regiment protected, reconnaissance handover completed</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #6ee7b7;">Squadron Mission Variables (Tactical METT-TC):</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Mission:</strong> Reconnaissance operations for regiment</li>
                                    <li style="margin-bottom: 4px;"><strong>Enemy:</strong> Enemy reconnaissance forces and advance elements</li>
                                    <li style="margin-bottom: 4px;"><strong>Terrain:</strong> 12km x 10km reconnaissance sector, mixed terrain</li>
                                    <li style="margin-bottom: 4px;"><strong>Troops:</strong> 3 cavalry troops, 1 fires troop, 600+ personnel</li>
                                    <li style="margin-bottom: 4px;"><strong>Time:</strong> Operations commence D+63, duration 2-3 days</li>
                                    <li><strong>Civil:</strong> 30,000 civilians, multiple small towns</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Squadron Mission Statement Construction</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Developed Squadron Mission Statement:</strong></p>
                                <div style="background: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"1st Squadron conducts reconnaissance operations in Reconnaissance Sector North, serving as 2nd Cavalry Regiment advance guard, to locate enemy forces, provide early warning, and conduct reconnaissance handover to follow-on forces, commencing D+63, in order to enable regiment operations and protect the main body."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Five W's Analysis:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Who:</strong> 1st Squadron as regiment advance guard</li>
                                    <li style="margin-bottom: 4px;"><strong>What:</strong> Reconnaissance operations</li>
                                    <li style="margin-bottom: 4px;"><strong>When:</strong> Commencing D+63</li>
                                    <li style="margin-bottom: 4px;"><strong>Where:</strong> Reconnaissance Sector North</li>
                                    <li><strong>Why:</strong> Enable regiment operations, protect main body</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.6);">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Squadron Essential Tasks and Success Criteria</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Specified Tasks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Locate enemy forces in assigned reconnaissance sector</li>
                                    <li style="margin-bottom: 4px;">Provide early warning of enemy activities</li>
                                    <li style="margin-bottom: 4px;">Conduct reconnaissance handover to follow-on forces</li>
                                    <li>Protect regiment main body from enemy reconnaissance</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Implied Tasks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Establish squadron tactical operations center</li>
                                    <li style="margin-bottom: 4px;">Coordinate troop boundaries and reconnaissance objectives</li>
                                    <li style="margin-bottom: 4px;">Plan for civilian interaction and information collection</li>
                                    <li>Develop squadron information operations plan</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Success Criteria:</strong> Enemy forces located and reported, early warning provided, reconnaissance handover completed, regiment main body protected.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 2: Squadron Tactical Environment Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-globe" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                        Squadron Tactical Environment Analysis - Reconnaissance Sector North
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Squadron Reconnaissance Area PMESII-PT Analysis</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Political Factors (Squadron Level):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Local government coordination for reconnaissance activities</li>
                                    <li style="margin-bottom: 4px;">Municipal authorities coordination for troop movement</li>
                                    <li style="margin-bottom: 4px;">Local political sensitivities affecting reconnaissance rules of engagement</li>
                                    <li style="margin-bottom: 4px;">Host nation support agreements for reconnaissance logistics</li>
                                    <li>Regional political considerations affecting troop operations</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Military Factors (Squadron Operations):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">1st Squadron: A Troop, B Troop, C Troop, D Troop (Fires)</li>
                                    <li style="margin-bottom: 4px;">Adjacent units: 2nd Squadron (east), 3rd Squadron (west)</li>
                                    <li style="margin-bottom: 4px;">Supporting fires: Squadron mortar section, regiment fires coordination</li>
                                    <li style="margin-bottom: 4px;">Air support: Reconnaissance helicopters, close air support, medical evacuation</li>
                                    <li>Squadron sustainment: Forward support troop, maintenance teams</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Economic/Infrastructure Factors:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Transportation networks: 2 major roads, local roads, reconnaissance routes</li>
                                    <li style="margin-bottom: 4px;">Critical infrastructure: Communication towers, bridges, observation points</li>
                                    <li style="margin-bottom: 4px;">Economic centers: Multiple small towns, agricultural areas, industrial sites</li>
                                    <li style="margin-bottom: 4px;">Supply routes: Main supply route, alternate routes</li>
                                    <li>Host nation support: Fuel points, maintenance facilities, intelligence sharing</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Social, Information, Physical Environment, Time:</strong> 30,000 civilians requiring interaction, reconnaissance information operations, mixed terrain (rural/urban), 2-3 day reconnaissance timeline.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Squadron Reconnaissance Centers of Gravity</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Friendly Squadron Center of Gravity:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Center of Gravity:</strong> Multi-Troop Reconnaissance Integration</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Capabilities:</strong> Reconnaissance, surveillance, early warning</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Requirements:</strong> Command and control, mobility, communications</li>
                                    <li><strong>Critical Vulnerabilities:</strong> Command posts, reconnaissance platforms, communication systems</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Enemy Reconnaissance Forces Center of Gravity:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Center of Gravity:</strong> Counter-Reconnaissance Capabilities</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Capabilities:</strong> Detection, engagement, information denial</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Requirements:</strong> Sensors, communications, mobility</li>
                                    <li><strong>Critical Vulnerabilities:</strong> Sensor networks, command nodes, logistics</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.6);">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Squadron Reconnaissance Variables Integration</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Squadron METT-TC Integration:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Political factors affect troop coordination and civilian interaction measures</li>
                                    <li style="margin-bottom: 4px;">Economic infrastructure determines reconnaissance logistics and sustainment operations</li>
                                    <li style="margin-bottom: 4px;">Information environment shapes local population support and intelligence collection</li>
                                    <li style="margin-bottom: 4px;">Physical terrain affects troop maneuver and reconnaissance effectiveness</li>
                                    <li>Time factors influenced by multi-troop coordination and reconnaissance synchronization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 3: Squadron Enemy Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-crosshairs" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                        Squadron Enemy Analysis - Enemy Reconnaissance Forces Assessment
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Enemy Squadron-Level Forces Assessment</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Reconnaissance Squadron Structure:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Ground Forces: 600+ personnel, 3 reconnaissance troops, 1 fires troop</li>
                                    <li style="margin-bottom: 4px;">Reconnaissance Systems: Armored reconnaissance vehicles, surveillance systems</li>
                                    <li style="margin-bottom: 4px;">Artillery: Mortar systems, direct fire support</li>
                                    <li style="margin-bottom: 4px;">Air Defense: Troop air defense sections with portable systems</li>
                                    <li>Support Elements: Engineer, logistics, electronic warfare, intelligence sections</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Reconnaissance Doctrine:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Counter-reconnaissance operations and early warning</li>
                                    <li style="margin-bottom: 4px;">Reconnaissance coordination at troop and platoon level</li>
                                    <li style="margin-bottom: 4px;">Mobile screening forces for main body protection</li>
                                    <li style="margin-bottom: 4px;">Electronic warfare and reconnaissance information operations</li>
                                    <li>Urban reconnaissance and civilian information exploitation</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Command Structure:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Reconnaissance squadron headquarters with integrated staff</li>
                                    <li style="margin-bottom: 4px;">Troop-level subordinate commands</li>
                                    <li style="margin-bottom: 4px;">Centralized intelligence with decentralized reconnaissance execution</li>
                                    <li>Redundant communications and reconnaissance battle management</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Enemy Squadron-Level Courses of Action</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Most Likely Course of Action:</strong></p>
                                <div style="background: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"Enemy reconnaissance squadron conducts counter-reconnaissance operations, utilizing mobile screening forces and surveillance systems to detect and engage 1st Squadron reconnaissance elements, while maintaining early warning for main body forces."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Most Dangerous Course of Action:</strong></p>
                                <div style="background: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"Enemy launches coordinated counter-reconnaissance offensive with 2 troops against 1st Squadron reconnaissance elements, employs electronic warfare against squadron communications, and conducts deep strikes against squadron logistics nodes."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Enemy Decision Points:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">1st Squadron penetrates reconnaissance screen</li>
                                    <li style="margin-bottom: 4px;">Troop-level contact established</li>
                                    <li style="margin-bottom: 4px;">Troop reserves committed to engagement</li>
                                    <li>Squadron logistics under sustained attack</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.6);">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Squadron Intelligence Requirements</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Squadron Priority Intelligence Requirements:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">What are enemy troop locations and reconnaissance capabilities?</li>
                                    <li style="margin-bottom: 4px;">Where are enemy screening forces and counter-reconnaissance assets?</li>
                                    <li style="margin-bottom: 4px;">What are enemy surveillance systems and electronic warfare capabilities?</li>
                                    <li>What are enemy logistics vulnerabilities and communication nodes?</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Squadron Named Areas of Interest:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Troop assembly areas and observation posts</li>
                                    <li style="margin-bottom: 4px;">Surveillance system locations and communication sites</li>
                                    <li style="margin-bottom: 4px;">Reserve force staging areas</li>
                                    <li>Logistics hubs and maintenance facilities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 4: Squadron Friendly Forces and Constraints -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-shield-alt" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                        Squadron Friendly Forces and Reconnaissance Constraints Analysis
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Squadron Multi-Troop Force Structure</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">1st Squadron Troops:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">A Troop (Cavalry): 3 cavalry platoons, 1 headquarters platoon, 150+ personnel</li>
                                    <li style="margin-bottom: 4px;">B Troop (Cavalry): 3 cavalry platoons, 1 headquarters platoon, 150+ personnel</li>
                                    <li style="margin-bottom: 4px;">C Troop (Cavalry): 3 cavalry platoons, 1 headquarters platoon, 150+ personnel</li>
                                    <li style="margin-bottom: 4px;">D Troop (Fires): 2 fires platoons, 1 headquarters platoon, 100+ personnel</li>
                                    <li>Headquarters Troop: Command, reconnaissance, maintenance, 50+ personnel</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">Squadron Support Elements:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Squadron Engineers: Mobility, reconnaissance, survivability operations</li>
                                    <li style="margin-bottom: 4px;">Air Defense: Short-range air defense systems, counter-UAS capabilities</li>
                                    <li style="margin-bottom: 4px;">Military Intelligence: Intelligence section, reconnaissance assets</li>
                                    <li style="margin-bottom: 4px;">Signal: Communications section, network operations</li>
                                    <li>Military Police: Route security, reconnaissance security</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">Squadron Sustainment:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Forward Support Troop: Distribution, maintenance, medical support</li>
                                    <li style="margin-bottom: 4px;">Medical Support: Forward aid stations, medical evacuation</li>
                                    <li style="margin-bottom: 4px;">Maintenance: Forward maintenance teams, recovery operations</li>
                                    <li>Supply Operations: Ammunition, fuel, water, food distribution to troops</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Squadron Reconnaissance Constraints</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Command and Control Constraints:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Multi-troop coordination across 12km x 10km reconnaissance sector</li>
                                    <li style="margin-bottom: 4px;">Adjacent unit coordination with 2nd Squadron and 3rd Squadron</li>
                                    <li style="margin-bottom: 4px;">Regiment fires coordination and airspace management</li>
                                    <li style="margin-bottom: 4px;">Joint reconnaissance coordination with air and intelligence forces</li>
                                    <li>Host nation coordination for reconnaissance activities</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Reconnaissance Constraints:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Civilian population density requiring covert reconnaissance and interaction</li>
                                    <li style="margin-bottom: 4px;">Infrastructure protection requirements for intelligence collection</li>
                                    <li style="margin-bottom: 4px;">Environmental considerations and weather effects on reconnaissance</li>
                                    <li style="margin-bottom: 4px;">Rules of engagement coordination for reconnaissance operations</li>
                                    <li>Time constraints for rapid reconnaissance and reporting</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Resource Limitations:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Reconnaissance platform availability for extended operations</li>
                                    <li style="margin-bottom: 4px;">Communication range limitations across extended reconnaissance area</li>
                                    <li style="margin-bottom: 4px;">Maintenance support for reconnaissance equipment across troops</li>
                                    <li>Intelligence processing capacity for reconnaissance information</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.6);">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Squadron Reconnaissance Risk Assessment</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">High-Priority Squadron Risks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;"><strong>Troop Coordination Failure:</strong> Loss of synchronization between troops (High Impact/Medium Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Reconnaissance Compromise:</strong> Enemy detection of reconnaissance operations (High Impact/High Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Enemy Counter-Reconnaissance:</strong> Coordinated enemy response against squadron reconnaissance (High Impact/Medium Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Intelligence Loss:</strong> Reconnaissance intelligence compromised or lost (Medium Impact/Medium Probability)</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Risk Mitigation Strategies:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Establish redundant communication systems across troops</li>
                                    <li style="margin-bottom: 4px;">Develop multiple reconnaissance routes and observation points</li>
                                    <li style="margin-bottom: 4px;">Maintain squadron reserves and flexible response capabilities</li>
                                    <li>Implement strict operational security measures and intelligence protection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Squadron Mission Analysis Excellence Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(168, 85, 247, 0.1); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                <h3 style="color: #a855f7; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); position: relative; z-index: 1;">
                    <i class="fas fa-horse-head" style="margin-right: 12px; font-size: 20px; text-shadow: 0 0 12px rgba(168, 85, 247, 0.5);"></i>
                    Squadron Mission Analysis Excellence Framework - European Campaign
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; position: relative; z-index: 1;">
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Squadron Reconnaissance Integration</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Regiment reconnaissance guidance integration and operational alignment</li>
                            <li style="margin-bottom: 4px;">Multi-troop coordination and reconnaissance synchronization</li>
                            <li style="margin-bottom: 4px;">Reconnaissance sector environment comprehensive assessment</li>
                            <li>Squadron-level risk assessment and reconnaissance mitigation planning</li>
                        </ul>
                    </div>
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Squadron Reconnaissance Products</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Squadron mission statement with multi-troop integration</li>
                            <li style="margin-bottom: 4px;">Reconnaissance sector environment analysis and centers of gravity</li>
                            <li style="margin-bottom: 4px;">Enemy reconnaissance forces courses of action and decision points</li>
                            <li>Multi-troop force structure analysis and constraint assessment</li>
                        </ul>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.4); position: relative; z-index: 1;">
                    <h4 style="color: #c084fc; font-size: 16px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(168, 85, 247, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-medal" style="margin-right: 12px; font-size: 18px;"></i>
                        Squadron Reconnaissance Command Excellence Summary (Lieutenant Colonel Level)
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Squadron Reconnaissance Leader Responsibilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Regiment Integration:</strong> Translate Regiment guidance into Squadron reconnaissance objectives</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Multi-Troop Leadership:</strong> Synchronize multiple troops under unified Squadron command</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Reconnaissance Risk Management:</strong> Balance Squadron objectives with reconnaissance risk</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Squadron Reconnaissance Planning Excellence</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Comprehensive Analysis:</strong> Systematic application of JP 5-0 and FM 3-20 doctrine</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Reconnaissance Integration:</strong> Seamless coordination from Regiment to troop execution</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Multi-Troop Synchronization:</strong> Unified planning across troop formations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (Joint Planning), Chapter 4 — Mission Analysis | JP 3-0 (Joint Operations) | FM 5-0 (Planning and Orders Production) | FM 3-20 (Reconnaissance) | European Campaign Squadron Reconnaissance Analysis
                </div>
            </div>
        </div>
    `;
  }
};

export default squadronPracticalModule;

