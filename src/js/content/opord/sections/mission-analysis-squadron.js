/**
 * OPORD Mission - Echelon Analysis - Squadron Level
 * UNCLASSIFIED content for squadron-level mission analysis frameworks
 * Follows FM 5-0 standards with comprehensive tactical mission development
 * Specialized tactical command bridging Regiment to Troop/Company execution
 */

export const missionSquadronAnalysisModule = {
    id: 'squadron-mission-analysis',
    title: 'Squadron Level Mission Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Squadron',

    getContent: function() {
        return `
            <!-- Squadron Level Mission Analysis - Specialized Tactical Framework -->
            <div id="squadron-mission-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-horse-head" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        2. Mission Analysis - Squadron Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Specialized Tactical Mission Framework per FM 5-0
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
                                UNCLASSIFIED - Squadron-level mission statements translate regiment tactical intent into specialized objectives for multiple troops/companies.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Specialized Task Components</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Multi-troop specialized coordination</li>
                                    <li>Reconnaissance and security integration</li>
                                    <li>Tactical area coverage</li>
                                    <li>Regiment mission support</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Articulation</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Specialized capability delivery</li>
                                    <li>Regiment commander's intent</li>
                                    <li>Troop unity of effort</li>
                                    <li>Tactical objective achievement</li>
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
                                UNCLASSIFIED - Squadron missions must align with regiment operations while executing specialized tactics at troop level.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Regiment Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Regiment commander's intent analysis</li>
                                    <li>Specialized capability requirements</li>
                                    <li>Adjacent squadron coordination</li>
                                    <li>Supporting unit integration</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Tactical Environment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Enemy reconnaissance threats</li>
                                    <li>Terrain and mobility analysis</li>
                                    <li>Weather impact on operations</li>
                                    <li>Civil considerations</li>
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
                                UNCLASSIFIED - Squadron-level mission analysis requires specialized tactical design and troop integration planning.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Analysis Framework</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Regiment guidance analysis</li>
                                    <li>Specialized capability assessment</li>
                                    <li>Troop capability integration</li>
                                    <li>Reconnaissance coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Planning Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Specialized timeline development</li>
                                    <li>Resource allocation priorities</li>
                                    <li>Risk assessment frameworks</li>
                                    <li>Troop coordination planning</li>
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
                                UNCLASSIFIED - Squadron command relationships establish specialized authority and coordination mechanisms across troops.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Specialized Command Structure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Regiment command authority</li>
                                    <li>Troop command integration</li>
                                    <li>Platoon task organization</li>
                                    <li>Supporting unit coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Functional Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Reconnaissance coordination</li>
                                    <li>Security operations integration</li>
                                    <li>Logistics support coordination</li>
                                    <li>Communication integration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Squadron Mission Example - Operation ALLIED RESOLVE -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(16, 185, 129, 0.1); border-radius: 8px; border: 1px solid #10b981; border-left: 4px solid #10b981;">
                    <h4 style="color: #10b981; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-horse-head" style="margin-right: 8px;"></i>
                        Squadron Mission Statement Example
                    </h4>
                    <div style="background-color: #374151; padding: 16px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #10b981; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">1st Squadron, 3rd Cavalry Regiment Mission Statement - Operation ALLIED RESOLVE</h5>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0; font-style: italic; border-left: 3px solid #10b981; padding-left: 12px;">
                            "1st Squadron, 3rd Cavalry Regiment conducts reconnaissance and security operations
                            in assigned area of operations in coordination with Alpha, Bravo, and Charlie Troops
                            to provide early warning of Russian advance, conduct screen operations, and maintain
                            contact to enable regiment main body operations."
                        </p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Task Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>WHO:</strong> 1st Squadron with A, B, C Troops</li>
                                <li><strong>WHAT:</strong> Reconnaissance and security operations</li>
                                <li><strong>WHERE:</strong> Assigned area of operations</li>
                                <li><strong>WHEN:</strong> Continuous operations</li>
                                <li><strong>HOW:</strong> Troop coordination and integration</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Provide early warning</li>
                                <li>Conduct screen operations</li>
                                <li>Maintain contact</li>
                                <li>Enable regiment main body operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Reconnaissance and Security Framework -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(220, 38, 38, 0.1); border-radius: 8px; border: 1px solid #dc2626; border-left: 4px solid #dc2626;">
                    <h4 style="color: #f87171; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-eye" style="margin-right: 8px;"></i>
                        Reconnaissance and Security Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Squadron-level operations require specialized reconnaissance and security coordination across multiple troops
                        to provide early warning and maintain situational awareness for higher headquarters.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Reconnaissance Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Area reconnaissance coordination</li>
                                <li>Route reconnaissance planning</li>
                                <li>Zone reconnaissance execution</li>
                                <li>Reconnaissance in force operations</li>
                                <li>Special reconnaissance coordination</li>
                                <li>Intelligence collection integration</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Security Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Screen operations coordination</li>
                                <li>Guard operations planning</li>
                                <li>Cover operations execution</li>
                                <li>Area security operations</li>
                                <li>Local security coordination</li>
                                <li>Early warning systems</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Troop Coordination Framework -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(22, 163, 74, 0.1); border-radius: 8px; border: 1px solid #16a34a; border-left: 4px solid #16a34a;">
                    <h4 style="color: #4ade80; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                        Troop Coordination Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Squadron mission analysis must integrate multiple troop capabilities to achieve specialized
                        objectives while maintaining unity of effort across extended reconnaissance areas.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Command Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Troop mission alignment</li>
                                <li>Specialized task organization</li>
                                <li>Command relationship clarity</li>
                                <li>Control measure coordination</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Capability Synchronization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Reconnaissance coordination</li>
                                <li>Resource allocation optimization</li>
                                <li>Timeline synchronization</li>
                                <li>Mutual support planning</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Tactical Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Area coordination measures</li>
                                <li>Communication integration</li>
                                <li>Logistics coordination</li>
                                <li>Risk mitigation planning</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Mission Analysis Summary -->
                <div style="margin-top: 16px; padding: 16px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid #a855f7; border-left: 4px solid #a855f7;">
                    <h4 style="color: #c084fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                        Squadron Level Mission Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Squadron-level mission analysis translates regiment tactical guidance into specialized objectives,
                        coordinating multiple troops to achieve reconnaissance and security end states while maintaining
                        situational awareness and early warning capabilities for higher headquarters.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Multi-troop tactical areas with specialized reconnaissance focus</li>
                            <li><strong>Staff:</strong> 10+ specialized planners and coordination personnel</li>
                            <li><strong>Coordination:</strong> Regiment command, troop headquarters, specialized elements</li>
                            <li><strong>Timeline:</strong> 12-24 hours initial analysis, continuous tactical updates</li>
                        </ul>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Specialized Complexity Factors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Multi-troop coordination</li>
                                <li>Reconnaissance integration</li>
                                <li>Security operations coordination</li>
                                <li>Regiment mission support</li>
                                <li>Extended area coverage</li>
                                <li>Continuous operations capability</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Mission Analysis Products</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Specialized mission statement</li>
                                <li>Troop coordination matrix</li>
                                <li>Reconnaissance capability assessment</li>
                                <li>Security operations risk evaluation</li>
                                <li>Resource allocation plan</li>
                                <li>Troop coordination timeline</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};