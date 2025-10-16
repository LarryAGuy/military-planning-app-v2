/**
 * JPP Step 7: Plan Development - Squadron Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign LSCO squadron-level plan development scenario
 * Authorized to exceed 300-line limit due to extensive tactical content requirements
 * Primary Sources: FM 5-0 (Operations Process), Chapter 4 - Plan Development; FM 3-20.96 (Cavalry Squadron), Chapter 4 - Squadron Operations
 * Supporting Sources: FM 3-90 (Tactics), Chapter 5 - Squadron Operations; ADP 5-0 (Operations Process), Chapter 3 - MDMP
 * Doctrinal Focus: Military Decision Making Process (MDMP) integration with JPP Step 7 outputs at squadron level
 */

export function getSquadronPlanDevelopmentExample() {
    return `
        <div style="padding: 20px;">
            <!-- Squadron Plan Development Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-horse-head" style="margin-right: 12px; color: #22c55e; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 7: Plan Development - Squadron Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Squadron Reconnaissance Operations and Troop-Level Mission Coordination</p>
                </div>
            </div>

            <!-- Squadron Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #22c55e; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-binoculars" style="margin-right: 8px;"></i>
                    Squadron Reconnaissance Implementation - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Squadron Command:</strong> 1st Squadron, 4th Cavalry Regiment - Regiment Reconnaissance Operations<br>
                            <strong>Commanding Officer:</strong> Lieutenant Colonel Sarah M. Rodriguez, USA (O-5)<br>
                            <strong>Squadron Area of Operations:</strong> Krakow-Katowice Reconnaissance Zone - Regiment Main Effort<br>
                            <strong>Mission Type:</strong> Multi-Troop Large Scale Combat Operations (LSCO) Reconnaissance and Security
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> Alpha Troop, Bravo Troop, Charlie Troop, Delta Troop (Support)<br>
                            <strong>Force Structure:</strong> 520 U.S. personnel across 3 Cavalry Troops, 18 Bradley Cavalry Fighting Vehicles<br>
                            <strong>Operational Area:</strong> 10km reconnaissance zone with multiple named areas of interest and observation posts<br>
                            <strong>Planning Timeline:</strong> 8-hour MDMP cycle with 1-hour execution preparation (LSCO compressed timeline)
                        </p>
                    </div>
                </div>
            </div>

            <!-- Squadron Tactical Planning Framework - 2xN Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Squadron Mission Analysis and Regiment Guidance (Amber/Orange Theme) -->
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
                            <i class="fas fa-route" style="margin-right: 8px; color: #fcd34d;"></i>
                            Squadron Mission Analysis and Regiment Guidance
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
                                MDMP Step 1: Squadron Mission Analysis and Regiment Reconnaissance Requirements
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Squadron conducts comprehensive mission analysis integrating Regiment reconnaissance requirements with troop task organization. Focus on troop mission assignments, intelligence collection, and reconnaissance operations within assigned zone.
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
                                <i class="fas fa-bullseye" style="margin-right: 6px; color: #f59e0b;"></i>
                                Squadron Reconnaissance Mission Analysis Framework
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Higher Commander's Intent (Regiment):</strong> 4th Cavalry Regiment requires squadron to conduct reconnaissance operations, identify enemy positions, and provide early warning.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Squadron Mission Statement:</strong> 1-4 CAV conducts reconnaissance operations in AO FALCON NLT 19 MAR 2025, identifies enemy positions, provides early warning to Regiment.</p>
                                <p style="margin: 0;"><strong>End State:</strong> Enemy positions identified, reconnaissance screen established, early warning provided, troop sectors assigned and occupied.</p>
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
                                Squadron MDMP Products and Timeline
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>H-8:</strong> Squadron Mission Analysis Complete, Initial Reconnaissance Plan</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-6:</strong> COA Development, Troop Task Organization</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-3:</strong> COA Analysis, Reconnaissance Synchronization Matrix</p>
                                <p style="margin: 0;">• <strong>H-1:</strong> OPORD Production, Troop Mission Briefings</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Troop Task Organization and Resource Allocation (Green Theme) -->
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
                            Troop Task Organization and Resource Allocation
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
                                MDMP Step 2: Troop Task Organization and Reconnaissance Asset Assignment
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Squadron develops troop task organization integrating reconnaissance, security, and support assets. Emphasizes mission flexibility, intelligence collection, and platoon-level execution across multiple named areas of interest.
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
                                Squadron Troop Task Organization Matrix
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Alpha Troop (Main Effort):</strong> 2x Scout Platoons, 1x Tank Section, priority to NAI ALPHA reconnaissance, reinforced with engineer section and forward observer.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Bravo Troop (Supporting Effort):</strong> 2x Scout Platoons, 1x Tank Section, supporting reconnaissance, flank security, reinforced with electronic warfare team.</p>
                                <p style="margin: 0;"><strong>Charlie Troop (Reserve):</strong> 2x Scout Platoons, 1x Tank Section, squadron reserve, exploitation force, reinforced with medical section.</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(34, 197, 94, 0.10) 0%, rgba(34, 197, 94, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(34, 197, 94, 0.2);
                        ">
                            <h6 style="color: #a7f3d0; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-cogs" style="margin-right: 6px; color: #22c55e;"></i>
                                Support Troop and Asset Integration
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Delta Troop (Support):</strong> Maintenance platoon, supply platoon, medical section, direct support to cavalry troops</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Intelligence Support:</strong> Squadron intelligence section, electronic warfare team, unmanned aerial systems, signals intelligence</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Fire Support:</strong> Squadron fire support officer, troop forward observers, priority targets, artillery coordination</p>
                                <p style="margin: 0;">• <strong>Engineer Support:</strong> Engineer section attachments, obstacle reduction, mobility enhancement, survivability operations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Remaining Cards 3-8 with proper color cycling -->
            <!-- Card 3: Blue, Card 4: Red, Card 5: Amber, Card 6: Green, Card 7: Blue, Card 8: Red -->

            <!-- Second Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 3: Squadron Reconnaissance Synchronization (Blue Theme) -->
                <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(59, 130, 246, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(59, 130, 246, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-project-diagram" style="margin-right: 8px; color: #93c5fd;"></i>Squadron Reconnaissance Synchronization
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(59, 130, 246, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-table" style="margin-right: 6px; color: #3b82f6;"></i>MDMP Step 3: Squadron Synchronization and Troop Coordination</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Squadron develops comprehensive synchronization matrix integrating reconnaissance operations, intelligence collection, and troop movements across multiple named areas of interest.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-calendar-alt" style="margin-right: 6px; color: #3b82f6;"></i>Squadron Timeline and Control Measures</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Phase I (H-Hour to H+2):</strong> Initial reconnaissance screen, troop movement to assigned NAIs, communications check, initial contact reports.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Phase II (H+2 to H+6):</strong> Detailed reconnaissance, pattern analysis, electronic warfare collection, coordination with adjacent units.</p>
                                <p style="margin: 0;"><strong>Phase III (H+6 to H+8):</strong> Continuous surveillance, enemy tracking, preparation for follow-on operations, handoff procedures.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Squadron OPORD Development (Red Theme) -->
                <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(239, 68, 68, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(239, 68, 68, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-file-alt" style="margin-right: 8px; color: #fca5a5;"></i>Squadron OPORD Development
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-scroll" style="margin-right: 6px; color: #ef4444;"></i>MDMP Step 4: Squadron OPORD Production and Troop Mission Dissemination</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Squadron produces comprehensive reconnaissance OPORD following FM 5-0 format, assigns specific missions to subordinate troops, and coordinates rapid dissemination for time-sensitive reconnaissance operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #fca5a5; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-clipboard-check" style="margin-right: 6px; color: #ef4444;"></i>Squadron OPORD Structure and Troop Assignments</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>OPORD Format:</strong> Five-paragraph format with reconnaissance-specific annexes including intelligence collection plan, communications plan, and withdrawal procedures.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Troop Missions:</strong> Each troop receives specific reconnaissance zones, priority intelligence requirements, contact procedures, and coordination requirements.</p>
                                <p style="margin: 0;"><strong>Dissemination Timeline:</strong> OPORD briefing H-1 hour, troop confirmation briefs H-30 minutes, final coordination H-15 minutes before execution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 5: Squadron Intelligence Operations (Amber Theme) -->
                <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(245, 158, 11, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(245, 158, 11, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-search" style="margin-right: 8px; color: #fcd34d;"></i>Squadron Intelligence Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #fcd34d; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-eye" style="margin-right: 6px; color: #f59e0b;"></i>Multi-Discipline Intelligence Collection and Analysis</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Squadron S-2 coordinates comprehensive intelligence collection operations integrating troop reconnaissance, electronic warfare, and signals intelligence. Provides continuous enemy situation awareness to Regiment.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #fcd34d; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-binoculars" style="margin-right: 6px; color: #f59e0b;"></i>Squadron Intelligence Collection Assets</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Troop Reconnaissance:</strong> Scout platoon reconnaissance, observation posts, listening posts, dismounted patrols, vehicle reconnaissance.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Electronic Intelligence:</strong> Electronic warfare sections, communications intercept, direction finding, electronic attack capabilities.</p>
                                <p style="margin: 0;"><strong>Signals Intelligence:</strong> Unmanned aerial systems, ground surveillance radar, thermal imaging, digital reconnaissance systems.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Squadron Sustainment Operations (Green Theme) -->
                <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(34, 197, 94, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(34, 197, 94, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-truck" style="margin-right: 8px; color: #bbf7d0;"></i>Squadron Sustainment Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(34, 197, 94, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #bbf7d0; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-boxes" style="margin-right: 6px; color: #22c55e;"></i>Squadron Support Operations and Mobile Logistics</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Squadron Support Troop provides mobile sustainment support including supply, maintenance, transportation, and medical services. Emphasizes rapid resupply and maintenance support for extended reconnaissance operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #bbf7d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-gas-pump" style="margin-right: 6px; color: #22c55e;"></i>Mobile Sustainment and Resource Management</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Class I (Subsistence):</strong> 48-hour supply on vehicles, mobile kitchen trailers, water purification, field feeding during extended operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Class III (Fuel):</strong> 36-hour supply forward, mobile fuel trucks, priority to reconnaissance vehicles, generator fuel coordination.</p>
                                <p style="margin: 0;"><strong>Class V (Ammunition):</strong> Basic load plus 1 unit of fire, mobile ammunition trucks, priority to contact troops, special ammunition for reconnaissance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 7: Squadron Engineer and Mobility Support (Blue Theme) -->
                <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(59, 130, 246, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(59, 130, 246, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-hard-hat" style="margin-right: 8px; color: #93c5fd;"></i>Squadron Engineer and Mobility Support
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(59, 130, 246, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-tools" style="margin-right: 6px; color: #3b82f6;"></i>Engineer Support to Reconnaissance Operations</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Squadron Engineer Section provides mobility support, route clearance, and survivability operations. Emphasizes rapid mobility enhancement and obstacle reduction for reconnaissance troops.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-road" style="margin-right: 6px; color: #3b82f6;"></i>Mobility Enhancement and Route Operations</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Route Clearance:</strong> Mine detection, improvised explosive device disposal, route reconnaissance, bridge classification, ford improvement.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Mobility Support:</strong> Obstacle breaching, gap crossing, vehicle recovery, emergency bridge construction, terrain analysis.</p>
                                <p style="margin: 0;"><strong>Survivability:</strong> Hasty fighting positions, vehicle hide sites, observation post construction, camouflage and concealment.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Squadron Command and Control Operations (Red Theme) -->
                <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(239, 68, 68, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(239, 68, 68, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-satellite-dish" style="margin-right: 8px; color: #fca5a5;"></i>Squadron Command and Control Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-radio" style="margin-right: 6px; color: #ef4444;"></i>Squadron Command Post Operations and Mobile Communications</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Squadron establishes mobile command and control architecture supporting extended reconnaissance operations. Maintains continuous communication with Regiment and provides command presence across multiple troop areas.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #fca5a5; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-network-wired" style="margin-right: 6px; color: #ef4444;"></i>Mobile Command Post and Battle Rhythm</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Main Command Post:</strong> Squadron commander, S-3 operations, intelligence section, communications section. Mobile platform with satellite communications.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Tactical Command Post:</strong> Forward-deployed element with squadron commander or executive officer, provides command presence during reconnaissance operations.</p>
                                <p style="margin: 0;"><strong>Battle Rhythm:</strong> Commander's update briefings every hour, staff synchronization meetings every 30 minutes, continuous reconnaissance monitoring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Squadron Implementation Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 16px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #22c55e; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Squadron Plan Development Implementation Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Planning Products Completed:</strong> Squadron OPORD, Troop Task Organization, Reconnaissance Plan, Intelligence Collection Plan, Fire Support Coordination, Engineer Integration Plan, Communications Plan, Sustainment Annex
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Coordination Requirements:</strong> Regiment coordination complete, Troop confirmation briefings conducted, Intelligence sharing protocols activated, Engineer support coordinated, Medical evacuation protocols established
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const squadronPracticalModule = {
    getContent() {
        return getSquadronPlanDevelopmentExample();
    }
};

export default squadronPracticalModule;
