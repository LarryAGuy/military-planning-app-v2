/**
 * Tactics: Reconnaissance & Security - Echelon Analysis (Group Level)
 * Doctrinal Analysis and Planning Framework for Group-Level Reconnaissance and Security Operations
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 * Command Level: Group Commander (Colonel O-6)
 * Primary Doctrine: FM 3-20 (Reconnaissance and Security Operations), FM 3-0 (Operations)
 * Supporting Doctrine: ATP 3-90 (Offense and Defense), ATP 2-01.3 (Intelligence Preparation of the Battlefield)
 * Target: 60,000-70,000 characters of group-level doctrinal reconnaissance and security analysis
 */

export const groupTacticsModule = {
  getContent(){
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-layer-group" style="margin-right: 12px; color: #a855f7; font-size: 20px;"></i>
                    Group-Level Reconnaissance and Security Operations: Doctrinal Analysis and Planning Framework
                </h2>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4);">
                    <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Doctrinal Context and Scope</h3>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Command Level:</strong> Group Commander (Colonel O-6) commanding 1,000-3,000 personnel across 3,000-10,000 km² operational area with 3-7 day planning horizon. Group-level reconnaissance and security operations provide operational intelligence enabling battalion/squadron operations and supporting brigade/division tactical objectives. Groups typically consist of specialized formations (special operations, aviation, support) with focused reconnaissance and security capabilities tailored to specific operational requirements.</p>
                    </div>
                </div>
            </div>

            <!-- Fundamental Principles -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book-open" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Fundamental Principles of Group Reconnaissance and Security Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-search" style="margin-right: 8px;"></i>
                            Seven Principles of Group Reconnaissance
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Orient on Operational Objectives:</strong> Focus on group commander's operational priorities</li>
                                <li style="margin-bottom: 8px;"><strong>Report Information Rapidly:</strong> Disseminate intelligence within battalion decision cycles</li>
                                <li style="margin-bottom: 8px;"><strong>Retain Freedom of Maneuver:</strong> Avoid decisive engagement of reconnaissance forces</li>
                                <li style="margin-bottom: 8px;"><strong>Gain and Maintain Enemy Contact:</strong> Continuous surveillance of adversary forces</li>
                                <li style="margin-bottom: 8px;"><strong>Develop the Situation:</strong> Determine adversary capabilities and intentions</li>
                                <li style="margin-bottom: 8px;"><strong>Task-Organize for Mission:</strong> Tailor reconnaissance forces to operational requirements</li>
                                <li style="margin-bottom: 8px;"><strong>Employ Multiple Assets:</strong> Integrate battalion and company reconnaissance</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Five Principles of Group Security Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Provide Early and Accurate Warning:</strong> Alert battalion commanders 2-4 hours in advance</li>
                                <li style="margin-bottom: 8px;"><strong>Provide Reaction Time and Maneuver Space:</strong> Enable battalions to deploy forces</li>
                                <li style="margin-bottom: 8px;"><strong>Orient on the Protected Force:</strong> Security focused on protecting battalion operations</li>
                                <li style="margin-bottom: 8px;"><strong>Perform Continuous Reconnaissance:</strong> Maintain persistent surveillance</li>
                                <li style="margin-bottom: 8px;"><strong>Maintain Enemy Contact:</strong> Track adversary forces throughout operational depth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Group Reconnaissance Planning Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Group Reconnaissance Planning Framework (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Group Reconnaissance Planning Doctrine</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Doctrinal Foundation:</strong> Group reconnaissance planning follows MDMP per FM 5-0 and integrates with brigade/division reconnaissance operations. Group commanders develop reconnaissance plans supporting operational objectives across 2-3 battalion/squadron areas of operations. Planning accounts for operational depth (10-30 km), multiple subordinate battalions, and integration with brigade/division ISR assets over 3-7 day operational timelines. The group S2 serves as the primary staff officer responsible for reconnaissance planning, coordinating with the S3 for operational integration and synchronizing with brigade/division S2 for higher echelon ISR support.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Planning Process:</strong> The group S2 leads reconnaissance planning through four phases: (1) Operational Reconnaissance Planning - define group PIR based on operational objectives; (2) ISR Asset Allocation - assign brigade/division and battalion ISR assets to collection requirements; (3) Reconnaissance Synchronization - integrate operations across battalion areas; (4) Execution and Assessment - conduct operations and assess effectiveness against PIR. Each phase requires close coordination between group staff, battalion S2 sections, and brigade/division S2 to ensure comprehensive intelligence coverage across the group area of operations.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Commander's Role:</strong> The group commander provides reconnaissance guidance during mission analysis, approves group PIR, and prioritizes intelligence requirements based on operational objectives. The commander's reconnaissance guidance shapes the entire planning process, ensuring reconnaissance operations directly support the group's operational mission and enable battalion operations across multiple areas of operations.</p>

                        <p style="margin: 0;"><strong>Integration with Higher Echelons:</strong> Group reconnaissance planning must integrate seamlessly with brigade/division tactical plans and corps operational objectives. The group S2 coordinates with brigade/division S2 to request ISR support, deconflict collection operations, and ensure group PIR support higher echelon intelligence requirements. This vertical integration ensures reconnaissance operations at all echelons support the overall operational plan while avoiding duplication of effort and maximizing ISR asset utilization across the brigade/division area of operations.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
                    <div>
                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 1: Operational Planning</strong></p>
                        <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Analyze group operational objectives</li>
                            <li><strong>Step 2:</strong> Develop group PIR and IR</li>
                            <li><strong>Step 3:</strong> Identify intelligence gaps</li>
                            <li><strong>Step 4:</strong> Coordinate with brigade/division S2</li>
                            <li><strong>Step 5:</strong> Integrate battalion reconnaissance requirements</li>
                        </ul>

                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 2: ISR Asset Allocation</strong></p>
                        <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Request brigade/division ISR support</li>
                            <li><strong>Step 2:</strong> Allocate group reconnaissance assets</li>
                            <li><strong>Step 3:</strong> Assign battalion reconnaissance assets</li>
                            <li><strong>Step 4:</strong> Coordinate UAS support</li>
                            <li><strong>Step 5:</strong> Establish collection priorities</li>
                        </ul>
                    </div>

                    <div>
                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 3: Reconnaissance Synchronization</strong></p>
                        <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Synchronize battalion reconnaissance operations</li>
                            <li><strong>Step 2:</strong> Integrate brigade/division ISR support</li>
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
                            <li><strong>Step 5:</strong> Update group intelligence estimate</li>
                        </ul>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-top: 20px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            Operational Objectives
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Planning Focus:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Group decisive points and objectives</li>
                                <li style="margin-bottom: 4px;">Battalion operational objectives</li>
                                <li style="margin-bottom: 4px;">Adversary operational capabilities</li>
                                <li style="margin-bottom: 4px;">Operational environment assessment</li>
                                <li style="margin-bottom: 4px;">Key terrain and obstacles</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Considerations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Brigade/division tactical objectives</li>
                                <li style="margin-bottom: 4px;">Group commander's intent</li>
                                <li style="margin-bottom: 4px;">Battalion mission requirements</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-list-check" style="margin-right: 8px;"></i>
                            Priority Intelligence Requirements
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Group PIR Categories:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Adversary company/battalion formations</li>
                                <li style="margin-bottom: 4px;">Enemy operational reserves</li>
                                <li style="margin-bottom: 4px;">Artillery and fires locations</li>
                                <li style="margin-bottom: 4px;">Key terrain and obstacles</li>
                                <li style="margin-bottom: 4px;">Avenues of approach</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>PIR Development:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Group commander approval</li>
                                <li style="margin-bottom: 4px;">Battalion PIR integration</li>
                                <li style="margin-bottom: 4px;">Brigade/division PIR coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                            ISR Asset Allocation
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Group ISR Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Group reconnaissance elements</li>
                                <li style="margin-bottom: 4px;">Brigade/division UAS support</li>
                                <li style="margin-bottom: 4px;">Battalion scouts</li>
                                <li style="margin-bottom: 4px;">Company reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Allocation Process:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Battalion priority assignment</li>
                                <li style="margin-bottom: 4px;">Brigade/division asset coordination</li>
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
                    Group ISR Integration and Synchronization (FM 3-0, ATP 2-01.3)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">ISR Synchronization Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Group ISR Synchronization:</strong> Group S2 integrates brigade/division ISR support with battalion reconnaissance operations through the Intelligence Collection Management (ICM) process. Synchronization ensures optimal employment of ISR assets across multiple battalion areas while supporting group operational objectives and brigade/division tactical plans. The group ISR synchronization meeting coordinates collection, processing, exploitation, and dissemination (CPED) across all echelons.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Synchronization Meeting:</strong> The group ISR synchronization meeting brings together S2, S3, battalion S2 representatives, and brigade/division S2 liaison officers to coordinate reconnaissance operations. The meeting reviews current intelligence collection, assesses PIR satisfaction, identifies intelligence gaps, reallocates ISR assets as needed, and synchronizes future collection operations. This forum ensures all echelons understand collection priorities and coordinate reconnaissance efforts across the group area of operations.</p>

                        <p style="margin: 0;"><strong>Collection Management:</strong> The group S2 collection manager oversees the Intelligence Collection Management process, tracking all ISR assets, monitoring collection effectiveness, and adjusting collection priorities based on changing operational requirements. Collection management ensures ISR assets are employed efficiently, intelligence gaps are identified and addressed, and reconnaissance operations remain synchronized with group operational plans across 3-7 day planning horizons.</p>
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
                                <li><strong>Brigade/Division:</strong> Brigade/division S2 provides tactical ISR support</li>
                                <li><strong>Group:</strong> Group S2 integrates higher echelon and battalion ISR</li>
                                <li><strong>Battalion:</strong> Battalion S2 integrates group and company ISR</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(96, 165, 250, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Integration Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>PIR Flow:</strong> Battalion to group to brigade/division</li>
                                    <li><strong>Intelligence Products:</strong> Brigade/division to group to battalion</li>
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
                            <p style="margin: 0 0 6px 0;"><strong>Battalion Integration:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Multiple Battalions:</strong> Coordinate ISR across 2-3 battalions</li>
                                <li><strong>Group Reconnaissance:</strong> Group-level reconnaissance elements</li>
                                <li><strong>Higher Echelon Support:</strong> Brigade/division ISR asset coordination</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(34, 197, 94, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Coordination Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Group S2:</strong> Group intelligence operations</li>
                                    <li><strong>ISR Sync Meeting:</strong> Group ISR coordination</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Multi-Domain Operations at Group Level</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Group Multi-Domain Reconnaissance:</strong> Group-level reconnaissance integrates capabilities across land, air, and cyber domains per FM 3-0. Group commanders leverage brigade/division ISR assets, battalion reconnaissance forces, and group-organic capabilities to create comprehensive operational intelligence supporting multiple battalion operations across 10-30 km operational depth. Multi-domain integration enables group commanders to exploit adversary vulnerabilities across all domains simultaneously, creating operational dilemmas that adversary forces cannot effectively counter.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Integration Approach:</strong> Multi-domain reconnaissance synchronizes collection across all domains to create operational intelligence advantage. Group S2 coordinates with brigade/division S2, aviation assets, and cyber support to integrate reconnaissance operations. This integration enables group commanders to understand adversary capabilities across all domains and exploit vulnerabilities through synchronized multi-domain operations.</p>

                        <p style="margin: 0;"><strong>Operational Application:</strong> At group level, multi-domain reconnaissance typically combines ground reconnaissance (group reconnaissance elements, battalion scouts), aerial reconnaissance (brigade/division UAS, group UAS), and cyber reconnaissance (network intelligence, EW operations). This combination provides comprehensive operational intelligence that no single domain could provide independently, enabling group commanders to make informed operational decisions across multiple battalion areas of operations.</p>
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
                                <li style="margin-bottom: 4px;">Group reconnaissance elements</li>
                                <li style="margin-bottom: 4px;">Battalion scout platoons</li>
                                <li style="margin-bottom: 4px;">Company reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Planning:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Operational terrain analysis</li>
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
                                <li style="margin-bottom: 4px;">Brigade/division UAS support</li>
                                <li style="margin-bottom: 4px;">Group UAS (RQ-11 Raven)</li>
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

            <!-- Group Security Operations Doctrine -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Group Security Operations Doctrine (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Security Operations Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Group Security Operations:</strong> Per FM 3-20, group security operations provide protection to battalion forces, enable freedom of maneuver, and deny adversary intelligence collection across operational depth. Security operations include screen, guard, and area security conducted at operational distances (5-20 km) protecting multiple battalion operations across the group area of operations.</p>

                        <p style="margin: 0;"><strong>Planning Considerations:</strong> Group security operations must account for operational depth, multiple battalion boundaries, and integration with brigade/division security operations. Security forces typically include group reconnaissance elements, battalion scouts, and company reconnaissance elements. Planning must balance force protection requirements against reconnaissance mission needs and ensure adequate early warning time (2-4 hours) for battalion commanders to react to adversary threats.</p>
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
                                <li style="margin-bottom: 4px;">Early warning (2-4 hours)</li>
                                <li style="margin-bottom: 4px;">Continuous surveillance</li>
                                <li style="margin-bottom: 4px;">Impede adversary reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Group flanks and boundaries</li>
                                <li style="margin-bottom: 4px;">Battalion boundary security</li>
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
                                <li style="margin-bottom: 4px;">Protect battalion forces</li>
                                <li style="margin-bottom: 4px;">Fight to gain time</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Battalion force protection</li>
                                <li style="margin-bottom: 4px;">Group assembly areas</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Group IPB Process</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>IPB at Group Level:</strong> Intelligence Preparation of the Battlefield (IPB) per ATP 2-01.3 is the systematic process of analyzing the operational environment, adversary capabilities, and terrain to support group commander decision-making. Group S2 conducts IPB across 3,000-10,000 km² operational area, integrating brigade/division intelligence products with battalion-level analysis to create comprehensive operational intelligence supporting multiple battalion operations.</p>

                        <p style="margin: 0 0 14px 0;"><strong>IPB Products:</strong> Group IPB produces operational intelligence products including Modified Combined Obstacle Overlay (MCOO), Situation Template (SITEMP), Event Template, and Decision Support Template (DST). These products support group commander decision-making by identifying adversary capabilities, likely courses of action, and decision points requiring commander action. Group S2 disseminates IPB products to battalion S2 sections to support battalion-level planning and operations.</p>

                        <p style="margin: 0;"><strong>Continuous Process:</strong> IPB is not a one-time event but a continuous process throughout operations. Group S2 continuously updates IPB products based on new intelligence, changing operational conditions, and adversary actions. This continuous IPB process ensures group commanders maintain current understanding of the operational environment and can adapt plans based on changing conditions across the 3-7 day operational timeline.</p>
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
                                <li>Define group AO (3,000-10,000 km²)</li>
                                <li>Identify group AOI (10-30 km depth)</li>
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
                                <li>Adversary company/battalion formations</li>
                                <li>Operational capabilities</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Group Reconnaissance-Strike Operations</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Integration Framework:</strong> Reconnaissance-strike operations integrate group reconnaissance capabilities with fires and maneuver to rapidly detect, identify, and engage high-value targets. Group S2 and S3 coordinate through the F2T2EA cycle, synchronizing ISR assets with group fires and battalion maneuver to create operational effects across multiple battalion areas.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Targeting Process:</strong> Group reconnaissance-strike operations follow the D3A targeting methodology (Decide, Detect, Deliver, Assess). The group commander decides on high-value targets based on operational objectives. Group ISR assets detect targets through reconnaissance operations. Group fires or battalion maneuver deliver effects against targets. Group S2 assesses battle damage and determines if additional targeting is required. This process creates rapid operational effects against adversary forces.</p>

                        <p style="margin: 0;"><strong>Synchronization Requirements:</strong> Effective reconnaissance-strike operations require close synchronization between group S2 (intelligence), S3 (operations), and fire support coordinator (fires). The group targeting meeting coordinates reconnaissance-strike operations, ensuring ISR assets are positioned to detect high-value targets, fires are available to engage targets, and battle damage assessment is conducted to verify effects. This synchronization enables group commanders to rapidly engage adversary forces across operational depth.</p>
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
                            Operational Planning
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Key Factors:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Operational depth (10-30 km)</li>
                                <li style="margin-bottom: 4px;">Multiple battalion operations</li>
                                <li style="margin-bottom: 4px;">Brigade/division ISR integration</li>
                                <li style="margin-bottom: 4px;">3-7 day timeline</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>
                            Operational Risk Factors
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
                                <li style="margin-bottom: 4px;">Brigade/division ISR support</li>
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
                    Group Reconnaissance and Security Operations: Doctrinal Summary
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(168, 85, 247, 0.15); padding: 18px; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.4);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                            Critical Success Factors
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 6px;"><strong>Integration:</strong> Synchronize higher echelon and battalion ISR</li>
                                <li style="margin-bottom: 6px;"><strong>Coordination:</strong> Integrate multiple battalion operations</li>
                                <li style="margin-bottom: 6px;"><strong>Prioritization:</strong> Focus on group PIR</li>
                                <li style="margin-bottom: 6px;"><strong>Dissemination:</strong> Rapid intelligence sharing</li>
                                <li style="margin-bottom: 6px;"><strong>Flexibility:</strong> Adapt to operational changes</li>
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
                                <li style="margin-bottom: 6px;"><strong>Early Planning:</strong> Begin reconnaissance planning during MDMP</li>
                                <li style="margin-bottom: 6px;"><strong>Higher Echelon Integration:</strong> Coordinate with brigade/division S2 early</li>
                                <li style="margin-bottom: 6px;"><strong>Battalion Coordination:</strong> Integrate battalion requirements</li>
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
                                <li style="margin-bottom: 6px;"><strong>Inadequate Coordination:</strong> Failing to integrate higher echelon and battalion ISR</li>
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
                        "Group-level reconnaissance and security operations provide the operational intelligence foundation enabling battalion operations and supporting brigade/division tactical objectives. Success requires seamless integration of higher echelon ISR support with battalion reconnaissance operations, synchronized through comprehensive planning, continuous coordination, and rapid intelligence dissemination across multiple battalion areas of operations."
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
export default groupTacticsModule;
