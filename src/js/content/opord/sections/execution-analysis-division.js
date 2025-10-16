/**
 * OPORD Execution - Echelon Analysis - Division Level
 * UNCLASSIFIED content for division-level execution analysis frameworks
 * Follows FM 5-0 standards with tactical execution requirements
 * Scaled from Corps template for Division-level complexity
 */

export const divisionExecutionAnalysisModule = {
    id: 'division-execution-analysis',
    title: 'Division Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Division',

    getContent() {
        return `
            <!-- Division Level Execution Analysis - Tactical Command Framework -->
            <div id="division-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-chess-king" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        Division Level Execution Analysis Framework
                    </h3>
                    <p style="color: #c4b5fd; font-size: 14px; margin: 8px 0 0 0;">
                        Tactical Operations - Multi-Brigade Combined Arms Operations
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                    
                    <!-- Card 1: Division Concept of Operations -->
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
                                <i class="fas fa-chess-bishop" style="margin-right: 8px; color: #f97316; font-size: 12px;"></i>
                                Division Concept of Operations
                            </h4>
                            
                            <!-- Multi-Brigade Operations -->
                            <div style="background-color: rgba(249, 115, 22, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f97316; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 6px 0;">Multi-Brigade Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Main Effort:</strong> Brigade combat team decisive action</li>
                                    <li><strong>Supporting Effort:</strong> Brigade shaping operations</li>
                                    <li><strong>Reserve:</strong> Division reserve brigade</li>
                                    <li><strong>Enablers:</strong> Division artillery, aviation, engineers</li>
                                </ul>
                            </div>

                            <!-- Tactical Sequencing -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f97316;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 6px 0;">Tactical Sequencing</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Phase I: Brigade Deployment | Phase II: Brigade Positioning | 
                                    Phase III: Brigade Assault | Phase IV: Brigade Consolidation
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Brigade Task Organization -->
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
                                Brigade Task Organization
                            </h4>
                            
                            <!-- Brigade Assignment -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Brigade Assignment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>1st ABCT:</strong> Eastern sector operations</li>
                                    <li><strong>2nd IBCT:</strong> Central sector operations</li>
                                    <li><strong>3rd SBCT:</strong> Western sector operations</li>
                                    <li><strong>Division Reserve:</strong> Combat aviation brigade</li>
                                </ul>
                            </div>

                            <!-- Division Enablers -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Division Enablers</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Division artillery brigade, sustainment brigade,
                                    engineer brigade, signal battalion, military intelligence battalion
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Division Coordinating Instructions -->
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
                                Division Coordinating Instructions
                            </h4>
                            
                            <!-- Tactical Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Brigade Boundaries:</strong> Tactical sectors</li>
                                    <li><strong>Phase Lines:</strong> Tactical objectives</li>
                                    <li><strong>Coordination Points:</strong> Inter-brigade sync</li>
                                    <li><strong>Fire Support:</strong> Division-level targeting</li>
                                </ul>
                            </div>

                            <!-- Tactical ROE -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Tactical Rules of Engagement</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Division-level ROE, brigade coordination requirements,
                                    engagement criteria, civilian protection protocols
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Division Sustainment & Communications -->
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
                                <i class="fas fa-dolly" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Division Sustainment & Communications
                            </h4>
                            
                            <!-- Division Sustainment -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Division Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Logistics:</strong> Brigade sustainment support</li>
                                    <li><strong>Medical:</strong> Division medical operations</li>
                                    <li><strong>Transportation:</strong> Movement control</li>
                                    <li><strong>Maintenance:</strong> Equipment readiness</li>
                                </ul>
                            </div>

                            <!-- Division Communications -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Division Communications</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Division signal network, brigade connectivity,
                                    corps integration, tactical communications
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 16px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 14px; margin: 0 0 8px 0; display: flex; align-items: center;">
                        <i class="fas fa-book" style="margin-right: 8px; color: #6ee7b7;"></i>
                        Division Execution Analysis Doctrinal Foundation
                    </h4>
                    <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                        <strong>Primary Sources:</strong> ATP 3-91 (Division Operations), FM 3-96 (Brigade Combat Team), 
                        FM 5-0 (Operations Process), FM 3-0 (Operations).
                        <br><br>
                        <strong>Division-Specific References:</strong> ATP 3-90.5 (Combined Arms Battalion), FM 3-21.10 (Infantry Rifle Company), 
                        FM 6-0 (Commander and Staff Organization and Operations), ATP 3-21.20 (Infantry Battalion).
                    </p>
                </div>
            </div>
        `;
    }
};
