/**
 * JPP Step 2: Mission Analysis - Platoon Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign mission analysis examples
 * Authorized to exceed 300-line limit due to extensive tactical content requirements
 * Target: 25,000-35,000 characters of comprehensive practical content
 */

export const platoonPracticalModule = {
  getContent() {
    return `
        <div style="padding: 20px;">
            <!-- Platoon Mission Analysis Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-users" style="margin-right: 12px; color: #3b82f6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Platoon Level Mission Analysis - European Campaign</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 2 Practical Examples - Lieutenant Command Level</p>
                </div>
            </div>

            <!-- 2x2 Practical Examples Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Example 1: Platoon Mission Statement Development -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(16, 185, 129, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-bullseye" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                        Platoon Mission Statement Development - 1st Platoon
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Tactical Context: 1st Platoon (Armor)</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Scenario:</strong> Lieutenant Thompson, Platoon Leader, 1st Platoon, receives mission from A Company to serve as the company main effort, conducting combined arms assault to defeat enemy platoon in assigned sector.</p>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Higher Commander's Intent (A Company):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Purpose:</strong> Conduct combined arms assault as company main effort to defeat enemy platoon</li>
                                    <li style="margin-bottom: 4px;"><strong>Method:</strong> Multi-squad combined arms operations with supporting fires</li>
                                    <li style="margin-bottom: 4px;"><strong>End State:</strong> Enemy platoon defeated, sector secured, exploitation prepared</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #6ee7b7;">Platoon Mission Variables (Tactical METT-TC):</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Mission:</strong> Combined arms assault as company main effort</li>
                                    <li style="margin-bottom: 4px;"><strong>Enemy:</strong> Enemy motor rifle platoon with 50+ personnel</li>
                                    <li style="margin-bottom: 4px;"><strong>Terrain:</strong> 1km x 800m sector, mixed urban/rural terrain</li>
                                    <li style="margin-bottom: 4px;"><strong>Troops:</strong> 4 armor squads, 1 headquarters squad, 50+ personnel</li>
                                    <li style="margin-bottom: 4px;"><strong>Time:</strong> Operations commence D+69, duration 6-12 hours</li>
                                    <li><strong>Civil:</strong> 2,000 civilians, residential area</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Platoon Mission Statement Construction</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Developed Platoon Mission Statement:</strong></p>
                                <div style="background: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"1st Platoon conducts combined arms assault operations in Sector Alpha-1, serving as A Company main effort, to defeat enemy motor rifle platoon, secure Phase Line Alpha, and prepare for exploitation operations, commencing D+69 at 0600, in order to enable company decisive operations and restore territorial control."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Five W's Analysis:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Who:</strong> 1st Platoon as company main effort</li>
                                    <li style="margin-bottom: 4px;"><strong>What:</strong> Combined arms assault operations</li>
                                    <li style="margin-bottom: 4px;"><strong>When:</strong> Commencing D+69 at 0600</li>
                                    <li style="margin-bottom: 4px;"><strong>Where:</strong> Sector Alpha-1</li>
                                    <li><strong>Why:</strong> Enable company decisive operations, restore territorial control</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.6);">
                            <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Platoon Essential Tasks and Success Criteria</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Specified Tasks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Defeat enemy motor rifle platoon in assigned sector</li>
                                    <li style="margin-bottom: 4px;">Secure Phase Line Alpha</li>
                                    <li style="margin-bottom: 4px;">Coordinate with 2nd Platoon (north) and 3rd Platoon (south)</li>
                                    <li>Prepare for exploitation operations on order</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Implied Tasks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Establish platoon command post</li>
                                    <li style="margin-bottom: 4px;">Coordinate squad boundaries and objectives</li>
                                    <li style="margin-bottom: 4px;">Plan for civilian evacuation and protection</li>
                                    <li>Develop platoon information operations plan</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Success Criteria:</strong> Enemy platoon defeated with 60%+ casualties, phase line secured, platoon ready for exploitation within 12 hours.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 2: Platoon Tactical Environment Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-globe" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                        Platoon Tactical Environment Analysis - Sector Alpha-1
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Platoon Sector PMESII-PT Analysis</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Political Factors (Platoon Level):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Local government coordination for platoon tactical activities</li>
                                    <li style="margin-bottom: 4px;">Municipal authorities coordination for civilian protection</li>
                                    <li style="margin-bottom: 4px;">Local political sensitivities affecting platoon rules of engagement</li>
                                    <li style="margin-bottom: 4px;">Host nation support agreements for platoon logistics</li>
                                    <li>Regional political considerations affecting squad operations</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Military Factors (Platoon Operations):</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">1st Platoon: Alpha Squad, Bravo Squad, Charlie Squad, Delta Squad, Headquarters Squad</li>
                                    <li style="margin-bottom: 4px;">Adjacent units: 2nd Platoon (north), 3rd Platoon (south)</li>
                                    <li style="margin-bottom: 4px;">Supporting fires: Platoon mortar section, company fires coordination</li>
                                    <li style="margin-bottom: 4px;">Air support: Close air support, medical evacuation</li>
                                    <li>Platoon sustainment: Forward support elements, maintenance teams</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #93c5fd;">Economic/Infrastructure Factors:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Transportation networks: Local roads, tactical routes</li>
                                    <li style="margin-bottom: 4px;">Critical infrastructure: Power lines, communication towers, bridges</li>
                                    <li style="margin-bottom: 4px;">Economic centers: Residential area, small businesses, agricultural regions</li>
                                    <li style="margin-bottom: 4px;">Supply routes: Company supply route, alternate routes</li>
                                    <li>Host nation support: Local fuel points, maintenance facilities, medical support</li>
                                </ul>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Social, Information, Physical Environment, Time:</strong> 2,000 civilians requiring protection, platoon information operations, mixed terrain (urban/residential), 6-12 hour tactical timeline.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Platoon Tactical Centers of Gravity</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Friendly Platoon Center of Gravity:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Center of Gravity:</strong> Multi-Squad Combined Arms Integration</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Capabilities:</strong> Synchronized maneuver, integrated fires, close combat</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Requirements:</strong> Command and control, logistics support, fire support</li>
                                    <li><strong>Critical Vulnerabilities:</strong> Command posts, supply lines, communication systems</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Enemy Platoon Forces Center of Gravity:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;"><strong>Center of Gravity:</strong> Defensive Positions and Fire Support</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Capabilities:</strong> Defensive fires, obstacle operations, local counterattack</li>
                                    <li style="margin-bottom: 4px;"><strong>Critical Requirements:</strong> Prepared positions, ammunition supply, communication</li>
                                    <li><strong>Critical Vulnerabilities:</strong> Flanks, logistics nodes, command isolation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.6);">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Platoon Tactical Variables Integration</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Platoon METT-TC Integration:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Political factors affect squad coordination and civilian protection measures</li>
                                    <li style="margin-bottom: 4px;">Economic infrastructure determines platoon logistics and sustainment operations</li>
                                    <li style="margin-bottom: 4px;">Information environment shapes local population support and enemy morale</li>
                                    <li style="margin-bottom: 4px;">Physical terrain affects squad maneuver and fires coordination</li>
                                    <li>Time factors influenced by multi-squad coordination and tactical synchronization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 3: Platoon Enemy Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-crosshairs" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                        Platoon Enemy Analysis - Enemy Motor Rifle Platoon Assessment
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Enemy Platoon-Level Forces Assessment</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Motor Rifle Platoon Structure:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Ground Forces: 50+ personnel, 3 motor rifle squads, 1 headquarters squad</li>
                                    <li style="margin-bottom: 4px;">Armored Systems: 1+ main battle tank, 2+ infantry fighting vehicles</li>
                                    <li style="margin-bottom: 4px;">Artillery: 1+ artillery piece, mortar systems</li>
                                    <li style="margin-bottom: 4px;">Air Defense: Platoon air defense section with portable systems</li>
                                    <li>Support Elements: Engineer, logistics, electronic warfare, reconnaissance sections</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Tactical Doctrine:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Defense in depth with prepared positions and obstacles</li>
                                    <li style="margin-bottom: 4px;">Combined arms coordination at squad and team level</li>
                                    <li style="margin-bottom: 4px;">Mobile reserves for local counterattack operations</li>
                                    <li style="margin-bottom: 4px;">Electronic warfare and tactical information operations</li>
                                    <li>Urban warfare and civilian infrastructure targeting</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Enemy Command Structure:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Motor rifle platoon headquarters with integrated staff</li>
                                    <li style="margin-bottom: 4px;">Squad-level subordinate commands</li>
                                    <li style="margin-bottom: 4px;">Centralized planning with decentralized tactical execution</li>
                                    <li>Redundant communications and tactical battle management</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Enemy Platoon-Level Courses of Action</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Most Likely Course of Action:</strong></p>
                                <div style="background: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"Enemy motor rifle platoon conducts defense in depth, utilizing prepared positions and obstacles to channel and attrit 1st Platoon forces, while maintaining squad reserves for limited counterattacks against exposed team flanks."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Most Dangerous Course of Action:</strong></p>
                                <div style="background: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 12px;">
                                    <p style="margin: 0; color: #d1d5db; font-style: italic;">"Enemy launches coordinated counteroffensive with 2 squads against 1st Platoon main effort, employs tactical chemical weapons against squad assembly areas, and conducts deep strikes against platoon logistics nodes."</p>
                                </div>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Enemy Decision Points:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">1st Platoon penetrates forward defensive positions</li>
                                    <li style="margin-bottom: 4px;">Squad-level breakthrough achieved</li>
                                    <li style="margin-bottom: 4px;">Squad reserves committed to battle</li>
                                    <li>Platoon logistics under sustained attack</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.6);">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Platoon Intelligence Requirements</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Platoon Priority Intelligence Requirements:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">What are enemy squad locations and defensive preparations?</li>
                                    <li style="margin-bottom: 4px;">Where are enemy reserve forces and counterattack capabilities?</li>
                                    <li style="margin-bottom: 4px;">What are enemy fire support positions and coordination?</li>
                                    <li>What are enemy logistics vulnerabilities and supply routes?</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Platoon Named Areas of Interest:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Squad assembly areas and command posts</li>
                                    <li style="margin-bottom: 4px;">Fire support positions and ammunition points</li>
                                    <li style="margin-bottom: 4px;">Reserve force staging areas</li>
                                    <li>Logistics hubs and transportation nodes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Example 4: Platoon Friendly Forces and Constraints -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 800px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-shield-alt" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                        Platoon Friendly Forces and Tactical Constraints Analysis
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Platoon Multi-Squad Force Structure</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">1st Platoon Squads:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Alpha Squad (Armor): 2 armor teams, 1 headquarters team, 12+ personnel</li>
                                    <li style="margin-bottom: 4px;">Bravo Squad (Armor): 2 armor teams, 1 headquarters team, 12+ personnel</li>
                                    <li style="margin-bottom: 4px;">Charlie Squad (Armor): 2 armor teams, 1 headquarters team, 12+ personnel</li>
                                    <li style="margin-bottom: 4px;">Delta Squad (Armor): 2 armor teams, 1 headquarters team, 12+ personnel</li>
                                    <li>Headquarters Squad: Command, mortar section, maintenance, 12+ personnel</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">Platoon Support Elements:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Platoon Engineers: Mobility, countermobility, survivability operations</li>
                                    <li style="margin-bottom: 4px;">Air Defense: Short-range air defense systems, counter-UAS capabilities</li>
                                    <li style="margin-bottom: 4px;">Military Intelligence: Intelligence section, reconnaissance assets</li>
                                    <li style="margin-bottom: 4px;">Signal: Communications section, network operations</li>
                                    <li>Military Police: Route security, detention operations</li>
                                </ul>
                                <p style="margin: 0 0 12px 0;"><strong style="color: #fbbf24;">Platoon Sustainment:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Forward Support Elements: Distribution, maintenance, medical support</li>
                                    <li style="margin-bottom: 4px;">Medical Support: Forward aid stations, medical evacuation</li>
                                    <li style="margin-bottom: 4px;">Maintenance: Forward maintenance teams, recovery operations</li>
                                    <li>Supply Operations: Ammunition, fuel, water, food distribution to squads</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Platoon Tactical Constraints</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Command and Control Constraints:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Multi-squad coordination across 1km x 800m sector</li>
                                    <li style="margin-bottom: 4px;">Adjacent unit coordination with 2nd Platoon and 3rd Platoon</li>
                                    <li style="margin-bottom: 4px;">Company fires coordination and airspace management</li>
                                    <li style="margin-bottom: 4px;">Joint fires coordination with air and artillery forces</li>
                                    <li>Host nation coordination for tactical activities</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Tactical Constraints:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Civilian population density requiring precision targeting and maneuver</li>
                                    <li style="margin-bottom: 4px;">Infrastructure protection requirements for post-conflict operations</li>
                                    <li style="margin-bottom: 4px;">Environmental considerations and seasonal weather effects</li>
                                    <li style="margin-bottom: 4px;">Rules of engagement coordination for urban operations</li>
                                    <li>Time constraints for rapid tactical decisive operations</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Resource Limitations:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #d1d5db;">
                                    <li style="margin-bottom: 4px;">Ammunition consumption rates exceeding platoon resupply capacity</li>
                                    <li style="margin-bottom: 4px;">Fuel distribution across extended sector</li>
                                    <li style="margin-bottom: 4px;">Maintenance support for diverse equipment across squads</li>
                                    <li>Medical evacuation capacity for platoon mass casualty events</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.6);">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Platoon Tactical Risk Assessment</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">High-Priority Platoon Risks:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;"><strong>Squad Coordination Failure:</strong> Loss of synchronization between squads (High Impact/Medium Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Logistics Disruption:</strong> Supply line attacks affecting platoon sustainment (High Impact/High Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Enemy Counterattack:</strong> Coordinated enemy counteroffensive against exposed squad flanks (High Impact/Medium Probability)</li>
                                    <li style="margin-bottom: 4px;"><strong>Civilian Casualties:</strong> High civilian casualties affecting platoon support (Medium Impact/Medium Probability)</li>
                                </ul>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Risk Mitigation Strategies:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; color: #e0e7ff;">
                                    <li style="margin-bottom: 4px;">Establish redundant command and control systems across squads</li>
                                    <li style="margin-bottom: 4px;">Develop multiple supply routes and distributed logistics nodes</li>
                                    <li style="margin-bottom: 4px;">Maintain platoon reserves and flexible response capabilities</li>
                                    <li>Implement strict civilian protection measures and platoon information operations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Platoon Mission Analysis Excellence Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(168, 85, 247, 0.1); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                <h3 style="color: #a855f7; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); position: relative; z-index: 1;">
                    <i class="fas fa-users" style="margin-right: 12px; font-size: 20px; text-shadow: 0 0 12px rgba(168, 85, 247, 0.5);"></i>
                    Platoon Mission Analysis Excellence Framework - European Campaign
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; position: relative; z-index: 1;">
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Platoon Tactical Integration</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Company tactical guidance integration and operational alignment</li>
                            <li style="margin-bottom: 4px;">Multi-squad coordination and tactical synchronization</li>
                            <li style="margin-bottom: 4px;">Sector environment comprehensive assessment</li>
                            <li>Platoon-level risk assessment and tactical mitigation planning</li>
                        </ul>
                    </div>
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Platoon Tactical Products</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Platoon mission statement with multi-squad integration</li>
                            <li style="margin-bottom: 4px;">Sector environment analysis and centers of gravity</li>
                            <li style="margin-bottom: 4px;">Enemy motor rifle platoon courses of action and decision points</li>
                            <li>Multi-squad force structure analysis and constraint assessment</li>
                        </ul>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.4); position: relative; z-index: 1;">
                    <h4 style="color: #c084fc; font-size: 16px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(168, 85, 247, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-medal" style="margin-right: 12px; font-size: 18px;"></i>
                        Platoon Tactical Command Excellence Summary (Lieutenant Level)
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Platoon Tactical Leader Responsibilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Company Integration:</strong> Translate Company guidance into Platoon tactical objectives</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Multi-Squad Leadership:</strong> Synchronize multiple squads under unified Platoon command</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Tactical Risk Management:</strong> Balance Platoon objectives with tactical risk</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Platoon Tactical Planning Excellence</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Comprehensive Analysis:</strong> Systematic application of JP 5-0 and FM 3-0 doctrine</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Tactical Integration:</strong> Seamless coordination from Company to squad execution</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Multi-Squad Synchronization:</strong> Unified planning across squad formations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (Joint Planning), Chapter 4 — Mission Analysis | JP 3-0 (Joint Operations) | FM 5-0 (Planning and Orders Production) | FM 3-0 (Operations) | European Campaign Platoon Tactical Analysis
                </div>
            </div>
        </div>
    `;
  }
};

export default platoonPracticalModule;

