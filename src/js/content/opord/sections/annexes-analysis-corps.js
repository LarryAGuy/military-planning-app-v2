/**
 * OPORD Annexes - Corps Level Echelon Analysis
 * Operational-level annex planning and coordination for Corps operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive operational doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-corps-analysis-section" style="margin-bottom:24px;">
        <!-- Corps Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-crown" style="margin-right:8px; color:#f59e0b; font-size:16px;"></i>
            Corps Level — Multi-Division Annex Coordination
          </h3>
        </div>

        <!-- Corps Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-rook" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
            Corps-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Corps-level annexes coordinate multiple division operations within an assigned sector, providing operational direction while
            enabling tactical flexibility. Corps headquarters synchronizes division-level annexes and integrates enabling capabilities.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(245, 158, 11, 0.1); padding:8px; border-radius:6px; border:1px solid #f59e0b;">
              <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-division operations across corps sector</div>
            </div>
            <div style="background-color:rgba(245, 158, 11, 0.1); padding:8px; border-radius:6px; border:1px solid #f59e0b;">
              <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Corps Headquarters, Operational Command</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Corps Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Corps) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Corps Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Corps-level task organization coordinating multiple divisions, corps assets, and enabling capabilities across the corps sector.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Corps Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multiple division headquarters (2-4 divisions)</li>
                  <li>Corps artillery and fires brigade</li>
                  <li>Corps support command</li>
                  <li>Corps enabling capabilities</li>
                  <li>Attached and supporting units</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OPCON to divisions, TACON for enabling capabilities, corps asset coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Corps) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Corps Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Corps-level intelligence coordination across multiple division areas, integrating operational intelligence and providing tactical intelligence support.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Corps Intelligence Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-division intelligence fusion</li>
                  <li>Corps intelligence coordination</li>
                  <li>Operational IPB development</li>
                  <li>Division intelligence support</li>
                  <li>Corps reconnaissance coordination</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Intelligence</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps PIR, division intelligence coordination, and operational intelligence integration</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Corps) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Corps Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Corps-level operational coordination across multiple division areas, establishing operational framework and synchronizing division operations.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Corps Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Division boundaries and sectors</li>
                  <li>Corps coordination lines</li>
                  <li>Operational objectives</li>
                  <li>Phase lines and checkpoints</li>
                  <li>Corps reserve positioning</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Division synchronization, operational objectives, and corps asset employment</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Corps) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Corps Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Corps-level fires coordination across multiple divisions, integrating corps fires assets and providing operational fires support.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Corps Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-division fires coordination</li>
                  <li>Corps artillery and rocket systems</li>
                  <li>Operational fires planning</li>
                  <li>Division fires support</li>
                  <li>Corps target development</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Fires</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps target priorities, operational effects, and division fires coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Additional Corps Annexes (Condensed Format) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Annexes E-H (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes E-H — Corps Support Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#8b5cf6;">E - Protection:</strong> Multi-division protection coordination, corps force protection</div>
              <div style="margin-bottom:8px;"><strong style="color:#059669;">F - Sustainment:</strong> Corps sustainment command, division logistics support</div>
              <div style="margin-bottom:8px;"><strong style="color:#d97706;">G - Engineer:</strong> Corps engineer brigade, operational mobility support</div>
              <div><strong style="color:#0ea5e9;">H - Air Defense:</strong> Corps air defense coordination, division ADA support</div>
            </div>
          </div>

          <!-- Annexes I-L (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes I-L — Corps Coordination Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#ec4899;">I - Information Operations:</strong> Multi-division information coordination</div>
              <div style="margin-bottom:8px;"><strong style="color:#06b6d4;">J - Public Affairs:</strong> Corps public affairs, operational communications</div>
              <div style="margin-bottom:8px;"><strong style="color:#84cc16;">K - Civil Affairs:</strong> Corps civil affairs coordination, division CA support</div>
              <div><strong style="color:#f97316;">L - Reconnaissance:</strong> Corps ISR coordination, division reconnaissance support</div>
            </div>
          </div>

          <!-- Annex T and Corps Summary -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">
              <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
              Annex T — Corps CEMA
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              Corps-level cyber electromagnetic activities coordinating division CEMA operations and operational-level electronic warfare.
            </div>
          </div>

          <!-- Corps Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0;">
              <i class="fas fa-chess-rook" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
              Corps Operational Coordination
            </h4>
            <div style="color:#e0e7ff; font-size:12px; line-height:1.4;">
              Corps-level annexes coordinate multiple divisions to achieve operational objectives while maintaining tactical flexibility for subordinate commands.
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Corps Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Corps-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Corps Command and Control</div>
            <div style="margin-bottom:4px;">FM 3-0 (Oct 2022), Chapter 3 — Corps Operations</div>
            <div style="margin-bottom:4px;">FM 4-0 (Jul 2019), Chapter 3 — Corps Sustainment Operations</div>
            <div>ADP 3-0 (Jul 2019), Chapter 3 — Operational Environment</div>
          </div>
        </div>

      </div>
    `;
  }
};
