/**
 * OPORD Mission - Regiment Level Practical Examples
 * Specialized operations content cascading from Corps/Division level
 * Multi-squadron operations focused on reconnaissance and security
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive operational content requirements
 */

export const regimentPracticalModule = {
  getContent() {
    return `
      <!-- Regiment-Level Mission Analysis - Specialized Operations -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-medal" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Regiment-Level Mission Example: 2nd Cavalry Regiment - Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Specialized Operations - Multi-Squadron Reconnaissance and Security Operations
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Regiment Mission Statement & Operational Objectives -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            min-height: 320px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-bullseye" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                Regiment Mission Statement & Operational End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Regiment Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> 2nd Cavalry Regiment (Stryker)<br>
                  <strong>WHAT:</strong> Conduct reconnaissance and security operations<br>
                  <strong>WHEN:</strong> Effective 180600Z MAR 25, continuous operations<br>
                  <strong>WHERE:</strong> V Corps AOR, forward of main defensive belt<br>
                  <strong>WHY:</strong> Provide early warning and enable corps defensive preparations
                </p>
              </div>

              <!-- Operational End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Operational End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> Squadron reconnaissance positions established; early warning provided</li>
                  <li><strong>Enemy:</strong> Reconnaissance defeated; main force locations identified</li>
                  <li><strong>Terrain:</strong> Key observation points occupied; routes reconnoitered</li>
                  <li><strong>Civil:</strong> Population status reported; refugee routes coordinated</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Regiment Task Organization & Squadron Integration -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            min-height: 320px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                Regiment Task Organization & Multi-Squadron Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>1st Squadron (OPCON):</strong> Eastern reconnaissance zone</li>
                  <li><strong>Priority:</strong> ISR, fires, engineer support</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>2nd Squadron (OPCON):</strong> Western reconnaissance zone</li>
                  <li><strong>3rd Squadron (OPCON):</strong> Central zone, reserve operations</li>
                  <li><strong>4th Squadron (OPCON):</strong> Aviation support, air reconnaissance</li>
                </ul>
              </div>

              <!-- Regiment Assets -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Regiment Enablers</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Regimental Engineer Squadron, Military Intelligence Company,
                  Signal Company, Sustainment Squadron, Headquarters Squadron
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Reconnaissance & Security Operations -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            min-height: 320px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-layer-group" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
                Reconnaissance & Security Operations
              </h4>

              <!-- Reconnaissance Operations -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Reconnaissance Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Zone Reconnaissance:</strong> Named Areas of Interest (NAI) coverage</li>
                  <li><strong>Route Reconnaissance:</strong> MSR security, alternate routes</li>
                  <li><strong>Area Reconnaissance:</strong> Terrain analysis, obstacle identification</li>
                  <li><strong>Force Reconnaissance:</strong> Enemy strength, disposition, activities</li>
                </ul>
              </div>

              <!-- Security Operations -->
              <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Security Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Screen Operations:</strong> Early warning, enemy contact reports</li>
                  <li><strong>Guard Operations:</strong> Reconnaissance in force, delay operations</li>
                  <li><strong>Cover Operations:</strong> Decisive engagement, main force protection</li>
                  <li><strong>Area Security:</strong> Installation security, convoy escort</li>
                </ul>
              </div>

              <!-- Intelligence Collection -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Intelligence Collection</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  HUMINT collection, SIGINT intercept, UAV surveillance,
                  ground surveillance radar, enemy pattern analysis
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Regiment Sustainment & Communications -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            min-height: 320px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-truck" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                Regiment Sustainment & Tactical Communications
              </h4>

              <!-- Tactical Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Regiment Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Squadron Support:</strong> 4 squadrons across extended AOR</li>
                  <li><strong>Mobile Sustainment:</strong> Forward support, fuel/ammunition resupply</li>
                  <li><strong>Medical Support:</strong> Role 1 aid stations, MEDEVAC coordination</li>
                  <li><strong>Maintenance:</strong> Field maintenance, recovery operations</li>
                </ul>
              </div>

              <!-- Communications Systems -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Regiment Communications Systems</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Systems:</strong> FBCB2, BFT, digital communications</li>
                  <li><strong>Tactical Networks:</strong> SINCGARS, tactical internet, data links</li>
                  <li><strong>Intelligence Systems:</strong> DCGS-A, TROJAN, PROPHET</li>
                </ul>
              </div>

              <!-- Operational Risks -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Operational Risk Management</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Extended reconnaissance lines; squadron isolation risk;
                  communications vulnerability; rapid enemy advance
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Regiment-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Regiment Coordinating Instructions & Reconnaissance Control Measures
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Reconnaissance CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Regiment CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Enemy reconnaissance elements</li>
                <li><strong>PIR 2:</strong> Main force movement indicators</li>
                <li><strong>FFIR 1:</strong> Squadron reconnaissance status</li>
                <li><strong>EEFI 1:</strong> Regiment positioning and capabilities</li>
              </ul>
            </div>

            <!-- Reconnaissance Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Reconnaissance Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Squadron Boundaries:</strong> 1st/2nd/3rd/4th Squadron zones</li>
                <li><strong>NAI:</strong> Named Areas of Interest 1-15</li>
                <li><strong>TAI:</strong> Targeted Areas of Interest A-J</li>
                <li><strong>Checkpoints:</strong> Route control, reporting points</li>
              </ul>
            </div>

            <!-- Reconnaissance Priorities -->
            <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Regiment Priorities</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>ISR:</strong> Continuous surveillance, pattern analysis</li>
                <li><strong>Fires:</strong> Call for fire, target acquisition</li>
                <li><strong>Mobility:</strong> Route clearance, obstacle reporting</li>
                <li><strong>Communications:</strong> Reporting, early warning</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Operational Cascading Note -->
        <div style="background-color: #111827; border: 1px dashed #374151; border-radius: 6px; padding: 12px; margin-top: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <i class="fas fa-arrow-down" style="color: #10b981; margin-right: 8px; font-size: 14px;"></i>
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Operational Cascading to Subordinate Squadrons</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            Regiment-level reconnaissance framework cascades to subordinate squadrons: <strong>1st Squadron</strong> inherits eastern zone with main reconnaissance mission;
            <strong>2nd Squadron</strong> receives western zone with security emphasis; <strong>3rd Squadron</strong> maintains central reserve with rapid response capability.
            Each squadron adapts reconnaissance operations, security procedures, and intelligence collection to their assigned zones while maintaining
            synchronization with Regiment objectives and Corps operational requirements.
          </p>
        </div>
      </div>
    `;
  }
};

