/**
 * MDMP Receipt of Mission - Company Level Practical Example
 * Tactical-Level Command - Multi-Platoon Coordination
 * Source: FM 3-21.10 (Infantry Company), FM 3-96 (BCT), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to tactical doctrinal content requirements
 * European Theater setting - Alpha Company (A/1-77 AR) under 1-77 AR, Warsaw East Sector
 */

export function getCompanyReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Company Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-user-shield" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Company Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical-Level Command - Multi-Platoon Coordination (Captain)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - Alpha Company (A/1-77) Tactical Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Company:</strong> Alpha Company, 1-77 AR (A/1-77) "Iron Knights"<br>
              <strong>Commander:</strong> Captain Rebecca Nguyen, USA<br>
              <strong>Higher HQ:</strong> 1-77 AR (LTC Pierce), 1st ABCT (COL Martinez)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 142640Z MAR 25 via SIPR from 1-77 AR<br>
              <strong>AOR:</strong> Warsaw East Sector (WE)<br>
              <strong>Primary Focus:</strong> Key intersections, choke points, urban strongpoints<br>
              <strong>Subordinate Platoons:</strong> 1st, 2nd, 3rd Platoons; HQ/Weapons Platoon
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Content Card Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

        <!-- Card 1: Company Mission Receipt & Platoon Warning Order -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-inbox" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Company Mission Receipt & Platoon Warning Order
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Company Mission Receipt & Platoon Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>142640Z MAR 25:</strong> 1-77 AR Warning Order #1 received via SIPR</p>
                <p style="margin: 0 0 6px 0;"><strong>142645Z MAR 25:</strong> Company Commander briefed by BN S-3</p>
                <p style="margin: 0 0 6px 0;"><strong>142655Z MAR 25:</strong> CO staff huddle - 1SG, XO, PSGs synchronization</p>
                <p style="margin: 0 0 6px 0;"><strong>142710Z MAR 25:</strong> Platoon leaders VTC - 1st, 2nd, 3rd, HQ/WPN</p>
                <p style="margin: 0 0 6px 0;"><strong>142735Z MAR 25:</strong> Company Warning Order #1 to subordinate Platoons</p>
                <p style="margin: 0 0 6px 0;"><strong>142750Z MAR 25:</strong> Polish municipal defense liaison integration</p>
                <p style="margin: 0;"><strong>142800Z MAR 25:</strong> CO MDMP initiation - 90-minute tactical planning cycle</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">A/1-77 Warning Order #1 to Platoons (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> 1st PLT, 2nd PLT, 3rd PLT, HQ/WPN</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Defend WE sector per 1-77 AR guidance</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Occupy key intersections and block mobility corridors</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> 1st - East; 2nd - North; 3rd - Center; HQ/WPN - Support</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> Municipal defense, police, emergency services</p>
                <p style="margin: 0;"><strong>ADMIN/LOG:</strong> LOGPAC windows, CASEVAC routes, resupply triggers</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Company Command Structure & Platoon Relationships -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-sitemap" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Company Command Structure & Platoon Relationships
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Company Tactical Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1-77 AR - Tactical guidance and sector allocation</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE PLATOONS:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 1st Platoon (1/A/1-77) - East Sub-Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 2nd Platoon (2/A/1-77) - North Sub-Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 3rd Platoon (3/A/1-77) - Center Sub-Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• HQ/Weapons Platoon - Fires/AT Support</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING ELEMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• 1SG, XO, FSO, Medic Team, Supply, Maintenance</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">A/1-77 Force Structure (Tactical Level)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> ~150 (Company)<br>
                  <strong>Platoons:</strong> 3 Maneuver + HQ/WPN<br>
                  <strong>Vehicles:</strong> 14 MBTs or IFVs (task organized)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Fires:</strong> Javelin/AT, 60mm mortars (if T/O&E)<br>
                  <strong>Comms:</strong> Primary/Alternate; Urban retrans points<br>
                  <strong>Support:</strong> LOGPAC, Maintenance, Medic
                </div>
              </div>
            </div>

            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Host Nation Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Warsaw Municipal:</strong> Sub-sector defense points<br>
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
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Company Tactical Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-90 min):</strong> Platoon coordination, key site occupation</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (90 min-24 hrs):</strong> Urban defense, mobility corridors</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (1-3 days):</strong> Relief in place, depth, reserve tasks</p>
                <p style="margin: 0;"><strong>Long-term (3-7 days):</strong> Sector defense endurance, rotation</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Tactical Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Tactical:</strong> Platoon synchronization, Squad task org</li>
                <li><strong>Urban Terrain:</strong> Sub-sector intersections, buildings, bridges</li>
                <li><strong>Host Nation:</strong> Municipal defense, emergency services</li>
                <li><strong>Logistics:</strong> LOGPAC windows, CASEVAC, maintenance</li>
                <li><strong>Intelligence:</strong> CO IPB, urban ISR from BN/BDE</li>
              </ul>
            </div>

            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Company Tactical Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Platoon mobility/counter-mobility<br>
                <strong>Priority 2:</strong> Ammo/fuel pushes and CASEVAC<br>
                <strong>Priority 3:</strong> Reserve positioning and rapid reinforcement
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Company Staff Actions & Time Management -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-clock" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Company Staff Actions & Time Management
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Company Staff Actions (First 30 Minutes)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>1SG:</strong> Personnel/accountability, LOGPAC prep</p>
                <p style="margin: 0 0 6px 0;"><strong>XO:</strong> Maintenance, resupply triggers, comms checks</p>
                <p style="margin: 0 0 6px 0;"><strong>FSO:</strong> Fires integration, priority TRPs</p>
                <p style="margin: 0 0 6px 0;"><strong>PSGs:</strong> Platoon transfer/refit, initial positioning</p>
                <p style="margin: 0;"><strong>RTO:</strong> Comms plan execution and confirmation</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Company MDMP Time Allocation (90-Minute Cycle)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 1:</strong> Receipt of Mission (30 min)<br>
                  <strong>Step 2:</strong> Mission Analysis (30 min)<br>
                  <strong>Step 3:</strong> COA Development (15 min)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 4:</strong> COA Analysis (10 min)<br>
                  <strong>Step 5:</strong> COA Comparison (5 min)<br>
                  <strong>Steps 6-7:</strong> Approval/Orders (10 min)
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Company-Specific Tactical Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-user-shield" style="margin-right: 8px;"></i>
          Company-Level Tactical Considerations
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Platoon Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>1st PLT - East sub-sector</li>
              <li>2nd PLT - North sub-sector</li>
              <li>3rd PLT - Center sub-sector</li>
              <li>HQ/WPN - Fires/AT support</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Urban Operations</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>Key buildings and intersections</li>
              <li>Checkpoints and access control</li>
              <li>Critical infrastructure protection</li>
              <li>Mobility corridor security</li>
            </ul>
          </div>
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Company Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>LOGPAC timings and control</li>
              <li>Maintenance and recovery</li>
              <li>CASEVAC routes and CCPs</li>
              <li>Ammo rearm and redistribution</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Key Takeaways -->
      <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
        <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-key" style="margin-right: 8px;"></i>
          Company Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Battalion guidance implementation through Platoon coordination</li>
              <li>Multi-Platoon synchronization and task organization</li>
              <li>Urban operations with civil authority integration</li>
              <li>Company sustainment and resupply control</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Company Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Compressed tactical planning cycle (90 minutes)</li>
              <li>Platoon sub-sector guidance and boundaries</li>
              <li>Reserve planning and mobility/counter-mobility</li>
              <li>LOGPAC windows, CASEVAC, and resupply triggers</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getCompanyReceiptExample;
