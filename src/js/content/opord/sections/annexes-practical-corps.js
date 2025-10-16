/**
 * OPORD Annexes - Corps-Level Practical Examples
 * Operation ALLIED RESOLVE - Operational Corps Command
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive strategic-level doctrinal content requirements
 * HIERARCHICAL SCAFFOLDING: Scaled down from Army level with reduced scope and tactical focus
 */

export default {
  getContent() {
    return `
      <div style="background-color:#1f2937; border-radius:8px; padding:24px;">
        <!-- Corps-Level Header -->
        <div style="margin-bottom:24px; padding-bottom:16px; border-bottom:2px solid #374151;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-crown" style="margin-right:12px; color:#10b981; font-size:18px;"></i>
            Corps-Level OPORD Annexes
          </h3>
          <p style="color:#9ca3af; font-size:14px; margin:0; line-height:1.4;">
            Operation ALLIED RESOLVE - Operational Corps Command Level Examples
          </p>
          <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:6px; padding:12px; margin-top:12px;">
            <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Command Authority</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              V Corps (Forward) - Operational Corps Command<br/>
              Operational Control: Divisions, Brigades, Corps Assets
            </div>
          </div>
        </div>

        <!-- Corps-Level Annexes Grid Layout -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex A: Task Organization (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-sitemap" style="margin-right:10px; color:#2563eb; font-size:14px;"></i>
              Annex A — Task Organization (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(37, 99, 235, 0.1); border:1px solid #2563eb; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 12px 0;">Corps Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>V Corps (Forward) - Operation ALLIED RESOLVE</strong><br/>
                └── Corps ALLIED RESOLVE (CAR)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── 1st Armored Division<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── 3rd Infantry Division<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── 173rd Airborne Brigade<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Corps Artillery Brigade<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Corps Engineer Brigade<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;└── Corps Sustainment Brigade
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Command Relationships</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>OPCON:</strong> All assigned divisions to CAR</li>
                  <li><strong>ADCON:</strong> Retained by Army for administrative control</li>
                  <li><strong>TACON:</strong> Multinational brigades as required</li>
                  <li><strong>Support:</strong> Host nation forces provide area support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
              <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Corps-level fires, engineer, aviation, and sustainment assets under direct corps command
              </div>
            </div>
          </div>

          <!-- Annex B: Intelligence (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-eye" style="margin-right:10px; color:#dc2626; font-size:14px;"></i>
              Annex B — Intelligence (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(220, 38, 38, 0.1); border:1px solid #dc2626; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:14px; margin:0 0 12px 0;">Corps Intelligence Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Corps Intelligence Command Structure:</strong><br/>
                • Corps Intelligence Operations Center (CIOC)<br/>
                • Military Intelligence Brigade<br/>
                • Corps Intelligence Support Element<br/>
                • Division Intelligence Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Priority Intelligence Requirements (CPIR)</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy force disposition within corps AOR</li>
                  <li>Adversary tactical reserves and capabilities</li>
                  <li>Key terrain and obstacle systems</li>
                  <li>Division operational coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Collection Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Corps-level reconnaissance, surveillance, and intelligence assets coordinated through army networks
              </div>
            </div>
          </div>

        </div>
        <!-- End A-B Grid Row -->

        <!-- C-D Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex C: Operations (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-chess-knight" style="margin-right:10px; color:#16a34a; font-size:14px;"></i>
              Annex C — Operations (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(22, 163, 74, 0.1); border:1px solid #16a34a; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Corps Operational Concept</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Phase I:</strong> Corps Assembly and Preparation<br/>
                <strong>Phase II:</strong> Division Coordination and Integration<br/>
                <strong>Phase III:</strong> Corps Combat Operations<br/>
                <strong>Phase IV:</strong> Exploitation and Pursuit
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Control Measures</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Corps Boundary:</strong> Northern sector AOR</li>
                  <li><strong>Division Boundaries:</strong> 1st AD (West), 3rd ID (East)</li>
                  <li><strong>Corps Reserve:</strong> 173rd Airborne Brigade</li>
                  <li><strong>Deep Operations:</strong> 75km forward of FLOT</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Operations</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Corps-level coordination of division operations with integrated fires and maneuver
              </div>
            </div>
          </div>

          <!-- Annex D: Fires (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-crosshairs" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
              Annex D — Fires (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Corps Fires Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Corps Fires Command Structure:</strong><br/>
                • Corps Artillery Brigade<br/>
                • Corps Fires Element (CFE)<br/>
                • Target Acquisition Battery<br/>
                • HIMARS Battalion
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Target Sets</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy tactical reserves</li>
                  <li>Artillery and mortar systems</li>
                  <li>Command posts and communications</li>
                  <li>Logistics and supply points</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
              <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Fires Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Corps artillery, HIMARS, and attack aviation assets under corps fires command
              </div>
            </div>
          </div>
        </div>

        </div>

        </div>
        <!-- End C-D Grid Row -->

        <!-- F-I Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex F: Sustainment (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-truck" style="margin-right:10px; color:#059669; font-size:14px;"></i>
              Annex F — Sustainment (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(5, 150, 105, 0.1); border:1px solid #059669; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Corps Sustainment Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Corps Sustainment Command Structure:</strong><br/>
                • Corps Sustainment Brigade<br/>
                • Combat Sustainment Support Battalion<br/>
                • Corps Logistics Support Group<br/>
                • Division Support Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Supply Requirements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Class I:</strong> 75,000 personnel x 30 days</li>
                  <li><strong>Class III:</strong> 400,000 gallons/day fuel requirement</li>
                  <li><strong>Class V:</strong> Corps ammunition reserves (7-day supply)</li>
                  <li><strong>Class VIII:</strong> Corps medical support and evacuation</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Lines of Communication</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Corps distribution networks, forward logistics elements, and division support coordination
              </div>
            </div>
          </div>

          <!-- Annex I: Information Operations (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-broadcast-tower" style="margin-right:10px; color:#ec4899; font-size:14px;"></i>
              Annex I — Information Operations (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(236, 72, 153, 0.1); border:1px solid #ec4899; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#f9a8d4; font-size:14px; margin:0 0 12px 0;">Corps Information Environment</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Corps Information Operations:</strong><br/>
                • Corps Information Operations Center<br/>
                • Military Information Support Team<br/>
                • Corps Strategic Communications<br/>
                • Division Information Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
                <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Corps IO Objectives</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Maintain operational narrative</li>
                  <li>Counter enemy propaganda</li>
                  <li>Preserve local population support</li>
                  <li>Protect operational security</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
              <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Communications</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Coordinated messaging across divisions and multinational partners within corps AOR
              </div>
            </div>
          </div>

        </div>
        <!-- End F-I Grid Row -->

        <!-- S-T Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex S: Special Operations Forces (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-user-secret" style="margin-right:10px; color:#4b5563; font-size:14px;"></i>
              Annex S — Special Operations Forces (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(75, 85, 99, 0.1); border:1px solid #4b5563; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#9ca3af; font-size:14px; margin:0 0 12px 0;">Corps SOF Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Corps Special Operations:</strong><br/>
                • Special Forces Operational Detachment<br/>
                • Corps SOF Coordination Element<br/>
                • Special Operations Aviation Support<br/>
                • Division SOF Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
                <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Corps SOF Missions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Direct action against tactical targets</li>
                  <li>Special reconnaissance missions</li>
                  <li>Foreign internal defense support</li>
                  <li>Unconventional warfare coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
              <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                SOF operations synchronized with conventional corps forces through corps-level coordination
              </div>
            </div>
          </div>

          <!-- Annex T: Cyber Electromagnetic Activities (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-wifi" style="margin-right:10px; color:#f97316; font-size:14px;"></i>
              Annex T — Cyber Electromagnetic Activities (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(249, 115, 22, 0.1); border:1px solid #f97316; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fdba74; font-size:14px; margin:0 0 12px 0;">Corps CEMA Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Corps Cyber Electromagnetic Command:</strong><br/>
                • Corps Cyber Operations Center<br/>
                • Electronic Warfare Company<br/>
                • Corps Spectrum Management<br/>
                • Division CEMA Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
                <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Cyber Operations</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Defensive cyber operations for corps networks</li>
                  <li>Offensive cyber operations against targets</li>
                  <li>Electronic warfare support to divisions</li>
                  <li>Spectrum management coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Corps EMS Management</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Corps-wide spectrum deconfliction and electromagnetic coordination for Operation ALLIED RESOLVE
              </div>
            </div>
          </div>

        </div>
        <!-- End S-T Grid Row -->

        <!-- K-N Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex K: Civil Affairs Operations (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-handshake" style="margin-right:10px; color:#84cc16; font-size:14px;"></i>
              Annex K — Civil Affairs Operations (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(132, 204, 22, 0.1); border:1px solid #84cc16; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#bef264; font-size:14px; margin:0 0 12px 0;">Corps Civil Affairs Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Corps Civil-Military Coordination:</strong><br/>
                • Corps Civil Affairs Team<br/>
                • Civil Affairs Company<br/>
                • Corps Interagency Coordination<br/>
                • Division Civil Affairs Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
                <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Civil Affairs Functions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Local host nation support coordination</li>
                  <li>Civil-military cooperation</li>
                  <li>Infrastructure protection</li>
                  <li>Population and resource management</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
              <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Coordination</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Corps-level civil affairs coordination with local authorities within Operation ALLIED RESOLVE sector
              </div>
            </div>
          </div>

          <!-- Annex N: Space Operations (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-satellite" style="margin-right:10px; color:#7c3aed; font-size:14px;"></i>
              Annex N — Space Operations (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(124, 58, 237, 0.1); border:1px solid #7c3aed; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Corps Space Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Corps Space Operations:</strong><br/>
                • Corps Space Support Element<br/>
                • GPS/PNT Coordination Team<br/>
                • Corps Satellite Communications<br/>
                • Division Space Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Space Capabilities</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Corps satellite communications</li>
                  <li>GPS and precision timing</li>
                  <li>Space-based intelligence coordination</li>
                  <li>Division space support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Operations Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Space support to Operation ALLIED RESOLVE through corps-level satellite communications and navigation
              </div>
            </div>
          </div>

        </div>
        <!-- End K-N Grid Row -->

        <!-- P Grid Row (Single) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex P: Host Nation Support (Corps Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-flag" style="margin-right:10px; color:#0891b2; font-size:14px;"></i>
              Annex P — Host Nation Support (Corps Operational Level)
            </h4>

            <div style="background-color:rgba(8, 145, 178, 0.1); border:1px solid #0891b2; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:14px; margin:0 0 12px 0;">Corps HNS Coordination Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Corps Host Nation Support:</strong><br/>
                • Corps Host Nation Support Team<br/>
                • Logistics Coordination Element<br/>
                • Corps Partner Liaison<br/>
                • Division Support Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
                <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Support Agreements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Corps-level host nation coordination</li>
                  <li>Local logistics support</li>
                  <li>Infrastructure access coordination</li>
                  <li>Emergency support procedures</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
              <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Corps coordination with local authorities for host nation support across Operation ALLIED RESOLVE sector
              </div>
            </div>
          </div>

        </div>
        <!-- End Corps-Level Annexes Grid Layout -->

        <!-- Corps Command & Control -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-satellite-dish" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
            Corps Command & Control Architecture
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <!-- Left Column -->
            <div>
              <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Corps Command Structure</h5>
                <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                  <strong>Corps Command Hierarchy:</strong><br/>
                  • Army ALLIED RESOLVE (Strategic Command)<br/>
                  • V Corps (Forward) (Operational Command)<br/>
                  • Division Commands (Tactical Execution)<br/>
                  • Brigade Commands (Direct Action)
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div>
              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Communications</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Corps command post (main/tactical)</li>
                  <li>Division coordination networks</li>
                  <li>Brigade liaison elements</li>
                  <li>Multinational coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Corps Strategic Considerations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-king" style="margin-right:10px; color:#8b5cf6; font-size:14px;"></i>
            Corps Operational Considerations
          </h4>

          <div style="background-color:rgba(139, 92, 246, 0.1); border:1px solid #8b5cf6; border-radius:6px; padding:16px; margin-bottom:16px;">
            <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Corps Operational Factors</h5>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
              <!-- Left Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Tactical Considerations</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Division and brigade integration</li>
                    <li>Corps fires coordination</li>
                    <li>Sustainment requirements</li>
                    <li>Operational tempo management</li>
                    <li>Multinational coordination</li>
                  </ul>
                </div>
              </div>

              <!-- Right Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Planning Horizons</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Operational preparation (15-30 days)</li>
                    <li>Corps sustainment capacity</li>
                    <li>Division tactical employment</li>
                    <li>Brigade operational integration</li>
                    <li>Medium-term tactical sustainability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6;">
            <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Corps Risk Assessment</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              Corps-level risks include division coordination challenges, tactical integration, sustainment limitations, and operational tempo
            </div>
          </div>
        </div>

        <!-- Hierarchical Scaffolding Summary -->
        <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:8px; padding:20px;">
          <h4 style="font-size:16px; font-weight:600; color:#6ee7b7; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:10px; color:#10b981; font-size:14px;"></i>
            Corps-Level Complexity Scaling
          </h4>

          <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:16px;">
            <strong>Hierarchical Progression from Army Level:</strong>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Army → Corps Scaling</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li><strong>Scope:</strong> Army AOR → Corps Sector</li>
                <li><strong>Timeline:</strong> Weeks/Months → Days/Weeks</li>
                <li><strong>Forces:</strong> Army/Corps → Corps/Division</li>
                <li><strong>Authority:</strong> Operational → Tactical</li>
              </ul>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Corps-Level Characteristics</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li>Division and brigade coordination</li>
                <li>Tactical-level planning</li>
                <li>Corps-wide resource allocation</li>
                <li>Short-term tactical objectives</li>
                <li>Sector command authority</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
