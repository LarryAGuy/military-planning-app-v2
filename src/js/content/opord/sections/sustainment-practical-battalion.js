/**
 * OPORD Sustainment - Battalion Level Practical Examples
 * Multi-company sustainment operations and coordination
 * Battalion-level logistics and support operations
 *
 * SPECIAL AUTHORIZATION: May exceed 300-line limit due to extensive tactical content requirements
 */

export const battalionPracticalModule = {
    id: 'battalion-practical',
    title: 'Battalion Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Battalion Level Practical Examples - Professional Military Layout -->
            <div id="battalion-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-truck" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        4. Sustainment - Battalion Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - 1-77th Armor Battalion
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #dbeafe; margin: 0 0 8px 0;">
                        <i class="fas fa-tank" style="margin-right: 8px; color: #60a5fa;"></i>
                        Operation ALLIED RESOLVE - Battalion Sustainment Operations
                    </h4>
                    <p style="color: #bfdbfe; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Command:</strong> 1-77th Armor Battalion | <strong>Sector:</strong> Northern AO | <strong>Forces:</strong> 800+ personnel
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Subordinate Companies</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>A Company (Tank Company)</li>
                                <li>B Company (Tank Company)</li>
                                <li>C Company (Infantry Company)</li>
                                <li>HHC (Headquarters Company)</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Battalion Sustainment Scope</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Operational reach: 50km from brigade nodes</li>
                                <li>Distribution network: 4 company nodes</li>
                                <li>Medical support: Level I operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Battalion Sustainment Content Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Brigade Integration Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 300px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-link" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                            a. Brigade Integration
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion-level integration with 1st ABCT and division assets, coordinating sustainment operations across four companies in northern AO.
                        </p>

                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Command Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st ABCT:</strong> Brigade sustainment command</li>
                                <li><strong>BSB:</strong> Brigade support battalion</li>
                                <li><strong>1st AD:</strong> Division sustainment coordination</li>
                                <li><strong>FSC:</strong> Forward support company</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Battalion Support Assets</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>S4:</strong> Battalion logistics officer</li>
                                <li><strong>BAS:</strong> Battalion aid station</li>
                                <li><strong>UMCP:</strong> Unit maintenance collection point</li>
                                <li><strong>FTCP:</strong> Field trains command post</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(59, 130, 246, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Unit Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>2-77 AR:</strong> Adjacent battalion boundary</li>
                                <li><strong>1-6 IN:</strong> Adjacent battalion boundary</li>
                                <li><strong>1-1 FA:</strong> Field artillery support</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Tactical Distribution Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 300px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-truck" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                            b. Tactical Distribution
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion distribution operations managing 4 company nodes, coordinating 960 STONs daily throughput for combined arms operations.
                        </p>

                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Battalion Distribution Network</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Battalion Hub:</strong> Field trains command post</li>
                                <li><strong>Company Nodes:</strong> 4 company trains</li>
                                <li><strong>Platoon Nodes:</strong> Unit maintenance collection points</li>
                                <li><strong>Capacity:</strong> 960 STONs daily throughput</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(20, 83, 45, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Transportation Assets</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Local Haul:</strong> 24 LMTV/FMTV trucks</li>
                                <li><strong>Fuel Systems:</strong> HEMTT fuel tankers</li>
                                <li><strong>Maintenance:</strong> M88A2 recovery vehicles</li>
                                <li><strong>Ammunition:</strong> M1074 PLS trailers</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(34, 197, 94, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Supply Management</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>ULLS:</strong> Unit Level Logistics System</li>
                                <li><strong>SAMS:</strong> Standard Army Maintenance System</li>
                                <li><strong>PBUSE:</strong> Property Book Unit Supply</li>
                                <li><strong>Hand Receipts:</strong> Company property accountability</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Medical Treatment Facility Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 300px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-notes-medical" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                            c. Medical Treatment Facility
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion medical operations coordinating Level I medical support across four companies, managing 120+ medical personnel and battalion aid station.
                        </p>

                        <div style="background-color: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Battalion Medical Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Battalion Surgeon:</strong> Medical authority</li>
                                <li><strong>BAS:</strong> Battalion aid station</li>
                                <li><strong>68W:</strong> Combat medics (x24)</li>
                                <li><strong>CCP:</strong> Casualty collection points</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Medical Capabilities</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Level I:</strong> Battalion aid station</li>
                                <li><strong>Trauma Care:</strong> Tactical combat casualty care</li>
                                <li><strong>Triage:</strong> Mass casualty procedures</li>
                                <li><strong>Stabilization:</strong> Pre-evacuation treatment</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(220, 38, 38, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Evacuation Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>CASEVAC:</strong> Ground ambulance sections</li>
                                <li><strong>MEDEVAC:</strong> Brigade medical evacuation</li>
                                <li><strong>Coordination:</strong> Brigade medical command</li>
                                <li><strong>Patient Tracking:</strong> Manual/digital systems</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Tactical Planning Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 300px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #9333ea; font-size: 12px;"></i>
                            d. Tactical Planning
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion-level sustainment planning coordinating four company operations across 14-day campaign, integrating brigade requirements and company support.
                        </p>

                        <div style="background-color: rgba(147, 51, 234, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Horizons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tactical (3-14 days):</strong> Battalion planning</li>
                                <li><strong>Immediate (0-3 days):</strong> Company coordination</li>
                                <li><strong>Current (0-24 hours):</strong> Battle rhythm</li>
                                <li><strong>Crisis (0-4 hours):</strong> Emergency response</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(76, 29, 149, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Company Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>A Company:</strong> Tank operations</li>
                                <li><strong>B Company:</strong> Tank operations</li>
                                <li><strong>C Company:</strong> Infantry operations</li>
                                <li><strong>HHC:</strong> Headquarters operations</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(124, 58, 237, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>FBCB2:</strong> Force battle command</li>
                                <li><strong>ULLS:</strong> Unit Level Logistics System</li>
                                <li><strong>SAMS:</strong> Maintenance planning</li>
                                <li><strong>Hand Receipts:</strong> Property accountability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Battalion Sustainment Command Structure -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        1-77th Armor Battalion Sustainment Structure
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Battalion Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>1-77 AR S4</li>
                                <li>BAS</li>
                                <li>UMCP</li>
                                <li>FTCP</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Company Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>A Co 1SG</li>
                                <li>B Co 1SG</li>
                                <li>C Co 1SG</li>
                                <li>HHC 1SG</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Support Elements</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Medics (x24)</li>
                                <li>Mechanics (x16)</li>
                                <li>Supply (x12)</li>
                                <li>Cooks (x8)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Battalion Operational Phases -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-calendar-alt" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Battalion Sustainment Phases - Northern AO
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="color: #fca5a5; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase I: Deployment (D-2 to D+1)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Battalion deployment: 800 personnel</li>
                                    <li>Equipment movement: 14.4K STONs</li>
                                    <li>Initial stocks: 3 DOS</li>
                                    <li>Reception operations: Company level</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase II: Employment (D+2 to D+5)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Company deployment: 4 companies operational</li>
                                    <li>Distribution network: 4 nodes active</li>
                                    <li>Medical facilities: Level I</li>
                                    <li>Sustainment stocks: 7 DOS</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase III: Operations (D+6 to D+12)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Steady-state: 960 STONs/day</li>
                                    <li>Coalition integration: Limited</li>
                                    <li>Host nation support: Minimal</li>
                                    <li>Contractor support: 5%</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase IV: Transition (D+13 to D+14)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Force adjustment: 10% reduction</li>
                                    <li>Equipment retrograde: 13K STONs</li>
                                    <li>Infrastructure handover: Brigade</li>
                                    <li>Lessons learned: Battalion level</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Battalion Sustainment Metrics -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-chart-line" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                        Key Battalion Sustainment Metrics
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #06b6d4; font-size: 20px; font-weight: 700; margin-bottom: 4px;">800+</div>
                            <div style="color: #d1d5db; font-size: 12px;">Total Personnel</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #10b981; font-size: 20px; font-weight: 700; margin-bottom: 4px;">960</div>
                            <div style="color: #d1d5db; font-size: 12px;">STONs/Day Capacity</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #f59e0b; font-size: 20px; font-weight: 700; margin-bottom: 4px;">4</div>
                            <div style="color: #d1d5db; font-size: 12px;">Distribution Nodes</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #ef4444; font-size: 20px; font-weight: 700; margin-bottom: 4px;">4</div>
                            <div style="color: #d1d5db; font-size: 12px;">Company Commands</div>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div style="background-color: rgba(6, 182, 212, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #06b6d4;">
                            <h5 style="color: #67e8f9; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Logistics Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Supply availability: 92.8%</li>
                                <li>Distribution reliability: 89.4%</li>
                                <li>Transportation on-time: 86.2%</li>
                                <li>Inventory accuracy: 95.3%</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Medical Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Survival rate: 92.7%</li>
                                <li>Golden hour compliance: 74.8%</li>
                                <li>CASEVAC response: 26.3 min avg</li>
                                <li>Treatment capacity: 85.2%</li>
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
                                <li>ATP 3-90.5 (Jan 2016): Combined Arms Battalion</li>
                                <li>ADP 3-0 (Jul 2019): Operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Supporting Publications</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>ATP 4-0.1: Army Theater Distribution</li>
                                <li>ATP 3-20.15: Tank Platoon</li>
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
                        UNCLASSIFIED - Battalion Level Sustainment Operations per FM 5-0 and FM 4-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Battalion Sustainment Practical Examples module initialized');
        return true;
    }
};
