/**
 * OPORD Sustainment - Platoon Level Analysis
 * Echelon-specific sustainment analysis for platoon operations
 * Pure doctrinal content from FM 5-0 and FM 4-0
 *
 * SPECIAL AUTHORIZATION: May exceed 300-line limit due to extensive tactical doctrinal content requirements
 */

export const platoonAnalysisModule = {
    id: 'sustainment-analysis-platoon',
    title: 'Platoon Level Sustainment Analysis',
    echelon: 'platoon',

    getContent() {
        return `
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px;">
                <!-- Header Section -->
                <div style="display: flex; align-items: center; margin-bottom: 20px;">
                    <i class="fas fa-users" style="color: #10b981; font-size: 20px; margin-right: 12px;"></i>
                    <h3 style="color: white; font-size: 18px; font-weight: 600; margin: 0;">
                        Platoon Level Sustainment Analysis
                    </h3>
                </div>

                <!-- Doctrinal Context -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #dbeafe; margin: 0 0 8px 0;">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #60a5fa;"></i>
                        FM 5-0 Chapter 11: Platoon Sustainment Doctrine
                    </h4>
                    <p style="color: #bfdbfe; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Doctrinal Foundation:</strong> Platoon sustainment operations provide ground-level tactical logistics support across multiple squads and company integration per FM 5-0 and FM 4-0 standards.
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Platoon Sustainment Scope</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Geographic: Multi-squad area of operations</li>
                                <li>Temporal: Ground-level tactical planning horizons</li>
                                <li>Functional: Squad sustainment coordination</li>
                                <li>Organizational: Company integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Ground-Level Tactical Command Integration</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Company: Direct tactical execution</li>
                                <li>Platoon: Ground-level tactical execution</li>
                                <li>Squad: Direct ground execution</li>
                                <li>Team: Individual ground execution</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Platoon Sustainment Doctrinal Analysis Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Ground-Level Tactical Sustainment Doctrine Card -->
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
                            <i class="fas fa-users" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                            a. Ground-Level Tactical Sustainment Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Platoon sustainment doctrine per FM 5-0 Chapter 11, establishing ground-level tactical logistics principles for multi-squad operations and company sustainment integration.
                        </p>

                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">FM 5-0 Platoon Sustainment Principles</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Integration:</strong> Squad and company coordination</li>
                                <li><strong>Anticipation:</strong> Ground-level tactical planning horizons</li>
                                <li><strong>Responsiveness:</strong> Multi-squad distribution</li>
                                <li><strong>Simplicity:</strong> Standardized squad procedures</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">FM 4-0 Platoon Sustainment Functions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Logistics:</strong> Squad supply, transportation, maintenance</li>
                                <li><strong>Personnel Services:</strong> Platoon HR, financial, legal</li>
                                <li><strong>Health Service Support:</strong> Platoon medical operations</li>
                                <li><strong>Other Services:</strong> Platoon religious, morale support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(59, 130, 246, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Platoon Planning Considerations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Geographic:</strong> Multi-squad distribution networks</li>
                                <li><strong>Temporal:</strong> Ground-level tactical planning cycles</li>
                                <li><strong>Political:</strong> Company sustainment coordination</li>
                                <li><strong>Economic:</strong> Squad resource allocation</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Company Integration Card -->
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
                            b. Company Integration
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Platoon sustainment integration doctrine per FM 5-0, managing company sustainment coordination and multi-squad logistics operations.
                        </p>

                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Platoon Ground-Level Tactical Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon:</strong> Ground-level tactical command authority</li>
                                <li><strong>Company Integration:</strong> Direct tactical coordination</li>
                                <li><strong>Joint Operations:</strong> Multi-service ground-level tactical support</li>
                                <li><strong>Coalition Support:</strong> Multi-national ground-level tactical integration</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(20, 83, 45, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Squad Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Multi-Squad:</strong> 3-4 squad sustainment coordination</li>
                                <li><strong>Resource Allocation:</strong> Squad priority management</li>
                                <li><strong>Distribution Management:</strong> Squad network coordination</li>
                                <li><strong>Support Relationships:</strong> Squad sustainment command</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(34, 197, 94, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Platoon Sustainment Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon SGT:</strong> Platoon logistics NCO</li>
                                <li><strong>Squad Leaders:</strong> Squad sustainment coordination</li>
                                <li><strong>RTO:</strong> Platoon communications</li>
                                <li><strong>Medic:</strong> Platoon medical operations</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Platoon Distribution Networks Card -->
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
                            c. Platoon Distribution Networks
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Platoon distribution doctrine per FM 4-0, establishing multi-squad logistics networks and ground-level tactical distribution infrastructure.
                        </p>

                        <div style="background-color: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Platoon Distribution Doctrine</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon Hub:</strong> Company distribution integration</li>
                                <li><strong>Squad Hubs:</strong> Ground-level tactical logistics centers</li>
                                <li><strong>Distribution Networks:</strong> Multi-squad connectivity</li>
                                <li><strong>Distribution Nodes:</strong> Team distribution points</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Platoon Transportation Infrastructure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon Transportation:</strong> Ground-level tactical assets</li>
                                <li><strong>Ground Transportation:</strong> Multi-squad movement</li>
                                <li><strong>Logistics Support:</strong> Ground-level tactical distribution operations</li>
                                <li><strong>Supply Systems:</strong> Squad fuel/water distribution</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(220, 38, 38, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Platoon Distribution Management</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>FBCB2:</strong> Platoon battle command systems</li>
                                <li><strong>SARSS:</strong> Platoon retail supply systems</li>
                                <li><strong>SAMS:</strong> Platoon maintenance systems</li>
                                <li><strong>BCS3:</strong> Platoon sustainment systems</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Platoon Planning Processes Card -->
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
                            d. Platoon Planning Processes
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Platoon-level sustainment planning doctrine per FM 5-0, establishing ground-level tactical planning horizons and coordination mechanisms for multi-squad operations.
                        </p>

                        <div style="background-color: rgba(147, 51, 234, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Platoon Planning Horizons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Long-term (3-7 days):</strong> Platoon tactical planning</li>
                                <li><strong>Mid-term (1-3 days):</strong> Ground-level tactical execution planning</li>
                                <li><strong>Short-term (6-24 hours):</strong> Tactical planning</li>
                                <li><strong>Immediate (0-6 hours):</strong> Squad coordination</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(76, 29, 149, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Platoon Planning Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Company Planning:</strong> Direct tactical integration</li>
                                <li><strong>Joint Planning:</strong> Multi-service ground-level tactical coordination</li>
                                <li><strong>Squad Planning:</strong> Ground-level tactical execution</li>
                                <li><strong>Coalition Planning:</strong> Multi-national ground-level tactical support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(124, 58, 237, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Platoon Planning Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>FBCB2:</strong> Force Battle Command</li>
                                <li><strong>BCS3:</strong> Battle Command Sustainment Support System</li>
                                <li><strong>CPOF:</strong> Command Post of the Future</li>
                                <li><strong>AESIP:</strong> Army Enterprise Systems Integration</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Platoon Sustainment Command Structure -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        Platoon Sustainment Command Structure (FM 5-0)
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Platoon Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Platoon SGT</li>
                                <li>Squad Leaders</li>
                                <li>RTO</li>
                                <li>Medic</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Squad Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>1st SQD</li>
                                <li>2nd SQD</li>
                                <li>3rd SQD</li>
                                <li>WPN SQD</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Support Organizations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>FSC</li>
                                <li>UMCP</li>
                                <li>MAINT TEAM</li>
                                <li>TRANS TEAM</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Platoon Sustainment Doctrine Framework -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Platoon Sustainment Doctrine Framework
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="color: #fca5a5; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">FM 5-0 Platoon Sustainment Tenets</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Integration across squad domains</li>
                                    <li>Anticipation of squad requirements</li>
                                    <li>Responsiveness to tactical conditions</li>
                                    <li>Simplicity in squad execution</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">FM 4-0 Platoon Sustainment Imperatives</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Build squad logistics networks</li>
                                    <li>Deliver squad logistics support</li>
                                    <li>Provide squad logistics information</li>
                                    <li>Adapt to tactical conditions</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Platoon Sustainment Characteristics</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Continuity across squad operations</li>
                                    <li>Survivability in tactical environments</li>
                                    <li>Economy of squad resources</li>
                                    <li>Flexibility in squad requirements</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Platoon Sustainment Enablers</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Ground-level tactical mobility capabilities</li>
                                    <li>Squad distribution infrastructure</li>
                                    <li>Company sustainment integration</li>
                                    <li>Joint ground-level tactical coordination</li>
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
                                <li>ATP 3-21.8 (Apr 2016): Infantry Platoon</li>
                                <li>ADP 3-0 (Jul 2019): Operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Supporting Publications</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>ATP 4-90: Brigade Support Battalion</li>
                                <li>ATP 4-32: Explosive Ordnance Disposal</li>
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
                        UNCLASSIFIED - Platoon Level Sustainment Doctrine per FM 5-0 Chapter 11 and FM 4-0 Standards
                    </p>
                </div>
            </div>
        `;
    },

    initialize() {
        return true;
    }
};
