/**
 * OPORD Mission - Battalion Level Practical Examples
 * Direct tactical operations content cascading from Brigade level
 * Multi-company operations within 1st ABCT framework
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive tactical content requirements
 */

export const battalionPracticalModule = {
  getContent() {
    return `
      <!-- Battalion-Level Mission Analysis - Direct Tactical Operations -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-flag" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Battalion-Level Mission Example: 1-77 Armor Battalion - Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Direct Tactical Operations - Multi-Company Combined Arms in Eastern Battle Position
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Battalion Mission Statement & Tactical Objectives -->
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
                Battalion Mission Statement & Tactical End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Battalion Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> 1st Battalion, 77th Armor Regiment<br>
                  <strong>WHAT:</strong> Conduct area defense to defeat enemy armored company<br>
                  <strong>WHEN:</strong> Effective 200600Z MAR 25, duration 24 hours<br>
                  <strong>WHERE:</strong> Battle Position STEEL (Grid TQ 1234 5678 to TQ 1456 5890)<br>
                  <strong>WHY:</strong> Preserve brigade eastern flank and enable ABCT defensive success
                </p>
              </div>

              <!-- Tactical End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Tactical End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> Company battle positions occupied; direct fires integrated</li>
                  <li><strong>Enemy:</strong> Armored company defeated; follow-on forces delayed</li>
                  <li><strong>Terrain:</strong> Key terrain controlled; engagement areas prepared</li>
                  <li><strong>Civil:</strong> No civilian casualties; infrastructure preserved</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Battalion Task Organization & Company Integration -->
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
                Battalion Task Organization & Multi-Company Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>A Company (OPCON):</strong> Eastern sector, primary engagement area</li>
                  <li><strong>Priority:</strong> Direct fires, engineer support, CAS</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>B Company (OPCON):</strong> Western sector, secondary engagement area</li>
                  <li><strong>C Company (OPCON):</strong> Reserve, counter-attack operations</li>
                  <li><strong>D Company (OPCON):</strong> Support company, sustainment operations</li>
                </ul>
              </div>

              <!-- Battalion Assets -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Battalion Enablers</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Battalion Mortar Platoon (120mm), Scout Platoon,
                  Headquarters Company, Maintenance Section
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Combined Arms Operations & Direct Fire Integration -->
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
                Combined Arms Operations & Direct Fire Integration
              </h4>

              <!-- Direct Fire Integration -->
              <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Direct Fire Integration</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Tank Platoons:</strong> M1A2 SEPv3 main gun fires, coax MG</li>
                  <li><strong>Bradley Platoons:</strong> 25mm chain gun, TOW missiles</li>
                  <li><strong>Mortar Section:</strong> 120mm indirect fires, illumination</li>
                  <li><strong>Anti-Tank:</strong> Javelin missiles, AT-4 rockets</li>
                </ul>
              </div>

              <!-- Tactical Maneuver -->
              <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Maneuver</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Defensive Operations:</strong> Company battle positions, mutual support</li>
                  <li><strong>Offensive Operations:</strong> Company attacks, exploitation</li>
                  <li><strong>Reconnaissance:</strong> Scout platoon, company reconnaissance</li>
                  <li><strong>Security:</strong> Outposts, patrols, observation posts</li>
                </ul>
              </div>

              <!-- Fire Support -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Fire Support Integration</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Brigade fires coordination, CAS integration,
                  mortar fires, call for fire procedures
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Battalion Sustainment & Tactical Communications -->
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
                Battalion Sustainment & Tactical Communications
              </h4>

              <!-- Tactical Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Battalion Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Multi-Company Support:</strong> 3 tank companies plus support company</li>
                  <li><strong>Direct Support:</strong> Fuel, ammunition, maintenance at company level</li>
                  <li><strong>Medical Support:</strong> Battalion aid station, company medics</li>
                  <li><strong>Maintenance:</strong> Field maintenance, recovery operations</li>
                </ul>
              </div>

              <!-- Communications Systems -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Battalion Communications</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Systems:</strong> FBCB2, BFT, digital systems</li>
                  <li><strong>Tactical Radio:</strong> SINCGARS, company/platoon nets</li>
                  <li><strong>Data Systems:</strong> Tactical internet, situational awareness</li>
                </ul>
              </div>

              <!-- Tactical Risks -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Tactical Risk Management</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Company coordination challenges; ammunition resupply;
                  vehicle maintenance; casualty evacuation
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Battalion-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Battalion Coordinating Instructions & Direct Fire Control Measures
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Tactical CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Enemy armor in engagement areas</li>
                <li><strong>PIR 2:</strong> Company defensive preparations</li>
                <li><strong>FFIR 1:</strong> Platoon combat readiness</li>
                <li><strong>EEFI 1:</strong> Battalion positioning and strength</li>
              </ul>
            </div>

            <!-- Direct Fire Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Direct Fire Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Company Sectors:</strong> A/B/C Company battle positions</li>
                <li><strong>Engagement Areas:</strong> EA STEEL-1, EA STEEL-2, EA STEEL-3</li>
                <li><strong>Target Reference Points:</strong> TRP 101-120</li>
                <li><strong>Final Protective Lines:</strong> Company FPLs, interlocking fires</li>
              </ul>
            </div>

            <!-- Tactical Priorities -->
            <div style="background-color: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Battalion Priorities</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>Fires:</strong> Direct fires, mortar support</li>
                <li><strong>Maneuver:</strong> Company positioning, reserves</li>
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
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Tactical Cascading to Subordinate Companies</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            Battalion-level tactical framework cascades to subordinate companies: <strong>A Company</strong> inherits eastern sector with primary engagement mission;
            <strong>B Company</strong> receives western sector with supporting fires role; <strong>C Company</strong> maintains reserve with counter-attack capability.
            Each company adapts combined arms operations, direct fire plans, and sustainment procedures to their assigned battle positions while maintaining
            synchronization with Battalion objectives and Brigade tactical goals.
          </p>
        </div>
      </div>
    `;
  }
};

