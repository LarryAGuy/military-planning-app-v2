/**
 * JPP Step 7: Plan Development - Echelon Analysis (Battalion)
 * Comprehensive doctrinal analysis for Battalion level planning
 */

function getBattalionPlanDevelopmentAnalysis() {
    return `
        <div style="padding: 20px;">
            <!-- Battalion Plan Development Doctrinal Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-users" style="margin-right: 12px; color: #f59e0b; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Battalion Level Plan Development - Doctrinal Framework</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 7 Echelon Analysis - Battalion Tactical Command Doctrine</p>
                </div>
            </div>

            <!-- First Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Battalion Tactical Planning Doctrine (Amber/Orange Theme) -->
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
                            <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #fcd34d;"></i>
                            Battalion Tactical Planning Doctrine
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
                                <i class="fas fa-compass" style="margin-right: 6px; color: #f59e0b;"></i>
                                Battalion Tactical Mission Planning Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion planning doctrine establishes the tactical planning framework for combined arms operations at the tactical level. FM 3-0 defines Battalion planning as the integration of company capabilities, multi-company coordination, and combined arms expertise to achieve tactical objectives within the Brigade operational framework and Regiment tactical coordination.
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
                                <i class="fas fa-chess-board" style="margin-right: 6px; color: #f59e0b;"></i>
                                Tactical Planning Process and Methodology
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Brigade Integration:</strong> Integration with Brigade operational planning and tactical mission coordination requirements</p>
                                <p style="margin: 0 0 8px 0;"><strong>Battalion Planning Process:</strong> Battalion-specific application of tactical mission planning processes</p>
                                <p style="margin: 0;"><strong>Company Coordination:</strong> Coordination with subordinate company planning and tactical execution</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.10) 0%, rgba(245, 158, 11, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(245, 158, 11, 0.2);
                        ">
                            <h6 style="color: #fed7aa; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-bullseye" style="margin-right: 6px; color: #f59e0b;"></i>
                                Tactical Objectives and Mission Analysis
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Mission Analysis:</strong> Battalion-level tactical mission analysis and tactical situation assessment</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Tactical Objectives:</strong> Development of tactical objectives supporting Brigade operational goals</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Capability Integration:</strong> Integration of combined arms capabilities and tactical expertise</p>
                                <p style="margin: 0;">• <strong>Risk Assessment:</strong> Tactical risk assessment and mitigation planning at Battalion level</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Battalion Multi-Company Combined Arms Coordination (Green Theme) -->
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
                            <i class="fas fa-cogs" style="margin-right: 8px; color: #bbf7d0;"></i>
                            Battalion Multi-Company Combined Arms Coordination
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
                                <i class="fas fa-puzzle-piece" style="margin-right: 6px; color: #22c55e;"></i>
                                Battalion Multi-Company Combined Arms Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion multi-company combined arms coordination synchronizes company capabilities to achieve tactical superiority. FM 3-0 establishes that Battalion operations must integrate all company combined arms capabilities to create tactical advantages and achieve tactical objectives within the Brigade operational framework and Regiment tactical coordination.
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
                                Company Combined Arms Capabilities Integration
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Company Coordination:</strong> Coordination of combined arms company operations and tactical capabilities</p>
                                <p style="margin: 0 0 8px 0;"><strong>Combined Arms Integration:</strong> Integration of infantry, armor, artillery, and mission-specific capabilities</p>
                                <p style="margin: 0;"><strong>Support Integration:</strong> Coordination of intelligence, sustainment, and tactical support functions</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(34, 197, 94, 0.10) 0%, rgba(34, 197, 94, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(34, 197, 94, 0.2);
                        ">
                            <h6 style="color: #a7f3d0; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-sync-alt" style="margin-right: 6px; color: #22c55e;"></i>
                                Combined Arms Synchronization and Coordination
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Combined Arms Synchronization:</strong> Coordination of all combined arms capabilities across time and space</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Company Coordination:</strong> Integration of subordinate company capabilities and operations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Supporting Elements:</strong> Coordination with Brigade and Regiment supporting elements and capabilities</p>
                                <p style="margin: 0;">• <strong>Mission Flexibility:</strong> Adaptive combined arms responses to changing tactical conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 3: Battalion Tactical Operations Integration (Blue Theme) -->
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
                            <i class="fas fa-cubes" style="margin-right: 8px; color: #93c5fd;"></i>
                            Battalion Tactical Operations Integration
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
                                <i class="fas fa-layer-group" style="margin-right: 6px; color: #3b82f6;"></i>
                                Battalion Tactical Operations Coordination Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion tactical operations coordinate multiple company capabilities to achieve combined arms tactical objectives. FM 3-0 establishes that Battalion commanders must synchronize company operations across tactical domains while maintaining tactical flexibility and mission focus within the Battalion tactical framework.
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
                                <i class="fas fa-network-wired" style="margin-right: 6px; color: #3b82f6;"></i>
                                Company Integration and Synchronization
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Company Coordination:</strong> Synchronization of multiple company operations across Battalion tactical area</p>
                                <p style="margin: 0 0 8px 0;"><strong>Mission Management:</strong> Company mission coordination and inter-company tactical support requirements</p>
                                <p style="margin: 0;"><strong>Reserve Integration:</strong> Battalion reserve allocation and employment across company tactical areas</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.10) 0%, rgba(59, 130, 246, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(59, 130, 246, 0.2);
                        ">
                            <h6 style="color: #bfdbfe; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-sync-alt" style="margin-right: 6px; color: #3b82f6;"></i>
                                Multi-Company Convergence and Effects
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Convergence Planning:</strong> Synchronized application of company capabilities for maximum tactical effect</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Cross-Company Operations:</strong> Integration of company capabilities for Battalion tactical objectives</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Information Advantage:</strong> Multi-company information operations and tactical intelligence integration</p>
                                <p style="margin: 0;">• <strong>Mission Flexibility:</strong> Adaptive multi-company responses to changing tactical conditions</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Battalion Tactical Command and Control (Red Theme) -->
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
                            Battalion Tactical Command and Control
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
                                Battalion Tactical Command and Control Architecture
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion command and control systems provide tactical-level command authority across multiple company areas of operations. FM 6-0 establishes that Battalion C2 systems must enable tactical decision-making, company coordination, and Brigade integration while maintaining mission flexibility and responsiveness.
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
                                Tactical Command Structure and Authority
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Battalion Command Authority:</strong> Tactical control over assigned companies and direct reporting units</p>
                                <p style="margin: 0 0 8px 0;"><strong>Company Command Integration:</strong> Coordination with company command posts and tactical operations centers</p>
                                <p style="margin: 0;"><strong>Brigade Force Coordination:</strong> Integration with Brigade command and control systems and tactical guidance</p>
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
                                Tactical Communications and Information Systems
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Tactical Communications:</strong> Secure communications with Brigade Command and company headquarters</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Mission Networks:</strong> Battalion command and control networks and company integration systems</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Information Sharing:</strong> Intelligence dissemination, tactical coordination, and situational awareness</p>
                                <p style="margin: 0;">• <strong>Cybersecurity:</strong> Network defense and information assurance across Battalion tactical systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 5: Battalion Intelligence and Information Operations (Amber/Orange Theme) -->
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
                            Battalion Intelligence and Information Operations
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
                                Battalion Tactical Intelligence Integration
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion intelligence operations provide tactical situational awareness across multiple company areas of operations. FM 2-0 establishes that Battalion intelligence must integrate Brigade operational intelligence with company tactical collection to support tactical decision-making and mission planning across the Battalion tactical framework.
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
                                Tactical Intelligence Collection and Analysis
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Brigade Intelligence Integration:</strong> Integration of Brigade operational intelligence with Battalion tactical requirements</p>
                                <p style="margin: 0 0 8px 0;"><strong>Battalion Intelligence Assets:</strong> Battalion-specific collection assets and tactical intelligence fusion centers</p>
                                <p style="margin: 0;"><strong>Company Intelligence Coordination:</strong> Coordination with company intelligence operations and tactical collection assets</p>
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
                                Information Operations and Electronic Warfare
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Information Operations:</strong> Battalion-level information operations supporting tactical objectives and mission planning</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Electronic Warfare:</strong> Tactical-level electronic warfare coordination across company areas of operations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Cyber Operations:</strong> Battalion cyber capabilities integrated with Brigade tactical cyber operations</p>
                                <p style="margin: 0;">• <strong>Intelligence Preparation:</strong> Tactical environment analysis and threat assessment for Battalion mission planning</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Battalion Sustainment and Logistics Operations (Green Theme) -->
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
                            Battalion Sustainment and Logistics Operations
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
                                Battalion Tactical Sustainment Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion sustainment operations provide tactical logistics across multiple company areas of operations. FM 4-0 establishes that Battalion sustainment must integrate Brigade operational logistics with company tactical sustainment to maintain mission tempo and operational continuity across the Battalion tactical framework.
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
                                Tactical Sustainment Categories and Coordination
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Brigade Logistics Integration:</strong> Integration with Brigade operational logistics and tactical sustainment systems</p>
                                <p style="margin: 0 0 8px 0;"><strong>Battalion Sustainment Operations:</strong> Battalion-level distribution system and tactical sustainment infrastructure</p>
                                <p style="margin: 0;"><strong>Company Sustainment Coordination:</strong> Coordination with company sustainment operations and tactical logistics support</p>
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
                                Multi-Company Sustainment Coordination
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Distribution Management:</strong> Battalion-level distribution system supporting multiple company operations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Maintenance Operations:</strong> Tactical-level maintenance and equipment readiness across company areas</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Medical Support:</strong> Battalion medical operations and casualty evacuation coordination across companies</p>
                                <p style="margin: 0;">• <strong>Transportation:</strong> Tactical mobility and tactical transportation coordination within Battalion framework</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 7: Battalion Joint and Coalition Integration (Blue Theme) -->
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
                            <i class="fas fa-handshake" style="margin-right: 8px; color: #93c5fd;"></i>
                            Battalion Joint and Coalition Integration
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
                                <i class="fas fa-users" style="margin-right: 6px; color: #3b82f6;"></i>
                                Battalion Joint Force and Coalition Integration
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion joint and coalition integration coordinates tactical operations with joint force components and multinational partners. JP 3-31 establishes that Battalion commanders must integrate tactical operations with joint capabilities while maintaining interoperability with coalition forces and partner nations within the tactical framework.
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
                                <i class="fas fa-flag" style="margin-right: 6px; color: #3b82f6;"></i>
                                Joint Force Component Coordination
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Joint Air Component:</strong> Coordination with joint air operations and tactical air support</p>
                                <p style="margin: 0 0 8px 0;"><strong>Joint Fires:</strong> Integration with joint fires coordination and tactical targeting within Battalion area</p>
                                <p style="margin: 0;"><strong>Joint Special Operations:</strong> Coordination with special operations forces and tactical warfare capabilities</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(59, 130, 246, 0.10) 0%, rgba(59, 130, 246, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(59, 130, 246, 0.2);
                        ">
                            <h6 style="color: #bfdbfe; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-globe" style="margin-right: 6px; color: #3b82f6;"></i>
                                Coalition and Multinational Coordination
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>NATO Integration:</strong> Standardization agreements and NATO tactical procedures within Battalion framework</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Bilateral Partnerships:</strong> Security cooperation and combined operations with partner battalions and companies</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Interoperability:</strong> Communications, logistics, and tactical interoperability with coalition forces</p>
                                <p style="margin: 0;">• <strong>Liaison Operations:</strong> Exchange officers and liaison elements for multinational tactical coordination</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Battalion Battle Management and Decision Support (Red Theme) -->
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
                            <i class="fas fa-cogs" style="margin-right: 8px; color: #fca5a5;"></i>
                            Battalion Battle Management and Decision Support
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
                                <i class="fas fa-chart-line" style="margin-right: 6px; color: #ef4444;"></i>
                                Battalion Battle Management and Decision Support Systems
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Battalion battle management systems coordinate tactical execution across multiple company areas of operations. FM 6-0 establishes that Battalion battle management must provide real-time situational awareness, decision support, and tactical coordination to enable responsive tactical command and mission flexibility.
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
                                <i class="fas fa-tachometer-alt" style="margin-right: 6px; color: #ef4444;"></i>
                                Tactical Battle Tracking and Management
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Real-Time Battle Tracking:</strong> Continuous monitoring of company operations and tactical situations</p>
                                <p style="margin: 0 0 8px 0;"><strong>Decision Support Systems:</strong> Analytical tools and decision aids for tactical planning and execution</p>
                                <p style="margin: 0;"><strong>Tactical Coordination:</strong> Synchronization tools for multi-company operations and resource allocation</p>
                            </div>
                        </div>

                        <div style="
                            background: linear-gradient(135deg, rgba(239, 68, 68, 0.10) 0%, rgba(239, 68, 68, 0.05) 100%);
                            padding: 12px;
                            border-radius: 6px;
                            border: 1px solid rgba(239, 68, 68, 0.2);
                        ">
                            <h6 style="color: #fecaca; font-size: 12px; font-weight: 600; margin: 0 0 6px 0;">
                                <i class="fas fa-brain" style="margin-right: 6px; color: #ef4444;"></i>
                                Tactical Assessment and Adaptation
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Mission Effectiveness Assessment:</strong> Tactical-level effectiveness evaluation and impact analysis</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Tactical Assessment:</strong> Continuous evaluation of Battalion operations against tactical objectives</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Adaptive Planning:</strong> Dynamic adjustment of tactical plans based on changing conditions</p>
                                <p style="margin: 0;">• <strong>Lessons Learned:</strong> Tactical experience capture and integration into future planning processes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Battalion Implementation Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 16px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f59e0b; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Battalion Plan Development Doctrinal Framework Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Doctrinal Foundation:</strong> JP 5-0 Joint Planning Process, FM 5-0 Operations Process, FM 3-0 Operations, JP 3-31 Command and Control
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Tactical Integration:</strong> Brigade operational coordination, multi-company tactical planning, combined arms expertise, tactical operations
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Planning Products:</strong> Battalion Operations Plan, Tactical Framework, Company Coordination Plan, Mission Management System
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Command Authority:</strong> Battalion tactical command, company coordination, joint integration, tactical resource allocation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const battalionEchelonModule = {
    getContent() {
        return getBattalionPlanDevelopmentAnalysis();
    }
};

export default battalionEchelonModule;
