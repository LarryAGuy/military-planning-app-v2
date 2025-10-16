/**
 * OPORD Execution - Echelon Analysis - Platoon Level
 * UNCLASSIFIED content for platoon-level execution analysis frameworks
 * Follows FM 5-0 standards with tactical execution requirements
 * Scaled from Company template for Platoon-level complexity
 */

export const platoonExecutionAnalysisModule = {
    id: 'platoon-execution-analysis',
    title: 'Platoon Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Platoon',

    getContent() {
        return `
            <!-- Platoon Level Execution Analysis - Direct Tactical Operations Framework -->
            <div id="platoon-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-users" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        Platoon Level Execution Analysis Framework
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        Direct Tactical Operations - Multi-Squad Coordination
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                    
                    <!-- Card 1: Platoon Concept of Operations -->
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
                                <i class="fas fa-users" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                Platoon Concept of Operations Framework
                            </h4>

                            <!-- Multi-Squad Operations -->
                            <div style="background-color: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Multi-Squad Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Main Effort:</strong> Squad-level tactical operations, tactical focus</li>
                                    <li><strong>Supporting Effort:</strong> Squad enabling operations, tactical support</li>
                                    <li><strong>Reserve:</strong> Platoon reserve squad/team, tactical flexibility</li>
                                    <li><strong>Enablers:</strong> Platoon weapons, engineers, intelligence, sustainment, signal</li>
                                    <li><strong>Company Integration:</strong> Platoon mission within company operations</li>
                                    <li><strong>Tactical Coordination:</strong> Direct fires, squad coordination</li>
                                </ul>
                            </div>

                            <!-- Platoon Tactical Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Platoon Tactical Design</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase I:</strong> Squad Preparation<br>
                                        <strong>Phase II:</strong> Squad Movement<br>
                                        <strong>Phase III:</strong> Squad Contact
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase IV:</strong> Squad Assault<br>
                                        <strong>Phase V:</strong> Squad Consolidation<br>
                                        <strong>Phase VI:</strong> Squad Transition
                                    </div>
                                </div>
                            </div>

                            <!-- Platoon Lines of Effort -->
                            <div style="background-color: rgba(16, 185, 129, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 4px 0;">Platoon Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Tactical Operations • <strong>LOE 2:</strong> Squad Coordination • <strong>LOE 3:</strong> Force Protection • <strong>LOE 4:</strong> Sustainment
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Squad Task Organization -->
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
                                <i class="fas fa-user-tag" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Squad Task Organization
                            </h4>
                            
                            <!-- Squad Assignment -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Squad Assignment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st Squad:</strong> Eastern sector operations</li>
                                    <li><strong>2nd Squad:</strong> Central sector operations</li>
                                    <li><strong>3rd Squad:</strong> Western sector operations</li>
                                    <li><strong>Platoon Reserve:</strong> Weapons squad</li>
                                </ul>
                            </div>

                            <!-- Platoon Enablers -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Platoon Enablers</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Platoon headquarters, weapons squad,
                                    platoon medic, forward observer, radio operator
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Platoon Coordinating Instructions -->
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
                                <i class="fas fa-map-pin" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Platoon Coordinating Instructions
                            </h4>
                            
                            <!-- Tactical Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Squad Boundaries:</strong> Tactical sectors</li>
                                    <li><strong>Phase Lines:</strong> Tactical objectives</li>
                                    <li><strong>Coordination Points:</strong> Inter-squad sync</li>
                                    <li><strong>Fire Support:</strong> Platoon-level targeting</li>
                                </ul>
                            </div>

                            <!-- Tactical ROE -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Rules of Engagement</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Platoon-level ROE, squad coordination requirements,
                                    engagement criteria, civilian protection measures
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Platoon Sustainment & Communications -->
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
                                <i class="fas fa-first-aid" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Platoon Sustainment & Communications
                            </h4>
                            
                            <!-- Platoon Sustainment -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Platoon Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Logistics:</strong> Squad sustainment support</li>
                                    <li><strong>Medical:</strong> Platoon medical operations</li>
                                    <li><strong>Transportation:</strong> Movement coordination</li>
                                    <li><strong>Maintenance:</strong> Equipment readiness</li>
                                </ul>
                            </div>

                            <!-- Platoon Communications -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Platoon Communications</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Platoon signal network, squad connectivity,
                                    company integration, tactical communications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Platoon Analysis Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 5: Platoon Risk Assessment Framework -->
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
                                Platoon Risk Assessment Framework
                            </h4>

                            <!-- Platoon Risk Categories -->
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Platoon Risk Categories</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Tactical Risk:</strong> Squad coordination, multi-squad synchronization</li>
                                    <li><strong>Combat Risk:</strong> Company integration, platoon mission coherence</li>
                                    <li><strong>Maneuver Risk:</strong> Squad force ratios, tactical tempo</li>
                                    <li><strong>Logistics Risk:</strong> Platoon sustainment, squad support</li>
                                    <li><strong>Information Risk:</strong> Platoon networks, squad communications</li>
                                    <li><strong>Terrain Risk:</strong> Tactical mobility, obstacle integration</li>
                                </ul>
                            </div>

                            <!-- Risk Mitigation Strategies -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Platoon Risk Mitigation</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Preventive:</strong> Squad coordination<br>
                                        <strong>Protective:</strong> Platoon force protection<br>
                                        <strong>Responsive:</strong> Platoon reserve employment
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Adaptive:</strong> Flexible squad employment<br>
                                        <strong>Redundant:</strong> Multiple squad capabilities<br>
                                        <strong>Resilient:</strong> Platoon recovery operations
                                    </div>
                                </div>
                            </div>

                            <!-- Platoon Decision Matrix -->
                            <div style="background-color: rgba(220, 38, 38, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Platoon Decision Matrix</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>High Impact/High Probability:</strong> Squad commitment • <strong>High Impact/Low Probability:</strong> Reserve planning •
                                    <strong>Low Impact/High Probability:</strong> Standard procedures • <strong>Low Impact/Low Probability:</strong> Monitor
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Platoon Assessment & Metrics -->
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
                                Platoon Assessment & Metrics Framework
                            </h4>

                            <!-- Platoon Measures of Effectiveness -->
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Platoon Measures of Effectiveness (MOEs)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Tactical Objectives:</strong> Squad mission accomplishment, tactical progress</li>
                                    <li><strong>Combat Objectives:</strong> Company integration, tactical coherence</li>
                                    <li><strong>Maneuver Objectives:</strong> Squad tactical success, tactical tempo</li>
                                    <li><strong>Information Objectives:</strong> Platoon narrative, tactical information dominance</li>
                                    <li><strong>Sustainment Objectives:</strong> Platoon logistics effectiveness, squad support</li>
                                    <li><strong>Protection Objectives:</strong> Force protection, tactical security</li>
                                </ul>
                            </div>

                            <!-- Platoon Measures of Performance -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Platoon Measures of Performance (MOPs)</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Force Deployment:</strong> Squad deployment rates<br>
                                        <strong>Logistics:</strong> Platoon sustainment flow<br>
                                        <strong>Intelligence:</strong> Platoon ISR effectiveness
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Operations:</strong> Squad mission success<br>
                                        <strong>Communications:</strong> Platoon network availability<br>
                                        <strong>Coordination:</strong> Squad synchronization
                                    </div>
                                </div>
                            </div>

                            <!-- Platoon Assessment Cycle -->
                            <div style="background-color: rgba(139, 92, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 4px 0;">Platoon Assessment Cycle</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Monitor:</strong> Squad operations assessment • <strong>Evaluate:</strong> Platoon progress analysis •
                                    <strong>Recommend:</strong> Squad adjustments • <strong>Decide:</strong> Platoon course corrections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 16px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 16px; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #6ee7b7;"></i>
                        Platoon Execution Analysis Comprehensive Doctrinal Foundation
                    </h4>

                    <!-- Primary Platoon & Squad Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Primary Platoon & Squad Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Infantry Platoon:</strong> FM 3-21.11 (Infantry Rifle Platoon and Squad), ATP 3-21.8 (Infantry Platoon and Squad)<br>
                            <strong>Armor Platoon:</strong> ATP 3-20.15 (Tank Platoon), FM 3-90 (Tactics)<br>
                            <strong>Squad Operations:</strong> FM 3-21.11 (Infantry Rifle Platoon and Squad), ATP 3-21.91 (Stryker Infantry Rifle Platoon and Squad)
                        </p>
                    </div>

                    <!-- Platoon Tactical Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Platoon Tactical Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Operations:</strong> FM 3-0 (Operations), ADP 3-0 (Operations), FM 5-0 (Operations Process)<br>
                            <strong>Tactics:</strong> FM 3-90 (Tactics), ATP 3-90.1 (Armor and Mechanized Infantry Company Team)<br>
                            <strong>Command & Control:</strong> FM 6-0 (Commander and Staff Organization), ADP 6-0 (Mission Command)
                        </p>
                    </div>

                    <!-- Platoon Assessment & Planning -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Platoon Assessment & Planning Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Assessment:</strong> FM 5-0 (Operations Process), ADP 5-0 (The Operations Process)<br>
                            <strong>Risk Management:</strong> FM 5-19 (Composite Risk Management), ATP 5-19 (Risk Management)<br>
                            <strong>Tactical Planning:</strong> FM 3-90 (Tactics), FM 3-21.11 (Infantry Rifle Platoon and Squad)
                        </p>
                    </div>

                    <!-- Platoon Sustainment & Communications -->
                    <div style="margin-bottom: 0;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Platoon Sustainment & Communications</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Platoon Sustainment:</strong> FM 4-0 (Sustainment Operations), ATP 4-90 (Brigade Support Battalion)<br>
                            <strong>Platoon Communications:</strong> FM 6-0 (Commander and Staff Organization), ATP 6-02.53 (Tactical Radio)<br>
                            <strong>Platoon Intelligence:</strong> FM 2-0 (Intelligence), ATP 2-19.3 (Intelligence Support to Combined Arms Operations)
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
