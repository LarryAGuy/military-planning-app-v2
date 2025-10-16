/**
 * OPORD Sustainment - Corps Level Practical Examples
 * Multi-division sustainment operations and coordination
 * Corps-level logistics and support operations
 *
 * SPECIAL AUTHORIZATION: May exceed 300-line limit due to extensive strategic content requirements
 */

export const corpsPracticalModule = {
    id: 'corps-practical',
    title: 'Corps Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Corps Level Practical Examples - Professional Military Layout -->
            <div id="corps-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-truck" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        4. Sustainment - Corps Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - XVIII Airborne Corps
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #dbeafe; margin: 0 0 8px 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 8px; color: #60a5fa;"></i>
                        Operation ALLIED RESOLVE - Corps Sustainment Operations
                    </h4>
                    <p style="color: #bfdbfe; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Command:</strong> XVIII Airborne Corps | <strong>Sector:</strong> Northern Europe | <strong>Forces:</strong> 60,000+ personnel
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Subordinate Divisions</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>82nd Airborne Division (Air Assault)</li>
                                <li>101st Airborne Division (Air Mobile)</li>
                                <li>10th Mountain Division (Light Infantry)</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Corps Sustainment Scope</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Operational reach: 400km from army nodes</li>
                                <li>Distribution network: 12 corps nodes</li>
                                <li>Medical support: Level II-III operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Corps Sustainment Content Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Theater Integration Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 360px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-link" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                            a. Theater Integration
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps-level integration with Third Army and theater assets, coordinating sustainment operations across three divisions in northern sector operations.
                        </p>

                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Command Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Third Army:</strong> Army-level coordination</li>
                                <li><strong>21st TSC:</strong> Theater sustainment command</li>
                                <li><strong>377th TSC:</strong> Operational sustainment</li>
                                <li><strong>316th ESC:</strong> Expeditionary support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Corps Support Assets</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st SUST BDE:</strong> Corps sustainment brigade</li>
                                <li><strong>16th CAB:</strong> Combat aviation brigade</li>
                                <li><strong>18th FIRES BDE:</strong> Fires brigade</li>
                                <li><strong>35th ADA BDE:</strong> Air defense artillery</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(59, 130, 246, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Unit Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>III AC:</strong> Central sector boundary</li>
                                <li><strong>V Corps:</strong> Southern sector boundary</li>
                                <li><strong>NATO Forces:</strong> Multinational coordination</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Strategic Distribution Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 360px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-route" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                            b. Strategic Distribution
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps distribution network managing 12 nodes across northern Europe, coordinating 28,000 STONs daily throughput to support three division operations.
                        </p>

                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Corps Distribution Network</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Corps Hub:</strong> Poznan Distribution Center</li>
                                <li><strong>Division Nodes:</strong> 3 forward distribution points</li>
                                <li><strong>Brigade Nodes:</strong> 9 brigade support areas</li>
                                <li><strong>Capacity:</strong> 28,000 STONs daily throughput</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(20, 83, 45, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Transportation Assets</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Line Haul:</strong> 480 HET/PLS vehicles</li>
                                <li><strong>Local Haul:</strong> 720 LMTV/FMTV trucks</li>
                                <li><strong>Aviation:</strong> CH-47F cargo helicopters</li>
                                <li><strong>Rail:</strong> European rail coordination</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(34, 197, 94, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Distribution Management</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>GCSS-Army:</strong> Corps logistics system</li>
                                <li><strong>MCS:</strong> Movement control system</li>
                                <li><strong>ITV:</strong> In-transit visibility</li>
                                <li><strong>RFID:</strong> Asset tracking system</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Regional Medical Support Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 360px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-notes-medical" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                            c. Regional Medical Support
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps medical operations coordinating Level II-III medical support across three divisions, managing 3,200+ medical personnel and 8 medical facilities.
                        </p>

                        <div style="background-color: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Corps Medical Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>XVIII ABC Surgeon:</strong> Corps medical authority</li>
                                <li><strong>44th MED BDE:</strong> Medical brigade command</li>
                                <li><strong>CSH:</strong> Combat support hospital</li>
                                <li><strong>FST:</strong> Forward surgical teams</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Medical Facilities</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Level III:</strong> 2 combat support hospitals</li>
                                <li><strong>Level II:</strong> 6 forward surgical teams</li>
                                <li><strong>Division Support:</strong> 3 medical companies</li>
                                <li><strong>Specialty Care:</strong> Dental, veterinary, preventive</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(220, 38, 38, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Evacuation Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>MEDEVAC:</strong> 12 UH-60M aircraft</li>
                                <li><strong>CASEVAC:</strong> Ground ambulance companies</li>
                                <li><strong>Fixed Wing:</strong> C-12 aircraft</li>
                                <li><strong>Coordination:</strong> Army medical command</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Corps Planning Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 360px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #9333ea; font-size: 12px;"></i>
                            d. Corps Planning
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Corps-level sustainment planning coordinating three division operations across 90-day campaign, integrating army requirements and division support.
                        </p>

                        <div style="background-color: rgba(147, 51, 234, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Horizons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Operational (30-90 days):</strong> Campaign planning</li>
                                <li><strong>Tactical (7-30 days):</strong> Division coordination</li>
                                <li><strong>Immediate (0-7 days):</strong> Battle rhythm</li>
                                <li><strong>Crisis (0-72 hours):</strong> Emergency response</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(76, 29, 149, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Division Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>82nd ABN:</strong> Air assault operations</li>
                                <li><strong>101st ABN:</strong> Air mobile operations</li>
                                <li><strong>10th MTN:</strong> Light infantry operations</li>
                                <li><strong>Corps Assets:</strong> Direct support units</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(124, 58, 237, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>CPOF:</strong> Command post operations</li>
                                <li><strong>GCCS-A:</strong> Global command control</li>
                                <li><strong>FBCB2:</strong> Force battle command</li>
                                <li><strong>MCS:</strong> Movement control system</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Corps Sustainment Command Structure -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        XVIII Airborne Corps Sustainment Structure
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Corps Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>XVIII ABC G4</li>
                                <li>1st SUST BDE</li>
                                <li>44th MED BDE</li>
                                <li>16th CAB</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Division Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>82nd ABN G4</li>
                                <li>101st ABN G4</li>
                                <li>10th MTN G4</li>
                                <li>Division Support Commands</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Support Units</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>129th TC BN</li>
                                <li>307th MI BN</li>
                                <li>18th FIRES BDE</li>
                                <li>35th ADA BDE</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Corps Operational Phases -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-calendar-alt" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Corps Sustainment Phases - Northern Sector
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="color: #fca5a5; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase I: Deployment (D-10 to D+10)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Corps deployment: 60,000 personnel</li>
                                    <li>Equipment movement: 480K STONs</li>
                                    <li>Initial stocks: 10 DOS</li>
                                    <li>Reception operations: 3 aerial ports</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase II: Employment (D+11 to D+30)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Division deployment: 3 divisions operational</li>
                                    <li>Distribution network: 12 nodes active</li>
                                    <li>Medical facilities: Level II-III</li>
                                    <li>Sustainment stocks: 20 DOS</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase III: Operations (D+31 to D+75)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Steady-state: 28K STONs/day</li>
                                    <li>Coalition integration: 8 nations</li>
                                    <li>Host nation support: Active</li>
                                    <li>Contractor support: 20%</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase IV: Transition (D+76 to D+90)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Force adjustment: 25% reduction</li>
                                    <li>Equipment retrograde: 360K STONs</li>
                                    <li>Infrastructure handover: Host nation</li>
                                    <li>Lessons learned: Corps level</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Corps Sustainment Metrics -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-chart-line" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                        Key Corps Sustainment Metrics
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #06b6d4; font-size: 20px; font-weight: 700; margin-bottom: 4px;">60,000+</div>
                            <div style="color: #d1d5db; font-size: 12px;">Total Personnel</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #10b981; font-size: 20px; font-weight: 700; margin-bottom: 4px;">28K</div>
                            <div style="color: #d1d5db; font-size: 12px;">STONs/Day Capacity</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #f59e0b; font-size: 20px; font-weight: 700; margin-bottom: 4px;">12</div>
                            <div style="color: #d1d5db; font-size: 12px;">Distribution Nodes</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #ef4444; font-size: 20px; font-weight: 700; margin-bottom: 4px;">3</div>
                            <div style="color: #d1d5db; font-size: 12px;">Division Commands</div>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div style="background-color: rgba(6, 182, 212, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #06b6d4;">
                            <h5 style="color: #67e8f9; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Logistics Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Supply availability: 96.9%</li>
                                <li>Distribution reliability: 94.7%</li>
                                <li>Transportation on-time: 92.1%</li>
                                <li>Inventory accuracy: 98.2%</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Medical Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Survival rate: 96.2%</li>
                                <li>Golden hour compliance: 85.7%</li>
                                <li>MEDEVAC response: 16.8 min avg</li>
                                <li>Bed utilization: 74.3%</li>
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
                                <li>FM 3-92 (Apr 2016): Corps Operations</li>
                                <li>ADP 3-0 (Jul 2019): Operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Supporting Publications</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>ATP 4-0.1: Army Theater Distribution</li>
                                <li>ATP 3-92.1: Corps Operations Techniques</li>
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
                        UNCLASSIFIED - Corps Level Sustainment Operations per FM 5-0 and FM 4-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Corps Sustainment Practical Examples module initialized');
        return true;
    }
};
