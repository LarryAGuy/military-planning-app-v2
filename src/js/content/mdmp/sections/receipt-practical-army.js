/**
 * MDMP Receipt of Mission - Army Level Practical Example
 * Operational-Level Command - Multi-Corps Coordination
 * Source: FM 3-93 (Theater Army Operations), ATP 3-93 (Theater Army Operations), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive Army-level doctrinal content requirements
 * European Theater setting - Subordinate to USEUCOM Theater Command, coordinating V Corps and XVIII Airborne Corps
 */

export function getArmyReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Army Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-globe-americas" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Army Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Operational-Level Command - Multi-Corps Coordination (3-Star General)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - Army Operational Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Army:</strong> U.S. Army Europe-Africa (USAREUR-AF)<br>
              <strong>Commander:</strong> Lieutenant General James Rodriguez, USA (3-Star)<br>
              <strong>Higher HQ:</strong> USEUCOM (General Morrison, 4-Star)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 141500Z MAR 25 via SIPR from USEUCOM<br>
              <strong>AOR:</strong> Central and Eastern Europe<br>
              <strong>Primary Focus:</strong> Poland, Baltic States, Eastern Flank<br>
              <strong>Subordinate Corps:</strong> V Corps, XVIII Airborne Corps
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

        <!-- Card 1: Army Mission Receipt & Corps Warning Order -->
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
              Army Mission Receipt & Corps Warning Order
            </h4>

            <!-- Army Mission Receipt Timeline -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Army Mission Receipt & Operational Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>141500Z MAR 25:</strong> Theater Warning Order #1 received from USEUCOM</p>
                <p style="margin: 0 0 6px 0;"><strong>141515Z MAR 25:</strong> Army Commander (3-Star) briefed by Theater staff</p>
                <p style="margin: 0 0 6px 0;"><strong>141530Z MAR 25:</strong> Army staff huddle - G-2, G-3, G-4, G-5 coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>141600Z MAR 25:</strong> Corps commanders VTC - V Corps, XVIII Airborne Corps</p>
                <p style="margin: 0 0 6px 0;"><strong>141630Z MAR 25:</strong> Army Warning Order #1 to subordinate Corps</p>
                <p style="margin: 0 0 6px 0;"><strong>141700Z MAR 25:</strong> Coalition coordination - UK 1st Armoured, German 10th Panzer</p>
                <p style="margin: 0;"><strong>141800Z MAR 25:</strong> Army MDMP initiation - 48-hour operational planning cycle</p>
              </div>
            </div>

            <!-- Army Warning Order Content -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Army Warning Order #1 to Corps (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> V Corps, XVIII Airborne Corps, Supporting Elements</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Execute operational deterrence in Eastern Europe per Theater guidance</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Prepare multi-domain operations to defend NATO Eastern Flank</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> V Corps - Forward deployment; XVIII ABC - Strategic reserve</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> Coalition integration with UK, German, Polish forces</p>
                <p style="margin: 0;"><strong>ADMIN/LOG:</strong> Army sustainment coordination, host nation support</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Army Command Structure & Corps Relationships -->
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
              Army Command Structure & Corps Relationships
            </h4>

            <!-- Army Command Relationships -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Army Operational Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• USEUCOM (Theater) - Strategic guidance and resource allocation</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE CORPS:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• V Corps (Forward) - Poland, Baltic States, Eastern Europe</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• XVIII Airborne Corps (Reserve) - Strategic mobility, rapid response</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING ELEMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• 21st TSC (Sustainment), 7th ATC (Training), 56th ARCOM (Artillery)</p>
              </div>
            </div>

            <!-- Army Force Structure -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Army Force Structure (Operational Level)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> 85,000 (US Forces)<br>
                  <strong>Divisions:</strong> 4 (2 per Corps)<br>
                  <strong>Brigades:</strong> 16 (8 per Corps)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Aviation:</strong> 2 CABs, 1 GSAB<br>
                  <strong>Artillery:</strong> 2 FABs, 1 ADA Brigade<br>
                  <strong>Support:</strong> 1 TSC, 2 ESCs
                </div>
              </div>
            </div>

            <!-- Coalition Integration -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Coalition Army Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>UK Forces:</strong> 1st Armoured Division (OPCON to V Corps)<br>
                <strong>German Forces:</strong> 10th Panzer Division (OPCON to V Corps)<br>
                <strong>Polish Forces:</strong> 16th Mechanized Division (TACON coordination)<br>
                <strong>Framework:</strong> Multinational Corps integration under Army command
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3: Operational Planning Considerations -->
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
              Operational Planning Considerations
            </h4>

            <!-- Army Planning Horizons -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Army Operational Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-48 hours):</strong> Corps coordination, operational force protection</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (2-21 days):</strong> Operational deterrence, Corps deployment coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (3 weeks-3 months):</strong> Sustained operations, operational logistics</p>
                <p style="margin: 0;"><strong>Long-term (3-12 months):</strong> Operational objectives, Corps rotation planning</p>
              </div>
            </div>

            <!-- Critical Operational Factors -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Operational Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Operational:</strong> Corps synchronization, multi-domain coordination</li>
                <li><strong>Coalition:</strong> Multinational Corps integration, interoperability</li>
                <li><strong>Logistics:</strong> Army sustainment, Corps support coordination</li>
                <li><strong>Intelligence:</strong> Operational IPB, Corps intelligence fusion</li>
                <li><strong>Communications:</strong> Army networks, Corps interoperability</li>
              </ul>
            </div>

            <!-- Resource Allocation -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Army Operational Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Corps mobility, operational fires coordination<br>
                <strong>Priority 2:</strong> Army sustainment, coalition integration<br>
                <strong>Priority 3:</strong> Operational reserves, Corps reinforcement capability
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Army Staff Actions & Time Management -->
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
              Army Staff Actions & Time Management
            </h4>

            <!-- Army Staff Actions -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Army Staff Actions (First 3 Hours)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>G-2 (Intelligence):</strong> Operational threat assessment, Corps intelligence coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>G-3 (Operations):</strong> Corps mission analysis, operational COA framework</p>
                <p style="margin: 0 0 6px 0;"><strong>G-4 (Logistics):</strong> Army sustainment planning, Corps logistics coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>G-5 (Plans):</strong> Army MDMP timeline, Corps planning guidance</p>
                <p style="margin: 0;"><strong>G-6 (Communications):</strong> Army networks, Corps communications integration</p>
              </div>
            </div>

            <!-- Army MDMP Time Allocation -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Army MDMP Time Allocation (48-Hour Cycle)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 1:</strong> Receipt of Mission (3 hrs)<br>
                  <strong>Step 2:</strong> Mission Analysis (16 hrs)<br>
                  <strong>Step 3:</strong> COA Development (12 hrs)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 4:</strong> COA Analysis (8 hrs)<br>
                  <strong>Step 5:</strong> COA Comparison (5 hrs)<br>
                  <strong>Steps 6-7:</strong> Approval/Orders (4 hrs)
                </div>
              </div>
            </div>

            <!-- Army Coordination Requirements -->
            <div style="background-color: #581c87; padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Army Operational Coordination</h5>
              <p style="color: #e9d5ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Higher:</strong> USEUCOM Theater Command, Joint Staff coordination<br>
                <strong>Subordinate:</strong> V Corps, XVIII Airborne Corps, supporting elements<br>
                <strong>Adjacent:</strong> USAFE (Air), NAVEUR (Naval), coalition armies<br>
                <strong>Supporting:</strong> 21st TSC, 7th ATC, 56th ARCOM
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Army-Specific Operational Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-globe-americas" style="margin-right: 8px;"></i>
          Army-Level Operational Considerations
        </h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Corps Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>V Corps forward deployment</li>
              <li>XVIII ABC strategic reserve</li>
              <li>Corps boundary coordination</li>
              <li>Operational fires integration</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Coalition Integration</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Multinational Corps command</li>
              <li>UK/German division integration</li>
              <li>Polish host nation coordination</li>
              <li>NATO interoperability standards</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Operational Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Army sustainment command</li>
              <li>Corps logistics coordination</li>
              <li>Host nation support agreements</li>
              <li>Strategic mobility assets</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-key" style="margin-right: 8px;"></i>
          Army Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Operational Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Theater guidance implementation through Corps coordination</li>
              <li>Multi-Corps synchronization and operational integration</li>
              <li>Coalition army integration and multinational command</li>
              <li>Operational sustainment and logistics coordination</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Army Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Compressed operational planning cycle (48 hours vs. Theater 72 hours)</li>
              <li>Corps mission guidance and boundary coordination</li>
              <li>Operational resource allocation between Corps commands</li>
              <li>Coalition integration at the operational level</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getArmyReceiptExample;
