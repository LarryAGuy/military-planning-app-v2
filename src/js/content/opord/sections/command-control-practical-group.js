/**
 * Command & Control - Practical Examples - Group Level
 * Operation ALLIED RESOLVE - 10th Special Forces Group Tactical Command & Control
 * Special Operations Group tactical operations implementation
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 6-02 (Sep 2019)
 * Authorization: 300-line limit waived for operational content requirements
 */

export const groupPracticalModule = {
    id: 'group-practical',
    title: 'Group Level Practical Examples',
    classification: 'UNCLASSIFIED',

    getContent: function() {
        return `
            <!-- Group Level Practical Examples - Professional Military Layout -->
            <div id="group-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-layer-group" style="margin-right: 8px; color: #f59e0b; font-size: 16px;"></i>
                        5. Command & Control - Group Level Example
                    </h3>
                    <p style="color: #fbbf24; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Operation ALLIED RESOLVE 10th Special Forces Group Tactical C2
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #f59e0b; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #fbbf24; margin: 0 0 8px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px; color: #f59e0b;"></i>
                        Operation ALLIED RESOLVE - 10th Special Forces Group Command & Control Overview
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Group:</strong> 10th Special Forces Group (Airborne) (Colonel, O-6) | <strong>Planning Horizon:</strong> Flexible mission-based | <strong>Battle Rhythm:</strong> Mission-dependent cycles
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Group Mission</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Execute OPCON from SOCEUR for special operations</li>
                                <li>Command 4x Special Forces Battalions across AOR</li>
                                <li>Conduct unconventional warfare and direct action</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Operational Focus</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Eastern European special operations</li>
                                <li>Partner force development and training</li>
                                <li>Strategic reconnaissance and direct action</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Group Command & Control Content Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Group Command Structure Card -->
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
                            a. Group Command Structure & Control
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            10th Special Forces Group provides tactical-level command with OPCON from SOCEUR and direct control over four SF battalions.
                        </p>

                        <!-- Command Relationships -->
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Command Relationships</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Higher:</strong> OPCON from SOCEUR (Special Operations)</li>
                                <li><strong>Lateral:</strong> Coordination with 1st SFG, 5th SFG</li>
                                <li><strong>Subordinate:</strong> OPCON to 4x SF Battalions</li>
                                <li><strong>Support:</strong> Group support battalion, aviation</li>
                            </ul>
                        </div>

                        <!-- Battalion Control -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Special Forces Battalions</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st Battalion:</strong> Eastern Europe operations</li>
                                <li><strong>2nd Battalion:</strong> Central Europe operations</li>
                                <li><strong>3rd Battalion:</strong> Western Europe operations</li>
                                <li><strong>4th Battalion:</strong> Reserve/training operations</li>
                            </ul>
                        </div>

                        <!-- Operational Tempo -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Group Battle Rhythm</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Planning:</strong> Mission-dependent cycles</li>
                                <li><strong>Assessment:</strong> Continuous operations</li>
                                <li><strong>Coordination:</strong> Battalion commander sync</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Group Communications Architecture Card -->
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
                            b. Group Communications Architecture
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Group-level communications integrate SOCEUR networks with Battalion special operations systems for global reach.
                        </p>

                        <!-- Group Networks -->
                        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Special Operations Networks</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>SONET:</strong> Special Operations Network</li>
                                <li><strong>SATCOM:</strong> Global satellite communications</li>
                                <li><strong>Secure Voice:</strong> Encrypted voice communications</li>
                            </ul>
                        </div>

                        <!-- Battalion Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Battalion Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>SF Battalions:</strong> Special operations networks</li>
                                <li><strong>ODA Teams:</strong> Operational Detachment Alpha comms</li>
                                <li><strong>Support Elements:</strong> Aviation and logistics</li>
                            </ul>
                        </div>

                        <!-- Special Operations Communications -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>HF Radio:</strong> Long-range communications</li>
                                <li><strong>UHF/VHF:</strong> Tactical radio systems</li>
                                <li><strong>Digital Systems:</strong> Secure data transmission</li>
                            </ul>
                        </div>

                        <!-- Group PACE Plan -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Group PACE Plan</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>P:</strong> SONET/SATCOM • <strong>A:</strong> HF Radio • <strong>C:</strong> UHF/VHF • <strong>E:</strong> Burst/Messenger
                            </p>
                        </div>
                    </div>

                    <!-- Group Control Measures Card -->
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
                            c. Group Control Measures & Areas
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Group-level control measures coordinate Battalion operations across European AOR with flexible boundaries.
                        </p>

                        <!-- Battalion Areas -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Battalion Areas of Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>1st Battalion:</strong> Poland, Baltic States operations</li>
                                <li><strong>2nd Battalion:</strong> Germany, Czech Republic operations</li>
                                <li><strong>3rd Battalion:</strong> France, Benelux operations</li>
                                <li><strong>4th Battalion:</strong> Training and reserve operations</li>
                            </ul>
                        </div>

                        <!-- Special Operations Coordination -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Special Operations Support</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Fire Support:</strong> Precision strike coordination</li>
                                <li><strong>Air Support:</strong> Special operations aviation</li>
                                <li><strong>ISR Support:</strong> Intelligence, surveillance, reconnaissance</li>
                            </ul>
                        </div>

                        <!-- Mission Control -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Mission Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Mission Areas:</strong> Flexible operational boundaries</li>
                                <li><strong>Objectives:</strong> Strategic and tactical targets</li>
                                <li><strong>Coordination:</strong> Host nation and partner forces</li>
                            </ul>
                        </div>

                        <!-- Special Operations Integration -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">SOF Integration</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Partner force development, unconventional warfare, and direct action coordination with conventional forces
                            </p>
                        </div>
                    </div>

                    <!-- Group Multi-Domain Operations Card -->
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
                            d. Group Multi-Domain Operations
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Group integration of battalion operations with joint capabilities for synchronized special operations effects.
                        </p>

                        <!-- Special Operations -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Special Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Unconventional Warfare:</strong> Partner force development</li>
                                <li><strong>Direct Action:</strong> Precision strike operations</li>
                                <li><strong>Special Reconnaissance:</strong> Strategic intelligence collection</li>
                            </ul>
                        </div>

                        <!-- Air Integration -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Aviation Support</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Special operations aviation</li>
                                    <li>Infiltration/exfiltration</li>
                                    <li>Air mobility operations</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(12, 74, 110, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #0284c7;">
                                <h5 style="font-weight: 600; color: #7dd3fc; font-size: 12px; margin: 0 0 6px 0;">Precision Fires</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Precision guided munitions</li>
                                    <li>Close air support</li>
                                    <li>Strategic strike coordination</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Information & Intelligence -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Information Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Psychological operations</li>
                                    <li>Civil affairs operations</li>
                                    <li>Information warfare</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Intelligence Operations</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Human intelligence collection</li>
                                    <li>Strategic reconnaissance</li>
                                    <li>Counterintelligence operations</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Special Operations Integration -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">SOF Integration</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Group tactical operations center coordinates special operations for strategic effects and conventional force integration
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Group Implementation Summary -->
                <div style="background-color: rgba(59, 130, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #3b82f6;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #3b82f6;"></i>
                        Operation ALLIED RESOLVE - 10th Special Forces Group C2 Implementation Summary
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Structure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>OPCON from SOCEUR</li>
                                <li>Command of 4x SF Battalions</li>
                                <li>European AOR operations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Operations</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Mission-dependent planning</li>
                                <li>Continuous operations</li>
                                <li>Special operations missions</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Integration</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Multi-domain coordination</li>
                                <li>Joint operations support</li>
                                <li>Partner force integration</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background-color: rgba(59, 130, 246, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Group Success Factors:</strong> 10th Special Forces Group provides tactical-level command bridging SOCEUR guidance to Battalion execution, ensuring coordinated special operations across European AOR while maintaining multi-domain integration and partner force development.
                        </p>
                    </div>
                </div>

            </div>
        `;
    }
};
