/**
 * Tactics: Reconnaissance & Security - Echelon Analysis (Squadron Level)
 * Doctrinal Analysis and Planning Framework for Squadron-Level Reconnaissance and Security Operations
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 * Command Level: Squadron Commander (Lieutenant Colonel O-5)
 * Primary Doctrine: FM 3-20 (Reconnaissance and Security Operations), FM 3-0 (Operations)
 * Supporting Doctrine: ATP 3-90 (Offense and Defense), ATP 2-01.3 (Intelligence Preparation of the Battlefield)
 * Target: 55,000-65,000 characters of squadron-level doctrinal reconnaissance and security analysis
 */

export const squadronTacticsModule = {
  getContent(){
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-horse-head" style="margin-right: 12px; color: #a855f7; font-size: 20px;"></i>
                    Squadron-Level Reconnaissance and Security Operations: Doctrinal Analysis and Planning Framework
                </h2>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4);">
                    <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Doctrinal Context and Scope</h3>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Command Level:</strong> Squadron Commander (Lieutenant Colonel O-5) commanding 300-1,000 personnel across 500-3,000 km² operational area with 24-72 hour planning horizon. Squadron-level reconnaissance and security operations provide tactical intelligence enabling troop operations and supporting regiment/brigade operational objectives. Squadrons execute direct reconnaissance and security missions with cavalry/armor focus, engaging adversary forces to develop the situation and protect friendly forces across multiple troop areas of operations.</p>
                    </div>
                </div>
            </div>

            <!-- Fundamental Principles -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book-open" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Fundamental Principles of Squadron Reconnaissance and Security Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-search" style="margin-right: 8px;"></i>
                            Seven Principles of Squadron Reconnaissance
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Orient on Tactical Objectives:</strong> Focus on squadron commander's tactical priorities</li>
                                <li style="margin-bottom: 8px;"><strong>Report Information Rapidly:</strong> Disseminate intelligence within troop decision cycles</li>
                                <li style="margin-bottom: 8px;"><strong>Retain Freedom of Maneuver:</strong> Avoid decisive engagement of reconnaissance forces</li>
                                <li style="margin-bottom: 8px;"><strong>Gain and Maintain Enemy Contact:</strong> Continuous surveillance of adversary forces</li>
                                <li style="margin-bottom: 8px;"><strong>Develop the Situation:</strong> Determine adversary capabilities and intentions</li>
                                <li style="margin-bottom: 8px;"><strong>Task-Organize for Mission:</strong> Tailor reconnaissance forces to tactical requirements</li>
                                <li style="margin-bottom: 8px;"><strong>Employ Multiple Assets:</strong> Integrate troop and platoon reconnaissance</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Five Principles of Squadron Security Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Provide Early and Accurate Warning:</strong> Alert troop commanders 1-3 hours in advance</li>
                                <li style="margin-bottom: 8px;"><strong>Provide Reaction Time and Maneuver Space:</strong> Enable troops to deploy forces</li>
                                <li style="margin-bottom: 8px;"><strong>Orient on the Protected Force:</strong> Security focused on protecting troop operations</li>
                                <li style="margin-bottom: 8px;"><strong>Perform Continuous Reconnaissance:</strong> Maintain persistent surveillance</li>
                                <li style="margin-bottom: 8px;"><strong>Maintain Enemy Contact:</strong> Track adversary forces throughout tactical depth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Squadron Reconnaissance Planning Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Squadron Reconnaissance Planning Framework (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Squadron Reconnaissance Planning Doctrine</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Doctrinal Foundation:</strong> Squadron reconnaissance planning follows Troop Leading Procedures (TLP) per FM 3-20.96 and integrates with regiment/brigade reconnaissance operations. Squadron commanders develop reconnaissance plans supporting tactical objectives across 3-5 troop areas of operations. Planning accounts for tactical depth (5-15 km), multiple subordinate troops, and integration with regiment/brigade ISR assets over 24-72 hour tactical timelines. The squadron S2 serves as the primary staff officer responsible for reconnaissance planning, coordinating with the S3 for tactical integration and synchronizing with regiment/brigade S2 for operational ISR support.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Planning Process:</strong> The squadron S2 leads reconnaissance planning through four phases: (1) Tactical Reconnaissance Planning - define squadron PIR based on tactical objectives; (2) ISR Asset Allocation - assign regiment/brigade and troop ISR assets to collection requirements; (3) Reconnaissance Synchronization - integrate operations across troop areas; (4) Execution and Assessment - conduct operations and assess effectiveness against PIR. Each phase requires close coordination between squadron staff, troop commanders, and regiment/brigade S2 to ensure comprehensive intelligence coverage across the squadron area of operations.</p>

                        <p style="margin: 0;"><strong>Commander's Role:</strong> The squadron commander provides reconnaissance guidance during mission analysis, approves squadron PIR, and prioritizes intelligence requirements based on tactical objectives. The commander's reconnaissance guidance shapes the entire planning process, ensuring reconnaissance operations directly support the squadron's tactical mission and enable troop operations across multiple areas of operations within the 24-72 hour planning horizon.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
                    <div>
                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 1: Tactical Planning</strong></p>
                        <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Analyze squadron tactical objectives</li>
                            <li><strong>Step 2:</strong> Develop squadron PIR and IR</li>
                            <li><strong>Step 3:</strong> Identify intelligence gaps</li>
                            <li><strong>Step 4:</strong> Coordinate with regiment/brigade S2</li>
                            <li><strong>Step 5:</strong> Integrate troop reconnaissance requirements</li>
                        </ul>

                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 2: ISR Asset Allocation</strong></p>
                        <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Request regiment/brigade ISR support</li>
                            <li><strong>Step 2:</strong> Allocate squadron reconnaissance troop</li>
                            <li><strong>Step 3:</strong> Assign troop reconnaissance assets</li>
                            <li><strong>Step 4:</strong> Coordinate UAS support</li>
                            <li><strong>Step 5:</strong> Establish collection priorities</li>
                        </ul>
                    </div>

                    <div>
                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 3: Reconnaissance Synchronization</strong></p>
                        <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Synchronize troop reconnaissance operations</li>
                            <li><strong>Step 2:</strong> Integrate regiment/brigade ISR support</li>
                            <li><strong>Step 3:</strong> Coordinate collection management</li>
                            <li><strong>Step 4:</strong> Establish intelligence dissemination procedures</li>
                            <li><strong>Step 5:</strong> Conduct ISR synchronization meeting</li>
                        </ul>

                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 4: Execution and Assessment</strong></p>
                        <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Execute reconnaissance operations</li>
                            <li><strong>Step 2:</strong> Assess effectiveness against PIR</li>
                            <li><strong>Step 3:</strong> Identify collection shortfalls</li>
                            <li><strong>Step 4:</strong> Reallocate ISR assets as needed</li>
                            <li><strong>Step 5:</strong> Update squadron intelligence estimate</li>
                        </ul>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 20px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            Tactical Objectives
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Planning Focus:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Squadron decisive points</li>
                                <li style="margin-bottom: 4px;">Troop tactical objectives</li>
                                <li style="margin-bottom: 4px;">Adversary tactical capabilities</li>
                                <li style="margin-bottom: 4px;">Tactical terrain analysis</li>
                                <li style="margin-bottom: 4px;">Key obstacles and chokepoints</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Considerations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Regiment/brigade operational objectives</li>
                                <li style="margin-bottom: 4px;">Squadron commander's intent</li>
                                <li style="margin-bottom: 4px;">Troop mission requirements</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-list-check" style="margin-right: 8px;"></i>
                            Priority Intelligence Requirements
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Squadron PIR Categories:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Adversary company-level formations</li>
                                <li style="margin-bottom: 4px;">Enemy tactical reserves</li>
                                <li style="margin-bottom: 4px;">Mortar and artillery positions</li>
                                <li style="margin-bottom: 4px;">Tactical obstacles</li>
                                <li style="margin-bottom: 4px;">Engagement areas</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>PIR Development:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Squadron commander approval</li>
                                <li style="margin-bottom: 4px;">Troop PIR integration</li>
                                <li style="margin-bottom: 4px;">Regiment/brigade PIR coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                            ISR Asset Allocation
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Squadron ISR Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Squadron reconnaissance troop</li>
                                <li style="margin-bottom: 4px;">Regiment/brigade UAS support</li>
                                <li style="margin-bottom: 4px;">Troop scouts</li>
                                <li style="margin-bottom: 4px;">Platoon reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Allocation Process:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Troop priority assignment</li>
                                <li style="margin-bottom: 4px;">Regiment/brigade asset coordination</li>
                                <li style="margin-bottom: 4px;">ISR synchronization meeting</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ISR Integration and Synchronization -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-sync-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Squadron ISR Integration and Synchronization (FM 3-0, ATP 2-01.3)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">ISR Synchronization Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Squadron ISR Synchronization:</strong> Squadron S2 integrates regiment/brigade ISR support with troop reconnaissance operations through tactical collection management. Synchronization ensures optimal employment of ISR assets across multiple troop areas while supporting squadron tactical objectives and regiment/brigade operational plans. The squadron ISR synchronization meeting coordinates collection, processing, exploitation, and dissemination (CPED) across all tactical echelons within the 24-72 hour planning horizon.</p>

                        <p style="margin: 0;"><strong>Collection Management:</strong> The squadron S2 collection manager oversees tactical collection management, tracking all ISR assets, monitoring collection effectiveness, and adjusting collection priorities based on changing tactical requirements. Collection management ensures ISR assets are employed efficiently, intelligence gaps are identified and addressed, and reconnaissance operations remain synchronized with squadron tactical plans across the 24-72 hour timeline.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-layer-group" style="margin-right: 8px;"></i>
                            Vertical ISR Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Integration Levels:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Regiment/Brigade:</strong> Regiment/brigade S2 provides operational ISR support</li>
                                <li><strong>Squadron:</strong> Squadron S2 integrates regiment/brigade and troop ISR</li>
                                <li><strong>Troop:</strong> Troop commander integrates squadron and platoon ISR</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(96, 165, 250, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Integration Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>PIR Flow:</strong> Troop to squadron to regiment/brigade</li>
                                    <li><strong>Intelligence Products:</strong> Regiment/brigade to squadron to troop</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-arrows-alt-h" style="margin-right: 8px;"></i>
                            Horizontal ISR Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Troop Integration:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Multiple Troops:</strong> Coordinate ISR across 3-5 troops</li>
                                <li><strong>Squadron Scouts:</strong> Squadron-level reconnaissance troop</li>
                                <li><strong>Regiment/Brigade Support:</strong> Regiment/brigade ISR asset coordination</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(34, 197, 94, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Coordination Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Squadron S2:</strong> Squadron intelligence operations</li>
                                    <li><strong>ISR Sync Meeting:</strong> Squadron ISR coordination</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Reconnaissance Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-cubes" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Multi-Domain Reconnaissance Operations (FM 3-0, ATP 3-90)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Multi-Domain Operations at Squadron Level</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Squadron Multi-Domain Reconnaissance:</strong> Squadron-level reconnaissance integrates capabilities across land, air, and cyber domains per FM 3-0. Squadron commanders leverage regiment/brigade ISR assets, troop reconnaissance forces, and squadron-organic capabilities to create comprehensive tactical intelligence supporting multiple troop operations across 5-15 km tactical depth. Multi-domain integration enables squadron commanders to exploit adversary vulnerabilities across all domains simultaneously within the 24-72 hour planning horizon.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-mountain" style="margin-right: 8px;"></i>
                            Land Domain
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Capabilities:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Squadron reconnaissance troop</li>
                                <li style="margin-bottom: 4px;">Troop scouts</li>
                                <li style="margin-bottom: 4px;">Platoon reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Planning:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Tactical terrain analysis</li>
                                <li style="margin-bottom: 4px;">Force protection requirements</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-plane" style="margin-right: 8px;"></i>
                            Air Domain
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Capabilities:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Regiment/brigade UAS support</li>
                                <li style="margin-bottom: 4px;">Squadron UAS (RQ-11 Raven)</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Planning:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Airspace coordination</li>
                                <li style="margin-bottom: 4px;">ISR coverage planning</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                            Space/Cyber Domains
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Space:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">GPS/PNT services</li>
                                <li style="margin-bottom: 4px;">SATCOM support</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Cyber:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Network intelligence</li>
                                <li style="margin-bottom: 4px;">EW operations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Squadron Security Operations Doctrine -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Squadron Security Operations Doctrine (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Security Operations Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Squadron Security Operations:</strong> Per FM 3-20, squadron security operations provide protection to troop forces, enable freedom of maneuver, and deny adversary intelligence collection across tactical depth. Security operations include screen, guard, and area security conducted at tactical distances (3-10 km) protecting multiple troop operations across the squadron area of operations within the 24-72 hour planning horizon.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-eye" style="margin-right: 8px;"></i>
                            Screen Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Purpose:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Early warning (1-3 hours)</li>
                                <li style="margin-bottom: 4px;">Continuous surveillance</li>
                                <li style="margin-bottom: 4px;">Impede adversary reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Squadron flanks and boundaries</li>
                                <li style="margin-bottom: 4px;">Troop boundary security</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-shield" style="margin-right: 8px;"></i>
                            Guard Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Purpose:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Protect troop forces</li>
                                <li style="margin-bottom: 4px;">Fight to gain time</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Troop force protection</li>
                                <li style="margin-bottom: 4px;">Squadron assembly areas</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-map-marker-alt" style="margin-right: 8px;"></i>
                            Area Security
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Purpose:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Protect specific areas</li>
                                <li style="margin-bottom: 4px;">Deny adversary access</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Critical infrastructure</li>
                                <li style="margin-bottom: 4px;">Lines of communication</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Intelligence Preparation of the Battlefield (IPB) -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-brain" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Intelligence Preparation of the Battlefield (ATP 2-01.3)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Squadron IPB Process</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>IPB at Squadron Level:</strong> Intelligence Preparation of the Battlefield (IPB) per ATP 2-01.3 is the systematic process of analyzing the tactical environment, adversary capabilities, and terrain to support squadron commander decision-making. Squadron S2 conducts IPB across 500-3,000 km² tactical area, integrating regiment/brigade intelligence products with troop-level analysis to create comprehensive tactical intelligence supporting multiple troop operations within the 24-72 hour planning horizon.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-map" style="margin-right: 8px;"></i>
                            IPB Steps 1-2
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 8px 0;"><strong>Step 1: Define Environment:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li>Define squadron AO (500-3,000 km²)</li>
                                <li>Identify squadron AOI (5-15 km depth)</li>
                            </ul>

                            <p style="margin: 0 0 8px 0;"><strong>Step 2: Describe Terrain:</strong></p>
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                <li>OAKOC analysis</li>
                                <li>MCOO development</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-users" style="margin-right: 8px;"></i>
                            IPB Steps 3-4
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 8px 0;"><strong>Step 3: Evaluate Adversary:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li>Adversary company formations</li>
                                <li>Tactical capabilities</li>
                            </ul>

                            <p style="margin: 0 0 8px 0;"><strong>Step 4: Determine COAs:</strong></p>
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                <li>Most likely COA</li>
                                <li>Most dangerous COA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Reconnaissance-Strike Integration -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-crosshairs" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Reconnaissance-Strike Integration (FM 3-0, ATP 3-60)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Squadron Reconnaissance-Strike Operations</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Integration Framework:</strong> Reconnaissance-strike operations integrate squadron reconnaissance capabilities with fires and maneuver to rapidly detect, identify, and engage high-value targets. Squadron S2 and S3 coordinate through the F2T2EA cycle, synchronizing ISR assets with squadron fires and troop maneuver to create tactical effects across multiple troop areas within the 24-72 hour planning horizon.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            F2T2EA Cycle
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Find:</strong> Detect adversary targets through ISR</li>
                                <li><strong>Fix:</strong> Determine precise target location</li>
                                <li><strong>Track:</strong> Monitor target movement</li>
                                <li><strong>Target:</strong> Assign fires or maneuver</li>
                                <li><strong>Engage:</strong> Execute fires or maneuver</li>
                                <li><strong>Assess:</strong> Conduct BDA</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-fire" style="margin-right: 8px;"></i>
                            D3A Targeting
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Decide:</strong> Prioritize high-value targets</li>
                                <li><strong>Detect:</strong> Employ ISR assets</li>
                                <li><strong>Deliver:</strong> Execute fires</li>
                                <li><strong>Assess:</strong> Conduct BDA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Planning Considerations and Risk Assessment -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Planning Considerations and Risk Assessment (FM 5-0, FM 3-20)
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px;"></i>
                            Tactical Planning
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Key Factors:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Tactical depth (5-15 km)</li>
                                <li style="margin-bottom: 4px;">Multiple troop operations</li>
                                <li style="margin-bottom: 4px;">Regiment/brigade ISR integration</li>
                                <li style="margin-bottom: 4px;">24-72 hour timeline</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>
                            Tactical Risk Factors
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Primary Risks:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Reconnaissance force attrition</li>
                                <li style="margin-bottom: 4px;">Intelligence gaps</li>
                                <li style="margin-bottom: 4px;">Adversary counter-reconnaissance</li>
                                <li style="margin-bottom: 4px;">ISR asset limitations</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Risk Mitigation
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Strategies:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Multi-domain ISR integration</li>
                                <li style="margin-bottom: 4px;">Redundant reconnaissance</li>
                                <li style="margin-bottom: 4px;">Regiment/brigade ISR support</li>
                                <li style="margin-bottom: 4px;">Contingency planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Squadron Reconnaissance and Security Operations: Doctrinal Summary
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(168, 85, 247, 0.15); padding: 18px; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.4);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                            Critical Success Factors
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 6px;"><strong>Integration:</strong> Synchronize regiment/brigade and troop ISR</li>
                                <li style="margin-bottom: 6px;"><strong>Coordination:</strong> Integrate multiple troop operations</li>
                                <li style="margin-bottom: 6px;"><strong>Prioritization:</strong> Focus on squadron PIR</li>
                                <li style="margin-bottom: 6px;"><strong>Dissemination:</strong> Rapid intelligence sharing</li>
                                <li style="margin-bottom: 6px;"><strong>Flexibility:</strong> Adapt to tactical changes</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(168, 85, 247, 0.15); padding: 18px; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.4);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-lightbulb" style="margin-right: 8px;"></i>
                            Best Practices
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 6px;"><strong>Early Planning:</strong> Begin reconnaissance planning during TLP</li>
                                <li style="margin-bottom: 6px;"><strong>Regiment/Brigade Integration:</strong> Coordinate with regiment/brigade S2 early</li>
                                <li style="margin-bottom: 6px;"><strong>Troop Coordination:</strong> Integrate troop requirements</li>
                                <li style="margin-bottom: 6px;"><strong>Multi-Domain:</strong> Employ ISR across all domains</li>
                                <li style="margin-bottom: 6px;"><strong>Redundancy:</strong> Plan backup ISR coverage</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(168, 85, 247, 0.15); padding: 18px; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.4);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-times-circle" style="margin-right: 8px;"></i>
                            Common Pitfalls
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 6px;"><strong>Inadequate Coordination:</strong> Failing to integrate regiment/brigade and troop ISR</li>
                                <li style="margin-bottom: 6px;"><strong>Insufficient Coverage:</strong> Gaps in reconnaissance coverage</li>
                                <li style="margin-bottom: 6px;"><strong>Poor Prioritization:</strong> Unfocused collection efforts</li>
                                <li style="margin-bottom: 6px;"><strong>Delayed Dissemination:</strong> Slow intelligence sharing</li>
                                <li style="margin-bottom: 6px;"><strong>Overextension:</strong> Reconnaissance forces spread too thin</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style="background: rgba(168, 85, 247, 0.2); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.5); margin-top: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0; text-align: center;">
                        <i class="fas fa-star" style="margin-right: 8px;"></i>
                        Key Doctrinal Takeaway
                    </h4>
                    <p style="color: #e5e7eb; font-size: 14px; line-height: 1.8; margin: 0; text-align: center; font-style: italic;">
                        "Squadron-level reconnaissance and security operations provide the tactical intelligence foundation enabling troop operations and supporting regiment/brigade operational objectives. Success requires seamless integration of regiment/brigade ISR support with troop reconnaissance operations, synchronized through comprehensive planning, continuous coordination, and rapid intelligence dissemination across multiple troop areas of operations within the 24-72 hour planning horizon."
                    </p>
                    <p style="color: #a855f7; font-size: 13px; margin: 12px 0 0 0; text-align: center; font-weight: 600;">
                        — FM 3-20 (Reconnaissance and Security Operations), FM 3-0 (Operations), ATP 3-90 (Offense and Defense)
                    </p>
                </div>
            </div>
        </div>
    `;
  }
};
export default squadronTacticsModule;
