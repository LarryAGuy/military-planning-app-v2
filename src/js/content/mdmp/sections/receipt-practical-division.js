/**
 * MDMP Receipt of Mission - Division Level Practical Example
 * Tactical-Level Command - Multi-Brigade Coordination
 * Source: ATP 3-91 (Division Operations), FM 3-96 (Brigade Combat Team), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive Division-level doctrinal content requirements
 * European Theater setting - 1st Armored Division under V Corps command, Warsaw Defense Sector
 */

export function getDivisionReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Division Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-chess-rook" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Division Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical-Level Command - Multi-Brigade Coordination (2-Star General)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - 1st Armored Division Tactical Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Division:</strong> 1st Armored Division "Old Ironsides"<br>
              <strong>Commander:</strong> Major General Michael Thompson, USA (2-Star)<br>
              <strong>Higher HQ:</strong> V Corps (MG Chen, 2-Star)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 142100Z MAR 25 via SIPR from V Corps<br>
              <strong>AOR:</strong> Warsaw Defense Sector, Poland<br>
              <strong>Primary Focus:</strong> Warsaw Metropolitan Area Defense<br>
              <strong>Subordinate Brigades:</strong> 1st ABCT, 2nd ABCT, 3rd SBCT, DIVARTY
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

        <!-- Card 1: Division Mission Receipt & Brigade Warning Order -->
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
              Division Mission Receipt & Brigade Warning Order
            </h4>

            <!-- Division Mission Receipt Timeline -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Division Mission Receipt & Brigade Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>142100Z MAR 25:</strong> V Corps Warning Order #1 received via SIPR</p>
                <p style="margin: 0 0 6px 0;"><strong>142115Z MAR 25:</strong> Division Commander (2-Star) briefed by Corps G-3</p>
                <p style="margin: 0 0 6px 0;"><strong>142130Z MAR 25:</strong> Division staff huddle - S-2, S-3, S-4, S-5 synchronization</p>
                <p style="margin: 0 0 6px 0;"><strong>142200Z MAR 25:</strong> Brigade commanders VTC - 1st ABCT, 2nd ABCT, 3rd SBCT</p>
                <p style="margin: 0 0 6px 0;"><strong>142230Z MAR 25:</strong> Division Warning Order #1 to subordinate Brigades</p>
                <p style="margin: 0 0 6px 0;"><strong>142300Z MAR 25:</strong> Polish coordination - 16th Mechanized Division liaison</p>
                <p style="margin: 0;"><strong>142400Z MAR 25:</strong> Division MDMP initiation - 12-hour tactical planning cycle</p>
              </div>
            </div>

            <!-- Division Warning Order Content -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1st AD Warning Order #1 to Brigades (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> 1st ABCT, 2nd ABCT, 3rd SBCT, DIVARTY, Division Assets</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Defend Warsaw Metropolitan Area per V Corps guidance</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Conduct defensive operations to secure Warsaw Defense Sector</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> 1st ABCT - North; 2nd ABCT - South; 3rd SBCT - Reserve</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> Polish 16th Mechanized Division integration</p>
                <p style="margin: 0;"><strong>ADMIN/LOG:</strong> Division sustainment, Brigade logistics coordination</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Division Command Structure & Brigade Relationships -->
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
              Division Command Structure & Brigade Relationships
            </h4>

            <!-- Division Command Relationships -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Division Tactical Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• V Corps (Tactical) - Mission guidance and resource allocation</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE BRIGADES:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1st ABCT "Iron Brigade" - Warsaw North Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 2nd ABCT "Steel Brigade" - Warsaw South Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 3rd SBCT "Stryker Brigade" - Division Reserve</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• DIVARTY - Division Artillery Support</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING ELEMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• 1st CAB, 1st BSTB, 1st MP CO, 1st MICO</p>
              </div>
            </div>

            <!-- Division Force Structure -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1st AD Force Structure (Tactical Level)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> 15,000 (Division)<br>
                  <strong>Brigades:</strong> 4 (3 Maneuver, 1 Fires)<br>
                  <strong>Battalions:</strong> 16 (12 Maneuver, 4 Support)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Aviation:</strong> 1 CAB (24 aircraft)<br>
                  <strong>Artillery:</strong> DIVARTY (3 FABs)<br>
                  <strong>Support:</strong> 1 BSTB, 1 MICO
                </div>
              </div>
            </div>

            <!-- Coalition Integration -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Coalition Division Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Polish Forces:</strong> 16th Mechanized Division (TACON coordination)<br>
                <strong>Host Nation:</strong> Warsaw Municipal Government coordination<br>
                <strong>Civilian:</strong> Polish National Police, Emergency Services<br>
                <strong>Framework:</strong> Urban defense coordination with host nation forces
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

            <!-- Division Planning Horizons -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Division Tactical Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-12 hours):</strong> Brigade coordination, tactical force protection</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (12 hours-7 days):</strong> Tactical operations, Brigade deployment</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (1-4 weeks):</strong> Sustained tactical operations, urban defense</p>
                <p style="margin: 0;"><strong>Long-term (1-3 months):</strong> Tactical objectives, Brigade rotation</p>
              </div>
            </div>

            <!-- Critical Tactical Factors -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Tactical Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Tactical:</strong> Brigade synchronization, Battalion coordination</li>
                <li><strong>Urban Terrain:</strong> Warsaw metropolitan area, civilian considerations</li>
                <li><strong>Host Nation:</strong> Polish military coordination, civilian authorities</li>
                <li><strong>Logistics:</strong> Division sustainment, Brigade support coordination</li>
                <li><strong>Intelligence:</strong> Tactical IPB, Brigade intelligence fusion</li>
              </ul>
            </div>

            <!-- Resource Allocation -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Division Tactical Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Brigade mobility, tactical fires coordination<br>
                <strong>Priority 2:</strong> Division sustainment, urban operations support<br>
                <strong>Priority 3:</strong> Tactical reserves, Brigade reinforcement capability
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Division Staff Actions & Time Management -->
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
              Division Staff Actions & Time Management
            </h4>

            <!-- Division Staff Actions -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Division Staff Actions (First 90 Minutes)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>S-2 (Intelligence):</strong> Tactical threat assessment, Brigade intelligence coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>S-3 (Operations):</strong> Brigade mission analysis, tactical COA framework</p>
                <p style="margin: 0 0 6px 0;"><strong>S-4 (Logistics):</strong> Division sustainment planning, Brigade logistics coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>S-5 (Plans):</strong> Division MDMP timeline, Brigade planning guidance</p>
                <p style="margin: 0;"><strong>S-6 (Communications):</strong> Division networks, Brigade communications integration</p>
              </div>
            </div>

            <!-- Division MDMP Time Allocation -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Division MDMP Time Allocation (12-Hour Cycle)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 1:</strong> Receipt of Mission (90 min)<br>
                  <strong>Step 2:</strong> Mission Analysis (4 hrs)<br>
                  <strong>Step 3:</strong> COA Development (3 hrs)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 4:</strong> COA Analysis (2 hrs)<br>
                  <strong>Step 5:</strong> COA Comparison (90 min)<br>
                  <strong>Steps 6-7:</strong> Approval/Orders (90 min)
                </div>
              </div>
            </div>

            <!-- Division Coordination Requirements -->
            <div style="background-color: #581c87; padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Division Tactical Coordination</h5>
              <p style="color: #e9d5ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Higher:</strong> V Corps tactical command, operational coordination<br>
                <strong>Subordinate:</strong> 1st ABCT, 2nd ABCT, 3rd SBCT, DIVARTY<br>
                <strong>Adjacent:</strong> 3rd ID, 1st CAV DIV, Polish 16th Mechanized<br>
                <strong>Supporting:</strong> 1st CAB, 1st BSTB, 1st MP CO, 1st MICO
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Division-Specific Tactical Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-chess-rook" style="margin-right: 8px;"></i>
          Division-Level Tactical Considerations
        </h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Brigade Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>1st ABCT Warsaw North</li>
              <li>2nd ABCT Warsaw South</li>
              <li>3rd SBCT Division Reserve</li>
              <li>DIVARTY fires coordination</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Urban Operations</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Warsaw metropolitan defense</li>
              <li>Civilian population protection</li>
              <li>Critical infrastructure security</li>
              <li>Urban terrain navigation</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Division Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Division sustainment brigade</li>
              <li>Brigade logistics support</li>
              <li>Host nation coordination</li>
              <li>Urban supply challenges</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-key" style="margin-right: 8px;"></i>
          Division Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Corps guidance implementation through Brigade coordination</li>
              <li>Multi-Brigade synchronization and tactical integration</li>
              <li>Urban operations coordination with host nation forces</li>
              <li>Division sustainment and Brigade logistics support</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Division Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Compressed tactical planning cycle (12 hours vs. Corps 24 hours)</li>
              <li>Brigade mission guidance and sector coordination</li>
              <li>Tactical resource allocation between Brigade commands</li>
              <li>Urban terrain considerations and civilian protection</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getDivisionReceiptExample;
