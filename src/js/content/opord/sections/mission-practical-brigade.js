/**
 * OPORD Mission - Brigade Level Practical Examples
 * Tactical-operational interface content cascading from Division level
 * Multi-battalion operations within 1st Armored Division framework
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive tactical content requirements
 */

export const brigadePracticalModule = {
  getContent() {
    return `
      <!-- Brigade-Level Mission Analysis - Tactical-Operational Interface -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-chess-rook" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Brigade-Level Mission Example: 1st ABCT, 1st Armored Division - Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Tactical-Operational Interface - Multi-Battalion Combined Arms Operations in Eastern Sector
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Brigade Mission Statement & Tactical Objectives -->
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
                Brigade Mission Statement & Tactical End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Brigade Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> 1st Armored Brigade Combat Team, 1st Armored Division<br>
                  <strong>WHAT:</strong> Conduct area defense to defeat enemy armored regiment<br>
                  <strong>WHEN:</strong> Effective 190600Z MAR 25, duration 48 hours<br>
                  <strong>WHERE:</strong> Eastern Sector, Estonia (Grid TQ 1234 5678 to TQ 2345 6789)<br>
                  <strong>WHY:</strong> Preserve division main defensive belt and enable corps defensive success
                </p>
              </div>

              <!-- Tactical End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Tactical End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> Battalion defensive positions occupied; combined arms integrated</li>
                  <li><strong>Enemy:</strong> Armored regiment defeated; follow-on forces disrupted</li>
                  <li><strong>Terrain:</strong> Key terrain controlled; engagement areas prepared</li>
                  <li><strong>Civil:</strong> Population evacuated; critical infrastructure protected</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Brigade Task Organization & Battalion Integration -->
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
                Brigade Task Organization & Multi-Battalion Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>1-77 Armor Battalion (OPCON):</strong> Eastern battle position, anti-armor</li>
                  <li><strong>Priority:</strong> Direct fires, engineer support, CAS</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>2-6 Infantry Battalion (OPCON):</strong> Western battle position, combined arms</li>
                  <li><strong>1-6 Infantry Battalion (OPCON):</strong> Reserve, counter-attack operations</li>
                  <li><strong>4-27 Field Artillery (DS):</strong> Fire support, counter-battery</li>
                </ul>
              </div>

              <!-- Brigade Assets -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Brigade Enablers</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  91st Engineer Battalion, 47th Brigade Support Battalion,
                  1st Squadron 1st Cavalry (RSTA), Brigade Troops Battalion
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Combined Arms Operations & Tactical Synchronization -->
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
                Combined Arms Operations & Tactical Synchronization
              </h4>

              <!-- Combined Arms Integration -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Combined Arms Integration</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Armor-Infantry Teams:</strong> M1A2 SEPv3 and M2A4 Bradley coordination</li>
                  <li><strong>Fire Support:</strong> M109A7 Paladin, 120mm mortars, HIMARS</li>
                  <li><strong>Air Defense:</strong> Avenger, Stinger teams, Patriot coordination</li>
                  <li><strong>Engineer Support:</strong> Obstacle emplacement, mobility operations</li>
                </ul>
              </div>

              <!-- Tactical Maneuver -->
              <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Maneuver Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Defensive Operations:</strong> Area defense with engagement areas</li>
                  <li><strong>Counter-Attack:</strong> Battalion-level counter-attack by fire/maneuver</li>
                  <li><strong>Reconnaissance:</strong> RSTA squadron, UAV integration</li>
                  <li><strong>Security:</strong> Screen lines, observation posts, patrols</li>
                </ul>
              </div>

              <!-- Information Operations -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Information & Electronic Warfare</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Electronic warfare coordination, tactical PSYOP, civil affairs,
                  information collection, communications security
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Brigade Sustainment & Tactical Communications -->
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
                Brigade Sustainment & Tactical Communications
              </h4>

              <!-- Tactical Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Brigade Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Battalion Support:</strong> 3 maneuver battalions plus enablers</li>
                  <li><strong>Tactical Reach:</strong> 50km+ distribution, forward arming points</li>
                  <li><strong>Medical Support:</strong> Role 1+ aid stations, battalion MEDEVAC</li>
                  <li><strong>Maintenance:</strong> Company-level repair, parts resupply</li>
                </ul>
              </div>

              <!-- Communications Systems -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Brigade Communications Systems</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Systems:</strong> CPCE, FBCB2, BFT integration</li>
                  <li><strong>Tactical Networks:</strong> JNN, SINCGARS, tactical internet</li>
                  <li><strong>Data Systems:</strong> SIPR, NIPR, tactical data links</li>
                </ul>
              </div>

              <!-- Tactical Risks -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Tactical Risk Management</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Battalion boundary coordination; supply route vulnerability;
                  air defense coverage gaps; communications jamming
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Brigade-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Brigade Coordinating Instructions & Tactical Control Measures
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Tactical CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Enemy armor approach routes</li>
                <li><strong>PIR 2:</strong> Battalion defensive readiness</li>
                <li><strong>FFIR 1:</strong> Company combat power status</li>
                <li><strong>EEFI 1:</strong> Brigade reserve positioning</li>
              </ul>
            </div>

            <!-- Tactical Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Battalion Boundaries:</strong> 1-77 AR/2-6 IN/1-6 IN sectors</li>
                <li><strong>Battle Positions:</strong> Primary, alternate, supplementary</li>
                <li><strong>Engagement Areas:</strong> EA STEEL, EA IRON, EA BRONZE</li>
                <li><strong>Target Reference Points:</strong> TRP 1-12 by sector</li>
              </ul>
            </div>

            <!-- Tactical Priorities -->
            <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Brigade Priorities</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Fires:</strong> Counter-battery, close support fires</li>
                <li><strong>ISR:</strong> RSTA squadron, company reconnaissance</li>
                <li><strong>Engineers:</strong> Obstacle construction, breach operations</li>
                <li><strong>Sustainment:</strong> Class III/V, medical evacuation</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tactical Cascading Note -->
        <div style="background-color: #111827; border: 1px dashed #374151; border-radius: 6px; padding: 12px; margin-top: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <i class="fas fa-arrow-down" style="color: #10b981; margin-right: 8px; font-size: 14px;"></i>
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Tactical Cascading to Subordinate Battalions</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            Brigade-level tactical framework cascades to subordinate battalions: <strong>1-77 Armor Battalion</strong> inherits eastern sector with anti-armor mission;
            <strong>2-6 Infantry Battalion</strong> receives western sector with combined arms defense; <strong>1-6 Infantry Battalion</strong> maintains reserve with counter-attack mission.
            Each battalion adapts combined arms operations, fire support coordination, and sustainment plans to their assigned tactical areas while maintaining
            synchronization with Brigade objectives and Division tactical goals.
          </p>
        </div>
      </div>
    `;
  }
};

