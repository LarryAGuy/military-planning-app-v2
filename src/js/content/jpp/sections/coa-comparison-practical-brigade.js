/**
 * JPP Step 5: Course of Action Comparison - Brigade Level Practical Example
 *
 * This module provides a comprehensive practical example of COA comparison
 * at the Brigade level, demonstrating tactical-level decision-making processes,
 * resource allocation, and operational planning within the European Campaign framework.
 *
 * Command Level: Colonel (Brigade Combat Team Commander)
 * Personnel: 4,200 soldiers
 * Investment: $18 billion tactical resources
 * Planning Horizon: 24-48 hours tactical operations
 *
 * @module BrigadeCOAComparisonPractical
 */

function getBrigadeCOAComparisonExample() {
    return `
        <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
            <h3 style="color: #10b981; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; display: flex; align-items: center;">
                <i class="fas fa-balance-scale" style="margin-right: 12px; color: #10b981; font-size: 20px;"></i>
                JPP Step 5: Brigade-Level COA Comparison - 3rd Brigade Combat Team, 82nd Airborne Division
            </h3>

            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 20px;">
                <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                    <i class="fas fa-info-circle" style="margin-right: 8px; font-size: 13px;"></i>
                    Brigade Tactical Context
                </h4>
                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                    <strong>Commander:</strong> Colonel Sarah M. Rodriguez, 3rd BCT, 82nd Airborne Division<br>
                    <strong>Mission:</strong> Conduct tactical assault operations to seize Objective FALCON within division operational timeline<br>
                    <strong>Personnel:</strong> 4,200 soldiers across three battalion task forces<br>
                    <strong>Resources:</strong> $18 billion tactical investment including equipment, sustainment, and operational support<br>
                    <strong>Timeline:</strong> 24-hour tactical decision cycle supporting division 48-hour operational timeline
                </p>
            </div>

            <!-- First Row: COA Comparison Matrix & Risk Assessment -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Brigade COA Comparison Matrix -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px;">
                    <h4 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-table" style="margin-right: 10px; color: #10b981; font-size: 18px;"></i>
                        Brigade COA Comparison Matrix
                    </h4>

                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 16px;">
                        <h5 style="font-weight: 600; color: #6ee7b7; font-size: 13px; margin: 0 0 12px 0;">
                            <i class="fas fa-chart-bar" style="margin-right: 6px; font-size: 12px;"></i>
                            Brigade Tactical Evaluation Criteria
                        </h5>
                        <div style="background: #1e293b; padding: 14px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
                            <table style="width: 100%; color: #e5e7eb; font-size: 11px; border-collapse: collapse;">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.3);">
                                        <th style="text-align: left; padding: 6px; color: #6ee7b7; font-weight: 600;">Criteria (Weight)</th>
                                        <th style="text-align: center; padding: 6px; color: #6ee7b7; font-weight: 600;">COA 1</th>
                                        <th style="text-align: center; padding: 6px; color: #6ee7b7; font-weight: 600;">COA 2</th>
                                        <th style="text-align: center; padding: 6px; color: #6ee7b7; font-weight: 600;">COA 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Mission Success (25%)</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">9</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">7</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">5</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Force Protection (20%)</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">7</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">9</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">8</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Tactical Tempo (20%)</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">9</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">6</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">4</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Resource Efficiency (15%)</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">6</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">8</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">9</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Flexibility (10%)</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">8</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">7</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">5</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Sustainment (10%)</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">7</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">8</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">9</td>
                                    </tr>
                                    <tr style="background: rgba(16, 185, 129, 0.1); font-weight: 600;">
                                        <td style="padding: 6px; color: #6ee7b7;">WEIGHTED SCORE</td>
                                        <td style="text-align: center; padding: 6px; color: #10b981; font-size: 12px;">8.1</td>
                                        <td style="text-align: center; padding: 6px; color: #f59e0b; font-size: 12px;">7.4</td>
                                        <td style="text-align: center; padding: 6px; color: #dc2626; font-size: 12px;">6.2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 14px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 16px;">
                        <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 10px 0;">
                            <i class="fas fa-trophy" style="margin-right: 6px; font-size: 11px;"></i>
                            Brigade COA Descriptions
                        </h6>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <li><strong>COA 1 - Rapid Assault:</strong> Three-battalion coordinated assault with 18-hour timeline</li>
                            <li><strong>COA 2 - Deliberate Attack:</strong> Sequential battalion attacks with 36-hour timeline</li>
                            <li><strong>COA 3 - Economy of Force:</strong> Single battalion assault with two in reserve</li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 12px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.6);">
                        <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">
                            <i class="fas fa-award" style="margin-right: 6px; font-size: 11px;"></i>
                            Brigade Decision Matrix Result
                        </h6>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            COA 1 (Rapid Assault) achieves highest weighted score of 8.1, providing optimal balance of mission success and tactical tempo while maintaining acceptable force protection risk.
                        </p>
                    </div>
                </div>

                <!-- Brigade Risk Assessment -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px;">
                    <h4 style="color: #dc2626; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #dc2626; font-size: 18px;"></i>
                        Brigade Risk Assessment
                    </h4>

                    <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                        <h5 style="font-weight: 600; color: #fca5a5; font-size: 13px; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 6px; font-size: 12px;"></i>
                            Brigade Tactical Risk Analysis
                        </h5>
                        <div style="background: #1e293b; padding: 14px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(220, 38, 38, 0.3);">
                            <table style="width: 100%; color: #e5e7eb; font-size: 11px; border-collapse: collapse;">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.3);">
                                        <th style="text-align: left; padding: 6px; color: #fca5a5; font-weight: 600;">Risk Category</th>
                                        <th style="text-align: center; padding: 6px; color: #fca5a5; font-weight: 600;">COA 1</th>
                                        <th style="text-align: center; padding: 6px; color: #fca5a5; font-weight: 600;">COA 2</th>
                                        <th style="text-align: center; padding: 6px; color: #fca5a5; font-weight: 600;">COA 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Tactical Risk</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Medium</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Low</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">High</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Casualty Risk</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Medium</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Low</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Medium</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Logistics Risk</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Medium</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Low</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Low</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Timeline Risk</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Low</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Medium</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">High</td>
                                    </tr>
                                    <tr style="background: rgba(220, 38, 38, 0.1); font-weight: 600;">
                                        <td style="padding: 6px; color: #fca5a5;">OVERALL RISK</td>
                                        <td style="text-align: center; padding: 6px; color: #f59e0b; font-size: 12px;">MEDIUM</td>
                                        <td style="text-align: center; padding: 6px; color: #10b981; font-size: 12px;">LOW</td>
                                        <td style="text-align: center; padding: 6px; color: #dc2626; font-size: 12px;">HIGH</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 14px; border-radius: 8px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                        <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 10px 0;">
                            <i class="fas fa-chart-line" style="margin-right: 6px; font-size: 11px;"></i>
                            Critical Brigade Risk Factors
                        </h6>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <li><strong>COA 1:</strong> High tactical tempo may strain battalion coordination, medium casualty risk</li>
                            <li><strong>COA 2:</strong> Extended timeline allows enemy battalion-level reinforcement</li>
                            <li><strong>COA 3:</strong> Insufficient brigade mass creates vulnerability to enemy counterattack</li>
                            <li><strong>Mitigation:</strong> Robust battalion coordination and integrated fire support</li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 12px; border-radius: 6px; border: 1px solid rgba(220, 38, 38, 0.6);">
                        <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">
                            <i class="fas fa-balance-scale" style="margin-right: 6px; font-size: 11px;"></i>
                            Risk vs. Brigade Effectiveness
                        </h6>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            Brigade-level risk assessment balances tactical effectiveness with force protection. COA 1's medium risk profile is acceptable given high mission success probability and alignment with division objectives.
                        </p>
                    </div>
                </div>

            </div>

            <!-- Second Row: War Gaming Integration & Brigade End State Analysis -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- War Gaming Results Integration -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px;">
                    <h4 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-chess-board" style="margin-right: 10px; color: #10b981; font-size: 18px;"></i>
                        War Gaming Results Integration
                    </h4>

                    <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 16px;">
                        <h5 style="font-weight: 600; color: #6ee7b7; font-size: 13px; margin: 0 0 12px 0;">
                            <i class="fas fa-gamepad" style="margin-right: 6px; font-size: 12px;"></i>
                            JPP Step 4 Battalion War Gaming Outcomes
                        </h5>
                        <div style="background: #1e293b; padding: 14px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
                            <table style="width: 100%; color: #e5e7eb; font-size: 11px; border-collapse: collapse;">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.3);">
                                        <th style="text-align: left; padding: 6px; color: #6ee7b7; font-weight: 600;">War Game Scenario</th>
                                        <th style="text-align: center; padding: 6px; color: #6ee7b7; font-weight: 600;">COA 1</th>
                                        <th style="text-align: center; padding: 6px; color: #6ee7b7; font-weight: 600;">COA 2</th>
                                        <th style="text-align: center; padding: 6px; color: #6ee7b7; font-weight: 600;">COA 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Battalion Assault</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">81% Success</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">68% Success</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">54% Success</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Battalion Defense</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">85% Success</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">74% Success</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">61% Success</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Battalion Maneuver</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">78% Success</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">65% Success</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">51% Success</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Battalion Sustainment</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">83% Success</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">76% Success</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">64% Success</td>
                                    </tr>
                                    <tr style="background: rgba(16, 185, 129, 0.1); font-weight: 600;">
                                        <td style="padding: 6px; color: #6ee7b7;">OVERALL SUCCESS</td>
                                        <td style="text-align: center; padding: 6px; color: #10b981; font-size: 12px;">82%</td>
                                        <td style="text-align: center; padding: 6px; color: #f59e0b; font-size: 12px;">71%</td>
                                        <td style="text-align: center; padding: 6px; color: #dc2626; font-size: 12px;">58%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 14px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 16px;">
                        <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 10px 0;">
                            <i class="fas fa-chart-bar" style="margin-right: 6px; font-size: 11px;"></i>
                            Battalion War Gaming Key Insights
                        </h6>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <li><strong>COA 1 Advantages:</strong> Superior company coordination and integrated fire support</li>
                            <li><strong>COA 2 Limitations:</strong> Extended timeline reduces tactical surprise and momentum</li>
                            <li><strong>COA 3 Weaknesses:</strong> Insufficient battalion mass creates tactical vulnerabilities</li>
                            <li><strong>Critical Success Factor:</strong> Company-level synchronization and fire support</li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 12px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.6);">
                        <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">
                            <i class="fas fa-trophy" style="margin-right: 6px; font-size: 11px;"></i>
                            War Gaming Validation
                        </h6>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            Battalion-level war gaming confirms COA 1's tactical superiority with 82% overall success rate. War gaming results directly inform brigade COA comparison matrix scoring and risk assessment.
                        </p>
                    </div>
                </div>

                <!-- Brigade-Level End State Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px;">
                    <h4 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-flag-checkered" style="margin-right: 10px; color: #3b82f6; font-size: 18px;"></i>
                        Brigade-Level End State Analysis
                    </h4>

                    <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(59, 130, 246, 0.4); margin-bottom: 16px;">
                        <h5 style="font-weight: 600; color: #93c5fd; font-size: 13px; margin: 0 0 12px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 6px; font-size: 12px;"></i>
                            Brigade Tactical End State Objectives
                        </h5>
                        <div style="background: #1e293b; padding: 14px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(59, 130, 246, 0.3);">
                            <div style="margin-bottom: 12px;">
                                <h6 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">COA 1 - RAPID BRIGADE ASSAULT:</h6>
                                <ul style="color: #e0f7fa; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li><strong>Tactical Objective:</strong> Seize Objective FALCON within 18 hours</li>
                                    <li><strong>Brigade Effects:</strong> Destroy enemy battalion task force in sector</li>
                                    <li><strong>Terrain Control:</strong> Secure key terrain for division follow-on operations</li>
                                    <li><strong>Force Protection:</strong> Maintain 85% brigade combat effectiveness</li>
                                </ul>
                            </div>
                            <div style="margin-bottom: 12px;">
                                <h6 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">COA 2 - DELIBERATE BRIGADE ATTACK:</h6>
                                <ul style="color: #e0f7fa; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li><strong>Tactical Objective:</strong> Seize Objective FALCON within 36 hours</li>
                                    <li><strong>Brigade Effects:</strong> Methodically reduce enemy defensive positions</li>
                                    <li><strong>Terrain Control:</strong> Establish secure brigade defensive positions</li>
                                    <li><strong>Force Protection:</strong> Maintain 90% brigade combat effectiveness</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">COA 3 - ECONOMY OF FORCE:</h6>
                                <ul style="color: #e0f7fa; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li><strong>Tactical Objective:</strong> Fix enemy forces in sector for 48 hours</li>
                                    <li><strong>Brigade Effects:</strong> Prevent enemy reinforcement of main effort</li>
                                    <li><strong>Terrain Control:</strong> Maintain current brigade defensive lines</li>
                                    <li><strong>Force Protection:</strong> Preserve brigade combat power for future operations</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 14px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 16px;">
                        <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 10px 0;">
                            <i class="fas fa-chart-line" style="margin-right: 6px; font-size: 11px;"></i>
                            Brigade Success Metrics
                        </h6>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <li><strong>Tactical Success:</strong> Objective seizure within specified timeline</li>
                            <li><strong>Combat Effectiveness:</strong> Maintain minimum 80% brigade strength</li>
                            <li><strong>Operational Tempo:</strong> Support division operational timeline requirements</li>
                            <li><strong>Sustainment:</strong> Maintain brigade logistics capability for 48 hours</li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 12px; border-radius: 6px; border: 1px solid rgba(59, 130, 246, 0.6);">
                        <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">
                            <i class="fas fa-medal" style="margin-right: 6px; font-size: 11px;"></i>
                            Brigade Tactical End State Validation
                        </h6>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            Brigade-level end state analysis confirms COA 1 provides optimal balance of tactical success, operational tempo, and force protection. End state objectives align with division operational requirements and brigade tactical capabilities.
                        </p>
                    </div>
                </div>

            </div>

            <!-- Third Row: Branch & Sequel Planning & Coalition Coordination -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Branch & Sequel Planning -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px;">
                    <h4 style="color: #f59e0b; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-route" style="margin-right: 10px; color: #f59e0b; font-size: 18px;"></i>
                        Branch & Sequel Planning
                    </h4>

                    <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                        <h5 style="font-weight: 600; color: #fbbf24; font-size: 13px; margin: 0 0 12px 0;">
                            <i class="fas fa-code-branch" style="margin-right: 6px; font-size: 12px;"></i>
                            Battalion Contingency Operations Framework
                        </h5>
                        <div style="background: #1e293b; padding: 14px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(245, 158, 11, 0.3);">
                            <div style="margin-bottom: 12px;">
                                <h6 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">BRANCH PLANS (Contingency Operations):</h6>
                                <ul style="color: #e0f7fa; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li><strong>Branch ALPHA:</strong> Enemy counterattack during battalion assault</li>
                                    <li><strong>Branch BRAVO:</strong> Battalion logistics disruption requiring resupply</li>
                                    <li><strong>Branch CHARLIE:</strong> Weather delays affecting battalion timeline</li>
                                    <li><strong>Branch DELTA:</strong> Adjacent unit failure requiring battalion support</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">SEQUEL PLANS (Follow-on Operations):</h6>
                                <ul style="color: #e0f7fa; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li><strong>Sequel 1:</strong> Battalion exploitation of tactical success</li>
                                    <li><strong>Sequel 2:</strong> Battalion transition to defensive operations</li>
                                    <li><strong>Sequel 3:</strong> Battalion redeployment for next operation</li>
                                    <li><strong>Sequel 4:</strong> Battalion reconstitution and reorganization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 14px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 16px;">
                        <h6 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 10px 0;">
                            <i class="fas fa-sitemap" style="margin-right: 6px; font-size: 11px;"></i>
                            Battalion Decision Points
                        </h6>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <li><strong>DP 1:</strong> H+4 - Battalion assault progress assessment</li>
                            <li><strong>DP 2:</strong> H+8 - Enemy reaction force identification</li>
                            <li><strong>DP 3:</strong> H+12 - Objective seizure confirmation</li>
                            <li><strong>DP 4:</strong> H+18 - Sequel operation initiation</li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 12px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.6);">
                        <h6 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">
                            <i class="fas fa-chess-knight" style="margin-right: 6px; font-size: 11px;"></i>
                            Battalion Operational Flexibility
                        </h6>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            Comprehensive branch and sequel planning provides battalion-level operational flexibility. COA 1's rapid tempo enables multiple sequel options while maintaining tactical initiative.
                        </p>
                    </div>
                </div>

                <!-- Coalition Coordination Matrix -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px;">
                    <h4 style="color: #dc2626; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-handshake" style="margin-right: 10px; color: #dc2626; font-size: 18px;"></i>
                        Coalition Coordination Matrix
                    </h4>

                    <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                        <h5 style="font-weight: 600; color: #fca5a5; font-size: 13px; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 6px; font-size: 12px;"></i>
                            Allied Battalion Integration Requirements
                        </h5>
                        <div style="background: #1e293b; padding: 14px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(220, 38, 38, 0.3);">
                            <table style="width: 100%; color: #e5e7eb; font-size: 11px; border-collapse: collapse;">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.3);">
                                        <th style="text-align: left; padding: 6px; color: #fca5a5; font-weight: 600;">Allied Unit</th>
                                        <th style="text-align: center; padding: 6px; color: #fca5a5; font-weight: 600;">COA 1</th>
                                        <th style="text-align: center; padding: 6px; color: #fca5a5; font-weight: 600;">COA 2</th>
                                        <th style="text-align: center; padding: 6px; color: #fca5a5; font-weight: 600;">COA 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">UK 2nd Battalion</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Full Integration</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Coordinated</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Limited</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">German Panzer Battalion</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Synchronized</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Coordinated</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">Minimal</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(220, 38, 38, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">French Battalion Combat</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Coordinated</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Coordinated</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">Limited</td>
                                    </tr>
                                    <tr style="background: rgba(220, 38, 38, 0.1); font-weight: 600;">
                                        <td style="padding: 6px; color: #fca5a5;">COALITION EFFECTIVENESS</td>
                                        <td style="text-align: center; padding: 6px; color: #10b981; font-size: 12px;">HIGH</td>
                                        <td style="text-align: center; padding: 6px; color: #f59e0b; font-size: 12px;">MODERATE</td>
                                        <td style="text-align: center; padding: 6px; color: #dc2626; font-size: 12px;">LOW</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 14px; border-radius: 8px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                        <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 10px 0;">
                            <i class="fas fa-users" style="margin-right: 6px; font-size: 11px;"></i>
                            Battalion Coalition Coordination
                        </h6>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <li><strong>Command Integration:</strong> NATO standardized procedures and communications</li>
                            <li><strong>Logistics Coordination:</strong> Multinational battalion sustainment planning</li>
                            <li><strong>Fire Support:</strong> Integrated allied artillery and air support</li>
                            <li><strong>Intelligence Sharing:</strong> Real-time tactical intelligence exchange</li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 12px; border-radius: 6px; border: 1px solid rgba(220, 38, 38, 0.6);">
                        <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">
                            <i class="fas fa-flag" style="margin-right: 6px; font-size: 11px;"></i>
                            Coalition Battalion Assessment
                        </h6>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            COA 1 maximizes coalition battalion integration through synchronized operations and standardized procedures. Allied battalion coordination enhances tactical effectiveness and operational success probability.
                        </p>
                    </div>
                </div>

            </div>

            <!-- Fourth Row: Multi-Domain Operations Integration & Doctrinal Framework -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Multi-Domain Operations Integration -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px;">
                    <h4 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-network-wired" style="margin-right: 10px; color: #8b5cf6; font-size: 18px;"></i>
                        Multi-Domain Operations Integration
                    </h4>

                    <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(139, 92, 246, 0.4); margin-bottom: 16px;">
                        <h5 style="font-weight: 600; color: #c4b5fd; font-size: 13px; margin: 0 0 12px 0;">
                            <i class="fas fa-cube" style="margin-right: 6px; font-size: 12px;"></i>
                            Battalion-Level Multi-Domain Integration Assessment
                        </h5>
                        <div style="background: #1e293b; padding: 14px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(139, 92, 246, 0.3);">
                            <table style="width: 100%; color: #e5e7eb; font-size: 11px; border-collapse: collapse;">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgba(139, 92, 246, 0.3);">
                                        <th style="text-align: left; padding: 6px; color: #c4b5fd; font-weight: 600;">Domain</th>
                                        <th style="text-align: center; padding: 6px; color: #c4b5fd; font-weight: 600;">COA 1</th>
                                        <th style="text-align: center; padding: 6px; color: #c4b5fd; font-weight: 600;">COA 2</th>
                                        <th style="text-align: center; padding: 6px; color: #c4b5fd; font-weight: 600;">COA 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid rgba(139, 92, 246, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Land Domain</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Integrated</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Coordinated</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">Basic</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(139, 92, 246, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Air Domain</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Coordinated</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Coordinated</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Limited</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(139, 92, 246, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Space Domain</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Supported</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Basic</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">Limited</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(139, 92, 246, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Cyberspace Domain</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Integrated</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Coordinated</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Basic</td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(139, 92, 246, 0.2);">
                                        <td style="padding: 4px; font-weight: 500;">Information Domain</td>
                                        <td style="text-align: center; padding: 4px; color: #10b981;">Coordinated</td>
                                        <td style="text-align: center; padding: 4px; color: #f59e0b;">Limited</td>
                                        <td style="text-align: center; padding: 4px; color: #dc2626;">Fragmented</td>
                                    </tr>
                                    <tr style="background: rgba(139, 92, 246, 0.1); font-weight: 600;">
                                        <td style="padding: 6px; color: #c4b5fd;">INTEGRATION LEVEL</td>
                                        <td style="text-align: center; padding: 6px; color: #10b981; font-size: 12px;">GOOD</td>
                                        <td style="text-align: center; padding: 6px; color: #f59e0b; font-size: 12px;">MODERATE</td>
                                        <td style="text-align: center; padding: 6px; color: #dc2626; font-size: 12px;">LIMITED</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 14px; border-radius: 8px; border-left: 4px solid #8b5cf6; margin-bottom: 16px;">
                        <h6 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 10px 0;">
                            <i class="fas fa-sync" style="margin-right: 6px; font-size: 11px;"></i>
                            Company-Level Domain Synchronization
                        </h6>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <li><strong>Land-Air:</strong> Close air support and tactical airlift coordination</li>
                            <li><strong>Cyber-Information:</strong> Electronic warfare and tactical information operations</li>
                            <li><strong>Space-Land:</strong> GPS, SATCOM, and tactical ISR support</li>
                            <li><strong>Company Integration:</strong> Multi-domain effects at company level</li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 12px; border-radius: 6px; border: 1px solid rgba(139, 92, 246, 0.6);">
                        <h6 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">
                            <i class="fas fa-layer-group" style="margin-right: 6px; font-size: 11px;"></i>
                            Brigade Multi-Domain Coordination
                        </h6>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            COA 1 achieves good multi-domain coordination through integrated operations across available domains. Brigade-level integration enables division tactical success while supporting battalion tactical execution.
                        </p>
                    </div>
                </div>

                <!-- Doctrinal Framework & Decision Support Tools -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px;">
                    <h4 style="color: #06b6d4; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #06b6d4; font-size: 18px;"></i>
                        Doctrinal Framework & Decision Support Tools
                    </h4>

                    <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(6, 182, 212, 0.4); margin-bottom: 16px;">
                        <h5 style="font-weight: 600; color: #67e8f9; font-size: 13px; margin: 0 0 12px 0;">
                            <i class="fas fa-graduation-cap" style="margin-right: 6px; font-size: 12px;"></i>
                            Brigade-Level Doctrinal Compliance Assessment
                        </h5>
                        <div style="background: #1e293b; padding: 14px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(6, 182, 212, 0.3);">
                            <div style="margin-bottom: 12px;">
                                <h6 style="color: #67e8f9; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">BATTALION DOCTRINAL REFERENCES:</h6>
                                <ul style="color: #e0f7fa; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li><strong>JP 5-0:</strong> Joint Planning (Chapter 4: COA Comparison and Decision)</li>
                                    <li><strong>FM 5-0:</strong> The Operations Process (Chapter 9: COA Comparison)</li>
                                    <li><strong>CJCSM 3105.01:</strong> Joint Risk Analysis Methodology</li>
                                    <li><strong>FM 3-0:</strong> Operations (Chapter 6: Multi-Domain Operations)</li>
                                    <li><strong>FM 3-90:</strong> Tactics (Chapter 4: Brigade Combat Team Operations)</li>
                                </ul>
                            </div>
                            <div>
                                <h6 style="color: #67e8f9; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">BATTALION DECISION SUPPORT TOOLS:</h6>
                                <table style="width: 100%; color: #e0f7fa; font-size: 11px; border-collapse: collapse;">
                                    <thead>
                                        <tr style="border-bottom: 1px solid rgba(6, 182, 212, 0.3);">
                                            <th style="text-align: left; padding: 6px; color: #67e8f9; font-weight: 600;">Tool</th>
                                            <th style="text-align: center; padding: 6px; color: #67e8f9; font-weight: 600;">Application</th>
                                            <th style="text-align: center; padding: 6px; color: #67e8f9; font-weight: 600;">COA Impact</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="border-bottom: 1px solid rgba(6, 182, 212, 0.2);">
                                            <td style="padding: 4px; font-weight: 500;">Decision Matrix</td>
                                            <td style="text-align: center; padding: 4px;">Weighted Scoring</td>
                                            <td style="text-align: center; padding: 4px; color: #10b981;">COA 1 Preferred</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(6, 182, 212, 0.2);">
                                            <td style="padding: 4px; font-weight: 500;">Risk Assessment</td>
                                            <td style="text-align: center; padding: 4px;">CJCSM 3105.01</td>
                                            <td style="text-align: center; padding: 4px; color: #f59e0b;">Medium Risk</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(6, 182, 212, 0.2);">
                                            <td style="padding: 4px; font-weight: 500;">SWOT Analysis</td>
                                            <td style="text-align: center; padding: 4px;">Battalion Assessment</td>
                                            <td style="text-align: center; padding: 4px; color: #10b981;">COA 1 Favorable</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(6, 182, 212, 0.2);">
                                            <td style="padding: 4px; font-weight: 500;">Decision Tree</td>
                                            <td style="text-align: center; padding: 4px;">Branch Planning</td>
                                            <td style="text-align: center; padding: 4px; color: #10b981;">Good Flexibility</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 14px; border-radius: 8px; border-left: 4px solid #06b6d4; margin-bottom: 16px;">
                        <h6 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 10px 0;">
                            <i class="fas fa-calculator" style="margin-right: 6px; font-size: 11px;"></i>
                            Battalion Analytical Framework
                        </h6>
                        <ul style="color: #e0f7fa; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <li><strong>Quantitative Analysis:</strong> Weighted decision matrix with 6 battalion criteria</li>
                            <li><strong>Qualitative Assessment:</strong> Battalion-focused SWOT analysis for each COA</li>
                            <li><strong>Risk Methodology:</strong> CJCSM 3105.01 compliant battalion risk framework</li>
                            <li><strong>Sensitivity Analysis:</strong> Variable weight testing for decision validation</li>
                        </ul>
                    </div>

                    <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 12px; border-radius: 6px; border: 1px solid rgba(6, 182, 212, 0.6);">
                        <h6 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 8px 0;">
                            <i class="fas fa-stamp" style="margin-right: 6px; font-size: 11px;"></i>
                            Battalion Doctrinal Compliance Certification
                        </h6>
                        <p style="color: #e0f7fa; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <strong>Certification:</strong> Brigade-level COA comparison fully compliant with JP 5-0, FM 5-0, and CJCSM 3105.01 methodologies. Battalion decision support tools validated through doctrinal standards and tactical best practices.
                        </p>
                    </div>
                </div>

            </div>

            <!-- Brigade COA Comparison Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Brigade COA Comparison - Battalion Decision Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Decision Outcome:</h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Recommended COA:</strong> COA 1 - Rapid Brigade Assault<br>
                            <strong>Weighted Score:</strong> 8.1/10 (highest among all options)<br>
                            <strong>Risk Level:</strong> Medium (acceptable for mission requirements)<br>
                            <strong>Success Probability:</strong> 82% based on battalion war gaming results
                        </p>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Key Decision Factors:</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                            <li>Superior mission success probability (9/10)</li>
                            <li>Optimal tactical tempo supporting division timeline</li>
                            <li>Good multi-domain integration capability</li>
                            <li>High coalition coordination effectiveness</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Implementation Guidance:</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0 0 12px 0; padding-left: 16px;">
                            <li>Execute comprehensive battalion coordination</li>
                            <li>Implement robust branch planning for contingencies</li>
                            <li>Maintain integrated fire support throughout operation</li>
                            <li>Ensure coalition battalion synchronization</li>
                        </ul>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Commander's Guidance:</h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            "COA 1 provides the optimal balance of tactical success and operational tempo required to support division objectives. The medium risk is acceptable given our battalion capabilities and coalition support."
                        </p>
                    </div>
                </div>
            </div>

        </div>
    `;
}

export const brigadePracticalModule = {
  getContent() {
    return getBrigadeCOAComparisonExample();
  }
};

export { getBrigadeCOAComparisonExample };

export default brigadePracticalModule;
