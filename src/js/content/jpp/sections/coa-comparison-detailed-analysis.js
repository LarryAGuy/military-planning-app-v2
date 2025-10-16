/**
 * JPP Step 5: COA Comparison - Detailed Analysis Content Module
 * UNCLASSIFIED comprehensive JP 5-0 course of action comparison doctrinal content
 * Authorized to exceed 300-line limit due to extensive doctrinal content requirements
 * Source: JP 5-0 (Joint Planning), Chapter 4 - Course of Action Comparison; FM 5-0 (Operations Process), November 2024
 */

export const detailedAnalysisModule = {
    id: 'coa-comparison-detailed-analysis',
    title: 'Detailed Analysis',
    defaultExpanded: true,

    getContent() {
        return `
            <div style="padding: 20px;">
                <!-- COA Comparison Header -->
                <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <i class="fas fa-chart-bar" style="margin-right: 12px; color: #10b981; font-size: 24px;"></i>
                    <div>
                        <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">JPP Step 5: Course of Action Comparison - Detailed Analysis</h2>
                        <p style="color: #9ca3af; font-size: 14px; margin: 0;">Comprehensive JP 5-0 Course of Action Comparison and Decision Support Framework</p>
                    </div>
                </div>

                <!-- COA Comparison Overview -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                    <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-chart-bar" style="margin-right: 8px;"></i>
                        JPP Step 5: Course of Action Comparison Doctrinal Framework
                    </h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                                <strong>Doctrinal Source:</strong> JP 5-0 (Joint Planning), Chapter 4, Para 4-5 — Course of Action Comparison<br>
                                <strong>Supporting Doctrine:</strong> FM 5-0 (Nov 2024), FM 3-0, FM 6-0, ADP 3-0, ADP 5-0, JP 3-0<br>
                                <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY<br>
                                <strong>Framework Focus:</strong> Joint course of action comparison and decision support processes
                            </p>
                        </div>
                        <div>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Primary Output:</strong> COA comparison matrix with recommended course of action<br>
                                <strong>Key Products:</strong> Decision matrices, risk comparisons, resource analyses, commander's decision brief<br>
                                <strong>Decision Point:</strong> Commander's selection of preferred COA for further development<br>
                                <strong>Integration:</strong> Joint, interagency, intergovernmental, and multinational coordination
                            </p>
                        </div>
                    </div>
                </div>

                <!-- 2x2 COA Comparison Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 1: COA Comparison Methodology & Criteria -->
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
                                <i class="fas fa-balance-scale" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
                                COA Comparison Methodology & Criteria
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
                                    <i class="fas fa-clipboard-list" style="margin-right: 6px; font-size: 12px;"></i>
                                    Joint COA Comparison Framework (JP 5-0)
                                </h5>
                                <ul style="margin: 0; padding-left: 16px; color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                                    <li><strong>Purpose:</strong> Compare analyzed COAs against established criteria to identify the best course of action</li>
                                    <li><strong>Methodology:</strong> Systematic evaluation using weighted criteria and decision matrices</li>
                                    <li><strong>Evaluation Criteria:</strong> Suitability, acceptability, feasibility, distinguishability, completeness</li>
                                    <li><strong>Products:</strong> COA comparison matrix, risk assessment, resource analysis, commander's decision brief</li>
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
                                    COA Comparison Process Steps
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li><strong>Step 1:</strong> Establish evaluation criteria and weighting factors</li>
                                    <li><strong>Step 2:</strong> Develop COA comparison matrix with standardized scoring</li>
                                    <li><strong>Step 3:</strong> Evaluate each COA against established criteria</li>
                                    <li><strong>Step 4:</strong> Conduct risk assessment for each COA</li>
                                    <li><strong>Step 5:</strong> Analyze resource requirements and constraints</li>
                                    <li><strong>Step 6:</strong> Prepare decision briefing with recommendations</li>
                                    <li><strong>Step 7:</strong> Present findings to commander for decision</li>
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
                                    Critical Comparison Considerations
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li>Maintain objectivity and avoid bias toward any particular COA</li>
                                    <li>Consider both quantitative and qualitative evaluation factors</li>
                                    <li>Account for uncertainty and risk in all assessments</li>
                                    <li>Ensure evaluation criteria align with commander's intent and mission requirements</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Decision Support Tools & Analysis -->
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
                                <i class="fas fa-calculator" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                                Decision Support Tools & Analysis
                            </h4>

                            <div style="
                                background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%);
                                padding: 16px;
                                border-radius: 10px;
                                border: 1px solid rgba(37, 99, 235, 0.4);
                                margin-bottom: 16px;
                                box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(37, 99, 235, 0.1);
                            ">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 13px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-tools" style="margin-right: 6px; font-size: 12px;"></i>
                                    Multi-Criteria Decision Analysis (MCDA)
                                </h5>
                                <ul style="margin: 0; padding-left: 16px; color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                                    <li><strong>Weighted Scoring:</strong> Assign numerical weights to evaluation criteria based on importance</li>
                                    <li><strong>Scoring Matrix:</strong> Rate each COA against criteria using standardized scales (1-10 or 1-5)</li>
                                    <li><strong>Composite Scores:</strong> Calculate weighted composite scores for objective comparison</li>
                                    <li><strong>Sensitivity Analysis:</strong> Test how changes in weights affect COA rankings</li>
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
                                    Decision Support Matrices & Tools
                                </h6>
                                <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li><strong>COA Comparison Matrix:</strong> Standardized format comparing all COAs against evaluation criteria</li>
                                    <li><strong>Risk Assessment Matrix:</strong> Probability and impact analysis for each COA</li>
                                    <li><strong>Resource Requirements Matrix:</strong> Personnel, equipment, and logistical needs comparison</li>
                                    <li><strong>Timeline Analysis:</strong> Execution timelines and critical path analysis</li>
                                    <li><strong>Decision Trees:</strong> Visual representation of decision points and outcomes</li>
                                    <li><strong>Cost-Benefit Analysis:</strong> Resource investment versus expected outcomes</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(37, 99, 235, 0.6);
                            ">
                                <h6 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-lightbulb" style="margin-right: 6px; font-size: 11px;"></i>
                                    Decision Support Best Practices
                                </h6>
                                <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                                    <li>Use both quantitative metrics and qualitative assessments</li>
                                    <li>Involve subject matter experts in evaluation process</li>
                                    <li>Document assumptions and rationale for all assessments</li>
                                    <li>Consider second and third-order effects in analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Risk Assessment & Mitigation -->
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
                                <i class="fas fa-shield-alt" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                                Risk Assessment & Mitigation
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
                                    <i class="fas fa-exclamation-triangle" style="margin-right: 6px; font-size: 12px;"></i>
                                    Joint Risk Assessment Framework
                                </h5>
                                <ul style="margin: 0; padding-left: 16px; color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                                    <li><strong>Risk Identification:</strong> Systematic identification of potential risks for each COA</li>
                                    <li><strong>Probability Assessment:</strong> Likelihood of risk occurrence (High, Medium, Low)</li>
                                    <li><strong>Impact Analysis:</strong> Potential consequences if risk materializes</li>
                                    <li><strong>Risk Prioritization:</strong> Ranking risks by probability and impact matrix</li>
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
                                    <i class="fas fa-list-ul" style="margin-right: 6px; font-size: 11px;"></i>
                                    Risk Categories & Assessment Areas
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li><strong>Operational Risk:</strong> Mission failure, casualty rates, timeline delays</li>
                                    <li><strong>Strategic Risk:</strong> Political implications, coalition cohesion, escalation potential</li>
                                    <li><strong>Tactical Risk:</strong> Force protection, tactical surprise, enemy countermeasures</li>
                                    <li><strong>Logistical Risk:</strong> Supply chain vulnerabilities, sustainment challenges</li>
                                    <li><strong>Environmental Risk:</strong> Weather, terrain, infrastructure limitations</li>
                                    <li><strong>Information Risk:</strong> OPSEC, intelligence gaps, cyber vulnerabilities</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(220, 38, 38, 0.6);
                            ">
                                <h6 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-shield-alt" style="margin-right: 6px; font-size: 11px;"></i>
                                    Risk Mitigation Strategies
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li>Develop contingency plans and branches/sequels for high-risk scenarios</li>
                                    <li>Identify risk mitigation measures and resource requirements</li>
                                    <li>Establish risk monitoring and early warning indicators</li>
                                    <li>Plan risk transfer mechanisms and alternative approaches</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Commander's Decision Process -->
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
                                <i class="fas fa-user-tie" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                                Commander's Decision Process
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
                                    <i class="fas fa-gavel" style="margin-right: 6px; font-size: 12px;"></i>
                                    Decision Brief & Recommendation Process
                                </h5>
                                <ul style="margin: 0; padding-left: 16px; color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                                    <li><strong>Decision Brief Format:</strong> Structured presentation of COA comparison results</li>
                                    <li><strong>Staff Recommendation:</strong> Clear recommendation with supporting rationale</li>
                                    <li><strong>Alternative Options:</strong> Present viable alternatives with trade-offs</li>
                                    <li><strong>Decision Timeline:</strong> Time constraints and decision deadlines</li>
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
                                    <i class="fas fa-clipboard-check" style="margin-right: 6px; font-size: 11px;"></i>
                                    Decision Factors & Considerations
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li><strong>Mission Accomplishment:</strong> Probability of achieving mission objectives</li>
                                    <li><strong>Force Protection:</strong> Casualty estimates and force preservation</li>
                                    <li><strong>Resource Efficiency:</strong> Optimal use of available resources</li>
                                    <li><strong>Timeline Feasibility:</strong> Ability to meet operational deadlines</li>
                                    <li><strong>Political Considerations:</strong> Strategic and policy implications</li>
                                    <li><strong>Coalition Unity:</strong> Impact on multinational cooperation</li>
                                </ul>
                            </div>

                            <div style="
                                background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                                padding: 12px;
                                border-radius: 6px;
                                border: 1px solid rgba(245, 158, 11, 0.6);
                            ">
                                <h6 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">
                                    <i class="fas fa-star" style="margin-right: 6px; font-size: 11px;"></i>
                                    Commander's Decision Authority
                                </h6>
                                <ul style="margin: 0; padding-left: 14px; color: #e5e7eb; font-size: 12px; line-height: 1.3;">
                                    <li>Final decision authority rests with the joint force commander</li>
                                    <li>May modify or combine elements from different COAs</li>
                                    <li>Can direct additional analysis or development of new options</li>
                                    <li>Must consider higher headquarters guidance and constraints</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- COA Comparison Excellence Summary -->
                <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; margin-top: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                    <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                        <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                        JPP Step 5 Completion Criteria
                    </h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Required Products:</h4>
                            <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>Detailed COA comparison matrix and analysis</li>
                                <li>Comprehensive risk assessment for each COA</li>
                                <li>Decision briefing materials and recommendation</li>
                                <li>Updated planning assumptions and constraints</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Success Criteria:</h4>
                            <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                <li>COA meets suitability, acceptability, and feasibility criteria</li>
                                <li>Commander's decision based on thorough analysis</li>
                                <li>Clear understanding of risks and mitigation measures</li>
                                <li>Transition to orders production ready</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Doctrinal References -->
                <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 16px;">
                    <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                        <i class="fas fa-book" style="margin-right: 6px; font-size: 12px;"></i>
                        Authoritative Doctrinal References
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Primary Joint Doctrine:</strong><br>
                                • JP 5-0 (Joint Planning), Chapter 4<br>
                                • JP 3-0 (Joint Operations)<br>
                                • JP 1 (Doctrine for Armed Forces)<br>
                                • CJCSM 3105.01 (Joint Risk Analysis)
                            </p>
                        </div>
                        <div>
                            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
                                <strong>Supporting Army Doctrine:</strong><br>
                                • FM 5-0 (Operations Process), Nov 2024<br>
                                • ADP 5-0 (Planning)<br>
                                • FM 6-0 (Commander and Staff Organization)<br>
                                • ADP 3-0 (Operations)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    initialize() {
        console.log('✅ COA Comparison Detailed Analysis module initialized');
        return true;
    }
};

export default detailedAnalysisModule;
