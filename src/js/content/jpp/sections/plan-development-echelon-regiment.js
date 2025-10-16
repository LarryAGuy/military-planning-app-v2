/**
 * JPP Step 7: Plan Development - Echelon Analysis (Regiment)
 * Comprehensive doctrinal analysis for Regimental level planning
 */

function getRegimentPlanDevelopmentAnalysis() {
    return `
        <div style="padding: 20px;">
            <!-- Regiment Plan Development Doctrinal Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-chess-rook" style="margin-right: 12px; color: #22c55e; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Regiment Level Plan Development - Doctrinal Framework</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 7 Echelon Analysis - Regimental Operational Command Doctrine</p>
                </div>
            </div>

            <!-- First Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 1: Regiment Specialized Planning Doctrine (Amber/Orange Theme) -->
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
                            Regiment Specialized Planning Doctrine
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
                                Regimental Specialized Mission Planning Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regimental planning doctrine establishes the specialized tactical planning framework for mission-focused operations at the operational level. FM 3-0 defines Regimental planning as the integration of specialized capabilities, multi-squadron coordination, and functional expertise to achieve tactical objectives within the Division operational framework and Brigade tactical coordination.
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
                                Specialized Planning Process and Methodology
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Division Integration:</strong> Integration with Division tactical planning and specialized mission coordination requirements</p>
                                <p style="margin: 0 0 8px 0;"><strong>Regimental Planning Process:</strong> Regiment-specific application of specialized mission planning processes</p>
                                <p style="margin: 0;"><strong>Squadron Coordination:</strong> Coordination with subordinate squadron planning and specialized execution</p>
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
                                Specialized Objectives and Mission Analysis
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Mission Analysis:</strong> Regiment-level specialized mission analysis and tactical situation assessment</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Specialized Objectives:</strong> Development of specialized objectives supporting Division operational goals</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Functional Integration:</strong> Integration of specialized capabilities and functional expertise</p>
                                <p style="margin: 0;">• <strong>Risk Assessment:</strong> Specialized risk assessment and mitigation planning at Regimental level</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Regiment Multi-Squadron Coordination (Green Theme) -->
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
                            Regiment Multi-Squadron Coordination
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
                                Regimental Multi-Squadron Operational Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regimental multi-squadron coordination synchronizes specialized squadron capabilities to achieve tactical superiority. FM 3-0 establishes that Regimental operations must integrate all squadron capabilities to create specialized advantages and achieve operational objectives within the Division tactical framework and Brigade coordination.
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
                                Squadron Capabilities Integration
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Squadron Coordination:</strong> Coordination of specialized squadron operations and capabilities</p>
                                <p style="margin: 0 0 8px 0;"><strong>Functional Integration:</strong> Integration of specialized functions and mission-specific capabilities</p>
                                <p style="margin: 0;"><strong>Support Integration:</strong> Coordination of intelligence, sustainment, and specialized support functions</p>
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
                                Specialized Synchronization and Coordination
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Specialized Synchronization:</strong> Coordination of all specialized functions across time and space</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Squadron Coordination:</strong> Integration of subordinate squadron capabilities and operations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Supporting Elements:</strong> Coordination with Division and Brigade supporting elements and capabilities</p>
                                <p style="margin: 0;">• <strong>Mission Flexibility:</strong> Adaptive specialized responses to changing tactical conditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 3: Regiment Specialized Operations Integration (Blue Theme) -->
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
                            Regiment Specialized Operations Integration
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
                                Regiment Specialized Operations Coordination Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment specialized operations coordinate multiple squadron capabilities to achieve specialized tactical objectives. FM 3-0 establishes that Regiment commanders must synchronize squadron operations across specialized domains while maintaining tactical flexibility and mission focus within the Regimental operational framework.
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
                                Squadron Integration and Synchronization
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Squadron Coordination:</strong> Synchronization of multiple squadron operations across Regiment area</p>
                                <p style="margin: 0 0 8px 0;"><strong>Mission Management:</strong> Squadron mission coordination and inter-squadron support requirements</p>
                                <p style="margin: 0;"><strong>Reserve Integration:</strong> Regiment reserve allocation and employment across squadron areas of operations</p>
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
                                Multi-Squadron Convergence and Effects
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Convergence Planning:</strong> Synchronized application of squadron capabilities for maximum specialized effect</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Cross-Squadron Operations:</strong> Integration of squadron capabilities for Regiment specialized objectives</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Information Advantage:</strong> Multi-squadron information operations and specialized intelligence integration</p>
                                <p style="margin: 0;">• <strong>Mission Flexibility:</strong> Adaptive multi-squadron responses to changing specialized conditions</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 4: Regiment Tactical Command and Control (Red Theme) -->
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
                            Regiment Tactical Command and Control
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
                                Regiment Specialized Command and Control Architecture
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment command and control systems provide specialized tactical-level command authority across multiple squadron areas of operations. FM 6-0 establishes that Regiment C2 systems must enable specialized decision-making, squadron coordination, and Division integration while maintaining mission flexibility and responsiveness.
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
                                Specialized Command Structure and Authority
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Regiment Command Authority:</strong> Specialized control over assigned squadrons and direct reporting units</p>
                                <p style="margin: 0 0 8px 0;"><strong>Squadron Command Integration:</strong> Coordination with squadron command posts and specialized operations centers</p>
                                <p style="margin: 0;"><strong>Division Force Coordination:</strong> Integration with Division command and control systems and specialized guidance</p>
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
                                Specialized Communications and Information Systems
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Specialized Communications:</strong> Secure communications with Division Command and squadron headquarters</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Mission Networks:</strong> Regiment command and control networks and squadron integration systems</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Information Sharing:</strong> Intelligence dissemination, specialized coordination, and situational awareness</p>
                                <p style="margin: 0;">• <strong>Cybersecurity:</strong> Network defense and information assurance across Regiment specialized systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 5: Regiment Intelligence and Information Operations (Amber/Orange Theme) -->
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
                            Regiment Intelligence and Information Operations
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
                                Regiment Specialized Intelligence Integration
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment intelligence operations provide specialized situational awareness across multiple squadron areas of operations. FM 2-0 establishes that Regiment intelligence must integrate Division tactical intelligence with squadron specialized collection to support specialized decision-making and mission planning across the Regiment operational framework.
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
                                Specialized Intelligence Collection and Analysis
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Division Intelligence Integration:</strong> Integration of Division tactical intelligence with Regiment specialized requirements</p>
                                <p style="margin: 0 0 8px 0;"><strong>Regiment Intelligence Assets:</strong> Regiment-specific collection assets and specialized intelligence fusion centers</p>
                                <p style="margin: 0;"><strong>Squadron Intelligence Coordination:</strong> Coordination with squadron intelligence operations and specialized collection assets</p>
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
                                <p style="margin: 0 0 4px 0;">• <strong>Information Operations:</strong> Regiment-level information operations supporting specialized objectives and mission planning</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Electronic Warfare:</strong> Specialized-level electronic warfare coordination across squadron areas of operations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Cyber Operations:</strong> Regiment cyber capabilities integrated with Division specialized cyber operations</p>
                                <p style="margin: 0;">• <strong>Intelligence Preparation:</strong> Specialized environment analysis and threat assessment for Regiment mission planning</p>
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
                                Regiment Specialized Sustainment Framework
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment sustainment operations provide specialized logistics across multiple squadron areas of operations. FM 4-0 establishes that Regiment sustainment must integrate Division tactical logistics with squadron specialized sustainment to maintain mission tempo and operational continuity across the Regiment specialized framework.
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
                                Specialized Sustainment Categories and Coordination
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Division Logistics Integration:</strong> Integration with Division tactical logistics and specialized sustainment systems</p>
                                <p style="margin: 0 0 8px 0;"><strong>Regiment Sustainment Operations:</strong> Regiment-level distribution system and specialized sustainment infrastructure</p>
                                <p style="margin: 0;"><strong>Squadron Sustainment Coordination:</strong> Coordination with squadron sustainment operations and specialized logistics support</p>
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
                                Multi-Squadron Sustainment Coordination
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Distribution Management:</strong> Regiment-level distribution system supporting multiple squadron operations</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Maintenance Operations:</strong> Specialized-level maintenance and equipment readiness across squadron areas</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Medical Support:</strong> Regiment medical operations and casualty evacuation coordination across squadrons</p>
                                <p style="margin: 0;">• <strong>Transportation:</strong> Specialized mobility and specialized transportation coordination within Regiment framework</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fourth Row of Cards -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Card 7: Regiment Joint and Coalition Integration (Blue Theme) -->
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
                            Regiment Joint and Coalition Integration
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
                                Regiment Joint Force and Coalition Integration
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment joint and coalition integration coordinates specialized operations with joint force components and multinational partners. JP 3-31 establishes that Regiment commanders must integrate specialized operations with joint capabilities while maintaining interoperability with coalition forces and partner nations within the specialized framework.
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
                                <p style="margin: 0 0 8px 0;"><strong>Joint Air Component:</strong> Coordination with joint air operations and specialized air support</p>
                                <p style="margin: 0 0 8px 0;"><strong>Joint Fires:</strong> Integration with joint fires coordination and specialized targeting within Regiment area</p>
                                <p style="margin: 0;"><strong>Joint Special Operations:</strong> Coordination with special operations forces and specialized warfare capabilities</p>
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
                                <p style="margin: 0 0 4px 0;">• <strong>NATO Integration:</strong> Standardization agreements and NATO specialized procedures within Regiment framework</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Bilateral Partnerships:</strong> Security cooperation and combined operations with partner regiments and squadrons</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Interoperability:</strong> Communications, logistics, and specialized interoperability with coalition forces</p>
                                <p style="margin: 0;">• <strong>Liaison Operations:</strong> Exchange officers and liaison elements for multinational specialized coordination</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Card 8: Regiment Battle Management and Decision Support (Red Theme) -->
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
                            Regiment Battle Management and Decision Support
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
                                Regiment Battle Management and Decision Support Systems
                            </h5>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                Regiment battle management systems coordinate specialized execution across multiple squadron areas of operations. FM 6-0 establishes that Regiment battle management must provide real-time situational awareness, decision support, and specialized coordination to enable responsive specialized command and mission flexibility.
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
                                Specialized Battle Tracking and Management
                            </h6>
                            <div style="color: #e5e7eb; font-size: 11px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong>Real-Time Battle Tracking:</strong> Continuous monitoring of squadron operations and specialized situations</p>
                                <p style="margin: 0 0 8px 0;"><strong>Decision Support Systems:</strong> Analytical tools and decision aids for specialized planning and execution</p>
                                <p style="margin: 0;"><strong>Specialized Coordination:</strong> Synchronization tools for multi-squadron operations and resource allocation</p>
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
                                Specialized Assessment and Adaptation
                            </h6>
                            <div style="color: #d1d5db; font-size: 11px; line-height: 1.4;">
                                <p style="margin: 0 0 4px 0;">• <strong>Mission Effectiveness Assessment:</strong> Specialized-level effectiveness evaluation and impact analysis</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Specialized Assessment:</strong> Continuous evaluation of Regiment operations against specialized objectives</p>
                                <p style="margin: 0 0 4px 0;">• <strong>Adaptive Planning:</strong> Dynamic adjustment of specialized plans based on changing conditions</p>
                                <p style="margin: 0;">• <strong>Lessons Learned:</strong> Specialized experience capture and integration into future planning processes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Regiment Implementation Summary -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(34, 197, 94, 0.3); border-radius: 12px; padding: 16px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                <h3 style="color: #22c55e; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                    <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                    Regiment Plan Development Doctrinal Framework Summary
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Doctrinal Foundation:</strong> JP 5-0 Joint Planning Process, FM 5-0 Operations Process, FM 3-0 Operations, JP 3-31 Command and Control
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Specialized Integration:</strong> Division tactical coordination, multi-squadron specialized planning, functional expertise, specialized operations
                        </p>
                    </div>
                    <div>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                            <strong>Planning Products:</strong> Regiment Operations Plan, Specialized Framework, Squadron Coordination Plan, Mission Management System
                        </p>
                        <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                            <strong>Command Authority:</strong> Regiment specialized command, squadron coordination, joint integration, specialized resource allocation
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export const regimentEchelonModule = {
    getContent() {
        return getRegimentPlanDevelopmentAnalysis();
    }
};

export default regimentEchelonModule;
