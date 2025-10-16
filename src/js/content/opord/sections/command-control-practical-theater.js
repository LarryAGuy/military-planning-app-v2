/**
 * Command & Control - Practical Examples - Theater Level
 * Operation ALLIED RESOLVE - Strategic Command & Control Implementation
 * Comprehensive theater-level C2 with hierarchical scaffolding
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 6-02 (Sep 2019)
 * Authorization: 300-line limit waived for strategic content requirements
 */

export const theaterPracticalModule = {
    id: 'theater-practical',
    title: 'Theater Level Practical Examples',
    classification: 'UNCLASSIFIED',

    getContent: function() {
        return `
            <!-- Theater Level Practical Examples - Professional Military Layout -->
            <div id="theater-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-satellite-dish" style="margin-right: 8px; color: #f59e0b; font-size: 16px;"></i>
                        5. Command & Control - Theater Level Example
                    </h3>
                    <p style="color: #fbbf24; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Operation ALLIED RESOLVE Strategic C2 Implementation
                    </p>
                </div>

                <!-- Operation Context -->
                <div style="background-color: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #f59e0b; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #fbbf24; margin: 0 0 8px 0;">
                        <i class="fas fa-globe-americas" style="margin-right: 8px; color: #f59e0b;"></i>
                        Operation ALLIED RESOLVE - Theater Command & Control Overview
                    </h4>
                    <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 12px 0;">
                        <strong>Theater:</strong> U.S. European Command (USEUCOM) | <strong>Duration:</strong> 180 days | <strong>Coalition:</strong> 28 NATO nations
                    </p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px;">
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Strategic Mission</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Multi-domain operations to deter aggression</li>
                                <li>Defend NATO territory and maintain stability</li>
                                <li>Integrate joint, interagency, multinational capabilities</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Structure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Theater Strategic Command (USEUCOM)</li>
                                <li>Service Component Commands (6 components)</li>
                                <li>Hierarchical scaffolding: Theater → Brigade</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Theater Command & Control Content Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    margin-bottom: 24px;
                ">
                    <!-- Hierarchical Command Structure Card -->
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
                            a. Hierarchical Command Structure
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Theater-to-Brigade command scaffolding with clear authorities, span of control, and battle rhythms across five echelon levels.
                        </p>

                        <!-- Theater Level -->
                        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">THEATER - USEUCOM (4-Star)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Authority:</strong> COCOM over all forces, OPCON delegation</li>
                                <li><strong>Span:</strong> 6 Service Components, NATO coordination</li>
                                <li><strong>Rhythm:</strong> 72-hour strategic assessment cycle</li>
                            </ul>
                        </div>

                        <!-- Army Level -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">ARMY - USAREUR-AF (3-Star)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Command:</strong> OPCON from USEUCOM to 2x Corps</li>
                                <li><strong>Planning:</strong> 30-90 day operational horizon</li>
                            </ul>
                        </div>

                        <!-- Corps Level -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">CORPS - V Corps (3-Star)</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Control:</strong> 3x Divisions, 14-30 day operations</li>
                                <li><strong>Rhythm:</strong> 12-hour battle rhythm cycles</li>
                            </ul>
                        </div>

                        <!-- Division & Brigade -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">DIVISION/BRIGADE</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Division:</strong> 4x BCTs, 3-14 day planning, 6-hour cycles</li>
                                <li><strong>Brigade:</strong> 3x Battalions, 24-72 hour planning</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Theater Communications Architecture Card -->
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
                            b. Theater Communications Architecture
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Multi-domain communications integration with strategic networks, coalition systems, and comprehensive PACE planning.
                        </p>

                        <!-- Strategic Networks -->
                        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Strategic Networks</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>SIPR/NIPR:</strong> SECRET/UNCLASSIFIED operations</li>
                                <li><strong>JWICS:</strong> TOP SECRET strategic intelligence</li>
                                <li><strong>Cross-Domain:</strong> Secure information transfer</li>
                            </ul>
                        </div>

                        <!-- SATCOM Systems -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">SATCOM Architecture</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>DSCS:</strong> Defense Satellite Communications</li>
                                <li><strong>WGS:</strong> Wideband Global SATCOM</li>
                                <li><strong>AEHF:</strong> Advanced EHF protected comms</li>
                            </ul>
                        </div>

                        <!-- Coalition Integration -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Coalition Networks</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>BICES:</strong> NATO battlefield information system</li>
                                <li><strong>CENTRIXS:</strong> Coalition information exchange</li>
                                <li><strong>MPE:</strong> Mission partner environment</li>
                            </ul>
                        </div>

                        <!-- PACE Plan -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Theater PACE Plan</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>P:</strong> SIPR/NIPR • <strong>A:</strong> WGS SATCOM • <strong>C:</strong> AEHF protected • <strong>E:</strong> HF radio
                            </p>
                        </div>
                    </div>

                    <!-- Strategic Control Measures Card -->
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
                            c. Strategic Control Measures
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Theater boundaries, airspace control, fire support coordination, and strategic control measures across 51-country AOR.
                        </p>

                        <!-- Geographic Boundaries -->
                        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Geographic Boundaries</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>USEUCOM AOR:</strong> 51 countries, Europe/Eurasia</li>
                                <li><strong>JOA:</strong> Eastern European operational focus</li>
                                <li><strong>Corps Boundaries:</strong> V Corps (East), VII Corps (West)</li>
                            </ul>
                        </div>

                        <!-- Airspace Control -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Airspace Control</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>TACA:</strong> USAFE-AFAFRICA coordination</li>
                                <li><strong>ADIZ:</strong> NATO integrated air defense</li>
                                <li><strong>ROZ:</strong> Air/ground fires deconfliction</li>
                            </ul>
                        </div>

                        <!-- Fire Support Coordination -->
                        <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Fire Support Coordination</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>Joint Fires:</strong> Land, air, naval, space, cyber</li>
                                <li><strong>Strategic Targets:</strong> Theater-level approval</li>
                                <li><strong>Coalition Fires:</strong> Multinational coordination</li>
                            </ul>
                        </div>

                        <!-- Restrictions -->
                        <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">No-Fire Areas & Restrictions</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Cultural sites, civilian infrastructure, coalition forces, political restrictions per national caveats
                            </p>
                        </div>
                    </div>

                    <!-- Multi-Domain Operations Card -->
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
                            d. Multi-Domain Operations Coordination
                        </h4>
                        <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                            Integration of land, air, maritime, space, and cyber domains for unified theater operations and strategic effects.
                        </p>

                        <!-- Land & Air Domains -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Land Domain</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Ground forces & long-range fires</li>
                                    <li>Air defense & electronic warfare</li>
                                    <li>Theater sustainment operations</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(59, 130, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Air Domain</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Air superiority & strategic strike</li>
                                    <li>Air mobility & ISR operations</li>
                                    <li>Integrated theater air defense</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Maritime & Space Domains -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 12px;">
                            <div style="background-color: rgba(12, 74, 110, 0.3); padding: 10px; border-radius: 6px; border: 1px solid #0284c7;">
                                <h5 style="font-weight: 600; color: #7dd3fc; font-size: 12px; margin: 0 0 6px 0;">Maritime Domain</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Naval forces & submarine ops</li>
                                    <li>Maritime strike & sea control</li>
                                    <li>Amphibious operations</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Space Domain</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>SATCOM & navigation systems</li>
                                    <li>ISR & missile warning</li>
                                    <li>Space control operations</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Cyber Domain -->
                        <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626;">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Cyber Domain</h5>
                            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                Defensive/offensive cyber operations, information operations, electronic warfare, cyber threat intelligence
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Theater Battle Rhythm & Decision Cycles -->
                <div style="background-color: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #f59e0b; margin-bottom: 24px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #fbbf24; margin: 0 0 12px 0;">
                        <i class="fas fa-clock" style="margin-right: 8px; color: #f59e0b;"></i>
                        Theater Battle Rhythm & Strategic Decision Cycles
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <h5 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">72-Hour Strategic Cycle</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>H+00:</strong> Strategic assessment, intelligence fusion</li>
                                <li><strong>H+12:</strong> Joint planning group assessment</li>
                                <li><strong>H+24:</strong> Strategic guidance dissemination</li>
                                <li><strong>H+48:</strong> Component feedback integration</li>
                                <li><strong>H+72:</strong> Strategic plan approval, execution</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Daily Battle Rhythm</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li><strong>0600Z:</strong> Theater intelligence update</li>
                                <li><strong>0800Z:</strong> Component commander VTC</li>
                                <li><strong>1200Z:</strong> Joint targeting coordination</li>
                                <li><strong>1600Z:</strong> Coalition coordination update</li>
                                <li><strong>2000Z:</strong> Strategic communications sync</li>
                            </ul>
                        </div>
                    </div>

                    <div style="background-color: rgba(245, 158, 11, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; margin-top: 12px;">
                        <h5 style="color: #fbbf24; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Decision Authority Matrix</h5>
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Theater Commander:</strong> Force deployment, ROE modifications, coalition integration, strategic targets, resource allocation<br>
                            <strong>National Command Authority:</strong> Strategic weapons, escalation control, cross-border operations, diplomatic coordination
                        </p>
                    </div>
                </div>

                <!-- Implementation Summary -->
                <div style="background-color: rgba(59, 130, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #3b82f6;">
                    <h4 style="font-size: 16px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px; color: #3b82f6;"></i>
                        Operation ALLIED RESOLVE - Theater C2 Implementation Summary
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Command Structure</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Theater-to-Brigade scaffolding</li>
                                <li>Clear command relationships</li>
                                <li>Joint/coalition integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Communications</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Multi-domain architecture</li>
                                <li>Strategic PACE planning</li>
                                <li>Coalition network integration</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style="color: #93c5fd; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">Control Measures</h5>
                            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                <li>Strategic boundaries</li>
                                <li>Multi-domain integration</li>
                                <li>Battle rhythm synchronization</li>
                            </ul>
                        </div>
                    </div>
                    <div style="background-color: rgba(59, 130, 246, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6;">
                        <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Success Factors:</strong> Effective theater-level C2 requires seamless integration of strategic planning,
                            joint operations, coalition coordination, and multi-domain capabilities. Hierarchical scaffolding ensures unity
                            of command while enabling decentralized execution across all echelons of Operation ALLIED RESOLVE.
                        </p>
                    </div>
                </div>

            </div>
        `;
    }
};
