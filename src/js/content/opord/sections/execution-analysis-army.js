/**
 * OPORD Execution - Echelon Analysis - Army Level
 * UNCLASSIFIED content for army-level execution analysis frameworks
 * Follows FM 5-0 standards with comprehensive operational execution requirements
 * Cascades from Theater Level strategic guidance to Corps operational execution
 */

export const armyExecutionAnalysisModule = {
    id: 'army-execution-analysis',
    title: 'Army Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Army',

    getContent() {
        return `
            <!-- Army Level Execution Analysis - Strategic-Operational Interface -->
            <div id="army-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-star" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        Army Level Execution Analysis Framework
                    </h3>
                    <p style="color: #c4b5fd; font-size: 14px; margin: 8px 0 0 0;">
                        Strategic-Operational Coordination - Multi-Corps Land Operations
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 1: Army Concept of Operations -->
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
                                <i class="fas fa-chess-queen" style="margin-right: 8px; color: #f97316; font-size: 12px;"></i>
                                Army Concept of Operations Framework
                            </h4>

                            <!-- Multi-Corps Land Operations -->
                            <div style="background-color: rgba(249, 115, 22, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f97316; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 6px 0;">Multi-Corps Land Operations</h5>
                                <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Main Effort:</strong> Corps-level decisive land operations, strategic ground maneuver</li>
                                    <li><strong>Supporting Effort:</strong> Corps-level shaping operations, strategic enabling</li>
                                    <li><strong>Reserve:</strong> Army-level strategic reserve, operational flexibility</li>
                                    <li><strong>Enablers:</strong> Army fires, aviation, sustainment, intelligence, cyber</li>
                                    <li><strong>Theater Integration:</strong> Joint force land component operations</li>
                                    <li><strong>Coalition Coordination:</strong> Multinational land force integration</li>
                                </ul>
                            </div>

                            <!-- Army Campaign Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f97316; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 6px 0;">Army Campaign Design</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Phase I:</strong> Corps Deployment<br>
                                        <strong>Phase II:</strong> Corps Positioning<br>
                                        <strong>Phase III:</strong> Corps Operations
                                    </div>
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Phase IV:</strong> Corps Consolidation<br>
                                        <strong>Phase V:</strong> Corps Transition<br>
                                        <strong>Phase VI:</strong> Corps Redeployment
                                    </div>
                                </div>
                            </div>

                            <!-- Army Lines of Effort -->
                            <div style="background-color: rgba(249, 115, 22, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #f97316;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 11px; margin: 0 0 4px 0;">Army Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Land Operations • <strong>LOE 2:</strong> Force Protection • <strong>LOE 3:</strong> Sustainment • <strong>LOE 4:</strong> Information Operations
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Corps Task Organization -->
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
                                <i class="fas fa-users-cog" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Army Corps Task Organization
                            </h4>

                            <!-- Corps Assignment -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Corps Assignment & Sectors</h5>
                                <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>V Corps:</strong> Northern sector operations, heavy forces emphasis</li>
                                    <li><strong>XVIII Airborne Corps:</strong> Central sector operations, rapid deployment forces</li>
                                    <li><strong>I Corps:</strong> Southern sector operations, combined arms integration</li>
                                    <li><strong>Army Reserve:</strong> Strategic flexibility, operational reserve</li>
                                    <li><strong>Theater Integration:</strong> Joint force land component coordination</li>
                                    <li><strong>Coalition Forces:</strong> Multinational corps integration</li>
                                </ul>
                            </div>

                            <!-- Army Enabling Commands -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Army Enabling Commands</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Army Artillery Command</strong><br>
                                        <strong>Army Aviation Command</strong><br>
                                        <strong>Army Sustainment Command</strong>
                                    </div>
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Army Signal Command</strong><br>
                                        <strong>Army Intelligence Command</strong><br>
                                        <strong>Army Engineer Command</strong>
                                    </div>
                                </div>
                            </div>

                            <!-- Theater Army Integration -->
                            <div style="background-color: rgba(22, 163, 74, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 11px; margin: 0 0 4px 0;">Theater Army Integration</h5>
                                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                                    <strong>JFLCC:</strong> Joint Force Land Component Command • <strong>ASCC:</strong> Army Service Component Command •
                                    <strong>Theater:</strong> Theater strategic guidance • <strong>Coalition:</strong> Multinational land force coordination
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Army Coordinating Instructions -->
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
                                <i class="fas fa-project-diagram" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Army Coordinating Instructions Framework
                            </h4>

                            <!-- Army Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Army Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Corps Boundaries:</strong> Geographic sectors, area of operations assignment</li>
                                    <li><strong>Army Phase Lines:</strong> Operational milestones, campaign progress markers</li>
                                    <li><strong>Coordination Points:</strong> Inter-corps synchronization, boundary coordination</li>
                                    <li><strong>Fire Support Coordination:</strong> Army-level fires, strategic targeting</li>
                                    <li><strong>Air Coordination:</strong> Army aviation, joint air-ground integration</li>
                                    <li><strong>Logistics Coordination:</strong> Army sustainment, distribution priorities</li>
                                </ul>
                            </div>

                            <!-- Army Decision Points -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Army Decision Points & Triggers</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Operational:</strong> Corps commitment criteria<br>
                                        <strong>Strategic:</strong> Reserve employment<br>
                                        <strong>Tactical:</strong> Phase transition
                                    </div>
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Coalition:</strong> Multinational coordination<br>
                                        <strong>Resource:</strong> Army reserve commitment<br>
                                        <strong>Information:</strong> Army messaging
                                    </div>
                                </div>
                            </div>

                            <!-- Army ROE Framework -->
                            <div style="background-color: rgba(234, 179, 8, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 11px; margin: 0 0 4px 0;">Army Rules of Engagement Framework</h5>
                                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                                    <strong>Army ROE:</strong> Corps engagement authority • <strong>Escalation:</strong> Theater command approval •
                                    <strong>Coalition:</strong> Multinational ROE coordination • <strong>Protection:</strong> Force protection measures
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Army Sustainment & Communications -->
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
                                <i class="fas fa-truck-loading" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Army Sustainment & Communications Framework
                            </h4>

                            <!-- Army Sustainment Architecture -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Army Sustainment Architecture</h5>
                                <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Distribution:</strong> Corps sustainment priorities, theater distribution integration</li>
                                    <li><strong>Medical:</strong> Army medical command, corps medical support, strategic evacuation</li>
                                    <li><strong>Transportation:</strong> Strategic mobility, operational movement, corps transportation</li>
                                    <li><strong>Maintenance:</strong> Army maintenance support, corps maintenance integration</li>
                                    <li><strong>Supply:</strong> Army supply operations, corps resupply priorities</li>
                                    <li><strong>Contractor Support:</strong> Army support contracts, operational contract support</li>
                                </ul>
                            </div>

                            <!-- Army Communications Architecture -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Army Communications Architecture</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Signal Networks:</strong> Army signal architecture<br>
                                        <strong>Corps Connectivity:</strong> Multi-corps integration<br>
                                        <strong>Joint Integration:</strong> Theater communications
                                    </div>
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Coalition Networks:</strong> Multinational interoperability<br>
                                        <strong>Cyber Defense:</strong> Army network security<br>
                                        <strong>Information Systems:</strong> Army C4ISR integration
                                    </div>
                                </div>
                            </div>

                            <!-- Army Intelligence Architecture -->
                            <div style="background-color: rgba(6, 182, 212, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 11px; margin: 0 0 4px 0;">Army Intelligence Architecture</h5>
                                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                                    <strong>Army ISR:</strong> Theater intelligence integration • <strong>Corps ISR:</strong> Multi-corps collection management •
                                    <strong>Coalition Intel:</strong> Multinational intelligence sharing • <strong>All-Source:</strong> Army intelligence fusion
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Army Analysis Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 5: Army Risk Assessment Framework -->
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
                                Army Risk Assessment Framework
                            </h4>

                            <!-- Army Risk Categories -->
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Army Risk Categories</h5>
                                <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Operational Risk:</strong> Corps coordination, multi-corps synchronization</li>
                                    <li><strong>Strategic Risk:</strong> Theater integration, campaign coherence</li>
                                    <li><strong>Tactical Risk:</strong> Corps force ratios, operational tempo</li>
                                    <li><strong>Logistics Risk:</strong> Army sustainment, corps support</li>
                                    <li><strong>Information Risk:</strong> Army networks, corps communications</li>
                                    <li><strong>Coalition Risk:</strong> Multinational coordination, interoperability</li>
                                </ul>
                            </div>

                            <!-- Risk Mitigation Strategies -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Army Risk Mitigation</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Preventive:</strong> Corps coordination<br>
                                        <strong>Protective:</strong> Army force protection<br>
                                        <strong>Responsive:</strong> Army reserve employment
                                    </div>
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Adaptive:</strong> Flexible corps employment<br>
                                        <strong>Redundant:</strong> Multiple corps capabilities<br>
                                        <strong>Resilient:</strong> Army recovery operations
                                    </div>
                                </div>
                            </div>

                            <!-- Army Decision Matrix -->
                            <div style="background-color: rgba(220, 38, 38, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 11px; margin: 0 0 4px 0;">Army Decision Matrix</h5>
                                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                                    <strong>High Impact/High Probability:</strong> Corps commitment • <strong>High Impact/Low Probability:</strong> Reserve planning •
                                    <strong>Low Impact/High Probability:</strong> Standard procedures • <strong>Low Impact/Low Probability:</strong> Monitor
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Army Assessment & Metrics -->
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
                                Army Assessment & Metrics Framework
                            </h4>

                            <!-- Army Measures of Effectiveness -->
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Army Measures of Effectiveness (MOEs)</h5>
                                <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Operational Objectives:</strong> Corps mission accomplishment, campaign progress</li>
                                    <li><strong>Strategic Objectives:</strong> Theater integration, strategic coherence</li>
                                    <li><strong>Tactical Objectives:</strong> Corps tactical success, operational tempo</li>
                                    <li><strong>Information Objectives:</strong> Army narrative, information dominance</li>
                                    <li><strong>Sustainment Objectives:</strong> Army logistics effectiveness, corps support</li>
                                    <li><strong>Coalition Objectives:</strong> Multinational integration, interoperability</li>
                                </ul>
                            </div>

                            <!-- Army Measures of Performance -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Army Measures of Performance (MOPs)</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Force Deployment:</strong> Corps deployment rates<br>
                                        <strong>Logistics:</strong> Army sustainment flow<br>
                                        <strong>Intelligence:</strong> Army ISR effectiveness
                                    </div>
                                    <div style="color: #d1d5db; font-size: 11px; line-height: 1.3;">
                                        <strong>Operations:</strong> Corps mission success<br>
                                        <strong>Communications:</strong> Army network availability<br>
                                        <strong>Coalition:</strong> Multinational coordination
                                    </div>
                                </div>
                            </div>

                            <!-- Army Assessment Cycle -->
                            <div style="background-color: rgba(139, 92, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 11px; margin: 0 0 4px 0;">Army Assessment Cycle</h5>
                                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                                    <strong>Monitor:</strong> Corps operations assessment • <strong>Evaluate:</strong> Army progress analysis •
                                    <strong>Recommend:</strong> Corps adjustments • <strong>Decide:</strong> Army course corrections
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comprehensive Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 20px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 16px; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #6ee7b7;"></i>
                        Army Execution Analysis Comprehensive Doctrinal Foundation
                    </h4>

                    <!-- Primary Army & Joint Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Primary Army & Joint Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Theater Army Operations:</strong> FM 3-94 (Theater Army Operations), ATP 3-94 (Theater Army Operations)<br>
                            <strong>Corps Operations:</strong> FM 3-92 (Corps Operations), ATP 3-92 (Corps Operations)<br>
                            <strong>Joint Integration:</strong> JP 3-31 (Joint Land Operations), JP 3-0 (Joint Operations)
                        </p>
                    </div>

                    <!-- Army Operational Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Army Operational Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Operations:</strong> FM 3-0 (Operations), ADP 3-0 (Operations), FM 5-0 (Operations Process)<br>
                            <strong>Division Operations:</strong> ATP 3-91 (Division Operations), FM 3-96 (Brigade Combat Team)<br>
                            <strong>Command & Control:</strong> FM 6-0 (Commander and Staff Organization), ADP 6-0 (Mission Command)
                        </p>
                    </div>

                    <!-- Army Assessment & Planning -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Army Assessment & Planning Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Assessment:</strong> FM 5-0 (Operations Process), ADP 5-0 (The Operations Process)<br>
                            <strong>Risk Management:</strong> FM 5-19 (Composite Risk Management), ATP 5-19 (Risk Management)<br>
                            <strong>Campaign Design:</strong> FM 3-0 (Operations), JP 5-0 (Joint Planning)
                        </p>
                    </div>

                    <!-- Army Sustainment & Communications -->
                    <div style="margin-bottom: 0;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Army Sustainment & Communications</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Army Sustainment:</strong> FM 4-0 (Sustainment Operations), ATP 4-93 (Sustainment Brigade)<br>
                            <strong>Army Communications:</strong> FM 6-0 (Commander and Staff Organization), ATP 6-02.53 (Tactical Radio)<br>
                            <strong>Army Intelligence:</strong> FM 2-0 (Intelligence), ATP 2-33.4 (Intelligence Analysis)
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
