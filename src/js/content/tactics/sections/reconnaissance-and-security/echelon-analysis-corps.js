/**
 * Tactics: Reconnaissance & Security - Echelon Analysis (Corps Level)
 * Doctrinal Analysis and Planning Framework for Corps-Level Reconnaissance and Security Operations
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 * Command Level: Corps Commander (Lieutenant General O-9)
 * Primary Doctrine: FM 3-20 (Reconnaissance and Security Operations), FM 3-0 (Operations)
 * Supporting Doctrine: ATP 3-90 (Offense and Defense), ATP 2-01.3 (Intelligence Preparation of the Battlefield)
 * Target: 70,000-80,000 characters of corps-level doctrinal reconnaissance and security analysis
 */

export const corpsTacticsModule = {
  getContent(){
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-crown" style="margin-right: 12px; color: #a855f7; font-size: 20px;"></i>
                    Corps-Level Reconnaissance and Security Operations: Doctrinal Analysis and Planning Framework
                </h2>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4);">
                    <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Doctrinal Context and Scope</h3>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Command Level:</strong> Corps Commander (Lieutenant General O-9) commanding 40,000-100,000 personnel across 50,000-150,000 km² operational area with 30-90 day planning horizon. Corps-level reconnaissance and security operations provide operational intelligence enabling division operations and supporting army campaign objectives across multiple division areas of operations.</p>
                    </div>
                </div>
            </div>

            <!-- Fundamental Principles -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book-open" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Fundamental Principles of Corps Reconnaissance and Security Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-search" style="margin-right: 8px;"></i>
                            Seven Principles of Corps Reconnaissance
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Orient on Operational Objectives:</strong> Focus on corps commander's operational priorities</li>
                                <li style="margin-bottom: 8px;"><strong>Report Information Rapidly:</strong> Disseminate intelligence within division decision cycles</li>
                                <li style="margin-bottom: 8px;"><strong>Retain Freedom of Maneuver:</strong> Avoid decisive engagement of reconnaissance forces</li>
                                <li style="margin-bottom: 8px;"><strong>Gain and Maintain Enemy Contact:</strong> Continuous surveillance of adversary forces</li>
                                <li style="margin-bottom: 8px;"><strong>Develop the Situation:</strong> Determine adversary capabilities and intentions</li>
                                <li style="margin-bottom: 8px;"><strong>Task-Organize for Mission:</strong> Tailor reconnaissance forces to operational requirements</li>
                                <li style="margin-bottom: 8px;"><strong>Employ Multiple Assets:</strong> Integrate division and brigade reconnaissance</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Five Principles of Corps Security Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Provide Early and Accurate Warning:</strong> Alert division commanders 12-24 hours in advance</li>
                                <li style="margin-bottom: 8px;"><strong>Provide Reaction Time and Maneuver Space:</strong> Enable divisions to deploy forces</li>
                                <li style="margin-bottom: 8px;"><strong>Orient on the Protected Force:</strong> Security focused on protecting division operations</li>
                                <li style="margin-bottom: 8px;"><strong>Perform Continuous Reconnaissance:</strong> Maintain persistent surveillance</li>
                                <li style="margin-bottom: 8px;"><strong>Maintain Enemy Contact:</strong> Track adversary forces throughout operational depth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Reconnaissance Planning Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Corps Reconnaissance Planning Framework (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Corps Reconnaissance Planning Doctrine</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Doctrinal Foundation:</strong> Corps reconnaissance planning follows MDMP per FM 5-0 and integrates with army reconnaissance operations. Corps commanders develop reconnaissance plans supporting operational objectives across 2-5 division areas of operations. Planning accounts for operational depth (100-200 km), multiple subordinate divisions, and integration with army ISR assets over 30-90 day operational timelines.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Planning Process:</strong> The corps G2 leads reconnaissance planning through four phases: (1) Operational Reconnaissance Planning - define corps PIR based on operational objectives; (2) ISR Asset Allocation - assign army and division ISR assets to collection requirements; (3) Reconnaissance Synchronization - integrate operations across division areas; (4) Execution and Assessment - conduct operations and assess effectiveness against PIR.</p>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
                            <div>
                                <p style="margin: 0 0 8px 0;"><strong>Phase 1: Operational Planning</strong></p>
                                <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Step 1:</strong> Analyze corps operational objectives</li>
                                    <li><strong>Step 2:</strong> Develop corps PIR and IR</li>
                                    <li><strong>Step 3:</strong> Identify intelligence gaps</li>
                                    <li><strong>Step 4:</strong> Coordinate with army G2</li>
                                    <li><strong>Step 5:</strong> Integrate division reconnaissance requirements</li>
                                </ul>

                                <p style="margin: 0 0 8px 0;"><strong>Phase 2: ISR Asset Allocation</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Step 1:</strong> Request army ISR support</li>
                                    <li><strong>Step 2:</strong> Allocate corps cavalry squadron</li>
                                    <li><strong>Step 3:</strong> Assign division reconnaissance assets</li>
                                    <li><strong>Step 4:</strong> Coordinate aviation reconnaissance</li>
                                    <li><strong>Step 5:</strong> Establish collection priorities</li>
                                </ul>
                            </div>

                            <div>
                                <p style="margin: 0 0 8px 0;"><strong>Phase 3: Reconnaissance Synchronization</strong></p>
                                <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Step 1:</strong> Synchronize division reconnaissance operations</li>
                                    <li><strong>Step 2:</strong> Integrate army ISR support</li>
                                    <li><strong>Step 3:</strong> Coordinate collection management</li>
                                    <li><strong>Step 4:</strong> Establish intelligence dissemination procedures</li>
                                    <li><strong>Step 5:</strong> Conduct ISR synchronization board</li>
                                </ul>

                                <p style="margin: 0 0 8px 0;"><strong>Phase 4: Execution and Assessment</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Step 1:</strong> Execute reconnaissance operations</li>
                                    <li><strong>Step 2:</strong> Assess effectiveness against PIR</li>
                                    <li><strong>Step 3:</strong> Identify collection shortfalls</li>
                                    <li><strong>Step 4:</strong> Reallocate ISR assets as needed</li>
                                    <li><strong>Step 5:</strong> Update corps intelligence estimate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            Operational Objectives
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Planning Focus:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Corps decisive points and objectives</li>
                                <li style="margin-bottom: 4px;">Division operational objectives</li>
                                <li style="margin-bottom: 4px;">Adversary operational capabilities</li>
                                <li style="margin-bottom: 4px;">Operational environment assessment</li>
                                <li style="margin-bottom: 4px;">Key terrain and infrastructure</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Considerations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Army operational objectives</li>
                                <li style="margin-bottom: 4px;">Corps commander's intent</li>
                                <li style="margin-bottom: 4px;">Division mission requirements</li>
                                <li style="margin-bottom: 4px;">Operational timeline constraints</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-list-check" style="margin-right: 8px;"></i>
                            Priority Intelligence Requirements
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Corps PIR Categories:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Adversary division-level formations</li>
                                <li style="margin-bottom: 4px;">Enemy operational reserves</li>
                                <li style="margin-bottom: 4px;">Fires capabilities and locations</li>
                                <li style="margin-bottom: 4px;">Key terrain and obstacles</li>
                                <li style="margin-bottom: 4px;">Lines of communication</li>
                                <li style="margin-bottom: 4px;">Command and control nodes</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>PIR Development:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Corps commander approval</li>
                                <li style="margin-bottom: 4px;">Division PIR integration</li>
                                <li style="margin-bottom: 4px;">Army PIR coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                            ISR Asset Allocation
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Corps ISR Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Corps cavalry squadron (ground reconnaissance)</li>
                                <li style="margin-bottom: 4px;">Army UAS support (Gray Eagle, Shadow)</li>
                                <li style="margin-bottom: 4px;">Division reconnaissance battalions</li>
                                <li style="margin-bottom: 4px;">Aviation reconnaissance assets</li>
                                <li style="margin-bottom: 4px;">MI brigade collection assets</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Allocation Process:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Division priority assignment</li>
                                <li style="margin-bottom: 4px;">Army asset coordination</li>
                                <li style="margin-bottom: 4px;">ISR synchronization board</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ISR Integration and Synchronization -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-sync-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Corps ISR Integration and Synchronization (FM 3-0, ATP 2-01.3)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">ISR Synchronization Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Corps ISR Synchronization:</strong> Corps G2 integrates army ISR support with division reconnaissance operations through the Intelligence Collection Management (ICM) process. Synchronization ensures optimal employment of ISR assets across multiple division areas while supporting corps operational objectives and army campaign plans. The corps ISR synchronization board coordinates collection, processing, exploitation, and dissemination (CPED) across all echelons.</p>
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
                                <li><strong>Army:</strong> Army G2 provides operational ISR support</li>
                                <li><strong>Corps:</strong> Corps G2 integrates army and division ISR</li>
                                <li><strong>Division:</strong> Division G2 integrates corps and brigade ISR</li>
                                <li><strong>Brigade:</strong> Brigade S2 integrates division and battalion ISR</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(96, 165, 250, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Integration Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>PIR Flow:</strong> Division to corps to army</li>
                                    <li><strong>Intelligence Products:</strong> Army to corps to division</li>
                                    <li><strong>ISR Coordination:</strong> Corps ISR synchronization board</li>
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
                            <p style="margin: 0 0 6px 0;"><strong>Division Integration:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Multiple Divisions:</strong> Coordinate ISR across 2-5 divisions</li>
                                <li><strong>Corps Cavalry:</strong> Corps-level reconnaissance squadron</li>
                                <li><strong>MI Brigade:</strong> Corps-level intelligence fusion</li>
                                <li><strong>Army Support:</strong> Army ISR asset coordination</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(34, 197, 94, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Coordination Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Corps G2:</strong> Corps intelligence operations center</li>
                                    <li><strong>ISR Sync Board:</strong> Corps ISR coordination forum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Joint and Coalition Reconnaissance Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-handshake" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Joint and Coalition Reconnaissance Coordination (JP 3-0, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Joint Operations Coordination Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Joint Coordination:</strong> Corps reconnaissance operations integrate with joint force component commands and coalition partners. Corps G2 coordinates with army G2 to synchronize ISR operations, share intelligence products, and support joint targeting. Coalition coordination ensures interoperability, information sharing, and synchronized reconnaissance across multinational forces operating within the corps area of operations.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-users" style="margin-right: 8px;"></i>
                            Joint Force Component Coordination
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>JFACC Coordination:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Air Reconnaissance:</strong> Air reconnaissance support coordination</li>
                                <li><strong>Airspace:</strong> Airspace coordination for ISR platforms</li>
                                <li><strong>Targeting:</strong> Joint targeting coordination</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(96, 165, 250, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Army Coordination:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>ISR Integration:</strong> Army ISR asset coordination</li>
                                    <li><strong>Intelligence Sharing:</strong> Army intelligence products</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-flag" style="margin-right: 8px;"></i>
                            Coalition Partner Coordination
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Coordination Mechanisms:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Intelligence Fusion:</strong> Coalition intelligence fusion center</li>
                                <li><strong>Liaison Officers:</strong> Liaison officer exchange</li>
                                <li><strong>Information Sharing:</strong> Intelligence sharing agreements</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(34, 197, 94, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Considerations:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Classification:</strong> Classification restrictions</li>
                                    <li><strong>Interoperability:</strong> Technical interoperability challenges</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Multi-Domain Operations at Corps Level</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Doctrinal Foundation:</strong> Corps-level reconnaissance integrates capabilities across land, air, space, and cyber domains per FM 3-0 Multi-Domain Operations doctrine. Corps commanders leverage army ISR assets, division reconnaissance forces, and corps-organic capabilities to create comprehensive operational intelligence supporting multiple division operations across 100-200 km operational depth.</p>

                        <p style="margin: 0;"><strong>Integration Approach:</strong> Multi-domain reconnaissance synchronizes collection across all domains to create operational intelligence advantage. Corps G2 coordinates with army G2, JFACC, Space Force, and Cyber Command to integrate reconnaissance operations. This integration enables corps commanders to understand adversary capabilities across all domains and exploit vulnerabilities through synchronized multi-domain operations.</p>
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
                                <li style="margin-bottom: 4px;">Corps cavalry squadron (ground reconnaissance)</li>
                                <li style="margin-bottom: 4px;">Division reconnaissance battalions</li>
                                <li style="margin-bottom: 4px;">Ground surveillance radars (AN/TPQ-53)</li>
                                <li style="margin-bottom: 4px;">HUMINT collection teams</li>
                                <li style="margin-bottom: 4px;">Brigade reconnaissance elements</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Planning:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Operational terrain analysis (OAKOC)</li>
                                <li style="margin-bottom: 4px;">Force protection requirements</li>
                                <li style="margin-bottom: 4px;">Reconnaissance zone assignment</li>
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
                                <li style="margin-bottom: 4px;">Army UAS (MQ-1C Gray Eagle, RQ-7 Shadow)</li>
                                <li style="margin-bottom: 4px;">Corps aviation reconnaissance (AH-64, UH-60)</li>
                                <li style="margin-bottom: 4px;">Airborne SIGINT platforms</li>
                                <li style="margin-bottom: 4px;">Joint air reconnaissance support</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Planning:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Airspace coordination with JFACC</li>
                                <li style="margin-bottom: 4px;">Air defense threat assessment</li>
                                <li style="margin-bottom: 4px;">Persistent ISR coverage planning</li>
                                <li style="margin-bottom: 4px;">Flight route deconfliction</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                            Space/Cyber Domains
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Space Capabilities:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Satellite imagery (IMINT) from national assets</li>
                                <li style="margin-bottom: 4px;">GPS/PNT services for navigation and timing</li>
                                <li style="margin-bottom: 4px;">SATCOM support for communications</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Cyber Capabilities:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Cyber reconnaissance operations</li>
                                <li style="margin-bottom: 4px;">Network intelligence collection</li>
                                <li style="margin-bottom: 4px;">Electromagnetic spectrum operations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Security Operations Doctrine -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Corps Security Operations Doctrine (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Security Operations Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Corps Security Operations:</strong> Per FM 3-20, corps security operations provide protection to division forces, enable freedom of maneuver, and deny adversary intelligence collection across operational depth. Security operations include screen, guard, cover, area security, and local security conducted at operational distances (30-100 km) protecting multiple division operations across the corps area of operations.</p>

                        <p style="margin: 0;"><strong>Planning Considerations:</strong> Corps security operations must account for operational depth, multiple division boundaries, and integration with army security operations. Security forces typically include corps cavalry squadron, division reconnaissance units, and aviation assets. Planning must balance force protection requirements against reconnaissance mission needs and ensure adequate early warning time (12-24 hours) for division commanders to react to adversary threats.</p>
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
                                <li style="margin-bottom: 4px;">Early warning (12-24 hours advance notice)</li>
                                <li style="margin-bottom: 4px;">Continuous surveillance of adversary forces</li>
                                <li style="margin-bottom: 4px;">Impede adversary reconnaissance operations</li>
                                <li style="margin-bottom: 4px;">Provide reaction time for division commanders</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Corps flanks and boundaries</li>
                                <li style="margin-bottom: 4px;">Operational approaches to corps area</li>
                                <li style="margin-bottom: 4px;">Division boundary security</li>
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
                                <li style="margin-bottom: 4px;">Protect division forces</li>
                                <li style="margin-bottom: 4px;">Fight to gain time</li>
                                <li style="margin-bottom: 4px;">Maintain freedom of maneuver</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Division force protection</li>
                                <li style="margin-bottom: 4px;">Corps assembly areas</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-user-shield" style="margin-right: 8px;"></i>
                            Cover Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Purpose:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Defeat adversary reconnaissance</li>
                                <li style="margin-bottom: 4px;">Repel adversary forces</li>
                                <li style="margin-bottom: 4px;">Enable operational surprise</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Corps force deployment</li>
                                <li style="margin-bottom: 4px;">Operational maneuver</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Intelligence Preparation of the Battlefield -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-brain" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Intelligence Preparation of the Battlefield (FM 3-0, ATP 2-01.3)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Corps IPB Process</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>IPB Doctrine:</strong> Corps-level IPB analyzes the operational environment across 100-200 km operational area supporting multiple division operations. The four-step IPB process provides operational intelligence enabling corps commanders to understand terrain, weather, adversary capabilities, and potential courses of action across 30-90 day operational timelines. Corps G2 conducts IPB to support operational planning, identify intelligence gaps, and develop collection strategies supporting division operations.</p>

                        <p style="margin: 0;"><strong>IPB Products:</strong> Corps IPB produces operational intelligence products including modified combined obstacle overlays (MCOO), adversary situation templates, event templates and matrices, and decision support templates (DST). These products support corps operational planning, enable division IPB, and facilitate intelligence synchronization across the corps area of operations. IPB is a continuous process updated throughout operations as new intelligence becomes available.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                            Step 1: Define Operational Environment
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Spatial Boundaries:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Area of Operations:</strong> Corps assigned area (100-200 km depth, 150-300 km width)</li>
                                <li><strong>Area of Interest:</strong> Extended operational area including adversary operational depth</li>
                                <li><strong>Division AOs:</strong> 2-5 subordinate division areas of operations</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(96, 165, 250, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Temporal Considerations:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Operational Planning:</strong> 30-90 days operational timeline</li>
                                    <li><strong>Tactical Execution:</strong> 7-30 days operational phases</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-cloud-sun" style="margin-right: 8px;"></i>
                            Step 2: Describe Environmental Effects
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Terrain Analysis:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>OAKOC:</strong> Observation/fields of fire, avenues of approach, key terrain, obstacles, cover/concealment</li>
                                <li><strong>Operational Mobility:</strong> Division maneuver corridors and constraints</li>
                                <li><strong>Defensive Terrain:</strong> Natural defensive positions</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(34, 197, 94, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Weather Effects:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Seasonal:</strong> Impact on operations over 30-90 days</li>
                                    <li><strong>Visibility:</strong> ISR platform effectiveness</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-users-cog" style="margin-right: 8px;"></i>
                            Step 3: Evaluate the Adversary
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Order of Battle:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Operational Forces:</strong> Enemy corps-level formations (40,000-100,000 personnel)</li>
                                <li><strong>Tactical Forces:</strong> Division (10,000-20,000) and brigade (3,000-5,000) units</li>
                                <li><strong>Operational Reserves:</strong> Corps reserve forces</li>
                                <li><strong>Fires Capabilities:</strong> Artillery, rockets, missiles</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Capabilities Assessment:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Offensive:</strong> Operational maneuver capabilities</li>
                                    <li><strong>Defensive:</strong> Defensive operations doctrine</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            Step 4: Determine Adversary COAs
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>COA Development:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Most Likely COA:</strong> Probable adversary operational approach</li>
                                <li><strong>Most Dangerous COA:</strong> Greatest threat to corps operations</li>
                                <li><strong>Alternative COAs:</strong> Other feasible adversary courses of action</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>COA Analysis:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Objectives:</strong> Adversary operational objectives</li>
                                    <li><strong>Main Effort:</strong> Primary operational focus</li>
                                </ul>
                            </div>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Corps Targeting Doctrine</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Reconnaissance-Strike Integration:</strong> Corps reconnaissance operations provide intelligence foundation for operational targeting. The F2T2EA cycle (Find, Fix, Track, Target, Engage, Assess) integrates corps ISR with division fires to engage operational targets supporting corps campaign objectives. Corps targeting focuses on operational targets including enemy division-level formations, command and control nodes, fires capabilities, and logistics infrastructure.</p>

                        <p style="margin: 0;"><strong>Targeting Process:</strong> Corps targeting follows the Decide, Detect, Deliver, Assess (D3A) methodology integrated with the F2T2EA cycle. The corps fires and effects coordination cell (FECC) synchronizes targeting across division areas, prioritizes high-payoff targets, and coordinates with army for operational fires support.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-search" style="margin-right: 8px;"></i>
                            Find and Fix
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Find:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Corps ISR collection</li>
                                <li style="margin-bottom: 4px;">Army ISR support</li>
                                <li style="margin-bottom: 4px;">Division reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Fix:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Persistent surveillance</li>
                                <li style="margin-bottom: 4px;">Target location refinement</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bullseye" style="margin-right: 8px;"></i>
                            Track and Target
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Track:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Continuous monitoring</li>
                                <li style="margin-bottom: 4px;">Movement tracking</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Target:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Target prioritization</li>
                                <li style="margin-bottom: 4px;">Weaponeering analysis</li>
                                <li style="margin-bottom: 4px;">Targeting approval</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-bomb" style="margin-right: 8px;"></i>
                            Engage and Assess
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Engage:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Division fires execution</li>
                                <li style="margin-bottom: 4px;">Strike coordination</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Assess:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Battle damage assessment</li>
                                <li style="margin-bottom: 4px;">Effects evaluation</li>
                                <li style="margin-bottom: 4px;">Re-engagement determination</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Planning Considerations and Risk Assessment -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Planning Considerations and Risk Assessment (FM 5-0, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Corps Reconnaissance Risk Management</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Risk Management:</strong> Corps reconnaissance operations involve operational and tactical risks. Corps commanders balance intelligence value against risks to reconnaissance forces, division operations, and operational objectives through the five-step risk management process: (1) Identify Hazards; (2) Assess Hazards; (3) Develop Controls; (4) Implement Controls; (5) Supervise and Evaluate.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-exclamation-circle" style="margin-right: 8px;"></i>
                            Operational Risks
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Force Protection:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Force Attrition:</strong> Loss of reconnaissance forces</li>
                                <li><strong>Counter-ISR:</strong> Enemy actions to defeat reconnaissance</li>
                                <li><strong>Operational Exposure:</strong> Compromise of operations</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(220, 38, 38, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Intelligence Risks:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Intelligence Gaps:</strong> Incomplete intelligence</li>
                                    <li><strong>Deception:</strong> Adversary efforts to mislead</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-balance-scale" style="margin-right: 8px;"></i>
                            Operational Planning Risks
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Planning Risks:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Operational Surprise:</strong> Failure to detect adversary actions</li>
                                <li><strong>Resource Allocation:</strong> Insufficient ISR resources</li>
                                <li><strong>Coordination:</strong> Division synchronization challenges</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Mitigation:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Redundant Collection:</strong> Multiple ISR sources</li>
                                    <li><strong>Army Support:</strong> Army ISR integration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Doctrinal Summary and Key Planning Considerations
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Corps Reconnaissance and Security: Essential Principles</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Doctrinal Foundation:</strong> Corps-level reconnaissance and security operations provide operational intelligence and force protection enabling multiple division operations across 100-200 km operational depth. These operations must integrate army ISR support, synchronize division reconnaissance, and continuously adapt to operational changes over 30-90 day timelines.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                            Critical Success Factors
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 6px;"><strong>Unity of Effort:</strong> Integrate across divisions</li>
                                <li style="margin-bottom: 6px;"><strong>Persistent Surveillance:</strong> Continuous coverage</li>
                                <li style="margin-bottom: 6px;"><strong>Timely Intelligence:</strong> Within decision cycles</li>
                                <li style="margin-bottom: 6px;"><strong>Multi-Source Fusion:</strong> Integrate all disciplines</li>
                                <li style="margin-bottom: 6px;"><strong>Operational Security:</strong> Protect operations</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-lightbulb" style="margin-right: 8px;"></i>
                            Planning Best Practices
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 6px;"><strong>Commander's Intent:</strong> Clear priorities</li>
                                <li style="margin-bottom: 6px;"><strong>PIR-Driven:</strong> Focus on PIR</li>
                                <li style="margin-bottom: 6px;"><strong>Redundant Collection:</strong> Multiple sources</li>
                                <li style="margin-bottom: 6px;"><strong>Division Coordination:</strong> Synchronize operations</li>
                                <li style="margin-bottom: 6px;"><strong>Risk Management:</strong> Balance value vs. risk</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                            Common Planning Pitfalls
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 6px;"><strong>ISR Overload:</strong> Excessive requirements</li>
                                <li style="margin-bottom: 6px;"><strong>Stovepiped Intelligence:</strong> Failure to integrate</li>
                                <li style="margin-bottom: 6px;"><strong>Collection Gaps:</strong> Insufficient coverage</li>
                                <li style="margin-bottom: 6px;"><strong>Delayed Dissemination:</strong> Late intelligence</li>
                                <li style="margin-bottom: 6px;"><strong>Inadequate OPSEC:</strong> Poor security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    `;
  }
};
export default corpsTacticsModule;
