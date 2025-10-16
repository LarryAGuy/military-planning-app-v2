/**
 * OPORD Mission - Echelon Analysis - Theater Level
 * UNCLASSIFIED content for theater-level mission analysis frameworks
 * Follows FM 5-0 standards with comprehensive strategic mission development
 * Foundation module for all subordinate echelon mission analysis modules
 */

export const missionTheaterAnalysisModule = {
    id: 'theater-mission-analysis',
    title: 'Theater Level Mission Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Theater',

    getContent: function() {
        return `
            <!-- Theater Level Mission Analysis - Strategic Command Framework -->
            <div id="theater-mission-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-satellite" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        2. Mission Analysis - Theater Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Strategic Mission Development Framework per FM 5-0
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
                                UNCLASSIFIED - Theater-level mission statements provide strategic direction for multi-domain operations across continental regions.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Strategic Task Components</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Multi-domain operations coordination</li>
                                    <li>Coalition force integration</li>
                                    <li>Strategic deterrence objectives</li>
                                    <li>National security priorities</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Articulation</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Strategic end state definition</li>
                                    <li>National policy alignment</li>
                                    <li>Coalition unity of effort</li>
                                    <li>Regional stability objectives</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Strategic Context Analysis Card -->
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
                                <i class="fas fa-globe-americas" style="margin-right: 8px; color: #dc2626; font-size: 12px;"></i>
                                b. Strategic Context Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Theater missions must align with national strategy, coalition objectives, and regional security frameworks.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">National Level Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>National Defense Strategy alignment</li>
                                    <li>Presidential policy directives</li>
                                    <li>Congressional authorization limits</li>
                                    <li>Interagency coordination requirements</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Coalition Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>NATO Article 5 implications</li>
                                    <li>Bilateral defense agreements</li>
                                    <li>UN Security Council resolutions</li>
                                    <li>Regional security partnerships</li>
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
                                UNCLASSIFIED - Theater-level mission analysis requires comprehensive strategic assessment and multi-domain integration.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Analysis Framework</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Higher headquarters intent analysis</li>
                                    <li>Strategic environment assessment</li>
                                    <li>Coalition capability integration</li>
                                    <li>Multi-domain threat evaluation</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Planning Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Strategic timeline development</li>
                                    <li>Resource allocation priorities</li>
                                    <li>Risk assessment frameworks</li>
                                    <li>Contingency planning requirements</li>
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
                                UNCLASSIFIED - Theater command relationships establish strategic authority and coordination mechanisms across domains.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Strategic Command Structure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Combatant Command authority</li>
                                    <li>Component command integration</li>
                                    <li>Joint task force coordination</li>
                                    <li>Special operations liaison</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Coalition Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>NATO command structure</li>
                                    <li>Bilateral force integration</li>
                                    <li>Multinational coordination centers</li>
                                    <li>Partner nation liaison elements</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Theater Mission Example - Operation ALLIED RESOLVE -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(16, 185, 129, 0.1); border-radius: 8px; border: 1px solid #10b981; border-left: 4px solid #10b981;">
                    <h4 style="color: #10b981; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                        Theater Mission Statement Example
                    </h4>
                    <div style="background-color: #374151; padding: 16px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #10b981; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">USEUCOM Mission Statement - Operation ALLIED RESOLVE</h5>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0; font-style: italic; border-left: 3px solid #10b981; padding-left: 12px;">
                            "United States European Command conducts multi-domain operations across the European Theater
                            in coordination with NATO allies and partner nations to deter Russian aggression, strengthen
                            alliance cohesion, and maintain regional stability in support of U.S. national security objectives."
                        </p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Task Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>WHO:</strong> USEUCOM with NATO allies</li>
                                <li><strong>WHAT:</strong> Multi-domain operations</li>
                                <li><strong>WHERE:</strong> European Theater</li>
                                <li><strong>WHEN:</strong> Continuous operations</li>
                                <li><strong>HOW:</strong> Coalition coordination</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Deter Russian aggression</li>
                                <li>Strengthen alliance cohesion</li>
                                <li>Maintain regional stability</li>
                                <li>Support national security objectives</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Strategic Mission Development Framework -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(220, 38, 38, 0.1); border-radius: 8px; border: 1px solid #dc2626; border-left: 4px solid #dc2626;">
                    <h4 style="color: #f87171; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-chess-board" style="margin-right: 8px;"></i>
                        Strategic Mission Development Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Theater-level mission development requires comprehensive integration of national policy, strategic objectives,
                        and coalition requirements to establish unified strategic direction across all domains and echelons.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">National Strategic Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>National Defense Strategy implementation</li>
                                <li>Presidential Decision Directives compliance</li>
                                <li>National Security Council guidance</li>
                                <li>Congressional authorization frameworks</li>
                                <li>Interagency coordination protocols</li>
                                <li>Whole-of-government approach</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Coalition Strategic Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>NATO Strategic Concept alignment</li>
                                <li>Article 5 collective defense triggers</li>
                                <li>Bilateral defense treaty obligations</li>
                                <li>UN Charter compliance requirements</li>
                                <li>Regional security architecture</li>
                                <li>Partner nation capability integration</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Multi-Domain Operations Integration -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(22, 163, 74, 0.1); border-radius: 8px; border: 1px solid #16a34a; border-left: 4px solid #16a34a;">
                    <h4 style="color: #4ade80; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                        Multi-Domain Operations Integration
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Theater mission analysis must integrate capabilities and threats across all operational domains
                        to achieve strategic objectives through synchronized multi-domain effects and operations.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Physical Domains</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Land domain operations</li>
                                <li>Maritime domain control</li>
                                <li>Air domain superiority</li>
                                <li>Space domain integration</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Information Environment</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Cyberspace operations</li>
                                <li>Information operations</li>
                                <li>Electronic warfare</li>
                                <li>Strategic communications</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Cross-Domain Effects</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Synchronized operations</li>
                                <li>Convergence effects</li>
                                <li>Domain interdependencies</li>
                                <li>Strategic deterrence</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Mission Analysis Summary -->
                <div style="margin-top: 16px; padding: 16px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid #a855f7; border-left: 4px solid #a855f7;">
                    <h4 style="color: #c084fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                        Theater Level Mission Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Theater-level mission analysis represents the strategic foundation for all subordinate military operations,
                        requiring comprehensive integration of national policy, coalition objectives, and multi-domain capabilities
                        to achieve strategic end states with global implications and long-term regional stability.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Continental/global regions with multi-year strategic planning horizons</li>
                            <li><strong>Staff:</strong> 500+ specialized analysts, planners, and coordination personnel</li>
                            <li><strong>Coordination:</strong> National command authority, coalition partners, interagency elements</li>
                            <li><strong>Timeline:</strong> 30-90 days initial analysis, continuous strategic updates and assessments</li>
                        </ul>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Strategic Complexity Factors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Multi-national political considerations</li>
                                <li>Cross-domain threat integration</li>
                                <li>Long-term strategic implications</li>
                                <li>Global resource allocation</li>
                                <li>Coalition consensus building</li>
                                <li>Strategic communication requirements</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Mission Analysis Products</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Strategic mission statement</li>
                                <li>Commander's critical information requirements</li>
                                <li>Strategic risk assessment</li>
                                <li>Coalition coordination matrix</li>
                                <li>Multi-domain integration plan</li>
                                <li>Strategic communication strategy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};