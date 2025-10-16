/**
 * OPORD Mission - Echelon Analysis - Company Level
 * UNCLASSIFIED content for company-level mission analysis frameworks
 * Follows FM 5-0 standards with comprehensive tactical mission development
 * Tactical unit bridging Battalion to Platoon execution
 */

export const missionCompanyAnalysisModule = {
    id: 'company-mission-analysis',
    title: 'Company Level Mission Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Company',

    getContent: function() {
        return `
            <!-- Company Level Mission Analysis - Tactical Unit Framework -->
            <div id="company-mission-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-user-friends" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        2. Mission Analysis - Company Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Tactical Unit Mission Framework per FM 5-0
                    </p>
                </div>

                <!-- 2x2 Grid Layout for Mission Analysis Components -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 20px;
                ">

                    <!-- Mission Statement Development Card -->
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
                                <i class="fas fa-bullseye" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                a. Mission Statement Development
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Company-level mission statements translate battalion tactical intent into platoon objectives for direct tactical execution.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Tactical Task Components</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Multi-platoon tactical coordination</li>
                                    <li>Direct fire integration</li>
                                    <li>Tactical area control</li>
                                    <li>Battalion mission support</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Articulation</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Tactical end state definition</li>
                                    <li>Battalion commander's intent</li>
                                    <li>Platoon unity of effort</li>
                                    <li>Direct tactical execution</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Tactical Context Analysis Card -->
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
                                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #dc2626; font-size: 12px;"></i>
                                b. Tactical Context Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Company missions must align with battalion operations while executing direct tactical actions at platoon level.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Battalion Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Battalion commander's intent analysis</li>
                                    <li>Direct tactical requirements</li>
                                    <li>Adjacent company coordination</li>
                                    <li>Supporting unit integration</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Tactical Environment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Enemy platoon-level threats</li>
                                    <li>Immediate terrain analysis</li>
                                    <li>Weather impact on operations</li>
                                    <li>Local civil considerations</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Mission Analysis Process Card -->
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
                                <i class="fas fa-cogs" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                c. Mission Analysis Process
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Company-level mission analysis requires direct tactical design and platoon integration planning.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Analysis Framework</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Battalion guidance analysis</li>
                                    <li>Direct tactical assessment</li>
                                    <li>Platoon capability integration</li>
                                    <li>Direct fire coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Planning Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Direct tactical timeline</li>
                                    <li>Resource allocation priorities</li>
                                    <li>Risk assessment frameworks</li>
                                    <li>Platoon coordination planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Command Relationships Card -->
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
                                <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                                d. Command Relationships
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Company command relationships establish direct tactical authority and coordination mechanisms across platoons.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Direct Command Structure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Battalion command authority</li>
                                    <li>Platoon command integration</li>
                                    <li>Squad task organization</li>
                                    <li>Supporting element coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Tactical Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Direct fire coordination</li>
                                    <li>Maneuver support integration</li>
                                    <li>Logistics support coordination</li>
                                    <li>Medical support integration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Company Mission Example - Operation ALLIED RESOLVE -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(16, 185, 129, 0.1); border-radius: 8px; border: 1px solid #10b981; border-left: 4px solid #10b981;">
                    <h4 style="color: #10b981; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-user-friends" style="margin-right: 8px;"></i>
                        Company Mission Statement Example
                    </h4>
                    <div style="background-color: #374151; padding: 16px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #10b981; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Alpha Company, 1-77 Armor Battalion Mission Statement - Operation ALLIED RESOLVE</h5>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0; font-style: italic; border-left: 3px solid #10b981; padding-left: 12px;">
                            "Alpha Company conducts combined arms attack in assigned area of operations
                            in coordination with 1st, 2nd, and 3rd Platoons to destroy Russian mechanized
                            platoon in sector, secure Building 27, and establish overwatch positions
                            to support battalion follow-on operations."
                        </p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Task Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>WHO:</strong> Alpha Company with 1st, 2nd, 3rd Platoons</li>
                                <li><strong>WHAT:</strong> Combined arms attack</li>
                                <li><strong>WHERE:</strong> Assigned area of operations</li>
                                <li><strong>WHEN:</strong> Direct tactical timeline</li>
                                <li><strong>HOW:</strong> Platoon coordination and integration</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Destroy Russian mechanized platoon</li>
                                <li>Secure Building 27</li>
                                <li>Establish overwatch positions</li>
                                <li>Support battalion follow-on operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Direct Tactical Framework -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(220, 38, 38, 0.1); border-radius: 8px; border: 1px solid #dc2626; border-left: 4px solid #dc2626;">
                    <h4 style="color: #f87171; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-crosshairs" style="margin-right: 8px;"></i>
                        Direct Tactical Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Company-level operations require direct tactical coordination across multiple platoons
                        to achieve immediate tactical objectives through synchronized direct fire and maneuver.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Direct Tactical Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Platoon maneuver coordination</li>
                                <li>Direct fire integration</li>
                                <li>Immediate tactical support</li>
                                <li>Squad-level coordination</li>
                                <li>Direct tactical control</li>
                                <li>Immediate medical support</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Platoon Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Platoon mission synchronization</li>
                                <li>Direct tactical control measures</li>
                                <li>Immediate mutual support</li>
                                <li>Direct fire coordination</li>
                                <li>Immediate casualty evacuation</li>
                                <li>Direct resupply coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Platoon Integration Framework -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(22, 163, 74, 0.1); border-radius: 8px; border: 1px solid #16a34a; border-left: 4px solid #16a34a;">
                    <h4 style="color: #4ade80; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                        Platoon Integration Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Company mission analysis must integrate multiple platoon capabilities to achieve direct tactical
                        objectives while maintaining unity of effort across the immediate tactical area.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Command Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Platoon mission alignment</li>
                                <li>Direct tactical organization</li>
                                <li>Command relationship clarity</li>
                                <li>Direct control measures</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Capability Synchronization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Direct tactical coordination</li>
                                <li>Resource allocation optimization</li>
                                <li>Timeline synchronization</li>
                                <li>Immediate mutual support</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Tactical Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Direct control measures</li>
                                <li>Immediate communication</li>
                                <li>Direct logistics coordination</li>
                                <li>Immediate risk mitigation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Mission Analysis Summary -->
                <div style="margin-top: 16px; padding: 16px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid #a855f7; border-left: 4px solid #a855f7;">
                    <h4 style="color: #c084fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                        Company Level Mission Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Company-level mission analysis translates battalion tactical guidance into direct tactical objectives,
                        coordinating multiple platoons to achieve immediate tactical end states while maintaining unity of effort
                        across direct tactical operations with integrated fires and maneuver at platoon level.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Multi-platoon tactical areas with direct tactical focus</li>
                            <li><strong>Staff:</strong> 5+ specialized planners and coordination personnel</li>
                            <li><strong>Coordination:</strong> Battalion command, platoon headquarters, direct tactical elements</li>
                            <li><strong>Timeline:</strong> 6-12 hours initial analysis, continuous tactical updates</li>
                        </ul>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Direct Tactical Complexity Factors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Multi-platoon coordination</li>
                                <li>Direct tactical integration</li>
                                <li>Immediate tactical control</li>
                                <li>Battalion mission support</li>
                                <li>Direct fire coordination</li>
                                <li>Immediate tactical execution</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Mission Analysis Products</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Direct tactical mission statement</li>
                                <li>Platoon coordination matrix</li>
                                <li>Direct tactical capability assessment</li>
                                <li>Immediate tactical risk evaluation</li>
                                <li>Direct resource allocation plan</li>
                                <li>Platoon coordination timeline</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};
