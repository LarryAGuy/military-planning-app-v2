/**
 * OPORD Sustainment - Brigade Level Practical Examples
 * Multi-battalion sustainment operations and coordination
 * Brigade-level logistics and support operations
 *
 * SPECIAL AUTHORIZATION: May exceed 300-line limit due to extensive operational content requirements
 */

export const brigadePracticalModule = {
    id: 'brigade-practical',
    title: 'Brigade Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Brigade Level Practical Examples - Professional Military Layout -->
            <div id="brigade-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-truck" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        4. Sustainment - Brigade Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - 1st Armored Brigade Combat Team
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: #1e3a8a; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #dbeafe; margin: 0 0 8px 0;">
                        <i class="fas fa-users" style="margin-right: 8px; color: #60a5fa;"></i>
                        Operation ALLIED RESOLVE - Brigade Sustainment Operations
                    </h4>
                    <p style="color: #bfdbfe; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Command:</strong> 1st Armored Brigade Combat Team | <strong>Sector:</strong> Northern Central Europe | <strong>Forces:</strong> 4,500+ personnel
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Subordinate Battalions</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>1-77 AR (Combined Arms Battalion)</li>
                                <li>2-77 AR (Combined Arms Battalion)</li>
                                <li>1-6 IN (Infantry Battalion)</li>
                                <li>1-1 FA (Field Artillery Battalion)</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Brigade Sustainment Scope</h5>
                            <ul style="color: #bfdbfe; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Operational reach: 100km from division nodes</li>
                                <li>Distribution network: 5 brigade nodes</li>
                                <li>Medical support: Level I-II operations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Framework Structure Preview -->
                <div style="
                    display: grid; 
                    grid-template-columns: 1fr 1fr; 
                    gap: 16px; 
                    margin-bottom: 24px;
                ">
                    <!-- Division Integration Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 320px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-link" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                            a. Division Integration
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Brigade-level integration with 1st Armored Division and corps assets, coordinating sustainment operations across four battalions in northern central sector.
                        </p>

                        <div style="background-color: rgba(96, 165, 250, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Command Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st AD:</strong> Division sustainment command</li>
                                <li><strong>DISCOM:</strong> Division support command</li>
                                <li><strong>XVIII ABC:</strong> Corps sustainment coordination</li>
                                <li><strong>1st SUST BDE:</strong> Corps support brigade</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Brigade Support Assets</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>BSB:</strong> Brigade support battalion</li>
                                <li><strong>BSMC:</strong> Brigade support medical company</li>
                                <li><strong>FSC:</strong> Forward support companies (x4)</li>
                                <li><strong>CTCP:</strong> Combat trains command post</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(59, 130, 246, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Adjacent Unit Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>2nd ABCT:</strong> Adjacent brigade boundary</li>
                                <li><strong>3rd ABCT:</strong> Adjacent brigade boundary</li>
                                <li><strong>1st CAB:</strong> Aviation support coordination</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Distribution Operations Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 320px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-truck-loading" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                            b. Distribution Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Brigade distribution network managing 5 nodes across northern central sector, coordinating 4,800 STONs daily throughput to support four battalion operations.
                        </p>

                        <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Brigade Distribution Network</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Brigade Hub:</strong> Friedberg Forward Support Area</li>
                                <li><strong>Battalion Nodes:</strong> 4 forward support companies</li>
                                <li><strong>Company Nodes:</strong> Unit maintenance collection points</li>
                                <li><strong>Capacity:</strong> 4,800 STONs daily throughput</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(20, 83, 45, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Transportation Assets</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Line Haul:</strong> 72 HET/PLS vehicles</li>
                                <li><strong>Local Haul:</strong> 144 LMTV/FMTV trucks</li>
                                <li><strong>Fuel Systems:</strong> HEMTT tankers</li>
                                <li><strong>Maintenance:</strong> M88A2 recovery vehicles</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(34, 197, 94, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #22c55e;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Supply Management</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>GCSS-Army:</strong> Brigade logistics system</li>
                                <li><strong>SARSS:</strong> Standard Army Retail Supply</li>
                                <li><strong>ULLS:</strong> Unit Level Logistics System</li>
                                <li><strong>SAMS:</strong> Standard Army Maintenance System</li>
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
                        min-height: 320px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-notes-medical" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                            c. Medical Support Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Brigade medical operations coordinating Level I-II medical support across four battalions, managing 680+ medical personnel and 2 medical facilities.
                        </p>

                        <div style="background-color: rgba(248, 113, 113, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Brigade Medical Command</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st ABCT Surgeon:</strong> Brigade medical authority</li>
                                <li><strong>BSMC:</strong> Brigade support medical company</li>
                                <li><strong>BAS:</strong> Battalion aid stations (x4)</li>
                                <li><strong>CCP:</strong> Casualty collection points</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(127, 29, 29, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Medical Facilities</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Level I:</strong> 4 battalion aid stations</li>
                                <li><strong>Level I+:</strong> 1 brigade support medical company</li>
                                <li><strong>Company Aid:</strong> 12 company medics</li>
                                <li><strong>Specialty Care:</strong> Dental, veterinary support</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(220, 38, 38, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #ef4444;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Evacuation Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>MEDEVAC:</strong> 2 UH-60M aircraft</li>
                                <li><strong>CASEVAC:</strong> Ground ambulance sections</li>
                                <li><strong>Coordination:</strong> Division medical command</li>
                                <li><strong>Patient Tracking:</strong> TRAC2ES system</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Brigade Planning Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 320px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #9333ea; font-size: 12px;"></i>
                            d. Brigade Planning
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Brigade-level sustainment planning coordinating four battalion operations across 30-day campaign, integrating division requirements and battalion support.
                        </p>

                        <div style="background-color: rgba(147, 51, 234, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Horizons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Operational (7-30 days):</strong> Brigade planning</li>
                                <li><strong>Tactical (1-7 days):</strong> Battalion coordination</li>
                                <li><strong>Immediate (0-24 hours):</strong> Battle rhythm</li>
                                <li><strong>Crisis (0-6 hours):</strong> Emergency response</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(76, 29, 149, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Battalion Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1-77 AR:</strong> Combined arms operations</li>
                                <li><strong>2-77 AR:</strong> Combined arms operations</li>
                                <li><strong>1-6 IN:</strong> Infantry operations</li>
                                <li><strong>1-1 FA:</strong> Field artillery operations</li>
                            </ul>
                        </div>

                        <div style="background-color: rgba(124, 58, 237, 0.15); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>CPOF:</strong> Command post operations</li>
                                <li><strong>FBCB2:</strong> Force battle command</li>
                                <li><strong>BCS3:</strong> Battle command sustainment</li>
                                <li><strong>GCSS-Army:</strong> Logistics planning</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Brigade Sustainment Command Structure -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        1st ABCT Sustainment Command Structure
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b;">
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Brigade Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>1st ABCT S4</li>
                                <li>BSB</li>
                                <li>BSMC</li>
                                <li>CTCP</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Battalion Level</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>1-77 AR S4</li>
                                <li>2-77 AR S4</li>
                                <li>1-6 IN S4</li>
                                <li>1-1 FA S4</li>
                            </ul>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Support Units</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>FSC (x4)</li>
                                <li>BAS (x4)</li>
                                <li>BSMC (x1)</li>
                                <li>BSB (x1)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Brigade Operational Phases -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-calendar-alt" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Brigade Sustainment Phases - Northern Central Sector
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #ef4444; margin-bottom: 12px;">
                                <h5 style="color: #fca5a5; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase I: Deployment (D-3 to D+2)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Brigade deployment: 4,500 personnel</li>
                                    <li>Equipment movement: 72K STONs</li>
                                    <li>Initial stocks: 5 DOS</li>
                                    <li>Reception operations: 1 aerial port</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase II: Employment (D+3 to D+10)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Battalion deployment: 4 battalions operational</li>
                                    <li>Distribution network: 5 nodes active</li>
                                    <li>Medical facilities: Level I-II</li>
                                    <li>Sustainment stocks: 10 DOS</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase III: Operations (D+11 to D+25)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Steady-state: 4.8K STONs/day</li>
                                    <li>Coalition integration: 2 nations</li>
                                    <li>Host nation support: Limited</li>
                                    <li>Contractor support: 10%</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                                <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Phase IV: Transition (D+26 to D+30)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Force adjustment: 15% reduction</li>
                                    <li>Equipment retrograde: 61K STONs</li>
                                    <li>Infrastructure handover: Division</li>
                                    <li>Lessons learned: Brigade level</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Brigade Sustainment Metrics -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-chart-line" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                        Key Brigade Sustainment Metrics
                    </h4>

                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #06b6d4; font-size: 20px; font-weight: 700; margin-bottom: 4px;">4,500+</div>
                            <div style="color: #d1d5db; font-size: 12px;">Total Personnel</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #10b981; font-size: 20px; font-weight: 700; margin-bottom: 4px;">4.8K</div>
                            <div style="color: #d1d5db; font-size: 12px;">STONs/Day Capacity</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #f59e0b; font-size: 20px; font-weight: 700; margin-bottom: 4px;">5</div>
                            <div style="color: #d1d5db; font-size: 12px;">Distribution Nodes</div>
                        </div>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; text-align: center;">
                            <div style="color: #ef4444; font-size: 20px; font-weight: 700; margin-bottom: 4px;">4</div>
                            <div style="color: #d1d5db; font-size: 12px;">Battalion Commands</div>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div style="background-color: rgba(6, 182, 212, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #06b6d4;">
                            <h5 style="color: #67e8f9; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Logistics Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Supply availability: 94.2%</li>
                                <li>Distribution reliability: 91.8%</li>
                                <li>Transportation on-time: 88.5%</li>
                                <li>Inventory accuracy: 96.7%</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981;">
                            <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Medical Performance</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Survival rate: 94.1%</li>
                                <li>Golden hour compliance: 79.6%</li>
                                <li>MEDEVAC response: 22.7 min avg</li>
                                <li>Bed utilization: 68.4%</li>
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
                                <li>ATP 3-91.1: The Armored Brigade Combat Team</li>
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
                        UNCLASSIFIED - Brigade Level Sustainment Operations per FM 5-0 and FM 4-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Brigade Sustainment Practical Examples module initialized');
        return true;
    }
};
