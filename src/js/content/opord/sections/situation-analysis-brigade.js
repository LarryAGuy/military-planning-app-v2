/**
 * OPORD Situation - Echelon Analysis - Brigade Level
 * UNCLASSIFIED content for brigade-level situation analysis frameworks
 * Follows FM 5-0 standards with tactical-operational analysis requirements
 * Scaled from Division template for Brigade-level complexity
 */

export const brigadeAnalysisModule = {
    id: 'brigade-analysis',
    title: 'Brigade Level Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Brigade',
    
    getContent: function() {
        return `
            <!-- Brigade Level Analysis - Tactical-Operational Framework -->
            <div id="brigade-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-chess-rook" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        1. Situation Analysis - Brigade Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Tactical-Operational Analysis Framework per FM 5-0
                    </p>
                </div>

                <!-- 2x2 Analysis Framework Grid -->
                <div style="
                    display: grid; 
                    grid-template-columns: 1fr 1fr; 
                    gap: 16px; 
                    margin-bottom: 24px;
                    min-height: calc(100vh - 300px);
                ">

                    <!-- Analytical Complexity Card -->
                    <div style="
                        background-color: #1f2937; 
                        border: 1px solid #374151; 
                        border-radius: 8px; 
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        min-height: 280px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-brain" style="margin-right: 8px; color: #a855f7; font-size: 12px;"></i>
                                a. Analytical Complexity
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Brigade-level analysis focuses on tactical operations while maintaining operational context.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 8px 0;">Scope & Scale</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Geographic: Brigade areas (hundreds of sq km)</li>
                                    <li>Temporal: 2 weeks to 3 months tactical-operational planning</li>
                                    <li>Forces: Multi-battalion operations with brigade assets</li>
                                    <li>Domains: Combined arms with tactical integration</li>
                                    <li>Population: Tens of thousands in area of operations</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 6px 0;">Analysis Depth</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Tactical intelligence collection and analysis</li>
                                    <li>Multi-battalion coordination and synchronization</li>
                                    <li>Brigade fires integration and close support</li>
                                    <li>Tactical sustainment and logistics planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Staff Requirements Card -->
                    <div style="
                        background-color: #1f2937; 
                        border: 1px solid #374151; 
                        border-radius: 8px; 
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        min-height: 280px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-users-cog" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                b. Staff Requirements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Brigade-level staff requires tactical expertise with multi-battalion coordination capabilities.
                            </p>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Tactical-Operational Staff</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>S2: Brigade intelligence section (50+ analysts)</li>
                                    <li>S3: Operations planning cell (35+ planners)</li>
                                    <li>S5: Plans section (25+ officers)</li>
                                    <li>S6: Brigade communications and information systems</li>
                                    <li>S8: Resource management and tactical logistics</li>
                                    <li>Fire Support Element (FSE) coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Analysis Timeline</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    7-21 days for comprehensive brigade assessment with bi-weekly updates and tactical intelligence
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Coordination Requirements Card -->
                    <div style="
                        background-color: #1f2937; 
                        border: 1px solid #374151; 
                        border-radius: 8px; 
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        min-height: 280px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-network-wired" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                                c. Coordination Requirements
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Brigade commands coordinate with division headquarters and multiple subordinate battalions.
                            </p>
                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; border-left: 3px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 8px 0;">Tactical-Operational Coordination</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Division Headquarters (higher command coordination)</li>
                                    <li>Adjacent Brigade Commands (lateral coordination)</li>
                                    <li>Subordinate Battalion Commands (3-5 battalions typically)</li>
                                    <li>Brigade Support Battalion (BSB) logistics coordination</li>
                                    <li>Attached/Supporting Units (engineers, artillery, aviation)</li>
                                    <li>Higher Fires Coordination (DIVARTY/Corps Artillery)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #fbbf24;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 6px 0;">Information Flow</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Tactical intelligence networks</li>
                                    <li>Battalion coordination systems</li>
                                    <li>Brigade fires coordination</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Decision-Making Framework Card -->
                    <div style="
                        background-color: #1f2937; 
                        border: 1px solid #374151; 
                        border-radius: 8px; 
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        min-height: 280px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-chess-king" style="margin-right: 8px; color: #ef4444; font-size: 12px;"></i>
                                d. Decision-Making Framework
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Brigade-level decisions focus on tactical execution while maintaining operational alignment.
                            </p>
                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Tactical-Operational Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Division operational objectives and guidance</li>
                                    <li>Multi-battalion resource allocation and priorities</li>
                                    <li>Tactical risk assessment and force protection</li>
                                    <li>Brigade sustainment and logistics capabilities</li>
                                    <li>Adjacent brigade coordination requirements</li>
                                    <li>Battalion tactical execution considerations</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Planning Horizon</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    2 weeks to 3 months tactical-operational planning with bi-weekly reviews and continuous tactical assessment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Analysis Summary -->
                <div style="margin-top: 16px; padding: 16px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid #a855f7; border-left: 4px solid #a855f7;">
                    <h4 style="color: #c084fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-chart-line" style="margin-right: 8px;"></i>
                        Brigade Level Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Brigade-level situation analysis represents the primary tactical headquarters, coordinating multiple battalions 
                        in combined arms operations while maintaining alignment with division operational objectives and 
                        translating operational guidance into detailed tactical execution plans.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Brigade areas with 2 weeks to 3 months planning horizon</li>
                            <li><strong>Staff:</strong> 125+ specialized analysts, planners, and coordination personnel</li>
                            <li><strong>Coordination:</strong> Division HQ, adjacent brigades, multiple battalions</li>
                            <li><strong>Timeline:</strong> 7-21 days initial assessment, bi-weekly tactical updates</li>
                        </ul>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #a855f7;">
                    <p style="color: #c084fc; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-chess-rook" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Brigade Level Analysis Framework per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Brigade Analysis module initialized');
        return true;
    }
};
