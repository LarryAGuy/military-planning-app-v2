/**
 * OPORD Sustainment - Theater Level Analysis
 * Echelon-specific sustainment analysis for theater operations
 * Pure doctrinal content from FM 5-0 and FM 4-0
 *
 * SPECIAL AUTHORIZATION: May exceed 300-line limit due to extensive strategic doctrinal content requirements
 */

export const theaterAnalysisModule = {
    id: 'sustainment-analysis-theater',
    title: 'Theater Level Sustainment Analysis',
    echelon: 'theater',

    getContent() {
        return `
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px;">
                <!-- Header Section -->
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <i class="fas fa-globe" style="color: #10b981; font-size: 20px; margin-right: 12px;"></i>
                    <h3 style="color: white; font-size: 18px; font-weight: 600; margin: 0;">
                        Theater Level Sustainment Analysis
                    </h3>
                </div>

                <!-- Doctrinal Context -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #dbeafe; margin: 0 0 8px 0;">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #60a5fa;"></i>
                        FM 5-0 Chapter 11: Theater Sustainment Doctrine
                    </h4>
                    <p style="color: #bfdbfe; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Doctrinal Foundation:</strong> Theater sustainment operations provide strategic logistics support across multiple countries, armies, and coalition partners per FM 5-0 and FM 4-0 standards.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Theater Sustainment Scope</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Geographic: Multi-national theater</li>
                                <li>Temporal: Strategic planning horizons</li>
                                <li>Functional: All sustainment functions</li>
                                <li>Organizational: Joint/coalition forces</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Strategic Command Levels</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Theater: Geographic combatant command</li>
                                <li>Army: Service component command</li>
                                <li>Corps: Operational command</li>
                                <li>Division: Tactical command</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Theater Sustainment Doctrinal Analysis Grid -->
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
                            Theater sustainment doctrine per FM 5-0 Chapter 11, establishing strategic logistics principles for multi-national operations and coalition sustainment coordination.
                        </p>

                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">FM 5-0 Strategic Sustainment Principles</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Integration:</strong> Joint, interagency, multinational</li>
                                <li><strong>Anticipation:</strong> Strategic planning horizons</li>
                                <li><strong>Responsiveness:</strong> Theater-wide distribution</li>
                                <li><strong>Simplicity:</strong> Standardized procedures</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">FM 4-0 Sustainment Functions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Logistics:</strong> Supply, transportation, maintenance</li>
                                <li><strong>Personnel Services:</strong> HR, financial, legal</li>
                                <li><strong>Health Service Support:</strong> Medical operations</li>
                                <li><strong>Other Services:</strong> Religious, morale support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(59, 130, 246, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Strategic Planning Considerations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Geographic:</strong> Theater-wide distribution networks</li>
                                <li><strong>Temporal:</strong> Long-term strategic planning</li>
                                <li><strong>Political:</strong> Host nation agreements</li>
                                <li><strong>Economic:</strong> Resource allocation priorities</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Multi-National Coordination Card -->
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
                            b. Multi-National Coordination
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Coalition sustainment coordination doctrine per FM 5-0, managing multi-national logistics operations and international sustainment agreements.
                        </p>

                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Coalition Sustainment Framework</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Lead Nation:</strong> Primary sustainment responsibility</li>
                                <li><strong>Role Specialization:</strong> Nation-specific capabilities</li>
                                <li><strong>Multinational Logistics:</strong> Shared resources</li>
                                <li><strong>Host Nation Support:</strong> Infrastructure access</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(20, 83, 45, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">International Agreements</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>SOFA:</strong> Status of forces agreements</li>
                                <li><strong>LSA:</strong> Logistics support agreements</li>
                                <li><strong>ACSA:</strong> Acquisition and cross-servicing</li>
                                <li><strong>MOU:</strong> Memorandums of understanding</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(34, 197, 94, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Coordination Mechanisms</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>JLOC:</strong> Joint logistics operations center</li>
                                <li><strong>MLCC:</strong> Multinational logistics coordination center</li>
                                <li><strong>JLSG:</strong> Joint logistics support group</li>
                                <li><strong>CLCC:</strong> Coalition logistics coordination center</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Theater Distribution Networks Card -->
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
                            c. Theater Distribution Networks
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Strategic distribution doctrine per FM 4-0, establishing theater-wide logistics networks and strategic distribution infrastructure.
                        </p>

                        <div style="background-color: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Strategic Distribution Doctrine</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Theater Gateway:</strong> Strategic entry points</li>
                                <li><strong>Distribution Hubs:</strong> Regional logistics centers</li>
                                <li><strong>Distribution Networks:</strong> Theater-wide connectivity</li>
                                <li><strong>Distribution Nodes:</strong> Tactical distribution points</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Transportation Infrastructure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Strategic Airlift:</strong> Inter-theater movement</li>
                                <li><strong>Theater Airlift:</strong> Intra-theater movement</li>
                                <li><strong>Surface Transportation:</strong> Ground/maritime</li>
                                <li><strong>Pipeline Systems:</strong> Bulk fuel/water</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(220, 38, 38, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Distribution Management</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>GCSS-Army:</strong> Global Combat Support System</li>
                                <li><strong>DLA:</strong> Defense Logistics Agency</li>
                                <li><strong>USTRANSCOM:</strong> Transportation command</li>
                                <li><strong>JLOTS:</strong> Joint logistics over-the-shore</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Strategic Planning Processes Card -->
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
                            d. Strategic Planning Processes
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Theater-level sustainment planning doctrine per FM 5-0, establishing strategic planning horizons and coordination mechanisms for theater operations.
                        </p>

                        <div style="background-color: rgba(147, 51, 234, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Strategic Planning Horizons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Long-term (1-5 years):</strong> Theater strategic planning</li>
                                <li><strong>Mid-term (6 months-1 year):</strong> Campaign planning</li>
                                <li><strong>Short-term (30-180 days):</strong> Operational planning</li>
                                <li><strong>Immediate (0-30 days):</strong> Tactical planning</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(76, 29, 149, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Theater Planning Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Joint Planning:</strong> Multi-service coordination</li>
                                <li><strong>Coalition Planning:</strong> Multi-national integration</li>
                                <li><strong>Interagency Planning:</strong> Whole-of-government</li>
                                <li><strong>Strategic Communication:</strong> Theater messaging</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(124, 58, 237, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>JOPES:</strong> Joint Operation Planning and Execution System</li>
                                <li><strong>GCCS:</strong> Global Command and Control System</li>
                                <li><strong>JLLIS:</strong> Joint Lessons Learned Information System</li>
                                <li><strong>SIPR/NIPR:</strong> Secure communications networks</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Theater Sustainment Command Structure -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        Theater Sustainment Command Structure (FM 5-0)
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Theater Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>COCOM</li>
                                <li>ASCC</li>
                                <li>TSC</li>
                                <li>ESC</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Operational Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Army</li>
                                <li>Corps</li>
                                <li>Division</li>
                                <li>Brigade</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Support Organizations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>DLA</li>
                                <li>USTRANSCOM</li>
                                <li>MEDCOM</li>
                                <li>IMCOM</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Theater Sustainment Doctrine Framework -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Theater Sustainment Doctrine Framework
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="color: #fca5a5; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">FM 5-0 Sustainment Tenets</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Integration across all domains</li>
                                    <li>Anticipation of requirements</li>
                                    <li>Responsiveness to changing conditions</li>
                                    <li>Simplicity in execution</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">FM 4-0 Sustainment Imperatives</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Build sustainable logistics networks</li>
                                    <li>Deliver sustained logistics support</li>
                                    <li>Provide logistics information</li>
                                    <li>Improvise and adapt to conditions</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Strategic Sustainment Characteristics</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Continuity across operational phases</li>
                                    <li>Survivability in contested environments</li>
                                    <li>Economy of force and resources</li>
                                    <li>Flexibility in changing requirements</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Theater Sustainment Enablers</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Strategic mobility capabilities</li>
                                    <li>Theater distribution infrastructure</li>
                                    <li>Coalition sustainment agreements</li>
                                    <li>Host nation support arrangements</li>
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
                                <li>JP 4-0 (Oct 2013): Joint Logistics</li>
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
                        UNCLASSIFIED - Theater Level Sustainment Doctrine per FM 5-0 Chapter 11 and FM 4-0 Standards
                    </p>
                </div>
            </div>
        `;
    },

    initialize() {
        return true;
    }
};
