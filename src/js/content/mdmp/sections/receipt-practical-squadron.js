/**
 * MDMP Receipt of Mission - Squadron Level Practical Example
 * Tactical-Level Command - Multi-Troop Coordination (under Regiment)
 * Source: FM 3-20.96 (Cavalry Squadron), ATP 3-20.96 (Cavalry Squadron), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to tactical doctrinal content requirements
 * European Theater setting - 1st Squadron, 2nd Cavalry Regiment (1/2 CAV) under 2CR, Eastern Poland sector
 */

export function getSquadronReceiptExample() {
  return `
    <div style="padding: 20px;">
      <!-- Squadron Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-horse-head" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Squadron Level Receipt of Mission Example</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical-Level Command - Multi-Troop Coordination (Lieutenant Colonel)</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-flag" style="margin-right: 8px;"></i>
          Operation ALLIED RESOLVE - 1/2 CAV Squadron Tactical Receipt
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Squadron:</strong> 1st Squadron, 2nd Cavalry Regiment (1/2 CAV)<br>
              <strong>Commander:</strong> Lieutenant Colonel Olivia Grant, USA<br>
              <strong>Higher HQ:</strong> 2nd Cavalry Regiment (COL Harrison)<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Mission Receipt:</strong> 142230Z MAR 25 via SIPR from 2CR<br>
              <strong>AOR:</strong> Eastern Poland Reconnaissance Sector (EPRS)<br>
              <strong>Primary Focus:</strong> Reconnaissance and Security Framework<br>
              <strong>Subordinate Troops:</strong> A Troop, B Troop, C Troop, HHT (Headquarters Troop)
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Content Card Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

        <!-- Card 1: Squadron Mission Receipt & Troop Warning Order -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-inbox" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Squadron Mission Receipt & Troop Warning Order
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Squadron Mission Receipt & Troop Coordination</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>142230Z MAR 25:</strong> 2CR Warning Order #1 received via SIPR</p>
                <p style="margin: 0 0 6px 0;"><strong>142245Z MAR 25:</strong> Squadron Commander briefed by Regt S-3</p>
                <p style="margin: 0 0 6px 0;"><strong>142300Z MAR 25:</strong> SQDN staff huddle - S-2, S-3, S-4, S-6 synchronization</p>
                <p style="margin: 0 0 6px 0;"><strong>142320Z MAR 25:</strong> Troop commanders VTC - A, B, C; HHT</p>
                <p style="margin: 0 0 6px 0;"><strong>142340Z MAR 25:</strong> Squadron Warning Order #1 to subordinate Troops</p>
                <p style="margin: 0 0 6px 0;"><strong>142400Z MAR 25:</strong> Polish Border Guard coordination - northern sector</p>
                <p style="margin: 0;"><strong>142415Z MAR 25:</strong> Squadron MDMP initiation - 3-hour reconnaissance planning cycle</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1/2 CAV Warning Order #1 to Troops (Extract)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>TO:</strong> A, B, C Troops; HHT</p>
                <p style="margin: 0 0 6px 0;"><strong>SITUATION:</strong> Execute screen and reconnaissance per 2CR guidance</p>
                <p style="margin: 0 0 6px 0;"><strong>MISSION:</strong> Conduct zone/recon to build the R&S picture</p>
                <p style="margin: 0 0 6px 0;"><strong>EXECUTION:</strong> A - North; B - Center; C - South; HHT - Support</p>
                <p style="margin: 0 0 6px 0;"><strong>COORDINATION:</strong> Polish Border Guard; local authorities</p>
                <p style="margin: 0;"><strong>ADMIN/LOG:</strong> Squadron sustainment; Troop LOGPAC/maintenance</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Squadron Command Structure & Troop Relationships -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-sitemap" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Squadron Command Structure & Troop Relationships
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Squadron Tactical Command Relationships</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 4px 0;"><strong>HIGHER HQ:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• 2nd Cavalry Regiment - Recon tasking and resource allocation</p>
                <p style="margin: 0 0 4px 0;"><strong>SUBORDINATE TROOPS:</strong></p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• A Troop "Alpha" - Northern Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• B Troop "Bravo" - Central Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• C Troop "Charlie" - Southern Sector</p>
                <p style="margin: 0 0 6px 0; padding-left: 12px;">• HHT - Headquarters and Support</p>
                <p style="margin: 0 0 4px 0;"><strong>SUPPORTING ELEMENTS:</strong></p>
                <p style="margin: 0; padding-left: 12px;">• Regimental enablers as attached (ENG, SIG, MED)</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">1/2 CAV Force Structure (Reconnaissance)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Personnel:</strong> ~900 (Squadron)<br>
                  <strong>Troops:</strong> 4 (3 Recon, 1 HHT)<br>
                  <strong>Platoons:</strong> Troop-level subordinate units (not separate file)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Strykers:</strong> 100+ Recon/Weapons variants<br>
                  <strong>UAS:</strong> Small UAS for R&S support<br>
                  <strong>Fires:</strong> Mortars/FA in direct support (as attached)
                </div>
              </div>
            </div>

            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Border Operations Integration</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Polish Border Guard:</strong> Joint reconnaissance coordination<br>
                <strong>Local Authorities:</strong> Municipal/regional coordination<br>
                <strong>NATO Partners:</strong> Information sharing protocols
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3: Reconnaissance Planning Considerations -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-chess" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Reconnaissance Planning Considerations
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Squadron Reconnaissance Planning Horizons</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Immediate (0-3 hours):</strong> Troop coordination, recon deployment</p>
                <p style="margin: 0 0 6px 0;"><strong>Short-term (3 hours-48 hours):</strong> Screen ops, Troop positioning</p>
                <p style="margin: 0 0 6px 0;"><strong>Medium-term (2-7 days):</strong> Sustained recon, border security</p>
                <p style="margin: 0;"><strong>Long-term (1-2 weeks):</strong> Recon objectives, Troop rotation</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Critical Reconnaissance Factors</h5>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li><strong>Tactical:</strong> Troop synchronization, Platoon coordination</li>
                <li><strong>Border Terrain:</strong> Frontier crossing points, choke points</li>
                <li><strong>Host Nation:</strong> Polish Border Guard coordination, local liaison</li>
                <li><strong>Logistics:</strong> Squadron sustainment, Troop support coordination</li>
                <li><strong>Intelligence:</strong> RSTA operations, Troop intelligence fusion</li>
              </ul>
            </div>

            <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Squadron Reconnaissance Resource Priorities</h5>
              <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Priority 1:</strong> Troop mobility and recon assets
                <br><strong>Priority 2:</strong> Squadron sustainment and border ops support
                <br><strong>Priority 3:</strong> RSTA capabilities and Troop reinforcement
              </p>
            </div>
          </div>
        </div>

        <!-- Card 4: Squadron Actions & Time Management -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 400px;">
          <div style="flex-grow: 1;">
            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
              <i class="fas fa-clock" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
              Squadron Actions & Time Management
            </h4>

            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Squadron Staff Actions (First 45 Minutes)</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>S-2 (Intelligence):</strong> Recon threat assessment, Troop intelligence coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>S-3 (Operations):</strong> Troop mission analysis, recon COA framework</p>
                <p style="margin: 0 0 6px 0;"><strong>S-4 (Logistics):</strong> Squadron sustainment planning, Troop logistics coordination</p>
                <p style="margin: 0 0 6px 0;"><strong>S-5 (Plans):</strong> Squadron MDMP timeline, Troop planning guidance</p>
                <p style="margin: 0;"><strong>S-6 (Communications):</strong> Squadron nets, Troop communications integration</p>
              </div>
            </div>

            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Squadron MDMP Time Allocation (3-Hour Cycle)</h5>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 1:</strong> Receipt of Mission (45 min)<br>
                  <strong>Step 2:</strong> Mission Analysis (60 min)<br>
                  <strong>Step 3:</strong> COA Development (30 min)
                </div>
                <div style="color: #d1d5db; font-size: 12px;">
                  <strong>Step 4:</strong> COA Analysis (20 min)<br>
                  <strong>Step 5:</strong> COA Comparison (10 min)<br>
                  <strong>Steps 6-7:</strong> Approval/Orders (15 min)
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Squadron-Specific Reconnaissance Considerations -->
      <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-horse-head" style="margin-right: 8px;"></i>
          Squadron-Level Reconnaissance Considerations
        </h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;">
          <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Troop Coordination</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>A Troop - North sector</li>
              <li>B Troop - Center sector</li>
              <li>C Troop - South sector</li>
              <li>HHT - HQ/Support</li>
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
            <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Squadron Sustainment</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
              <li>HHT sustainment/maintenance</li>
              <li>Troop logistics support</li>
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
          Squadron Receipt of Mission - Key Takeaways
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Reconnaissance Command Imperatives</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Regimental guidance implementation through Troop coordination</li>
              <li>Multi-Troop synchronization and reconnaissance integration</li>
              <li>Border operations coordination with host nation authorities</li>
              <li>Squadron sustainment and Troop logistics support</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron Planning Priorities</h4>
            <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
              <li>Reconnaissance planning cycle (3 hours, aligns under Regiment)</li>
              <li>Troop sector guidance and boundaries</li>
              <li>Recon asset allocation across Troops</li>
              <li>Border terrain considerations and liaison</li>
            </ul>
          </div>
        </div>
      </div>

    </div>`;
}

export default getSquadronReceiptExample;
