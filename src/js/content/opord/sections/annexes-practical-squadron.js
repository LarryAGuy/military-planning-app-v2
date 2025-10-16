/**
 * OPORD Annexes - Squadron-Level Practical Examples
 * Operation ALLIED RESOLVE - Instantaneous Execution Squadron Command
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive tactical-level doctrinal content requirements
 * HIERARCHICAL SCAFFOLDING: Scaled down from Company level with reduced scope and instantaneous execution focus
 */

export default {
  getContent() {
    return `
      <div style="background-color:#1f2937; border-radius:8px; padding:24px;">
        <!-- Squadron-Level Header -->
        <div style="margin-bottom:24px; padding-bottom:16px; border-bottom:2px solid #374151;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-horse-head" style="margin-right:12px; color:#10b981; font-size:18px;"></i>
            Squadron-Level OPORD Annexes
          </h3>
          <p style="color:#9ca3af; font-size:14px; margin:0; line-height:1.4;">
            Operation ALLIED RESOLVE - Instantaneous Execution Squadron Command Level Examples
          </p>
          <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:6px; padding:12px; margin-top:12px;">
            <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Command Authority</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              Alpha Squadron (Reconnaissance) - Instantaneous Execution Squadron Command<br/>
              Operational Control: Troops, Platoons, Squadron Assets
            </div>
          </div>
        </div>

        <!-- Squadron-Level Annexes Grid Layout -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex A: Task Organization (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-sitemap" style="margin-right:10px; color:#2563eb; font-size:14px;"></i>
              Annex A — Task Organization (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(37, 99, 235, 0.1); border:1px solid #2563eb; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 12px 0;">Squadron Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Alpha Squadron (Reconnaissance) - Operation ALLIED RESOLVE</strong><br/>
                └── Squadron ALLIED RESOLVE (SAR)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Alpha Troop (Reconnaissance)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Bravo Troop (Reconnaissance)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Charlie Troop (Reconnaissance)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Delta Troop (Support)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Squadron Headquarters Troop<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;└── Squadron Support Troop
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Command Relationships</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>OPCON:</strong> All assigned troops to SAR</li>
                  <li><strong>ADCON:</strong> Retained by Company for administrative control</li>
                  <li><strong>TACON:</strong> Multinational platoons as required</li>
                  <li><strong>Support:</strong> Host nation forces provide instantaneous support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
              <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Squadron-level fires, reconnaissance, engineer, and sustainment assets under direct squadron command
              </div>
            </div>
          </div>

          <!-- Annex B: Intelligence (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-eye" style="margin-right:10px; color:#dc2626; font-size:14px;"></i>
              Annex B — Intelligence (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(220, 38, 38, 0.1); border:1px solid #dc2626; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:14px; margin:0 0 12px 0;">Squadron Intelligence Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Squadron Intelligence Command Structure:</strong><br/>
                • Squadron Intelligence Operations Center (SIOC)<br/>
                • Military Intelligence Section<br/>
                • Squadron Intelligence Support Element<br/>
                • Troop Intelligence Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Priority Intelligence Requirements (SPIR)</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy force disposition within squadron AOR</li>
                  <li>Adversary instantaneous threats and capabilities</li>
                  <li>Key terrain and instantaneous obstacles</li>
                  <li>Troop instantaneous coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Collection Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Squadron-level reconnaissance, surveillance, and intelligence assets coordinated through company networks
              </div>
            </div>
          </div>

        </div>
        <!-- End A-B Grid Row -->

        <!-- C-D Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex C: Operations (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-chess-knight" style="margin-right:10px; color:#16a34a; font-size:14px;"></i>
              Annex C — Operations (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(22, 163, 74, 0.1); border:1px solid #16a34a; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Squadron Instantaneous Execution Concept</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Phase I:</strong> Squadron Assembly and Instantaneous Preparation<br/>
                <strong>Phase II:</strong> Troop Coordination and Integration<br/>
                <strong>Phase III:</strong> Squadron Instantaneous Combat Operations<br/>
                <strong>Phase IV:</strong> Consolidation and Reorganization
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Control Measures</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Squadron Boundary:</strong> Eastern sector AOR</li>
                  <li><strong>Troop Boundaries:</strong> Alpha (North), Bravo (Center), Charlie (South)</li>
                  <li><strong>Squadron Reserve:</strong> Delta Troop (Support)</li>
                  <li><strong>Instantaneous Operations:</strong> 250m forward of FLOT</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Operations</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Squadron-level coordination of troop operations with integrated fires and instantaneous maneuver
              </div>
            </div>
          </div>

          <!-- Annex D: Fires (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-crosshairs" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
              Annex D — Fires (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Squadron Fires Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Squadron Fires Command Structure:</strong><br/>
                • Squadron Mortar Section<br/>
                • Squadron Fires Element (SFE)<br/>
                • Fire Support Teams (FIST)<br/>
                • Troop Weapons Squads
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Target Sets</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy instantaneous formations</li>
                  <li>Machine gun and sniper positions</li>
                  <li>Command posts and communications</li>
                  <li>Instantaneous logistics and assembly areas</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
              <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Fires Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Squadron mortar, machine gun systems, and instantaneous fires coordination assets under squadron fires command
              </div>
            </div>
          </div>
        </div>

        </div>

        </div>
        <!-- End C-D Grid Row -->

        <!-- F-I Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex F: Sustainment (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-truck" style="margin-right:10px; color:#059669; font-size:14px;"></i>
              Annex F — Sustainment (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(5, 150, 105, 0.1); border:1px solid #059669; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Squadron Sustainment Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Squadron Sustainment Command Structure:</strong><br/>
                • Squadron Support Troop<br/>
                • Forward Support Teams<br/>
                • Squadron Logistics Support Team<br/>
                • Troop Support Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Supply Requirements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Class I:</strong> 75 personnel x 3 hours</li>
                  <li><strong>Class III:</strong> 750 gallons/day fuel requirement</li>
                  <li><strong>Class V:</strong> Squadron ammunition reserves (30-minute supply)</li>
                  <li><strong>Class VIII:</strong> Squadron medical support and evacuation</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Lines of Communication</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Squadron distribution networks, instantaneous logistics elements, and troop support coordination
              </div>
            </div>
          </div>

          <!-- Annex I: Information Operations (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-broadcast-tower" style="margin-right:10px; color:#ec4899; font-size:14px;"></i>
              Annex I — Information Operations (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(236, 72, 153, 0.1); border:1px solid #ec4899; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#f9a8d4; font-size:14px; margin:0 0 12px 0;">Squadron Information Environment</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Squadron Information Operations:</strong><br/>
                • Squadron Information Operations Center<br/>
                • Military Information Support Team<br/>
                • Squadron Strategic Communications<br/>
                • Troop Information Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
                <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron IO Objectives</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Maintain instantaneous narrative</li>
                  <li>Counter enemy information</li>
                  <li>Preserve instantaneous support</li>
                  <li>Protect instantaneous security</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
              <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Communications</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Coordinated messaging across troops and instantaneous partners within squadron AOR
              </div>
            </div>
          </div>

        </div>
        <!-- End F-I Grid Row -->

        <!-- S-T Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex S: Special Operations Forces (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-user-secret" style="margin-right:10px; color:#4b5563; font-size:14px;"></i>
              Annex S — Special Operations Forces (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(75, 85, 99, 0.1); border:1px solid #4b5563; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#9ca3af; font-size:14px; margin:0 0 12px 0;">Squadron SOF Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Squadron Special Operations:</strong><br/>
                • Special Forces Operational Detachment<br/>
                • Squadron SOF Coordination Element<br/>
                • Special Operations Aviation Support<br/>
                • Troop SOF Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
                <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron SOF Missions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Direct action against instantaneous targets</li>
                  <li>Instantaneous reconnaissance missions</li>
                  <li>Foreign internal defense support</li>
                  <li>Instantaneous unconventional warfare</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
              <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                SOF operations synchronized with conventional squadron forces through squadron-level coordination
              </div>
            </div>
          </div>

          <!-- Annex T: Cyber Electromagnetic Activities (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-wifi" style="margin-right:10px; color:#f97316; font-size:14px;"></i>
              Annex T — Cyber Electromagnetic Activities (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(249, 115, 22, 0.1); border:1px solid #f97316; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fdba74; font-size:14px; margin:0 0 12px 0;">Squadron CEMA Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Squadron Cyber Electromagnetic Command:</strong><br/>
                • Squadron Cyber Operations Center<br/>
                • Electronic Warfare Section<br/>
                • Squadron Spectrum Management<br/>
                • Troop CEMA Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
                <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Cyber Operations</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Defensive cyber operations for squadron networks</li>
                  <li>Instantaneous cyber operations against targets</li>
                  <li>Electronic warfare support to troops</li>
                  <li>Instantaneous spectrum management coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron EMS Management</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Squadron-wide spectrum deconfliction and instantaneous electromagnetic coordination for Operation ALLIED RESOLVE
              </div>
            </div>
          </div>

        </div>
        <!-- End S-T Grid Row -->

        <!-- K-N Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex K: Civil Affairs Operations (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-handshake" style="margin-right:10px; color:#84cc16; font-size:14px;"></i>
              Annex K — Civil Affairs Operations (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(132, 204, 22, 0.1); border:1px solid #84cc16; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#bef264; font-size:14px; margin:0 0 12px 0;">Squadron Civil Affairs Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Squadron Civil-Military Coordination:</strong><br/>
                • Squadron Civil Affairs Team<br/>
                • Civil Affairs Detachment<br/>
                • Squadron Interagency Coordination<br/>
                • Troop Civil Affairs Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
                <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Civil Affairs Functions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Instantaneous host nation coordination</li>
                  <li>Civil-military cooperation</li>
                  <li>Infrastructure protection</li>
                  <li>Population and resource management</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
              <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Coordination</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Squadron-level civil affairs coordination with instantaneous authorities within Operation ALLIED RESOLVE sector
              </div>
            </div>
          </div>

          <!-- Annex N: Space Operations (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-satellite" style="margin-right:10px; color:#7c3aed; font-size:14px;"></i>
              Annex N — Space Operations (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(124, 58, 237, 0.1); border:1px solid #7c3aed; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Squadron Space Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Squadron Space Operations:</strong><br/>
                • Squadron Space Support Element<br/>
                • GPS/PNT Coordination Team<br/>
                • Squadron Satellite Communications<br/>
                • Troop Space Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Space Capabilities</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Squadron satellite communications</li>
                  <li>GPS and instantaneous timing</li>
                  <li>Space-based intelligence coordination</li>
                  <li>Troop space support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Operations Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Space support to Operation ALLIED RESOLVE through squadron-level satellite communications and navigation
              </div>
            </div>
          </div>

        </div>
        <!-- End K-N Grid Row -->

        <!-- P Grid Row (Single) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex P: Host Nation Support (Squadron Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-flag" style="margin-right:10px; color:#0891b2; font-size:14px;"></i>
              Annex P — Host Nation Support (Squadron Instantaneous Execution Level)
            </h4>

            <div style="background-color:rgba(8, 145, 178, 0.1); border:1px solid #0891b2; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:14px; margin:0 0 12px 0;">Squadron HNS Coordination Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Squadron Host Nation Support:</strong><br/>
                • Squadron Host Nation Support Team<br/>
                • Logistics Coordination Element<br/>
                • Squadron Partner Liaison<br/>
                • Troop Support Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
                <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Support Agreements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Squadron-level host nation coordination</li>
                  <li>Instantaneous logistics support</li>
                  <li>Infrastructure access coordination</li>
                  <li>Emergency support procedures</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
              <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Squadron coordination with instantaneous authorities for host nation support across Operation ALLIED RESOLVE sector
              </div>
            </div>
          </div>

        </div>
        <!-- End Squadron-Level Annexes Grid Layout -->

        <!-- Squadron Command & Control -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-satellite-dish" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
            Squadron Command & Control Architecture
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <!-- Left Column -->
            <div>
              <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Squadron Command Structure</h5>
                <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                  <strong>Squadron Command Hierarchy:</strong><br/>
                  • Alpha Company (Real-Time Execution Command)<br/>
                  • Alpha Squadron (Instantaneous Execution Command)<br/>
                  • Troop Commands (Direct Action)<br/>
                  • Platoon Commands (Execution)
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div>
              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Communications</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Squadron command post (main/tactical)</li>
                  <li>Troop coordination networks</li>
                  <li>Platoon liaison elements</li>
                  <li>Instantaneous coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Squadron Instantaneous Execution Considerations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-king" style="margin-right:10px; color:#8b5cf6; font-size:14px;"></i>
            Squadron Instantaneous Execution Considerations
          </h4>

          <div style="background-color:rgba(139, 92, 246, 0.1); border:1px solid #8b5cf6; border-radius:6px; padding:16px; margin-bottom:16px;">
            <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Squadron Instantaneous Execution Factors</h5>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
              <!-- Left Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Instantaneous Execution Considerations</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Troop and platoon integration</li>
                    <li>Squadron fires coordination</li>
                    <li>Instantaneous sustainment requirements</li>
                    <li>Instantaneous execution tempo management</li>
                    <li>Instantaneous coordination</li>
                  </ul>
                </div>
              </div>

              <!-- Right Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Planning Horizons</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Instantaneous preparation (30 minutes-3 hours)</li>
                    <li>Squadron sustainment capacity</li>
                    <li>Troop instantaneous employment</li>
                    <li>Platoon instantaneous integration</li>
                    <li>Instantaneous execution sustainability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6;">
            <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron Risk Assessment</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              Squadron-level risks include troop coordination challenges, instantaneous integration, sustainment limitations, and instantaneous execution tempo
            </div>
          </div>
        </div>

        <!-- Hierarchical Scaffolding Summary -->
        <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:8px; padding:20px;">
          <h4 style="font-size:16px; font-weight:600; color:#6ee7b7; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:10px; color:#10b981; font-size:14px;"></i>
            Squadron-Level Complexity Scaling
          </h4>

          <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:16px;">
            <strong>Hierarchical Progression from Company Level:</strong>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Company → Squadron Scaling</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li><strong>Scope:</strong> Company Zone → Squadron Area</li>
                <li><strong>Timeline:</strong> Minutes → Seconds/Minutes</li>
                <li><strong>Forces:</strong> Company/Platoon → Squadron/Troop</li>
                <li><strong>Authority:</strong> Real-Time Execution → Instantaneous Execution</li>
              </ul>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Squadron-Level Characteristics</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li>Troop and platoon coordination</li>
                <li>Instantaneous execution-level planning</li>
                <li>Squadron-wide resource allocation</li>
                <li>Instantaneous execution objectives</li>
                <li>Area command authority</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
