/**
 * OPORD Execution - Squadron Level Practical Example
 * Tactical-Level Command - Troop/Company Coordination
 * Source: FM 3-20.96 (Cavalry Squadron), ATP 3-20.96 (Cavalry Squadron)
 */

export function getSquadronExecutionExample() {
  return `
    <div style="padding:20px;">
      <!-- Squadron Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-horse-head" style="margin-right:12px; color:#10b981; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Squadron Level Execution Example</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Tactical-Level Command - Troop/Company Coordination</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color:#064e3b; border:1px solid #059669; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#a7f3d0; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-binoculars" style="margin-right:8px;"></i>
          Operation ALLIED RESOLVE - 1st Cavalry Squadron
        </h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div>
            <p style="color:#6ee7b7; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
              <strong>Squadron:</strong> 1st Cavalry Squadron (-)<br>
              <strong>AOR:</strong> Estonian Border Region, Reconnaissance Zone<br>
              <strong>Duration:</strong> 180-day campaign, reconnaissance operations<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color:#6ee7b7; font-size:12px; line-height:1.4; margin:0;">
              <strong>Forces:</strong> 3x Cavalry Troops, 1x Support Troop<br>
              <strong>Mission:</strong> Conduct reconnaissance and security operations<br>
              <strong>Guidance:</strong> Receives tactical guidance from Cavalry Regiment<br>
              <strong>Support:</strong> Regiment fires, aviation, logistics
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
          <h4 style="color:#fdba74; font-size:14px; font-weight:600; margin:0 0 8px 0;">Tactical Framework</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Squadron conducts reconnaissance and security operations in support of Regiment tactical objectives. 
            Receives tactical guidance from Regiment command and integrates troop operations with squadron enablers across three phases.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I: Reconnaissance</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Troop positioning and area reconnaissance</li>
                <li>Squadron surveillance operations</li>
                <li>Intelligence collection and reporting</li>
                <li>Tactical security measures</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II: Security Operations</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Troop synchronized security</li>
                <li>Squadron reserve commitment</li>
                <li>Direct fire support</li>
                <li>Tactical sustainment</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316;">
          <h4 style="color:#fdba74; font-size:13px; font-weight:600; margin:0 0 8px 0;">Squadron Resource Allocation to Troops</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Maneuver:</strong> Troop positioning per Regiment guidance, tactical mobility
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Fires:</strong> Squadron fires allocation to Troops, Regiment fires coordination
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Intelligence:</strong> Regiment ISR distribution to Troop commanders
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Logistics:</strong> Squadron sustainment allocation to Troop operations
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Communications:</strong> Squadron communications allocation to Troop sectors
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
          <h4 style="color:#86efac; font-size:14px; font-weight:600; margin:0 0 8px 0;">Troop Task Organization</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Squadron assigns tactical tasks to subordinate cavalry troops and support troop. 
            Main effort designation shifts by phase to maintain tactical momentum and achieve squadron objectives.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>A Troop:</strong> Execute Regiment reconnaissance guidance to identify enemy positions. 
                Command 3x Cavalry Platoons. Establish tactical observation posts per Regiment plan.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Squadron fires, engineer support, troop communications</div>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>B Troop:</strong> Execute Regiment security guidance along designated routes. 
                Command 3x Cavalry Platoons. Establish tactical security for Regiment follow-on forces.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Squadron reserve, medical, troop sustainment</div>
            </div>
          </div>

          <div style="background-color:rgba(22, 163, 74, 0.1); padding:12px; border-radius:6px; border:1px solid #16a34a;">
            <h4 style="color:#86efac; font-size:13px; font-weight:600; margin:0 0 8px 0;">Squadron Subordinate Tasks</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">C Troop</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct supporting reconnaissance operations. Prepare to exploit success or reinforce main effort.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Support Troop</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Provide logistics and maintenance support. Coordinate with Regiment support for resupply operations.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Squadron Headquarters</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct command and control operations. Coordinate tactical communications and intelligence fusion.
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
          <h4 style="color:#fde047; font-size:14px; font-weight:600; margin:0 0 8px 0;">Squadron-Level Coordination</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Tactical coordination measures ensure unity of effort across troops and squadron enablers. 
            Instructions synchronize reconnaissance and security operations and integrate with Regiment operations.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Tactical Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>H-Hour:</strong> 060500ZMAR25 (Squadron operations)</li>
                <li><strong>Squadron Boundaries:</strong> Left: RIDGE LINE, Right: VALLEY FLOOR</li>
                <li><strong>Phase Lines:</strong> GOLF (Initial), HOTEL (Intermediate), INDIA (Final)</li>
                <li><strong>Coordination Points:</strong> Troop boundaries, Regiment coordination</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Tactical ROE</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Reconnaissance ROE:</strong> Avoid decisive engagement, report and withdraw</li>
                <li><strong>Escalation:</strong> Squadron commander approval for engagement</li>
                <li><strong>Coordination:</strong> Adjacent troop coordination required</li>
                <li><strong>Stealth:</strong> Maintain concealment, avoid detection when possible</li>
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
          <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 8px 0;">Squadron Fire Support</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Squadron integrates organic and supporting fires to enable reconnaissance and security operations. 
            Fire support includes squadron weapons, Regiment fires, and direct fire coordination.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Information Operations</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>OPSEC:</strong> Communications security, movement discipline</li>
                <li><strong>Stealth:</strong> Noise and light discipline, camouflage</li>
                <li><strong>Reporting:</strong> Intelligence reporting procedures, contact reports</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Special Instructions</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Logistics:</strong> Fuel and ammunition conservation, resupply procedures</li>
                <li><strong>Medical:</strong> Squadron medic support, casualty evacuation</li>
                <li><strong>Communications:</strong> Radio procedures, backup communications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Doctrinal Reference -->
      <div style="background-color:#064e3b; border:1px solid #059669; border-radius:8px; padding:16px; margin-top:20px;">
        <h4 style="font-weight:600; color:#a7f3d0; font-size:14px; margin:0 0 8px 0; display:flex; align-items:center;">
          <i class="fas fa-book" style="margin-right:8px; color:#6ee7b7;"></i>
          Squadron Execution Doctrinal Foundation
        </h4>
        <p style="color:#6ee7b7; font-size:12px; line-height:1.5; margin:0;">
          <strong>Primary Sources:</strong> FM 3-20.96 (Cavalry Squadron), ATP 3-20.96 (Cavalry Squadron), 
          FM 5-0 (Operations Process), FM 3-0 (Operations).
          <br><br>
          <strong>Squadron-Specific References:</strong> ATP 3-20.97 (Cavalry Troop), FM 3-20.98 (Reconnaissance Platoon), 
          ATP 3-20.15 (Tank Platoon).
        </p>
      </div>
    </div>
  `;
}
