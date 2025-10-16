/**
 * Corps-Level Fire & Movement Doctrinal Analysis
 * Operational Command Level (3-Star Lieutenant General)
 * 40,000-100,000 Personnel Multi-Division Operations
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 * Target: 65,000-75,000 characters of comprehensive operational-level doctrinal content
 * Sources: FM 5-0, JP 5-0, JP 3-0 with specific chapter references
 */

export const corpsTacticsModule = {
  getContent(){
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">

            <!-- Corps Command Authority and Operational Context -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-crown" style="margin-right: 12px; color: #8b5cf6; font-size: 20px;"></i>
                    Corps-Level Fire & Movement Doctrinal Analysis
                </h2>
                <div style="background: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3); margin-bottom: 16px;">
                    <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-crown" style="margin-right: 8px;"></i>
                        Corps Command Authority and Operational Context
                    </h3>
                    <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                        <p style="margin: 0 0 8px 0;"><strong>Corps Command Structure:</strong> Corps-level fire and movement operations represent the operational echelon of warfare, typically commanded by a 3-Star Lieutenant General with responsibility for 40,000-100,000 personnel across 2-5 divisions and supporting brigades operating within a defined area of operations.</p>
                        <p style="margin: 0 0 8px 0;"><strong>Doctrinal Foundation:</strong> Per FM 5-0 Chapter 3-1, Corps-level operations embody the operational level of war, translating strategic objectives into tactical actions through operational art and design, integrating multiple divisions and enabling capabilities.</p>
                        <p style="margin: 0 0 8px 0;"><strong>Operational Scope:</strong> Corps commanders coordinate forces ranging from 40,000 to 100,000 personnel across 2-5 divisions, functional brigades, and specialized enablers, operating across areas spanning hundreds of square kilometers with operational reach extending beyond immediate tactical areas.</p>
                        <p style="margin: 0;"><strong>Command Relationships:</strong> Corps commanders exercise tactical control (TACON) over assigned divisions and operational control (OPCON) over corps assets while coordinating with adjacent corps and higher headquarters as defined in JP 5-0 Chapter IV.</p>
                    </div>
                </div>

                <div style="background: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Corps-Level Operational Perspective</h4>
                    <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                        <p style="margin: 0 0 8px 0;">Corps-level fire and movement doctrine encompasses operational art - the application of creative imagination by commanders and staffs to design strategies, campaigns, and major operations and organize and employ military forces. This includes the integration of multiple divisions and enabling capabilities to achieve operational objectives.</p>
                        <p style="margin: 0;">Corps commanders must balance competing demands across multiple division areas of operations while maintaining operational coherence and achieving assigned objectives. The complexity of corps operations requires sophisticated operational planning, extensive coordination mechanisms, and robust sustainment operations spanning extended areas.</p>
                    </div>
                </div>
            </div>

            <!-- Corps Fire Support Coordination Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(37, 99, 235, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #3b82f6; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-crosshairs" style="margin-right: 10px;"></i>
                    Corps Fire Support Coordination Framework
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(37, 99, 235, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-rocket" style="margin-right: 8px;"></i>
                            Corps Fire Support Assets
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Corps Artillery Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Field Artillery Brigade with Multiple Launch Rocket System (MLRS)</li>
                                <li>High Mobility Artillery Rocket System (HIMARS) battalions</li>
                                <li>M109A7 Paladin self-propelled howitzer battalions</li>
                                <li>Counter-fire radar and target acquisition systems</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Division Artillery Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division Artillery (DIVARTY) integration and coordination</li>
                                <li>Brigade Combat Team (BCT) fires coordination</li>
                                <li>Fires and Effects Coordination Cell (FECC) operations</li>
                                <li>Joint Fires Observer (JFO) and Forward Observer (FO) networks</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Joint Fire Support Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Close Air Support (CAS) and Battlefield Air Interdiction (BAI)</li>
                                <li>Joint Terminal Attack Controller (JTAC) coordination</li>
                                <li>Naval Surface Fire Support (NSFS) in littoral operations</li>
                                <li>Special Operations Forces (SOF) fires integration</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-target" style="margin-right: 8px;"></i>
                            Corps Fire Coordination Doctrine
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Fire Support Coordination Measures (FSCM):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Corps Fire Support Coordination Line (FSCL) management</li>
                                <li>Coordinated Fire Line (CFL) between division boundaries</li>
                                <li>No-Fire Areas (NFA) and Restricted Fire Areas (RFA)</li>
                                <li>Free Fire Areas (FFA) and Kill Boxes coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Target Development and Engagement (FM 3-60):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>High-Payoff Target (HPT) and High-Value Target (HVT) lists</li>
                                <li>Target Selection Standards (TSS) and engagement criteria</li>
                                <li>Time-Sensitive Target (TST) engagement procedures</li>
                                <li>Battle Damage Assessment (BDA) and re-engagement</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Operational Fires Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Deep operations and operational fires coordination</li>
                                <li>Counter-fire operations and enemy artillery suppression</li>
                                <li>Interdiction operations and enemy reserve engagement</li>
                                <li>Information Operations and Electronic Warfare integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Movement Operations and Logistics -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(22, 163, 74, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-moving" style="margin-right: 10px;"></i>
                    Corps Movement Operations and Logistics
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(22, 163, 74, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(22, 163, 74, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            Corps Movement Control
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Operational Movement and Maneuver:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-division movement coordination and synchronization</li>
                                <li>Division boundary management and movement corridors</li>
                                <li>Brigade Combat Team (BCT) movement within division areas</li>
                                <li>Corps reserve movement and positioning</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Movement Control Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Corps Movement Control Center coordination</li>
                                <li>Highway Regulation and Enforcement Teams (HRET)</li>
                                <li>Movement Control Teams (MCT) and route management</li>
                                <li>Traffic Control Points (TCP) and convoy operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Mobility and Counter-Mobility:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Engineer Brigade mobility operations and route clearance</li>
                                <li>Bridge and gap crossing operations</li>
                                <li>Obstacle emplacement and counter-mobility operations</li>
                                <li>Survivability operations and force protection</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(22, 163, 74, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(22, 163, 74, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-cogs" style="margin-right: 8px;"></i>
                            Corps Logistics Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Sustainment Brigade coordination and support</li>
                                <li>Combat Sustainment Support Battalion (CSSB) operations</li>
                                <li>Logistics Support Area (LSA) and distribution operations</li>
                                <li>Corps Support Command (COSCOM) coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Supply Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Class I (Subsistence) and Class III (Petroleum) distribution</li>
                                <li>Class V (Ammunition) supply and Ammunition Supply Points (ASP)</li>
                                <li>Class IX (Repair Parts) and maintenance support</li>
                                <li>Water production and distribution operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Transportation Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Transportation Brigade motor transport operations</li>
                                <li>Heavy Equipment Transport (HET) operations</li>
                                <li>Cargo Transfer Company (CTC) operations</li>
                                <li>Movement Control and convoy security operations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Operations Integration at Corps Level -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f59e0b; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-layer-group" style="margin-right: 10px;"></i>
                    Multi-Domain Operations Integration at Corps Level
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 8px;"></i>
                            Corps Domain Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Land Domain Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-division coordination across corps area of operations</li>
                                <li>Brigade Combat Team (BCT) integration and synchronization</li>
                                <li>Corps artillery and air defense coordination</li>
                                <li>Engineer operations and obstacle integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Air Domain Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combat Aviation Brigade (CAB) air-ground integration</li>
                                <li>Airspace Control and coordination with joint forces</li>
                                <li>Unmanned Aircraft System (UAS) integration</li>
                                <li>Air Defense Artillery (ADA) coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Maritime Domain Coordination:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Littoral operations and amphibious coordination</li>
                                <li>Port operations and strategic sealift support</li>
                                <li>Naval gunfire support coordination</li>
                                <li>Maritime interdiction operations</li>
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
                                <li>Space situational awareness and protection</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Cyberspace Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Corps network operations and cyber defense</li>
                                <li>Defensive Cyber Operations (DCO) coordination</li>
                                <li>Cyber Electromagnetic Activities (CEMA) integration</li>
                                <li>Network security and information assurance</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Information Environment Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Military Information Support Operations (MISO)</li>
                                <li>Electronic Warfare (EW) and spectrum operations</li>
                                <li>Public Affairs and strategic communication</li>
                                <li>Civil Affairs Operations (CAO) coordination</li>
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
                            <p style="margin: 0 0 8px 0;"><strong>Joint Force Integration (JP 5-0 Chapter IV):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Joint Land Component Command (JLCC) operational coordination</li>
                                <li>Joint Air-Ground Integration Center (JAGIC) fires coordination</li>
                                <li>Joint Fires Element (JFE) and targeting integration</li>
                                <li>Joint Intelligence Operations Center (JIOC) support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Operational Interagency Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Regional State Department Political-Military Affairs coordination</li>
                                <li>Defense Intelligence Agency (DIA) operational intelligence support</li>
                                <li>Central Intelligence Agency (CIA) regional intelligence coordination</li>
                                <li>Department of Homeland Security regional security coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Service Component Coordination:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Air Force Tactical Air Control Party (TACP) integration</li>
                                <li>Navy Surface Warfare and Naval Aviation coordination</li>
                                <li>Marine Corps Air-Ground Task Force (MAGTF) integration</li>
                                <li>Special Operations Command (SOCOM) coordination</li>
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
                                <li>Regional government and provincial authority coordination</li>
                                <li>Host nation military and security force integration</li>
                                <li>International organization coordination (UN, EU, AU)</li>
                                <li>Non-governmental organization (NGO) humanitarian coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Multinational Force Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Standardization Agreement (STANAG) compliance</li>
                                <li>Combined Joint Task Force (CJTF) operational coordination</li>
                                <li>Multinational division and brigade integration</li>
                                <li>Coalition liaison teams and coordination cells</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Partner Nation Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Security Force Assistance Brigade (SFAB) coordination</li>
                                <li>Foreign Military Sales (FMS) equipment integration</li>
                                <li>International Military Education and Training (IMET)</li>
                                <li>Combined training and exercise programs</li>
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
                            NATO Operational Command Structures
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>NATO Joint Force Command Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Joint Force Command Norfolk (JFC Norfolk) coordination</li>
                                <li>Joint Force Command Naples (JFC Naples) integration</li>
                                <li>Allied Land Command (LANDCOM) operational coordination</li>
                                <li>NATO Force Integration Units (NFIU) support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>NATO Response Force (NRF) Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Very High Readiness Joint Task Force (VJTF) coordination</li>
                                <li>Enhanced Forward Presence (eFP) battle group integration</li>
                                <li>Allied Reaction Force (ARF) rapid deployment</li>
                                <li>NATO Special Operations Component Command (NSOCC)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Interoperability Standards:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>NATO Standardization Office (NSO) compliance</li>
                                <li>Allied Command Transformation (ACT) doctrine integration</li>
                                <li>NATO Communications and Information Systems (NCIS)</li>
                                <li>Combined Joint Planning Staff (CJPS) procedures</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(99, 102, 241, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">
                        <h4 style="color: #a5b4fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-flag" style="margin-right: 8px;"></i>
                            Regional Alliance Coordination
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>European Alliance Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>European Union Battle Groups (EUBG) coordination</li>
                                <li>European Defence Agency (EDA) capability development</li>
                                <li>Permanent Structured Cooperation (PESCO) projects</li>
                                <li>European Peace Facility (EPF) support mechanisms</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Indo-Pacific Alliance Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>QUAD (US-Japan-Australia-India) operational coordination</li>
                                <li>AUKUS (Australia-UK-US) capability integration</li>
                                <li>Five Eyes intelligence sharing partnership</li>
                                <li>ANZUS Treaty operational coordination mechanisms</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Coalition Logistics and Support:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>NATO Support and Procurement Agency (NSPA)</li>
                                <li>Multinational Logistics Coordination Centre (MLCC)</li>
                                <li>Combined Joint Logistics Over-the-Shore (CJLOTS)</li>
                                <li>Host Nation Support (HNS) agreements and coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Risk Assessment and Mitigation -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px;"></i>
                    Corps Risk Assessment and Mitigation
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                            Corps-Level Risk Categories
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Operational Risks:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-division coordination and synchronization challenges</li>
                                <li>Enemy operational reserves and counter-attack capabilities</li>
                                <li>Extended lines of communication vulnerabilities</li>
                                <li>Joint and coalition coordination complexities</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Risks:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Enemy anti-access/area denial (A2/AD) capabilities</li>
                                <li>Chemical, biological, radiological, nuclear (CBRN) threats</li>
                                <li>Asymmetric and irregular warfare threats</li>
                                <li>Electronic warfare and cyber attack vulnerabilities</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Risks:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Logistics system disruption and supply shortages</li>
                                <li>Medical evacuation and treatment limitations</li>
                                <li>Maintenance capability degradation</li>
                                <li>Transportation network vulnerabilities</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(220, 38, 38, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-balance-scale" style="margin-right: 8px;"></i>
                            Risk Mitigation Strategies
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Operational Risk Mitigation:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Distributed operations and decentralized execution</li>
                                <li>Multiple contingency plans and branch planning</li>
                                <li>Redundant command and control systems</li>
                                <li>Coalition interoperability and standardization</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Force Protection Measures:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Integrated Air and Missile Defense (IAMD)</li>
                                <li>Counter-intelligence and security operations</li>
                                <li>CBRN detection and protection capabilities</li>
                                <li>Electronic warfare and cyber defense</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Risk Mitigation:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Multiple supply routes and distribution nodes</li>
                                <li>Forward positioning of critical supplies</li>
                                <li>Host nation support and contractor augmentation</li>
                                <li>Reserve forces and surge capabilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Intelligence and Reconnaissance -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(6, 182, 212, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #06b6d4; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-search" style="margin-right: 10px;"></i>
                    Corps Intelligence and Reconnaissance
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(6, 182, 212, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3);">
                        <h4 style="color: #67e8f9; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-eye" style="margin-right: 8px;"></i>
                            Corps Intelligence Architecture
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Corps Intelligence Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Military Intelligence Brigade coordination</li>
                                <li>Division G-2 intelligence integration</li>
                                <li>Joint Intelligence Operations Center (JIOC) support</li>
                                <li>National intelligence community coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Intelligence Collection Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Unmanned Aircraft System (UAS) intelligence collection</li>
                                <li>Signals Intelligence (SIGINT) and Electronic Warfare</li>
                                <li>Human Intelligence (HUMINT) and Counterintelligence</li>
                                <li>Geospatial Intelligence (GEOINT) and imagery analysis</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Intelligence Analysis and Production:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>All-Source Intelligence analysis and fusion</li>
                                <li>Intelligence Preparation of the Battlefield (IPB)</li>
                                <li>Enemy course of action development and analysis</li>
                                <li>Intelligence, Surveillance, Reconnaissance (ISR) synchronization</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(6, 182, 212, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3);">
                        <h4 style="color: #67e8f9; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px;"></i>
                            Corps Reconnaissance Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Ground Reconnaissance:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Cavalry Squadron reconnaissance operations</li>
                                <li>Division cavalry and reconnaissance units</li>
                                <li>Long Range Surveillance (LRS) operations</li>
                                <li>Special reconnaissance and deep operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Aerial Reconnaissance:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combat Aviation Brigade reconnaissance</li>
                                <li>Fixed-wing and rotary-wing intelligence collection</li>
                                <li>Unmanned Aircraft System (UAS) operations</li>
                                <li>Joint aerial reconnaissance coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Technical Intelligence:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Electronic Intelligence (ELINT) collection</li>
                                <li>Communications Intelligence (COMINT)</li>
                                <li>Measurement and Signature Intelligence (MASINT)</li>
                                <li>Technical exploitation and analysis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Communications and Information Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(20, 184, 166, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #14b8a6; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-broadcast-tower" style="margin-right: 10px;"></i>
                    Corps Communications and Information Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(20, 184, 166, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(20, 184, 166, 0.3);">
                        <h4 style="color: #5eead4; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                            Corps Communications Systems
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Command and Control Networks:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Army Battle Command System (ABCS) integration</li>
                                <li>Command Post Computing Environment (CPCE)</li>
                                <li>Distributed Common Ground System-Army (DCGS-A)</li>
                                <li>Joint Battle Command-Platform (JBC-P)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Communications Infrastructure:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Signal Brigade communications support</li>
                                <li>Satellite Communications (SATCOM) systems</li>
                                <li>Tactical Internet and network operations</li>
                                <li>Mobile Subscriber Equipment (MSE) systems</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Information Systems Security:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Information Assurance and cybersecurity</li>
                                <li>Communications Security (COMSEC) operations</li>
                                <li>Electronic Protection and anti-jamming</li>
                                <li>Network defense and incident response</li>
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
                                <li>Military Information Support Operations (MISO)</li>
                                <li>Electronic Warfare (EW) operations</li>
                                <li>Operations Security (OPSEC) and information protection</li>
                                <li>Computer Network Operations (CNO)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Public Affairs and Communication:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Public Affairs Officer (PAO) operations</li>
                                <li>Strategic communication coordination</li>
                                <li>Media operations and press relations</li>
                                <li>Civil Affairs information support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Counter-Information Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Counter-propaganda operations</li>
                                <li>Information environment assessment</li>
                                <li>Social media monitoring and analysis</li>
                                <li>Influence operations detection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Sustainment and Logistics Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(236, 72, 153, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #ec4899; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-loading" style="margin-right: 10px;"></i>
                    Corps Sustainment and Logistics Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(236, 72, 153, 0.3);">
                        <h4 style="color: #f9a8d4; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-industry" style="margin-right: 8px;"></i>
                            Corps Sustainment Framework
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Command Structure:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Sustainment Brigade operations and coordination</li>
                                <li>Combat Sustainment Support Battalion (CSSB)</li>
                                <li>Logistics Support Area (LSA) operations</li>
                                <li>Corps Support Command (COSCOM) integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Supply Chain Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-class supply operations and distribution</li>
                                <li>Automated logistics information systems</li>
                                <li>Supply Support Activity (SSA) operations</li>
                                <li>Contractor logistics support coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Distribution Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Corps distribution networks and nodes</li>
                                <li>Forward logistics elements and supply points</li>
                                <li>Multi-modal transportation coordination</li>
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
                                <li>Corps maintenance operations and coordination</li>
                                <li>Forward Repair Activity (FRA) operations</li>
                                <li>Maintenance Support Team (MST) coordination</li>
                                <li>Contractor maintenance support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Medical Support Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Medical Brigade coordination and support</li>
                                <li>Combat Support Hospital (CSH) operations</li>
                                <li>Medical evacuation and patient movement</li>
                                <li>Preventive medicine and health services</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Personnel and Administrative Support:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Human Resources support and coordination</li>
                                <li>Casualty operations and personnel accountability</li>
                                <li>Postal operations and morale support</li>
                                <li>Legal support and military justice</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Planning Considerations and Lessons Learned -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(234, 179, 8, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #eab308; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-chess-king" style="margin-right: 10px;"></i>
                    Corps Planning Considerations and Lessons Learned
                </h3>

                <div style="background: rgba(234, 179, 8, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(234, 179, 8, 0.3); margin-bottom: 20px;">
                    <h4 style="color: #fde047; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-lightbulb" style="margin-right: 8px;"></i>
                        Corps-Level Doctrinal Insights
                    </h4>
                    <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                        <p style="margin: 0 0 8px 0;"><strong>Operational Art:</strong> Corps-level fire and movement operations represent the essence of operational art - the employment of military forces to attain strategic goals through the design, organization, integration, and conduct of campaigns and major operations.</p>

                        <p style="margin: 0 0 8px 0;"><strong>Multi-Division Synchronization:</strong> Corps commanders must synchronize multiple division operations while maintaining operational flexibility and achieving assigned objectives. This requires sophisticated coordination mechanisms and clear operational design.</p>

                        <p style="margin: 0;"><strong>Joint Integration:</strong> Modern corps operations require extensive joint coordination and integration. Success depends on effective joint planning, coordination, and execution across all domains.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(234, 179, 8, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(234, 179, 8, 0.3);">
                        <h4 style="color: #fde047; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-star" style="margin-right: 8px;"></i>
                            Corps Best Practices
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li><strong>Operational Design:</strong> Apply operational art to achieve strategic objectives</li>
                                <li><strong>Mission Command:</strong> Enable decentralized execution with clear intent</li>
                                <li><strong>Combined Arms:</strong> Integrate all available capabilities and systems</li>
                                <li><strong>Joint Operations:</strong> Leverage joint capabilities and coordination</li>
                                <li><strong>Intelligence-Driven:</strong> Base operations on comprehensive intelligence</li>
                                <li><strong>Adaptive Planning:</strong> Maintain flexibility and responsiveness</li>
                                <li><strong>Sustainment Focus:</strong> Ensure adequate logistics and support</li>
                                <li><strong>Risk Management:</strong> Balance risk with mission accomplishment</li>
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
                                <li>FM 5-0: The Operations Process (Chapter 3-1: Corps Operations)</li>
                                <li>FM 3-0: Operations (Chapter 4: Corps Operations)</li>
                                <li>JP 5-0: Joint Planning (Chapter IV: Operational Level)</li>
                                <li>JP 3-0: Joint Operations (Chapter VI: Corps Integration)</li>
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

            <!-- Corps Advanced Operational Considerations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(132, 204, 22, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #84cc16; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-cogs" style="margin-right: 10px;"></i>
                    Corps Advanced Operational Considerations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(132, 204, 22, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(132, 204, 22, 0.3);">
                        <h4 style="color: #bef264; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                            Operational Environment Analysis
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Terrain and Weather Analysis:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Corps-level terrain analysis across multiple division areas</li>
                                <li>Weather impact on multi-division operations</li>
                                <li>Seasonal considerations for sustained operations</li>
                                <li>Environmental factors affecting operational reach</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Enemy Situation Assessment:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Enemy operational capabilities and doctrine</li>
                                <li>Enemy operational reserves and reinforcement</li>
                                <li>Anti-access/area denial (A2/AD) threat analysis</li>
                                <li>Hybrid and irregular warfare considerations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Civil Considerations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Population centers and civilian protection</li>
                                <li>Critical infrastructure and economic factors</li>
                                <li>Cultural and political considerations</li>
                                <li>Humanitarian assistance coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(132, 204, 22, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(132, 204, 22, 0.3);">
                        <h4 style="color: #bef264; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-clock" style="margin-right: 8px;"></i>
                            Operational Timing and Phasing
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Operational Design and Phasing:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-phase operational planning and execution</li>
                                <li>Operational pause and reconstitution planning</li>
                                <li>Transition between offensive and defensive operations</li>
                                <li>Culmination point analysis and operational reach</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Synchronization Matrix:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-division operation synchronization</li>
                                <li>Joint operation timing and coordination</li>
                                <li>Coalition force synchronization requirements</li>
                                <li>Information operations timing coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Decision Points and Branch Planning:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Named Areas of Interest (NAI) and decision points</li>
                                <li>Branch and sequel plan development</li>
                                <li>Crisis action planning and rapid response</li>
                                <li>Contingency planning for unexpected developments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Force Structure and Organization -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(124, 58, 237, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #7c3aed; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-sitemap" style="margin-right: 10px;"></i>
                    Corps Force Structure and Organization
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(124, 58, 237, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-users-cog" style="margin-right: 8px;"></i>
                            Corps Command Structure
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Headquarters Organization:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Corps Headquarters and staff organization (G1-G9 sections)</li>
                                <li>Command Group and personal staff integration</li>
                                <li>Special staff and technical advisors</li>
                                <li>Liaison teams and coordination elements</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Subordinate Commands:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division headquarters (2-5 divisions per corps)</li>
                                <li>Corps artillery and air defense artillery</li>
                                <li>Corps aviation and engineer brigades</li>
                                <li>Corps sustainment and support commands</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Command Post Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Main Command Post (CP) and Tactical Command Post (TAC)</li>
                                <li>Current Operations Integration Cell (COIC)</li>
                                <li>Future Operations Cell (FOC) planning</li>
                                <li>Distributed command post operations</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(124, 58, 237, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Corps Capabilities Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Combat Arms Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Infantry, Armor, and Artillery coordination</li>
                                <li>Aviation and Air Defense Artillery integration</li>
                                <li>Engineer and CBRN capabilities</li>
                                <li>Special Operations Forces (SOF) integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Combat Support Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Military Intelligence and Signal capabilities</li>
                                <li>Military Police and Civil Affairs integration</li>
                                <li>Psychological Operations and Information Operations</li>
                                <li>Electronic Warfare and Cyber Operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Combat Service Support Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Transportation and Quartermaster capabilities</li>
                                <li>Ordnance and Medical support integration</li>
                                <li>Adjutant General and Finance support</li>
                                <li>Chaplain and Legal support services</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Training and Readiness -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(244, 63, 94, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f43f5e; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-graduation-cap" style="margin-right: 10px;"></i>
                    Corps Training and Readiness
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(244, 63, 94, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(244, 63, 94, 0.3);">
                        <h4 style="color: #fda4af; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-dumbbell" style="margin-right: 8px;"></i>
                            Corps Training Programs
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Collective Training:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Warfighter Exercise (WFX) and Command Post Exercise (CPX)</li>
                                <li>Combined Arms Live Fire Exercise (CALFEX)</li>
                                <li>Joint and multinational training exercises</li>
                                <li>Mission Rehearsal Exercise (MRE) preparation</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Leader Development:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Command and General Staff College (CGSC) education</li>
                                <li>School of Advanced Military Studies (SAMS)</li>
                                <li>Professional Military Education (PME) programs</li>
                                <li>Joint Professional Military Education (JPME)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Simulation and Modeling:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Warfighter Simulation (WARSIM) training</li>
                                <li>Battle Command Training Program (BCTP)</li>
                                <li>Virtual and constructive training environments</li>
                                <li>After Action Review (AAR) integration</li>
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
                                <li>Defense Readiness Reporting System (DRRS)</li>
                                <li>Unit Status Report (USR) assessment</li>
                                <li>Mission Essential Task List (METL) evaluation</li>
                                <li>Training readiness and proficiency assessment</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Resource Management:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Personnel readiness and strength management</li>
                                <li>Equipment readiness and maintenance status</li>
                                <li>Supply readiness and logistics support</li>
                                <li>Training resource allocation and management</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Deployment Preparation:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Pre-deployment training and certification</li>
                                <li>Joint Reception, Staging, Onward Movement, Integration</li>
                                <li>Theater-specific training and preparation</li>
                                <li>Equipment preparation and strategic deployment</li>
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
                                <li>JP 5-0: Joint Planning (Chapter IV: Operational Planning)</li>
                                <li>JP 3-0: Joint Operations (Chapter V: Operational Level)</li>
                                <li>JP 3-30: Command and Control of Joint Operations</li>
                                <li>JP 3-31: Command and Control for Joint Land Operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Army Field Manuals:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>FM 5-0: The Operations Process (Chapter 3-1: Corps Operations)</li>
                                <li>FM 3-0: Operations (Chapter 4: Corps Operations)</li>
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
                                <li>Title 10 USC: Armed Forces operational authorities</li>
                                <li>Unified Command Plan (UCP) command relationships</li>
                                <li>Rules of Engagement (ROE) and Law of Armed Conflict</li>
                                <li>Status of Forces Agreements (SOFA) legal framework</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Policy Guidance:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>National Defense Strategy operational guidance</li>
                                <li>Combatant Command Campaign Plans</li>
                                <li>Army Strategic Planning Guidance</li>
                                <li>Corps Mission Essential Task List (METL)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>International Framework:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Article 5 collective defense provisions</li>
                                <li>UN Charter Chapter VII enforcement actions</li>
                                <li>Geneva Conventions and Additional Protocols</li>
                                <li>Bilateral defense cooperation agreements</li>
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
export default corpsTacticsModule;
