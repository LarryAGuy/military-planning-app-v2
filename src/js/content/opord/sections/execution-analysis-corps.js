/**
 * OPORD Execution - Echelon Analysis - Corps Level
 * UNCLASSIFIED content for corps-level execution analysis frameworks
 * Follows FM 5-0 standards with operational execution requirements
 * Scaled from Army template for Corps-level complexity
 */

export const corpsExecutionAnalysisModule = {
    id: 'corps-execution-analysis',
    title: 'Corps Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Corps',

    getContent() {
        return `
            <!-- Corps Level Execution Analysis - Operational Command Framework -->
            <div id="corps-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-crown" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        Corps Level Execution Analysis Framework
                    </h3>
                    <p style="color: #c4b5fd; font-size: 14px; margin: 8px 0 0 0;">
                        Operational-Level Coordination - Multi-Division Operations
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                    
                    <!-- Card 1: Corps Concept of Operations -->
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
                                <i class="fas fa-chess-rook" style="margin-right: 8px; color: #f97316; font-size: 12px;"></i>
                                Corps Concept of Operations Framework
                            </h4>

                            <!-- Multi-Division Operations -->
                            <div style="background-color: rgba(249, 115, 22, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f97316; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 6px 0;">Multi-Division Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Main Effort:</strong> Division-level decisive action, operational breakthrough</li>
                                    <li><strong>Supporting Effort:</strong> Division-level shaping operations, operational enabling</li>
                                    <li><strong>Reserve:</strong> Corps-level reserve division, operational flexibility</li>
                                    <li><strong>Enablers:</strong> Corps artillery, aviation, engineers, intelligence, sustainment</li>
                                    <li><strong>Army Integration:</strong> Corps mission within Army campaign design</li>
                                    <li><strong>Joint Coordination:</strong> Joint fires, air support, special operations</li>
                                </ul>
                            </div>

                            <!-- Corps Operational Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f97316; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 6px 0;">Corps Operational Design</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase I:</strong> Division Assembly<br>
                                        <strong>Phase II:</strong> Division Positioning<br>
                                        <strong>Phase III:</strong> Division Engagement
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase IV:</strong> Division Exploitation<br>
                                        <strong>Phase V:</strong> Division Consolidation<br>
                                        <strong>Phase VI:</strong> Division Transition
                                    </div>
                                </div>
                            </div>

                            <!-- Corps Lines of Effort -->
                            <div style="background-color: rgba(249, 115, 22, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #f97316;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 4px 0;">Corps Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Close Operations • <strong>LOE 2:</strong> Deep Operations • <strong>LOE 3:</strong> Rear Operations • <strong>LOE 4:</strong> Information Operations
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Division Task Organization -->
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
                                <i class="fas fa-layer-group" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Corps Division Task Organization
                            </h4>

                            <!-- Division Assignment & Axes -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Division Assignment & Axes</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>1st Armored Division:</strong> Northern axis, heavy operations</li>
                                    <li><strong>3rd Infantry Division:</strong> Central axis, combined arms operations</li>
                                    <li><strong>82nd Airborne Division:</strong> Southern axis, rapid deployment</li>
                                    <li><strong>Corps Reserve:</strong> 101st Airborne Division, operational flexibility</li>
                                    <li><strong>Army Integration:</strong> Corps sector within Army area of operations</li>
                                    <li><strong>Joint Coordination:</strong> Joint fires, air support, special operations</li>
                                </ul>
                            </div>

                            <!-- Corps Enabling Commands -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Corps Enabling Commands</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Corps Artillery Brigade</strong><br>
                                        <strong>Combat Aviation Brigade</strong><br>
                                        <strong>Corps Engineer Brigade</strong>
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Corps MI Brigade</strong><br>
                                        <strong>Sustainment Brigade</strong><br>
                                        <strong>Corps Signal Brigade</strong>
                                    </div>
                                </div>
                            </div>

                            <!-- Army Corps Integration -->
                            <div style="background-color: rgba(22, 163, 74, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 4px 0;">Army Corps Integration</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Army:</strong> Corps mission assignment • <strong>Adjacent:</strong> Corps boundary coordination •
                                    <strong>Joint:</strong> Joint fires integration • <strong>Coalition:</strong> Multinational division coordination
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Corps Coordinating Instructions -->
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
                                <i class="fas fa-network-wired" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Corps Coordinating Instructions
                            </h4>
                            
                            <!-- Operational Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Operational Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Division Boundaries:</strong> Sector assignments</li>
                                    <li><strong>Phase Lines:</strong> Operational objectives</li>
                                    <li><strong>Coordination Points:</strong> Inter-division sync</li>
                                    <li><strong>Fire Support:</strong> Corps-level targeting</li>
                                </ul>
                            </div>

                            <!-- Operational ROE -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Operational Rules of Engagement</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Corps-level ROE, division coordination requirements,
                                    target engagement criteria, civilian protection measures
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Corps Sustainment & Communications -->
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
                                <i class="fas fa-shipping-fast" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Corps Sustainment & Communications
                            </h4>
                            
                            <!-- Corps Sustainment -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Corps Sustainment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li><strong>Logistics:</strong> Division sustainment support</li>
                                    <li><strong>Medical:</strong> Corps medical brigade</li>
                                    <li><strong>Transportation:</strong> Movement coordination</li>
                                    <li><strong>Maintenance:</strong> Equipment support</li>
                                </ul>
                            </div>

                            <!-- Corps Communications -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Corps Communications</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Corps signal network, division connectivity,
                                    army integration, joint interoperability
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 16px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 14px; margin: 0 0 8px 0; display: flex; align-items: center;">
                        <i class="fas fa-book" style="margin-right: 8px; color: #6ee7b7;"></i>
                        Corps Execution Analysis Doctrinal Foundation
                    </h4>
                    <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                        <strong>Primary Sources:</strong> FM 3-92 (Corps Operations), ATP 3-92 (Corps Operations), 
                        FM 5-0 (Operations Process), FM 3-0 (Operations).
                        <br><br>
                        <strong>Corps-Specific References:</strong> ATP 3-91 (Division Operations), FM 3-96 (Brigade Combat Team), 
                        FM 6-0 (Commander and Staff Organization and Operations), ATP 3-90.5 (Combined Arms Battalion).
                    </p>
                </div>
            </div>
        `;
    }
};
