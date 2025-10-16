/**
 * OPORD Execution - Detailed Analysis
 * Comprehensive FM 5-0 doctrinal content for OPORD Section 3 (Execution)
 * Source: FM 5-0 (Operations Process), Chapter 10 - Execution
 */

export const detailedAnalysisModule = {
  id: 'execution-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <div id="execution-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-search" style="margin-right:8px; color:#60a5fa; font-size:16px;"></i>
            3. Execution — Detailed Analysis
          </h3>
        </div>

        <!-- 2x2 Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; align-items:stretch;">
          <!-- Card 1: Concept of Operations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-play" style="margin-right:8px; color:#f97316; font-size:12px;"></i>
                Concept of Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Describes how the commander envisions the operation unfolding from start to finish. Provides the framework for detailed instructions and links mission to subordinate unit tasks.
              </p>
              <div style="background-color:rgba(249, 115, 22, 0.1); padding:8px; border-radius:4px; border:1px solid #f97316; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fdba74; font-size:12px; margin:0 0 4px 0;">Five Schemes</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Maneuver:</strong> Force positioning and employment</li>
                  <li><strong>Fires:</strong> Fire support integration</li>
                  <li><strong>Intelligence:</strong> ISR operations support</li>
                  <li><strong>Logistics:</strong> Sustainment operations</li>
                  <li><strong>Protection:</strong> Combat power preservation</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #f97316;">
                <div style="color:#fdba74; font-size:12px; font-weight:600; margin-bottom:2px;">Key Elements</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Decisive operation • Shaping operations<br>
                  • Sustaining operations • Reserve employment
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Tasks to Subordinate Units -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-tasks" style="margin-right:8px; color:#16a34a; font-size:12px;"></i>
                Tasks to Subordinate Units
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Tasks specify what each unit must accomplish and how it contributes to the overall operation. Commander designates main effort and supporting efforts to focus combat power.
              </p>
              <div style="background-color:rgba(22, 163, 74, 0.1); padding:8px; border-radius:4px; border:1px solid #16a34a; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#86efac; font-size:12px; margin:0 0 4px 0;">Task Organization</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Main Effort:</strong> Most critical unit/activity, receives priority support</li>
                  <li><strong>Supporting Efforts:</strong> Support main effort, may become main effort</li>
                  <li><strong>Reserve:</strong> Force held back to influence future action</li>
                  <li><strong>Task Format:</strong> 5 W's (Who, What, When, Where, Why)</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #16a34a;">
                <div style="color:#86efac; font-size:12px; font-weight:600; margin-bottom:2px;">Task Statement Elements</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Unit designation • Task verb • Target/objective<br>
                  • Location/control measures • Time/conditions • Purpose
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Coordinating Instructions -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-cogs" style="margin-right:8px; color:#eab308; font-size:12px;"></i>
                Coordinating Instructions
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Instructions that apply to two or more units and facilitate coordination between subordinate elements. Synchronize actions and prevent conflicts between units.
              </p>
              <div style="background-color:rgba(234, 179, 8, 0.1); padding:8px; border-radius:4px; border:1px solid #eab308; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fde047; font-size:12px; margin:0 0 4px 0;">Essential Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Time/Control:</strong> H-Hour, phase lines, boundaries, checkpoints</li>
                  <li><strong>Rules of Engagement:</strong> When/how forces engage enemy</li>
                  <li><strong>Risk Reduction:</strong> Fratricide prevention, safety measures</li>
                  <li><strong>Rehearsal/Training:</strong> Pre-execution requirements</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #eab308;">
                <div style="color:#fde047; font-size:12px; font-weight:600; margin-bottom:2px;">Coordination Categories</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Movement/positioning • Fire support measures<br>
                  • Information collection • Airspace • Electronic warfare
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Fires and Special Instructions -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-crosshairs" style="margin-right:8px; color:#dc2626; font-size:12px;"></i>
                Fires & Special Instructions
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Instructions for fire support and special instructions not covered elsewhere that are essential to mission accomplishment.
              </p>
              <div style="background-color:rgba(220, 38, 38, 0.1); padding:8px; border-radius:4px; border:1px solid #dc2626; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 4px 0;">Fire Support Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Priority of Fires:</strong> Unit/area receiving fire support priority</li>
                  <li><strong>FSCM:</strong> Fire support coordination measures and boundaries</li>
                  <li><strong>Target Lists:</strong> High-payoff targets and engagement criteria</li>
                  <li><strong>Ammunition:</strong> Allocation, restrictions, resupply procedures</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #dc2626;">
                <div style="color:#fca5a5; font-size:12px; font-weight:600; margin-bottom:2px;">Special Instructions</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Information operations/OPSEC • Civil affairs<br>
                  • PSYOP themes • Environmental • Legal constraints
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Doctrinal Reference -->
        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:16px;">
          <h4 style="font-weight:600; color:#dbeafe; font-size:14px; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa;"></i>
            Doctrinal Foundation
          </h4>
          <p style="color:#bfdbfe; font-size:12px; line-height:1.5; margin:0;">
            <strong>Primary Source:</strong> FM 5-0 (Operations Process), Chapter 10 - Execution, Paragraphs 10-1 through 10-9.
            <br><br>
            <strong>Supporting References:</strong> FM 3-0 (Operations), FM 6-20 (Fire Support), ATP 5-0.1 (Army Design Methodology).
            <br><br>
            <strong>Content Focus:</strong> Pure doctrinal guidance for OPORD execution planning without unit-specific examples or scenarios.
          </p>
        </div>
      </div>
    `;
  },

  initialize() { return true; }
};
