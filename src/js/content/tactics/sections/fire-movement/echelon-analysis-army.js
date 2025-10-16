/**
 * Army-Level Fire & Movement Doctrinal Analysis
 * Strategic-Operational Command Level (4-Star General)
 * 100,000-300,000 Personnel Multi-Corps Operations
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 * Target: 65,000-75,000 characters of comprehensive strategic-operational doctrinal content
 * Sources: FM 5-0, JP 5-0, JP 3-0 with specific chapter references
 */

export const armyTacticsModule = {
  getContent(){
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">

            <!-- Army Command Authority and Strategic-Operational Context -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h2 style="color: #f8fafc; font-size: 22px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
                    <i class="fas fa-star" style="margin-right: 12px; color: #8b5cf6; font-size: 20px;"></i>
                    Army-Level Fire & Movement Doctrinal Analysis
                </h2>
                <div style="background: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3); margin-bottom: 16px;">
                    <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-star" style="margin-right: 8px;"></i>
                        Army Command Authority and Strategic-Operational Context
                    </h3>
                    <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                        <p style="margin: 0 0 8px 0;"><strong>Army Command Structure:</strong> Army-level fire and movement operations represent the strategic-operational echelon, typically commanded by a 4-Star General with responsibility for 100,000-300,000 personnel across multiple corps, divisions, and specialized units operating within a defined theater or major operational area.</p>
                        <p style="margin: 0 0 8px 0;"><strong>Doctrinal Foundation:</strong> Per FM 5-0 Chapter 2-1, Army-level operations serve as the critical bridge between theater strategic objectives and corps operational execution, integrating joint capabilities while maintaining Army-specific operational focus and tactical expertise.</p>
                        <p style="margin: 0 0 8px 0;"><strong>Operational Scope:</strong> Army commanders coordinate forces ranging from 100,000 to 300,000 personnel across 2-5 corps, multiple functional and multifunctional brigades, and specialized enablers, operating across areas of operations spanning hundreds to thousands of square kilometers.</p>
                        <p style="margin: 0;"><strong>Command Relationships:</strong> Army commanders exercise operational control (OPCON) over assigned corps and direct reporting units while maintaining tactical control (TACON) relationships with joint and coalition enablers as defined in JP 5-0 Chapter III.</p>
                    </div>
                </div>

                <div style="background: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                    <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Army-Level Strategic-Operational Perspective</h4>
                    <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                        <p style="margin: 0 0 8px 0;">Army-level fire and movement doctrine encompasses the operational application of combined arms capabilities to achieve theater strategic objectives through coordinated corps operations. This includes the integration of fires, maneuver, protection, sustainment, and mission command across multiple corps areas of operations.</p>
                        <p style="margin: 0;">Army commanders must synchronize multiple corps operations while maintaining operational coherence and supporting theater strategic objectives. The complexity of Army-level operations requires sophisticated operational planning, extensive intelligence fusion, and robust sustainment networks spanning multiple countries or major geographic regions.</p>
                    </div>
                </div>
            </div>

            <!-- Army Fire Support Coordination Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(37, 99, 235, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #3b82f6; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-crosshairs" style="margin-right: 10px;"></i>
                    Army Fire Support Coordination Framework
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(37, 99, 235, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-rocket" style="margin-right: 8px;"></i>
                            Army Fire Support Assets
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Long-Range Precision Fires:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-Domain Task Force (MDTF) long-range fires capabilities</li>
                                <li>Army Tactical Missile System (ATACMS) and Precision Strike Missile (PrSM)</li>
                                <li>High Mobility Artillery Rocket System (HIMARS) battalions</li>
                                <li>Strategic fires coordination with joint and coalition partners</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Corps Artillery Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multiple Launch Rocket System (MLRS) and M109A7 Paladin systems</li>
                                <li>Counter-fire radar systems and target acquisition assets</li>
                                <li>Field Artillery Brigade coordination across multiple corps</li>
                                <li>Integrated air and missile defense coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Joint Fire Support Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Army Air-Ground System (AAGS) coordination with joint fires</li>
                                <li>Close Air Support (CAS) and Battlefield Air Interdiction (BAI)</li>
                                <li>Naval Surface Fire Support (NSFS) coordination in littoral operations</li>
                                <li>Special Operations Forces (SOF) fires integration</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(37, 99, 235, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                        <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
                            Army Fire Coordination Doctrine
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Fire Support Coordination Measures (FSCM):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Army Fire Support Coordination Line (FSCL) spanning multiple corps areas</li>
                                <li>Coordinated Fire Line (CFL) between adjacent corps boundaries</li>
                                <li>No-Fire Areas (NFA) and Restricted Fire Areas (RFA) coordination</li>
                                <li>Free Fire Areas (FFA) and Kill Boxes for joint operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Target Categories and Priorities (FM 3-0 Chapter 4):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>High-Payoff Targets (HPT) and High-Value Targets (HVT)</li>
                                <li>Time-Sensitive Targets (TST) and emerging target engagement</li>
                                <li>Operational fires against enemy operational reserves</li>
                                <li>Counter-fire operations and enemy artillery suppression</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Fires Integration and Synchronization:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Army Fires Cell coordination with corps and division fires</li>
                                <li>Joint Fires Element (JFE) integration and coordination</li>
                                <li>Multinational fires coordination and deconfliction</li>
                                <li>Information Operations and Electronic Warfare integration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Movement Operations and Logistics -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(22, 163, 74, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-moving" style="margin-right: 10px;"></i>
                    Army Movement Operations and Logistics
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(22, 163, 74, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(22, 163, 74, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            Army Movement Control
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Operational Movement and Maneuver:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Corps boundary management and movement corridor coordination</li>
                                <li>Armored Brigade Combat Team (ABCT) and Infantry Brigade Combat Team (IBCT) movement</li>
                                <li>Stryker Brigade Combat Team (SBCT) rapid deployment operations</li>
                                <li>Aviation Brigade air movement and air assault operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Movement Control and Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Army Movement Control Agency coordination with theater assets</li>
                                <li>Highway Regulation and Enforcement Teams (HRET)</li>
                                <li>Movement Control Teams (MCT) and Transportation Control Teams</li>
                                <li>Host Nation Support (HNS) and infrastructure utilization</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Operational Mobility Assets:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Combat Aviation Brigade air mobility operations</li>
                                <li>Transportation Brigade motor transport operations</li>
                                <li>Engineer Brigade mobility and counter-mobility operations</li>
                                <li>Military Police Brigade route security and traffic control</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(22, 163, 74, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(22, 163, 74, 0.3);">
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-cogs" style="margin-right: 8px;"></i>
                            Army Logistics Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Brigade Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Expeditionary Sustainment Command (ESC) coordination</li>
                                <li>Combat Sustainment Support Battalion (CSSB) operations</li>
                                <li>Forward Support Company (FSC) and Brigade Support Battalion (BSB)</li>
                                <li>Logistics Task Force (LTF) and Logistics Support Area (LSA)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Supply Chain Management:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Army Materiel Command (AMC) integration and coordination</li>
                                <li>Defense Logistics Agency (DLA) support coordination</li>
                                <li>Operational Contract Support (OCS) and contractor integration</li>
                                <li>Host Nation Support (HNS) and multinational logistics</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Maintenance and Medical Support:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Army Field Support Brigade (AFSB) maintenance operations</li>
                                <li>Medical Command (MEDCOM) and Combat Support Hospital (CSH)</li>
                                <li>Ammunition Supply Point (ASP) and Petroleum Supply Point (PSP)</li>
                                <li>Mortuary Affairs and Personnel Recovery operations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Operations Integration at Army Level -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f59e0b; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-layer-group" style="margin-right: 10px;"></i>
                    Multi-Domain Operations Integration at Army Level
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 8px;"></i>
                            Army Domain Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Land Domain Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multiple corps coordination across extended operational areas</li>
                                <li>Armored, Infantry, and Stryker Brigade Combat Team integration</li>
                                <li>Field Artillery Brigade and Air Defense Artillery coordination</li>
                                <li>Engineer Brigade mobility, counter-mobility, and survivability</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Air Domain Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combat Aviation Brigade air-ground integration</li>
                                <li>Theater Airspace Command and Control (A2C2) coordination</li>
                                <li>Joint Air-Ground Integration Center (JAGIC) operations</li>
                                <li>Unmanned Aircraft System (UAS) integration and coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Maritime Domain Coordination:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Amphibious operations and littoral warfare coordination</li>
                                <li>Port operations and strategic sealift coordination</li>
                                <li>Naval Surface Fire Support (NSFS) integration</li>
                                <li>Maritime interdiction and coastal defense operations</li>
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
                                <li>Army Space and Missile Defense Command coordination</li>
                                <li>Satellite communication and navigation systems</li>
                                <li>Space-based intelligence and surveillance assets</li>
                                <li>Position, Navigation, and Timing (PNT) services</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Cyberspace Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Army Cyber Command integration and coordination</li>
                                <li>Defensive Cyber Operations (DCO) and network defense</li>
                                <li>Offensive Cyber Operations (OCO) coordination with joint forces</li>
                                <li>Cyber Electromagnetic Activities (CEMA) integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Information Environment Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Military Information Support Operations (MISO)</li>
                                <li>Electronic Warfare (EW) and spectrum management</li>
                                <li>Public Affairs and strategic communication coordination</li>
                                <li>Civil Affairs Operations (CAO) and information coordination</li>
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
                            <p style="margin: 0 0 8px 0;"><strong>Joint Force Integration (JP 5-0 Chapter III):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Joint Land Component Command (JLCC) strategic-operational responsibilities</li>
                                <li>Joint Force Land Component Commander (JFLCC) authorities</li>
                                <li>Joint Air-Ground Integration Center (JAGIC) strategic coordination</li>
                                <li>Joint Intelligence Operations Center (JIOC) strategic support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Strategic Interagency Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Department of State Bureau of Political-Military Affairs</li>
                                <li>National Security Council (NSC) strategic coordination</li>
                                <li>Defense Intelligence Agency (DIA) strategic intelligence</li>
                                <li>Central Intelligence Agency (CIA) strategic intelligence coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Federal Agency Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Department of Homeland Security strategic coordination</li>
                                <li>Federal Bureau of Investigation (FBI) counterintelligence</li>
                                <li>Department of Treasury financial intelligence</li>
                                <li>United States Agency for International Development (USAID)</li>
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
                                <li>Host nation government strategic coordination</li>
                                <li>Regional government and provincial authority integration</li>
                                <li>International organization coordination (UN, NATO, EU)</li>
                                <li>Non-governmental organization (NGO) strategic coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Multinational Strategic Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combined Joint Task Force (CJTF) strategic command</li>
                                <li>Multinational corps and division strategic integration</li>
                                <li>Coalition strategic planning and coordination</li>
                                <li>Alliance strategic command relationships</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Strategic Partnership Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Security Cooperation Organization (SCO) coordination</li>
                                <li>Defense Cooperation Agreement (DCA) implementation</li>
                                <li>Foreign Military Sales (FMS) strategic integration</li>
                                <li>International Military Education and Training (IMET)</li>
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
                            NATO Strategic Command Structures
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>NATO Strategic Command Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Supreme Allied Commander Europe (SACEUR) strategic coordination</li>
                                <li>Allied Command Operations (ACO) strategic planning</li>
                                <li>Allied Command Transformation (ACT) capability development</li>
                                <li>NATO Military Committee strategic guidance</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>NATO Force Structure Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Response Force (NRF) strategic readiness</li>
                                <li>Very High Readiness Joint Task Force (VJTF)</li>
                                <li>Enhanced Forward Presence (eFP) strategic deterrence</li>
                                <li>NATO Force Integration Units (NFIU) coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Alliance Capability Development:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Defence Planning Process (DPP) strategic requirements</li>
                                <li>NATO Defence Planning Capability Review (NDPCR)</li>
                                <li>Smart Defence initiative strategic coordination</li>
                                <li>Connected Forces Initiative (CFI) interoperability</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(99, 102, 241, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">
                        <h4 style="color: #a5b4fc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-flag" style="margin-right: 8px;"></i>
                            Regional Alliance Strategic Coordination
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Indo-Pacific Strategic Alliances:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>QUAD (US-Japan-Australia-India) strategic coordination</li>
                                <li>AUKUS (Australia-UK-US) strategic capability development</li>
                                <li>Five Eyes intelligence sharing strategic partnership</li>
                                <li>ANZUS Treaty strategic defense coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>European Strategic Partnerships:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>European Union Common Security and Defence Policy</li>
                                <li>European Defence Agency (EDA) strategic coordination</li>
                                <li>Permanent Structured Cooperation (PESCO) integration</li>
                                <li>European Peace Facility (EPF) strategic support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Strategic Logistics and Support:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>NATO Support and Procurement Agency (NSPA)</li>
                                <li>Strategic Airlift Capability (SAC) consortium</li>
                                <li>Alliance Ground Surveillance (AGS) program</li>
                                <li>Multinational Multi-Role Tanker Transport Fleet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Risk Assessment and Mitigation -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px;"></i>
                    Army Risk Assessment and Mitigation
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                            Army-Level Risk Categories
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Operational Risks:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Large-scale ground combat operations against peer adversaries</li>
                                <li>Multi-corps coordination and synchronization challenges</li>
                                <li>Extended lines of communication and supply vulnerabilities</li>
                                <li>Coalition force integration and interoperability issues</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Risks:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Enemy counter-attack and operational reserves employment</li>
                                <li>Anti-access/area denial (A2/AD) threats and capabilities</li>
                                <li>Chemical, biological, radiological, nuclear (CBRN) threats</li>
                                <li>Asymmetric threats and irregular warfare challenges</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Risks:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Logistics system disruption and supply chain attacks</li>
                                <li>Medical evacuation and treatment capacity limitations</li>
                                <li>Maintenance and repair capability degradation</li>
                                <li>Fuel, ammunition, and critical supply shortages</li>
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
                                <li>Multiple contingency plans and branch/sequel planning</li>
                                <li>Distributed operations and decentralized execution</li>
                                <li>Redundant command and control systems</li>
                                <li>Coalition interoperability training and standardization</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Force Protection Measures:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Integrated Air and Missile Defense (IAMD) systems</li>
                                <li>Counter-intelligence and security operations</li>
                                <li>CBRN detection, protection, and decontamination</li>
                                <li>Electronic warfare and cyber defense capabilities</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Risk Mitigation:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Multiple supply routes and logistics nodes</li>
                                <li>Forward positioning of critical supplies and equipment</li>
                                <li>Host nation support and contractor augmentation</li>
                                <li>Strategic reserve forces and surge capabilities</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Intelligence and Reconnaissance -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(6, 182, 212, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #06b6d4; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-search" style="margin-right: 10px;"></i>
                    Army Intelligence and Reconnaissance
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(6, 182, 212, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3);">
                        <h4 style="color: #67e8f9; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-eye" style="margin-right: 8px;"></i>
                            Army Intelligence Architecture
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Army Intelligence Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Military Intelligence Brigade coordination and integration</li>
                                <li>Army Intelligence and Security Command (INSCOM) support</li>
                                <li>Joint Intelligence Operations Center (JIOC) coordination</li>
                                <li>National intelligence community integration and sharing</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Intelligence Collection Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Unmanned Aircraft System (UAS) intelligence collection</li>
                                <li>Signals Intelligence (SIGINT) and Electronic Warfare assets</li>
                                <li>Human Intelligence (HUMINT) and Counterintelligence operations</li>
                                <li>Geospatial Intelligence (GEOINT) and imagery analysis</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Intelligence Analysis and Production:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>All-Source Intelligence analysis and fusion</li>
                                <li>Intelligence Preparation of the Battlefield (IPB)</li>
                                <li>Threat assessment and enemy course of action development</li>
                                <li>Intelligence, Surveillance, and Reconnaissance (ISR) synchronization</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(6, 182, 212, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3);">
                        <h4 style="color: #67e8f9; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px;"></i>
                            Reconnaissance Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Ground Reconnaissance:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Cavalry Squadron reconnaissance and security operations</li>
                                <li>Long Range Surveillance (LRS) and Special Reconnaissance</li>
                                <li>Brigade Reconnaissance Troop coordination</li>
                                <li>Engineer reconnaissance and route clearance operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Aerial Reconnaissance:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combat Aviation Brigade reconnaissance operations</li>
                                <li>Fixed-wing and rotary-wing intelligence collection</li>
                                <li>Unmanned Aircraft System (UAS) operations</li>
                                <li>Joint aerial reconnaissance coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Technical Intelligence:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Electronic Intelligence (ELINT) and Communications Intelligence</li>
                                <li>Measurement and Signature Intelligence (MASINT)</li>
                                <li>Technical exploitation and foreign materiel intelligence</li>
                                <li>Biometric and forensic intelligence collection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Communications and Information Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(20, 184, 166, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #14b8a6; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-broadcast-tower" style="margin-right: 10px;"></i>
                    Army Communications and Information Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(20, 184, 166, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(20, 184, 166, 0.3);">
                        <h4 style="color: #5eead4; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-network-wired" style="margin-right: 8px;"></i>
                            Army Communications Systems
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Command and Control Networks:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Army Battle Command System (ABCS) integration</li>
                                <li>Command Post Computing Environment (CPCE)</li>
                                <li>Distributed Common Ground System-Army (DCGS-A)</li>
                                <li>Joint Battle Command-Platform (JBC-P) integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Communications Infrastructure:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Signal Brigade communications support operations</li>
                                <li>Satellite Communications (SATCOM) and terrestrial networks</li>
                                <li>Tactical Internet and network operations</li>
                                <li>Coalition communications interoperability</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Information Systems Security:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Network Enterprise Technology Command (NETCOM) support</li>
                                <li>Information Assurance and cybersecurity operations</li>
                                <li>Communications Security (COMSEC) and encryption</li>
                                <li>Electronic Protection and anti-jamming capabilities</li>
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
                                <li>Electronic Warfare (EW) and spectrum management</li>
                                <li>Operations Security (OPSEC) and information protection</li>
                                <li>Computer Network Operations (CNO) coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Public Affairs and Strategic Communication:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Public Affairs Officer (PAO) and media operations</li>
                                <li>Strategic communication planning and execution</li>
                                <li>Coalition information coordination and messaging</li>
                                <li>Civil Affairs Operations (CAO) information support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Counter-Information Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Counter-propaganda and disinformation operations</li>
                                <li>Information environment assessment and analysis</li>
                                <li>Social media monitoring and analysis</li>
                                <li>Influence operations detection and mitigation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Sustainment and Logistics Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(236, 72, 153, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #ec4899; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-loading" style="margin-right: 10px;"></i>
                    Army Sustainment and Logistics Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(236, 72, 153, 0.3);">
                        <h4 style="color: #f9a8d4; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-industry" style="margin-right: 8px;"></i>
                            Army Sustainment Framework
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Sustainment Command Structure:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Expeditionary Sustainment Command (ESC) operations</li>
                                <li>Sustainment Brigade coordination and support</li>
                                <li>Combat Sustainment Support Battalion (CSSB) operations</li>
                                <li>Logistics Task Force (LTF) and area support coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Supply Chain Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Army Materiel Command (AMC) coordination and support</li>
                                <li>Defense Logistics Agency (DLA) integration</li>
                                <li>Strategic and operational supply planning</li>
                                <li>Automated logistics information systems</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Distribution Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Theater distribution and logistics networks</li>
                                <li>Forward logistics elements and supply points</li>
                                <li>Multi-modal transportation coordination</li>
                                <li>Last tactical mile distribution operations</li>
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
                                <li>Army Field Support Brigade (AFSB) coordination</li>
                                <li>Logistics Support Area (LSA) maintenance operations</li>
                                <li>Forward Repair Activity (FRA) and maintenance support</li>
                                <li>Contractor logistics support and field service representatives</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Medical Support Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Medical Command (MEDCOM) coordination and support</li>
                                <li>Combat Support Hospital (CSH) and medical treatment</li>
                                <li>Medical evacuation and patient movement</li>
                                <li>Preventive medicine and health service support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Personnel and Administrative Support:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Human Resources Command (HRC) personnel support</li>
                                <li>Casualty operations and personnel accountability</li>
                                <li>Postal operations and morale, welfare, and recreation</li>
                                <li>Legal support and military justice operations</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Planning Considerations and Lessons Learned -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(234, 179, 8, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #eab308; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-chess-king" style="margin-right: 10px;"></i>
                    Army Planning Considerations and Lessons Learned
                </h3>

                <div style="background: rgba(234, 179, 8, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(234, 179, 8, 0.3); margin-bottom: 20px;">
                    <h4 style="color: #fde047; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-lightbulb" style="margin-right: 8px;"></i>
                        Army-Level Doctrinal Insights
                    </h4>
                    <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                        <p style="margin: 0 0 8px 0;"><strong>Operational Art and Design:</strong> Army-level fire and movement operations require mastery of operational art, balancing strategic objectives with tactical capabilities across multiple corps areas of operation. Success depends on effective operational design, phasing, and sequencing of operations.</p>

                        <p style="margin: 0 0 8px 0;"><strong>Multi-Corps Coordination:</strong> Army commanders must synchronize multiple corps operations while maintaining operational flexibility and responsiveness to changing conditions. This requires sophisticated planning, coordination, and control mechanisms.</p>

                        <p style="margin: 0;"><strong>Joint and Coalition Integration:</strong> Modern Army operations are inherently joint and multinational, requiring extensive coordination with other services and coalition partners. Success depends on interoperability, standardization, and unity of effort.</p>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(234, 179, 8, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(234, 179, 8, 0.3);">
                        <h4 style="color: #fde047; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-star" style="margin-right: 8px;"></i>
                            Army Best Practices
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <ul style="margin: 0; padding-left: 16px;">
                                <li><strong>Mission Command:</strong> Empower subordinate commanders with clear intent and decentralized execution</li>
                                <li><strong>Combined Arms Integration:</strong> Synchronize fires, maneuver, protection, and sustainment</li>
                                <li><strong>Operational Reach:</strong> Balance operational tempo with sustainment capabilities</li>
                                <li><strong>Intelligence-Driven Operations:</strong> Base decisions on comprehensive intelligence analysis</li>
                                <li><strong>Joint Integration:</strong> Leverage joint capabilities and maintain interoperability</li>
                                <li><strong>Coalition Coordination:</strong> Build and maintain multinational partnerships</li>
                                <li><strong>Adaptive Planning:</strong> Maintain flexibility and responsiveness to changing conditions</li>
                                <li><strong>Risk Management:</strong> Balance acceptable risk with mission accomplishment</li>
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
                                <li>FM 5-0: The Operations Process (Chapter 2-1: Army Operations)</li>
                                <li>FM 3-0: Operations (Chapter 3: Army Operations)</li>
                                <li>JP 5-0: Joint Planning (Chapter III: Operational Level)</li>
                                <li>JP 3-0: Joint Operations (Chapter V: Army Integration)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Supporting References:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>FM 6-0: Commander and Staff Organization</li>
                                <li>FM 4-0: Sustainment Operations</li>
                                <li>FM 2-0: Intelligence Operations</li>
                                <li>FM 6-02: Signal Support to Operations</li>
                            </ul>
                            <p style="margin: 0;"><strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Advanced Operational Considerations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(132, 204, 22, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #84cc16; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-cogs" style="margin-right: 10px;"></i>
                    Army Advanced Operational Considerations
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
                                <li>Large-scale terrain analysis across multiple corps areas</li>
                                <li>Weather impact on multi-domain operations</li>
                                <li>Seasonal considerations for sustained operations</li>
                                <li>Environmental factors affecting logistics and sustainment</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Enemy Situation Assessment:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Peer adversary capabilities and doctrine analysis</li>
                                <li>Enemy operational reserves and reinforcement capabilities</li>
                                <li>Anti-access/area denial (A2/AD) threat assessment</li>
                                <li>Hybrid warfare and irregular threat considerations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Civil Considerations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Population centers and civilian protection requirements</li>
                                <li>Critical infrastructure and economic considerations</li>
                                <li>Cultural and political factors affecting operations</li>
                                <li>Humanitarian assistance and disaster relief coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(132, 204, 22, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(132, 204, 22, 0.3);">
                        <h4 style="color: #bef264; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-clock" style="margin-right: 8px;"></i>
                            Operational Timing and Phasing
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Campaign Design and Phasing:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-phase campaign planning and execution</li>
                                <li>Operational pause and reconstitution planning</li>
                                <li>Transition between offensive and defensive operations</li>
                                <li>Culmination point analysis and operational reach</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Synchronization and Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Multi-corps operation synchronization matrix</li>
                                <li>Joint operation timing and coordination</li>
                                <li>Coalition force synchronization requirements</li>
                                <li>Information operations timing and coordination</li>
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

            <!-- Army Force Structure and Organization -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(124, 58, 237, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #7c3aed; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-sitemap" style="margin-right: 10px;"></i>
                    Army Force Structure and Organization
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(124, 58, 237, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-users-cog" style="margin-right: 8px;"></i>
                            Army Command Structure
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Headquarters Organization:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Army Headquarters and staff organization (G1-G9 staff sections)</li>
                                <li>Command Group and personal staff integration</li>
                                <li>Special staff and technical advisors</li>
                                <li>Liaison teams and coordination elements</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Subordinate Commands:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Corps headquarters (2-5 corps per army)</li>
                                <li>Functional and multifunctional brigades</li>
                                <li>Theater enabler commands and specialized units</li>
                                <li>Joint and coalition liaison elements</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Command Post Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Main Command Post (CP) and Tactical Command Post (TAC)</li>
                                <li>Current Operations Integration Cell (COIC)</li>
                                <li>Future Operations Cell (FOC) and planning integration</li>
                                <li>Distributed command post operations and redundancy</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(124, 58, 237, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Army Capabilities Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Combat Arms Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Infantry, Armor, and Artillery coordination</li>
                                <li>Aviation and Air Defense Artillery integration</li>
                                <li>Engineer and Chemical, Biological, Radiological, Nuclear (CBRN) capabilities</li>
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

            <!-- Army Training and Readiness -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(244, 63, 94, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f43f5e; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-graduation-cap" style="margin-right: 10px;"></i>
                    Army Training and Readiness
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div style="background: rgba(244, 63, 94, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(244, 63, 94, 0.3);">
                        <h4 style="color: #fda4af; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-dumbbell" style="margin-right: 8px;"></i>
                            Army Training Programs
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Collective Training:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Warfighter Exercise (WFX) and Command Post Exercise (CPX)</li>
                                <li>Combined Arms Live Fire Exercise (CALFEX)</li>
                                <li>Joint and multinational training exercises</li>
                                <li>Mission Rehearsal Exercise (MRE) and deployment preparation</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Leader Development:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Command and General Staff College (CGSC) education</li>
                                <li>Army War College strategic education</li>
                                <li>Professional Military Education (PME) programs</li>
                                <li>Joint Professional Military Education (JPME)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Simulation and Modeling:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Warfighter Simulation (WARSIM) and Battle Command Training Program</li>
                                <li>Combined Arms Tactical Trainer (CATT) systems</li>
                                <li>Virtual and constructive training environments</li>
                                <li>After Action Review (AAR) and lessons learned integration</li>
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
                                <li>Defense Readiness Reporting System (DRRS) reporting</li>
                                <li>Unit Status Report (USR) and readiness assessment</li>
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
                                <li>Joint Reception, Staging, Onward Movement, Integration (JRSOI)</li>
                                <li>Theater-specific training and cultural preparation</li>
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
                                <li>JP 5-0: Joint Planning (Chapter III: Strategic-Operational Planning)</li>
                                <li>JP 3-0: Joint Operations (Chapter IV: Strategic Operations)</li>
                                <li>JP 3-30: Command and Control of Joint Operations</li>
                                <li>JP 3-31: Command and Control for Joint Land Operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Army Field Manuals:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>FM 5-0: The Operations Process (Chapter 2-1: Army Operations)</li>
                                <li>FM 3-0: Operations (Chapter 3: Army Operations)</li>
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
                                <li>Title 10 USC: Armed Forces strategic authorities</li>
                                <li>Unified Command Plan (UCP) strategic command relationships</li>
                                <li>Rules of Engagement (ROE) and Law of Armed Conflict</li>
                                <li>Status of Forces Agreements (SOFA) strategic framework</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Strategic Policy Guidance:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>National Security Strategy strategic guidance</li>
                                <li>National Defense Strategy implementation</li>
                                <li>National Military Strategy operational guidance</li>
                                <li>Army Strategic Planning Guidance (ASPG)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>International Strategic Framework:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Article 5 collective defense strategic provisions</li>
                                <li>UN Charter Chapter VII strategic enforcement actions</li>
                                <li>Geneva Conventions and Additional Protocols</li>
                                <li>Bilateral strategic defense cooperation agreements</li>
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
export default armyTacticsModule;
