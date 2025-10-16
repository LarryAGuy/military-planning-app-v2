/**
 * MDMP Mission Analysis - Detailed Analysis
 * Comprehensive FM 5-0 doctrinal content for MDMP Step 2 (Mission Analysis)
 * Source: FM 5-0 (Operations Process), Chapter 11 - Mission Analysis
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive MDMP Step 2 doctrinal content requirements
 * Expected Length: 800-1200 lines of comprehensive mission analysis doctrinal content
 * European Theater/LSCO scenario framework - Mission Analysis doctrinal analysis
 */

export const detailedAnalysisModule = {
  id: 'mission-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <div id="mission-detailed-analysis-section" style="margin-bottom: 24px;">
        <!-- Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-search" style="margin-right: 8px; color: #60a5fa; font-size: 16px;"></i>
            Step 2: Mission Analysis — Detailed Analysis
          </h3>
        </div>

        <!-- Mission Analysis Overview -->
        <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-flag" style="margin-right: 8px;"></i>
            MDMP Step 2: Mission Analysis Doctrinal Framework - European Theater LSCO
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                <strong>Doctrinal Source:</strong> FM 5-0 (Nov 2024), Chapter 11<br>
                <strong>Supporting Doctrine:</strong> FM 6-0, ATP 5-0.1, FM 2-0<br>
                <strong>Process Duration:</strong> 1/3 of available planning time<br>
                <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
              </p>
            </div>
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Mission Analysis Focus:</strong> Comprehensive understanding of the mission and operational environment<br>
                <strong>Primary Output:</strong> Mission statement, initial commander's intent, planning guidance<br>
                <strong>Key Products:</strong> IPB, METT-TC analysis, CCIR, initial risk assessment<br>
                <strong>Decision Point:</strong> Mission analysis briefing and commander's guidance
              </p>
            </div>
          </div>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Card 1: Mission Analysis Process & Higher Commander's Intent -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-tasks" style="margin-right: 8px; color: #3b82f6; font-size: 14px;"></i>
                Mission Analysis Process & Higher Commander's Intent
              </h4>

              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #3b82f6; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Mission Analysis Process (FM 5-0, Chapter 11)</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Step 1:</strong> Analyze higher headquarters' mission and intent</p>
                  <p style="margin: 0 0 6px 0;"><strong>Step 2:</strong> Determine specified, implied, and essential tasks</p>
                  <p style="margin: 0 0 6px 0;"><strong>Step 3:</strong> Review available assets and identify resource shortfalls</p>
                  <p style="margin: 0 0 6px 0;"><strong>Step 4:</strong> Determine constraints and restraints</p>
                  <p style="margin: 0 0 6px 0;"><strong>Step 5:</strong> Identify critical facts and assumptions</p>
                  <p style="margin: 0;"><strong>Step 6:</strong> Conduct initial risk assessment</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Higher Commander's Intent Analysis</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Purpose:</strong> Why the operation is being conducted</p>
                  <p style="margin: 0 0 6px 0;"><strong>Method:</strong> How the commander envisions the operation unfolding</p>
                  <p style="margin: 0 0 6px 0;"><strong>End State:</strong> Desired conditions at mission completion</p>
                  <p style="margin: 0 0 6px 0;"><strong>Key Tasks:</strong> Essential tasks that must be accomplished</p>
                  <p style="margin: 0 0 6px 0;"><strong>Risk Guidance:</strong> Acceptable risk and mitigation measures</p>
                  <p style="margin: 0;"><strong>Priorities:</strong> Main effort and supporting effort priorities</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">European Theater LSCO Considerations</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Multi-Domain Operations:</strong> Land, air, maritime, space, cyberspace integration<br>
                  <strong>Coalition Coordination:</strong> NATO Article 5 and bilateral agreements<br>
                  <strong>Host Nation Support:</strong> European partner nation capabilities and constraints<br>
                  <strong>Strategic Communications:</strong> Information operations and narrative management
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2: IPB & METT-TC Analysis -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-globe" style="margin-right: 8px; color: #10b981; font-size: 14px;"></i>
                IPB & METT-TC Analysis
              </h4>

              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Intelligence Preparation of the Battlefield (IPB)</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Step 1:</strong> Define the operational environment</p>
                  <p style="margin: 0 0 6px 0;"><strong>Step 2:</strong> Describe environmental effects on operations</p>
                  <p style="margin: 0 0 6px 0;"><strong>Step 3:</strong> Evaluate the threat</p>
                  <p style="margin: 0 0 6px 0;"><strong>Step 4:</strong> Determine threat courses of action</p>
                  <p style="margin: 0 0 6px 0;"><strong>Products:</strong> Modified combined obstacle overlay (MCOO)</p>
                  <p style="margin: 0;"><strong>Analysis:</strong> Avenue of approach and mobility corridors</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">METT-TC Analysis Framework</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Mission:</strong> Task and purpose analysis, essential tasks identification</p>
                  <p style="margin: 0 0 6px 0;"><strong>Enemy:</strong> Threat capabilities, COAs, and decision points</p>
                  <p style="margin: 0 0 6px 0;"><strong>Terrain and Weather:</strong> OAKOC analysis and weather effects</p>
                  <p style="margin: 0 0 6px 0;"><strong>Troops and Support Available:</strong> Force structure and capabilities</p>
                  <p style="margin: 0 0 6px 0;"><strong>Time Available:</strong> Planning time and execution timelines</p>
                  <p style="margin: 0;"><strong>Civil Considerations:</strong> ASCOPE analysis and civil-military operations</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">European Theater IPB Considerations</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Terrain:</strong> Urban terrain, river systems, and defensive positions<br>
                  <strong>Weather:</strong> Seasonal considerations and operational windows<br>
                  <strong>Infrastructure:</strong> Transportation networks and logistics hubs<br>
                  <strong>Population:</strong> Civilian evacuation and protection requirements
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Critical Information Requirements & Intelligence -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-eye" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
                Critical Information Requirements & Intelligence
              </h4>

              <div style="background-color: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Commander's Critical Information Requirements (CCIR)</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Priority Intelligence Requirements (PIR):</strong> Enemy information needed for decision making</p>
                  <p style="margin: 0 0 6px 0;"><strong>Friendly Force Information Requirements (FFIR):</strong> Friendly force status information</p>
                  <p style="margin: 0 0 6px 0;"><strong>Essential Elements of Friendly Information (EEFI):</strong> Information to protect</p>
                  <p style="margin: 0 0 6px 0;"><strong>Request for Information (RFI):</strong> Specific intelligence requests</p>
                  <p style="margin: 0 0 6px 0;"><strong>Named Areas of Interest (NAI):</strong> Geographic areas for intelligence collection</p>
                  <p style="margin: 0;"><strong>Target Areas of Interest (TAI):</strong> Areas where targets may be engaged</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Intelligence Collection Management</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Collection Plan:</strong> ISR asset tasking and synchronization</p>
                  <p style="margin: 0 0 6px 0;"><strong>Collection Matrix:</strong> PIR to collection asset mapping</p>
                  <p style="margin: 0 0 6px 0;"><strong>Synchronization Matrix:</strong> Collection timeline and decision points</p>
                  <p style="margin: 0 0 6px 0;"><strong>Intelligence Oversight:</strong> Legal and policy compliance</p>
                  <p style="margin: 0 0 6px 0;"><strong>Dissemination Plan:</strong> Intelligence sharing and distribution</p>
                  <p style="margin: 0;"><strong>Assessment Criteria:</strong> Intelligence evaluation standards</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">European Theater Intelligence Considerations</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Multi-Source Intelligence:</strong> HUMINT, SIGINT, GEOINT, OSINT integration<br>
                  <strong>Coalition Intelligence:</strong> NATO intelligence sharing and Five Eyes coordination<br>
                  <strong>Counterintelligence:</strong> OPSEC and force protection measures<br>
                  <strong>Cyber Intelligence:</strong> Cyber threat assessment and attribution
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Constraints, Restraints & Risk Assessment -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-exclamation-triangle" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
                Constraints, Restraints & Risk Assessment
              </h4>

              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Constraints and Restraints Analysis</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Constraints:</strong> Requirements that must be accomplished (positive requirements)</p>
                  <p style="margin: 0 0 6px 0;"><strong>Restraints:</strong> Prohibitions or limitations on action (negative requirements)</p>
                  <p style="margin: 0 0 6px 0;"><strong>Legal Constraints:</strong> ROE, international law, and policy limitations</p>
                  <p style="margin: 0 0 6px 0;"><strong>Resource Constraints:</strong> Personnel, equipment, and logistical limitations</p>
                  <p style="margin: 0 0 6px 0;"><strong>Time Constraints:</strong> Planning and execution timeline limitations</p>
                  <p style="margin: 0;"><strong>Geographic Constraints:</strong> Terrain and boundary limitations</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Initial Risk Assessment Framework</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Risk Identification:</strong> Hazard identification and threat assessment</p>
                  <p style="margin: 0 0 6px 0;"><strong>Risk Assessment:</strong> Probability and severity analysis</p>
                  <p style="margin: 0 0 6px 0;"><strong>Risk Mitigation:</strong> Control measures and risk reduction strategies</p>
                  <p style="margin: 0 0 6px 0;"><strong>Risk Acceptance:</strong> Commander's risk tolerance and acceptance criteria</p>
                  <p style="margin: 0 0 6px 0;"><strong>Risk Communication:</strong> Risk reporting and information sharing</p>
                  <p style="margin: 0;"><strong>Risk Monitoring:</strong> Continuous assessment and adjustment</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #f59e0b;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">European Theater Risk Considerations</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Political Risk:</strong> Coalition cohesion and host nation relations<br>
                  <strong>Operational Risk:</strong> Force protection and mission accomplishment<br>
                  <strong>Strategic Risk:</strong> Escalation control and strategic objectives<br>
                  <strong>Information Risk:</strong> Information operations and strategic communications
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Mission Analysis Doctrinal Framework -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <h3 style="color: #60a5fa; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-book" style="margin-right: 8px;"></i>
            Mission Analysis Doctrinal Framework
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #60a5fa;">
              <h4 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Mission Statement Development</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Task and purpose identification</li>
                <li>Who, what, when, where, why analysis</li>
                <li>Essential task determination</li>
                <li>Mission statement refinement</li>
                <li>Commander's intent development</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #60a5fa;">
              <h4 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Operational Environment Analysis</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>METT-TC comprehensive analysis</li>
                <li>IPB four-step process</li>
                <li>Threat course of action development</li>
                <li>Terrain and weather analysis</li>
                <li>Civil considerations assessment</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #60a5fa;">
              <h4 style="color: #93c5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Planning Guidance Development</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Initial commander's intent</li>
                <li>Planning guidance and priorities</li>
                <li>CCIR and intelligence requirements</li>
                <li>Risk guidance and mitigation</li>
                <li>Timeline and decision points</li>
              </ul>
            </div>
          </div>

          <!-- Comprehensive Mission Analysis Process -->
          <div style="background-color: #374151; padding: 16px; border-radius: 6px; border-left: 3px solid #60a5fa; margin-bottom: 16px;">
            <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
              <i class="fas fa-cogs" style="margin-right: 8px;"></i>
              Comprehensive Mission Analysis Process (FM 5-0, Chapter 11)
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <h5 style="color: #60a5fa; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Analysis Steps 1-6</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Step 1:</strong> Analyze higher headquarters' mission and intent</li>
                  <li><strong>Step 2:</strong> Determine specified, implied, and essential tasks</li>
                  <li><strong>Step 3:</strong> Review available assets and identify resource shortfalls</li>
                  <li><strong>Step 4:</strong> Determine constraints and restraints</li>
                  <li><strong>Step 5:</strong> Identify critical facts and assumptions</li>
                  <li><strong>Step 6:</strong> Conduct initial risk assessment</li>
                </ul>
              </div>
              <div>
                <h5 style="color: #60a5fa; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Analysis Steps 7-12</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Step 7:</strong> Determine initial CCIR and EEFI</li>
                  <li><strong>Step 8:</strong> Determine the initial reconnaissance annex</li>
                  <li><strong>Step 9:</strong> Plan use of available time</li>
                  <li><strong>Step 10:</strong> Write the initial commander's intent</li>
                  <li><strong>Step 11:</strong> Write the initial planning guidance</li>
                  <li><strong>Step 12:</strong> Conduct mission analysis briefing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Task Identification and Analysis -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-list-check" style="margin-right: 8px;"></i>
            Task Identification and Analysis Framework
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
              <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Specified Tasks</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Definition:</strong> Tasks specifically assigned by higher headquarters</li>
                <li><strong>Source:</strong> Mission statement, OPORD, and fragmentary orders</li>
                <li><strong>Analysis:</strong> Direct extraction from higher headquarters' guidance</li>
                <li><strong>Documentation:</strong> Task list with source references</li>
                <li><strong>Verification:</strong> Confirmation with higher headquarters if unclear</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
              <h4 style="color: #6ee7b7; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Implied Tasks</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Definition:</strong> Tasks not explicitly stated but necessary for mission success</li>
                <li><strong>Source:</strong> Analysis of specified tasks and operational environment</li>
                <li><strong>Analysis:</strong> Logical deduction from mission requirements</li>
                <li><strong>Documentation:</strong> Task list with justification for inclusion</li>
                <li><strong>Validation:</strong> Staff review and commander approval</li>
              </ul>
            </div>
          </div>

          <div style="background-color: #374151; padding: 16px; border-radius: 6px; border-left: 3px solid #10b981;">
            <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Essential Tasks Determination</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <h5 style="color: #10b981; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Essential Task Criteria</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Mission Critical:</strong> Failure prevents mission accomplishment</li>
                  <li><strong>Commander's Intent:</strong> Directly supports commander's intent</li>
                  <li><strong>Higher Purpose:</strong> Essential to higher headquarters' mission</li>
                  <li><strong>Risk Mitigation:</strong> Critical for force protection</li>
                  <li><strong>Time Sensitive:</strong> Must be accomplished within specific timeframe</li>
                </ul>
              </div>
              <div>
                <h5 style="color: #10b981; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Task Prioritization Process</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Priority 1:</strong> Essential tasks for mission accomplishment</li>
                  <li><strong>Priority 2:</strong> Important tasks that enhance mission success</li>
                  <li><strong>Priority 3:</strong> Supporting tasks that provide additional capability</li>
                  <li><strong>Resource Allocation:</strong> Priority-based resource distribution</li>
                  <li><strong>Risk Assessment:</strong> Task failure impact analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Timeline Analysis and Decision Points -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <h3 style="color: #8b5cf6; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-clock" style="margin-right: 8px;"></i>
            Timeline Analysis and Decision Points
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #8b5cf6;">
              <h4 style="color: #c4b5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Available Planning Time Analysis</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Total Available Time:</strong> From mission receipt to execution</li>
                <li><strong>Planning Time Allocation:</strong> 1/3 rule for planning distribution</li>
                <li><strong>Mission Analysis Time:</strong> 1/3 of total planning time</li>
                <li><strong>COA Development Time:</strong> Remaining planning time allocation</li>
                <li><strong>Subordinate Planning Time:</strong> Time available for subordinate units</li>
                <li><strong>Rehearsal Time:</strong> Time allocated for rehearsals and preparation</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #8b5cf6;">
              <h4 style="color: #c4b5fd; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Decision Point Identification</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Critical Decision Points:</strong> Points requiring commander's decision</li>
                <li><strong>Branch Points:</strong> Points where alternate plans may be executed</li>
                <li><strong>Sequel Points:</strong> Points where follow-on operations begin</li>
                <li><strong>Information Requirements:</strong> Information needed at decision points</li>
                <li><strong>Decision Criteria:</strong> Factors influencing decision making</li>
                <li><strong>Timeline Integration:</strong> Decision points on operational timeline</li>
              </ul>
            </div>
          </div>

          <div style="background-color: #374151; padding: 16px; border-radius: 6px; border-left: 3px solid #8b5cf6;">
            <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">Planning Timeline Framework</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <h5 style="color: #8b5cf6; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">MDMP Timeline Allocation</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Receipt of Mission:</strong> 5% of available planning time</li>
                  <li><strong>Mission Analysis:</strong> 25% of available planning time</li>
                  <li><strong>COA Development:</strong> 20% of available planning time</li>
                  <li><strong>COA Analysis:</strong> 30% of available planning time</li>
                  <li><strong>COA Comparison:</strong> 5% of available planning time</li>
                  <li><strong>COA Approval:</strong> 5% of available planning time</li>
                  <li><strong>Orders Production:</strong> 10% of available planning time</li>
                </ul>
              </div>
              <div>
                <h5 style="color: #8b5cf6; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Parallel Planning Considerations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Concurrent Activities:</strong> Parallel staff planning processes</li>
                  <li><strong>Subordinate Unit Planning:</strong> Time for subordinate MDMP</li>
                  <li><strong>Coordination Requirements:</strong> Inter-unit coordination time</li>
                  <li><strong>Resource Preparation:</strong> Logistics and support preparation</li>
                  <li><strong>Intelligence Collection:</strong> Ongoing intelligence operations</li>
                  <li><strong>Rehearsal Planning:</strong> Rehearsal preparation and execution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Doctrinal Takeaways -->
        <div style="background-color: rgba(96, 165, 250, 0.1); border: 1px solid #60a5fa; border-radius: 8px; padding: 16px;">
          <h3 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-key" style="margin-right: 8px;"></i>
            Mission Analysis - Key Doctrinal Takeaways
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <h4 style="color: #60a5fa; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Mission Analysis Imperatives</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li>Comprehensive understanding of higher headquarters' mission and intent</li>
                <li>Thorough analysis of operational environment through IPB and METT-TC</li>
                <li>Systematic identification of specified, implied, and essential tasks</li>
                <li>Development of CCIR and intelligence collection requirements</li>
                <li>Initial risk assessment and constraint/restraint analysis</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #60a5fa; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Mission Analysis Products</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li>Refined mission statement and initial commander's intent</li>
                <li>IPB products and METT-TC analysis</li>
                <li>CCIR, PIR, FFIR, and intelligence collection plan</li>
                <li>Initial risk assessment and mitigation measures</li>
                <li>Planning guidance and timeline for COA development</li>
              </ul>
            </div>
          </div>
        </div>

      </div>`;
  }
};
