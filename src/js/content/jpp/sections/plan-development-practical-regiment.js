/**
 * JPP Step 7: Plan Development - Regiment Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign LSCO regiment-level plan development scenario
 * Authorized to exceed 300-line limit due to extensive tactical content requirements
 * Primary Sources: FM 5-0 (Operations Process), Chapter 4 - Plan Development; FM 3-20 (Reconnaissance), Chapter 4 - Regiment Operations
 * Supporting Sources: FM 3-90 (Tactics), Chapter 6 - Regiment Operations; ADP 5-0 (Operations Process), Chapter 3 - MDMP
 * Doctrinal Focus: Military Decision Making Process (MDMP) integration with JPP Step 7 outputs at regiment level
 */

export function getRegimentPlanDevelopmentExample() {
    return `
        <div style="padding: 20px;">
            <!-- Regiment Plan Development Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-horse-head" style="margin-right: 12px; color: #22c55e; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 7: Plan Development - Regiment Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Regiment Reconnaissance Operations and Squadron-Level Coordination</p>
                </div>
            </div>

            <!-- Regiment Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #22c55e; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-binoculars" style="margin-right: 8px;"></i>
                    Regiment Reconnaissance Implementation - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Regiment Command:</strong> 2nd Cavalry Regiment (Stryker) - Division Reconnaissance Operations<br>
                            <strong>Commanding Officer:</strong> Colonel Michael R. Davidson, USA (O-6)<br>
                            <strong>Regiment Area of Operations:</strong> Krakow-Katowice Reconnaissance Zone - Division Eastern Flank<br>
                            <strong>Mission Type:</strong> Multi-Squadron Large Scale Combat Operations (LSCO) Reconnaissance and Security
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> 1st Squadron, 2nd Squadron, 3rd Squadron, Regiment Support Squadron<br>
                            <strong>Force Structure:</strong> 3,400 U.S. personnel across 3 Cavalry Squadrons, 1 Support Squadron<br>
                            <strong>Operational Area:</strong> 25km front with 20km depth (Reconnaissance and Security Operations)<br>
                            <strong>Planning Timeline:</strong> 36-hour MDMP cycle with 8-hour execution preparation (LSCO compressed timeline)
                        </p>
                    </div>
                </div>
            </div>

            <!-- Regiment Tactical Planning Framework - 2xN Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Regiment Mission Analysis and Reconnaissance Planning (Amber/Orange Theme) -->
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
                            <i class="fas fa-search-location" style="margin-right: 8px; color: #fcd34d;"></i>
                            Regiment Mission Analysis and Reconnaissance Planning
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
                                <i class="fas fa-map-marked" style="margin-right: 6px; color: #f59e0b;"></i>
                                MDMP Step 1: Regiment Mission Analysis and Division Reconnaissance Requirements
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment conducts comprehensive mission analysis integrating Division reconnaissance requirements with terrain analysis. Focus on squadron task organization, reconnaissance objectives, and security operations within 25km zone.
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
                                <i class="fas fa-crosshairs" style="margin-right: 6px; color: #f59e0b;"></i>
                                Regiment Reconnaissance Mission Analysis Framework
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Higher Commander's Intent (Division):</strong> 1st Infantry Division requires continuous reconnaissance of eastern approaches, early warning of enemy movement, and security for main body operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Regiment Mission Statement:</strong> 2nd Cavalry Regiment conducts reconnaissance and security operations in AO EAGLE (NAI 28-45) NLT 16 MAR 2025, provides early warning of enemy approach, and maintains contact with enemy forces.</p>
                                <p style="margin: 0;"><strong>End State:</strong> Enemy disposition and intentions identified, Division provided 6-hour early warning, Regiment maintains 80% operational readiness for follow-on missions.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.10) 0%, rgba(245, 158, 11, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(245, 158, 11, 0.2);
                        ">
                            <h6 style="color: #fed7aa; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-clock" style="margin-right: 6px; color: #f59e0b;"></i>
                                Regiment MDMP Products and Timeline
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>H-36:</strong> Regiment Mission Analysis Complete, Initial Reconnaissance Plan</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-24:</strong> COA Development, Squadron Task Organization</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-12:</strong> COA Analysis, Reconnaissance Synchronization Matrix</p>
                                <p style="margin: 0;">• <strong>H-8:</strong> OPORD Production, Squadron Mission Briefings</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Squadron Task Organization and Reconnaissance Assets (Green Theme) -->
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
                            <i class="fas fa-users-cog" style="margin-right: 8px; color: #bbf7d0;"></i>
                            Squadron Task Organization and Reconnaissance Assets
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
                                <i class="fas fa-chess-knight" style="margin-right: 6px; color: #22c55e;"></i>
                                MDMP Step 2: Squadron Task Organization and Asset Allocation
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment develops squadron task organization integrating Stryker vehicles, reconnaissance assets, and supporting elements. Emphasizes mobility, stealth, and information collection capabilities.
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
                                <i class="fas fa-layer-group" style="margin-right: 6px; color: #22c55e;"></i>
                                Regiment Squadron Task Organization Matrix
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>1st Squadron (Main Effort):</strong> 3x Cavalry Troops, 1x Tank Company (attached), Aviation Section. Mission: Zone reconnaissance NAI 28-35, identify enemy main body.</p>
                                <p style="margin: 0 0 8px 0;"><strong>2nd Squadron (Supporting Effort):</strong> 3x Cavalry Troops, 1x Engineer Platoon, CBRN Section. Mission: Area reconnaissance NAI 36-40, assess enemy capabilities.</p>
                                <p style="margin: 0;"><strong>3rd Squadron (Economy of Force):</strong> 2x Cavalry Troops, 1x Military Intelligence Company, Electronic Warfare Section. Mission: Route reconnaissance NAI 41-45, electronic surveillance.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(34, 197, 94, 0.10) 0%, rgba(34, 197, 94, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(34, 197, 94, 0.2);
                        ">
                            <h6 style="color: #a7f3d0; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-helicopter" style="margin-right: 6px; color: #22c55e;"></i>
                                Reconnaissance Asset Integration and Support
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Aviation Support:</strong> Attack reconnaissance helicopters, unmanned aerial systems, aerial reconnaissance</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Intelligence Assets:</strong> HUMINT teams, SIGINT collection, imagery analysis, electronic warfare</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Fire Support:</strong> Mortar sections, artillery forward observers, close air support coordination</p>
                                <p style="margin: 0;">• <strong>Sustainment:</strong> Forward support companies, medical evacuation, maintenance recovery teams</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 3: Regiment Reconnaissance Synchronization Matrix (Blue Theme) -->
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
                            <i class="fas fa-project-diagram" style="margin-right: 8px; color: #93c5fd;"></i>
                            Regiment Reconnaissance Synchronization Matrix
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
                                MDMP Step 3: Regiment Reconnaissance Synchronization and Squadron Coordination
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment develops comprehensive synchronization matrix integrating reconnaissance operations, intelligence collection, and squadron movements. Coordinates timing and sequencing of reconnaissance activities across multiple named areas of interest.
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
                                Regiment Reconnaissance Timeline and Control Measures
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Phase I (H-Hour to H+8):</strong> Initial reconnaissance screen established, squadron movement to assigned NAIs, communications check with Division G-2, initial contact reports.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Phase II (H+8 to H+24):</strong> Detailed reconnaissance of enemy positions, pattern analysis, electronic warfare collection, coordination with adjacent reconnaissance units.</p>
                                <p style="margin: 0;"><strong>Phase III (H+24 to H+36):</strong> Continuous surveillance, enemy movement tracking, preparation for follow-on operations, handoff to main body forces.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.10) 0%, rgba(59, 130, 246, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(59, 130, 246, 0.2);
                        ">
                            <h6 style="color: #bfdbfe; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-crosshairs" style="margin-right: 6px; color: #3b82f6;"></i>
                                Reconnaissance Control Measures and Coordination Procedures
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Reconnaissance Handover Lines:</strong> Phase Line ALPHA (initial), Phase Line BRAVO (intermediate), Phase Line CHARLIE (final)</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Contact Procedures:</strong> Immediate SPOTREP, detailed SALUTE reports, digital battle tracking updates</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Withdrawal Criteria:</strong> Enemy strength assessment, mission accomplishment, casualty thresholds</p>
                                <p style="margin: 0;">• <strong>Information Requirements:</strong> Enemy composition, disposition, activities, capabilities, and probable courses of action</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Squadron OPORD Development and Mission Assignment (Red Theme) -->
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
                            Squadron OPORD Development and Mission Assignment
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
                                MDMP Step 4: Regiment OPORD Production and Squadron Mission Dissemination
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment produces comprehensive reconnaissance OPORD following FM 5-0 format, assigns specific reconnaissance missions to subordinate squadrons, and coordinates dissemination timeline for rapid deployment.
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
                                Regiment OPORD Structure and Squadron Mission Assignments
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>OPORD Format:</strong> Five-paragraph format per FM 5-0 with reconnaissance-specific annexes including intelligence collection plan, communications plan, and withdrawal procedures.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Squadron Missions:</strong> Each squadron receives specific reconnaissance zone, priority intelligence requirements, contact procedures, and coordination requirements with adjacent units.</p>
                                <p style="margin: 0;"><strong>Dissemination Timeline:</strong> OPORD briefing H-8 hours, squadron confirmation briefs H-4 hours, final coordination H-1 hour before execution.</p>
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
                                Squadron Coordination and Confirmation Process
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Mission Confirmation:</strong> Squadron commanders confirm understanding of reconnaissance objectives, boundaries, and reporting requirements</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Resource Allocation:</strong> Final coordination of attached intelligence assets, fire support priorities, and logistical support</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Rehearsal Schedule:</strong> Reconnaissance rehearsal, communications check, and final movement preparations</p>
                                <p style="margin: 0;">• <strong>Contingency Planning:</strong> Branch and sequel plans for enemy contact, equipment failure, and mission changes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 5: Regiment Intelligence Collection Operations (Amber/Orange Theme) -->
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
                            Regiment Intelligence Collection Operations
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
                                Multi-Discipline Intelligence Collection and Analysis Operations
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment S-2 coordinates comprehensive intelligence collection operations integrating human intelligence, signals intelligence, and imagery intelligence. Provides continuous enemy situation awareness and tactical intelligence to Division.
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
                                Regiment Intelligence Collection Plan and Asset Integration
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Human Intelligence (HUMINT):</strong> Squadron reconnaissance teams, dismounted patrols, local national contacts, prisoner interrogation, document exploitation.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Signals Intelligence (SIGINT):</strong> Electronic warfare sections, communications intercept, direction finding, electronic attack capabilities, spectrum analysis.</p>
                                <p style="margin: 0;"><strong>Imagery Intelligence (IMINT):</strong> Unmanned aerial systems, ground surveillance radar, thermal imaging, digital photography, video reconnaissance.</p>
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
                                Intelligence Processing and Dissemination Procedures
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Intelligence Reports:</strong> INTSUM every 4 hours, SPOTREP as required, immediate threat warnings to Division G-2</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Target Development:</strong> High-value target identification, pattern analysis, predictive intelligence, battle damage assessment</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Counterintelligence:</strong> OPSEC enforcement, deception operations, force protection intelligence, security procedures</p>
                                <p style="margin: 0;">• <strong>Intelligence Sharing:</strong> Real-time coordination with Division, adjacent regiments, coalition intelligence assets</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Regiment Sustainment and Logistics Operations (Green Theme) -->
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
                            Regiment Sustainment and Logistics Operations
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
                                Regiment Support Squadron Operations and Mobile Logistics
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment Support Squadron provides mobile sustainment support including supply, maintenance, transportation, and medical services. Emphasizes rapid resupply and maintenance support for extended reconnaissance operations.
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
                                Mobile Sustainment Planning and Resource Management
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Class I (Subsistence):</strong> 96-hour supply on vehicles, mobile kitchen trailers, water purification units, field feeding during extended operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Class III (Fuel):</strong> 72-hour supply forward, mobile fuel trucks, priority to reconnaissance vehicles, aviation fuel coordination with Division.</p>
                                <p style="margin: 0;"><strong>Class V (Ammunition):</strong> Basic load plus 2 units of fire, mobile ammunition trucks, priority to contact squadrons, special ammunition for reconnaissance.</p>
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
                                Mobile Maintenance and Medical Support Operations
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Maintenance Support:</strong> Mobile maintenance teams, forward recovery operations, parts supply, priority to mission-critical vehicles</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Medical Operations:</strong> Mobile aid stations, medical evacuation coordination, casualty collection points, blood resupply</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Transportation:</strong> Mobile logistics convoys, route reconnaissance, security coordination, traffic control</p>
                                <p style="margin: 0;">• <strong>Field Services:</strong> Mobile communications support, postal operations, chaplain services, legal support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 7: Regiment Engineer and Mobility Support (Blue Theme) -->
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
                            Regiment Engineer and Mobility Support
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
                                Engineer Support to Reconnaissance Operations and Route Clearance
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment Engineer Company provides mobility support, route clearance, and survivability operations. Emphasizes rapid mobility enhancement and obstacle reduction for reconnaissance squadrons.
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
                                Mobility Enhancement and Route Reconnaissance Operations
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Route Clearance:</strong> Mine detection and clearance, improvised explosive device disposal, route reconnaissance, bridge classification, ford improvement.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Mobility Support:</strong> Obstacle breaching, gap crossing, vehicle recovery, emergency bridge construction, terrain analysis and route selection.</p>
                                <p style="margin: 0;"><strong>Survivability:</strong> Hasty fighting positions, vehicle hide sites, command post protection, communications site security, camouflage and concealment.</p>
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
                                <p style="margin: 0 0 4px 0;">• <strong>Explosive Ordnance Disposal:</strong> EOD support teams, unexploded ordnance clearance, improvised explosive device response</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Reconnaissance Support:</strong> Engineer reconnaissance, terrain analysis, obstacle intelligence, route classification</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Construction Support:</strong> Tactical infrastructure, helicopter landing zones, supply route improvement, communications sites</p>
                                <p style="margin: 0;">• <strong>Environmental Considerations:</strong> Weather impact assessment, soil analysis, seasonal mobility factors, terrain degradation</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Regiment Command and Control Operations (Red Theme) -->
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
                            Regiment Command and Control Operations
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
                                Regiment Command Post Operations and Mobile Communications
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment establishes mobile command and control architecture supporting extended reconnaissance operations. Maintains continuous communication with Division and provides command presence across multiple squadron areas.
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
                                Mobile Command Post Organization and Battle Rhythm
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Main Command Post:</strong> Regiment commander, S-3 operations, intelligence section, communications section. Mobile platform with satellite communications capability.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Tactical Command Post:</strong> Forward-deployed element with regiment commander or deputy, provides command presence and rapid decision-making during reconnaissance operations.</p>
                                <p style="margin: 0;"><strong>Battle Rhythm:</strong> Commander's update briefings every 4 hours, staff synchronization meetings every 2 hours, continuous reconnaissance monitoring and reporting.</p>
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
                                Communications Security and Reconnaissance Coordination
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Primary Communications:</strong> Secure digital networks, frequency-hopping radios, satellite communications, mobile relay stations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Backup Systems:</strong> Alternate frequencies, messenger service, visual signals, liaison officer networks with squadrons</p>
                                <p style="margin: 0 0 4px 0;">• <strong>COMSEC Procedures:</strong> Encryption key management, transmission security, electronic warfare countermeasures, signal discipline</p>
                                <p style="margin: 0;">• <strong>Information Management:</strong> Real-time reconnaissance tracking, digital intelligence sharing, common operational picture maintenance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Regiment Implementation Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 16px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #22c55e; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Regiment Plan Development Implementation Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Planning Products Completed:</strong> Regiment OPORD, Squadron Task Organization, Reconnaissance Plan, Intelligence Collection Plan, Fire Support Coordination, Aviation Integration Plan, Communications Plan, Sustainment Annex
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Coordination Requirements:</strong> Division coordination complete, Brigade liaison established, Aviation coordination confirmed, Intelligence sharing protocols activated, Squadron confirmation briefings conducted
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const regimentPracticalModule = {
    getContent() {
        return getRegimentPlanDevelopmentExample();
    }
};

export default regimentPracticalModule;
