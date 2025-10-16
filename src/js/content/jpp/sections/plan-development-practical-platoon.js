/**
 * JPP Step 7: Plan Development - Platoon Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign LSCO platoon-level plan development scenario
 * Authorized to exceed 300-line limit due to extensive tactical content requirements
 * Primary Sources: FM 5-0 (Operations Process), Chapter 4 - Plan Development; FM 3-21.8 (Infantry Rifle Platoon and Squad), Chapter 2 - Platoon Operations
 * Supporting Sources: FM 3-90 (Tactics), Chapter 3 - Platoon Operations; ADP 5-0 (Operations Process), Chapter 3 - MDMP
 * Doctrinal Focus: Military Decision Making Process (MDMP) integration with JPP Step 7 outputs at platoon level
 */

export function getPlatoonPlanDevelopmentExample() {
    return `
        <div style="padding: 20px;">
            <!-- Platoon Plan Development Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-users" style="margin-right: 12px; color: #ef4444; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 7: Plan Development - Platoon Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Platoon Infantry Operations and Squad-Level Mission Coordination</p>
                </div>
            </div>

            <!-- Platoon Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #ef4444; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-fist-raised" style="margin-right: 8px;"></i>
                    Platoon Infantry Implementation - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Platoon Command:</strong> 1st Platoon, Alpha Company, 2nd Battalion, 16th Infantry Regiment - Company Main Effort<br>
                            <strong>Platoon Leader:</strong> Second Lieutenant Michael R. Thompson, USA (O-1)<br>
                            <strong>Platoon Area of Operations:</strong> Building Complex ALPHA - Company Priority Objective<br>
                            <strong>Mission Type:</strong> Multi-Squad Large Scale Combat Operations (LSCO) Building Assault
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> Alpha Squad, Bravo Squad, Charlie Squad, Weapons Team<br>
                            <strong>Force Structure:</strong> 36 U.S. personnel across 3 Infantry Squads, 1 Bradley Fighting Vehicle<br>
                            <strong>Operational Area:</strong> 500m platoon sector with multiple squad objectives and support by fire positions<br>
                            <strong>Planning Timeline:</strong> 2-hour MDMP cycle with 15-minute execution preparation (LSCO compressed timeline)
                        </p>
                    </div>
                </div>
            </div>

            <!-- Platoon Tactical Planning Framework - 2xN Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Platoon Mission Analysis and Company Guidance (Amber/Orange Theme) -->
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
                            Platoon Mission Analysis and Company Guidance
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
                                MDMP Step 1: Platoon Mission Analysis and Company Infantry Requirements
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Platoon conducts comprehensive mission analysis integrating Company infantry requirements with squad task organization. Focus on squad mission assignments, fire team coordination, and building assault within platoon sector.
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
                                Platoon Infantry Mission Analysis Framework
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Higher Commander's Intent (Company):</strong> Alpha Company requires 1st Platoon to conduct building assault operations, clear enemy positions, and establish security.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Platoon Mission Statement:</strong> 1st Platoon conducts building assault operations in AO FALCON NLT 17 MAR 2025, clears Building ALPHA, establishes security.</p>
                                <p style="margin: 0;"><strong>End State:</strong> Building cleared, enemy forces destroyed or captured, security established, squad positions assigned and occupied.</p>
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
                                Platoon MDMP Products and Timeline
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>H-2:</strong> Platoon Mission Analysis Complete, Initial Building Assault Plan</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-90min:</strong> COA Development, Squad Task Organization</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-30min:</strong> COA Analysis, Infantry Synchronization Matrix</p>
                                <p style="margin: 0;">• <strong>H-15min:</strong> OPORD Production, Squad Mission Briefings</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Squad Task Organization and Resource Allocation (Green Theme) -->
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
                            Squad Task Organization and Resource Allocation
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
                                MDMP Step 2: Squad Task Organization and Infantry Asset Assignment
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Platoon develops squad task organization integrating infantry, weapons, and support assets. Emphasizes mission flexibility, fire team coordination, and individual soldier execution across multiple squad objectives.
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
                                Platoon Squad Task Organization Matrix
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Alpha Squad (Main Effort):</strong> 2x Fire Teams, 1x Squad Leader, priority to Room 1-3 clearing, reinforced with breaching charges and additional ammunition.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Bravo Squad (Supporting Effort):</strong> 2x Fire Teams, 1x Squad Leader, supporting attack, security, reinforced with anti-tank weapon and medical supplies.</p>
                                <p style="margin: 0;"><strong>Charlie Squad (Reserve):</strong> 2x Fire Teams, 1x Squad Leader, platoon reserve, exploitation force, reinforced with additional communications equipment.</p>
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
                                Weapons Team and Support Asset Integration
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Weapons Team:</strong> Machine gun team, grenadier, marksman, direct support to rifle squads</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Fire Support:</strong> Platoon forward observer, squad designated marksmen, priority targets, immediate suppression</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Breach Support:</strong> Breaching charges, mechanical breaching tools, entry procedures, security teams</p>
                                <p style="margin: 0;">• <strong>Medical Support:</strong> Platoon medic, squad combat lifesavers, casualty collection, medical evacuation procedures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Remaining Cards 3-8 with proper color cycling -->
            <!-- Card 3: Blue, Card 4: Red, Card 5: Amber, Card 6: Green, Card 7: Blue, Card 8: Red -->

            <!-- Second Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 3: Platoon Building Assault Synchronization (Blue Theme) -->
                <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(59, 130, 246, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(59, 130, 246, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-project-diagram" style="margin-right: 8px; color: #93c5fd;"></i>Platoon Building Assault Synchronization
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(59, 130, 246, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-table" style="margin-right: 6px; color: #3b82f6;"></i>MDMP Step 3: Platoon Synchronization and Squad Coordination</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Platoon develops comprehensive synchronization matrix integrating building assault operations, fire team coordination, and squad movements across multiple room objectives.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-calendar-alt" style="margin-right: 6px; color: #3b82f6;"></i>Platoon Timeline and Control Measures</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Phase I (H-Hour to H+15min):</strong> Initial breach, squad movement to entry points, fire team preparation, communications check.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Phase II (H+15min to H+1hr):</strong> Room clearing, fire team coordination, enemy engagement, casualty evacuation.</p>
                                <p style="margin: 0;"><strong>Phase III (H+1hr to H+2hr):</strong> Consolidation, security establishment, ammunition redistribution, preparation for follow-on operations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Platoon OPORD Development (Red Theme) -->
                <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(239, 68, 68, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(239, 68, 68, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-file-alt" style="margin-right: 8px; color: #fca5a5;"></i>Platoon OPORD Development
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-scroll" style="margin-right: 6px; color: #ef4444;"></i>MDMP Step 4: Platoon OPORD Production and Squad Mission Dissemination</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Platoon produces comprehensive building assault OPORD following FM 5-0 format, assigns specific missions to subordinate squads, and coordinates rapid dissemination for time-sensitive infantry operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #fca5a5; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-clipboard-check" style="margin-right: 6px; color: #ef4444;"></i>Platoon OPORD Structure and Squad Assignments</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>OPORD Format:</strong> Five-paragraph format with building operations-specific annexes including room clearing procedures, fire team coordination, and casualty procedures.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Squad Missions:</strong> Each squad receives specific room objectives, entry procedures, fire team assignments, and consolidation requirements.</p>
                                <p style="margin: 0;"><strong>Dissemination Timeline:</strong> OPORD briefing H-15 minutes, squad confirmation briefs H-10 minutes, final coordination H-5 minutes before execution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 5: Platoon Fire Team Coordination (Amber Theme) -->
                <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(245, 158, 11, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(245, 158, 11, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-crosshairs" style="margin-right: 8px; color: #fcd34d;"></i>Platoon Fire Team Coordination
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #fcd34d; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-bullseye" style="margin-right: 6px; color: #f59e0b;"></i>Fire Team Coordination and Individual Soldier Operations</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Platoon coordinates comprehensive fire team operations integrating individual soldier assignments, weapon systems, and tactical movements. Provides continuous fire team coordination to squad building assault operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #fcd34d; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-users" style="margin-right: 6px; color: #f59e0b;"></i>Fire Team Assets and Individual Assignments</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Fire Team Alpha:</strong> Team leader, automatic rifleman, grenadier, rifleman, room entry procedures, covering fire, security.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Fire Team Bravo:</strong> Team leader, automatic rifleman, grenadier, rifleman, supporting fire, ammunition resupply, casualty evacuation.</p>
                                <p style="margin: 0;"><strong>Weapons Team:</strong> Machine gunner, assistant gunner, ammunition bearer, marksman, overwatch positions, suppressive fire.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Platoon Sustainment Operations (Green Theme) -->
                <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(34, 197, 94, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(34, 197, 94, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-medkit" style="margin-right: 8px; color: #bbf7d0;"></i>Platoon Sustainment Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(34, 197, 94, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #bbf7d0; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-first-aid" style="margin-right: 6px; color: #22c55e;"></i>Platoon Support Operations and Squad Logistics</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Platoon provides comprehensive sustainment support including ammunition resupply, medical care, and equipment maintenance. Emphasizes rapid resupply and casualty evacuation during building assault operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #bbf7d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-ambulance" style="margin-right: 6px; color: #22c55e;"></i>Building Assault Sustainment and Medical Support</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Ammunition Resupply:</strong> Basic load redistribution, priority to contact squads, breaching charges, special ammunition for building operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Medical Support:</strong> Platoon medic, squad combat lifesavers, casualty collection point, medical evacuation procedures, trauma care.</p>
                                <p style="margin: 0;"><strong>Equipment Maintenance:</strong> Weapon maintenance, communications equipment, night vision devices, individual equipment accountability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 7: Platoon Breach and Entry Operations (Blue Theme) -->
                <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(59, 130, 246, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(59, 130, 246, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-hammer" style="margin-right: 8px; color: #93c5fd;"></i>Platoon Breach and Entry Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(59, 130, 246, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-tools" style="margin-right: 6px; color: #3b82f6;"></i>Breach Support to Building Assault Operations</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Platoon provides building breach support, explosive ordnance procedures, and entry operations. Emphasizes rapid breach operations and room entry procedures for squad building assault.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-explosion" style="margin-right: 6px; color: #3b82f6;"></i>Building Breach and Room Entry Operations</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Breach Operations:</strong> Door breaching, window entry, wall breaching, explosive charges, mechanical breaching tools, shotgun breaching.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Room Entry:</strong> Dynamic entry, deliberate entry, limited penetration, fire team coordination, individual soldier assignments.</p>
                                <p style="margin: 0;"><strong>Security Procedures:</strong> Entry team security, overwatch positions, casualty evacuation routes, ammunition resupply procedures.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Platoon Command and Control Operations (Red Theme) -->
                <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(239, 68, 68, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(239, 68, 68, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-headset" style="margin-right: 8px; color: #fca5a5;"></i>Platoon Command and Control Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-radio" style="margin-right: 6px; color: #ef4444;"></i>Platoon Command Operations and Squad Communications</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Platoon establishes command and control architecture supporting building assault operations. Maintains continuous communication with Company and provides command presence across squad areas of operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #fca5a5; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-walkie-talkie" style="margin-right: 6px; color: #ef4444;"></i>Building Assault Command and Battle Rhythm</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Command Element:</strong> Platoon leader, platoon sergeant, forward observer, radio telephone operator. Mobile command with tactical communications.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Forward Command:</strong> Platoon leader forward with assault squads, provides direct command presence during building operations.</p>
                                <p style="margin: 0;"><strong>Battle Rhythm:</strong> Platoon leader updates every 15 minutes, squad status reports every 10 minutes, continuous building operations monitoring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Platoon Implementation Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 16px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #ef4444; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Platoon Plan Development Implementation Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Planning Products Completed:</strong> Platoon OPORD, Squad Task Organization, Building Assault Plan, Fire Team Coordination Plan, Breach Plan, Medical Evacuation Plan, Communications Plan, Sustainment Procedures
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Coordination Requirements:</strong> Company coordination complete, Squad confirmation briefings conducted, Fire team coordination confirmed, Breach support coordinated, Medical evacuation protocols established
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const platoonPracticalModule = {
    getContent() {
        return getPlatoonPlanDevelopmentExample();
    }
};

export default platoonPracticalModule;
