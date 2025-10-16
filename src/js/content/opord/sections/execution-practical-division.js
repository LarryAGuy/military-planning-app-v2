/**
 * OPORD Execution - Division Level Practical Example
 * Tactical-Operational Interface - Brigade Coordination
 * Source: FM 3-90-1 (Offense and Defense Volume 1), ATP 3-91 (Division Operations)
 */

export function getDivisionExecutionExample() {
  return `
    <div style="padding:20px;">
      <!-- Division Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-chess-rook" style="margin-right:12px; color:#a855f7; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Division Level Execution Example</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Tactical-Operational Interface - Brigade Coordination</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#c4b5fd; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-shield-alt" style="margin-right:8px;"></i>
          Operation ALLIED RESOLVE - 1st Armored Division
        </h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div>
            <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
              <strong>Division:</strong> 1st Armored Division (1AD) (-)<br>
              <strong>AOR:</strong> Estonian Sector, Tallinn-Tartu corridor<br>
              <strong>Duration:</strong> 180-day campaign, tactical phases<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0;">
              <strong>Forces:</strong> 3x Armored BCTs, 1x Artillery Brigade<br>
              <strong>Mission:</strong> Penetrate enemy defenses, exploit success<br>
              <strong>Domains:</strong> Land, Air, Cyber, Information<br>
              <strong>Support:</strong> Corps fires, aviation, logistics
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
          <h4 style="color:#fdba74; font-size:14px; font-weight:600; margin:0 0 8px 0;">Division Framework</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Division conducts combined arms operations in support of XVIII Airborne Corps operational objectives.
            Receives tactical guidance from Corps command and integrates brigade combat teams with division enablers across three phases.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I: Preparation & Shaping</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Brigade positioning and reconnaissance</li>
                <li>Division fires preparation</li>
                <li>Engineer obstacle reduction</li>
                <li>Information operations initiation</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II: Breach & Assault</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Combined arms breach operations</li>
                <li>Brigade assault through gaps</li>
                <li>Division reserve commitment</li>
                <li>Sustainment operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316;">
          <h4 style="color:#fdba74; font-size:13px; font-weight:600; margin:0 0 8px 0;">Division Resource Allocation to Brigades</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Maneuver:</strong> Brigade positioning per Corps guidance, combined arms integration
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Fires:</strong> Division fires allocation to Brigades, Corps fires coordination
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Intelligence:</strong> Corps ISR distribution to Brigade commands
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Logistics:</strong> Division sustainment allocation to Brigade operations
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Protection:</strong> Division protection assets allocation to Brigade sectors
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
          <h4 style="color:#86efac; font-size:14px; font-weight:600; margin:0 0 8px 0;">Brigade Task Organization</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Division assigns tactical tasks to subordinate brigade combat teams and enabling units. 
            Main effort designation shifts by phase to maintain momentum and achieve division objectives.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>2nd ABCT:</strong> Execute Corps reconnaissance guidance to identify enemy weak points.
                Command 3x Combined Arms Battalions. Establish support by fire positions per Corps plan.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Division fires, engineer support, brigade ISR</div>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>1st ABCT:</strong> Execute Corps breach guidance through identified gap.
                Command 3x Combined Arms Battalions. Establish bridgehead for Corps follow-on forces.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Division reserve, aviation, brigade sustainment</div>
            </div>
          </div>

          <div style="background-color:rgba(22, 163, 74, 0.1); padding:12px; border-radius:6px; border:1px solid #16a34a;">
            <h4 style="color:#86efac; font-size:13px; font-weight:600; margin:0 0 8px 0;">Brigade Tasks</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">3rd ABCT</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct supporting attack to fix enemy forces. Prepare to exploit success or reinforce main effort.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Division Artillery</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Provide fires in support of breach operations. Coordinate with corps fires for deep targets.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Division Engineers</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct obstacle reduction and mobility operations. Establish and maintain supply routes.
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
          <h4 style="color:#fde047; font-size:14px; font-weight:600; margin:0 0 8px 0;">Division-Level Coordination</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Coordination measures ensure unity of effort across brigade combat teams and division enablers. 
            Instructions synchronize tactical actions and integrate with corps operations.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>H-Hour:</strong> 050600ZMAR25 (Division attack)</li>
                <li><strong>Division Boundaries:</strong> Left: RIVER ALPHA, Right: HIGHWAY 7</li>
                <li><strong>Phase Lines:</strong> RED (LD), WHITE (Intermediate), BLUE (Objective)</li>
                <li><strong>Checkpoints:</strong> Brigade coordination points every 5km</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Rules of Engagement</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Tactical ROE:</strong> Engage all identified enemy forces</li>
                <li><strong>Escalation:</strong> Division commander approval for urban areas</li>
                <li><strong>Coordination:</strong> Adjacent unit coordination required</li>
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
          <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 8px 0;">Division Fire Support</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Division integrates organic and supporting fires to enable maneuver operations. 
            Fire support includes division artillery, corps fires, and close air support coordination.
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
                <li><strong>Medical:</strong> Division medical support, casualty evacuation</li>
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
          Division Execution Doctrinal Foundation
        </h4>
        <p style="color:#bfdbfe; font-size:12px; line-height:1.5; margin:0;">
          <strong>Primary Sources:</strong> FM 3-90-1 (Offense and Defense Volume 1), ATP 3-91 (Division Operations), 
          FM 5-0 (Operations Process), FM 3-0 (Operations).
          <br><br>
          <strong>Division-Specific References:</strong> ATP 3-90.5 (Combined Arms Battalion), ATP 3-90.15 (Site Exploitation), 
          FM 3-96 (Brigade Combat Team).
        </p>
      </div>
    </div>
  `;
}
