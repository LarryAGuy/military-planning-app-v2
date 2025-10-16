/**
 * OPORD Annexes - Army-Level Practical Examples
 * Operation ALLIED RESOLVE - Strategic Army Command
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive strategic-level doctrinal content requirements
 * HIERARCHICAL SCAFFOLDING: Scaled down from Theater level with reduced scope and operational focus
 */

export default {
  getContent() {
    return `
      <div style="background-color:#1f2937; border-radius:8px; padding:24px;">
        <!-- Army-Level Header -->
        <div style="margin-bottom:24px; padding-bottom:16px; border-bottom:2px solid #374151;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-star" style="margin-right:12px; color:#10b981; font-size:18px;"></i>
            Army-Level OPORD Annexes
          </h3>
          <p style="color:#9ca3af; font-size:14px; margin:0; line-height:1.4;">
            Operation ALLIED RESOLVE - Strategic Army Command Level Examples
          </p>
          <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:6px; padding:12px; margin-top:12px;">
            <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Army Command Authority</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              U.S. Army Europe and Africa (USAREUR-AF) - Strategic Army Command<br/>
              Operational Control: Corps, Divisions, Strategic Army Assets
            </div>
          </div>
        </div>

        <!-- Army-Level Annexes Grid Layout -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex A: Task Organization (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-sitemap" style="margin-right:10px; color:#2563eb; font-size:14px;"></i>
              Annex A — Task Organization (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(37, 99, 235, 0.1); border:1px solid #2563eb; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 12px 0;">Army Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>USAREUR-AF (Strategic Army Command)</strong><br/>
                └── Army ALLIED RESOLVE (AAR)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── V Corps (Forward)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── XVIII Airborne Corps<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── 1st Armored Division<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── 82nd Airborne Division<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Army Artillery Command<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;└── Army Sustainment Command
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Army Command Relationships</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>OPCON:</strong> All assigned corps and divisions to AAR</li>
                  <li><strong>ADCON:</strong> Retained by USAREUR-AF for administrative control</li>
                  <li><strong>TACON:</strong> Multinational divisions as required</li>
                  <li><strong>Support:</strong> Host nation forces provide general support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
              <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Army Strategic Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Army-level fires, air defense, aviation, and sustainment assets under direct army command authority
              </div>
            </div>
          </div>

          <!-- Annex B: Intelligence (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-eye" style="margin-right:10px; color:#dc2626; font-size:14px;"></i>
              Annex B — Intelligence (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(220, 38, 38, 0.1); border:1px solid #dc2626; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:14px; margin:0 0 12px 0;">Army Intelligence Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Army Intelligence Command Structure:</strong><br/>
                • Army Intelligence Operations Center (AIOC)<br/>
                • Military Intelligence Brigade (Theater)<br/>
                • Army Intelligence Support Activity<br/>
                • Multinational Intelligence Coordination Cell
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Army Priority Intelligence Requirements (APIR)</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy force disposition within army AOR</li>
                  <li>Adversary operational reserves and capabilities</li>
                  <li>Critical infrastructure and logistics nodes</li>
                  <li>Host nation support and alliance coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Army Collection Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Army-level HUMINT, SIGINT, and GEOINT capabilities coordinated through theater intelligence networks
              </div>
            </div>
          </div>

        </div>
        <!-- End A-B Grid Row -->

        <!-- C-D Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex C: Operations (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-chess-knight" style="margin-right:10px; color:#16a34a; font-size:14px;"></i>
              Annex C — Operations (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(22, 163, 74, 0.1); border:1px solid #16a34a; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Army Operational Concept</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Phase I:</strong> Army Deployment and Force Build-up<br/>
                <strong>Phase II:</strong> Corps Integration and Operational Preparation<br/>
                <strong>Phase III:</strong> Large Scale Combat Operations<br/>
                <strong>Phase IV:</strong> Consolidation and Transition
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Army Control Measures</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Army Boundary:</strong> Central/Eastern Europe AOR</li>
                  <li><strong>Corps Boundaries:</strong> V Corps (North), XVIII Corps (South)</li>
                  <li><strong>Army Reserve:</strong> 82nd Airborne Division</li>
                  <li><strong>Deep Operations:</strong> 150km forward of FLOT</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Multi-Domain Operations</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Army-level coordination of land, air, space, and cyber operations with integrated information warfare
              </div>
            </div>
          </div>

          <!-- Annex D: Fires (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-crosshairs" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
              Annex D — Fires (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Army Fires Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Army Fires Command Structure:</strong><br/>
                • Army Artillery Command (ARTY)<br/>
                • Army Fires Element (AFE)<br/>
                • Target Acquisition Battalion<br/>
                • Long Range Precision Fires Regiment
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Army Target Sets</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy operational reserves</li>
                  <li>Command and control nodes</li>
                  <li>Artillery and air defense systems</li>
                  <li>Logistics and supply nodes</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
              <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Army Fires Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                HIMARS, MLRS, long-range precision fires, and army aviation assets under army fires command
              </div>
            </div>
          </div>
        </div>

        </div>
        <!-- End C-D Grid Row -->

        <!-- F-I Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex F: Sustainment (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-truck" style="margin-right:10px; color:#059669; font-size:14px;"></i>
              Annex F — Sustainment (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(5, 150, 105, 0.1); border:1px solid #059669; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Army Sustainment Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Army Sustainment Command Structure:</strong><br/>
                • Army Sustainment Command (ASC)<br/>
                • Expeditionary Sustainment Command<br/>
                • Combat Sustainment Support Battalion<br/>
                • Army Logistics Support Group
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Army Supply Requirements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Class I:</strong> 150,000 personnel x 60 days</li>
                  <li><strong>Class III:</strong> 800,000 gallons/day fuel requirement</li>
                  <li><strong>Class V:</strong> Army ammunition reserves (15-day supply)</li>
                  <li><strong>Class VIII:</strong> Army medical supplies and evacuation</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Army Lines of Communication</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                European rail networks, strategic airlift, and army distribution networks within AOR
              </div>
            </div>
          </div>

          <!-- Annex I: Information Operations (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-broadcast-tower" style="margin-right:10px; color:#ec4899; font-size:14px;"></i>
              Annex I — Information Operations (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(236, 72, 153, 0.1); border:1px solid #ec4899; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#f9a8d4; font-size:14px; margin:0 0 12px 0;">Army Information Environment</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Army Information Operations Centers:</strong><br/>
                • Army Information Operations Center (AIOC)<br/>
                • Military Information Support Operations<br/>
                • Army Strategic Communications Cell<br/>
                • Multinational Information Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
                <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Army IO Objectives</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Maintain operational narrative control</li>
                  <li>Counter enemy disinformation</li>
                  <li>Preserve host nation support</li>
                  <li>Protect operational security</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
              <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Army Communications</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Coordinated messaging across corps, divisions, and multinational partners within army AOR
              </div>
            </div>
          </div>

        </div>
        <!-- End F-I Grid Row -->

        <!-- S-T Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex S: Special Operations Forces (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-user-secret" style="margin-right:10px; color:#4b5563; font-size:14px;"></i>
              Annex S — Special Operations Forces (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(75, 85, 99, 0.1); border:1px solid #4b5563; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#9ca3af; font-size:14px; margin:0 0 12px 0;">Army SOF Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Army Special Operations Command:</strong><br/>
                • Special Forces Group (Airborne)<br/>
                • Ranger Regiment (Elements)<br/>
                • Special Operations Aviation Regiment<br/>
                • Army SOF Coordination Element
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
                <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Army SOF Missions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Direct action against high-value targets</li>
                  <li>Special reconnaissance operations</li>
                  <li>Foreign internal defense coordination</li>
                  <li>Unconventional warfare support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
              <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Army Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                SOF operations synchronized with conventional army forces through army-level coordination cells
              </div>
            </div>
          </div>

          <!-- Annex T: Cyber Electromagnetic Activities (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-wifi" style="margin-right:10px; color:#f97316; font-size:14px;"></i>
              Annex T — Cyber Electromagnetic Activities (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(249, 115, 22, 0.1); border:1px solid #f97316; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fdba74; font-size:14px; margin:0 0 12px 0;">Army CEMA Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Army Cyber Electromagnetic Command:</strong><br/>
                • Army Cyber Operations Center<br/>
                • Electronic Warfare Battalion<br/>
                • Army Spectrum Management Office<br/>
                • Cyber Defense Coordination Cell
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
                <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Army Cyber Operations</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Defensive cyber operations for army networks</li>
                  <li>Offensive cyber operations against targets</li>
                  <li>Electronic warfare support to operations</li>
                  <li>Spectrum management coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Army EMS Management</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Army-wide spectrum deconfliction and electromagnetic battle management for Operation ALLIED RESOLVE
              </div>
            </div>
          </div>

        </div>
        <!-- End S-T Grid Row -->

        <!-- K-N Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex K: Civil Affairs Operations (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-handshake" style="margin-right:10px; color:#84cc16; font-size:14px;"></i>
              Annex K — Civil Affairs Operations (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(132, 204, 22, 0.1); border:1px solid #84cc16; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#bef264; font-size:14px; margin:0 0 12px 0;">Army Civil Affairs Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Army Civil-Military Coordination:</strong><br/>
                • Army Civil Affairs Command<br/>
                • Civil Affairs Brigade<br/>
                • Army Interagency Coordination Group<br/>
                • Host Nation Liaison Office
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
                <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Army Civil Affairs Functions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Host nation support coordination</li>
                  <li>Civil-military cooperation with allies</li>
                  <li>Infrastructure protection partnerships</li>
                  <li>Population and resource control</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
              <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Army Coordination</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Army-level civil affairs coordination with European allies and partner nations within Operation ALLIED RESOLVE AOR
              </div>
            </div>
          </div>

          <!-- Annex N: Space Operations (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-satellite" style="margin-right:10px; color:#7c3aed; font-size:14px;"></i>
              Annex N — Space Operations (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(124, 58, 237, 0.1); border:1px solid #7c3aed; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Army Space Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Army Space Operations Command:</strong><br/>
                • Army Space Operations Center<br/>
                • Space Support Element<br/>
                • Army GPS/PNT Coordination Cell<br/>
                • Satellite Communications Battalion
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Army Space Capabilities</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Army satellite communications</li>
                  <li>GPS and precision navigation timing</li>
                  <li>Space-based intelligence support</li>
                  <li>Missile warning coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Army Operations Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Space support to Operation ALLIED RESOLVE through army-level satellite communications and navigation services
              </div>
            </div>
          </div>

        </div>
        <!-- End K-N Grid Row -->

        <!-- P Grid Row (Single) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex P: Host Nation Support (Army Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-flag" style="margin-right:10px; color:#0891b2; font-size:14px;"></i>
              Annex P — Host Nation Support (Army Strategic Level)
            </h4>

            <div style="background-color:rgba(8, 145, 178, 0.1); border:1px solid #0891b2; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:14px; margin:0 0 12px 0;">Army HNS Coordination Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Army Host Nation Support Command:</strong><br/>
                • Army Host Nation Support Office<br/>
                • Logistics Coordination Center<br/>
                • Army Partner Integration Cell<br/>
                • European Support Group
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
                <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Army Support Agreements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Army-level host nation support agreements</li>
                  <li>Logistics support arrangements</li>
                  <li>Infrastructure access agreements</li>
                  <li>Emergency support protocols</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
              <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Army Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Army coordination with European allies for seamless host nation support across Operation ALLIED RESOLVE operations
              </div>
            </div>
          </div>

        </div>
        <!-- End Army-Level Annexes Grid Layout -->

        <!-- Army Command & Control -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-satellite-dish" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
            Army Command & Control Architecture
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <!-- Left Column -->
            <div>
              <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Army Command Structure</h5>
                <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                  <strong>Army Command Hierarchy:</strong><br/>
                  • USAREUR-AF (Strategic Army Command)<br/>
                  • Army ALLIED RESOLVE (Operational Command)<br/>
                  • Corps Commands (Tactical Execution)<br/>
                  • Division Commands (Direct Action)
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div>
              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Army Communications</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Army command post (main/tactical)</li>
                  <li>Corps coordination networks</li>
                  <li>Division liaison elements</li>
                  <li>Multinational coordination centers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Army Strategic Considerations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-king" style="margin-right:10px; color:#8b5cf6; font-size:14px;"></i>
            Army Strategic Considerations
          </h4>

          <div style="background-color:rgba(139, 92, 246, 0.1); border:1px solid #8b5cf6; border-radius:6px; padding:16px; margin-bottom:16px;">
            <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Army Strategic Factors</h5>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
              <!-- Left Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Operational Considerations</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Corps and division integration</li>
                    <li>Multinational force coordination</li>
                    <li>Host nation support requirements</li>
                    <li>Operational reach and sustainment</li>
                    <li>Alliance coordination protocols</li>
                  </ul>
                </div>
              </div>

              <!-- Right Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Army Planning Horizons</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Operational deployment (30-60 days)</li>
                    <li>Army sustainment capacity</li>
                    <li>Corps operational employment</li>
                    <li>Division tactical integration</li>
                    <li>Long-term operational sustainability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6;">
            <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Army Risk Assessment</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              Army-level risks include corps coordination challenges, multinational integration, sustainment limitations, and operational tempo sustainability
            </div>
          </div>
        </div>

        <!-- Hierarchical Scaffolding Summary -->
        <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:8px; padding:20px;">
          <h4 style="font-size:16px; font-weight:600; color:#6ee7b7; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:10px; color:#10b981; font-size:14px;"></i>
            Army-Level Complexity Scaling
          </h4>

          <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:16px;">
            <strong>Hierarchical Progression from Theater Level:</strong>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Theater → Army Scaling</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li><strong>Scope:</strong> Theater-wide → Army AOR</li>
                <li><strong>Timeline:</strong> Months/Years → Weeks/Months</li>
                <li><strong>Forces:</strong> Joint/Combined → Army/Corps</li>
                <li><strong>Authority:</strong> Strategic → Operational</li>
              </ul>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Army-Level Characteristics</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li>Corps and division coordination</li>
                <li>Operational-level planning</li>
                <li>Army-wide resource allocation</li>
                <li>Medium-term operational objectives</li>
                <li>Regional command authority</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
