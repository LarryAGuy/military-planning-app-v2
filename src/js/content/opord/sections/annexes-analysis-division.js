/**
 * OPORD Annexes - Division Level Echelon Analysis
 * Tactical-operational annex planning and coordination for Division operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive tactical-operational doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-division-analysis-section" style="margin-bottom:24px;">
        <!-- Division Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-chess-king" style="margin-right:8px; color:#dc2626; font-size:16px;"></i>
            Division Level — Multi-Brigade Annex Coordination
          </h3>
        </div>

        <!-- Division Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-bishop" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
            Division-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Division-level annexes coordinate multiple brigade operations within an assigned area, providing tactical-operational direction
            while enabling tactical execution. Division headquarters synchronizes brigade-level annexes and integrates division assets.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(220, 38, 38, 0.1); padding:8px; border-radius:6px; border:1px solid #dc2626;">
              <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical-Operational Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-brigade operations across division area</div>
            </div>
            <div style="background-color:rgba(220, 38, 38, 0.1); padding:8px; border-radius:6px; border:1px solid #dc2626;">
              <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Division Headquarters, Tactical Command</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Division Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Division) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Division Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Division-level task organization coordinating multiple brigades, division assets, and supporting capabilities across the division area.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Division Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multiple brigade combat teams (2-4 BCTs)</li>
                  <li>Division artillery (DIVARTY)</li>
                  <li>Division sustainment brigade</li>
                  <li>Combat aviation brigade</li>
                  <li>Division enabling capabilities</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OPCON to brigades, TACON for enabling capabilities, division asset coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Division) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Division Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Division-level intelligence coordination across multiple brigade areas, integrating tactical intelligence and providing brigade intelligence support.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Division Intelligence Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-brigade intelligence fusion</li>
                  <li>Division intelligence coordination</li>
                  <li>Tactical IPB development</li>
                  <li>Brigade intelligence support</li>
                  <li>Division reconnaissance coordination</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Intelligence</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Division PIR, brigade intelligence coordination, and tactical intelligence integration</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Division) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Division Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Division-level operational coordination across multiple brigade areas, establishing tactical framework and synchronizing brigade operations.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Division Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Brigade boundaries and sectors</li>
                  <li>Division coordination lines</li>
                  <li>Tactical objectives</li>
                  <li>Phase lines and checkpoints</li>
                  <li>Division reserve positioning</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Brigade synchronization, tactical objectives, and division asset employment</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Division) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Division Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Division-level fires coordination across multiple brigades, integrating DIVARTY assets and providing tactical fires support.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Division Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-brigade fires coordination</li>
                  <li>DIVARTY operations</li>
                  <li>Tactical fires planning</li>
                  <li>Brigade fires support</li>
                  <li>Division target development</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Fires</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Division target priorities, tactical effects, and brigade fires coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Additional Division Annexes (Condensed Format) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Annexes E-H (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes E-H — Division Support Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#8b5cf6;">E - Protection:</strong> Multi-brigade protection coordination, division force protection</div>
              <div style="margin-bottom:8px;"><strong style="color:#059669;">F - Sustainment:</strong> Division sustainment brigade, brigade logistics support</div>
              <div style="margin-bottom:8px;"><strong style="color:#d97706;">G - Engineer:</strong> Division engineer battalion, tactical mobility support</div>
              <div><strong style="color:#0ea5e9;">H - Air Defense:</strong> Division air defense coordination, brigade ADA support</div>
            </div>
          </div>

          <!-- Annexes I-L (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes I-L — Division Coordination Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#ec4899;">I - Information Operations:</strong> Multi-brigade information coordination</div>
              <div style="margin-bottom:8px;"><strong style="color:#06b6d4;">J - Public Affairs:</strong> Division public affairs, tactical communications</div>
              <div style="margin-bottom:8px;"><strong style="color:#84cc16;">K - Civil Affairs:</strong> Division civil affairs coordination, brigade CA support</div>
              <div><strong style="color:#f97316;">L - Reconnaissance:</strong> Division ISR coordination, brigade reconnaissance support</div>
            </div>
          </div>

          <!-- Annex T and Division Summary -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">
              <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
              Annex T — Division CEMA
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              Division-level cyber electromagnetic activities coordinating brigade CEMA operations and tactical-level electronic warfare.
            </div>
          </div>

          <!-- Division Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0;">
              <i class="fas fa-chess-bishop" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
              Division Tactical Coordination
            </h4>
            <div style="color:#e0e7ff; font-size:12px; line-height:1.4;">
              Division-level annexes coordinate multiple brigades to achieve tactical objectives while enabling tactical execution for subordinate commands.
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Division Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Division-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Division Command and Control</div>
            <div style="margin-bottom:4px;">FM 3-0 (Oct 2022), Chapter 4 — Division Operations</div>
            <div style="margin-bottom:4px;">FM 4-0 (Jul 2019), Chapter 4 — Division Sustainment Operations</div>
            <div>ADP 3-0 (Jul 2019), Chapter 4 — Tactical Environment</div>
          </div>
        </div>

      </div>
    `;
  }
};
