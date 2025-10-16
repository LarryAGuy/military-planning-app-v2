/**
 * Tactics: Reconnaissance & Security - Echelon Analysis (Regiment Level)
 * Doctrinal Analysis and Planning Framework for Regiment-Level Reconnaissance and Security Operations
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 * Command Level: Regiment Commander (Colonel O-6)
 * Primary Doctrine: FM 3-20 (Reconnaissance and Security Operations), FM 3-0 (Operations)
 * Supporting Doctrine: ATP 3-90 (Offense and Defense), ATP 2-01.3 (Intelligence Preparation of the Battlefield)
 * Target: 60,000-70,000 characters of regiment-level doctrinal reconnaissance and security analysis
 */

export const regimentTacticsModule = {
  getContent(){
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-medal" style="margin-right: 12px; color: #a855f7; font-size: 20px;"></i>
                    Regiment-Level Reconnaissance and Security Operations: Doctrinal Analysis and Planning Framework
                </h2>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4);">
                    <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Doctrinal Context and Scope</h3>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Command Level:</strong> Regiment Commander (Colonel O-6) commanding 3,000-5,000 personnel across 5,000-15,000 km² operational area with 3-7 day planning horizon. Regiment-level reconnaissance and security operations provide operational intelligence enabling squadron operations and supporting division tactical objectives across multiple squadron areas of operations. Regiments typically consist of cavalry or armor formations with specialized reconnaissance and security capabilities.</p>
                    </div>
                </div>
            </div>

            <!-- Fundamental Principles -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book-open" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Fundamental Principles of Regiment Reconnaissance and Security Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-search" style="margin-right: 8px;"></i>
                            Seven Principles of Regiment Reconnaissance
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Orient on Operational Objectives:</strong> Focus on regiment commander's operational priorities</li>
                                <li style="margin-bottom: 8px;"><strong>Report Information Rapidly:</strong> Disseminate intelligence within squadron decision cycles</li>
                                <li style="margin-bottom: 8px;"><strong>Retain Freedom of Maneuver:</strong> Avoid decisive engagement of reconnaissance forces</li>
                                <li style="margin-bottom: 8px;"><strong>Gain and Maintain Enemy Contact:</strong> Continuous surveillance of adversary forces</li>
                                <li style="margin-bottom: 8px;"><strong>Develop the Situation:</strong> Determine adversary capabilities and intentions</li>
                                <li style="margin-bottom: 8px;"><strong>Task-Organize for Mission:</strong> Tailor reconnaissance forces to operational requirements</li>
                                <li style="margin-bottom: 8px;"><strong>Employ Multiple Assets:</strong> Integrate squadron and troop reconnaissance</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Five Principles of Regiment Security Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Provide Early and Accurate Warning:</strong> Alert squadron commanders 3-6 hours in advance</li>
                                <li style="margin-bottom: 8px;"><strong>Provide Reaction Time and Maneuver Space:</strong> Enable squadrons to deploy forces</li>
                                <li style="margin-bottom: 8px;"><strong>Orient on the Protected Force:</strong> Security focused on protecting squadron operations</li>
                                <li style="margin-bottom: 8px;"><strong>Perform Continuous Reconnaissance:</strong> Maintain persistent surveillance</li>
                                <li style="margin-bottom: 8px;"><strong>Maintain Enemy Contact:</strong> Track adversary forces throughout operational depth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Regiment Reconnaissance Planning Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Regiment Reconnaissance Planning Framework (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Regiment Reconnaissance Planning Doctrine</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Doctrinal Foundation:</strong> Regiment reconnaissance planning follows MDMP per FM 5-0 and integrates with division reconnaissance operations. Regiment commanders develop reconnaissance plans supporting operational objectives across 2-4 squadron areas of operations. Planning accounts for operational depth (15-50 km), multiple subordinate squadrons, and integration with division ISR assets over 3-7 day operational timelines. The regiment S2 serves as the primary staff officer responsible for reconnaissance planning, coordinating with the S3 for operational integration and synchronizing with division S2 for higher echelon ISR support.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Planning Process:</strong> The regiment S2 leads reconnaissance planning through four phases: (1) Operational Reconnaissance Planning - define regiment PIR based on operational objectives; (2) ISR Asset Allocation - assign division and squadron ISR assets to collection requirements; (3) Reconnaissance Synchronization - integrate operations across squadron areas; (4) Execution and Assessment - conduct operations and assess effectiveness against PIR. Each phase requires close coordination between regiment staff, squadron S2 sections, and division S2 to ensure comprehensive intelligence coverage across the regiment area of operations.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Commander's Role:</strong> The regiment commander provides reconnaissance guidance during mission analysis, approves regiment PIR, and prioritizes intelligence requirements based on operational objectives. The commander's reconnaissance guidance shapes the entire planning process, ensuring reconnaissance operations directly support the regiment's operational mission and enable squadron operations across multiple areas of operations.</p>

                        <p style="margin: 0;"><strong>Integration with Division:</strong> Regiment reconnaissance planning must integrate seamlessly with division tactical plans and corps operational objectives. The regiment S2 coordinates with division S2 to request ISR support, deconflict collection operations, and ensure regiment PIR support division intelligence requirements. This vertical integration ensures reconnaissance operations at all echelons support the overall operational plan while avoiding duplication of effort and maximizing ISR asset utilization across the division area of operations.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
                    <div>
                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 1: Operational Planning</strong></p>
                        <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Analyze regiment operational objectives</li>
                            <li><strong>Step 2:</strong> Develop regiment PIR and IR</li>
                            <li><strong>Step 3:</strong> Identify intelligence gaps</li>
                            <li><strong>Step 4:</strong> Coordinate with division S2</li>
                            <li><strong>Step 5:</strong> Integrate squadron reconnaissance requirements</li>
                        </ul>

                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 2: ISR Asset Allocation</strong></p>
                        <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Request division ISR support</li>
                            <li><strong>Step 2:</strong> Allocate regiment reconnaissance squadron</li>
                            <li><strong>Step 3:</strong> Assign squadron reconnaissance assets</li>
                            <li><strong>Step 4:</strong> Coordinate UAS support</li>
                            <li><strong>Step 5:</strong> Establish collection priorities</li>
                        </ul>
                    </div>

                    <div>
                        <p style="margin: 0 0 8px 0; color: #e5e7eb; font-size: 13px;"><strong>Phase 3: Reconnaissance Synchronization</strong></p>
                        <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8; color: #e5e7eb; font-size: 13px;">
                            <li><strong>Step 1:</strong> Synchronize squadron reconnaissance operations</li>
                            <li><strong>Step 2:</strong> Integrate division ISR support</li>
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
                            <li><strong>Step 5:</strong> Update regiment intelligence estimate</li>
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
                                <li style="margin-bottom: 4px;">Regiment decisive points and objectives</li>
                                <li style="margin-bottom: 4px;">Squadron operational objectives</li>
                                <li style="margin-bottom: 4px;">Adversary operational capabilities</li>
                                <li style="margin-bottom: 4px;">Operational environment assessment</li>
                                <li style="margin-bottom: 4px;">Key terrain and obstacles</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Considerations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Division tactical objectives</li>
                                <li style="margin-bottom: 4px;">Regiment commander's intent</li>
                                <li style="margin-bottom: 4px;">Squadron mission requirements</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-list-check" style="margin-right: 8px;"></i>
                            Priority Intelligence Requirements
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Regiment PIR Categories:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Adversary battalion-level formations</li>
                                <li style="margin-bottom: 4px;">Enemy operational reserves</li>
                                <li style="margin-bottom: 4px;">Artillery and fires locations</li>
                                <li style="margin-bottom: 4px;">Key terrain and obstacles</li>
                                <li style="margin-bottom: 4px;">Avenues of approach</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>PIR Development:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Regiment commander approval</li>
                                <li style="margin-bottom: 4px;">Squadron PIR integration</li>
                                <li style="margin-bottom: 4px;">Division PIR coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                            ISR Asset Allocation
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Regiment ISR Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Regiment reconnaissance squadron</li>
                                <li style="margin-bottom: 4px;">Division UAS support</li>
                                <li style="margin-bottom: 4px;">Squadron scouts</li>
                                <li style="margin-bottom: 4px;">Troop reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Allocation Process:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Squadron priority assignment</li>
                                <li style="margin-bottom: 4px;">Division asset coordination</li>
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
                    Regiment ISR Integration and Synchronization (FM 3-0, ATP 2-01.3)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">ISR Synchronization Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Regiment ISR Synchronization:</strong> Regiment S2 integrates division ISR support with squadron reconnaissance operations through the Intelligence Collection Management (ICM) process. Synchronization ensures optimal employment of ISR assets across multiple squadron areas while supporting regiment operational objectives and division tactical plans. The regiment ISR synchronization meeting coordinates collection, processing, exploitation, and dissemination (CPED) across all echelons.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Synchronization Meeting:</strong> The regiment ISR synchronization meeting brings together S2, S3, squadron S2 representatives, and division S2 liaison officers to coordinate reconnaissance operations. The meeting reviews current intelligence collection, assesses PIR satisfaction, identifies intelligence gaps, reallocates ISR assets as needed, and synchronizes future collection operations. This forum ensures all echelons understand collection priorities and coordinate reconnaissance efforts across the regiment area of operations.</p>

                        <p style="margin: 0;"><strong>Collection Management:</strong> The regiment S2 collection manager oversees the Intelligence Collection Management process, tracking all ISR assets, monitoring collection effectiveness, and adjusting collection priorities based on changing operational requirements. Collection management ensures ISR assets are employed efficiently, intelligence gaps are identified and addressed, and reconnaissance operations remain synchronized with regiment operational plans across 3-7 day planning horizons.</p>
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
                                <li><strong>Division:</strong> Division S2 provides tactical ISR support</li>
                                <li><strong>Regiment:</strong> Regiment S2 integrates division and squadron ISR</li>
                                <li><strong>Squadron:</strong> Squadron S2 integrates regiment and troop ISR</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(96, 165, 250, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Integration Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>PIR Flow:</strong> Squadron to regiment to division</li>
                                    <li><strong>Intelligence Products:</strong> Division to regiment to squadron</li>
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
                            <p style="margin: 0 0 6px 0;"><strong>Squadron Integration:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Multiple Squadrons:</strong> Coordinate ISR across 2-4 squadrons</li>
                                <li><strong>Regiment Reconnaissance:</strong> Regiment-level reconnaissance squadron</li>
                                <li><strong>Division Support:</strong> Division ISR asset coordination</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(34, 197, 94, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Coordination Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Regiment S2:</strong> Regiment intelligence operations</li>
                                    <li><strong>ISR Sync Meeting:</strong> Regiment ISR coordination</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Multi-Domain Operations at Regiment Level</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Regiment Multi-Domain Reconnaissance:</strong> Regiment-level reconnaissance integrates capabilities across land, air, and cyber domains per FM 3-0. Regiment commanders leverage division ISR assets, squadron reconnaissance forces, and regiment-organic capabilities to create comprehensive operational intelligence supporting multiple squadron operations across 15-50 km operational depth. Multi-domain integration enables regiment commanders to exploit adversary vulnerabilities across all domains simultaneously, creating operational dilemmas that adversary forces cannot effectively counter.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Integration Approach:</strong> Multi-domain reconnaissance synchronizes collection across all domains to create operational intelligence advantage. Regiment S2 coordinates with division S2, aviation assets, and cyber support to integrate reconnaissance operations. This integration enables regiment commanders to understand adversary capabilities across all domains and exploit vulnerabilities through synchronized multi-domain operations.</p>

                        <p style="margin: 0;"><strong>Operational Application:</strong> At regiment level, multi-domain reconnaissance typically combines ground reconnaissance (regiment reconnaissance squadron, squadron scouts), aerial reconnaissance (division UAS, regiment UAS), and cyber reconnaissance (network intelligence, EW operations). This combination provides comprehensive operational intelligence that no single domain could provide independently, enabling regiment commanders to make informed operational decisions across multiple squadron areas of operations.</p>
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
                                <li style="margin-bottom: 4px;">Regiment reconnaissance squadron</li>
                                <li style="margin-bottom: 4px;">Squadron scout troops</li>
                                <li style="margin-bottom: 4px;">Troop reconnaissance</li>
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
                                <li style="margin-bottom: 4px;">Division UAS support</li>
                                <li style="margin-bottom: 4px;">Regiment UAS (RQ-11 Raven)</li>
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

            <!-- Regiment Security Operations Doctrine -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Regiment Security Operations Doctrine (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Security Operations Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Regiment Security Operations:</strong> Per FM 3-20, regiment security operations provide protection to squadron forces, enable freedom of maneuver, and deny adversary intelligence collection across operational depth. Security operations include screen, guard, and area security conducted at operational distances (10-30 km) protecting multiple squadron operations across the regiment area of operations.</p>

                        <p style="margin: 0;"><strong>Planning Considerations:</strong> Regiment security operations must account for operational depth, multiple squadron boundaries, and integration with division security operations. Security forces typically include regiment reconnaissance squadron, squadron scouts, and troop reconnaissance elements. Planning must balance force protection requirements against reconnaissance mission needs and ensure adequate early warning time (3-6 hours) for squadron commanders to react to adversary threats.</p>
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
                                <li style="margin-bottom: 4px;">Early warning (3-6 hours)</li>
                                <li style="margin-bottom: 4px;">Continuous surveillance</li>
                                <li style="margin-bottom: 4px;">Impede adversary reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Regiment flanks and boundaries</li>
                                <li style="margin-bottom: 4px;">Squadron boundary security</li>
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
                                <li style="margin-bottom: 4px;">Protect squadron forces</li>
                                <li style="margin-bottom: 4px;">Fight to gain time</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Squadron force protection</li>
                                <li style="margin-bottom: 4px;">Regiment assembly areas</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Regiment IPB Process</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>IPB at Regiment Level:</strong> Intelligence Preparation of the Battlefield (IPB) per ATP 2-01.3 is the systematic process of analyzing the operational environment, adversary capabilities, and terrain to support regiment commander decision-making. Regiment S2 conducts IPB across 5,000-15,000 km² operational area, integrating division intelligence products with squadron-level analysis to create comprehensive operational intelligence supporting multiple squadron operations.</p>

                        <p style="margin: 0 0 14px 0;"><strong>IPB Products:</strong> Regiment IPB produces operational intelligence products including Modified Combined Obstacle Overlay (MCOO), Situation Template (SITEMP), Event Template, and Decision Support Template (DST). These products support regiment commander decision-making by identifying adversary capabilities, likely courses of action, and decision points requiring commander action. Regiment S2 disseminates IPB products to squadron S2 sections to support squadron-level planning and operations.</p>

                        <p style="margin: 0;"><strong>Continuous Process:</strong> IPB is not a one-time event but a continuous process throughout operations. Regiment S2 continuously updates IPB products based on new intelligence, changing operational conditions, and adversary actions. This continuous IPB process ensures regiment commanders maintain current understanding of the operational environment and can adapt plans based on changing conditions across the 3-7 day operational timeline.</p>
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
                                <li>Define regiment AO (5,000-15,000 km²)</li>
                                <li>Identify regiment AOI (15-50 km depth)</li>
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
                                <li>Adversary battalion formations</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Regiment Reconnaissance-Strike Operations</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Integration Framework:</strong> Reconnaissance-strike operations integrate regiment reconnaissance capabilities with fires and maneuver to rapidly detect, identify, and engage high-value targets. Regiment S2 and S3 coordinate through the F2T2EA cycle, synchronizing ISR assets with regiment fires and squadron maneuver to create operational effects across multiple squadron areas.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Targeting Process:</strong> Regiment reconnaissance-strike operations follow the D3A targeting methodology (Decide, Detect, Deliver, Assess). The regiment commander decides on high-value targets based on operational objectives. Regiment ISR assets detect targets through reconnaissance operations. Regiment fires or squadron maneuver deliver effects against targets. Regiment S2 assesses battle damage and determines if additional targeting is required. This process creates rapid operational effects against adversary forces.</p>

                        <p style="margin: 0;"><strong>Synchronization Requirements:</strong> Effective reconnaissance-strike operations require close synchronization between regiment S2 (intelligence), S3 (operations), and fire support coordinator (fires). The regiment targeting meeting coordinates reconnaissance-strike operations, ensuring ISR assets are positioned to detect high-value targets, fires are available to engage targets, and battle damage assessment is conducted to verify effects. This synchronization enables regiment commanders to rapidly engage adversary forces across operational depth.</p>
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
                                <li style="margin-bottom: 4px;">Operational depth (15-50 km)</li>
                                <li style="margin-bottom: 4px;">Multiple squadron operations</li>
                                <li style="margin-bottom: 4px;">Division ISR integration</li>
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
                                <li style="margin-bottom: 4px;">Division ISR support</li>
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
                    Regiment Reconnaissance and Security Operations: Doctrinal Summary
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(168, 85, 247, 0.15); padding: 18px; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.4);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                            Critical Success Factors
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 6px;"><strong>Integration:</strong> Synchronize division and squadron ISR</li>
                                <li style="margin-bottom: 6px;"><strong>Coordination:</strong> Integrate multiple squadron operations</li>
                                <li style="margin-bottom: 6px;"><strong>Prioritization:</strong> Focus on regiment PIR</li>
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
                                <li style="margin-bottom: 6px;"><strong>Division Integration:</strong> Coordinate with division S2 early</li>
                                <li style="margin-bottom: 6px;"><strong>Squadron Coordination:</strong> Integrate squadron requirements</li>
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
                                <li style="margin-bottom: 6px;"><strong>Inadequate Coordination:</strong> Failing to integrate division and squadron ISR</li>
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
                        "Regiment-level reconnaissance and security operations provide the operational intelligence foundation enabling squadron operations and supporting division tactical objectives. Success requires seamless integration of division ISR support with squadron reconnaissance operations, synchronized through comprehensive planning, continuous coordination, and rapid intelligence dissemination across multiple squadron areas of operations."
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
export default regimentTacticsModule;
