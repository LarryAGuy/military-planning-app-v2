/**
 * OPORD Annexes - Division-Level Practical Examples
 * Operation ALLIED RESOLVE - Tactical Division Command
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive strategic-level doctrinal content requirements
 * HIERARCHICAL SCAFFOLDING: Scaled down from Corps level with reduced scope and tactical focus
 */

export default {
  getContent() {
    return `
      <div style="background-color:#1f2937; border-radius:8px; padding:24px;">
        <!-- Division-Level Header -->
        <div style="margin-bottom:24px; padding-bottom:16px; border-bottom:2px solid #374151;">
          <h3 style="font-size:20px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-king" style="margin-right:12px; color:#10b981; font-size:18px;"></i>
            Division-Level OPORD Annexes
          </h3>
          <p style="color:#9ca3af; font-size:14px; margin:0; line-height:1.4;">
            Operation ALLIED RESOLVE - Tactical Division Command Level Examples
          </p>
          <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:6px; padding:12px; margin-top:12px;">
            <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Division Command Authority</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              1st Armored Division - Tactical Division Command<br/>
              Operational Control: Brigades, Battalions, Division Assets
            </div>
          </div>
        </div>

        <!-- Division-Level Annexes Grid Layout -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex A: Task Organization (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-sitemap" style="margin-right:10px; color:#2563eb; font-size:14px;"></i>
              Annex A — Task Organization (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(37, 99, 235, 0.1); border:1px solid #2563eb; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 12px 0;">Division Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>1st Armored Division - Operation ALLIED RESOLVE</strong><br/>
                └── Division ALLIED RESOLVE (DAR)<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── 1st Armored Brigade Combat Team<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── 2nd Armored Brigade Combat Team<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── 3rd Armored Brigade Combat Team<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Division Artillery<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;├── Combat Aviation Brigade<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;└── Division Sustainment Brigade
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
                <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Division Command Relationships</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>OPCON:</strong> All assigned brigades to DAR</li>
                  <li><strong>ADCON:</strong> Retained by Corps for administrative control</li>
                  <li><strong>TACON:</strong> Multinational battalions as required</li>
                  <li><strong>Support:</strong> Host nation forces provide local support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #2563eb;">
              <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Division Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Division-level fires, aviation, engineer, and sustainment assets under direct division command
              </div>
            </div>
          </div>

          <!-- Annex B: Intelligence (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-eye" style="margin-right:10px; color:#dc2626; font-size:14px;"></i>
              Annex B — Intelligence (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(220, 38, 38, 0.1); border:1px solid #dc2626; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:14px; margin:0 0 12px 0;">Division Intelligence Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Division Intelligence Command Structure:</strong><br/>
                • Division Intelligence Operations Center (DIOC)<br/>
                • Military Intelligence Battalion<br/>
                • Division Intelligence Support Element<br/>
                • Brigade Intelligence Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
                <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Division Priority Intelligence Requirements (DPIR)</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy force disposition within division AOR</li>
                  <li>Adversary tactical capabilities and reserves</li>
                  <li>Key terrain and obstacle analysis</li>
                  <li>Brigade tactical coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <div style="color:#fca5a5; font-weight:600; font-size:12px; margin-bottom:6px;">Division Collection Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Division-level reconnaissance, surveillance, and intelligence assets coordinated through corps networks
              </div>
            </div>
          </div>

        </div>
        <!-- End A-B Grid Row -->

        <!-- C-D Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex C: Operations (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-chess-knight" style="margin-right:10px; color:#16a34a; font-size:14px;"></i>
              Annex C — Operations (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(22, 163, 74, 0.1); border:1px solid #16a34a; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Division Tactical Concept</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Phase I:</strong> Division Assembly and Preparation<br/>
                <strong>Phase II:</strong> Brigade Coordination and Integration<br/>
                <strong>Phase III:</strong> Division Combat Operations<br/>
                <strong>Phase IV:</strong> Consolidation and Reorganization
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Division Control Measures</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Division Boundary:</strong> Western sector AOR</li>
                  <li><strong>Brigade Boundaries:</strong> 1st ABCT (North), 2nd ABCT (Center), 3rd ABCT (South)</li>
                  <li><strong>Division Reserve:</strong> Combat Aviation Brigade</li>
                  <li><strong>Deep Operations:</strong> 35km forward of FLOT</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Division Operations</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Division-level coordination of brigade operations with integrated fires and maneuver
              </div>
            </div>
          </div>

          <!-- Annex D: Fires (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-crosshairs" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
              Annex D — Fires (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Division Fires Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Division Fires Command Structure:</strong><br/>
                • Division Artillery (DIVARTY)<br/>
                • Division Fires Element (DFE)<br/>
                • Target Acquisition Battery<br/>
                • Field Artillery Battalions
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Division Target Sets</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Enemy tactical formations</li>
                  <li>Artillery and mortar positions</li>
                  <li>Command posts and communications</li>
                  <li>Logistics and assembly areas</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
              <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Division Fires Assets</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Division artillery, attack aviation, and fires coordination assets under division fires command
              </div>
            </div>
          </div>
        </div>

        </div>

        </div>
        <!-- End C-D Grid Row -->

        <!-- F-I Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex F: Sustainment (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-truck" style="margin-right:10px; color:#059669; font-size:14px;"></i>
              Annex F — Sustainment (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(5, 150, 105, 0.1); border:1px solid #059669; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 12px 0;">Division Sustainment Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Division Sustainment Command Structure:</strong><br/>
                • Division Sustainment Brigade<br/>
                • Forward Support Companies<br/>
                • Division Logistics Support Group<br/>
                • Brigade Support Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
                <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Division Supply Requirements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li><strong>Class I:</strong> 25,000 personnel x 15 days</li>
                  <li><strong>Class III:</strong> 150,000 gallons/day fuel requirement</li>
                  <li><strong>Class V:</strong> Division ammunition reserves (3-day supply)</li>
                  <li><strong>Class VIII:</strong> Division medical support and evacuation</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #059669;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Division Lines of Communication</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Division distribution networks, forward logistics elements, and brigade support coordination
              </div>
            </div>
          </div>

          <!-- Annex I: Information Operations (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-broadcast-tower" style="margin-right:10px; color:#ec4899; font-size:14px;"></i>
              Annex I — Information Operations (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(236, 72, 153, 0.1); border:1px solid #ec4899; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#f9a8d4; font-size:14px; margin:0 0 12px 0;">Division Information Environment</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Division Information Operations:</strong><br/>
                • Division Information Operations Center<br/>
                • Military Information Support Team<br/>
                • Division Strategic Communications<br/>
                • Brigade Information Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
                <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Division IO Objectives</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Maintain tactical narrative</li>
                  <li>Counter enemy information</li>
                  <li>Preserve local support</li>
                  <li>Protect tactical security</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #ec4899;">
              <div style="color:#f9a8d4; font-weight:600; font-size:12px; margin-bottom:6px;">Division Communications</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Coordinated messaging across brigades and local partners within division AOR
              </div>
            </div>
          </div>

        </div>
        <!-- End F-I Grid Row -->

        <!-- S-T Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex S: Special Operations Forces (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-user-secret" style="margin-right:10px; color:#4b5563; font-size:14px;"></i>
              Annex S — Special Operations Forces (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(75, 85, 99, 0.1); border:1px solid #4b5563; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#9ca3af; font-size:14px; margin:0 0 12px 0;">Division SOF Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Division Special Operations:</strong><br/>
                • Special Forces Operational Detachment<br/>
                • Division SOF Coordination Element<br/>
                • Special Operations Aviation Support<br/>
                • Brigade SOF Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
                <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Division SOF Missions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Direct action against tactical targets</li>
                  <li>Special reconnaissance missions</li>
                  <li>Foreign internal defense support</li>
                  <li>Tactical unconventional warfare</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #4b5563;">
              <div style="color:#9ca3af; font-weight:600; font-size:12px; margin-bottom:6px;">Division Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                SOF operations synchronized with conventional division forces through division-level coordination
              </div>
            </div>
          </div>

          <!-- Annex T: Cyber Electromagnetic Activities (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-wifi" style="margin-right:10px; color:#f97316; font-size:14px;"></i>
              Annex T — Cyber Electromagnetic Activities (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(249, 115, 22, 0.1); border:1px solid #f97316; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#fdba74; font-size:14px; margin:0 0 12px 0;">Division CEMA Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Division Cyber Electromagnetic Command:</strong><br/>
                • Division Cyber Operations Center<br/>
                • Electronic Warfare Platoon<br/>
                • Division Spectrum Management<br/>
                • Brigade CEMA Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
                <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Division Cyber Operations</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Defensive cyber operations for division networks</li>
                  <li>Tactical cyber operations against targets</li>
                  <li>Electronic warfare support to brigades</li>
                  <li>Spectrum management coordination</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <div style="color:#fdba74; font-weight:600; font-size:12px; margin-bottom:6px;">Division EMS Management</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Division-wide spectrum deconfliction and electromagnetic coordination for Operation ALLIED RESOLVE
              </div>
            </div>
          </div>
        <!-- End S-T Grid Row -->

        <!-- K-N Grid Row -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex K: Civil Affairs Operations (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-handshake" style="margin-right:10px; color:#84cc16; font-size:14px;"></i>
              Annex K — Civil Affairs Operations (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(132, 204, 22, 0.1); border:1px solid #84cc16; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#bef264; font-size:14px; margin:0 0 12px 0;">Division Civil Affairs Command Structure</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Division Civil-Military Coordination:</strong><br/>
                • Division Civil Affairs Team<br/>
                • Civil Affairs Detachment<br/>
                • Division Interagency Coordination<br/>
                • Brigade Civil Affairs Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
                <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Division Civil Affairs Functions</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Local host nation coordination</li>
                  <li>Civil-military cooperation</li>
                  <li>Infrastructure protection</li>
                  <li>Population and resource management</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #84cc16;">
              <div style="color:#bef264; font-weight:600; font-size:12px; margin-bottom:6px;">Division Coordination</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Division-level civil affairs coordination with local authorities within Operation ALLIED RESOLVE sector
              </div>
            </div>
          </div>

        </div>

          <!-- Annex N: Space Operations (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-satellite" style="margin-right:10px; color:#7c3aed; font-size:14px;"></i>
              Annex N — Space Operations (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(124, 58, 237, 0.1); border:1px solid #7c3aed; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Division Space Command Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Division Space Operations:</strong><br/>
                • Division Space Support Element<br/>
                • GPS/PNT Coordination Team<br/>
                • Division Satellite Communications<br/>
                • Brigade Space Liaison
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
                <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Division Space Capabilities</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Division satellite communications</li>
                  <li>GPS and precision timing</li>
                  <li>Space-based intelligence coordination</li>
                  <li>Brigade space support</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #7c3aed;">
              <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Division Operations Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Space support to Operation ALLIED RESOLVE through division-level satellite communications and navigation
              </div>
            </div>
          </div>

        </div>
        <!-- End K-N Grid Row -->

        <!-- P Grid Row (Single) -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:24px;">

          <!-- Annex P: Host Nation Support (Division Level) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
            <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
              <i class="fas fa-flag" style="margin-right:10px; color:#0891b2; font-size:14px;"></i>
              Annex P — Host Nation Support (Division Tactical Level)
            </h4>

            <div style="background-color:rgba(8, 145, 178, 0.1); border:1px solid #0891b2; border-radius:6px; padding:16px; margin-bottom:16px;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:14px; margin:0 0 12px 0;">Division HNS Coordination Architecture</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                <strong>Division Host Nation Support:</strong><br/>
                • Division Host Nation Support Team<br/>
                • Logistics Coordination Element<br/>
                • Division Partner Liaison<br/>
                • Brigade Support Coordination
              </div>

              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
                <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Division Support Agreements</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Division-level host nation coordination</li>
                  <li>Local logistics support</li>
                  <li>Infrastructure access coordination</li>
                  <li>Emergency support procedures</li>
                </ul>
              </div>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #0891b2;">
              <div style="color:#67e8f9; font-weight:600; font-size:12px; margin-bottom:6px;">Division Integration</div>
              <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
                Division coordination with local authorities for host nation support across Operation ALLIED RESOLVE sector
              </div>
            </div>
          </div>

        </div>
        <!-- End Division-Level Annexes Grid Layout -->

        <!-- Division Command & Control -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-satellite-dish" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
            Division Command & Control Architecture
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <!-- Left Column -->
            <div>
              <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:16px; margin-bottom:16px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 12px 0;">Division Command Structure</h5>
                <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:12px;">
                  <strong>Division Command Hierarchy:</strong><br/>
                  • V Corps (Forward) (Operational Command)<br/>
                  • 1st Armored Division (Tactical Command)<br/>
                  • Brigade Commands (Direct Action)<br/>
                  • Battalion Commands (Execution)
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div>
              <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f59e0b;">
                <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:6px;">Division Communications</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                  <li>Division command post (main/tactical)</li>
                  <li>Brigade coordination networks</li>
                  <li>Battalion liaison elements</li>
                  <li>Local coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Division Tactical Considerations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:20px; margin-bottom:20px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-chess-king" style="margin-right:10px; color:#8b5cf6; font-size:14px;"></i>
            Division Tactical Considerations
          </h4>

          <div style="background-color:rgba(139, 92, 246, 0.1); border:1px solid #8b5cf6; border-radius:6px; padding:16px; margin-bottom:16px;">
            <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 12px 0;">Division Tactical Factors</h5>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
              <!-- Left Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Tactical Considerations</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Brigade and battalion integration</li>
                    <li>Division fires coordination</li>
                    <li>Sustainment requirements</li>
                    <li>Tactical tempo management</li>
                    <li>Local coordination</li>
                  </ul>
                </div>
              </div>

              <!-- Right Column -->
              <div>
                <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6; margin-bottom:12px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Division Planning Horizons</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li>Tactical preparation (7-15 days)</li>
                    <li>Division sustainment capacity</li>
                    <li>Brigade tactical employment</li>
                    <li>Battalion tactical integration</li>
                    <li>Short-term tactical sustainability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #8b5cf6;">
            <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:6px;">Division Risk Assessment</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              Division-level risks include brigade coordination challenges, tactical integration, sustainment limitations, and tactical tempo
            </div>
          </div>
        </div>

        <!-- Hierarchical Scaffolding Summary -->
        <div style="background-color:rgba(16, 185, 129, 0.1); border:1px solid #10b981; border-radius:8px; padding:20px;">
          <h4 style="font-size:16px; font-weight:600; color:#6ee7b7; margin:0 0 16px 0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:10px; color:#10b981; font-size:14px;"></i>
            Division-Level Complexity Scaling
          </h4>

          <div style="color:#d1d5db; font-size:12px; line-height:1.5; margin-bottom:16px;">
            <strong>Hierarchical Progression from Corps Level:</strong>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Corps → Division Scaling</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li><strong>Scope:</strong> Corps Sector → Division AOR</li>
                <li><strong>Timeline:</strong> Days/Weeks → Hours/Days</li>
                <li><strong>Forces:</strong> Corps/Division → Division/Brigade</li>
                <li><strong>Authority:</strong> Tactical → Direct Action</li>
              </ul>
            </div>

            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #10b981;">
              <div style="color:#6ee7b7; font-weight:600; font-size:12px; margin-bottom:6px;">Division-Level Characteristics</div>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                <li>Brigade and battalion coordination</li>
                <li>Tactical-level planning</li>
                <li>Division-wide resource allocation</li>
                <li>Immediate tactical objectives</li>
                <li>Local command authority</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
