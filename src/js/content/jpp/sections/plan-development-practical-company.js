/**
 * JPP Step 7: Plan Development - Company Level Practical Examples
 * UNCLASSIFIED comprehensive European Campaign LSCO company-level plan development scenario
 * Authorized to exceed 300-line limit due to extensive tactical content requirements
 * Primary Sources: FM 5-0 (Operations Process), Chapter 4 - Plan Development; FM 3-21.10 (Infantry Rifle Company), Chapter 3 - Company Operations
 * Supporting Sources: FM 3-90 (Tactics), Chapter 4 - Company Operations; ADP 5-0 (Operations Process), Chapter 3 - MDMP
 * Doctrinal Focus: Military Decision Making Process (MDMP) integration with JPP Step 7 outputs at company level
 */

export function getCompanyPlanDevelopmentExample() {
    return `
        <div style="padding: 20px;">
            <!-- Company Plan Development Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-user-friends" style="margin-right: 12px; color: #3b82f6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 7: Plan Development - Company Level Practical Example</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">European Campaign LSCO Scenario - Company Infantry Operations and Platoon-Level Mission Coordination</p>
                </div>
            </div>

            <!-- Company Scenario Overview -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                    Company Infantry Implementation - Operation STEADFAST GUARDIAN
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Company Command:</strong> Alpha Company, 2nd Battalion, 16th Infantry Regiment - Battalion Main Effort<br>
                            <strong>Commanding Officer:</strong> Captain Jennifer L. Martinez, USA (O-3)<br>
                            <strong>Company Area of Operations:</strong> Wroclaw Urban Sector - Battalion Priority Objective<br>
                            <strong>Mission Type:</strong> Multi-Platoon Large Scale Combat Operations (LSCO) Urban Assault
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Subordinate Commands:</strong> 1st Platoon, 2nd Platoon, 3rd Platoon, Weapons Squad<br>
                            <strong>Force Structure:</strong> 140 U.S. personnel across 3 Infantry Platoons, 4 Bradley Fighting Vehicles<br>
                            <strong>Operational Area:</strong> 2km company sector with multiple platoon objectives and support by fire positions<br>
                            <strong>Planning Timeline:</strong> 4-hour MDMP cycle with 30-minute execution preparation (LSCO compressed timeline)
                        </p>
                    </div>
                </div>
            </div>

            <!-- Company Tactical Planning Framework - 2xN Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Company Mission Analysis and Battalion Guidance (Amber/Orange Theme) -->
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
                            Company Mission Analysis and Battalion Guidance
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
                                MDMP Step 1: Company Mission Analysis and Battalion Infantry Requirements
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Company conducts comprehensive mission analysis integrating Battalion infantry requirements with platoon task organization. Focus on platoon mission assignments, fire support coordination, and urban assault within company sector.
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
                                Company Infantry Mission Analysis Framework
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Higher Commander's Intent (Battalion):</strong> 2-16 IN requires Alpha Company to conduct urban assault operations, seize key buildings, and establish defensive positions.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Company Mission Statement:</strong> Alpha Company conducts urban assault operations in AO EAGLE NLT 18 MAR 2025, seizes OBJ HAWK, establishes defensive positions.</p>
                                <p style="margin: 0;"><strong>End State:</strong> Key buildings seized, enemy forces destroyed or displaced, defensive positions established, platoon sectors assigned and occupied.</p>
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
                                Company MDMP Products and Timeline
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>H-4:</strong> Company Mission Analysis Complete, Initial Urban Assault Plan</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-3:</strong> COA Development, Platoon Task Organization</p>
                                <p style="margin: 0 0 4px 0;">• <strong>H-1:</strong> COA Analysis, Infantry Synchronization Matrix</p>
                                <p style="margin: 0;">• <strong>H-30min:</strong> OPORD Production, Platoon Mission Briefings</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Platoon Task Organization and Resource Allocation (Green Theme) -->
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
                            Platoon Task Organization and Resource Allocation
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
                                MDMP Step 2: Platoon Task Organization and Infantry Asset Assignment
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Company develops platoon task organization integrating infantry, weapons, and support assets. Emphasizes mission flexibility, fire support coordination, and squad-level execution across multiple platoon objectives.
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
                                Company Platoon Task Organization Matrix
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>1st Platoon (Main Effort):</strong> 3x Infantry Squads, 1x Bradley Fighting Vehicle, priority to Building A seizure, reinforced with engineer team and forward observer.</p>
                                <p style="margin: 0 0 8px 0;"><strong>2nd Platoon (Supporting Effort):</strong> 3x Infantry Squads, 1x Bradley Fighting Vehicle, supporting attack, flank security, reinforced with anti-tank team.</p>
                                <p style="margin: 0;"><strong>3rd Platoon (Reserve):</strong> 3x Infantry Squads, 1x Bradley Fighting Vehicle, company reserve, exploitation force, reinforced with medical team.</p>
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
                                Weapons Squad and Support Asset Integration
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Weapons Squad:</strong> Machine gun teams, anti-tank teams, mortar section, direct support to rifle platoons</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Fire Support:</strong> Company forward observer, platoon forward observers, priority targets, final protective fires</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Engineer Support:</strong> Engineer team attachments, breaching charges, urban operations, survivability operations</p>
                                <p style="margin: 0;">• <strong>Medical Support:</strong> Company medic, platoon medics, casualty collection point, medical evacuation procedures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Remaining Cards 3-8 with proper color cycling -->
            <!-- Card 3: Blue, Card 4: Red, Card 5: Amber, Card 6: Green, Card 7: Blue, Card 8: Red -->

            <!-- Second Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 3: Company Urban Assault Synchronization (Blue Theme) -->
                <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(59, 130, 246, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(59, 130, 246, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-project-diagram" style="margin-right: 8px; color: #93c5fd;"></i>Company Urban Assault Synchronization
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(59, 130, 246, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-table" style="margin-right: 6px; color: #3b82f6;"></i>MDMP Step 3: Company Synchronization and Platoon Coordination</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Company develops comprehensive synchronization matrix integrating urban assault operations, fire support coordination, and platoon movements across multiple building objectives.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-calendar-alt" style="margin-right: 6px; color: #3b82f6;"></i>Company Timeline and Control Measures</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Phase I (H-Hour to H+30min):</strong> Initial breach operations, platoon movement to assault positions, fire support preparation, communications check.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Phase II (H+30min to H+2hr):</strong> Building assault, room clearing, enemy engagement, casualty evacuation, ammunition resupply.</p>
                                <p style="margin: 0;"><strong>Phase III (H+2hr to H+4hr):</strong> Consolidation and reorganization, defensive positions, preparation for counterattack, coordination with adjacent units.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Company OPORD Development (Red Theme) -->
                <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(239, 68, 68, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(239, 68, 68, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-file-alt" style="margin-right: 8px; color: #fca5a5;"></i>Company OPORD Development
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-scroll" style="margin-right: 6px; color: #ef4444;"></i>MDMP Step 4: Company OPORD Production and Platoon Mission Dissemination</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Company produces comprehensive urban assault OPORD following FM 5-0 format, assigns specific missions to subordinate platoons, and coordinates rapid dissemination for time-sensitive infantry operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #fca5a5; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-clipboard-check" style="margin-right: 6px; color: #ef4444;"></i>Company OPORD Structure and Platoon Assignments</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>OPORD Format:</strong> Five-paragraph format with urban operations-specific annexes including breach plan, fire support plan, and casualty evacuation procedures.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Platoon Missions:</strong> Each platoon receives specific building objectives, breach procedures, fire support coordination, and consolidation requirements.</p>
                                <p style="margin: 0;"><strong>Dissemination Timeline:</strong> OPORD briefing H-30 minutes, platoon confirmation briefs H-15 minutes, final coordination H-5 minutes before execution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 5: Company Fire Support Operations (Amber Theme) -->
                <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(245, 158, 11, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(245, 158, 11, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-crosshairs" style="margin-right: 8px; color: #fcd34d;"></i>Company Fire Support Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #fcd34d; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-bullseye" style="margin-right: 6px; color: #f59e0b;"></i>Integrated Fire Support and Urban Operations Coordination</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Company Fire Support Officer coordinates comprehensive fire support operations integrating artillery, mortar, and direct fire assets. Provides continuous fire support to platoon urban assault operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #fcd34d; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-bomb" style="margin-right: 6px; color: #f59e0b;"></i>Company Fire Support Assets and Coordination</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Artillery Support:</strong> Battalion fire support, priority targets, final protective fires, danger close procedures for urban operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Mortar Support:</strong> Company mortar section, platoon forward observers, immediate suppression, smoke operations, illumination.</p>
                                <p style="margin: 0;"><strong>Direct Fire:</strong> Bradley Fighting Vehicle fires, machine gun support, anti-tank weapons, precision engagement in urban terrain.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Company Sustainment Operations (Green Theme) -->
                <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(34, 197, 94, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(34, 197, 94, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(34, 197, 94, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-medkit" style="margin-right: 8px; color: #bbf7d0;"></i>Company Sustainment Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(34, 197, 94, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #bbf7d0; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-first-aid" style="margin-right: 6px; color: #22c55e;"></i>Company Support Operations and Platoon Logistics</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Company provides comprehensive sustainment support including supply, maintenance, transportation, and medical services. Emphasizes rapid resupply and casualty evacuation during urban combat operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(34, 197, 94, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(34, 197, 94, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #bbf7d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-ambulance" style="margin-right: 6px; color: #22c55e;"></i>Urban Combat Sustainment and Medical Support</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Class I (Subsistence):</strong> 24-hour supply on soldiers, water resupply, field feeding, energy supplements for urban operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Class V (Ammunition):</strong> Basic load plus additional ammunition, priority to contact platoons, breaching charges, special ammunition.</p>
                                <p style="margin: 0;"><strong>Medical Support:</strong> Company medic, platoon medics, casualty collection point, medical evacuation procedures, trauma care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 7: Company Engineer and Breach Operations (Blue Theme) -->
                <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(59, 130, 246, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(59, 130, 246, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-hammer" style="margin-right: 8px; color: #93c5fd;"></i>Company Engineer and Breach Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(59, 130, 246, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-tools" style="margin-right: 6px; color: #3b82f6;"></i>Engineer Support to Urban Assault Operations</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Company Engineer Team provides urban breach support, explosive ordnance disposal, and survivability operations. Emphasizes rapid breach operations and obstacle reduction for platoon urban assault.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-explosion" style="margin-right: 6px; color: #3b82f6;"></i>Urban Breach and Mobility Operations</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Breach Operations:</strong> Wall breaching, door breaching, window entry, explosive charges, mechanical breaching tools.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Obstacle Reduction:</strong> Wire obstacles, improvised explosive devices, rubble clearance, route improvement.</p>
                                <p style="margin: 0;"><strong>Survivability:</strong> Fighting positions, protective barriers, camouflage and concealment, defensive improvements.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Company Command and Control Operations (Red Theme) -->
                <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(239, 68, 68, 0.4); position: relative; overflow: hidden; box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(239, 68, 68, 0.1);">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <div style="flex-grow: 1; position: relative; z-index: 1;">
                        <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(239, 68, 68, 0.3); padding-bottom: 8px;">
                            <i class="fas fa-headset" style="margin-right: 8px; color: #fca5a5;"></i>Company Command and Control Operations
                        </h4>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(239, 68, 68, 0.4); margin-bottom: 16px;">
                            <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-radio" style="margin-right: 6px; color: #ef4444;"></i>Company Command Post Operations and Platoon Communications</h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">Company establishes command and control architecture supporting urban combat operations. Maintains continuous communication with Battalion and provides command presence across platoon areas of operations.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(239, 68, 68, 0.06) 100%); padding: 14px; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.25); margin-bottom: 14px;">
                            <h6 style="color: #fca5a5; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;"><i class="fas fa-walkie-talkie" style="margin-right: 6px; color: #ef4444;"></i>Urban Command Post and Battle Rhythm</h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Command Post:</strong> Company commander, first sergeant, forward observer, communications section. Mobile platform with digital communications.</p>
                                <p style="margin: 0 0 8px 0;"><strong>Forward Command:</strong> Company commander forward with assault platoons, provides direct command presence during urban operations.</p>
                                <p style="margin: 0;"><strong>Battle Rhythm:</strong> Commander's update briefings every 30 minutes, platoon status reports every 15 minutes, continuous urban operations monitoring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Company Implementation Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(59, 130, 246, 0.3); border-radius: 12px; padding: 16px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #3b82f6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Company Plan Development Implementation Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Planning Products Completed:</strong> Company OPORD, Platoon Task Organization, Urban Assault Plan, Fire Support Plan, Engineer Breach Plan, Medical Evacuation Plan, Communications Plan, Sustainment Annex
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Coordination Requirements:</strong> Battalion coordination complete, Platoon confirmation briefings conducted, Fire support coordination confirmed, Engineer breach support coordinated, Medical evacuation protocols established
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const companyPracticalModule = {
    getContent() {
        return getCompanyPlanDevelopmentExample();
    }
};

export default companyPracticalModule;
