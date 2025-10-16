/**
 * JPP Step 6: Course of Action Approval - Brigade Echelon Practical Example
 * Large Scale Combat Operations (LSCO) - European Campaign
 * Operation STEADFAST GUARDIAN - 1st Armored Brigade Combat Team Implementation
 *
 * Educational Purpose: Demonstrates brigade-level COA approval processes in coalition LSCO environment
 * Command Level: 1st Armored Brigade Combat Team (Colonel O-6)
 * Scenario: Implementation of division commander's approved Mobile Defense COA in western sector
 *
 * Professional Military Education Applications:
 * - Intermediate Level Education tactical planning courses
 * - Company and Field Grade Officer development programs (O-3 through O-6)
 * - Advanced Military Studies Program
 * - Complex tactical planning exercises
 */

export function getBrigadeCOAApprovalExample() {
    return `
        <div style="padding: 20px;">
            <!-- Brigade COA Approval Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-users" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 6: COA Approval - Brigade Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Brigade Combat Team COA Approval Process</p>
                </div>
            </div>

            <!-- Brigade Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                    European Campaign Brigade Scenario - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Brigade Command:</strong> 1st Armored Brigade Combat Team - Western Sector Operations<br>
                            <strong>Brigade Commander:</strong> Colonel David M. Wilson, USA<br>
                            <strong>Tactical Sector:</strong> Western Romania Multi-Battalion Operations<br>
                            <strong>Mission Type:</strong> Large Scale Combat Operations (LSCO) - Tactical Level
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> 1st Armor Battalion, 2nd Armor Battalion, 1st Infantry Battalion<br>
                            <strong>Brigade Force Structure:</strong> 4,200 personnel across 3 maneuver battalions + support<br>
                            <strong>Tactical Scope:</strong> 32km front across western Romania sector<br>
                            <strong>Mission Timeline:</strong> 45-day mobile defense phase with transition to counter-offensive
                        </p>
                    </div>
                </div>
            </div>

            <!-- Division Commander's Guidance to Brigade - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Division Commander's Mission to 1st Armored BCT -->
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
                            Division Commander's Mission to 1st Armored BCT
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
                                Major General Thompson's Brigade Mission Statement
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                "Colonel Wilson, 1st Armored Brigade Combat Team will conduct mobile defense operations in northern sector of 1st Armored Division operational area as part of division Mobile Defense COA. Coordinate with 3rd Armored BCT (southern boundary) and maintain contact with 2nd Stryker BCT (division reserve). Conduct planned withdrawal to Phase Line DELTA if required. Prepare for transition to counter-offensive operations NLT 45 days. Maintain coordination with Romanian host nation authorities and ensure force preservation throughout mobile defense phase."
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
                                Brigade Essential Tasks from Division
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Essential Task 1:</strong> Conduct mobile defense across 32km brigade front with three maneuver battalions. <strong>Essential Task 2:</strong> Maintain coordination with 3rd Armored BCT on southern boundary. <strong>Essential Task 3:</strong> Maintain logistics sustainment for 4,200 personnel. <strong>Essential Task 4:</strong> Coordinate with Romanian host nation authorities for civilian protection. <strong>Essential Task 5:</strong> Prepare counter-offensive capabilities for Phase 2 operations. <strong>Essential Task 6:</strong> Maintain operational security and communications with division headquarters.
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
                                Division Commander's Planning Guidance to Brigade
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Prioritize force preservation during mobile defense operations. Maintain close coordination with adjacent brigades. Prepare for accelerated counter-offensive timeline. Coordinate with Romanian authorities for civilian protection and movement control. Ensure operational security for tactical operations planning. Maintain continuous coordination with division headquarters and adjacent brigades for synchronized operations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Brigade Tactical Environment and Constraints -->
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
                            Brigade Tactical Environment and Constraints
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
                                Brigade Area of Operations and Geographic Factors
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Brigade Sector:</strong> 32km front across northern sector of 1st Armored Division area. <strong>Terrain:</strong> Rolling hills, river obstacles (Someș River), mixed agricultural/forested areas. <strong>Infrastructure:</strong> Limited road networks, rail lines, small airfields. <strong>Weather:</strong> Continental climate, seasonal mobility considerations for armored operations. <strong>Population:</strong> 850,000 civilians requiring coordination with Romanian authorities for protection and movement control during mobile defense operations.
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
                                Adjacent Unit Coordination at Brigade Level
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Adjacent Units:</strong> 3rd Armored BCT (southern boundary), 2nd Stryker BCT (division reserve, potential reinforcement). <strong>Boundary Coordination:</strong> Phase line synchronization, mutual support procedures, fire coordination measures. <strong>Interoperability:</strong> Common operational picture through FBCB2/BFT systems, standardized procedures, shared intelligence. <strong>Coordination Requirements:</strong> Daily battle rhythm with adjacent brigade liaison officers, boundary crossing procedures, mutual support protocols. <strong>Romanian Coordination:</strong> Host nation liaison for civilian protection and infrastructure use.
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
                                Brigade Timeline and Tactical Constraints
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Phase 1 (Mobile Defense):</strong> 45 days maximum duration in brigade sector. <strong>Phase 2 (Counter-Offensive):</strong> Transition based on division commander's decision. <strong>Constraints:</strong> Romanian host nation coordination, logistics capacity, terrain limitations for armored operations. <strong>Decision Points:</strong> 15-day, 30-day, 45-day assessments for phase transition. <strong>Flexibility:</strong> Branch plans for early/delayed transition based on enemy actions in brigade sector and adjacent unit situations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade COA Development Summary - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Three Brigade-Level Courses of Action -->
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
                            Brigade-Level Courses of Action Analysis
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
                                Brigade COA 1 - FORWARD BATTALION DEFENSE
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Concept:</strong> Position 1st Armor Battalion (northern sector), 2nd Armor Battalion (central sector), 1st Infantry Battalion (southern sector) in forward defensive positions along Romanian border. Each battalion conducts area defense with minimal depth. Brigade reserve maintained at 10% strength. <strong>Force Allocation:</strong> 1st AR BN (1,400 troops), 2nd AR BN (1,400 troops), 1st IN BN (1,400 troops). <strong>Risk:</strong> High casualties, limited tactical flexibility. <strong>Advantage:</strong> Immediate territorial defense. <strong>Timeline:</strong> 45-day defensive operations with minimal withdrawal.
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
                                Brigade COA 2 - MOBILE DEFENSE (RECOMMENDED)
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> 1st and 2nd Armor Battalions conduct mobile defense with planned withdrawal to Phase Line DELTA. 1st Infantry Battalion serves as brigade reserve for counter-attacks and security. Emphasizes force preservation and tactical flexibility. <strong>Force Allocation:</strong> 1st AR BN (1,400 troops - mobile defense), 2nd AR BN (1,400 troops - mobile defense), 1st IN BN (1,400 troops - brigade reserve). <strong>Risk:</strong> Temporary territorial loss. <strong>Advantage:</strong> Force preservation, tactical flexibility. <strong>Timeline:</strong> 30-day mobile defense with counter-attack preparation.
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
                                Brigade COA 3 - IMMEDIATE COUNTER-ATTACK
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> Simultaneous defensive and offensive operations within brigade sector. 1st Armor Battalion (defense), 2nd Armor Battalion (counter-attack), 1st Infantry Battalion (exploitation and security). Requires immediate transition to offensive operations. <strong>Force Allocation:</strong> 1st AR BN (1,400 troops - defensive), 2nd AR BN (1,400 troops - counter-attack), 1st IN BN (1,400 troops - exploitation). <strong>Risk:</strong> High resource consumption, coordination complexity. <strong>Advantage:</strong> Initiative retention, tactical momentum. <strong>Timeline:</strong> 20-day decisive operations with rapid transition.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Brigade Staff Analysis and Recommendation -->
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
                            Brigade Staff Analysis and Recommendation
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
                                Brigade COA Comparison Results
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
                                            <td style="padding: 6px; text-align: center;">8.3/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.5/10</td>
                                            <td style="padding: 6px; text-align: center;">8.4/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Acceptable</td>
                                            <td style="padding: 6px; text-align: center;">8.5/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.1/10</td>
                                            <td style="padding: 6px; text-align: center;">7.0/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Suitable</td>
                                            <td style="padding: 6px; text-align: center;">9.7/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.4/10</td>
                                            <td style="padding: 6px; text-align: center;">9.2/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Distinguishable</td>
                                            <td style="padding: 6px; text-align: center;">6.6/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.2/10</td>
                                            <td style="padding: 6px; text-align: center;">8.1/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Complete</td>
                                            <td style="padding: 6px; text-align: center;">7.9/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.3/10</td>
                                            <td style="padding: 6px; text-align: center;">6.4/10</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 6px; font-weight: 600; color: #6ee7b7;">Overall Score</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600;">8.0/10</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600; background: rgba(16, 185, 129, 0.2); color: #6ee7b7;">9.3/10</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600;">7.5/10</td>
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
                                Brigade Executive Officer Recommendation
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Lieutenant Colonel Michael R. Davis, 1st Armored BCT Executive Officer, recommends Brigade COA 2 with tactical modifications: (1) Enhanced battalion coordination for mobile defense synchronization across 32km front, (2) Increased reconnaissance and surveillance with cavalry squadron, (3) Accelerated counter-offensive preparation with additional artillery and air defense, (4) Improved logistics coordination with Romanian host nation support, (5) Enhanced intelligence sharing between battalions and adjacent brigades for tactical awareness and operational security.
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
                                Brigade-Level Risk Assessment Summary
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Primary tactical risks: (1) Battalion coordination during mobile defense across 32km brigade front with three maneuver battalions, (2) Logistics sustainment for 4,200 personnel across extended Romanian operational area, (3) Intelligence coordination between three battalions and adjacent brigades, (4) Transition timing from defensive to offensive operations based on enemy actions, (5) Romanian host nation coordination for civilian protection. Mitigation includes enhanced battle rhythm, standardized procedures, pre-positioned logistics, and continuous coordination protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Commander's Decision Process - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Colonel Wilson's Decision Conference -->
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
                            Brigade Commander's Decision Conference
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
                                Brigade Leadership Decision Conference
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Key Participants:</strong> Colonel David M. Wilson (Brigade Commander), Lieutenant Colonel Michael R. Davis (Executive Officer), Lieutenant Colonel James P. Anderson (1st Armor Battalion Commander), Lieutenant Colonel Sarah E. Johnson (2nd Armor Battalion Commander), Lieutenant Colonel Robert K. Miller (1st Infantry Battalion Commander), Major Lisa A. Brown (S-3 Operations), Major Mark T. Wilson (S-2 Intelligence), Romanian Major Ion Popescu (Host Nation Liaison), Division Liaison Officer Major Patricia L. Davis.
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
                                Brigade Commander's Analysis Process
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Colonel Wilson evaluated brigade COAs against division commander's guidance, tactical feasibility, and battalion integration requirements. Key decision factors: (1) Alignment with MG Thompson's Mobile Defense concept, (2) Battalion coordination and synchronization across 32km brigade front, (3) Logistics sustainment capability for extended operations, (4) Flexibility for transition to counter-offensive operations, (5) Romanian host nation coordination requirements. Decision matrix weighted tactical effectiveness (50%), logistics feasibility (20%), battalion coordination (20%), and risk management (10%).
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
                                Brigade Commander's Decision Statement
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                "After thorough analysis of staff recommendations and battalion commander input, I approve Brigade COA 2 (Mobile Defense) with the following modifications: enhanced battalion coordination procedures across our three maneuver battalions, increased reconnaissance and surveillance with cavalry squadron, improved logistics pre-positioning in Romanian territory, and enhanced intelligence sharing protocols. This approach supports division commander's intent while maximizing tactical flexibility and force preservation across our brigade sector."
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Battalion Coordination and Tactical Integration -->
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
                            <i class="fas fa-sitemap" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                            Battalion Coordination and Tactical Integration
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
                                <i class="fas fa-users-cog" style="margin-right: 6px; font-size: 12px;"></i>
                                Battalion Commander Coordination
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Colonel Wilson coordinated with battalion commanders via secure video conference for synchronized mobile defense execution across brigade sector. <strong>1st Armor Battalion (LTC Anderson):</strong> Northern sector mobile defense with A, B, and C Companies. <strong>2nd Armor Battalion (LTC Johnson):</strong> Central sector mobile defense with A, B, and C Companies. <strong>1st Infantry Battalion (LTC Miller):</strong> Southern sector and brigade reserve with A, B, and C Companies. Coordination includes phase line synchronization, mutual support procedures, and transition criteria.
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
                                <i class="fas fa-crosshairs" style="margin-right: 6px; font-size: 11px;"></i>
                                Tactical Integration and Fire Coordination
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Fire Support Coordination:</strong> Brigade artillery (1st Battalion, 77th Field Artillery Regiment) provides general support fires across battalion sectors. Battalion fire support elements coordinate direct support missions. <strong>Air Defense Integration:</strong> C Battery, 5th Battalion, 7th Air Defense Artillery Regiment provides brigade air defense with Avenger systems. <strong>Engineer Support:</strong> 16th Engineer Company provides mobility, counter-mobility, and survivability support across battalion sectors. <strong>Intelligence Integration:</strong> Brigade intelligence assets coordinate with battalion S-2 sections for tactical intelligence sharing and threat assessment.
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
                                Brigade Battle Rhythm and Coordination Procedures
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Daily brigade battle rhythm: 0430 - Intelligence update brief, 0630 - Battalion commanders' video conference, 1030 - Romanian host nation coordination meeting, 1430 - Operations update brief, 1830 - Division coordination call with MG Thompson. Weekly: Battalion commanders' conference, adjacent brigade coordination, Romanian host nation coordination, logistics synchronization meeting. Continuous: Intelligence sharing, tactical coordination, logistics status updates across all three battalions with Romanian authorities and adjacent brigades.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Sustainment Operations and Risk Management -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-loading" style="margin-right: 8px;"></i>
                    Brigade Sustainment Operations and Tactical Risk Management
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-warehouse" style="margin-right: 6px; color: #10b981;"></i>
                            Brigade Sustainment Architecture and Multi-Battalion Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Brigade Sustainment Command Structure:</strong> 1st Armored BCT Support Battalion provides brigade-level logistics coordination across three battalion sectors. Battalion support companies: A Company (1st AR BN), B Company (2nd AR BN), C Company (1st IN BN). Daily requirements: 4,200 personnel consumption - 70 tons ammunition, 105 tons fuel, 35 tons supplies. Distribution through Forward Support Companies at battalion level with Romanian host nation transportation augmentation.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Multi-Battalion Logistics Coordination:</strong> Brigade coordinates sustainment across 32km operational area with Romanian host nation support. Primary: Ground transportation with 25 Heavy Equipment Transporters. Secondary: Rail networks through Romania-Hungary corridor. Tertiary: Helicopter resupply through UH-60 assets. Romanian host nation support provides additional 10% capacity augmentation through civilian transportation and fuel distribution networks.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Medical Support Coordination:</strong> Brigade medical command coordinates Role 1 medical facilities at battalion level and Role 2 medical facility at brigade level. Medical evacuation through ground ambulances and UH-60 MEDEVAC to division medical facilities. Casualty estimates: 2-3% daily rate during mobile defense (84-126 casualties/day), medical treatment capacity: 75 patients/day across brigade area. Blood supply coordination through division medical command with 5-day operational reserves.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 6px; color: #10b981;"></i>
                            Brigade Tactical Risk Assessment and Mitigation
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Primary Tactical Risks:</strong> (1) Battalion coordination during mobile defense - LOW risk (20% probability, MEDIUM impact). Mitigation: Enhanced battle rhythm, standardized procedures, continuous coordination. (2) Logistics sustainment across 32km - MEDIUM risk (35% probability, MEDIUM impact). Mitigation: Pre-positioned stocks, Romanian host nation support, redundant routes. (3) Intelligence coordination between battalions - LOW risk (15% probability, LOW impact). Mitigation: Standardized intelligence sharing, continuous coordination.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Risk Mitigation Measures:</strong> Establish redundant command and control systems across three battalions. Implement distributed operations to reduce vulnerability to enemy long-range fires. Maintain brigade reserve (1st Infantry Battalion) for contingency operations and reinforcement. Develop branch plans for early/delayed transition to counter-offensive based on enemy actions and tactical success. Coordinate with division for fires support and intelligence sharing across brigade boundaries.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Contingency Planning:</strong> Branch Plan ALPHA: Accelerated counter-offensive if enemy weaker than assessed in brigade sector. Branch Plan BRAVO: Extended mobile defense if enemy capabilities exceed estimates. Branch Plan CHARLIE: Battalion sector reinforcement with brigade reserve. Branch Plan DELTA: Adjacent brigade coordination scenarios with force reallocation and coordination with division for additional resources and Romanian host nation support.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Brigade COA Approval Comprehensive Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-certificate" style="margin-right: 8px;"></i>
                    Brigade COA Approval Comprehensive Summary and Tactical Assessment
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chess-king" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Brigade Command Decision Excellence and Tactical Leadership
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Colonel Wilson's approval of Brigade COA 2 (Mobile Defense) demonstrates exemplary brigade-level command decision-making in Large Scale Combat Operations. The decision effectively translates division commander's tactical guidance into battalion-level execution across three battalion sectors spanning 32km. The approved COA integrates battalion coordination, logistics sustainment, and tactical flexibility into a coherent framework that maximizes force preservation while maintaining tactical effectiveness for transition to counter-offensive operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            The brigade commander's modifications (enhanced battalion coordination, increased reconnaissance and surveillance, improved logistics pre-positioning, enhanced intelligence sharing) demonstrate adaptive tactical leadership appropriate for brigade command responsibilities. The comprehensive coordination with three battalion commanders ensures unified execution while maintaining operational security and effectiveness across the extended brigade sector.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Brigade command authority delegation and coordination procedures ensure effective tactical execution while maintaining alignment with division objectives. The comprehensive risk assessment addresses tactical risks while providing contingency planning for adaptive responses to changing battlefield conditions and enemy actions throughout the mobile defense and counter-offensive phases.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-graduation-cap" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Professional Military Education and Tactical Planning Excellence
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            This comprehensive brigade-level COA approval example provides military professionals (O-3 through O-6) with authoritative guidance for conducting tactical planning and decision-making in complex joint environments. The scenario demonstrates integration of tactical planning doctrine, battalion coordination, and multi-domain operations planning at the brigade level, providing invaluable educational content for Intermediate Level Education curricula and company/field grade officer development programs.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Educational applications include Intermediate Level Education tactical planning courses, company and field grade officer development seminars, and tactical planning exercises requiring understanding of brigade-level command responsibilities and tactical decision-making processes. The scenario provides realistic context for understanding Large Scale Combat Operations complexity with multi-battalion coordination requirements.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Military professionals can utilize this example to understand brigade commander decision authority, tactical risk assessment methodologies, battalion coordination requirements, multi-domain operations coordination, and the critical importance of tactical thinking in contemporary military environments. The example emphasizes tactical leadership and comprehensive planning required for successful brigade-level command in Large Scale Combat Operations with proper downward scaffolding from division to brigade to battalion levels.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const brigadePracticalModule = {
    getContent() {
        return getBrigadeCOAApprovalExample();
    }
};

export default brigadePracticalModule;
