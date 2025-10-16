/**
 * OPORD Sustainment - Army Level Analysis
 * Echelon-specific sustainment analysis for army operations
 * Pure doctrinal content from FM 5-0 and FM 4-0
 *
 * SPECIAL AUTHORIZATION: May exceed 300-line limit due to extensive strategic doctrinal content requirements
 */

export const armyAnalysisModule = {
    id: 'sustainment-analysis-army',
    title: 'Army Level Sustainment Analysis',
    echelon: 'army',

    getContent() {
        return `
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px;">
                <!-- Header Section -->
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <i class="fas fa-star" style="color: #10b981; font-size: 20px; margin-right: 12px;"></i>
                    <h3 style="color: white; font-size: 18px; font-weight: 600; margin: 0;">
                        Army Level Sustainment Analysis
                    </h3>
                </div>

                <!-- Doctrinal Context -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #dbeafe; margin: 0 0 8px 0;">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #60a5fa;"></i>
                        FM 5-0 Chapter 11: Army Sustainment Doctrine
                    </h4>
                    <p style="color: #bfdbfe; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Doctrinal Foundation:</strong> Army sustainment operations provide operational logistics support across multiple corps and theater integration per FM 5-0 and FM 4-0 standards.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Army Sustainment Scope</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Geographic: Multi-corps area of operations</li>
                                <li>Temporal: Operational planning horizons</li>
                                <li>Functional: Corps sustainment coordination</li>
                                <li>Organizational: Joint/coalition integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Strategic Command Integration</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Theater: Geographic combatant command</li>
                                <li>Army: Service component command</li>
                                <li>Corps: Operational command</li>
                                <li>Division: Tactical command</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Army Sustainment Doctrinal Analysis Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Strategic Sustainment Doctrine Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 320px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-chess-king" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                            a. Strategic Sustainment Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army sustainment doctrine per FM 5-0 Chapter 11, establishing operational logistics principles for multi-corps operations and theater sustainment integration.
                        </p>

                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">FM 5-0 Army Sustainment Principles</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Integration:</strong> Corps and theater coordination</li>
                                <li><strong>Anticipation:</strong> Operational planning horizons</li>
                                <li><strong>Responsiveness:</strong> Multi-corps distribution</li>
                                <li><strong>Simplicity:</strong> Standardized corps procedures</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">FM 4-0 Army Sustainment Functions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Logistics:</strong> Corps supply, transportation, maintenance</li>
                                <li><strong>Personnel Services:</strong> Army HR, financial, legal</li>
                                <li><strong>Health Service Support:</strong> Army medical operations</li>
                                <li><strong>Other Services:</strong> Army religious, morale support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(59, 130, 246, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Army Planning Considerations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Geographic:</strong> Multi-corps distribution networks</li>
                                <li><strong>Temporal:</strong> Operational planning cycles</li>
                                <li><strong>Political:</strong> Theater sustainment agreements</li>
                                <li><strong>Economic:</strong> Corps resource allocation</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Theater Integration Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 320px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-handshake" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                            b. Theater Integration
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army sustainment integration doctrine per FM 5-0, managing theater sustainment coordination and multi-corps logistics operations.
                        </p>

                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Army Service Component Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>ASCC:</strong> Army Service Component Command</li>
                                <li><strong>Theater Integration:</strong> COCOM coordination</li>
                                <li><strong>Joint Operations:</strong> Multi-service integration</li>
                                <li><strong>Coalition Support:</strong> Multi-national coordination</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(20, 83, 45, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Corps Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Multi-Corps:</strong> 3 corps sustainment coordination</li>
                                <li><strong>Resource Allocation:</strong> Corps priority management</li>
                                <li><strong>Distribution Management:</strong> Corps network coordination</li>
                                <li><strong>Support Relationships:</strong> Corps sustainment command</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(34, 197, 94, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Army Sustainment Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>ASC:</strong> Army Sustainment Command</li>
                                <li><strong>TSC:</strong> Theater Sustainment Command</li>
                                <li><strong>ESC:</strong> Expeditionary Sustainment Command</li>
                                <li><strong>SB:</strong> Sustainment Brigade coordination</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Army Distribution Networks Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 320px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-network-wired" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                            c. Army Distribution Networks
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army distribution doctrine per FM 4-0, establishing multi-corps logistics networks and operational distribution infrastructure.
                        </p>

                        <div style="background-color: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Army Distribution Doctrine</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Army Hub:</strong> Theater distribution integration</li>
                                <li><strong>Corps Hubs:</strong> Operational logistics centers</li>
                                <li><strong>Distribution Networks:</strong> Multi-corps connectivity</li>
                                <li><strong>Distribution Nodes:</strong> Division distribution points</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Army Transportation Infrastructure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Theater Airlift:</strong> Army aviation assets</li>
                                <li><strong>Ground Transportation:</strong> Multi-corps movement</li>
                                <li><strong>Maritime Support:</strong> Port operations</li>
                                <li><strong>Pipeline Systems:</strong> Corps fuel/water distribution</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(220, 38, 38, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Army Distribution Management</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>GCSS-Army:</strong> Army logistics systems</li>
                                <li><strong>SARSS:</strong> Standard Army Retail Supply System</li>
                                <li><strong>SAMS:</strong> Standard Army Maintenance System</li>
                                <li><strong>LMP:</strong> Logistics Modernization Program</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Army Planning Processes Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 320px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #9333ea; font-size: 12px;"></i>
                            d. Army Planning Processes
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army-level sustainment planning doctrine per FM 5-0, establishing operational planning horizons and coordination mechanisms for multi-corps operations.
                        </p>

                        <div style="background-color: rgba(147, 51, 234, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Army Planning Horizons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Long-term (6 months-2 years):</strong> Army strategic planning</li>
                                <li><strong>Mid-term (3-6 months):</strong> Campaign planning</li>
                                <li><strong>Short-term (30-90 days):</strong> Operational planning</li>
                                <li><strong>Immediate (0-30 days):</strong> Corps coordination</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(76, 29, 149, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Army Planning Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Theater Planning:</strong> COCOM integration</li>
                                <li><strong>Joint Planning:</strong> Multi-service coordination</li>
                                <li><strong>Corps Planning:</strong> Operational integration</li>
                                <li><strong>Coalition Planning:</strong> Multi-national support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(124, 58, 237, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Army Planning Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>JOPES:</strong> Joint Operation Planning and Execution</li>
                                <li><strong>GCCS-A:</strong> Global Command and Control System</li>
                                <li><strong>AESIP:</strong> Army Enterprise Systems Integration</li>
                                <li><strong>CPOF:</strong> Command Post of the Future</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Army Sustainment Command Structure -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        Army Sustainment Command Structure (FM 5-0)
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Army Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>ASCC</li>
                                <li>ASC</li>
                                <li>TSC</li>
                                <li>ESC</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Corps Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>I Corps</li>
                                <li>III Corps</li>
                                <li>XVIII Corps</li>
                                <li>ESC</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Support Organizations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>MEDCOM</li>
                                <li>IMCOM</li>
                                <li>TRADOC</li>
                                <li>AMC</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Army Sustainment Doctrine Framework -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Army Sustainment Doctrine Framework
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="color: #fca5a5; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">FM 5-0 Army Sustainment Tenets</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Integration across corps domains</li>
                                    <li>Anticipation of corps requirements</li>
                                    <li>Responsiveness to operational conditions</li>
                                    <li>Simplicity in corps execution</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">FM 4-0 Army Sustainment Imperatives</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Build corps logistics networks</li>
                                    <li>Deliver corps logistics support</li>
                                    <li>Provide corps logistics information</li>
                                    <li>Adapt to operational conditions</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Army Sustainment Characteristics</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Continuity across corps operations</li>
                                    <li>Survivability in operational environments</li>
                                    <li>Economy of corps resources</li>
                                    <li>Flexibility in corps requirements</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Army Sustainment Enablers</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Operational mobility capabilities</li>
                                    <li>Corps distribution infrastructure</li>
                                    <li>Theater sustainment integration</li>
                                    <li>Joint sustainment coordination</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Doctrinal References -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 14px; font-weight: 600; color: #dbeafe; margin: 0 0 12px 0;">
                        <i class="fas fa-book" style="margin-right: 8px; color: #60a5fa;"></i>
                        Doctrinal Foundation
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Primary References</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>FM 5-0 (Nov 2024): The Operations Process</li>
                                <li>FM 4-0 (Jul 2019): Sustainment Operations</li>
                                <li>ATP 3-92 (Aug 2016): Corps Operations</li>
                                <li>ADP 3-0 (Jul 2019): Operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Supporting Publications</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>ATP 4-0.1: Army Theater Distribution</li>
                                <li>ATP 4-93: Sustainment Brigade</li>
                                <li>FM 4-95: Logistics Operations</li>
                                <li>ATP 4-0.6: Sustainment Planning</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #10b981;">
                    <p style="color: #6ee7b7; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Army Level Sustainment Doctrine per FM 5-0 Chapter 11 and FM 4-0 Standards
                    </p>
                </div>
            </div>
        `;
    },

    initialize() {
        return true;
    }
};
