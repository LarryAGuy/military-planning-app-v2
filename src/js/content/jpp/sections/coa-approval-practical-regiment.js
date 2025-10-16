/**
 * JPP Step 6: Course of Action Approval - Regiment Echelon Practical Example
 * Large Scale Combat Operations (LSCO) - European Campaign
 * Operation STEADFAST GUARDIAN - 2nd Cavalry Regiment Implementation
 *
 * Educational Purpose: Demonstrates regiment-level COA approval processes in coalition LSCO environment
 * Command Level: 2nd Cavalry Regiment "Toujours Pret" (Colonel O-6)
 * Scenario: Implementation of brigade commander's approved Mobile Defense COA in reconnaissance sector
 *
 * Professional Military Education Applications:
 * - Intermediate Level Education tactical planning courses
 * - Company and Field Grade Officer development programs (O-3 through O-6)
 * - Advanced Military Studies Program
 * - Complex tactical planning exercises
 */

export function getRegimentCOAApprovalExample() {
    return `
        <div style="padding: 20px;">
            <!-- Regiment COA Approval Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-horse-head" style="margin-right: 12px; color: #8b5cf6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 6: COA Approval - Regiment Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Cavalry Regiment COA Approval Process</p>
                </div>
            </div>

            <!-- Regiment Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 8px;"></i>
                    European Campaign Regiment Scenario - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Regiment Command:</strong> 2nd Cavalry Regiment "Toujours Pret" - Reconnaissance Operations<br>
                            <strong>Regiment Commander:</strong> Colonel Patricia L. Davis, USA<br>
                            <strong>Tactical Sector:</strong> Eastern Romania Multi-Squadron Operations<br>
                            <strong>Mission Type:</strong> Large Scale Combat Operations (LSCO) - Tactical Level
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> 1st Squadron, 2nd Squadron, 3rd Squadron<br>
                            <strong>Regiment Force Structure:</strong> 2,800 personnel across 3 cavalry squadrons + support<br>
                            <strong>Tactical Scope:</strong> 45km front across eastern Romania reconnaissance sector<br>
                            <strong>Mission Timeline:</strong> 40-day reconnaissance and security operations with transition support
                        </p>
                    </div>
                </div>
            </div>

            <!-- Brigade Commander's Guidance to Regiment - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Brigade Commander's Mission to 2nd Cavalry Regiment -->
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
                            Brigade Commander's Mission to 2nd Cavalry Regiment
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
                                Colonel Wilson's Regiment Mission Statement
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                "Colonel Davis, 2nd Cavalry Regiment will conduct reconnaissance and security operations in eastern sector of 1st Armored BCT operational area as part of brigade Mobile Defense COA. Provide early warning and intelligence collection across 45km reconnaissance sector. Coordinate with adjacent cavalry units and maintain contact with division reconnaissance assets. Conduct screening operations and prepare for transition to counter-reconnaissance operations NLT 40 days. Maintain coordination with Romanian host nation authorities and ensure force preservation throughout reconnaissance operations."
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
                                Regiment Essential Tasks from Brigade
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Essential Task 1:</strong> Conduct reconnaissance and security operations across 45km regiment front with three cavalry squadrons. <strong>Essential Task 2:</strong> Provide early warning and intelligence collection for brigade operations. <strong>Essential Task 3:</strong> Maintain logistics sustainment for 2,800 personnel. <strong>Essential Task 4:</strong> Coordinate with Romanian host nation authorities for civilian protection. <strong>Essential Task 5:</strong> Prepare counter-reconnaissance capabilities for Phase 2 operations. <strong>Essential Task 6:</strong> Maintain operational security and communications with brigade headquarters.
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
                                Brigade Commander's Planning Guidance to Regiment
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Prioritize intelligence collection and early warning during reconnaissance operations. Maintain close coordination with adjacent cavalry units. Prepare for accelerated counter-reconnaissance timeline. Coordinate with Romanian authorities for civilian protection and movement control. Ensure operational security for reconnaissance operations planning. Maintain continuous coordination with brigade headquarters and adjacent units for synchronized operations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Regiment Tactical Environment and Constraints -->
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
                            Regiment Tactical Environment and Constraints
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
                                Regiment Area of Operations and Geographic Factors
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Regiment Sector:</strong> 45km front across eastern sector of 1st Armored BCT area. <strong>Terrain:</strong> Open plains, river obstacles (Prut River), mixed agricultural areas. <strong>Infrastructure:</strong> Limited road networks, border crossing points, observation posts. <strong>Weather:</strong> Continental climate, seasonal visibility considerations for reconnaissance operations. <strong>Population:</strong> 650,000 civilians requiring coordination with Romanian authorities for protection and movement control during reconnaissance operations.
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
                                Adjacent Unit Coordination at Regiment Level
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Adjacent Units:</strong> 3rd Cavalry Regiment (northern boundary), division reconnaissance assets (coordination). <strong>Boundary Coordination:</strong> Reconnaissance handoff procedures, mutual support protocols, intelligence sharing measures. <strong>Interoperability:</strong> Common operational picture through FBCB2/BFT systems, standardized procedures, shared intelligence. <strong>Coordination Requirements:</strong> Daily battle rhythm with adjacent cavalry liaison officers, boundary crossing procedures, intelligence sharing protocols. <strong>Romanian Coordination:</strong> Host nation liaison for civilian protection and border coordination.
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
                                Regiment Timeline and Tactical Constraints
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Phase 1 (Reconnaissance Operations):</strong> 40 days maximum duration in regiment sector. <strong>Phase 2 (Counter-Reconnaissance):</strong> Transition based on brigade commander's decision. <strong>Constraints:</strong> Romanian host nation coordination, logistics capacity, terrain limitations for cavalry operations. <strong>Decision Points:</strong> 10-day, 20-day, 30-day, 40-day assessments for phase transition. <strong>Flexibility:</strong> Branch plans for early/delayed transition based on enemy actions in regiment sector and adjacent unit situations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Regiment COA Development Summary - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Three Regiment-Level Courses of Action -->
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
                            Regiment-Level Courses of Action Analysis
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
                                Regiment COA 1 - FORWARD SQUADRON SCREEN
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Concept:</strong> Position 1st Squadron (northern sector), 2nd Squadron (central sector), 3rd Squadron (southern sector) in forward screening positions along Romanian border. Each squadron conducts area reconnaissance with minimal depth. Regiment reserve maintained at 10% strength. <strong>Force Allocation:</strong> 1st SQD (930 troops), 2nd SQD (930 troops), 3rd SQD (930 troops). <strong>Risk:</strong> Limited reconnaissance depth, vulnerability to enemy reconnaissance. <strong>Advantage:</strong> Immediate early warning. <strong>Timeline:</strong> 40-day screening operations with minimal repositioning.
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
                                Regiment COA 2 - ZONE RECONNAISSANCE (RECOMMENDED)
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> 1st and 2nd Squadrons conduct zone reconnaissance with planned repositioning to successive reconnaissance objectives. 3rd Squadron serves as regiment reserve for counter-reconnaissance and security. Emphasizes intelligence collection and tactical flexibility. <strong>Force Allocation:</strong> 1st SQD (930 troops - zone recon), 2nd SQD (930 troops - zone recon), 3rd SQD (930 troops - regiment reserve). <strong>Risk:</strong> Temporary intelligence gaps during repositioning. <strong>Advantage:</strong> Comprehensive intelligence collection, tactical flexibility. <strong>Timeline:</strong> 30-day zone reconnaissance with counter-reconnaissance preparation.
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
                                Regiment COA 3 - AGGRESSIVE RECONNAISSANCE
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Concept:</strong> Simultaneous reconnaissance and counter-reconnaissance operations within regiment sector. 1st Squadron (reconnaissance), 2nd Squadron (counter-reconnaissance), 3rd Squadron (exploitation and security). Requires immediate engagement of enemy reconnaissance forces. <strong>Force Allocation:</strong> 1st SQD (930 troops - reconnaissance), 2nd SQD (930 troops - counter-recon), 3rd SQD (930 troops - exploitation). <strong>Risk:</strong> High resource consumption, early detection risk. <strong>Advantage:</strong> Initiative retention, comprehensive intelligence. <strong>Timeline:</strong> 25-day aggressive operations with rapid intelligence collection.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Regiment Staff Analysis and Recommendation -->
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
                            Regiment Staff Analysis and Recommendation
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
                                Regiment COA Comparison Results
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
                                            <td style="padding: 6px; text-align: center;">8.5/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.6/10</td>
                                            <td style="padding: 6px; text-align: center;">8.7/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Acceptable</td>
                                            <td style="padding: 6px; text-align: center;">8.8/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.2/10</td>
                                            <td style="padding: 6px; text-align: center;">7.2/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Suitable</td>
                                            <td style="padding: 6px; text-align: center;">9.8/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.5/10</td>
                                            <td style="padding: 6px; text-align: center;">9.4/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Distinguishable</td>
                                            <td style="padding: 6px; text-align: center;">6.8/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.3/10</td>
                                            <td style="padding: 6px; text-align: center;">8.3/10</td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(16, 185, 129, 0.2);">
                                            <td style="padding: 6px; font-weight: 500;">Complete</td>
                                            <td style="padding: 6px; text-align: center;">8.1/10</td>
                                            <td style="padding: 6px; text-align: center; background: rgba(16, 185, 129, 0.1);">9.4/10</td>
                                            <td style="padding: 6px; text-align: center;">6.6/10</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 6px; font-weight: 600; color: #6ee7b7;">Overall Score</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600;">8.2/10</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600; background: rgba(16, 185, 129, 0.2); color: #6ee7b7;">9.4/10</td>
                                            <td style="padding: 6px; text-align: center; font-weight: 600;">7.7/10</td>
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
                                Regiment Executive Officer Recommendation
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Lieutenant Colonel Thomas R. Mitchell, 2nd Cavalry Regiment Executive Officer, recommends Regiment COA 2 with tactical modifications: (1) Enhanced squadron coordination for zone reconnaissance synchronization across 45km front, (2) Increased intelligence collection with unmanned aerial systems, (3) Accelerated counter-reconnaissance preparation with additional reconnaissance assets, (4) Improved logistics coordination with Romanian host nation support, (5) Enhanced intelligence sharing between squadrons and adjacent cavalry units for tactical awareness and operational security.
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
                                Regiment-Level Risk Assessment Summary
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Primary tactical risks: (1) Squadron coordination during zone reconnaissance across 45km regiment front with three cavalry squadrons, (2) Intelligence collection gaps during repositioning operations, (3) Logistics sustainment for 2,800 personnel across extended Romanian operational area, (4) Counter-reconnaissance timing based on enemy actions, (5) Romanian host nation coordination for border operations. Mitigation includes enhanced battle rhythm, standardized procedures, pre-positioned logistics, and continuous coordination protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Regiment Commander's Decision Process - 2x2 Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Colonel Davis's Decision Conference -->
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
                            Regiment Commander's Decision Conference
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
                                Regiment Leadership Decision Conference
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Key Participants:</strong> Colonel Patricia L. Davis (Regiment Commander), Lieutenant Colonel Thomas R. Mitchell (Executive Officer), Lieutenant Colonel Kevin M. Brown (1st Squadron Commander), Lieutenant Colonel Jennifer A. Wilson (2nd Squadron Commander), Lieutenant Colonel David P. Johnson (3rd Squadron Commander), Major Christopher L. Davis (S-3 Operations), Major Amanda R. Miller (S-2 Intelligence), Romanian Major Andrei Ionescu (Host Nation Liaison), Brigade Liaison Officer Major Steven K. Anderson.
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
                                Regiment Commander's Analysis Process
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Colonel Davis evaluated regiment COAs against brigade commander's guidance, reconnaissance feasibility, and squadron integration requirements. Key decision factors: (1) Alignment with COL Wilson's reconnaissance concept, (2) Squadron coordination and synchronization across 45km regiment front, (3) Intelligence collection capability for extended operations, (4) Flexibility for transition to counter-reconnaissance operations, (5) Romanian host nation coordination requirements. Decision matrix weighted intelligence effectiveness (40%), tactical feasibility (30%), squadron coordination (20%), and risk management (10%).
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
                                Regiment Commander's Decision Statement
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                "After thorough analysis of staff recommendations and squadron commander input, I approve Regiment COA 2 (Zone Reconnaissance) with the following modifications: enhanced squadron coordination procedures across our three cavalry squadrons, increased intelligence collection with unmanned aerial systems, improved logistics pre-positioning in Romanian territory, and enhanced intelligence sharing protocols. This approach supports brigade commander's intent while maximizing intelligence collection and tactical flexibility across our regiment sector."
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Squadron Coordination and Tactical Integration -->
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
                            Squadron Coordination and Tactical Integration
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
                                Squadron Commander Coordination
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Colonel Davis coordinated with squadron commanders via secure video conference for synchronized zone reconnaissance execution across regiment sector. <strong>1st Squadron (LTC Brown):</strong> Northern sector zone reconnaissance with A, B, and C Troops. <strong>2nd Squadron (LTC Wilson):</strong> Central sector zone reconnaissance with A, B, and C Troops. <strong>3rd Squadron (LTC Johnson):</strong> Southern sector and regiment reserve with A, B, and C Troops. Coordination includes reconnaissance handoff procedures, mutual support protocols, and intelligence sharing measures.
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
                                Tactical Integration and Intelligence Coordination
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                <strong>Intelligence Support Coordination:</strong> Regiment intelligence assets coordinate with squadron S-2 sections for tactical intelligence sharing and threat assessment. <strong>Reconnaissance Integration:</strong> Unmanned aerial systems provide regiment-level reconnaissance with ground cavalry coordination. <strong>Communications Support:</strong> Regiment signal assets provide secure communications across squadron sectors. <strong>Logistics Integration:</strong> Regiment support squadron coordinates with squadron support troops for logistics sustainment across 45km operational area.
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
                                Regiment Battle Rhythm and Coordination Procedures
                            </h6>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Daily regiment battle rhythm: 0400 - Intelligence update brief, 0600 - Squadron commanders' video conference, 1000 - Romanian host nation coordination meeting, 1400 - Operations update brief, 1800 - Brigade coordination call with COL Wilson. Weekly: Squadron commanders' conference, adjacent cavalry coordination, Romanian host nation coordination, logistics synchronization meeting. Continuous: Intelligence sharing, tactical coordination, logistics status updates across all three squadrons with Romanian authorities and adjacent cavalry units.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Regiment Sustainment Operations and Risk Management -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-truck-loading" style="margin-right: 8px;"></i>
                    Regiment Sustainment Operations and Tactical Risk Management
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-warehouse" style="margin-right: 6px; color: #10b981;"></i>
                            Regiment Sustainment Architecture and Multi-Squadron Coordination
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Regiment Sustainment Command Structure:</strong> 2nd Cavalry Regiment Support Squadron provides regiment-level logistics coordination across three squadron sectors. Squadron support troops: A Troop (1st SQD), B Troop (2nd SQD), C Troop (3rd SQD). Daily requirements: 2,800 personnel consumption - 45 tons ammunition, 70 tons fuel, 25 tons supplies. Distribution through Forward Support Troops at squadron level with Romanian host nation transportation augmentation.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Multi-Squadron Logistics Coordination:</strong> Regiment coordinates sustainment across 45km operational area with Romanian host nation support. Primary: Ground transportation with 15 Heavy Equipment Transporters. Secondary: Rail networks through Romania-Moldova corridor. Tertiary: Helicopter resupply through UH-60 assets. Romanian host nation support provides additional 15% capacity augmentation through civilian transportation and fuel distribution networks.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Medical Support Coordination:</strong> Regiment medical command coordinates Role 1 medical facilities at squadron level and Role 2 medical facility at regiment level. Medical evacuation through ground ambulances and UH-60 MEDEVAC to brigade medical facilities. Casualty estimates: 1-2% daily rate during reconnaissance (28-56 casualties/day), medical treatment capacity: 50 patients/day across regiment area. Blood supply coordination through brigade medical command with 3-day operational reserves.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-exclamation-triangle" style="margin-right: 6px; color: #10b981;"></i>
                            Regiment Tactical Risk Assessment and Mitigation
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Primary Tactical Risks:</strong> (1) Squadron coordination during zone reconnaissance - LOW risk (15% probability, MEDIUM impact). Mitigation: Enhanced battle rhythm, standardized procedures, continuous coordination. (2) Intelligence collection gaps during repositioning - MEDIUM risk (30% probability, MEDIUM impact). Mitigation: Overlapping reconnaissance zones, redundant intelligence assets. (3) Logistics sustainment across 45km - MEDIUM risk (25% probability, LOW impact). Mitigation: Pre-positioned stocks, Romanian host nation support, redundant routes.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            <strong>Tactical Risk Mitigation Measures:</strong> Establish redundant command and control systems across three squadrons. Implement distributed reconnaissance to reduce vulnerability to enemy counter-reconnaissance. Maintain regiment reserve (3rd Squadron) for contingency operations and reinforcement. Develop branch plans for early/delayed transition to counter-reconnaissance based on enemy actions and intelligence success. Coordinate with brigade for intelligence support and coordination across regiment boundaries.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Contingency Planning:</strong> Branch Plan ALPHA: Accelerated counter-reconnaissance if enemy reconnaissance weaker than assessed in regiment sector. Branch Plan BRAVO: Extended zone reconnaissance if enemy capabilities exceed estimates. Branch Plan CHARLIE: Squadron sector reinforcement with regiment reserve. Branch Plan DELTA: Adjacent cavalry coordination scenarios with intelligence sharing and coordination with brigade for additional resources and Romanian host nation support.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Regiment COA Approval Comprehensive Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                    <i class="fas fa-certificate" style="margin-right: 8px;"></i>
                    Regiment COA Approval Comprehensive Summary and Tactical Assessment
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-chess-king" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Regiment Command Decision Excellence and Tactical Leadership
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Colonel Davis's approval of Regiment COA 2 (Zone Reconnaissance) demonstrates exemplary regiment-level command decision-making in Large Scale Combat Operations. The decision effectively translates brigade commander's tactical guidance into squadron-level execution across three squadron sectors spanning 45km. The approved COA integrates squadron coordination, intelligence collection, and tactical flexibility into a coherent framework that maximizes intelligence effectiveness while maintaining tactical flexibility for transition to counter-reconnaissance operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            The regiment commander's modifications (enhanced squadron coordination, increased intelligence collection with unmanned aerial systems, improved logistics pre-positioning, enhanced intelligence sharing) demonstrate adaptive tactical leadership appropriate for regiment command responsibilities. The comprehensive coordination with three squadron commanders ensures unified execution while maintaining operational security and effectiveness across the extended regiment sector.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Regiment command authority delegation and coordination procedures ensure effective tactical execution while maintaining alignment with brigade objectives. The comprehensive risk assessment addresses tactical risks while providing contingency planning for adaptive responses to changing battlefield conditions and enemy actions throughout the zone reconnaissance and counter-reconnaissance phases.
                        </p>
                    </div>
                    <div>
                        <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                            <i class="fas fa-graduation-cap" style="margin-right: 6px; color: #8b5cf6;"></i>
                            Professional Military Education and Tactical Planning Excellence
                        </h4>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            This comprehensive regiment-level COA approval example provides military professionals (O-3 through O-6) with authoritative guidance for conducting tactical planning and decision-making in complex reconnaissance environments. The scenario demonstrates integration of tactical planning doctrine, squadron coordination, and intelligence operations planning at the regiment level, providing invaluable educational content for Intermediate Level Education curricula and company/field grade officer development programs.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 12px 0;">
                            Educational applications include Intermediate Level Education tactical planning courses, company and field grade officer development seminars, and tactical planning exercises requiring understanding of regiment-level command responsibilities and tactical decision-making processes. The scenario provides realistic context for understanding Large Scale Combat Operations complexity with multi-squadron coordination requirements and intelligence collection operations.
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            Military professionals can utilize this example to understand regiment commander decision authority, tactical risk assessment methodologies, squadron coordination requirements, intelligence operations coordination, and the critical importance of tactical thinking in contemporary military environments. The example emphasizes tactical leadership and comprehensive planning required for successful regiment-level command in Large Scale Combat Operations with proper downward scaffolding from brigade to regiment to squadron levels.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const regimentPracticalModule = {
    getContent() {
        return getRegimentCOAApprovalExample();
    }
};

export default regimentPracticalModule;
