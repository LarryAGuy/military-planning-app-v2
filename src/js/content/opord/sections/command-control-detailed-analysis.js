/**
 * OPORD Command & Control - Detailed Analysis Module
 * Doctrinal content implementation for Command & Control (C2)
 * Sources: FM 5-0 (Nov 2024) Ch.10; FM 6-0 (May 2022) Mission Command; FM 6-02 (Sep 2019) Signal
 */

export const detailedAnalysisModule = {
  id: 'command-control-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <!-- Detailed Analysis Section - Framework Structure Only -->
      <div id="command-control-detailed-analysis-section" style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-search" style="margin-right: 8px; color: #60a5fa; font-size: 16px;"></i>
            5. Command & Control - Detailed Analysis
          </h3>
        </div>

        <!-- 2x2 Content Card Grid - Framework Structure -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
          min-height: calc(100vh - 300px);
        ">

          <!-- Command Structure Framework Card -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 280px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                a. Command Structure Analysis
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Command structure establishes relationships, authorities, and succession across echelons while maintaining unity of command and enabling mission command.
              </p>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background-color:rgba(245, 158, 11, 0.1); border:1px solid #f59e0b; border-radius:6px; padding:8px;">
                  <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:4px;">Command Relationships</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>OPCON:</strong> Operational control authority.</li>
                    <li><strong>TACON:</strong> Tactical control for specific missions.</li>
                    <li><strong>ADCON:</strong> Administrative control retained.</li>
                    <li><strong>Support:</strong> DS/GS/R/GSR relationships.</li>
                  </ul>
                </div>
                <div style="background-color:#374151; border-radius:6px; padding:8px; border-left:3px solid #f59e0b;">
                  <div style="color:#fbbf24; font-weight:600; font-size:12px; margin-bottom:4px;">Command Posts & Battle Rhythm</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>Main CP:</strong> Planning and coordination.</li>
                    <li><strong>TAC CP:</strong> Current operations control.</li>
                    <li><strong>Rear CP:</strong> Sustainment operations.</li>
                    <li><strong>Battle Rhythm:</strong> Synchronized decision cycles.</li>
                  </ul>
                </div>
              </div>
              <div style="background-color:#111827; padding:12px; border-radius:6px; border:1px dashed #374151; margin-top:10px;">
                <div style="color:#9ca3af; font-size:12px; margin-bottom:6px;">Succession & Continuity (UNCLASSIFIED):</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.6; margin:0; padding-left:16px;">
                  <li>Published succession of command with rehearsed transfer procedures; continuity during leadership transitions.</li>
                  <li>Appropriate span of control by echelon; avoids over-centralization while preserving subordinate initiative.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Communications Systems Framework Card -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 280px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-broadcast-tower" style="margin-right: 8px; color: #3b82f6; font-size: 12px;"></i>
                b. Communications Systems Analysis
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Communications systems provide reliable, secure, and interoperable information exchange through integrated PACE planning and network architecture.
              </p>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background-color:rgba(59, 130, 246, 0.1); border:1px solid #3b82f6; border-radius:6px; padding:8px;">
                  <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">PACE & Networks</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>Primary:</strong> Main communications path.</li>
                    <li><strong>Alternate:</strong> Secondary reliable path.</li>
                    <li><strong>Contingency:</strong> Backup for degraded ops.</li>
                    <li><strong>Emergency:</strong> Last resort communications.</li>
                  </ul>
                </div>
                <div style="background-color:#374151; border-radius:6px; padding:8px; border-left:3px solid #3b82f6;">
                  <div style="color:#93c5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Systems & Security</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>SATCOM:</strong> Beyond line-of-sight capability.</li>
                    <li><strong>Terrestrial:</strong> HF/VHF/UHF radio systems.</li>
                    <li><strong>COMSEC:</strong> Key management and authentication.</li>
                    <li><strong>EMCON:</strong> Emission control procedures.</li>
                  </ul>
                </div>
              </div>
              <div style="background-color:#111827; padding:12px; border-radius:6px; border:1px dashed #374151; margin-top:10px;">
                <div style="color:#9ca3af; font-size:12px; margin-bottom:6px;">Integration & Interoperability (UNCLASSIFIED):</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.6; margin:0; padding-left:16px;">
                  <li>Mission partner environment (MPE) and secure enclaves enable joint/coalition information sharing.</li>
                  <li>Command post integration with battle tracking systems and common operational picture feeds.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Control Measures Framework Card -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 280px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                c. Control Measures Analysis
              </h4>
              <div style="background-color: rgba(16, 185, 129, 0.08); padding: 12px 14px; border-radius: 6px; border: 1px solid #10b981;">
                <ul style="margin:0; padding-left:16px; color:#d1d5db; font-size:12px; line-height:1.5;">
                  <li><b>Control Measures:</b> Graphics and directives that regulate maneuver, fires, protection, and sustainment.</li>
                  <li><b>Synchronization:</b> Decision support graphics, NAIs/TAIs, FSCMs, and coordinating instructions aligned to commander’s intent.</li>
                  <li><b>Dissemination:</b> Published via OPORD/FRAGORD Annexes and overlays; digitally replicated to COP with change control.</li>
                  <li><b>Adaptation:</b> On-order, be-prepared-to, and branch/sequel controls to enable rapid retasking and re-aggregation.</li>
                  <li><b>Risk/Protection:</b> Deconfliction, airspace control, ROE/RUF, and protection priorities integrated into measures.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Mission Command Framework Card -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 280px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-chess-king" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
                d. Mission Command Philosophy
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Mission command philosophy empowers decentralized execution through mutual trust, shared understanding, and disciplined initiative.
              </p>
              <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background-color:rgba(139, 92, 246, 0.1); border:1px solid #8b5cf6; border-radius:6px; padding:8px;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Core Principles</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>Mutual Trust:</strong> Foundation of effective teams.</li>
                    <li><strong>Shared Understanding:</strong> Common operational picture.</li>
                    <li><strong>Clear Intent:</strong> Purpose, method, and end state.</li>
                    <li><strong>Mission Orders:</strong> What and why, not how.</li>
                  </ul>
                </div>
                <div style="background-color:#374151; border-radius:6px; padding:8px; border-left:3px solid #8b5cf6;">
                  <div style="color:#c4b5fd; font-weight:600; font-size:12px; margin-bottom:4px;">Execution & Risk</div>
                  <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:16px;">
                    <li><strong>Disciplined Initiative:</strong> Act within intent.</li>
                    <li><strong>Decentralized Execution:</strong> Empowered subordinates.</li>
                    <li><strong>Prudent Risk:</strong> Accept risk to gain advantage.</li>
                    <li><strong>Continuous Assessment:</strong> CCIR and running estimates.</li>
                  </ul>
                </div>
              </div>
              <div style="background-color:#111827; padding:12px; border-radius:6px; border:1px dashed #374151; margin-top:10px;">
                <div style="color:#9ca3af; font-size:12px; margin-bottom:6px;">Ethics & Legal Framework (UNCLASSIFIED):</div>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.6; margin:0; padding-left:16px;">
                  <li>Adherence to ROE/RUF and Law of Armed Conflict; ethical decision-making under pressure.</li>
                  <li>Rapid exploitation of opportunities at all echelons while maintaining operational and moral standards.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <!-- Consolidated Doctrinal Reference Box -->
        <div style="background-color: #1e3a8a; border: 1px solid #1d4ed8; border-radius: 8px; padding: 16px; margin-top: 20px;">
          <h4 style="font-size: 14px; font-weight: 600; color: #dbeafe; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-book-open" style="margin-right: 8px; color: #93c5fd; font-size: 12px;"></i>
            Doctrinal References
          </h4>
          <div style="color: #dbeafe; font-size: 12px; line-height: 1.4;">
            <div style="margin-bottom: 4px;">FM 5-0 (Nov 2024), Chapter 10, Para 10-36 to 10-42 — Command & Control</div>
            <div style="margin-bottom: 4px;">FM 6-0 (May 2022), Chapter 1-9 — Commander and Staff Organization</div>
            <div>FM 6-02 (Sep 2019), Chapter 1-7 — Signal Support to Operations</div>
          </div>
        </div>

      </div>
    `;
  },

  initialize() {
    try { localStorage.setItem('opord-command-control-detailed-analysis', 'true'); } catch {}
    return true;
  }
};
