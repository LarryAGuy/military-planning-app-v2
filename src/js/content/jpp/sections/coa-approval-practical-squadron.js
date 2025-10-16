/**
 * JPP Step 6: Course of Action Approval - Squadron Echelon Practical Example
 * Large Scale Combat Operations (LSCO) - European Campaign
 * Operation STEADFAST GUARDIAN - 3rd Squadron, 2nd Cavalry Regiment Implementation
 *
 * Educational Purpose: Demonstrates squadron-level COA approval processes in coalition LSCO environment
 * Command Level: 3rd Squadron, 2nd Cavalry Regiment (Lieutenant Colonel O-5)
 * Scenario: Implementation of regiment commander's approved Zone Reconnaissance COA in northern sector
 *
 * Professional Military Education Applications:
 * - Intermediate Level Education tactical planning courses
 * - Company and Field Grade Officer development programs (O-3 through O-5)
 * - Advanced Military Studies Program
 * - Complex tactical planning exercises
 */

export function getSquadronCOAApprovalExample() {
    return `
        <div style="padding: 20px;">
            <!-- Squadron COA Approval Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-horse-head" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 6: COA Approval - Squadron Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Cavalry Squadron COA Approval Process</p>
                </div>
            </div>

            <!-- Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-binoculars" style="margin-right: 8px;"></i>
                    Squadron Reconnaissance Scenario - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-users" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Command Structure & Mission
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Unit:</strong> 3rd Squadron, 2nd Cavalry Regiment "Toujours Pret" (3-2 CR)<br>
                            <strong>Commander:</strong> Lieutenant Colonel Michael T. Harrison, U.S. Army<br>
                            <strong>Force Structure:</strong> 580 personnel across 4 troops (3 cavalry, 1 support)<br>
                            <strong>Equipment:</strong> 24 M3A3 Bradley CFVs, 18 M1126 Stryker ICVs, 12 M1128 MGS, 8 OH-58D helicopters<br>
                            <strong>Area of Operations:</strong> Northern reconnaissance zone, 25km frontage, 15km depth
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Higher Commander's Intent:</strong> 2nd Cavalry Regiment conducts zone reconnaissance operations to identify enemy dispositions, capabilities, and intentions in northern sector. Squadron conducts continuous reconnaissance and surveillance, provides early warning, and maintains contact with enemy forces while avoiding decisive engagement.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-search" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Intelligence Situation Assessment
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Enemy:</strong> Reinforced reconnaissance battalion (1,200 personnel) with T-80U tanks, BMP-2 IFVs, and BRDM-2 reconnaissance vehicles. Enemy conducting counter-reconnaissance operations and establishing observation posts for main force intelligence collection.<br>
                            <strong>Friendly:</strong> Adjacent units include 1-2 CR (west), 2-2 CR (east), and German reconnaissance battalion (south). Air cavalry squadron provides aerial reconnaissance support.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Terrain:</strong> Mixed forest and agricultural terrain with limited visibility, multiple infiltration routes, and key observation points. Weather conditions: Overcast, light rain, temperature 12°C, reduced visibility 3km. Civilian population minimal in reconnaissance zone.
                        </p>
                    </div>
                </div>
            </div>

            <!-- COA Development Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-route" style="margin-right: 8px;"></i>
                    Squadron COA Development Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-eye" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 1: Stealth Reconnaissance
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Conduct covert reconnaissance operations with minimal signature. Emphasize stealth and concealment to avoid enemy detection. Utilize long-range observation and electronic surveillance methods.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-running" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 2: Aggressive Reconnaissance
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Conduct aggressive reconnaissance with active patrolling and probing actions. Engage enemy reconnaissance elements to gain information through combat. Accept higher risk for detailed intelligence.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-balance-scale" style="margin-right: 6px; font-size: 12px;"></i>
                            COA 3: Balanced Reconnaissance
                        </h4>
                        <p style="color: #e5e7eb; font-size: 11px; line-height: 1.3; margin: 0;">
                            Combine stealth and aggressive techniques based on tactical situation. Adapt reconnaissance methods to terrain and enemy activity. Balance information collection with force preservation.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Squadron Commander's Decision Process -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-gavel" style="margin-right: 8px;"></i>
                    Squadron Commander's COA Approval Decision Process
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-user-tie" style="margin-right: 6px; color: #10b981;"></i>
                            Decision Authority & Process
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Lieutenant Colonel Harrison conducted systematic evaluation of all three COAs during the squadron decision brief on 18 March 2024 at 0800 hours. Decision process included input from troop commanders, squadron staff sections (S-1 through S-6), and coordination with regiment intelligence officer and adjacent squadron commanders.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Decision factors included: (1) Alignment with regiment commander's intent for zone reconnaissance, (2) Intelligence collection requirements and priorities, (3) Force protection and survivability considerations, (4) Coordination with adjacent units and air assets, (5) Flexibility to adapt to changing enemy actions and intelligence requirements.
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
                                        <td style="padding: 6px; text-align: center;">8.9/10</td>
                                        <td style="padding: 6px; text-align: center;">7.6/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.7/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Acceptable</td>
                                        <td style="padding: 6px; text-align: center;">8.5/10</td>
                                        <td style="padding: 6px; text-align: center;">7.2/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.3/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Suitable</td>
                                        <td style="padding: 6px; text-align: center;">7.8/10</td>
                                        <td style="padding: 6px; text-align: center;">9.1/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.6/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Distinguishable</td>
                                        <td style="padding: 6px; text-align: center;">8.3/10</td>
                                        <td style="padding: 6px; text-align: center;">8.7/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.4/10</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Complete</td>
                                        <td style="padding: 6px; text-align: center;">8.1/10</td>
                                        <td style="padding: 6px; text-align: center;">8.4/10</td>
                                        <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.5/10</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; font-weight: 600; color: #6ee7b7;">Overall Score</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600;">8.3/10</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600;">8.2/10</td>
                                        <td style="padding: 6px; text-align: center; font-weight: 600; background: rgba(16, 185, 129, 0.2); color: #6ee7b7;">9.5/10</td>
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
                    Approved COA 3: Balanced Reconnaissance Implementation
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-tasks" style="margin-right: 6px; color: #10b981;"></i>
                            Reconnaissance Execution Framework
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Phase 1 - Initial Reconnaissance:</strong> Alpha Troop conducts stealth reconnaissance along northern axis using dismounted patrols and long-range observation. Bravo Troop establishes observation posts along central axis with emphasis on concealment and electronic surveillance.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Phase 2 - Adaptive Operations:</strong> Charlie Troop conducts aggressive reconnaissance along southern axis based on initial contact reports. Adjust reconnaissance methods based on enemy activity and intelligence requirements. Maintain flexibility for rapid transition between stealth and aggressive techniques.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Phase 3 - Continuous Surveillance:</strong> Establish continuous surveillance network with rotating observation posts and mobile patrols. Coordinate with air cavalry for aerial reconnaissance and electronic warfare support. Maintain contact with enemy forces while avoiding decisive engagement.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite-dish" style="margin-right: 6px; color: #10b981;"></i>
                            Intelligence Collection and Reporting
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Collection Requirements:</strong> Priority intelligence requirements include enemy force composition, disposition, capabilities, and intentions. Secondary requirements include terrain analysis, obstacle identification, and civilian activity assessment.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Reporting Procedures:</strong> Submit initial contact reports within 15 minutes of enemy contact. Provide detailed intelligence summaries every 6 hours through regiment intelligence channel. Coordinate with adjacent units for comprehensive intelligence picture.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Electronic Warfare Integration:</strong> Coordinate with electronic warfare section for signals intelligence collection and electronic attack capabilities. Maintain communications security while conducting electronic surveillance operations.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Risk Assessment and Mitigation -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                    Squadron Reconnaissance Risk Assessment and Mitigation Framework
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-search" style="margin-right: 6px; color: #dc2626;"></i>
                            Reconnaissance-Specific Risks
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
                                        <td style="padding: 6px; font-weight: 500;">Detection by Enemy</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Stealth techniques, route planning</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Counter-Reconnaissance</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Security elements, early warning</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Communication Intercept</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px;">COMSEC procedures, brevity codes</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 6px; font-weight: 500;">Isolation from Support</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px;">Extraction procedures, air support</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 6px; font-weight: 500;">Weather Degradation</td>
                                        <td style="padding: 6px; text-align: center;">High</td>
                                        <td style="padding: 6px; text-align: center;">Medium</td>
                                        <td style="padding: 6px;">Alternative methods, equipment</td>
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
                            <strong>Operational Security:</strong> Implement strict OPSEC protocols including communication discipline, movement security, and signature management. Utilize terrain masking and concealment techniques to avoid enemy detection.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Security Operations:</strong> Establish security elements for all reconnaissance operations. Coordinate with adjacent units for mutual support and early warning. Maintain rapid extraction capabilities for isolated elements.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Contingency Planning:</strong> Develop detailed contingency plans for enemy contact, equipment failure, and communication loss. Establish rally points and alternate routes for all reconnaissance operations.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Coalition Integration and Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-handshake" style="margin-right: 8px;"></i>
                    Coalition Reconnaissance Integration and NATO Standardization
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 6px; color: #3b82f6;"></i>
                            Multinational Intelligence Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>German Reconnaissance Battalion:</strong> Coordinate southern boundary operations with German reconnaissance elements. Establish intelligence sharing protocols and common reporting formats. Utilize NATO standardization agreements for equipment and procedural interoperability.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Intelligence Fusion:</strong> Coordinate with multinational intelligence fusion center for comprehensive intelligence picture. Share reconnaissance findings through NATO intelligence networks while maintaining operational security protocols.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite" style="margin-right: 6px; color: #3b82f6;"></i>
                            Air-Ground Integration
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Air Cavalry Coordination:</strong> Coordinate with air cavalry squadron for aerial reconnaissance and surveillance support. Establish common communication procedures and airspace coordination measures.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Joint Fires Integration:</strong> Coordinate with joint fires elements for close air support and artillery support during reconnaissance operations. Maintain capability for immediate fire support during enemy contact.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Sustainment Operations and Logistics -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h3 style="color: #f59e0b; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck" style="margin-right: 8px;"></i>
                    Squadron Sustainment Operations and Reconnaissance Logistics
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-gas-pump" style="margin-right: 6px; color: #f59e0b;"></i>
                            Reconnaissance Logistics Framework
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Support Troop Operations:</strong> Establish mobile logistics support elements to sustain extended reconnaissance operations. Provide Class III (fuel), Class V (ammunition), and Class I (subsistence) support through forward logistics elements positioned 8km behind reconnaissance line.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Maintenance Support:</strong> Field maintenance teams provide on-site repair for reconnaissance vehicles and communication equipment. Coordinate with regiment maintenance company for higher-level maintenance and parts supply.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Medical Support:</strong> Squadron medical section provides Role 1 medical care with emphasis on trauma treatment and stabilization. Coordinate medical evacuation through air and ground assets to regiment medical facilities.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chart-bar" style="margin-right: 6px; color: #f59e0b;"></i>
                            Extended Operations Planning
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Fuel Management:</strong> Calculate fuel consumption for extended reconnaissance operations with emphasis on vehicle mobility and generator operations. Establish fuel conservation measures and emergency resupply procedures.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Ammunition Planning:</strong> Maintain basic load plus 0.5 units of fire for all weapon systems. Emphasize small arms ammunition and anti-armor munitions for reconnaissance security operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Personnel Sustainment:</strong> Implement rotation schedules for extended reconnaissance operations. Coordinate rest and refit operations to maintain reconnaissance effectiveness over extended periods.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Operations Integration -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                    Multi-Domain Reconnaissance Operations Integration
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Multi-Domain Intelligence Collection
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Land Domain:</strong> Conduct ground reconnaissance and surveillance operations with emphasis on enemy ground forces, obstacles, and terrain analysis. Coordinate with dismounted reconnaissance teams for detailed intelligence collection.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Air Domain:</strong> Coordinate with air cavalry and unmanned aerial systems for aerial reconnaissance and surveillance. Integrate air-ground reconnaissance for comprehensive intelligence picture.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Space Domain:</strong> Utilize GPS and satellite communication systems for navigation and communication. Coordinate with space operations center for satellite imagery and intelligence support.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-virus" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Electronic Warfare and Cyber Operations
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Electronic Warfare:</strong> Coordinate with electronic warfare section for signals intelligence collection and electronic attack capabilities. Utilize electronic surveillance for enemy communication intercept and analysis.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Cyber Domain:</strong> Implement cybersecurity protocols for all digital reconnaissance systems. Coordinate with regiment cyber operations team for defensive cyber operations and digital signature management.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Information Operations:</strong> Coordinate information collection and dissemination through secure networks. Implement counter-intelligence measures to protect reconnaissance operations from enemy intelligence collection.
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
                            This comprehensive squadron-level COA approval example provides company and field grade officers (O-3 through O-5) with authoritative guidance for conducting reconnaissance planning and decision-making in complex joint and coalition environments. The scenario demonstrates integration of reconnaissance doctrine, intelligence collection, coalition coordination, and multi-domain operations planning at the squadron level.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Educational applications include Intermediate Level Education reconnaissance planning courses, Advanced Military Studies Program, cavalry officer development programs, and complex reconnaissance planning exercises requiring sophisticated understanding of squadron-level command responsibilities and reconnaissance decision-making processes.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Military professionals can utilize this example to understand squadron commander decision authority, reconnaissance risk assessment methodologies, coalition intelligence coordination, sustainment operations planning for extended operations, and multi-domain reconnaissance integration in Large Scale Combat Operations environments.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-target" style="margin-right: 6px; color: #10b981;"></i>
                            Reconnaissance-Specific Learning Objectives
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Intelligence Collection:</strong> Understand systematic approach to intelligence collection planning and execution. Develop competency in reconnaissance techniques, surveillance operations, and intelligence reporting procedures.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Force Protection:</strong> Develop understanding of reconnaissance-specific risks and mitigation measures. Understand operational security requirements and counter-reconnaissance operations in contested environments.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Coalition Integration:</strong> Understand multinational intelligence sharing protocols, NATO standardization procedures, and interoperability requirements for coalition reconnaissance operations in Large Scale Combat Operations.
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
                    Implementation Guidance and Reconnaissance Best Practices
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-eye" style="margin-right: 6px; color: #10b981;"></i>
                            Reconnaissance Planning Best Practices
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Intelligence Requirements:</strong> Clearly define priority intelligence requirements and collection methods. Coordinate with higher headquarters for intelligence collection priorities and reporting requirements.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Operational Security:</strong> Implement comprehensive OPSEC measures including communication discipline, movement security, and signature management. Balance intelligence collection requirements with force protection considerations.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 6px; color: #10b981;"></i>
                            Tactical Execution Guidelines
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Adaptive Reconnaissance:</strong> Maintain flexibility to adapt reconnaissance methods based on enemy activity and terrain conditions. Utilize both stealth and aggressive techniques as tactical situation requires.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Continuous Operations:</strong> Plan for extended reconnaissance operations with appropriate sustainment and personnel rotation. Maintain reconnaissance effectiveness over extended periods through proper planning and resource management.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const squadronPracticalModule = {
    getContent() {
        return getSquadronCOAApprovalExample();
    }
};

export default squadronPracticalModule;
