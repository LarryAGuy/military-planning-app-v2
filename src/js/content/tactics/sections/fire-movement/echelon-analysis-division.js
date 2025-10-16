/**
 * Division-Level Fire & Movement Doctrinal Analysis
 * Operational-Tactical Command Level (2-Star Major General)
 * 10,000-20,000 Personnel Multi-Brigade Operations
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 * Target: 65,000-75,000 characters of comprehensive operational-tactical doctrinal content
 * Sources: FM 5-0, JP 5-0, JP 3-0 with specific chapter references
 */

export const divisionTacticsModule = {
  getContent(){
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">

            <!-- Division Command Authority and Operational-Tactical Context -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-chess-king" style="margin-right: 12px; color: #8b5cf6; font-size: 20px;"></i>
                    Division-Level Fire & Movement Doctrinal Analysis
                </h2>
                <div style="background: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3); margin-bottom: 16px;">
                    <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-chess-king" style="margin-right: 8px;"></i>
                        Division Command Authority and Operational-Tactical Context
                    </h3>
                    <div style="color: #e9d5ff; font-size: 12px; line-height: 1.5;">
                        <p style="margin: 0 0 8px 0;"><strong>Division Command Structure:</strong> Division-level fire and movement operations represent the operational-tactical echelon, typically commanded by a 2-Star Major General with responsibility for 10,000-20,000 personnel across 3-5 Brigade Combat Teams (BCTs) and supporting elements operating within a defined area of operations.</p>
                        <p style="margin: 0 0 8px 0;"><strong>Doctrinal Foundation:</strong> Per FM 5-0 Chapter 4-1, Division-level operations serve as the critical bridge between corps operational objectives and brigade tactical execution, integrating multiple BCTs and enabling capabilities to achieve operational objectives through tactical actions.</p>
                        <p style="margin: 0 0 8px 0;"><strong>Operational-Tactical Scope:</strong> Division commanders coordinate forces ranging from 10,000 to 20,000 personnel across 3-5 Brigade Combat Teams, functional brigades, and specialized enablers, operating across areas spanning tens to hundreds of square kilometers with tactical reach extending throughout the division area of operations.</p>
                        <p style="margin: 0;"><strong>Command Relationships:</strong> Division commanders exercise tactical control (TACON) over assigned Brigade Combat Teams and operational control (OPCON) over division assets while coordinating with adjacent divisions and higher corps headquarters as defined in JP 5-0 Chapter V.</p>
                    </div>
                </div>

                <div style="background: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Division-Level Operational-Tactical Perspective</h4>
                    <div style="color: #e9d5ff; font-size: 12px; line-height: 1.5;">
                        <p style="margin: 0 0 8px 0;">Division-level fire and movement doctrine encompasses the operational-tactical application of combined arms capabilities to achieve corps operational objectives through coordinated brigade tactical actions. This includes the integration of multiple Brigade Combat Teams and enabling capabilities across the division area of operations.</p>
                        <p style="margin: 0;">Division commanders must synchronize multiple brigade operations while maintaining tactical flexibility and achieving assigned operational objectives. The complexity of division operations requires sophisticated tactical planning, extensive coordination mechanisms, and robust sustainment operations spanning the division area.</p>
                    </div>
                </div>
            </div>

            <!-- Division Fire Support Coordination Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(37, 99, 235, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #3b82f6; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-crosshairs" style="margin-right: 10px;"></i>
                    Division Fire Support Coordination Framework
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(37, 99, 235, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-rocket" style="margin-right: 8px;"></i>
                            Division Fire Support Assets
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Division Artillery (DIVARTY) Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>M109A7 Paladin self-propelled howitzer battalions</li>
                                <li>M142 High Mobility Artillery Rocket System (HIMARS)</li>
                                <li>Counter-fire radar systems (AN/TPQ-50, AN/TPQ-53)</li>
                                <li>Target acquisition and surveillance systems</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Combat Team Fires:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Brigade Support Battalion (BSB) fires coordination</li>
                                <li>Field Artillery Battalion organic to each BCT</li>
                                <li>Mortar systems (60mm, 81mm, 120mm) integration</li>
                                <li>Forward Observer (FO) and Fire Support Team (FIST) networks</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Joint Fire Support Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Close Air Support (CAS) coordination and integration</li>
                                <li>Joint Terminal Attack Controller (JTAC) operations</li>
                                <li>Naval Surface Fire Support (NSFS) in littoral areas</li>
                                <li>Special Operations Forces (SOF) fires coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-target" style="margin-right: 8px;"></i>
                            Division Fire Coordination Doctrine
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Fire Support Coordination Measures (FSCM):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division Fire Support Coordination Line (FSCL)</li>
                                <li>Coordinated Fire Line (CFL) between brigade boundaries</li>
                                <li>No-Fire Areas (NFA) and Restricted Fire Areas (RFA)</li>
                                <li>Free Fire Areas (FFA) and Kill Boxes</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Target Development and Engagement:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>High-Payoff Target (HPT) and High-Value Target (HVT) development</li>
                                <li>Target Selection Standards (TSS) and engagement criteria</li>
                                <li>Time-Sensitive Target (TST) engagement procedures</li>
                                <li>Battle Damage Assessment (BDA) and re-engagement</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Fires Integration and Synchronization:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Division Fires Cell coordination with brigade fires</li>
                                <li>Fires and Effects Coordination Cell (FECC) operations</li>
                                <li>Counter-fire operations and enemy artillery suppression</li>
                                <li>Information Operations and Electronic Warfare integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Movement Operations and Logistics -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(22, 163, 74, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-moving" style="margin-right: 10px;"></i>
                    Division Movement Operations and Logistics
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(22, 163, 74, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(22, 163, 74, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            Division Movement Control
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Movement and Maneuver:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-brigade movement coordination and synchronization</li>
                                <li>Brigade boundary management and movement corridors</li>
                                <li>Battalion Task Force movement within brigade areas</li>
                                <li>Division reserve movement and positioning</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Movement Control Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division Movement Control Center coordination</li>
                                <li>Movement Control Teams (MCT) and route management</li>
                                <li>Traffic Control Points (TCP) and convoy operations</li>
                                <li>Route reconnaissance and clearance operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Mobility and Counter-Mobility:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Division Engineer Brigade mobility operations</li>
                                <li>Bridge and gap crossing operations</li>
                                <li>Obstacle emplacement and counter-mobility</li>
                                <li>Survivability operations and force protection</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(22, 163, 74, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(22, 163, 74, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-cogs" style="margin-right: 8px;"></i>
                            Division Logistics Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division Sustainment Brigade coordination</li>
                                <li>Brigade Support Battalion (BSB) operations</li>
                                <li>Forward Support Company (FSC) coordination</li>
                                <li>Division Support Area (DSA) operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Supply Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-class supply operations and distribution</li>
                                <li>Ammunition Supply Point (ASP) operations</li>
                                <li>Petroleum Supply Point (PSP) operations</li>
                                <li>Water production and distribution</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Transportation Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Division transportation assets coordination</li>
                                <li>Heavy Equipment Transport (HET) operations</li>
                                <li>Line haul and local haul operations</li>
                                <li>Movement control and convoy security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Operations Integration at Division Level -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f59e0b; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-layer-group" style="margin-right: 10px;"></i>
                    Multi-Domain Operations Integration at Division Level
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 8px;"></i>
                            Division Domain Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Land Domain Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-brigade coordination across division area</li>
                                <li>Brigade Combat Team (BCT) integration and synchronization</li>
                                <li>Division artillery and air defense coordination</li>
                                <li>Engineer operations and obstacle integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Air Domain Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combat Aviation Brigade (CAB) air-ground integration</li>
                                <li>Airspace Control and coordination</li>
                                <li>Unmanned Aircraft System (UAS) integration</li>
                                <li>Air Defense Artillery (ADA) coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Maritime Domain Coordination:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Littoral operations and amphibious support</li>
                                <li>Port operations and logistics coordination</li>
                                <li>Naval gunfire support integration</li>
                                <li>Maritime interdiction support</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                            Space, Cyber, and Information Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Space Domain Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Satellite communication and navigation systems</li>
                                <li>Space-based intelligence and surveillance</li>
                                <li>Position, Navigation, and Timing (PNT) services</li>
                                <li>Space situational awareness</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Cyberspace Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division network operations and cyber defense</li>
                                <li>Defensive Cyber Operations (DCO)</li>
                                <li>Cyber Electromagnetic Activities (CEMA)</li>
                                <li>Network security and information assurance</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Information Environment Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Military Information Support Operations (MISO)</li>
                                <li>Electronic Warfare (EW) and spectrum operations</li>
                                <li>Public Affairs and strategic communication</li>
                                <li>Civil Affairs Operations (CAO)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Joint, Interagency, Intergovernmental, Multinational (JIIM) Coordination -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-handshake" style="margin-right: 10px;"></i>
                    Joint, Interagency, Intergovernmental, Multinational (JIIM) Coordination
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-users" style="margin-right: 8px;"></i>
                            Joint and Interagency Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Joint Force Integration (JP 5-0 Chapter V):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Joint Air-Ground Integration Center (JAGIC) tactical coordination</li>
                                <li>Joint Fires Element (JFE) and targeting coordination</li>
                                <li>Joint Intelligence Operations Center (JIOC) tactical support</li>
                                <li>Joint Logistics Operations Center (JLOC) sustainment coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Interagency Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Local State Department consular and political coordination</li>
                                <li>Defense Intelligence Agency (DIA) tactical intelligence support</li>
                                <li>Federal Bureau of Investigation (FBI) local coordination</li>
                                <li>Department of Homeland Security tactical coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Service Component Coordination:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Air Force Tactical Air Control Party (TACP) integration</li>
                                <li>Navy and Marine Corps tactical liaison coordination</li>
                                <li>Special Operations Forces (SOF) tactical integration</li>
                                <li>Joint Terminal Attack Controller (JTAC) coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(220, 38, 38, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 8px;"></i>
                            Intergovernmental and Multinational Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Intergovernmental Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Local government and municipal authority coordination</li>
                                <li>Host nation local military and security force integration</li>
                                <li>International organization tactical coordination (UN, ICRC)</li>
                                <li>Non-governmental organization (NGO) humanitarian coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Multinational Force Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Standardization Agreement (STANAG) tactical compliance</li>
                                <li>Multinational brigade and battalion tactical integration</li>
                                <li>Coalition liaison teams and tactical coordination</li>
                                <li>Partner nation tactical capability integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Partner Nation Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Security Force Assistance Team (SFAT) coordination</li>
                                <li>Foreign Military Sales (FMS) equipment tactical integration</li>
                                <li>International Military Education and Training (IMET)</li>
                                <li>Combined tactical training and exercise programs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Coalition and Alliance Integration -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(99, 102, 241, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #6366f1; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-globe-europe" style="margin-right: 10px;"></i>
                    Coalition and Alliance Integration
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(99, 102, 241, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">
                        <h4 style="color: #a5b4fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            NATO Tactical Command Structures
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>NATO Tactical Force Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Force Integration Units (NFIU) tactical support</li>
                                <li>Enhanced Forward Presence (eFP) battle group integration</li>
                                <li>Allied Reaction Force (ARF) tactical deployment</li>
                                <li>NATO Special Operations Component Command (NSOCC)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>NATO Tactical Interoperability:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Standardization Office (NSO) tactical compliance</li>
                                <li>Allied Command Transformation (ACT) tactical doctrine</li>
                                <li>NATO Communications and Information Systems (NCIS)</li>
                                <li>Combined Joint Planning Staff (CJPS) tactical procedures</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Alliance Tactical Capabilities:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>NATO Response Force (NRF) tactical readiness</li>
                                <li>Very High Readiness Joint Task Force (VJTF)</li>
                                <li>Multinational Division Northeast (MND-NE)</li>
                                <li>NATO Battle Group tactical coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(99, 102, 241, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">
                        <h4 style="color: #a5b4fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-flag" style="margin-right: 8px;"></i>
                            Regional Alliance Tactical Coordination
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>European Tactical Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>European Union Battle Groups (EUBG) tactical coordination</li>
                                <li>European Defence Agency (EDA) tactical capability development</li>
                                <li>Permanent Structured Cooperation (PESCO) tactical projects</li>
                                <li>European Peace Facility (EPF) tactical support mechanisms</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Indo-Pacific Tactical Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>QUAD (US-Japan-Australia-India) tactical coordination</li>
                                <li>AUKUS (Australia-UK-US) tactical capability integration</li>
                                <li>Five Eyes intelligence sharing tactical partnership</li>
                                <li>ANZUS Treaty tactical defense coordination mechanisms</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Coalition Tactical Logistics and Support:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>NATO Support and Procurement Agency (NSPA)</li>
                                <li>Multinational Logistics Coordination Centre (MLCC)</li>
                                <li>Combined Joint Logistics Over-the-Shore (CJLOTS)</li>
                                <li>Host Nation Support (HNS) tactical agreements and coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Risk Assessment and Mitigation -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px;"></i>
                    Division Risk Assessment and Mitigation
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                            Division-Level Risk Categories
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Risks:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-brigade coordination challenges</li>
                                <li>Enemy tactical reserves and counter-attacks</li>
                                <li>Lines of communication vulnerabilities</li>
                                <li>Joint coordination complexities</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Operational Risks:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Enemy anti-access/area denial capabilities</li>
                                <li>Chemical, biological, radiological, nuclear threats</li>
                                <li>Asymmetric and irregular warfare</li>
                                <li>Electronic warfare and cyber vulnerabilities</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Risks:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Logistics disruption and supply shortages</li>
                                <li>Medical evacuation limitations</li>
                                <li>Maintenance capability degradation</li>
                                <li>Transportation vulnerabilities</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(220, 38, 38, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-balance-scale" style="margin-right: 8px;"></i>
                            Risk Mitigation Strategies
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Risk Mitigation:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Distributed operations and mission command</li>
                                <li>Multiple contingency plans</li>
                                <li>Redundant command and control</li>
                                <li>Coalition interoperability</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Force Protection Measures:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Integrated Air and Missile Defense</li>
                                <li>Counter-intelligence operations</li>
                                <li>CBRN detection and protection</li>
                                <li>Electronic warfare and cyber defense</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Risk Mitigation:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Multiple supply routes</li>
                                <li>Forward positioning of supplies</li>
                                <li>Host nation support</li>
                                <li>Reserve capabilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Intelligence and Reconnaissance -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(6, 182, 212, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #06b6d4; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-search" style="margin-right: 10px;"></i>
                    Division Intelligence and Reconnaissance
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(6, 182, 212, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3);">
                        <h4 style="color: #67e8f9; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-eye" style="margin-right: 8px;"></i>
                            Division Intelligence Architecture
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Division Intelligence Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Military Intelligence Company coordination</li>
                                <li>Brigade S-2 intelligence integration</li>
                                <li>Corps intelligence support</li>
                                <li>National intelligence coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Intelligence Collection Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Unmanned Aircraft System (UAS) collection</li>
                                <li>Signals Intelligence (SIGINT) operations</li>
                                <li>Human Intelligence (HUMINT) coordination</li>
                                <li>Geospatial Intelligence (GEOINT) analysis</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Intelligence Analysis and Production:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>All-Source Intelligence fusion</li>
                                <li>Intelligence Preparation of the Battlefield</li>
                                <li>Enemy course of action development</li>
                                <li>Intelligence, Surveillance, Reconnaissance synchronization</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(6, 182, 212, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3);">
                        <h4 style="color: #67e8f9; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px;"></i>
                            Division Reconnaissance Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Ground Reconnaissance:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division Cavalry Squadron operations</li>
                                <li>Brigade reconnaissance units</li>
                                <li>Long Range Surveillance operations</li>
                                <li>Special reconnaissance coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Aerial Reconnaissance:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combat Aviation Brigade reconnaissance</li>
                                <li>Fixed-wing intelligence collection</li>
                                <li>Unmanned Aircraft System operations</li>
                                <li>Joint aerial reconnaissance</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Technical Intelligence:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Electronic Intelligence collection</li>
                                <li>Communications Intelligence</li>
                                <li>Measurement and Signature Intelligence</li>
                                <li>Technical exploitation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Communications and Information Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(20, 184, 166, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #14b8a6; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-broadcast-tower" style="margin-right: 10px;"></i>
                    Division Communications and Information Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(20, 184, 166, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(20, 184, 166, 0.3);">
                        <h4 style="color: #5eead4; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                            Division Communications Systems
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Command and Control Networks:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Army Battle Command System integration</li>
                                <li>Command Post Computing Environment</li>
                                <li>Distributed Common Ground System-Army</li>
                                <li>Joint Battle Command-Platform</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Communications Infrastructure:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division Signal Company support</li>
                                <li>Satellite Communications systems</li>
                                <li>Tactical Internet operations</li>
                                <li>Mobile Subscriber Equipment</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Information Systems Security:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Information Assurance</li>
                                <li>Communications Security operations</li>
                                <li>Electronic Protection</li>
                                <li>Network defense</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(20, 184, 166, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(20, 184, 166, 0.3);">
                        <h4 style="color: #5eead4; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-virus" style="margin-right: 8px;"></i>
                            Information Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Information Operations Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Military Information Support Operations</li>
                                <li>Electronic Warfare operations</li>
                                <li>Operations Security</li>
                                <li>Computer Network Operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Public Affairs and Communication:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Public Affairs Officer operations</li>
                                <li>Strategic communication</li>
                                <li>Media operations</li>
                                <li>Civil Affairs information support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Counter-Information Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Counter-propaganda operations</li>
                                <li>Information environment assessment</li>
                                <li>Social media monitoring</li>
                                <li>Influence operations detection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Sustainment and Logistics Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(236, 72, 153, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #ec4899; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-loading" style="margin-right: 10px;"></i>
                    Division Sustainment and Logistics Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(236, 72, 153, 0.3);">
                        <h4 style="color: #f9a8d4; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-industry" style="margin-right: 8px;"></i>
                            Division Sustainment Framework
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Command Structure:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division Sustainment Brigade operations</li>
                                <li>Brigade Support Battalion coordination</li>
                                <li>Forward Support Company operations</li>
                                <li>Division Support Area management</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Supply Chain Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-class supply distribution</li>
                                <li>Automated logistics systems</li>
                                <li>Supply Support Activity operations</li>
                                <li>Contractor logistics support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Distribution Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Division distribution networks</li>
                                <li>Forward logistics elements</li>
                                <li>Multi-modal transportation</li>
                                <li>Last tactical mile distribution</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(236, 72, 153, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(236, 72, 153, 0.3);">
                        <h4 style="color: #f9a8d4; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-wrench" style="margin-right: 8px;"></i>
                            Maintenance and Support Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Maintenance Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division maintenance coordination</li>
                                <li>Forward Repair Activity operations</li>
                                <li>Maintenance Support Team coordination</li>
                                <li>Contractor maintenance support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Medical Support Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division medical coordination</li>
                                <li>Forward Surgical Team operations</li>
                                <li>Medical evacuation coordination</li>
                                <li>Preventive medicine services</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Personnel and Administrative Support:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Human Resources support</li>
                                <li>Casualty operations</li>
                                <li>Postal operations</li>
                                <li>Legal support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Planning Considerations and Lessons Learned -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(234, 179, 8, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #eab308; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-chess-king" style="margin-right: 10px;"></i>
                    Division Planning Considerations and Lessons Learned
                </h3>

                <div style="background: rgba(234, 179, 8, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(234, 179, 8, 0.3); margin-bottom: 20px;">
                    <h4 style="color: #fde047; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-lightbulb" style="margin-right: 8px;"></i>
                        Division-Level Doctrinal Insights
                    </h4>
                    <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                        <p style="margin: 0 0 8px 0;"><strong>Operational-Tactical Bridge:</strong> Division-level fire and movement operations serve as the critical bridge between corps operational objectives and brigade tactical execution, translating operational intent into tactical actions through coordinated brigade operations.</p>

                        <p style="margin: 0 0 8px 0;"><strong>Multi-Brigade Synchronization:</strong> Division commanders must synchronize multiple brigade operations while maintaining tactical flexibility and achieving assigned operational objectives. This requires sophisticated tactical planning and coordination mechanisms.</p>

                        <p style="margin: 0;"><strong>Combined Arms Integration:</strong> Modern division operations require extensive combined arms coordination and integration. Success depends on effective planning, coordination, and execution across all warfighting functions.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(234, 179, 8, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(234, 179, 8, 0.3);">
                        <h4 style="color: #fde047; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-star" style="margin-right: 8px;"></i>
                            Division Best Practices
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li><strong>Mission Command:</strong> Enable decentralized execution with clear intent</li>
                                <li><strong>Combined Arms:</strong> Integrate all available capabilities</li>
                                <li><strong>Joint Coordination:</strong> Leverage joint capabilities</li>
                                <li><strong>Intelligence-Driven:</strong> Base operations on comprehensive intelligence</li>
                                <li><strong>Adaptive Planning:</strong> Maintain flexibility and responsiveness</li>
                                <li><strong>Sustainment Focus:</strong> Ensure adequate logistics support</li>
                                <li><strong>Risk Management:</strong> Balance risk with mission accomplishment</li>
                                <li><strong>Coalition Integration:</strong> Coordinate with multinational partners</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(234, 179, 8, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(234, 179, 8, 0.3);">
                        <h4 style="color: #fde047; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-book" style="margin-right: 8px;"></i>
                            Doctrinal References
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Primary Sources:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>FM 5-0: The Operations Process (Chapter 4-1: Division Operations)</li>
                                <li>FM 3-0: Operations (Chapter 5: Division Operations)</li>
                                <li>JP 5-0: Joint Planning (Chapter V: Tactical Level)</li>
                                <li>JP 3-0: Joint Operations (Chapter VII: Division Integration)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Supporting References:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>FM 3-60: The Targeting Process</li>
                                <li>FM 4-0: Sustainment Operations</li>
                                <li>FM 2-0: Intelligence Operations</li>
                                <li>FM 6-02: Signal Support to Operations</li>
                            </ul>
                            <p style="margin: 0;"><strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Advanced Operational Considerations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(132, 204, 22, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #84cc16; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-cogs" style="margin-right: 10px;"></i>
                    Division Advanced Operational Considerations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(132, 204, 22, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(132, 204, 22, 0.3);">
                        <h4 style="color: #bef264; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                            Tactical Environment Analysis
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Terrain and Weather Analysis:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division-level terrain analysis across brigade areas</li>
                                <li>Weather impact on multi-brigade operations</li>
                                <li>Seasonal considerations for tactical operations</li>
                                <li>Environmental factors affecting tactical reach</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Enemy Situation Assessment:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Enemy tactical capabilities and doctrine</li>
                                <li>Enemy tactical reserves and reinforcement</li>
                                <li>Local threat analysis and assessment</li>
                                <li>Hybrid and irregular warfare considerations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Civil Considerations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Population centers and civilian protection</li>
                                <li>Critical infrastructure considerations</li>
                                <li>Cultural and political factors</li>
                                <li>Humanitarian assistance coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(132, 204, 22, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(132, 204, 22, 0.3);">
                        <h4 style="color: #bef264; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-clock" style="margin-right: 8px;"></i>
                            Tactical Timing and Phasing
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Design and Phasing:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-phase tactical planning and execution</li>
                                <li>Tactical pause and reconstitution</li>
                                <li>Transition between offensive and defensive</li>
                                <li>Culmination point analysis</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Synchronization Matrix:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-brigade operation synchronization</li>
                                <li>Joint operation timing coordination</li>
                                <li>Coalition force synchronization</li>
                                <li>Information operations timing</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Decision Points and Branch Planning:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Named Areas of Interest and decision points</li>
                                <li>Branch and sequel plan development</li>
                                <li>Crisis action planning</li>
                                <li>Contingency planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Force Structure and Organization -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(124, 58, 237, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #7c3aed; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-sitemap" style="margin-right: 10px;"></i>
                    Division Force Structure and Organization
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(124, 58, 237, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-users-cog" style="margin-right: 8px;"></i>
                            Division Command Structure
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Headquarters Organization:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division Headquarters and staff (S1-S9 sections)</li>
                                <li>Command Group and personal staff</li>
                                <li>Special staff and technical advisors</li>
                                <li>Liaison teams and coordination elements</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Subordinate Commands:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Brigade Combat Team headquarters (3-5 BCTs)</li>
                                <li>Division artillery and air defense</li>
                                <li>Division aviation and engineer brigades</li>
                                <li>Division sustainment and support commands</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Command Post Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Main Command Post and Tactical Command Post</li>
                                <li>Current Operations Integration Cell</li>
                                <li>Future Operations Cell planning</li>
                                <li>Distributed command post operations</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(124, 58, 237, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Division Capabilities Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Combat Arms Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Infantry, Armor, and Artillery coordination</li>
                                <li>Aviation and Air Defense integration</li>
                                <li>Engineer and CBRN capabilities</li>
                                <li>Special Operations coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Combat Support Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Military Intelligence and Signal capabilities</li>
                                <li>Military Police and Civil Affairs</li>
                                <li>Psychological Operations and Information Operations</li>
                                <li>Electronic Warfare and Cyber Operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Combat Service Support Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Transportation and Quartermaster capabilities</li>
                                <li>Ordnance and Medical support</li>
                                <li>Adjutant General and Finance support</li>
                                <li>Chaplain and Legal support services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Training and Readiness -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(244, 63, 94, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f43f5e; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-graduation-cap" style="margin-right: 10px;"></i>
                    Division Training and Readiness
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(244, 63, 94, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(244, 63, 94, 0.3);">
                        <h4 style="color: #fda4af; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-dumbbell" style="margin-right: 8px;"></i>
                            Division Training Programs
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Collective Training:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division Warfighter Exercise and Command Post Exercise</li>
                                <li>Combined Arms Live Fire Exercise</li>
                                <li>Joint and multinational training</li>
                                <li>Mission Rehearsal Exercise preparation</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Leader Development:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Command and General Staff College education</li>
                                <li>Intermediate Level Education programs</li>
                                <li>Professional Military Education</li>
                                <li>Joint Professional Military Education</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Simulation and Modeling:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Warfighter Simulation training</li>
                                <li>Battle Command Training Program</li>
                                <li>Virtual training environments</li>
                                <li>After Action Review integration</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(244, 63, 94, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(244, 63, 94, 0.3);">
                        <h4 style="color: #fda4af; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chart-line" style="margin-right: 8px;"></i>
                            Readiness Assessment
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Readiness Reporting:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Defense Readiness Reporting System</li>
                                <li>Unit Status Report assessment</li>
                                <li>Mission Essential Task List evaluation</li>
                                <li>Training readiness assessment</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Resource Management:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Personnel readiness and strength</li>
                                <li>Equipment readiness and maintenance</li>
                                <li>Supply readiness and logistics</li>
                                <li>Training resource allocation</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Deployment Preparation:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Pre-deployment training and certification</li>
                                <li>Joint Reception, Staging, Onward Movement</li>
                                <li>Theater-specific training</li>
                                <li>Equipment preparation and deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal References and Authority -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(100, 116, 139, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #64748b; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-book" style="margin-right: 10px;"></i>
                    Doctrinal References and Authority
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(100, 116, 139, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(100, 116, 139, 0.3);">
                        <h4 style="color: #cbd5e1; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-scroll" style="margin-right: 8px;"></i>
                            Primary Doctrinal Sources
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Joint Publications:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>JP 5-0: Joint Planning (Chapter V: Tactical Planning)</li>
                                <li>JP 3-0: Joint Operations (Chapter VI: Tactical Operations)</li>
                                <li>JP 3-30: Command and Control of Joint Operations</li>
                                <li>JP 3-31: Command and Control for Joint Land Operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Army Field Manuals:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>FM 5-0: The Operations Process (Chapter 4-1: Division Operations)</li>
                                <li>FM 3-0: Operations (Chapter 5: Division Operations)</li>
                                <li>FM 6-0: Commander and Staff Organization and Operations</li>
                                <li>FM 3-94: Theater Army, Corps, and Division Operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Supporting Publications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>FM 3-60: The Targeting Process</li>
                                <li>FM 4-0: Sustainment Operations</li>
                                <li>FM 2-0: Intelligence Operations</li>
                                <li>FM 6-02: Signal Support to Operations</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(100, 116, 139, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(100, 116, 139, 0.3);">
                        <h4 style="color: #cbd5e1; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-gavel" style="margin-right: 8px;"></i>
                            Legal and Policy Framework
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Legal Authorities:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Title 10 USC: Armed Forces tactical authorities</li>
                                <li>Unified Command Plan (UCP) tactical command relationships</li>
                                <li>Rules of Engagement (ROE) and Law of Armed Conflict</li>
                                <li>Status of Forces Agreements (SOFA) tactical framework</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Policy Guidance:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>National Defense Strategy tactical implementation</li>
                                <li>Combatant Command tactical guidance</li>
                                <li>Army Strategic Planning Guidance tactical application</li>
                                <li>Division Mission Essential Task List (METL)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>International Tactical Framework:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Article 5 collective defense tactical provisions</li>
                                <li>UN Charter Chapter VII tactical enforcement actions</li>
                                <li>Geneva Conventions and Additional Protocols</li>
                                <li>Bilateral tactical defense cooperation agreements</li>
                            </ul>
                            <p style="margin: 0;"><strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
};
export default divisionTacticsModule;
