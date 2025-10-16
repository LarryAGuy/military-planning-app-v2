/**
 * JPP Step 6: Course of Action Approval - Company Echelon Practical Example
 * Large Scale Combat Operations (LSCO) - European Campaign
 * Operation STEADFAST GUARDIAN - Alpha Company, 2-34 Armor Regiment Implementation
 *
 * Educational Purpose: Demonstrates company-level COA approval processes in coalition LSCO environment
 * Command Level: Alpha Company, 2-34 Armor Regiment (Captain O-3)
 * Scenario: Implementation of battalion commander's approved Mobile Defense COA in sector ALPHA
 *
 * Professional Military Education Applications:
 * - Company Grade Officer development programs (O-1 through O-3)
 * - Basic Officer Leader Course tactical planning
 * - Armor Officer Basic Course
 * - Company-level tactical planning exercises
 */

export function getCompanyCOAApprovalExample() {
    return `
        <div style="padding: 20px;">
            <!-- Company COA Approval Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-users" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 6: COA Approval - Company Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Tank Company COA Approval Process</p>
                </div>
            </div>

            <!-- Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-tank" style="margin-right: 8px;"></i>
                    Company Tactical Scenario - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-user-tie" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Command Structure & Mission
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Unit:</strong> Alpha Company, 2nd Battalion, 34th Armor Regiment "Iron Knights" (A/2-34 AR)<br>
                            <strong>Commander:</strong> Captain Jennifer L. Martinez, U.S. Army<br>
                            <strong>Force Structure:</strong> 180 personnel across 4 platoons (3 tank, 1 headquarters)<br>
                            <strong>Equipment:</strong> 14 M1A2 Abrams tanks, 4 M113A3 command vehicles, 2 M88A2 recovery vehicles<br>
                            <strong>Area of Operations:</strong> Sector ALPHA, 4km frontage, 2km depth
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Higher Commander's Intent:</strong> Battalion conducts mobile defense operations in eastern sector. Alpha Company defends key terrain in sector ALPHA, destroys enemy forces through direct fire engagement, and maintains tactical flexibility for rapid repositioning in support of battalion operations.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-crosshairs" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Tactical Situation Assessment
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Enemy:</strong> Reinforced tank company (14 T-90M tanks, 6 BMP-3 IFVs) conducting deliberate attack to seize Hill 247 and establish overwatch positions. Enemy supported by artillery and close air support with estimated arrival time 45 minutes.<br>
                            <strong>Friendly:</strong> Adjacent units include Bravo Company (east), Charlie Company (reserve), and Polish tank platoon (north). Artillery support available from battalion mortar platoon and brigade artillery.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Terrain:</strong> Defensive terrain with good fields of fire, multiple hull-down positions, and covered routes for tactical movement. Weather conditions: Clear visibility, dry conditions, temperature 20°C. No civilian interference in engagement area.
                        </p>
                    </div>
                </div>
            </div>

            <!-- COA Development Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-chess-knight" style="margin-right: 8px;"></i>
                    Company COA Development Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-shield" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 1: Defensive Overwatch
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Establish defensive positions on Hill 247 with maximum fields of fire. Utilize terrain advantage for long-range engagement. Focus on destroying enemy forces at maximum range while maintaining defensive positions.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-arrows-alt" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 2: Mobile Engagement
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Conduct mobile defense with initial engagement from prepared positions followed by tactical movement to alternate positions. Utilize mobility for survivability and multiple engagement opportunities.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-fist-raised" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 3: Aggressive Counter-Attack
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Conduct immediate counter-attack against enemy advance elements. Utilize speed and aggression to disrupt enemy formation before they can establish coherent attack. High risk, high reward approach.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Company Commander's Decision Process -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-gavel" style="margin-right: 8px;"></i>
                    Company Commander's COA Approval Decision Process
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-user-tie" style="margin-right: 6px; color: #10b981;"></i>
                            Decision Authority & Process
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Captain Martinez conducted systematic evaluation of all three COAs during the company orders group on 20 March 2024 at 1200 hours. Decision process included input from platoon leaders, first sergeant, and coordination with battalion fire support officer and adjacent company commanders through battalion tactical operations center.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Decision factors included: (1) Alignment with battalion commander's intent for mobile defense, (2) Maximizing enemy destruction while preserving friendly forces, (3) Utilizing terrain advantage and company capabilities, (4) Coordination with adjacent units and supporting fires, (5) Maintaining tactical flexibility for follow-on operations.
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
                                        <td style="padding: 6px; text-align: center;">9.1/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.8/10</td>
                                        <td style="padding: 6px; text-align: center;">8.2/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Acceptable</td>
                                        <td style="padding: 6px; text-align: center;">8.7/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.4/10</td>
                                        <td style="padding: 6px; text-align: center;">7.3/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Suitable</td>
                                        <td style="padding: 6px; text-align: center;">8.9/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.7/10</td>
                                        <td style="padding: 6px; text-align: center;">8.6/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Distinguishable</td>
                                        <td style="padding: 6px; text-align: center;">8.4/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.5/10</td>
                                        <td style="padding: 6px; text-align: center;">8.8/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Complete</td>
                                        <td style="padding: 6px; text-align: center;">8.6/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.6/10</td>
                                        <td style="padding: 6px; text-align: center;">8.1/10</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; font-weight: 600; color: #6ee7b7;">Overall Score</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600;">8.7/10</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600; background: rgba(16, 185, 129, 0.2); color: #6ee7b7;">9.6/10</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600;">8.2/10</td>
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
                    Approved COA 2: Mobile Engagement Implementation
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-tasks" style="margin-right: 6px; color: #10b981;"></i>
                            Tactical Execution Framework
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Phase 1 - Initial Engagement:</strong> 1st Platoon occupies primary firing positions on Hill 247 with overwatch of Engagement Area BRAVO. 2nd and 3rd Platoons occupy alternate positions with covered routes to subsequent battle positions. Engage enemy at maximum effective range (3,000m) with coordinated fires.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Phase 2 - Tactical Movement:</strong> After initial engagement and enemy suppression, conduct tactical movement to alternate battle positions. 1st Platoon provides overwatch while 2nd and 3rd Platoons reposition. Maintain continuous fires on enemy forces during movement.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Phase 3 - Decisive Engagement:</strong> Conduct final engagement from alternate positions with coordinated direct and indirect fires. Coordinate with adjacent units for flank security and supporting fires. Prepare for follow-on operations or withdrawal as directed.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-crosshairs" style="margin-right: 6px; color: #10b981;"></i>
                            Fire Support and Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Direct Fire Plan:</strong> Primary sectors of fire assigned to each platoon with overlapping coverage of Engagement Area BRAVO. Priority targets include enemy tanks and command vehicles. Ammunition allocation: 40 rounds per tank with emphasis on SABOT and HEAT rounds.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Indirect Fire Support:</strong> Coordinate with battalion mortar platoon for suppressive fires on enemy support elements. Pre-planned targets include enemy assembly areas and likely avenues of approach. On-call fires available for immediate support.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Air Support Integration:</strong> Coordinate with forward air controller for close air support during decisive engagement phase. Establish air-ground coordination measures and target marking procedures for maximum effectiveness.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Risk Assessment and Mitigation -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                    Company Tactical Risk Assessment and Mitigation Framework
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-tank" style="margin-right: 6px; color: #dc2626;"></i>
                            Company-Level Tactical Risks
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
                                        <td style="padding: 6px; font-weight: 500;">Enemy Artillery</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Dispersion, rapid movement</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Tank Casualties</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Hull-down positions, mobility</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Communication Loss</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px;">Backup systems, visual signals</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Ammunition Shortage</td>
                                        <td style="padding: 6px; text-align: center;">Low</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Fire discipline, resupply plan</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; font-weight: 500;">Mechanical Failure</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px;">Maintenance, recovery assets</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield" style="margin-right: 6px; color: #dc2626;"></i>
                            Force Protection Measures
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Survivability Measures:</strong> Utilize hull-down positions and terrain masking for maximum protection. Implement rapid movement techniques between battle positions. Maintain dispersion standards to minimize effects of enemy indirect fires.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Security Operations:</strong> Establish local security elements and observation posts. Coordinate with adjacent units for flank security and early warning. Implement counter-reconnaissance measures to prevent enemy observation.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Medical and Maintenance:</strong> Position medical and maintenance assets in covered and concealed locations. Establish casualty evacuation procedures and equipment recovery operations. Coordinate with battalion support elements for immediate assistance.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Coalition Integration and Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-handshake" style="margin-right: 8px;"></i>
                    Coalition Integration and NATO Standardization at Company Level
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 6px; color: #3b82f6;"></i>
                            Allied Unit Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Polish Tank Platoon:</strong> Coordinate northern boundary operations with attached Polish tank platoon (4 Leopard 2A5 tanks). Establish common communication procedures and fire coordination measures. Utilize NATO standardization agreements for ammunition and fuel interoperability.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Tactical Integration:</strong> Integrate Polish platoon into company fire plan with assigned sectors of fire and battle positions. Coordinate tactical movement and provide mutual support during engagement operations.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-radio" style="margin-right: 6px; color: #3b82f6;"></i>
                            Communication Integration
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>NATO Communication Systems:</strong> Utilize NATO standardized communication procedures and frequencies. Implement common call signs and reporting formats for seamless integration with coalition forces.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Fire Coordination:</strong> Establish common fire coordination measures with coalition forces. Coordinate target engagement priorities and ammunition allocation to maximize combined combat effectiveness.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Sustainment Operations and Logistics -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #f59e0b; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck" style="margin-right: 8px;"></i>
                    Company Sustainment Operations and Tactical Logistics
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-gas-pump" style="margin-right: 6px; color: #f59e0b;"></i>
                            Company Logistics Support
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Ammunition Management:</strong> Maintain basic load of 40 rounds per tank (mix of SABOT, HEAT, and HE rounds). Coordinate with battalion trains for emergency resupply during extended engagement. Implement ammunition discipline and target prioritization.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Fuel Operations:</strong> Maintain 75% fuel capacity for tactical mobility requirements. Coordinate with battalion fuel trucks for on-position refueling during lulls in combat. Plan fuel consumption for tactical movement between battle positions.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Maintenance Support:</strong> Company maintenance team provides organizational-level maintenance and battle damage assessment. Coordinate with battalion maintenance for field-level repairs and parts supply.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-medkit" style="margin-right: 6px; color: #f59e0b;"></i>
                            Medical and Personnel Support
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Medical Support:</strong> Company medic provides immediate medical care and trauma treatment. Establish casualty collection point in covered and concealed location. Coordinate medical evacuation with battalion aid station.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Personnel Management:</strong> Track personnel status and combat effectiveness. Implement cross-training for critical positions. Coordinate replacement operations through battalion personnel section.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Morale and Welfare:</strong> Maintain unit cohesion and morale during sustained combat operations. Provide leadership and motivation to maintain combat effectiveness under stress.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Operations Integration -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                    Multi-Domain Operations Integration at Company Level
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Domain Integration at Tactical Level
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Land Domain:</strong> Coordinate ground maneuver with direct fire engagement and tactical movement. Integrate with adjacent units for mutual support and flank security. Utilize terrain for tactical advantage and survivability.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Air Domain:</strong> Coordinate with forward air controller for close air support during decisive engagement. Establish air-ground coordination measures and target marking procedures. Utilize air assets for reconnaissance and surveillance.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Space Domain:</strong> Utilize GPS for navigation and position reporting. Coordinate with higher headquarters through satellite communication systems for situational awareness and reporting.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-virus" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Information and Cyber Operations
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Information Operations:</strong> Maintain operational security and communication discipline. Coordinate information sharing with higher headquarters and adjacent units through secure communication systems.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Cyber Domain:</strong> Implement cybersecurity protocols for digital communication and fire control systems. Coordinate with battalion cyber operations for defensive cyber measures.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Electronic Warfare:</strong> Coordinate with battalion electronic warfare section for electronic attack and protection measures. Maintain communication security during tactical operations.
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
                            This comprehensive company-level COA approval example provides company grade officers (O-1 through O-3) with authoritative guidance for conducting tactical-level planning and decision-making in direct fire engagement scenarios. The scenario demonstrates integration of tactical planning doctrine, risk assessment, coalition coordination, and multi-domain operations planning at the company level.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Educational applications include Basic Officer Leader Course tactical planning modules, Armor Officer Basic Course, company grade officer development programs, and tactical planning exercises requiring understanding of company-level command responsibilities and tactical decision-making processes in Large Scale Combat Operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Military professionals can utilize this example to understand company commander decision authority, tactical risk assessment at company level, coalition integration procedures, sustainment operations planning, and multi-domain operations coordination for direct fire units in contested environments.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-target" style="margin-right: 6px; color: #10b981;"></i>
                            Company-Level Learning Objectives
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Leadership:</strong> Understand company-level tactical decision-making using FASDC criteria. Develop competency in tactical risk assessment and force protection planning for direct fire engagements.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Fire and Maneuver:</strong> Develop understanding of direct fire planning, tactical movement, and coordination with supporting fires. Understand integration of direct and indirect fires for maximum combat effectiveness.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Sustainment Integration:</strong> Understand company-level logistics planning, maintenance operations, and medical support coordination. Develop competency in resource management during sustained combat operations.
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
                    Implementation Guidance and Company-Level Best Practices
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-clipboard-check" style="margin-right: 6px; color: #10b981;"></i>
                            Tactical Planning Best Practices
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Decision-Making Process:</strong> Utilize systematic approach to COA evaluation with clear criteria and measurable outcomes. Involve platoon leaders in planning process while maintaining command authority for tactical decisions.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Fire Planning:</strong> Develop comprehensive direct fire plan with assigned sectors, target priorities, and ammunition allocation. Coordinate with supporting fires for maximum combat effectiveness.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                            Tactical Execution Guidelines
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Mobility:</strong> Utilize terrain and tactical movement for survivability and tactical advantage. Maintain flexibility for rapid repositioning based on enemy actions and battlefield conditions.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Force Protection:</strong> Implement comprehensive survivability measures including dispersion, hull-down positions, and rapid movement techniques. Balance aggressive tactical action with force preservation requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const companyPracticalModule = {
    getContent() {
        return getCompanyCOAApprovalExample();
    }
};

export default companyPracticalModule;
