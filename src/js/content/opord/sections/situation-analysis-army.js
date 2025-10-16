/**
 * OPORD Situation - Echelon Analysis - Army Level
 * UNCLASSIFIED content for army-level situation analysis frameworks
 * Follows FM 5-0 standards with strategic operational analysis requirements
 * Scaled from Theater template for Army-level complexity
 */

export const armyAnalysisModule = {
    id: 'army-analysis',
    title: 'Army Level Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Army',
    
    getContent: function() {
        return `
            <!-- Army Level Analysis - Strategic Operational Framework -->
            <div id="army-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        1. Situation Analysis - Army Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Strategic Operational Analysis Framework per FM 5-0
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
                                UNCLASSIFIED - Army-level analysis requires strategic operational assessment across multiple corps and theater-wide considerations.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 8px 0;">Scope & Scale</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Geographic: Theater sub-regions (hundreds of thousands sq km)</li>
                                    <li>Temporal: 6 months to 2 years operational planning</li>
                                    <li>Forces: Multi-corps operations with specialized commands</li>
                                    <li>Domains: Land-centric with joint integration requirements</li>
                                    <li>Population: Tens of millions in area of operations</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 6px 0;">Analysis Depth</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Strategic operational intelligence integration</li>
                                    <li>Multi-corps coordination and synchronization</li>
                                    <li>Joint force integration and interoperability</li>
                                    <li>Theater-level logistics and sustainment planning</li>
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
                                UNCLASSIFIED - Army-level staff requires strategic operational expertise with multi-corps coordination capabilities.
                            </p>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Strategic Operational Staff</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>G2: Army intelligence fusion center (150+ analysts)</li>
                                    <li>G3: Strategic operations planning cell (100+ planners)</li>
                                    <li>G5: Strategic plans and policy section (75+ officers)</li>
                                    <li>G6: Army communications and cyber operations</li>
                                    <li>G8: Resource management and strategic logistics</li>
                                    <li>Joint Coordination Element (liaison officers)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Analysis Timeline</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    21-60 days for comprehensive army assessment with regular updates and operational intelligence integration
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
                                UNCLASSIFIED - Army commands coordinate with theater command, joint forces, and multiple subordinate corps.
                            </p>
                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; border-left: 3px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 8px 0;">Strategic Operational Coordination</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Theater Command (COCOM/ASCC coordination)</li>
                                    <li>Joint Force Components (Air, Naval, Marine, SOF)</li>
                                    <li>Subordinate Corps Commands (2-4 corps typically)</li>
                                    <li>Army Service Component Commands (ASCC)</li>
                                    <li>Coalition Partner Army Commands</li>
                                    <li>Theater Sustainment Command (logistics coordination)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #fbbf24;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 6px 0;">Information Flow</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Strategic operational intelligence networks</li>
                                    <li>Joint force coordination mechanisms</li>
                                    <li>Multi-corps synchronization systems</li>
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
                                UNCLASSIFIED - Army-level decisions require strategic operational assessment with theater-wide implications.
                            </p>
                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Strategic Operational Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Theater strategic objectives and operational design</li>
                                    <li>Joint force integration and synchronization</li>
                                    <li>Multi-corps resource allocation and priorities</li>
                                    <li>Strategic operational risk assessment</li>
                                    <li>Theater-wide sustainment considerations</li>
                                    <li>Coalition partner operational coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Planning Horizon</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    6 months to 2 years strategic operational planning with monthly reviews and continuous assessment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Analysis Summary -->
                <div style="margin-top: 16px; padding: 16px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid #a855f7; border-left: 4px solid #a855f7;">
                    <h4 style="color: #c084fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-chart-line" style="margin-right: 8px;"></i>
                        Army Level Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Army-level situation analysis bridges strategic theater requirements with operational corps execution, 
                        requiring comprehensive multi-corps coordination, joint force integration, and strategic operational 
                        planning across extended geographic areas and timeframes.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Theater sub-regions with 6 months to 2 years planning</li>
                            <li><strong>Staff:</strong> 350+ specialized analysts, planners, and coordination personnel</li>
                            <li><strong>Coordination:</strong> Theater command, joint forces, multiple corps</li>
                            <li><strong>Timeline:</strong> 21-60 days initial assessment, monthly strategic updates</li>
                        </ul>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #a855f7;">
                    <p style="color: #c084fc; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-globe-americas" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Army Level Analysis Framework per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Army Analysis module initialized');
        return true;
    }
};
