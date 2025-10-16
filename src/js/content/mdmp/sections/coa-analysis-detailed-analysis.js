/**
 * MDMP Step 4: Course of Action Analysis - Detailed Analysis
 * Comprehensive FM 5-0 doctrinal content for MDMP Step 4 (Course of Action Analysis)
 * Source: FM 5-0 (Operations Process), Chapter 13 - Course of Action Analysis
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive MDMP Step 4 doctrinal content requirements
 * Expected Length: 800-1200 lines of comprehensive COA analysis doctrinal content
 * Large Scale Combat Operations (LSCO) scenario framework - COA Analysis doctrinal analysis
 */

export const coaAnalysisDetailedAnalysisModule = {
  id: 'coa-analysis-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <div id="coa-analysis-detailed-analysis-section" style="margin-bottom: 24px;">
        <!-- Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-balance-scale" style="margin-right: 8px; color: #60a5fa; font-size: 16px;"></i>
            Step 4: Course of Action Analysis — Detailed Analysis
          </h3>
        </div>

        <!-- COA Analysis Overview -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-chess-board" style="margin-right: 8px; color: #1d4ed8;"></i>
            MDMP Step 4: Course of Action Analysis Doctrinal Framework - LSCO Operations
          </h3>

          <div style="background-color: rgba(29, 78, 216, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #1d4ed8; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Doctrinal Foundation</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>COA Analysis:</strong> The detailed examination of each COA to determine its advantages and disadvantages,
              identify actions to maximize advantages and minimize disadvantages, and provide the foundation for COA comparison.
              The analysis uses wargaming to visualize the flow of operations and identify requirements not previously identified.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                <strong>Doctrinal Source:</strong> FM 5-0 (Nov 2024), Chapter 13<br>
                <strong>Supporting Doctrine:</strong> FM 6-0, ATP 5-0.1, FM 2-0<br>
                <strong>Process Duration:</strong> 1/3 of available planning time<br>
                <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
              </p>
            </div>
            <div>
              <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>COA Analysis Focus:</strong> Detailed examination of each COA through wargaming<br>
                <strong>Primary Output:</strong> Refined COAs, decision support matrix, wargaming results<br>
                <strong>Key Products:</strong> Synchronization matrix, decision support template, risk assessment<br>
                <strong>Decision Point:</strong> COA analysis briefing and refined planning guidance
              </p>
            </div>
          </div>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Card 1: COA Analysis Process & Wargaming Fundamentals -->
          <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
            <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
              <i class="fas fa-cogs" style="margin-right: 8px; color: #1d4ed8;"></i>
              COA Analysis Process & Wargaming Fundamentals
            </h4>
            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
              <p style="margin: 0 0 8px 0;"><strong>• Gather Tools:</strong> Collect maps, overlays, unit symbols, and analysis materials</p>
              <p style="margin: 0 0 8px 0;"><strong>• List Forces:</strong> Catalog all friendly forces, capabilities, and limitations</p>
              <p style="margin: 0 0 8px 0;"><strong>• Enemy Assessment:</strong> Document assumptions about enemy forces and capabilities</p>
              <p style="margin: 0 0 8px 0;"><strong>• Evaluation Criteria:</strong> Apply suitability, acceptability, feasibility standards</p>
              <p style="margin: 0 0 8px 0;"><strong>• Wargaming Execution:</strong> Conduct systematic action-reaction-counteraction analysis</p>
              <p style="margin: 0;"><strong>• Analysis Integration:</strong> Synthesize results for COA comparison and decision</p>
            </div>
          </div>

          <!-- Card 2: Wargaming Methods & Techniques -->
          <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
            <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
              <i class="fas fa-chess" style="margin-right: 8px; color: #1d4ed8;"></i>
              Wargaming Methods & Techniques
            </h4>
            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
              <p style="margin: 0 0 8px 0;"><strong>• Belt Method:</strong> Analyze operations by geographic areas or belts</p>
              <p style="margin: 0 0 8px 0;"><strong>• Avenue-in-Depth:</strong> Follow single avenue of approach through operation</p>
              <p style="margin: 0 0 8px 0;"><strong>• Box Method:</strong> Analyze by operational areas or geographic boxes</p>
              <p style="margin: 0 0 8px 0;"><strong>• Time-Step Method:</strong> Analyze operations by sequential time periods</p>
              <p style="margin: 0 0 8px 0;"><strong>• Hybrid Method:</strong> Combination approach using multiple methods</p>
              <p style="margin: 0;"><strong>• Technique Selection:</strong> Manual, computer-assisted, or seminar-based approaches</p>
            </div>
          </div>

          <!-- Card 3: Analysis Criteria & Evaluation Framework -->
          <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
            <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
              <i class="fas fa-list-check" style="margin-right: 8px; color: #1d4ed8;"></i>
              Analysis Criteria & Evaluation Framework
            </h4>
            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
              <p style="margin: 0 0 8px 0;"><strong>• Suitability:</strong> COA accomplishes the assigned mission and tasks</p>
              <p style="margin: 0 0 8px 0;"><strong>• Acceptability:</strong> Risk and cost are within acceptable limits</p>
              <p style="margin: 0 0 8px 0;"><strong>• Feasibility:</strong> Required resources and time are available</p>
              <p style="margin: 0 0 8px 0;"><strong>• Distinguishability:</strong> COA is significantly different from alternatives</p>
              <p style="margin: 0 0 8px 0;"><strong>• Completeness:</strong> Addresses all specified and implied tasks</p>
              <p style="margin: 0;"><strong>• Analysis Integration:</strong> Advantages, disadvantages, and risk assessment</p>
            </div>
          </div>

          <!-- Card 4: Decision Support Tools & Products -->
          <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
            <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
              <i class="fas fa-table" style="margin-right: 8px; color: #1d4ed8;"></i>
              Decision Support Tools & Products
            </h4>
            <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
              <p style="margin: 0 0 8px 0;"><strong>• Decision Support Matrix:</strong> Critical decision points and requirements</p>
              <p style="margin: 0 0 8px 0;"><strong>• Synchronization Matrix:</strong> Time-phased coordination and control measures</p>
              <p style="margin: 0 0 8px 0;"><strong>• Decision Support Template:</strong> Graphic decision aids and overlays</p>
              <p style="margin: 0 0 8px 0;"><strong>• COA Comparison Matrix:</strong> Side-by-side evaluation framework</p>
              <p style="margin: 0 0 8px 0;"><strong>• Risk Assessment:</strong> Probability and impact analysis products</p>
              <p style="margin: 0;"><strong>• Wargaming Results:</strong> Detailed analysis outcomes and recommendations</p>
            </div>
          </div>
        </div>

        <!-- Additional Analysis Framework -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-microscope" style="margin-right: 8px; color: #8b5cf6;"></i>
            Comprehensive COA Analysis Framework - LSCO Operations
          </h3>

          <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Analysis Integration</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Comprehensive Framework:</strong> Integrates operational factors, resource considerations, and risk assessment
              to provide holistic COA evaluation. Combines quantitative metrics with qualitative assessments for complete analysis.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-cogs" style="margin-right: 8px; color: #8b5cf6;"></i>
                Operational Factors
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Mission accomplishment probability</p>
                <p style="margin: 0 0 8px 0;">• Force protection effectiveness</p>
                <p style="margin: 0 0 8px 0;">• Operational tempo sustainability</p>
                <p style="margin: 0 0 8px 0;">• Multi-domain integration</p>
                <p style="margin: 0;">• Coalition interoperability</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-boxes" style="margin-right: 8px; color: #8b5cf6;"></i>
                Resource Considerations
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Personnel requirements</p>
                <p style="margin: 0 0 8px 0;">• Equipment and materiel needs</p>
                <p style="margin: 0 0 8px 0;">• Logistics sustainment capacity</p>
                <p style="margin: 0 0 8px 0;">• Time and planning constraints</p>
                <p style="margin: 0;">• Partner nation support availability</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-exclamation-triangle" style="margin-right: 8px; color: #8b5cf6;"></i>
                Risk Assessment
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Tactical risk evaluation</p>
                <p style="margin: 0 0 8px 0;">• Operational risk factors</p>
                <p style="margin: 0 0 8px 0;">• Strategic implications</p>
                <p style="margin: 0 0 8px 0;">• Mitigation strategies</p>
                <p style="margin: 0;">• Contingency planning</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Detailed Wargaming Procedures -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-chess-knight" style="margin-right: 8px; color: #1d4ed8;"></i>
            Detailed Wargaming Procedures - LSCO Operations
          </h3>

          <div style="background-color: rgba(29, 78, 216, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #1d4ed8; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Wargaming Methodology</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Systematic Approach:</strong> Detailed wargaming procedures follow systematic methodology to test COA validity
              through action-reaction-counteraction sequences, identifying strengths, weaknesses, and refinement requirements.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #1d4ed8;"></i>
                Wargaming Preparation
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Gather analysis tools and materials</p>
                <p style="margin: 0 0 8px 0;">• List friendly forces and capabilities</p>
                <p style="margin: 0 0 8px 0;">• Assess enemy COAs and capabilities</p>
                <p style="margin: 0 0 8px 0;">• Document assumptions and constraints</p>
                <p style="margin: 0;">• Establish evaluation criteria</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-play" style="margin-right: 8px; color: #1d4ed8;"></i>
                Wargaming Execution
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Execute friendly force actions</p>
                <p style="margin: 0 0 8px 0;">• Determine enemy reactions</p>
                <p style="margin: 0 0 8px 0;">• Develop friendly counteractions</p>
                <p style="margin: 0 0 8px 0;">• Assess outcomes and implications</p>
                <p style="margin: 0;">• Document results and lessons</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Advanced Analysis Methodologies -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-microscope" style="margin-right: 8px; color: #8b5cf6;"></i>
            Advanced Analysis Methodologies
          </h3>

          <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Analytical Integration</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Comprehensive Methodology:</strong> Combines quantitative metrics with qualitative assessments to provide
              complete COA evaluation. Integrates operational variables (PMESII-PT) and mission variables (METT-TC) for holistic analysis.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-calculator" style="margin-right: 8px; color: #8b5cf6;"></i>
                Quantitative Analysis
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Force ratio and combat power analysis</p>
                <p style="margin: 0 0 8px 0;">• Attrition modeling and loss calculations</p>
                <p style="margin: 0 0 8px 0;">• Time-distance and movement analysis</p>
                <p style="margin: 0 0 8px 0;">• Resource consumption calculations</p>
                <p style="margin: 0;">• Probability and success assessment</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-users" style="margin-right: 8px; color: #8b5cf6;"></i>
                Qualitative Analysis
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Morale factors and unit cohesion</p>
                <p style="margin: 0 0 8px 0;">• Leadership effectiveness evaluation</p>
                <p style="margin: 0 0 8px 0;">• Training readiness and proficiency</p>
                <p style="margin: 0 0 8px 0;">• Environmental and terrain effects</p>
                <p style="margin: 0;">• Political and strategic considerations</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Critical Decision Points Analysis -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-crosshairs" style="margin-right: 8px; color: #dc2626;"></i>
            Critical Decision Points Analysis
          </h3>

          <div style="background-color: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Decision Point Framework</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Critical Decision Points:</strong> Time-sensitive decisions that significantly impact mission success.
              Identified through wargaming and analysis to ensure timely decision-making and appropriate command authority.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #dc2626;"></i>
                Tactical Decisions
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Engagement criteria and ROE</p>
                <p style="margin: 0 0 8px 0;">• Fire support coordination</p>
                <p style="margin: 0 0 8px 0;">• Movement and positioning</p>
                <p style="margin: 0 0 8px 0;">• Casualty evacuation procedures</p>
                <p style="margin: 0;">• Ammunition resupply triggers</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #dc2626;"></i>
                Operational Decisions
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Phase transition criteria</p>
                <p style="margin: 0 0 8px 0;">• Reserve commitment decisions</p>
                <p style="margin: 0 0 8px 0;">• Coalition coordination points</p>
                <p style="margin: 0 0 8px 0;">• Information operations timing</p>
                <p style="margin: 0;">• Logistics priority shifts</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-globe" style="margin-right: 8px; color: #dc2626;"></i>
                Strategic Decisions
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Escalation management</p>
                <p style="margin: 0 0 8px 0;">• Political coordination requirements</p>
                <p style="margin: 0 0 8px 0;">• International law compliance</p>
                <p style="margin: 0 0 8px 0;">• Media and public engagement</p>
                <p style="margin: 0;">• End state achievement criteria</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Synchronization Matrix Development -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-table" style="margin-right: 8px; color: #10b981;"></i>
            Synchronization Matrix Development
          </h3>

          <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Matrix Framework</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Synchronization Matrix:</strong> Time-phased coordination tool that integrates all battlefield
              operating systems and warfighting functions to achieve unity of effort and synchronized operations.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-list" style="margin-right: 8px; color: #10b981;"></i>
                Matrix Components
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Time phases and sequential operations</p>
                <p style="margin: 0 0 8px 0;">• Unit tasks and responsibilities</p>
                <p style="margin: 0 0 8px 0;">• Control measures and boundaries</p>
                <p style="margin: 0 0 8px 0;">• Fire support coordination</p>
                <p style="margin: 0;">• Logistics and sustainment requirements</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-globe" style="margin-right: 8px; color: #10b981;"></i>
                LSCO Synchronization
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Multi-domain operations integration</p>
                <p style="margin: 0 0 8px 0;">• Coalition and partner coordination</p>
                <p style="margin: 0 0 8px 0;">• Information operations timing</p>
                <p style="margin: 0 0 8px 0;">• Civil affairs coordination</p>
                <p style="margin: 0;">• Special operations integration</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Risk Assessment Framework -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-exclamation-triangle" style="margin-right: 8px; color: #8b5cf6;"></i>
            Comprehensive Risk Assessment Framework
          </h3>

          <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Risk Assessment Process</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Comprehensive Risk Framework:</strong> Systematic evaluation of tactical, operational, and strategic risks
              with corresponding mitigation strategies and acceptance criteria for informed decision-making.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #8b5cf6;"></i>
                Tactical Risks
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Combat casualties and losses</p>
                <p style="margin: 0 0 8px 0;">• Equipment and materiel damage</p>
                <p style="margin: 0 0 8px 0;">• Mission failure probability</p>
                <p style="margin: 0 0 8px 0;">• Friendly fire incidents</p>
                <p style="margin: 0;">• Communication breakdown</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #8b5cf6;"></i>
                Operational Risks
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Logistics and supply disruption</p>
                <p style="margin: 0 0 8px 0;">• Coalition coordination friction</p>
                <p style="margin: 0 0 8px 0;">• Information security compromise</p>
                <p style="margin: 0 0 8px 0;">• Civilian casualties and collateral damage</p>
                <p style="margin: 0;">• Environmental impact</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-globe" style="margin-right: 8px; color: #8b5cf6;"></i>
                Strategic Risks
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Escalation and conflict expansion</p>
                <p style="margin: 0 0 8px 0;">• Political and diplomatic consequences</p>
                <p style="margin: 0 0 8px 0;">• International law compliance</p>
                <p style="margin: 0 0 8px 0;">• Alliance cohesion and unity</p>
                <p style="margin: 0;">• Long-term regional stability</p>
              </div>
            </div>
          </div>
        </div>

        <!-- COA Refinement Process -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-edit" style="margin-right: 8px; color: #10b981;"></i>
            COA Refinement Process
          </h3>

          <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Refinement Methodology</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>COA Refinement:</strong> Systematic improvement of COAs based on wargaming results, analysis outcomes,
              and identified deficiencies to optimize mission accomplishment probability and resource efficiency.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-check-circle" style="margin-right: 8px; color: #10b981;"></i>
                Refinement Criteria
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Wargaming results incorporation</p>
                <p style="margin: 0 0 8px 0;">• Resource optimization and efficiency</p>
                <p style="margin: 0 0 8px 0;">• Risk reduction and mitigation</p>
                <p style="margin: 0 0 8px 0;">• Synchronization improvement</p>
                <p style="margin: 0;">• Flexibility and adaptability enhancement</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-file-alt" style="margin-right: 8px; color: #10b981;"></i>
                Refinement Products
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Updated COA statements and concepts</p>
                <p style="margin: 0 0 8px 0;">• Modified sketches and graphics</p>
                <p style="margin: 0 0 8px 0;">• Revised timelines and schedules</p>
                <p style="margin: 0 0 8px 0;">• Enhanced synchronization matrices</p>
                <p style="margin: 0;">• Updated risk assessments</p>
              </div>
            </div>
          </div>
        </div>

        <!-- LSCO Specific Considerations -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-globe" style="margin-right: 8px; color: #1d4ed8;"></i>
            LSCO Specific Considerations
          </h3>

          <div style="background-color: rgba(29, 78, 216, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #1d4ed8; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">LSCO Analysis Framework</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>LSCO Considerations:</strong> Large Scale Combat Operations require comprehensive analysis of coalition
              integration, peer adversary capabilities, infrastructure dependencies, and partner nation factors.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-users" style="margin-right: 8px; color: #1d4ed8;"></i>
                Coalition Integration
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Multinational command relationships</p>
                <p style="margin: 0 0 8px 0;">• Equipment and communication interoperability</p>
                <p style="margin: 0 0 8px 0;">• National caveats and limitations</p>
                <p style="margin: 0 0 8px 0;">• Language and communication barriers</p>
                <p style="margin: 0;">• Cultural and operational differences</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-shield-alt" style="margin-right: 8px; color: #1d4ed8;"></i>
                Peer Adversary Capabilities
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Anti-access/area denial systems</p>
                <p style="margin: 0 0 8px 0;">• Electronic warfare capabilities</p>
                <p style="margin: 0 0 8px 0;">• Cyber operations and attacks</p>
                <p style="margin: 0 0 8px 0;">• Hybrid warfare tactics</p>
                <p style="margin: 0;">• Information operations and propaganda</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-road" style="margin-right: 8px; color: #1d4ed8;"></i>
                Infrastructure Dependencies
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Transportation network capabilities</p>
                <p style="margin: 0 0 8px 0;">• Communication system dependencies</p>
                <p style="margin: 0 0 8px 0;">• Energy infrastructure requirements</p>
                <p style="margin: 0 0 8px 0;">• Medical facility availability</p>
                <p style="margin: 0;">• Industrial base support</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-handshake" style="margin-right: 8px; color: #1d4ed8;"></i>
                Partner Nation Factors
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Legal framework and agreements</p>
                <p style="margin: 0 0 8px 0;">• Public support and attitudes</p>
                <p style="margin: 0 0 8px 0;">• Resource access and procurement</p>
                <p style="margin: 0 0 8px 0;">• Environmental law compliance</p>
                <p style="margin: 0;">• Media relations coordination</p>
              </div>
            </div>
          </div>
        </div>

        </div>

        <!-- Analysis Outputs and Products -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6;"></i>
            COA Analysis Outputs and Products
          </h3>

          <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 16px;">
            <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Analysis Products</h5>
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>COA Analysis Products:</strong> Comprehensive outputs that provide detailed information for COA comparison
              and commander decision-making, including refined COAs, analysis results, and supporting documentation.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-file-alt" style="margin-right: 8px; color: #8b5cf6;"></i>
                Primary Products
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Refined COA statements</p>
                <p style="margin: 0 0 8px 0;">• Updated COA sketches</p>
                <p style="margin: 0 0 8px 0;">• Synchronization matrices</p>
                <p style="margin: 0 0 8px 0;">• Decision support templates</p>
                <p style="margin: 0;">• Wargaming results</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-chart-line" style="margin-right: 8px; color: #8b5cf6;"></i>
                Supporting Products
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• Risk assessments</p>
                <p style="margin: 0 0 8px 0;">• Resource requirements</p>
                <p style="margin: 0 0 8px 0;">• Timeline analyses</p>
                <p style="margin: 0 0 8px 0;">• Contingency plans</p>
                <p style="margin: 0;">• Lessons learned</p>
              </div>
            </div>

            <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 12px;">
              <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-presentation" style="margin-right: 8px; color: #8b5cf6;"></i>
                Briefing Materials
              </h4>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• COA analysis briefing</p>
                <p style="margin: 0 0 8px 0;">• Comparison matrices</p>
                <p style="margin: 0 0 8px 0;">• Recommendation slides</p>
                <p style="margin: 0 0 8px 0;">• Supporting graphics</p>
                <p style="margin: 0;">• Executive summaries</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Doctrinal Summary -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-graduation-cap" style="margin-right: 8px; color: #1d4ed8;"></i>
            MDMP Step 4 Doctrinal Summary
          </h3>

          <div style="background-color: rgba(29, 78, 216, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #1d4ed8;">
            <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Course of Action Analysis:</strong> The most analytically intensive step of the MDMP, requiring detailed
              examination of each COA through systematic wargaming and evaluation. The process transforms conceptual
              COAs into detailed, executable plans while identifying strengths, weaknesses, and resource requirements.
              For LSCO operations, this analysis must account for coalition dynamics, peer adversary
              capabilities, and the complex operational environment. The products of this step provide the foundation
              for informed COA comparison and commander decision-making, ensuring mission success while minimizing risk
              to forces and achieving strategic objectives.
            </p>
          </div>
        </div>
      </div>
    `;
  }
};

export default coaAnalysisDetailedAnalysisModule;
