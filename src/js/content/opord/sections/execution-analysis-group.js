/**
 * OPORD Execution - Echelon Analysis - Group Level
 * UNCLASSIFIED content for group-level execution analysis frameworks
 * Follows FM 5-0 standards with specialized execution requirements
 * Scaled from Regiment template for Group-level complexity (Aviation/Special Operations)
 */

export const groupExecutionAnalysisModule = {
    id: 'group-execution-analysis',
    title: 'Group Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Group',

    getContent() {
        return `
            <!-- Group Level Execution Analysis - Specialized Operations Framework -->
            <div id="group-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-layer-group" style="margin-right: 8px; color: #3b82f6; font-size: 16px;"></i>
                        Group Level Execution Analysis Framework
                    </h3>
                    <p style="color: #93c5fd; font-size: 14px; margin: 8px 0 0 0;">
                        Specialized Operations - Multi-Battalion Aviation/Special Operations
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                    
                    <!-- Card 1: Group Concept of Operations -->
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
                                <i class="fas fa-layer-group" style="margin-right: 8px; color: #3b82f6; font-size: 12px;"></i>
                                Group Concept of Operations Framework
                            </h4>

                            <!-- Multi-Battalion Specialized Operations -->
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Multi-Battalion Specialized Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Main Effort:</strong> Battalion-level aviation/special operations, operational focus</li>
                                    <li><strong>Supporting Effort:</strong> Battalion enabling operations, operational support</li>
                                    <li><strong>Reserve:</strong> Group reserve battalion/company, operational flexibility</li>
                                    <li><strong>Enablers:</strong> Group fires, engineers, intelligence, sustainment, signal</li>
                                    <li><strong>Division Integration:</strong> Group mission within division operations</li>
                                    <li><strong>Specialized Coordination:</strong> Joint operations, aviation integration</li>
                                </ul>
                            </div>

                            <!-- Group Operational Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Group Operational Design</h5>
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

                            <!-- Group Lines of Effort -->
                            <div style="background-color: rgba(59, 130, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Group Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Specialized Operations • <strong>LOE 2:</strong> Aviation Integration • <strong>LOE 3:</strong> Force Protection • <strong>LOE 4:</strong> Sustainment
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
                                <i class="fas fa-parachute-box" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Battalion Task Organization
                            </h4>
                            
                            <!-- Battalion Assignment -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Battalion Assignment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st Battalion:</strong> Primary mission execution</li>
                                    <li><strong>2nd Battalion:</strong> Supporting mission operations</li>
                                    <li><strong>3rd Battalion:</strong> Reserve/contingency operations</li>
                                    <li><strong>Group Reserve:</strong> Headquarters and support battalion</li>
                                </ul>
                            </div>

                            <!-- Group Enablers -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Group Enablers</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Group support battalion, maintenance company,
                                    intelligence company, signal company, medical detachment
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Group Coordinating Instructions -->
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
                                <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Group Coordinating Instructions
                            </h4>
                            
                            <!-- Specialized Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Specialized Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Battalion Areas:</strong> Mission-specific zones</li>
                                    <li><strong>Phase Lines:</strong> Mission milestones</li>
                                    <li><strong>Coordination Points:</strong> Inter-battalion sync</li>
                                    <li><strong>Support Coordination:</strong> Group-level enablers</li>
                                </ul>
                            </div>

                            <!-- Specialized ROE -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Specialized Rules of Engagement</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Group-level ROE, battalion coordination requirements,
                                    mission-specific engagement criteria, specialized protocols
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Group Sustainment & Communications -->
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
                                <i class="fas fa-wrench" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Group Sustainment & Communications
                            </h4>
                            
                            <!-- Group Sustainment -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Group Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Logistics:</strong> Battalion mission support</li>
                                    <li><strong>Medical:</strong> Group medical operations</li>
                                    <li><strong>Transportation:</strong> Specialized mobility support</li>
                                    <li><strong>Maintenance:</strong> Equipment/aircraft maintenance</li>
                                </ul>
                            </div>

                            <!-- Group Communications -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Group Communications</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Group signal network, battalion connectivity,
                                    division integration, specialized communications systems
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Group Analysis Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 5: Group Risk Assessment Framework -->
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
                                Group Risk Assessment Framework
                            </h4>

                            <!-- Group Risk Categories -->
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Group Risk Categories</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Operational Risk:</strong> Battalion coordination, multi-battalion synchronization</li>
                                    <li><strong>Specialized Risk:</strong> Division integration, group mission coherence</li>
                                    <li><strong>Aviation Risk:</strong> Battalion force ratios, operational tempo</li>
                                    <li><strong>Logistics Risk:</strong> Group sustainment, battalion support</li>
                                    <li><strong>Information Risk:</strong> Group networks, battalion communications</li>
                                    <li><strong>Terrain Risk:</strong> Specialized mobility, obstacle integration</li>
                                </ul>
                            </div>

                            <!-- Risk Mitigation Strategies -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Group Risk Mitigation</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Preventive:</strong> Battalion coordination<br>
                                        <strong>Protective:</strong> Group force protection<br>
                                        <strong>Responsive:</strong> Group reserve employment
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Adaptive:</strong> Flexible battalion employment<br>
                                        <strong>Redundant:</strong> Multiple battalion capabilities<br>
                                        <strong>Resilient:</strong> Group recovery operations
                                    </div>
                                </div>
                            </div>

                            <!-- Group Decision Matrix -->
                            <div style="background-color: rgba(220, 38, 38, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Group Decision Matrix</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>High Impact/High Probability:</strong> Battalion commitment • <strong>High Impact/Low Probability:</strong> Reserve planning •
                                    <strong>Low Impact/High Probability:</strong> Standard procedures • <strong>Low Impact/Low Probability:</strong> Monitor
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Group Assessment & Metrics -->
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
                                Group Assessment & Metrics Framework
                            </h4>

                            <!-- Group Measures of Effectiveness -->
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Group Measures of Effectiveness (MOEs)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Operational Objectives:</strong> Battalion mission accomplishment, operational progress</li>
                                    <li><strong>Specialized Objectives:</strong> Division integration, specialized coherence</li>
                                    <li><strong>Aviation Objectives:</strong> Battalion tactical success, operational tempo</li>
                                    <li><strong>Information Objectives:</strong> Group narrative, operational information dominance</li>
                                    <li><strong>Sustainment Objectives:</strong> Group logistics effectiveness, battalion support</li>
                                    <li><strong>Protection Objectives:</strong> Force protection, operational security</li>
                                </ul>
                            </div>

                            <!-- Group Measures of Performance -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Group Measures of Performance (MOPs)</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Force Deployment:</strong> Battalion deployment rates<br>
                                        <strong>Logistics:</strong> Group sustainment flow<br>
                                        <strong>Intelligence:</strong> Group ISR effectiveness
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Operations:</strong> Battalion mission success<br>
                                        <strong>Communications:</strong> Group network availability<br>
                                        <strong>Coordination:</strong> Battalion synchronization
                                    </div>
                                </div>
                            </div>

                            <!-- Group Assessment Cycle -->
                            <div style="background-color: rgba(139, 92, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 4px 0;">Group Assessment Cycle</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Monitor:</strong> Battalion operations assessment • <strong>Evaluate:</strong> Group progress analysis •
                                    <strong>Recommend:</strong> Battalion adjustments • <strong>Decide:</strong> Group course corrections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comprehensive Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 20px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 16px; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #6ee7b7;"></i>
                        Group Execution Analysis Comprehensive Doctrinal Foundation
                    </h4>

                    <!-- Primary Group & Battalion Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Primary Group & Battalion Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Army Aviation:</strong> FM 3-04 (Army Aviation), ATP 3-04.1 (Aviation Tactical Employment)<br>
                            <strong>Special Operations:</strong> FM 3-05 (Army Special Operations), ATP 3-05.1 (Unconventional Warfare)<br>
                            <strong>Combined Arms Battalion:</strong> ATP 3-90.5 (Combined Arms Battalion), FM 3-90 (Tactics)
                        </p>
                    </div>

                    <!-- Group Operational Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Group Operational Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Operations:</strong> FM 3-0 (Operations), ADP 3-0 (Operations), FM 5-0 (Operations Process)<br>
                            <strong>Aviation Operations:</strong> ATP 3-04.7 (Army Aviation Maintenance), ATP 3-04.17 (Airfield Operations)<br>
                            <strong>Command & Control:</strong> FM 6-0 (Commander and Staff Organization), ADP 6-0 (Mission Command)
                        </p>
                    </div>

                    <!-- Group Assessment & Planning -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Group Assessment & Planning Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Assessment:</strong> FM 5-0 (Operations Process), ADP 5-0 (The Operations Process)<br>
                            <strong>Risk Management:</strong> FM 5-19 (Composite Risk Management), ATP 5-19 (Risk Management)<br>
                            <strong>Operational Planning:</strong> FM 3-90 (Tactics), ATP 3-04.1 (Aviation Tactical Employment)
                        </p>
                    </div>

                    <!-- Group Sustainment & Communications -->
                    <div style="margin-bottom: 0;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Group Sustainment & Communications</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Group Sustainment:</strong> FM 4-0 (Sustainment Operations), ATP 4-90 (Brigade Support Battalion)<br>
                            <strong>Group Communications:</strong> FM 6-0 (Commander and Staff Organization), ATP 6-02.53 (Tactical Radio)<br>
                            <strong>Group Intelligence:</strong> FM 2-0 (Intelligence), ATP 2-19.4 (Brigade Combat Team Intelligence Operations)
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
