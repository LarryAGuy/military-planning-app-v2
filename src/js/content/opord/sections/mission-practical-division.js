/**
 * OPORD Mission - Division Level Practical Examples
 * Tactical operations content cascading from Corps level
 * Multi-brigade operations within V Corps framework
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive tactical content requirements
 */

export const divisionPracticalModule = {
  getContent() {
    return `
      <!-- Division-Level Mission Analysis - Tactical Operations -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-chess-king" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Division-Level Mission Example: 1st Armored Division - Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Tactical Operations - Multi-Brigade Defense in Northern Baltic Sector
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Division Mission Statement & Tactical Objectives -->
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
                Division Mission Statement & Tactical End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Division Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> 1st Armored Division (Reinforced)<br>
                  <strong>WHAT:</strong> Conduct area defense to defeat enemy armored attack<br>
                  <strong>WHEN:</strong> Effective 180600Z MAR 25, duration 72 hours<br>
                  <strong>WHERE:</strong> Northern Baltic Sector, Estonia (Grid TQ 1234 5678 to TQ 3456 7890)<br>
                  <strong>WHY:</strong> Preserve Estonian territory and enable V Corps defensive success
                </p>
              </div>

              <!-- Tactical End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Tactical End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> Brigade defensive positions occupied; fires integrated</li>
                  <li><strong>Enemy:</strong> Armored attack defeated; follow-on forces disrupted</li>
                  <li><strong>Terrain:</strong> Battle positions prepared; obstacles emplaced</li>
                  <li><strong>Civil:</strong> Population evacuated; infrastructure preserved</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Division Task Organization & Brigade Integration -->
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
                Division Task Organization & Multi-Brigade Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>1st ABCT (OPCON):</strong> Eastern sector, primary defensive belt</li>
                  <li><strong>Priority:</strong> Anti-armor fires, engineer support, CAS</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>2nd ABCT (OPCON):</strong> Western sector, secondary defensive belt</li>
                  <li><strong>3rd ABCT (OPCON):</strong> Reserve, counter-attack operations</li>
                  <li><strong>1st CAB (OPCON):</strong> Aviation support, reconnaissance</li>
                </ul>
              </div>

              <!-- Division Assets -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Division Enablers</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  1st DIVARTY, 1st Engineer Brigade, 1st Sustainment Brigade,
                  1st SBCT (Security), Division Special Troops Battalion
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
                Combined Arms Operations & Tactical Integration
              </h4>

              <!-- Combined Arms Integration -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Combined Arms Integration</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Armor-Infantry Teams:</strong> M1A2 SEPv3, M2A4 Bradley integration</li>
                  <li><strong>Fire Support:</strong> M109A7, HIMARS, 120mm mortars</li>
                  <li><strong>Air Defense:</strong> Patriot, SHORAD, Stinger teams</li>
                  <li><strong>Aviation:</strong> AH-64E, UH-60M, CH-47F support</li>
                </ul>
              </div>

              <!-- Tactical Maneuver -->
              <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Maneuver Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Defensive Operations:</strong> Area defense, mobile defense options</li>
                  <li><strong>Counter-Attack:</strong> Brigade-level counter-attack by fire/maneuver</li>
                  <li><strong>Reconnaissance:</strong> Squadron reconnaissance, UAV integration</li>
                  <li><strong>Security Operations:</strong> Screen, guard, cover operations</li>
                </ul>
              </div>

              <!-- Intelligence & Surveillance -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Intelligence & Surveillance</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Division G-2 analysis, brigade S-2 coordination, UAV operations,
                  HUMINT collection, SIGINT integration, enemy pattern analysis
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Division Sustainment & Tactical Communications -->
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
                Division Sustainment & Tactical Communications
              </h4>

              <!-- Tactical Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Division Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Brigade Support:</strong> 3 ABCTs plus division assets</li>
                  <li><strong>Tactical Reach:</strong> 100km+ distribution, forward logistics</li>
                  <li><strong>Medical Support:</strong> Role 2 facilities, brigade MEDEVAC</li>
                  <li><strong>Maintenance:</strong> Battalion-level repair, parts supply</li>
                </ul>
              </div>

              <!-- Communications Systems -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Division Communications Systems</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Systems:</strong> DCGS-A, CPCE, FBCB2</li>
                  <li><strong>Tactical Networks:</strong> JNN, SINCGARS, tactical internet</li>
                  <li><strong>Data Networks:</strong> SIPR, NIPR, coalition networks</li>
                </ul>
              </div>

              <!-- Tactical Risks -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Tactical Risk Management</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Brigade boundary gaps; sustainment convoy vulnerability;
                  air defense coverage; communications jamming
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Division-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Division Coordinating Instructions & Tactical Control Measures
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Tactical CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Division CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Enemy armor concentration locations</li>
                <li><strong>PIR 2:</strong> Brigade defensive preparations</li>
                <li><strong>FFIR 1:</strong> Battalion combat readiness</li>
                <li><strong>EEFI 1:</strong> Division reserve positioning</li>
              </ul>
            </div>

            <!-- Tactical Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Brigade Boundaries:</strong> 1st/2nd/3rd ABCT sectors</li>
                <li><strong>Battle Positions:</strong> Primary, alternate, supplementary</li>
                <li><strong>Target Reference Points:</strong> Engagement areas, kill zones</li>
                <li><strong>Obstacle Belts:</strong> Primary, secondary, reserve</li>
              </ul>
            </div>

            <!-- Tactical Priorities -->
            <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Division Priorities</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Fires:</strong> Counter-battery, close support</li>
                <li><strong>ISR:</strong> Brigade reconnaissance, surveillance</li>
                <li><strong>Engineers:</strong> Obstacle emplacement, mobility</li>
                <li><strong>Sustainment:</strong> Class III/V, medical evacuation</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tactical Cascading Note -->
        <div style="background-color: #111827; border: 1px dashed #374151; border-radius: 6px; padding: 12px; margin-top: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <i class="fas fa-arrow-down" style="color: #10b981; margin-right: 8px; font-size: 14px;"></i>
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Tactical Cascading to Subordinate Brigades</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            Division-level tactical framework cascades to subordinate brigades: <strong>1st ABCT</strong> inherits eastern sector with primary defense mission;
            <strong>2nd ABCT</strong> receives western sector with secondary defense role; <strong>3rd ABCT</strong> maintains reserve with counter-attack mission.
            Each brigade adapts combined arms operations, fire support plans, and sustainment operations to their assigned tactical areas while maintaining
            synchronization with Division objectives and Corps operational goals.
          </p>
        </div>
      </div>
    `;
  }
};
