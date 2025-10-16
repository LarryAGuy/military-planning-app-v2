/**
 * OPORD Execution - Echelon Analysis - Squadron Level
 * UNCLASSIFIED content for squadron-level execution analysis frameworks
 * Follows FM 5-0 standards with tactical execution requirements
 * Scaled from Company template for Squadron-level complexity (Cavalry/Aviation)
 */

export const squadronExecutionAnalysisModule = {
    id: 'squadron-execution-analysis',
    title: 'Squadron Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Squadron',

    getContent() {
        return `
            <!-- Squadron Level Execution Analysis - Specialized Tactical Operations Framework -->
            <div id="squadron-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-horse-head" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        Squadron Level Execution Analysis Framework
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        Specialized Tactical Operations - Multi-Troop Coordination
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                    
                    <!-- Card 1: Squadron Concept of Operations -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-search" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                Squadron Concept of Operations Framework
                            </h4>

                            <!-- Multi-Troop Operations -->
                            <div style="background-color: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Multi-Troop Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Main Effort:</strong> Troop-level reconnaissance operations, tactical focus</li>
                                    <li><strong>Supporting Effort:</strong> Troop security operations, tactical support</li>
                                    <li><strong>Reserve:</strong> Squadron reserve troop/platoon, tactical flexibility</li>
                                    <li><strong>Enablers:</strong> Squadron scouts, engineers, intelligence, sustainment, signal</li>
                                    <li><strong>Brigade Integration:</strong> Squadron mission within brigade operations</li>
                                    <li><strong>Reconnaissance Coordination:</strong> ISR integration, security operations</li>
                                </ul>
                            </div>

                            <!-- Squadron Tactical Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Squadron Tactical Design</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase I:</strong> Troop Preparation<br>
                                        <strong>Phase II:</strong> Troop Deployment<br>
                                        <strong>Phase III:</strong> Troop Reconnaissance
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase IV:</strong> Troop Security<br>
                                        <strong>Phase V:</strong> Troop Consolidation<br>
                                        <strong>Phase VI:</strong> Troop Transition
                                    </div>
                                </div>
                            </div>

                            <!-- Squadron Lines of Effort -->
                            <div style="background-color: rgba(16, 185, 129, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 4px 0;">Squadron Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Reconnaissance Operations • <strong>LOE 2:</strong> Security Operations • <strong>LOE 3:</strong> Force Protection • <strong>LOE 4:</strong> Sustainment
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Troop Task Organization -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 280px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-shield-alt" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Troop Task Organization
                            </h4>
                            
                            <!-- Troop Assignment -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Troop Assignment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>A Troop:</strong> Eastern reconnaissance zone</li>
                                    <li><strong>B Troop:</strong> Central reconnaissance zone</li>
                                    <li><strong>C Troop:</strong> Western reconnaissance zone</li>
                                    <li><strong>Squadron Reserve:</strong> Support troop</li>
                                </ul>
                            </div>

                            <!-- Squadron Enablers -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Squadron Enablers</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Squadron headquarters, support troop,
                                    maintenance section, medical section, signal section
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Squadron Coordinating Instructions -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 280px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-route" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Squadron Coordinating Instructions
                            </h4>
                            
                            <!-- Tactical Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Troop Boundaries:</strong> Reconnaissance zones</li>
                                    <li><strong>Phase Lines:</strong> Reconnaissance objectives</li>
                                    <li><strong>Coordination Points:</strong> Inter-troop sync</li>
                                    <li><strong>Fire Support:</strong> Squadron-level targeting</li>
                                </ul>
                            </div>

                            <!-- Tactical ROE -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Rules of Engagement</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Squadron-level ROE, troop coordination requirements,
                                    reconnaissance engagement criteria, stealth protocols
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Squadron Sustainment & Communications -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 280px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-gas-pump" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Squadron Sustainment & Communications
                            </h4>
                            
                            <!-- Squadron Sustainment -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Squadron Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Logistics:</strong> Troop sustainment support</li>
                                    <li><strong>Medical:</strong> Squadron medical operations</li>
                                    <li><strong>Transportation:</strong> Mobility coordination</li>
                                    <li><strong>Maintenance:</strong> Vehicle/equipment readiness</li>
                                </ul>
                            </div>

                            <!-- Squadron Communications -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Squadron Communications</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Squadron signal network, troop connectivity,
                                    regiment integration, reconnaissance communications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Squadron Analysis Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 5: Squadron Risk Assessment Framework -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-exclamation-triangle" style="margin-right: 8px; color: #dc2626; font-size: 12px;"></i>
                                Squadron Risk Assessment Framework
                            </h4>

                            <!-- Squadron Risk Categories -->
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Squadron Risk Categories</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Reconnaissance Risk:</strong> Troop coordination, multi-troop synchronization</li>
                                    <li><strong>Security Risk:</strong> Brigade integration, squadron mission coherence</li>
                                    <li><strong>Mobility Risk:</strong> Troop force ratios, tactical tempo</li>
                                    <li><strong>Logistics Risk:</strong> Squadron sustainment, troop support</li>
                                    <li><strong>Information Risk:</strong> Squadron networks, troop communications</li>
                                    <li><strong>Terrain Risk:</strong> Reconnaissance mobility, obstacle integration</li>
                                </ul>
                            </div>

                            <!-- Risk Mitigation Strategies -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Squadron Risk Mitigation</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Preventive:</strong> Troop coordination<br>
                                        <strong>Protective:</strong> Squadron force protection<br>
                                        <strong>Responsive:</strong> Squadron reserve employment
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Adaptive:</strong> Flexible troop employment<br>
                                        <strong>Redundant:</strong> Multiple troop capabilities<br>
                                        <strong>Resilient:</strong> Squadron recovery operations
                                    </div>
                                </div>
                            </div>

                            <!-- Squadron Decision Matrix -->
                            <div style="background-color: rgba(220, 38, 38, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Squadron Decision Matrix</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>High Impact/High Probability:</strong> Troop commitment • <strong>High Impact/Low Probability:</strong> Reserve planning •
                                    <strong>Low Impact/High Probability:</strong> Standard procedures • <strong>Low Impact/Low Probability:</strong> Monitor
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Squadron Assessment & Metrics -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-chart-line" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
                                Squadron Assessment & Metrics Framework
                            </h4>

                            <!-- Squadron Measures of Effectiveness -->
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Squadron Measures of Effectiveness (MOEs)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Reconnaissance Objectives:</strong> Troop mission accomplishment, reconnaissance progress</li>
                                    <li><strong>Security Objectives:</strong> Brigade integration, security coherence</li>
                                    <li><strong>Mobility Objectives:</strong> Troop tactical success, reconnaissance tempo</li>
                                    <li><strong>Information Objectives:</strong> Squadron narrative, reconnaissance information dominance</li>
                                    <li><strong>Sustainment Objectives:</strong> Squadron logistics effectiveness, troop support</li>
                                    <li><strong>Protection Objectives:</strong> Force protection, reconnaissance security</li>
                                </ul>
                            </div>

                            <!-- Squadron Measures of Performance -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Squadron Measures of Performance (MOPs)</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Force Deployment:</strong> Troop deployment rates<br>
                                        <strong>Logistics:</strong> Squadron sustainment flow<br>
                                        <strong>Intelligence:</strong> Squadron ISR effectiveness
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Operations:</strong> Troop mission success<br>
                                        <strong>Communications:</strong> Squadron network availability<br>
                                        <strong>Coordination:</strong> Troop synchronization
                                    </div>
                                </div>
                            </div>

                            <!-- Squadron Assessment Cycle -->
                            <div style="background-color: rgba(139, 92, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 4px 0;">Squadron Assessment Cycle</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Monitor:</strong> Troop operations assessment • <strong>Evaluate:</strong> Squadron progress analysis •
                                    <strong>Recommend:</strong> Troop adjustments • <strong>Decide:</strong> Squadron course corrections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comprehensive Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 20px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 16px; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #6ee7b7;"></i>
                        Squadron Execution Analysis Comprehensive Doctrinal Foundation
                    </h4>

                    <!-- Primary Squadron & Troop Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Primary Squadron & Troop Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Cavalry Squadron:</strong> FM 3-20.96 (Cavalry Squadron), ATP 3-20.97 (Cavalry Troop)<br>
                            <strong>Reconnaissance Operations:</strong> FM 3-98 (Reconnaissance and Security Operations), ATP 3-20.98 (Reconnaissance Platoon)<br>
                            <strong>Combined Arms Integration:</strong> ATP 3-90.5 (Combined Arms Battalion), FM 3-90 (Tactics)
                        </p>
                    </div>

                    <!-- Squadron Tactical Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Squadron Tactical Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Operations:</strong> FM 3-0 (Operations), ADP 3-0 (Operations), FM 5-0 (Operations Process)<br>
                            <strong>Tactics:</strong> FM 3-90 (Tactics), FM 3-98 (Reconnaissance and Security Operations)<br>
                            <strong>Command & Control:</strong> FM 6-0 (Commander and Staff Organization), ADP 6-0 (Mission Command)
                        </p>
                    </div>

                    <!-- Squadron Assessment & Planning -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Squadron Assessment & Planning Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Assessment:</strong> FM 5-0 (Operations Process), ADP 5-0 (The Operations Process)<br>
                            <strong>Risk Management:</strong> FM 5-19 (Composite Risk Management), ATP 5-19 (Risk Management)<br>
                            <strong>Reconnaissance Planning:</strong> FM 3-98 (Reconnaissance and Security Operations), FM 3-20.96 (Cavalry Squadron)
                        </p>
                    </div>

                    <!-- Squadron Sustainment & Communications -->
                    <div style="margin-bottom: 0;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Squadron Sustainment & Communications</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Squadron Sustainment:</strong> FM 4-0 (Sustainment Operations), ATP 4-90 (Brigade Support Battalion)<br>
                            <strong>Squadron Communications:</strong> FM 6-0 (Commander and Staff Organization), ATP 6-02.53 (Tactical Radio)<br>
                            <strong>Squadron Intelligence:</strong> FM 2-0 (Intelligence), ATP 2-19.3 (Intelligence Support to Combined Arms Operations)
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
