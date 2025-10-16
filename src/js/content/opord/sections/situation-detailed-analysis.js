/**
 * OPORD Situation - Detailed Analysis Module
 * Contains all content and functionality for the "Detailed Analysis" collapsible section
 * Includes: Area of Interest, Enemy Forces, Environmental Considerations, Friendly Forces, Civil Considerations
 */

export const detailedAnalysisModule = {
    id: 'detailed-analysis',
    title: 'Detailed Analysis',
    defaultExpanded: true,
    
    getContent: function() {
        return `
            <!-- Detailed Analysis Section - Professional Military Layout -->
            <div id="detailed-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-search" style="margin-right: 8px; color: #60a5fa; font-size: 16px;"></i>
                        1. Situation - Detailed Analysis
                    </h3>
                </div>

                <!-- 2x2 Content Card Grid - Default Viewport Display -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                    min-height: calc(100vh - 300px);
                ">

                    <!-- Area of Interest Card -->
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
                                <i class="fas fa-map" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                                a. Area of Interest
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                AOI extends beyond AO to include areas where enemy forces can influence operations.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Key Areas</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Enemy approach/withdrawal routes</li>
                                    <li>Staging and assembly areas</li>
                                    <li>Support areas and logistics nodes</li>
                                    <li>Adjacent unit operational areas</li>
                                    <li>Critical infrastructure and facilities</li>
                                    <li>Population centers affecting operations</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(30, 58, 138, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Analysis Considerations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Named areas of interest (NAI) for collection</li>
                                    <li>Targeted areas of interest (TAI) for engagement</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Enemy Forces Card -->
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
                                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                                b. Enemy Forces
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                Analysis of enemy units, capabilities, and probable courses of action.
                            </p>
                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Composition & Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Unit ID, size, equipment</li>
                                    <li>Offensive/defensive capabilities</li>
                                    <li>Fire support and mobility assets</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f87171;">
                                <div style="font-size: 12px; line-height: 1.5;">
                                    <div style="margin-bottom: 4px;"><strong style="color: #fca5a5;">EMLCOA:</strong> <span style="color: #d1d5db;">Most likely course of action</span></div>
                                    <div><strong style="color: #fca5a5;">EMDCOA:</strong> <span style="color: #d1d5db;">Most dangerous course of action</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Environmental Considerations Card -->
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
                                <i class="fas fa-mountain" style="margin-right: 8px; color: #4ade80; font-size: 12px;"></i>
                                d. Environmental Considerations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                Terrain and weather analysis using OAKOC methodology.
                            </p>
                            <div style="background-color: rgba(20, 83, 45, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">OAKOC Analysis</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>O:</strong> Observation and fields of fire</li>
                                    <li><strong>A:</strong> Avenues of approach</li>
                                    <li><strong>K:</strong> Key and decisive terrain</li>
                                    <li><strong>O:</strong> Obstacles (natural/man-made)</li>
                                    <li><strong>C:</strong> Cover and concealment</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #4ade80;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Weather Impact</h5>
                                <div style="font-size: 12px; color: #d1d5db; line-height: 1.4;">Visibility, mobility, and operational effects</div>
                            </div>
                        </div>
                    </div>

                    <!-- Friendly Forces Card -->
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
                                <i class="fas fa-shield-alt" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                                c. Friendly Forces
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                Higher, adjacent, and supporting units affecting operations.
                            </p>
                            <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; border-left: 3px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Unit Relationships</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li><strong>Higher:</strong> Mission, intent, concept of operations</li>
                                    <li><strong>Adjacent:</strong> Boundaries, missions, coordination</li>
                                    <li><strong>Supporting:</strong> Fire support, engineers, logistics</li>
                                    <li><strong>Reinforcing:</strong> Reserve forces and capabilities</li>
                                    <li><strong>Attached:</strong> Units under operational control</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Coordination Requirements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Phase lines and control measures</li>
                                    <li>Communication and liaison procedures</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Content Cards (Below 2x2 Grid) -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
                    <!-- Civil Considerations Card -->
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
                                <i class="fas fa-users" style="margin-right: 8px; color: #facc15; font-size: 12px;"></i>
                                e. Civil Considerations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                Civilian factors affecting operations using ASCOPE methodology.
                            </p>
                            <div style="background-color: rgba(133, 77, 14, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #d97706; border-left: 3px solid #facc15; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 8px 0;">ASCOPE Analysis</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li><strong>A:</strong> Areas (population centers, cultural sites)</li>
                                    <li><strong>S:</strong> Structures (infrastructure, networks)</li>
                                    <li><strong>C:</strong> Capabilities (resources, facilities)</li>
                                    <li><strong>O:</strong> Organizations (government, NGOs)</li>
                                    <li><strong>P:</strong> People (leaders, demographics)</li>
                                    <li><strong>E:</strong> Events (activities, cultural events)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #facc15;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Operational Impact</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Rules of engagement considerations</li>
                                    <li>Civilian evacuation and protection measures</li>
                                    <li>Cultural and religious sensitivities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Intelligence Preparation Card -->
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
                                <i class="fas fa-search" style="margin-right: 8px; color: #a855f7; font-size: 12px;"></i>
                                f. Intelligence Preparation
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                Intelligence preparation of the battlefield (IPB) products and analysis supporting situational understanding.
                            </p>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">IPB Products</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Modified combined obstacle overlay (MCOO)</li>
                                    <li>Enemy situation template</li>
                                    <li>Enemy event template and matrix</li>
                                    <li>Decision support template</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Intelligence Gaps</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Priority intelligence requirements (PIR) and information requirements that need collection and analysis to support decision making.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Detailed Analysis module initialized');
        return true;
    }
};
