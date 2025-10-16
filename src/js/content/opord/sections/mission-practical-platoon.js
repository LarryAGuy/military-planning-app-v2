/**
 * OPORD Mission - Platoon Level Practical Examples
 * Direct tactical execution content cascading from Company level
 * Multi-squad operations within A Company framework
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive tactical content requirements
 */

export const platoonPracticalModule = {
  getContent() {
    return `
      <!-- Platoon-Level Mission Analysis - Direct Tactical Execution -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-users" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Platoon-Level Mission Example: 1st Platoon, A Company, 1-77 Armor - Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Direct Tactical Execution - Multi-Squad Combined Arms in Primary Battle Position
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Platoon Mission Statement & Tactical Objectives -->
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
                Platoon Mission Statement & Tactical End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Platoon Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> 1st Platoon, A Company, 1-77 Armor Battalion<br>
                  <strong>WHAT:</strong> Conduct area defense to defeat enemy tank section<br>
                  <strong>WHEN:</strong> Effective 220600Z MAR 25, duration 6 hours<br>
                  <strong>WHERE:</strong> Battle Position ALPHA (Grid TQ 1234 5678 to TQ 1289 5723)<br>
                  <strong>WHY:</strong> Preserve company eastern sector and enable battalion defensive success
                </p>
              </div>

              <!-- Tactical End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Tactical End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> Squad fighting positions occupied; direct fires coordinated</li>
                  <li><strong>Enemy:</strong> Tank section destroyed; reconnaissance elements defeated</li>
                  <li><strong>Terrain:</strong> Key terrain controlled; fields of fire cleared</li>
                  <li><strong>Civil:</strong> No civilian casualties; minimal collateral damage</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Platoon Task Organization & Squad Integration -->
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
                Platoon Task Organization & Multi-Squad Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>1st Squad (OPCON):</strong> Eastern position, primary engagement</li>
                  <li><strong>Priority:</strong> Direct fires, anti-tank weapons</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>2nd Squad (OPCON):</strong> Western position, supporting fires</li>
                  <li><strong>3rd Squad (OPCON):</strong> Reserve, counter-attack operations</li>
                  <li><strong>4th Squad (OPCON):</strong> Headquarters, command and control</li>
                </ul>
              </div>

              <!-- Platoon Assets -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Platoon Enablers</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Platoon Sergeant, Platoon Medic, Forward Observer,
                  Maintenance Team, Supply Team
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Squad Operations & Direct Engagement -->
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
                Squad Operations & Direct Engagement
              </h4>

              <!-- Squad Operations -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Squad Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Tank Crews:</strong> 4 x M1A2 SEPv3 tanks per squad</li>
                  <li><strong>Direct Fire:</strong> 120mm main gun, coax 7.62mm MG</li>
                  <li><strong>Crew-Served:</strong> .50 cal MG, 7.62mm MG</li>
                  <li><strong>Individual Weapons:</strong> M4 carbine, M9 pistol</li>
                </ul>
              </div>

              <!-- Tactical Procedures -->
              <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Procedures</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Battle Drills:</strong> React to contact, break contact</li>
                  <li><strong>Fire Control:</strong> Engagement criteria, target identification</li>
                  <li><strong>Movement:</strong> Bounding overwatch, traveling overwatch</li>
                  <li><strong>Communications:</strong> Radio procedures, visual signals</li>
                </ul>
              </div>

              <!-- Immediate Action -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Immediate Action Drills</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  React to contact, react to indirect fire, react to air attack,
                  react to chemical attack, casualty evacuation procedures
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Platoon Sustainment & Squad Communications -->
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
                Platoon Sustainment & Squad Communications
              </h4>

              <!-- Tactical Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Platoon Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Squad Support:</strong> 4 tank squads plus platoon assets</li>
                  <li><strong>Direct Support:</strong> Ammunition, fuel, maintenance at squad level</li>
                  <li><strong>Medical Support:</strong> Platoon medic, squad combat lifesavers</li>
                  <li><strong>Maintenance:</strong> Crew maintenance, field expedient repairs</li>
                </ul>
              </div>

              <!-- Communications Systems -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Platoon Communications</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Systems:</strong> FBCB2, BFT, digital displays</li>
                  <li><strong>Tactical Radio:</strong> SINCGARS, squad/crew nets</li>
                  <li><strong>Internal Communications:</strong> Intercom, hand/arm signals</li>
                </ul>
              </div>

              <!-- Tactical Risks -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Tactical Risk Management</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Squad coordination challenges; ammunition management;
                  vehicle maintenance; crew fatigue management
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Platoon-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Platoon Coordinating Instructions & Squad Control Measures
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Squad CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Platoon CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Enemy tanks in engagement area</li>
                <li><strong>PIR 2:</strong> Squad defensive preparations</li>
                <li><strong>FFIR 1:</strong> Crew combat readiness</li>
                <li><strong>EEFI 1:</strong> Platoon positioning and strength</li>
              </ul>
            </div>

            <!-- Squad Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Squad Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Squad Positions:</strong> 1st/2nd/3rd/4th Squad fighting positions</li>
                <li><strong>Engagement Areas:</strong> EA ALPHA-1, EA ALPHA-2</li>
                <li><strong>Target Reference Points:</strong> TRP 1-6</li>
                <li><strong>Final Protective Lines:</strong> Squad FPLs, overlapping fires</li>
              </ul>
            </div>

            <!-- Squad Priorities -->
            <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Platoon Priorities</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Fires:</strong> Direct fires, crew-served weapons</li>
                <li><strong>Maneuver:</strong> Squad positioning, mutual support</li>
                <li><strong>Sustainment:</strong> Ammunition, fuel, crew rest</li>
                <li><strong>Protection:</strong> Force protection, CBRN procedures</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Squad Cascading Note -->
        <div style="background-color: #111827; border: 1px dashed #374151; border-radius: 6px; padding: 12px; margin-top: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <i class="fas fa-arrow-down" style="color: #10b981; margin-right: 8px; font-size: 14px;"></i>
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Tactical Execution by Subordinate Squads</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            Platoon-level tactical framework executes through subordinate squads: <strong>1st Squad</strong> executes eastern position with primary engagement mission;
            <strong>2nd Squad</strong> executes western position with supporting fires role; <strong>3rd Squad</strong> maintains reserve with counter-attack capability.
            Each squad executes direct fire control, crew coordination, and individual soldier tasks within their assigned fighting positions while maintaining
            synchronization with Platoon objectives and Company tactical goals. This represents the lowest tactical level of the complete OPORD hierarchy.
          </p>
        </div>
      </div>
    `;
  }
};

