/**
 * OPORD Mission - Corps Level Practical Examples
 * Operational-tactical interface content cascading from Army level
 * Multi-division operations within Third Army framework
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive operational content requirements
 */

export const corpsPracticalModule = {
  getContent() {
    return `
      <!-- Corps-Level Mission Analysis - Operational-Tactical Interface -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-crown" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Corps-Level Mission Example: V Corps - Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Operational-Tactical Interface - Multi-Division Operations in Baltic Defense Sector
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Corps Mission Statement & Tactical Objectives -->
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
                Corps Mission Statement & Tactical End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Corps Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> V Corps (Reinforced)<br>
                  <strong>WHAT:</strong> Conduct defensive operations to defeat enemy ground attack<br>
                  <strong>WHEN:</strong> Effective 170600Z MAR 25, duration 90 days<br>
                  <strong>WHERE:</strong> Baltic Defense Sector, Estonia-Latvia-Lithuania<br>
                  <strong>WHY:</strong> Preserve NATO territory and enable Third Army operational success
                </p>
              </div>

              <!-- Tactical End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Tactical End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> Multi-division defense established; coalition forces integrated</li>
                  <li><strong>Enemy:</strong> Ground attack defeated; follow-on forces disrupted</li>
                  <li><strong>Terrain:</strong> Defensive positions prepared; key terrain controlled</li>
                  <li><strong>Civil:</strong> Civilian evacuation complete; infrastructure protected</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Corps Task Organization & Division Integration -->
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
                Corps Task Organization & Multi-Division Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>1st Armored Division (OPCON):</strong> Northern sector, Estonia defense</li>
                  <li><strong>Priority:</strong> Counter-armor fires, engineer support, air defense</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>3rd Infantry Division (OPCON):</strong> Central sector, Latvia defense</li>
                  <li><strong>Multinational Division North (OPCON):</strong> Southern sector, Lithuania</li>
                  <li><strong>2nd Cavalry Regiment (OPCON):</strong> Corps reconnaissance, security</li>
                </ul>
              </div>

              <!-- Corps Assets -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Corps-Level Enablers</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  41st Fires Brigade, 7th Army Training Command, 10th Mountain Division (Reserve),
                  35th Air Defense Artillery Brigade, 16th Sustainment Brigade
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Multi-Domain Operations & Tactical Synchronization -->
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
                Multi-Domain Operations & Tactical Integration
              </h4>

              <!-- Land Operations -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Land Domain Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Division Defense:</strong> 3 divisions across 300km front</li>
                  <li><strong>Deep Fires:</strong> HIMARS, ATACMS beyond division range</li>
                  <li><strong>Operational Movement:</strong> Division repositioning, reserves</li>
                  <li><strong>Counter-Reconnaissance:</strong> Security operations, screening</li>
                </ul>
              </div>

              <!-- Air-Land Integration -->
              <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Air-Land Integration</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Close Air Support:</strong> A-10, F-16 integration with ground maneuver</li>
                  <li><strong>Air Interdiction:</strong> Deep attack coordination with USAFE</li>
                  <li><strong>Air Mobility:</strong> CH-47, UH-60 operational movement</li>
                  <li><strong>ISR Integration:</strong> UAV, manned reconnaissance coordination</li>
                </ul>
              </div>

              <!-- Information & Cyber -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Information & Cyber Operations</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Electronic warfare coordination, cyber defense, tactical PSYOP,
                  civil information operations, coalition information sharing
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Corps Sustainment & Tactical Communications -->
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
                Corps Sustainment & Tactical Communications
              </h4>

              <!-- Tactical Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Corps Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Division Support:</strong> 3 divisions plus corps assets</li>
                  <li><strong>Tactical Reach:</strong> 200km+ distribution, forward arming</li>
                  <li><strong>Medical Support:</strong> Role 2+ facilities, division MEDEVAC</li>
                  <li><strong>Maintenance:</strong> Brigade-level repair, parts distribution</li>
                </ul>
              </div>

              <!-- Communications Systems -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Corps Communications Architecture</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Systems:</strong> CPCE, FBCB2, BFT integration</li>
                  <li><strong>Tactical Networks:</strong> WIN-T, SINCGARS, tactical satellite</li>
                  <li><strong>Coalition Interop:</strong> NATO STANAG 4586, Link 16</li>
                </ul>
              </div>

              <!-- Tactical Risks -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Tactical Risk Considerations</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Division boundary coordination; sustainment line vulnerability;
                  air defense gaps; coalition command relationships
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Corps-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Corps Coordinating Instructions & Tactical Control Measures
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Tactical CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Corps CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Enemy main attack axis identification</li>
                <li><strong>PIR 2:</strong> Division defensive readiness</li>
                <li><strong>FFIR 1:</strong> Brigade combat power status</li>
                <li><strong>EEFI 1:</strong> Corps reserve positioning</li>
              </ul>
            </div>

            <!-- Tactical Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Division Boundaries:</strong> 1st AD/3rd ID/MND-N</li>
                <li><strong>Battle Positions:</strong> Primary, alternate, supplementary</li>
                <li><strong>Engagement Areas:</strong> Named areas, target reference points</li>
                <li><strong>Obstacle Zones:</strong> Engineer effort priorities</li>
              </ul>
            </div>

            <!-- Tactical Priorities -->
            <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Corps Priorities</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Fires:</strong> Counter-battery, interdiction</li>
                <li><strong>ISR:</strong> Division reconnaissance, UAV</li>
                <li><strong>Engineers:</strong> Obstacle construction, mobility</li>
                <li><strong>Air Defense:</strong> SHORAD, HIMAD integration</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tactical Cascading Note -->
        <div style="background-color: #111827; border: 1px dashed #374151; border-radius: 6px; padding: 12px; margin-top: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <i class="fas fa-arrow-down" style="color: #10b981; margin-right: 8px; font-size: 14px;"></i>
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Tactical Cascading to Subordinate Divisions</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            Corps-level tactical framework cascades to subordinate divisions: <strong>1st Armored Division</strong> inherits northern sector with heavy armor focus;
            <strong>3rd Infantry Division</strong> receives central sector with combined arms emphasis; <strong>Multinational Division North</strong> integrates coalition forces in southern sector.
            Each division adapts defensive operations, fire support coordination, and sustainment plans to their assigned tactical areas while maintaining
            synchronization with Corps objectives and Army operational goals.
          </p>
        </div>
      </div>
    `;
  }
};

