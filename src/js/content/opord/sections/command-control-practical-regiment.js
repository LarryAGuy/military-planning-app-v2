/**
 * Command & Control - Practical Examples - Regiment Level
 * Operation ALLIED RESOLVE - 2nd Armored Regiment Tactical Command & Control
 * Armored Regiment tactical operations implementation
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 6-02 (Sep 2019)
 * Authorization: 300-line limit waived for operational content requirements
 */

export const regimentPracticalModule = {
    id: 'regiment-practical',
    title: 'Regiment Level Practical Examples',
    classification: 'UNCLASSIFIED',

    getContent: function() {
        return `
            <!-- Regiment Level Practical Examples - Professional Military Layout -->
            <div id="regiment-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-medal" style="margin-right: 8px; color: #f59e0b; font-size: 16px;"></i>
                        5. Command & Control - Regiment Level Example
                    </h3>
                    <p style="color: #fbbf24; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Operation ALLIED RESOLVE 2nd Armored Regiment Tactical C2
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #f59e0b; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #fbbf24; margin: 0 0 8px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px; color: #f59e0b;"></i>
                        Operation ALLIED RESOLVE - 2nd Armored Regiment Command & Control Overview
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Regiment:</strong> 2nd Armored Regiment, 3rd ABCT (Colonel, O-6) | <strong>Planning Horizon:</strong> 12-48 hours | <strong>Battle Rhythm:</strong> 2-hour cycles
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Regiment Mission</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Execute OPCON from 3rd ABCT for main axis operations</li>
                                <li>Command 3x Tank/Infantry Battalions (2x Tank, 1x Mech Inf)</li>
                                <li>Conduct armored spearhead operations against peer threat</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Tactical Focus</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Main axis advance (Krakow-Katowice corridor)</li>
                                <li>Armored breakthrough operations</li>
                                <li>Combined arms coordination</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Regiment Command & Control Content Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Regiment Command Structure Card -->
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
                            a. Regiment Command Structure & Control
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            2nd Armored Regiment provides tactical-level command with OPCON from 3rd ABCT and direct control over three battalions.
                        </p>

                        <!-- Command Relationships -->
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Command Relationships</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Higher:</strong> OPCON from 3rd Armored BCT</li>
                                <li><strong>Lateral:</strong> Coordination with 1st AR, 1-16 Infantry</li>
                                <li><strong>Subordinate:</strong> OPCON to 3x Battalions</li>
                                <li><strong>Support:</strong> Forward support company, maintenance</li>
                            </ul>
                        </div>

                        <!-- Battalion Control -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion Commands</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st Battalion:</strong> Tank battalion (M1A2 Abrams)</li>
                                <li><strong>2nd Battalion:</strong> Tank battalion (M1A2 Abrams)</li>
                                <li><strong>3rd Battalion:</strong> Mechanized infantry (M2 Bradley)</li>
                            </ul>
                        </div>

                        <!-- Tactical Tempo -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Regiment Battle Rhythm</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Planning:</strong> 12-48 hour tactical cycles</li>
                                <li><strong>Assessment:</strong> 2-hour battle rhythm</li>
                                <li><strong>Coordination:</strong> Battalion commander sync</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Regiment Communications Architecture Card -->
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
                            b. Regiment Communications Architecture
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Regiment-level communications integrate Brigade networks with Battalion tactical systems for armored operations.
                        </p>

                        <!-- Regiment Networks -->
                        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Regiment Network Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>FBCB2/BFT:</strong> Blue Force Tracker systems</li>
                                <li><strong>SINCGARS:</strong> VHF-FM tactical radio</li>
                                <li><strong>EPLRS:</strong> Enhanced Position Location Reporting</li>
                            </ul>
                        </div>

                        <!-- Battalion Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Battalion Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tank Battalions:</strong> Armor tactical networks</li>
                                <li><strong>Mech Infantry:</strong> Bradley fighting vehicle systems</li>
                                <li><strong>Support Elements:</strong> Maintenance and logistics</li>
                            </ul>
                        </div>

                        <!-- Tactical Radio Systems -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Armored Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Vehicle Systems:</strong> Tank and Bradley intercom</li>
                                <li><strong>Digital Systems:</strong> FBCB2 digital integration</li>
                                <li><strong>Radio Nets:</strong> Command, fires, logistics nets</li>
                            </ul>
                        </div>

                        <!-- Regiment PACE Plan -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Regiment PACE Plan</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>P:</strong> FBCB2/BFT • <strong>A:</strong> SINCGARS • <strong>C:</strong> EPLRS • <strong>E:</strong> Visual/Messenger
                            </p>
                        </div>
                    </div>

                    <!-- Regiment Control Measures Card -->
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
                            c. Regiment Control Measures & Boundaries
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Regiment-level control measures coordinate Battalion operations along main axis with clear tactical boundaries.
                        </p>

                        <!-- Battalion Boundaries -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Battalion Boundaries & Sectors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st Battalion:</strong> Northern axis (lead element)</li>
                                <li><strong>2nd Battalion:</strong> Southern axis (supporting attack)</li>
                                <li><strong>3rd Battalion:</strong> Follow-on force (exploitation)</li>
                            </ul>
                        </div>

                        <!-- Fire Support Coordination -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Regiment Fire Support</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Direct Fires:</strong> Tank main gun coordination</li>
                                <li><strong>Indirect Fires:</strong> Mortar and artillery support</li>
                                <li><strong>CAS Integration:</strong> Close air support coordination</li>
                            </ul>
                        </div>

                        <!-- Maneuver Control -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Armored Maneuver</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Phase Lines:</strong> Armored advance control</li>
                                <li><strong>Objectives:</strong> Battalion tactical objectives</li>
                                <li><strong>Routes:</strong> Armored vehicle movement corridors</li>
                            </ul>
                        </div>

                        <!-- Armored Operations -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Armored Coordination</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Tank-infantry coordination with engineer support, fuel and ammunition resupply, and maintenance operations
                            </p>
                        </div>
                    </div>

                    <!-- Regiment Multi-Domain Operations Card -->
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
                            d. Regiment Multi-Domain Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Regiment integration of battalion operations with joint capabilities for synchronized armored effects.
                        </p>

                        <!-- Armored Operations -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Armored Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tank Operations:</strong> M1A2 Abrams coordination</li>
                                <li><strong>Mechanized Infantry:</strong> M2 Bradley integration</li>
                                <li><strong>Combined Arms:</strong> Tank-infantry team coordination</li>
                            </ul>
                        </div>

                        <!-- Air Integration -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Air Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Close air support</li>
                                    <li>Attack helicopter coordination</li>
                                    <li>Air-ground integration</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(12, 74, 110, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #0284c7;">
                                <h5 style="font-weight: 600; color: #7dd3fc; font-size: 12px; margin: 0 0 6px 0;">Fire Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Artillery coordination</li>
                                    <li>Mortar integration</li>
                                    <li>Naval gunfire support</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Information & Intelligence -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Electronic Warfare</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Regiment EW section</li>
                                    <li>Signal intelligence</li>
                                    <li>Electronic protection</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Intelligence Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Regiment intelligence section</li>
                                    <li>Battalion S2 coordination</li>
                                    <li>Tactical reconnaissance</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Tactical Integration -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Armored Integration</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment tactical operations center coordinates armored spearhead operations for breakthrough missions
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Regiment Implementation Summary -->
                <div style="background-color: rgba(59, 130, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #3b82f6;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #3b82f6;"></i>
                        Operation ALLIED RESOLVE - 2nd Armored Regiment C2 Implementation Summary
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Structure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>OPCON from 3rd ABCT</li>
                                <li>Command of 3x Battalions</li>
                                <li>Main axis operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>12-48 hour planning cycles</li>
                                <li>2-hour battle rhythm</li>
                                <li>Armored spearhead operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Multi-domain coordination</li>
                                <li>Joint operations support</li>
                                <li>Battalion tactical integration</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background-color: rgba(59, 130, 246, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Regiment Success Factors:</strong> 2nd Armored Regiment provides tactical-level command bridging Brigade guidance to Battalion execution, ensuring coordinated armored spearhead operations along main axis while maintaining multi-domain integration and joint operations support.
                        </p>
                    </div>
                </div>

            </div>
        `;
    }
};
