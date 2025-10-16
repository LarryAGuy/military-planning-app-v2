/**
 * OPORD Situation - Echelon Analysis - Company Level
 * UNCLASSIFIED content for company-level situation analysis frameworks
 * Follows FM 5-0 standards with tactical analysis requirements
 * Scaled from Squadron template for Company-level complexity
 */

export const companyAnalysisModule = {
    id: 'company-analysis',
    title: 'Company Level Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Company',
    
    getContent: function() {
        return `
            <!-- Company Level Analysis - Tactical Framework -->
            <div id="company-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-user-friends" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        1. Situation Analysis - Company Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Tactical Analysis Framework per FM 5-0
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
                                UNCLASSIFIED - Company-level analysis focuses on immediate tactical operations with platoon coordination.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 8px 0;">Scope & Scale</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Geographic: Company areas (few sq km)</li>
                                    <li>Temporal: 6-48 hours to 2 weeks tactical planning</li>
                                    <li>Forces: Multi-platoon tactical operations</li>
                                    <li>Domains: Combined arms at small unit level</li>
                                    <li>Population: Dozens to hundreds affected</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c084fc; font-size: 12px; margin: 0 0 6px 0;">Analysis Depth</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Immediate tactical intelligence processing</li>
                                    <li>Multi-platoon coordination and synchronization</li>
                                    <li>Direct fires and close support integration</li>
                                    <li>Company-level logistics and sustainment</li>
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
                                UNCLASSIFIED - Company-level staff requires immediate tactical expertise with platoon coordination.
                            </p>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Tactical Staff Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Company Commander (CO) assessment and planning</li>
                                    <li>Executive Officer (XO) coordination and logistics</li>
                                    <li>First Sergeant (1SG) personnel and sustainment</li>
                                    <li>Forward Observer (FO) fires coordination</li>
                                    <li>Company Communications (RTO/RATELO)</li>
                                    <li>Platoon Leaders (tactical execution input)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Analysis Timeline</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    2-12 hours for comprehensive company assessment with frequent updates and immediate intelligence
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
                                UNCLASSIFIED - Company commands coordinate with battalion headquarters and subordinate platoons.
                            </p>
                            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; border-left: 3px solid #fbbf24; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 8px 0;">Immediate Tactical Coordination</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Battalion Headquarters (higher command)</li>
                                    <li>Adjacent Company Commands (lateral coordination)</li>
                                    <li>Subordinate Platoon Leaders (3-4 platoons typically)</li>
                                    <li>Company Support Elements (medics, supply, maintenance)</li>
                                    <li>Attached/Supporting Elements (weapons squads, scouts)</li>
                                    <li>Higher Fires Support (battalion FSO/mortar section)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #fbbf24;">
                                <h5 style="font-weight: 600; color: #fcd34d; font-size: 12px; margin: 0 0 6px 0;">Information Flow</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Immediate tactical intelligence</li>
                                    <li>Platoon coordination systems</li>
                                    <li>Direct fires coordination channels</li>
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
                                UNCLASSIFIED - Company-level decisions focus on immediate tactical execution with direct battlefield impact.
                            </p>
                            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Immediate Decision Factors</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Battalion tactical objectives and immediate guidance</li>
                                    <li>Multi-platoon resource allocation and priorities</li>
                                    <li>Immediate tactical risk and force protection</li>
                                    <li>Direct fires capabilities and limitations</li>
                                    <li>Adjacent company coordination requirements</li>
                                    <li>Platoon tactical execution and capabilities</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #ef4444;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Planning Horizon</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    6-48 hours to 2 weeks immediate tactical planning with frequent reviews and continuous assessment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Analysis Summary -->
                <div style="margin-top: 16px; padding: 16px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid #a855f7; border-left: 4px solid #a855f7;">
                    <h4 style="color: #c084fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-chart-line" style="margin-right: 8px;"></i>
                        Company Level Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Company-level situation analysis represents the primary small unit tactical headquarters, coordinating 
                        multiple platoons in immediate tactical operations while maintaining direct battlefield awareness and 
                        rapid responsiveness to changing tactical conditions and enemy contact.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Company areas with 6-48 hours to 2 weeks planning horizon</li>
                            <li><strong>Staff:</strong> 6-10 key leaders and coordination personnel</li>
                            <li><strong>Coordination:</strong> Battalion HQ, adjacent companies, multiple platoons</li>
                            <li><strong>Timeline:</strong> 2-12 hours initial assessment, frequent tactical updates</li>
                        </ul>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #a855f7;">
                    <p style="color: #c084fc; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-user-friends" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Company Level Analysis Framework per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Company Analysis module initialized');
        return true;
    }
};
