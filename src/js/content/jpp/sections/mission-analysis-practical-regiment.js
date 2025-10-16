/**
 * JPP Step 2: Mission Analysis - Regiment Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign mission analysis examples
 * Authorized to exceed 300-line limit due to extensive operational content requirements
 * Target: 30,000-40,000 characters of comprehensive practical content
 */

export const regimentPracticalModule = {
  getContent() {
    return `
        <div style="padding: 20px;">
            <!-- Regiment Mission Analysis Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-medal" style="margin-right: 12px; color: #3b82f6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Regiment Level Mission Analysis - European Campaign</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 2 Practical Examples - Colonel Command Level (Specialized Operations)</p>
                </div>
            </div>

            <!-- 2x2 Practical Examples Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Example 1: Regiment Mission Statement Development -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(16, 185, 129, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-bullseye" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                        Regiment Mission Statement Development - 2nd Cavalry Regiment
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Operational Context: 2nd Cavalry Regiment (Stryker)</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Scenario:</strong> Colonel Thompson, Commanding Officer, 2nd Cavalry Regiment, receives mission from V Corps to conduct reconnaissance and security operations, providing early warning and initial contact with enemy forces in assigned sector.</p>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Higher Commander's Intent (V Corps):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Purpose:</strong> Conduct reconnaissance and security operations to provide early warning</li>
                                    <li style="margin-bottom: 4px;"><strong>Method:</strong> Multi-squadron reconnaissance with supporting fires and aviation</li>
                                    <li style="margin-bottom: 4px;"><strong>End State:</strong> Enemy forces located, corps main body protected, reconnaissance handover completed</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #6ee7b7;">Regiment Mission Variables (Operational METT-TC):</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Mission:</strong> Reconnaissance and security operations for corps</li>
                                    <li style="margin-bottom: 4px;"><strong>Enemy:</strong> Enemy reconnaissance forces and advance guard elements</li>
                                    <li style="margin-bottom: 4px;"><strong>Terrain:</strong> 40km x 30km reconnaissance area, mixed terrain</li>
                                    <li style="margin-bottom: 4px;"><strong>Troops:</strong> 3 cavalry squadrons, 1 fires squadron, 3,500+ personnel</li>
                                    <li style="margin-bottom: 4px;"><strong>Time:</strong> Operations commence D+62, duration 5-7 days</li>
                                    <li><strong>Civil:</strong> 100,000 civilians, multiple small towns</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Regiment Mission Statement Construction</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Developed Regiment Mission Statement:</strong></p>
                                <div style="background: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"2nd Cavalry Regiment conducts reconnaissance and security operations in Reconnaissance Area North, serving as V Corps covering force, to locate enemy forces, provide early warning, and conduct reconnaissance handover to follow-on forces, commencing D+62, in order to enable corps decisive operations and protect the main body."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Five W's Analysis:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Who:</strong> 2nd Cavalry Regiment as corps covering force</li>
                                    <li style="margin-bottom: 4px;"><strong>What:</strong> Reconnaissance and security operations</li>
                                    <li style="margin-bottom: 4px;"><strong>When:</strong> Commencing D+62</li>
                                    <li style="margin-bottom: 4px;"><strong>Where:</strong> Reconnaissance Area North</li>
                                    <li><strong>Why:</strong> Enable corps decisive operations, protect main body</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.6);">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Regiment Essential Tasks and Success Criteria</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Specified Tasks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Locate enemy forces in assigned reconnaissance area</li>
                                    <li style="margin-bottom: 4px;">Provide early warning of enemy activities</li>
                                    <li style="margin-bottom: 4px;">Conduct reconnaissance handover to follow-on forces</li>
                                    <li>Protect corps main body from enemy reconnaissance</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Implied Tasks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Establish regiment tactical operations center</li>
                                    <li style="margin-bottom: 4px;">Coordinate squadron boundaries and reconnaissance objectives</li>
                                    <li style="margin-bottom: 4px;">Plan for civilian interaction and information collection</li>
                                    <li>Develop regiment information operations plan</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Success Criteria:</strong> Enemy forces located and reported, early warning provided, reconnaissance handover completed, corps main body protected.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 2: Regiment Operational Environment Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-globe" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                        Regiment Operational Environment Analysis - Reconnaissance Area North
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Regiment Reconnaissance Area PMESII-PT Analysis</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Political Factors (Regiment Level):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Local government coordination for reconnaissance activities</li>
                                    <li style="margin-bottom: 4px;">Municipal authorities coordination for civilian interaction</li>
                                    <li style="margin-bottom: 4px;">Local political sensitivities affecting reconnaissance operations</li>
                                    <li style="margin-bottom: 4px;">Host nation support agreements for reconnaissance logistics</li>
                                    <li>Regional political considerations affecting squadron operations</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Military Factors (Regiment Operations):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">2nd Cavalry Regiment: 1st Squadron, 2nd Squadron, 3rd Squadron, Fires Squadron</li>
                                    <li style="margin-bottom: 4px;">Adjacent units: Division reconnaissance elements, corps intelligence assets</li>
                                    <li style="margin-bottom: 4px;">Supporting fires: Regiment fires squadron, corps artillery coordination</li>
                                    <li style="margin-bottom: 4px;">Air support: Attack helicopters, reconnaissance aircraft, air mobility</li>
                                    <li>Regiment sustainment: Forward support troops, maintenance teams</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Economic/Infrastructure Factors:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Transportation networks: Multiple highways, local roads, observation points</li>
                                    <li style="margin-bottom: 4px;">Critical infrastructure: Communication towers, key bridges, chokepoints</li>
                                    <li style="margin-bottom: 4px;">Economic centers: Multiple small towns, industrial areas, agricultural regions</li>
                                    <li style="margin-bottom: 4px;">Supply routes: Main supply route, alternate supply routes</li>
                                    <li>Host nation support: Fuel points, maintenance facilities, information sources</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Social, Information, Physical Environment, Time:</strong> 100,000 civilians as information sources, reconnaissance information operations, varied terrain (open/forested/urban), 5-7 day reconnaissance timeline.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Regiment Reconnaissance Centers of Gravity</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Friendly Regiment Center of Gravity:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Center of Gravity:</strong> Multi-Squadron Reconnaissance Integration</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Capabilities:</strong> Reconnaissance, surveillance, early warning</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Requirements:</strong> Command and control, communications, mobility</li>
                                    <li><strong>Critical Vulnerabilities:</strong> Command posts, communication systems, fuel supply</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Enemy Reconnaissance Forces Center of Gravity:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Center of Gravity:</strong> Reconnaissance and Counter-Reconnaissance Capabilities</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Capabilities:</strong> Information collection, counter-reconnaissance, early warning</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Requirements:</strong> Observation posts, communication, mobility</li>
                                    <li><strong>Critical Vulnerabilities:</strong> Exposed positions, communication nodes, supply lines</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.6);">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Regiment Reconnaissance Variables Integration</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Regiment METT-TC Integration:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Political factors affect squadron coordination and civilian interaction</li>
                                    <li style="margin-bottom: 4px;">Economic infrastructure determines reconnaissance routes and observation points</li>
                                    <li style="margin-bottom: 4px;">Information environment shapes civilian cooperation and intelligence collection</li>
                                    <li style="margin-bottom: 4px;">Physical terrain affects squadron reconnaissance and surveillance operations</li>
                                    <li>Time factors influenced by multi-squadron coordination and reconnaissance handover</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 3: Regiment Enemy Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-crosshairs" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                        Regiment Enemy Analysis - Enemy Reconnaissance Forces Assessment
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Enemy Reconnaissance Forces Assessment</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Reconnaissance Structure:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Ground Forces: 1,500+ personnel, reconnaissance battalions, advance guard elements</li>
                                    <li style="margin-bottom: 4px;">Armored Systems: 20+ reconnaissance vehicles, 30+ infantry fighting vehicles</li>
                                    <li style="margin-bottom: 4px;">Artillery: 15+ artillery pieces, mortar systems</li>
                                    <li style="margin-bottom: 4px;">Air Defense: Mobile air defense systems, counter-UAS capabilities</li>
                                    <li>Support Elements: Engineer, logistics, electronic warfare, intelligence companies</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Reconnaissance Doctrine:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Reconnaissance in force with advance guard elements</li>
                                    <li style="margin-bottom: 4px;">Counter-reconnaissance operations against friendly forces</li>
                                    <li style="margin-bottom: 4px;">Information collection and intelligence gathering</li>
                                    <li style="margin-bottom: 4px;">Electronic warfare and reconnaissance information operations</li>
                                    <li>Civilian interaction and information exploitation</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Command Structure:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Reconnaissance brigade headquarters with integrated staff</li>
                                    <li style="margin-bottom: 4px;">Battalion-level subordinate commands</li>
                                    <li style="margin-bottom: 4px;">Decentralized reconnaissance with centralized reporting</li>
                                    <li>Redundant communications and reconnaissance battle management</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Enemy Reconnaissance Courses of Action</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Most Likely Course of Action:</strong></p>
                                <div style="background: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"Enemy reconnaissance forces conduct reconnaissance in force, utilizing advance guard elements to locate and fix 2nd Cavalry Regiment forces, while conducting counter-reconnaissance operations to deny information to friendly forces."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Most Dangerous Course of Action:</strong></p>
                                <div style="background: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"Enemy launches coordinated reconnaissance attack with multiple battalions against 2nd Cavalry Regiment positions, employs electronic warfare against communications, and conducts deep strikes against regiment logistics nodes."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Enemy Decision Points:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">2nd Cavalry Regiment positions identified</li>
                                    <li style="margin-bottom: 4px;">Squadron-level contact established</li>
                                    <li style="margin-bottom: 4px;">Reconnaissance objectives achieved</li>
                                    <li>Regiment logistics under sustained attack</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.6);">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Regiment Intelligence Requirements</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Regiment Priority Intelligence Requirements:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">What are enemy reconnaissance force locations and capabilities?</li>
                                    <li style="margin-bottom: 4px;">Where are enemy advance guard elements and main body forces?</li>
                                    <li style="margin-bottom: 4px;">What are enemy counter-reconnaissance capabilities and tactics?</li>
                                    <li>What are enemy information collection priorities and methods?</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Regiment Named Areas of Interest:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Enemy observation posts and reconnaissance positions</li>
                                    <li style="margin-bottom: 4px;">Advance guard assembly areas and movement routes</li>
                                    <li style="margin-bottom: 4px;">Electronic warfare and intelligence collection sites</li>
                                    <li>Communication nodes and command posts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 4: Regiment Friendly Forces and Constraints -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-shield-alt" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                        Regiment Friendly Forces and Reconnaissance Constraints Analysis
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Regiment Multi-Squadron Force Structure</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">2nd Cavalry Regiment Squadrons:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">1st Squadron: 3 cavalry troops, 1 tank company, 600+ personnel</li>
                                    <li style="margin-bottom: 4px;">2nd Squadron: 3 cavalry troops, 1 tank company, 600+ personnel</li>
                                    <li style="margin-bottom: 4px;">3rd Squadron: 3 cavalry troops, 1 tank company, 600+ personnel</li>
                                    <li style="margin-bottom: 4px;">Fires Squadron: 3 field artillery batteries, target acquisition, 500+ personnel</li>
                                    <li>Support Squadron: Forward support troops, maintenance, 400+ personnel</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">Regiment Support Elements:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Regiment Engineers: Mobility, reconnaissance, survivability operations</li>
                                    <li style="margin-bottom: 4px;">Air Defense: Short-range air defense systems, counter-UAS capabilities</li>
                                    <li style="margin-bottom: 4px;">Military Intelligence: Intelligence troop, reconnaissance assets</li>
                                    <li style="margin-bottom: 4px;">Signal: Communications troop, network operations</li>
                                    <li>Military Police: Route security, reconnaissance security</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">Regiment Sustainment:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Forward Support Troops: Distribution, maintenance, medical support</li>
                                    <li style="margin-bottom: 4px;">Medical Support: Forward aid stations, medical evacuation</li>
                                    <li style="margin-bottom: 4px;">Maintenance: Forward maintenance teams, recovery operations</li>
                                    <li>Supply Operations: Ammunition, fuel, water, food distribution to squadrons</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Regiment Reconnaissance Constraints</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Command and Control Constraints:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Multi-squadron coordination across 40km x 30km reconnaissance area</li>
                                    <li style="margin-bottom: 4px;">Adjacent unit coordination with division reconnaissance elements</li>
                                    <li style="margin-bottom: 4px;">Corps fires coordination and airspace management</li>
                                    <li style="margin-bottom: 4px;">Joint intelligence coordination with air and space assets</li>
                                    <li>Host nation coordination for reconnaissance activities</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Reconnaissance Constraints:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Civilian population density requiring discrete reconnaissance operations</li>
                                    <li style="margin-bottom: 4px;">Infrastructure protection requirements for information collection</li>
                                    <li style="margin-bottom: 4px;">Environmental considerations and weather effects on reconnaissance</li>
                                    <li style="margin-bottom: 4px;">Rules of engagement coordination for civilian interaction</li>
                                    <li>Time constraints for rapid reconnaissance and handover operations</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Resource Limitations:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Fuel consumption rates for extended reconnaissance operations</li>
                                    <li style="margin-bottom: 4px;">Communication range limitations across extended reconnaissance area</li>
                                    <li style="margin-bottom: 4px;">Maintenance support for diverse equipment across squadrons</li>
                                    <li>Intelligence processing capacity for reconnaissance information</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.6);">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Regiment Reconnaissance Risk Assessment</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">High-Priority Regiment Risks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;"><strong>Squadron Coordination Failure:</strong> Loss of synchronization between squadrons (High Impact/Medium Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Communication Disruption:</strong> Electronic warfare attacks affecting reconnaissance reporting (High Impact/High Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Enemy Counter-Reconnaissance:</strong> Enemy forces targeting regiment reconnaissance assets (High Impact/Medium Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Information Compromise:</strong> Reconnaissance information compromised or delayed (Medium Impact/Medium Probability)</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Risk Mitigation Strategies:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Establish redundant communication systems across squadrons</li>
                                    <li style="margin-bottom: 4px;">Develop multiple reconnaissance routes and observation points</li>
                                    <li style="margin-bottom: 4px;">Maintain regiment reserves and flexible response capabilities</li>
                                    <li>Implement strict operational security measures and reconnaissance protocols</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Regiment Mission Analysis Excellence Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(168, 85, 247, 0.1); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                <h3 style="color: #a855f7; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); position: relative; z-index: 1;">
                    <i class="fas fa-medal" style="margin-right: 12px; font-size: 20px; text-shadow: 0 0 12px rgba(168, 85, 247, 0.5);"></i>
                    Regiment Mission Analysis Excellence Framework - European Campaign
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; position: relative; z-index: 1;">
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Regiment Reconnaissance Integration</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Corps reconnaissance guidance integration and operational alignment</li>
                            <li style="margin-bottom: 4px;">Multi-squadron coordination and reconnaissance synchronization</li>
                            <li style="margin-bottom: 4px;">Reconnaissance area environment comprehensive assessment</li>
                            <li>Regiment-level risk assessment and reconnaissance mitigation planning</li>
                        </ul>
                    </div>
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Regiment Reconnaissance Products</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Regiment mission statement with multi-squadron integration</li>
                            <li style="margin-bottom: 4px;">Reconnaissance area environment analysis and centers of gravity</li>
                            <li style="margin-bottom: 4px;">Enemy reconnaissance forces courses of action and decision points</li>
                            <li>Multi-squadron force structure analysis and constraint assessment</li>
                        </ul>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.4); position: relative; z-index: 1;">
                    <h4 style="color: #c084fc; font-size: 16px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(168, 85, 247, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-medal" style="margin-right: 12px; font-size: 18px;"></i>
                        Regiment Reconnaissance Command Excellence Summary (Colonel Level)
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Regiment Reconnaissance Leader Responsibilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Corps Integration:</strong> Translate Corps guidance into Regiment reconnaissance objectives</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Multi-Squadron Leadership:</strong> Synchronize multiple squadrons under unified Regiment command</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Reconnaissance Risk Management:</strong> Balance Regiment objectives with reconnaissance risk</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Regiment Reconnaissance Planning Excellence</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Comprehensive Analysis:</strong> Systematic application of JP 5-0 and FM 3-0 doctrine</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Reconnaissance Integration:</strong> Seamless coordination from Corps to squadron execution</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Multi-Squadron Synchronization:</strong> Unified planning across squadron formations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (Joint Planning), Chapter 4 — Mission Analysis | JP 3-0 (Joint Operations) | FM 5-0 (Planning and Orders Production) | FM 3-0 (Operations) | European Campaign Regiment Reconnaissance Analysis
                </div>
            </div>
        </div>
    `;
  }
};

export default regimentPracticalModule;

