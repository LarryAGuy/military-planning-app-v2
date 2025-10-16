/**
 * MDMP Step 5: COA Comparison - Detailed Analysis (Blue theme)
 * Comprehensive doctrinal framework for Course of Action Comparison methodology
 * Based on FM 5-0 Chapter 14, JP 5-0, and CJCSM 3105.01
 */

export const coaComparisonDetailedAnalysisModule = {
  id: 'coa-comparison-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <div id="coa-comparison-detailed-analysis-section" style="margin-bottom: 24px;">
        <!-- Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-balance-scale" style="margin-right: 8px; color: #60a5fa; font-size: 16px;"></i>
            Step 5: Course of Action Comparison — Detailed Analysis
          </h3>
        </div>

        <!-- COA Comparison Overview -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-balance-scale" style="margin-right: 8px; color: #1d4ed8;"></i>
            MDMP Step 5: Course of Action Comparison Doctrinal Framework - LSCO Operations
          </h3>

          <div style="background-color: rgba(29, 78, 216, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #1d4ed8; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Doctrinal Foundation</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>COA Comparison:</strong> The systematic evaluation of each course of action to identify advantages and disadvantages,
              determine the optimal approach for mission accomplishment, and provide the commander with a recommended course of action.
              The comparison uses established criteria to objectively assess each COA's probability of success and resource requirements.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                <strong>Doctrinal Source:</strong> FM 5-0 (Nov 2024), Chapter 14<br>
                <strong>Supporting Doctrine:</strong> JP 5-0, CJCSM 3105.01, FM 6-0<br>
                <strong>Process Duration:</strong> Concurrent with COA analysis<br>
                <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
              </p>
            </div>
            <div>
              <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>COA Comparison Focus:</strong> Systematic evaluation using established criteria<br>
                <strong>Primary Output:</strong> Recommended COA with supporting rationale<br>
                <strong>Key Products:</strong> Decision matrix, comparison briefing, risk assessment<br>
                <strong>Decision Point:</strong> COA comparison briefing and commander's decision
              </p>
            </div>
          </div>
        </div>

        <!-- Doctrinal Foundation -->
        <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:20px; margin-bottom:24px;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-foundation" style="margin-right:12px; color:#3b82f6; font-size:18px;"></i>
            Doctrinal Foundation - FM 5-0 COA Comparison Principles
          </h3>
          <p style="color:#d1d5db; font-size:14px; line-height:1.6; margin:0 0 20px 0;">
            Course of Action Comparison is the fourth step of the Military Decision-Making Process (MDMP), designed to systematically evaluate and compare developed courses of action against established criteria to identify the optimal approach for mission accomplishment. This process transforms multiple viable COAs into a single recommended course of action through rigorous analytical comparison.
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #3b82f6;">
              <h4 style="font-weight:600; color:#93c5fd; font-size:16px; margin:0 0 12px 0;">Purpose and Intent</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Primary Purpose:</strong> Systematically evaluate multiple COAs to identify the course of action with the highest probability of success</p>
                <p style="margin:0 0 8px 0;"><strong>Analytical Intent:</strong> Apply objective evaluation criteria to subjective military judgment for informed decision-making</p>
                <p style="margin:0 0 8px 0;"><strong>Decision Support:</strong> Provide commanders with comprehensive analysis to support COA selection and approval</p>
                <p style="margin:0;"><strong>Risk Integration:</strong> Incorporate risk assessment into the comparison process for comprehensive evaluation</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #1d4ed8;">
              <h4 style="font-weight:600; color:#93c5fd; font-size:16px; margin:0 0 12px 0;">Doctrinal Requirements</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>FM 5-0 Compliance:</strong> Adherence to Operations Process doctrine for systematic COA evaluation</p>
                <p style="margin:0 0 8px 0;"><strong>Joint Integration:</strong> Compatibility with JP 5-0 joint planning processes and procedures</p>
                <p style="margin:0 0 8px 0;"><strong>Staff Coordination:</strong> Integration of all staff sections in the comparison and evaluation process</p>
                <p style="margin:0;"><strong>Commander Involvement:</strong> Appropriate commander engagement in evaluation criteria and final selection</p>
              </div>
            </div>
          </div>

          <div style="background-color:rgba(59, 130, 246, 0.1); padding:16px; border-radius:6px; border:1px solid #3b82f6;">
            <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">COA Comparison Doctrinal Framework</h4>
            <p style="color:#d1d5db; font-size:13px; line-height:1.5; margin:0;">
              <strong>Systematic Evaluation:</strong> COA comparison employs systematic evaluation methodologies to assess each course of action against established criteria, ensuring objective analysis while incorporating commander's intent and mission variables.
              <strong>Comparative Analysis:</strong> The process compares COAs relative to each other rather than against absolute standards, identifying relative advantages and disadvantages.
              <strong>Decision Integration:</strong> Results inform the commander's decision-making process while preserving command prerogative in final COA selection.
            </p>
          </div>
        </div>

        <!-- Comparison Methodology -->
        <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:20px; margin-bottom:24px;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-balance-scale" style="margin-right:12px; color:#3b82f6; font-size:18px;"></i>
            Comparison Methodology - Systematic Evaluation Framework
          </h3>
          <p style="color:#d1d5db; font-size:14px; line-height:1.6; margin:0 0 20px 0;">
            The COA comparison methodology provides systematic approaches for evaluating multiple courses of action against established criteria. This framework ensures comprehensive analysis while maintaining objectivity and supporting informed decision-making across all levels of military planning.
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:20px;">
            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #10b981;">
              <h4 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 10px 0;">Quantitative Methods</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Numerical scoring systems</p>
                <p style="margin:0 0 6px 0;">• Weighted evaluation matrices</p>
                <p style="margin:0 0 6px 0;">• Statistical analysis techniques</p>
                <p style="margin:0 0 6px 0;">• Mathematical modeling</p>
                <p style="margin:0;">• Probability assessments</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #f59e0b;">
              <h4 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 10px 0;">Qualitative Methods</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Narrative assessments</p>
                <p style="margin:0 0 6px 0;">• Expert judgment panels</p>
                <p style="margin:0 0 6px 0;">• Comparative analysis</p>
                <p style="margin:0 0 6px 0;">• Scenario evaluation</p>
                <p style="margin:0;">• Professional experience</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #8b5cf6;">
              <h4 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 10px 0;">Hybrid Approaches</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Mixed-method evaluation</p>
                <p style="margin:0 0 6px 0;">• Structured analytical techniques</p>
                <p style="margin:0 0 6px 0;">• Decision support systems</p>
                <p style="margin:0 0 6px 0;">• Multi-criteria analysis</p>
                <p style="margin:0;">• Integrated assessment</p>
              </div>
            </div>
          </div>

          <div style="background-color:rgba(59, 130, 246, 0.1); padding:16px; border-radius:6px; border:1px solid #3b82f6; margin-bottom:16px;">
            <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Systematic Comparison Process</h4>
            <p style="color:#d1d5db; font-size:13px; line-height:1.5; margin:0;">
              <strong>Criteria Establishment:</strong> Define evaluation criteria based on mission variables, commander's intent, and operational requirements.
              <strong>Standardized Assessment:</strong> Apply consistent evaluation methods across all COAs to ensure fair comparison.
              <strong>Comparative Ranking:</strong> Rank COAs relative to each other using established criteria and weighting factors.
            </p>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #3b82f6;">
              <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 12px 0;">Evaluation Matrix Development</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Criteria Selection:</strong> Identify relevant evaluation criteria based on mission analysis and commander's guidance</p>
                <p style="margin:0 0 8px 0;"><strong>Weight Assignment:</strong> Assign relative importance weights to evaluation criteria based on mission priorities</p>
                <p style="margin:0 0 8px 0;"><strong>Scoring System:</strong> Develop consistent scoring methodology for objective COA assessment</p>
                <p style="margin:0;"><strong>Matrix Construction:</strong> Create evaluation matrix structure for systematic COA comparison</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #1d4ed8;">
              <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 12px 0;">Analytical Techniques</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Pairwise Comparison:</strong> Compare COAs against each other in paired combinations</p>
                <p style="margin:0 0 8px 0;"><strong>Multi-Attribute Analysis:</strong> Evaluate COAs across multiple attributes simultaneously</p>
                <p style="margin:0 0 8px 0;"><strong>Sensitivity Analysis:</strong> Test evaluation results against changes in criteria weights</p>
                <p style="margin:0;"><strong>Scenario Testing:</strong> Evaluate COA performance under different operational scenarios</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Evaluation Criteria - FASDC Framework -->
        <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:20px; margin-bottom:24px;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-check-double" style="margin-right:12px; color:#3b82f6; font-size:18px;"></i>
            Evaluation Criteria - FASDC Assessment Standards
          </h3>
          <p style="color:#d1d5db; font-size:14px; line-height:1.6; margin:0 0 20px 0;">
            The FASDC criteria (Feasible, Acceptable, Suitable, Distinguishable, Complete) provide the fundamental framework for COA evaluation and comparison. These criteria ensure comprehensive assessment of each course of action's viability and effectiveness in accomplishing the assigned mission.
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #10b981;">
              <h4 style="font-weight:600; color:#6ee7b7; font-size:16px; margin:0 0 12px 0;">Feasible Assessment</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Resource Availability:</strong> Adequate personnel, equipment, and materiel resources available for execution</p>
                <p style="margin:0 0 8px 0;"><strong>Time Constraints:</strong> Sufficient time available for planning, preparation, and execution phases</p>
                <p style="margin:0 0 8px 0;"><strong>Capability Requirements:</strong> Required capabilities and competencies available within the force structure</p>
                <p style="margin:0 0 8px 0;"><strong>Logistical Support:</strong> Adequate sustainment and support capabilities for mission duration</p>
                <p style="margin:0;"><strong>Environmental Factors:</strong> Operational environment supports COA execution requirements</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #f59e0b;">
              <h4 style="font-weight:600; color:#fbbf24; font-size:16px; margin:0 0 12px 0;">Acceptable Assessment</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Risk Tolerance:</strong> Level of risk associated with COA execution within commander's acceptable limits</p>
                <p style="margin:0 0 8px 0;"><strong>Casualty Estimates:</strong> Projected casualties and losses acceptable for mission accomplishment</p>
                <p style="margin:0 0 8px 0;"><strong>Resource Expenditure:</strong> Required resource expenditure justified by expected outcomes</p>
                <p style="margin:0 0 8px 0;"><strong>Political Considerations:</strong> Political implications and constraints acceptable to higher headquarters</p>
                <p style="margin:0;"><strong>Collateral Effects:</strong> Unintended consequences and side effects within acceptable parameters</p>
              </div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:16px;">
            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #3b82f6;">
              <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Suitable</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Accomplishes mission</p>
                <p style="margin:0 0 6px 0;">• Complies with guidance</p>
                <p style="margin:0 0 6px 0;">• Achieves end state</p>
                <p style="margin:0;">• Supports intent</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #8b5cf6;">
              <h4 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 10px 0;">Distinguishable</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Unique approach</p>
                <p style="margin:0 0 6px 0;">• Different methods</p>
                <p style="margin:0 0 6px 0;">• Varied execution</p>
                <p style="margin:0;">• Clear differences</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #dc2626;">
              <h4 style="font-weight:600; color:#fca5a5; font-size:14px; margin:0 0 10px 0;">Complete</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• All elements addressed</p>
                <p style="margin:0 0 6px 0;">• Comprehensive scope</p>
                <p style="margin:0 0 6px 0;">• Full integration</p>
                <p style="margin:0;">• Total coverage</p>
              </div>
            </div>
          </div>

          <div style="background-color:rgba(59, 130, 246, 0.1); padding:16px; border-radius:6px; border:1px solid #3b82f6;">
            <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">FASDC Integration in COA Comparison</h4>
            <p style="color:#d1d5db; font-size:13px; line-height:1.5; margin:0;">
              <strong>Baseline Assessment:</strong> All COAs must meet minimum FASDC standards before entering the comparison process.
              <strong>Comparative Evaluation:</strong> FASDC criteria serve as primary evaluation categories for systematic COA comparison.
              <strong>Weighted Analysis:</strong> FASDC elements may be weighted differently based on mission priorities and operational requirements.
            </p>
          </div>
        </div>

        <!-- Decision Support Tools -->
        <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:20px; margin-bottom:24px;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-tools" style="margin-right:12px; color:#3b82f6; font-size:18px;"></i>
            Decision Support Tools - Analytical Matrices and Methods
          </h3>
          <p style="color:#d1d5db; font-size:14px; line-height:1.6; margin:0 0 20px 0;">
            Decision support tools provide structured methodologies for COA comparison, enabling systematic evaluation and objective analysis. These tools transform subjective military judgment into structured analytical processes that support informed decision-making at all levels of command.
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #10b981;">
              <h4 style="font-weight:600; color:#6ee7b7; font-size:16px; margin:0 0 12px 0;">Decision Matrices</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Evaluation Matrix:</strong> Structured framework comparing COAs against weighted criteria with numerical scoring</p>
                <p style="margin:0 0 8px 0;"><strong>Comparison Matrix:</strong> Side-by-side COA comparison highlighting relative advantages and disadvantages</p>
                <p style="margin:0 0 8px 0;"><strong>Risk Matrix:</strong> Risk assessment integration showing probability and impact for each COA</p>
                <p style="margin:0 0 8px 0;"><strong>Resource Matrix:</strong> Resource requirement comparison across personnel, equipment, and time</p>
                <p style="margin:0;"><strong>Timeline Matrix:</strong> Execution timeline comparison showing critical path and milestone differences</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #f59e0b;">
              <h4 style="font-weight:600; color:#fbbf24; font-size:16px; margin:0 0 12px 0;">Scoring Methods</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Numerical Scoring:</strong> Quantitative scoring systems using standardized scales (1-5, 1-10, percentage)</p>
                <p style="margin:0 0 8px 0;"><strong>Weighted Scoring:</strong> Criteria weighting based on relative importance and mission priorities</p>
                <p style="margin:0 0 8px 0;"><strong>Ranking Systems:</strong> Ordinal ranking of COAs from most to least preferred</p>
                <p style="margin:0 0 8px 0;"><strong>Binary Assessment:</strong> Pass/fail evaluation for critical threshold requirements</p>
                <p style="margin:0;"><strong>Composite Scoring:</strong> Combined quantitative and qualitative assessment methodologies</p>
              </div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:16px;">
            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #3b82f6;">
              <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Analytical Aids</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Decision trees</p>
                <p style="margin:0 0 6px 0;">• Flow charts</p>
                <p style="margin:0 0 6px 0;">• Logic models</p>
                <p style="margin:0 0 6px 0;">• Process maps</p>
                <p style="margin:0;">• Analytical frameworks</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #8b5cf6;">
              <h4 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 10px 0;">Visualization Tools</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Comparison charts</p>
                <p style="margin:0 0 6px 0;">• Radar diagrams</p>
                <p style="margin:0 0 6px 0;">• Heat maps</p>
                <p style="margin:0 0 6px 0;">• Dashboard displays</p>
                <p style="margin:0;">• Graphical summaries</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #dc2626;">
              <h4 style="font-weight:600; color:#fca5a5; font-size:14px; margin:0 0 10px 0;">Software Systems</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Decision support systems</p>
                <p style="margin:0 0 6px 0;">• Modeling software</p>
                <p style="margin:0 0 6px 0;">• Simulation tools</p>
                <p style="margin:0 0 6px 0;">• Analysis platforms</p>
                <p style="margin:0;">• Automated scoring</p>
              </div>
            </div>
          </div>

          <div style="background-color:rgba(59, 130, 246, 0.1); padding:16px; border-radius:6px; border:1px solid #3b82f6;">
            <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Decision Support Integration</h4>
            <p style="color:#d1d5db; font-size:13px; line-height:1.5; margin:0;">
              <strong>Tool Selection:</strong> Choose appropriate decision support tools based on mission complexity, available time, and required precision.
              <strong>Standardization:</strong> Employ consistent methodologies across all COAs to ensure fair and objective comparison.
              <strong>Validation:</strong> Verify decision support tool results through independent analysis and expert review processes.
            </p>
          </div>
        </div>

        <!-- Risk Assessment Integration -->
        <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:20px; margin-bottom:24px;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-exclamation-triangle" style="margin-right:12px; color:#3b82f6; font-size:18px;"></i>
            Risk Assessment Integration - CJCSM 3105.01 Framework
          </h3>
          <p style="color:#d1d5db; font-size:14px; line-height:1.6; margin:0 0 20px 0;">
            Risk assessment integration within COA comparison ensures comprehensive evaluation of potential risks associated with each course of action. This integration follows CJCSM 3105.01 Joint Risk Analysis methodology, providing systematic risk evaluation and comparison across all developed COAs.
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #dc2626;">
              <h4 style="font-weight:600; color:#fca5a5; font-size:16px; margin:0 0 12px 0;">Risk Categories</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Tactical Risk:</strong> Risks to mission accomplishment and force protection at tactical level</p>
                <p style="margin:0 0 8px 0;"><strong>Operational Risk:</strong> Risks affecting operational objectives and campaign success</p>
                <p style="margin:0 0 8px 0;"><strong>Strategic Risk:</strong> Risks with strategic implications and national security impact</p>
                <p style="margin:0 0 8px 0;"><strong>Political Risk:</strong> Risks affecting political objectives and policy goals</p>
                <p style="margin:0;"><strong>Resource Risk:</strong> Risks related to resource availability and sustainment capabilities</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #f59e0b;">
              <h4 style="font-weight:600; color:#fbbf24; font-size:16px; margin:0 0 12px 0;">Risk Assessment Methods</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Probability Assessment:</strong> Likelihood evaluation using historical data and expert judgment</p>
                <p style="margin:0 0 8px 0;"><strong>Impact Analysis:</strong> Consequence assessment across multiple impact categories</p>
                <p style="margin:0 0 8px 0;"><strong>Risk Matrix:</strong> Probability-impact matrix for risk level determination</p>
                <p style="margin:0 0 8px 0;"><strong>Mitigation Planning:</strong> Risk mitigation strategy development and assessment</p>
                <p style="margin:0;"><strong>Residual Risk:</strong> Post-mitigation risk level evaluation and acceptance</p>
              </div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:16px;">
            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #dc2626;">
              <h4 style="font-weight:600; color:#fca5a5; font-size:14px; margin:0 0 10px 0;">High Risk</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Mission failure likely</p>
                <p style="margin:0 0 6px 0;">• Significant casualties</p>
                <p style="margin:0 0 6px 0;">• Strategic implications</p>
                <p style="margin:0;">• Immediate attention</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #f59e0b;">
              <h4 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 10px 0;">Medium Risk</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Moderate impact</p>
                <p style="margin:0 0 6px 0;">• Manageable consequences</p>
                <p style="margin:0 0 6px 0;">• Mitigation possible</p>
                <p style="margin:0;">• Monitor closely</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #10b981;">
              <h4 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 10px 0;">Low Risk</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Minimal impact</p>
                <p style="margin:0 0 6px 0;">• Acceptable consequences</p>
                <p style="margin:0 0 6px 0;">• Standard procedures</p>
                <p style="margin:0;">• Routine monitoring</p>
              </div>
            </div>
          </div>

          <div style="background-color:rgba(59, 130, 246, 0.1); padding:16px; border-radius:6px; border:1px solid #3b82f6;">
            <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Risk Integration in COA Comparison</h4>
            <p style="color:#d1d5db; font-size:13px; line-height:1.5; margin:0;">
              <strong>Comparative Risk Analysis:</strong> Systematic comparison of risk levels across all COAs using standardized assessment criteria.
              <strong>Risk-Benefit Analysis:</strong> Evaluation of potential benefits against associated risks for each course of action.
              <strong>Risk Tolerance:</strong> Integration of commander's risk tolerance and guidance into the COA comparison process.
            </p>
          </div>
        </div>

        <!-- Joint Planning Considerations -->
        <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:20px; margin-bottom:24px;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-handshake" style="margin-right:12px; color:#3b82f6; font-size:18px;"></i>
            Joint Planning Considerations - JP 5-0 Integration
          </h3>
          <p style="color:#d1d5db; font-size:14px; line-height:1.6; margin:0 0 20px 0;">
            Joint planning considerations ensure COA comparison processes integrate effectively with joint force planning requirements. This integration follows JP 5-0 Joint Planning doctrine, ensuring compatibility with joint planning processes and multi-service coordination requirements.
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #3b82f6;">
              <h4 style="font-weight:600; color:#93c5fd; font-size:16px; margin:0 0 12px 0;">Joint Force Integration</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Service Component Coordination:</strong> Integration of Army, Navy, Air Force, Marine Corps, and Space Force capabilities</p>
                <p style="margin:0 0 8px 0;"><strong>Joint Function Integration:</strong> Command and control, intelligence, fires, movement and maneuver, protection, sustainment</p>
                <p style="margin:0 0 8px 0;"><strong>Multi-Domain Operations:</strong> Land, maritime, air, space, and cyberspace domain coordination</p>
                <p style="margin:0 0 8px 0;"><strong>Coalition Considerations:</strong> Allied and partner nation integration requirements and constraints</p>
                <p style="margin:0;"><strong>Interoperability Requirements:</strong> Technical and procedural interoperability across joint force components</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #10b981;">
              <h4 style="font-weight:600; color:#6ee7b7; font-size:16px; margin:0 0 12px 0;">Joint Planning Process</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Planning Initiation:</strong> Joint force commander guidance and planning directive integration</p>
                <p style="margin:0 0 8px 0;"><strong>Mission Analysis:</strong> Joint mission analysis and operational environment assessment</p>
                <p style="margin:0 0 8px 0;"><strong>COA Development:</strong> Joint COA development with service component input and coordination</p>
                <p style="margin:0 0 8px 0;"><strong>COA Analysis:</strong> Joint wargaming and analysis with multi-service participation</p>
                <p style="margin:0;"><strong>COA Comparison:</strong> Joint evaluation criteria and comparative analysis methodologies</p>
              </div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:16px;">
            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #3b82f6;">
              <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Joint Capabilities</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Cross-domain synergy</p>
                <p style="margin:0 0 6px 0;">• Multi-service integration</p>
                <p style="margin:0 0 6px 0;">• Combined arms effects</p>
                <p style="margin:0 0 6px 0;">• Joint force multipliers</p>
                <p style="margin:0;">• Unified action</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #10b981;">
              <h4 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 10px 0;">Coordination Requirements</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Command relationships</p>
                <p style="margin:0 0 6px 0;">• Communication protocols</p>
                <p style="margin:0 0 6px 0;">• Information sharing</p>
                <p style="margin:0 0 6px 0;">• Resource allocation</p>
                <p style="margin:0;">• Timeline synchronization</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #f59e0b;">
              <h4 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 10px 0;">Joint Constraints</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Policy limitations</p>
                <p style="margin:0 0 6px 0;">• Resource constraints</p>
                <p style="margin:0 0 6px 0;">• Technical limitations</p>
                <p style="margin:0 0 6px 0;">• Political considerations</p>
                <p style="margin:0;">• Legal restrictions</p>
              </div>
            </div>
          </div>

          <div style="background-color:rgba(59, 130, 246, 0.1); padding:16px; border-radius:6px; border:1px solid #3b82f6;">
            <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Joint COA Comparison Framework</h4>
            <p style="color:#d1d5db; font-size:13px; line-height:1.5; margin:0;">
              <strong>Joint Evaluation Criteria:</strong> Develop evaluation criteria that account for joint force capabilities and multi-service coordination requirements.
              <strong>Service Component Input:</strong> Integrate service component assessments and recommendations into the joint COA comparison process.
              <strong>Joint Force Commander Guidance:</strong> Ensure COA comparison aligns with joint force commander's intent and operational priorities.
            </p>
          </div>
        </div>

        <!-- Staff Coordination -->
        <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:20px; margin-bottom:24px;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-users" style="margin-right:12px; color:#3b82f6; font-size:18px;"></i>
            Staff Coordination - Roles and Responsibilities
          </h3>
          <p style="color:#d1d5db; font-size:14px; line-height:1.6; margin:0 0 20px 0;">
            Staff coordination ensures comprehensive participation of all staff sections in the COA comparison process. This coordination integrates functional expertise from across the staff, ensuring thorough evaluation of each course of action from multiple perspectives and functional areas.
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #8b5cf6;">
              <h4 style="font-weight:600; color:#c4b5fd; font-size:16px; margin:0 0 12px 0;">Primary Staff Sections</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>G-1/S-1 Personnel:</strong> Personnel requirements, casualty estimates, and human resource implications</p>
                <p style="margin:0 0 8px 0;"><strong>G-2/S-2 Intelligence:</strong> Intelligence requirements, threat assessment, and operational environment analysis</p>
                <p style="margin:0 0 8px 0;"><strong>G-3/S-3 Operations:</strong> Operational feasibility, tactical considerations, and execution requirements</p>
                <p style="margin:0 0 8px 0;"><strong>G-4/S-4 Logistics:</strong> Sustainment requirements, logistical feasibility, and resource availability</p>
                <p style="margin:0;"><strong>G-6/S-6 Communications:</strong> Communication requirements, network capabilities, and information systems</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #dc2626;">
              <h4 style="font-weight:600; color:#fca5a5; font-size:16px; margin:0 0 12px 0;">Special Staff Sections</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Engineer:</strong> Engineering requirements, obstacle analysis, and construction capabilities</p>
                <p style="margin:0 0 8px 0;"><strong>Fire Support:</strong> Fires integration, target analysis, and fire support coordination</p>
                <p style="margin:0 0 8px 0;"><strong>Air Defense:</strong> Air and missile defense requirements and integration considerations</p>
                <p style="margin:0 0 8px 0;"><strong>Chemical:</strong> CBRN considerations, decontamination requirements, and protective measures</p>
                <p style="margin:0;"><strong>Military Police:</strong> Security requirements, law enforcement considerations, and detention operations</p>
              </div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:16px;">
            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #8b5cf6;">
              <h4 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 10px 0;">Staff Responsibilities</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Functional area assessment</p>
                <p style="margin:0 0 6px 0;">• Technical expertise</p>
                <p style="margin:0 0 6px 0;">• Resource evaluation</p>
                <p style="margin:0 0 6px 0;">• Risk identification</p>
                <p style="margin:0;">• Recommendation development</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #dc2626;">
              <h4 style="font-weight:600; color:#fca5a5; font-size:14px; margin:0 0 10px 0;">Coordination Methods</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Staff meetings</p>
                <p style="margin:0 0 6px 0;">• Working groups</p>
                <p style="margin:0 0 6px 0;">• Coordination boards</p>
                <p style="margin:0 0 6px 0;">• Information sharing</p>
                <p style="margin:0;">• Collaborative analysis</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #10b981;">
              <h4 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 10px 0;">Integration Process</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Synchronized timeline</p>
                <p style="margin:0 0 6px 0;">• Standardized criteria</p>
                <p style="margin:0 0 6px 0;">• Consolidated assessment</p>
                <p style="margin:0 0 6px 0;">• Unified recommendation</p>
                <p style="margin:0;">• Commander briefing</p>
              </div>
            </div>
          </div>

          <div style="background-color:rgba(59, 130, 246, 0.1); padding:16px; border-radius:6px; border:1px solid #3b82f6;">
            <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Staff Integration in COA Comparison</h4>
            <p style="color:#d1d5db; font-size:13px; line-height:1.5; margin:0;">
              <strong>Comprehensive Evaluation:</strong> Ensure all functional areas provide input to the COA comparison process through systematic staff coordination.
              <strong>Expertise Integration:</strong> Leverage specialized staff knowledge and technical expertise in evaluating COA feasibility and effectiveness.
              <strong>Unified Assessment:</strong> Consolidate staff assessments into unified COA comparison products that support commander decision-making.
            </p>
          </div>
        </div>

        <!-- Documentation Standards -->
        <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:20px; margin-bottom:24px;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-file-alt" style="margin-right:12px; color:#3b82f6; font-size:18px;"></i>
            Documentation Standards - COA Comparison Products and Formats
          </h3>
          <p style="color:#d1d5db; font-size:14px; line-height:1.6; margin:0 0 20px 0;">
            Documentation standards ensure consistent and comprehensive recording of COA comparison results. These standards provide structured formats for comparison products, enabling effective communication of analysis results to commanders and supporting decision-making processes.
          </p>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px;">
            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #10b981;">
              <h4 style="font-weight:600; color:#6ee7b7; font-size:16px; margin:0 0 12px 0;">Comparison Products</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Comparison Matrix:</strong> Structured matrix comparing COAs against evaluation criteria with scoring and ranking</p>
                <p style="margin:0 0 8px 0;"><strong>Executive Summary:</strong> Concise summary of comparison results with key findings and recommendations</p>
                <p style="margin:0 0 8px 0;"><strong>Detailed Analysis:</strong> Comprehensive analysis document with methodology, criteria, and detailed evaluation</p>
                <p style="margin:0 0 8px 0;"><strong>Risk Assessment:</strong> Risk analysis summary showing comparative risk levels across all COAs</p>
                <p style="margin:0;"><strong>Decision Briefing:</strong> Presentation materials for commander briefing and decision support</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:4px solid #f59e0b;">
              <h4 style="font-weight:600; color:#fbbf24; font-size:16px; margin:0 0 12px 0;">Format Standards</h4>
              <div style="color:#d1d5db; font-size:13px; line-height:1.5;">
                <p style="margin:0 0 8px 0;"><strong>Standardized Templates:</strong> Consistent document templates for all COA comparison products</p>
                <p style="margin:0 0 8px 0;"><strong>Classification Markings:</strong> Appropriate security classification and handling instructions</p>
                <p style="margin:0 0 8px 0;"><strong>Version Control:</strong> Document version control and change tracking procedures</p>
                <p style="margin:0 0 8px 0;"><strong>Distribution Lists:</strong> Controlled distribution to authorized personnel and organizations</p>
                <p style="margin:0;"><strong>Archive Requirements:</strong> Document retention and archival procedures for historical reference</p>
              </div>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:16px;">
            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #10b981;">
              <h4 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 10px 0;">Content Requirements</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Methodology description</p>
                <p style="margin:0 0 6px 0;">• Evaluation criteria</p>
                <p style="margin:0 0 6px 0;">• Scoring rationale</p>
                <p style="margin:0 0 6px 0;">• Comparative analysis</p>
                <p style="margin:0;">• Recommendations</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #f59e0b;">
              <h4 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 10px 0;">Quality Standards</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Accuracy verification</p>
                <p style="margin:0 0 6px 0;">• Completeness review</p>
                <p style="margin:0 0 6px 0;">• Consistency check</p>
                <p style="margin:0 0 6px 0;">• Technical review</p>
                <p style="margin:0;">• Final approval</p>
              </div>
            </div>

            <div style="background-color:#374151; padding:14px; border-radius:6px; border-left:3px solid #8b5cf6;">
              <h4 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 10px 0;">Presentation Formats</h4>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;">• Executive briefings</p>
                <p style="margin:0 0 6px 0;">• Decision matrices</p>
                <p style="margin:0 0 6px 0;">• Graphical displays</p>
                <p style="margin:0 0 6px 0;">• Summary charts</p>
                <p style="margin:0;">• Recommendation slides</p>
              </div>
            </div>
          </div>

          <div style="background-color:rgba(59, 130, 246, 0.1); padding:16px; border-radius:6px; border:1px solid #3b82f6;">
            <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Documentation Integration and Standards</h4>
            <p style="color:#d1d5db; font-size:13px; line-height:1.5; margin:0;">
              <strong>Standardized Documentation:</strong> Employ consistent documentation standards across all COA comparison products to ensure clarity and professional presentation.
              <strong>Comprehensive Recording:</strong> Document all aspects of the comparison process including methodology, criteria, analysis, and results for future reference and lessons learned.
              <strong>Decision Support:</strong> Structure documentation to effectively support commander decision-making with clear presentation of analysis results and recommendations.
            </p>
          </div>
        </div>

        <!-- Conclusion -->
        <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:20px; margin-bottom:24px;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-flag-checkered" style="margin-right:12px; color:#3b82f6; font-size:18px;"></i>
            COA Comparison Framework Conclusion
          </h3>
          <p style="color:#d1d5db; font-size:14px; line-height:1.6; margin:0 0 16px 0;">
            The MDMP Step 5 Course of Action Comparison framework provides comprehensive methodology for systematic evaluation and comparison of developed courses of action. This framework integrates doctrinal principles, analytical tools, risk assessment, joint planning considerations, staff coordination, and documentation standards to support informed military decision-making.
          </p>

          <div style="background-color:rgba(59, 130, 246, 0.1); padding:16px; border-radius:6px; border:1px solid #3b82f6;">
            <h4 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Framework Integration and Application</h4>
            <p style="color:#d1d5db; font-size:13px; line-height:1.5; margin:0;">
              <strong>Systematic Approach:</strong> The COA comparison framework provides systematic methodology for objective evaluation of multiple courses of action, ensuring comprehensive analysis and informed decision-making.
              <strong>Doctrinal Compliance:</strong> Framework adherence to FM 5-0, JP 5-0, and CJCSM 3105.01 ensures doctrinal compliance and professional military standards.
              <strong>Decision Support:</strong> Comprehensive comparison products support commander decision-making while preserving command prerogative in final COA selection and approval.
            </p>
          </div>
        </div>
      </div>
    `;
  }
};

export default coaComparisonDetailedAnalysisModule;

