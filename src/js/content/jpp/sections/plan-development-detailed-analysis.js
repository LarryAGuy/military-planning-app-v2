/**
 * JPP Step 7: Plan Development - Detailed Analysis Content Module
 * UNCLASSIFIED comprehensive JP 5-0 plan development doctrinal content
 * Authorized to exceed 300-line limit due to extensive doctrinal content requirements
 * Source: JP 5-0 (Joint Planning), Chapter 4 - Plan Development; FM 5-0 (Operations Process), November 2024
 */

export const detailedAnalysisModule = {
    id: 'plan-development-detailed-analysis',
    title: 'Detailed Analysis',
    defaultExpanded: true,

    getContent() {
        return `
            <div style="padding: 20px;">
                <!-- Plan Development Header -->
                <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <i class="fas fa-drafting-compass" style="margin-right: 12px; color: #10b981; font-size: 24px;"></i>
                    <div>
                        <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 7: Plan Development - Detailed Analysis</h2>
                        <p style="color: #9ca3af; font-size: 14px; margin: 0;">Comprehensive JP 5-0 Plan Development and Documentation Framework</p>
                    </div>
                </div>

                <!-- Plan Development Overview -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                    <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-drafting-compass" style="margin-right: 8px;"></i>
                        JPP Step 7: Plan Development Doctrinal Framework
                    </h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                                <strong>Doctrinal Source:</strong> JP 5-0 (Joint Planning), Chapter 4, Para 4-7 — Plan Development<br>
                                <strong>Supporting Doctrine:</strong> FM 5-0 (Nov 2024), FM 3-0, FM 6-0, ADP 3-0, ADP 5-0, JP 3-0<br>
                                <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY<br>
                                <strong>Framework Focus:</strong> Joint plan development, documentation, and implementation preparation
                            </p>
                        </div>
                        <div>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Primary Output:</strong> Complete operation plan (OPLAN) with supporting annexes and appendices<br>
                                <strong>Key Products:</strong> OPLAN, CONPLAN, OPORD, supporting plans, execution timeline, resource requirements<br>
                                <strong>Decision Point:</strong> Plan approval and authorization for execution preparation<br>
                                <strong>Integration:</strong> Joint, interagency, intergovernmental, and multinational coordination
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 2x2 Plan Development Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 1: Joint Plan Development Process -->
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
                                <i class="fas fa-project-diagram" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                                Joint Plan Development Process
                            </h4>

                            <div style="
                                background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
                                padding: 16px;
                                border-radius: 10px;
                                border: 1px solid rgba(16, 185, 129, 0.4);
                                margin-bottom: 16px;
                                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(16, 185, 129, 0.1);
                            ">
                                <h5 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                    <i class="fas fa-cogs" style="margin-right: 6px; color: #10b981;"></i>
                                    JP 5-0 Plan Development Framework
                                </h5>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                    The joint plan development process transforms the approved course of action into a comprehensive operation plan (OPLAN) that provides detailed guidance for execution. Per JP 5-0, plan development includes refining the approved COA, developing supporting plans and annexes, coordinating with joint and coalition partners, and preparing detailed execution timelines. The process ensures all aspects of the operation are thoroughly planned, resourced, and coordinated before execution begins. This comprehensive approach integrates risk assessment methodologies, resource optimization strategies, and multi-domain coordination requirements to produce executable plans that achieve strategic objectives while maintaining operational flexibility and tactical adaptability.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.06) 100%);
                                padding: 14px;
                                border-radius: 8px;
                                border: 1px solid rgba(16, 185, 129, 0.3);
                                margin-bottom: 14px;
                            ">
                                <h6 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-list-ol" style="margin-right: 5px; color: #10b981;"></i>
                                    Plan Development Phases
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Plan development consists of: (1) COA refinement and detailed planning, (2) Supporting plan development and integration, (3) Annex and appendix preparation, (4) Resource allocation and timeline development, (5) Coordination with joint and coalition partners, (6) Risk assessment and mitigation planning, and (7) Quality assurance and plan validation. These phases are executed through iterative processes with continuous stakeholder engagement, quality control checkpoints, and adaptive planning methodologies to ensure comprehensive plan development that meets strategic objectives while maintaining operational flexibility and tactical feasibility.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(16, 185, 129, 0.10) 0%, rgba(16, 185, 129, 0.05) 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(16, 185, 129, 0.25);
                                margin-bottom: 12px;
                            ">
                                <h6 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-sync-alt" style="margin-right: 5px; color: #10b981;"></i>
                                    Iterative Development Process
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Plan development is an iterative process that involves continuous refinement based on changing conditions, new intelligence, resource availability, and coordination requirements. The planning staff must maintain flexibility while ensuring the plan remains executable, sustainable, and aligned with commander's intent and strategic objectives.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.04) 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(16, 185, 129, 0.2);
                            ">
                                <h6 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-arrows-alt" style="margin-right: 5px; color: #10b981;"></i>
                                    JP 5-0 Adaptive Planning Framework
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Per JP 5-0, Chapter 4, Para 4-7, adaptive planning enables commanders to adjust plans rapidly in response to changing operational conditions. The adaptive planning framework integrates continuous assessment, flexible planning methodologies, and rapid plan modification capabilities. This approach ensures plans remain relevant and executable despite evolving threats, changing political conditions, or resource constraints, supporting both deliberate and crisis action planning environments. Adaptive planning incorporates feedback loops, assessment triggers, and decision criteria that enable planners to modify operational approaches while maintaining strategic coherence and tactical feasibility.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Operation Plan Documentation -->
                    <div style="
                        background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                        border: 1px solid #374151;
                        border-radius: 12px;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        min-height: 600px;
                        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1);
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
                            background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%);
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
                                border-bottom: 2px solid rgba(37, 99, 235, 0.3);
                                padding-bottom: 8px;
                            ">
                                <i class="fas fa-file-alt" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                                Operation Plan Documentation
                            </h4>

                            <div style="
                                background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%);
                                padding: 16px;
                                border-radius: 10px;
                                border: 1px solid rgba(37, 99, 235, 0.4);
                                margin-bottom: 16px;
                                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(37, 99, 235, 0.1);
                            ">
                                <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                    <i class="fas fa-document" style="margin-right: 6px; color: #2563eb;"></i>
                                    OPLAN Structure and Components
                                </h5>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                    The operation plan (OPLAN) serves as the comprehensive document that translates strategic guidance and the approved COA into detailed execution instructions. Per JP 5-0, the OPLAN includes the base plan, supporting annexes (A through Z as required), and appendices that provide specific functional guidance. The plan must be clear, concise, and complete, providing subordinate commanders with sufficient detail to execute their assigned missions while maintaining flexibility for adaptation during execution.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.06) 100%);
                                padding: 14px;
                                border-radius: 8px;
                                border: 1px solid rgba(37, 99, 235, 0.3);
                                margin-bottom: 14px;
                            ">
                                <h6 style="color: #bfdbfe; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-clipboard-list" style="margin-right: 5px; color: #2563eb;"></i>
                                    Plan Documentation Standards
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Plan documentation follows established joint doctrine formats including: (1) Base plan with situation, mission, execution, sustainment, and command and control, (2) Functional annexes covering intelligence, fires, movement and maneuver, protection, sustainment, and command and control, (3) Supporting appendices with detailed procedures and coordination instructions, and (4) Distribution and security classification guidance.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(37, 99, 235, 0.10) 0%, rgba(37, 99, 235, 0.05) 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(37, 99, 235, 0.25);
                                margin-bottom: 12px;
                            ">
                                <h6 style="color: #bfdbfe; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-shield-alt" style="margin-right: 5px; color: #2563eb;"></i>
                                    Quality Assurance and Validation
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Plan documentation requires rigorous quality assurance to ensure accuracy, completeness, and executability. This includes technical review for doctrinal compliance, coordination review for joint and coalition integration, resource validation for feasibility, and commander's review for alignment with intent and strategic objectives.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(37, 99, 235, 0.04) 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(37, 99, 235, 0.2);
                            ">
                                <h6 style="color: #bfdbfe; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-code-branch" style="margin-right: 5px; color: #2563eb;"></i>
                                    Branch and Sequel Planning Integration
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    JP 5-0, Chapter 4, Para 4-8 requires integration of branch and sequel planning during plan development. Branches address contingencies that could occur during plan execution, while sequels address subsequent operations. Plan documentation must include decision points, triggers for branch activation, resource requirements for contingencies, and coordination procedures for transitioning between the base plan and contingency operations, ensuring comprehensive operational flexibility. Branch plans must be developed concurrently with the base plan, incorporating alternative courses of action for likely contingencies, enemy reactions, and environmental changes that could affect mission success.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Plan Review and Approval Process -->
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
                            background: radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%);
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
                                <i class="fas fa-check-double" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                                Plan Review and Approval Process
                            </h4>

                            <div style="
                                background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%);
                                padding: 16px;
                                border-radius: 10px;
                                border: 1px solid rgba(220, 38, 38, 0.4);
                                margin-bottom: 16px;
                                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(220, 38, 38, 0.1);
                            ">
                                <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                    <i class="fas fa-search" style="margin-right: 6px; color: #dc2626;"></i>
                                    Multi-Level Review Process
                                </h5>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                    The plan review and approval process ensures the developed plan meets all requirements and is executable within available resources. Per JP 5-0, the review process includes staff review for technical accuracy and completeness, functional review by subject matter experts, coordination review with joint and coalition partners, legal review for compliance with laws and rules of engagement, and commander's review for alignment with strategic objectives and commander's intent.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(220, 38, 38, 0.12) 0%, rgba(220, 38, 38, 0.06) 100%);
                                padding: 14px;
                                border-radius: 8px;
                                border: 1px solid rgba(220, 38, 38, 0.3);
                                margin-bottom: 14px;
                            ">
                                <h6 style="color: #fecaca; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-users-cog" style="margin-right: 5px; color: #dc2626;"></i>
                                    Approval Authority and Process
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Plan approval follows established command authority structures with: (1) Staff coordination and recommendation, (2) Component commander review and endorsement, (3) Joint force commander approval for execution, (4) Higher headquarters coordination as required, (5) Coalition partner consultation and agreement, and (6) Final approval authority exercised by the appropriate command level based on operation scope and strategic implications.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(220, 38, 38, 0.10) 0%, rgba(220, 38, 38, 0.05) 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(220, 38, 38, 0.25);
                                margin-bottom: 12px;
                            ">
                                <h6 style="color: #fecaca; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-stamp" style="margin-right: 5px; color: #dc2626;"></i>
                                    Approval Documentation and Distribution
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Plan approval requires formal documentation including approval memorandum, distribution list, security classification guidance, and implementation timeline. The approved plan must be distributed to all relevant commands, agencies, and coalition partners with appropriate security controls and access restrictions.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(220, 38, 38, 0.04) 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(220, 38, 38, 0.2);
                            ">
                                <h6 style="color: #fecaca; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-users" style="margin-right: 5px; color: #dc2626;"></i>
                                    Joint Planning and Execution Community (JPEC) Coordination
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Per JP 5-0, Chapter 2, Para 2-4, the JPEC encompasses all organizations involved in joint planning and execution. During plan review and approval, JPEC coordination ensures comprehensive stakeholder engagement including combatant commands, Services, defense agencies, interagency partners, and coalition forces. JPEC facilitates information sharing, resource coordination, and synchronized planning efforts across the joint planning community, ensuring plan feasibility and broad-based support for execution. The JPEC framework enables horizontal and vertical coordination across organizational boundaries, promoting unity of effort and shared understanding of operational objectives, constraints, and resource requirements throughout the planning and execution continuum.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Implementation Preparation and Coordination -->
                    <div style="
                        background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                        border: 1px solid #374151;
                        border-radius: 12px;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        min-height: 600px;
                        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1);
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
                                <i class="fas fa-rocket" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                                Implementation Preparation and Coordination
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
                                    <i class="fas fa-play-circle" style="margin-right: 6px; color: #f59e0b;"></i>
                                    Execution Preparation Framework
                                </h5>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Implementation preparation transforms the approved plan into executable operations through detailed coordination, resource allocation, and readiness preparation. Per JP 5-0, this phase includes subordinate unit planning, resource positioning, intelligence preparation, communication system establishment, and coordination with joint and coalition partners. The preparation phase ensures all elements are ready for seamless transition from planning to execution.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.06) 100%);
                                padding: 14px;
                                border-radius: 8px;
                                border: 1px solid rgba(245, 158, 11, 0.3);
                                margin-bottom: 14px;
                            ">
                                <h6 style="color: #fde68a; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-network-wired" style="margin-right: 5px; color: #f59e0b;"></i>
                                    Coordination and Synchronization
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Implementation preparation requires extensive coordination including: (1) Subordinate command planning and preparation, (2) Joint and coalition partner synchronization, (3) Interagency coordination and support, (4) Resource allocation and positioning, (5) Communication system establishment, (6) Intelligence sharing and preparation, and (7) Contingency planning for execution challenges.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(245, 158, 11, 0.10) 0%, rgba(245, 158, 11, 0.05) 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(245, 158, 11, 0.25);
                                margin-bottom: 12px;
                            ">
                                <h6 style="color: #fde68a; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-clock" style="margin-right: 5px; color: #f59e0b;"></i>
                                    Timeline and Readiness Assessment
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Implementation preparation includes detailed timeline development with critical milestones, readiness assessments for all participating units, resource availability confirmation, and contingency planning for potential delays or complications. The commander must ensure all elements achieve required readiness levels before authorizing execution.
                                </p>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(245, 158, 11, 0.04) 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(245, 158, 11, 0.2);
                            ">
                                <h6 style="color: #fde68a; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-drafting-compass" style="margin-right: 5px; color: #f59e0b;"></i>
                                    Operational Design Integration Framework
                                </h6>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    JP 5-0, Chapter 3, Para 3-1 through 3-6 establishes operational design as the foundation for plan development. Implementation preparation must integrate operational design elements including operational approach, lines of operation/effort, decisive points, centers of gravity analysis, and operational reach considerations. This integration ensures the developed plan maintains coherence with strategic objectives while providing executable guidance for tactical operations, bridging strategic intent with tactical execution. Operational design integration requires continuous validation of design elements against emerging conditions, resource availability, and tactical feasibility, ensuring the plan remains operationally sound and strategically relevant throughout the implementation preparation phase.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Comprehensive Plan Development Analysis -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                    <h3 style="color: #10b981; font-size: 18px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-microscope" style="margin-right: 10px; color: #10b981; font-size: 20px;"></i>
                        Comprehensive Plan Development Doctrinal Analysis
                    </h3>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                                <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                    <i class="fas fa-book-open" style="margin-right: 6px; color: #10b981;"></i>
                                    JP 5-0 Plan Development Doctrine
                                </h4>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Joint Publication 5-0 establishes plan development as the critical phase where the approved course of action is transformed into a comprehensive, executable operation plan. This process requires detailed analysis of operational requirements, resource allocation, timeline development, and coordination mechanisms. The plan development phase ensures all aspects of the operation are thoroughly considered, properly resourced, and effectively coordinated before execution begins.
                                </p>
                            </div>

                            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
                                <h4 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-sitemap" style="margin-right: 5px; color: #10b981;"></i>
                                    Plan Structure and Organization
                                </h4>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    The operation plan follows a standardized structure including the base plan with situation, mission, execution, sustainment, and command and control sections. Supporting annexes provide detailed functional guidance for intelligence, fires, movement and maneuver, protection, sustainment, and command and control. Appendices contain specific procedures, coordination instructions, and technical details required for execution.
                                </p>
                            </div>

                            <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 6px; padding: 12px;">
                                <h4 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-puzzle-piece" style="margin-right: 5px; color: #10b981;"></i>
                                    Integration and Coordination Requirements
                                </h4>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Plan development requires extensive integration across joint functions, coalition partners, and interagency organizations. This includes synchronizing military operations with diplomatic initiatives, coordinating resource requirements across services and nations, and ensuring communication systems support all participants. The planning staff must maintain continuous coordination throughout the development process.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                                <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">
                                    <i class="fas fa-cogs" style="margin-right: 6px; color: #10b981;"></i>
                                    Plan Development Process
                                </h4>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                    The plan development process is iterative and collaborative, involving continuous refinement based on changing conditions, new intelligence, and coordination feedback. The process includes detailed analysis of operational requirements, development of supporting plans and procedures, coordination with all stakeholders, and validation of plan feasibility and executability. Quality assurance measures ensure the plan meets all doctrinal and operational requirements.
                                </p>
                            </div>

                            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 14px; margin-bottom: 14px;">
                                <h4 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-shield-alt" style="margin-right: 5px; color: #10b981;"></i>
                                    Risk Assessment and Mitigation
                                </h4>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Plan development includes comprehensive risk assessment covering operational, strategic, and tactical risks. This analysis identifies potential challenges, develops mitigation strategies, and creates contingency plans for likely scenarios. Risk assessment considers enemy capabilities, environmental factors, resource constraints, and coordination challenges that could impact plan execution.
                                </p>
                            </div>

                            <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 6px; padding: 12px;">
                                <h4 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 6px 0;">
                                    <i class="fas fa-check-circle" style="margin-right: 5px; color: #10b981;"></i>
                                    Validation and Approval Process
                                </h4>
                                <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                    Plan validation ensures the developed plan is feasible, acceptable, and suitable for achieving strategic objectives. The validation process includes technical review for doctrinal compliance, operational review for executability, resource review for availability, and command review for alignment with strategic guidance. Final approval authority rests with the appropriate command level based on operation scope and strategic implications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Plan Development Implementation Framework -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
                    <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-tools" style="margin-right: 8px; color: #10b981;"></i>
                        Plan Development Implementation Framework
                    </h3>

                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
                        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 14px;">
                            <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-layer-group" style="margin-right: 5px; color: #10b981;"></i>
                                Planning Staff Organization
                            </h4>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Plan development requires organized planning staff with clear roles and responsibilities. Staff sections include operations, intelligence, logistics, communications, and coordination elements. Each section contributes specialized expertise while maintaining integration with the overall planning effort.
                            </p>
                        </div>

                        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 14px;">
                            <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-calendar-alt" style="margin-right: 5px; color: #10b981;"></i>
                                Timeline Management
                            </h4>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Effective plan development requires careful timeline management with clear milestones and deadlines. The planning timeline must account for coordination requirements, review processes, and approval procedures while maintaining flexibility for necessary adjustments and refinements.
                            </p>
                        </div>

                        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 8px; padding: 14px;">
                            <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">
                                <i class="fas fa-handshake" style="margin-right: 5px; color: #10b981;"></i>
                                Coalition Coordination
                            </h4>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.3; margin: 0;">
                                Plan development in coalition environments requires extensive coordination with partner nations and organizations. This includes sharing planning information, coordinating capabilities and constraints, and ensuring the plan accommodates coalition partner requirements and limitations.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Professional Military Education Context -->
                <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%); border: 2px solid rgba(16, 185, 129, 0.4); border-radius: 12px; padding: 20px; box-shadow: 0 6px 20px rgba(16, 185, 129, 0.1);">
                    <h3 style="color: #10b981; font-size: 16px; font-weight: 700; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-graduation-cap" style="margin-right: 8px; color: #10b981;"></i>
                        Professional Military Education Applications
                    </h3>
                    <p style="color: #e5e7eb; font-size: 12px; line-height: 1.5; margin: 0;">
                        This comprehensive plan development framework serves as an essential educational resource for joint planning professionals, staff officers, and military educators. The content provides authoritative doctrinal guidance based on JP 5-0 Joint Planning doctrine, supporting professional military education programs including the Joint Professional Military Education (JPME) curriculum, Command and General Staff College planning courses, and joint planning staff training programs. Military professionals can utilize this framework to understand the complexities of transforming approved courses of action into executable operation plans, ensuring comprehensive preparation for joint planning responsibilities across all levels of command.
                    </p>
                </div>
            </div>
        `;
    },

    initialize() {
        console.log('✅ Plan Development Detailed Analysis module initialized');
    }
};

export default detailedAnalysisModule;
