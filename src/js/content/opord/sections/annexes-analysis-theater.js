/**
 * OPORD Annexes - Theater Level Echelon Analysis
 * Strategic-level annex planning and coordination for theater operations
 * Sources: FM 5-0 (Nov 2024), FM 6-0 (May 2022), JP 3-0 (Oct 2022)
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive strategic doctrinal content requirements
 */

export default {
  getContent() {
    return `
      <div id="annexes-theater-analysis-section" style="margin-bottom:24px;">
        <!-- Theater Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-globe" style="margin-right:8px; color:#a855f7; font-size:16px;"></i>
            Theater Level — Strategic Annex Coordination
          </h3>
        </div>

        <!-- Theater Overview -->
        <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-star" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
            Theater-Level Annex Planning Framework
          </h4>
          <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Theater-level annexes provide strategic coordination across multiple Army commands, joint forces, and coalition partners.
            These annexes establish theater-wide policies, procedures, and coordination mechanisms for large-scale combat operations.
          </p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(168, 85, 247, 0.1); padding:8px; border-radius:6px; border:1px solid #a855f7;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Scope</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Multi-domain operations across theater of operations</div>
            </div>
            <div style="background-color:rgba(168, 85, 247, 0.1); padding:8px; border-radius:6px; border:1px solid #a855f7;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Level</div>
              <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Theater Army, Joint Force Command, Coalition HQ</div>
            </div>
          </div>
        </div>

        <!-- 2×N Grid Layout for Theater Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Theater Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic-level task organization encompassing multiple Army commands, joint forces, and coalition partners across the theater of operations.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Theater Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Theater Army headquarters and staff</li>
                  <li>Multiple corps and division commands</li>
                  <li>Theater sustainment command</li>
                  <li>Joint and coalition force integration</li>
                  <li>Special operations command relationships</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">COCOM, OPCON, TACON across theater components with joint force coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Theater Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic intelligence coordination across theater, including national-level intelligence integration and theater-wide IPB products.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">Theater Intelligence Products</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Theater-wide IPB and strategic assessments</li>
                  <li>National intelligence integration</li>
                  <li>Multi-domain threat analysis</li>
                  <li>Strategic warning and indications</li>
                  <li>Coalition intelligence sharing protocols</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Collection</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater PIR, national collection coordination, and strategic reconnaissance</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Theater Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic operational framework for theater-wide operations, including multi-domain coordination and strategic control measures.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Theater Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Theater boundaries and sectors</li>
                  <li>Joint operations areas (JOAs)</li>
                  <li>Strategic mobility corridors</li>
                  <li>Multi-domain coordination lines</li>
                  <li>Coalition force coordination areas</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater ROE, strategic objectives, and multi-domain synchronization</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Theater Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic fires coordination across theater, including joint fires, strategic targets, and theater missile defense integration.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fcd34d; font-size:12px; margin:0 0 6px 0;">Theater Fires Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Strategic fires and long-range precision</li>
                  <li>Joint fires coordination and integration</li>
                  <li>Theater missile defense coordination</li>
                  <li>Strategic target development</li>
                  <li>Coalition fires deconfliction</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fcd34d; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Targeting</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater target priorities, strategic effects, and joint targeting coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Second Row of Theater Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 5: Annex E - Protection (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-shield-alt" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
                Annex E — Theater Protection
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic protection framework encompassing theater-wide force protection, critical infrastructure defense, and homeland defense coordination.
              </p>
              <div style="background-color:rgba(139, 92, 246, 0.1); padding:10px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 6px 0;">Theater Protection Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Strategic force protection measures</li>
                  <li>Critical infrastructure protection</li>
                  <li>Theater air and missile defense</li>
                  <li>Homeland defense coordination</li>
                  <li>Coalition protection integration</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #8b5cf6;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Defense</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Multi-layered defense, strategic warning, and theater-wide protection coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 6: Annex F - Sustainment (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-truck" style="margin-right:8px; color:#059669; font-size:12px;"></i>
                Annex F — Theater Sustainment
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic sustainment operations across theater, including strategic mobility, theater distribution, and coalition logistics coordination.
              </p>
              <div style="background-color:rgba(5, 150, 105, 0.1); padding:10px; border-radius:6px; border:1px solid #059669; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Theater Sustainment Operations</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Strategic mobility and deployment</li>
                  <li>Theater distribution networks</li>
                  <li>Strategic logistics hubs</li>
                  <li>Coalition logistics coordination</li>
                  <li>Theater medical operations</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #059669;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Logistics</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater supply chains, strategic reserves, and multi-national logistics</div>
              </div>
            </div>
          </div>

          <!-- Card 7: Annex G - Engineer (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-hard-hat" style="margin-right:8px; color:#d97706; font-size:12px;"></i>
                Annex G — Theater Engineer
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic engineer operations across theater, including infrastructure development, strategic mobility support, and theater fortification.
              </p>
              <div style="background-color:rgba(217, 119, 6, 0.1); padding:10px; border-radius:6px; border:1px solid #d97706; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 6px 0;">Theater Engineer Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Strategic infrastructure development</li>
                  <li>Theater mobility corridor construction</li>
                  <li>Strategic fortification and hardening</li>
                  <li>Coalition engineer coordination</li>
                  <li>Theater environmental considerations</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #d97706;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Construction</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater-wide engineering priorities, strategic projects, and infrastructure protection</div>
              </div>
            </div>
          </div>

          <!-- Card 8: Annex H - Air Defense (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-fighter-jet" style="margin-right:8px; color:#0ea5e9; font-size:12px;"></i>
                Annex H — Theater Air Defense
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic air defense coordination across theater, including integrated air and missile defense and joint air defense operations.
              </p>
              <div style="background-color:rgba(14, 165, 233, 0.1); padding:10px; border-radius:6px; border:1px solid #0ea5e9; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#7dd3fc; font-size:12px; margin:0 0 6px 0;">Theater Air Defense Systems</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Integrated air and missile defense</li>
                  <li>Strategic air defense priorities</li>
                  <li>Joint air defense coordination</li>
                  <li>Coalition air defense integration</li>
                  <li>Theater airspace management</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #0ea5e9;">
                <div style="color:#7dd3fc; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Coverage</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater-wide air defense umbrella, strategic asset protection, and airspace control</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Third Row of Theater Annexes -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 9: Annex I - Information Operations (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-broadcast-tower" style="margin-right:8px; color:#ec4899; font-size:12px;"></i>
                Annex I — Theater Information Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic information operations across theater, including strategic communications, influence operations, and information warfare coordination.
              </p>
              <div style="background-color:rgba(236, 72, 153, 0.1); padding:10px; border-radius:6px; border:1px solid #ec4899; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#f9a8d4; font-size:12px; margin:0 0 6px 0;">Theater Information Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Strategic communications and messaging</li>
                  <li>Multi-domain information warfare</li>
                  <li>Coalition information coordination</li>
                  <li>Strategic influence operations</li>
                  <li>Theater information environment assessment</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #ec4899;">
                <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Messaging</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater narrative, strategic themes, and multi-national information coordination</div>
              </div>
            </div>
          </div>

          <!-- Card 10: Annex J - Public Affairs (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-newspaper" style="margin-right:8px; color:#06b6d4; font-size:12px;"></i>
                Annex J — Theater Public Affairs
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic public affairs operations across theater, including media relations, strategic communications, and coalition public affairs coordination.
              </p>
              <div style="background-color:rgba(6, 182, 212, 0.1); padding:10px; border-radius:6px; border:1px solid #06b6d4; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#67e8f9; font-size:12px; margin:0 0 6px 0;">Theater Public Affairs Operations</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Strategic media engagement</li>
                  <li>Theater-wide public communications</li>
                  <li>Coalition public affairs coordination</li>
                  <li>Strategic narrative development</li>
                  <li>Crisis communications planning</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #06b6d4;">
                <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Communications</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater messaging, media strategy, and multi-national public affairs</div>
              </div>
            </div>
          </div>

          <!-- Card 11: Annex K - Civil Affairs Operations (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-handshake" style="margin-right:8px; color:#84cc16; font-size:12px;"></i>
                Annex K — Theater Civil Affairs Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic civil affairs operations across theater, including civil-military cooperation, governance support, and humanitarian coordination.
              </p>
              <div style="background-color:rgba(132, 204, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #84cc16; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#bef264; font-size:12px; margin:0 0 6px 0;">Theater Civil Affairs Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Strategic civil-military cooperation</li>
                  <li>Theater governance support</li>
                  <li>Humanitarian assistance coordination</li>
                  <li>Coalition civil affairs integration</li>
                  <li>Strategic stability operations</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #84cc16;">
                <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic Cooperation</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater-wide civil coordination, governance frameworks, and stability operations</div>
              </div>
            </div>
          </div>

          <!-- Card 12: Annex L - Reconnaissance and Surveillance (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-satellite" style="margin-right:8px; color:#f97316; font-size:12px;"></i>
                Annex L — Theater Reconnaissance and Surveillance
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic reconnaissance and surveillance operations across theater, including national-level integration and theater-wide ISR coordination.
              </p>
              <div style="background-color:rgba(249, 115, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #f97316; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fdba74; font-size:12px; margin:0 0 6px 0;">Theater ISR Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Strategic ISR coordination</li>
                  <li>National-level intelligence integration</li>
                  <li>Theater-wide surveillance networks</li>
                  <li>Coalition ISR sharing</li>
                  <li>Multi-domain reconnaissance</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f97316;">
                <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic ISR</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater surveillance priorities, strategic reconnaissance, and national ISR coordination</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Fourth Row - Annex T and Strategic Summary -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 13: Annex T - Cyber Electromagnetic Activities (Theater) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-wifi" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
                Annex T — Theater Cyber Electromagnetic Activities
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Strategic cyber electromagnetic activities across theater, including cyber operations, electronic warfare, and spectrum management coordination.
              </p>
              <div style="background-color:rgba(168, 85, 247, 0.1); padding:10px; border-radius:6px; border:1px solid #a855f7; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 6px 0;">Theater CEMA Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Strategic cyber operations</li>
                  <li>Theater electronic warfare coordination</li>
                  <li>Spectrum management and control</li>
                  <li>Coalition CEMA integration</li>
                  <li>Multi-domain electromagnetic operations</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #a855f7;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Strategic CEMA</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Theater cyber priorities, strategic EW, and electromagnetic spectrum dominance</div>
              </div>
            </div>
          </div>

          <!-- Strategic Coordination Summary -->
          <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:320px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:#c4b5fd; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-king" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
                Theater Strategic Coordination
              </h4>
              <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Theater-level annexes require extensive coordination across multiple domains, joint forces, and coalition partners to achieve strategic objectives.
              </p>
              <div style="background-color:rgba(168, 85, 247, 0.1); padding:10px; border-radius:6px; border:1px solid #a855f7; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 6px 0;">Strategic Integration Requirements</h5>
                <ul style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Multi-domain synchronization</li>
                  <li>Joint force coordination</li>
                  <li>Coalition integration protocols</li>
                  <li>Strategic resource allocation</li>
                  <li>Theater-wide unity of effort</li>
                </ul>
              </div>
              <div style="background-color:#4c1d95; padding:8px; border-radius:6px; border-left:3px solid #a855f7;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Coordination</div>
                <div style="color:#e0e7ff; font-size:12px; line-height:1.3;">Theater Army, Joint Force, and Coalition command integration across all annexes</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Doctrinal Reference Box -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#dbeafe; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Doctrinal References — Theater Level Annexes
          </h4>
          <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
            <div style="margin-bottom:4px;">FM 5-0 (Nov 2024), Appendix C — Annexes, Theater-Level Planning</div>
            <div style="margin-bottom:4px;">FM 6-0 (May 2022), Chapter 1-9 — Strategic Command and Control</div>
            <div style="margin-bottom:4px;">JP 3-0 (Oct 2022), Chapter IV — Theater Strategic Direction</div>
            <div style="margin-bottom:4px;">JP 5-0 (Dec 2020), Chapter III — Strategic Planning Process</div>
            <div>FM 3-0 (Oct 2022), Chapter 1 — Large Scale Combat Operations</div>
          </div>
        </div>

      </div>
    `;
  }
};
