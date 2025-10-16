/**
 * OPORD Situation - Echelon Analysis - Group Level
 * UNCLASSIFIED content for group-level situation analysis frameworks
 * Follows FM 5-0 standards with tactical-operational analysis requirements
 * Scaled from Brigade template for Group-level complexity (Air Force/Special Operations)
 */

export const groupAnalysisModule = {
    id: 'group-analysis',
    title: 'Group Level Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Group',
    
    getContent: function() {
        return `
            <!-- Group Level Analysis - Tactical-Operational Framework -->
            <div id="group-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-star" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        1. Situation Analysis - Group Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Tactical-Operational Analysis Framework per FM 5-0 (Air Force/SOF)
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
                                UNCLASSIFIED - Group-level analysis focuses on specialized tactical operations with operational integration.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 8px 0;">Scope & Scale</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Geographic: Group areas (hundreds to thousands sq km)</li>
                                    <li>Temporal: 2 weeks to 4 months tactical-operational planning</li>
                                    <li>Forces: Multi-squadron/battalion specialized operations</li>
                                    <li>Domains: Domain-specific with joint integration (Air/SOF)</li>
                                    <li>Population: Variable based on mission requirements</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 6px 0;">Analysis Depth</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Specialized tactical intelligence collection</li>
                                    <li>Multi-squadron/battalion coordination</li>
                                    <li>Domain-specific integration and support</li>
                                    <li>Specialized sustainment and logistics planning</li>
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
                                UNCLASSIFIED - Group-level staff requires specialized expertise with multi-squadron/battalion coordination.
                            </p>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Specialized Tactical Staff</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>A2/S2: Group intelligence section (40+ analysts)</li>
                                    <li>A3/S3: Operations planning cell (30+ planners)</li>
                                    <li>A5/S5: Plans section (20+ officers)</li>
                                    <li>A6/S6: Group communications and information systems</li>
                                    <li>A8/S8: Resource management and specialized logistics</li>
                                    <li>Specialized Support Elements (mission-dependent)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Analysis Timeline</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    5-18 days for comprehensive group assessment with weekly updates and specialized intelligence
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
                                UNCLASSIFIED - Group commands coordinate with wing/brigade headquarters and specialized subordinate units.
                            </p>
                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; border-left: 3px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 8px 0;">Specialized Coordination</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Wing/Brigade Headquarters (higher command coordination)</li>
                                    <li>Adjacent Group Commands (lateral coordination)</li>
                                    <li>Subordinate Squadron/Battalion Commands (2-4 typically)</li>
                                    <li>Specialized Support Units (maintenance, logistics, medical)</li>
                                    <li>Joint Force Elements (cross-domain coordination)</li>
                                    <li>Mission-Specific Partners (coalition, interagency)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #fbbf24;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 6px 0;">Information Flow</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Specialized intelligence networks</li>
                                    <li>Squadron/battalion coordination systems</li>
                                    <li>Domain-specific coordination channels</li>
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
                                UNCLASSIFIED - Group-level decisions focus on specialized tactical execution with operational integration.
                            </p>
                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Specialized Decision Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Wing/Brigade operational objectives and guidance</li>
                                    <li>Multi-squadron/battalion resource allocation</li>
                                    <li>Specialized tactical risk assessment</li>
                                    <li>Domain-specific capabilities and limitations</li>
                                    <li>Adjacent group coordination requirements</li>
                                    <li>Mission-specific execution considerations</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Planning Horizon</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    2 weeks to 4 months specialized tactical planning with weekly reviews and mission-specific assessment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Analysis Summary -->
                <div style="margin-top: 16px; padding: 16px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid #a855f7; border-left: 4px solid #a855f7;">
                    <h4 style="color: #c084fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-chart-line" style="margin-right: 8px;"></i>
                        Group Level Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Group-level situation analysis represents specialized tactical headquarters (typically Air Force or Special Operations), 
                        coordinating multiple squadrons or specialized battalions in domain-specific operations while maintaining 
                        integration with joint force operations and higher wing/brigade objectives.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Specialized areas with 2 weeks to 4 months planning horizon</li>
                            <li><strong>Staff:</strong> 100+ specialized analysts, planners, and coordination personnel</li>
                            <li><strong>Coordination:</strong> Wing/Brigade HQ, adjacent groups, multiple squadrons/battalions</li>
                            <li><strong>Timeline:</strong> 5-18 days initial assessment, weekly specialized updates</li>
                        </ul>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #a855f7;">
                    <p style="color: #c084fc; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-star" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Group Level Analysis Framework per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Group Analysis module initialized');
        return true;
    }
};
