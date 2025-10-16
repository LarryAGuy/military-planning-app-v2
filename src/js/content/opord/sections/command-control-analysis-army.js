/**
 * Command & Control - Echelon Analysis - Army Level
 * Army Service Component Command & Control Doctrinal Analysis
 * USAREUR-AF army-level command and control doctrine
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (Jul 2019, C1 2023), FM 6-02 (Oct 2020)
 * Authorization: 300-line limit waived for strategic-level doctrinal content requirements
 */

export const c2ArmyAnalysisModule = {
    id: 'army-analysis',
    title: 'Army Level Echelon Analysis',
    classification: 'UNCLASSIFIED',

    getContent: function() {
        return `
            <!-- Army Level Echelon Analysis - Professional Military Layout -->
            <div id="army-analysis-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        5. Command & Control - Army Level Echelon Analysis
                    </h3>
                    <p style="color: #c4b5fd; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Army Service Component Command & Control Doctrinal Analysis
                    </p>
                </div>

                <!-- Doctrinal Context -->
                <div style="background-color: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #8b5cf6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #c4b5fd; margin: 0 0 8px 0;">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #8b5cf6;"></i>
                        Army Service Component Command & Control Doctrinal Framework
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Echelon:</strong> Army Service Component (3-Star Lieutenant General) | <strong>Planning Horizon:</strong> Weeks to months | <strong>Scope:</strong> Service component command
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Army Component Authority</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Service component command authority</li>
                                <li>Corps-level operational command</li>
                                <li>Theater army administrative control</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Doctrinal Foundation</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>FM 5-0: Army operations process</li>
                                <li>FM 6-0: Army mission command</li>
                                <li>FM 6-02: Army signal operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Army Command & Control Doctrinal Analysis Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Army Command Structure Doctrine Card -->
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
                            a. Army Command Structure Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army service component command doctrine establishes operational-level command authority over corps and direct reporting units within theater.
                        </p>

                        <!-- Service Component Authority Doctrine -->
                        <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Service Component Command Authority (FM 5-0, Ch 2)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>OPCON:</strong> Operational control from theater command</li>
                                <li><strong>ADCON:</strong> Administrative control over Army forces</li>
                                <li><strong>TACON:</strong> Tactical control delegation to corps</li>
                                <li><strong>Support:</strong> General and direct support relationships</li>
                            </ul>
                        </div>

                        <!-- Corps Command Structure -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Corps Organization Doctrine (FM 6-0, Ch 4)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps Commands:</strong> Multiple corps operational control</li>
                                <li><strong>Direct Reporting:</strong> Theater-level enablers</li>
                                <li><strong>Functional Commands:</strong> Specialized capabilities</li>
                            </ul>
                        </div>

                        <!-- Operational Planning -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Army Planning Doctrine (FM 5-0, Ch 7)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Operational Design:</strong> Campaign planning methodology</li>
                                <li><strong>Resource Integration:</strong> Service component resources</li>
                                <li><strong>Timeline Management:</strong> Weeks to months planning</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Army Communications Architecture Doctrine Card -->
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
                            b. Army Communications Architecture Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army service component communications doctrine establishes operational-level networks bridging theater strategic systems to corps tactical networks.
                        </p>

                        <!-- Army Networks Doctrine -->
                        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Army Network Architecture (FM 6-02, Ch 5)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>LandWarNet:</strong> Army enterprise network</li>
                                <li><strong>WIN-T:</strong> Warfighter Information Network-Tactical</li>
                                <li><strong>CPCE:</strong> Command Post Computing Environment</li>
                            </ul>
                        </div>

                        <!-- Corps Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Corps Communications Doctrine (FM 6-02, Ch 6)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps Networks:</strong> Operational-level integration</li>
                                <li><strong>Interoperability:</strong> Joint and coalition networks</li>
                                <li><strong>Redundancy:</strong> Multiple communication paths</li>
                            </ul>
                        </div>

                        <!-- Theater Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Theater Integration Doctrine (FM 6-02, Ch 7)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Strategic Networks:</strong> Theater-level connectivity</li>
                                <li><strong>Joint Integration:</strong> Service component coordination</li>
                                <li><strong>Global Reach:</strong> Strategic communications</li>
                            </ul>
                        </div>

                        <!-- Army PACE Doctrine -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Army PACE Doctrine</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>P:</strong> LandWarNet/WIN-T • <strong>A:</strong> SATCOM • <strong>C:</strong> Commercial • <strong>E:</strong> HF/Courier
                            </p>
                        </div>
                    </div>

                    <!-- Army Control Measures Doctrine Card -->
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
                            c. Army Control Measures Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army service component control measures doctrine establishes operational boundaries, resource allocation, and coordination mechanisms across theater.
                        </p>

                        <!-- Operational Control Doctrine -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Operational Boundaries Doctrine (FM 5-0, Ch 8)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps Areas:</strong> Operational area designation</li>
                                <li><strong>Support Areas:</strong> Theater army rear operations</li>
                                <li><strong>Coordination Lines:</strong> Inter-service boundaries</li>
                            </ul>
                        </div>

                        <!-- Resource Coordination -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Resource Coordination Doctrine (FM 5-0, Ch 9)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Theater Assets:</strong> Army service component resources</li>
                                <li><strong>Corps Support:</strong> Operational-level sustainment</li>
                                <li><strong>Joint Coordination:</strong> Service component integration</li>
                            </ul>
                        </div>

                        <!-- Operational Synchronization -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Synchronization Doctrine (FM 5-0, Ch 10)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps Operations:</strong> Multi-corps synchronization</li>
                                <li><strong>Timeline Management:</strong> Operational tempo control</li>
                                <li><strong>Priority Systems:</strong> Resource allocation priorities</li>
                            </ul>
                        </div>

                        <!-- Army Coordination -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Army Coordination Framework</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Operational-level coordination of corps operations within theater army service component command
                            </p>
                        </div>
                    </div>

                    <!-- Army Multi-Domain Operations Doctrine Card -->
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
                            d. Army Multi-Domain Operations Doctrine
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army service component multi-domain operations doctrine integrates corps capabilities with joint forces for unified land operations.
                        </p>

                        <!-- Land Domain Integration -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Land Domain Operations Doctrine (FM 6-0, Ch 5)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps Operations:</strong> Large-scale combat operations</li>
                                <li><strong>Theater Enablers:</strong> Army-level capabilities</li>
                                <li><strong>Joint Integration:</strong> Land component coordination</li>
                            </ul>
                        </div>

                        <!-- Joint Domain Integration -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Air Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Joint air-ground operations</li>
                                    <li>Army aviation integration</li>
                                    <li>Air defense coordination</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(12, 74, 110, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #0284c7;">
                                <h5 style="font-weight: 600; color: #7dd3fc; font-size: 12px; margin: 0 0 6px 0;">Maritime Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Joint forcible entry</li>
                                    <li>Amphibious operations</li>
                                    <li>Naval fire support</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Information & Space -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Information Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Army information warfare</li>
                                    <li>Electronic warfare coordination</li>
                                    <li>Cyber operations integration</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Space Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Space-based capabilities</li>
                                    <li>Satellite communications</li>
                                    <li>Position, navigation, timing</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Operational Integration -->
                        <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Army Integration Framework</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Army service component integration of multi-domain capabilities for unified land operations
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Army Doctrinal Analysis Summary -->
                <div style="background-color: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #8b5cf6;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #c4b5fd; margin: 0 0 12px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #8b5cf6;"></i>
                        Army Service Component Command & Control Doctrinal Analysis Summary
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Authority</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Service component command</li>
                                <li>Corps operational control</li>
                                <li>Theater army administration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>LandWarNet architecture</li>
                                <li>Corps network integration</li>
                                <li>Theater connectivity</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #c4b5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Multi-domain integration</li>
                                <li>Operational synchronization</li>
                                <li>Joint coordination</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background-color: rgba(139, 92, 246, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Army Doctrinal Foundation:</strong> Army service component command and control doctrine establishes the framework for operational-level command authority, corps integration, theater-level communications, and multi-domain operations coordination to achieve unified land operations in support of theater strategic objectives.
                        </p>
                    </div>
                </div>

            </div>
        `;
    }
};
