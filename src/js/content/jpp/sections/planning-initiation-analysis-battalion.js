/**
 * JPP Step 1: Planning Initiation - Echelon Analysis - Battalion Level
 * UNCLASSIFIED content for battalion-level planning initiation analysis
 * Follows JP 5-0 standards with battalion-level tactical analysis considerations
 */

export function getBattalionPlanningInitiationAnalysis() {
    return `
        <div style="padding: 20px;">
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-flag" style="margin-right: 12px; color: #a855f7; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Battalion Level Planning Initiation Analysis</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical Battalion Analysis Framework - Lieutenant Colonel Level Command</p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 1: Battalion Tactical Mission Analysis Framework -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-crosshairs" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                        Battalion Tactical Mission Analysis Framework
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Brigade Operational Guidance Integration</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Brigade Commander's Intent:</strong> Battalion commanders must thoroughly analyze and integrate Brigade operational guidance, ensuring Battalion operations directly support Brigade operational objectives and Division tactical end states.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Tactical Design Integration:</strong> Translation of Brigade operational design into Battalion-specific tactical approaches, ensuring seamless integration with adjacent battalions and supporting elements within the Brigade area.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Tactical Objectives Analysis:</strong> Decomposition of Brigade operational objectives into Battalion-achievable tactical objectives, maintaining clear linkage between company actions and operational outcomes.</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Combined Arms Coordination:</strong> Integration of Battalion operations with combined arms and joint forces to achieve Brigade commander's operational vision.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Battalion Mission Development</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Mission Analysis Process:</strong> Systematic analysis of Brigade mission variables including who (Battalion forces), what (tasks), when (timeline), where (area of operations), and why (purpose) to develop clear Battalion mission statements.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Task Organization:</strong> Development of Battalion task organization that optimizes multi-company capabilities for Brigade operational requirements, including combined arms integration and enabler attachment.</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Tactical Approach:</strong> Articulation of how Battalion forces will accomplish assigned missions through sequencing of operations, allocation of resources, and coordination with adjacent units and higher headquarters.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.6);">
                            <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Multi-Company Coordination Framework</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Company Integration:</strong> Coordination of multiple company headquarters to achieve Battalion-wide tactical operations, ensuring unity of effort across diverse tactical environments and mission sets.</p>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Tactical Synchronization:</strong> Alignment of Battalion operations with Brigade timing and adjacent battalions, ensuring tactical operations support operational objectives at critical decision points.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 2: Battalion Tactical Situation Analysis Framework -->
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
                        Battalion Tactical Situation Analysis Framework
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Battalion Area of Operations Analysis</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Tactical Terrain Analysis:</strong> Comprehensive assessment of terrain, weather, infrastructure, and population factors within the Battalion area of operations that impact multi-company coordination and tactical success.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Tactical Threat Assessment:</strong> Analysis of adversary tactical-level forces, capabilities, doctrine, and likely courses of action that could oppose Battalion operations within the assigned tactical area.</p>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Combined Arms Environment:</strong> Assessment of how terrain and threat factors affect combined arms integration and multi-company tactical operations.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #2563eb;">
                            <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Combined Arms Integration</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Combined Arms Coordination:</strong> Analysis of how Battalion tactical operations integrate with combined arms and joint forces to achieve Brigade operational objectives.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 3: Battalion Tactical Resource Analysis Framework -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(22, 163, 74, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 75% 25%, rgba(22, 163, 74, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(22, 163, 74, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(22, 163, 74, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-cogs" style="margin-right: 10px; color: #16a34a; font-size: 18px; text-shadow: 0 0 12px rgba(22, 163, 74, 0.5);"></i>
                        Battalion Tactical Resource Analysis Framework
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(22, 163, 74, 0.15) 0%, rgba(22, 163, 74, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(22, 163, 74, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #86efac; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(22, 163, 74, 0.3); padding-bottom: 6px;">Multi-Company Force Structure</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Company Integration:</strong> Analysis of multiple company headquarters capabilities, including rifle, weapons, headquarters, and support companies, ensuring optimal task organization for Battalion tactical requirements.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Combined Arms Assets:</strong> Assessment of attached and supporting combined arms elements, including armor, artillery, engineer, and aviation assets supporting Battalion operations.</p>
                                <p style="margin: 0;"><strong style="color: #86efac;">Tactical Sustainment:</strong> Assessment of Battalion-level tactical sustainment capabilities, including tactical distribution systems and multi-company logistics coordination.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #16a34a;">
                            <h5 style="font-weight: 700; color: #86efac; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(22, 163, 74, 0.3); padding-bottom: 6px;">Tactical Command and Control</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #86efac;">Tactical C4ISR:</strong> Analysis of Battalion command, control, communications, computers, intelligence, surveillance, and reconnaissance systems supporting multi-company tactical operations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Battalion Tactical Risk Analysis Framework -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; min-height: 600px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                        Battalion Tactical Risk Analysis Framework
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Brigade Integration Risk Assessment</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Tactical Risk Integration:</strong> Assessment of how Battalion operations contribute to or mitigate Brigade-level operational risks, ensuring Battalion risk management supports Brigade commander's risk tolerance.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Multi-Company Coordination Risks:</strong> Analysis of risks associated with coordinating multiple companies across extended tactical areas, including communication failures and synchronization challenges.</p>
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Combined Arms Risks:</strong> Assessment of risks associated with integrating combined arms elements and coordinating with supporting units.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Tactical Risk Mitigation</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Tactical Contingency Planning:</strong> Development of tactical branches and sequels, ensuring Battalion forces can adapt to changing tactical conditions and maintain mission success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Battalion Tactical Planning Excellence Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(168, 85, 247, 0.1); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                <h3 style="color: #a855f7; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); position: relative; z-index: 1;">
                    <i class="fas fa-flag" style="margin-right: 12px; font-size: 20px; text-shadow: 0 0 12px rgba(168, 85, 247, 0.5);"></i>
                    Battalion Tactical Planning Excellence Framework
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; position: relative; z-index: 1;">
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Battalion Tactical Integration</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Brigade operational guidance integration and alignment</li>
                            <li style="margin-bottom: 4px;">Multi-company coordination and tactical synchronization</li>
                            <li style="margin-bottom: 4px;">Combined arms and joint integration at tactical level</li>
                            <li>Tactical risk assessment and mitigation planning</li>
                        </ul>
                    </div>
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Battalion Tactical Capabilities</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Multi-company force structure and capability integration</li>
                            <li style="margin-bottom: 4px;">Combined arms forces integration and coordination</li>
                            <li style="margin-bottom: 4px;">Tactical sustainment and logistics coordination</li>
                            <li>Tactical command and control architecture</li>
                        </ul>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.4); position: relative; z-index: 1;">
                    <h4 style="color: #c084fc; font-size: 16px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(168, 85, 247, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-medal" style="margin-right: 12px; font-size: 18px;"></i>
                        Battalion Tactical Command Excellence Summary (Lieutenant Colonel Level)
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Battalion Tactical Leader Responsibilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Brigade Integration:</strong> Translate Brigade guidance into Battalion tactical objectives</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Multi-Company Leadership:</strong> Synchronize multiple companies under unified Battalion command</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Tactical Risk Management:</strong> Balance Battalion objectives with tactical risk</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Battalion Tactical Planning Excellence</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Comprehensive Analysis:</strong> Systematic application of JP 5-0 and FM 3-21 doctrine</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Tactical Integration:</strong> Seamless coordination from Brigade to company execution</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Multi-Company Synchronization:</strong> Unified planning across company formations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (Joint Planning), Chapter 4 — Planning Initiation | JP 3-0 (Joint Operations) | FM 3-21 (The Infantry Battalion) | FM 5-0 (Planning and Orders Production) | FM 3-0 (Operations)
                </div>
            </div>
        </div>
    `;
}

export default getBattalionPlanningInitiationAnalysis;
