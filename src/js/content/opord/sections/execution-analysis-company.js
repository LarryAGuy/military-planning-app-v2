/**
 * OPORD Execution - Echelon Analysis - Company Level
 * UNCLASSIFIED content for company-level execution analysis frameworks
 * Follows FM 5-0 standards with tactical execution requirements
 * Scaled from Battalion template for Company-level complexity
 */

export const companyExecutionAnalysisModule = {
    id: 'company-execution-analysis',
    title: 'Company Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Company',

    getContent() {
        return `
            <!-- Company Level Execution Analysis - Direct Tactical Operations Framework -->
            <div id="company-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-user-friends" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        Company Level Execution Analysis Framework
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        Direct Tactical Operations - Multi-Platoon Coordination
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                    
                    <!-- Card 1: Company Concept of Operations -->
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
                                <i class="fas fa-user-friends" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                Company Concept of Operations Framework
                            </h4>

                            <!-- Multi-Platoon Operations -->
                            <div style="background-color: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Multi-Platoon Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Main Effort:</strong> Platoon-level tactical operations, tactical focus</li>
                                    <li><strong>Supporting Effort:</strong> Platoon enabling operations, tactical support</li>
                                    <li><strong>Reserve:</strong> Company reserve platoon/squad, tactical flexibility</li>
                                    <li><strong>Enablers:</strong> Company weapons, engineers, intelligence, sustainment, signal</li>
                                    <li><strong>Battalion Integration:</strong> Company mission within battalion operations</li>
                                    <li><strong>Tactical Coordination:</strong> Direct fires, indirect fires integration</li>
                                </ul>
                            </div>

                            <!-- Company Tactical Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Company Tactical Design</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase I:</strong> Platoon Preparation<br>
                                        <strong>Phase II:</strong> Platoon Movement<br>
                                        <strong>Phase III:</strong> Platoon Contact
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase IV:</strong> Platoon Assault<br>
                                        <strong>Phase V:</strong> Platoon Consolidation<br>
                                        <strong>Phase VI:</strong> Platoon Transition
                                    </div>
                                </div>
                            </div>

                            <!-- Company Lines of Effort -->
                            <div style="background-color: rgba(16, 185, 129, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 4px 0;">Company Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Tactical Operations • <strong>LOE 2:</strong> Fires Integration • <strong>LOE 3:</strong> Force Protection • <strong>LOE 4:</strong> Sustainment
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Platoon Task Organization -->
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
                                <i class="fas fa-users" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Platoon Task Organization
                            </h4>
                            
                            <!-- Platoon Assignment -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Platoon Assignment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st Platoon:</strong> Eastern sector operations</li>
                                    <li><strong>2nd Platoon:</strong> Central sector operations</li>
                                    <li><strong>3rd Platoon:</strong> Western sector operations</li>
                                    <li><strong>Company Reserve:</strong> Weapons platoon</li>
                                </ul>
                            </div>

                            <!-- Company Enablers -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Company Enablers</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Company headquarters, weapons platoon,
                                    company medic, forward observer, signal team
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Company Coordinating Instructions -->
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
                                <i class="fas fa-map-marked" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Company Coordinating Instructions
                            </h4>
                            
                            <!-- Tactical Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Platoon Boundaries:</strong> Tactical sectors</li>
                                    <li><strong>Phase Lines:</strong> Tactical objectives</li>
                                    <li><strong>Coordination Points:</strong> Inter-platoon sync</li>
                                    <li><strong>Fire Support:</strong> Company-level targeting</li>
                                </ul>
                            </div>

                            <!-- Tactical ROE -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Rules of Engagement</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Company-level ROE, platoon coordination requirements,
                                    engagement criteria, civilian protection measures
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Company Sustainment & Communications -->
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
                                <i class="fas fa-box" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Company Sustainment & Communications
                            </h4>
                            
                            <!-- Company Sustainment -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Company Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Logistics:</strong> Platoon sustainment support</li>
                                    <li><strong>Medical:</strong> Company medical operations</li>
                                    <li><strong>Transportation:</strong> Movement coordination</li>
                                    <li><strong>Maintenance:</strong> Equipment readiness</li>
                                </ul>
                            </div>

                            <!-- Company Communications -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Company Communications</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Company signal network, platoon connectivity,
                                    battalion integration, tactical communications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Company Analysis Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 5: Company Risk Assessment Framework -->
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
                                Company Risk Assessment Framework
                            </h4>

                            <!-- Company Risk Categories -->
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Company Risk Categories</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Tactical Risk:</strong> Platoon coordination, multi-platoon synchronization</li>
                                    <li><strong>Combat Risk:</strong> Battalion integration, company mission coherence</li>
                                    <li><strong>Maneuver Risk:</strong> Platoon force ratios, tactical tempo</li>
                                    <li><strong>Logistics Risk:</strong> Company sustainment, platoon support</li>
                                    <li><strong>Information Risk:</strong> Company networks, platoon communications</li>
                                    <li><strong>Terrain Risk:</strong> Tactical mobility, obstacle integration</li>
                                </ul>
                            </div>

                            <!-- Risk Mitigation Strategies -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Company Risk Mitigation</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Preventive:</strong> Platoon coordination<br>
                                        <strong>Protective:</strong> Company force protection<br>
                                        <strong>Responsive:</strong> Company reserve employment
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Adaptive:</strong> Flexible platoon employment<br>
                                        <strong>Redundant:</strong> Multiple platoon capabilities<br>
                                        <strong>Resilient:</strong> Company recovery operations
                                    </div>
                                </div>
                            </div>

                            <!-- Company Decision Matrix -->
                            <div style="background-color: rgba(220, 38, 38, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Company Decision Matrix</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>High Impact/High Probability:</strong> Platoon commitment • <strong>High Impact/Low Probability:</strong> Reserve planning •
                                    <strong>Low Impact/High Probability:</strong> Standard procedures • <strong>Low Impact/Low Probability:</strong> Monitor
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Company Assessment & Metrics -->
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
                                Company Assessment & Metrics Framework
                            </h4>

                            <!-- Company Measures of Effectiveness -->
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Company Measures of Effectiveness (MOEs)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Tactical Objectives:</strong> Platoon mission accomplishment, tactical progress</li>
                                    <li><strong>Combat Objectives:</strong> Battalion integration, tactical coherence</li>
                                    <li><strong>Maneuver Objectives:</strong> Platoon tactical success, tactical tempo</li>
                                    <li><strong>Information Objectives:</strong> Company narrative, tactical information dominance</li>
                                    <li><strong>Sustainment Objectives:</strong> Company logistics effectiveness, platoon support</li>
                                    <li><strong>Protection Objectives:</strong> Force protection, tactical security</li>
                                </ul>
                            </div>

                            <!-- Company Measures of Performance -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Company Measures of Performance (MOPs)</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Force Deployment:</strong> Platoon deployment rates<br>
                                        <strong>Logistics:</strong> Company sustainment flow<br>
                                        <strong>Intelligence:</strong> Company ISR effectiveness
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Operations:</strong> Platoon mission success<br>
                                        <strong>Communications:</strong> Company network availability<br>
                                        <strong>Coordination:</strong> Platoon synchronization
                                    </div>
                                </div>
                            </div>

                            <!-- Company Assessment Cycle -->
                            <div style="background-color: rgba(139, 92, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 4px 0;">Company Assessment Cycle</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Monitor:</strong> Platoon operations assessment • <strong>Evaluate:</strong> Company progress analysis •
                                    <strong>Recommend:</strong> Platoon adjustments • <strong>Decide:</strong> Company course corrections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comprehensive Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 20px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 16px; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #6ee7b7;"></i>
                        Company Execution Analysis Comprehensive Doctrinal Foundation
                    </h4>

                    <!-- Primary Company & Platoon Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Primary Company & Platoon Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Infantry Company:</strong> FM 3-21.10 (Infantry Rifle Company), ATP 3-21.8 (Infantry Platoon and Squad)<br>
                            <strong>Armor Company:</strong> ATP 3-90.1 (Armor and Mechanized Infantry Company Team), FM 3-90 (Tactics)<br>
                            <strong>Platoon Operations:</strong> FM 3-21.11 (Infantry Rifle Platoon and Squad), ATP 3-21.91 (Stryker Infantry Rifle Platoon and Squad)
                        </p>
                    </div>

                    <!-- Company Tactical Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Company Tactical Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Operations:</strong> FM 3-0 (Operations), ADP 3-0 (Operations), FM 5-0 (Operations Process)<br>
                            <strong>Tactics:</strong> FM 3-90 (Tactics), ATP 3-90.1 (Armor and Mechanized Infantry Company Team)<br>
                            <strong>Command & Control:</strong> FM 6-0 (Commander and Staff Organization), ADP 6-0 (Mission Command)
                        </p>
                    </div>

                    <!-- Company Assessment & Planning -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Company Assessment & Planning Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Assessment:</strong> FM 5-0 (Operations Process), ADP 5-0 (The Operations Process)<br>
                            <strong>Risk Management:</strong> FM 5-19 (Composite Risk Management), ATP 5-19 (Risk Management)<br>
                            <strong>Tactical Planning:</strong> FM 3-90 (Tactics), FM 3-21.10 (Infantry Rifle Company)
                        </p>
                    </div>

                    <!-- Company Sustainment & Communications -->
                    <div style="margin-bottom: 0;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Company Sustainment & Communications</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Company Sustainment:</strong> FM 4-0 (Sustainment Operations), ATP 4-90 (Brigade Support Battalion)<br>
                            <strong>Company Communications:</strong> FM 6-0 (Commander and Staff Organization), ATP 6-02.53 (Tactical Radio)<br>
                            <strong>Company Intelligence:</strong> FM 2-0 (Intelligence), ATP 2-19.3 (Intelligence Support to Combined Arms Operations)
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
