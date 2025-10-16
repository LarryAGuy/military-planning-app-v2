/**
 * Command & Control - Echelon Analysis - Company Level
 * Company Tactical Command & Control Doctrinal Analysis
 * A Company Tank Company tactical-level command and control doctrine
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (Jul 2019, C1 2023), FM 6-02 (Oct 2020)
 * Authorization: 300-line limit waived for tactical-level doctrinal content requirements
 */

export const c2CompanyAnalysisModule = {
    id: 'company-analysis',
    title: 'Company Level Echelon Analysis',
    classification: 'UNCLASSIFIED',

    getContent: function() {
        return `
            <!-- Company Level Echelon Analysis - Professional Military Layout -->
            <div id="company-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-user-friends" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        5. Command & Control - Company Level Echelon Analysis
                    </h3>
                    <p style="color: #c4b5fd; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Company Tactical Command & Control Doctrinal Analysis
                    </p>
                </div>

                <!-- Doctrinal Context -->
                <div style="background-color: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #8b5cf6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #c4b5fd; margin: 0 0 8px 0;">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #8b5cf6;"></i>
                        Company Tactical Command & Control Doctrinal Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Echelon:</strong> Company Tactical (Captain, O-3) | <strong>Planning Horizon:</strong> Hours | <strong>Scope:</strong> Tactical-level command
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Company Command Authority</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Tactical-level command authority</li>
                                <li>Platoon-level operational control</li>
                                <li>Battalion-level tactical integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Doctrinal Foundation</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>FM 5-0: Company operations process</li>
                                <li>FM 6-0: Company mission command</li>
                                <li>FM 6-02: Company signal operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Company Command & Control Doctrinal Analysis Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Company Command Structure Doctrine Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-sitemap" style="margin-right: 8px; color: #a855f7; font-size: 12px;"></i>
                            a. Company Command Structure Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Company tactical command doctrine establishes platoon-level command authority over platoons and company-level enablers within tactical area.
                        </p>

                        <!-- Tactical Command Authority Doctrine -->
                        <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Tactical Command Authority (FM 5-0, Ch 46)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>OPCON:</strong> Operational control from battalion command</li>
                                <li><strong>TACON:</strong> Tactical control over platoons</li>
                                <li><strong>Support:</strong> Direct support relationships</li>
                                <li><strong>Coordination:</strong> Lateral company coordination</li>
                            </ul>
                        </div>

                        <!-- Platoon Command Structure -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Platoon Organization Doctrine (FM 6-0, Ch 20)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon Commands:</strong> Multiple platoon control</li>
                                <li><strong>Company Enablers:</strong> Company-level capabilities</li>
                                <li><strong>Functional Units:</strong> Specialized support</li>
                            </ul>
                        </div>

                        <!-- Tactical Planning -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Company Planning Doctrine (FM 5-0, Ch 47)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tactical Design:</strong> Company-level planning</li>
                                <li><strong>Resource Coordination:</strong> Platoon support</li>
                                <li><strong>Timeline Management:</strong> Hours planning</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Company Communications Architecture Doctrine Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px; color: #a855f7; font-size: 12px;"></i>
                            b. Company Communications Architecture Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Company tactical communications doctrine establishes platoon-level networks bridging battalion tactical systems to platoon tactical networks.
                        </p>

                        <!-- Company Networks Doctrine -->
                        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Company Network Architecture (FM 6-02, Ch 29)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Company Network:</strong> Tank company network backbone</li>
                                <li><strong>SINCGARS:</strong> Single Channel Ground Airborne Radio</li>
                                <li><strong>FBCB2:</strong> Force XXI Battle Command Brigade</li>
                            </ul>
                        </div>

                        <!-- Platoon Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Platoon Communications Doctrine (FM 6-02, Ch 30)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon Networks:</strong> Tactical-level integration</li>
                                <li><strong>Interoperability:</strong> Company-platoon connectivity</li>
                                <li><strong>Redundancy:</strong> Multiple communication paths</li>
                            </ul>
                        </div>

                        <!-- Battalion Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion Integration Doctrine (FM 6-02, Ch 31)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tactical Networks:</strong> Battalion-level connectivity</li>
                                <li><strong>Joint Integration:</strong> Company coordination</li>
                                <li><strong>Operational Reach:</strong> Battalion communications</li>
                            </ul>
                        </div>

                        <!-- Company PACE Doctrine -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Company PACE Doctrine</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>P:</strong> Company Network/SINCGARS • <strong>A:</strong> FBCB2 • <strong>C:</strong> Tank Intercom • <strong>E:</strong> Visual/Hand Signals
                            </p>
                        </div>
                    </div>

                    <!-- Company Control Measures Doctrine Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #a855f7; font-size: 12px;"></i>
                            c. Company Control Measures Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Company tactical control measures doctrine establishes platoon boundaries, resource allocation, and coordination mechanisms across tactical area.
                        </p>

                        <!-- Platoon Control Doctrine -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Platoon Boundaries Doctrine (FM 5-0, Ch 48)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon Areas:</strong> Tactical area designation</li>
                                <li><strong>Company Rear:</strong> Company support operations</li>
                                <li><strong>Coordination Lines:</strong> Inter-platoon boundaries</li>
                            </ul>
                        </div>

                        <!-- Resource Coordination -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Resource Coordination Doctrine (FM 5-0, Ch 49)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Company Assets:</strong> Company-level resources</li>
                                <li><strong>Platoon Support:</strong> Tactical-level sustainment</li>
                                <li><strong>Battalion Coordination:</strong> Tactical integration</li>
                            </ul>
                        </div>

                        <!-- Platoon Synchronization -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Synchronization Doctrine (FM 5-0, Ch 50)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon Operations:</strong> Multi-platoon synchronization</li>
                                <li><strong>Timeline Management:</strong> Tactical tempo control</li>
                                <li><strong>Priority Systems:</strong> Resource allocation priorities</li>
                            </ul>
                        </div>

                        <!-- Company Coordination -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Company Coordination Framework</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Platoon-level coordination of tactical operations within company tactical command
                            </p>
                        </div>
                    </div>

                    <!-- Company Multi-Domain Operations Doctrine Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-layer-group" style="margin-right: 8px; color: #a855f7; font-size: 12px;"></i>
                            d. Company Multi-Domain Operations Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Company tactical multi-domain operations doctrine integrates platoon capabilities with joint forces for unified tactical operations.
                        </p>

                        <!-- Tank Operations Integration -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Tank Operations Doctrine (FM 6-0, Ch 21)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon Operations:</strong> Tank assault operations</li>
                                <li><strong>Company Enablers:</strong> Company-level capabilities</li>
                                <li><strong>Joint Integration:</strong> Tank operations coordination</li>
                            </ul>
                        </div>

                        <!-- Joint Domain Integration -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Air Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Close air support</li>
                                    <li>Attack helicopter coordination</li>
                                    <li>Medical evacuation</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(12, 74, 110, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #0284c7;">
                                <h5 style="font-weight: 600; color: #7dd3fc; font-size: 12px; margin: 0 0 6px 0;">Fire Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Tank main gun fires</li>
                                    <li>Machine gun fires</li>
                                    <li>Artillery support requests</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Information & Intelligence -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Information Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Company information warfare</li>
                                    <li>Electronic warfare coordination</li>
                                    <li>Cyber operations integration</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Intelligence Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Company intelligence fusion</li>
                                    <li>Platoon ISR coordination</li>
                                    <li>Target identification</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Tactical Integration -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Company Integration Framework</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Company tactical integration of multi-domain capabilities for unified tank operations
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Company Doctrinal Analysis Summary -->
                <div style="background-color: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #8b5cf6;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #c4b5fd; margin: 0 0 12px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #8b5cf6;"></i>
                        Company Tactical Command & Control Doctrinal Analysis Summary
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Authority</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Tactical-level command</li>
                                <li>Platoon operational control</li>
                                <li>Company enabler integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Company Network architecture</li>
                                <li>Platoon network integration</li>
                                <li>Battalion connectivity</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Multi-domain integration</li>
                                <li>Tank synchronization</li>
                                <li>Joint coordination</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background-color: rgba(139, 92, 246, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Company Doctrinal Foundation:</strong> Company tactical command and control doctrine establishes the framework for tactical-level command authority, platoon integration, tactical-level communications, and multi-domain operations coordination to achieve unified tank operations in support of battalion tactical objectives.
                        </p>
                    </div>
                </div>

            </div>
        `;
    }
};
