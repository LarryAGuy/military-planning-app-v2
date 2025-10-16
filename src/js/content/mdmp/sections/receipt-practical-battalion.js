/**
 * MDMP Receipt of Mission - Battalion Level Practical Example
 * Tactical-Level Command - Multi-Company Coordination
 * Source: FM 3-90 (Offense and Defense), FM 3-96 (Brigade Combat Team), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to tactical doctrinal content requirements
 * European Theater setting - 1-77 AR "Thunder Battalion" under 1st ABCT, Warsaw North East Sector
 */

export function getBattalionReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Battalion Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-flag-checkered" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Battalion Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical-Level Command - Multi-Company Coordination (Lieutenant Colonel)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - 1-77 AR "Thunder Battalion" Tactical Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Battalion:</strong> 1st Battalion, 77th Armor Regiment (1-77 AR) "Thunder"<br>
              <strong>Commander:</strong> Lieutenant Colonel Alexander Pierce, USA<br>
              <strong>Higher HQ:</strong> 1st ABCT, 1st Armored Division (COL Martinez / MG Thompson)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 142530Z MAR 25 via SIPR from 1st ABCT<br>
              <strong>AOR:</strong> Warsaw North East Sector (WNE)<br>
              <strong>Primary Focus:</strong> Urban defensive sectors; mobility corridors; critical nodes<br>
              <strong>Subordinate Companies:</strong> Alpha (A/1-77), Bravo (B/1-77), Charlie (C/1-77), Delta (D/1-77, FSC)
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Content Card Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

        <!-- Card 1: Battalion Mission Receipt & Company Warning Order -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-inbox" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Battalion Mission Receipt & Company Warning Order
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Mission Receipt & Company Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>142530Z MAR 25:</strong> 1st ABCT Warning Order #1 received via SIPR</p>
                <p style="margin: 0 0 6px 0;"><strong>142540Z MAR 25:</strong> Battalion Commander briefed by BDE S-3</p>
                <p style="margin: 0 0 6px 0;"><strong>142550Z MAR 25:</strong> BN staff huddle - S-2, S-3, S-4, S-6 synchronization</p>
                <p style="margin: 0 0 6px 0;"><strong>142615Z MAR 25:</strong> Company commanders VTC - A, B, C, D Companies</p>
                <p style="margin: 0 0 6px 0;"><strong>142640Z MAR 25:</strong> BN Warning Order #1 to subordinate Companies</p>
                <p style="margin: 0 0 6px 0;"><strong>142700Z MAR 25:</strong> Polish municipal defense liaison integration</p>
                <p style="margin: 0;"><strong>142730Z MAR 25:</strong> BN MDMP initiation - 3-hour tactical planning cycle</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1-77 AR Warning Order #1 to Companies (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> A/1-77, B/1-77, C/1-77, D/1-77 FSC</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Defend WNE sector per 1st ABCT guidance</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Conduct urban defense and area security in assigned sectors</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> A Co - East; B Co - North; C Co - Center; D Co - Support</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> Warsaw Municipal Defense, Polish National Police</p>
                <p style="margin: 0;"><strong>ADMIN/LOG:</strong> BN sustainment; D/1-77 FSC pushes Class III/V forward</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Battalion Command Structure & Company Relationships -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-sitemap" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Battalion Command Structure & Company Relationships
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Tactical Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1st ABCT - Tactical guidance and resource allocation</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE COMPANIES:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• Alpha Company (A/1-77) - East Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• Bravo Company (B/1-77) - North Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• Charlie Company (C/1-77) - Center Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• Delta Company (D/1-77, FSC) - Sustainment Support</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING ELEMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• HHC, Mortar Platoon (120mm), Scout Platoon, Medical, Signal</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1-77 AR Force Structure (Tactical Level)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> ~800 (Battalion)<br>
                  <strong>Companies:</strong> 4 (3 Maneuver, 1 Support)<br>
                  <strong>Platoons:</strong> 12 Maneuver, 4 Support
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Tanks:</strong> 42 M1A2 (3x Co x 14 each)<br>
                  <strong>IFVs:</strong> 42 M2A3 (mixed task org as needed)<br>
                  <strong>Fires:</strong> 120mm Mortars (organic BN mortars)
                </div>
              </div>
            </div>

            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Host Nation Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Warsaw Municipal:</strong> Sector Defense Cells<br>
                <strong>Polish National Police:</strong> Civil-Military coordination<br>
                <strong>Emergency Services:</strong> Medical, Fire, Utilities<br>
                <strong>Framework:</strong> Urban defense with civil authority support
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
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Tactical Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-3 hours):</strong> Company coordination, sector occupation</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (3 hours-48 hours):</strong> Urban defense, obstacles, C2 nodes</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (2-7 days):</strong> Relief in place, depth, reserve tasks</p>
                <p style="margin: 0;"><strong>Long-term (1-2 weeks):</strong> Sector defense endurance, rotation</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Tactical Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Tactical:</strong> Company synchronization, Platoon task org</li>
                <li><strong>Urban Terrain:</strong> Key intersections, bridges, rail nodes</li>
                <li><strong>Host Nation:</strong> Municipal defense, emergency services</li>
                <li><strong>Logistics:</strong> BN sustainment, Class III/V pushes, CASEVAC</li>
                <li><strong>Intelligence:</strong> BN IPB, ISR handoff from BDE/Division</li>
              </ul>
            </div>

            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion Tactical Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Mobility/counter-mobility (breach/obstacle)<br>
                <strong>Priority 2:</strong> Ammunition resupply (Class V) & fuel (Class III)<br>
                <strong>Priority 3:</strong> Reserve positioning and rapid reinforcement
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Battalion Staff Actions & Time Management -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-clock" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Battalion Staff Actions & Time Management
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Staff Actions (First 60 Minutes)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>S-2 (Intelligence):</strong> Threat update, urban ISR, priority NAIs</p>
                <p style="margin: 0 0 6px 0;"><strong>S-3 (Operations):</strong> Sector assignment, priority tasks, reserve</p>
                <p style="margin: 0 0 6px 0;"><strong>S-4 (Logistics):</strong> Rehearsals for Class III/V, AXPs, CCPs</p>
                <p style="margin: 0 0 6px 0;"><strong>S-5 (Plans):</strong> MDMP timeline (3 hours) and decision points</p>
                <p style="margin: 0;"><strong>S-6 (Communications):</strong> Comms plan (primary/alt), retrans sites</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion MDMP Time Allocation (3-Hour Cycle)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 1:</strong> Receipt of Mission (60 min)<br>
                  <strong>Step 2:</strong> Mission Analysis (60 min)<br>
                  <strong>Step 3:</strong> COA Development (30 min)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 4:</strong> COA Analysis (20 min)<br>
                  <strong>Step 5:</strong> COA Comparison (10 min)<br>
                  <strong>Steps 6-7:</strong> Approval/Orders (20 min)
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Battalion-Specific Tactical Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag-checkered" style="margin-right: 8px;"></i>
          Battalion-Level Tactical Considerations
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Company Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>A Co - East sector</li>
              <li>B Co - North sector</li>
              <li>C Co - Center sector</li>
              <li>D Co - FSC support</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Urban Operations</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Key terrain in WNE sector</li>
              <li>Civilian traffic control</li>
              <li>Critical infrastructure protection</li>
              <li>Mobility corridor security</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Battalion Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Forward LOGPAC cycles</li>
              <li>AXPs/CCPs and CASEVAC routes</li>
              <li>Ammo transfer and holding points</li>
              <li>Fuel point placement and recovery</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-key" style="margin-right: 8px;"></i>
          Battalion Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Brigade guidance implementation through Company coordination</li>
              <li>Multi-Company synchronization and task organization</li>
              <li>Urban operations with civil authority integration</li>
              <li>BN sustainment and forward logistics control</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Battalion Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Compressed tactical planning cycle (3 hours)</li>
              <li>Company sector guidance and boundaries</li>
              <li>Reserve planning and mobility/counter-mobility</li>
              <li>Ammo/fuel pushes and CASEVAC routes</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getBattalionReceiptExample;
