/**
 * JPP Step 6: Course of Action Approval - Corps Echelon Practical Example
 * Large Scale Combat Operations (LSCO) - European Campaign
 * Operation STEADFAST GUARDIAN - V Corps Implementation
 *
 * Educational Purpose: Demonstrates corps-level COA approval processes in coalition LSCO environment
 * Command Level: V Corps "Victory Corps" (3-star Lieutenant General)
 * Scenario: Implementation of army commander's approved Mobile Defense COA in southern sector
 *
 * Professional Military Education Applications:
 * - Command and General Staff College operational planning courses
 * - Senior leader development programs (O-4 through O-7)
 * - Joint Professional Military Education
 * - Complex operational planning exercises
 */

export function getCorpsCOAApprovalExample() {
    return `
        <div style="padding: 20px;">
            <!-- Corps COA Approval Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-shield-alt" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 6: COA Approval - Corps Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Corps Command COA Approval Process</p>
                </div>
            </div>

            <!-- Corps Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                    European Campaign Corps Scenario - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Corps Command:</strong> V Corps "Victory Corps" - Southern Sector Operations<br>
                            <strong>Corps Commander:</strong> Lieutenant General Sarah M. Anderson, USA<br>
                            <strong>Operational Sector:</strong> Romania/Bulgaria Multi-Division Operations<br>
                            <strong>Mission Type:</strong> Large Scale Combat Operations (LSCO) - Tactical-Operational Level
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> 1st Armored Division, 3rd Infantry Division, 1st Cavalry Division<br>
                            <strong>Corps Force Structure:</strong> 75,000 personnel across 3 divisions, 9 brigade combat teams<br>
                            <strong>Operational Scope:</strong> 280km front across Romania, southern Poland, eastern Slovakia<br>
                            <strong>Mission Timeline:</strong> 90-day mobile defense phase with transition to counter-offensive
                        </p>
                    </div>
                </div>
            </div>

            <!-- Army Commander's Guidance to Corps - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Army Commander's Mission to V Corps -->
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
                            Army Commander's Mission to V Corps
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
                                Lieutenant General Rodriguez's Corps Mission Statement
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                "Lieutenant General Anderson, V Corps will conduct mobile defense operations in southern sector (Romania/Bulgaria operational area) as part of army Mobile Defense COA. Coordinate with I Corps (northern boundary) and XVIII Airborne Corps (army reserve). Integrate Polish 16th Mechanized Division (OPCON). Conduct planned withdrawal to Phase Line BRAVO if required. Prepare for transition to counter-offensive operations NLT 90 days. Maintain coordination with coalition partners and host nation authorities."
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
                                Corps Essential Tasks from Army
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Essential Task 1:</strong> Conduct mobile defense across 280km corps front with three divisions. <strong>Essential Task 2:</strong> Integrate Polish 16th Mechanized Division (12,000 troops) into corps operations. <strong>Essential Task 3:</strong> Maintain logistics sustainment for 75,000 personnel. <strong>Essential Task 4:</strong> Coordinate with I Corps for northern boundary operations. <strong>Essential Task 5:</strong> Prepare counter-offensive capabilities for Phase 2 operations. <strong>Essential Task 6:</strong> Coordinate with Romanian host nation authorities.
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
                                Army Commander's Planning Guidance to Corps
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Prioritize force preservation during mobile defense operations. Maintain close coordination with Polish coalition forces. Prepare for accelerated counter-offensive timeline. Coordinate with Romanian authorities for civilian protection. Ensure operational security for deep operations planning. Maintain continuous coordination with army headquarters and adjacent corps for synchronized operations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Corps Operational Environment and Constraints -->
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
                            Corps Operational Environment and Constraints
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
                                Corps Area of Operations and Geographic Factors
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Corps Sector:</strong> 280km front across Romania (primary), southern Poland, eastern Slovakia. <strong>Terrain:</strong> Carpathian Mountains (south), Danube River (natural obstacle), mixed urban/rural areas. <strong>Infrastructure:</strong> Mihail Kogălniceanu Air Base (logistics hub), rail networks, highway systems. <strong>Weather:</strong> Continental climate, seasonal mobility considerations. <strong>Population:</strong> 12 million civilians requiring coordination with Romanian authorities for protection and movement control.
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
                                Coalition Integration at Corps Level
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Coalition Forces:</strong> Polish 16th Mechanized Division (12,000 troops) under OPCON to V Corps. <strong>Command Relationships:</strong> Tactical control for operations, coordination for strategic decisions. <strong>Interoperability:</strong> NATO standardization agreements, common operational picture, standardized procedures. <strong>National Caveats:</strong> Polish political restrictions on cross-border operations, geographic limitations within Romania. <strong>Coordination:</strong> Daily battle rhythm with Polish liaison team at corps headquarters.
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
                                Corps Timeline and Operational Constraints
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Phase 1 (Mobile Defense):</strong> 90 days maximum duration in corps sector. <strong>Phase 2 (Counter-Offensive):</strong> Transition based on army commander's decision. <strong>Constraints:</strong> Romanian host nation coordination, Polish coalition political considerations, logistics capacity through Mihail Kogălniceanu. <strong>Decision Points:</strong> 30-day, 60-day, 90-day assessments for phase transition. <strong>Flexibility:</strong> Branch plans for early/delayed transition based on enemy actions in corps sector.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps COA Development Summary - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Three Corps-Level Courses of Action -->
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
                            Corps-Level Courses of Action Analysis
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
                                Corps COA 1 - FORWARD DIVISION DEFENSE
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Concept:</strong> Position 1st Armored Division (western sector), 3rd Infantry Division (central sector), 1st Cavalry Division (eastern sector) in forward defensive positions along Romanian border. Each division conducts area defense with minimal depth. Polish 16th Mechanized Division integrated as corps reserve. <strong>Force Allocation:</strong> 1st AD (25,000 troops), 3rd ID (25,000 troops), 1st CAV (25,000 troops). <strong>Risk:</strong> High casualties, limited flexibility. <strong>Advantage:</strong> Immediate territorial defense. <strong>Timeline:</strong> 90-day defensive operations.
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
                                Corps COA 2 - MOBILE DEFENSE (RECOMMENDED)
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> 1st Armored and 3rd Infantry Divisions conduct mobile defense with planned withdrawal to Phase Line BRAVO. 1st Cavalry Division serves as corps reserve for counter-attacks. Polish 16th Mechanized Division integrated for mobile operations. Emphasizes force preservation and operational flexibility. <strong>Force Allocation:</strong> 1st AD (25,000 troops - mobile defense), 3rd ID (25,000 troops - mobile defense), 1st CAV (25,000 troops - corps reserve). <strong>Risk:</strong> Temporary territorial loss. <strong>Advantage:</strong> Force preservation, flexibility. <strong>Timeline:</strong> 60-day mobile defense.
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
                                Corps COA 3 - IMMEDIATE COUNTER-ATTACK
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> Simultaneous defensive and offensive operations within corps sector. 1st Armored Division (defense), 3rd Infantry Division (counter-attack), 1st Cavalry Division (exploitation). Polish 16th Mechanized Division supports counter-attack operations. Requires immediate transition to offensive operations. <strong>Force Allocation:</strong> 1st AD (25,000 troops - defensive), 3rd ID (25,000 troops - counter-attack), 1st CAV (25,000 troops - exploitation). <strong>Risk:</strong> High resource consumption, coordination complexity. <strong>Advantage:</strong> Initiative retention. <strong>Timeline:</strong> 45-day decisive operations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Corps Staff Analysis and Recommendation -->
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
                            Corps Staff Analysis and Recommendation
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
                                Corps COA Comparison Results
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
                                            <td style="padding: 6px; text-align: center;">7.5/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.1/10</td>
                                            <td style="padding: 6px; text-align: center;">7.8/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Acceptable</td>
                                            <td style="padding: 6px; text-align: center;">8.9/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">8.7/10</td>
                                            <td style="padding: 6px; text-align: center;">6.5/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Suitable</td>
                                            <td style="padding: 6px; text-align: center;">9.3/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.0/10</td>
                                            <td style="padding: 6px; text-align: center;">8.8/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Distinguishable</td>
                                            <td style="padding: 6px; text-align: center;">7.2/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">8.9/10</td>
                                            <td style="padding: 6px; text-align: center;">7.5/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Complete</td>
                                            <td style="padding: 6px; text-align: center;">7.1/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">8.8/10</td>
                                            <td style="padding: 6px; text-align: center;">6.0/10</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 6px; font-weight: 600; color: #6ee7b7;">Overall Score</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600;">7.6/10</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600; background: rgba(16, 185, 129, 0.2); color: #6ee7b7;">8.9/10</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600;">7.1/10</td>
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
                                Corps Chief of Staff Recommendation
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Major General Thomas R. Mitchell, V Corps Chief of Staff, recommends Corps COA 2 with tactical modifications: (1) Enhanced division coordination for mobile defense synchronization across 280km front, (2) Increased Polish 16th Mechanized Division integration with embedded U.S. liaison teams, (3) Accelerated counter-offensive preparation with additional artillery and air defense, (4) Improved logistics coordination with Romanian host nation support, (5) Enhanced intelligence sharing between divisions and coalition partners for tactical awareness and operational security.
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
                                Corps-Level Risk Assessment Summary
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Primary tactical risks: (1) Division coordination during mobile defense across 280km corps front with three U.S. divisions, (2) Polish coalition force integration with varying equipment and procedures, (3) Logistics sustainment for 75,000 personnel across extended Romanian operational area, (4) Intelligence coordination between three divisions and Polish partners, (5) Transition timing from defensive to offensive operations based on enemy actions. Mitigation includes enhanced battle rhythm, standardized procedures, pre-positioned logistics, and continuous coordination protocols with Romanian authorities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Commander's Decision Process - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Lieutenant General Anderson's Decision Conference -->
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
                            Corps Commander's Decision Conference
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
                                Corps Leadership Decision Conference
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Key Participants:</strong> Lieutenant General Sarah M. Anderson (Corps Commander), Major General Thomas R. Mitchell (Chief of Staff), Major General Robert K. Thompson (1st Armored Division Commander), Major General Patricia L. Davis (3rd Infantry Division Commander), Major General Michael S. Johnson (1st Cavalry Division Commander), Brigadier General Mark T. Wilson (G-3 Operations), Brigadier General Lisa A. Brown (G-2 Intelligence), Polish Brigadier General Andrzej Kowalski (16th Mechanized Division Commander), Romanian Colonel Gheorghe Popescu (Host Nation Liaison).
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
                                Corps Commander's Analysis Process
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Lieutenant General Anderson evaluated corps COAs against army commander's guidance, tactical feasibility, and division integration requirements. Key decision factors: (1) Alignment with LTG Rodriguez's Mobile Defense concept, (2) Division coordination and synchronization across 280km corps front, (3) Polish 16th Mechanized Division integration with 12,000 troops, (4) Logistics sustainment capability for extended operations, (5) Flexibility for transition to counter-offensive operations. Decision matrix weighted tactical effectiveness (40%), coalition integration (20%), logistics feasibility (25%), and risk management (15%).
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
                                Corps Commander's Decision Statement
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                "After thorough analysis of staff recommendations and division commander input, I approve Corps COA 2 (Mobile Defense) with the following modifications: enhanced division coordination procedures across our three divisions, accelerated Polish coalition integration timeline, increased logistics pre-positioning in Romanian territory, and improved intelligence sharing protocols. This approach supports army commander's intent while maximizing tactical flexibility and force preservation across our corps sector."
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Division Coordination and Coalition Integration -->
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
                            Division Coordination and Coalition Integration
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
                                Division Commander Coordination
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Lieutenant General Anderson coordinated with division commanders via secure video conference for synchronized mobile defense execution across corps sector. <strong>1st Armored Division (MG Thompson):</strong> Western sector mobile defense with 1st and 3rd Armored BCTs. <strong>3rd Infantry Division (MG Davis):</strong> Central sector mobile defense with 1st, 2nd, and 3rd Infantry BCTs. <strong>1st Cavalry Division (MG Johnson):</strong> Eastern sector and corps reserve with 1st, 2nd, and 3rd Cavalry BCTs. Coordination includes phase line synchronization, mutual support procedures, and transition criteria for counter-offensive operations.
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
                                Polish Coalition Force Integration at Corps Level
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Polish Integration:</strong> 16th Mechanized Division (12,000 troops) under OPCON to V Corps with tactical integration across division sectors. <strong>Command Relationships:</strong> Tactical control for mobile defense operations, coordination for strategic decisions with Polish National Command. <strong>Interoperability:</strong> NATO standardization agreements, common operational picture through FBCB2/BFT systems, standardized procedures. <strong>National Caveats:</strong> Polish political restrictions on deep operations beyond Romanian territory, geographic limitations. <strong>Coordination:</strong> Daily battle rhythm with Polish liaison team at corps headquarters and embedded teams at division level.
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
                                Corps Battle Rhythm and Coordination Procedures
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Daily corps battle rhythm: 0530 - Intelligence update brief, 0730 - Division commanders' video conference, 1130 - Polish coalition coordination meeting, 1530 - Operations update brief, 1930 - Army coordination call with LTG Rodriguez. Weekly: Division commanders' conference, Polish partner coordination, Romanian host nation coordination, logistics synchronization meeting. Continuous: Intelligence sharing, tactical coordination, logistics status updates across all three divisions and Polish partners with Romanian authorities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Sustainment Operations and Risk Management -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-loading" style="margin-right: 8px;"></i>
                    Corps Sustainment Operations and Tactical Risk Management
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-warehouse" style="margin-right: 6px; color: #10b981;"></i>
                            Corps Sustainment Architecture and Multi-Division Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Corps Sustainment Command Structure:</strong> 1st Theater Sustainment Command provides corps-level logistics coordination across three division sectors. Division sustainment brigades: 1st Armored Division Sustainment Brigade, 3rd Infantry Division Sustainment Brigade, 1st Cavalry Division Sustainment Brigade. Daily requirements: 75,000 personnel consumption - 1,200 tons ammunition, 1,800 tons fuel, 600 tons supplies. Strategic distribution through Mihail Kogălniceanu Air Base (primary), Constanța Port (secondary), rail networks through Romania.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Multi-Division Logistics Coordination:</strong> Corps coordinates sustainment across 280km operational area with Romanian host nation support. Primary: Rail networks through Romania-Slovakia corridor. Secondary: Ground transportation with 400 Heavy Equipment Transporters. Tertiary: Strategic airlift through NATO airlift coordination. Polish logistics integration through NATO Support and Procurement Agency with standardized fuel, ammunition, and medical supplies. Romanian host nation support provides additional 20% capacity augmentation.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Medical Support Coordination:</strong> Corps medical command coordinates Role 1 and Role 2 medical facilities across division sectors. Medical evacuation through strategic airlift to Landstuhl Regional Medical Center via Mihail Kogălniceanu. Casualty estimates: 2-3% daily rate during mobile defense (1,500-2,250 casualties/day), medical treatment capacity: 1,200 patients/day across corps area. Blood supply coordination through Armed Services Blood Program with 10-day operational reserves and Polish medical support integration.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 6px; color: #10b981;"></i>
                            Corps Tactical Risk Assessment and Mitigation
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Primary Tactical Risks:</strong> (1) Division coordination during mobile defense - MEDIUM risk (30% probability, HIGH impact). Mitigation: Enhanced battle rhythm, standardized procedures, continuous coordination. (2) Polish coalition integration across three divisions - MEDIUM risk (35% probability, MEDIUM impact). Mitigation: Embedded liaison teams, NATO standardization, daily coordination meetings. (3) Logistics sustainment across 280km - HIGH risk (55% probability, HIGH impact). Mitigation: Pre-positioned stocks, Romanian host nation support, redundant routes.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Risk Mitigation Measures:</strong> Establish redundant command and control systems across three divisions. Implement distributed operations to reduce vulnerability to enemy long-range fires. Maintain corps reserve (1st Cavalry Division) for contingency operations and reinforcement. Develop branch plans for early/delayed transition to counter-offensive based on enemy actions and tactical success. Coordinate with army for strategic fires support and intelligence sharing across corps boundaries.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Contingency Planning:</strong> Branch Plan ALPHA: Accelerated counter-offensive if enemy weaker than assessed in corps sector. Branch Plan BRAVO: Extended mobile defense if enemy capabilities exceed estimates. Branch Plan CHARLIE: Division sector reinforcement with corps reserve. Branch Plan DELTA: Polish partner withdrawal scenarios with force reallocation across remaining divisions and coordination with army for additional resources and Romanian host nation support.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Corps COA Approval Comprehensive Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(220, 38, 38, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #dc2626; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-certificate" style="margin-right: 8px;"></i>
                    Corps COA Approval Comprehensive Summary and Tactical Assessment
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chess-king" style="margin-right: 6px; color: #dc2626;"></i>
                            Corps Command Decision Excellence and Tactical Leadership
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Lieutenant General Anderson's approval of Corps COA 2 (Mobile Defense) demonstrates exemplary corps-level command decision-making in Large Scale Combat Operations. The decision effectively translates army commander's operational guidance into tactical-level execution across three division sectors spanning 280km. The approved COA integrates division coordination, Polish coalition force integration, and logistics sustainment into a coherent tactical framework that maximizes force preservation while maintaining tactical flexibility for transition to counter-offensive operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            The corps commander's modifications (enhanced division coordination, accelerated Polish coalition integration, increased logistics pre-positioning, improved intelligence sharing) demonstrate adaptive tactical leadership appropriate for corps command responsibilities. The comprehensive coordination with three division commanders and Polish coalition partners ensures unified execution while maintaining operational security and effectiveness across the extended corps sector.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Corps command authority delegation and coordination procedures ensure effective tactical execution while maintaining operational alignment with army objectives. The comprehensive risk assessment addresses tactical risks while providing contingency planning for adaptive responses to changing battlefield conditions and enemy actions throughout the mobile defense and counter-offensive phases.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-graduation-cap" style="margin-right: 6px; color: #dc2626;"></i>
                            Professional Military Education and Tactical Planning Excellence
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            This comprehensive corps-level COA approval example provides military professionals (O-4 through O-7) with authoritative guidance for conducting tactical-operational planning and decision-making in complex joint and coalition environments. The scenario demonstrates integration of tactical planning doctrine, division coordination, coalition integration, and multi-domain operations planning at the corps level, providing invaluable educational content for Command and General Staff College curricula and senior leader development programs.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Educational applications include Command and General Staff College tactical planning courses, Joint Professional Military Education programs, senior leader development seminars, and complex tactical planning exercises requiring sophisticated understanding of corps-level command responsibilities and tactical decision-making processes. The scenario provides realistic context for understanding Large Scale Combat Operations complexity in coalition environments with multi-division coordination requirements.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Military professionals can utilize this example to understand corps commander decision authority, tactical risk assessment methodologies, division coordination requirements, coalition integration procedures, multi-domain operations coordination, and the critical importance of tactical thinking in contemporary military environments. The example emphasizes tactical leadership and comprehensive planning required for successful corps-level command in Large Scale Combat Operations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const corpsPracticalModule = {
    getContent() {
        return getCorpsCOAApprovalExample();
    }
};

export default corpsPracticalModule;
