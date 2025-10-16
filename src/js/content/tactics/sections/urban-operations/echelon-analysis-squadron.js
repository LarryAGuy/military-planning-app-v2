/**
 * Squadron-Level Urban Operations Echelon Analysis
 * Comprehensive doctrinal analysis for Squadron-level urban operations
 * Command Level: Squadron Commander (Lieutenant Colonel, O-5)
 * Operational Scope: Squadron operations, troop coordination (cavalry/aviation)
 * Character Target: 55,000-65,000 characters
 */

export const squadronTacticsModule = {
    getContent() {
        return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Squadron Urban Operations Header -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-horse-head" style="margin-right: 12px; color: #8b5cf6; font-size: 20px;"></i>
                    Squadron Urban Operations: Tactical Reconnaissance and Command
                </h2>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        SQUADRON COMMAND AUTHORITY
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0 0 8px 0;"><strong>Tactical Command Level:</strong> Squadron-level urban operations are conducted under the authority of Squadron Commanders (Lieutenant Colonel, O-5) with responsibility for tactical reconnaissance, multi-troop coordination, and specialized operations across squadron tactical areas within complex urban environments.</p>
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Doctrinal Foundation:</strong> Squadron urban operations doctrine is based on ATP 3-06 (Urban Operations), FM 3-20 (Reconnaissance and Security Operations), and JP 3-06 (Joint Urban Operations), emphasizing tactical reconnaissance, specialized operations, and squadron-level integration in complex urban environments.</p>
                    </div>
                </div>
            </div>

            <!-- Squadron Urban Operations Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-city" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Squadron Urban Operations Overview
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-book-open" style="margin-right: 8px;"></i>
                            TACTICAL RECONNAISSANCE DOCTRINE
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Squadron Urban Framework:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Squadron-level urban operations encompass tactical reconnaissance and specialized operations across squadron tactical areas, requiring integration of troop capabilities, joint enablers, and squadron support to achieve tactical objectives through synchronized multi-troop operations in complex urban environments.</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Tactical Reconnaissance:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Squadron commanders must apply tactical reconnaissance to sequence and synchronize troop operations, allocate squadron resources across multiple urban areas, and coordinate with joint forces while maintaining tactical momentum and operational flexibility.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-chess-board" style="margin-right: 8px;"></i>
                            MULTI-TROOP INTEGRATION
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Troop Convergence:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Squadron urban operations require seamless integration across multiple troop areas, with urban environments serving as critical tactical nodes where troop capabilities converge and interact in complex, interdependent relationships.</p>

                            <div style="border-top: 1px solid rgba(37, 99, 235, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Specialized Operations:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Squadron commanders must orchestrate multi-troop effects to achieve specialized results, leveraging urban infrastructure, population centers, and information networks while protecting critical capabilities and maintaining tactical initiative.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        TACTICAL RECONNAISSANCE IMPERATIVES
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Reconnaissance Operations</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Squadron Mission</strong> — Squadron mission accomplishment</li>
                                    <li><strong>Troop Coordination</strong> — Multi-troop unity of effort</li>
                                    <li><strong>Tactical Intelligence</strong> — Tactical intelligence collection</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Tactical Priorities</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Force Protection</strong> — Squadron force protection and survivability</li>
                                    <li><strong>Civilian Protection</strong> — Civilian population protection</li>
                                    <li><strong>Infrastructure</strong> — Critical infrastructure preservation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Tactical Constraints</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Legal Framework</strong> — International law compliance</li>
                                    <li><strong>ROE Limitations</strong> — Rules of engagement limitations</li>
                                    <li><strong>Resource Constraints</strong> — Squadron resource allocation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tactical Command and Control Architecture -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-sitemap" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Tactical Command and Control Architecture
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            SQUADRON C2 FRAMEWORK
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Tactical Command Architecture:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Squadron-level command and control for urban operations requires robust, redundant, and resilient communication systems capable of coordinating multiple simultaneous troop operations across squadron tactical areas while maintaining unity of command, unity of effort, and tactical security.</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Command Integration:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Integration of troops, joint enablers, and squadron support command structures to achieve unity of effort across multiple urban tactical areas</p>
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
                                <p style="margin: 0; padding-left: 12px;">Squadron intelligence platforms, tactical planning systems, real-time situational awareness, and tactical assessment tools</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        SQUADRON RECONNAISSANCE INTEGRATION
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Ground Reconnaissance</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Mounted Recon</strong> — Mounted reconnaissance operations</li>
                                    <li><strong>Dismounted Recon</strong> — Dismounted reconnaissance operations</li>
                                    <li><strong>Urban Surveillance</strong> — Urban surveillance operations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Air Reconnaissance</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Aviation Assets</strong> — Aviation reconnaissance assets</li>
                                    <li><strong>UAV Operations</strong> — Unmanned aerial vehicle operations</li>
                                    <li><strong>ISR Integration</strong> — Intelligence surveillance reconnaissance</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Electronic Reconnaissance</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>SIGINT Collection</strong> — Signals intelligence collection</li>
                                    <li><strong>EW Operations</strong> — Electronic warfare operations</li>
                                    <li><strong>Cyber Recon</strong> — Cyber reconnaissance operations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal References and Tactical Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book-open" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Doctrinal References and Tactical Framework
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
                            <p style="margin: 0 0 8px 0;"><strong>FM 3-20:</strong> Reconnaissance and Security Operations</p>
                            <p style="margin: 0 0 8px 0;"><strong>FM 3-0:</strong> Operations (comprehensive operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>FM 5-0:</strong> Operations Process (planning and execution)</p>
                            <p style="margin: 0 0 8px 0;"><strong>ATP 2-01:</strong> Intelligence and Electronic Warfare Operations</p>
                            <p style="margin: 0;"><strong>ATP 3-20.96:</strong> Cavalry Squadron (RSTA)</p>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        SQUADRON URBAN OPERATIONS TACTICAL FRAMEWORK
                    </h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                        <p style="margin: 0 0 6px 0;"><strong>Doctrinal Foundation:</strong></p>
                        <p style="margin: 0 0 14px 0; padding-left: 12px;">Squadron-level urban operations doctrine provides the tactical reconnaissance framework for planning, executing, and assessing complex urban reconnaissance operations across multiple troop areas and domains while integrating joint, coalition, and interagency capabilities to achieve tactical objectives in challenging tactical environments.</p>

                        <div style="border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 12px; margin-bottom: 14px;">
                            <p style="margin: 0 0 6px 0;"><strong>Tactical Integration:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">This doctrinal framework enables squadron commanders to synchronize urban reconnaissance operations with broader tactical objectives, coordinate with multiple stakeholders, and adapt to dynamic tactical conditions while maintaining tactical coherence and tactical effectiveness across the full spectrum of reconnaissance operations.</p>
                        </div>

                        <div style="border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 12px;">
                            <p style="margin: 0 0 6px 0;"><strong>Future Development:</strong></p>
                            <p style="margin: 0; padding-left: 12px;">Squadron urban operations doctrine continues to evolve in response to emerging threats, technological advances, and lessons learned from contemporary operations, requiring continuous adaptation and refinement to maintain relevance and effectiveness in an increasingly complex and urbanized tactical environment.</p>
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
                        SQUADRON MDO FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Domain Convergence in Urban Environments:</strong> Squadron-level urban operations represent critical convergence points for multi-domain operations, where land, air, maritime, space, and cyberspace domains intersect within troop tactical areas, requiring sophisticated coordination and synchronization to achieve tactical objectives while managing cascading effects across all domains.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 16px;">
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Land Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Ground Forces</strong> — Squadron ground force deployment</li>
                                <li><strong>Mobility</strong> — Squadron mobility corridors</li>
                                <li><strong>Urban Control</strong> — Urban area control</li>
                                <li><strong>Infrastructure</strong> — Critical infrastructure security</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Air Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Air Support</strong> — Squadron air support operations</li>
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
                                <li><strong>Cyber Operations</strong> — Squadron cyber operations</li>
                                <li><strong>Network Defense</strong> — Network defense operations</li>
                                <li><strong>Information Ops</strong> — Information operations integration</li>
                                <li><strong>EW Operations</strong> — Electronic warfare operations</li>
                            </ul>
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
                        SQUADRON INTELLIGENCE FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Tactical Intelligence Integration:</strong> Squadron-level urban operations require comprehensive intelligence fusion from multiple sources, disciplines, and joint partners to provide tactical situational awareness, threat assessment, and decision support for complex urban environments across multiple troop tactical areas and tactical time horizons.</p>
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
                                    <li><strong>Human Networks</strong> — Tactical human networks</li>
                                    <li><strong>Joint Sharing</strong> — Joint intelligence sharing</li>
                                    <li><strong>Cultural Intel</strong> — Cultural intelligence collection</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">SIGINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>COMINT</strong> — Tactical communications intercept</li>
                                    <li><strong>ELINT</strong> — Electronic intelligence collection</li>
                                    <li><strong>Cyber Intel</strong> — Cyber intelligence operations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">GEOINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Imagery Analysis</strong> — Tactical imagery analysis</li>
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
                            TACTICAL FIRES FRAMEWORK
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Squadron Fires Coordination:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Tactical fires in urban environments require precise coordination across multiple troops and domains to achieve tactical objectives while minimizing collateral damage, protecting civilian populations, and preserving critical infrastructure.</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Effects-Based Operations:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Squadron commanders must orchestrate lethal and non-lethal effects to achieve tactical objectives, considering second and third-order effects across complex urban systems and networks.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            TACTICAL TARGETING CONSIDERATIONS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Tactical Targeting:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Urban targeting at squadron level requires comprehensive analysis of target systems, collateral damage estimation, legal review processes, and tactical communication considerations to maintain legitimacy and effectiveness.</p>

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
                        TACTICAL EFFECTS COORDINATION
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Lethal Effects</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>PGMs</strong> — Precision guided munitions</li>
                                    <li><strong>Artillery</strong> — Squadron artillery operations</li>
                                    <li><strong>Aviation Fires</strong> — Squadron aviation fires</li>
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
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Tactical Considerations</h5>
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

            <!-- Squadron Sustainment Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-truck-loading" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Squadron Sustainment Operations
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        TACTICAL RECONNAISSANCE SUSTAINMENT FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Squadron Logistics Architecture:</strong> Squadron-level urban operations require comprehensive sustainment architecture capable of supporting multiple simultaneous troop operations across squadron tactical areas, integrating tactical lift capabilities, squadron distribution networks, and tactical reconnaissance sustainment operations while overcoming urban terrain challenges and security threats.</p>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3); margin-top: 16px;">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        TACTICAL RECONNAISSANCE SUSTAINMENT FUNCTIONS
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Reconnaissance Supply</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Squadron Supply</strong> — Squadron supply operations</li>
                                    <li><strong>Stockpile Mgmt</strong> — Tactical reconnaissance stockpile management</li>
                                    <li><strong>Joint Supply</strong> — Joint supply coordination</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Reconnaissance Transportation</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Airlift</strong> — Tactical reconnaissance airlift operations</li>
                                    <li><strong>Sealift</strong> — Tactical reconnaissance sealift coordination</li>
                                    <li><strong>Ground Transport</strong> — Squadron ground transportation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Reconnaissance Maintenance</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Squadron Maint</strong> — Squadron maintenance operations</li>
                                    <li><strong>Repair Capabilities</strong> — Tactical reconnaissance repair capabilities</li>
                                    <li><strong>Equipment Reset</strong> — Equipment reset operations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Reconnaissance Medical</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Squadron Medical</strong> — Squadron medical operations</li>
                                    <li><strong>MEDEVAC</strong> — Tactical reconnaissance medical evacuation</li>
                                    <li><strong>Medical Supply</strong> — Medical supply coordination</li>
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
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Squadron urban operations require integration with Air Force, Navy, Marine Corps, and Space Force capabilities at the tactical level, with each service contributing unique capabilities while maintaining unity of effort under squadron tactical control.</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Joint Planning:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Squadron-level joint planning processes must accommodate service-specific capabilities and limitations while developing coherent, synchronized operations that leverage complementary strengths across all services.</p>
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
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Coalition urban operations require coordination with NATO allies, regional partners, and host nation forces at the squadron level, managing diverse capabilities and procedures while maintaining tactical effectiveness.</p>

                            <div style="border-top: 1px solid rgba(37, 99, 235, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Interoperability Challenges:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Squadron commanders must address equipment compatibility, procedural differences, and varying rules of engagement while building coalition cohesion and shared understanding of tactical objectives.</p>
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

export default squadronTacticsModule;
