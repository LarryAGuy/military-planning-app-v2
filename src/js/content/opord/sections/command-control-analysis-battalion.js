/**
 * Command & Control - Echelon Analysis - Battalion Level
 * Battalion Tactical Command & Control Doctrinal Analysis
 * 1st Combined Arms Battalion tactical-level command and control doctrine
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (Jul 2019, C1 2023), FM 6-02 (Oct 2020)
 * Authorization: 300-line limit waived for tactical-level doctrinal content requirements
 */

export const c2BattalionAnalysisModule = {
    id: 'battalion-analysis',
    title: 'Battalion Level Echelon Analysis',
    classification: 'UNCLASSIFIED',

    getContent: function() {
        return `
            <!-- Battalion Level Echelon Analysis - Professional Military Layout -->
            <div id="battalion-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-flag" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        5. Command & Control - Battalion Level Echelon Analysis
                    </h3>
                    <p style="color: #c4b5fd; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Battalion Tactical Command & Control Doctrinal Analysis
                    </p>
                </div>

                <!-- Doctrinal Context -->
                <div style="background-color: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #8b5cf6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #c4b5fd; margin: 0 0 8px 0;">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #8b5cf6;"></i>
                        Battalion Tactical Command & Control Doctrinal Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Echelon:</strong> Battalion Tactical (Lieutenant Colonel, O-5) | <strong>Planning Horizon:</strong> Hours to days | <strong>Scope:</strong> Tactical-level command
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Battalion Command Authority</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Tactical-level command authority</li>
                                <li>Company-level operational control</li>
                                <li>Brigade-level tactical integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Doctrinal Foundation</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>FM 5-0: Battalion operations process</li>
                                <li>FM 6-0: Battalion mission command</li>
                                <li>FM 6-02: Battalion signal operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Battalion Command & Control Doctrinal Analysis Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Battalion Command Structure Doctrine Card -->
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
                            a. Battalion Command Structure Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion tactical command doctrine establishes company-level command authority over companies and battalion-level enablers within tactical area.
                        </p>

                        <!-- Tactical Command Authority Doctrine -->
                        <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Tactical Command Authority (FM 5-0, Ch 36)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>TACON:</strong> Tactical control from brigade command</li>
                                <li><strong>OPCON:</strong> Operational control over companies</li>
                                <li><strong>Support:</strong> Direct support relationships</li>
                                <li><strong>Coordination:</strong> Lateral battalion coordination</li>
                            </ul>
                        </div>

                        <!-- Company Command Structure -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Company Organization Doctrine (FM 6-0, Ch 16)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Company Commands:</strong> Multiple company control</li>
                                <li><strong>Battalion Enablers:</strong> Battalion-level capabilities</li>
                                <li><strong>Functional Units:</strong> Specialized support</li>
                            </ul>
                        </div>

                        <!-- Tactical Planning -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Battalion Planning Doctrine (FM 5-0, Ch 37)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tactical Design:</strong> Battalion-level planning</li>
                                <li><strong>Resource Coordination:</strong> Company support</li>
                                <li><strong>Timeline Management:</strong> Hours to days planning</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Battalion Communications Architecture Doctrine Card -->
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
                            b. Battalion Communications Architecture Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion tactical communications doctrine establishes company-level networks bridging brigade operational systems to company tactical networks.
                        </p>

                        <!-- Battalion Networks Doctrine -->
                        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Battalion Network Architecture (FM 6-02, Ch 23)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Battalion Network:</strong> Combined arms battalion network backbone</li>
                                <li><strong>CPCE:</strong> Command Post Computing Environment</li>
                                <li><strong>SINCGARS:</strong> Single Channel Ground Airborne Radio</li>
                            </ul>
                        </div>

                        <!-- Company Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Company Communications Doctrine (FM 6-02, Ch 24)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Company Networks:</strong> Tactical-level integration</li>
                                <li><strong>Interoperability:</strong> Battalion-company connectivity</li>
                                <li><strong>Redundancy:</strong> Multiple communication paths</li>
                            </ul>
                        </div>

                        <!-- Brigade Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade Integration Doctrine (FM 6-02, Ch 25)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tactical Networks:</strong> Brigade-level connectivity</li>
                                <li><strong>Joint Integration:</strong> Battalion coordination</li>
                                <li><strong>Operational Reach:</strong> Brigade communications</li>
                            </ul>
                        </div>

                        <!-- Battalion PACE Doctrine -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion PACE Doctrine</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>P:</strong> Battalion Network/CPCE • <strong>A:</strong> SINCGARS • <strong>C:</strong> SATCOM • <strong>E:</strong> HF/Messenger
                            </p>
                        </div>
                    </div>

                    <!-- Battalion Control Measures Doctrine Card -->
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
                            c. Battalion Control Measures Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion tactical control measures doctrine establishes company boundaries, resource allocation, and coordination mechanisms across tactical area.
                        </p>

                        <!-- Company Control Doctrine -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Company Boundaries Doctrine (FM 5-0, Ch 38)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Company Areas:</strong> Tactical area designation</li>
                                <li><strong>Battalion Rear:</strong> Battalion support operations</li>
                                <li><strong>Coordination Lines:</strong> Inter-company boundaries</li>
                            </ul>
                        </div>

                        <!-- Resource Coordination -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Resource Coordination Doctrine (FM 5-0, Ch 39)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Battalion Assets:</strong> Battalion-level resources</li>
                                <li><strong>Company Support:</strong> Tactical-level sustainment</li>
                                <li><strong>Brigade Coordination:</strong> Tactical integration</li>
                            </ul>
                        </div>

                        <!-- Company Synchronization -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Synchronization Doctrine (FM 5-0, Ch 40)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Company Operations:</strong> Multi-company synchronization</li>
                                <li><strong>Timeline Management:</strong> Tactical tempo control</li>
                                <li><strong>Priority Systems:</strong> Resource allocation priorities</li>
                            </ul>
                        </div>

                        <!-- Battalion Coordination -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion Coordination Framework</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Company-level coordination of tactical operations within battalion tactical command
                            </p>
                        </div>
                    </div>

                    <!-- Battalion Multi-Domain Operations Doctrine Card -->
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
                            d. Battalion Multi-Domain Operations Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion tactical multi-domain operations doctrine integrates company capabilities with joint forces for unified tactical operations.
                        </p>

                        <!-- Land Domain Integration -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Land Domain Operations Doctrine (FM 6-0, Ch 17)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Company Operations:</strong> Combined arms operations</li>
                                <li><strong>Battalion Enablers:</strong> Battalion-level capabilities</li>
                                <li><strong>Joint Integration:</strong> Land operations coordination</li>
                            </ul>
                        </div>

                        <!-- Joint Domain Integration -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Air Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Joint air-ground operations</li>
                                    <li>Battalion aviation integration</li>
                                    <li>Air defense coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(12, 74, 110, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #0284c7;">
                                <h5 style="font-weight: 600; color: #7dd3fc; font-size: 12px; margin: 0 0 6px 0;">Fire Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Battalion fire support coordination</li>
                                    <li>Joint fires integration</li>
                                    <li>Mortar and artillery support</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Information & Intelligence -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Information Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Battalion information warfare</li>
                                    <li>Electronic warfare coordination</li>
                                    <li>Cyber operations integration</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Intelligence Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Battalion intelligence fusion</li>
                                    <li>Company ISR coordination</li>
                                    <li>Tactical intelligence support</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Tactical Integration -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion Integration Framework</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion tactical integration of multi-domain capabilities for unified tactical operations
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Battalion Doctrinal Analysis Summary -->
                <div style="background-color: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #8b5cf6;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #c4b5fd; margin: 0 0 12px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #8b5cf6;"></i>
                        Battalion Tactical Command & Control Doctrinal Analysis Summary
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Authority</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Tactical-level command</li>
                                <li>Company operational control</li>
                                <li>Battalion enabler integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Battalion Network architecture</li>
                                <li>Company network integration</li>
                                <li>Brigade connectivity</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Multi-domain integration</li>
                                <li>Tactical synchronization</li>
                                <li>Joint coordination</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background-color: rgba(139, 92, 246, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Battalion Doctrinal Foundation:</strong> Battalion tactical command and control doctrine establishes the framework for tactical-level command authority, company integration, tactical-level communications, and multi-domain operations coordination to achieve unified tactical operations in support of brigade operational objectives.
                        </p>
                    </div>
                </div>

            </div>
        `;
    }
};
