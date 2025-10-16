/**
 * OPORD Execution - Regiment Level Practical Example
 * Operational-Level Command - Battalion Coordination
 * Source: FM 3-90 (Offense and Defense), ATP 3-90.5 (Combined Arms Battalion)
 */

export function getRegimentExecutionExample() {
  return `
    <div style="padding:20px;">
      <!-- Regiment Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-flag" style="margin-right:12px; color:#3b82f6; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Regiment Level Execution Example</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Operational-Level Command - Battalion Coordination</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#dbeafe; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-shield-alt" style="margin-right:8px;"></i>
          Operation ALLIED RESOLVE - 2nd Armored Regiment
        </h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div>
            <p style="color:#bfdbfe; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
              <strong>Regiment:</strong> 2nd Armored Regiment (-)<br>
              <strong>AOR:</strong> Tallinn Defense Sector, Northern Estonia<br>
              <strong>Duration:</strong> 180-day campaign, operational phases<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color:#bfdbfe; font-size:12px; line-height:1.4; margin:0;">
              <strong>Forces:</strong> 3x Combined Arms Battalions, 1x Artillery Battalion<br>
              <strong>Mission:</strong> Conduct operational maneuver, defeat enemy regiment<br>
              <strong>Guidance:</strong> Receives operational guidance from 1st Armored Division<br>
              <strong>Support:</strong> Division fires, aviation, logistics
            </p>
          </div>
        </div>
      </div>

      <!-- Concept of Operations -->
      <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px;">
        <h3 style="color:#f97316; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-play" style="margin-right:8px;"></i>
          1. Concept of Operations
        </h3>
        
        <div style="margin-bottom:16px;">
          <h4 style="color:#fdba74; font-size:14px; font-weight:600; margin:0 0 8px 0;">Operational Framework</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Regiment conducts operational maneuver in support of Division tactical objectives to defeat enemy regiment. 
            Receives operational guidance from Division command and integrates battalion maneuver with regimental enablers across three phases.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I: Operational Preparation</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Battalion positioning and reconnaissance</li>
                <li>Regimental fires preparation</li>
                <li>Engineer obstacle reduction</li>
                <li>Operational deception</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II: Operational Maneuver</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Battalion synchronized attacks</li>
                <li>Regimental reserve commitment</li>
                <li>Deep strike operations</li>
                <li>Operational sustainment</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316;">
          <h4 style="color:#fdba74; font-size:13px; font-weight:600; margin:0 0 8px 0;">Regiment Resource Allocation to Battalions</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Maneuver:</strong> Battalion positioning per Division guidance, operational mobility
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Fires:</strong> Regimental fires allocation to Battalions, Division fires coordination
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Intelligence:</strong> Division ISR distribution to Battalion commands
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Logistics:</strong> Regimental sustainment allocation to Battalion operations
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Protection:</strong> Regimental protection assets allocation to Battalion sectors
            </div>
          </div>
        </div>
      </div>

      <!-- Tasks to Subordinate Units -->
      <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px;">
        <h3 style="color:#16a34a; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-tasks" style="margin-right:8px;"></i>
          2. Tasks to Subordinate Units
        </h3>
        
        <div style="margin-bottom:16px;">
          <h4 style="color:#86efac; font-size:14px; font-weight:600; margin:0 0 8px 0;">Battalion Task Organization</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Regiment assigns operational tasks to subordinate combined arms battalions and regimental enablers. 
            Main effort designation shifts by phase to maintain operational momentum and achieve regimental objectives.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>1st Combined Arms Battalion:</strong> Execute Division reconnaissance guidance to identify enemy positions. 
                Command 3x Combined Arms Companies. Establish operational overwatch positions per Division plan.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Regimental fires, engineer support, battalion ISR</div>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>2nd Combined Arms Battalion:</strong> Execute Division assault guidance through identified gaps. 
                Command 3x Combined Arms Companies. Establish operational bridgehead for Division follow-on forces.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Regimental reserve, aviation, battalion sustainment</div>
            </div>
          </div>

          <div style="background-color:rgba(22, 163, 74, 0.1); padding:12px; border-radius:6px; border:1px solid #16a34a;">
            <h4 style="color:#86efac; font-size:13px; font-weight:600; margin:0 0 8px 0;">Regimental Subordinate Tasks</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">3rd Combined Arms Battalion</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct supporting operations to fix enemy forces. Prepare to exploit success or reinforce main effort.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Regimental Artillery</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Provide operational fires in support of battalion operations. Coordinate with Division fires for deep targets.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Regimental Engineers</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct mobility operations and obstacle reduction. Support battalion breach operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coordinating Instructions -->
      <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px;">
        <h3 style="color:#eab308; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-cogs" style="margin-right:8px;"></i>
          3. Coordinating Instructions
        </h3>
        
        <div style="margin-bottom:16px;">
          <h4 style="color:#fde047; font-size:14px; font-weight:600; margin:0 0 8px 0;">Regiment-Level Coordination</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Operational coordination measures ensure unity of effort across battalions and regimental enablers. 
            Instructions synchronize operational actions and integrate with Division operations.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Operational Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>H-Hour:</strong> 051200ZMAR25 (Regiment attack)</li>
                <li><strong>Regiment Boundaries:</strong> Left: RIVER CHARLIE, Right: HIGHWAY 9</li>
                <li><strong>Phase Lines:</strong> ORANGE (LD), PURPLE (Intermediate), BROWN (Objective)</li>
                <li><strong>Coordination Points:</strong> Battalion boundaries, Division coordination</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Operational ROE</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Operational ROE:</strong> Engage all enemy operational forces</li>
                <li><strong>Escalation:</strong> Regiment commander approval for sensitive targets</li>
                <li><strong>Coordination:</strong> Adjacent battalion coordination required</li>
                <li><strong>Civilian:</strong> Minimize collateral damage, establish safe corridors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Fires and Special Instructions -->
      <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px;">
        <h3 style="color:#dc2626; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-crosshairs" style="margin-right:8px;"></i>
          4. Fires & Special Instructions
        </h3>
        
        <div style="margin-bottom:16px;">
          <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 8px 0;">Regiment Fire Support</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Regiment integrates organic and supporting fires to enable operational maneuver. 
            Fire support includes regimental artillery, Division fires, and close air support coordination.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Information Operations</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>OPSEC:</strong> Communications security, movement discipline</li>
                <li><strong>Deception:</strong> Feint operations, electronic warfare</li>
                <li><strong>PSYOP:</strong> Surrender appeals, civilian messaging</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Special Instructions</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Logistics:</strong> Forward arming and refueling points</li>
                <li><strong>Medical:</strong> Regimental medical support, casualty evacuation</li>
                <li><strong>Engineers:</strong> Mobility/counter-mobility operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Doctrinal Reference -->
      <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
        <h4 style="font-weight:600; color:#dbeafe; font-size:14px; margin:0 0 8px 0; display:flex; align-items:center;">
          <i class="fas fa-book" style="margin-right:8px; color:#60a5fa;"></i>
          Regiment Execution Doctrinal Foundation
        </h4>
        <p style="color:#bfdbfe; font-size:12px; line-height:1.5; margin:0;">
          <strong>Primary Sources:</strong> FM 3-90 (Offense and Defense), ATP 3-90.5 (Combined Arms Battalion), 
          FM 5-0 (Operations Process), FM 3-0 (Operations).
          <br><br>
          <strong>Regiment-Specific References:</strong> ATP 3-90.15 (Site Exploitation), FM 3-96 (Brigade Combat Team), 
          ATP 3-09.23 (Field Artillery Cannon Battalion).
        </p>
      </div>
    </div>
  `;
}
