/**
 * OPORD Execution - Echelon Analysis - Regiment Level
 * UNCLASSIFIED content for regiment-level execution analysis frameworks
 * Follows FM 5-0 standards with specialized execution requirements
 * Scaled from Division template for Regiment-level complexity
 */

export const regimentExecutionAnalysisModule = {
    id: 'regiment-execution-analysis',
    title: 'Regiment Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Regiment',

    getContent() {
        return `
            <!-- Regiment Level Execution Analysis - Specialized Operations Framework -->
            <div id="regiment-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-medal" style="margin-right: 8px; color: #3b82f6; font-size: 16px;"></i>
                        Regiment Level Execution Analysis Framework
                    </h3>
                    <p style="color: #93c5fd; font-size: 14px; margin: 8px 0 0 0;">
                        Specialized Operations - Multi-Battalion Coordination
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                    
                    <!-- Card 1: Regiment Concept of Operations -->
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
                                <i class="fas fa-medal" style="margin-right: 8px; color: #3b82f6; font-size: 12px;"></i>
                                Regiment Concept of Operations Framework
                            </h4>

                            <!-- Multi-Battalion Specialized Operations -->
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Multi-Battalion Specialized Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Main Effort:</strong> Battalion-level specialized operations, operational focus</li>
                                    <li><strong>Supporting Effort:</strong> Battalion enabling operations, operational support</li>
                                    <li><strong>Reserve:</strong> Regiment reserve battalion/company, operational flexibility</li>
                                    <li><strong>Enablers:</strong> Regiment fires, engineers, intelligence, sustainment, signal</li>
                                    <li><strong>Division Integration:</strong> Regiment mission within division operations</li>
                                    <li><strong>Specialized Coordination:</strong> Joint fires, special operations integration</li>
                                </ul>
                            </div>

                            <!-- Regiment Operational Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Regiment Operational Design</h5>
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

                            <!-- Regiment Lines of Effort -->
                            <div style="background-color: rgba(59, 130, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Regiment Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Specialized Operations • <strong>LOE 2:</strong> Fires Integration • <strong>LOE 3:</strong> Force Protection • <strong>LOE 4:</strong> Sustainment
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
                                <i class="fas fa-flag" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Battalion Task Organization
                            </h4>
                            
                            <!-- Battalion Assignment -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Battalion Assignment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st Battalion:</strong> Primary operations sector</li>
                                    <li><strong>2nd Battalion:</strong> Supporting operations sector</li>
                                    <li><strong>3rd Battalion:</strong> Reserve/exploitation sector</li>
                                    <li><strong>Regiment Reserve:</strong> Headquarters battalion</li>
                                </ul>
                            </div>

                            <!-- Regiment Enablers -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Regiment Enablers</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Regiment fires battalion, support battalion,
                                    reconnaissance squadron, signal company, medical company
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Regiment Coordinating Instructions -->
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
                                <i class="fas fa-compass" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Regiment Coordinating Instructions
                            </h4>
                            
                            <!-- Specialized Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Specialized Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Battalion Boundaries:</strong> Specialized sectors</li>
                                    <li><strong>Phase Lines:</strong> Specialized objectives</li>
                                    <li><strong>Coordination Points:</strong> Inter-battalion sync</li>
                                    <li><strong>Fire Support:</strong> Regiment-level targeting</li>
                                </ul>
                            </div>

                            <!-- Specialized ROE -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Specialized Rules of Engagement</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Regiment-level ROE, battalion coordination requirements,
                                    specialized engagement criteria, mission-specific protocols
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Regiment Sustainment & Communications -->
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
                                <i class="fas fa-tools" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Regiment Sustainment & Communications
                            </h4>
                            
                            <!-- Regiment Sustainment -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Regiment Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Logistics:</strong> Battalion sustainment support</li>
                                    <li><strong>Medical:</strong> Regiment medical operations</li>
                                    <li><strong>Transportation:</strong> Specialized mobility</li>
                                    <li><strong>Maintenance:</strong> Equipment support</li>
                                </ul>
                            </div>

                            <!-- Regiment Communications -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Regiment Communications</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Regiment signal network, battalion connectivity,
                                    division integration, specialized communications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Regiment Analysis Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 5: Regiment Risk Assessment Framework -->
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
                                Regiment Risk Assessment Framework
                            </h4>

                            <!-- Regiment Risk Categories -->
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Regiment Risk Categories</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Operational Risk:</strong> Battalion coordination, multi-battalion synchronization</li>
                                    <li><strong>Specialized Risk:</strong> Division integration, regiment mission coherence</li>
                                    <li><strong>Tactical Risk:</strong> Battalion force ratios, operational tempo</li>
                                    <li><strong>Logistics Risk:</strong> Regiment sustainment, battalion support</li>
                                    <li><strong>Information Risk:</strong> Regiment networks, battalion communications</li>
                                    <li><strong>Terrain Risk:</strong> Specialized mobility, obstacle integration</li>
                                </ul>
                            </div>

                            <!-- Risk Mitigation Strategies -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Regiment Risk Mitigation</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Preventive:</strong> Battalion coordination<br>
                                        <strong>Protective:</strong> Regiment force protection<br>
                                        <strong>Responsive:</strong> Regiment reserve employment
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Adaptive:</strong> Flexible battalion employment<br>
                                        <strong>Redundant:</strong> Multiple battalion capabilities<br>
                                        <strong>Resilient:</strong> Regiment recovery operations
                                    </div>
                                </div>
                            </div>

                            <!-- Regiment Decision Matrix -->
                            <div style="background-color: rgba(220, 38, 38, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Regiment Decision Matrix</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>High Impact/High Probability:</strong> Battalion commitment • <strong>High Impact/Low Probability:</strong> Reserve planning •
                                    <strong>Low Impact/High Probability:</strong> Standard procedures • <strong>Low Impact/Low Probability:</strong> Monitor
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Regiment Assessment & Metrics -->
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
                                Regiment Assessment & Metrics Framework
                            </h4>

                            <!-- Regiment Measures of Effectiveness -->
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Regiment Measures of Effectiveness (MOEs)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Operational Objectives:</strong> Battalion mission accomplishment, operational progress</li>
                                    <li><strong>Specialized Objectives:</strong> Division integration, specialized coherence</li>
                                    <li><strong>Tactical Objectives:</strong> Battalion tactical success, operational tempo</li>
                                    <li><strong>Information Objectives:</strong> Regiment narrative, operational information dominance</li>
                                    <li><strong>Sustainment Objectives:</strong> Regiment logistics effectiveness, battalion support</li>
                                    <li><strong>Protection Objectives:</strong> Force protection, operational security</li>
                                </ul>
                            </div>

                            <!-- Regiment Measures of Performance -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Regiment Measures of Performance (MOPs)</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Force Deployment:</strong> Battalion deployment rates<br>
                                        <strong>Logistics:</strong> Regiment sustainment flow<br>
                                        <strong>Intelligence:</strong> Regiment ISR effectiveness
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Operations:</strong> Battalion mission success<br>
                                        <strong>Communications:</strong> Regiment network availability<br>
                                        <strong>Coordination:</strong> Battalion synchronization
                                    </div>
                                </div>
                            </div>

                            <!-- Regiment Assessment Cycle -->
                            <div style="background-color: rgba(139, 92, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 4px 0;">Regiment Assessment Cycle</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Monitor:</strong> Battalion operations assessment • <strong>Evaluate:</strong> Regiment progress analysis •
                                    <strong>Recommend:</strong> Battalion adjustments • <strong>Decide:</strong> Regiment course corrections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comprehensive Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 20px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 16px; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #6ee7b7;"></i>
                        Regiment Execution Analysis Comprehensive Doctrinal Foundation
                    </h4>

                    <!-- Primary Regiment & Battalion Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Primary Regiment & Battalion Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Combined Arms Battalion:</strong> ATP 3-90.5 (Combined Arms Battalion), FM 3-90 (Tactics)<br>
                            <strong>Infantry Operations:</strong> ATP 3-21.20 (Infantry Battalion), FM 3-21.10 (Infantry Rifle Company)<br>
                            <strong>Cavalry Operations:</strong> FM 3-20.96 (Cavalry Squadron), ATP 3-20.97 (Cavalry Troop)
                        </p>
                    </div>

                    <!-- Regiment Operational Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Regiment Operational Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Operations:</strong> FM 3-0 (Operations), ADP 3-0 (Operations), FM 5-0 (Operations Process)<br>
                            <strong>Tactics:</strong> FM 3-90 (Tactics), ATP 3-90.1 (Armor and Mechanized Infantry Company Team)<br>
                            <strong>Command & Control:</strong> FM 6-0 (Commander and Staff Organization), ADP 6-0 (Mission Command)
                        </p>
                    </div>

                    <!-- Regiment Assessment & Planning -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Regiment Assessment & Planning Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Assessment:</strong> FM 5-0 (Operations Process), ADP 5-0 (The Operations Process)<br>
                            <strong>Risk Management:</strong> FM 5-19 (Composite Risk Management), ATP 5-19 (Risk Management)<br>
                            <strong>Operational Planning:</strong> FM 3-90 (Tactics), ATP 3-90.5 (Combined Arms Battalion)
                        </p>
                    </div>

                    <!-- Regiment Sustainment & Communications -->
                    <div style="margin-bottom: 0;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Regiment Sustainment & Communications</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Regiment Sustainment:</strong> FM 4-0 (Sustainment Operations), ATP 4-90 (Brigade Support Battalion)<br>
                            <strong>Regiment Communications:</strong> FM 6-0 (Commander and Staff Organization), ATP 6-02.53 (Tactical Radio)<br>
                            <strong>Regiment Intelligence:</strong> FM 2-0 (Intelligence), ATP 2-19.4 (Brigade Combat Team Intelligence Operations)
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
