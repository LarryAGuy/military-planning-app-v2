/**
 * JPP Step 4: COA Analysis - Detailed Analysis Content Module
 * UNCLASSIFIED comprehensive JP 5-0 course of action analysis and wargaming doctrinal content
 * Authorized to exceed 300-line limit due to extensive doctrinal content requirements
 * Source: JP 5-0 (Joint Planning), Chapter 4 - Course of Action Analysis; FM 5-0 (Operations Process), November 2024
 */

export const detailedAnalysisModule = {
    id: 'coa-analysis-detailed-analysis',
    title: 'Detailed Analysis',
    defaultExpanded: true,

    getContent() {
        return `
            <div style="padding: 20px;">
                <!-- COA Analysis Header -->
                <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <i class="fas fa-chess-board" style="margin-right: 12px; color: #10b981; font-size: 24px;"></i>
                    <div>
                        <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 4: Course of Action Analysis - Detailed Analysis</h2>
                        <p style="color: #9ca3af; font-size: 14px; margin: 0;">Comprehensive JP 5-0 Course of Action Analysis and Wargaming Framework</p>
                    </div>
                </div>

                <!-- COA Analysis Overview -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                    <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-chess-board" style="margin-right: 8px;"></i>
                        JPP Step 4: Course of Action Analysis Doctrinal Framework
                    </h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                                <strong>Doctrinal Source:</strong> JP 5-0 (Joint Planning), Chapter 4, Para 4-4 — Course of Action Analysis<br>
                                <strong>Supporting Doctrine:</strong> FM 5-0 (Nov 2024), FM 3-0, FM 6-0, ADP 3-0, ADP 5-0, JP 3-0<br>
                                <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY<br>
                                <strong>Framework Focus:</strong> Joint course of action analysis and wargaming processes
                            </p>
                        </div>
                        <div>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Primary Output:</strong> Analyzed courses of action with advantages, disadvantages, and risks<br>
                                <strong>Key Products:</strong> Wargaming results, COA analysis matrices, risk assessments, decision briefings<br>
                                <strong>Decision Point:</strong> COA comparison and recommendation for commander approval<br>
                                <strong>Integration:</strong> Joint, interagency, intergovernmental, and multinational coordination
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 2x2 COA Analysis Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 1: Wargaming Process & Methodology -->
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
                                <i class="fas fa-chess-knight" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                                Wargaming Process & Methodology
                            </h4>

                            <div style="
                                background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
                                padding: 16px;
                                border-radius: 10px;
                                border: 1px solid rgba(16, 185, 129, 0.4);
                                margin-bottom: 16px;
                                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(16, 185, 129, 0.1);
                            ">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 13px; margin: 0 0 12px 0;">
                                    <i class="fas fa-gamepad" style="margin-right: 6px; font-size: 12px;"></i>
                                    Joint Wargaming Framework (JP 5-0)
                                </h5>
                                <ul style="margin: 0; padding-left: 16px; color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                                    <li><strong>Purpose:</strong> Test each COA against enemy capabilities and likely courses of action to identify strengths, weaknesses, and risks</li>
                                    <li><strong>Methodology:</strong> Structured analytical process using action-reaction-counteraction sequences</li>
                                    <li><strong>Participants:</strong> Red team (enemy), Blue team (friendly), White cell (control/environment)</li>
                                    <li><strong>Products:</strong> Wargaming results, refined COAs, identified decision points and branches/sequels</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.06) 100%);
                                padding: 14px;
                                border-radius: 8px;
                                border: 1px solid rgba(16, 185, 129, 0.3);
                                margin-bottom: 16px;
                            ">
                                <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 10px 0;">
                                    <i class="fas fa-list-ol" style="margin-right: 6px; font-size: 11px;"></i>
                                    Wargaming Steps & Process
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li><strong>Step 1:</strong> Gather tools (maps, overlays, enemy templates, friendly unit symbols)</li>
                                    <li><strong>Step 2:</strong> List all friendly forces and capabilities available for the operation</li>
                                    <li><strong>Step 3:</strong> List assumptions about enemy forces and likely courses of action</li>
                                    <li><strong>Step 4:</strong> Select wargaming method (belt, avenue-in-depth, box, or hybrid)</li>
                                    <li><strong>Step 5:</strong> Select technique (manual, computer-assisted, or virtual)</li>
                                    <li><strong>Step 6:</strong> Conduct the wargame using action-reaction-counteraction methodology</li>
                                    <li><strong>Step 7:</strong> Record results and refine COAs based on wargaming outcomes</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(16, 185, 129, 0.25);
                            ">
                                <h6 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">
                                    <i class="fas fa-exclamation-triangle" style="margin-right: 6px; font-size: 11px;"></i>
                                    Critical Wargaming Considerations
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li>Maintain objectivity and avoid confirmation bias toward preferred COAs</li>
                                    <li>Consider enemy capabilities, not just intentions or most likely courses of action</li>
                                    <li>Account for friction, fog of war, and Murphy's Law in analysis</li>
                                    <li>Integrate all warfighting functions and domains (land, sea, air, space, cyberspace)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: COA Evaluation Criteria & Assessment -->
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
                                <i class="fas fa-balance-scale" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                                COA Evaluation Criteria & Assessment
                            </h4>

                            <div style="
                                background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%);
                                padding: 16px;
                                border-radius: 10px;
                                border: 1px solid rgba(37, 99, 235, 0.4);
                                margin-bottom: 16px;
                                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(37, 99, 235, 0.1);
                            ">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 13px; margin: 0 0 12px 0;">
                                    <i class="fas fa-check-double" style="margin-right: 6px; font-size: 12px;"></i>
                                    COA Screening Criteria (JP 5-0)
                                </h5>
                                <ul style="margin: 0; padding-left: 16px; color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                                    <li><strong>Feasible:</strong> COA can be accomplished with available resources within the time and space constraints</li>
                                    <li><strong>Acceptable:</strong> COA must balance cost and risk with the advantage gained and comply with law and policy</li>
                                    <li><strong>Suitable:</strong> COA accomplishes the mission and complies with the commander's guidance</li>
                                    <li><strong>Distinguishable:</strong> COA differs significantly from other COAs in terms of concept or method</li>
                                    <li><strong>Complete:</strong> COA addresses the entire mission and incorporates all required tasks</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
                                padding: 14px;
                                border-radius: 8px;
                                border-left: 4px solid #2563eb;
                                margin-bottom: 16px;
                            ">
                                <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 10px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-chart-line" style="margin-right: 6px; font-size: 11px;"></i>
                                    COA Evaluation Framework
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li><strong>Advantages:</strong> Identify strengths and positive aspects of each COA</li>
                                    <li><strong>Disadvantages:</strong> Identify weaknesses and negative aspects of each COA</li>
                                    <li><strong>Risks:</strong> Assess probability and impact of potential adverse outcomes</li>
                                    <li><strong>Resource Requirements:</strong> Analyze personnel, equipment, time, and logistical needs</li>
                                    <li><strong>Enemy Responses:</strong> Consider likely enemy reactions and countermeasures</li>
                                    <li><strong>Decision Points:</strong> Identify critical points requiring commander decision</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(37, 99, 235, 0.6);
                            ">
                                <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-clipboard-check" style="margin-right: 6px; font-size: 11px;"></i>
                                    Assessment Methodology
                                </h6>
                                <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Use quantitative and qualitative analysis methods as appropriate</li>
                                    <li>Apply weighted scoring matrices for objective comparison</li>
                                    <li>Consider both tangible and intangible factors in evaluation</li>
                                    <li>Document assumptions and rationale for all assessments</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Risk Assessment & Decision Support -->
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
                                <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                                Risk Assessment & Decision Support
                            </h4>

                            <div style="
                                background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%);
                                padding: 16px;
                                border-radius: 10px;
                                border: 1px solid rgba(220, 38, 38, 0.4);
                                margin-bottom: 16px;
                                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(220, 38, 38, 0.1);
                            ">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 13px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-shield-alt" style="margin-right: 6px; font-size: 12px;"></i>
                                    Joint Risk Assessment Framework
                                </h5>
                                <ul style="margin: 0; padding-left: 16px; color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                                    <li><strong>Operational Risk:</strong> Risk to mission accomplishment from enemy action, operational environment, or friendly force limitations</li>
                                    <li><strong>Force Protection Risk:</strong> Risk to personnel and equipment from enemy action, accidents, or environmental hazards</li>
                                    <li><strong>Strategic Risk:</strong> Risk to national objectives, alliance relationships, or long-term strategic position</li>
                                    <li><strong>Risk Mitigation:</strong> Actions to reduce probability or impact of identified risks</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
                                padding: 14px;
                                border-radius: 8px;
                                border-left: 4px solid #dc2626;
                                margin-bottom: 16px;
                            ">
                                <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 10px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-chart-bar" style="margin-right: 6px; font-size: 11px;"></i>
                                    Decision Support Analysis
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li><strong>Decision Points:</strong> Identify critical points requiring commander decision during execution</li>
                                    <li><strong>Branches:</strong> Develop contingency plans for likely changes in situation</li>
                                    <li><strong>Sequels:</strong> Plan follow-on operations based on mission success or failure</li>
                                    <li><strong>Decision Criteria:</strong> Establish measurable criteria for decision-making</li>
                                    <li><strong>Information Requirements:</strong> Identify critical information needed for decisions</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(220, 38, 38, 0.6);
                            ">
                                <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-lightbulb" style="margin-right: 6px; font-size: 11px;"></i>
                                    Risk Management Principles
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li>Accept no unnecessary risk and make risk decisions at appropriate level</li>
                                    <li>Accept risk when benefits outweigh costs and support mission accomplishment</li>
                                    <li>Anticipate and manage risk by planning and implementing appropriate controls</li>
                                    <li>Integrate risk management into all phases of operations and planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Operational Variables & Mission Variables Analysis -->
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
                                <i class="fas fa-globe-americas" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                                Operational Variables & Mission Variables Analysis
                            </h4>

                            <div style="
                                background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
                                padding: 16px;
                                border-radius: 10px;
                                border: 1px solid rgba(245, 158, 11, 0.4);
                                margin-bottom: 16px;
                                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(245, 158, 11, 0.1);
                            ">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 13px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-network-wired" style="margin-right: 6px; font-size: 12px;"></i>
                                    Operational Variables (PMESII-PT)
                                </h5>
                                <ul style="margin: 0; padding-left: 16px; color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                                    <li><strong>Political:</strong> Distribution of responsibility and power at all levels of governance</li>
                                    <li><strong>Military:</strong> Military and paramilitary capabilities of all relevant actors</li>
                                    <li><strong>Economic:</strong> Individual and group behaviors related to producing, distributing, and consuming resources</li>
                                    <li><strong>Social:</strong> Cultural, religious, and ethnic makeup and beliefs of the population</li>
                                    <li><strong>Information:</strong> Nature, scope, characteristics, and effects of individuals, organizations, and systems</li>
                                    <li><strong>Infrastructure:</strong> Basic facilities, services, and installations needed for society to function</li>
                                    <li><strong>Physical Environment:</strong> Geography, climate, and terrain of the operational environment</li>
                                    <li><strong>Time:</strong> Temporal considerations affecting operations and decision-making</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
                                padding: 14px;
                                border-radius: 8px;
                                border-left: 4px solid #f59e0b;
                                margin-bottom: 16px;
                            ">
                                <h6 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 10px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-crosshairs" style="margin-right: 6px; font-size: 11px;"></i>
                                    Mission Variables (METT-TC)
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li><strong>Mission:</strong> Task and purpose clearly indicating the action to be taken and reason for doing so</li>
                                    <li><strong>Enemy:</strong> Disposition, composition, strength, capabilities, and probable courses of action</li>
                                    <li><strong>Terrain and Weather:</strong> Analysis of terrain using OAKOC and weather effects on operations</li>
                                    <li><strong>Troops and Support Available:</strong> Number, type, capabilities, and condition of available units</li>
                                    <li><strong>Time Available:</strong> Time available for planning, preparation, and execution</li>
                                    <li><strong>Civil Considerations:</strong> Influence of civilian population, institutions, and infrastructure</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(245, 158, 11, 0.6);
                            ">
                                <h6 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-search" style="margin-right: 6px; font-size: 11px;"></i>
                                    Analysis Integration
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li>Integrate operational and mission variables to understand operational environment</li>
                                    <li>Consider interactions and relationships between variables</li>
                                    <li>Update analysis continuously as situation develops</li>
                                    <li>Use analysis to refine COAs and identify critical vulnerabilities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- COA Analysis Process Summary -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                    <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                        JPP Step 4 Completion Criteria
                    </h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Required Products:</h4>
                            <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Detailed wargaming results and lessons learned</li>
                                <li>Comprehensive risk assessment for each COA</li>
                                <li>COA comparison matrix and recommendation briefing</li>
                                <li>Updated planning assumptions and constraints</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Success Criteria:</h4>
                            <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>COA meets suitability, acceptability, and feasibility criteria</li>
                                <li>Commander's decision based on thorough analysis</li>
                                <li>Clear understanding of risks and mitigation measures</li>
                                <li>Transition to COA comparison and selection ready</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        `;
    },

    initialize() {
        return true;
    }
};

export default detailedAnalysisModule;
