/**
 * Tactics: Reconnaissance & Security - Echelon Analysis (Army Level)
 * Doctrinal Analysis and Planning Framework for Army-Level Reconnaissance and Security Operations
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 * Command Level: Army Commander (Lieutenant General O-9)
 * Primary Doctrine: FM 3-20 (Reconnaissance and Security Operations), FM 3-0 (Operations)
 * Supporting Doctrine: ATP 3-90 (Offense and Defense), JP 2-0 (Joint Intelligence), JP 3-0 (Joint Operations)
 * Target: 70,000-80,000 characters of army-level doctrinal reconnaissance and security analysis
 */

export const armyTacticsModule = {
  getContent(){
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-star" style="margin-right: 12px; color: #a855f7; font-size: 20px;"></i>
                    Army-Level Reconnaissance and Security Operations: Doctrinal Analysis and Planning Framework
                </h2>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4);">
                    <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Doctrinal Context and Scope</h3>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Command Level:</strong> Army Commander (General O-10) commanding 100,000-200,000 personnel across 200,000-400,000 km² operational area with 3-6 month planning horizon. Army-level reconnaissance and security operations provide operational intelligence and force protection enabling corps operations and supporting theater campaign objectives.</p>
                    </div>
                </div>
            </div>

            <!-- Fundamental Principles -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-book-open" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Fundamental Principles of Army Reconnaissance and Security Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-search" style="margin-right: 8px;"></i>
                            Seven Principles of Army Reconnaissance
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Orient on Operational Objectives:</strong> Focus reconnaissance on army commander's operational priorities</li>
                                <li style="margin-bottom: 8px;"><strong>Report Information Rapidly:</strong> Disseminate intelligence within corps decision cycles</li>
                                <li style="margin-bottom: 8px;"><strong>Retain Freedom of Maneuver:</strong> Avoid decisive engagement of reconnaissance forces</li>
                                <li style="margin-bottom: 8px;"><strong>Gain and Maintain Enemy Contact:</strong> Maintain continuous surveillance of adversary forces</li>
                                <li style="margin-bottom: 8px;"><strong>Develop the Situation:</strong> Determine adversary capabilities and intentions</li>
                                <li style="margin-bottom: 8px;"><strong>Task-Organize for Mission:</strong> Tailor reconnaissance forces to operational requirements</li>
                                <li style="margin-bottom: 8px;"><strong>Employ Multiple Reconnaissance Assets:</strong> Integrate corps and division reconnaissance</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Five Principles of Army Security Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                            <ul style="margin: 0; padding-left: 20px;">
                                <li style="margin-bottom: 8px;"><strong>Provide Early and Accurate Warning:</strong> Alert corps commanders to adversary threats 24-48 hours in advance</li>
                                <li style="margin-bottom: 8px;"><strong>Provide Reaction Time and Maneuver Space:</strong> Enable corps to deploy and maneuver forces</li>
                                <li style="margin-bottom: 8px;"><strong>Orient on the Protected Force:</strong> Security operations focused on protecting corps operations</li>
                                <li style="margin-bottom: 8px;"><strong>Perform Continuous Reconnaissance:</strong> Maintain persistent surveillance of operational area</li>
                                <li style="margin-bottom: 8px;"><strong>Maintain Enemy Contact:</strong> Track adversary forces throughout operational depth</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Reconnaissance Planning Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Army Reconnaissance Planning Framework (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Army Reconnaissance Planning Doctrine</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Doctrinal Foundation:</strong> Army reconnaissance planning follows the Military Decision-Making Process (MDMP) per FM 5-0 and integrates with theater reconnaissance operations. Army commanders develop reconnaissance plans supporting operational campaigns across multiple corps areas of operations. Planning must account for extended operational depth (200-400 km), multiple subordinate corps, and integration with theater ISR assets over 3-6 month operational timelines.</p>

                        <p style="margin: 0 0 14px 0;"><strong>Planning Process:</strong> The army G2 leads reconnaissance planning through four phases: (1) Strategic Reconnaissance Planning - define army PIR based on operational objectives; (2) ISR Asset Allocation - assign theater and corps ISR assets to collection requirements; (3) Reconnaissance Synchronization - integrate operations across corps areas; (4) Execution and Assessment - conduct operations and assess effectiveness against PIR.</p>

                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
                            <div>
                                <p style="margin: 0 0 8px 0;"><strong>Phase 1: Strategic Planning</strong></p>
                                <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Step 1:</strong> Analyze army operational objectives</li>
                                    <li><strong>Step 2:</strong> Develop army PIR and IR</li>
                                    <li><strong>Step 3:</strong> Identify intelligence gaps</li>
                                    <li><strong>Step 4:</strong> Coordinate with theater J2</li>
                                    <li><strong>Step 5:</strong> Integrate corps reconnaissance requirements</li>
                                </ul>

                                <p style="margin: 0 0 8px 0;"><strong>Phase 2: ISR Asset Allocation</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Step 1:</strong> Request theater ISR support</li>
                                    <li><strong>Step 2:</strong> Allocate corps cavalry squadrons</li>
                                    <li><strong>Step 3:</strong> Assign MI brigade assets</li>
                                    <li><strong>Step 4:</strong> Coordinate aviation reconnaissance</li>
                                    <li><strong>Step 5:</strong> Establish collection priorities</li>
                                </ul>
                            </div>

                            <div>
                                <p style="margin: 0 0 8px 0;"><strong>Phase 3: Reconnaissance Synchronization</strong></p>
                                <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Step 1:</strong> Synchronize corps reconnaissance operations</li>
                                    <li><strong>Step 2:</strong> Integrate theater ISR support</li>
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
                                    <li><strong>Step 5:</strong> Update army intelligence estimate</li>
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
                                <li style="margin-bottom: 4px;">Operational centers of gravity</li>
                                <li style="margin-bottom: 4px;">Corps decisive points</li>
                                <li style="margin-bottom: 4px;">Adversary operational capabilities</li>
                                <li style="margin-bottom: 4px;">Operational environment assessment</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Considerations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Theater campaign objectives</li>
                                <li style="margin-bottom: 4px;">Army operational objectives</li>
                                <li style="margin-bottom: 4px;">Corps commander's intent</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-list-check" style="margin-right: 8px;"></i>
                            Priority Intelligence Requirements
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Army PIR Categories:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Adversary operational reserves</li>
                                <li style="margin-bottom: 4px;">Enemy corps-level formations</li>
                                <li style="margin-bottom: 4px;">Operational fires capabilities</li>
                                <li style="margin-bottom: 4px;">Lines of communication</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>PIR Development:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Army commander approval</li>
                                <li style="margin-bottom: 4px;">Corps PIR integration</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                            ISR Asset Allocation
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Army ISR Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Theater UAS support</li>
                                <li style="margin-bottom: 4px;">Corps cavalry squadrons</li>
                                <li style="margin-bottom: 4px;">MI brigade assets</li>
                                <li style="margin-bottom: 4px;">Aviation reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Allocation Process:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Corps priority assignment</li>
                                <li style="margin-bottom: 4px;">Theater asset coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ISR Integration and Synchronization -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-sync-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Army ISR Integration and Synchronization (FM 3-0, JP 2-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">ISR Synchronization Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Army ISR Synchronization:</strong> Army G2 integrates theater ISR support with corps reconnaissance operations through the Intelligence Collection Management (ICM) process. Synchronization ensures optimal employment of ISR assets across multiple corps areas while supporting army operational objectives and theater campaign plans.</p>
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
                                <li><strong>Theater:</strong> Theater J2 provides strategic ISR support</li>
                                <li><strong>Army:</strong> Army G2 integrates theater and corps ISR</li>
                                <li><strong>Corps:</strong> Corps G2 integrates army and division ISR</li>
                                <li><strong>Division:</strong> Division G2 integrates corps and brigade ISR</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(96, 165, 250, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Integration Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>PIR Flow:</strong> Corps to army to theater</li>
                                    <li><strong>Intelligence Products:</strong> Theater to army to corps</li>
                                    <li><strong>ISR Coordination:</strong> Army ISR synchronization board</li>
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
                            <p style="margin: 0 0 6px 0;"><strong>Corps Integration:</strong></p>
                            <ul style="margin: 0 0 14px 0; padding-left: 20px; line-height: 1.8;">
                                <li><strong>Multiple Corps:</strong> Coordinate ISR across 2-5 corps</li>
                                <li><strong>Army MI Brigade:</strong> Army-level intelligence fusion</li>
                                <li><strong>Aviation Brigade:</strong> Army aviation reconnaissance</li>
                                <li><strong>Theater Support:</strong> Theater ISR asset coordination</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(34, 197, 94, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Coordination Mechanisms:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Army G2:</strong> Army intelligence operations center</li>
                                    <li><strong>ISR Sync Board:</strong> Army ISR coordination forum</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Multi-Domain Operations at Army Level</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Doctrinal Foundation:</strong> Army-level reconnaissance integrates capabilities across land, air, maritime (if applicable), space, and cyber domains per FM 3-0 Multi-Domain Operations doctrine. Army commanders leverage theater ISR assets, corps reconnaissance forces, and army-organic capabilities to create comprehensive operational intelligence supporting multiple corps operations across 200-400 km operational depth.</p>

                        <p style="margin: 0;"><strong>Integration Approach:</strong> Multi-domain reconnaissance synchronizes collection across all domains to create operational intelligence advantage. Army G2 coordinates with theater J2, JFACC, JFMCC (if applicable), Space Force, and Cyber Command to integrate reconnaissance operations. This integration enables army commanders to understand adversary capabilities across all domains and exploit vulnerabilities through synchronized multi-domain operations.</p>
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
                                <li style="margin-bottom: 4px;">Corps cavalry squadrons</li>
                                <li style="margin-bottom: 4px;">Division reconnaissance</li>
                                <li style="margin-bottom: 4px;">Ground surveillance radars</li>
                                <li style="margin-bottom: 4px;">HUMINT collection teams</li>
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
                                <li style="margin-bottom: 4px;">Theater UAS (MQ-9, RQ-4)</li>
                                <li style="margin-bottom: 4px;">Army aviation reconnaissance</li>
                                <li style="margin-bottom: 4px;">Airborne SIGINT platforms</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Planning:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Airspace coordination</li>
                                <li style="margin-bottom: 4px;">Air defense threat assessment</li>
                                <li style="margin-bottom: 4px;">Persistent ISR coverage</li>
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
                                <li style="margin-bottom: 4px;">Satellite imagery (IMINT)</li>
                                <li style="margin-bottom: 4px;">GPS/PNT services</li>
                                <li style="margin-bottom: 4px;">SATCOM support</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Cyber Capabilities:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Cyber reconnaissance</li>
                                <li style="margin-bottom: 4px;">Network intelligence</li>
                            </ul>
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
                        <p style="margin: 0;"><strong>Joint Coordination:</strong> Army reconnaissance operations integrate with joint force component commands (JFACC, JFMCC, JFLCC) and coalition partners. Army G2 coordinates with theater J2 to synchronize ISR operations, share intelligence products, and support joint targeting. Coalition coordination ensures interoperability, information sharing, and synchronized reconnaissance across multinational forces.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(96, 165, 250, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(96, 165, 250, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-users" style="margin-right: 8px;"></i>
                            Joint Force Component Coordination
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>JFACC Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Air reconnaissance support</li>
                                <li style="margin-bottom: 4px;">Airspace coordination</li>
                                <li style="margin-bottom: 4px;">ISR platform deconfliction</li>
                                <li style="margin-bottom: 4px;">Joint targeting coordination</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>JFLCC Coordination:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Ground reconnaissance integration</li>
                                <li style="margin-bottom: 4px;">Corps boundary coordination</li>
                                <li style="margin-bottom: 4px;">Intelligence sharing</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(34, 197, 94, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.3);">
                        <h4 style="color: #86efac; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-flag" style="margin-right: 8px;"></i>
                            Coalition Partner Coordination
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Coordination Mechanisms:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Coalition intelligence fusion center</li>
                                <li style="margin-bottom: 4px;">Liaison officer exchange</li>
                                <li style="margin-bottom: 4px;">Intelligence sharing agreements</li>
                                <li style="margin-bottom: 4px;">Combined reconnaissance planning</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Considerations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Classification restrictions</li>
                                <li style="margin-bottom: 4px;">National caveats</li>
                                <li style="margin-bottom: 4px;">Interoperability challenges</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 18px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 14px 0;">
                            <i class="fas fa-building" style="margin-right: 8px;"></i>
                            Interagency Coordination
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.7; text-align: left;">
                            <p style="margin: 0 0 6px 0;"><strong>Intelligence Community:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">National intelligence support</li>
                                <li style="margin-bottom: 4px;">CIA coordination</li>
                                <li style="margin-bottom: 4px;">NSA SIGINT support</li>
                                <li style="margin-bottom: 4px;">NGA GEOINT products</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Other Agencies:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">State Department coordination</li>
                                <li style="margin-bottom: 4px;">Host nation intelligence</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Security Operations Doctrine -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px; color: #a855f7; font-size: 16px;"></i>
                    Army Security Operations Doctrine (FM 3-20, FM 3-0)
                </h3>

                <div style="background: rgba(168, 85, 247, 0.15); padding: 20px; border-radius: 10px; border: 1px solid rgba(168, 85, 247, 0.4); margin-bottom: 20px;">
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Security Operations Framework</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Army Security Operations:</strong> Per FM 3-20, army security operations provide protection to corps forces, enable freedom of maneuver, and deny adversary intelligence collection across operational depth. Security operations include screen, guard, cover, area security, and local security conducted at operational distances (50-200 km) protecting multiple corps operations across the army area of operations.</p>

                        <p style="margin: 0;"><strong>Planning Considerations:</strong> Army security operations must account for extended operational depth, multiple corps boundaries, and integration with theater security operations. Security forces typically include corps cavalry squadrons, division reconnaissance units, and aviation assets. Planning must balance force protection requirements against reconnaissance mission needs and ensure adequate early warning time (24-48 hours) for corps commanders to react to adversary threats.</p>
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
                                <li style="margin-bottom: 4px;">Early warning (24-48 hours)</li>
                                <li style="margin-bottom: 4px;">Continuous surveillance</li>
                                <li style="margin-bottom: 4px;">Impede adversary reconnaissance</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Army flanks and boundaries</li>
                                <li style="margin-bottom: 4px;">Operational approaches</li>
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
                                <li style="margin-bottom: 4px;">Protect corps forces</li>
                                <li style="margin-bottom: 4px;">Fight to gain time</li>
                                <li style="margin-bottom: 4px;">Maintain freedom of maneuver</li>
                            </ul>

                            <p style="margin: 0 0 6px 0;"><strong>Applications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li style="margin-bottom: 4px;">Corps force protection</li>
                                <li style="margin-bottom: 4px;">Army assembly areas</li>
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
                                <li style="margin-bottom: 4px;">Army force deployment</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Army IPB Process</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>IPB Doctrine:</strong> Army-level IPB analyzes the operational environment across 200-400 km operational area supporting multiple corps operations. The four-step IPB process provides operational intelligence enabling army commanders to understand terrain, weather, adversary capabilities, and potential courses of action across 3-6 month operational timelines. Army G2 conducts IPB to support operational planning, identify intelligence gaps, and develop collection strategies supporting corps operations.</p>
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
                                <li><strong>Area of Operations:</strong> Army assigned area (200-400 km depth, 300-600 km width)</li>
                                <li><strong>Area of Interest:</strong> Extended operational area including adversary operational depth</li>
                                <li><strong>Corps AOs:</strong> 2-5 subordinate corps areas of operations</li>
                                <li><strong>Joint Operations Area:</strong> Theater JOA integration</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(96, 165, 250, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Temporal Considerations:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Operational Planning:</strong> 3-6 months strategic timeline</li>
                                    <li><strong>Tactical Execution:</strong> 30-90 days operational phases</li>
                                    <li><strong>Decision Points:</strong> Key operational decision timelines</li>
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
                                <li><strong>Operational Mobility:</strong> Corps maneuver corridors and constraints</li>
                                <li><strong>Defensive Terrain:</strong> Natural defensive positions and barriers</li>
                                <li><strong>Urban Terrain:</strong> Major cities and infrastructure</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(34, 197, 94, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Weather Effects:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Seasonal:</strong> Impact on operations over 3-6 months</li>
                                    <li><strong>Visibility:</strong> ISR platform effectiveness</li>
                                    <li><strong>Trafficability:</strong> Ground maneuver constraints</li>
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
                                <li><strong>Operational Forces:</strong> Enemy army-level formations (100,000-200,000 personnel)</li>
                                <li><strong>Tactical Forces:</strong> Corps (40,000-100,000) and division (10,000-20,000) units</li>
                                <li><strong>Operational Reserves:</strong> Strategic reserve forces</li>
                                <li><strong>Fires Capabilities:</strong> Long-range artillery, rockets, missiles</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(139, 92, 246, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Capabilities Assessment:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Offensive:</strong> Operational maneuver capabilities</li>
                                    <li><strong>Defensive:</strong> Defensive operations doctrine</li>
                                    <li><strong>Reconnaissance:</strong> Enemy ISR capabilities</li>
                                    <li><strong>Fires:</strong> Operational fires range and effects</li>
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
                                <li><strong>Most Likely COA:</strong> Probable adversary operational approach based on doctrine and capabilities</li>
                                <li><strong>Most Dangerous COA:</strong> Greatest threat to army operations and mission success</li>
                                <li><strong>Alternative COAs:</strong> Other feasible adversary courses of action</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>COA Analysis:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Objectives:</strong> Adversary operational objectives</li>
                                    <li><strong>Main Effort:</strong> Primary operational focus</li>
                                    <li><strong>Timeline:</strong> Operational phases and decision points</li>
                                    <li><strong>Indicators:</strong> Observable activities confirming COA</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Army Targeting Doctrine</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0 0 14px 0;"><strong>Reconnaissance-Strike Integration:</strong> Army reconnaissance operations provide intelligence foundation for operational targeting. The F2T2EA cycle (Find, Fix, Track, Target, Engage, Assess) integrates army ISR with corps fires to engage operational targets supporting army campaign objectives. Army targeting focuses on operational targets including enemy operational reserves, command and control nodes, fires capabilities, and logistics infrastructure.</p>

                        <p style="margin: 0;"><strong>Targeting Process:</strong> Army targeting follows the Decide, Detect, Deliver, Assess (D3A) methodology integrated with the F2T2EA cycle. The army fires and effects coordination cell (FECC) synchronizes targeting across corps areas, prioritizes high-payoff targets, and coordinates with theater for strategic fires support. Targeting priorities support operational objectives and enable corps maneuver operations.</p>
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
                                <li style="margin-bottom: 4px;">Army ISR collection</li>
                                <li style="margin-bottom: 4px;">Theater ISR support</li>
                                <li style="margin-bottom: 4px;">Corps reconnaissance</li>
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
                                <li style="margin-bottom: 4px;">Corps fires execution</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Army Reconnaissance Risk Management</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Risk Management:</strong> Army reconnaissance operations involve operational and tactical risks. Army commanders balance intelligence value against risks to reconnaissance forces, corps operations, and operational objectives through the five-step risk management process: (1) Identify Hazards; (2) Assess Hazards; (3) Develop Controls; (4) Implement Controls; (5) Supervise and Evaluate.</p>
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
                                <li><strong>Coordination:</strong> Corps synchronization challenges</li>
                            </ul>

                            <div style="border-top: 1px solid rgba(245, 158, 11, 0.2); padding-top: 12px;">
                                <p style="margin: 0 0 8px 0;"><strong>Mitigation:</strong></p>
                                <ul style="margin: 0; padding-left: 20px; line-height: 1.8;">
                                    <li><strong>Redundant Collection:</strong> Multiple ISR sources</li>
                                    <li><strong>Theater Support:</strong> Theater ISR integration</li>
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
                    <h4 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 14px 0;">Army Reconnaissance and Security: Essential Principles</h4>
                    <div style="color: #e5e7eb; font-size: 13px; line-height: 1.8; text-align: left;">
                        <p style="margin: 0;"><strong>Doctrinal Foundation:</strong> Army-level reconnaissance and security operations provide operational intelligence and force protection enabling multiple corps operations across 200-400 km operational depth. These operations must integrate theater ISR support, synchronize corps reconnaissance, and continuously adapt to operational changes over 3-6 month timelines.</p>
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
                                <li style="margin-bottom: 6px;"><strong>Unity of Effort:</strong> Integrate across corps</li>
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
                                <li style="margin-bottom: 6px;"><strong>Corps Coordination:</strong> Synchronize operations</li>
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
export default armyTacticsModule;
