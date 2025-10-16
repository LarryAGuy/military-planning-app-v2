/**
 * OPORD Execution - Echelon Analysis - Brigade Level
 * UNCLASSIFIED content for brigade-level execution analysis frameworks
 * Follows FM 5-0 standards with tactical execution requirements
 * Scaled from Division template for Brigade-level complexity
 */

export const brigadeExecutionAnalysisModule = {
    id: 'brigade-execution-analysis',
    title: 'Brigade Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Brigade',

    getContent() {
        return `
            <!-- Brigade Level Execution Analysis - Tactical Operations Framework -->
            <div id="brigade-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-chess-rook" style="margin-right: 8px; color: #3b82f6; font-size: 16px;"></i>
                        Brigade Level Execution Analysis Framework
                    </h3>
                    <p style="color: #93c5fd; font-size: 14px; margin: 8px 0 0 0;">
                        Tactical Operations - Multi-Battalion Combined Arms Operations
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                    
                    <!-- Card 1: Brigade Concept of Operations -->
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
                                <i class="fas fa-chess-rook" style="margin-right: 8px; color: #3b82f6; font-size: 12px;"></i>
                                Brigade Concept of Operations Framework
                            </h4>

                            <!-- Multi-Battalion Combined Arms Operations -->
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Multi-Battalion Combined Arms Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Main Effort:</strong> Battalion-level combined arms operations, operational focus</li>
                                    <li><strong>Supporting Effort:</strong> Battalion enabling operations, operational support</li>
                                    <li><strong>Reserve:</strong> Brigade reserve battalion/company, operational flexibility</li>
                                    <li><strong>Enablers:</strong> Brigade fires, engineers, intelligence, sustainment, signal</li>
                                    <li><strong>Division Integration:</strong> Brigade mission within division operations</li>
                                    <li><strong>Combined Arms Coordination:</strong> Joint fires, aviation integration</li>
                                </ul>
                            </div>

                            <!-- Brigade Operational Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade Operational Design</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase I:</strong> Battalion Preparation<br>
                                        <strong>Phase II:</strong> Battalion Deployment<br>
                                        <strong>Phase III:</strong> Battalion Execution
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase IV:</strong> Battalion Exploitation<br>
                                        <strong>Phase V:</strong> Battalion Consolidation<br>
                                        <strong>Phase VI:</strong> Battalion Transition
                                    </div>
                                </div>
                            </div>

                            <!-- Brigade Lines of Effort -->
                            <div style="background-color: rgba(59, 130, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Brigade Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Combined Arms Operations • <strong>LOE 2:</strong> Fires Integration • <strong>LOE 3:</strong> Force Protection • <strong>LOE 4:</strong> Sustainment
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Battalion Task Organization -->
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
                                <i class="fas fa-users-cog" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Battalion Task Organization
                            </h4>
                            
                            <!-- Battalion Assignment -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Battalion Assignment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st Battalion:</strong> Eastern sector operations</li>
                                    <li><strong>2nd Battalion:</strong> Central sector operations</li>
                                    <li><strong>3rd Battalion:</strong> Western sector operations</li>
                                    <li><strong>Brigade Reserve:</strong> Reconnaissance squadron</li>
                                </ul>
                            </div>

                            <!-- Brigade Enablers -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Brigade Enablers</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Brigade fires battalion, engineer battalion,
                                    support battalion, signal company, military intelligence company
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Brigade Coordinating Instructions -->
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
                                <i class="fas fa-map-signs" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Brigade Coordinating Instructions
                            </h4>
                            
                            <!-- Tactical Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Battalion Boundaries:</strong> Tactical sectors</li>
                                    <li><strong>Phase Lines:</strong> Tactical objectives</li>
                                    <li><strong>Coordination Points:</strong> Inter-battalion sync</li>
                                    <li><strong>Fire Support:</strong> Brigade-level targeting</li>
                                </ul>
                            </div>

                            <!-- Tactical ROE -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Rules of Engagement</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Brigade-level ROE, battalion coordination requirements,
                                    engagement criteria, civilian protection measures
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Brigade Sustainment & Communications -->
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
                                <i class="fas fa-truck" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Brigade Sustainment & Communications
                            </h4>
                            
                            <!-- Brigade Sustainment -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Brigade Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Logistics:</strong> Battalion sustainment support</li>
                                    <li><strong>Medical:</strong> Brigade medical operations</li>
                                    <li><strong>Transportation:</strong> Movement control</li>
                                    <li><strong>Maintenance:</strong> Equipment readiness</li>
                                </ul>
                            </div>

                            <!-- Brigade Communications -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Brigade Communications</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Brigade signal network, battalion connectivity,
                                    division integration, tactical communications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Brigade Analysis Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 5: Brigade Risk Assessment Framework -->
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
                                Brigade Risk Assessment Framework
                            </h4>

                            <!-- Brigade Risk Categories -->
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Brigade Risk Categories</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Tactical Risk:</strong> Battalion coordination, multi-battalion synchronization</li>
                                    <li><strong>Operational Risk:</strong> Division integration, brigade mission coherence</li>
                                    <li><strong>Combat Risk:</strong> Battalion force ratios, tactical tempo</li>
                                    <li><strong>Logistics Risk:</strong> Brigade sustainment, battalion support</li>
                                    <li><strong>Information Risk:</strong> Brigade networks, battalion communications</li>
                                    <li><strong>Terrain Risk:</strong> Tactical mobility, obstacle integration</li>
                                </ul>
                            </div>

                            <!-- Risk Mitigation Strategies -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Brigade Risk Mitigation</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Preventive:</strong> Battalion coordination<br>
                                        <strong>Protective:</strong> Brigade force protection<br>
                                        <strong>Responsive:</strong> Brigade reserve employment
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Adaptive:</strong> Flexible battalion employment<br>
                                        <strong>Redundant:</strong> Multiple battalion capabilities<br>
                                        <strong>Resilient:</strong> Brigade recovery operations
                                    </div>
                                </div>
                            </div>

                            <!-- Brigade Decision Matrix -->
                            <div style="background-color: rgba(220, 38, 38, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Brigade Decision Matrix</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>High Impact/High Probability:</strong> Battalion commitment • <strong>High Impact/Low Probability:</strong> Reserve planning •
                                    <strong>Low Impact/High Probability:</strong> Standard procedures • <strong>Low Impact/Low Probability:</strong> Monitor
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Brigade Assessment & Metrics -->
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
                                Brigade Assessment & Metrics Framework
                            </h4>

                            <!-- Brigade Measures of Effectiveness -->
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade Measures of Effectiveness (MOEs)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Tactical Objectives:</strong> Battalion mission accomplishment, tactical progress</li>
                                    <li><strong>Operational Objectives:</strong> Division integration, operational coherence</li>
                                    <li><strong>Combat Objectives:</strong> Battalion tactical success, operational tempo</li>
                                    <li><strong>Information Objectives:</strong> Brigade narrative, tactical information dominance</li>
                                    <li><strong>Sustainment Objectives:</strong> Brigade logistics effectiveness, battalion support</li>
                                    <li><strong>Protection Objectives:</strong> Force protection, tactical security</li>
                                </ul>
                            </div>

                            <!-- Brigade Measures of Performance -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade Measures of Performance (MOPs)</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Force Deployment:</strong> Battalion deployment rates<br>
                                        <strong>Logistics:</strong> Brigade sustainment flow<br>
                                        <strong>Intelligence:</strong> Brigade ISR effectiveness
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Operations:</strong> Battalion mission success<br>
                                        <strong>Communications:</strong> Brigade network availability<br>
                                        <strong>Coordination:</strong> Battalion synchronization
                                    </div>
                                </div>
                            </div>

                            <!-- Brigade Assessment Cycle -->
                            <div style="background-color: rgba(139, 92, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 4px 0;">Brigade Assessment Cycle</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Monitor:</strong> Battalion operations assessment • <strong>Evaluate:</strong> Brigade progress analysis •
                                    <strong>Recommend:</strong> Battalion adjustments • <strong>Decide:</strong> Brigade course corrections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comprehensive Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 20px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 16px; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #6ee7b7;"></i>
                        Brigade Execution Analysis Comprehensive Doctrinal Foundation
                    </h4>

                    <!-- Primary Brigade & Battalion Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Primary Brigade & Battalion Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Brigade Combat Team:</strong> FM 3-96 (Brigade Combat Team), ATP 3-96 (Brigade Combat Team)<br>
                            <strong>Combined Arms Battalion:</strong> ATP 3-90.5 (Combined Arms Battalion), FM 3-90 (Tactics)<br>
                            <strong>Infantry Operations:</strong> ATP 3-21.20 (Infantry Battalion), FM 3-21.10 (Infantry Rifle Company)
                        </p>
                    </div>

                    <!-- Brigade Tactical Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Brigade Tactical Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Operations:</strong> FM 3-0 (Operations), ADP 3-0 (Operations), FM 5-0 (Operations Process)<br>
                            <strong>Tactics:</strong> FM 3-90 (Tactics), ATP 3-90.1 (Armor and Mechanized Infantry Company Team)<br>
                            <strong>Command & Control:</strong> FM 6-0 (Commander and Staff Organization), ADP 6-0 (Mission Command)
                        </p>
                    </div>

                    <!-- Brigade Assessment & Planning -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Brigade Assessment & Planning Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Assessment:</strong> FM 5-0 (Operations Process), ADP 5-0 (The Operations Process)<br>
                            <strong>Risk Management:</strong> FM 5-19 (Composite Risk Management), ATP 5-19 (Risk Management)<br>
                            <strong>Tactical Planning:</strong> FM 3-90 (Tactics), ATP 3-90.5 (Combined Arms Battalion)
                        </p>
                    </div>

                    <!-- Brigade Sustainment & Communications -->
                    <div style="margin-bottom: 0;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Brigade Sustainment & Communications</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Brigade Sustainment:</strong> FM 4-0 (Sustainment Operations), ATP 4-90 (Brigade Support Battalion)<br>
                            <strong>Brigade Communications:</strong> FM 6-0 (Commander and Staff Organization), ATP 6-02.53 (Tactical Radio)<br>
                            <strong>Brigade Intelligence:</strong> FM 2-0 (Intelligence), ATP 2-19.4 (Brigade Combat Team Intelligence Operations)
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
