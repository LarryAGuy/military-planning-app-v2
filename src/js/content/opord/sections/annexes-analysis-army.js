/**
 * OPORD Annexes - Army Level Echelon Analysis
 * Strategic-level annex planning and coordination for Army operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), FM 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive strategic doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-army-analysis-section" style="margin-bottom:24px;">
        <!-- Army Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-star" style="margin-right:8px; color:#fbbf24; font-size:16px;"></i>
            Army Level — Multi-Corps Annex Coordination
          </h3>
        </div>

        <!-- Army Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-king" style="margin-right:8px; color:#fbbf24; font-size:12px;"></i>
            Army-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Army-level annexes coordinate multiple corps operations within a theater, providing strategic direction while maintaining
            operational flexibility for subordinate commands. Army headquarters synchronizes corps-level annexes and integrates joint capabilities.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(251, 191, 36, 0.1); padding:8px; border-radius:6px; border:1px solid #fbbf24;">
              <div style="color:#fde68a; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-corps operations across assigned area of operations</div>
            </div>
            <div style="background-color:rgba(251, 191, 36, 0.1); padding:8px; border-radius:6px; border:1px solid #fbbf24;">
              <div style="color:#fde68a; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Army Service Component Command, Field Army</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Army Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Army Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level task organization coordinating multiple corps, enabling capabilities, and joint force attachments across the area of operations.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Army Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multiple corps headquarters (2-5 corps)</li>
                  <li>Army artillery and fires brigade</li>
                  <li>Army sustainment command</li>
                  <li>Joint and special operations attachments</li>
                  <li>Enabling capabilities and theater assets</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OPCON to corps, TACON for enabling capabilities, joint force coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Army Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level intelligence coordination across multiple corps areas, integrating theater intelligence and providing operational intelligence support.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Army Intelligence Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps intelligence fusion</li>
                  <li>Theater intelligence integration</li>
                  <li>Operational-level IPB coordination</li>
                  <li>Joint intelligence support</li>
                  <li>Strategic reconnaissance coordination</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Intelligence</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Army PIR, corps intelligence coordination, and theater intelligence integration</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Army Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level operational coordination across multiple corps areas, establishing operational framework and synchronizing corps operations.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Army Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Corps boundaries and sectors</li>
                  <li>Army coordination lines</li>
                  <li>Operational phase lines</li>
                  <li>Joint operations coordination</li>
                  <li>Multi-domain synchronization lines</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps synchronization, operational objectives, and joint force integration</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Army Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level fires coordination across multiple corps, integrating joint fires and providing operational-level fires support.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Army Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps fires coordination</li>
                  <li>Army artillery and long-range fires</li>
                  <li>Joint fires integration</li>
                  <li>Operational target development</li>
                  <li>Corps fires deconfliction</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Fires</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Army target priorities, operational effects, and joint fires coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Second Row of Army Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 5: Annex E - Protection (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-shield-alt" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
                Annex E — Army Protection
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level protection coordination across multiple corps areas, integrating operational protection measures and joint protection capabilities.
              </p>
              <div style="background-color:rgba(139, 92, 246, 0.1); padding:10px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 6px 0;">Army Protection Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps protection coordination</li>
                  <li>Operational force protection</li>
                  <li>Army air and missile defense</li>
                  <li>Joint protection integration</li>
                  <li>Critical asset protection</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #8b5cf6;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Protection</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps protection coordination, operational warning, and joint protection measures</div>
              </div>
            </div>
          </div>

          <!-- Card 6: Annex F - Sustainment (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-truck" style="margin-right:8px; color:#059669; font-size:12px;"></i>
                Annex F — Army Sustainment
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level sustainment operations coordinating multiple corps sustainment, theater distribution, and operational logistics support.
              </p>
              <div style="background-color:rgba(5, 150, 105, 0.1); padding:10px; border-radius:6px; border:1px solid #059669; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Army Sustainment Operations</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps sustainment coordination</li>
                  <li>Army sustainment command operations</li>
                  <li>Operational distribution networks</li>
                  <li>Joint logistics coordination</li>
                  <li>Theater sustainment integration</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #059669;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Logistics</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps sustainment support, operational reserves, and joint logistics integration</div>
              </div>
            </div>
          </div>

          <!-- Card 7: Annex G - Engineer (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-hard-hat" style="margin-right:8px; color:#d97706; font-size:12px;"></i>
                Annex G — Army Engineer
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level engineer operations coordinating multiple corps engineer capabilities and operational-level engineer support.
              </p>
              <div style="background-color:rgba(217, 119, 6, 0.1); padding:10px; border-radius:6px; border:1px solid #d97706; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 6px 0;">Army Engineer Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps engineer coordination</li>
                  <li>Operational mobility support</li>
                  <li>Army engineer command operations</li>
                  <li>Joint engineer integration</li>
                  <li>Operational survivability</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #d97706;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Engineering</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps engineer support, operational projects, and joint engineer coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 8: Annex H - Air Defense (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-fighter-jet" style="margin-right:8px; color:#0ea5e9; font-size:12px;"></i>
                Annex H — Army Air Defense
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level air defense coordination across multiple corps areas, integrating operational air defense and joint air defense operations.
              </p>
              <div style="background-color:rgba(14, 165, 233, 0.1); padding:10px; border-radius:6px; border:1px solid #0ea5e9; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#7dd3fc; font-size:12px; margin:0 0 6px 0;">Army Air Defense Systems</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps air defense coordination</li>
                  <li>Operational air defense priorities</li>
                  <li>Army air defense command</li>
                  <li>Joint air defense integration</li>
                  <li>Corps air defense support</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #0ea5e9;">
                <div style="color:#7dd3fc; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Air Defense</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps air defense coordination, operational coverage, and joint air defense</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Third Row of Army Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 9: Annex I - Information Operations (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-broadcast-tower" style="margin-right:8px; color:#ec4899; font-size:12px;"></i>
                Annex I — Army Information Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level information operations coordinating multiple corps information activities and operational-level information warfare.
              </p>
              <div style="background-color:rgba(236, 72, 153, 0.1); padding:10px; border-radius:6px; border:1px solid #ec4899; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#f9a8d4; font-size:12px; margin:0 0 6px 0;">Army Information Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps information coordination</li>
                  <li>Operational information warfare</li>
                  <li>Joint information operations</li>
                  <li>Army information environment assessment</li>
                  <li>Corps information support</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #ec4899;">
                <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Information</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps information coordination, operational themes, and joint information integration</div>
              </div>
            </div>
          </div>

          <!-- Card 10: Annex J - Public Affairs (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-newspaper" style="margin-right:8px; color:#06b6d4; font-size:12px;"></i>
                Annex J — Army Public Affairs
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level public affairs operations coordinating multiple corps public affairs activities and operational-level communications.
              </p>
              <div style="background-color:rgba(6, 182, 212, 0.1); padding:10px; border-radius:6px; border:1px solid #06b6d4; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#67e8f9; font-size:12px; margin:0 0 6px 0;">Army Public Affairs Operations</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps public affairs coordination</li>
                  <li>Operational media engagement</li>
                  <li>Joint public affairs integration</li>
                  <li>Army communications strategy</li>
                  <li>Corps public affairs support</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #06b6d4;">
                <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Communications</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps communications coordination, operational messaging, and joint public affairs</div>
              </div>
            </div>
          </div>

          <!-- Card 11: Annex K - Civil Affairs Operations (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-handshake" style="margin-right:8px; color:#84cc16; font-size:12px;"></i>
                Annex K — Army Civil Affairs Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level civil affairs operations coordinating multiple corps civil-military activities and operational-level civil affairs support.
              </p>
              <div style="background-color:rgba(132, 204, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #84cc16; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#bef264; font-size:12px; margin:0 0 6px 0;">Army Civil Affairs Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps civil affairs coordination</li>
                  <li>Operational civil-military cooperation</li>
                  <li>Joint civil affairs integration</li>
                  <li>Army civil affairs command</li>
                  <li>Corps civil affairs support</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #84cc16;">
                <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:4px;">Operational Civil Affairs</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps civil coordination, operational stability, and joint civil affairs</div>
              </div>
            </div>
          </div>

          <!-- Card 12: Annex L - Reconnaissance and Surveillance (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-satellite" style="margin-right:8px; color:#f97316; font-size:12px;"></i>
                Annex L — Army Reconnaissance and Surveillance
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level reconnaissance and surveillance operations coordinating multiple corps ISR activities and operational-level intelligence collection.
              </p>
              <div style="background-color:rgba(249, 115, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #f97316; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fdba74; font-size:12px; margin:0 0 6px 0;">Army ISR Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps ISR coordination</li>
                  <li>Operational reconnaissance planning</li>
                  <li>Joint ISR integration</li>
                  <li>Army ISR synchronization</li>
                  <li>Corps ISR support</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f97316;">
                <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:4px;">Operational ISR</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps ISR coordination, operational collection, and joint ISR integration</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Fourth Row - Annex T and Army Coordination Summary -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 13: Annex T - Cyber Electromagnetic Activities (Army) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
                Annex T — Army Cyber Electromagnetic Activities
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level cyber electromagnetic activities coordinating multiple corps CEMA operations and operational-level cyber warfare.
              </p>
              <div style="background-color:rgba(168, 85, 247, 0.1); padding:10px; border-radius:6px; border:1px solid #a855f7; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 6px 0;">Army CEMA Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps CEMA coordination</li>
                  <li>Operational cyber operations</li>
                  <li>Army electronic warfare coordination</li>
                  <li>Joint CEMA integration</li>
                  <li>Corps CEMA support</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #a855f7;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Operational CEMA</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Corps CEMA coordination, operational cyber effects, and joint CEMA integration</div>
              </div>
            </div>
          </div>

          <!-- Army Operational Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-king" style="margin-right:8px; color:#fbbf24; font-size:12px;"></i>
                Army Operational Coordination
              </h4>
              <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Army-level annexes require coordination across multiple corps to achieve operational objectives while maintaining flexibility for subordinate commands.
              </p>
              <div style="background-color:rgba(251, 191, 36, 0.1); padding:10px; border-radius:6px; border:1px solid #fbbf24; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fde68a; font-size:12px; margin:0 0 6px 0;">Operational Integration Requirements</h5>
                <ul style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-corps synchronization</li>
                  <li>Joint force coordination</li>
                  <li>Theater integration protocols</li>
                  <li>Operational resource allocation</li>
                  <li>Corps-level unity of effort</li>
                </ul>
              </div>
              <div style="background-color:#4c1d95; padding:8px; border-radius:6px; border-left:3px solid #fbbf24;">
                <div style="color:#fde68a; font-weight:600; font-size:12px; margin-bottom:4px;">Command Coordination</div>
                <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Army headquarters, Corps commands, and Joint force integration across all annexes</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Army Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Army-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Army Command and Control</div>
            <div style="margin-bottom:4px;">FM 3-0 (Oct 2022), Chapter 2 — Army Operations</div>
            <div style="margin-bottom:4px;">FM 4-0 (Jul 2019), Chapter 2 — Army Sustainment Operations</div>
            <div>ADP 3-0 (Jul 2019), Chapter 2 — Unified Land Operations</div>
          </div>
        </div>

      </div>
    `;
  }
};
