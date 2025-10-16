/**
 * Command & Control - Practical Examples - Company Level
 * Operation ALLIED RESOLVE - A Company Tank Company Tactical Command & Control
 * Tank Company tactical operations implementation
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (Jul 2019, C1 2023), FM 6-02 (Oct 2020)
 * Authorization: 300-line limit waived for tactical content requirements
 */

export const companyPracticalModule = {
    id: 'company-practical',
    title: 'Company Level Practical Examples',
    classification: 'UNCLASSIFIED',

    getContent: function() {
        return `
            <!-- Company Level Practical Examples - Professional Military Layout -->
            <div id="company-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-user-friends" style="margin-right: 8px; color: #f59e0b; font-size: 16px;"></i>
                        5. Command & Control - Company Level Example
                    </h3>
                    <p style="color: #fbbf24; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Operation ALLIED RESOLVE A Company Tank Company Tactical C2
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #f59e0b; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #fbbf24; margin: 0 0 8px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px; color: #f59e0b;"></i>
                        Operation ALLIED RESOLVE - A Company Tank Company Command & Control Overview
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Company:</strong> A Company, 1st CAB (Captain, O-3) | <strong>Planning Horizon:</strong> 2-12 hours | <strong>Battle Rhythm:</strong> 30-minute cycles
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Company Mission</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Execute OPCON from 1st CAB for right sector operations</li>
                                <li>Command 3x Tank Platoons (14x M1A2 Abrams tanks)</li>
                                <li>Conduct tank assault operations as lead element</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Tactical Mission</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Right sector advance (lead company)</li>
                                <li>Tank-on-tank engagement operations</li>
                                <li>Objective seizure and overwatch</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Company Command & Control Content Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Company Command Structure Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                            a. Company Command Structure & Control
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            A Company Tank Company provides tactical-level command with OPCON from 1st CAB and direct control over three tank platoons.
                        </p>

                        <!-- Command Relationships -->
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Command Relationships</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Higher:</strong> OPCON from 1st Combined Arms Battalion</li>
                                <li><strong>Lateral:</strong> Coordination with B Company, C Company</li>
                                <li><strong>Subordinate:</strong> OPCON to 3x Tank Platoons</li>
                                <li><strong>Support:</strong> Maintenance team, medic attachment</li>
                            </ul>
                        </div>

                        <!-- Platoon Control -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Tank Platoons</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st Platoon:</strong> 4x M1A2 Abrams (lead element)</li>
                                <li><strong>2nd Platoon:</strong> 4x M1A2 Abrams (support element)</li>
                                <li><strong>3rd Platoon:</strong> 4x M1A2 Abrams (reserve element)</li>
                                <li><strong>HQ Section:</strong> 2x M1A2 Abrams (command tanks)</li>
                            </ul>
                        </div>

                        <!-- Tactical Tempo -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Company Battle Rhythm</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Planning:</strong> 2-12 hour tactical cycles</li>
                                <li><strong>Assessment:</strong> 30-minute battle rhythm</li>
                                <li><strong>Coordination:</strong> Platoon leader sync</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Company Communications Architecture Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                            b. Company Communications Architecture
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Company-level communications integrate Battalion networks with Platoon tactical systems for tank operations.
                        </p>

                        <!-- Company Networks -->
                        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Company Network Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>FBCB2/BFT:</strong> Blue Force Tracker systems</li>
                                <li><strong>SINCGARS:</strong> VHF-FM tactical radio</li>
                                <li><strong>Tank Intercom:</strong> Vehicle internal communications</li>
                            </ul>
                        </div>

                        <!-- Platoon Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Platoon Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tank Platoons:</strong> Armor tactical networks</li>
                                <li><strong>Platoon Nets:</strong> Internal platoon coordination</li>
                                <li><strong>Tank Crews:</strong> Vehicle crew communications</li>
                            </ul>
                        </div>

                        <!-- Tactical Radio Systems -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tank Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Company Net:</strong> Company command frequency</li>
                                <li><strong>Platoon Nets:</strong> Platoon tactical frequencies</li>
                                <li><strong>Battalion Net:</strong> Higher headquarters coordination</li>
                            </ul>
                        </div>

                        <!-- Company PACE Plan -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Company PACE Plan</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>P:</strong> FBCB2/BFT • <strong>A:</strong> SINCGARS • <strong>C:</strong> Tank Intercom • <strong>E:</strong> Visual/Hand Signals
                            </p>
                        </div>
                    </div>

                    <!-- Company Control Measures Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                            c. Company Control Measures & Boundaries
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Company-level control measures coordinate Platoon operations in right sector with clear tactical boundaries.
                        </p>

                        <!-- Platoon Boundaries -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Platoon Boundaries & Sectors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st Platoon:</strong> Right sector (lead element)</li>
                                <li><strong>2nd Platoon:</strong> Left sector (support element)</li>
                                <li><strong>3rd Platoon:</strong> Reserve sector (follow-on force)</li>
                                <li><strong>HQ Section:</strong> Command and control position</li>
                            </ul>
                        </div>

                        <!-- Fire Support Coordination -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Company Fire Support</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Direct Fires:</strong> Tank main gun engagement</li>
                                <li><strong>Indirect Fires:</strong> Mortar support requests</li>
                                <li><strong>CAS Integration:</strong> Close air support coordination</li>
                            </ul>
                        </div>

                        <!-- Maneuver Control -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tank Maneuver</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Phase Lines:</strong> Platoon advance control</li>
                                <li><strong>Objectives:</strong> Platoon tactical objectives</li>
                                <li><strong>Routes:</strong> Tank movement corridors</li>
                            </ul>
                        </div>

                        <!-- Tank Operations -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Tank Coordination</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Tank platoon coordination with maintenance support, fuel and ammunition resupply, and medical evacuation
                            </p>
                        </div>
                    </div>

                    <!-- Company Multi-Domain Operations Card -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                            <i class="fas fa-layer-group" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                            d. Company Multi-Domain Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Company integration of platoon operations with joint capabilities for synchronized tank effects.
                        </p>

                        <!-- Tank Operations -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Tank Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tank Gunnery:</strong> M1A2 Abrams main gun operations</li>
                                <li><strong>Tank Movement:</strong> Tactical movement and positioning</li>
                                <li><strong>Tank Maintenance:</strong> Field maintenance operations</li>
                            </ul>
                        </div>

                        <!-- Air Integration -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Air Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Close air support</li>
                                    <li>Attack helicopter coordination</li>
                                    <li>Medical evacuation</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(12, 74, 110, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #0284c7;">
                                <h5 style="font-weight: 600; color: #7dd3fc; font-size: 12px; margin: 0 0 6px 0;">Fire Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Tank main gun fires</li>
                                    <li>Mortar support coordination</li>
                                    <li>Artillery support requests</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Information & Intelligence -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Electronic Warfare</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Company EW section</li>
                                    <li>Signal intelligence</li>
                                    <li>Electronic protection</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Intelligence Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Company reconnaissance</li>
                                    <li>Platoon observation posts</li>
                                    <li>Tank crew reporting</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Tactical Integration -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Tank Integration</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Company tactical operations center coordinates tank operations for platoon-level tactical execution
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Company Implementation Summary -->
                <div style="background-color: rgba(59, 130, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #3b82f6;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #3b82f6;"></i>
                        Operation ALLIED RESOLVE - A Company Tank Company C2 Implementation Summary
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Structure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>OPCON from 1st CAB</li>
                                <li>Command of 3x Tank Platoons</li>
                                <li>Right sector operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>2-12 hour planning cycles</li>
                                <li>30-minute battle rhythm</li>
                                <li>Tank assault operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Multi-domain coordination</li>
                                <li>Joint operations support</li>
                                <li>Platoon tactical integration</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background-color: rgba(59, 130, 246, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Company Success Factors:</strong> A Company Tank Company provides tactical-level command bridging Battalion guidance to Platoon execution, ensuring coordinated tank operations in right sector while maintaining multi-domain integration and joint operations support.
                        </p>
                    </div>
                </div>

            </div>
        `;
    }
};
