/**
 * Brigade Echelon Fire and Movement Doctrinal Analysis
 * Command Level: Colonel (O-6)
 * Force Structure: 3,000-5,000 personnel across 3-5 battalions
 * Operational Focus: Tactical-operational bridge with combined arms integration
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 */

export const brigadeTacticsModule = {
  getContent() {
    return `
        <div style="padding: 20px; background: #0f172a; min-height: 100vh;">
            <!-- Brigade Command Authority and Tactical-Operational Context -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-star" style="margin-right: 10px;"></i>
                    Brigade Command Authority and Tactical-Operational Context
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chess-king" style="margin-right: 8px;"></i>
                            Brigade Command Structure
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Command Authority (FM 3-0 Chapter 6):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Brigade Commander (Colonel/O-6) tactical command authority</li>
                                <li>Brigade Combat Team (BCT) combined arms integration</li>
                                <li>Armored Brigade Combat Team (ABCT) maneuver operations</li>
                                <li>Infantry Brigade Combat Team (IBCT) close combat operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical-Operational Bridge:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division tactical guidance implementation</li>
                                <li>Battalion tactical task organization</li>
                                <li>Combined arms tactical coordination</li>
                                <li>Multi-domain tactical operations integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Force Structure Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>3,000-5,000 personnel tactical command</li>
                                <li>3-5 battalion tactical integration</li>
                                <li>Brigade Support Battalion (BSB) sustainment</li>
                                <li>Brigade Engineer Battalion (BEB) mobility operations</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-crosshairs" style="margin-right: 8px;"></i>
                            Tactical-Operational Context
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Mission Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division tactical mission execution</li>
                                <li>Area of Operations (AO) tactical control</li>
                                <li>Combined arms tactical maneuver</li>
                                <li>Multi-domain tactical coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Operational Environment:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Large Scale Combat Operations (LSCO) tactical execution</li>
                                <li>Multi-Domain Operations (MDO) tactical integration</li>
                                <li>Unified Land Operations (ULO) tactical implementation</li>
                                <li>Combined arms tactical synchronization</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Command Relationships:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Division tactical control (TACON) relationships</li>
                                <li>Attached and operational control (OPCON) units</li>
                                <li>Supporting and supported tactical relationships</li>
                                <li>Adjacent unit tactical coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Fire Support Coordination Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #3b82f6; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-bullseye" style="margin-right: 10px;"></i>
                    Brigade Fire Support Coordination Framework
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(59, 130, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-rocket" style="margin-right: 8px;"></i>
                            Tactical Fire Support Systems
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Organic Fire Support (FM 3-60 Chapter 4):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>M777A2 155mm Lightweight Howitzer tactical fires</li>
                                <li>M119A3 105mm Howitzer close support fires</li>
                                <li>M142 High Mobility Artillery Rocket System (HIMARS)</li>
                                <li>M270A1 Multiple Launch Rocket System (MLRS)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Direct Fire Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>M1A2 Abrams Main Battle Tank direct fires</li>
                                <li>M2A4 Bradley Fighting Vehicle integrated fires</li>
                                <li>M1126 Stryker Infantry Carrier Vehicle fires</li>
                                <li>Javelin Anti-Tank Guided Missile (ATGM) systems</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Air Support:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Close Air Support (CAS) tactical integration</li>
                                <li>Joint Terminal Attack Controller (JTAC) coordination</li>
                                <li>Tactical Air Control Party (TACP) integration</li>
                                <li>Air-Ground Integration tactical procedures</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(59, 130, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-crosshairs" style="margin-right: 8px;"></i>
                            Tactical Targeting and Coordination
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Targeting Process:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Decide, Detect, Deliver, Assess (D3A) tactical cycle</li>
                                <li>High Payoff Target (HPT) tactical identification</li>
                                <li>Target Area of Interest (TAI) tactical designation</li>
                                <li>Named Area of Interest (NAI) tactical monitoring</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Fire Support Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Fire Support Coordination Line (FSCL) tactical management</li>
                                <li>Coordinated Fire Line (CFL) tactical deconfliction</li>
                                <li>No Fire Area (NFA) tactical protection</li>
                                <li>Restrictive Fire Area (RFA) tactical coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Fire Control:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Advanced Field Artillery Tactical Data System (AFATDS)</li>
                                <li>Tactical Fire Direction System (TACFIRE) integration</li>
                                <li>Digital Fire Support coordination</li>
                                <li>Tactical fire mission processing and execution</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Movement Operations and Logistics -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck" style="margin-right: 10px;"></i>
                    Brigade Movement Operations and Logistics
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(16, 185, 129, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-route" style="margin-right: 8px;"></i>
                            Tactical Movement Control
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Movement Coordination (FM 4-01 Chapter 3):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Movement Control Team (MCT) tactical coordination</li>
                                <li>Highway Regulation Point (HRP) tactical control</li>
                                <li>Traffic Control Point (TCP) tactical management</li>
                                <li>Route Classification and Reconnaissance</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Transportation Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Heavy Equipment Transporter (HET) M1070A1</li>
                                <li>Palletized Load System (PLS) M1074/M1075</li>
                                <li>Family of Medium Tactical Vehicles (FMTV)</li>
                                <li>Heavy Expanded Mobility Tactical Truck (HEMTT)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Mobility Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Brigade Engineer Battalion (BEB) mobility support</li>
                                <li>Assault Breacher Vehicle (ABV) obstacle reduction</li>
                                <li>M9 Armored Combat Earthmover (ACE) mobility</li>
                                <li>Tactical bridging and gap crossing operations</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(16, 185, 129, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-boxes" style="margin-right: 8px;"></i>
                            Brigade Sustainment Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Support Battalion (BSB) Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Distribution Company tactical logistics</li>
                                <li>Maintenance Company tactical repair</li>
                                <li>Medical Company tactical health service support</li>
                                <li>Brigade Support Area (BSA) tactical operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Supply Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Class I (Subsistence) tactical distribution</li>
                                <li>Class III (Petroleum) tactical fuel operations</li>
                                <li>Class V (Ammunition) tactical resupply</li>
                                <li>Class IX (Repair Parts) tactical maintenance support</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Maintenance Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Field Maintenance Team (FMT) tactical repair</li>
                                <li>Recovery and Evacuation tactical operations</li>
                                <li>Battle Damage Assessment and Repair (BDAR)</li>
                                <li>Tactical maintenance collection points</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Multi-Domain Operations Integration at Brigade Level -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f59e0b; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-network-wired" style="margin-right: 10px;"></i>
                    Multi-Domain Operations Integration at Brigade Level
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite" style="margin-right: 8px;"></i>
                            Tactical Multi-Domain Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Land Domain Tactical Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combined arms tactical maneuver integration</li>
                                <li>Close combat tactical operations</li>
                                <li>Tactical mobility and countermobility operations</li>
                                <li>Tactical protection and survivability</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Air Domain Tactical Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Close Air Support (CAS) tactical coordination</li>
                                <li>Tactical Air Control Party (TACP) integration</li>
                                <li>Unmanned Aircraft System (UAS) tactical employment</li>
                                <li>Air Defense Artillery (ADA) tactical protection</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Maritime Domain Tactical Coordination:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Amphibious operations tactical support</li>
                                <li>Riverine operations tactical coordination</li>
                                <li>Naval Surface Fire Support (NSFS) integration</li>
                                <li>Maritime logistics tactical coordination</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            Cyber and Space Domain Tactical Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Cyber Domain Tactical Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Tactical Cyber Operations Team (TCOT) integration</li>
                                <li>Defensive Cyber Operations (DCO) tactical protection</li>
                                <li>Cyber Electromagnetic Activities (CEMA) coordination</li>
                                <li>Tactical network defense and security</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Space Domain Tactical Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Global Positioning System (GPS) tactical navigation</li>
                                <li>Satellite Communications (SATCOM) tactical connectivity</li>
                                <li>Space-based Intelligence, Surveillance, Reconnaissance</li>
                                <li>Tactical space situational awareness</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Information Domain Tactical Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Military Information Support Operations (MISO)</li>
                                <li>Tactical information collection and analysis</li>
                                <li>Electronic Warfare (EW) tactical integration</li>
                                <li>Information Operations (IO) tactical coordination</li>
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
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-users" style="margin-right: 8px;"></i>
                            Joint and Interagency Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Joint Force Integration (JP 3-31 Chapter VI):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Joint Air-Ground Integration Center (JAGIC) tactical support</li>
                                <li>Joint Fires Element (JFE) tactical coordination</li>
                                <li>Joint Intelligence Operations Center (JIOC) tactical intelligence</li>
                                <li>Joint Logistics Operations Center (JLOC) tactical sustainment</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Interagency Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Local State Department consular tactical coordination</li>
                                <li>Defense Intelligence Agency (DIA) tactical intelligence</li>
                                <li>Federal Bureau of Investigation (FBI) tactical coordination</li>
                                <li>Department of Homeland Security tactical support</li>
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
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-globe" style="margin-right: 8px;"></i>
                            Intergovernmental and Multinational Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Intergovernmental Coordination:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Local government and municipal tactical coordination</li>
                                <li>Host nation local military tactical integration</li>
                                <li>International organization tactical coordination (UN, ICRC)</li>
                                <li>Non-governmental organization (NGO) tactical coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Multinational Force Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Standardization Agreement (STANAG) tactical compliance</li>
                                <li>Multinational battalion tactical integration</li>
                                <li>Coalition liaison teams tactical coordination</li>
                                <li>Partner nation tactical capability integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Partner Nation Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Security Force Assistance Team (SFAT) tactical coordination</li>
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
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                            NATO Tactical Command Structures
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>NATO Tactical Force Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Force Integration Units (NFIU) tactical support</li>
                                <li>Enhanced Forward Presence (eFP) battle group tactical integration</li>
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
                                <li>Multinational Brigade tactical coordination</li>
                                <li>NATO Battle Group tactical integration</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(99, 102, 241, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
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
                                <li>Host Nation Support (HNS) tactical agreements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Risk Assessment and Mitigation -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-shield-alt" style="margin-right: 10px;"></i>
                    Brigade Risk Assessment and Mitigation
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(220, 38, 38, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                            Tactical Risk Assessment
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Risk Management (FM 5-19):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Identify tactical hazards and threats</li>
                                <li>Assess tactical risk probability and severity</li>
                                <li>Develop tactical risk control measures</li>
                                <li>Implement and supervise tactical risk controls</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Operational Risk Factors:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Enemy tactical capabilities and intentions</li>
                                <li>Terrain and weather tactical impact</li>
                                <li>Friendly force tactical vulnerabilities</li>
                                <li>Time and resource tactical constraints</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Threat Assessment:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Enemy tactical formations and capabilities</li>
                                <li>Improvised Explosive Device (IED) threats</li>
                                <li>Chemical, Biological, Radiological, Nuclear (CBRN)</li>
                                <li>Cyber and electronic warfare tactical threats</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(220, 38, 38, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-shield" style="margin-right: 8px;"></i>
                            Tactical Risk Mitigation
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Force Protection Measures:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Tactical security operations and procedures</li>
                                <li>Base defense and perimeter security</li>
                                <li>Personnel recovery tactical operations</li>
                                <li>Antiterrorism and force protection measures</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Survivability:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Tactical camouflage, concealment, deception</li>
                                <li>Hardening and protective construction</li>
                                <li>Dispersion and tactical mobility</li>
                                <li>Electronic warfare protection measures</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Contingency Planning:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Branch and sequel tactical planning</li>
                                <li>Emergency action procedures</li>
                                <li>Tactical withdrawal and retrograde operations</li>
                                <li>Casualty evacuation and medical support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Intelligence and Reconnaissance -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(6, 182, 212, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #06b6d4; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-search" style="margin-right: 10px;"></i>
                    Brigade Intelligence and Reconnaissance
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(6, 182, 212, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-eye" style="margin-right: 8px;"></i>
                            Tactical Intelligence Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Intelligence Support Element (BISE):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>All-Source Intelligence tactical analysis</li>
                                <li>Intelligence Preparation of the Battlefield (IPB)</li>
                                <li>Tactical intelligence collection management</li>
                                <li>Intelligence dissemination and reporting</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Collection Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Human Intelligence (HUMINT) tactical collection</li>
                                <li>Signals Intelligence (SIGINT) tactical intercept</li>
                                <li>Imagery Intelligence (IMINT) tactical analysis</li>
                                <li>Measurement and Signature Intelligence (MASINT)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Surveillance Systems:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Ground Surveillance Radar (GSR) systems</li>
                                <li>Unattended Ground Sensors (UGS)</li>
                                <li>Tactical Unmanned Aircraft Systems (UAS)</li>
                                <li>Counter-Intelligence tactical operations</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(6, 182, 212, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-binoculars" style="margin-right: 8px;"></i>
                            Tactical Reconnaissance Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Reconnaissance Troop (BRT):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Zone reconnaissance tactical operations</li>
                                <li>Area reconnaissance tactical missions</li>
                                <li>Route reconnaissance tactical procedures</li>
                                <li>Reconnaissance in force tactical operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Reconnaissance Assets:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>M3A3 Bradley Cavalry Fighting Vehicle</li>
                                <li>M1127 Stryker Reconnaissance Vehicle</li>
                                <li>Long Range Surveillance (LRS) teams</li>
                                <li>Scout sniper tactical teams</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Security Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Screen tactical security operations</li>
                                <li>Guard tactical security missions</li>
                                <li>Cover tactical security operations</li>
                                <li>Area security tactical procedures</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Communications and Information Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(20, 184, 166, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #14b8a6; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-broadcast-tower" style="margin-right: 10px;"></i>
                    Brigade Communications and Information Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(20, 184, 166, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(20, 184, 166, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px;"></i>
                            Tactical Communications Systems
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Signal Company Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Tactical Network Operations Center (TNOC)</li>
                                <li>Command Post Node (CPN) tactical connectivity</li>
                                <li>Warfighter Information Network-Tactical (WIN-T)</li>
                                <li>Joint Network Node (JNN) tactical communications</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Radio Systems:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Single Channel Ground and Airborne Radio System</li>
                                <li>Enhanced Position Location Reporting System</li>
                                <li>Tactical Internet and data networks</li>
                                <li>Satellite Communications (SATCOM) tactical links</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Digital Communications:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Command Post Computing Environment (CPCE)</li>
                                <li>Distributed Common Ground System-Army (DCGS-A)</li>
                                <li>Battle Command Sustainment Support System</li>
                                <li>Tactical communications security (COMSEC)</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(20, 184, 166, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(20, 184, 166, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                            Tactical Information Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Information Operations (IO) Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Military Information Support Operations (MISO)</li>
                                <li>Electronic Warfare (EW) tactical integration</li>
                                <li>Cyber Electromagnetic Activities (CEMA)</li>
                                <li>Operations Security (OPSEC) tactical procedures</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Electronic Warfare Tactical Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Electronic Attack (EA) tactical operations</li>
                                <li>Electronic Protection (EP) tactical measures</li>
                                <li>Electronic Warfare Support (ES) tactical collection</li>
                                <li>Spectrum Management tactical coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Information Management:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Common Operational Picture (COP) tactical maintenance</li>
                                <li>Information sharing tactical procedures</li>
                                <li>Knowledge Management tactical systems</li>
                                <li>Information assurance tactical security</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Sustainment and Logistics Operations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(236, 72, 153, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #ec4899; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-cogs" style="margin-right: 10px;"></i>
                    Brigade Sustainment and Logistics Operations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(236, 72, 153, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-wrench" style="margin-right: 8px;"></i>
                            Tactical Sustainment Operations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Support Battalion (BSB) Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Distribution Company tactical logistics operations</li>
                                <li>Maintenance Company tactical repair operations</li>
                                <li>Medical Company tactical health service support</li>
                                <li>Brigade Support Area (BSA) tactical operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Logistics Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Supply Support Activity (SSA) tactical operations</li>
                                <li>Field Trains Command Post (FTCP) coordination</li>
                                <li>Logistics Release Point (LRP) operations</li>
                                <li>Unit Maintenance Collection Point (UMCP)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Medical Operations:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Role 1 medical care tactical operations</li>
                                <li>Casualty Collection Point (CCP) operations</li>
                                <li>Medical Evacuation (MEDEVAC) tactical coordination</li>
                                <li>Combat Stress Control tactical support</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(236, 72, 153, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(236, 72, 153, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-tools" style="margin-right: 8px;"></i>
                            Tactical Maintenance and Support
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Maintenance Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Field Maintenance Team (FMT) tactical operations</li>
                                <li>Contact Team tactical maintenance support</li>
                                <li>Recovery Team tactical vehicle recovery</li>
                                <li>Battle Damage Assessment and Repair (BDAR)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Supply Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Automated Unit Equipment List (AUEL) management</li>
                                <li>Property Book Officer (PBO) tactical accountability</li>
                                <li>Unit Level Logistics System-Ground (ULLS-G)</li>
                                <li>Standard Army Maintenance System (SAMS)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Transportation:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Movement Control Team (MCT) tactical coordination</li>
                                <li>Transportation Motor Pool tactical operations</li>
                                <li>Convoy Security Team (CST) tactical protection</li>
                                <li>Tactical vehicle dispatch and control</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Advanced Tactical Considerations -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(132, 204, 22, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #84cc16; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-chess-knight" style="margin-right: 10px;"></i>
                    Brigade Advanced Tactical Considerations
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(132, 204, 22, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(132, 204, 22, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-brain" style="margin-right: 8px;"></i>
                            Tactical Innovation and Adaptation
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Emerging Tactical Technologies:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Artificial Intelligence (AI) tactical decision support</li>
                                <li>Machine Learning tactical pattern recognition</li>
                                <li>Autonomous systems tactical integration</li>
                                <li>Advanced sensor networks tactical employment</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Adaptation Strategies:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Hybrid warfare tactical countermeasures</li>
                                <li>Asymmetric threat tactical responses</li>
                                <li>Urban warfare tactical innovations</li>
                                <li>Multi-generational warfare tactical integration</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Future Tactical Capabilities:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Next Generation Combat Vehicle (NGCV) integration</li>
                                <li>Future Vertical Lift (FVL) tactical employment</li>
                                <li>Integrated Visual Augmentation System (IVAS)</li>
                                <li>Synthetic Training Environment (STE) tactical preparation</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(132, 204, 22, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(132, 204, 22, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-cog" style="margin-right: 8px;"></i>
                            Tactical Interoperability and Integration
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Cross-Domain Tactical Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Land-Air tactical integration procedures</li>
                                <li>Land-Maritime tactical coordination</li>
                                <li>Space-enabled tactical operations</li>
                                <li>Cyber-physical tactical convergence</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Standardization:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>NATO Standardization Agreement (STANAG) compliance</li>
                                <li>Combined arms tactical procedures standardization</li>
                                <li>Multinational tactical training standardization</li>
                                <li>Equipment interoperability tactical standards</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Data Integration:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Common Operational Picture (COP) tactical integration</li>
                                <li>Real-time tactical data sharing</li>
                                <li>Tactical cloud computing integration</li>
                                <li>Edge computing tactical applications</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Force Structure and Organization -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(124, 58, 237, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #7c3aed; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-sitemap" style="margin-right: 10px;"></i>
                    Brigade Force Structure and Organization
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(124, 58, 237, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-users-cog" style="margin-right: 8px;"></i>
                            Brigade Combat Team Organization
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Armored Brigade Combat Team (ABCT):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combined Arms Battalion (CAB) x2 tactical formations</li>
                                <li>Armored Reconnaissance Squadron tactical reconnaissance</li>
                                <li>Field Artillery Battalion tactical fires support</li>
                                <li>Brigade Engineer Battalion tactical mobility</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Infantry Brigade Combat Team (IBCT):</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Infantry Battalion x2 tactical formations</li>
                                <li>Weapons Company tactical fire support</li>
                                <li>Cavalry Troop tactical reconnaissance</li>
                                <li>Brigade Support Battalion tactical sustainment</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Stryker Brigade Combat Team (SBCT):</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Stryker Battalion x3 tactical formations</li>
                                <li>Cavalry Squadron tactical reconnaissance</li>
                                <li>Artillery Battalion tactical fires</li>
                                <li>Brigade Support Battalion tactical logistics</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(124, 58, 237, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chart-line" style="margin-right: 8px;"></i>
                            Brigade Tactical Capabilities
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Combined Arms Tactical Integration:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Armor-Infantry tactical coordination</li>
                                <li>Artillery-Maneuver tactical integration</li>
                                <li>Engineer-Maneuver tactical support</li>
                                <li>Aviation-Ground tactical coordination</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Mission Capabilities:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Offensive operations tactical execution</li>
                                <li>Defensive operations tactical implementation</li>
                                <li>Stability operations tactical conduct</li>
                                <li>Defense Support of Civil Authorities (DSCA)</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Readiness Standards:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Mission Essential Task List (METL) proficiency</li>
                                <li>Combat Training Center (CTC) rotation readiness</li>
                                <li>Deployment readiness tactical standards</li>
                                <li>Collective training tactical proficiency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Planning Considerations and Lessons Learned -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(234, 179, 8, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #eab308; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-lightbulb" style="margin-right: 10px;"></i>
                    Brigade Planning Considerations and Lessons Learned
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div style="background: rgba(234, 179, 8, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(234, 179, 8, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px;"></i>
                            Tactical Planning Considerations
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Planning Process:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Military Decision Making Process (MDMP) tactical application</li>
                                <li>Troop Leading Procedures (TLP) tactical implementation</li>
                                <li>Tactical mission analysis and course of action development</li>
                                <li>Brigade tactical decision support template</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Coordination Requirements:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Division tactical guidance and intent</li>
                                <li>Adjacent unit tactical coordination</li>
                                <li>Supporting and supported tactical relationships</li>
                                <li>Higher headquarters tactical reporting requirements</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Time Management:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>One-third/two-thirds tactical planning rule</li>
                                <li>Tactical rehearsal and preparation time</li>
                                <li>Subordinate unit tactical planning time</li>
                                <li>Tactical execution and assessment time</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background: rgba(234, 179, 8, 0.1); padding: 16px; border-radius: 8px; border: 1px solid rgba(234, 179, 8, 0.3);">
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-graduation-cap" style="margin-right: 8px;"></i>
                            Tactical Lessons Learned
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Brigade Combat Operations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Combined arms tactical integration effectiveness</li>
                                <li>Multi-domain operations tactical coordination</li>
                                <li>Urban operations tactical considerations</li>
                                <li>Stability operations tactical implementation</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Leadership Considerations:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>Mission command tactical implementation</li>
                                <li>Decentralized execution tactical procedures</li>
                                <li>Tactical decision making under uncertainty</li>
                                <li>Adaptive leadership tactical requirements</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Tactical Training Insights:</strong></p>
                            <ul style="margin: 0; padding-left: 16px;">
                                <li>Combat Training Center (CTC) tactical lessons</li>
                                <li>Live-fire exercise tactical integration</li>
                                <li>Simulation-based tactical training effectiveness</li>
                                <li>Professional military education tactical application</li>
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
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-scroll" style="margin-right: 8px;"></i>
                            Primary Doctrinal Sources
                        </h4>
                        <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                            <p style="margin: 0 0 8px 0;"><strong>Joint Publications:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>JP 3-31: Command and Control for Joint Land Operations</li>
                                <li>JP 3-0: Joint Operations (Chapter VI: Tactical Operations)</li>
                                <li>JP 5-0: Joint Planning (Chapter VI: Tactical Planning)</li>
                                <li>JP 3-30: Command and Control of Joint Operations</li>
                            </ul>
                            <p style="margin: 0 0 8px 0;"><strong>Army Field Manuals:</strong></p>
                            <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                                <li>FM 3-0: Operations (Chapter 6: Brigade Operations)</li>
                                <li>FM 5-0: The Operations Process (Chapter 5-1: Brigade Planning)</li>
                                <li>FM 6-0: Commander and Staff Organization and Operations</li>
                                <li>FM 3-96: Brigade Combat Team Operations</li>
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
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
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
                                <li>Brigade Mission Essential Task List (METL)</li>
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
export default brigadeTacticsModule;
