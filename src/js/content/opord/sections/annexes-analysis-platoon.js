/**
 * OPORD Annexes - Platoon Level Echelon Analysis
 * Tactical annex planning and coordination for Platoon operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive tactical doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-platoon-analysis-section" style="margin-bottom:24px;">
        <!-- Platoon Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-users" style="margin-right:8px; color:#16a34a; font-size:16px;"></i>
            Platoon Level — Multi-Squad Annex Coordination
          </h3>
        </div>

        <!-- Platoon Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-user-shield" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
            Platoon-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Platoon-level annexes coordinate multiple squad operations within an assigned area, providing tactical direction
            while enabling tactical execution. Platoon headquarters synchronizes squad-level operations and integrates platoon assets.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(22, 163, 74, 0.1); padding:8px; border-radius:6px; border:1px solid #16a34a;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-squad operations across platoon area</div>
            </div>
            <div style="background-color:rgba(22, 163, 74, 0.1); padding:8px; border-radius:6px; border:1px solid #16a34a;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Platoon, Small Unit Tactical Command</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Platoon Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Platoon) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Platoon Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Platoon-level task organization coordinating multiple squads, platoon assets, and supporting capabilities across the platoon area.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Platoon Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multiple squads (3-4 squads)</li>
                  <li>Platoon headquarters element</li>
                  <li>Platoon weapons squad</li>
                  <li>Platoon support elements</li>
                  <li>Attached supporting elements</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Direct command of squads, platoon asset coordination, supporting element integration</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Platoon) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Platoon Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Platoon-level intelligence coordination across multiple squad areas, integrating tactical intelligence and providing squad intelligence support.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Platoon Intelligence Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-squad intelligence fusion</li>
                  <li>Platoon intelligence coordination</li>
                  <li>Tactical IPB development</li>
                  <li>Squad intelligence support</li>
                  <li>Platoon reconnaissance coordination</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Intelligence</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Platoon PIR, squad intelligence coordination, and tactical intelligence integration</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Platoon) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Platoon Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Platoon-level operational coordination across multiple squad areas, establishing tactical framework and synchronizing squad operations.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Platoon Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Squad boundaries and sectors</li>
                  <li>Platoon coordination lines</li>
                  <li>Tactical objectives</li>
                  <li>Phase lines and checkpoints</li>
                  <li>Platoon asset positioning</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Squad synchronization, tactical objectives, and platoon asset employment</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Platoon) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Platoon Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Platoon-level fires coordination across multiple squads, integrating platoon fires assets and providing tactical fires support.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Platoon Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-squad fires coordination</li>
                  <li>Platoon weapons squad operations</li>
                  <li>Tactical fires planning</li>
                  <li>Squad fires support</li>
                  <li>Platoon target development</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Fires</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Platoon target priorities, tactical effects, and squad fires coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Additional Platoon Annexes (Condensed Format) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Annexes E-H (Platoon Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes E-H — Platoon Support Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#8b5cf6;">E - Protection:</strong> Multi-squad protection coordination, platoon force protection</div>
              <div style="margin-bottom:8px;"><strong style="color:#059669;">F - Sustainment:</strong> Platoon support elements, squad logistics support</div>
              <div style="margin-bottom:8px;"><strong style="color:#d97706;">G - Engineer:</strong> Platoon engineer support, tactical mobility</div>
              <div><strong style="color:#0ea5e9;">H - Air Defense:</strong> Platoon air defense coordination, squad ADA support</div>
            </div>
          </div>

          <!-- Annexes I-L (Platoon Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes I-L — Platoon Coordination Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#ec4899;">I - Information Operations:</strong> Multi-squad information coordination</div>
              <div style="margin-bottom:8px;"><strong style="color:#06b6d4;">J - Public Affairs:</strong> Platoon public affairs, tactical communications</div>
              <div style="margin-bottom:8px;"><strong style="color:#84cc16;">K - Civil Affairs:</strong> Platoon civil affairs coordination, squad CA support</div>
              <div><strong style="color:#f97316;">L - Reconnaissance:</strong> Platoon reconnaissance elements, squad reconnaissance support</div>
            </div>
          </div>

          <!-- Annex T and Platoon Summary -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">
              <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
              Annex T — Platoon CEMA
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              Platoon-level cyber electromagnetic activities coordinating squad CEMA operations and tactical-level electronic warfare.
            </div>
          </div>

          <!-- Platoon Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0;">
              <i class="fas fa-user-shield" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
              Platoon Tactical Coordination
            </h4>
            <div style="color:#e0e7ff; font-size:12px; line-height:1.4;">
              Platoon-level annexes coordinate multiple squads to achieve tactical objectives while enabling tactical execution for subordinate elements.
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Platoon Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Platoon-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Platoon Command and Control</div>
            <div style="margin-bottom:4px;">FM 3-0 (Oct 2022), Chapter 11 — Small Unit Operations</div>
            <div style="margin-bottom:4px;">FM 4-0 (Jul 2019), Chapter 11 — Platoon Sustainment Operations</div>
            <div>ATP 3-21.8 (Apr 2016), Infantry Platoon and Squad Operations</div>
          </div>
        </div>

      </div>
    `;
  }
};
