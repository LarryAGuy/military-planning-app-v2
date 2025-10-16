/**
 * OPORD Sustainment - Practical Examples - Platoon Level
 * UNCLASSIFIED content for platoon-level sustainment analysis examples
 * Follows FM 5-0 and FM 4-0 standards with realistic unit designations
 *
 * SPECIAL AUTHORIZATION: May exceed 300-line limit due to extensive tactical content requirements
 */

export const platoonPracticalModule = {
    id: 'platoon-practical',
    title: 'Platoon Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Platoon Level Practical Examples - Professional Military Layout -->
            <div id="platoon-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-truck" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        4. Sustainment - Platoon Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - 1st Platoon, Alpha Company, 1-77th Armor Battalion
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #dbeafe; margin: 0 0 8px 0;">
                        <i class="fas fa-user-friends" style="margin-right: 8px; color: #60a5fa;"></i>
                        Operation ALLIED RESOLVE - Platoon Sustainment Operations
                    </h4>
                    <p style="color: #bfdbfe; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Command:</strong> 1st Platoon, Alpha Company, 1-77th Armor Battalion | <strong>Sector:</strong> Northern AO | <strong>Forces:</strong> 40+ personnel
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Subordinate Squads</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>1st Squad (Tank Squad)</li>
                                <li>2nd Squad (Tank Squad)</li>
                                <li>3rd Squad (Tank Squad)</li>
                                <li>4th Squad (Tank Squad)</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Platoon Sustainment Scope</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Operational reach: 10km from company nodes</li>
                                <li>Distribution network: 4 squad nodes</li>
                                <li>Medical support: Level I operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Platoon Sustainment Content Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Company Integration Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 260px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-link" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                            a. Company Integration
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Platoon-level integration with Alpha Company and battalion assets, coordinating sustainment operations across four squads.
                        </p>

                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Command Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>A Company:</strong> Company sustainment command</li>
                                <li><strong>1-77 AR:</strong> Battalion sustainment coordination</li>
                                <li><strong>FSC:</strong> Forward support company</li>
                                <li><strong>1st ABCT:</strong> Brigade sustainment coordination</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Platoon Support Assets</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>PLT SGT:</strong> Platoon sergeant</li>
                                <li><strong>Medic:</strong> Combat medic (x2)</li>
                                <li><strong>Mechanic:</strong> Field maintenance (x1)</li>
                                <li><strong>Supply:</strong> Platoon supply specialist</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(59, 130, 246, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Unit Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>2nd Platoon:</strong> Adjacent platoon boundary</li>
                                <li><strong>3rd Platoon:</strong> Adjacent platoon boundary</li>
                                <li><strong>4th Platoon:</strong> Adjacent platoon boundary</li>
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
                        min-height: 260px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-truck" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                            b. Tactical Distribution
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Platoon distribution operations managing 4 squad nodes, coordinating 48 STONs daily throughput for tank operations.
                        </p>

                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Platoon Distribution Network</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon Hub:</strong> Platoon trains</li>
                                <li><strong>Squad Nodes:</strong> 4 squad trains</li>
                                <li><strong>Supply Points:</strong> Tactical resupply points</li>
                                <li><strong>Capacity:</strong> 48 STONs daily throughput</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(20, 83, 45, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Transportation Assets</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Local Haul:</strong> 2 LMTV trucks</li>
                                <li><strong>Fuel Systems:</strong> M978 fuel tankers</li>
                                <li><strong>Maintenance:</strong> M88A2 recovery vehicles</li>
                                <li><strong>Ammunition:</strong> M1074 PLS trailers</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(34, 197, 94, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Supply Management</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Hand Receipts:</strong> Squad property accountability</li>
                                <li><strong>Supply Requests:</strong> Company coordination</li>
                                <li><strong>Inventory:</strong> Platoon-level tracking</li>
                                <li><strong>Distribution:</strong> Squad resupply operations</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Medical Support Operations Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 260px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-notes-medical" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                            c. Medical Support Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Platoon medical operations coordinating Level I medical support across four squads, managing 2+ medical personnel and platoon aid station.
                        </p>

                        <div style="background-color: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Platoon Medical Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Platoon Medic:</strong> Senior medical NCO</li>
                                <li><strong>PAS:</strong> Platoon aid station</li>
                                <li><strong>68W:</strong> Combat medics (x2)</li>
                                <li><strong>CCP:</strong> Casualty collection points</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Medical Capabilities</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Level I:</strong> Platoon aid station</li>
                                <li><strong>First Aid:</strong> Tactical combat casualty care</li>
                                <li><strong>Triage:</strong> Casualty assessment</li>
                                <li><strong>Stabilization:</strong> Pre-evacuation treatment</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(220, 38, 38, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Evacuation Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>CASEVAC:</strong> Ground evacuation</li>
                                <li><strong>MEDEVAC:</strong> Company medical evacuation</li>
                                <li><strong>Coordination:</strong> Company medical command</li>
                                <li><strong>Patient Tracking:</strong> Manual systems</li>
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
                        min-height: 260px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #9333ea; font-size: 12px;"></i>
                            d. Tactical Planning
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Platoon-level sustainment planning coordinating four squad operations across 3-day campaign, integrating company requirements and squad support.
                        </p>

                        <div style="background-color: rgba(147, 51, 234, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Horizons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tactical (0-3 days):</strong> Platoon planning</li>
                                <li><strong>Immediate (0-12 hours):</strong> Squad coordination</li>
                                <li><strong>Current (0-6 hours):</strong> Battle rhythm</li>
                                <li><strong>Crisis (0-1 hour):</strong> Emergency response</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(76, 29, 149, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Squad Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st Squad:</strong> Tank operations</li>
                                <li><strong>2nd Squad:</strong> Tank operations</li>
                                <li><strong>3rd Squad:</strong> Tank operations</li>
                                <li><strong>4th Squad:</strong> Tank operations</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(124, 58, 237, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>FBCB2:</strong> Force battle command</li>
                                <li><strong>Hand Receipts:</strong> Property accountability</li>
                                <li><strong>Supply Requests:</strong> Company coordination</li>
                                <li><strong>Maintenance:</strong> Operator-level operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Platoon Sustainment Command Structure -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        1st Platoon, Alpha Company Sustainment Structure
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Platoon Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>PLT LDR</li>
                                <li>PLT SGT</li>
                                <li>Medic</li>
                                <li>PAS</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Squad Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>1st SQD LDR</li>
                                <li>2nd SQD LDR</li>
                                <li>3rd SQD LDR</li>
                                <li>4th SQD LDR</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Support Elements</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Medics (x2)</li>
                                <li>Mechanics (x1)</li>
                                <li>Supply (x1)</li>
                                <li>Drivers (x4)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Platoon Operational Phases -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-calendar-alt" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Platoon Sustainment Phases - Northern AO
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="color: #fca5a5; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase I: Deployment (D-1 to D+0)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Platoon deployment: 40 personnel</li>
                                    <li>Equipment movement: 0.8K STONs</li>
                                    <li>Initial stocks: 1 DOS</li>
                                    <li>Reception operations: Squad level</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase II: Employment (D+1)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Squad deployment: 4 squads operational</li>
                                    <li>Distribution network: 4 nodes active</li>
                                    <li>Medical facilities: Level I</li>
                                    <li>Sustainment stocks: 2 DOS</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase III: Operations (D+2 to D+3)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Steady-state: 48 STONs/day</li>
                                    <li>Coalition integration: None</li>
                                    <li>Host nation support: None</li>
                                    <li>Contractor support: 0%</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase IV: Transition (D+3)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Force adjustment: 0% reduction</li>
                                    <li>Equipment retrograde: 0.8K STONs</li>
                                    <li>Infrastructure handover: Company</li>
                                    <li>Lessons learned: Platoon level</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Platoon Sustainment Metrics -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-chart-line" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                        Key Platoon Sustainment Metrics
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #06b6d4; font-size: 20px; font-weight: 700; margin-bottom: 4px;">40+</div>
                            <div style="color: #d1d5db; font-size: 12px;">Total Personnel</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #10b981; font-size: 20px; font-weight: 700; margin-bottom: 4px;">48</div>
                            <div style="color: #d1d5db; font-size: 12px;">STONs/Day Capacity</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #f59e0b; font-size: 20px; font-weight: 700; margin-bottom: 4px;">4</div>
                            <div style="color: #d1d5db; font-size: 12px;">Distribution Nodes</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #ef4444; font-size: 20px; font-weight: 700; margin-bottom: 4px;">4</div>
                            <div style="color: #d1d5db; font-size: 12px;">Squad Commands</div>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div style="background-color: rgba(6, 182, 212, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #06b6d4;">
                            <h5 style="color: #67e8f9; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Logistics Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Supply availability: 87.4%</li>
                                <li>Distribution reliability: 84.2%</li>
                                <li>Transportation on-time: 81.6%</li>
                                <li>Inventory accuracy: 91.8%</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Medical Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Survival rate: 86.7%</li>
                                <li>Golden hour compliance: 62.4%</li>
                                <li>CASEVAC response: 38.7 min avg</li>
                                <li>Treatment capacity: 72.1%</li>
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
                                <li>ATP 3-20.15 (Apr 2016): Tank Platoon</li>
                                <li>ADP 3-0 (Jul 2019): Operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Supporting Publications</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>ATP 4-0.1: Army Theater Distribution</li>
                                <li>ATP 3-21.8: Infantry Platoon and Squad</li>
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
                        UNCLASSIFIED - Platoon Level Sustainment Operations per FM 5-0 and FM 4-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Platoon Sustainment Practical Examples module initialized');
        return true;
    }
};
