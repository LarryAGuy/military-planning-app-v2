/**
 * JPP Step 7: Plan Development - Echelon Analysis (Brigade)
 * Comprehensive doctrinal analysis for Brigade Combat Team level planning
 */

function getBrigadePlanDevelopmentAnalysis() {
    return `
        <div style="padding: 20px;">
            <!-- Brigade Plan Development Doctrinal Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-shield-alt" style="margin-right: 12px; color: #f59e0b; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Brigade Level Plan Development - Doctrinal Framework</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 7 Echelon Analysis - Brigade Combat Team Operational Command Doctrine</p>
                </div>
            </div>

            <!-- First Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Brigade Tactical Planning Doctrine (Amber/Orange Theme) -->
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
                            Brigade Tactical Planning Doctrine
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
                                Brigade Combat Team Planning Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade Combat Team planning doctrine establishes the tactical planning framework for combined arms operations at the operational level. FM 3-0 defines BCT planning as the integration of maneuver, fires, intelligence, sustainment, and protection capabilities to achieve tactical objectives within the Division operational framework and Corps strategic guidance.
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
                                <p style="margin: 0 0 8px 0;"><strong>Division Integration:</strong> Integration with Division tactical planning and operational coordination requirements</p>
                                <p style="margin: 0 0 8px 0;"><strong>BCT Planning Process:</strong> Brigade-specific application of the Military Decision Making Process (MDMP)</p>
                                <p style="margin: 0;"><strong>Battalion Coordination:</strong> Coordination with subordinate battalion planning and tactical execution</p>
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
                                <p style="margin: 0 0 4px 0;">• <strong>Mission Analysis:</strong> Brigade-level mission analysis and tactical situation assessment</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Tactical Objectives:</strong> Development of tactical objectives supporting Division operational goals</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Combined Arms Integration:</strong> Integration of maneuver, fires, and support capabilities</p>
                                <p style="margin: 0;">• <strong>Risk Assessment:</strong> Tactical risk assessment and mitigation planning at Brigade level</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Brigade Combined Arms Integration (Green Theme) -->
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
                            Brigade Combined Arms Integration
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
                                Brigade Combined Arms Operational Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade combined arms integration synchronizes maneuver, fires, intelligence, sustainment, and protection capabilities to achieve tactical superiority. FM 3-0 establishes that BCT combined arms operations must integrate all warfighting functions to create tactical advantages and achieve operational objectives within the Division tactical framework.
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
                                Warfighting Functions Integration
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Maneuver Integration:</strong> Coordination of infantry, armor, and reconnaissance battalion operations</p>
                                <p style="margin: 0 0 8px 0;"><strong>Fires Integration:</strong> Integration of artillery, mortars, and close air support capabilities</p>
                                <p style="margin: 0;"><strong>Support Integration:</strong> Coordination of intelligence, sustainment, and protection functions</p>
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
                                Tactical Synchronization and Coordination
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Tactical Synchronization:</strong> Coordination of all warfighting functions across time and space</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Battalion Coordination:</strong> Integration of subordinate battalion capabilities and operations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Supporting Arms:</strong> Coordination with Division and Corps supporting arms and capabilities</p>
                                <p style="margin: 0;">• <strong>Tactical Flexibility:</strong> Adaptive combined arms responses to changing tactical conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 3: Brigade Multi-Battalion Operations Integration (Blue Theme) -->
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
                            Brigade Multi-Battalion Operations Integration
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
                                Brigade Multi-Battalion Coordination Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade multi-battalion operations coordinate multiple battalion task forces to achieve tactical objectives. FM 3-0 establishes that Brigade commanders must synchronize battalion operations across time and space while maintaining tactical flexibility and combined arms integration within the Brigade tactical framework and Division operational guidance.
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
                                Battalion Integration and Synchronization
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Battalion Task Force Coordination:</strong> Synchronization of multiple battalion task force operations across Brigade area</p>
                                <p style="margin: 0 0 8px 0;"><strong>Boundary Management:</strong> Battalion boundary coordination and inter-battalion support requirements</p>
                                <p style="margin: 0;"><strong>Reserve Integration:</strong> Brigade reserve allocation and employment across battalion areas of operations</p>
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
                                Multi-Battalion Convergence and Effects
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Convergence Planning:</strong> Synchronized application of battalion capabilities for maximum tactical effect</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Cross-Battalion Fires:</strong> Integration of battalion fires and effects for Brigade tactical objectives</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Information Advantage:</strong> Multi-battalion information operations and intelligence integration</p>
                                <p style="margin: 0;">• <strong>Tactical Flexibility:</strong> Adaptive multi-battalion responses to changing tactical conditions</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Brigade Tactical Command and Control (Red Theme) -->
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
                            Brigade Tactical Command and Control
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
                                Brigade Tactical Command and Control Architecture
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade command and control systems provide tactical-level command authority across multiple battalion areas of operations. FM 6-0 establishes that Brigade C2 systems must enable tactical decision-making, battalion coordination, and Division integration while maintaining tactical flexibility and responsiveness at the operational level.
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
                                <p style="margin: 0 0 8px 0;"><strong>Brigade Command Authority:</strong> Tactical control over assigned battalion task forces and direct reporting units</p>
                                <p style="margin: 0 0 8px 0;"><strong>Battalion Command Integration:</strong> Coordination with battalion command posts and tactical operations centers</p>
                                <p style="margin: 0;"><strong>Division Force Coordination:</strong> Integration with Division command and control systems and tactical guidance</p>
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
                                <p style="margin: 0 0 4px 0;">• <strong>Tactical Communications:</strong> Secure communications with Division Command and battalion headquarters</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Tactical Networks:</strong> Brigade command and control networks and battalion integration systems</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Information Sharing:</strong> Intelligence dissemination, tactical coordination, and situational awareness</p>
                                <p style="margin: 0;">• <strong>Cybersecurity:</strong> Network defense and information assurance across Brigade tactical systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 5: Brigade Intelligence and Information Operations (Amber/Orange Theme) -->
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
                            Brigade Intelligence and Information Operations
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
                                Brigade Tactical Intelligence Integration
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade intelligence operations provide tactical situational awareness across multiple battalion areas of operations. FM 2-0 establishes that Brigade intelligence must integrate Division tactical intelligence with battalion tactical collection to support tactical decision-making and battle planning across the Brigade tactical framework.
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
                                <p style="margin: 0 0 8px 0;"><strong>Division Intelligence Integration:</strong> Integration of Division tactical intelligence with Brigade tactical requirements</p>
                                <p style="margin: 0 0 8px 0;"><strong>Brigade Intelligence Assets:</strong> Brigade-specific collection assets and tactical intelligence fusion centers</p>
                                <p style="margin: 0;"><strong>Battalion Intelligence Coordination:</strong> Coordination with battalion intelligence operations and tactical collection assets</p>
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
                                <p style="margin: 0 0 4px 0;">• <strong>Information Operations:</strong> Brigade-level information operations supporting tactical objectives and battle planning</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Electronic Warfare:</strong> Tactical-level electronic warfare coordination across battalion areas of operations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Cyber Operations:</strong> Brigade cyber capabilities integrated with Division tactical cyber operations</p>
                                <p style="margin: 0;">• <strong>Intelligence Preparation:</strong> Tactical environment analysis and threat assessment for Brigade battle planning</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 6: Brigade Sustainment and Logistics Operations (Green Theme) -->
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
                            Brigade Sustainment and Logistics Operations
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
                                Brigade Tactical Sustainment Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade sustainment operations provide tactical logistics across multiple battalion areas of operations. FM 4-0 establishes that Brigade sustainment must integrate Division tactical logistics with battalion tactical sustainment to maintain tactical tempo and battle continuity across the Brigade tactical framework.
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
                                <p style="margin: 0 0 8px 0;"><strong>Division Logistics Integration:</strong> Integration with Division tactical logistics and tactical sustainment systems</p>
                                <p style="margin: 0 0 8px 0;"><strong>Brigade Sustainment Operations:</strong> Brigade-level distribution system and tactical sustainment infrastructure</p>
                                <p style="margin: 0;"><strong>Battalion Sustainment Coordination:</strong> Coordination with battalion sustainment operations and tactical logistics support</p>
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
                                Multi-Battalion Sustainment Coordination
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Distribution Management:</strong> Brigade-level distribution system supporting multiple battalion operations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Maintenance Operations:</strong> Tactical-level maintenance and equipment readiness across battalion areas</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Medical Support:</strong> Brigade medical operations and casualty evacuation coordination across battalions</p>
                                <p style="margin: 0;">• <strong>Transportation:</strong> Tactical mobility and tactical transportation coordination within Brigade framework</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 7: Brigade Joint and Coalition Integration (Blue Theme) -->
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
                            Brigade Joint and Coalition Integration
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
                                Brigade Joint Force and Coalition Integration
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade joint and coalition integration coordinates land operations with joint force components and multinational partners. JP 3-31 establishes that Brigade commanders must integrate land operations with joint capabilities while maintaining interoperability with coalition forces and partner nations within the tactical framework.
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
                                <p style="margin: 0 0 8px 0;"><strong>Joint Air Component:</strong> Coordination with joint air operations, close air support, and air interdiction</p>
                                <p style="margin: 0 0 8px 0;"><strong>Joint Fires:</strong> Integration with joint fires coordination and targeting within Brigade area</p>
                                <p style="margin: 0;"><strong>Joint Special Operations:</strong> Coordination with special operations forces and unconventional warfare capabilities</p>
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
                                <p style="margin: 0 0 4px 0;">• <strong>NATO Integration:</strong> Standardization agreements and NATO tactical procedures within Brigade framework</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Bilateral Partnerships:</strong> Security cooperation and combined operations with partner brigades and battalions</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Interoperability:</strong> Communications, logistics, and tactical interoperability with coalition forces</p>
                                <p style="margin: 0;">• <strong>Liaison Operations:</strong> Exchange officers and liaison elements for multinational tactical coordination</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Brigade Battle Management and Decision Support (Red Theme) -->
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
                            Brigade Battle Management and Decision Support
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
                                Brigade Battle Management and Decision Support Systems
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Brigade battle management systems coordinate tactical execution across multiple battalion areas of operations. FM 6-0 establishes that Brigade battle management must provide real-time situational awareness, decision support, and tactical coordination to enable responsive tactical command and operational flexibility.
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
                                <p style="margin: 0 0 8px 0;"><strong>Real-Time Battle Tracking:</strong> Continuous monitoring of battalion operations and tactical situations</p>
                                <p style="margin: 0 0 8px 0;"><strong>Decision Support Systems:</strong> Analytical tools and decision aids for tactical planning and execution</p>
                                <p style="margin: 0;"><strong>Tactical Coordination:</strong> Synchronization tools for multi-battalion operations and resource allocation</p>
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
                                <p style="margin: 0 0 4px 0;">• <strong>Battle Damage Assessment:</strong> Tactical-level effectiveness evaluation and impact analysis</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Tactical Assessment:</strong> Continuous evaluation of Brigade operations against tactical objectives</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Adaptive Planning:</strong> Dynamic adjustment of tactical plans based on changing conditions</p>
                                <p style="margin: 0;">• <strong>Lessons Learned:</strong> Tactical experience capture and integration into future planning processes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Brigade Implementation Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 12px; padding: 16px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #f59e0b; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Brigade Plan Development Doctrinal Framework Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Doctrinal Foundation:</strong> JP 5-0 Joint Planning Process, FM 5-0 Operations Process, FM 3-0 Operations, JP 3-31 Command and Control
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Tactical Integration:</strong> Division tactical coordination, multi-battalion tactical planning, combined arms integration, tactical operations
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Planning Products:</strong> Brigade Operations Plan, Combined Arms Framework, Battalion Coordination Plan, Tactical Management System
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Command Authority:</strong> Brigade tactical command, battalion coordination, joint integration, tactical resource allocation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const brigadeEchelonModule = {
    getContent() {
        return getBrigadePlanDevelopmentAnalysis();
    }
};

export default brigadeEchelonModule;
