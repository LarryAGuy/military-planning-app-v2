/**
 * OPORD Situation - Echelon Analysis - Theater Level
 * UNCLASSIFIED content for theater-level situation analysis frameworks
 * Follows FM 5-0 standards with comprehensive strategic analysis requirements
 * Template module for all subordinate echelon analysis modules
 */

export const theaterAnalysisModule = {
    id: 'theater-analysis',
    title: 'Theater Level Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Theater',
    
    getContent: function() {
        return `
            <!-- Theater Level Analysis - Strategic Command Framework -->
            <div id="theater-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-satellite" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        1. Situation Analysis - Theater Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Strategic Command Analysis Framework per FM 5-0
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
                                UNCLASSIFIED - Theater-level analysis requires comprehensive strategic assessment across multiple domains, regions, and timeframes.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 8px 0;">Scope & Scale</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Geographic: Continental/global regions (millions of sq km)</li>
                                    <li>Temporal: 1-5 years strategic planning horizon</li>
                                    <li>Forces: Multi-service, coalition, interagency coordination</li>
                                    <li>Domains: Land, sea, air, space, cyber, information</li>
                                    <li>Population: Hundreds of millions affected</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 6px 0;">Analysis Depth</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Strategic intelligence fusion from national assets</li>
                                    <li>Multi-domain threat assessment and capability analysis</li>
                                    <li>Coalition partner integration and interoperability</li>
                                    <li>Whole-of-government coordination requirements</li>
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
                                UNCLASSIFIED - Theater-level staff requires extensive specialized expertise across strategic planning, intelligence, and operations.
                            </p>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Strategic Staff Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>J2: Strategic intelligence fusion center (200+ analysts)</li>
                                    <li>J3: Theater operations planning cell (150+ planners)</li>
                                    <li>J5: Strategic plans and policy directorate (100+ officers)</li>
                                    <li>J6: Theater communications and cyber operations</li>
                                    <li>J8: Resource management and strategic logistics</li>
                                    <li>Coalition Coordination Center (multinational staff)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Analysis Timeline</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    30-90 days for comprehensive theater assessment with continuous updates and strategic intelligence integration
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
                                UNCLASSIFIED - Theater commands coordinate across national command authority, coalition partners, and interagency elements.
                            </p>
                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; border-left: 3px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 8px 0;">Strategic Coordination</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>National Command Authority (SecDef, CJCS, NSC)</li>
                                    <li>Geographic Combatant Commands (peer theaters)</li>
                                    <li>Functional Combatant Commands (STRATCOM, CYBERCOM)</li>
                                    <li>Service Component Commands (Army, Navy, Air Force, Marines)</li>
                                    <li>Coalition Partner Commands (bilateral/multilateral)</li>
                                    <li>Interagency Partners (State, CIA, NSA, DHS)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #fbbf24;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 6px 0;">Information Flow</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Strategic intelligence sharing networks</li>
                                    <li>Coalition information sharing agreements</li>
                                    <li>Interagency coordination mechanisms</li>
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
                                UNCLASSIFIED - Theater-level decisions require strategic assessment with national security implications and coalition considerations.
                            </p>
                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Strategic Decision Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>National strategic objectives and policy guidance</li>
                                    <li>Coalition partner political considerations</li>
                                    <li>Resource allocation across global commitments</li>
                                    <li>Strategic risk assessment and mitigation</li>
                                    <li>Long-term regional stability implications</li>
                                    <li>Deterrence and escalation management</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Planning Horizon</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    1-5 years strategic planning with quarterly reviews and continuous strategic assessment updates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Analysis Summary -->
                <div style="margin-top: 16px; padding: 16px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid #a855f7; border-left: 4px solid #a855f7;">
                    <h4 style="color: #c084fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-chart-line" style="margin-right: 8px;"></i>
                        Theater Level Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Theater-level situation analysis represents the most complex and comprehensive analytical requirement in military planning, 
                        encompassing strategic intelligence fusion, multi-domain threat assessment, coalition coordination, and national-level 
                        decision-making frameworks with global implications.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Continental/global regions with multi-year strategic planning</li>
                            <li><strong>Staff:</strong> 500+ specialized analysts, planners, and coordination personnel</li>
                            <li><strong>Coordination:</strong> National command authority, coalition partners, interagency</li>
                            <li><strong>Timeline:</strong> 30-90 days initial assessment, continuous strategic updates</li>
                        </ul>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #a855f7;">
                    <p style="color: #c084fc; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-satellite" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Theater Level Analysis Framework per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Theater Analysis module initialized');
        return true;
    }
};
