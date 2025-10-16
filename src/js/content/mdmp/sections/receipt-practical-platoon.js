/**
 * MDMP Receipt of Mission - Platoon Level Practical Example
 * Tactical-Level Command - Squad Coordination
 * Source: FM 3-21.8 (Infantry Rifle Platoon), FM 3-96 (BCT), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to tactical doctrinal content requirements
 * European Theater setting - 1st Platoon (1/A/1-77 AR) under Alpha Company, Warsaw East Sub-Sector
 */

export function getPlatoonReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Platoon Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-users" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Platoon Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical-Level Command - Squad Coordination (Lieutenant)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - 1st Platoon (1/A/1-77) Tactical Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Platoon:</strong> 1st Platoon, Alpha Company, 1-77 AR (1/A/1-77)<br>
              <strong>Leader:</strong> 1LT Daniel Carter, USA (Platoon Leader)<br>
              <strong>Higher HQ:</strong> A/1-77 (CPT Nguyen), 1-77 AR (LTC Pierce)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 142735Z MAR 25 via CO WARNORD<br>
              <strong>AOR:</strong> Warsaw East Sub-Sector (WE-Alpha)<br>
              <strong>Primary Focus:</strong> Secure intersections, establish blocking positions<br>
              <strong>Subordinate Squads:</strong> 1st, 2nd, 3rd Rifle Squads; Weapons Squad
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Content Card Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

        <!-- Card 1: Platoon Mission Receipt & Squad Warning Order -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-inbox" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Platoon Mission Receipt & Squad Warning Order
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Platoon Mission Receipt & Squad Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>142735Z MAR 25:</strong> Company WARNORD #1 received by PL via RTO</p>
                <p style="margin: 0 0 6px 0;"><strong>142740Z MAR 25:</strong> PL briefs PSG; quick huddle with SLs/WSL</p>
                <p style="margin: 0 0 6px 0;"><strong>142750Z MAR 25:</strong> Platoon WARNORD #1 issued to Squads</p>
                <p style="margin: 0 0 6px 0;"><strong>142800Z MAR 25:</strong> Link-up with CO for sector graphics</p>
                <p style="margin: 0 0 6px 0;"><strong>142820Z MAR 25:</strong> Confirm LOGPAC window and CCP/AXP</p>
                <p style="margin: 0;"><strong>142830Z MAR 25:</strong> PL MDMP initiation - 45-minute cycle</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1/A/1-77 WARNORD #1 to Squads (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> 1st, 2nd, 3rd Rifle Squads; Weapons Squad</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Defend WE-Alpha sub-sector per A/1-77 guidance</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Occupy strongpoints and block designated approaches</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> 1st - East strongpoint; 2nd - North CP; 3rd - Center BP; WPN - AT/Overwatch</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> Police checkpoints; municipal defense nodes</p>
                <p style="margin: 0;">
                  <strong>ADMIN/LOG:</strong> LOGPAC 1500Z; CCP at School 12; Emergency resupply on green net
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Platoon Command Structure & Squad Relationships -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-sitemap" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Platoon Command Structure & Squad Relationships
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Platoon Tactical Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• A/1-77 - Sub-sector allocation and control</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE SQUADS:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1st Rifle Squad - East SP</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 2nd Rifle Squad - North CP</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 3rd Rifle Squad - Center BP</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• Weapons Squad - AT/Overwatch</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING/ATTACHMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• FO team, Medic, EN team (as available), RTO</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1/A/1-77 Force Structure (Platoon Level)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> ~35 (Platoon)<br>
                  <strong>Squads:</strong> 3 Rifle + 1 Weapons<br>
                  <strong>Vehicles:</strong> 4 IFVs/MBTs (task organized)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Fires:</strong> Javelin/AT, 60mm mortars (if attached)<br>
                  <strong>Comms:</strong> Primary/Alternate nets; retrans via CO<br>
                  <strong>Support:</strong> LOGPAC via Company; CCP/AXP routes
                </div>
              </div>
            </div>

            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Host Nation Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Warsaw Municipal:</strong> Sub-sector checkpoints/strongpoints<br>
                <strong>Polish National Police:</strong> Patrol coordination and access control<br>
                <strong>Emergency Services:</strong> CCP/AXP integration and routes<br>
                <strong>Framework:</strong> Urban defense in coordination with civil authorities
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3: Tactical Planning Considerations -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-chess" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Tactical Planning Considerations
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Platoon Tactical Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-45 min):</strong> Squad positioning, key site occupation</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (45 min-12 hrs):</strong> Defend positions, patrols, checkpoints</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (12-48 hrs):</strong> Relief in place, depth, reserve tasks</p>
                <p style="margin: 0;"><strong>Long-term (2-5 days):</strong> Sub-sector defense endurance, rotation</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Tactical Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Tactical:</strong> Squad synchronization, key tasks, reserve</li>
                <li><strong>Urban Terrain:</strong> Intersections, strongpoints, lines of sight</li>
                <li><strong>Host Nation:</strong> Police checkpoints, municipal defense support</li>
                <li><strong>Logistics:</strong> LOGPAC windows, CASEVAC, water/food resupply</li>
                <li><strong>Intelligence:</strong> PL IPB; patrols; CO/BN ISR handoff</li>
              </ul>
            </div>

            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Platoon Tactical Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Squad mobility/counter-mobility
                <br><strong>Priority 2:</strong> Ammunition/water resupply and CASEVAC
                <br><strong>Priority 3:</strong> Reserve positioning and relief-in-place
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Platoon Actions & Time Management -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-clock" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Platoon Actions & Time Management
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Platoon Initial Actions (First 20 Minutes)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>PL:</strong> WARNORD, sector graphic, priorities of work</p>
                <p style="margin: 0 0 6px 0;"><strong>PSG:</strong> Accountability, ammo/water check, LOGPAC timings</p>
                <p style="margin: 0 0 6px 0;"><strong>FO:</strong> TRPs, priority targets, comms checks</p>
                <p style="margin: 0;"><strong>RTO:</strong> Net updates, alt freqs, report timeline</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Platoon MDMP Time Allocation (45-Minute Cycle)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 1:</strong> Receipt of Mission (15 min)<br>
                  <strong>Step 2:</strong> Mission Analysis (15 min)<br>
                  <strong>Step 3:</strong> COA Development (5 min)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 4:</strong> COA Analysis (5 min)<br>
                  <strong>Step 5:</strong> COA Comparison (3 min)<br>
                  <strong>Steps 6-7:</strong> Approval/Orders (2 min)
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Platoon-Specific Tactical Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-users" style="margin-right: 8px;"></i>
          Platoon-Level Tactical Considerations
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Squad Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>1st Squad - East SP</li>
              <li>2nd Squad - North CP</li>
              <li>3rd Squad - Center BP</li>
              <li>Weapons - AT/Overwatch</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Urban Operations</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Sub-sector building/strongpoint defense</li>
              <li>Checkpoints and access control</li>
              <li>Patrol routes and observation</li>
              <li>Civil authority liaison at local level</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Platoon Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Ammo/water resupply timings</li>
              <li>CASEVAC to CCP/AXP</li>
              <li>Maintenance and recovery</li>
              <li>Reserve/rest plan</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-key" style="margin-right: 8px;"></i>
          Platoon Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Company guidance implementation through Squad coordination</li>
              <li>Multi-Squad synchronization and task organization</li>
              <li>Urban operations and sub-sector civil coordination</li>
              <li>Platoon sustainment and resupply control</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Platoon Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Compressed tactical planning cycle (45 minutes)</li>
              <li>Squad strongpoint guidance and boundaries</li>
              <li>Reserve planning and mobility/counter-mobility</li>
              <li>LOGPAC/CASEVAC timings and triggers</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getPlatoonReceiptExample;
