/**
 * Brigade Combat Team-Level Battle Drills Practical Examples
 * European Theater LSCO - NATO Article 5 Scenario
 * Tactical Command Level (Colonel, O-6)
 */

export function getBrigadeTacticsExample() {
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">

            <!-- Brigade Command Structure Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 20px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-users" style="margin-right: 12px; color: #16a34a; font-size: 18px;"></i>
                    Brigade Combat Team Command Structure - Tactical Operations
                </h2>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div style="background: rgba(22, 163, 74, 0.1); border: 1px solid rgba(22, 163, 74, 0.3); border-radius: 8px; padding: 16px;">
                        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-star" style="margin-right: 8px;"></i>
                            1st Armored Brigade Combat Team (United States)
                        </h3>
                        <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                            <p style="margin: 0 0 8px 0;"><strong style="color: #4ade80;">Command Authority:</strong> Colonel (O-6), tactical control of 4 combined arms battalions</p>
                            <p style="margin: 0 0 8px 0;"><strong style="color: #4ade80;">Area of Responsibility:</strong> Suwalki Gap sector, 12km frontage from Sejny to Punsk</p>
                            <p style="margin: 0 0 8px 0;"><strong style="color: #4ade80;">Forces Under Command:</strong> 4,200 personnel across 2 CABs, 1 Armor Battalion, 1 Artillery Battalion, BSB</p>
                            <p style="margin: 0;"><strong style="color: #4ade80;">Battle Drill Authority:</strong> Battalion-level coordination and tactical execution</p>
                        </div>
                    </div>

                    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 8px; padding: 16px;">
                        <h3 style="color: #60a5fa; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-cogs" style="margin-right: 8px;"></i>
                            Multi-National Battalion Integration
                        </h3>
                        <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                            <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">1st CAB (US):</strong> 2 Armor Companies, 2 Mechanized Infantry Companies, 1 Engineer Company</p>
                            <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">2nd CAB (US):</strong> 2 Armor Companies, 2 Mechanized Infantry Companies, 1 Engineer Company</p>
                            <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">1st Armor Battalion (US):</strong> 3 Armor Companies, 1 Mechanized Infantry Company</p>
                            <p style="margin: 0;"><strong style="color: #93c5fd;">2nd Battalion, 15th Infantry (POL):</strong> Polish mechanized battalion (OPCON)</p>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid #f59e0b; padding: 16px; border-radius: 6px;">
                    <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        Brigade Battle Drill Coordination Framework
                    </h4>
                    <p style="color: #fef3c7; font-size: 12px; line-height: 1.5; margin: 0;">
                        Brigade-level battle drills coordinate multi-battalion operations across 12km frontage, integrating
                        1-2 national contingents with standardized procedures for rapid response to tactical threats.
                        All battle drills must support division objectives while maintaining battalion-level tactical flexibility.
                    </p>
                </div>
            </div>

            <!-- Brigade-Level Battle Drill Examples -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Multi-Battalion Coordination Battle Drill -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h3 style="color: #f8fafc; font-size: 18px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-crosshairs" style="margin-right: 10px; color: #dc2626; font-size: 16px;"></i>
                        BD-B1: Multi-Battalion Tactical Coordination
                    </h3>

                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                            <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Scenario: Enemy Company Breakthrough</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Situation:</strong> Enemy mechanized company achieves 1.5km penetration through 1st CAB sector, threatening battalion boundary and brigade depth.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Forces Involved:</strong> 1st CAB, 2nd CAB, 1st Armor Battalion coordination</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Geographic Scope:</strong> 4km frontage across Suwalki Gap chokepoint</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                            <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Execution Sequence</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Phase 1 (0-5 min):</strong> Brigade commander authorizes battalion reserve commitment, activates BD-B1</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Phase 2 (5-15 min):</strong> Battalions execute boundary adjustments, commit company reserves</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Phase 3 (15-45 min):</strong> Brigade fires coordination, attack helicopter support</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Phase 4 (45-90 min):</strong> Multi-battalion counter-attack with Polish mechanized battalion</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.6);">
                            <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Command Relationships</h4>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">OPCON Transfer:</strong> Alpha Company passes from 2nd CAB to 1st CAB OPCON for coordinated counter-attack. Polish 2nd Battalion reinforces threatened sector under US tactical control.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Brigade Sustainment Crisis Drill -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h3 style="color: #f8fafc; font-size: 18px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; border-bottom: 2px solid rgba(16, 185, 129, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-truck-loading" style="margin-right: 10px; color: #10b981; font-size: 16px;"></i>
                        BD-B2: Brigade Sustainment Crisis Response
                    </h3>

                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 16px;">
                            <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Scenario: Brigade Support Area Attack</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Situation:</strong> Enemy artillery strike destroys brigade support area, creating critical ammunition and fuel shortfall for all battalions.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Impact:</strong> 60% reduction in brigade sustainment capacity, critical resupply required within 12 hours</p>
                                <p style="margin: 0;"><strong style="color: #6ee7b7;">Geographic Area:</strong> 12km supply corridor from division support area to forward battalions</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981; margin-bottom: 16px;">
                            <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Immediate Actions</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">0-15 min:</strong> Activate alternate supply routes, implement emergency rationing across all battalions</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">15-45 min:</strong> Deploy brigade engineer company for emergency infrastructure repair</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">45 min-3 hrs:</strong> Establish emergency resupply from division stocks</p>
                                <p style="margin: 0;"><strong style="color: #6ee7b7;">3-12 hrs:</strong> Complete alternate support area, restore 80% sustainment capacity</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.6);">
                            <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Multi-National Coordination</h4>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Host Nation Support:</strong> Polish Armed Forces provide emergency logistics support and facility security. German logistics units provide additional transportation assets for emergency resupply operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Tactical Intelligence Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 20px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-eye" style="margin-right: 12px; color: #7c3aed; font-size: 18px;"></i>
                    BD-B3: Brigade Tactical Intelligence Coordination
                </h2>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">

                    <!-- Intelligence Crisis Scenario -->
                    <div style="background: rgba(124, 58, 237, 0.1); border: 1px solid rgba(124, 58, 237, 0.3); border-radius: 8px; padding: 20px;">
                        <h3 style="color: #a78bfa; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                            <i class="fas fa-search" style="margin-right: 8px;"></i>
                            Scenario: Battalion Intelligence Fusion Crisis
                        </h3>
                        <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                            <p style="margin: 0 0 12px 0;"><strong style="color: #c4b5fd;">Situation:</strong> Multiple intelligence indicators suggest enemy company reserve commitment, but sources are fragmented across battalion intelligence sections. 3-hour window for actionable intelligence.</p>
                            <p style="margin: 0 0 12px 0;"><strong style="color: #c4b5fd;">Intelligence Sources:</strong> Battalion S-2 sections, company reconnaissance teams, brigade cavalry troop, UAV assets</p>
                            <p style="margin: 0 0 12px 0;"><strong style="color: #c4b5fd;">Challenge:</strong> Information sharing between battalions, time-sensitive targeting, tactical execution</p>
                            <p style="margin: 0;"><strong style="color: #c4b5fd;">Tactical Impact:</strong> Intelligence failure could result in tactical surprise affecting 4,200 personnel</p>
                        </div>
                    </div>

                    <!-- Battalion Intelligence Integration -->
                    <div style="background: rgba(37, 99, 235, 0.1); border: 1px solid rgba(37, 99, 235, 0.3); border-radius: 8px; padding: 20px;">
                        <h3 style="color: #60a5fa; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                            <i class="fas fa-users-cog" style="margin-right: 8px;"></i>
                            Multi-Battalion Intelligence Integration
                        </h3>
                        <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                            <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">1st CAB S-2:</strong> 4 Company intelligence sections and battalion reconnaissance platoon</p>
                            <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">2nd CAB S-2:</strong> 4 Company intelligence sections and battalion reconnaissance platoon</p>
                            <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Brigade S-2:</strong> Tactical intelligence fusion and analysis coordination</p>
                            <p style="margin: 0;"><strong style="color: #93c5fd;">Polish Liaison:</strong> 2nd Battalion intelligence officer provides regional expertise</p>
                        </div>
                    </div>
                </div>

                <!-- Tactical Reconnaissance Coordination -->
                <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(124, 58, 237, 0.08) 100%); padding: 20px; border-radius: 10px; border: 1px solid rgba(124, 58, 237, 0.4);">
                    <h3 style="color: #a78bfa; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                        <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                        Brigade-Level Reconnaissance and Collection Coordination
                    </h3>
                    <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                        <p style="margin: 0 0 12px 0;"><strong style="color: #a78bfa;">Aviation Assets:</strong> Brigade reconnaissance troop provides tactical reconnaissance with OH-58 Kiowa and UH-60 Black Hawk platforms. Coordination with battalion reconnaissance assets.</p>
                        <p style="margin: 0 0 12px 0;"><strong style="color: #a78bfa;">Ground Collection:</strong> Battalion reconnaissance platoons and company reconnaissance teams provide tactical intelligence feeding brigade picture.</p>
                        <p style="margin: 0;"><strong style="color: #a78bfa;">Electronic Warfare:</strong> Brigade EW section coordinates signals intelligence collection across battalion boundaries, provides tactical electronic attack capabilities.</p>
                    </div>
                </div>
            </div>

            <!-- Brigade Fires and Air Defense Coordination -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Brigade Fires Coordination -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h3 style="color: #f8fafc; font-size: 18px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-bullseye" style="margin-right: 10px; color: #f59e0b; font-size: 16px;"></i>
                        BD-B4: Brigade Tactical Fires Coordination
                    </h3>

                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Scenario: Company Deep Strike Coordination</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Situation:</strong> Enemy company reserves identified 8km behind front lines. Brigade commander authorizes deep strike operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Assets:</strong> Brigade artillery battalion, HIMARS section, attack helicopter section, Air Force CAS</p>
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Coordination:</strong> Multi-battalion fires coordination across 12km frontage</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b; margin-bottom: 16px;">
                            <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Fires Integration</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Battalion Mortars:</strong> 1st and 2nd CAB mortar platoons coordinate targeting</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Brigade Artillery:</strong> Artillery battalion provides deep fires and counter-battery</p>
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Air Support:</strong> Coordination with Air Force for joint fires and airspace deconfliction</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.6);">
                            <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Multi-National Coordination</h4>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Allied Integration:</strong> Polish 120mm mortars provide additional fires capability. Coordination through joint fires element ensures deconfliction and target prioritization.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Brigade Air Defense -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h3 style="color: #f8fafc; font-size: 18px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-shield-alt" style="margin-right: 10px; color: #2563eb; font-size: 16px;"></i>
                        BD-B5: Brigade Tactical Air Defense
                    </h3>

                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 16px;">
                            <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Scenario: Tactical Air Attack</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Threat:</strong> Enemy launches 10+ tactical missiles and 15+ attack helicopters targeting brigade command posts and battalion headquarters</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Targets:</strong> Brigade headquarters, battalion command posts, logistics nodes, key terrain</p>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Timeline:</strong> 2-5 minute flight time from launch to impact, coordinated with ground assault</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #2563eb; margin-bottom: 16px;">
                            <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Tactical Defense Response</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Layer 1:</strong> Brigade Avenger section provides area defense of critical brigade assets</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Layer 2:</strong> Battalion Stinger teams provide point defense of command posts</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Layer 3:</strong> Company and platoon Stinger teams provide final protective fires</p>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Layer 4:</strong> Individual soldier MANPADS systems</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.6);">
                            <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Multi-National Integration</h4>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Allied Integration:</strong> Polish GROM air defense systems provide additional coverage. Coordination with division air defense assets through tactical air defense coordination center.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Additional Brigade Battle Drills -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Brigade Mobility Operations -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h3 style="color: #f8fafc; font-size: 18px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; border-bottom: 2px solid rgba(139, 92, 246, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-route" style="margin-right: 10px; color: #8b5cf6; font-size: 16px;"></i>
                        BD-B6: Brigade Mobility and Countermobility Operations
                    </h3>

                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(139, 92, 246, 0.4); margin-bottom: 16px;">
                            <h4 style="color: #a78bfa; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Scenario: Creek Crossing Operations</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a78bfa;">Situation:</strong> Brigade must conduct hasty creek crossing of Czarna Hancza under enemy fire, coordinating 3 battalions and supporting assets.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a78bfa;">Assets:</strong> Brigade engineer company, bridging sections, battalion engineer platoons, aviation support</p>
                                <p style="margin: 0;"><strong style="color: #a78bfa;">Coordination:</strong> Multi-battalion crossing sites across 4km creek frontage</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
                            <h4 style="color: #a78bfa; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Engineer Coordination</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a78bfa;">Brigade Engineers:</strong> Brigade engineer company coordinates bridging operations and obstacle reduction</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a78bfa;">Battalion Engineers:</strong> Battalion engineer platoons provide assault crossing and site preparation</p>
                                <p style="margin: 0;"><strong style="color: #a78bfa;">Host Nation:</strong> Polish engineer platoon provides additional bridging assets and local expertise</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Brigade Communications -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(14, 165, 233, 0.1); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 75%, rgba(14, 165, 233, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(14, 165, 233, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h3 style="color: #f8fafc; font-size: 18px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; border-bottom: 2px solid rgba(14, 165, 233, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-satellite-dish" style="margin-right: 10px; color: #0ea5e9; font-size: 16px;"></i>
                        BD-B7: Brigade Communications Crisis Response
                    </h3>

                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(14, 165, 233, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(14, 165, 233, 0.4); margin-bottom: 16px;">
                            <h4 style="color: #38bdf8; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Scenario: Electronic Warfare Attack</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #38bdf8;">Situation:</strong> Enemy electronic warfare attack compromises primary communications between brigade headquarters and subordinate battalions</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #38bdf8;">Impact:</strong> Loss of secure communications with 1st CAB, 2nd CAB, and 1st Armor Battalion during critical tactical operations</p>
                                <p style="margin: 0;"><strong style="color: #38bdf8;">Timeline:</strong> Communications degradation detected at 0615 hours, full restoration required within 30 minutes</p>
                            </div>
                        </div>

                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #0ea5e9;">
                            <h4 style="color: #38bdf8; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Response Actions</h4>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #38bdf8;">Phase 1:</strong> Activate backup HF radio networks, implement EMCON procedures</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #38bdf8;">Phase 2:</strong> Deploy mobile SATCOM terminals from brigade signal section</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #38bdf8;">Phase 3:</strong> Coordinate with division signal assets for additional support</p>
                                <p style="margin: 0;"><strong style="color: #38bdf8;">Phase 4:</strong> Implement alternate command post procedures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Hybrid Warfare Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 20px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-mask" style="margin-right: 12px; color: #ef4444; font-size: 18px;"></i>
                    BD-B8: Brigade Hybrid Warfare and Asymmetric Threat Response
                </h2>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">

                    <!-- Hybrid Warfare Scenario -->
                    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 8px; padding: 20px;">
                        <h3 style="color: #f87171; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                            <i class="fas fa-user-secret" style="margin-right: 8px;"></i>
                            Scenario: Multi-Domain Hybrid Attack
                        </h3>
                        <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                            <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Situation:</strong> Enemy employs irregular forces, cyber attacks, disinformation campaigns, and conventional forces simultaneously across 12km brigade sector.</p>
                            <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Hybrid Elements:</strong> Unmarked special forces, local proxy forces, cyber warfare, information operations, conventional artillery</p>
                            <p style="margin: 0 0 12px 0;"><strong style="color: #fca5a5;">Challenge:</strong> Distinguish between combatants and civilians while maintaining rules of engagement compliance</p>
                            <p style="margin: 0;"><strong style="color: #fca5a5;">Tactical Impact:</strong> Protect 4,200 personnel while maintaining operational security and NATO credibility</p>
                        </div>
                    </div>

                    <!-- Multi-National Counter-Hybrid Integration -->
                    <div style="background: rgba(37, 99, 235, 0.1); border: 1px solid rgba(37, 99, 235, 0.3); border-radius: 8px; padding: 20px;">
                        <h3 style="color: #60a5fa; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                            <i class="fas fa-shield-check" style="margin-right: 8px;"></i>
                            Multi-National Counter-Hybrid Coordination
                        </h3>
                        <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                            <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">US Intelligence:</strong> Military intelligence company and cyber warfare specialists</p>
                            <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Polish Support:</strong> Internal security forces and local population liaison</p>
                            <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">German Assets:</strong> Information operations team and electronic warfare capabilities</p>
                            <p style="margin: 0;"><strong style="color: #93c5fd;">NATO Integration:</strong> Strategic communications center and legal advisory support</p>
                        </div>
                    </div>
                </div>

                <!-- Hybrid Warfare Response Execution -->
                <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 20px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.4);">
                    <h3 style="color: #f87171; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                        <i class="fas fa-crosshairs" style="margin-right: 8px;"></i>
                        Brigade-Level Hybrid Warfare Response Coordination and Execution
                    </h3>
                    <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                        <p style="margin: 0 0 12px 0;"><strong style="color: #f87171;">Phase 1 (0-1 hr):</strong> Activate intelligence fusion center, implement enhanced force protection measures, coordinate with Polish internal security forces.</p>
                        <p style="margin: 0 0 12px 0;"><strong style="color: #f87171;">Phase 2 (1-6 hrs):</strong> Execute counter-intelligence operations, deploy cyber defense teams, coordinate information operations response with German specialists.</p>
                        <p style="margin: 0 0 12px 0;"><strong style="color: #f87171;">Phase 3 (6-24 hrs):</strong> Conduct targeted operations against identified hybrid threats, maintain civilian protection protocols, coordinate with NATO legal advisors.</p>
                        <p style="margin: 0;"><strong style="color: #f87171;">Phase 4 (24+ hrs):</strong> Consolidate security operations, coordinate with host nation authorities for long-term security, implement lessons learned for future hybrid threat response.</p>
                    </div>
                </div>
            </div>

            <!-- Brigade Command Integration Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 20px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-chess-board" style="margin-right: 12px; color: #6366f1; font-size: 18px;"></i>
                    Brigade Battle Drill Integration and Tactical Execution Considerations
                </h2>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

                    <!-- Tactical Execution Integration -->
                    <div style="background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 8px; padding: 20px;">
                        <h3 style="color: #a5b4fc; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                            <i class="fas fa-sitemap" style="margin-right: 8px;"></i>
                            Tactical Execution Requirements
                        </h3>
                        <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                            <p style="margin: 0 0 12px 0;"><strong style="color: #a5b4fc;">Multi-Battalion Coordination:</strong> Brigade commanders must coordinate battle drill execution across 3-4 battalions simultaneously while maintaining tactical coherence and supporting division objectives.</p>
                            <p style="margin: 0 0 12px 0;"><strong style="color: #a5b4fc;">Resource Allocation:</strong> Tactical assets including fires, engineers, and logistics must be prioritized across competing battalion requirements based on mission priority.</p>
                            <p style="margin: 0;"><strong style="color: #a5b4fc;">Division Integration:</strong> Brigade battle drills must support division-level operations while maintaining tactical flexibility for subordinate battalion commanders.</p>
                        </div>
                    </div>

                    <!-- Lessons Learned -->
                    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 20px;">
                        <h3 style="color: #6ee7b7; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                            <i class="fas fa-lightbulb" style="margin-right: 8px;"></i>
                            Brigade Battle Drill Lessons Learned
                        </h3>
                        <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                            <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Exercise Validation:</strong> Combat Training Center exercises and Warfighter exercises validate brigade-level battle drill procedures and identify capability gaps.</p>
                            <p style="margin: 0 0 12px 0;"><strong style="color: #6ee7b7;">Multi-National Integration:</strong> Language barriers and different tactical procedures require extensive liaison and standardization efforts at battalion level.</p>
                            <p style="margin: 0;"><strong style="color: #6ee7b7;">Technology Integration:</strong> Modern brigade battle drills must incorporate combined arms operations concepts and emerging battlefield technologies.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Classification Footer -->
            <div style="text-align: center; padding: 20px; border-top: 2px solid #374151; margin-top: 30px;">
                <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 600;">
                    <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                    UNCLASSIFIED - Brigade Battle Drill Training Examples per FM 3-21.8, FM 5-0, and NATO STANAG 2014
                </p>
                <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 11px;">
                    European Theater LSCO Scenario - NATO Article 5 Multi-National Coalition Operations Training
                </p>
                <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 11px;">
                    Brigade-Level Tactical Battle Drill Coverage: Multi-Battalion Coordination, Sustainment, Intelligence, Fires, Air Defense, Mobility, Communications
                </p>
            </div>
        </div>
    `;
}

export default getBrigadeTacticsExample;

