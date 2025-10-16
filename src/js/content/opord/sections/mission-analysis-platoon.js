/**
 * OPORD Mission - Echelon Analysis - Platoon Level
 * UNCLASSIFIED content for platoon-level mission analysis frameworks
 * Follows FM 5-0 standards with comprehensive tactical mission development
 * Small unit tactical execution with squad coordination
 */

export const missionPlatoonAnalysisModule = {
    id: 'platoon-mission-analysis',
    title: 'Platoon Level Mission Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Platoon',

    getContent: function() {
        return `
            <!-- Platoon Level Mission Analysis - Small Unit Tactical Framework -->
            <div id="platoon-mission-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-users" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        2. Mission Analysis - Platoon Level
                    </h3>
                    <p style="color: #c084fc; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Small Unit Tactical Mission Framework per FM 5-0
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
                                UNCLASSIFIED - Platoon-level mission statements translate company tactical intent into squad objectives for immediate tactical execution.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Small Unit Task Components</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Multi-squad tactical coordination</li>
                                    <li>Direct action execution</li>
                                    <li>Immediate tactical control</li>
                                    <li>Company mission support</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Articulation</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Immediate tactical end state</li>
                                    <li>Company commander's intent</li>
                                    <li>Squad unity of effort</li>
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
                                UNCLASSIFIED - Platoon missions must align with company operations while executing immediate tactical actions at squad level.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Company Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Company commander's intent analysis</li>
                                    <li>Immediate tactical requirements</li>
                                    <li>Adjacent platoon coordination</li>
                                    <li>Supporting element integration</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #dc2626; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Immediate Environment</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Enemy squad-level threats</li>
                                    <li>Immediate terrain features</li>
                                    <li>Weather impact on movement</li>
                                    <li>Immediate civil considerations</li>
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
                                UNCLASSIFIED - Platoon-level mission analysis requires immediate tactical design and squad integration planning.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Analysis Framework</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Company guidance analysis</li>
                                    <li>Immediate tactical assessment</li>
                                    <li>Squad capability integration</li>
                                    <li>Direct action coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #16a34a; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Planning Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Immediate tactical timeline</li>
                                    <li>Squad resource allocation</li>
                                    <li>Immediate risk assessment</li>
                                    <li>Squad coordination planning</li>
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
                                UNCLASSIFIED - Platoon command relationships establish immediate tactical authority and coordination mechanisms across squads.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Small Unit Command Structure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Company command authority</li>
                                    <li>Squad command integration</li>
                                    <li>Team task organization</li>
                                    <li>Individual soldier coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                                <h5 style="color: #f59e0b; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Immediate Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Direct fire coordination</li>
                                    <li>Immediate maneuver support</li>
                                    <li>Direct logistics coordination</li>
                                    <li>Immediate medical support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Platoon Mission Example - Operation ALLIED RESOLVE -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(16, 185, 129, 0.1); border-radius: 8px; border: 1px solid #10b981; border-left: 4px solid #10b981;">
                    <h4 style="color: #10b981; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-users" style="margin-right: 8px;"></i>
                        Platoon Mission Statement Example
                    </h4>
                    <div style="background-color: #374151; padding: 16px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #10b981; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">1st Platoon, Alpha Company Mission Statement - Operation ALLIED RESOLVE</h5>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0; font-style: italic; border-left: 3px solid #10b981; padding-left: 12px;">
                            "1st Platoon conducts direct action in assigned area of operations in coordination
                            with 1st, 2nd, and 3rd Squads to destroy Russian squad in Building 27, secure
                            the ground floor, and establish security positions to support company follow-on
                            operations."
                        </p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Task Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>WHO:</strong> 1st Platoon with 1st, 2nd, 3rd Squads</li>
                                <li><strong>WHAT:</strong> Direct action</li>
                                <li><strong>WHERE:</strong> Assigned area of operations</li>
                                <li><strong>WHEN:</strong> Immediate tactical timeline</li>
                                <li><strong>HOW:</strong> Squad coordination and integration</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #10b981; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Purpose Analysis</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Destroy Russian squad</li>
                                <li>Secure ground floor</li>
                                <li>Establish security positions</li>
                                <li>Support company follow-on operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Small Unit Tactical Framework -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(220, 38, 38, 0.1); border-radius: 8px; border: 1px solid #dc2626; border-left: 4px solid #dc2626;">
                    <h4 style="color: #f87171; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-crosshairs" style="margin-right: 8px;"></i>
                        Small Unit Tactical Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Platoon-level operations require immediate tactical coordination across multiple squads
                        to achieve direct tactical objectives through synchronized small unit actions and direct fire.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Small Unit Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Squad maneuver coordination</li>
                                <li>Direct fire integration</li>
                                <li>Immediate tactical support</li>
                                <li>Team-level coordination</li>
                                <li>Individual soldier control</li>
                                <li>Immediate medical support</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #f87171; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Squad Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Squad mission synchronization</li>
                                <li>Immediate tactical control</li>
                                <li>Direct mutual support</li>
                                <li>Immediate fire coordination</li>
                                <li>Direct casualty evacuation</li>
                                <li>Immediate resupply</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Squad Integration Framework -->
                <div style="margin-top: 20px; padding: 16px; background-color: rgba(22, 163, 74, 0.1); border-radius: 8px; border: 1px solid #16a34a; border-left: 4px solid #16a34a;">
                    <h4 style="color: #4ade80; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                        Squad Integration Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 16px 0;">
                        Platoon mission analysis must integrate multiple squad capabilities to achieve immediate tactical
                        objectives while maintaining unity of effort across the immediate tactical area.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Command Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Squad mission alignment</li>
                                <li>Immediate tactical organization</li>
                                <li>Direct command relationships</li>
                                <li>Immediate control measures</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Capability Synchronization</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Immediate tactical coordination</li>
                                <li>Squad resource optimization</li>
                                <li>Direct timeline synchronization</li>
                                <li>Immediate mutual support</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #4ade80; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Tactical Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Immediate control measures</li>
                                <li>Direct communication</li>
                                <li>Immediate logistics</li>
                                <li>Direct risk mitigation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Mission Analysis Summary -->
                <div style="margin-top: 16px; padding: 16px; background-color: rgba(168, 85, 247, 0.1); border-radius: 8px; border: 1px solid #a855f7; border-left: 4px solid #a855f7;">
                    <h4 style="color: #c084fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                        Platoon Level Mission Analysis Summary
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.5; margin: 0 0 12px 0;">
                        Platoon-level mission analysis translates company tactical guidance into immediate tactical objectives,
                        coordinating multiple squads to achieve direct tactical end states while maintaining unity of effort
                        across small unit tactical operations with direct fire and maneuver at squad level.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                        <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Key Characteristics</h5>
                        <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                            <li><strong>Scope:</strong> Multi-squad tactical areas with immediate tactical focus</li>
                            <li><strong>Staff:</strong> 2-3 specialized leaders and coordination personnel</li>
                            <li><strong>Coordination:</strong> Company command, squad leaders, immediate tactical elements</li>
                            <li><strong>Timeline:</strong> 2-6 hours initial analysis, continuous immediate updates</li>
                        </ul>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Small Unit Complexity Factors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Multi-squad coordination</li>
                                <li>Immediate tactical integration</li>
                                <li>Direct tactical control</li>
                                <li>Company mission support</li>
                                <li>Direct action execution</li>
                                <li>Immediate tactical response</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px;">
                            <h5 style="color: #c084fc; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Mission Analysis Products</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Immediate tactical mission statement</li>
                                <li>Squad coordination matrix</li>
                                <li>Small unit capability assessment</li>
                                <li>Immediate tactical risk evaluation</li>
                                <li>Squad resource allocation plan</li>
                                <li>Immediate coordination timeline</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};

