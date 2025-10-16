/**
 * OPORD Mission - Company Level Practical Examples
 * Direct tactical execution content cascading from Battalion level
 * Multi-platoon operations within 1-77 Armor Battalion framework
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive tactical content requirements
 */

export const companyPracticalModule = {
  getContent() {
    return `
      <!-- Company-Level Mission Analysis - Direct Tactical Execution -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-user-friends" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Company-Level Mission Example: A Company, 1-77 Armor Battalion - Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Direct Tactical Execution - Multi-Platoon Combined Arms in Primary Engagement Area
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Company Mission Statement & Tactical Objectives -->
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
                Company Mission Statement & Tactical End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Company Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> A Company, 1st Battalion, 77th Armor Regiment<br>
                  <strong>WHAT:</strong> Conduct area defense to defeat enemy armored platoon<br>
                  <strong>WHEN:</strong> Effective 210600Z MAR 25, duration 12 hours<br>
                  <strong>WHERE:</strong> EA STEEL-1 (Grid TQ 1234 5678 to TQ 1345 5789)<br>
                  <strong>WHY:</strong> Preserve battalion eastern flank and enable ABCT defensive success
                </p>
              </div>

              <!-- Tactical End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Tactical End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> Platoon battle positions occupied; direct fires coordinated</li>
                  <li><strong>Enemy:</strong> Armored platoon destroyed; reconnaissance defeated</li>
                  <li><strong>Terrain:</strong> Key terrain controlled; engagement area prepared</li>
                  <li><strong>Civil:</strong> No civilian casualties; property damage minimized</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Company Task Organization & Platoon Integration -->
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
                Company Task Organization & Multi-Platoon Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>1st Platoon (OPCON):</strong> Eastern sector, primary engagement</li>
                  <li><strong>Priority:</strong> Direct fires, engineer support, CAS</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>2nd Platoon (OPCON):</strong> Western sector, supporting fires</li>
                  <li><strong>3rd Platoon (OPCON):</strong> Reserve, counter-attack operations</li>
                  <li><strong>4th Platoon (OPCON):</strong> Headquarters, command and control</li>
                </ul>
              </div>

              <!-- Company Assets -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Company Enablers</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Company Fire Support Team (FIST), Maintenance Section,
                  Medical Section, Supply Section
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Combined Arms Operations & Direct Fire Control -->
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
                Combined Arms Operations & Direct Fire Control
              </h4>

              <!-- Direct Fire Control -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Direct Fire Control</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Tank Platoons:</strong> M1A2 SEPv3 120mm main gun, .50 cal MG</li>
                  <li><strong>Crew-Served Weapons:</strong> M240B, M249 SAW, M2 .50 cal</li>
                  <li><strong>Anti-Tank:</strong> Javelin missiles, AT-4 rockets</li>
                  <li><strong>Fire Control:</strong> Sector sketches, range cards, TRPs</li>
                </ul>
              </div>

              <!-- Tactical Maneuver -->
              <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Maneuver</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Defensive Operations:</strong> Platoon battle positions, mutual support</li>
                  <li><strong>Offensive Operations:</strong> Platoon attacks, bounding overwatch</li>
                  <li><strong>Movement:</strong> Tactical road march, movement to contact</li>
                  <li><strong>Security:</strong> Listening posts, observation posts</li>
                </ul>
              </div>

              <!-- Fire Support -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Fire Support Integration</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Company FIST coordination, mortar fires, CAS integration,
                  call for fire procedures, target acquisition
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Company Sustainment & Tactical Communications -->
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
                Company Sustainment & Tactical Communications
              </h4>

              <!-- Tactical Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Company Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Platoon Support:</strong> 4 platoons plus company assets</li>
                  <li><strong>Direct Support:</strong> Ammunition, fuel, maintenance at platoon level</li>
                  <li><strong>Medical Support:</strong> Company medic, platoon combat lifesavers</li>
                  <li><strong>Maintenance:</strong> Operator maintenance, field repairs</li>
                </ul>
              </div>

              <!-- Communications Systems -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Company Communications</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Systems:</strong> FBCB2, BFT, digital displays</li>
                  <li><strong>Tactical Radio:</strong> SINCGARS, platoon/squad nets</li>
                  <li><strong>Internal Communications:</strong> Intercom systems, hand signals</li>
                </ul>
              </div>

              <!-- Tactical Risks -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Tactical Risk Management</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Platoon coordination challenges; ammunition consumption;
                  vehicle breakdown; casualty evacuation procedures
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Company-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Company Coordinating Instructions & Direct Fire Control Measures
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Tactical CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Company CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Enemy armor in engagement area</li>
                <li><strong>PIR 2:</strong> Platoon defensive readiness</li>
                <li><strong>FFIR 1:</strong> Squad combat power status</li>
                <li><strong>EEFI 1:</strong> Company positioning and strength</li>
              </ul>
            </div>

            <!-- Direct Fire Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Direct Fire Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Platoon Sectors:</strong> 1st/2nd/3rd Platoon battle positions</li>
                <li><strong>Engagement Areas:</strong> EA STEEL-1A, EA STEEL-1B</li>
                <li><strong>Target Reference Points:</strong> TRP 101-110</li>
                <li><strong>Final Protective Fires:</strong> Platoon FPLs, interlocking</li>
              </ul>
            </div>

            <!-- Tactical Priorities -->
            <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Company Priorities</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Fires:</strong> Direct fires, mortar support</li>
                <li><strong>Maneuver:</strong> Platoon positioning, reserves</li>
                <li><strong>Sustainment:</strong> Ammunition, fuel, maintenance</li>
                <li><strong>Protection:</strong> Force protection, CBRN</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tactical Cascading Note -->
        <div style="background-color: #111827; border: 1px dashed #374151; border-radius: 6px; padding: 12px; margin-top: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <i class="fas fa-arrow-down" style="color: #10b981; margin-right: 8px; font-size: 14px;"></i>
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Tactical Cascading to Subordinate Platoons</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            Company-level tactical framework cascades to subordinate platoons: <strong>1st Platoon</strong> inherits eastern sector with primary engagement mission;
            <strong>2nd Platoon</strong> receives western sector with supporting fires role; <strong>3rd Platoon</strong> maintains reserve with counter-attack capability.
            Each platoon adapts combined arms operations, direct fire control, and sustainment procedures to their assigned battle positions while maintaining
            synchronization with Company objectives and Battalion tactical goals.
          </p>
        </div>
      </div>
    `;
  }
};

