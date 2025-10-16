/**
 * OPORD Execution - Echelon Analysis - Battalion Level
 * UNCLASSIFIED content for battalion-level execution analysis frameworks
 * Follows FM 5-0 standards with tactical execution requirements
 * Scaled from Brigade template for Battalion-level complexity
 */

export const battalionExecutionAnalysisModule = {
    id: 'battalion-execution-analysis',
    title: 'Battalion Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Battalion',

    getContent() {
        return `
            <!-- Battalion Level Execution Analysis - Direct Tactical Operations Framework -->
            <div id="battalion-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-flag" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        Battalion Level Execution Analysis Framework
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        Direct Tactical Operations - Multi-Company Combined Arms
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                    
                    <!-- Card 1: Battalion Concept of Operations -->
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
                                <i class="fas fa-flag" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                Battalion Concept of Operations Framework
                            </h4>

                            <!-- Multi-Company Combined Arms Operations -->
                            <div style="background-color: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Multi-Company Combined Arms Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Main Effort:</strong> Company-level combined arms operations, tactical focus</li>
                                    <li><strong>Supporting Effort:</strong> Company enabling operations, tactical support</li>
                                    <li><strong>Reserve:</strong> Battalion reserve company/platoon, tactical flexibility</li>
                                    <li><strong>Enablers:</strong> Battalion fires, engineers, intelligence, sustainment, signal</li>
                                    <li><strong>Brigade Integration:</strong> Battalion mission within brigade operations</li>
                                    <li><strong>Combined Arms Coordination:</strong> Direct fires, indirect fires integration</li>
                                </ul>
                            </div>

                            <!-- Battalion Tactical Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Battalion Tactical Design</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase I:</strong> Company Preparation<br>
                                        <strong>Phase II:</strong> Company Movement<br>
                                        <strong>Phase III:</strong> Company Contact
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase IV:</strong> Company Assault<br>
                                        <strong>Phase V:</strong> Company Consolidation<br>
                                        <strong>Phase VI:</strong> Company Transition
                                    </div>
                                </div>
                            </div>

                            <!-- Battalion Lines of Effort -->
                            <div style="background-color: rgba(16, 185, 129, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 4px 0;">Battalion Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Combined Arms Operations • <strong>LOE 2:</strong> Fires Integration • <strong>LOE 3:</strong> Force Protection • <strong>LOE 4:</strong> Sustainment
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Company Task Organization -->
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
                                <i class="fas fa-user-friends" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Company Task Organization
                            </h4>
                            
                            <!-- Company Assignment -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Company Assignment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Alpha Company:</strong> Eastern sector operations</li>
                                    <li><strong>Bravo Company:</strong> Central sector operations</li>
                                    <li><strong>Charlie Company:</strong> Western sector operations</li>
                                    <li><strong>Battalion Reserve:</strong> Weapons company</li>
                                </ul>
                            </div>

                            <!-- Battalion Enablers -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Battalion Enablers</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Battalion mortar platoon, scout platoon,
                                    headquarters company, medical platoon, signal section
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Battalion Coordinating Instructions -->
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
                                <i class="fas fa-directions" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Battalion Coordinating Instructions
                            </h4>
                            
                            <!-- Tactical Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Company Boundaries:</strong> Tactical sectors</li>
                                    <li><strong>Phase Lines:</strong> Tactical objectives</li>
                                    <li><strong>Coordination Points:</strong> Inter-company sync</li>
                                    <li><strong>Fire Support:</strong> Battalion-level targeting</li>
                                </ul>
                            </div>

                            <!-- Tactical ROE -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Rules of Engagement</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Battalion-level ROE, company coordination requirements,
                                    engagement criteria, civilian protection protocols
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Battalion Sustainment & Communications -->
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
                                <i class="fas fa-boxes" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Battalion Sustainment & Communications
                            </h4>
                            
                            <!-- Battalion Sustainment -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Battalion Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Logistics:</strong> Company sustainment support</li>
                                    <li><strong>Medical:</strong> Battalion medical operations</li>
                                    <li><strong>Transportation:</strong> Movement coordination</li>
                                    <li><strong>Maintenance:</strong> Equipment readiness</li>
                                </ul>
                            </div>

                            <!-- Battalion Communications -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Battalion Communications</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Battalion signal network, company connectivity,
                                    brigade integration, tactical communications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Battalion Analysis Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 5: Battalion Risk Assessment Framework -->
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
                                Battalion Risk Assessment Framework
                            </h4>

                            <!-- Battalion Risk Categories -->
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Battalion Risk Categories</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Tactical Risk:</strong> Company coordination, multi-company synchronization</li>
                                    <li><strong>Combat Risk:</strong> Brigade integration, battalion mission coherence</li>
                                    <li><strong>Maneuver Risk:</strong> Company force ratios, tactical tempo</li>
                                    <li><strong>Logistics Risk:</strong> Battalion sustainment, company support</li>
                                    <li><strong>Information Risk:</strong> Battalion networks, company communications</li>
                                    <li><strong>Terrain Risk:</strong> Tactical mobility, obstacle integration</li>
                                </ul>
                            </div>

                            <!-- Risk Mitigation Strategies -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Battalion Risk Mitigation</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Preventive:</strong> Company coordination<br>
                                        <strong>Protective:</strong> Battalion force protection<br>
                                        <strong>Responsive:</strong> Battalion reserve employment
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Adaptive:</strong> Flexible company employment<br>
                                        <strong>Redundant:</strong> Multiple company capabilities<br>
                                        <strong>Resilient:</strong> Battalion recovery operations
                                    </div>
                                </div>
                            </div>

                            <!-- Battalion Decision Matrix -->
                            <div style="background-color: rgba(220, 38, 38, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Battalion Decision Matrix</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>High Impact/High Probability:</strong> Company commitment • <strong>High Impact/Low Probability:</strong> Reserve planning •
                                    <strong>Low Impact/High Probability:</strong> Standard procedures • <strong>Low Impact/Low Probability:</strong> Monitor
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Battalion Assessment & Metrics -->
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
                                Battalion Assessment & Metrics Framework
                            </h4>

                            <!-- Battalion Measures of Effectiveness -->
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion Measures of Effectiveness (MOEs)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Tactical Objectives:</strong> Company mission accomplishment, tactical progress</li>
                                    <li><strong>Combat Objectives:</strong> Brigade integration, tactical coherence</li>
                                    <li><strong>Maneuver Objectives:</strong> Company tactical success, tactical tempo</li>
                                    <li><strong>Information Objectives:</strong> Battalion narrative, tactical information dominance</li>
                                    <li><strong>Sustainment Objectives:</strong> Battalion logistics effectiveness, company support</li>
                                    <li><strong>Protection Objectives:</strong> Force protection, tactical security</li>
                                </ul>
                            </div>

                            <!-- Battalion Measures of Performance -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion Measures of Performance (MOPs)</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Force Deployment:</strong> Company deployment rates<br>
                                        <strong>Logistics:</strong> Battalion sustainment flow<br>
                                        <strong>Intelligence:</strong> Battalion ISR effectiveness
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Operations:</strong> Company mission success<br>
                                        <strong>Communications:</strong> Battalion network availability<br>
                                        <strong>Coordination:</strong> Company synchronization
                                    </div>
                                </div>
                            </div>

                            <!-- Battalion Assessment Cycle -->
                            <div style="background-color: rgba(139, 92, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 4px 0;">Battalion Assessment Cycle</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Monitor:</strong> Company operations assessment • <strong>Evaluate:</strong> Battalion progress analysis •
                                    <strong>Recommend:</strong> Company adjustments • <strong>Decide:</strong> Battalion course corrections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comprehensive Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 20px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 16px; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #6ee7b7;"></i>
                        Battalion Execution Analysis Comprehensive Doctrinal Foundation
                    </h4>

                    <!-- Primary Battalion & Company Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Primary Battalion & Company Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Combined Arms Battalion:</strong> ATP 3-90.5 (Combined Arms Battalion), FM 3-90 (Tactics)<br>
                            <strong>Infantry Operations:</strong> ATP 3-21.20 (Infantry Battalion), FM 3-21.10 (Infantry Rifle Company)<br>
                            <strong>Armor Operations:</strong> ATP 3-90.1 (Armor and Mechanized Infantry Company Team), FM 3-90.61 (Brigade Special Troops Battalion)
                        </p>
                    </div>

                    <!-- Battalion Tactical Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Battalion Tactical Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Operations:</strong> FM 3-0 (Operations), ADP 3-0 (Operations), FM 5-0 (Operations Process)<br>
                            <strong>Tactics:</strong> FM 3-90 (Tactics), ATP 3-90.1 (Armor and Mechanized Infantry Company Team)<br>
                            <strong>Command & Control:</strong> FM 6-0 (Commander and Staff Organization), ADP 6-0 (Mission Command)
                        </p>
                    </div>

                    <!-- Battalion Assessment & Planning -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Battalion Assessment & Planning Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Assessment:</strong> FM 5-0 (Operations Process), ADP 5-0 (The Operations Process)<br>
                            <strong>Risk Management:</strong> FM 5-19 (Composite Risk Management), ATP 5-19 (Risk Management)<br>
                            <strong>Tactical Planning:</strong> FM 3-90 (Tactics), ATP 3-90.5 (Combined Arms Battalion)
                        </p>
                    </div>

                    <!-- Battalion Sustainment & Communications -->
                    <div style="margin-bottom: 0;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Battalion Sustainment & Communications</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Battalion Sustainment:</strong> FM 4-0 (Sustainment Operations), ATP 4-90 (Brigade Support Battalion)<br>
                            <strong>Battalion Communications:</strong> FM 6-0 (Commander and Staff Organization), ATP 6-02.53 (Tactical Radio)<br>
                            <strong>Battalion Intelligence:</strong> FM 2-0 (Intelligence), ATP 2-19.3 (Intelligence Support to Combined Arms Operations)
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
