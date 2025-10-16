/**
 * OPORD Sustainment - Corps Level Analysis
 * Echelon-specific sustainment analysis for corps operations
 * Pure doctrinal content from FM 5-0 and FM 4-0
 *
 * SPECIAL AUTHORIZATION: May exceed 300-line limit due to extensive strategic doctrinal content requirements
 */

export const corpsAnalysisModule = {
    id: 'sustainment-analysis-corps',
    title: 'Corps Level Sustainment Analysis',
    echelon: 'corps',

    getContent() {
        return `
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px;">
                <!-- Header Section -->
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <i class="fas fa-crown" style="color: #10b981; font-size: 20px; margin-right: 12px;"></i>
                    <h3 style="color: white; font-size: 18px; font-weight: 600; margin: 0;">
                        Corps Level Sustainment Analysis
                    </h3>
                </div>

                <!-- Doctrinal Context -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #dbeafe; margin: 0 0 8px 0;">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #60a5fa;"></i>
                        FM 5-0 Chapter 11: Corps Sustainment Doctrine
                    </h4>
                    <p style="color: #bfdbfe; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Doctrinal Foundation:</strong> Corps sustainment operations provide operational logistics support across multiple divisions and army integration per FM 5-0 and FM 4-0 standards.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Corps Sustainment Scope</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Geographic: Multi-division area of operations</li>
                                <li>Temporal: Operational planning horizons</li>
                                <li>Functional: Division sustainment coordination</li>
                                <li>Organizational: Army integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Operational Command Integration</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Army: Service component command</li>
                                <li>Corps: Operational command</li>
                                <li>Division: Tactical command</li>
                                <li>Brigade: Tactical execution</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Corps Sustainment Doctrinal Analysis Grid -->
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
                            a. Operational Sustainment Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps sustainment doctrine per FM 5-0 Chapter 11, establishing operational logistics principles for multi-division operations and army sustainment integration.
                        </p>

                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">FM 5-0 Corps Sustainment Principles</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Integration:</strong> Division and army coordination</li>
                                <li><strong>Anticipation:</strong> Operational planning horizons</li>
                                <li><strong>Responsiveness:</strong> Multi-division distribution</li>
                                <li><strong>Simplicity:</strong> Standardized division procedures</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">FM 4-0 Corps Sustainment Functions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Logistics:</strong> Division supply, transportation, maintenance</li>
                                <li><strong>Personnel Services:</strong> Corps HR, financial, legal</li>
                                <li><strong>Health Service Support:</strong> Corps medical operations</li>
                                <li><strong>Other Services:</strong> Corps religious, morale support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(59, 130, 246, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Corps Planning Considerations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Geographic:</strong> Multi-division distribution networks</li>
                                <li><strong>Temporal:</strong> Operational planning cycles</li>
                                <li><strong>Political:</strong> Army sustainment coordination</li>
                                <li><strong>Economic:</strong> Division resource allocation</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Army Integration Card -->
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
                            b. Army Integration
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps sustainment integration doctrine per FM 5-0, managing army sustainment coordination and multi-division logistics operations.
                        </p>

                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Corps Operational Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps:</strong> Operational command authority</li>
                                <li><strong>Army Integration:</strong> ASCC coordination</li>
                                <li><strong>Joint Operations:</strong> Multi-service support</li>
                                <li><strong>Coalition Support:</strong> Multi-national integration</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(20, 83, 45, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Division Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Multi-Division:</strong> 3 division sustainment coordination</li>
                                <li><strong>Resource Allocation:</strong> Division priority management</li>
                                <li><strong>Distribution Management:</strong> Division network coordination</li>
                                <li><strong>Support Relationships:</strong> Division sustainment command</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(34, 197, 94, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Corps Sustainment Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps G4:</strong> Corps logistics staff</li>
                                <li><strong>ESC:</strong> Expeditionary Sustainment Command</li>
                                <li><strong>SB:</strong> Sustainment Brigade</li>
                                <li><strong>CSSB:</strong> Combat Sustainment Support Battalion</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Corps Distribution Networks Card -->
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
                            c. Corps Distribution Networks
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps distribution doctrine per FM 4-0, establishing multi-division logistics networks and operational distribution infrastructure.
                        </p>

                        <div style="background-color: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Corps Distribution Doctrine</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps Hub:</strong> Army distribution integration</li>
                                <li><strong>Division Hubs:</strong> Tactical logistics centers</li>
                                <li><strong>Distribution Networks:</strong> Multi-division connectivity</li>
                                <li><strong>Distribution Nodes:</strong> Brigade distribution points</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Corps Transportation Infrastructure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps Aviation:</strong> Operational airlift assets</li>
                                <li><strong>Ground Transportation:</strong> Multi-division movement</li>
                                <li><strong>Logistics Support:</strong> Distribution operations</li>
                                <li><strong>Pipeline Systems:</strong> Division fuel/water distribution</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(220, 38, 38, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Corps Distribution Management</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>GCSS-Army:</strong> Corps logistics systems</li>
                                <li><strong>SARSS:</strong> Corps retail supply systems</li>
                                <li><strong>SAMS:</strong> Corps maintenance systems</li>
                                <li><strong>FBCB2:</strong> Force battle command systems</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Corps Planning Processes Card -->
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
                            d. Corps Planning Processes
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps-level sustainment planning doctrine per FM 5-0, establishing operational planning horizons and coordination mechanisms for multi-division operations.
                        </p>

                        <div style="background-color: rgba(147, 51, 234, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Corps Planning Horizons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Long-term (3-12 months):</strong> Corps strategic planning</li>
                                <li><strong>Mid-term (1-3 months):</strong> Campaign planning</li>
                                <li><strong>Short-term (14-30 days):</strong> Operational planning</li>
                                <li><strong>Immediate (0-14 days):</strong> Division coordination</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(76, 29, 149, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Corps Planning Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Army Planning:</strong> ASCC integration</li>
                                <li><strong>Joint Planning:</strong> Multi-service coordination</li>
                                <li><strong>Division Planning:</strong> Tactical integration</li>
                                <li><strong>Coalition Planning:</strong> Multi-national support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(124, 58, 237, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Corps Planning Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>CPOF:</strong> Command Post of the Future</li>
                                <li><strong>GCCS-A:</strong> Global Command and Control System</li>
                                <li><strong>AESIP:</strong> Army Enterprise Systems Integration</li>
                                <li><strong>FBCB2:</strong> Force Battle Command</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Corps Sustainment Command Structure -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        Corps Sustainment Command Structure (FM 5-0)
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Corps Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Corps G4</li>
                                <li>ESC</li>
                                <li>SB</li>
                                <li>CSSB</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Division Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>1st ID</li>
                                <li>3rd ID</li>
                                <li>4th ID</li>
                                <li>DISCOM</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Support Organizations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>MEDCOM</li>
                                <li>CSSB</li>
                                <li>MAINT BN</li>
                                <li>TRANS BN</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Corps Sustainment Doctrine Framework -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Corps Sustainment Doctrine Framework
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="color: #fca5a5; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">FM 5-0 Corps Sustainment Tenets</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Integration across division domains</li>
                                    <li>Anticipation of division requirements</li>
                                    <li>Responsiveness to tactical conditions</li>
                                    <li>Simplicity in division execution</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">FM 4-0 Corps Sustainment Imperatives</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Build division logistics networks</li>
                                    <li>Deliver division logistics support</li>
                                    <li>Provide division logistics information</li>
                                    <li>Adapt to tactical conditions</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Corps Sustainment Characteristics</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Continuity across division operations</li>
                                    <li>Survivability in tactical environments</li>
                                    <li>Economy of division resources</li>
                                    <li>Flexibility in division requirements</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Corps Sustainment Enablers</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Tactical mobility capabilities</li>
                                    <li>Division distribution infrastructure</li>
                                    <li>Army sustainment integration</li>
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
                        UNCLASSIFIED - Corps Level Sustainment Doctrine per FM 5-0 Chapter 11 and FM 4-0 Standards
                    </p>
                </div>
            </div>
        `;
    },

    initialize() {
        return true;
    }
};
