/**
 * JPP Step 6: Course of Action Approval - Division Echelon Practical Example
 * Large Scale Combat Operations (LSCO) - European Campaign
 * Operation STEADFAST GUARDIAN - 1st Armored Division Implementation
 *
 * Educational Purpose: Demonstrates division-level COA approval processes in coalition LSCO environment
 * Command Level: 1st Armored Division "Old Ironsides" (2-star Major General)
 * Scenario: Implementation of corps commander's approved Mobile Defense COA in western sector
 *
 * Professional Military Education Applications:
 * - Command and General Staff College tactical planning courses
 * - Intermediate Level Education programs (O-3 through O-6)
 * - Advanced Military Studies Program
 * - Complex tactical planning exercises
 */

export function getDivisionCOAApprovalExample() {
    return `
        <div style="padding: 20px;">
            <!-- Division COA Approval Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-tank" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 6: COA Approval - Division Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Division Command COA Approval Process</p>
                </div>
            </div>

            <!-- Division Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                    European Campaign Division Scenario - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Division Command:</strong> 1st Armored Division "Old Ironsides" - Western Sector Operations<br>
                            <strong>Division Commander:</strong> Major General Robert K. Thompson, USA<br>
                            <strong>Tactical Sector:</strong> Western Romania Multi-Brigade Operations<br>
                            <strong>Mission Type:</strong> Large Scale Combat Operations (LSCO) - Tactical Level
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> 1st Armored BCT, 3rd Armored BCT, 2nd Stryker BCT<br>
                            <strong>Division Force Structure:</strong> 17,000 personnel across 3 brigade combat teams<br>
                            <strong>Tactical Scope:</strong> 95km front across western Romania, eastern Hungary border<br>
                            <strong>Mission Timeline:</strong> 60-day mobile defense phase with transition to counter-offensive
                        </p>
                    </div>
                </div>
            </div>

            <!-- Corps Commander's Guidance to Division - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Corps Commander's Mission to 1st Armored Division -->
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
                            Corps Commander's Mission to 1st Armored Division
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
                                Lieutenant General Anderson's Division Mission Statement
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                "Major General Thompson, 1st Armored Division will conduct mobile defense operations in western sector of V Corps operational area as part of corps Mobile Defense COA. Coordinate with 3rd Infantry Division (eastern boundary) and maintain contact with 1st Cavalry Division (corps reserve). Conduct planned withdrawal to Phase Line CHARLIE if required. Prepare for transition to counter-offensive operations NLT 60 days. Maintain coordination with Romanian host nation authorities and ensure force preservation throughout mobile defense phase."
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
                                Division Essential Tasks from Corps
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Essential Task 1:</strong> Conduct mobile defense across 95km division front with three brigade combat teams. <strong>Essential Task 2:</strong> Maintain coordination with 3rd Infantry Division on eastern boundary. <strong>Essential Task 3:</strong> Maintain logistics sustainment for 17,000 personnel. <strong>Essential Task 4:</strong> Coordinate with Romanian host nation authorities for civilian protection. <strong>Essential Task 5:</strong> Prepare counter-offensive capabilities for Phase 2 operations. <strong>Essential Task 6:</strong> Maintain operational security and communications with corps headquarters.
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
                                Corps Commander's Planning Guidance to Division
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Prioritize force preservation during mobile defense operations. Maintain close coordination with adjacent divisions. Prepare for accelerated counter-offensive timeline. Coordinate with Romanian authorities for civilian protection and movement control. Ensure operational security for tactical operations planning. Maintain continuous coordination with corps headquarters and adjacent divisions for synchronized operations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Division Tactical Environment and Constraints -->
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
                            Division Tactical Environment and Constraints
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
                                Division Area of Operations and Geographic Factors
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Division Sector:</strong> 95km front across western Romania, eastern Hungary border region. <strong>Terrain:</strong> Rolling hills, river obstacles (Mureș River), mixed agricultural/forested areas. <strong>Infrastructure:</strong> Limited road networks, rail lines, small airfields. <strong>Weather:</strong> Continental climate, seasonal mobility considerations for armored operations. <strong>Population:</strong> 2.5 million civilians requiring coordination with Romanian authorities for protection and movement control during mobile defense operations.
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
                                Adjacent Unit Coordination at Division Level
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Adjacent Units:</strong> 3rd Infantry Division (eastern boundary), 1st Cavalry Division (corps reserve, potential reinforcement). <strong>Boundary Coordination:</strong> Phase line synchronization, mutual support procedures, fire coordination measures. <strong>Interoperability:</strong> Common operational picture through FBCB2/BFT systems, standardized procedures, shared intelligence. <strong>Coordination Requirements:</strong> Daily battle rhythm with adjacent division liaison officers, boundary crossing procedures, mutual support protocols. <strong>Romanian Coordination:</strong> Host nation liaison for civilian protection and infrastructure use.
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
                                Division Timeline and Tactical Constraints
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Phase 1 (Mobile Defense):</strong> 60 days maximum duration in division sector. <strong>Phase 2 (Counter-Offensive):</strong> Transition based on corps commander's decision. <strong>Constraints:</strong> Romanian host nation coordination, logistics capacity, terrain limitations for armored operations. <strong>Decision Points:</strong> 20-day, 40-day, 60-day assessments for phase transition. <strong>Flexibility:</strong> Branch plans for early/delayed transition based on enemy actions in division sector and adjacent unit situations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division COA Development Summary - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Three Division-Level Courses of Action -->
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
                            Division-Level Courses of Action Analysis
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
                                Division COA 1 - FORWARD BRIGADE DEFENSE
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Concept:</strong> Position 1st Armored BCT (northern sector), 3rd Armored BCT (central sector), 2nd Stryker BCT (southern sector) in forward defensive positions along Romanian border. Each brigade conducts area defense with minimal depth. Division reserve maintained at 10% strength. <strong>Force Allocation:</strong> 1st ABCT (6,000 troops), 3rd ABCT (6,000 troops), 2nd SBCT (5,000 troops). <strong>Risk:</strong> High casualties, limited tactical flexibility. <strong>Advantage:</strong> Immediate territorial defense. <strong>Timeline:</strong> 60-day defensive operations with minimal withdrawal.
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
                                Division COA 2 - MOBILE DEFENSE (RECOMMENDED)
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> 1st and 3rd Armored BCTs conduct mobile defense with planned withdrawal to Phase Line CHARLIE. 2nd Stryker BCT serves as division reserve for counter-attacks and reconnaissance. Emphasizes force preservation and tactical flexibility. <strong>Force Allocation:</strong> 1st ABCT (6,000 troops - mobile defense), 3rd ABCT (6,000 troops - mobile defense), 2nd SBCT (5,000 troops - division reserve). <strong>Risk:</strong> Temporary territorial loss. <strong>Advantage:</strong> Force preservation, tactical flexibility. <strong>Timeline:</strong> 45-day mobile defense with counter-attack preparation.
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
                                Division COA 3 - IMMEDIATE COUNTER-ATTACK
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> Simultaneous defensive and offensive operations within division sector. 1st Armored BCT (defense), 3rd Armored BCT (counter-attack), 2nd Stryker BCT (exploitation and reconnaissance). Requires immediate transition to offensive operations. <strong>Force Allocation:</strong> 1st ABCT (6,000 troops - defensive), 3rd ABCT (6,000 troops - counter-attack), 2nd SBCT (5,000 troops - exploitation). <strong>Risk:</strong> High resource consumption, coordination complexity. <strong>Advantage:</strong> Initiative retention, tactical momentum. <strong>Timeline:</strong> 30-day decisive operations with rapid transition.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Division Staff Analysis and Recommendation -->
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
                            Division Staff Analysis and Recommendation
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
                                Division COA Comparison Results
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
                                            <td style="padding: 6px; text-align: center;">7.8/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.3/10</td>
                                            <td style="padding: 6px; text-align: center;">8.1/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Acceptable</td>
                                            <td style="padding: 6px; text-align: center;">8.7/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">8.9/10</td>
                                            <td style="padding: 6px; text-align: center;">6.8/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Suitable</td>
                                            <td style="padding: 6px; text-align: center;">9.5/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.2/10</td>
                                            <td style="padding: 6px; text-align: center;">9.0/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Distinguishable</td>
                                            <td style="padding: 6px; text-align: center;">6.4/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.0/10</td>
                                            <td style="padding: 6px; text-align: center;">7.8/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Complete</td>
                                            <td style="padding: 6px; text-align: center;">7.6/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.1/10</td>
                                            <td style="padding: 6px; text-align: center;">6.2/10</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 6px; font-weight: 600; color: #6ee7b7;">Overall Score</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600;">7.8/10</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600; background: rgba(16, 185, 129, 0.2); color: #6ee7b7;">9.1/10</td>
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
                                Division Chief of Staff Recommendation
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Brigadier General Jennifer L. Martinez, 1st Armored Division Chief of Staff, recommends Division COA 2 with tactical modifications: (1) Enhanced brigade coordination for mobile defense synchronization across 95km front, (2) Increased reconnaissance and surveillance with 2nd Stryker BCT, (3) Accelerated counter-offensive preparation with additional artillery and air defense, (4) Improved logistics coordination with Romanian host nation support, (5) Enhanced intelligence sharing between brigades and adjacent divisions for tactical awareness and operational security.
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
                                Division-Level Risk Assessment Summary
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Primary tactical risks: (1) Brigade coordination during mobile defense across 95km division front with three brigade combat teams, (2) Logistics sustainment for 17,000 personnel across extended Romanian operational area, (3) Intelligence coordination between three brigades and adjacent divisions, (4) Transition timing from defensive to offensive operations based on enemy actions, (5) Romanian host nation coordination for civilian protection. Mitigation includes enhanced battle rhythm, standardized procedures, pre-positioned logistics, and continuous coordination protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Commander's Decision Process - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Major General Thompson's Decision Conference -->
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
                            Division Commander's Decision Conference
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
                                Division Leadership Decision Conference
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Key Participants:</strong> Major General Robert K. Thompson (Division Commander), Brigadier General Jennifer L. Martinez (Chief of Staff), Colonel David M. Wilson (1st Armored BCT Commander), Colonel Sarah E. Johnson (3rd Armored BCT Commander), Colonel Michael R. Davis (2nd Stryker BCT Commander), Colonel Lisa A. Brown (G-3 Operations), Colonel Mark T. Anderson (G-2 Intelligence), Romanian Lieutenant Colonel Ion Popescu (Host Nation Liaison), Corps Liaison Officer Lieutenant Colonel James P. Miller.
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
                                Division Commander's Analysis Process
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Major General Thompson evaluated division COAs against corps commander's guidance, tactical feasibility, and brigade integration requirements. Key decision factors: (1) Alignment with LTG Anderson's Mobile Defense concept, (2) Brigade coordination and synchronization across 95km division front, (3) Logistics sustainment capability for extended operations, (4) Flexibility for transition to counter-offensive operations, (5) Romanian host nation coordination requirements. Decision matrix weighted tactical effectiveness (45%), logistics feasibility (25%), brigade coordination (20%), and risk management (10%).
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
                                Division Commander's Decision Statement
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                "After thorough analysis of staff recommendations and brigade commander input, I approve Division COA 2 (Mobile Defense) with the following modifications: enhanced brigade coordination procedures across our three brigade combat teams, increased reconnaissance and surveillance with 2nd Stryker BCT, improved logistics pre-positioning in Romanian territory, and enhanced intelligence sharing protocols. This approach supports corps commander's intent while maximizing tactical flexibility and force preservation across our division sector."
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Brigade Coordination and Tactical Integration -->
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
                            Brigade Coordination and Tactical Integration
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
                                Brigade Commander Coordination
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Major General Thompson coordinated with brigade commanders via secure video conference for synchronized mobile defense execution across division sector. <strong>1st Armored BCT (COL Wilson):</strong> Northern sector mobile defense with 1st and 2nd Armor Battalions, 1st Infantry Battalion. <strong>3rd Armored BCT (COL Johnson):</strong> Central sector mobile defense with 3rd and 4th Armor Battalions, 3rd Infantry Battalion. <strong>2nd Stryker BCT (COL Davis):</strong> Southern sector and division reserve with 1st, 2nd, and 3rd Stryker Battalions. Coordination includes phase line synchronization, mutual support procedures, and transition criteria.
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
                                <strong>Fire Support Coordination:</strong> Division artillery (1st Battalion, 94th Field Artillery Regiment) provides general support fires across brigade sectors. Brigade fire support elements coordinate direct support missions. <strong>Air Defense Integration:</strong> 5th Battalion, 7th Air Defense Artillery Regiment provides division air defense with Patriot and Avenger systems. <strong>Engineer Support:</strong> 16th Engineer Battalion provides mobility, counter-mobility, and survivability support across brigade sectors. <strong>Intelligence Integration:</strong> Division intelligence assets coordinate with brigade S-2 sections for tactical intelligence sharing and threat assessment.
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
                                Division Battle Rhythm and Coordination Procedures
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Daily division battle rhythm: 0500 - Intelligence update brief, 0700 - Brigade commanders' video conference, 1100 - Romanian host nation coordination meeting, 1500 - Operations update brief, 1900 - Corps coordination call with LTG Anderson. Weekly: Brigade commanders' conference, adjacent division coordination, Romanian host nation coordination, logistics synchronization meeting. Continuous: Intelligence sharing, tactical coordination, logistics status updates across all three brigades with Romanian authorities and adjacent divisions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Division Sustainment Operations and Risk Management -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-loading" style="margin-right: 8px;"></i>
                    Division Sustainment Operations and Tactical Risk Management
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-warehouse" style="margin-right: 6px; color: #10b981;"></i>
                            Division Sustainment Architecture and Multi-Brigade Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Division Sustainment Command Structure:</strong> 1st Armored Division Sustainment Brigade provides division-level logistics coordination across three brigade sectors. Brigade support battalions: 1st Armored BCT Support Battalion, 3rd Armored BCT Support Battalion, 2nd Stryker BCT Support Battalion. Daily requirements: 17,000 personnel consumption - 280 tons ammunition, 420 tons fuel, 140 tons supplies. Distribution through Forward Support Companies at brigade level with Romanian host nation transportation augmentation.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Multi-Brigade Logistics Coordination:</strong> Division coordinates sustainment across 95km operational area with Romanian host nation support. Primary: Ground transportation with 85 Heavy Equipment Transporters. Secondary: Rail networks through Romania-Hungary corridor. Tertiary: Helicopter resupply through UH-60 and CH-47 assets. Romanian host nation support provides additional 15% capacity augmentation through civilian transportation and fuel distribution networks.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Medical Support Coordination:</strong> Division medical command coordinates Role 1 medical facilities at brigade level and Role 2 medical facility at division level. Medical evacuation through ground ambulances and UH-60 MEDEVAC to corps medical facilities. Casualty estimates: 2-3% daily rate during mobile defense (340-510 casualties/day), medical treatment capacity: 300 patients/day across division area. Blood supply coordination through corps medical command with 7-day operational reserves.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 6px; color: #10b981;"></i>
                            Division Tactical Risk Assessment and Mitigation
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Primary Tactical Risks:</strong> (1) Brigade coordination during mobile defense - MEDIUM risk (25% probability, HIGH impact). Mitigation: Enhanced battle rhythm, standardized procedures, continuous coordination. (2) Logistics sustainment across 95km - MEDIUM risk (40% probability, MEDIUM impact). Mitigation: Pre-positioned stocks, Romanian host nation support, redundant routes. (3) Intelligence coordination between brigades - LOW risk (20% probability, MEDIUM impact). Mitigation: Standardized intelligence sharing, continuous coordination.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Risk Mitigation Measures:</strong> Establish redundant command and control systems across three brigades. Implement distributed operations to reduce vulnerability to enemy long-range fires. Maintain division reserve (2nd Stryker BCT) for contingency operations and reinforcement. Develop branch plans for early/delayed transition to counter-offensive based on enemy actions and tactical success. Coordinate with corps for fires support and intelligence sharing across division boundaries.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Contingency Planning:</strong> Branch Plan ALPHA: Accelerated counter-offensive if enemy weaker than assessed in division sector. Branch Plan BRAVO: Extended mobile defense if enemy capabilities exceed estimates. Branch Plan CHARLIE: Brigade sector reinforcement with division reserve. Branch Plan DELTA: Adjacent division coordination scenarios with force reallocation and coordination with corps for additional resources and Romanian host nation support.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Division COA Approval Comprehensive Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-certificate" style="margin-right: 8px;"></i>
                    Division COA Approval Comprehensive Summary and Tactical Assessment
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chess-king" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Division Command Decision Excellence and Tactical Leadership
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Major General Thompson's approval of Division COA 2 (Mobile Defense) demonstrates exemplary division-level command decision-making in Large Scale Combat Operations. The decision effectively translates corps commander's tactical guidance into brigade-level execution across three brigade sectors spanning 95km. The approved COA integrates brigade coordination, logistics sustainment, and tactical flexibility into a coherent framework that maximizes force preservation while maintaining tactical effectiveness for transition to counter-offensive operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            The division commander's modifications (enhanced brigade coordination, increased reconnaissance and surveillance, improved logistics pre-positioning, enhanced intelligence sharing) demonstrate adaptive tactical leadership appropriate for division command responsibilities. The comprehensive coordination with three brigade commanders ensures unified execution while maintaining operational security and effectiveness across the extended division sector.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Division command authority delegation and coordination procedures ensure effective tactical execution while maintaining alignment with corps objectives. The comprehensive risk assessment addresses tactical risks while providing contingency planning for adaptive responses to changing battlefield conditions and enemy actions throughout the mobile defense and counter-offensive phases.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-graduation-cap" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Professional Military Education and Tactical Planning Excellence
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            This comprehensive division-level COA approval example provides military professionals (O-3 through O-6) with authoritative guidance for conducting tactical planning and decision-making in complex joint environments. The scenario demonstrates integration of tactical planning doctrine, brigade coordination, and multi-domain operations planning at the division level, providing invaluable educational content for Intermediate Level Education curricula and company/field grade officer development programs.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Educational applications include Command and General Staff College tactical planning courses, Intermediate Level Education programs, company and field grade officer development seminars, and tactical planning exercises requiring understanding of division-level command responsibilities and tactical decision-making processes. The scenario provides realistic context for understanding Large Scale Combat Operations complexity with multi-brigade coordination requirements.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Military professionals can utilize this example to understand division commander decision authority, tactical risk assessment methodologies, brigade coordination requirements, multi-domain operations coordination, and the critical importance of tactical thinking in contemporary military environments. The example emphasizes tactical leadership and comprehensive planning required for successful division-level command in Large Scale Combat Operations with proper downward scaffolding from corps to division to brigade levels.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const divisionPracticalModule = {
    getContent() {
        return getDivisionCOAApprovalExample();
    }
};

export default divisionPracticalModule;
