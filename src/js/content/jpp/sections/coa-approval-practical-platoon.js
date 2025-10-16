/**
 * JPP Step 6: Course of Action Approval - Platoon Echelon Practical Example
 * Large Scale Combat Operations (LSCO) - European Campaign
 * Operation STEADFAST GUARDIAN - 1st Platoon, Alpha Company, 2-34 Armor Regiment Implementation
 *
 * Educational Purpose: Demonstrates platoon-level COA approval processes in coalition LSCO environment
 * Command Level: 1st Platoon, Alpha Company, 2-34 Armor Regiment (Second Lieutenant O-1)
 * Scenario: Implementation of company commander's approved Mobile Engagement COA in Battle Position ALPHA-1
 *
 * Professional Military Education Applications:
 * - Basic Officer Leader Course tactical planning
 * - Armor Officer Basic Course
 * - Platoon Leader development programs (O-1 through O-2)
 * - Small unit tactical planning exercises
 */

export function getPlatoonCOAApprovalExample() {
    return `
        <div style="padding: 20px;">
            <!-- Platoon COA Approval Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-user-friends" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 6: COA Approval - Platoon Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Tank Platoon COA Approval Process</p>
                </div>
            </div>

            <!-- Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-crosshairs" style="margin-right: 8px;"></i>
                    Platoon Tactical Scenario - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-user-tie" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Command Structure & Mission
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Unit:</strong> 1st Platoon, Alpha Company, 2-34 Armor Regiment "Iron Knights" (1st PLT/A/2-34 AR)<br>
                            <strong>Platoon Leader:</strong> Second Lieutenant David R. Thompson, U.S. Army<br>
                            <strong>Platoon Sergeant:</strong> Sergeant First Class Maria L. Rodriguez, U.S. Army<br>
                            <strong>Force Structure:</strong> 16 personnel across 4 M1A2 Abrams tanks<br>
                            <strong>Area of Operations:</strong> Battle Position ALPHA-1, 800m frontage, 400m depth
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Higher Commander's Intent:</strong> Alpha Company conducts mobile engagement operations in sector ALPHA. 1st Platoon occupies Battle Position ALPHA-1, engages enemy armor at maximum effective range, and conducts tactical movement to alternate positions as directed by company commander.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Tactical Situation Assessment
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Enemy:</strong> Enemy tank platoon (4 T-90M tanks) advancing along Axis BRAVO to seize key terrain. Enemy supported by BMP-3 infantry fighting vehicles and indirect fire support. Estimated time of arrival in engagement area: 20 minutes.<br>
                            <strong>Friendly:</strong> Adjacent platoons include 2nd Platoon (east) and 3rd Platoon (west). Company commander positioned for overwatch and fire coordination.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Terrain:</strong> Excellent hull-down positions with clear fields of fire to 2,500m. Multiple covered routes for tactical movement to alternate positions. Weather conditions: Clear visibility, dry conditions, temperature 22°C.
                        </p>
                    </div>
                </div>
            </div>

            <!-- COA Development Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-chess-pawn" style="margin-right: 8px;"></i>
                    Platoon COA Development Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-shield" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 1: Static Overwatch
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Occupy primary firing positions and engage enemy at maximum range. Maintain positions throughout engagement. Focus on maximum firepower from prepared positions with excellent fields of fire.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-exchange-alt" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 2: Shoot and Move
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Engage enemy from primary positions, then conduct tactical movement to alternate positions. Utilize mobility for survivability while maintaining continuous engagement capability.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-forward" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 3: Aggressive Advance
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Conduct immediate advance to close with enemy forces. Utilize speed and aggression to disrupt enemy formation. Accept higher risk for decisive engagement at close range.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Platoon Leader's Decision Process -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-gavel" style="margin-right: 8px;"></i>
                    Platoon Leader's COA Approval Decision Process
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-user-graduate" style="margin-right: 6px; color: #10b981;"></i>
                            Decision Authority & Process
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Second Lieutenant Thompson conducted systematic evaluation of all three COAs during the platoon leaders meeting on 22 March 2024 at 1400 hours. Decision process included input from tank commanders, platoon sergeant, and coordination with company commander and adjacent platoon leaders through company command net.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Decision factors included: (1) Alignment with company commander's intent for mobile engagement, (2) Maximizing enemy destruction while preserving platoon combat power, (3) Utilizing terrain advantage and tank capabilities, (4) Coordination with adjacent platoons and company fires, (5) Maintaining tactical flexibility for follow-on missions.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chart-line" style="margin-right: 6px; color: #10b981;"></i>
                            Quantitative COA Comparison Results
                        </h4>
                        <div style="background: #1e293b; padding: 12px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
                            <table style="width: 100%; color: #e5e7eb; font-size: 12px; border-collapse: collapse;">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.3);">
                                        <th style="text-align: left; padding: 8px; color: #6ee7b7; font-weight: 600;">Evaluation Criteria</th>
                                        <th style="text-align: center; padding: 8px; color: #6ee7b7; font-weight: 600;">COA 1</th>
                                        <th style="text-align: center; padding: 8px; color: #6ee7b7; font-weight: 600;">COA 2</th>
                                        <th style="text-align: center; padding: 8px; color: #6ee7b7; font-weight: 600;">COA 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Feasible</td>
                                        <td style="padding: 6px; text-align: center;">9.3/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.9/10</td>
                                        <td style="padding: 6px; text-align: center;">8.4/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Acceptable</td>
                                        <td style="padding: 6px; text-align: center;">8.9/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.6/10</td>
                                        <td style="padding: 6px; text-align: center;">7.5/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Suitable</td>
                                        <td style="padding: 6px; text-align: center;">9.1/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.8/10</td>
                                        <td style="padding: 6px; text-align: center;">8.7/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Distinguishable</td>
                                        <td style="padding: 6px; text-align: center;">8.6/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.7/10</td>
                                        <td style="padding: 6px; text-align: center;">9.0/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Complete</td>
                                        <td style="padding: 6px; text-align: center;">8.8/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.8/10</td>
                                        <td style="padding: 6px; text-align: center;">8.3/10</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; font-weight: 600; color: #6ee7b7;">Overall Score</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600;">8.9/10</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600; background: rgba(16, 185, 129, 0.2); color: #6ee7b7;">9.8/10</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600;">8.4/10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Approved COA Implementation Details -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Approved COA 2: Shoot and Move Implementation
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-tasks" style="margin-right: 6px; color: #10b981;"></i>
                            Tactical Execution Framework
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Phase 1 - Initial Engagement:</strong> All four tanks occupy primary firing positions in Battle Position ALPHA-1. Tank A11 (platoon leader) controls engagement and target distribution. Engage enemy tanks at maximum effective range (2,500m) with coordinated fires. Priority targets: enemy tank commanders and lead vehicles.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Phase 2 - Tactical Movement:</strong> After initial engagement (3-5 rounds per tank), conduct tactical movement to alternate positions. Tanks A12 and A13 move first with overwatch from A11 and A14. Movement by bounds using covered routes to Battle Position ALPHA-2.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Phase 3 - Continued Engagement:</strong> Resume engagement from alternate positions with improved fields of fire. Coordinate with adjacent platoons for flank security and target deconfliction. Prepare for follow-on movement as directed by company commander.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-crosshairs" style="margin-right: 6px; color: #10b981;"></i>
                            Fire Control and Target Engagement
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Target Distribution:</strong> Tank A11 engages left-most enemy tank, A12 engages second from left, A13 engages second from right, A14 engages right-most enemy tank. Adjust target assignments based on enemy movement and casualties.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Ammunition Selection:</strong> Primary ammunition: M829A4 SABOT for enemy tanks. Secondary ammunition: M830A1 HEAT for infantry fighting vehicles. High explosive rounds available for personnel targets and fortifications.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Fire Control Measures:</strong> Engagement criteria: enemy tanks within 2,500m and identified as hostile. Cease fire on company commander's command or when enemy forces are destroyed or withdraw beyond engagement range.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Risk Assessment and Mitigation -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                    Platoon Tactical Risk Assessment and Mitigation Framework
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-circle" style="margin-right: 6px; color: #dc2626;"></i>
                            Platoon-Level Tactical Risks
                        </h4>
                        <div style="background: #1e293b; padding: 12px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(220, 38, 38, 0.3);">
                            <table style="width: 100%; color: #e5e7eb; font-size: 12px; border-collapse: collapse;">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.3);">
                                        <th style="text-align: left; padding: 8px; color: #fca5a5; font-weight: 600;">Risk Category</th>
                                        <th style="text-align: center; padding: 8px; color: #fca5a5; font-weight: 600;">Probability</th>
                                        <th style="text-align: center; padding: 8px; color: #fca5a5; font-weight: 600;">Impact</th>
                                        <th style="text-align: left; padding: 8px; color: #fca5a5; font-weight: 600;">Mitigation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Enemy Direct Fire</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Hull-down positions, movement</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Tank Breakdown</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px;">Maintenance checks, recovery</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Communication Failure</td>
                                        <td style="padding: 6px; text-align: center;">Low</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Backup radios, hand signals</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Crew Casualties</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Cross-training, medical aid</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; font-weight: 500;">Ammunition Depletion</td>
                                        <td style="padding: 6px; text-align: center;">Low</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px;">Fire discipline, resupply</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield" style="margin-right: 6px; color: #dc2626;"></i>
                            Survivability and Force Protection
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Positioning:</strong> Utilize hull-down positions to minimize exposure while maintaining effective fields of fire. Maintain proper dispersion (50-100m between tanks) to minimize effects of enemy indirect fires.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Movement Security:</strong> Conduct tactical movement using covered and concealed routes. Utilize overwatch techniques during movement with at least two tanks providing security at all times.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Medical and Maintenance:</strong> Platoon medic positioned in covered location for immediate medical aid. Coordinate with company maintenance team for battle damage assessment and repair. Establish casualty evacuation procedures.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Coalition Integration and Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-handshake" style="margin-right: 8px;"></i>
                    Coalition Integration and NATO Standardization at Platoon Level
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 6px; color: #3b82f6;"></i>
                            Multinational Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Adjacent Unit Coordination:</strong> Coordinate boundary operations with Polish tank section operating in adjacent sector. Establish common engagement criteria and target deconfliction procedures. Utilize NATO standardization agreements for ammunition and fuel compatibility.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Communication Integration:</strong> Utilize NATO standardized radio procedures and call signs. Coordinate with company commander for integration with coalition fire support and air assets.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-radio" style="margin-right: 6px; color: #3b82f6;"></i>
                            Tactical Integration Procedures
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Fire Coordination:</strong> Coordinate target engagement with adjacent coalition units to prevent fratricide and maximize combat effectiveness. Establish common target reference points and engagement procedures.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Logistics Coordination:</strong> Coordinate with coalition logistics elements for emergency resupply and maintenance support. Utilize NATO standardized procedures for equipment and supply interoperability.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Sustainment Operations and Logistics -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #f59e0b; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck" style="margin-right: 8px;"></i>
                    Platoon Sustainment Operations and Tactical Logistics
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-gas-pump" style="margin-right: 6px; color: #f59e0b;"></i>
                            Platoon Logistics Management
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Ammunition Management:</strong> Each tank maintains basic load of 40 rounds (mix of SABOT, HEAT, and HE). Platoon sergeant tracks ammunition expenditure and coordinates resupply with company first sergeant. Implement fire discipline to conserve ammunition for sustained operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Fuel Operations:</strong> Maintain 75% fuel capacity for tactical mobility. Coordinate with company trains for refueling operations during tactical pauses. Plan fuel consumption for movement between battle positions.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Maintenance Operations:</strong> Conduct preventive maintenance checks and services (PMCS) before and after operations. Coordinate with company maintenance team for organizational-level maintenance and battle damage repair.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-medkit" style="margin-right: 6px; color: #f59e0b;"></i>
                            Personnel and Medical Support
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Medical Support:</strong> Platoon medic provides immediate medical care and trauma treatment. Each tank crew trained in combat lifesaver techniques. Coordinate medical evacuation with company aid station for serious casualties.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Personnel Management:</strong> Track crew status and combat effectiveness. Implement cross-training for critical crew positions (driver, gunner, loader). Coordinate replacement personnel through company headquarters.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Morale and Leadership:</strong> Platoon leader and platoon sergeant provide leadership and motivation. Maintain unit cohesion and fighting spirit during sustained combat operations.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Operations Integration -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                    Multi-Domain Operations Integration at Platoon Level
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Tactical Domain Integration
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Land Domain:</strong> Coordinate direct fire engagement with tactical movement and positioning. Integrate with adjacent platoons for mutual support and flank security. Utilize terrain for tactical advantage and survivability.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Air Domain:</strong> Coordinate with company forward air controller for close air support integration. Establish air-ground coordination measures and target marking procedures for air assets.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Space Domain:</strong> Utilize GPS for navigation and position reporting. Coordinate with higher headquarters through satellite communication systems for real-time situational awareness.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-virus" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Information and Communication Operations
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Information Operations:</strong> Maintain operational security and communication discipline. Report tactical information to company commander through secure communication systems.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Cyber Domain:</strong> Implement cybersecurity protocols for digital fire control and communication systems. Coordinate with company for defensive cyber measures and digital signature management.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Electronic Warfare:</strong> Maintain communication security during tactical operations. Coordinate with company electronic warfare section for electronic protection measures.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Professional Military Education Applications -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-graduation-cap" style="margin-right: 8px;"></i>
                    Professional Military Education Applications and Learning Objectives
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-book" style="margin-right: 6px; color: #10b981;"></i>
                            Educational Framework and Applications
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            This comprehensive platoon-level COA approval example provides junior officers (O-1 through O-2) with authoritative guidance for conducting small unit tactical planning and decision-making in direct fire engagement scenarios. The scenario demonstrates integration of basic tactical planning doctrine, risk assessment, and multi-domain operations coordination at the platoon level.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Educational applications include Basic Officer Leader Course tactical planning modules, Armor Officer Basic Course, platoon leader development programs, and small unit tactical exercises requiring understanding of platoon-level command responsibilities and tactical decision-making processes in Large Scale Combat Operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Military professionals can utilize this example to understand platoon leader decision authority, small unit tactical risk assessment, coalition integration at tactical level, sustainment operations planning for small units, and basic multi-domain operations coordination in contested environments.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-target" style="margin-right: 6px; color: #10b981;"></i>
                            Platoon-Level Learning Objectives
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Small Unit Leadership:</strong> Understand platoon-level tactical decision-making using FASDC criteria. Develop competency in small unit risk assessment and force protection planning for direct fire operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Execution:</strong> Develop understanding of direct fire techniques, tactical movement, and coordination with higher headquarters. Understand integration of fire and movement at platoon level.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Basic Sustainment:</strong> Understand platoon-level logistics planning, maintenance operations, and medical support coordination. Develop competency in resource management for small unit operations.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Implementation Guidance and Best Practices -->
            <div style="
                background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
                border: 2px solid rgba(16, 185, 129, 0.3);
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 24px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            ">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-lightbulb" style="margin-right: 8px;"></i>
                    Implementation Guidance and Platoon-Level Best Practices
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-clipboard-check" style="margin-right: 6px; color: #10b981;"></i>
                            Small Unit Planning Best Practices
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Decision-Making Process:</strong> Utilize systematic approach to COA evaluation appropriate for platoon level. Involve tank commanders in planning process while maintaining clear command authority for tactical decisions.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Fire Control:</strong> Develop clear fire control measures and target distribution. Maintain positive control of engagement while allowing subordinate initiative within commander's intent.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                            Tactical Execution Guidelines
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Movement:</strong> Utilize proper movement techniques and overwatch procedures. Maintain tactical dispersion while ensuring mutual support between tanks.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Leadership and Control:</strong> Maintain positive control through clear communication and standard operating procedures. Provide leadership and motivation to maintain unit cohesion and combat effectiveness.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const platoonPracticalModule = {
    getContent() {
        return getPlatoonCOAApprovalExample();
    }
};

export default platoonPracticalModule;
