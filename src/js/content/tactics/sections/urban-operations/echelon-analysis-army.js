/**
 * Army-Level Urban Operations Echelon Analysis
 * Comprehensive doctrinal analysis for Army-level urban operations
 * Command Level: Army Commander (4-star General)
 * Operational Scope: Theater Army operations, multiple corps coordination
 * Character Target: 70,000-80,000 characters
 */

export const armyTacticsModule = {
    getContent() {
        return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Army Urban Operations Header -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-star" style="margin-right: 12px; color: #8b5cf6; font-size: 20px;"></i>
                    Army-Level Urban Operations: Operational Doctrine and Planning
                </h2>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        ARMY COMMAND AUTHORITY
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0 0 8px 0;"><strong>Operational Command Level:</strong> Army-level urban operations are conducted under the authority of Army Commanders (4-star General) with responsibility for operational planning, multi-corps coordination, and theater army support across multiple urban operational areas within the assigned theater of operations.</p>
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Doctrinal Foundation:</strong> Army urban operations doctrine is based on ATP 3-06 (Urban Operations), FM 3-0 (Operations), and JP 3-06 (Joint Urban Operations), emphasizing operational art, multi-corps integration, and theater army coordination in complex urban environments.</p>
                    </div>
                </div>
            </div>

            <!-- Army-Level Urban Operations Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-city" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Army-Level Urban Operations Overview
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-book-open" style="margin-right: 8px;"></i>
                            OPERATIONAL URBAN OPERATIONS DOCTRINE
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Army Urban Framework:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Army-level urban operations encompass operational planning and coordination of multiple simultaneous corps operations across theater army areas, requiring integration of corps capabilities, joint enablers, and theater support to achieve operational objectives in complex urban environments.</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Operational Considerations:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Army commanders must balance competing corps operational requirements, allocate theater army resources across multiple urban areas, coordinate with joint forces, and manage operational risks while maintaining operational flexibility and tactical responsiveness.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-chess-board" style="margin-right: 8px;"></i>
                            MULTI-CORPS INTEGRATION
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Corps Convergence:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Army urban operations require seamless integration across multiple corps areas, with urban environments serving as critical operational nodes where corps capabilities converge and interact in complex, interdependent relationships.</p>

                            <div style="border-top: 1px solid rgba(37, 99, 235, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Operational Effects:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Army commanders must orchestrate multi-corps effects to achieve operational objectives, leveraging urban infrastructure, population centers, and information networks while protecting critical capabilities and maintaining operational initiative.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        OPERATIONAL PLANNING IMPERATIVES
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Objectives</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Theater Army Goals</strong> — Theater army mission accomplishment</li>
                                    <li><strong>Corps Coordination</strong> — Multi-corps unity of effort</li>
                                    <li><strong>Operational Stability</strong> — Regional operational stability</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Priorities</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Force Protection</strong> — Army force protection and survivability</li>
                                    <li><strong>Civilian Protection</strong> — Civilian population protection</li>
                                    <li><strong>Infrastructure</strong> — Critical infrastructure preservation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Constraints</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Legal Framework</strong> — International law compliance</li>
                                    <li><strong>ROE Limitations</strong> — Rules of engagement limitations</li>
                                    <li><strong>Resource Constraints</strong> — Theater army resource allocation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Operational Command and Control Architecture -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-sitemap" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Operational Command and Control Architecture
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            ARMY C2 FRAMEWORK
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Operational Command Architecture:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Army-level command and control for urban operations requires robust, redundant, and resilient communication systems capable of coordinating multiple simultaneous corps operations across theater army areas while maintaining unity of command, unity of effort, and operational security.</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Command Integration:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Integration of corps, joint enablers, and theater support command structures to achieve unity of effort across multiple urban operational areas</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            COMMUNICATION SYSTEMS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Operational Networks:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Secure satellite communications, redundant terrestrial networks, joint interoperability systems, and cyber-resilient architectures</p>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Decision Support:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Army intelligence platforms, operational planning systems, real-time situational awareness, and operational assessment tools</p>
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
                            <p style="margin: 0 0 6px 0;"><strong>Army Command:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Army Commander, Corps Commanders, Joint Force Enablers, and Theater Support Commands</p>

                            <div style="border-top: 1px solid rgba(99, 102, 241, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Command Relationships:</strong></p>
                                <ul style="margin: 0 0 12px 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Army Command</strong> — Theater army command authority</li>
                                    <li><strong>Operational Control</strong> — Corps operational control</li>
                                    <li><strong>Tactical Control</strong> — Division tactical control</li>
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
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Army Operations Center (AOC), Army Intelligence Operations Center (AIOC), and Corps Coordination Centers</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Integration Functions:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Planning</strong> — Operational planning coordination</li>
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
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Army urban operations require integration with Air Force, Navy, Marine Corps, and Space Force capabilities at the operational level, with each service contributing unique capabilities while maintaining unity of effort under army operational control.</p>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Joint Planning:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Army-level joint planning processes must accommodate service-specific capabilities and limitations while developing coherent, synchronized operations that leverage complementary strengths across all services.</p>
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
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Coalition urban operations require coordination with NATO allies, regional partners, and host nation forces at the army level, managing diverse capabilities and procedures while maintaining operational effectiveness.</p>

                            <div style="border-top: 1px solid rgba(37, 99, 235, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Interoperability Challenges:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Army commanders must address equipment compatibility, procedural differences, and varying rules of engagement while building coalition cohesion and shared understanding of operational objectives.</p>
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
                        ARMY MDO FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Domain Convergence in Urban Environments:</strong> Army-level urban operations represent critical convergence points for multi-domain operations, where land, air, maritime, space, and cyberspace domains intersect within corps operational areas, requiring sophisticated coordination and synchronization to achieve operational objectives while managing cascading effects across all domains.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Land Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Ground Forces</strong> — Operational ground force deployment</li>
                                <li><strong>Mobility</strong> — Army mobility corridors</li>
                                <li><strong>Urban Control</strong> — Urban area control</li>
                                <li><strong>Infrastructure</strong> — Critical infrastructure security</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Air Domain Integration</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Air Support</strong> — Army air support operations</li>
                                <li><strong>Airlift</strong> — Operational airlift operations</li>
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
                                <li><strong>Sealift</strong> — Operational sealift operations</li>
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
                            <p style="margin: 0 0 6px 0;"><strong>Army Space Operations:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Satellite communications, global positioning systems, intelligence collection platforms, and missile warning systems</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Urban Dependencies:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Navigation system reliance, communication network dependencies, and precision timing requirements</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            CYBERSPACE DOMAIN
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Army Cyber Operations:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Critical infrastructure protection, information warfare operations, network defense and resilience, and cyber intelligence collection</p>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Urban Cyber Terrain:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Smart city infrastructure, public-private network integration, and social media influence operations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Operational Intelligence and Information Fusion -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-search" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Operational Intelligence and Information Fusion
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        ARMY INTELLIGENCE FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Operational Intelligence Integration:</strong> Army-level urban operations require comprehensive intelligence fusion from multiple sources, disciplines, and joint partners to provide operational situational awareness, threat assessment, and decision support for complex urban environments across multiple corps operational areas and operational time horizons.</p>
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
                                    <li><strong>Human Networks</strong> — Operational human networks</li>
                                    <li><strong>Joint Sharing</strong> — Joint intelligence sharing</li>
                                    <li><strong>Cultural Intel</strong> — Cultural intelligence collection</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">SIGINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>COMINT</strong> — Operational communications intercept</li>
                                    <li><strong>ELINT</strong> — Electronic intelligence collection</li>
                                    <li><strong>Cyber Intel</strong> — Cyber intelligence operations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">GEOINT Integration</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Imagery Analysis</strong> — Operational imagery analysis</li>
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

            <!-- Operational Fires and Effects Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-crosshairs" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Operational Fires and Effects Coordination
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            OPERATIONAL FIRES FRAMEWORK
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Army Fires Coordination:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Operational fires in urban environments require precise coordination across multiple corps and domains to achieve operational objectives while minimizing collateral damage, protecting civilian populations, and preserving critical infrastructure.</p>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Effects-Based Operations:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Army commanders must orchestrate lethal and non-lethal effects to achieve operational objectives, considering second and third-order effects across complex urban systems and networks.</p>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            URBAN TARGETING CONSIDERATIONS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Operational Targeting:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">Urban targeting at army level requires comprehensive analysis of target systems, collateral damage estimation, legal review processes, and operational communication considerations to maintain legitimacy and effectiveness.</p>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 6px 0;"><strong>Precision Requirements:</strong></p>
                                <p style="margin: 0; padding-left: 12px;">Urban environments demand maximum precision to achieve operational effects while protecting civilian populations, cultural sites, and essential infrastructure required for post-conflict stability.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        OPERATIONAL EFFECTS COORDINATION
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Lethal Effects</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>PGMs</strong> — Precision guided munitions</li>
                                    <li><strong>Artillery</strong> — Army artillery operations</li>
                                    <li><strong>Aviation Fires</strong> — Army aviation fires</li>
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
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Urban Considerations</h5>
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

            <!-- Army Sustainment Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-truck-loading" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Army Sustainment Operations
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        OPERATIONAL SUSTAINMENT FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Army Logistics Architecture:</strong> Army-level urban operations require comprehensive sustainment architecture capable of supporting multiple simultaneous corps operations across theater army areas, integrating operational lift capabilities, army distribution networks, and tactical sustainment operations while overcoming urban terrain challenges and security threats.</p>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3); margin-top: 16px;">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        OPERATIONAL SUSTAINMENT FUNCTIONS
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Supply</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Army Supply</strong> — Army supply operations</li>
                                    <li><strong>Stockpile Mgmt</strong> — Operational stockpile management</li>
                                    <li><strong>Joint Supply</strong> — Joint supply coordination</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Transportation</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Airlift</strong> — Operational airlift operations</li>
                                    <li><strong>Sealift</strong> — Operational sealift coordination</li>
                                    <li><strong>Ground Transport</strong> — Army ground transportation</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Maintenance</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Army Maint</strong> — Army maintenance operations</li>
                                    <li><strong>Repair Capabilities</strong> — Operational repair capabilities</li>
                                    <li><strong>Equipment Reset</strong> — Equipment reset operations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Medical</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Army Medical</strong> — Army medical operations</li>
                                    <li><strong>MEDEVAC</strong> — Operational medical evacuation</li>
                                    <li><strong>Medical Supply</strong> — Medical supply coordination</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Operational Civil-Military Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-hands-helping" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Operational Civil-Military Operations
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        ARMY CMO FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Operational Civil-Military Integration:</strong> Army-level civil-military operations require comprehensive coordination with host nation governments, international organizations, non-governmental organizations, and civilian populations across multiple corps areas to achieve operational objectives while maintaining legitimacy and popular support for military operations.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 16px;">
                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Humanitarian Assistance</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Operational Coordination</strong> — Operational coordination mechanisms</li>
                                <li><strong>Humanitarian Law</strong> — International humanitarian law</li>
                                <li><strong>NGO Partnerships</strong> — NGO partnership agreements</li>
                                <li><strong>Host Nation</strong> — Host nation coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Governance Support</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Capacity Building</strong> — Government capacity building</li>
                                <li><strong>Rule of Law</strong> — Rule of law support</li>
                                <li><strong>Democratic Institutions</strong> — Democratic institution development</li>
                                <li><strong>Civil Society</strong> — Civil society engagement</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                        <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Population Engagement</h5>
                        <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                <li><strong>Public Information</strong> — Public information campaigns</li>
                                <li><strong>Media Engagement</strong> — Media engagement strategies</li>
                                <li><strong>Cultural Sensitivity</strong> — Cultural sensitivity programs</li>
                                <li><strong>Community Leaders</strong> — Community leader engagement</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Operational Information Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-broadcast-tower" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Operational Information Operations
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        OPERATIONAL IO FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Information Environment Control:</strong> Army-level information operations require comprehensive control of the information environment across multiple corps areas, integrating operational communications, psychological operations, and electronic warfare to achieve information superiority and influence target audiences while maintaining credibility and legitimacy with key stakeholders.</p>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3); margin-top: 16px;">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        OPERATIONAL INFORMATION CAPABILITIES
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Communications</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Public Affairs</strong> — Public affairs operations</li>
                                    <li><strong>Operational Messaging</strong> — Operational messaging coordination</li>
                                    <li><strong>Media Engagement</strong> — Media engagement strategies</li>
                                    <li><strong>Joint Info</strong> — Joint information coordination</li>
                                </ul>
                            </div>
                        </div>

                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Psychological Operations</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Target Analysis</strong> — Target audience analysis</li>
                                    <li><strong>Influence Campaigns</strong> — Influence campaign development</li>
                                    <li><strong>Behavioral Change</strong> — Behavioral change operations</li>
                                    <li><strong>Counter-Propaganda</strong> — Counter-propaganda efforts</li>
                                </ul>
                            </div>
                        </div>

                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Electronic Warfare</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Electronic Attack</strong> — Electronic attack operations</li>
                                    <li><strong>Electronic Protection</strong> — Electronic protection measures</li>
                                    <li><strong>EW Support</strong> — Electronic warfare support</li>
                                    <li><strong>Spectrum Mgmt</strong> — Spectrum management</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Operational Risk Assessment and Management -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Operational Risk Assessment and Management
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        ARMY RISK FRAMEWORK
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Operational Risk Management:</strong> Army-level urban operations require comprehensive risk assessment and management across multiple domains, corps areas, and operational time horizons, balancing operational requirements with operational constraints while maintaining acceptable risk levels for mission accomplishment and force protection.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            OPERATIONAL RISKS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Political Risks:</strong></p>
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Joint Unity</strong> — Joint unity degradation</li>
                                <li><strong>Host Nation Support</strong> — Host nation support loss</li>
                                <li><strong>Operational Legitimacy</strong> — Operational legitimacy erosion</li>
                                <li><strong>Public Support</strong> — Public support decline</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            FORCE PROTECTION RISKS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Force Protection:</strong></p>
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Mass Casualties</strong> — Mass casualty events</li>
                                <li><strong>Asymmetric Threats</strong> — Asymmetric threat attacks</li>
                                <li><strong>CBRN Threats</strong> — Chemical/biological threats</li>
                                <li><strong>Cyber Vulnerabilities</strong> — Cyber attack vulnerabilities</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(99, 102, 241, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">
                        <h4 style="color: #a5b4fc; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                            URBAN-SPECIFIC RISKS
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Civilian Impact:</strong></p>
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Civilian Casualties</strong> — Mass civilian casualties</li>
                                <li><strong>Humanitarian Crisis</strong> — Humanitarian crisis escalation</li>
                                <li><strong>Infrastructure Collapse</strong> — Infrastructure collapse</li>
                                <li><strong>Cultural Destruction</strong> — Cultural site destruction</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Operational Planning Considerations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-chess" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Operational Planning Considerations
                </h3>

                <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        OPERATIONAL DECISION FACTORS
                    </h4>
                    <div style="color: #e9d5ff; font-size: 13px; line-height: 1.8; text-align: left; margin: 0; text-align: left;">
                        <p style="margin: 0; font-style: italic; font-size: 12px;"><strong>Operational Planning Framework:</strong> Army-level urban operations planning requires comprehensive analysis of operational objectives, operational constraints, resource limitations, and risk factors to develop feasible, acceptable, and suitable courses of action for complex urban environments while maintaining operational coherence and operational effectiveness across multiple domains and operational time horizons.</p>
                    </div>
                </div>

                <div style="background: rgba(16, 185, 129, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3); margin-top: 16px;">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                        OPERATIONAL PLANNING IMPERATIVES
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px;">
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Objectives</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Army Mission</strong> — Army mission alignment</li>
                                    <li><strong>Joint Objectives</strong> — Joint objective integration</li>
                                    <li><strong>Operational Goals</strong> — Operational stability goals</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Resource Allocation</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Force Structure</strong> — Force structure optimization</li>
                                    <li><strong>Capability Priority</strong> — Capability prioritization</li>
                                    <li><strong>Sustainment</strong> — Sustainment planning</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Sequencing</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Phase Transitions</strong> — Phase transition criteria</li>
                                    <li><strong>Simultaneous Ops</strong> — Simultaneous operation coordination</li>
                                    <li><strong>Operational Timing</strong> — Operational timing considerations</li>
                                </ul>
                            </div>
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.15); padding: 14px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.4);">
                            <h5 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Operational Constraints</h5>
                            <div style="color: #d1d5db; font-size: 13px; line-height: 1.7; text-align: left; text-align: left;">
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.7;">
                                    <li><strong>Legal Framework</strong> — Legal framework compliance</li>
                                    <li><strong>Political Sensitivity</strong> — Political sensitivity management</li>
                                    <li><strong>Resource Limits</strong> — Resource limitation acceptance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal References and Operational Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book-open" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                    Doctrinal References and Operational Framework
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
                            <p style="margin: 0 0 8px 0;"><strong>JP 5-0:</strong> Joint Planning (operational planning)</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 1:</strong> Doctrine for the Armed Forces of the United States</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 2-0:</strong> Joint Intelligence (operational intelligence operations)</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 3-12:</strong> Cyberspace Operations</p>
                            <p style="margin: 0 0 8px 0;"><strong>JP 3-13:</strong> Information Operations</p>
                            <p style="margin: 0;"><strong>JP 4-0:</strong> Joint Logistics (operational sustainment)</p>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-chess-board" style="margin-right: 8px;"></i>
                            PRIMARY ARMY DOCTRINE
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                            <p style="margin: 0 0 8px 0;"><strong>ATP 3-06:</strong> Urban Operations (Army urban operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>ADP 3-0:</strong> Operations (fundamental Army operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>FM 3-0:</strong> Operations (comprehensive operations doctrine)</p>
                            <p style="margin: 0 0 8px 0;"><strong>ADP 1:</strong> The Army (Army foundational doctrine)</p>
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
                        ARMY URBAN OPERATIONS OPERATIONAL FRAMEWORK
                    </h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left; text-align: left;">
                        <p style="margin: 0 0 6px 0;"><strong>Doctrinal Foundation:</strong></p>
                        <p style="margin: 0 0 14px 0; padding-left: 12px;">Army-level urban operations doctrine provides the operational framework for planning, executing, and assessing complex urban operations across multiple corps areas and domains while integrating joint, coalition, and interagency capabilities to achieve operational objectives in challenging operational environments.</p>

                        <div style="border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 12px; margin-bottom: 14px;">
                            <p style="margin: 0 0 6px 0;"><strong>Operational Integration:</strong></p>
                            <p style="margin: 0 0 14px 0; padding-left: 12px;">This doctrinal framework enables army commanders to synchronize urban operations with broader operational objectives, coordinate with multiple stakeholders, and adapt to dynamic operational conditions while maintaining operational coherence and operational effectiveness across the full spectrum of military operations.</p>
                        </div>

                        <div style="border-top: 1px solid rgba(16, 185, 129, 0.2); padding-top: 12px;">
                            <p style="margin: 0 0 6px 0;"><strong>Future Development:</strong></p>
                            <p style="margin: 0; padding-left: 12px;">Army urban operations doctrine continues to evolve in response to emerging threats, technological advances, and lessons learned from contemporary operations, requiring continuous adaptation and refinement to maintain relevance and effectiveness in an increasingly complex and urbanized operational environment.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        `;
    }
};

export default armyTacticsModule;
