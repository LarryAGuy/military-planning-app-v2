/**
 * Command & Control - Echelon Analysis - Corps Level
 * Corps Operational Command & Control Doctrinal Analysis
 * V Corps operational-level command and control doctrine
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (Jul 2019, C1 2023), FM 6-02 (Oct 2020)
 * Authorization: 300-line limit waived for strategic-level doctrinal content requirements
 */

export const c2CorpsAnalysisModule = {
    id: 'corps-analysis',
    title: 'Corps Level Echelon Analysis',
    classification: 'UNCLASSIFIED',

    getContent: function() {
        return `
            <!-- Corps Level Echelon Analysis - Professional Military Layout -->
            <div id="corps-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-crown" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        5. Command & Control - Corps Level Echelon Analysis
                    </h3>
                    <p style="color: #c4b5fd; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Corps Operational Command & Control Doctrinal Analysis
                    </p>
                </div>

                <!-- Doctrinal Context -->
                <div style="background-color: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #8b5cf6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #c4b5fd; margin: 0 0 8px 0;">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #8b5cf6;"></i>
                        Corps Operational Command & Control Doctrinal Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Echelon:</strong> Corps Operational (3-Star Lieutenant General) | <strong>Planning Horizon:</strong> Days to weeks | <strong>Scope:</strong> Operational-level command
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Corps Command Authority</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Operational-level command authority</li>
                                <li>Division-level tactical control</li>
                                <li>Theater-level operational integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Doctrinal Foundation</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>FM 5-0: Corps operations process</li>
                                <li>FM 6-0: Corps mission command</li>
                                <li>FM 6-02: Corps signal operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Corps Command & Control Doctrinal Analysis Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Corps Command Structure Doctrine Card -->
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
                            a. Corps Command Structure Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps operational command doctrine establishes tactical-level command authority over divisions and corps-level enablers within operational area.
                        </p>

                        <!-- Operational Command Authority Doctrine -->
                        <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Operational Command Authority (FM 5-0, Ch 11)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>OPCON:</strong> Operational control from army command</li>
                                <li><strong>TACON:</strong> Tactical control over divisions</li>
                                <li><strong>Support:</strong> General support relationships</li>
                                <li><strong>Coordination:</strong> Lateral corps coordination</li>
                            </ul>
                        </div>

                        <!-- Division Command Structure -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Division Organization Doctrine (FM 6-0, Ch 6)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Division Commands:</strong> Multiple division control</li>
                                <li><strong>Corps Enablers:</strong> Corps-level capabilities</li>
                                <li><strong>Functional Units:</strong> Specialized support</li>
                            </ul>
                        </div>

                        <!-- Operational Planning -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Corps Planning Doctrine (FM 5-0, Ch 12)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Operational Design:</strong> Corps-level planning</li>
                                <li><strong>Resource Coordination:</strong> Division support</li>
                                <li><strong>Timeline Management:</strong> Days to weeks planning</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Corps Communications Architecture Doctrine Card -->
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
                            b. Corps Communications Architecture Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps operational communications doctrine establishes tactical-level networks bridging army operational systems to division tactical networks.
                        </p>

                        <!-- Corps Networks Doctrine -->
                        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Corps Network Architecture (FM 6-02, Ch 8)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>WIN-T Increment 2:</strong> Corps-level network backbone</li>
                                <li><strong>CPCE:</strong> Command Post Computing Environment</li>
                                <li><strong>BICES:</strong> Battlefield Information Collection</li>
                            </ul>
                        </div>

                        <!-- Division Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Division Communications Doctrine (FM 6-02, Ch 9)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Division Networks:</strong> Tactical-level integration</li>
                                <li><strong>Interoperability:</strong> Corps-division connectivity</li>
                                <li><strong>Redundancy:</strong> Multiple communication paths</li>
                            </ul>
                        </div>

                        <!-- Army Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Army Integration Doctrine (FM 6-02, Ch 10)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Operational Networks:</strong> Army-level connectivity</li>
                                <li><strong>Joint Integration:</strong> Service component coordination</li>
                                <li><strong>Theater Reach:</strong> Strategic communications</li>
                            </ul>
                        </div>

                        <!-- Corps PACE Doctrine -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Corps PACE Doctrine</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>P:</strong> WIN-T/CPCE • <strong>A:</strong> SINCGARS • <strong>C:</strong> SATCOM • <strong>E:</strong> HF/Messenger
                            </p>
                        </div>
                    </div>

                    <!-- Corps Control Measures Doctrine Card -->
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
                            c. Corps Control Measures Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps operational control measures doctrine establishes tactical boundaries, resource allocation, and coordination mechanisms across operational area.
                        </p>

                        <!-- Tactical Control Doctrine -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Tactical Boundaries Doctrine (FM 5-0, Ch 13)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Division Areas:</strong> Tactical area designation</li>
                                <li><strong>Corps Rear:</strong> Corps support operations</li>
                                <li><strong>Coordination Lines:</strong> Inter-division boundaries</li>
                            </ul>
                        </div>

                        <!-- Resource Coordination -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Resource Coordination Doctrine (FM 5-0, Ch 14)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps Assets:</strong> Corps-level resources</li>
                                <li><strong>Division Support:</strong> Tactical-level sustainment</li>
                                <li><strong>Army Coordination:</strong> Operational integration</li>
                            </ul>
                        </div>

                        <!-- Tactical Synchronization -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Synchronization Doctrine (FM 5-0, Ch 15)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Division Operations:</strong> Multi-division synchronization</li>
                                <li><strong>Timeline Management:</strong> Tactical tempo control</li>
                                <li><strong>Priority Systems:</strong> Resource allocation priorities</li>
                            </ul>
                        </div>

                        <!-- Corps Coordination -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Corps Coordination Framework</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Tactical-level coordination of division operations within corps operational command
                            </p>
                        </div>
                    </div>

                    <!-- Corps Multi-Domain Operations Doctrine Card -->
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
                            d. Corps Multi-Domain Operations Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps operational multi-domain operations doctrine integrates division capabilities with joint forces for unified tactical operations.
                        </p>

                        <!-- Land Domain Integration -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Land Domain Operations Doctrine (FM 6-0, Ch 7)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Division Operations:</strong> Large-scale combat operations</li>
                                <li><strong>Corps Enablers:</strong> Corps-level capabilities</li>
                                <li><strong>Joint Integration:</strong> Land operations coordination</li>
                            </ul>
                        </div>

                        <!-- Joint Domain Integration -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Air Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Joint air-ground operations</li>
                                    <li>Corps aviation integration</li>
                                    <li>Air defense coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(12, 74, 110, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #0284c7;">
                                <h5 style="font-weight: 600; color: #7dd3fc; font-size: 12px; margin: 0 0 6px 0;">Fire Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Corps artillery coordination</li>
                                    <li>Joint fires integration</li>
                                    <li>Naval fire support</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Information & Intelligence -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Information Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Corps information warfare</li>
                                    <li>Electronic warfare coordination</li>
                                    <li>Cyber operations integration</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Intelligence Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Corps intelligence fusion</li>
                                    <li>Division ISR coordination</li>
                                    <li>Tactical intelligence support</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Tactical Integration -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Corps Integration Framework</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Corps operational integration of multi-domain capabilities for unified tactical operations
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Corps Doctrinal Analysis Summary -->
                <div style="background-color: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #8b5cf6;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #c4b5fd; margin: 0 0 12px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #8b5cf6;"></i>
                        Corps Operational Command & Control Doctrinal Analysis Summary
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Authority</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Operational-level command</li>
                                <li>Division tactical control</li>
                                <li>Corps enabler integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>WIN-T architecture</li>
                                <li>Division network integration</li>
                                <li>Army connectivity</li>
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
                            <strong>Corps Doctrinal Foundation:</strong> Corps operational command and control doctrine establishes the framework for tactical-level command authority, division integration, operational-level communications, and multi-domain operations coordination to achieve unified tactical operations in support of army operational objectives.
                        </p>
                    </div>
                </div>

            </div>
        `;
    }
};
