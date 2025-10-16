/**
 * OPORD Annexes - Squadron Level Echelon Analysis
 * Tactical annex planning and coordination for Squadron operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive tactical doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-squadron-analysis-section" style="margin-bottom:24px;">
        <!-- Squadron Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-horse-head" style="margin-right:8px; color:#8b5cf6; font-size:16px;"></i>
            Squadron Level — Multi-Troop Annex Coordination
          </h3>
        </div>

        <!-- Squadron Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-shield-alt" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
            Squadron-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Squadron-level annexes coordinate multiple troop operations within specialized functional areas, providing tactical direction
            for specialized capabilities. Squadron headquarters synchronizes troop-level annexes and integrates squadron assets.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(139, 92, 246, 0.1); padding:8px; border-radius:6px; border:1px solid #8b5cf6;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Specialized Tactical Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-troop specialized operations</div>
            </div>
            <div style="background-color:rgba(139, 92, 246, 0.1); padding:8px; border-radius:6px; border:1px solid #8b5cf6;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Functional Squadron, Specialized Command</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Squadron Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Squadron) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Squadron Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Squadron-level task organization coordinating specialized troops, squadron assets, and supporting capabilities across functional areas.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Squadron Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Specialized troop units (3-4 troops)</li>
                  <li>Squadron headquarters troop</li>
                  <li>Squadron support troop</li>
                  <li>Specialized enabling elements</li>
                  <li>Attached specialized units</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OPCON to troops, functional coordination, specialized asset management</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Squadron) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Squadron Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Squadron-level intelligence coordination across specialized troops, integrating functional intelligence and providing specialized intelligence support.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Squadron Intelligence Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Specialized troop intelligence fusion</li>
                  <li>Functional intelligence coordination</li>
                  <li>Specialized IPB development</li>
                  <li>Troop intelligence support</li>
                  <li>Squadron reconnaissance coordination</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Functional Intelligence</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Squadron PIR, specialized intelligence coordination, and functional intelligence integration</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Squadron) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Squadron Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Squadron-level operational coordination across specialized troops, establishing functional framework and synchronizing specialized operations.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Squadron Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Troop functional areas</li>
                  <li>Squadron coordination measures</li>
                  <li>Specialized objectives</li>
                  <li>Functional phase lines</li>
                  <li>Squadron asset positioning</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Functional Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Troop synchronization, specialized objectives, and squadron asset employment</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Squadron) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Squadron Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Squadron-level fires coordination across specialized troops, integrating functional fires capabilities and providing specialized fires support.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Squadron Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Specialized troop fires coordination</li>
                  <li>Squadron fires assets</li>
                  <li>Functional fires planning</li>
                  <li>Troop fires support</li>
                  <li>Specialized target development</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Functional Fires</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Specialized target priorities, functional effects, and troop fires coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Additional Squadron Annexes (Condensed Format) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Annexes E-H (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes E-H — Squadron Support Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#8b5cf6;">E - Protection:</strong> Specialized troop protection, functional force protection</div>
              <div style="margin-bottom:8px;"><strong style="color:#059669;">F - Sustainment:</strong> Squadron support troop, specialized logistics</div>
              <div style="margin-bottom:8px;"><strong style="color:#d97706;">G - Engineer:</strong> Specialized engineer support, functional mobility</div>
              <div><strong style="color:#0ea5e9;">H - Air Defense:</strong> Functional air defense coordination, specialized ADA</div>
            </div>
          </div>

          <!-- Annexes I-L (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">Annexes I-L — Squadron Coordination Functions</h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4; margin-bottom:12px;">
              <div style="margin-bottom:8px;"><strong style="color:#ec4899;">I - Information Operations:</strong> Specialized information coordination</div>
              <div style="margin-bottom:8px;"><strong style="color:#06b6d4;">J - Public Affairs:</strong> Squadron public affairs, functional communications</div>
              <div style="margin-bottom:8px;"><strong style="color:#84cc16;">K - Civil Affairs:</strong> Specialized civil affairs coordination</div>
              <div><strong style="color:#f97316;">L - Reconnaissance:</strong> Functional reconnaissance, specialized ISR</div>
            </div>
          </div>

          <!-- Annex T and Squadron Summary -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0;">
              <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
              Annex T — Squadron CEMA
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              Squadron-level cyber electromagnetic activities coordinating specialized CEMA operations and functional electronic warfare.
            </div>
          </div>

          <!-- Squadron Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px;">
            <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0;">
              <i class="fas fa-shield-alt" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
              Squadron Functional Coordination
            </h4>
            <div style="color:#e0e7ff; font-size:12px; line-height:1.4;">
              Squadron-level annexes coordinate specialized troops to achieve functional objectives while enabling specialized operations.
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Squadron Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Squadron-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Squadron Command and Control</div>
            <div style="margin-bottom:4px;">FM 3-0 (Oct 2022), Chapter 9 — Specialized Operations</div>
            <div style="margin-bottom:4px;">FM 4-0 (Jul 2019), Chapter 9 — Functional Sustainment</div>
            <div>ATP 3-20.96 (Jul 2016), Cavalry Squadron Operations</div>
          </div>
        </div>

      </div>
    `;
  }
};
