/**
 * Regiment-Level Urban Operations Echelon Analysis
 * Comprehensive doctrinal analysis for Regiment-level urban operations
 * Command Level: Regiment Commander (Colonel, O-6)
 * Operational Scope: Regiment operations, battalion coordination
 * Character Target: 60,000-70,000 characters
 */

export const regimentTacticsModule = {
    getContent() {
        return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Regiment Urban Operations Header -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-medal" style="margin-right: 12px; color: #8b5cf6; font-size: 20px;"></i>
                    Regiment Urban Operations: Specialized Tactical Leadership
                </h2>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        REGIMENT COMMAND AUTHORITY
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0 0 8px 0;"><strong>Specialized Command Level:</strong> Regiment-level urban operations are conducted under the authority of Regiment Commanders (Colonel, O-6) with responsibility for specialized tactical execution, multi-battalion coordination, and decisive operations across regimental tactical areas within complex urban environments, particularly in Marine Corps and specialized Army formations.</p>
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Doctrinal Foundation:</strong> Regiment urban operations doctrine is based on ATP 3-06 (Urban Operations), FM 3-0 (Operations), MCWP 3-35.3 (Military Operations on Urbanized Terrain), and JP 3-06 (Joint Urban Operations), emphasizing specialized tactical leadership, decisive operations, and regimental integration in complex urban environments.</p>
                    </div>
                </div>
            </div>

            <!-- Regiment Urban Operations Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-city" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Regiment Urban Operations Overview
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-book-open" style="margin-right: 8px;"></i>
                            SPECIALIZED TACTICAL DOCTRINE
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Regiment Urban Framework:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Regiment-level urban operations encompass specialized tactical leadership and decisive operations across regimental tactical areas, requiring integration of battalion capabilities, joint enablers, and regimental support to achieve tactical objectives through synchronized multi-battalion operations in complex urban environments with specialized mission requirements.</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Specialized Leadership:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Regiment commanders must apply specialized tactical leadership to sequence and synchronize battalion operations, allocate regimental resources across multiple urban areas, and coordinate with joint forces while maintaining tactical momentum and operational flexibility in specialized mission environments.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-chess-board" style="margin-right: 8px;"></i>
                            MULTI-BATTALION INTEGRATION
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Battalion Convergence:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Regiment urban operations require seamless integration across multiple battalion areas, with urban environments serving as critical tactical nodes where battalion capabilities converge and interact in complex, interdependent relationships within specialized operational frameworks.</p>

                            <div style="border-top: 1px solid rgba(37, 99, 235, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Decisive Operations:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Regiment commanders must orchestrate multi-battalion effects to achieve decisive results, leveraging urban infrastructure, population centers, and information networks while protecting critical capabilities and maintaining tactical initiative in specialized mission environments.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        SPECIALIZED TACTICAL IMPERATIVES
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Specialized Operations</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Regiment Mission</strong> — Specialized mission accomplishment</li>
                                    <li><strong>Battalion Coordination</strong> — Multi-battalion unity of effort</li>
                                    <li><strong>Tactical Momentum</strong> — Tactical momentum maintenance</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Tactical Priorities</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Force Protection</strong> — Regiment force protection and survivability</li>
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
                                    <li><strong>Resource Constraints</strong> — Regiment resource allocation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Specialized Command and Control Architecture -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-sitemap" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Specialized Command and Control Architecture
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            REGIMENT C2 FRAMEWORK
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Specialized Command Architecture:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Regiment-level command and control for urban operations requires robust, redundant, and resilient communication systems capable of coordinating multiple simultaneous battalion operations across regimental tactical areas while maintaining unity of command, unity of effort, and tactical security in specialized mission environments.</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Command Integration:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Integration of battalions, joint enablers, and regimental support command structures to achieve unity of effort across multiple urban tactical areas with specialized capabilities</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            SPECIALIZED COMMUNICATION SYSTEMS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Tactical Networks:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Secure tactical communications, redundant terrestrial networks, joint interoperability systems, and cyber-resilient architectures with specialized mission requirements</p>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Decision Support:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Regiment intelligence platforms, tactical planning systems, real-time situational awareness, and specialized tactical assessment tools</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(99, 102, 241, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">
                        <h4 style="color: #a5b4fc; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                            COMMAND STRUCTURE
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Regiment Command:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Regiment Commander, Battalion Commanders, Joint Force Enablers, and Regimental Support Commands with specialized capabilities</p>

                            <div style="border-top: 1px solid rgba(99, 102, 241, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Command Relationships:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Regiment Command</strong> — Regimental command authority</li>
                                    <li><strong>Operational Control</strong> — Battalion operational control</li>
                                    <li><strong>Tactical Control</strong> — Company tactical control</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-cogs" style="margin-right: 8px;"></i>
                            COORDINATION MECHANISMS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Coordination Centers:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Regimental Operations Center (ROC), Regimental Intelligence Operations Center (RIOC), and Battalion Coordination Centers</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Integration Functions:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Planning</strong> — Specialized tactical planning coordination</li>
                                    <li><strong>Operations</strong> — Real-time operations coordination</li>
                                    <li><strong>Intelligence</strong> — Intelligence fusion and dissemination</li>
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
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Regiment urban operations require integration with Air Force, Navy, Marine Corps, and Space Force capabilities at the tactical level, with each service contributing unique capabilities while maintaining unity of effort under regimental tactical control in specialized mission environments.</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Joint Planning:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Regiment-level joint planning processes must accommodate service-specific capabilities and limitations while developing coherent, synchronized operations that leverage complementary strengths across all services in specialized operational frameworks.</p>
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
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Coalition urban operations require coordination with NATO allies, regional partners, and host nation forces at the regimental level, managing diverse capabilities and procedures while maintaining tactical effectiveness in specialized mission environments.</p>

                            <div style="border-top: 1px solid rgba(37, 99, 235, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Interoperability Challenges:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Regiment commanders must address equipment compatibility, procedural differences, and varying rules of engagement while building coalition cohesion and shared understanding of specialized tactical objectives.</p>
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

            <!-- Multi-Domain Operations Integration -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-cubes" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Multi-Domain Operations Integration
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        REGIMENT MDO FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Domain Convergence in Urban Environments:</strong> Regiment-level urban operations represent critical convergence points for multi-domain operations, where land, air, maritime, space, and cyberspace domains intersect within battalion tactical areas, requiring sophisticated coordination and synchronization to achieve tactical objectives while managing cascading effects across all domains in specialized mission environments.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Land Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Ground Forces</strong> — Specialized ground force deployment</li>
                                <li><strong>Mobility</strong> — Regiment mobility corridors</li>
                                <li><strong>Urban Control</strong> — Urban area control</li>
                                <li><strong>Infrastructure</strong> — Critical infrastructure security</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Air Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Air Support</strong> — Regiment air support operations</li>
                                <li><strong>Airlift</strong> — Specialized airlift operations</li>
                                <li><strong>ISR</strong> — Intelligence surveillance reconnaissance</li>
                                <li><strong>CAS</strong> — Close air support coordination</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Maritime Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Sea Control</strong> — Sea lines of communication</li>
                                <li><strong>Sealift</strong> — Specialized sealift operations</li>
                                <li><strong>Naval Fires</strong> — Naval surface fire support</li>
                                <li><strong>Amphibious</strong> — Amphibious operations support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            SPACE DOMAIN
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Regiment Space Operations:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Satellite communications, global positioning systems, intelligence collection platforms, and missile warning systems with specialized mission requirements</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Urban Dependencies:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Navigation system reliance, communication network dependencies, and precision timing requirements for specialized operations</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            CYBERSPACE DOMAIN
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Regiment Cyber Operations:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Critical infrastructure protection, information warfare operations, network defense and resilience, and cyber intelligence collection with specialized capabilities</p>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Urban Cyber Terrain:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Smart city infrastructure, public-private network integration, and social media influence operations in specialized environments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Specialized Intelligence and Information Fusion -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-search" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Specialized Intelligence and Information Fusion
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        REGIMENT INTELLIGENCE FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Specialized Intelligence Integration:</strong> Regiment-level urban operations require comprehensive intelligence fusion from multiple sources, disciplines, and joint partners to provide tactical situational awareness, threat assessment, and decision support for complex urban environments across multiple battalion tactical areas and tactical time horizons with specialized mission requirements.</p>
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
                                    <li><strong>Human Networks</strong> — Specialized human networks</li>
                                    <li><strong>Joint Sharing</strong> — Joint intelligence sharing</li>
                                    <li><strong>Cultural Intel</strong> — Cultural intelligence collection</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">SIGINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>COMINT</strong> — Specialized communications intercept</li>
                                    <li><strong>ELINT</strong> — Electronic intelligence collection</li>
                                    <li><strong>Cyber Intel</strong> — Cyber intelligence operations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">GEOINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Imagery Analysis</strong> — Specialized imagery analysis</li>
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

            <!-- Doctrinal References and Specialized Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book-open" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Doctrinal References and Specialized Framework
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
                            <p style="margin: 0 0 8px 0;"><strong>JP 1:</strong> Doctrine for the Armed Forces of the United States</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 2-0:</strong> Joint Intelligence (tactical intelligence operations)</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 3-12:</strong> Cyberspace Operations</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 3-13:</strong> Information Operations</p>
                            <p style="margin: 0;"><strong>JP 4-0:</strong> Joint Logistics (tactical sustainment)</p>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-chess-board" style="margin-right: 8px;"></i>
                            PRIMARY ARMY/MARINE DOCTRINE
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 8px 0;"><strong>ATP 3-06:</strong> Urban Operations (Army urban operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>MCWP 3-35.3:</strong> Military Operations on Urbanized Terrain</p>
                            <p style="margin: 0 0 8px 0;"><strong>ADP 3-0:</strong> Operations (fundamental Army operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>FM 3-0:</strong> Operations (comprehensive operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>FM 5-0:</strong> Operations Process (planning and execution)</p>
                            <p style="margin: 0 0 8px 0;"><strong>ATP 2-01:</strong> Intelligence and Electronic Warfare Operations</p>
                            <p style="margin: 0 0 8px 0;"><strong>FM 3-13:</strong> Information Operations</p>
                            <p style="margin: 0;"><strong>FM 4-0:</strong> Sustainment (Army sustainment operations)</p>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        REGIMENT URBAN OPERATIONS SPECIALIZED FRAMEWORK
                    </h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                        <p style="margin: 0 0 6px 0;"><strong>Doctrinal Foundation:</strong></p>
                        <p style="margin: 0 0 14px 0; padding-left: 12px;">Regiment-level urban operations doctrine provides the specialized tactical framework for planning, executing, and assessing complex urban operations across multiple battalion areas and domains while integrating joint, coalition, and interagency capabilities to achieve tactical objectives in challenging specialized tactical environments.</p>

                        <div style="border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 12px; margin-bottom: 14px;">
                            <p style="margin: 0 0 6px 0;"><strong>Specialized Integration:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">This doctrinal framework enables regiment commanders to synchronize urban operations with broader tactical objectives, coordinate with multiple stakeholders, and adapt to dynamic tactical conditions while maintaining tactical coherence and tactical effectiveness across the full spectrum of specialized military operations.</p>
                        </div>

                        <div style="border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 12px;">
                            <p style="margin: 0 0 6px 0;"><strong>Future Development:</strong></p>
                            <p style="margin: 0; padding-left: 12px;">Regiment urban operations doctrine continues to evolve in response to emerging threats, technological advances, and lessons learned from contemporary operations, requiring continuous adaptation and refinement to maintain relevance and effectiveness in an increasingly complex and urbanized specialized tactical environment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Specialized Fires and Effects Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-crosshairs" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Specialized Fires and Effects Coordination
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            SPECIALIZED FIRES FRAMEWORK
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Regiment Fires Coordination:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Specialized fires in urban environments require precise coordination across multiple battalions and domains to achieve tactical objectives while minimizing collateral damage, protecting civilian populations, and preserving critical infrastructure in specialized mission environments.</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Effects-Based Operations:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Regiment commanders must orchestrate lethal and non-lethal effects to achieve tactical objectives, considering second and third-order effects across complex urban systems and networks in specialized operational contexts.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            SPECIALIZED TARGETING CONSIDERATIONS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Specialized Targeting:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Urban targeting at regiment level requires comprehensive analysis of target systems, collateral damage estimation, legal review processes, and tactical communication considerations to maintain legitimacy and effectiveness in specialized environments.</p>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Precision Requirements:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Urban environments demand maximum precision to achieve tactical effects while protecting civilian populations, cultural sites, and essential infrastructure required for post-conflict stability in specialized operational contexts.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        SPECIALIZED EFFECTS COORDINATION
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Lethal Effects</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>PGMs</strong> — Precision guided munitions</li>
                                    <li><strong>Artillery</strong> — Regiment artillery operations</li>
                                    <li><strong>Aviation Fires</strong> — Regiment aviation fires</li>
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
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Specialized Considerations</h5>
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

            <!-- Regiment Sustainment Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-truck-loading" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Regiment Sustainment Operations
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        SPECIALIZED SUSTAINMENT FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Regiment Logistics Architecture:</strong> Regiment-level urban operations require comprehensive sustainment architecture capable of supporting multiple simultaneous battalion operations across regimental tactical areas, integrating tactical lift capabilities, regimental distribution networks, and specialized sustainment operations while overcoming urban terrain challenges and security threats in specialized mission environments.</p>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3); margin-top: 16px;">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        SPECIALIZED SUSTAINMENT FUNCTIONS
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Specialized Supply</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Regiment Supply</strong> — Regiment supply operations</li>
                                    <li><strong>Stockpile Mgmt</strong> — Specialized stockpile management</li>
                                    <li><strong>Joint Supply</strong> — Joint supply coordination</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Specialized Transportation</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Airlift</strong> — Specialized airlift operations</li>
                                    <li><strong>Sealift</strong> — Specialized sealift coordination</li>
                                    <li><strong>Ground Transport</strong> — Regiment ground transportation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Specialized Maintenance</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Regiment Maint</strong> — Regiment maintenance operations</li>
                                    <li><strong>Repair Capabilities</strong> — Specialized repair capabilities</li>
                                    <li><strong>Equipment Reset</strong> — Equipment reset operations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Specialized Medical</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Regiment Medical</strong> — Regiment medical operations</li>
                                    <li><strong>MEDEVAC</strong> — Specialized medical evacuation</li>
                                    <li><strong>Medical Supply</strong> — Medical supply coordination</li>
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

export default regimentTacticsModule;
