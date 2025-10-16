/**
 * JPP Step 1: Planning Initiation - Echelon Analysis - Platoon Level
 * UNCLASSIFIED content for platoon-level planning initiation analysis
 * Follows JP 5-0 standards with small unit tactical analysis considerations
 */

export function getPlatoonPlanningInitiationAnalysis() {
    return `
        <div style="padding: 20px;">
            <!-- Platoon Analysis Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-users" style="margin-right: 12px; color: #a855f7; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Platoon Level Planning Initiation Analysis</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">Small Unit Tactical Analysis Framework</p>
                </div>
            </div>

            <!-- 2x2 Analysis Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                
                <!-- Mission Analysis Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 280px;">
                    <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-crosshairs" style="margin-right: 8px; color: #dc2626; font-size: 12px;"></i>
                        Mission Analysis Framework
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Platoon Mission Analysis</h5>
                            <ul style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li>Company commander's intent analysis</li>
                                <li>Platoon mission statement development</li>
                                <li>Task and purpose identification</li>
                                <li>End state and success criteria definition</li>
                                <li>Constraints and restraints analysis</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                            <p style="color: #6ee7b7; font-size: 12px; margin: 0; font-weight: 600;">
                                <i class="fas fa-construction" style="margin-right: 6px;"></i>
                                Coming Soon: Detailed platoon mission analysis procedures
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Situation Analysis Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 280px;">
                    <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #2563eb; font-size: 12px;"></i>
                        Situation Analysis Framework
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(37, 99, 235, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Platoon Situation Analysis</h5>
                            <ul style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li>Enemy situation and threat assessment</li>
                                <li>Friendly forces and adjacent unit coordination</li>
                                <li>Terrain and weather analysis (OAKOC)</li>
                                <li>Time and space considerations</li>
                                <li>Civil considerations at small unit level</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                            <p style="color: #6ee7b7; font-size: 12px; margin: 0; font-weight: 600;">
                                <i class="fas fa-construction" style="margin-right: 6px;"></i>
                                Coming Soon: Detailed platoon situation analysis procedures
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Resource Analysis Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 280px;">
                    <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-cogs" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                        Resource Analysis Framework
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Platoon Resource Analysis</h5>
                            <ul style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li>Personnel strength and capability assessment</li>
                                <li>Equipment readiness and availability</li>
                                <li>Ammunition and supply requirements</li>
                                <li>Transportation and mobility assets</li>
                                <li>Communication equipment and capabilities</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                            <p style="color: #6ee7b7; font-size: 12px; margin: 0; font-weight: 600;">
                                <i class="fas fa-construction" style="margin-right: 6px;"></i>
                                Coming Soon: Detailed platoon resource analysis procedures
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Risk Analysis Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 280px;">
                    <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-exclamation-triangle" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                        Risk Analysis Framework
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Platoon Risk Analysis</h5>
                            <ul style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li>Tactical risk assessment and mitigation</li>
                                <li>Personnel safety and security considerations</li>
                                <li>Equipment and resource risk factors</li>
                                <li>Environmental and operational hazards</li>
                                <li>Mission success probability analysis</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                            <p style="color: #6ee7b7; font-size: 12px; margin: 0; font-weight: 600;">
                                <i class="fas fa-construction" style="margin-right: 6px;"></i>
                                Coming Soon: Detailed platoon risk analysis procedures
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Analysis Summary -->
            <div style="background-color: #374151; border: 1px solid #4b5563; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                    <i class="fas fa-chart-line" style="margin-right: 8px; color: #a855f7; font-size: 12px;"></i>
                    Platoon Planning Initiation Analysis Summary
                </h4>
                <div style="color: #d1d5db; font-size: 13px; line-height: 1.6;">
                    <p style="margin: 0 0 12px 0;">
                        The platoon-level planning initiation analysis provides the foundation for small unit tactical planning. 
                        This analysis framework ensures comprehensive evaluation of mission requirements, situational factors, 
                        available resources, and potential risks at the platoon level.
                    </p>
                    <p style="margin: 0; color: #9ca3af; font-style: italic;">
                        Analysis results inform the development of platoon courses of action and support higher headquarters planning requirements.
                    </p>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #1d4ed8; border-radius: 8px; padding: 12px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (2017), Chapter 4 — Planning Initiation | FM 3-21.8 — Infantry Platoon and Squad
                </div>
            </div>
        </div>
    `;
}

export default getPlatoonPlanningInitiationAnalysis;
