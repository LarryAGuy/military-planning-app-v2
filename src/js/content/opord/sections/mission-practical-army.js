/**
 * OPORD Mission - Army Level Practical Examples
 * Strategic-operational interface content cascading from Theater level
 * Multi-corps operations within European Theater framework
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive strategic content requirements
 */

export const armyPracticalModule = {
  getContent() {
    return `
      <!-- Army-Level Mission Analysis - Strategic-Operational Interface -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-star" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Army-Level Mission Example: Third Army (ARCENT) - Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Theater Army Operations - Strategic-Operational Interface for Multi-Corps Operations
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Army Mission Statement & Operational Objectives -->
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
                Army Mission Statement & Operational End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Army Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> Third Army (ARCENT) (-)<br>
                  <strong>WHAT:</strong> Conduct multi-corps land operations to defeat enemy ground forces<br>
                  <strong>WHEN:</strong> On order, NLT 160600Z MAR 25<br>
                  <strong>WHERE:</strong> Eastern European AOR, Baltic States to Black Sea<br>
                  <strong>WHY:</strong> Enable USEUCOM theater objectives and NATO Article 5 collective defense
                </p>
              </div>

              <!-- Operational End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Operational End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> Multi-corps operations synchronized; NATO interoperability achieved</li>
                  <li><strong>Enemy:</strong> Ground forces defeated; anti-access capabilities neutralized</li>
                  <li><strong>Terrain:</strong> Key terrain secured; LOCs established and protected</li>
                  <li><strong>Civil:</strong> Population protected; civil-military cooperation established</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Army Task Organization & Corps Integration -->
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
                Army Task Organization & Multi-Corps Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>V Corps (OPCON):</strong> Northern axis, Baltic defense operations</li>
                  <li><strong>Priority:</strong> Long-range fires, air defense, strategic mobility</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>XVIII Airborne Corps (OPCON):</strong> Southern axis, rapid deployment</li>
                  <li><strong>I Corps (OPCON):</strong> Reserve, exploitation operations</li>
                  <li><strong>Multinational Corps Northeast (OPCON):</strong> Coalition integration</li>
                </ul>
              </div>

              <!-- Army-Level Assets -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Army-Level Enablers</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Theater Fires Command, 1st Theater Sustainment Command, Army Air & Missile Defense Command,
                  7th Army Training Command, 21st Theater Sustainment Command
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Multi-Domain Coordination & Operational Synchronization -->
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
                Multi-Domain Coordination & Operational Integration
              </h4>

              <!-- Land Domain Operations -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Land Domain Integration</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Corps Maneuver:</strong> Synchronized corps operations across 800km front</li>
                  <li><strong>Deep Operations:</strong> Long-range precision fires beyond FLOT</li>
                  <li><strong>Operational Mobility:</strong> Strategic/operational movement coordination</li>
                  <li><strong>Force Protection:</strong> Army-level air defense, CBRN defense</li>
                </ul>
              </div>

              <!-- Joint Integration -->
              <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Joint & Coalition Coordination</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Air-Land Integration:</strong> CAS, AI, SEAD coordination with USAFE</li>
                  <li><strong>Maritime Coordination:</strong> Amphibious operations, sea-based fires</li>
                  <li><strong>Space & Cyber:</strong> Satellite communications, cyber defense</li>
                  <li><strong>Special Operations:</strong> UW, direct action, reconnaissance</li>
                </ul>
              </div>

              <!-- Information Operations -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Information & Influence</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Counter-disinformation campaigns, strategic messaging coordination,
                  civil information support, psychological operations integration
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Army Sustainment & Operational Communications -->
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
                Army Sustainment & Operational Communications
              </h4>

              <!-- Operational Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Army Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Corps Support:</strong> Distribution to 3 corps across extended AOR</li>
                  <li><strong>Operational Reach:</strong> 500km+ sustainment lines, forward staging</li>
                  <li><strong>Medical Operations:</strong> Role 3 hospitals, MEDEVAC coordination</li>
                  <li><strong>Maintenance:</strong> Corps-level repair, strategic parts flow</li>
                </ul>
              </div>

              <!-- Communications Architecture -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Army Communications Systems</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Networks:</strong> Army Battle Command System (ABCS)</li>
                  <li><strong>Tactical Internet:</strong> WIN-T Increment 2, satellite connectivity</li>
                  <li><strong>Coalition Networks:</strong> NATO interoperability standards</li>
                </ul>
              </div>

              <!-- Operational Risks -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Operational Risk Management</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Extended LOCs vulnerability; multi-corps coordination complexity;
                  coalition interoperability challenges; operational tempo sustainability
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Army-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Army Coordinating Instructions & Operational Control Measures
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Operational CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Army CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Enemy operational reserves commitment</li>
                <li><strong>PIR 2:</strong> Coalition force readiness status</li>
                <li><strong>FFIR 1:</strong> Corps sustainment status</li>
                <li><strong>EEFI 1:</strong> Army operational capabilities</li>
              </ul>
            </div>

            <!-- Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Operational Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Corps Boundaries:</strong> V Corps/XVIII Abn Corps/I Corps</li>
                <li><strong>FSCL:</strong> 150km forward of FLOT</li>
                <li><strong>Operational Areas:</strong> Deep, close, rear operations</li>
                <li><strong>Phase Lines:</strong> Operational objectives by phase</li>
              </ul>
            </div>

            <!-- Operational Priorities -->
            <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Army Priorities</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Fires:</strong> Counter-fire, deep attack, CAS</li>
                <li><strong>ISR:</strong> Operational intelligence, BDA</li>
                <li><strong>Sustainment:</strong> Class V, medical, maintenance</li>
                <li><strong>Protection:</strong> Air defense, CBRN, force protection</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Operational Cascading Note -->
        <div style="background-color: #111827; border: 1px dashed #374151; border-radius: 6px; padding: 12px; margin-top: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <i class="fas fa-arrow-down" style="color: #10b981; margin-right: 8px; font-size: 14px;"></i>
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Operational Cascading to Subordinate Corps</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            Army-level operational framework cascades to subordinate corps: <strong>V Corps</strong> inherits northern axis with Baltic focus;
            <strong>XVIII Airborne Corps</strong> receives southern axis with rapid deployment emphasis; <strong>I Corps</strong> maintains reserve role with exploitation missions.
            Each corps adapts multi-domain operations, sustainment concepts, and control measures to their assigned operational areas while maintaining
            synchronization with Army-level objectives and theater strategic goals.
          </p>
        </div>
      </div>
    `;
  }
};

