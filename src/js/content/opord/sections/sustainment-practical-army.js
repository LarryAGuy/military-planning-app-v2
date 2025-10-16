/**
 * OPORD Sustainment - Army Level Practical Examples
 * Multi-corps sustainment operations and coordination
 * Army-level logistics and support operations
 *
 * SPECIAL AUTHORIZATION: May exceed 300-line limit due to extensive strategic content requirements
 */

export const armyPracticalModule = {
    id: 'army-practical',
    title: 'Army Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Army Level Practical Examples - Professional Military Layout -->
            <div id="army-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-truck" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        4. Sustainment - Army Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Third Army / U.S. Army Central
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #dbeafe; margin: 0 0 8px 0;">
                        <i class="fas fa-star" style="margin-right: 8px; color: #60a5fa;"></i>
                        Operation ALLIED RESOLVE - Army Sustainment Operations
                    </h4>
                    <p style="color: #bfdbfe; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Command:</strong> Third Army / U.S. Army Central | <strong>AOR:</strong> Eastern Europe | <strong>Forces:</strong> 200,000+ personnel
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Subordinate Corps</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>XVIII Airborne Corps (Northern Sector)</li>
                                <li>III Armored Corps (Central Sector)</li>
                                <li>V Corps (Southern Sector)</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Army Sustainment Scope</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Operational reach: 800km from theater ports</li>
                                <li>Distribution network: 23 major nodes</li>
                                <li>Medical support: Level II-IV across AOR</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Army Sustainment Content Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Joint Integration Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 380px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-handshake" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                            a. Joint Integration
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army-level joint integration with theater assets and coalition partners, coordinating sustainment operations across three corps and supporting joint task force requirements.
                        </p>

                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Joint Command Relationships</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>EUCOM:</strong> Theater sustainment coordination</li>
                                <li><strong>TRANSCOM:</strong> Strategic transportation</li>
                                <li><strong>21st TSC:</strong> Theater sustainment command</li>
                                <li><strong>JTF-East:</strong> Joint task force support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Joint Sustainment Assets</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Air Force:</strong> 86th AW strategic airlift</li>
                                <li><strong>Navy:</strong> MSC sealift operations</li>
                                <li><strong>Marines:</strong> SPMAGTF-CR logistics</li>
                                <li><strong>SOF:</strong> JSOTF sustainment support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(59, 130, 246, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Coalition Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>NATO:</strong> Multinational Division East</li>
                                <li><strong>UK:</strong> 1st Armoured Division</li>
                                <li><strong>Germany:</strong> 10th Panzer Division</li>
                                <li><strong>Poland:</strong> 12th Mechanized Division</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Strategic Supply Chains Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 380px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-shipping-fast" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                            b. Strategic Supply Chains
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army-level distribution network managing 23 major nodes across Eastern Europe, coordinating 65,000 STONs daily throughput to support three corps operations.
                        </p>

                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Army Distribution Network</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Theater Hubs:</strong> Ramstein, Grafenwoehr (SPOD)</li>
                                <li><strong>Army Hubs:</strong> Poznan, Rzeszow, Constanta</li>
                                <li><strong>Corps Nodes:</strong> 18 forward distribution points</li>
                                <li><strong>Capacity:</strong> 65,000 STONs daily throughput</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(20, 83, 45, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Transportation Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Strategic Rail:</strong> European rail network</li>
                                <li><strong>Line Haul:</strong> 1,200 HET/PLS vehicles</li>
                                <li><strong>Theater Airlift:</strong> C-130J tactical airlift</li>
                                <li><strong>Inland Waterways:</strong> Danube River system</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(34, 197, 94, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Supply Chain Management</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>GCSS-Army:</strong> Enterprise logistics system</li>
                                <li><strong>LMP:</strong> Logistics Modernization Program</li>
                                <li><strong>STAMIS:</strong> Standard Army Management Systems</li>
                                <li><strong>DLA:</strong> Defense Logistics Agency support</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Theater Medical Support Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 380px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-notes-medical" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                            c. Theater Medical Support
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army medical command coordinating Level II-IV medical operations across three corps, managing 8,500+ medical personnel and 18 medical facilities.
                        </p>

                        <div style="background-color: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Army Medical Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>MEDCOM-Europe:</strong> Theater medical authority</li>
                                <li><strong>30th MEDCOM:</strong> Army medical command</li>
                                <li><strong>7th MSC:</strong> Medical support command</li>
                                <li><strong>DENTCOM:</strong> Dental command support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Medical Facilities</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Level IV:</strong> 1 regional medical center</li>
                                <li><strong>Level III:</strong> 5 combat support hospitals</li>
                                <li><strong>Level II:</strong> 12 forward surgical teams</li>
                                <li><strong>Corps Support:</strong> 3 medical brigades</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(220, 38, 38, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Evacuation Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>MEDEVAC:</strong> 24 UH-60M aircraft</li>
                                <li><strong>CASEVAC:</strong> Ground ambulance fleet</li>
                                <li><strong>Fixed Wing:</strong> C-12, UC-35 aircraft</li>
                                <li><strong>Strategic:</strong> TRANSCOM coordination</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Army Planning Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 380px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #9333ea; font-size: 12px;"></i>
                            d. Army Planning
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Army-level sustainment planning coordinating three corps operations across 120-day campaign, integrating joint requirements and coalition support.
                        </p>

                        <div style="background-color: rgba(147, 51, 234, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Horizons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Strategic (6-18 months):</strong> Campaign design</li>
                                <li><strong>Operational (30-120 days):</strong> Corps coordination</li>
                                <li><strong>Tactical (7-30 days):</strong> Battle rhythm</li>
                                <li><strong>Immediate (0-7 days):</strong> Crisis response</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(76, 29, 149, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Corps Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>XVIII ABC:</strong> Northern sector operations</li>
                                <li><strong>III AC:</strong> Central sector operations</li>
                                <li><strong>V Corps:</strong> Southern sector operations</li>
                                <li><strong>Reserves:</strong> Army-level sustainment assets</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(124, 58, 237, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>CPOF:</strong> Command Post of the Future</li>
                                <li><strong>DCGS-A:</strong> Distributed Common Ground</li>
                                <li><strong>FBCB2:</strong> Force Battle Command Brigade</li>
                                <li><strong>AMDWS:</strong> Air and Missile Defense</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Army Sustainment Command Structure -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        Third Army Sustainment Command Structure
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Army Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Third Army/ARCENT G4</li>
                                <li>1st TSC (Theater)</li>
                                <li>377th TSC (Operational)</li>
                                <li>316th ESC (Expeditionary)</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Corps Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>XVIII ABC G4</li>
                                <li>III AC G4</li>
                                <li>V Corps G4</li>
                                <li>Corps Support Commands</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Support Units</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>598th TC BDE</li>
                                <li>16th SUST BDE</li>
                                <li>18th MP BDE</li>
                                <li>7th MSC</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Army Operational Phases -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-calendar-alt" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Army Sustainment Phases - Operation ALLIED RESOLVE
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="color: #fca5a5; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase I: Force Projection (D-15 to D+15)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Army deployment: 200,000 personnel</li>
                                    <li>Equipment movement: 1.2M STONs</li>
                                    <li>Initial stocks: 15 DOS</li>
                                    <li>Reception operations: 8 aerial ports</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase II: Force Employment (D+16 to D+45)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Corps deployment: 3 corps operational</li>
                                    <li>Distribution network: 23 nodes active</li>
                                    <li>Medical facilities: Level II-IV</li>
                                    <li>Sustainment stocks: 30 DOS</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase III: Sustained Operations (D+46 to D+90)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Steady-state: 65K STONs/day</li>
                                    <li>Coalition integration: 15 nations</li>
                                    <li>Host nation support: Active</li>
                                    <li>Contractor support: 25%</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase IV: Transition (D+91 to D+120)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Force adjustment: 30% reduction</li>
                                    <li>Equipment retrograde: 800K STONs</li>
                                    <li>Infrastructure handover: Coalition</li>
                                    <li>Lessons learned: Integration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Army Sustainment Metrics -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-chart-line" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                        Key Army Sustainment Metrics
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #06b6d4; font-size: 20px; font-weight: 700; margin-bottom: 4px;">200,000+</div>
                            <div style="color: #d1d5db; font-size: 12px;">Total Personnel</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #10b981; font-size: 20px; font-weight: 700; margin-bottom: 4px;">65K</div>
                            <div style="color: #d1d5db; font-size: 12px;">STONs/Day Capacity</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #f59e0b; font-size: 20px; font-weight: 700; margin-bottom: 4px;">23</div>
                            <div style="color: #d1d5db; font-size: 12px;">Distribution Nodes</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #ef4444; font-size: 20px; font-weight: 700; margin-bottom: 4px;">3</div>
                            <div style="color: #d1d5db; font-size: 12px;">Corps Commands</div>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div style="background-color: rgba(6, 182, 212, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #06b6d4;">
                            <h5 style="color: #67e8f9; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Logistics Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Supply availability: 97.8%</li>
                                <li>Distribution reliability: 95.4%</li>
                                <li>Transportation on-time: 93.2%</li>
                                <li>Inventory accuracy: 98.6%</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Medical Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Survival rate: 96.8%</li>
                                <li>Golden hour compliance: 87.3%</li>
                                <li>MEDEVAC response: 14.2 min avg</li>
                                <li>Bed utilization: 76.8%</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Doctrinal References -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 14px; font-weight: 600; color: #dbeafe; margin: 0 0 12px 0;">
                        <i class="fas fa-book" style="margin-right: 8px; color: #60a5fa;"></i>
                        Doctrinal Foundation
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Primary References</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>FM 5-0 (Nov 2024): The Operations Process</li>
                                <li>FM 4-0 (Jul 2019): Sustainment Operations</li>
                                <li>FM 3-0 (Oct 2022): Operations</li>
                                <li>ADP 3-0 (Jul 2019): Operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Supporting Publications</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>ATP 4-0.1: Army Theater Distribution</li>
                                <li>ATP 3-91: Division Operations</li>
                                <li>FM 4-95: Logistics Operations</li>
                                <li>ATP 4-0.6: Sustainment Planning</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #10b981;">
                    <p style="color: #6ee7b7; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Army Level Sustainment Operations per FM 5-0 and FM 4-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Army Sustainment Practical Examples module initialized');
        return true;
    }
};
