/**
 * OPORD Annexes - Battalion Level Echelon Analysis
 * Tactical annex planning and coordination for Battalion operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive tactical doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-battalion-analysis-section" style="margin-bottom:24px;">
        <!-- Battalion Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-flag" style="margin-right:8px; color:#f59e0b; font-size:16px;"></i>
            Battalion Level — Multi-Company Annex Coordination
          </h3>
        </div>

        <!-- Battalion Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-pawn" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
            Battalion-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Battalion-level annexes coordinate multiple company operations within an assigned area, providing tactical direction
            while enabling tactical execution. Battalion headquarters synchronizes company-level annexes and integrates battalion assets.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(245, 158, 11, 0.1); padding:8px; border-radius:6px; border:1px solid #f59e0b;">
              <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-company operations across battalion area</div>
            </div>
            <div style="background-color:rgba(245, 158, 11, 0.1); padding:8px; border-radius:6px; border:1px solid #f59e0b;">
              <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Battalion Task Force, Tactical Command</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Battalion Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Battalion) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Battalion Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Battalion-level task organization coordinating multiple companies, battalion assets, and supporting capabilities across the battalion area.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Battalion Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multiple company teams (3-5 companies)</li>
                  <li>Battalion headquarters company</li>
                  <li>Battalion support company</li>
                  <li>Battalion mortar section</li>
                  <li>Attached supporting elements</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OPCON to companies, TACON for supporting elements, battalion asset coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Battalion) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Battalion Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Battalion-level intelligence coordination across multiple company areas, integrating tactical intelligence and providing company intelligence support.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Battalion Intelligence Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-company intelligence fusion</li>
                  <li>Battalion intelligence coordination</li>
                  <li>Tactical IPB development</li>
                  <li>Company intelligence support</li>
                  <li>Battalion reconnaissance coordination</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Intelligence</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Battalion PIR, company intelligence coordination, and tactical intelligence integration</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Battalion) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Battalion Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Battalion-level operational coordination across multiple company areas, establishing tactical framework and synchronizing company operations.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Battalion Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Company boundaries and sectors</li>
                  <li>Battalion coordination lines</li>
                  <li>Tactical objectives</li>
                  <li>Phase lines and checkpoints</li>
                  <li>Battalion reserve positioning</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Company synchronization, tactical objectives, and battalion asset employment</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Battalion) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Battalion Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Battalion-level fires coordination across multiple companies, integrating battalion fires assets and providing tactical fires support.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Battalion Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-company fires coordination</li>
                  <li>Battalion mortar section operations</li>
                  <li>Tactical fires planning</li>
                  <li>Company fires support</li>
                  <li>Battalion target development</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Fires</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Battalion target priorities, tactical effects, and company fires coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Additional Battalion Annexes (Condensed Format) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Annexes E-H (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes E-H — Battalion Support Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#8b5cf6;">E - Protection:</strong> Multi-company protection coordination, battalion force protection</div>
              <div style="margin-bottom:8px;"><strong style="color:#059669;">F - Sustainment:</strong> Battalion support company, company logistics support</div>
              <div style="margin-bottom:8px;"><strong style="color:#d97706;">G - Engineer:</strong> Battalion engineer platoon, tactical mobility support</div>
              <div><strong style="color:#0ea5e9;">H - Air Defense:</strong> Battalion air defense coordination, company ADA support</div>
            </div>
          </div>

          <!-- Annexes I-L (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes I-L — Battalion Coordination Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#ec4899;">I - Information Operations:</strong> Multi-company information coordination</div>
              <div style="margin-bottom:8px;"><strong style="color:#06b6d4;">J - Public Affairs:</strong> Battalion public affairs, tactical communications</div>
              <div style="margin-bottom:8px;"><strong style="color:#84cc16;">K - Civil Affairs:</strong> Battalion civil affairs coordination, company CA support</div>
              <div><strong style="color:#f97316;">L - Reconnaissance:</strong> Battalion reconnaissance platoon, company reconnaissance support</div>
            </div>
          </div>

          <!-- Annex T and Battalion Summary -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">
              <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
              Annex T — Battalion CEMA
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              Battalion-level cyber electromagnetic activities coordinating company CEMA operations and tactical-level electronic warfare.
            </div>
          </div>

          <!-- Battalion Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0;">
              <i class="fas fa-chess-pawn" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
              Battalion Tactical Coordination
            </h4>
            <div style="color:#e0e7ff; font-size:12px; line-height:1.4;">
              Battalion-level annexes coordinate multiple companies to achieve tactical objectives while enabling tactical execution for subordinate commands.
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Battalion Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Battalion-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Battalion Command and Control</div>
            <div style="margin-bottom:4px;">FM 3-0 (Oct 2022), Chapter 8 — Battalion Operations</div>
            <div style="margin-bottom:4px;">FM 4-0 (Jul 2019), Chapter 8 — Battalion Sustainment Operations</div>
            <div>ATP 3-21.20 (Apr 2017), Infantry Battalion Operations</div>
          </div>
        </div>

      </div>
    `;
  }
};
