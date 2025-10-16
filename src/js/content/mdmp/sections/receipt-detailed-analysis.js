/**
 * MDMP Receipt of Mission - Detailed Analysis
 * Comprehensive FM 5-0 doctrinal content for MDMP Step 1 (Receipt of Mission)
 * Source: FM 5-0 (Operations Process), Chapter 11 - Receipt of Mission
 */

export const detailedAnalysisModule = {
  id: 'receipt-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <div id="receipt-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-search" style="margin-right:8px; color:#60a5fa; font-size:16px;"></i>
            Step 1: Receipt of Mission — Detailed Analysis
          </h3>
        </div>

        <!-- 2x2 Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; align-items:stretch;">
          <!-- Card 1: Mission Receipt Activities -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-inbox" style="margin-right:8px; color:#10b981; font-size:12px;"></i>
                Mission Receipt Activities
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Initial activities conducted upon receipt of a mission or when a significant change in the situation occurs. Establishes foundation for the MDMP.
              </p>
              <div style="background-color:rgba(16, 185, 129, 0.1); padding:8px; border-radius:4px; border:1px solid #10b981; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 4px 0;">Key Activities</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Alert:</strong> Staff notification and preparation</li>
                  <li><strong>Gather:</strong> Initial information collection</li>
                  <li><strong>Analyze:</strong> Preliminary mission analysis</li>
                  <li><strong>Prepare:</strong> Planning preparation activities</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #10b981;">
                <div style="color:#6ee7b7; font-size:12px; font-weight:600; margin-bottom:2px;">Timeline</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Immediate: Alert and gather<br>
                  • Short-term: Analyze and prepare
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Commander's Initial Guidance -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-user-tie" style="margin-right:8px; color:#3b82f6; font-size:12px;"></i>
                Commander's Initial Guidance
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Commander provides initial planning guidance to focus staff efforts and establish planning parameters for the MDMP process.
              </p>
              <div style="background-color:rgba(59, 130, 246, 0.1); padding:8px; border-radius:4px; border:1px solid #3b82f6; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 4px 0;">Guidance Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Intent:</strong> Initial commander's intent</li>
                  <li><strong>Constraints:</strong> Planning limitations</li>
                  <li><strong>Timeline:</strong> Planning schedule</li>
                  <li><strong>Priority:</strong> Critical planning focus</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #3b82f6;">
                <div style="color:#93c5fd; font-size:12px; font-weight:600; margin-bottom:2px;">Output</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Planning guidance • Time allocation<br>
                  • Staff organization • Priority tasks
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Staff Preparation -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-users" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
                Staff Preparation
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Staff sections organize and prepare for the MDMP process, establishing working groups and information flow procedures.
              </p>
              <div style="background-color:rgba(139, 92, 246, 0.1); padding:8px; border-radius:4px; border:1px solid #8b5cf6; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 4px 0;">Preparation Tasks</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Organize:</strong> Working group formation</li>
                  <li><strong>Coordinate:</strong> Information sharing</li>
                  <li><strong>Prepare:</strong> Tools and resources</li>
                  <li><strong>Synchronize:</strong> Timeline alignment</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #8b5cf6;">
                <div style="color:#c4b5fd; font-size:12px; font-weight:600; margin-bottom:2px;">Working Groups</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Intelligence • Operations<br>
                  • Logistics • Communications
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Information Management -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-database" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Information Management
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Establish information collection, processing, and dissemination procedures to support the MDMP process effectively.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:8px; border-radius:4px; border:1px solid #f59e0b; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 4px 0;">Information Flow</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Collect:</strong> Gather relevant information</li>
                  <li><strong>Process:</strong> Analyze and synthesize</li>
                  <li><strong>Store:</strong> Organize for access</li>
                  <li><strong>Share:</strong> Distribute to staff</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #f59e0b;">
                <div style="color:#fbbf24; font-size:12px; font-weight:600; margin-bottom:2px;">Systems</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • CPOF • GCCS-A<br>
                  • FBCB2 • SIPR/NIPR
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FM 5-0 Doctrinal Framework -->
        <div style="margin-bottom:20px; padding:12px; background-color:#0f172a; border:1px solid #1e293b; border-radius:8px;">
          <h4 style="font-size:14px; font-weight:600; color:#60a5fa; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            FM 5-0 Receipt of Mission Framework
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#1e293b; padding:10px; border-radius:6px; border:1px solid #334155;">
              <h5 style="font-size:12px; font-weight:600; color:#93c5fd; margin:0 0 6px 0;">Mission Receipt Process</h5>
              <ul style="color:#cbd5e1; font-size:11px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Alert:</strong> Notification and staff assembly</li>
                <li><strong>Gather:</strong> Initial information collection</li>
                <li><strong>Analyze:</strong> Preliminary mission assessment</li>
                <li><strong>Prepare:</strong> Planning preparation activities</li>
              </ul>
            </div>
            <div style="background-color:#1e293b; padding:10px; border-radius:6px; border:1px solid #334155;">
              <h5 style="font-size:12px; font-weight:600; color:#93c5fd; margin:0 0 6px 0;">Key Outputs</h5>
              <ul style="color:#cbd5e1; font-size:11px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Initial planning timeline</li>
                <li>Staff organization and roles</li>
                <li>Information requirements</li>
                <li>Commander's initial guidance</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Advanced Analysis Framework -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; align-items:stretch;">
          <!-- Card 5: Time Analysis -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-clock" style="margin-right:8px; color:#ef4444; font-size:12px;"></i>
                Time Analysis & Planning
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Critical time analysis for MDMP execution, considering available planning time and operational requirements.
              </p>
              <div style="background-color:rgba(239, 68, 68, 0.1); padding:8px; border-radius:4px; border:1px solid #ef4444; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 4px 0;">Time Factors</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Available:</strong> Total planning time</li>
                  <li><strong>Required:</strong> Minimum MDMP time</li>
                  <li><strong>Allocated:</strong> Time per MDMP step</li>
                  <li><strong>Parallel:</strong> Concurrent activities</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #ef4444;">
                <div style="color:#fca5a5; font-size:12px; font-weight:600; margin-bottom:2px;">Rule of Thumb</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • 1/3 planning, 2/3 execution<br>
                  • Parallel planning when possible
                </div>
              </div>
            </div>
          </div>

          <!-- Card 6: Mission Variables (METT-TC) -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-cogs" style="margin-right:8px; color:#06b6d4; font-size:12px;"></i>
                Mission Variables (METT-TC)
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Initial assessment of mission variables that will drive the planning process and influence all subsequent MDMP steps.
              </p>
              <div style="background-color:rgba(6, 182, 212, 0.1); padding:8px; border-radius:4px; border:1px solid #06b6d4; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#67e8f9; font-size:12px; margin:0 0 4px 0;">METT-TC Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Mission:</strong> What, when, where, why</li>
                  <li><strong>Enemy:</strong> Threat capabilities</li>
                  <li><strong>Terrain:</strong> Operational environment</li>
                  <li><strong>Troops:</strong> Available forces</li>
                  <li><strong>Time:</strong> Planning and execution</li>
                  <li><strong>Civilians:</strong> Population considerations</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #06b6d4;">
                <div style="color:#67e8f9; font-size:12px; font-weight:600; margin-bottom:2px;">Initial Focus</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Mission understanding<br>
                  • Time constraints assessment
                </div>
              </div>
            </div>
          </div>

          <!-- Card 7: Planning Preparation -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-clipboard-list" style="margin-right:8px; color:#84cc16; font-size:12px;"></i>
                Planning Preparation
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Essential preparation activities to ensure effective MDMP execution and staff coordination throughout the process.
              </p>
              <div style="background-color:rgba(132, 204, 22, 0.1); padding:8px; border-radius:4px; border:1px solid #84cc16; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#bef264; font-size:12px; margin:0 0 4px 0;">Preparation Tasks</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Workspace:</strong> Planning facility setup</li>
                  <li><strong>Tools:</strong> Maps, systems, references</li>
                  <li><strong>Personnel:</strong> Staff assignments</li>
                  <li><strong>Communications:</strong> Information flow</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #84cc16;">
                <div style="color:#bef264; font-size:12px; font-weight:600; margin-bottom:2px;">Critical Items</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Planning timeline • Staff roles<br>
                  • Information systems • References
                </div>
              </div>
            </div>
          </div>

          <!-- Card 8: LSCO Considerations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-shield-alt" style="margin-right:8px; color:#f97316; font-size:12px;"></i>
                LSCO Considerations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Large Scale Combat Operations specific factors that influence receipt of mission and initial planning considerations.
              </p>
              <div style="background-color:rgba(249, 115, 22, 0.1); padding:8px; border-radius:4px; border:1px solid #f97316; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fdba74; font-size:12px; margin:0 0 4px 0;">LSCO Factors</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Tempo:</strong> High operational pace</li>
                  <li><strong>Scale:</strong> Multi-domain operations</li>
                  <li><strong>Complexity:</strong> Peer adversary</li>
                  <li><strong>Lethality:</strong> Survivability focus</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #f97316;">
                <div style="color:#fdba74; font-size:12px; font-weight:600; margin-bottom:2px;">Planning Impact</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Compressed timelines<br>
                  • Distributed operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
};

export default detailedAnalysisModule;
