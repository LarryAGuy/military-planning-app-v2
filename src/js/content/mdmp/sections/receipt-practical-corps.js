/**
 * MDMP Receipt of Mission - Corps Level Practical Example
 * Operational-Level Command - Multi-Division Coordination
 * Source: FM 3-92 (Corps Operations), ATP 3-92 (Corps Operations), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive Corps-level doctrinal content requirements
 * European Theater setting - V Corps forward deployment under USAREUR-AF Army Command
 */

export function getCorpsReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Corps Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-chess-king" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Corps Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Operational-Level Command - Multi-Division Coordination (2-Star General)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - V Corps Operational Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Corps:</strong> V Corps (Forward Deployed)<br>
              <strong>Commander:</strong> Major General Sarah Chen, USA (2-Star)<br>
              <strong>Higher HQ:</strong> USAREUR-AF (LTG Rodriguez, 3-Star)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 141800Z MAR 25 via SIPR from USAREUR-AF<br>
              <strong>AOR:</strong> Eastern Poland, Baltic Approaches<br>
              <strong>Primary Focus:</strong> Warsaw-Gdansk Corridor, Suwalki Gap<br>
              <strong>Subordinate Divisions:</strong> 1st AD, 3rd ID, 1st CAV DIV
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

        <!-- Card 1: Corps Mission Receipt & Division Warning Order -->
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
              Corps Mission Receipt & Division Warning Order
            </h4>

            <!-- Corps Mission Receipt Timeline -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Corps Mission Receipt & Division Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>141800Z MAR 25:</strong> Army Warning Order #1 received from USAREUR-AF</p>
                <p style="margin: 0 0 6px 0;"><strong>141815Z MAR 25:</strong> Corps Commander (2-Star) briefed by Army G-3</p>
                <p style="margin: 0 0 6px 0;"><strong>141830Z MAR 25:</strong> Corps staff huddle - G-2, G-3, G-4, G-5 synchronization</p>
                <p style="margin: 0 0 6px 0;"><strong>141900Z MAR 25:</strong> Division commanders VTC - 1st AD, 3rd ID, 1st CAV</p>
                <p style="margin: 0 0 6px 0;"><strong>141930Z MAR 25:</strong> Corps Warning Order #1 to subordinate Divisions</p>
                <p style="margin: 0 0 6px 0;"><strong>142000Z MAR 25:</strong> Coalition coordination - UK 1st Armoured Division</p>
                <p style="margin: 0;"><strong>142100Z MAR 25:</strong> Corps MDMP initiation - 24-hour tactical planning cycle</p>
              </div>
            </div>

            <!-- Corps Warning Order Content -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">V Corps Warning Order #1 to Divisions (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> 1st AD, 3rd ID, 1st CAV DIV, Corps Assets</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Execute forward deterrence operations in Eastern Poland</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Defend Warsaw-Gdansk corridor, secure Suwalki Gap</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> 1st AD - Warsaw; 3rd ID - Gdansk; 1st CAV - Reserve</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> UK 1st Armoured Division integration</p>
                <p style="margin: 0;"><strong>ADMIN/LOG:</strong> Corps sustainment, Polish host nation coordination</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Corps Command Structure & Division Relationships -->
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
              Corps Command Structure & Division Relationships
            </h4>

            <!-- Corps Command Relationships -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Corps Tactical Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• USAREUR-AF (Army) - Operational guidance and resource allocation</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE DIVISIONS:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1st Armored Division - Warsaw Defense Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 3rd Infantry Division - Gdansk-Baltic Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1st Cavalry Division - Corps Reserve/Suwalki Gap</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING ELEMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• 41st FAB, 35th ADA, 16th MP BDE, 593rd ESC</p>
              </div>
            </div>

            <!-- Corps Force Structure -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">V Corps Force Structure (Tactical Level)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> 45,000 (US Forces)<br>
                  <strong>Divisions:</strong> 3 (1st AD, 3rd ID, 1st CAV)<br>
                  <strong>Brigades:</strong> 12 (4 per Division)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Aviation:</strong> 1 CAB, 2 AHBs<br>
                  <strong>Artillery:</strong> 1 FAB, 1 ADA BDE<br>
                  <strong>Support:</strong> 1 ESC, 1 MP BDE
                </div>
              </div>
            </div>

            <!-- Coalition Integration -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Coalition Corps Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>UK Forces:</strong> 1st Armoured Division (OPCON to V Corps)<br>
                <strong>Polish Forces:</strong> 16th Mechanized Division (TACON coordination)<br>
                <strong>German Forces:</strong> 10th Panzer Division (Adjacent/Supporting)<br>
                <strong>Framework:</strong> Multinational Corps under US command
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

            <!-- Corps Planning Horizons -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Corps Tactical Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-24 hours):</strong> Division coordination, tactical force protection</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (1-14 days):</strong> Tactical operations, Division deployment</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (2 weeks-2 months):</strong> Sustained tactical operations</p>
                <p style="margin: 0;"><strong>Long-term (2-6 months):</strong> Tactical objectives, Division rotation</p>
              </div>
            </div>

            <!-- Critical Tactical Factors -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Tactical Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Tactical:</strong> Division synchronization, brigade coordination</li>
                <li><strong>Terrain:</strong> Warsaw urban, Gdansk port, Suwalki Gap chokepoint</li>
                <li><strong>Coalition:</strong> UK Division integration, Polish coordination</li>
                <li><strong>Logistics:</strong> Corps sustainment, Division support</li>
                <li><strong>Intelligence:</strong> Tactical IPB, Division intelligence support</li>
              </ul>
            </div>

            <!-- Resource Allocation -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Corps Tactical Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Division mobility, tactical fires coordination<br>
                <strong>Priority 2:</strong> Corps sustainment, coalition integration<br>
                <strong>Priority 3:</strong> Tactical reserves, Division reinforcement
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Corps Staff Actions & Time Management -->
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
              Corps Staff Actions & Time Management
            </h4>

            <!-- Corps Staff Actions -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Corps Staff Actions (First 2 Hours)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>G-2 (Intelligence):</strong> Tactical threat assessment, Division intelligence coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>G-3 (Operations):</strong> Division mission analysis, tactical COA framework</p>
                <p style="margin: 0 0 6px 0;"><strong>G-4 (Logistics):</strong> Corps sustainment planning, Division logistics coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>G-5 (Plans):</strong> Corps MDMP timeline, Division planning guidance</p>
                <p style="margin: 0;"><strong>G-6 (Communications):</strong> Corps networks, Division communications integration</p>
              </div>
            </div>

            <!-- Corps MDMP Time Allocation -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Corps MDMP Time Allocation (24-Hour Cycle)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 1:</strong> Receipt of Mission (2 hrs)<br>
                  <strong>Step 2:</strong> Mission Analysis (8 hrs)<br>
                  <strong>Step 3:</strong> COA Development (6 hrs)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 4:</strong> COA Analysis (4 hrs)<br>
                  <strong>Step 5:</strong> COA Comparison (2 hrs)<br>
                  <strong>Steps 6-7:</strong> Approval/Orders (2 hrs)
                </div>
              </div>
            </div>

            <!-- Corps Coordination Requirements -->
            <div style="background-color: #581c87; padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Corps Tactical Coordination</h5>
              <p style="color: #e9d5ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Higher:</strong> USAREUR-AF Army Command, operational coordination<br>
                <strong>Subordinate:</strong> 1st AD, 3rd ID, 1st CAV DIV, Corps assets<br>
                <strong>Adjacent:</strong> XVIII ABC, coalition corps, host nation forces<br>
                <strong>Supporting:</strong> 41st FAB, 35th ADA, 16th MP BDE, 593rd ESC
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Corps-Specific Tactical Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-chess-king" style="margin-right: 8px;"></i>
          Corps-Level Tactical Considerations
        </h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Division Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>1st AD Warsaw defense</li>
              <li>3rd ID Gdansk-Baltic sector</li>
              <li>1st CAV Corps reserve</li>
              <li>Division boundary coordination</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Tactical Terrain</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Warsaw urban operations</li>
              <li>Gdansk port security</li>
              <li>Suwalki Gap chokepoint</li>
              <li>Vistula River crossings</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Corps Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Corps sustainment command</li>
              <li>Division logistics support</li>
              <li>Polish host nation support</li>
              <li>Tactical mobility assets</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-key" style="margin-right: 8px;"></i>
          Corps Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Army guidance implementation through Division coordination</li>
              <li>Multi-Division synchronization and tactical integration</li>
              <li>Coalition division integration and multinational coordination</li>
              <li>Tactical sustainment and Division logistics support</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Corps Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Compressed tactical planning cycle (24 hours vs. Army 48 hours)</li>
              <li>Division mission guidance and sector coordination</li>
              <li>Tactical resource allocation between Division commands</li>
              <li>Coalition integration at the tactical level</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getCorpsReceiptExample;
