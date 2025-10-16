/**
 * MDMP Receipt of Mission - Brigade Level Practical Example
 * Tactical-Level Command - Multi-Battalion Coordination
 * Source: FM 3-96 (Brigade Combat Team), ATP 3-96 (Brigade Combat Team), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive Brigade-level doctrinal content requirements
 * European Theater setting - 1st ABCT "Iron Brigade" under 1st Armored Division command, Warsaw North Sector
 */

export function getBrigadeReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Brigade Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-shield-alt" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Brigade Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical-Level Command - Multi-Battalion Coordination (Colonel)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - 1st ABCT "Iron Brigade" Tactical Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Brigade:</strong> 1st Armored Brigade Combat Team "Iron Brigade"<br>
              <strong>Commander:</strong> Colonel Jennifer Martinez, USA<br>
              <strong>Higher HQ:</strong> 1st Armored Division (MG Thompson, 2-Star)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 142400Z MAR 25 via SIPR from 1st AD<br>
              <strong>AOR:</strong> Warsaw North Sector, Poland<br>
              <strong>Primary Focus:</strong> Northern Warsaw Urban Defense<br>
              <strong>Subordinate Battalions:</strong> 1-77 AR, 2-77 AR, 1-16 IN, 1-6 FA
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Content Card Grid -->
      <div style="
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 24px;
      ">

        <!-- Card 1: Brigade Mission Receipt & Battalion Warning Order -->
        <div style="
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          min-height: 400px;
        ">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-inbox" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Brigade Mission Receipt & Battalion Warning Order
            </h4>

            <!-- Brigade Mission Receipt Timeline -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Mission Receipt & Battalion Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>142400Z MAR 25:</strong> 1st AD Warning Order #1 received via SIPR</p>
                <p style="margin: 0 0 6px 0;"><strong>142415Z MAR 25:</strong> Brigade Commander briefed by Division S-3</p>
                <p style="margin: 0 0 6px 0;"><strong>142430Z MAR 25:</strong> Brigade staff huddle - S-2, S-3, S-4, S-5 synchronization</p>
                <p style="margin: 0 0 6px 0;"><strong>142500Z MAR 25:</strong> Battalion commanders VTC - 1-77 AR, 2-77 AR, 1-16 IN</p>
                <p style="margin: 0 0 6px 0;"><strong>142530Z MAR 25:</strong> Brigade Warning Order #1 to subordinate Battalions</p>
                <p style="margin: 0 0 6px 0;"><strong>142600Z MAR 25:</strong> Polish coordination - Warsaw Municipal Defense liaison</p>
                <p style="margin: 0;"><strong>142700Z MAR 25:</strong> Brigade MDMP initiation - 6-hour tactical planning cycle</p>
              </div>
            </div>

            <!-- Brigade Warning Order Content -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1st ABCT Warning Order #1 to Battalions (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> 1-77 AR, 2-77 AR, 1-16 IN, 1-6 FA, Brigade Assets</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Defend Warsaw North Sector per 1st AD guidance</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Conduct defensive operations to secure northern Warsaw approaches</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> 1-77 AR - East; 2-77 AR - West; 1-16 IN - Center; 1-6 FA - Support</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> Warsaw Municipal Defense, Polish National Police</p>
                <p style="margin: 0;"><strong>ADMIN/LOG:</strong> Brigade sustainment, Battalion logistics coordination</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Brigade Command Structure & Battalion Relationships -->
        <div style="
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          min-height: 400px;
        ">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-sitemap" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Brigade Command Structure & Battalion Relationships
            </h4>

            <!-- Brigade Command Relationships -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Tactical Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1st Armored Division - Tactical guidance and resource allocation</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE BATTALIONS:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1-77 AR "Thunder Battalion" - Warsaw North East Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 2-77 AR "Lightning Battalion" - Warsaw North West Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1-16 IN "Rangers Battalion" - Warsaw North Center Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1-6 FA "Steel Rain Battalion" - Brigade Fires Support</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING ELEMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• 1st BSB, 1st BEB, 1st BSTB, 1st MICO</p>
              </div>
            </div>

            <!-- Brigade Force Structure -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1st ABCT Force Structure (Tactical Level)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> 4,000 (Brigade)<br>
                  <strong>Battalions:</strong> 4 (2 Armor, 1 Infantry, 1 FA)<br>
                  <strong>Companies:</strong> 16 (12 Maneuver, 4 Support)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Tanks:</strong> 87 M1A2 Abrams<br>
                  <strong>IFVs:</strong> 152 M2A3 Bradley<br>
                  <strong>Artillery:</strong> 18 M109A7 Paladin
                </div>
              </div>
            </div>

            <!-- Host Nation Integration -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Host Nation Brigade Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Warsaw Municipal:</strong> City Defense Coordination Center<br>
                <strong>Polish National Police:</strong> Civil-Military Operations<br>
                <strong>Emergency Services:</strong> Fire, Medical, Infrastructure<br>
                <strong>Framework:</strong> Urban defense coordination with civilian authorities
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3: Tactical Planning Considerations -->
        <div style="
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          min-height: 400px;
        ">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-chess" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Tactical Planning Considerations
            </h4>

            <!-- Brigade Planning Horizons -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Tactical Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-6 hours):</strong> Battalion coordination, tactical force protection</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (6 hours-3 days):</strong> Tactical operations, Battalion deployment</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (3 days-2 weeks):</strong> Sustained tactical operations, urban defense</p>
                <p style="margin: 0;"><strong>Long-term (2 weeks-1 month):</strong> Tactical objectives, Battalion rotation</p>
              </div>
            </div>

            <!-- Critical Tactical Factors -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Tactical Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Tactical:</strong> Battalion synchronization, Company coordination</li>
                <li><strong>Urban Terrain:</strong> Northern Warsaw sectors, civilian infrastructure</li>
                <li><strong>Host Nation:</strong> Municipal coordination, emergency services integration</li>
                <li><strong>Logistics:</strong> Brigade sustainment, Battalion support coordination</li>
                <li><strong>Intelligence:</strong> Tactical IPB, Battalion intelligence fusion</li>
              </ul>
            </div>

            <!-- Resource Allocation -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade Tactical Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Battalion mobility, tactical fires coordination<br>
                <strong>Priority 2:</strong> Brigade sustainment, urban operations support<br>
                <strong>Priority 3:</strong> Tactical reserves, Battalion reinforcement capability
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Brigade Staff Actions & Time Management -->
        <div style="
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          min-height: 400px;
        ">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-clock" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Brigade Staff Actions & Time Management
            </h4>

            <!-- Brigade Staff Actions -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Staff Actions (First 45 Minutes)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>S-2 (Intelligence):</strong> Tactical threat assessment, Battalion intelligence coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>S-3 (Operations):</strong> Battalion mission analysis, tactical COA framework</p>
                <p style="margin: 0 0 6px 0;"><strong>S-4 (Logistics):</strong> Brigade sustainment planning, Battalion logistics coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>S-5 (Plans):</strong> Brigade MDMP timeline, Battalion planning guidance</p>
                <p style="margin: 0;"><strong>S-6 (Communications):</strong> Brigade networks, Battalion communications integration</p>
              </div>
            </div>

            <!-- Brigade MDMP Time Allocation -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade MDMP Time Allocation (6-Hour Cycle)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 1:</strong> Receipt of Mission (45 min)<br>
                  <strong>Step 2:</strong> Mission Analysis (2 hrs)<br>
                  <strong>Step 3:</strong> COA Development (90 min)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 4:</strong> COA Analysis (60 min)<br>
                  <strong>Step 5:</strong> COA Comparison (45 min)<br>
                  <strong>Steps 6-7:</strong> Approval/Orders (60 min)
                </div>
              </div>
            </div>

            <!-- Brigade Coordination Requirements -->
            <div style="background-color: #581c87; padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade Tactical Coordination</h5>
              <p style="color: #e9d5ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Higher:</strong> 1st Armored Division tactical command<br>
                <strong>Subordinate:</strong> 1-77 AR, 2-77 AR, 1-16 IN, 1-6 FA<br>
                <strong>Adjacent:</strong> 2nd ABCT, 3rd SBCT, Polish units<br>
                <strong>Supporting:</strong> 1st BSB, 1st BEB, 1st BSTB, 1st MICO
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Brigade-Specific Tactical Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
          Brigade-Level Tactical Considerations
        </h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Battalion Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>1-77 AR North East sector</li>
              <li>2-77 AR North West sector</li>
              <li>1-16 IN North Center sector</li>
              <li>1-6 FA fires coordination</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Urban Operations</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Northern Warsaw defense</li>
              <li>Civilian evacuation routes</li>
              <li>Critical infrastructure protection</li>
              <li>Urban mobility corridors</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Brigade Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Brigade support battalion</li>
              <li>Battalion logistics support</li>
              <li>Municipal resource coordination</li>
              <li>Urban resupply challenges</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-key" style="margin-right: 8px;"></i>
          Brigade Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Division guidance implementation through Battalion coordination</li>
              <li>Multi-Battalion synchronization and tactical integration</li>
              <li>Urban operations coordination with municipal authorities</li>
              <li>Brigade sustainment and Battalion logistics support</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Compressed tactical planning cycle (6 hours vs. Division 12 hours)</li>
              <li>Battalion mission guidance and sector coordination</li>
              <li>Tactical resource allocation between Battalion commands</li>
              <li>Urban terrain considerations and civilian coordination</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getBrigadeReceiptExample;
