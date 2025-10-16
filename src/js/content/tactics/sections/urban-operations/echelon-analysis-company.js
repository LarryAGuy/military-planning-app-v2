/**
 * Company-Level Urban Operations Echelon Analysis
 * Comprehensive doctrinal analysis for Company-level urban operations
 * Command Level: Company Commander (Captain, O-3)
 * Operational Scope: Company operations, platoon coordination
 * Character Target: 55,000-65,000 characters
 */

export const companyTacticsModule = {
    getContent() {
        return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Company Urban Operations Header -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-user-friends" style="margin-right: 12px; color: #8b5cf6; font-size: 20px;"></i>
                    Company Urban Operations: Direct Action and Leadership
                </h2>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        COMPANY COMMAND AUTHORITY
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0 0 8px 0;"><strong>Direct Action Command Level:</strong> Company-level urban operations are conducted under the authority of Company Commanders (Captain, O-3) with responsibility for direct action execution, multi-platoon coordination, and tactical operations across company tactical areas within complex urban environments.</p>
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Doctrinal Foundation:</strong> Company urban operations doctrine is based on ATP 3-06 (Urban Operations), ATP 3-90.1 (Armor and Mechanized Infantry Company Team), and JP 3-06 (Joint Urban Operations), emphasizing direct action, tactical execution, and company-level integration in complex urban environments.</p>
                    </div>
                </div>
            </div>

            <!-- Company Urban Operations Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-city" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Company Urban Operations Overview
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-book-open" style="margin-right: 8px;"></i>
                            DIRECT ACTION DOCTRINE
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Company Urban Framework:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Company-level urban operations encompass direct action and tactical execution across company tactical areas, requiring integration of platoon capabilities, joint enablers, and company support to achieve tactical objectives through synchronized multi-platoon operations in complex urban environments.</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Direct Action:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Company commanders must apply direct action to sequence and synchronize platoon operations, allocate company resources across multiple urban areas, and coordinate with joint forces while maintaining tactical momentum and operational flexibility.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-chess-board" style="margin-right: 8px;"></i>
                            MULTI-PLATOON INTEGRATION
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Platoon Convergence:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Company urban operations require seamless integration across multiple platoon areas, with urban environments serving as critical tactical nodes where platoon capabilities converge and interact in complex, interdependent relationships.</p>

                            <div style="border-top: 1px solid rgba(37, 99, 235, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Tactical Execution:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Company commanders must orchestrate multi-platoon effects to achieve tactical results, leveraging urban infrastructure, population centers, and information networks while protecting critical capabilities and maintaining tactical initiative.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        DIRECT ACTION IMPERATIVES
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Tactical Operations</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Company Mission</strong> — Company mission accomplishment</li>
                                    <li><strong>Platoon Coordination</strong> — Multi-platoon unity of effort</li>
                                    <li><strong>Tactical Execution</strong> — Direct tactical execution</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Direct Action Priorities</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Force Protection</strong> — Company force protection and survivability</li>
                                    <li><strong>Civilian Protection</strong> — Civilian population protection</li>
                                    <li><strong>Infrastructure</strong> — Critical infrastructure preservation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Direct Action Constraints</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Legal Framework</strong> — International law compliance</li>
                                    <li><strong>ROE Limitations</strong> — Rules of engagement limitations</li>
                                    <li><strong>Resource Constraints</strong> — Company resource allocation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Direct Action Command and Control Architecture -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-sitemap" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Direct Action Command and Control Architecture
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            COMPANY C2 FRAMEWORK
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Direct Action Command Architecture:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Company-level command and control for urban operations requires robust, redundant, and resilient communication systems capable of coordinating multiple simultaneous platoon operations across company tactical areas while maintaining unity of command, unity of effort, and tactical security.</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Command Integration:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Integration of platoons, joint enablers, and company support command structures to achieve unity of effort across multiple urban tactical areas</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            COMMUNICATION SYSTEMS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Tactical Networks:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Secure tactical communications, redundant terrestrial networks, joint interoperability systems, and cyber-resilient architectures</p>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Decision Support:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Company intelligence platforms, tactical planning systems, real-time situational awareness, and tactical assessment tools</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        COMPANY TACTICAL INTEGRATION
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Platoon Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Multi-Platoon</strong> — Multi-platoon coordination</li>
                                    <li><strong>Tactical Control</strong> — Platoon tactical control</li>
                                    <li><strong>Mission Command</strong> — Mission command execution</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Support Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Fire Support</strong> — Company fire support coordination</li>
                                    <li><strong>Medical Support</strong> — Company medical support</li>
                                    <li><strong>Logistics Support</strong> — Company logistics support</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Joint Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Joint Enablers</strong> — Joint enabler integration</li>
                                    <li><strong>Air Support</strong> — Close air support coordination</li>
                                    <li><strong>Intelligence</strong> — Joint intelligence sharing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Operations Integration -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-cubes" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Multi-Domain Operations Integration
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        COMPANY MDO FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Domain Convergence in Urban Environments:</strong> Company-level urban operations represent critical convergence points for multi-domain operations, where land, air, maritime, space, and cyberspace domains intersect within platoon tactical areas, requiring sophisticated coordination and synchronization to achieve tactical objectives while managing cascading effects across all domains.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 16px;">
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Land Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Ground Forces</strong> — Company ground force deployment</li>
                                <li><strong>Mobility</strong> — Company mobility corridors</li>
                                <li><strong>Urban Control</strong> — Urban area control</li>
                                <li><strong>Infrastructure</strong> — Critical infrastructure security</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Air Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Air Support</strong> — Company air support operations</li>
                                <li><strong>Airlift</strong> — Tactical airlift operations</li>
                                <li><strong>ISR</strong> — Intelligence surveillance reconnaissance</li>
                                <li><strong>CAS</strong> — Close air support coordination</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Cyber Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Cyber Operations</strong> — Company cyber operations</li>
                                <li><strong>Network Defense</strong> — Network defense operations</li>
                                <li><strong>Information Ops</strong> — Information operations integration</li>
                                <li><strong>EW Operations</strong> — Electronic warfare operations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal References and Direct Action Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book-open" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Doctrinal References and Direct Action Framework
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px;"></i>
                            PRIMARY JOINT DOCTRINE
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 8px 0;"><strong>JP 3-06:</strong> Joint Urban Operations (primary joint urban doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 3-0:</strong> Joint Operations (fundamental joint operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 5-0:</strong> Joint Planning (tactical planning)</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 2-0:</strong> Joint Intelligence (tactical intelligence operations)</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 3-12:</strong> Cyberspace Operations</p>
                            <p style="margin: 0;"><strong>JP 3-13:</strong> Information Operations</p>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-chess-board" style="margin-right: 8px;"></i>
                            PRIMARY ARMY DOCTRINE
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 8px 0;"><strong>ATP 3-06:</strong> Urban Operations (Army urban operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>ATP 3-90.1:</strong> Armor and Mechanized Infantry Company Team</p>
                            <p style="margin: 0 0 8px 0;"><strong>FM 3-0:</strong> Operations (comprehensive operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>FM 5-0:</strong> Operations Process (planning and execution)</p>
                            <p style="margin: 0 0 8px 0;"><strong>ATP 3-21.8:</strong> Infantry Platoon and Squad</p>
                            <p style="margin: 0;"><strong>ATP 3-21.10:</strong> Infantry Rifle Company</p>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        COMPANY URBAN OPERATIONS DIRECT ACTION FRAMEWORK
                    </h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                        <p style="margin: 0 0 6px 0;"><strong>Doctrinal Foundation:</strong></p>
                        <p style="margin: 0 0 14px 0; padding-left: 12px;">Company-level urban operations doctrine provides the direct action framework for planning, executing, and assessing complex urban operations across multiple platoon areas and domains while integrating joint, coalition, and interagency capabilities to achieve tactical objectives in challenging tactical environments.</p>

                        <div style="border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 12px; margin-bottom: 14px;">
                            <p style="margin: 0 0 6px 0;"><strong>Direct Action Integration:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">This doctrinal framework enables company commanders to synchronize urban operations with broader tactical objectives, coordinate with multiple stakeholders, and adapt to dynamic tactical conditions while maintaining tactical coherence and tactical effectiveness across the full spectrum of direct action operations.</p>
                        </div>

                        <div style="border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 12px;">
                            <p style="margin: 0 0 6px 0;"><strong>Future Development:</strong></p>
                            <p style="margin: 0; padding-left: 12px;">Company urban operations doctrine continues to evolve in response to emerging threats, technological advances, and lessons learned from contemporary operations, requiring continuous adaptation and refinement to maintain relevance and effectiveness in an increasingly complex and urbanized tactical environment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tactical Fires and Effects Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-crosshairs" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Tactical Fires and Effects Coordination
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            DIRECT ACTION FIRES FRAMEWORK
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Company Fires Coordination:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Direct action fires in urban environments require precise coordination across multiple platoons and domains to achieve tactical objectives while minimizing collateral damage, protecting civilian populations, and preserving critical infrastructure.</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Effects-Based Operations:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Company commanders must orchestrate lethal and non-lethal effects to achieve tactical objectives, considering second and third-order effects across complex urban systems and networks.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            DIRECT ACTION TARGETING CONSIDERATIONS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Direct Action Targeting:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Urban targeting at company level requires comprehensive analysis of target systems, collateral damage estimation, legal review processes, and tactical communication considerations to maintain legitimacy and effectiveness.</p>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Precision Requirements:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Urban environments demand maximum precision to achieve tactical effects while protecting civilian populations, cultural sites, and essential infrastructure required for post-conflict stability.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        DIRECT ACTION EFFECTS COORDINATION
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Lethal Effects</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>PGMs</strong> — Precision guided munitions</li>
                                    <li><strong>Artillery</strong> — Company artillery operations</li>
                                    <li><strong>Aviation Fires</strong> — Company aviation fires</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Non-Lethal Effects</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>EW Operations</strong> — Electronic warfare operations</li>
                                    <li><strong>Cyber Ops</strong> — Cyber operations coordination</li>
                                    <li><strong>Info Ops</strong> — Information operations integration</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Direct Action Considerations</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Collateral Damage</strong> — Collateral damage mitigation</li>
                                    <li><strong>Precision</strong> — Precision requirements</li>
                                    <li><strong>Legal Constraints</strong> — Legal constraints compliance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Company Sustainment Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-truck-loading" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Company Sustainment Operations
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        DIRECT ACTION SUSTAINMENT FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Company Logistics Architecture:</strong> Company-level urban operations require comprehensive sustainment architecture capable of supporting multiple simultaneous platoon operations across company tactical areas, integrating tactical lift capabilities, company distribution networks, and direct action sustainment operations while overcoming urban terrain challenges and security threats.</p>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3); margin-top: 16px;">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        DIRECT ACTION SUSTAINMENT FUNCTIONS
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Direct Action Supply</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Company Supply</strong> — Company supply operations</li>
                                    <li><strong>Stockpile Mgmt</strong> — Direct action stockpile management</li>
                                    <li><strong>Joint Supply</strong> — Joint supply coordination</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Direct Action Transportation</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Airlift</strong> — Direct action airlift operations</li>
                                    <li><strong>Sealift</strong> — Direct action sealift coordination</li>
                                    <li><strong>Ground Transport</strong> — Company ground transportation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Direct Action Maintenance</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Company Maint</strong> — Company maintenance operations</li>
                                    <li><strong>Repair Capabilities</strong> — Direct action repair capabilities</li>
                                    <li><strong>Equipment Reset</strong> — Equipment reset operations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Direct Action Medical</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Company Medical</strong> — Company medical operations</li>
                                    <li><strong>MEDEVAC</strong> — Direct action medical evacuation</li>
                                    <li><strong>Medical Supply</strong> — Medical supply coordination</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tactical Intelligence and Information Fusion -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-search" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Tactical Intelligence and Information Fusion
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        COMPANY INTELLIGENCE FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Direct Action Intelligence Integration:</strong> Company-level urban operations require comprehensive intelligence fusion from multiple sources, disciplines, and joint partners to provide direct action situational awareness, threat assessment, and decision support for complex urban environments across multiple platoon tactical areas and direct action time horizons.</p>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3); margin-top: 16px;">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        INTELLIGENCE DISCIPLINES INTEGRATION
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">HUMINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Human Networks</strong> — Direct action human networks</li>
                                    <li><strong>Joint Sharing</strong> — Joint intelligence sharing</li>
                                    <li><strong>Cultural Intel</strong> — Cultural intelligence collection</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">SIGINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>COMINT</strong> — Direct action communications intercept</li>
                                    <li><strong>ELINT</strong> — Electronic intelligence collection</li>
                                    <li><strong>Cyber Intel</strong> — Cyber intelligence operations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">GEOINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Imagery Analysis</strong> — Direct action imagery analysis</li>
                                    <li><strong>Terrain Mapping</strong> — Urban terrain mapping</li>
                                    <li><strong>Infrastructure</strong> — Infrastructure assessment</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">OSINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Open Source</strong> — Open source intelligence</li>
                                    <li><strong>Social Media</strong> — Social media monitoring</li>
                                    <li><strong>Media Analysis</strong> — Media analysis and assessment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Joint and Coalition Integration -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-handshake" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Joint and Coalition Integration
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px;"></i>
                            JOINT FORCE INTEGRATION
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Multi-Service Coordination:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Company urban operations require integration with Air Force, Navy, Marine Corps, and Space Force capabilities at the direct action level, with each service contributing unique capabilities while maintaining unity of effort under company tactical control.</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Joint Planning:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Company-level joint planning processes must accommodate service-specific capabilities and limitations while developing coherent, synchronized operations that leverage complementary strengths across all services.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-users-cog" style="margin-right: 8px;"></i>
                            COALITION OPERATIONS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Multi-National Coordination:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Coalition urban operations require coordination with NATO allies, regional partners, and host nation forces at the company level, managing diverse capabilities and procedures while maintaining direct action effectiveness.</p>

                            <div style="border-top: 1px solid rgba(37, 99, 235, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Interoperability Challenges:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Company commanders must address equipment compatibility, procedural differences, and varying rules of engagement while building coalition cohesion and shared understanding of direct action objectives.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        JIIM INTEGRATION FRAMEWORK
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Joint Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Multi-Service</strong> — Multi-service integration</li>
                                    <li><strong>Joint Doctrine</strong> — Joint doctrine application</li>
                                    <li><strong>Unified Command</strong> — Unified command structure</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Interagency Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>State Department</strong> — State Department coordination</li>
                                    <li><strong>Intelligence</strong> — Intelligence community integration</li>
                                    <li><strong>Law Enforcement</strong> — Law enforcement liaison</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Intergovernmental Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Host Nation</strong> — Host nation coordination</li>
                                    <li><strong>Local Government</strong> — Local government liaison</li>
                                    <li><strong>Regional Authority</strong> — Regional authority engagement</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Multinational Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>NATO Alliance</strong> — NATO alliance coordination</li>
                                    <li><strong>Coalition Partners</strong> — Coalition partner integration</li>
                                    <li><strong>UN Peacekeeping</strong> — UN peacekeeping cooperation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        `;
    }
};

export default companyTacticsModule;
