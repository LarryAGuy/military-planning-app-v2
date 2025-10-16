/**
 * JPP Step 6: Course of Action Approval - Army Echelon Practical Example
 * Large Scale Combat Operations (LSCO) - European Campaign
 * Operation STEADFAST GUARDIAN - Army Level Implementation
 *
 * Educational Purpose: Demonstrates army-level COA approval processes in coalition LSCO environment
 * Command Level: U.S. Army Europe (USAREUR) - Field Army (3-star Lieutenant General)
 * Scenario: Implementation of theater commander's approved COA 2 (Defense in Depth)
 *
 * Professional Military Education Applications:
 * - Army War College operational planning courses
 * - Senior leader development programs (O-5 through O-8)
 * - Joint Professional Military Education
 * - Complex operational planning exercises
 */

export function getArmyCOAApprovalExample() {
    return `
        <div style="padding: 20px;">
            <!-- Army COA Approval Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-star" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 6: COA Approval - Army Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Army Command COA Approval Process</p>
                </div>
            </div>

            <!-- Army Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                    European Campaign Army Scenario - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Army Command:</strong> U.S. Army Europe (USAREUR) - Field Army Component<br>
                            <strong>Army Commander:</strong> Lieutenant General Michael J. Rodriguez, USA<br>
                            <strong>Operational Area:</strong> Eastern European Multi-Corps Operations<br>
                            <strong>Mission Type:</strong> Large Scale Combat Operations (LSCO) - Operational Level
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> I Corps, V Corps, XVIII Airborne Corps<br>
                            <strong>Army Force Structure:</strong> 180,000 personnel across 9 divisions, 27 brigade combat teams<br>
                            <strong>Operational Scope:</strong> 800km front across Poland, Baltic States, Romania<br>
                            <strong>Mission Timeline:</strong> 18-month campaign with 3-month mobile defense phase
                        </p>
                    </div>
                </div>
            </div>

            <!-- Operational Context and Theater Guidance - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Theater Commander's Guidance to Army -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(16, 185, 129, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-star-of-life" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                            Theater Commander's Operational Guidance
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(16, 185, 129, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(16, 185, 129, 0.1);
                        ">
                            <h5 style="font-weight: 600; color: #6ee7b7; font-size: 13px; margin: 0 0 12px 0;">
                                <i class="fas fa-scroll" style="margin-right: 6px; font-size: 12px;"></i>
                                General Morrison's Army Mission Statement
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                "Lieutenant General Rodriguez, USAREUR will execute COA 2 (Defense in Depth) across assigned operational area. Conduct mobile defense operations with I Corps (northern sector), V Corps (southern sector), XVIII Airborne Corps (strategic reserve). Coordinate with coalition partners for integrated defense. Prepare for transition to counter-offensive operations NLT 90 days. Maintain operational flexibility and force preservation throughout mobile defense phase."
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(16, 185, 129, 0.3);
                            margin-bottom: 16px;
                        ">
                            <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 10px 0;">
                                <i class="fas fa-tasks" style="margin-right: 6px; font-size: 11px;"></i>
                                Army Essential Tasks from Theater
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Essential Task 1:</strong> Conduct mobile defense across 800km front with three corps. <strong>Essential Task 2:</strong> Integrate 45,000 coalition forces into army operations. <strong>Essential Task 3:</strong> Maintain logistics sustainment for 180,000 personnel. <strong>Essential Task 4:</strong> Coordinate joint fires and air-ground integration. <strong>Essential Task 5:</strong> Prepare counter-offensive capabilities for Phase 2 operations. <strong>Essential Task 6:</strong> Maintain operational security and communications.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(16, 185, 129, 0.25);
                        ">
                            <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">
                                <i class="fas fa-exclamation-triangle" style="margin-right: 6px; font-size: 11px;"></i>
                                Theater Commander's Planning Guidance
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Prioritize force preservation during mobile defense. Maintain coalition unity through transparent coordination. Prepare for accelerated counter-offensive timeline (12 months vs. 15 months). Coordinate with NATO for strategic fires support. Ensure operational security for deep operations planning. Maintain continuous coordination with EUCOM and SACEUR for strategic alignment.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Army Operational Environment and Constraints -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(16, 185, 129, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-globe-europe" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                            Army Operational Environment and Constraints
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(16, 185, 129, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(16, 185, 129, 0.1);
                        ">
                            <h5 style="font-weight: 600; color: #6ee7b7; font-size: 13px; margin: 0 0 12px 0;">
                                <i class="fas fa-map" style="margin-right: 6px; font-size: 12px;"></i>
                                Army Operational Area and Geographic Factors
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Area of Operations:</strong> 800km front across Poland (I Corps sector), Baltic States (I Corps sector), Romania (V Corps sector). <strong>Terrain:</strong> Mixed urban/rural, river obstacles, forested areas. <strong>Infrastructure:</strong> NATO-standard airfields, rail networks, road systems. <strong>Weather:</strong> Seasonal considerations for mobility and logistics. <strong>Population:</strong> 45 million civilians requiring protection and coordination with host nation authorities.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(16, 185, 129, 0.3);
                            margin-bottom: 16px;
                        ">
                            <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 10px 0;">
                                <i class="fas fa-handshake" style="margin-right: 6px; font-size: 11px;"></i>
                                Coalition Integration Requirements
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Coalition Forces:</strong> 45,000 troops from 12 nations integrated at army level. <strong>Command Relationships:</strong> OPCON for tactical operations, coordination for strategic decisions. <strong>Interoperability:</strong> NATO STANAGs, common operational picture, standardized procedures. <strong>National Caveats:</strong> Political restrictions on employment, geographic limitations, rules of engagement variations. <strong>Coordination:</strong> Daily battle rhythm with coalition liaison officers.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(16, 185, 129, 0.25);
                        ">
                            <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">
                                <i class="fas fa-clock" style="margin-right: 6px; font-size: 11px;"></i>
                                Operational Timeline and Constraints
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Phase 1 (Mobile Defense):</strong> 90 days maximum duration. <strong>Phase 2 (Counter-Offensive):</strong> 12-month accelerated timeline. <strong>Constraints:</strong> Coalition political sustainability, logistics capacity, weather windows. <strong>Decision Points:</strong> 30-day, 60-day, 90-day assessments for phase transition. <strong>Flexibility:</strong> Branch plans for early/delayed transition based on enemy actions and coalition readiness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army COA Development Summary - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Three Army-Level Courses of Action -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 700px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(59, 130, 246, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-chess-board" style="margin-right: 10px; color: #3b82f6; font-size: 18px; text-shadow: 0 0 12px rgba(59, 130, 246, 0.5);"></i>
                            Army-Level Courses of Action Analysis
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(59, 130, 246, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(59, 130, 246, 0.1);
                        ">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 13px; margin: 0 0 12px 0;">
                                <i class="fas fa-shield-alt" style="margin-right: 6px; font-size: 12px;"></i>
                                Army COA 1 - FORWARD CORPS DEFENSE
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Concept:</strong> Position I Corps (Poland), V Corps (Romania), XVIII Airborne Corps (Baltic States) in forward defensive positions along current NATO borders. Each corps conducts area defense in assigned sectors with minimal depth. <strong>Force Allocation:</strong> I Corps (60,000 troops), V Corps (65,000 troops), XVIII Airborne Corps (55,000 troops). <strong>Risk:</strong> High casualties, limited flexibility. <strong>Advantage:</strong> Immediate territorial defense, coalition political support. <strong>Timeline:</strong> 6-month defensive operations.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(59, 130, 246, 0.3);
                            margin-bottom: 16px;
                        ">
                            <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 10px 0;">
                                <i class="fas fa-arrows-alt" style="margin-right: 6px; font-size: 11px;"></i>
                                Army COA 2 - MOBILE DEFENSE (RECOMMENDED)
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> I Corps and V Corps conduct mobile defense with planned withdrawal to secondary positions. XVIII Airborne Corps serves as army reserve for counter-attacks and reinforcement. Emphasizes force preservation and operational flexibility. <strong>Force Allocation:</strong> I Corps (60,000 troops - northern mobile defense), V Corps (65,000 troops - southern mobile defense), XVIII Airborne Corps (55,000 troops - army reserve). <strong>Risk:</strong> Temporary territorial loss. <strong>Advantage:</strong> Force preservation, flexibility. <strong>Timeline:</strong> 3-month mobile defense.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(59, 130, 246, 0.25);
                        ">
                            <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">
                                <i class="fas fa-bolt" style="margin-right: 6px; font-size: 11px;"></i>
                                Army COA 3 - IMMEDIATE COUNTER-ATTACK
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> Simultaneous defensive and offensive operations. I Corps (defense), V Corps (counter-attack), XVIII Airborne Corps (exploitation). Requires immediate transition to offensive operations while maintaining defensive positions. <strong>Force Allocation:</strong> I Corps (60,000 troops - defensive operations), V Corps (65,000 troops - counter-attack), XVIII Airborne Corps (55,000 troops - exploitation). <strong>Risk:</strong> High resource consumption, coordination complexity. <strong>Advantage:</strong> Initiative retention. <strong>Timeline:</strong> 2-month decisive operations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Army Staff Analysis and Recommendation -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 700px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(59, 130, 246, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-chart-bar" style="margin-right: 10px; color: #3b82f6; font-size: 18px; text-shadow: 0 0 12px rgba(59, 130, 246, 0.5);"></i>
                            Army Staff Analysis and Recommendation
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(59, 130, 246, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(59, 130, 246, 0.1);
                        ">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 13px; margin: 0 0 12px 0;">
                                <i class="fas fa-calculator" style="margin-right: 6px; font-size: 12px;"></i>
                                Army COA Comparison Results
                            </h5>
                            <div style="background: #1e293b; padding: 12px; border-radius: 6px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.3);">
                                <table style="width: 100%; color: #e5e7eb; font-size: 12px; border-collapse: collapse;">
                                    <thead>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.3);">
                                            <th style="text-align: left; padding: 8px; color: #6ee7b7; font-weight: 600;">Evaluation Criteria</th>
                                            <th style="text-align: center; padding: 8px; color: #6ee7b7; font-weight: 600;">COA 1</th>
                                            <th style="text-align: center; padding: 8px; color: #6ee7b7; font-weight: 600;">COA 2</th>
                                            <th style="text-align: center; padding: 8px; color: #6ee7b7; font-weight: 600;">COA 3</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Feasible</td>
                                            <td style="padding: 6px; text-align: center;">7.2/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">8.8/10</td>
                                            <td style="padding: 6px; text-align: center;">7.5/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Acceptable</td>
                                            <td style="padding: 6px; text-align: center;">9.2/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">8.5/10</td>
                                            <td style="padding: 6px; text-align: center;">6.8/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Suitable</td>
                                            <td style="padding: 6px; text-align: center;">7.8/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">8.9/10</td>
                                            <td style="padding: 6px; text-align: center;">8.9/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Distinguishable</td>
                                            <td style="padding: 6px; text-align: center;">7.5/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">8.7/10</td>
                                            <td style="padding: 6px; text-align: center;">7.8/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Complete</td>
                                            <td style="padding: 6px; text-align: center;">7.3/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">8.6/10</td>
                                            <td style="padding: 6px; text-align: center;">6.2/10</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 6px; font-weight: 600; color: #6ee7b7;">Overall Score</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600;">7.8/10</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600; background: rgba(16, 185, 129, 0.2); color: #6ee7b7;">8.7/10</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600;">7.3/10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(59, 130, 246, 0.3);
                            margin-bottom: 16px;
                        ">
                            <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 10px 0;">
                                <i class="fas fa-user-graduate" style="margin-right: 6px; font-size: 11px;"></i>
                                Army Chief of Staff Recommendation
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Major General Jennifer L. Martinez, USAREUR Chief of Staff, recommends Army COA 2 with operational modifications: (1) Enhanced corps coordination for mobile defense synchronization, (2) Increased coalition integration with embedded liaison teams at corps level, (3) Accelerated counter-offensive preparation with additional long-range fires, (4) Improved logistics coordination across 800km operational area, (5) Enhanced intelligence sharing between corps and coalition partners for operational awareness.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(59, 130, 246, 0.25);
                        ">
                            <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">
                                <i class="fas fa-exclamation-triangle" style="margin-right: 6px; font-size: 11px;"></i>
                                Army-Level Risk Assessment Summary
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Primary operational risks: (1) Corps coordination during mobile defense across 800km front, (2) Coalition force integration with varying capabilities and national caveats, (3) Logistics sustainment for 180,000 personnel across extended lines of communication, (4) Intelligence coordination between three corps and coalition partners, (5) Transition timing from defensive to offensive operations. Mitigation includes enhanced battle rhythm, standardized procedures, pre-positioned logistics, and continuous coordination protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Commander's Decision Process - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Lieutenant General Rodriguez's Decision Conference -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(220, 38, 38, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-gavel" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                            Army Commander's Decision Conference
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(220, 38, 38, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(220, 38, 38, 0.1);
                        ">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 13px; margin: 0 0 12px 0;">
                                <i class="fas fa-users" style="margin-right: 6px; font-size: 12px;"></i>
                                Army Leadership Decision Conference
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Key Participants:</strong> Lieutenant General Michael J. Rodriguez (Army Commander), Major General Jennifer L. Martinez (Chief of Staff), Lieutenant General Sarah M. Anderson (V Corps Commander), Lieutenant General David K. Thompson (I Corps Commander), Lieutenant General Robert P. Wilson (XVIII Airborne Corps Commander), Brigadier General Mark A. Johnson (G-3 Operations), Brigadier General Lisa K. Davis (G-2 Intelligence), British Brigadier Sir Michael Clarke (Coalition Coordination), Polish Brigadier General Tomasz Kowalski (Coalition Liaison).
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(220, 38, 38, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(220, 38, 38, 0.3);
                            margin-bottom: 16px;
                        ">
                            <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 10px 0;">
                                <i class="fas fa-brain" style="margin-right: 6px; font-size: 11px;"></i>
                                Army Commander's Analysis Process
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Lieutenant General Rodriguez evaluated army COAs against theater commander's guidance, operational feasibility, and coalition integration requirements. Key decision factors: (1) Alignment with General Morrison's Defense in Depth concept, (2) Corps coordination and synchronization across 800km front, (3) Coalition force integration with 45,000 allied troops, (4) Logistics sustainment capability for extended operations, (5) Flexibility for transition to counter-offensive operations. Decision matrix weighted operational effectiveness (35%), coalition integration (25%), logistics feasibility (25%), and risk management (15%).
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(220, 38, 38, 0.25);
                        ">
                            <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">
                                <i class="fas fa-quote-left" style="margin-right: 6px; font-size: 11px;"></i>
                                Army Commander's Decision Statement
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                "After thorough analysis of staff recommendations and corps commander input, I approve Army COA 2 (Mobile Defense) with the following modifications: enhanced corps coordination procedures, accelerated coalition integration timeline, increased logistics pre-positioning, and improved intelligence sharing protocols. This approach supports theater commander's intent while maximizing operational flexibility and force preservation across our three corps sectors."
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Corps Coordination and Coalition Integration -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="
                            font-size: 16px;
                            font-weight: 700;
                            color: white;
                            margin: 0 0 16px 0;
                            display: flex;
                            align-items: center;
                            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                            border-bottom: 2px solid rgba(220, 38, 38, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-handshake" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                            Corps Coordination and Coalition Integration
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(220, 38, 38, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(220, 38, 38, 0.1);
                        ">
                            <h5 style="font-weight: 600; color: #fca5a5; font-size: 13px; margin: 0 0 12px 0;">
                                <i class="fas fa-sitemap" style="margin-right: 6px; font-size: 12px;"></i>
                                Corps Commander Coordination
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Lieutenant General Rodriguez coordinated with corps commanders via secure video conference for synchronized mobile defense execution. <strong>I Corps (LTG Thompson):</strong> Northern sector mobile defense with 2nd and 3rd Infantry Divisions. <strong>V Corps (LTG Anderson):</strong> Southern sector mobile defense with 1st Armored and 1st Cavalry Divisions. <strong>XVIII Airborne Corps (LTG Wilson):</strong> Army reserve with 82nd and 101st Airborne Divisions. Coordination includes phase line synchronization, mutual support procedures, and transition criteria for counter-offensive operations.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(220, 38, 38, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(220, 38, 38, 0.3);
                            margin-bottom: 16px;
                        ">
                            <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 10px 0;">
                                <i class="fas fa-flag" style="margin-right: 6px; font-size: 11px;"></i>
                                Coalition Force Integration at Army Level
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Coalition Integration:</strong> 45,000 coalition troops integrated across three corps sectors. <strong>I Corps Sector:</strong> UK 1st Armoured Division (18,000), German 10th Panzer Division (15,000). <strong>V Corps Sector:</strong> Polish 16th Mechanized Division (12,000). <strong>Army Reserve:</strong> French 2e Division Blindée integrated with XVIII Airborne Corps. Command relationships established through NATO standardization agreements with embedded liaison teams at army and corps levels for seamless coordination and interoperability.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(220, 38, 38, 0.25);
                        ">
                            <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">
                                <i class="fas fa-sync" style="margin-right: 6px; font-size: 11px;"></i>
                                Army Battle Rhythm and Coordination Procedures
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Daily army battle rhythm: 0600 - Intelligence update brief, 0800 - Corps commanders' video conference, 1200 - Coalition coordination meeting, 1600 - Operations update brief, 2000 - Theater coordination call with General Morrison. Weekly: Corps commanders' conference, coalition partner coordination, logistics synchronization meeting. Continuous: Intelligence sharing, operational coordination, logistics status updates across all three corps and coalition partners.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Sustainment Operations and Risk Management -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-loading" style="margin-right: 8px;"></i>
                    Army Sustainment Operations and Operational Risk Management
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-warehouse" style="margin-right: 6px; color: #10b981;"></i>
                            Army Sustainment Architecture and Multi-Corps Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Army Sustainment Command Structure:</strong> 21st Theater Sustainment Command provides army-level logistics coordination across three corps sectors. Corps sustainment brigades: 316th ESC (I Corps), 1st TSC (V Corps), 18th Airborne Corps Sustainment Brigade (XVIII Airborne Corps). Daily requirements: 180,000 personnel consumption - 2,800 tons ammunition, 4,200 tons fuel, 1,440 tons supplies. Strategic distribution through Ramstein (Germany), Mihail Kogălniceanu (Romania), Powidz (Poland) logistics hubs.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Multi-Corps Logistics Coordination:</strong> Army coordinates sustainment across 800km operational area with redundant supply routes. Primary: Rail networks through Germany-Poland-Romania corridor. Secondary: Ground transportation with 1,200 Heavy Equipment Transporters. Tertiary: Strategic airlift through NATO airlift coordination. Coalition logistics integration through NATO Support and Procurement Agency with standardized fuel, ammunition, and medical supplies across 12 allied nations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Medical Support Coordination:</strong> Army medical command coordinates Role 2 and Role 3 medical facilities across corps sectors. Medical evacuation through strategic airlift to Landstuhl Regional Medical Center. Casualty estimates: 2-3% daily rate during mobile defense (3,600-5,400 casualties/day), medical treatment capacity: 2,800 patients/day across army area. Blood supply coordination through Armed Services Blood Program with 12-day operational reserves.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 6px; color: #10b981;"></i>
                            Army Operational Risk Assessment and Mitigation
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Primary Operational Risks:</strong> (1) Corps coordination during mobile defense - MEDIUM risk (35% probability, HIGH impact). Mitigation: Enhanced battle rhythm, standardized procedures, continuous coordination. (2) Coalition integration across three corps - MEDIUM risk (40% probability, MEDIUM impact). Mitigation: Embedded liaison teams, NATO standardization, daily coordination meetings. (3) Logistics sustainment across 800km - HIGH risk (60% probability, HIGH impact). Mitigation: Pre-positioned stocks, redundant routes, coalition support.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Operational Risk Mitigation Measures:</strong> Establish redundant command and control systems across three corps. Implement distributed operations to reduce vulnerability to enemy long-range fires. Maintain army reserve (XVIII Airborne Corps) for contingency operations and reinforcement. Develop branch plans for early/delayed transition to counter-offensive based on enemy actions and operational success. Coordinate with theater for strategic fires support and intelligence sharing.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Contingency Planning:</strong> Branch Plan ALPHA: Accelerated counter-offensive if enemy weaker than assessed. Branch Plan BRAVO: Extended mobile defense if enemy capabilities exceed estimates. Branch Plan CHARLIE: Corps sector reinforcement with army reserve. Branch Plan DELTA: Coalition partner withdrawal scenarios with force reallocation across remaining corps sectors and coordination with theater for additional resources.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Army COA Approval Comprehensive Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-certificate" style="margin-right: 8px;"></i>
                    Army COA Approval Comprehensive Summary and Operational Assessment
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chess-king" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Army Command Decision Excellence and Operational Leadership
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Lieutenant General Rodriguez's approval of Army COA 2 (Mobile Defense) demonstrates exemplary army-level command decision-making in Large Scale Combat Operations. The decision effectively translates theater commander's strategic guidance into operational-level execution across three corps sectors spanning 800km. The approved COA integrates corps coordination, coalition force integration, and logistics sustainment into a coherent operational framework that maximizes force preservation while maintaining operational flexibility for transition to counter-offensive operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            The army commander's modifications (enhanced corps coordination, accelerated coalition integration, increased logistics pre-positioning, improved intelligence sharing) demonstrate adaptive operational leadership appropriate for field army command responsibilities. The comprehensive coordination with three corps commanders and 12 coalition partners ensures unified execution while maintaining operational security and effectiveness across the extended operational area.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Army command authority delegation and coordination procedures ensure effective operational execution while maintaining strategic alignment with theater objectives. The comprehensive risk assessment addresses operational risks while providing contingency planning for adaptive responses to changing tactical conditions and enemy actions throughout the mobile defense and counter-offensive phases.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-graduation-cap" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Professional Military Education and Operational Planning Excellence
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            This comprehensive army-level COA approval example provides military professionals (O-5 through O-8) with authoritative guidance for conducting operational-level planning and decision-making in complex joint and coalition environments. The scenario demonstrates integration of operational planning doctrine, corps coordination, coalition integration, and multi-domain operations planning at the army level, providing invaluable educational content for Army War College curricula and senior leader development programs.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Educational applications include Army War College operational planning courses, Joint Professional Military Education programs, senior leader development seminars, and complex operational planning exercises requiring sophisticated understanding of army-level command responsibilities and operational decision-making processes. The scenario provides realistic context for understanding Large Scale Combat Operations complexity in coalition environments with multi-corps coordination requirements.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Military professionals can utilize this example to understand army commander decision authority, operational risk assessment methodologies, corps coordination requirements, coalition integration procedures, multi-domain operations coordination, and the critical importance of operational thinking in contemporary military environments. The example emphasizes operational leadership and comprehensive planning required for successful army-level command in Large Scale Combat Operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const armyPracticalModule = {
    getContent() {
        return getArmyCOAApprovalExample();
    }
};

export default armyPracticalModule;
