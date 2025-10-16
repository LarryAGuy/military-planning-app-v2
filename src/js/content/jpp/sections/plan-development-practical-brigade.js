/**
 * JPP Step 7: Plan Development - Brigade Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign LSCO brigade-level plan development scenario
 * Authorized to exceed 300-line limit due to extensive tactical content requirements
 * Primary Sources: FM 5-0 (Operations Process), Chapter 4 - Plan Development; FM 3-96 (Brigade Operations), Chapter 3 - MDMP
 * Supporting Sources: FM 3-90 (Tactics), Chapter 5 - Brigade Operations; ADP 5-0 (Operations Process), Chapter 3 - MDMP
 * Doctrinal Focus: Military Decision Making Process (MDMP) integration with JPP Step 7 outputs at brigade level
 */

export function getBrigadePlanDevelopmentExample() {
    return `
        <div style="padding: 20px;">
            <!-- Brigade Plan Development Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-star" style="margin-right: 12px; color: #f59e0b; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 7: Plan Development - Brigade Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Brigade Tactical Planning and Battalion-Level Execution Guidance</p>
                </div>
            </div>

            <!-- Brigade Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f59e0b; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                    Brigade Tactical Implementation - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Brigade Command:</strong> 1st Infantry Brigade Combat Team (IBCT) - Tactical Sector Operations<br>
                            <strong>Commanding Officer:</strong> Colonel Sarah M. Thompson, USA (O-6)<br>
                            <strong>Brigade Area of Operations:</strong> Poznan-Wroclaw Defense Corridor - Division Southern Sector<br>
                            <strong>Mission Type:</strong> Multi-Battalion Large Scale Combat Operations (LSCO) Tactical Execution
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> 1st Battalion, 2nd Battalion, 3rd Battalion, Brigade Support Battalion<br>
                            <strong>Force Structure:</strong> 4,200 U.S. personnel across 3 Infantry Battalions, 1 Support Battalion<br>
                            <strong>Operational Area:</strong> 15km front with 12km depth (Defensive Sector with Counterattack Capability)<br>
                            <strong>Planning Timeline:</strong> 48-hour MDMP cycle with 12-hour execution preparation (LSCO compressed timeline)
                        </p>
                    </div>
                </div>
            </div>

            <!-- Brigade Tactical Planning Framework - 2xN Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Brigade Mission Analysis and Tactical Planning (Amber/Orange Theme) -->
                <div style="
                    background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(245, 158, 11, 0.4);
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(245, 158, 11, 0.1);
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%);
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
                            border-bottom: 2px solid rgba(245, 158, 11, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-bullseye" style="margin-right: 8px; color: #fcd34d;"></i>
                            Brigade Mission Analysis and Tactical Planning
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(245, 158, 11, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(245, 158, 11, 0.1);
                        ">
                            <h5 style="color: #fcd34d; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-clipboard-list" style="margin-right: 6px; color: #f59e0b;"></i>
                                MDMP Step 1: Brigade Mission Analysis and Higher Headquarters Intent
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade conducts comprehensive mission analysis integrating Division OPORD guidance with tactical terrain analysis. Focus on battalion task organization, combined arms integration, and adjacent unit coordination within 15km defensive sector.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(245, 158, 11, 0.25);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #fcd34d; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-map-marked-alt" style="margin-right: 6px; color: #f59e0b;"></i>
                                Brigade Tactical Mission Analysis Framework
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Higher Commander's Intent (Division):</strong> 1st Infantry Division defends Warsaw-Lodz Corridor against Russian 3rd Shock Army advance, maintaining defensive positions while preparing counterattack capabilities.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Brigade Mission Statement:</strong> 1st IBCT defends Poznan-Wroclaw sector (NAI 15-27) NLT 15 MAR 2025, destroys enemy reconnaissance elements, and maintains defensive integrity to support Division counterattack operations.</p>
                                <p style="margin: 0;"><strong>End State:</strong> Enemy advance halted at Phase Line EAGLE, Brigade maintains 75% combat effectiveness, prepared for follow-on offensive operations within 24 hours.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.10) 0%, rgba(245, 158, 11, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(245, 158, 11, 0.2);
                        ">
                            <h6 style="color: #fed7aa; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-tasks" style="margin-right: 6px; color: #f59e0b;"></i>
                                Brigade MDMP Products and Timeline
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>H-48:</strong> Brigade Mission Analysis Complete, Initial IPB Products</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-36:</strong> COA Development, Battalion Task Organization</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-24:</strong> COA Analysis, Synchronization Matrix Development</p>
                                <p style="margin: 0;">• <strong>H-12:</strong> OPORD Production, Battalion Mission Briefings</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Battalion Task Organization and Combined Arms Coordination (Green Theme) -->
                <div style="
                    background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%);
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(34, 197, 94, 0.4);
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(34, 197, 94, 0.1);
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.06) 0%, transparent 40%);
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
                            border-bottom: 2px solid rgba(34, 197, 94, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-sitemap" style="margin-right: 8px; color: #bbf7d0;"></i>
                            Battalion Task Organization and Combined Arms Coordination
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(34, 197, 94, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(34, 197, 94, 0.1);
                        ">
                            <h5 style="color: #bbf7d0; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-layer-group" style="margin-right: 6px; color: #22c55e;"></i>
                                MDMP Step 2: Battalion Task Organization and Combined Arms Integration
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade develops battalion task organization integrating infantry, armor, artillery, and engineer assets. Emphasizes combined arms coordination, mutual support, and tactical flexibility within defensive framework.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(34, 197, 94, 0.25);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #bbf7d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-users-cog" style="margin-right: 6px; color: #22c55e;"></i>
                                Brigade Battalion Task Organization Matrix
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>1st Battalion (Main Effort):</strong> 3x Infantry Companies, 1x Tank Company (attached), 1x Engineer Platoon, Forward Support Company. Mission: Defend NAI 15-19, destroy enemy reconnaissance.</p>
                                <p style="margin: 0 0 8px 0;"><strong>2nd Battalion (Supporting Effort):</strong> 3x Infantry Companies, 1x Bradley Company (attached), 1x Mortar Platoon, Forward Support Company. Mission: Defend NAI 20-24, maintain contact with adjacent units.</p>
                                <p style="margin: 0;"><strong>3rd Battalion (Reserve):</strong> 3x Infantry Companies, 1x Armor Company (attached), 1x Engineer Company, Forward Support Company. Mission: Brigade reserve, prepared for counterattack operations.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(34, 197, 94, 0.10) 0%, rgba(34, 197, 94, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(34, 197, 94, 0.2);
                        ">
                            <h6 style="color: #a7f3d0; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-link" style="margin-right: 6px; color: #22c55e;"></i>
                                Combined Arms Coordination Measures
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Fire Support:</strong> Brigade Artillery Battalion provides general support, priority to main effort</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Air Defense:</strong> Stinger teams positioned at critical nodes, integrated with Division ADA</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Engineer Support:</strong> Obstacle emplacement, mobility/countermobility operations</p>
                                <p style="margin: 0;">• <strong>Aviation Coordination:</strong> Attack helicopter support on-call, medical evacuation priority</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 3: Tactical Synchronization Matrix and Fire Support Coordination (Blue Theme) -->
                <div style="
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(59, 130, 246, 0.4);
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(59, 130, 246, 0.1);
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
                            <i class="fas fa-crosshairs" style="margin-right: 8px; color: #93c5fd;"></i>
                            Tactical Synchronization Matrix and Fire Support Coordination
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(59, 130, 246, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(59, 130, 246, 0.1);
                        ">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-table" style="margin-right: 6px; color: #3b82f6;"></i>
                                MDMP Step 4: Brigade Tactical Synchronization Matrix Development
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade develops comprehensive synchronization matrix integrating maneuver, fires, intelligence, and sustainment operations. Coordinates battalion actions with supporting fires and adjacent unit operations.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(59, 130, 246, 0.25);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-calendar-alt" style="margin-right: 6px; color: #3b82f6;"></i>
                                Brigade Synchronization Timeline and Control Measures
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Phase I (H-Hour to H+6):</strong> Initial defensive positions occupied, reconnaissance screen established, artillery registered on target reference points and final protective fires.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Phase II (H+6 to H+24):</strong> Enemy contact expected, coordinated fires on enemy formations, battalion mutual support, reserve positioning for counterattack.</p>
                                <p style="margin: 0;"><strong>Phase III (H+24 to H+48):</strong> Transition to offensive operations, exploitation of enemy weaknesses, coordination with Division follow-on forces.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.10) 0%, rgba(59, 130, 246, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(59, 130, 246, 0.2);
                        ">
                            <h6 style="color: #bfdbfe; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-bullseye" style="margin-right: 6px; color: #3b82f6;"></i>
                                Fire Support Coordination Measures
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Fire Support Coordination Line (FSCL):</strong> Phase Line BRAVO, 8km forward of FLOT</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Restrictive Fire Areas (RFA):</strong> Civilian population centers, friendly reconnaissance positions</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Target Reference Points:</strong> 12 pre-planned targets, priority to enemy assembly areas</p>
                                <p style="margin: 0;">• <strong>Call for Fire Procedures:</strong> Battalion FSOs coordinate through Brigade FSE, 3-minute response time</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Brigade OPORD Development and Battalion Mission Assignment (Red Theme) -->
                <div style="
                    background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%);
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(239, 68, 68, 0.4);
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(239, 68, 68, 0.1);
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.06) 0%, transparent 40%);
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
                            border-bottom: 2px solid rgba(239, 68, 68, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-file-alt" style="margin-right: 8px; color: #fca5a5;"></i>
                            Brigade OPORD Development and Battalion Mission Assignment
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(239, 68, 68, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(239, 68, 68, 0.1);
                        ">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-scroll" style="margin-right: 6px; color: #ef4444;"></i>
                                MDMP Step 5: Brigade OPORD Production and Dissemination
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade produces comprehensive OPORD following FM 5-0 format, assigns specific missions to subordinate battalions, and coordinates dissemination timeline to ensure adequate preparation time.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(239, 68, 68, 0.25);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #fca5a5; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-clipboard-check" style="margin-right: 6px; color: #ef4444;"></i>
                                Brigade OPORD Structure and Battalion Mission Assignments
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>OPORD Format:</strong> Five-paragraph format per FM 5-0, includes situation, mission, execution, sustainment, and command and signal. Annexes for fire support, engineer operations, and intelligence.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Battalion Missions:</strong> Each battalion receives specific defensive sector, engagement criteria, fire support priorities, and coordination requirements with adjacent units.</p>
                                <p style="margin: 0;"><strong>Dissemination Timeline:</strong> OPORD briefing H-12 hours, battalion confirmation briefs H-6 hours, final coordination H-2 hours before execution.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(239, 68, 68, 0.10) 0%, rgba(239, 68, 68, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(239, 68, 68, 0.2);
                        ">
                            <h6 style="color: #fecaca; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-handshake" style="margin-right: 6px; color: #ef4444;"></i>
                                Battalion Coordination and Confirmation Process
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Mission Confirmation:</strong> Battalion commanders confirm understanding of mission, boundaries, and coordination requirements</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Resource Allocation:</strong> Final coordination of attached units, fire support priorities, and logistical support</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Rehearsal Schedule:</strong> Combined arms rehearsal, communications check, and final preparations</p>
                                <p style="margin: 0;">• <strong>Contingency Planning:</strong> Branch and sequel plans for enemy actions, friendly casualties, and mission changes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 5: Brigade Intelligence Operations and Reconnaissance Integration (Amber/Orange Theme) -->
                <div style="
                    background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(245, 158, 11, 0.4);
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(245, 158, 11, 0.1);
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%);
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
                            border-bottom: 2px solid rgba(245, 158, 11, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-search" style="margin-right: 8px; color: #fcd34d;"></i>
                            Brigade Intelligence Operations and Reconnaissance Integration
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(245, 158, 11, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(245, 158, 11, 0.1);
                        ">
                            <h5 style="color: #fcd34d; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-eye" style="margin-right: 6px; color: #f59e0b;"></i>
                                Intelligence Preparation of the Battlefield (IPB) and Reconnaissance Operations
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade S-2 conducts comprehensive IPB analysis, integrates Division intelligence products, and coordinates reconnaissance assets to provide continuous enemy situation awareness and early warning.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(245, 158, 11, 0.25);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #fcd34d; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-binoculars" style="margin-right: 6px; color: #f59e0b;"></i>
                                Brigade Reconnaissance and Surveillance Plan
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Reconnaissance Screen:</strong> Brigade Reconnaissance Troop establishes screen line 5-8km forward of FLOT, provides early warning of enemy approach and composition.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Named Areas of Interest (NAI):</strong> 8 priority NAIs focused on enemy avenues of approach, assembly areas, and potential flanking routes through sector.</p>
                                <p style="margin: 0;"><strong>Intelligence Collection:</strong> Integration of human intelligence, signals intelligence, and imagery intelligence from Division and higher headquarters sources.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.10) 0%, rgba(245, 158, 11, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(245, 158, 11, 0.2);
                        ">
                            <h6 style="color: #fed7aa; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-satellite" style="margin-right: 6px; color: #f59e0b;"></i>
                                Intelligence Dissemination and Battle Damage Assessment
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Intelligence Reports:</strong> INTSUM every 6 hours, SPOTREP as required, immediate threat warnings</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Target Development:</strong> High-payoff target list, target selection standards, battle damage assessment procedures</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Counterintelligence:</strong> OPSEC measures, deception operations, force protection intelligence</p>
                                <p style="margin: 0;">• <strong>Intelligence Sharing:</strong> Coordination with adjacent brigades, Division G-2, and coalition partners</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Brigade Sustainment Operations and Logistics Coordination (Green Theme) -->
                <div style="
                    background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%);
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(34, 197, 94, 0.4);
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(34, 197, 94, 0.1);
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.06) 0%, transparent 40%);
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
                            border-bottom: 2px solid rgba(34, 197, 94, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-truck" style="margin-right: 8px; color: #bbf7d0;"></i>
                            Brigade Sustainment Operations and Logistics Coordination
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(34, 197, 94, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(34, 197, 94, 0.1);
                        ">
                            <h5 style="color: #bbf7d0; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-boxes" style="margin-right: 6px; color: #22c55e;"></i>
                                Brigade Support Battalion Operations and Supply Chain Management
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade Support Battalion provides comprehensive sustainment support including supply, maintenance, transportation, and medical services. Coordinates with Division Sustainment Brigade for continuous logistics flow.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(34, 197, 94, 0.25);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #bbf7d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-gas-pump" style="margin-right: 6px; color: #22c55e;"></i>
                                Sustainment Planning and Resource Management
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Class I (Subsistence):</strong> 72-hour supply on hand, resupply every 24 hours, field feeding operations, water purification and distribution.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Class III (Fuel):</strong> 48-hour supply forward, fuel distribution points, priority to combat vehicles, aviation fuel coordination.</p>
                                <p style="margin: 0;"><strong>Class V (Ammunition):</strong> Basic load plus 1 unit of fire, ammunition supply points, priority to main effort battalion, explosive ordnance disposal support.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(34, 197, 94, 0.10) 0%, rgba(34, 197, 94, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(34, 197, 94, 0.2);
                        ">
                            <h6 style="color: #a7f3d0; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-wrench" style="margin-right: 6px; color: #22c55e;"></i>
                                Maintenance Operations and Medical Support
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Maintenance Support:</strong> Field maintenance teams, recovery operations, parts supply, deadline equipment priorities</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Medical Operations:</strong> Brigade Aid Station, medical evacuation, casualty collection points, blood supply</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Transportation:</strong> Movement control, convoy operations, route security, traffic control points</p>
                                <p style="margin: 0;">• <strong>Field Services:</strong> Mortuary affairs, postal operations, legal support, chaplain services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 7: Brigade Engineer Operations and Mobility Support (Blue Theme) -->
                <div style="
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(59, 130, 246, 0.4);
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(59, 130, 246, 0.1);
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
                            <i class="fas fa-hard-hat" style="margin-right: 8px; color: #93c5fd;"></i>
                            Brigade Engineer Operations and Mobility Support
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(59, 130, 246, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(59, 130, 246, 0.1);
                        ">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-tools" style="margin-right: 6px; color: #3b82f6;"></i>
                                Engineer Support to Brigade Operations and Obstacle Integration
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade Engineer Battalion provides mobility, countermobility, and survivability support. Integrates obstacle plans with defensive scheme of maneuver and coordinates engineer assets across battalion sectors.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(59, 130, 246, 0.25);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-road" style="margin-right: 6px; color: #3b82f6;"></i>
                                Mobility and Countermobility Operations
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Obstacle Plan:</strong> Integrated obstacle system including minefields, anti-tank ditches, and wire obstacles. Coordinated with fires and positioned to support defensive positions.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Mobility Support:</strong> Route clearance, bridge construction, ford improvement, and assault breaching support for counterattack operations.</p>
                                <p style="margin: 0;"><strong>Survivability:</strong> Fighting position improvement, command post construction, ammunition storage points, and protective positions for critical assets.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.10) 0%, rgba(59, 130, 246, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(59, 130, 246, 0.2);
                        ">
                            <h6 style="color: #bfdbfe; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-bomb" style="margin-right: 6px; color: #3b82f6;"></i>
                                Engineer Coordination and Explosive Hazard Management
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Obstacle Control:</strong> Obstacle control measures, execution authority, removal procedures for friendly movement</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Explosive Ordnance Disposal:</strong> EOD support, unexploded ordnance clearance, improvised explosive device response</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Construction Support:</strong> Tactical infrastructure, helicopter landing zones, supply route improvement</p>
                                <p style="margin: 0;">• <strong>Environmental Considerations:</strong> Terrain analysis, soil conditions, weather impact on engineer operations</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Brigade Command and Control Operations (Red Theme) -->
                <div style="
                    background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%);
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(239, 68, 68, 0.4);
                    position: relative;
                    overflow: hidden;
                    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(239, 68, 68, 0.1);
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.06) 0%, transparent 40%);
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
                            border-bottom: 2px solid rgba(239, 68, 68, 0.3);
                            padding-bottom: 8px;
                        ">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px; color: #fca5a5;"></i>
                            Brigade Command and Control Operations
                        </h4>

                        <div style="
                            background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(239, 68, 68, 0.4);
                            margin-bottom: 16px;
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(239, 68, 68, 0.1);
                        ">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-radio" style="margin-right: 6px; color: #ef4444;"></i>
                                Brigade Command Post Operations and Communications Architecture
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade establishes robust command and control architecture integrating tactical communications, digital systems, and liaison elements. Maintains continuous communication with Division and subordinate battalions.
                            </p>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.06) 100%);
                            padding: 14px;
                            border-radius: 8px;
                            border: 1px solid rgba(239, 68, 68, 0.25);
                            margin-bottom: 14px;
                        ">
                            <h6 style="color: #fca5a5; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-network-wired" style="margin-right: 6px; color: #ef4444;"></i>
                                Command Post Organization and Battle Rhythm
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Main Command Post:</strong> Brigade commander, S-3 operations, fire support element, intelligence section. Primary decision-making and coordination node.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Tactical Command Post:</strong> Forward-deployed element with brigade commander or deputy, provides command presence and rapid decision-making capability.</p>
                                <p style="margin: 0;"><strong>Battle Rhythm:</strong> Commander's update briefings every 6 hours, staff synchronization meetings every 3 hours, continuous operations monitoring.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(239, 68, 68, 0.10) 0%, rgba(239, 68, 68, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(239, 68, 68, 0.2);
                        ">
                            <h6 style="color: #fecaca; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-shield-alt" style="margin-right: 6px; color: #ef4444;"></i>
                                Communications Security and Redundancy Measures
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Primary Communications:</strong> Secure digital networks, frequency-hopping radios, satellite communications</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Backup Systems:</strong> Alternate frequencies, messenger service, visual signals, liaison officer networks</p>
                                <p style="margin: 0 0 4px 0;">• <strong>COMSEC Procedures:</strong> Encryption key management, transmission security, electronic warfare countermeasures</p>
                                <p style="margin: 0;">• <strong>Information Management:</strong> Common operational picture, digital battle tracking, real-time intelligence sharing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Implementation Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 16px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f59e0b; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Brigade Plan Development Implementation Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Planning Products Completed:</strong> Brigade OPORD, Battalion Task Organization, Synchronization Matrix, Fire Support Plan, Intelligence Collection Plan, Sustainment Annex, Engineer Obstacle Plan, Communications Plan
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Coordination Requirements:</strong> Division coordination complete, adjacent unit liaison established, coalition integration confirmed, higher headquarters approval received, subordinate unit confirmation briefings conducted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const brigadePracticalModule = {
    getContent() {
        return getBrigadePlanDevelopmentExample();
    }
};

export default brigadePracticalModule;
