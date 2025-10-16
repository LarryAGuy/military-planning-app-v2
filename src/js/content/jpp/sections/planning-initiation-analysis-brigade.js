/**
 * JPP Step 1: Planning Initiation - Echelon Analysis - Brigade Level
 * UNCLASSIFIED content for brigade-level planning initiation analysis
 * Follows JP 5-0 standards with brigade-level operational analysis considerations
 */

export function getBrigadePlanningInitiationAnalysis() {
    return `
        <div style="padding: 20px;">
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-chess-rook" style="margin-right: 12px; color: #a855f7; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Brigade Level Planning Initiation Analysis</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">Operational Brigade Analysis Framework - Colonel Level Command</p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 1: Brigade Operational Mission Analysis Framework -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-crosshairs" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                        Brigade Operational Mission Analysis Framework
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Division Tactical Guidance Integration</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Division Commander's Intent:</strong> Brigade commanders must thoroughly analyze and integrate Division tactical guidance, ensuring Brigade operations directly support Division tactical objectives and Corps operational end states.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Operational Design Integration:</strong> Translation of Division tactical design into Brigade-specific operational approaches, ensuring seamless integration with adjacent brigades and joint forces within the Division area.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Operational Objectives Analysis:</strong> Decomposition of Division tactical objectives into Brigade-achievable operational objectives, maintaining clear linkage between battalion actions and tactical outcomes.</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Multi-Domain Coordination:</strong> Integration of Brigade land operations with joint air, maritime, space, and cyberspace operations to achieve Division commander's tactical vision.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Brigade Mission Development</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Mission Analysis Process:</strong> Systematic analysis of Division mission variables including who (Brigade forces), what (tasks), when (timeline), where (area of operations), and why (purpose) to develop clear Brigade mission statements.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Task Organization:</strong> Development of Brigade task organization that optimizes multi-battalion capabilities for Division tactical requirements, including Brigade Combat Team (BCT) configuration and enabler integration.</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Operational Approach:</strong> Articulation of how Brigade forces will accomplish assigned missions through sequencing of operations, allocation of resources, and coordination with adjacent units and higher headquarters.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.6);">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Multi-Battalion Coordination Framework</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Battalion Integration:</strong> Coordination of multiple battalion headquarters to achieve Brigade-wide operations, ensuring unity of effort across diverse operational environments and mission sets.</p>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Operational Synchronization:</strong> Alignment of Brigade operations with Division timing and adjacent brigades, ensuring operations support joint force operations at critical decision points.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 2: Brigade Operational Situation Analysis Framework -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-map-marked-alt" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                        Brigade Operational Situation Analysis Framework
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Brigade Area of Operations Analysis</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Operational Terrain Analysis:</strong> Comprehensive assessment of terrain, weather, infrastructure, and population factors within the Brigade area of operations that impact multi-battalion coordination and operational success.</p>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Operational Threat Assessment:</strong> Analysis of adversary operational-level forces, capabilities, doctrine, and likely courses of action that could oppose Brigade operations within the assigned operational area.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #2563eb;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Joint Operations Integration</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Joint Coordination:</strong> Analysis of how Brigade operations integrate with joint air, maritime, space, and cyberspace operations to achieve Division tactical objectives.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 3: Brigade Operational Resource Analysis Framework -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(22, 163, 74, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 75% 25%, rgba(22, 163, 74, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(22, 163, 74, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(22, 163, 74, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-cogs" style="margin-right: 10px; color: #16a34a; font-size: 18px; text-shadow: 0 0 12px rgba(22, 163, 74, 0.5);"></i>
                        Brigade Operational Resource Analysis Framework
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(22, 163, 74, 0.15) 0%, rgba(22, 163, 74, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(22, 163, 74, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #86efac; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(22, 163, 74, 0.3); padding-bottom: 6px;">Multi-Battalion Force Structure</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Battalion Integration:</strong> Analysis of multiple battalion headquarters capabilities, including infantry, armor, artillery, and support battalions, ensuring optimal task organization for Brigade operational requirements.</p>
                                <p style="margin: 0;"><strong style="color: #86efac;">Operational Sustainment:</strong> Assessment of Brigade-level sustainment capabilities, including operational distribution systems and multi-battalion logistics coordination.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #16a34a;">
                            <h5 style="font-weight: 700; color: #86efac; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(22, 163, 74, 0.3); padding-bottom: 6px;">Command and Control Systems</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #86efac;">C4ISR Architecture:</strong> Analysis of Brigade command, control, communications, computers, intelligence, surveillance, and reconnaissance systems supporting multi-battalion operations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Brigade Operational Risk Analysis Framework -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                        Brigade Operational Risk Analysis Framework
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Division Integration Risk Assessment</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Operational Risk Integration:</strong> Assessment of how Brigade operations contribute to or mitigate Division-level tactical risks, ensuring Brigade risk management supports Division commander's risk tolerance.</p>
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Multi-Battalion Coordination Risks:</strong> Analysis of risks associated with coordinating multiple battalions across extended operational areas, including communication failures and synchronization challenges.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Operational Risk Mitigation</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Contingency Planning:</strong> Development of operational branches and sequels, ensuring Brigade forces can adapt to changing operational conditions and maintain mission success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Operational Planning Excellence Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(168, 85, 247, 0.1); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                <h3 style="color: #a855f7; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); position: relative; z-index: 1;">
                    <i class="fas fa-chess-rook" style="margin-right: 12px; font-size: 20px; text-shadow: 0 0 12px rgba(168, 85, 247, 0.5);"></i>
                    Brigade Operational Planning Excellence Framework
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; position: relative; z-index: 1;">
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Brigade Operational Integration</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Division tactical guidance integration and alignment</li>
                            <li style="margin-bottom: 4px;">Multi-battalion coordination and operational synchronization</li>
                            <li style="margin-bottom: 4px;">Joint and multinational integration at operational level</li>
                            <li>Operational risk assessment and mitigation planning</li>
                        </ul>
                    </div>
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Brigade Operational Capabilities</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Multi-battalion force structure and capability integration</li>
                            <li style="margin-bottom: 4px;">Coalition battalion forces integration and coordination</li>
                            <li style="margin-bottom: 4px;">Operational sustainment and logistics coordination</li>
                            <li>Operational command and control architecture</li>
                        </ul>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.4); position: relative; z-index: 1;">
                    <h4 style="color: #c084fc; font-size: 16px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(168, 85, 247, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-medal" style="margin-right: 12px; font-size: 18px;"></i>
                        Brigade Operational Command Excellence Summary (Colonel Level)
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Brigade Operational Leader Responsibilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Division Integration:</strong> Translate Division guidance into Brigade operational objectives</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Multi-Battalion Leadership:</strong> Synchronize multiple battalions under unified Brigade command</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Operational Risk Management:</strong> Balance Brigade objectives with operational risk</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Brigade Operational Planning Excellence</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Comprehensive Analysis:</strong> Systematic application of JP 5-0 and FM 3-96 doctrine</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Operational Integration:</strong> Seamless coordination from Division to battalion execution</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Multi-Battalion Synchronization:</strong> Unified planning across battalion formations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (Joint Planning), Chapter 4 — Planning Initiation | JP 3-0 (Joint Operations) | FM 3-96 (Brigade Combat Team) | FM 5-0 (Planning and Orders Production) | FM 3-0 (Operations)
                </div>
            </div>
        </div>
    `;
}

export default getBrigadePlanningInitiationAnalysis;
