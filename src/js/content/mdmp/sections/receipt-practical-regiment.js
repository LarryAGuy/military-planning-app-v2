/**
 * MDMP Receipt of Mission - Regiment Level Practical Example
 * Tactical-Level Command - Multi-Squadron Coordination (Alternative Organizational Structure)
 * Source: FM 3-90 (Offense and Defense), ATP 3-90.1 (Armor Operations), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive Regiment-level doctrinal content requirements
 * European Theater setting - 2nd Cavalry Regiment under V Corps command, Eastern Poland Reconnaissance
 */

export function getRegimentReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Regiment Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-star" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Regiment Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical-Level Command - Multi-Squadron Coordination (Colonel)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - 2nd Cavalry Regiment Tactical Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Regiment:</strong> 2nd Cavalry Regiment "Toujours Pret"<br>
              <strong>Commander:</strong> Colonel David Harrison, USA<br>
              <strong>Higher HQ:</strong> V Corps (MG Chen, 2-Star)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 142100Z MAR 25 via SIPR from V Corps<br>
              <strong>AOR:</strong> Eastern Poland Border Region<br>
              <strong>Primary Focus:</strong> Reconnaissance and Security Operations<br>
              <strong>Subordinate Squadrons:</strong> 1st, 2nd, 3rd Squadrons, RST
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

        <!-- Card 1: Regiment Mission Receipt & Squadron Warning Order -->
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
              Regiment Mission Receipt & Squadron Warning Order
            </h4>

            <!-- Regiment Mission Receipt Timeline -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Regiment Mission Receipt & Squadron Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>142100Z MAR 25:</strong> V Corps Warning Order #1 received via SIPR</p>
                <p style="margin: 0 0 6px 0;"><strong>142115Z MAR 25:</strong> Regiment Commander briefed by Corps G-2</p>
                <p style="margin: 0 0 6px 0;"><strong>142130Z MAR 25:</strong> Regiment staff huddle - S-2, S-3, S-4, S-5 synchronization</p>
                <p style="margin: 0 0 6px 0;"><strong>142200Z MAR 25:</strong> Squadron commanders VTC - 1st, 2nd, 3rd Squadrons</p>
                <p style="margin: 0 0 6px 0;"><strong>142230Z MAR 25:</strong> Regiment Warning Order #1 to subordinate Squadrons</p>
                <p style="margin: 0 0 6px 0;"><strong>142300Z MAR 25:</strong> Polish coordination - Border Guard liaison</p>
                <p style="margin: 0;"><strong>142400Z MAR 25:</strong> Regiment MDMP initiation - 6-hour tactical planning cycle</p>
              </div>
            </div>

            <!-- Regiment Warning Order Content -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">2nd CAV Warning Order #1 to Squadrons (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> 1st Squadron, 2nd Squadron, 3rd Squadron, RST</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Conduct reconnaissance and security operations per V Corps guidance</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Execute screen and reconnaissance along eastern Poland border</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> 1st SQN - North; 2nd SQN - Center; 3rd SQN - South; RST - Support</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> Polish Border Guard, local authorities</p>
                <p style="margin: 0;"><strong>ADMIN/LOG:</strong> Regiment sustainment, Squadron logistics coordination</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Regiment Command Structure & Squadron Relationships -->
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
              Regiment Command Structure & Squadron Relationships
            </h4>

            <!-- Regiment Command Relationships -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Regiment Tactical Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• V Corps - Tactical guidance and reconnaissance tasking</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE SQUADRONS:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1st Squadron "Saber" - Northern Border Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 2nd Squadron "Sabre" - Central Border Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 3rd Squadron "Sword" - Southern Border Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• RST (Regimental Support Squadron) - Logistics Support</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING ELEMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• RHB, RSTA, Engineer Troop, Signal Troop</p>
              </div>
            </div>

            <!-- Regiment Force Structure -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">2nd CAV Force Structure (Reconnaissance)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> 3,500 (Regiment)<br>
                  <strong>Squadrons:</strong> 4 (3 Cavalry, 1 Support)<br>
                  <strong>Troops:</strong> 12 (9 Cavalry, 3 Support)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Strykers:</strong> 126 Reconnaissance Vehicles<br>
                  <strong>Aviation:</strong> 24 OH-58 Kiowa Warriors<br>
                  <strong>Artillery:</strong> 6 M777 Howitzers
                </div>
              </div>
            </div>

            <!-- Border Operations Integration -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Border Operations Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Polish Border Guard:</strong> Joint reconnaissance coordination<br>
                <strong>Local Authorities:</strong> Municipal and regional coordination<br>
                <strong>NATO Partners:</strong> Information sharing protocols<br>
                <strong>Framework:</strong> Cross-border reconnaissance and security operations
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3: Reconnaissance Planning Considerations -->
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
              Reconnaissance Planning Considerations
            </h4>

            <!-- Regiment Planning Horizons -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Regiment Reconnaissance Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-6 hours):</strong> Squadron coordination, reconnaissance deployment</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (6 hours-3 days):</strong> Screen operations, Squadron positioning</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (3 days-2 weeks):</strong> Sustained reconnaissance, border security</p>
                <p style="margin: 0;"><strong>Long-term (2 weeks-1 month):</strong> Reconnaissance objectives, Squadron rotation</p>
              </div>
            </div>

            <!-- Critical Reconnaissance Factors -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Reconnaissance Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Tactical:</strong> Squadron synchronization, Troop coordination</li>
                <li><strong>Border Terrain:</strong> Eastern Poland frontier, crossing points</li>
                <li><strong>Host Nation:</strong> Polish Border Guard coordination, local liaison</li>
                <li><strong>Logistics:</strong> Regiment sustainment, Squadron support coordination</li>
                <li><strong>Intelligence:</strong> RSTA operations, Squadron intelligence fusion</li>
              </ul>
            </div>

            <!-- Resource Allocation -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Regiment Reconnaissance Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Squadron mobility, reconnaissance assets<br>
                <strong>Priority 2:</strong> Regiment sustainment, border operations support<br>
                <strong>Priority 3:</strong> RSTA capabilities, Squadron reinforcement
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Regiment Staff Actions & Time Management -->
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
              Regiment Staff Actions & Time Management
            </h4>

            <!-- Regiment Staff Actions -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Regiment Staff Actions (First 45 Minutes)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>S-2 (Intelligence):</strong> Reconnaissance threat assessment, Squadron intelligence coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>S-3 (Operations):</strong> Squadron mission analysis, reconnaissance COA framework</p>
                <p style="margin: 0 0 6px 0;"><strong>S-4 (Logistics):</strong> Regiment sustainment planning, Squadron logistics coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>S-5 (Plans):</strong> Regiment MDMP timeline, Squadron planning guidance</p>
                <p style="margin: 0;"><strong>S-6 (Communications):</strong> Regiment networks, Squadron communications integration</p>
              </div>
            </div>

            <!-- Regiment MDMP Time Allocation -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Regiment MDMP Time Allocation (6-Hour Cycle)</h5>
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

            <!-- Regiment Coordination Requirements -->
            <div style="background-color: #581c87; padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Regiment Reconnaissance Coordination</h5>
              <p style="color: #e9d5ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Higher:</strong> V Corps tactical command, reconnaissance tasking<br>
                <strong>Subordinate:</strong> 1st, 2nd, 3rd Squadrons, RST<br>
                <strong>Adjacent:</strong> 1st AD, 3rd ID, Polish Border Guard<br>
                <strong>Supporting:</strong> RHB, RSTA, Engineer Troop, Signal Troop
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Regiment-Specific Reconnaissance Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-star" style="margin-right: 8px;"></i>
          Regiment-Level Reconnaissance Considerations
        </h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Squadron Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>1st SQN Northern sector</li>
              <li>2nd SQN Central sector</li>
              <li>3rd SQN Southern sector</li>
              <li>RST logistics coordination</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Border Operations</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Eastern Poland frontier</li>
              <li>Border crossing monitoring</li>
              <li>Cross-border coordination</li>
              <li>Reconnaissance screens</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Regiment Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Regimental support squadron</li>
              <li>Squadron logistics support</li>
              <li>Border operations coordination</li>
              <li>Mobile sustainment operations</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-key" style="margin-right: 8px;"></i>
          Regiment Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Reconnaissance Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Corps guidance implementation through Squadron coordination</li>
              <li>Multi-Squadron synchronization and reconnaissance integration</li>
              <li>Border operations coordination with host nation authorities</li>
              <li>Regiment sustainment and Squadron logistics support</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Regiment Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Reconnaissance planning cycle (6 hours parallel to Brigade timing)</li>
              <li>Squadron mission guidance and sector coordination</li>
              <li>Reconnaissance resource allocation between Squadron commands</li>
              <li>Border terrain considerations and cross-border coordination</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getRegimentReceiptExample;
