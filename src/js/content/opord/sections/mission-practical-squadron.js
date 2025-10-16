/**
 * OPORD Mission - Squadron Level Practical Examples
 * Tactical reconnaissance content cascading from Regiment level
 * Multi-troop operations within 2nd Cavalry Regiment framework
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive tactical content requirements
 */

export const squadronPracticalModule = {
  getContent() {
    return `
      <!-- Squadron-Level Mission Analysis - Tactical Reconnaissance -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-horse-head" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Squadron-Level Mission Example: 1st Squadron, 2nd Cavalry Regiment - Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Tactical Reconnaissance - Multi-Troop Operations in Eastern Reconnaissance Zone
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Squadron Mission Statement & Reconnaissance Objectives -->
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
                Squadron Mission Statement & Reconnaissance End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Squadron Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> 1st Squadron, 2nd Cavalry Regiment (Stryker)<br>
                  <strong>WHAT:</strong> Conduct zone reconnaissance to identify enemy forces<br>
                  <strong>WHEN:</strong> Effective 190600Z MAR 25, continuous operations<br>
                  <strong>WHERE:</strong> Eastern Reconnaissance Zone (Grid TQ 0123 4567 to TQ 2345 6789)<br>
                  <strong>WHY:</strong> Provide early warning and enable regiment reconnaissance success
                </p>
              </div>

              <!-- Reconnaissance End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Reconnaissance End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> Troop reconnaissance positions established; NAI covered</li>
                  <li><strong>Enemy:</strong> Forces identified; movement patterns established</li>
                  <li><strong>Terrain:</strong> Key terrain reconnoitered; routes confirmed</li>
                  <li><strong>Civil:</strong> Population status assessed; refugee movements tracked</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Squadron Task Organization & Troop Integration -->
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
                Squadron Task Organization & Multi-Troop Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>A Troop (OPCON):</strong> Northern zone, primary reconnaissance</li>
                  <li><strong>Priority:</strong> ISR, fires, engineer support</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>B Troop (OPCON):</strong> Southern zone, security operations</li>
                  <li><strong>C Troop (OPCON):</strong> Central zone, reserve operations</li>
                  <li><strong>D Troop (OPCON):</strong> Support troop, sustainment operations</li>
                </ul>
              </div>

              <!-- Squadron Assets -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Squadron Enablers</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Squadron Headquarters Troop, Military Intelligence Detachment,
                  Signal Detachment, Maintenance Troop
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Reconnaissance Operations & Intelligence Collection -->
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
                Reconnaissance Operations & Intelligence Collection
              </h4>

              <!-- Reconnaissance Methods -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Reconnaissance Methods</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Zone Reconnaissance:</strong> Systematic coverage of assigned zone</li>
                  <li><strong>Route Reconnaissance:</strong> MSR security, bridge reconnaissance</li>
                  <li><strong>Area Reconnaissance:</strong> Specific locations, installations</li>
                  <li><strong>Reconnaissance in Force:</strong> Aggressive reconnaissance, contact</li>
                </ul>
              </div>

              <!-- Intelligence Collection -->
              <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Intelligence Collection</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>HUMINT:</strong> Local population interviews, source networks</li>
                  <li><strong>SIGINT:</strong> Communications intercept, direction finding</li>
                  <li><strong>IMINT:</strong> UAV surveillance, ground surveillance radar</li>
                  <li><strong>OSINT:</strong> Open source analysis, social media monitoring</li>
                </ul>
              </div>

              <!-- Security Operations -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Security Operations</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Screen operations, guard missions, area security,
                  convoy escort, installation security
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Squadron Sustainment & Reconnaissance Communications -->
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
                Squadron Sustainment & Reconnaissance Communications
              </h4>

              <!-- Tactical Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Squadron Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Troop Support:</strong> 3 reconnaissance troops plus support troop</li>
                  <li><strong>Mobile Sustainment:</strong> Forward support, rapid resupply</li>
                  <li><strong>Medical Support:</strong> Squadron aid station, troop medics</li>
                  <li><strong>Maintenance:</strong> Field maintenance, vehicle recovery</li>
                </ul>
              </div>

              <!-- Communications Systems -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Reconnaissance Communications</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Systems:</strong> FBCB2, BFT, digital systems</li>
                  <li><strong>Tactical Radio:</strong> SINCGARS, troop/section nets</li>
                  <li><strong>Intelligence Systems:</strong> TROJAN, PROPHET, data links</li>
                </ul>
              </div>

              <!-- Reconnaissance Risks -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Reconnaissance Risk Management</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Troop isolation risk; communications vulnerability;
                  enemy contact procedures; rapid withdrawal requirements
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Squadron-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Squadron Coordinating Instructions & Reconnaissance Control Measures
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Reconnaissance CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Squadron CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Enemy reconnaissance elements in zone</li>
                <li><strong>PIR 2:</strong> Main force movement indicators</li>
                <li><strong>FFIR 1:</strong> Troop reconnaissance status</li>
                <li><strong>EEFI 1:</strong> Squadron positioning and capabilities</li>
              </ul>
            </div>

            <!-- Reconnaissance Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Reconnaissance Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Troop Zones:</strong> A/B/C Troop reconnaissance zones</li>
                <li><strong>NAI:</strong> Named Areas of Interest 1-8</li>
                <li><strong>TAI:</strong> Targeted Areas of Interest A-D</li>
                <li><strong>Checkpoints:</strong> Route control, reporting points</li>
              </ul>
            </div>

            <!-- Reconnaissance Priorities -->
            <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Squadron Priorities</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>ISR:</strong> Continuous surveillance, reporting</li>
                <li><strong>Security:</strong> Early warning, contact procedures</li>
                <li><strong>Mobility:</strong> Route clearance, obstacle reporting</li>
                <li><strong>Communications:</strong> Reporting, intelligence dissemination</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tactical Cascading Note -->
        <div style="background-color: #111827; border: 1px dashed #374151; border-radius: 6px; padding: 12px; margin-top: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <i class="fas fa-arrow-down" style="color: #10b981; margin-right: 8px; font-size: 14px;"></i>
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Tactical Cascading to Subordinate Troops</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            Squadron-level reconnaissance framework cascades to subordinate troops: <strong>A Troop</strong> inherits northern zone with primary reconnaissance mission;
            <strong>B Troop</strong> receives southern zone with security emphasis; <strong>C Troop</strong> maintains central reserve with rapid response capability.
            Each troop adapts reconnaissance operations, intelligence collection, and security procedures to their assigned zones while maintaining
            synchronization with Squadron objectives and Regiment reconnaissance goals.
          </p>
        </div>
      </div>
    `;
  }
};

