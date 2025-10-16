/**
 * OPORD Annexes - Company Level Echelon Analysis
 * Tactical annex planning and coordination for Company operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive tactical doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-company-analysis-section" style="margin-bottom:24px;">
        <!-- Company Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-user-friends" style="margin-right:8px; color:#dc2626; font-size:16px;"></i>
            Company Level — Multi-Platoon Annex Coordination
          </h3>
        </div>

        <!-- Company Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-users-cog" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
            Company-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Company-level annexes coordinate multiple platoon operations within an assigned area, providing tactical direction
            while enabling tactical execution. Company headquarters synchronizes platoon-level annexes and integrates company assets.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(220, 38, 38, 0.1); padding:8px; border-radius:6px; border:1px solid #dc2626;">
              <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-platoon operations across company area</div>
            </div>
            <div style="background-color:rgba(220, 38, 38, 0.1); padding:8px; border-radius:6px; border:1px solid #dc2626;">
              <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Company Team, Tactical Command</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Company Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Company) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Company Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Company-level task organization coordinating multiple platoons, company assets, and supporting capabilities across the company area.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Company Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multiple platoons (3-4 platoons)</li>
                  <li>Company headquarters element</li>
                  <li>Company weapons squad</li>
                  <li>Company support elements</li>
                  <li>Attached supporting elements</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OPCON to platoons, TACON for supporting elements, company asset coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Company) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Company Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Company-level intelligence coordination across multiple platoon areas, integrating tactical intelligence and providing platoon intelligence support.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Company Intelligence Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-platoon intelligence fusion</li>
                  <li>Company intelligence coordination</li>
                  <li>Tactical IPB development</li>
                  <li>Platoon intelligence support</li>
                  <li>Company reconnaissance coordination</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Intelligence</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Company PIR, platoon intelligence coordination, and tactical intelligence integration</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Company) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Company Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Company-level operational coordination across multiple platoon areas, establishing tactical framework and synchronizing platoon operations.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Company Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Platoon boundaries and sectors</li>
                  <li>Company coordination lines</li>
                  <li>Tactical objectives</li>
                  <li>Phase lines and checkpoints</li>
                  <li>Company reserve positioning</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Platoon synchronization, tactical objectives, and company asset employment</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Company) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Company Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Company-level fires coordination across multiple platoons, integrating company fires assets and providing tactical fires support.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Company Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-platoon fires coordination</li>
                  <li>Company weapons squad operations</li>
                  <li>Tactical fires planning</li>
                  <li>Platoon fires support</li>
                  <li>Company target development</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Tactical Fires</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Company target priorities, tactical effects, and platoon fires coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Additional Company Annexes (Condensed Format) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Annexes E-H (Company Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes E-H — Company Support Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#8b5cf6;">E - Protection:</strong> Multi-platoon protection coordination, company force protection</div>
              <div style="margin-bottom:8px;"><strong style="color:#059669;">F - Sustainment:</strong> Company support elements, platoon logistics support</div>
              <div style="margin-bottom:8px;"><strong style="color:#d97706;">G - Engineer:</strong> Company engineer support, tactical mobility</div>
              <div><strong style="color:#0ea5e9;">H - Air Defense:</strong> Company air defense coordination, platoon ADA support</div>
            </div>
          </div>

          <!-- Annexes I-L (Company Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes I-L — Company Coordination Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#ec4899;">I - Information Operations:</strong> Multi-platoon information coordination</div>
              <div style="margin-bottom:8px;"><strong style="color:#06b6d4;">J - Public Affairs:</strong> Company public affairs, tactical communications</div>
              <div style="margin-bottom:8px;"><strong style="color:#84cc16;">K - Civil Affairs:</strong> Company civil affairs coordination, platoon CA support</div>
              <div><strong style="color:#f97316;">L - Reconnaissance:</strong> Company reconnaissance elements, platoon reconnaissance support</div>
            </div>
          </div>

          <!-- Annex T and Company Summary -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">
              <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
              Annex T — Company CEMA
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              Company-level cyber electromagnetic activities coordinating platoon CEMA operations and tactical-level electronic warfare.
            </div>
          </div>

          <!-- Company Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0;">
              <i class="fas fa-users-cog" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
              Company Tactical Coordination
            </h4>
            <div style="color:#e0e7ff; font-size:12px; line-height:1.4;">
              Company-level annexes coordinate multiple platoons to achieve tactical objectives while enabling tactical execution for subordinate commands.
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Company Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Company-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Company Command and Control</div>
            <div style="margin-bottom:4px;">FM 3-0 (Oct 2022), Chapter 10 — Company Operations</div>
            <div style="margin-bottom:4px;">FM 4-0 (Jul 2019), Chapter 10 — Company Sustainment Operations</div>
            <div>ATP 3-21.10 (Oct 2015), Infantry Company Operations</div>
          </div>
        </div>

      </div>
    `;
  }
};
