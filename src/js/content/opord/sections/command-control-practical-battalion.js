/**
 * Command & Control - Practical Examples - Battalion Level
 * Operation ALLIED RESOLVE - 1st Combined Arms Battalion Tactical Command & Control
 * Combined Arms Battalion tactical operations implementation
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (Jul 2019, C1 2023), FM 6-02 (Oct 2020)
 * Authorization: 300-line limit waived for tactical content requirements
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
                        <i class="fas fa-flag" style="margin-right: 8px; color: #f59e0b; font-size: 16px;"></i>
                        5. Command & Control - Battalion Level Example
                    </h3>
                    <p style="color: #fbbf24; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Operation ALLIED RESOLVE 1st Combined Arms Battalion Tactical C2
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #f59e0b; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #fbbf24; margin: 0 0 8px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px; color: #f59e0b;"></i>
                        Operation ALLIED RESOLVE - 1st Combined Arms Battalion Command & Control Overview
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Battalion:</strong> 1st Combined Arms Battalion, 2nd AR (Lieutenant Colonel, O-5) | <strong>Planning Horizon:</strong> 6-24 hours | <strong>Battle Rhythm:</strong> 1-hour cycles
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Battalion Mission</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Execute OPCON from 2nd AR for northern axis operations</li>
                                <li>Command 4x Companies (2x Tank, 1x Mech Inf, 1x HHC)</li>
                                <li>Conduct combined arms assault operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Tactical Mission</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Northern axis advance (lead battalion)</li>
                                <li>Combined arms breach operations</li>
                                <li>Objective seizure and consolidation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Battalion Command & Control Content Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Battalion Command Structure Card -->
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
                            a. Battalion Command Structure & Control
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            1st Combined Arms Battalion provides tactical-level command with OPCON from 2nd AR and direct control over four companies.
                        </p>

                        <!-- Command Relationships -->
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Command Relationships</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Higher:</strong> OPCON from 2nd Armored Regiment</li>
                                <li><strong>Lateral:</strong> Coordination with 2nd CAB, 3rd CAB</li>
                                <li><strong>Subordinate:</strong> OPCON to 4x Companies</li>
                                <li><strong>Support:</strong> Forward support company, maintenance</li>
                            </ul>
                        </div>

                        <!-- Company Control -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Company Commands</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>A Company:</strong> Tank company (M1A2 Abrams)</li>
                                <li><strong>B Company:</strong> Tank company (M1A2 Abrams)</li>
                                <li><strong>C Company:</strong> Mechanized infantry (M2 Bradley)</li>
                                <li><strong>HHC:</strong> Headquarters and headquarters company</li>
                            </ul>
                        </div>

                        <!-- Tactical Tempo -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Battalion Battle Rhythm</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Planning:</strong> 6-24 hour tactical cycles</li>
                                <li><strong>Assessment:</strong> 1-hour battle rhythm</li>
                                <li><strong>Coordination:</strong> Company commander sync</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Battalion Communications Architecture Card -->
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
                            b. Battalion Communications Architecture
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion-level communications integrate Regiment networks with Company tactical systems for combined arms operations.
                        </p>

                        <!-- Battalion Networks -->
                        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Battalion Network Systems</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>FBCB2/BFT:</strong> Blue Force Tracker systems</li>
                                <li><strong>SINCGARS:</strong> VHF-FM tactical radio</li>
                                <li><strong>EPLRS:</strong> Enhanced Position Location Reporting</li>
                            </ul>
                        </div>

                        <!-- Company Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Company Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tank Companies:</strong> Armor tactical networks</li>
                                <li><strong>Mech Infantry:</strong> Bradley fighting vehicle systems</li>
                                <li><strong>HHC:</strong> Command post and support systems</li>
                            </ul>
                        </div>

                        <!-- Tactical Radio Systems -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Command Net:</strong> Battalion command frequency</li>
                                <li><strong>Fires Net:</strong> Fire support coordination</li>
                                <li><strong>Logistics Net:</strong> Sustainment coordination</li>
                            </ul>
                        </div>

                        <!-- Battalion PACE Plan -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Battalion PACE Plan</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>P:</strong> FBCB2/BFT • <strong>A:</strong> SINCGARS • <strong>C:</strong> EPLRS • <strong>E:</strong> Visual/Messenger
                            </p>
                        </div>
                    </div>

                    <!-- Battalion Control Measures Card -->
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
                            c. Battalion Control Measures & Boundaries
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion-level control measures coordinate Company operations along northern axis with clear tactical boundaries.
                        </p>

                        <!-- Company Boundaries -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Company Boundaries & Sectors</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>A Company:</strong> Right sector (tank lead)</li>
                                <li><strong>B Company:</strong> Left sector (tank support)</li>
                                <li><strong>C Company:</strong> Follow-on force (mech infantry)</li>
                                <li><strong>HHC:</strong> Command post and support operations</li>
                            </ul>
                        </div>

                        <!-- Fire Support Coordination -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Battalion Fire Support</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Direct Fires:</strong> Tank main gun coordination</li>
                                <li><strong>Indirect Fires:</strong> Mortar platoon support</li>
                                <li><strong>CAS Integration:</strong> Close air support requests</li>
                            </ul>
                        </div>

                        <!-- Maneuver Control -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Maneuver</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Phase Lines:</strong> Company advance control</li>
                                <li><strong>Objectives:</strong> Company tactical objectives</li>
                                <li><strong>Routes:</strong> Company movement corridors</li>
                            </ul>
                        </div>

                        <!-- Combined Arms Coordination -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Combined Arms Integration</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Tank-infantry coordination with engineer support, medical evacuation, and maintenance operations
                            </p>
                        </div>
                    </div>

                    <!-- Battalion Multi-Domain Operations Card -->
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
                            d. Battalion Multi-Domain Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Battalion integration of company operations with joint capabilities for synchronized tactical effects.
                        </p>

                        <!-- Combined Arms Operations -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Combined Arms Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Tank-Infantry Teams:</strong> Combined arms coordination</li>
                                <li><strong>Fire Support:</strong> Mortar and artillery integration</li>
                                <li><strong>Engineer Support:</strong> Mobility and breach operations</li>
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
                                    <li>Mortar platoon fires</li>
                                    <li>Artillery coordination</li>
                                    <li>Naval gunfire support</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Information & Intelligence -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Electronic Warfare</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Battalion EW section</li>
                                    <li>Signal intelligence</li>
                                    <li>Electronic protection</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Intelligence Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Battalion intelligence section</li>
                                    <li>Company reconnaissance</li>
                                    <li>Tactical intelligence fusion</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Tactical Integration -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Tactical Integration</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion tactical operations center coordinates combined arms operations for company-level tactical execution
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Battalion Implementation Summary -->
                <div style="background-color: rgba(59, 130, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #3b82f6;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #3b82f6;"></i>
                        Operation ALLIED RESOLVE - 1st Combined Arms Battalion C2 Implementation Summary
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Structure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>OPCON from 2nd AR</li>
                                <li>Command of 4x Companies</li>
                                <li>Northern axis operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>6-24 hour planning cycles</li>
                                <li>1-hour battle rhythm</li>
                                <li>Combined arms operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Multi-domain coordination</li>
                                <li>Joint operations support</li>
                                <li>Company tactical integration</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background-color: rgba(59, 130, 246, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Battalion Success Factors:</strong> 1st Combined Arms Battalion provides tactical-level command bridging Regiment guidance to Company execution, ensuring coordinated combined arms operations along northern axis while maintaining multi-domain integration and joint operations support.
                        </p>
                    </div>
                </div>

            </div>
        `;
    }
};
