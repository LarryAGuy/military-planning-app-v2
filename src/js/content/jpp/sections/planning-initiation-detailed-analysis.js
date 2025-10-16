/**
 * JPP Step 1: Planning Initiation - Detailed Analysis Framework
 * UNCLASSIFIED framework for comprehensive joint planning initiation analysis
 * Follows JP 5-0 standards with structured analytical components
 */

export const detailedAnalysisModule = {
    id: 'planning-initiation-detailed-analysis',
    title: 'Detailed Analysis',
    defaultExpanded: true,

    getContent() {
    return `
        <div style="padding: 20px;">
            <!-- Detailed Analysis Header -->
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid #374151;">
                <i class="fas fa-microscope" style="margin-right: 12px; color: #3b82f6; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 1: Detailed Planning Initiation Analysis</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">Comprehensive Joint Planning Analysis Framework</p>
                </div>
            </div>

            <!-- Primary Analysis Grid (2x2) -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Planning Initiation Overview Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 320px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-compass" style="margin-right: 8px; color: #2563eb; font-size: 14px;"></i>
                        Planning Initiation Overview (JP 5-0)
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(37, 99, 235, 0.06); padding: 10px; border-radius: 4px; border: 1px solid rgba(37, 99, 235, 0.3); margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 13px; margin: 0 0 8px 0;">Doctrinal Foundation & Purpose</h5>
                            <ul style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li>Initiates the Joint Planning Process in response to strategic guidance, crisis events, or anticipated operations (JP 5-0).</li>
                                <li>Establishes initial commander’s planning guidance, assumptions, and priorities to frame subsequent analysis.</li>
                                <li>Produces an initial Planning Directive/Warning Order that aligns joint force efforts with higher strategic direction.</li>
                                <li>Sets initial conditions for mission analysis, battle rhythm, and cross-functional integration.</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(59, 130, 246, 0.04); padding: 8px; border-radius: 4px; border: 1px solid rgba(59, 130, 246, 0.2);">
                            <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Typical Triggers & Outputs</h6>
                            <ul style="margin: 0; padding-left: 14px; color: #d1d5db; font-size: 12px;">
                                <li>Triggers: Presidential/SecDef guidance, CJCS directives, GCC/JTF tasking, emerging crises, theater campaign plan updates.</li>
                                <li>Primary outputs: Planning Directive/WarnOrd, initial CCIRs/PIRs, initial assumptions, task organization guidance, initial milestones.</li>
                                <li>Supporting outputs: Liaison requirements, initial risk framing, coordination tasks to components and interagency partners.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Strategic Guidance Integration Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 320px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-landmark" style="margin-right: 8px; color: #2563eb; font-size: 14px;"></i>
                        Strategic Guidance Integration
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(37, 99, 235, 0.06); padding: 10px; border-radius: 4px; border: 1px solid rgba(37, 99, 235, 0.3); margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #93c5fd; font-size: 13px; margin: 0 0 8px 0;">Alignment with Higher Direction</h5>
                            <ul style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li>Translate NSS/NDS/NMS and SecDef/CJCS directives into theater/joint task force planning guidance.</li>
                                <li>Cross-walk CCMD theater campaign plan, contingency plans, and GEF/JSCP tasking to current problem set.</li>
                                <li>Frame problem statements, desired end state, objectives, and effects consistent with strategic context.</li>
                                <li>Derive initial planning assumptions where facts are incomplete; validate in subsequent JPP steps.</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(59, 130, 246, 0.04); padding: 8px; border-radius: 4px; border: 1px solid rgba(59, 130, 246, 0.2);">
                            <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Guidance Products & Mechanisms</h6>
                            <ul style="margin: 0; padding-left: 14px; color: #d1d5db; font-size: 12px;">
                                <li>Initial Commander’s Planning Guidance (CPG) and Warning Order to components and stakeholders.</li>
                                <li>Initial CCIRs/PIRs and information requirements to drive JIPOE and collection.</li>
                                <li>Initial B2C2WG battle rhythm (JPG, OPT, JCB/JSWG equivalents) and suspense/milestones.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Key Activities and Tasks Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 320px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-tasks" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                        Key Activities and Tasks
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(22, 163, 74, 0.06); padding: 10px; border-radius: 4px; border: 1px solid rgba(22, 163, 74, 0.3); margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #86efac; font-size: 13px; margin: 0 0 8px 0;">Core Actions During Initiation</h5>
                            <ul style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li>Form/energize joint planning groups (JPG/OPT) and confirm B2C2WG battle rhythm and milestones.</li>
                                <li>Issue initial Planning Directive/WarnOrd with problem framing, end state, objectives, assumptions, CCIRs.</li>
                                <li>Direct JIPOE initiation and collection; task components for initial estimates and feasibility inputs.</li>
                                <li>Identify authorities, constraints, interagency requirements, and liaison augmentation.</li>
                                <li>Establish knowledge management and common operational picture standards.</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(16, 185, 129, 0.04); padding: 8px; border-radius: 4px; border: 1px solid rgba(16, 185, 129, 0.2);">
                            <h6 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Initial Outputs</h6>
                            <ul style="margin: 0; padding-left: 14px; color: #d1d5db; font-size: 12px;">
                                <li>Initial commander’s guidance, CCIRs/PIRs, and battle rhythm published to components and partners.</li>
                                <li>Stakeholder mapping and coordination tasking (USG departments/agencies, coalition, NGOs as applicable).</li>
                                <li>Risk framing note and decision support template placeholders (updated through JPP).</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Joint Planning Process Framework Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 320px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-project-diagram" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                        Joint Planning Process Framework (JP 5-0)
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(245, 158, 11, 0.06); padding: 10px; border-radius: 4px; border: 1px solid rgba(245, 158, 11, 0.3); margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #fbbf24; font-size: 13px; margin: 0 0 8px 0;">Step-by-Step Methodology</h5>
                            <ol style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li><strong>Planning Initiation:</strong> Triggered by guidance/events; publish initial guidance and battle rhythm.</li>
                                <li><strong>Mission Analysis:</strong> JIPOE, problem framing, refined assumptions, specified/implied tasks, risk.</li>
                                <li><strong>COA Development:</strong> Develop feasible/acceptable/suitable/complete/unique COAs.</li>
                                <li><strong>COA Analysis (Wargaming):</strong> Evaluate COAs against adversary actions and constraints.</li>
                                <li><strong>COA Comparison & Approval:</strong> Compare COAs against criteria; recommend/approve COA.</li>
                                <li><strong>Plan/Order Development:</strong> Draft OPLAN/OPORD; integrate annexes; finalize C2/control measures.</li>
                            </ol>
                        </div>
                        <div style="background-color: rgba(245, 158, 11, 0.04); padding: 8px; border-radius: 4px; border: 1px solid rgba(245, 158, 11, 0.2);">
                            <h6 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Integration Considerations</h6>
                            <ul style="margin: 0; padding-left: 14px; color: #d1d5db; font-size: 12px;">
                                <li>Maintain running estimates and commander’s dialogue throughout all JPP steps.</li>
                                <li>Continuously refine CCIRs/PIRs, assumptions, and risk; update the Planning Directive and milestones.</li>
                                <li>Ensure interagency/multinational equities are visible in synchronization matrices and battle rhythm.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Secondary Analysis Grid (2x2) -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                <!-- Timeline and Sequencing Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 280px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-clock" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                        Timeline and Sequencing
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(139, 92, 246, 0.06); padding: 10px; border-radius: 4px; border: 1px solid rgba(139, 92, 246, 0.3); margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 13px; margin: 0 0 8px 0;">Notional Planning Initiation Phases</h5>
                            <ol style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li><strong>D0–D1:</strong> Trigger received; initial CPG drafted; B2C2WG schedule published; WarnOrd released.</li>
                                <li><strong>D1–D3:</strong> JIPOE starts; component estimates tasked; assumptions/CCIRs refined; liaison activated.</li>
                                <li><strong>D3–D5:</strong> Initial problem framing brief; risk framing; synchronization matrix v1; collection directed.</li>
                                <li><strong>D5–D7:</strong> Mission analysis in-progress review; updated CPG; refined milestones for COA Dev.</li>
                            </ol>
                        </div>
                        <div style="background-color: rgba(139, 92, 246, 0.04); padding: 8px; border-radius: 4px; border: 1px solid rgba(139, 92, 246, 0.2);">
                            <h6 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Sequencing Considerations</h6>
                            <ul style="margin: 0; padding-left: 14px; color: #d1d5db; font-size: 12px;">
                                <li>Battle rhythm must synchronize decision support, JIPOE updates, and component inputs.</li>
                                <li>Early interagency/multinational engagement reduces rework and increases feasibility.</li>
                                <li>Time constraints drive level of detail; prioritize critical path analysis and CCIR refinement.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Joint Coordination Framework Card -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; min-height: 280px;">
                    <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                        <i class="fas fa-handshake" style="margin-right: 8px; color: #06b6d4; font-size: 14px;"></i>
                        Joint Coordination Framework
                    </h4>
                    <div style="color: #d1d5db; font-size: 13px; line-height: 1.4;">
                        <div style="background-color: rgba(6, 182, 212, 0.06); padding: 10px; border-radius: 4px; border: 1px solid rgba(6, 182, 212, 0.3); margin-bottom: 12px;">
                            <h5 style="font-weight: 600; color: #67e8f9; font-size: 13px; margin: 0 0 8px 0;">Coordination Requirements</h5>
                            <ul style="margin: 0; padding-left: 16px; color: #d1d5db; font-size: 12px;">
                                <li>Component/JTF/CCMD alignment via JPG/OPT, J3/J5, J2/J6, J4 participation; liaison augmentation.</li>
                                <li>Interagency integration via JS/JIACG/CCMD POLAD; early engagement with DOS/USAID/DHS/DOJ as applicable.</li>
                                <li>Multinational/coalition synchronization through MNF/combined staff constructs and partner nation liaisons.</li>
                                <li>Civil-military coordination for stability/HADR through CMOCs and HN authorities.</li>
                            </ul>
                        </div>
                        <div style="background-color: rgba(6, 182, 212, 0.04); padding: 8px; border-radius: 4px; border: 1px solid rgba(6, 182, 212, 0.2);">
                            <h6 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Integration Tools</h6>
                            <ul style="margin: 0; padding-left: 14px; color: #d1d5db; font-size: 12px;">
                                <li>Synchronization matrix, decision support templates, and running estimates shared via KM portals.</li>
                                <li>Information sharing agreements (FVEY/NATO releasability), declassification plans, and foreign disclosure.</li>
                                <li>JIPOE/J2X/J3 IO/PA coordination to align narratives and manage OPSEC/INFOSEC constraints.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Analysis Summary Section -->
            <div style="background-color: #374151; border: 1px solid #4b5563; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                    <i class="fas fa-chart-line" style="margin-right: 8px; color: #3b82f6; font-size: 14px;"></i>
                    Detailed Analysis Integration Summary
                </h4>
                <div style="color: #d1d5db; font-size: 13px; line-height: 1.6;">
                    <p style="margin: 0 0 12px 0;">
                        The detailed planning initiation analysis framework provides comprehensive evaluation tools for joint planning processes.
                        This structured approach ensures thorough assessment of all critical planning factors including mission variables,
                        operational environment, resource capabilities, risk factors, temporal considerations, and coordination requirements.
                    </p>
                    <p style="margin: 0; color: #9ca3af; font-style: italic;">
                        Analysis results inform the development of comprehensive planning guidance and support subsequent JPP steps with validated assumptions and detailed situational understanding.
                    </p>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #1d4ed8; border-radius: 8px; padding: 12px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (2017), Chapter 4 — Planning Initiation | JP 3-0 — Joint Operations | JP 2-0 — Joint Intelligence
                </div>
            </div>
        </div>
    `;
    },

    initialize() {
        console.log('✅ Detailed Analysis module initialized');
    }
};