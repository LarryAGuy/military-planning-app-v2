/**
 * OPORD Annexes - Regiment Level Echelon Analysis
 * Operational-tactical annex planning and coordination for Regiment operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive operational doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-regiment-analysis-section" style="margin-bottom:24px;">
        <!-- Regiment Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-medal" style="margin-right:8px; color:#8b5cf6; font-size:16px;"></i>
            Regiment Level — Multi-Battalion Annex Coordination
          </h3>
        </div>

        <!-- Regiment Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-shield" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
            Regiment-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Regiment-level annexes coordinate multiple battalion operations within specialized functional areas, providing operational-tactical
            direction for specialized capabilities. Regiment headquarters synchronizes battalion-level annexes and integrates regimental assets.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(139, 92, 246, 0.1); padding:8px; border-radius:6px; border:1px solid #8b5cf6;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Specialized Operational Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-battalion specialized operations</div>
            </div>
            <div style="background-color:rgba(139, 92, 246, 0.1); padding:8px; border-radius:6px; border:1px solid #8b5cf6;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Functional Regiment, Specialized Command</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Regiment Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Regiment) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Regiment Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Regiment-level task organization coordinating specialized battalions, regimental assets, and supporting capabilities across functional areas.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Regiment Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Specialized battalion units (2-4 battalions)</li>
                  <li>Regimental headquarters and staff</li>
                  <li>Regimental support elements</li>
                  <li>Functional enabling capabilities</li>
                  <li>Attached specialized units</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OPCON to battalions, functional coordination, specialized asset management</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Regiment) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Regiment Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Regiment-level intelligence coordination across specialized battalions, integrating functional intelligence and providing specialized intelligence support.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Regiment Intelligence Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Specialized battalion intelligence fusion</li>
                  <li>Functional intelligence coordination</li>
                  <li>Specialized IPB development</li>
                  <li>Battalion intelligence support</li>
                  <li>Regimental reconnaissance coordination</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Functional Intelligence</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Regiment PIR, specialized intelligence coordination, and functional intelligence integration</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Regiment) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Regiment Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Regiment-level operational coordination across specialized battalions, establishing functional framework and synchronizing specialized operations.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Regiment Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Battalion functional areas</li>
                  <li>Regimental coordination measures</li>
                  <li>Specialized objectives</li>
                  <li>Functional phase lines</li>
                  <li>Regimental asset positioning</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Functional Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Battalion synchronization, specialized objectives, and regimental asset employment</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Regiment) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Regiment Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Regiment-level fires coordination across specialized battalions, integrating functional fires capabilities and providing specialized fires support.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Regiment Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Specialized battalion fires coordination</li>
                  <li>Regimental fires assets</li>
                  <li>Functional fires planning</li>
                  <li>Battalion fires support</li>
                  <li>Specialized target development</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Functional Fires</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Specialized target priorities, functional effects, and battalion fires coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Additional Regiment Annexes (Condensed Format) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Annexes E-H (Regiment Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes E-H — Regiment Support Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#8b5cf6;">E - Protection:</strong> Specialized battalion protection, functional force protection</div>
              <div style="margin-bottom:8px;"><strong style="color:#059669;">F - Sustainment:</strong> Regimental support elements, specialized logistics</div>
              <div style="margin-bottom:8px;"><strong style="color:#d97706;">G - Engineer:</strong> Specialized engineer support, functional mobility</div>
              <div><strong style="color:#0ea5e9;">H - Air Defense:</strong> Functional air defense coordination, specialized ADA</div>
            </div>
          </div>

          <!-- Annexes I-L (Regiment Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes I-L — Regiment Coordination Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#ec4899;">I - Information Operations:</strong> Specialized information coordination</div>
              <div style="margin-bottom:8px;"><strong style="color:#06b6d4;">J - Public Affairs:</strong> Regimental public affairs, functional communications</div>
              <div style="margin-bottom:8px;"><strong style="color:#84cc16;">K - Civil Affairs:</strong> Specialized civil affairs coordination</div>
              <div><strong style="color:#f97316;">L - Reconnaissance:</strong> Functional reconnaissance, specialized ISR</div>
            </div>
          </div>

          <!-- Annex T and Regiment Summary -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">
              <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
              Annex T — Regiment CEMA
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              Regiment-level cyber electromagnetic activities coordinating specialized CEMA operations and functional electronic warfare.
            </div>
          </div>

          <!-- Regiment Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0;">
              <i class="fas fa-shield" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
              Regiment Functional Coordination
            </h4>
            <div style="color:#e0e7ff; font-size:12px; line-height:1.4;">
              Regiment-level annexes coordinate specialized battalions to achieve functional objectives while enabling specialized operations.
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Regiment Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Regiment-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Regiment Command and Control</div>
            <div style="margin-bottom:4px;">FM 3-0 (Oct 2022), Chapter 6 — Functional Operations</div>
            <div style="margin-bottom:4px;">FM 4-0 (Jul 2019), Chapter 6 — Specialized Sustainment</div>
            <div>ATP 3-90.6 (May 2015), Regimental Operations</div>
          </div>
        </div>

      </div>
    `;
  }
};
