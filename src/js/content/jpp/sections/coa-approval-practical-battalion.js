/**
 * JPP Step 6: Course of Action Approval - Battalion Echelon Practical Example
 * Large Scale Combat Operations (LSCO) - European Campaign
 * Operation STEADFAST GUARDIAN - 2nd Battalion, 34th Armor Regiment Implementation
 *
 * Educational Purpose: Demonstrates battalion-level COA approval processes in coalition LSCO environment
 * Command Level: 2nd Battalion, 34th Armor Regiment (Lieutenant Colonel O-5)
 * Scenario: Implementation of brigade commander's approved Mobile Defense COA in eastern sector
 *
 * Professional Military Education Applications:
 * - Intermediate Level Education tactical planning courses
 * - Company and Field Grade Officer development programs (O-3 through O-5)
 * - Advanced Military Studies Program
 * - Complex tactical planning exercises
 */

export function getBattalionCOAApprovalExample() {
    return `
        <div style="padding: 20px;">
            <!-- Battalion COA Approval Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-shield-alt" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 6: COA Approval - Battalion Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Battalion Task Force COA Approval Process</p>
                </div>
            </div>

            <!-- Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                    Battalion Tactical Scenario - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-users" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Command Structure & Mission
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Unit:</strong> 2nd Battalion, 34th Armor Regiment "Iron Knights" (2-34 AR)<br>
                            <strong>Commander:</strong> Lieutenant Colonel Sarah M. Rodriguez, U.S. Army<br>
                            <strong>Force Structure:</strong> 720 personnel across 4 companies (3 tank, 1 mechanized infantry)<br>
                            <strong>Equipment:</strong> 58 M1A2 Abrams tanks, 14 M2A3 Bradley IFVs, 12 M113A3 APCs<br>
                            <strong>Area of Operations:</strong> Eastern sector, 15km frontage, 8km depth
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Higher Commander's Intent:</strong> 1st Armored Brigade Combat Team conducts mobile defense operations to defeat enemy penetration attempts while preserving combat power for subsequent counter-attack operations. Battalion task force defends key terrain in eastern sector, disrupts enemy advance, and maintains tactical flexibility for rapid repositioning.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-crosshairs" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Tactical Situation Assessment
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Enemy:</strong> Reinforced motorized rifle regiment (3,200 personnel) with T-90M tanks, BMP-3 IFVs, and integrated air defense systems. Enemy conducting deliberate attack to seize key terrain and establish forward operating base for follow-on forces.<br>
                            <strong>Friendly:</strong> Adjacent units include 1-34 AR (west), 3-34 AR (reserve), and Polish 1st Armored Brigade (north). Coalition air support available with 30-minute response time.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Terrain:</strong> Mixed urban-rural environment with key infrastructure nodes, multiple mobility corridors, and defensible terrain features. Weather conditions: Clear visibility, dry conditions, temperature 18°C. Civilian population evacuated from primary engagement areas.
                        </p>
                    </div>
                </div>
            </div>

            <!-- COA Development Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-chess" style="margin-right: 8px;"></i>
                    Battalion COA Development Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-shield" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 1: Static Defense
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Establish defensive positions along Phase Line ALPHA with interlocking fields of fire. Companies occupy prepared positions with limited tactical mobility. Focus on maximum firepower concentration and terrain advantage utilization.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-arrows-alt" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 2: Mobile Defense
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Conduct mobile defense with forward security elements and main defensive positions. Utilize tactical mobility for rapid repositioning and counter-attack operations. Emphasizes flexibility and force preservation.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-bolt" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 3: Aggressive Defense
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Forward deployment with aggressive patrolling and preemptive engagement. Emphasis on disrupting enemy formations before they can establish coherent attack. High risk, high reward approach.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Battalion Commander's Decision Process -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-gavel" style="margin-right: 8px;"></i>
                    Battalion Commander's COA Approval Decision Process
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-user-tie" style="margin-right: 6px; color: #10b981;"></i>
                            Decision Authority & Process
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Lieutenant Colonel Rodriguez conducted systematic evaluation of all three COAs during the battalion decision brief on 15 March 2024 at 1400 hours. Decision process included input from company commanders, battalion staff sections (S-1 through S-6), and coordination with adjacent unit commanders through brigade tactical operations center.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Decision factors included: (1) Alignment with brigade commander's intent for mobile defense operations, (2) Force preservation requirements for subsequent counter-attack, (3) Tactical flexibility to respond to changing enemy actions, (4) Logistics sustainment capability, (5) Integration with coalition forces and adjacent units.
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
                                        <td style="padding: 6px; text-align: center;">8.7/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.6/10</td>
                                        <td style="padding: 6px; text-align: center;">7.9/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Acceptable</td>
                                        <td style="padding: 6px; text-align: center;">8.3/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.2/10</td>
                                        <td style="padding: 6px; text-align: center;">7.1/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Suitable</td>
                                        <td style="padding: 6px; text-align: center;">7.8/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.5/10</td>
                                        <td style="padding: 6px; text-align: center;">8.4/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Distinguishable</td>
                                        <td style="padding: 6px; text-align: center;">8.1/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.3/10</td>
                                        <td style="padding: 6px; text-align: center;">8.6/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Complete</td>
                                        <td style="padding: 6px; text-align: center;">8.5/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.4/10</td>
                                        <td style="padding: 6px; text-align: center;">7.8/10</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; font-weight: 600; color: #6ee7b7;">Overall Score</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600;">8.3/10</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600; background: rgba(16, 185, 129, 0.2); color: #6ee7b7;">9.4/10</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600;">8.0/10</td>
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
                    Approved COA 2: Mobile Defense Implementation
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-tasks" style="margin-right: 6px; color: #10b981;"></i>
                            Tactical Execution Framework
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Phase 1 - Security Operations:</strong> Alpha Company (-) establishes forward security line along Phase Line BRAVO (3km forward of main defensive positions). Conduct reconnaissance and surveillance operations, provide early warning, and conduct delay operations against enemy advance guard elements.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Phase 2 - Main Defense:</strong> Bravo and Charlie Companies occupy primary defensive positions along Phase Line CHARLIE with interlocking fields of fire. Delta Company (mechanized infantry) provides close-in security and anti-armor overwatch. Battalion reserve positioned for rapid counter-attack.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Phase 3 - Counter-Attack:</strong> Upon enemy penetration or weakness identification, execute immediate counter-attack with designated reserve forces. Coordinate with brigade fires and adjacent units for maximum combat effectiveness.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-cogs" style="margin-right: 6px; color: #10b981;"></i>
                            Command and Control Arrangements
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Command Post Operations:</strong> Main CP located at grid 12345678 with alternate CP at grid 23456789. Tactical CP moves with main effort company. Communications maintained through secure digital networks (SINCGARS, Blue Force Tracker) with redundant systems.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Fire Support Coordination:</strong> Battalion fire support officer coordinates with brigade fires cell for artillery, mortar, and close air support. Priority of fires to main defensive positions with on-call missions for counter-attack operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Logistics Coordination:</strong> Forward support company provides Class III (fuel), Class V (ammunition), and Class VIII (medical) support from battalion support area. Casualty evacuation through medical evacuation helicopter landing zones.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Risk Assessment and Mitigation -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                    Battalion Tactical Risk Assessment and Mitigation Framework
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 6px; color: #dc2626;"></i>
                            Primary Tactical Risks
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
                                        <td style="padding: 6px; font-weight: 500;">Enemy Penetration</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Rapid counter-attack procedures</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Communications Failure</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Redundant communication systems</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Logistics Disruption</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px;">Forward stockage, alternate routes</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Casualty Evacuation</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px;">Multiple evacuation routes/methods</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; font-weight: 500;">Coalition Coordination</td>
                                        <td style="padding: 6px; text-align: center;">Low</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px;">Liaison officers, common procedures</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-tools" style="margin-right: 6px; color: #dc2626;"></i>
                            Risk Mitigation Measures
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Risk Controls:</strong> Establish multiple observation posts with overlapping coverage, maintain 25% security at all times, conduct rehearsals for all contingency operations, and implement battle damage assessment procedures for rapid decision-making.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Force Protection Measures:</strong> Implement OPSEC protocols, establish counter-reconnaissance operations, maintain dispersion standards, and coordinate with military police for rear area security operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Contingency Planning:</strong> Develop branch and sequel plans for enemy penetration, withdrawal operations, and transition to offensive operations. Maintain flexibility for rapid adaptation to changing tactical situations.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Coalition Integration and Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-handshake" style="margin-right: 8px;"></i>
                    Coalition Integration and NATO Standardization
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 6px; color: #3b82f6;"></i>
                            Allied Unit Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Polish 1st Armored Brigade:</strong> Coordinate northern boundary operations with Polish tank battalion. Establish liaison officer exchange and common communication procedures. Utilize NATO standardization agreements (STANAGs) for ammunition, fuel, and maintenance interoperability.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>German Logistics Support:</strong> Coordinate with German logistics battalion for Class III and Class V resupply operations. Establish common supply procedures and transportation coordination through multinational logistics coordination center.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite-dish" style="margin-right: 6px; color: #3b82f6;"></i>
                            Communications Integration
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>NATO Communication Systems:</strong> Utilize NATO Secret (NS) communication networks for operational coordination. Implement common operating procedures for joint fires coordination and air space management.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Information Sharing:</strong> Establish real-time intelligence sharing through Allied Command Operations intelligence networks. Coordinate battle damage assessment and enemy situation updates through multinational intelligence fusion center.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Sustainment Operations and Logistics -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #f59e0b; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck" style="margin-right: 8px;"></i>
                    Battalion Sustainment Operations and Tactical Logistics
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-gas-pump" style="margin-right: 6px; color: #f59e0b;"></i>
                            Logistics Support Framework
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Forward Support Company Operations:</strong> Establish battalion support area 5km behind main defensive positions. Provide Class III (fuel), Class V (ammunition), and Class IX (repair parts) support through forward logistics elements. Maintain 3-day supply of critical items.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Maintenance Operations:</strong> Field maintenance teams provide on-site repair for critical systems. Evacuation procedures for damaged equipment through maintenance collection points. Coordinate with brigade support battalion for higher-level maintenance.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Medical Support:</strong> Battalion aid station provides Role 1 medical care. Medical evacuation through ground and air assets to Role 2 medical facilities. Coordinate with coalition medical units for specialized treatment capabilities.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chart-bar" style="margin-right: 6px; color: #f59e0b;"></i>
                            Resource Management and Planning
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Ammunition Management:</strong> Maintain basic load plus 1.5 units of fire for all weapon systems. Coordinate with brigade ammunition supply point for resupply operations. Implement ammunition conservation measures during sustained operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Fuel Planning:</strong> Calculate fuel consumption rates for tactical mobility and sustained operations. Coordinate with fuel supply points for scheduled and emergency resupply. Maintain fuel discipline during extended operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Personnel Management:</strong> Track personnel status and coordinate replacement operations. Implement rest and refit procedures for sustained combat effectiveness. Coordinate with personnel services for administrative support.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Operations Integration -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                    Multi-Domain Operations Integration at Battalion Level
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Domain Integration Framework
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Land Domain:</strong> Coordinate ground maneuver with adjacent units and higher headquarters. Integrate direct and indirect fires for maximum combat effectiveness. Utilize terrain analysis for tactical advantage.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Air Domain:</strong> Coordinate with air liaison officer for close air support and air interdiction missions. Establish air defense procedures and coordinate with brigade air defense artillery. Utilize unmanned aerial systems for reconnaissance.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Maritime Domain:</strong> Limited direct involvement but coordinate with higher headquarters for strategic mobility and logistics support through maritime assets when applicable.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-virus" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Cyber and Information Operations
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Cyber Domain:</strong> Implement cybersecurity protocols for all digital communication systems. Coordinate with brigade cyber operations team for defensive cyber operations. Maintain operational security for digital signatures.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Space Domain:</strong> Utilize GPS and satellite communication systems for navigation and communication. Coordinate with space operations center for satellite imagery and intelligence support.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Information Operations:</strong> Coordinate with public affairs officer for information dissemination. Implement counter-propaganda measures and coordinate with psychological operations when applicable.
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
                            This comprehensive battalion-level COA approval example provides company and field grade officers (O-3 through O-5) with authoritative guidance for conducting tactical-level planning and decision-making in complex joint and coalition environments. The scenario demonstrates integration of tactical planning doctrine, risk assessment, coalition coordination, and multi-domain operations planning at the battalion level.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Educational applications include Intermediate Level Education tactical planning courses, Advanced Military Studies Program, company and field grade officer development programs, and complex tactical planning exercises requiring sophisticated understanding of battalion-level command responsibilities and tactical decision-making processes.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Military professionals can utilize this example to understand battalion commander decision authority, tactical risk assessment methodologies, coalition coordination requirements, sustainment operations planning, multi-domain operations integration, and the critical importance of tactical flexibility in maintaining combat effectiveness during Large Scale Combat Operations.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-target" style="margin-right: 6px; color: #10b981;"></i>
                            Key Learning Objectives and Competencies
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Decision-Making:</strong> Understand systematic evaluation of COAs using FASDC criteria at battalion level. Develop competency in tactical risk assessment and mitigation planning for sustained combat operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Coalition Operations:</strong> Develop understanding of NATO standardization procedures, multinational coordination requirements, and interoperability challenges in coalition tactical operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Multi-Domain Integration:</strong> Understand integration of land, air, maritime, space, and cyber domains at tactical level. Develop competency in coordinating multi-domain effects for tactical advantage in Large Scale Combat Operations.
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
                    Implementation Guidance and Tactical Best Practices
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-clipboard-check" style="margin-right: 6px; color: #10b981;"></i>
                            Command and Control Best Practices
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Decision-Making Process:</strong> Utilize systematic approach to COA evaluation with clear criteria and measurable outcomes. Involve subordinate commanders in planning process while maintaining command authority for final decisions.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Communication Procedures:</strong> Establish clear communication protocols with redundant systems. Maintain situational awareness through regular updates and battle rhythm procedures. Coordinate with higher, lower, and adjacent units for comprehensive understanding.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                            Tactical Execution Guidelines
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Flexibility and Adaptation:</strong> Maintain tactical flexibility for rapid adaptation to changing enemy actions and battlefield conditions. Develop branch and sequel plans for contingency operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Force Protection:</strong> Implement comprehensive force protection measures including operational security, counter-reconnaissance, and defensive preparations. Balance aggressive tactical action with force preservation requirements for sustained operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const battalionPracticalModule = {
    getContent() {
        return getBattalionCOAApprovalExample();
    }
};

export default battalionPracticalModule;
