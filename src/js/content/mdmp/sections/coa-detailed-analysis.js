/**
 * MDMP Step 3: Course of Action Development - Detailed Analysis
 * Comprehensive FM 5-0 doctrinal content for MDMP Step 3 (Course of Action Development)
 * Source: FM 5-0 (Operations Process), Chapter 12 - Course of Action Development
 * Blue theme (#1d4ed8) for detailed analysis consistency across MDMP steps
 */

export const coaDetailedAnalysisModule = {
  id: 'coa-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <div id="coa-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-route" style="margin-right:8px; color:#1d4ed8; font-size:16px;"></i>
            Step 3: Course of Action Development — Detailed Analysis
          </h3>
        </div>

        <!-- COA Development Overview -->
        <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-drafting-compass" style="margin-right: 8px;"></i>
            MDMP Step 3: Course of Action Development Doctrinal Framework - Large Scale Combat Operations
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                <strong>Doctrinal Source:</strong> FM 5-0 (Nov 2024), Chapter 12<br>
                <strong>Supporting Doctrine:</strong> FM 3-0, ADP 3-0, FM 6-0<br>
                <strong>Process Duration:</strong> 1/3 of available planning time<br>
                <strong>Primary Output:</strong> Feasible courses of action for analysis
              </p>
              <p style="color: #bfdbfe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Definition:</strong> COA development is the process of developing feasible courses of action that accomplish the mission within the commander's guidance and intent.
              </p>
            </div>
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                <strong>Key Principle:</strong> Each COA must be suitable, feasible, acceptable, distinguishable, and complete (SFADC)<br>
                <strong>Minimum COAs:</strong> Two feasible courses of action<br>
                <strong>Maximum COAs:</strong> Limited by time and staff capacity
              </p>
              <p style="color: #bfdbfe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Integration:</strong> Synchronizes all warfighting functions across multiple domains of operations.
              </p>
            </div>
          </div>
        </div>

        <!-- 2x2 Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px; align-items:stretch;">
          <!-- Card 1: COA Development Process -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:240px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-cogs" style="margin-right:8px; color:#1d4ed8; font-size:14px;"></i>
                COA Development Process (FM 5-0, Para 12-1)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Systematic development of feasible courses of action that accomplish the mission within commander's guidance. Each COA represents a different approach to mission accomplishment using available resources and capabilities.
              </p>
              <div style="background-color:rgba(29, 78, 216, 0.1); padding:12px; border-radius:6px; border:1px solid #1d4ed8; margin-bottom:12px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Four-Step Development Process</h5>
                <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                  <p style="margin:0 0 6px 0;"><strong>Step 1 - Array Forces:</strong> Initial force positioning and task organization</p>
                  <p style="margin:0 0 6px 0;"><strong>Step 2 - Develop Scheme:</strong> Concept of operations and maneuver</p>
                  <p style="margin:0 0 6px 0;"><strong>Step 3 - Assign Tasks:</strong> Mission assignment to subordinate units</p>
                  <p style="margin:0 0 0 0;"><strong>Step 4 - Prepare Sustainment:</strong> Logistics and support planning</p>
                </div>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #1d4ed8;">
                <div style="color:#93c5fd; font-size:12px; font-weight:600; margin-bottom:4px;">Primary Outputs</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                  • COA sketch with graphics and control measures<br>
                  • COA statement describing concept of operations<br>
                  • Task organization for each subordinate unit
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: SFADC Criteria -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:240px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-check-square" style="margin-right:8px; color:#10b981; font-size:14px;"></i>
                SFADC Criteria (FM 5-0, Para 12-2)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Essential criteria that each course of action must meet to be considered valid for further analysis. All five criteria must be satisfied for COA approval and advancement to COA analysis.
              </p>
              <div style="background-color:rgba(16, 185, 129, 0.1); padding:12px; border-radius:6px; border:1px solid #10b981; margin-bottom:12px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 8px 0;">Five Essential Criteria</h5>
                <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                  <p style="margin:0 0 6px 0;"><strong>Suitable:</strong> Accomplishes the mission and complies with commander's guidance</p>
                  <p style="margin:0 0 6px 0;"><strong>Feasible:</strong> Can be accomplished with available resources within time constraints</p>
                  <p style="margin:0 0 6px 0;"><strong>Acceptable:</strong> Worth the cost in casualties, time, and resources</p>
                  <p style="margin:0 0 6px 0;"><strong>Distinguishable:</strong> Differs significantly from other COAs in concept</p>
                  <p style="margin:0 0 0 0;"><strong>Complete:</strong> Addresses all aspects of the mission across all domains</p>
                </div>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #10b981;">
                <div style="color:#6ee7b7; font-size:12px; font-weight:600; margin-bottom:4px;">Validation Process</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                  • COA screening by planning team<br>
                  • Resource feasibility assessment<br>
                  • Risk-benefit analysis and commander approval
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Scheme of Maneuver Development -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:240px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#8b5cf6; font-size:14px;"></i>
                Scheme of Maneuver Development (FM 3-0, Chapter 6)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Development of the tactical concept describing how forces will be employed to accomplish the mission. The scheme of maneuver is the central component of the concept of operations.
              </p>
              <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:12px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Essential Maneuver Elements</h5>
                <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                  <p style="margin:0 0 6px 0;"><strong>Main Effort:</strong> Primary focus of combat power and commander's priority</p>
                  <p style="margin:0 0 6px 0;"><strong>Supporting Effort:</strong> Operations that support the main effort</p>
                  <p style="margin:0 0 6px 0;"><strong>Reserve:</strong> Uncommitted forces available for contingencies</p>
                  <p style="margin:0 0 0 0;"><strong>Decisive Points:</strong> Key terrain, enemy weaknesses, or critical capabilities</p>
                </div>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #8b5cf6;">
                <div style="color:#c4b5fd; font-size:12px; font-weight:600; margin-bottom:4px;">Maneuver Products</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                  • COA sketch with maneuver graphics<br>
                  • Task organization and command relationships<br>
                  • Control measures and phase lines
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Warfighting Functions Integration -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:240px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-cog" style="margin-right:8px; color:#ef4444; font-size:14px;"></i>
                Warfighting Functions Integration (ADP 3-0, Chapter 2)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Integration of all six warfighting functions into each course of action to ensure synchronized operations across all domains and functions.
              </p>
              <div style="background-color:rgba(239, 68, 68, 0.1); padding:12px; border-radius:6px; border:1px solid #ef4444; margin-bottom:12px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 8px 0;">Six Warfighting Functions</h5>
                <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                  <p style="margin:0 0 6px 0;"><strong>Movement and Maneuver:</strong> Positioning forces for advantage</p>
                  <p style="margin:0 0 6px 0;"><strong>Intelligence:</strong> Information collection and analysis</p>
                  <p style="margin:0 0 6px 0;"><strong>Fires:</strong> Lethal and nonlethal effects coordination</p>
                  <p style="margin:0 0 6px 0;"><strong>Sustainment:</strong> Logistics and personnel support</p>
                  <p style="margin:0 0 6px 0;"><strong>Mission Command:</strong> C2 and decision-making processes</p>
                  <p style="margin:0 0 0 0;"><strong>Protection:</strong> Force protection and survivability</p>
                </div>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #ef4444;">
                <div style="color:#fca5a5; font-size:12px; font-weight:600; margin-bottom:4px;">Synchronization Products</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                  • Synchronization matrix for each COA<br>
                  • Decision support template<br>
                  • Execution timeline and control measures
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Comprehensive Content Section -->
        <div style="background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #e2e8f0; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-book-open" style="margin-right: 8px; color: #1d4ed8;"></i>
            COA Development Methodology and Best Practices
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 16px;">
            <!-- Left Column: Development Methodology -->
            <div>
              <div style="background-color: rgba(29, 78, 216, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #1d4ed8; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">COA Development Methodology (FM 5-0, Para 12-3)</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>1. Analyze Relative Combat Power:</strong> Compare friendly and enemy capabilities</p>
                  <p style="margin: 0 0 6px 0;"><strong>2. Generate Options:</strong> Develop multiple approaches to mission accomplishment</p>
                  <p style="margin: 0 0 6px 0;"><strong>3. Array Initial Forces:</strong> Position forces based on mission variables</p>
                  <p style="margin: 0 0 6px 0;"><strong>4. Develop Concept:</strong> Create scheme of maneuver and supporting operations</p>
                  <p style="margin: 0 0 6px 0;"><strong>5. Assign Tasks:</strong> Provide clear mission statements to subordinates</p>
                  <p style="margin: 0 0 0 0;"><strong>6. Identify Resources:</strong> Determine sustainment and support requirements</p>
                </div>
              </div>

              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">COA Naming Convention</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Descriptive Names:</strong> Use tactical concepts (Penetration, Envelopment, Turning Movement)</p>
                  <p style="margin: 0 0 6px 0;"><strong>Geographic Names:</strong> Reference key terrain or objectives (Northern Approach, Highway 1)</p>
                  <p style="margin: 0 0 0 0;"><strong>Avoid Numbers:</strong> COA 1, COA 2 provide no tactical meaning or context</p>
                </div>
              </div>
            </div>

            <!-- Right Column: Quality Control -->
            <div>
              <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">COA Quality Control Measures</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Staff Review:</strong> Each staff section validates their functional area</p>
                  <p style="margin: 0 0 6px 0;"><strong>Red Team Analysis:</strong> Independent assessment of COA validity</p>
                  <p style="margin: 0 0 6px 0;"><strong>Resource Validation:</strong> Confirm availability of required assets</p>
                  <p style="margin: 0 0 6px 0;"><strong>Timeline Analysis:</strong> Verify feasibility within time constraints</p>
                  <p style="margin: 0 0 0 0;"><strong>Risk Assessment:</strong> Identify and evaluate potential failure points</p>
                </div>
              </div>

              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Common Development Pitfalls</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Template Solutions:</strong> Avoid using previous COAs without adaptation</p>
                  <p style="margin: 0 0 6px 0;"><strong>Single Solution Focus:</strong> Develop multiple viable options</p>
                  <p style="margin: 0 0 0 0;"><strong>Incomplete Integration:</strong> Ensure all warfighting functions are synchronized</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- COA Products and Documentation -->
        <div style="background-color: #1e293b; border: 1px solid #475569; border-radius: 8px; padding: 16px;">
          <h3 style="color: #f1f5f9; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
            <i class="fas fa-file-alt" style="margin-right: 8px; color: #1d4ed8;"></i>
            COA Products and Documentation Requirements
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
            <!-- COA Sketch -->
            <div style="background-color: rgba(29, 78, 216, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #1d4ed8;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">COA Sketch Requirements</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;">• Unit positions and boundaries</p>
                <p style="margin: 0 0 6px 0;">• Maneuver graphics and control measures</p>
                <p style="margin: 0 0 6px 0;">• Enemy situation and templated actions</p>
                <p style="margin: 0 0 6px 0;">• Key terrain and obstacles</p>
                <p style="margin: 0 0 0 0;">• Phase lines and decision points</p>
              </div>
            </div>

            <!-- COA Statement -->
            <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">COA Statement Elements</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;">• Who, what, when, where, why, how</p>
                <p style="margin: 0 0 6px 0;">• Scheme of maneuver description</p>
                <p style="margin: 0 0 6px 0;">• Main effort and supporting efforts</p>
                <p style="margin: 0 0 6px 0;">• Reserve employment concept</p>
                <p style="margin: 0 0 0 0;">• End state and success criteria</p>
              </div>
            </div>

            <!-- Task Organization -->
            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Task Organization</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;">• Command relationships (OPCON, TACON)</p>
                <p style="margin: 0 0 6px 0;">• Task and purpose for each unit</p>
                <p style="margin: 0 0 6px 0;">• Support relationships</p>
                <p style="margin: 0 0 6px 0;">• Attachment and detachment actions</p>
                <p style="margin: 0 0 0 0;">• Priority of support designations</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
};

export default coaDetailedAnalysisModule;
