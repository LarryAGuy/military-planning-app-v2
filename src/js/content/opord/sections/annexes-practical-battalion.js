/**
 * OPORD Annexes - Battalion-Level Practical Examples
 * Operation ALLIED RESOLVE - Immediate Execution Battalion Command
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive tactical-level doctrinal content requirements
 * HIERARCHICAL SCAFFOLDING: Scaled down from Group level with reduced scope and immediate execution focus
 */

export default {
  getContent() {
    return `
      <div style="background-color:#1f2937; border-radius:8px; padding:24px;">
        <!-- Battalion-Level Header -->
        <div style="margin-bottom:24px; padding-bottom:16px; border-bottom:2px solid #374151;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-flag" style="margin-right:12px; color:#10b981; font-size:18px;"></i>
            Battalion-Level OPORD Annexes
          </h3>
          <p style="color:#9ca3af; font-size:14px; margin:0; line-height:1.4;">
            Operation ALLIED RESOLVE - Immediate Execution Battalion Command Level Examples
          </p>
          <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:6px; padding:12px; margin-top:12px;">
            <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Command Authority</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              1st Combined Arms Battalion - Immediate Execution Battalion Command<br/>
              Operational Control: Companies, Platoons, Battalion Assets
            </div>
          </div>
        </div>

        <!-- Battalion-Level Annexes Grid Layout -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex A: Task Organization (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-sitemap" style="margin-right:10px; color:#2563eb; font-size:14px;"></i>
              Annex A — Task Organization (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(37, 99, 235, 0.1); border:1px solid #2563eb; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 12px 0;">Battalion Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>1st Combined Arms Battalion - Operation ALLIED RESOLVE</strong><br/>
                └── Battalion ALLIED RESOLVE (BAR)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Alpha Company (Mechanized Infantry)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Bravo Company (Armor)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Charlie Company (Mechanized Infantry)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Delta Company (Armor)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Echo Company (Forward Support)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;└── Headquarters Company
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Command Relationships</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>OPCON:</strong> All assigned companies to BAR</li>
                  <li><strong>ADCON:</strong> Retained by Group for administrative control</li>
                  <li><strong>TACON:</strong> Multinational platoons as required</li>
                  <li><strong>Support:</strong> Host nation forces provide immediate support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
              <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Battalion-level fires, reconnaissance, engineer, and sustainment assets under direct battalion command
              </div>
            </div>
          </div>

          <!-- Annex B: Intelligence (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-eye" style="margin-right:10px; color:#dc2626; font-size:14px;"></i>
              Annex B — Intelligence (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(220, 38, 38, 0.1); border:1px solid #dc2626; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:14px; margin:0 0 12px 0;">Battalion Intelligence Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Battalion Intelligence Command Structure:</strong><br/>
                • Battalion Intelligence Operations Center (BIOC)<br/>
                • Military Intelligence Section<br/>
                • Battalion Intelligence Support Element<br/>
                • Company Intelligence Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Priority Intelligence Requirements (BPIR)</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy force disposition within battalion AOR</li>
                  <li>Adversary immediate threats and capabilities</li>
                  <li>Key terrain and immediate obstacles</li>
                  <li>Company immediate coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Collection Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Battalion-level reconnaissance, surveillance, and intelligence assets coordinated through group networks
              </div>
            </div>
          </div>

        </div>
        <!-- End A-B Grid Row -->

        <!-- C-D Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex C: Operations (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-chess-knight" style="margin-right:10px; color:#16a34a; font-size:14px;"></i>
              Annex C — Operations (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(22, 163, 74, 0.1); border:1px solid #16a34a; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Battalion Immediate Execution Concept</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Phase I:</strong> Battalion Assembly and Immediate Preparation<br/>
                <strong>Phase II:</strong> Company Coordination and Integration<br/>
                <strong>Phase III:</strong> Battalion Immediate Combat Operations<br/>
                <strong>Phase IV:</strong> Consolidation and Reorganization
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Control Measures</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Battalion Boundary:</strong> Western sector AOR</li>
                  <li><strong>Company Boundaries:</strong> Alpha (North), Bravo (Center), Charlie (South)</li>
                  <li><strong>Battalion Reserve:</strong> Delta Company (Armor)</li>
                  <li><strong>Immediate Operations:</strong> 1km forward of FLOT</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Operations</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Battalion-level coordination of company operations with integrated fires and immediate maneuver
              </div>
            </div>
          </div>

          <!-- Annex D: Fires (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-crosshairs" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
              Annex D — Fires (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Battalion Fires Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Battalion Fires Command Structure:</strong><br/>
                • Battalion Mortar Platoon<br/>
                • Battalion Fires Element (BFE)<br/>
                • Fire Support Teams (FIST)<br/>
                • Company Mortar Sections
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Target Sets</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy immediate formations</li>
                  <li>Machine gun and sniper positions</li>
                  <li>Command posts and communications</li>
                  <li>Immediate logistics and assembly areas</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
              <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Fires Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Battalion mortar, machine gun systems, and immediate fires coordination assets under battalion fires command
              </div>
            </div>
          </div>
        </div>

        </div>

        </div>
        <!-- End C-D Grid Row -->

        <!-- F-I Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex F: Sustainment (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-truck" style="margin-right:10px; color:#059669; font-size:14px;"></i>
              Annex F — Sustainment (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(5, 150, 105, 0.1); border:1px solid #059669; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Battalion Sustainment Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Battalion Sustainment Command Structure:</strong><br/>
                • Echo Company (Forward Support)<br/>
                • Forward Support Platoons<br/>
                • Battalion Logistics Support Team<br/>
                • Company Support Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Supply Requirements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Class I:</strong> 600 personnel x 12 hours</li>
                  <li><strong>Class III:</strong> 6,000 gallons/day fuel requirement</li>
                  <li><strong>Class V:</strong> Battalion ammunition reserves (3-hour supply)</li>
                  <li><strong>Class VIII:</strong> Battalion medical support and evacuation</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Lines of Communication</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Battalion distribution networks, immediate logistics elements, and company support coordination
              </div>
            </div>
          </div>

          <!-- Annex I: Information Operations (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-broadcast-tower" style="margin-right:10px; color:#ec4899; font-size:14px;"></i>
              Annex I — Information Operations (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(236, 72, 153, 0.1); border:1px solid #ec4899; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#f9a8d4; font-size:14px; margin:0 0 12px 0;">Battalion Information Environment</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Battalion Information Operations:</strong><br/>
                • Battalion Information Operations Center<br/>
                • Military Information Support Team<br/>
                • Battalion Strategic Communications<br/>
                • Company Information Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
                <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion IO Objectives</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Maintain immediate narrative</li>
                  <li>Counter enemy information</li>
                  <li>Preserve immediate support</li>
                  <li>Protect immediate security</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
              <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Communications</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Coordinated messaging across companies and immediate partners within battalion AOR
              </div>
            </div>
          </div>

        </div>
        <!-- End F-I Grid Row -->

        <!-- S-T Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex S: Special Operations Forces (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-user-secret" style="margin-right:10px; color:#4b5563; font-size:14px;"></i>
              Annex S — Special Operations Forces (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(75, 85, 99, 0.1); border:1px solid #4b5563; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#9ca3af; font-size:14px; margin:0 0 12px 0;">Battalion SOF Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Battalion Special Operations:</strong><br/>
                • Special Forces Operational Detachment<br/>
                • Battalion SOF Coordination Element<br/>
                • Special Operations Aviation Support<br/>
                • Company SOF Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
                <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion SOF Missions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Direct action against immediate targets</li>
                  <li>Immediate reconnaissance missions</li>
                  <li>Foreign internal defense support</li>
                  <li>Immediate unconventional warfare</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
              <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                SOF operations synchronized with conventional battalion forces through battalion-level coordination
              </div>
            </div>
          </div>

          <!-- Annex T: Cyber Electromagnetic Activities (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-wifi" style="margin-right:10px; color:#f97316; font-size:14px;"></i>
              Annex T — Cyber Electromagnetic Activities (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(249, 115, 22, 0.1); border:1px solid #f97316; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fdba74; font-size:14px; margin:0 0 12px 0;">Battalion CEMA Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Battalion Cyber Electromagnetic Command:</strong><br/>
                • Battalion Cyber Operations Center<br/>
                • Electronic Warfare Section<br/>
                • Battalion Spectrum Management<br/>
                • Company CEMA Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
                <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Cyber Operations</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Defensive cyber operations for battalion networks</li>
                  <li>Immediate cyber operations against targets</li>
                  <li>Electronic warfare support to companies</li>
                  <li>Immediate spectrum management coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion EMS Management</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Battalion-wide spectrum deconfliction and immediate electromagnetic coordination for Operation ALLIED RESOLVE
              </div>
            </div>
          </div>

        </div>
        <!-- End S-T Grid Row -->

        <!-- K-N Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex K: Civil Affairs Operations (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-handshake" style="margin-right:10px; color:#84cc16; font-size:14px;"></i>
              Annex K — Civil Affairs Operations (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(132, 204, 22, 0.1); border:1px solid #84cc16; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#bef264; font-size:14px; margin:0 0 12px 0;">Battalion Civil Affairs Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Battalion Civil-Military Coordination:</strong><br/>
                • Battalion Civil Affairs Team<br/>
                • Civil Affairs Detachment<br/>
                • Battalion Interagency Coordination<br/>
                • Company Civil Affairs Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
                <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Civil Affairs Functions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Immediate host nation coordination</li>
                  <li>Civil-military cooperation</li>
                  <li>Infrastructure protection</li>
                  <li>Population and resource management</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
              <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Coordination</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Battalion-level civil affairs coordination with immediate authorities within Operation ALLIED RESOLVE sector
              </div>
            </div>
          </div>

          <!-- Annex N: Space Operations (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-satellite" style="margin-right:10px; color:#7c3aed; font-size:14px;"></i>
              Annex N — Space Operations (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(124, 58, 237, 0.1); border:1px solid #7c3aed; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Battalion Space Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Battalion Space Operations:</strong><br/>
                • Battalion Space Support Element<br/>
                • GPS/PNT Coordination Team<br/>
                • Battalion Satellite Communications<br/>
                • Company Space Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Space Capabilities</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Battalion satellite communications</li>
                  <li>GPS and immediate timing</li>
                  <li>Space-based intelligence coordination</li>
                  <li>Company space support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Operations Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Space support to Operation ALLIED RESOLVE through battalion-level satellite communications and navigation
              </div>
            </div>
          </div>

        </div>
        <!-- End K-N Grid Row -->

        <!-- P Grid Row (Single) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex P: Host Nation Support (Battalion Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-flag" style="margin-right:10px; color:#0891b2; font-size:14px;"></i>
              Annex P — Host Nation Support (Battalion Immediate Execution Level)
            </h4>

            <div style="background-color:rgba(8, 145, 178, 0.1); border:1px solid #0891b2; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:14px; margin:0 0 12px 0;">Battalion HNS Coordination Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Battalion Host Nation Support:</strong><br/>
                • Battalion Host Nation Support Team<br/>
                • Logistics Coordination Element<br/>
                • Battalion Partner Liaison<br/>
                • Company Support Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
                <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Support Agreements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Battalion-level host nation coordination</li>
                  <li>Immediate logistics support</li>
                  <li>Infrastructure access coordination</li>
                  <li>Emergency support procedures</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
              <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Battalion coordination with immediate authorities for host nation support across Operation ALLIED RESOLVE sector
              </div>
            </div>
          </div>

        </div>
        <!-- End Battalion-Level Annexes Grid Layout -->

        <!-- Battalion Command & Control -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-satellite-dish" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
            Battalion Command & Control Architecture
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <!-- Left Column -->
            <div>
              <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Battalion Command Structure</h5>
                <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                  <strong>Battalion Command Hierarchy:</strong><br/>
                  • 1st Combined Arms Group (Direct Action Command)<br/>
                  • 1st Combined Arms Battalion (Immediate Execution Command)<br/>
                  • Company Commands (Direct Action)<br/>
                  • Platoon Commands (Execution)
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div>
              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Communications</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Battalion command post (main/tactical)</li>
                  <li>Company coordination networks</li>
                  <li>Platoon liaison elements</li>
                  <li>Immediate coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Battalion Immediate Execution Considerations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-king" style="margin-right:10px; color:#8b5cf6; font-size:14px;"></i>
            Battalion Immediate Execution Considerations
          </h4>

          <div style="background-color:rgba(139, 92, 246, 0.1); border:1px solid #8b5cf6; border-radius:6px; padding:16px; margin-bottom:16px;">
            <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Battalion Immediate Execution Factors</h5>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
              <!-- Left Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Immediate Execution Considerations</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Company and platoon integration</li>
                    <li>Battalion fires coordination</li>
                    <li>Immediate sustainment requirements</li>
                    <li>Immediate execution tempo management</li>
                    <li>Immediate coordination</li>
                  </ul>
                </div>
              </div>

              <!-- Right Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Planning Horizons</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Immediate preparation (3-12 hours)</li>
                    <li>Battalion sustainment capacity</li>
                    <li>Company immediate employment</li>
                    <li>Platoon immediate integration</li>
                    <li>Immediate execution sustainability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6;">
            <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion Risk Assessment</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              Battalion-level risks include company coordination challenges, immediate integration, sustainment limitations, and immediate execution tempo
            </div>
          </div>
        </div>

        <!-- Hierarchical Scaffolding Summary -->
        <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:8px; padding:20px;">
          <h4 style="font-size:16px; font-weight:600; color:#6ee7b7; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:10px; color:#10b981; font-size:14px;"></i>
            Battalion-Level Complexity Scaling
          </h4>

          <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:16px;">
            <strong>Hierarchical Progression from Group Level:</strong>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Group → Battalion Scaling</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li><strong>Scope:</strong> Group Zone → Battalion Area</li>
                <li><strong>Timeline:</strong> Minutes → Minutes/Hours</li>
                <li><strong>Forces:</strong> Group/Battalion → Battalion/Company</li>
                <li><strong>Authority:</strong> Execution → Immediate Execution</li>
              </ul>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Battalion-Level Characteristics</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li>Company and platoon coordination</li>
                <li>Immediate execution-level planning</li>
                <li>Battalion-wide resource allocation</li>
                <li>Immediate execution objectives</li>
                <li>Area command authority</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
