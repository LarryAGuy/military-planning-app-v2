/**
 * OPORD Mission - Echelon Analysis - Regiment Level
 * UNCLASSIFIED content for regiment-level mission analysis frameworks
 * Follows FM 5-0 standards with comprehensive operational mission development
 * Bridges Division tactical guidance to Battalion operational execution
 */

export const missionRegimentAnalysisModule = {
    id: 'regiment-mission-analysis',
    title: 'Regiment Level Mission Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Regiment',

    getContent: function() {
        return `
            <!-- Regiment Level Mission Analysis - Operational Command Framework -->
            <div id="regiment-mission-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-medal" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        2. Mission Analysis - Regiment Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Operational Mission Development Framework per FM 5-0
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
                                UNCLASSIFIED - Regiment-level mission statements translate division tactical intent into specialized operational objectives for multiple battalions.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Operational Task Components</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Multi-battalion specialized coordination</li>
                                    <li>Functional area expertise integration</li>
                                    <li>Operational area support</li>
                                    <li>Division mission enablement</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Articulation</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Specialized capability delivery</li>
                                    <li>Division commander's intent</li>
                                    <li>Battalion unity of effort</li>
                                    <li>Operational objective support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Operational Context Analysis Card -->
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
                                b. Operational Context Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Regiment missions must align with division operations while providing specialized capabilities across the operational area.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Division Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Division commander's intent analysis</li>
                                    <li>Specialized capability requirements</li>
                                    <li>Brigade coordination requirements</li>
                                    <li>Supporting unit integration</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Operational Environment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Specialized threat assessment</li>
                                    <li>Operational area analysis</li>
                                    <li>Functional capability gaps</li>
                                    <li>Support requirements evaluation</li>
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
                                UNCLASSIFIED - Regiment-level mission analysis requires specialized operational design and battalion capability integration.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Analysis Framework</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Division guidance analysis</li>
                                    <li>Specialized capability assessment</li>
                                    <li>Battalion integration planning</li>
                                    <li>Functional area coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Planning Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Operational timeline coordination</li>
                                    <li>Specialized resource allocation</li>
                                    <li>Risk assessment frameworks</li>
                                    <li>Capability gap mitigation</li>
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
                                UNCLASSIFIED - Regiment command relationships establish specialized authority and coordination mechanisms across battalions.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Operational Command Structure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Division command authority</li>
                                    <li>Battalion command integration</li>
                                    <li>Specialized unit coordination</li>
                                    <li>Supporting element liaison</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Functional Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Specialized capability coordination</li>
                                    <li>Cross-functional integration</li>
                                    <li>Technical expertise liaison</li>
                                    <li>Operational support coordination</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Regiment Mission Example - Operation ALLIED RESOLVE -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(16, 185, 129, 0.1); border-radius: 8px; border: 1px solid #10b981; border-left: 4px solid #10b981;">
                    <h4 style="color: #10b981; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-medal" style="margin-right: 8px;"></i>
                        Regiment Mission Statement Example
                    </h4>
                    <div style="background-color: #374151; padding: 16px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #10b981; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">3rd Cavalry Regiment Mission Statement - Operation ALLIED RESOLVE</h5>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0; font-style: italic; border-left: 3px solid #10b981; padding-left: 12px;">
                            "3rd Cavalry Regiment conducts reconnaissance and security operations across assigned
                            operational area in coordination with 1st, 2nd, and 3rd Squadrons to provide early
                            warning of Russian force movements, conduct economy of force operations, and enable
                            1st Armored Division's main effort."
                        </p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Task Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>WHO:</strong> 3rd CAV with 1st, 2nd, 3rd Squadrons</li>
                                <li><strong>WHAT:</strong> Reconnaissance and security operations</li>
                                <li><strong>WHERE:</strong> Assigned operational area</li>
                                <li><strong>WHEN:</strong> Continuous operations</li>
                                <li><strong>HOW:</strong> Squadron coordination and integration</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Provide early warning</li>
                                <li>Conduct economy of force operations</li>
                                <li>Enable division main effort</li>
                                <li>Support operational objectives</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Specialized Operational Framework -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(220, 38, 38, 0.1); border-radius: 8px; border: 1px solid #dc2626; border-left: 4px solid #dc2626;">
                    <h4 style="color: #f87171; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-cog" style="margin-right: 8px;"></i>
                        Specialized Operational Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Regiment-level operations require specialized functional expertise and multi-battalion coordination
                        to provide division-level capabilities across extended operational areas with sustained operations.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Functional Specialization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Cavalry reconnaissance operations</li>
                                <li>Artillery fires coordination</li>
                                <li>Aviation support integration</li>
                                <li>Engineer capability delivery</li>
                                <li>Logistics sustainment operations</li>
                                <li>Signal communications support</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Operational Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Division mission enablement</li>
                                <li>Brigade coordination support</li>
                                <li>Battalion capability integration</li>
                                <li>Cross-functional coordination</li>
                                <li>Specialized task organization</li>
                                <li>Operational area coverage</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Battalion Coordination Framework -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(22, 163, 74, 0.1); border-radius: 8px; border: 1px solid #16a34a; border-left: 4px solid #16a34a;">
                    <h4 style="color: #4ade80; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                        Battalion Coordination Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Regiment mission analysis must integrate multiple battalion capabilities to achieve specialized
                        operational objectives while maintaining unity of effort across extended operational areas.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Command Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Battalion mission alignment</li>
                                <li>Task organization flexibility</li>
                                <li>Command relationship clarity</li>
                                <li>Operational control mechanisms</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Capability Synchronization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Specialized function coordination</li>
                                <li>Resource allocation optimization</li>
                                <li>Timeline synchronization</li>
                                <li>Mutual support planning</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Operational Coordination</h5>
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
                        Regiment Level Mission Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Regiment-level mission analysis translates division tactical guidance into specialized operational objectives,
                        coordinating multiple battalions to deliver functional expertise while maintaining unity of effort
                        across extended operational areas with sustained specialized capabilities.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Multi-battalion operational areas with specialized functional focus</li>
                            <li><strong>Staff:</strong> 30+ specialized planners and coordination personnel</li>
                            <li><strong>Coordination:</strong> Division command, battalion headquarters, specialized functions</li>
                            <li><strong>Timeline:</strong> 2-5 days initial analysis, continuous operational updates</li>
                        </ul>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Operational Complexity Factors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Specialized functional requirements</li>
                                <li>Multi-battalion coordination</li>
                                <li>Extended operational area coverage</li>
                                <li>Division mission enablement</li>
                                <li>Sustained operations capability</li>
                                <li>Cross-functional integration</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Mission Analysis Products</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Specialized mission statement</li>
                                <li>Battalion coordination matrix</li>
                                <li>Functional capability assessment</li>
                                <li>Operational risk evaluation</li>
                                <li>Resource allocation plan</li>
                                <li>Coordination timeline</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};

