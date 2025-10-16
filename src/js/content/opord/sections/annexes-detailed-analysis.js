/**
 * OPORD Annexes - Detailed Analysis Module
 * Comprehensive doctrinal content for all 13 annexes per FM 5-0 November 2024
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive doctrinal content requirements
 */

export const detailedAnalysisModule = {
  id: 'annexes-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <div id="annexes-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Section Header with Knowledge Reference -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-search" style="margin-right:8px; color:#60a5fa; font-size:16px;"></i>
            Annexes A–L, T — Detailed Analysis
          </h3>

        </div>

        <!-- 2x2 Grid Layout - First 4 Cards Visible in Default Viewport -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 1: Annex A - Task Organization -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-sitemap" style="margin-right:8px; color:#2563eb; font-size:12px;"></i>
                Annex A — Task Organization
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Complete unit task organization, command relationships, and attachment/detachment of forces for the operation.
              </p>
              <div style="background-color:rgba(37, 99, 235, 0.1); padding:10px; border-radius:6px; border:1px solid #2563eb; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 6px 0;">Key Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Unit identification and designation</li>
                  <li>Command and support relationships</li>
                  <li>Attachment/detachment timelines</li>
                  <li>Task organization by phase</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OPCON, TACON, Direct Support, General Support, Reinforcing, General Support-Reinforcing</div>
              </div>
            </div>
          </div>

          <!-- Card 2: Annex B - Intelligence -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-eye" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Annex B — Intelligence
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Detailed intelligence analysis, IPB products, enemy situation templates, and intelligence collection plan.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:10px; border-radius:6px; border:1px solid #dc2626; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 6px 0;">IPB Products</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Modified combined obstacle overlay (MCOO)</li>
                  <li>Enemy situation template (SITTEMP)</li>
                  <li>Enemy event template and matrix</li>
                  <li>Decision support template (DST)</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:4px;">Collection Plan</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">PIR, FFIR, SIR, collection assets, NAI/TAI, and reporting procedures</div>
              </div>
            </div>
          </div>

          <!-- Card 3: Annex C - Operations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Annex C — Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Detailed operational planning information, graphics, control measures, and coordination instructions.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:10px; border-radius:6px; border:1px solid #16a34a; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Control Measures</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Boundaries and control lines</li>
                  <li>Phase lines and checkpoints</li>
                  <li>Assembly areas and objectives</li>
                  <li>Routes and movement corridors</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Coordination Instructions</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">ROE, ROI, coordination requirements, and special instructions</div>
              </div>
            </div>
          </div>

          <!-- Card 4: Annex D - Fires -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Annex D — Fires
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Fire support planning, target lists, fire support coordination measures, and ammunition requirements.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 6px 0;">Fire Support Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>High payoff target list (HPTL)</li>
                  <li>Target selection standards (TSS)</li>
                  <li>Attack guidance matrix (AGM)</li>
                  <li>Fire support coordination measures</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:4px;">Coordination Measures</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">FSCLs, CFLs, RFLs, NFAs, and airspace coordination areas</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Cards Grid - Second Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 5: Annex E - Protection -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-shield-alt" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
                Annex E — Protection
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Force protection measures, CBRN considerations, air defense planning, and survivability operations.
              </p>
              <div style="background-color:rgba(139, 92, 246, 0.1); padding:10px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 6px 0;">Protection Tasks</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Conduct air and missile defense</li>
                  <li>Conduct CBRN operations</li>
                  <li>Provide force health protection</li>
                  <li>Conduct survivability operations</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #8b5cf6;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">CBRN Considerations</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Detection, protection, decontamination, and medical countermeasures</div>
              </div>
            </div>
          </div>

          <!-- Card 6: Annex F - Sustainment -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-truck" style="margin-right:8px; color:#059669; font-size:12px;"></i>
                Annex F — Sustainment
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Logistics planning, supply operations, maintenance support, and medical evacuation procedures.
              </p>
              <div style="background-color:rgba(5, 150, 105, 0.1); padding:10px; border-radius:6px; border:1px solid #059669; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 6px 0;">Sustainment Functions</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Logistics (supply, maintenance, transportation)</li>
                  <li>Personnel services (HR, financial, legal)</li>
                  <li>Health service support (medical treatment)</li>
                  <li>General engineering support</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #059669;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:4px;">Supply Classes</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Classes I-X: subsistence, fuel, ammunition, construction, medical, personal demand items, major end items, supplies, repair parts, non-military programs</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Cards Grid - Third Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 7: Annex G - Engineer -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-hard-hat" style="margin-right:8px; color:#eab308; font-size:12px;"></i>
                Annex G — Engineer
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Engineer support planning, obstacle operations, mobility/countermobility, and survivability.
              </p>
              <div style="background-color:rgba(234, 179, 8, 0.1); padding:10px; border-radius:6px; border:1px solid #eab308; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fde047; font-size:12px; margin:0 0 6px 0;">Engineer Tasks</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Mobility operations (breach, clear, mark)</li>
                  <li>Countermobility (obstacles, barriers)</li>
                  <li>Survivability (fighting positions, shelters)</li>
                  <li>General engineering (construction, utilities)</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #eab308;">
                <div style="color:#fde047; font-weight:600; font-size:12px; margin-bottom:4px;">Obstacle Integration</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">OBSTINTEL, obstacle overlay, and obstacle execution matrix</div>
              </div>
            </div>
          </div>

          <!-- Card 8: Annex H - Air Defense -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-fighter-jet" style="margin-right:8px; color:#0ea5e9; font-size:12px;"></i>
                Annex H — Air Defense
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Air defense planning, weapon control status, engagement criteria, and coordination procedures.
              </p>
              <div style="background-color:rgba(14, 165, 233, 0.1); padding:10px; border-radius:6px; border:1px solid #0ea5e9; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#7dd3fc; font-size:12px; margin:0 0 6px 0;">Air Defense Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Active air defense (engage threats)</li>
                  <li>Passive air defense (reduce vulnerability)</li>
                  <li>Weapon control status (WCS)</li>
                  <li>Air defense warning conditions</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #0ea5e9;">
                <div style="color:#7dd3fc; font-weight:600; font-size:12px; margin-bottom:4px;">Weapon Control Status</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">WEAPONS FREE, WEAPONS TIGHT, WEAPONS HOLD</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Cards Grid - Fourth Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 9: Annex I - Information Operations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-broadcast-tower" style="margin-right:8px; color:#ec4899; font-size:12px;"></i>
                Annex I — Information Operations (Updated FM 5-0 Nov 2024)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Information operations planning, OPSEC measures, deception operations, and electronic warfare.
              </p>
              <div style="background-color:rgba(236, 72, 153, 0.1); padding:10px; border-radius:6px; border:1px solid #ec4899; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#f9a8d4; font-size:12px; margin:0 0 6px 0;">IO Capabilities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Electronic warfare (EW)</li>
                  <li>Military deception (MILDEC)</li>
                  <li>Operations security (OPSEC)</li>
                  <li>Military information support operations</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #ec4899;">
                <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:4px;">Information Environment</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Physical, informational, and cognitive dimensions</div>
              </div>
            </div>
          </div>

          <!-- Card 10: Annex J - Public Affairs -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-newspaper" style="margin-right:8px; color:#06b6d4; font-size:12px;"></i>
                Annex J — Public Affairs
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Public affairs guidance, media engagement procedures, and information release authority.
              </p>
              <div style="background-color:rgba(6, 182, 212, 0.1); padding:10px; border-radius:6px; border:1px solid #06b6d4; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#67e8f9; font-size:12px; margin:0 0 6px 0;">PA Functions</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Media relations and engagement</li>
                  <li>Internal information programs</li>
                  <li>Community relations</li>
                  <li>Visual information operations</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #06b6d4;">
                <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:4px;">Release Authority</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Information release procedures and approval authority</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Cards Grid - Fifth Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 11: Annex K - Civil Affairs Operations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-handshake" style="margin-right:8px; color:#84cc16; font-size:12px;"></i>
                Annex K — Civil Affairs Operations (Updated FM 5-0 Nov 2024)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Civil affairs operations, civil-military cooperation, and host nation coordination.
              </p>
              <div style="background-color:rgba(132, 204, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #84cc16; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#bef264; font-size:12px; margin:0 0 6px 0;">CA Core Tasks</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Populace and resources control</li>
                  <li>Foreign humanitarian assistance</li>
                  <li>Support to civil administration</li>
                  <li>Nation assistance</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #84cc16;">
                <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:4px;">Civil Considerations</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">ASCOPE: Areas, Structures, Capabilities, Organizations, People, Events</div>
              </div>
            </div>
          </div>

          <!-- Card 12: Annex L - Reconnaissance and Surveillance -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-binoculars" style="margin-right:8px; color:#a855f7; font-size:12px;"></i>
                Annex L — Reconnaissance and Surveillance (Updated FM 5-0 Nov 2024)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Reconnaissance and surveillance planning, collection management, and reporting procedures.
              </p>
              <div style="background-color:rgba(168, 85, 247, 0.1); padding:10px; border-radius:6px; border:1px solid #a855f7; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 6px 0;">R&S Forms</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Route reconnaissance</li>
                  <li>Zone reconnaissance</li>
                  <li>Area reconnaissance</li>
                  <li>Reconnaissance in force</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #a855f7;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Collection Management</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Collection plan, asset tasking, and reporting timelines</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Cards Grid - Sixth Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px;">

          <!-- Card 13: Annex T - Cyber Electromagnetic Activities -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-wifi" style="margin-right:8px; color:#f97316; font-size:12px;"></i>
                Annex T — Cyber Electromagnetic Activities (New FM 5-0 Nov 2024)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Cyber electromagnetic activities, spectrum management, and electronic warfare coordination.
              </p>
              <div style="background-color:rgba(249, 115, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #f97316; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#fdba74; font-size:12px; margin:0 0 6px 0;">CEMA Components</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Cyberspace operations</li>
                  <li>Electronic warfare</li>
                  <li>Spectrum management operations</li>
                  <li>Electromagnetic protection</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #f97316;">
                <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:4px;">EMS Operations</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Electromagnetic spectrum management and deconfliction</div>
              </div>
            </div>
          </div>

          <!-- Card 14: Annex S - Special Operations Forces -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-user-secret" style="margin-right:8px; color:#4b5563; font-size:12px;"></i>
                Annex S — Special Operations Forces
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                SOF planning, coordination, and integration with conventional forces for specialized missions.
              </p>
              <div style="background-color:rgba(75, 85, 99, 0.1); padding:10px; border-radius:6px; border:1px solid #4b5563; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#9ca3af; font-size:12px; margin:0 0 6px 0;">SOF Core Activities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Direct action operations</li>
                  <li>Special reconnaissance</li>
                  <li>Foreign internal defense</li>
                  <li>Unconventional warfare</li>
                  <li>Counterterrorism operations</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #4b5563;">
                <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:4px;">Integration Requirements</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">JSOTF coordination, conventional force support, and joint/interagency deconfliction</div>
              </div>
            </div>
          </div>

          <!-- Card 15: Additional Annexes (As Required) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; display:flex; flex-direction:column; min-height:280px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
                <i class="fas fa-ellipsis-h" style="margin-right:8px; color:#6b7280; font-size:12px;"></i>
                Additional Annexes (As Required)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
                Additional annexes may be added as mission requirements dictate, following standard format.
              </p>
              <div style="background-color:rgba(107, 114, 128, 0.1); padding:10px; border-radius:6px; border:1px solid #6b7280; margin-bottom:8px;">
                <h5 style="font-weight:600; color:#d1d5db; font-size:12px; margin:0 0 6px 0;">Common Additional Annexes</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Annex M — Assessment</li>
                  <li>Annex N — Space Operations</li>
                  <li>Annex P — Host Nation Support</li>
                  <li>Annex Q — Knowledge Management</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:8px; border-radius:6px; border-left:3px solid #6b7280;">
                <div style="color:#d1d5db; font-weight:600; font-size:12px; margin-bottom:4px;">Format Standards</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.3;">Follow FM 5-0 Appendix C format for all additional annexes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default detailedAnalysisModule;

