/**
 * OPORD Mission - Detailed Analysis (Placeholder)
 * Mirrors Situation Detailed Analysis layout with generic content
 */

export const detailedAnalysisModule = {
  id: 'mission-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <div id="mission-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-search" style="margin-right:8px; color:#60a5fa; font-size:16px;"></i>
            2. Mission — Detailed Analysis
          </h3>

        </div>

        <!-- 2x2 Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:0; align-items:stretch;">
          <!-- Card 1: Mission Statement (5Ws) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; display:flex; flex-direction:column; min-height:240px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-bullseye" style="margin-right:8px; color:#10b981; font-size:12px;"></i>
                Mission Statement (5Ws)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Mission statement expresses <em>Who, What, When, Where, Why</em>—unit, tactical task, time, location, and purpose linked to higher intent.
              </p>
              <div style="background-color:rgba(16, 185, 129, 0.1); padding:10px; border-radius:6px; border:1px solid #10b981; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Essential Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>WHO:</strong> Unit by doctrinal designation.</li>
                  <li><strong>WHAT:</strong> Tactical task (doctrinal verb).</li>
                  <li><strong>WHEN:</strong> Time (DTG/event).</li>
                  <li><strong>WHERE:</strong> AO/OBJ/control measures (grids as reqd).</li>
                  <li><strong>WHY:</strong> Purpose linked to higher intent.</li>
                </ul>
              </div>

            </div>
          </div>

          <!-- Card 2: Commander’s Intent & Mission Command Principles -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; display:flex; flex-direction:column; min-height:240px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-compass" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
                Commander’s Intent & Mission Command
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Commander’s intent: purpose, key tasks, end state. Mission command: empower disciplined initiative through mission orders.
              </p>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background-color:rgba(30, 58, 138, 0.2); border:1px solid #2563eb; border-radius:6px; padding:8px;">
                  <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Commander’s Intent</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>Purpose:</strong> Why; links to higher HQ intent.</li>
                    <li><strong>Key Tasks:</strong> Must-do actions.</li>
                    <li><strong>End State:</strong> Desired conditions (friendly/enemy/terrain/civil).</li>
                  </ul>
                </div>
                <div style="background-color:#374151; border-radius:6px; padding:8px; border-left:3px solid #60a5fa;">
                  <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Mission Command Principles</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Mutual trust</li>
                    <li>Shared understanding</li>
                    <li>Clear intent</li>
                    <li>Disciplined initiative</li>
                    <li>Mission orders</li>
                    <li>Prudent risk</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          <!-- Card 3: Task Organization (TO&E / Command Relationships) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; display:flex; flex-direction:column; min-height:240px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Task Organization & Command Relationships
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Show organization for combat (O/O, ATCH, OPCON, TACON, DS/GS); identify main/supporting efforts, reserve, security forces, and key enablers.
              </p>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:8px;">
                  <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:4px;">Command & Support</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>Main Effort:</strong> Primary axis; priority support.</li>
                    <li><strong>Supporting Efforts:</strong> Enable main effort; protection/screen as assigned.</li>
                    <li><strong>Reserve:</strong> On-order tasks; designated composition.</li>
                    <li><strong>Fires:</strong> DS/GS priorities; priority targets by phase.</li>
                  </ul>
                </div>
                <div style="background-color:#374151; border-radius:6px; padding:8px; border-left:3px solid #f59e0b;">
                  <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Relationships & Effective Times</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>DS/GS/OPCON/TACON/ATCH relationships clearly stated.</li>
                    <li>Effective times and release conditions published.</li>
                    <li>Critical enablers (ENG/ADA/ISR/MEDEVAC) placement defined.</li>
                  </ul>
                </div>
              </div>
              <div style="background-color:#111827; padding:12px; border-radius:6px; border:1px dashed #374151; margin-top:10px;">
                <div style="color:#9ca3af; font-size:12px; margin-bottom:6px;">Notes (UNCLASSIFIED):</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.6; margin:0; padding-left:16px;">
                  <li>Show attachments/detachments with effective time; align priorities of support (fires, ENG, sustainment).</li>
                  <li>Highlight CCIR-driven shifts in priority (e.g., PIR 1 satisfied → transition reserve).</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 4: Coordinating Instructions & Constraints -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; display:flex; flex-direction:column; min-height:240px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-clipboard-list" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
                Coordinating Instructions & Constraints
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Publish constraints (must/must-not), control measures, and unit-wide instructions that synchronize subordinates; include CCIR, risk, and reporting.
              </p>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background-color:rgba(139, 92, 246, 0.1); border:1px solid #8b5cf6; border-radius:6px; padding:8px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Constraints</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>Must Do:</strong> Directed actions; retained forces.</li>
                    <li><strong>Must Not:</strong> Prohibited actions or conditions.</li>
                    <li><strong>ROE:</strong> PID/CDE; special authorities; NLW as authorized.</li>
                  </ul>
                </div>
                <div style="background-color:#374151; border-radius:6px; padding:8px; border-left:3px solid #8b5cf6;">
                  <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Coordinating Instructions</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>CCIR:</strong> PIR/FFIR/EEFI—tied to decisions and ISR tasks.</li>
                    <li><strong>Control Measures:</strong> OBJ/PL/RFL/NFA/CFL—by phase.</li>
                    <li><strong>ISR:</strong> NAI/TAI coverage; reporting standards.</li>
                    <li><strong>Assumptions:</strong> Key unknowns guiding planning; validate early.</li>
                    <li><strong>Timeline:</strong> LD/REHEARSALS/WARNOs with times.</li>
                  </ul>
                </div>
              </div>
              <div style="background-color:#111827; padding:12px; border-radius:6px; border:1px dashed #374151; margin-top:10px;">
                <div style="color:#9ca3af; font-size:12px; margin-bottom:6px;">Analytical Frameworks (UNCLASSIFIED):</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.6; margin:0; padding-left:16px;">
                  <li>Derive <strong>specified</strong>, <strong>implied</strong>, and <strong>essential</strong> tasks from higher HQ order and enemy COAs.</li>
                  <li>Identify/validate <strong>constraints</strong>; propose mitigation via FRAGOs and control measures.</li>
                  <li>Develop initial <strong>CCIR</strong> (PIR/FFIR/EEFI); link to decision points and ISR tasking.</li>
                  <li>Refine <strong>assumptions</strong> and acceptable <strong>risk</strong>; update risk controls in coordinating instructions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  initialize() { return true; }
};

