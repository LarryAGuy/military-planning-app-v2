/**
 * OPORD Annexes - Brigade Level Echelon Analysis
 * Operational-tactical annex planning and coordination for Brigade operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive operational doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-brigade-analysis-section" style="margin-bottom:24px;">
        <!-- Brigade Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-chess-rook" style="margin-right:8px; color:#16a34a; font-size:16px;"></i>
            Brigade Level — Multi-Battalion Annex Coordination
          </h3>
        </div>

        <!-- Brigade Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
            Brigade-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Brigade-level annexes coordinate multiple battalion operations within an assigned area, providing operational-tactical direction
            while enabling tactical execution. Brigade headquarters synchronizes battalion-level annexes and integrates brigade assets.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(22, 163, 74, 0.1); padding:8px; border-radius:6px; border:1px solid #16a34a;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Operational-Tactical Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-battalion operations across brigade area</div>
            </div>
            <div style="background-color:rgba(22, 163, 74, 0.1); padding:8px; border-radius:6px; border:1px solid #16a34a;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Brigade Combat Team, Operational Command</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Brigade Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Brigade) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Brigade Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Brigade-level task organization coordinating multiple battalions, brigade assets, and supporting capabilities across the brigade area.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Brigade Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multiple battalion task forces (2-4 battalions)</li>
                  <li>Brigade fires battalion</li>
                  <li>Brigade support battalion</li>
                  <li>Brigade reconnaissance squadron</li>
                  <li>Brigade enabling capabilities</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OPCON to battalions, TACON for enabling capabilities, brigade asset coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Brigade) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Brigade Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Brigade-level intelligence coordination across multiple battalion areas, integrating tactical intelligence and providing battalion intelligence support.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Brigade Intelligence Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-battalion intelligence fusion</li>
                  <li>Brigade intelligence coordination</li>
                  <li>Tactical IPB development</li>
                  <li>Battalion intelligence support</li>
                  <li>Brigade reconnaissance coordination</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Intelligence</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Brigade PIR, battalion intelligence coordination, and tactical intelligence integration</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Brigade) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Brigade Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Brigade-level operational coordination across multiple battalion areas, establishing tactical framework and synchronizing battalion operations.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Brigade Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Battalion boundaries and sectors</li>
                  <li>Brigade coordination lines</li>
                  <li>Tactical objectives</li>
                  <li>Phase lines and checkpoints</li>
                  <li>Brigade reserve positioning</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Battalion synchronization, tactical objectives, and brigade asset employment</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Brigade) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Brigade Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Brigade-level fires coordination across multiple battalions, integrating brigade fires assets and providing tactical fires support.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Brigade Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-battalion fires coordination</li>
                  <li>Brigade fires battalion operations</li>
                  <li>Tactical fires planning</li>
                  <li>Battalion fires support</li>
                  <li>Brigade target development</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Fires</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Brigade target priorities, tactical effects, and battalion fires coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Additional Brigade Annexes (Condensed Format) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Annexes E-H (Brigade Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes E-H — Brigade Support Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#8b5cf6;">E - Protection:</strong> Multi-battalion protection coordination, brigade force protection</div>
              <div style="margin-bottom:8px;"><strong style="color:#059669;">F - Sustainment:</strong> Brigade support battalion, battalion logistics support</div>
              <div style="margin-bottom:8px;"><strong style="color:#d97706;">G - Engineer:</strong> Brigade engineer company, tactical mobility support</div>
              <div><strong style="color:#0ea5e9;">H - Air Defense:</strong> Brigade air defense coordination, battalion ADA support</div>
            </div>
          </div>

          <!-- Annexes I-L (Brigade Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes I-L — Brigade Coordination Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#ec4899;">I - Information Operations:</strong> Multi-battalion information coordination</div>
              <div style="margin-bottom:8px;"><strong style="color:#06b6d4;">J - Public Affairs:</strong> Brigade public affairs, tactical communications</div>
              <div style="margin-bottom:8px;"><strong style="color:#84cc16;">K - Civil Affairs:</strong> Brigade civil affairs coordination, battalion CA support</div>
              <div><strong style="color:#f97316;">L - Reconnaissance:</strong> Brigade reconnaissance squadron, battalion reconnaissance support</div>
            </div>
          </div>

          <!-- Annex T and Brigade Summary -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">
              <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
              Annex T — Brigade CEMA
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              Brigade-level cyber electromagnetic activities coordinating battalion CEMA operations and tactical-level electronic warfare.
            </div>
          </div>

          <!-- Brigade Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0;">
              <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
              Brigade Tactical Coordination
            </h4>
            <div style="color:#e0e7ff; font-size:12px; line-height:1.4;">
              Brigade-level annexes coordinate multiple battalions to achieve tactical objectives while enabling tactical execution for subordinate commands.
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Brigade Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Brigade-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Brigade Command and Control</div>
            <div style="margin-bottom:4px;">FM 3-0 (Oct 2022), Chapter 5 — Brigade Operations</div>
            <div style="margin-bottom:4px;">FM 4-0 (Jul 2019), Chapter 5 — Brigade Sustainment Operations</div>
            <div>ATP 3-90.5 (Jan 2016), Brigade Combat Team Operations</div>
          </div>
        </div>

      </div>
    `;
  }
};
