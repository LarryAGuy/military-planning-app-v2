/**
 * MDMP Receipt of Mission - Group Level Practical Example
 * Tactical-Level Command - Multi-Battalion Specialized Unit Coordination
 * Source: FM 3-04 (Army Aviation), ATP 3-04.1 (Aviation Tactical Employment), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive Group-level doctrinal content requirements
 * European Theater setting - 12th Combat Aviation Brigade under 1st Armored Division command, Warsaw Air Support
 */

export function getGroupReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Group Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-helicopter" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Group Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical-Level Command - Multi-Battalion Specialized Coordination (Colonel/LTC)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - 12th CAB Group Tactical Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Group:</strong> 12th Combat Aviation Brigade "Thunder Hawks"<br>
              <strong>Commander:</strong> Colonel Maria Santos, USA<br>
              <strong>Higher HQ:</strong> 1st Armored Division (MG Thompson, 2-Star)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 142400Z MAR 25 via SIPR from 1st AD<br>
              <strong>AOR:</strong> Warsaw Metropolitan Airspace<br>
              <strong>Primary Focus:</strong> Aviation Support to Ground Operations<br>
              <strong>Subordinate Battalions:</strong> 1-227 ARB, 2-227 ARB, 1-158 ARB, 227 ASB
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

        <!-- Card 1: Group Mission Receipt & Battalion Warning Order -->
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
              Group Mission Receipt & Battalion Warning Order
            </h4>

            <!-- Group Mission Receipt Timeline -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Mission Receipt & Battalion Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>142400Z MAR 25:</strong> 1st AD Warning Order #1 received via SIPR</p>
                <p style="margin: 0 0 6px 0;"><strong>142415Z MAR 25:</strong> Group Commander briefed by Division G-3 Air</p>
                <p style="margin: 0 0 6px 0;"><strong>142430Z MAR 25:</strong> Group staff huddle - S-2, S-3, S-4, S-5 synchronization</p>
                <p style="margin: 0 0 6px 0;"><strong>142500Z MAR 25:</strong> Battalion commanders VTC - 1-227, 2-227, 1-158 ARB</p>
                <p style="margin: 0 0 6px 0;"><strong>142530Z MAR 25:</strong> Group Warning Order #1 to subordinate Battalions</p>
                <p style="margin: 0 0 6px 0;"><strong>142600Z MAR 25:</strong> Polish coordination - Warsaw Air Traffic Control</p>
                <p style="margin: 0;"><strong>142700Z MAR 25:</strong> Group MDMP initiation - 4-hour aviation planning cycle</p>
              </div>
            </div>

            <!-- Group Warning Order Content -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">12th CAB Warning Order #1 to Battalions (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> 1-227 ARB, 2-227 ARB, 1-158 ARB, 227 ASB</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Provide aviation support to Warsaw defense per 1st AD guidance</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Conduct aviation operations supporting ground forces in Warsaw</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> 1-227 - Attack; 2-227 - Assault; 1-158 - Reconnaissance; 227 - Support</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> Warsaw ATC, Polish Air Force coordination</p>
                <p style="margin: 0;"><strong>ADMIN/LOG:</strong> Group sustainment, Battalion aviation logistics</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Group Command Structure & Battalion Relationships -->
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
              Group Command Structure & Battalion Relationships
            </h4>

            <!-- Group Command Relationships -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Aviation Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1st Armored Division - Aviation support tasking and coordination</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE BATTALIONS:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1-227 ARB "Thunder" - Attack Aviation Battalion</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 2-227 ARB "Lightning" - General Support Aviation Battalion</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1-158 ARB "Big Windy" - Assault Helicopter Battalion</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 227 ASB "Maintainers" - Aviation Support Battalion</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING ELEMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• HHC, AVIM, Signal Company, Medical Company</p>
              </div>
            </div>

            <!-- Group Force Structure -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">12th CAB Force Structure (Aviation)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> 2,800 (Group)<br>
                  <strong>Battalions:</strong> 4 (3 Aviation, 1 Support)<br>
                  <strong>Companies:</strong> 12 (9 Aviation, 3 Support)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Aircraft:</strong> 96 Total (Mixed Fleet)<br>
                  <strong>AH-64:</strong> 24 Apache Attack<br>
                  <strong>UH-60:</strong> 48 Black Hawk Utility
                </div>
              </div>
            </div>

            <!-- Aviation Integration -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Aviation Operations Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Warsaw ATC:</strong> Airspace coordination and deconfliction<br>
                <strong>Polish Air Force:</strong> Joint airspace management<br>
                <strong>Ground Forces:</strong> Close air support coordination<br>
                <strong>Framework:</strong> Integrated aviation support to ground operations
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3: Aviation Planning Considerations -->
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
              Aviation Planning Considerations
            </h4>

            <!-- Group Planning Horizons -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Aviation Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-4 hours):</strong> Battalion coordination, aircraft readiness</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (4 hours-2 days):</strong> Aviation operations, Battalion deployment</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (2 days-1 week):</strong> Sustained aviation support, maintenance cycles</p>
                <p style="margin: 0;"><strong>Long-term (1 week-2 weeks):</strong> Aviation objectives, Battalion rotation</p>
              </div>
            </div>

            <!-- Critical Aviation Factors -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Aviation Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Aviation:</strong> Battalion synchronization, Company coordination</li>
                <li><strong>Airspace:</strong> Warsaw metropolitan airspace, civilian traffic</li>
                <li><strong>Host Nation:</strong> Polish ATC coordination, airspace deconfliction</li>
                <li><strong>Logistics:</strong> Group sustainment, Battalion aviation maintenance</li>
                <li><strong>Intelligence:</strong> Aviation IPB, Battalion intelligence fusion</li>
              </ul>
            </div>

            <!-- Resource Allocation -->
            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Group Aviation Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Aircraft readiness, aviation maintenance<br>
                <strong>Priority 2:</strong> Group sustainment, aviation operations support<br>
                <strong>Priority 3:</strong> Aviation reserves, Battalion reinforcement capability
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Group Staff Actions & Time Management -->
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
              Group Staff Actions & Time Management
            </h4>

            <!-- Group Staff Actions -->
            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Staff Actions (First 30 Minutes)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>S-2 (Intelligence):</strong> Aviation threat assessment, Battalion intelligence coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>S-3 (Operations):</strong> Battalion mission analysis, aviation COA framework</p>
                <p style="margin: 0 0 6px 0;"><strong>S-4 (Logistics):</strong> Group sustainment planning, Battalion aviation logistics</p>
                <p style="margin: 0 0 6px 0;"><strong>S-5 (Plans):</strong> Group MDMP timeline, Battalion planning guidance</p>
                <p style="margin: 0;"><strong>S-6 (Communications):</strong> Group networks, Battalion communications integration</p>
              </div>
            </div>

            <!-- Group MDMP Time Allocation -->
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group MDMP Time Allocation (4-Hour Cycle)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 1:</strong> Receipt of Mission (30 min)<br>
                  <strong>Step 2:</strong> Mission Analysis (90 min)<br>
                  <strong>Step 3:</strong> COA Development (60 min)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 4:</strong> COA Analysis (45 min)<br>
                  <strong>Step 5:</strong> COA Comparison (30 min)<br>
                  <strong>Steps 6-7:</strong> Approval/Orders (45 min)
                </div>
              </div>
            </div>

            <!-- Group Coordination Requirements -->
            <div style="background-color: #581c87; padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Group Aviation Coordination</h5>
              <p style="color: #e9d5ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Higher:</strong> 1st Armored Division tactical command<br>
                <strong>Subordinate:</strong> 1-227 ARB, 2-227 ARB, 1-158 ARB, 227 ASB<br>
                <strong>Adjacent:</strong> 1st ABCT, 2nd ABCT, 3rd SBCT, Polish Air Force<br>
                <strong>Supporting:</strong> HHC, AVIM, Signal Company, Medical Company
              </p>
            </div>
          </div>
        </div>

      </div>

      <!-- Group-Specific Aviation Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-helicopter" style="margin-right: 8px;"></i>
          Group-Level Aviation Considerations
        </h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Battalion Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>1-227 ARB attack aviation</li>
              <li>2-227 ARB general support</li>
              <li>1-158 ARB assault helicopter</li>
              <li>227 ASB aviation support</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Aviation Operations</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Warsaw airspace management</li>
              <li>Close air support coordination</li>
              <li>Aviation maintenance cycles</li>
              <li>Aircraft readiness management</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Group Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Aviation support battalion</li>
              <li>Battalion aviation logistics</li>
              <li>Aircraft maintenance coordination</li>
              <li>Aviation fuel and parts supply</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-key" style="margin-right: 8px;"></i>
          Group Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Aviation Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Division guidance implementation through Battalion coordination</li>
              <li>Multi-Battalion aviation synchronization and integration</li>
              <li>Aviation operations coordination with ground forces</li>
              <li>Group sustainment and Battalion aviation logistics support</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Group Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Compressed aviation planning cycle (4 hours for rapid response)</li>
              <li>Battalion mission guidance and aviation sector coordination</li>
              <li>Aviation resource allocation between Battalion commands</li>
              <li>Airspace considerations and civilian aviation coordination</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getGroupReceiptExample;
