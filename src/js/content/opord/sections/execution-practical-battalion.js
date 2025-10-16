/**
 * OPORD Execution - Battalion Level Practical Example
 * Tactical-Level Command - Company Coordination
 * Source: ATP 3-21.20 (Infantry Battalion), FM 3-96 (Brigade Combat Team)
 */

export function getBattalionExecutionExample() {
  return `
    <div style="padding:20px;">
      <!-- Battalion Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-users-cog" style="margin-right:12px; color:#10b981; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Battalion Level Execution Example</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Tactical-Level Command - Company Coordination</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color:#064e3b; border:1px solid #059669; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#a7f3d0; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-shield-alt" style="margin-right:8px;"></i>
          Operation ALLIED RESOLVE - 1st Infantry Battalion
        </h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div>
            <p style="color:#6ee7b7; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
              <strong>Battalion:</strong> 1st Infantry Battalion (-)<br>
              <strong>AOR:</strong> Tallinn North Sector, Urban Defense<br>
              <strong>Duration:</strong> 180-day campaign, tactical operations<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color:#6ee7b7; font-size:12px; line-height:1.4; margin:0;">
              <strong>Forces:</strong> 3x Rifle Companies, 1x Weapons Company<br>
              <strong>Mission:</strong> Conduct tactical operations, defeat enemy battalion<br>
              <strong>Guidance:</strong> Receives tactical guidance from 3rd Brigade Combat Team<br>
              <strong>Support:</strong> Brigade fires, aviation, logistics
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
            Battalion conducts tactical operations in support of Brigade tactical objectives to defeat enemy battalion. 
            Receives tactical guidance from Brigade command and integrates company maneuver with battalion enablers across three phases.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I: Tactical Preparation</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Company positioning and reconnaissance</li>
                <li>Battalion fires preparation</li>
                <li>Obstacle reduction and breaching</li>
                <li>Tactical deception and security</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II: Tactical Operations</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Company synchronized operations</li>
                <li>Battalion reserve commitment</li>
                <li>Direct fire support</li>
                <li>Tactical sustainment</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316;">
          <h4 style="color:#fdba74; font-size:13px; font-weight:600; margin:0 0 8px 0;">Battalion Resource Allocation to Companies</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Maneuver:</strong> Company positioning per Brigade guidance, tactical mobility
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Fires:</strong> Battalion fires allocation to Companies, Brigade fires coordination
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Intelligence:</strong> Brigade ISR distribution to Company commanders
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Logistics:</strong> Battalion sustainment allocation to Company operations
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Communications:</strong> Battalion communications allocation to Company sectors
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
          <h4 style="color:#86efac; font-size:14px; font-weight:600; margin:0 0 8px 0;">Company Task Organization</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Battalion assigns tactical tasks to subordinate rifle companies and weapons company. 
            Main effort designation shifts by phase to maintain tactical momentum and achieve battalion objectives.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>Alpha Company:</strong> Execute Brigade reconnaissance guidance to identify enemy positions. 
                Command 3x Rifle Platoons. Establish tactical overwatch positions per Brigade plan.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Battalion fires, engineer support, company communications</div>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>Bravo Company:</strong> Execute Brigade assault guidance through identified routes. 
                Command 3x Rifle Platoons. Establish tactical foothold for Brigade follow-on forces.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Battalion reserve, medical, company sustainment</div>
            </div>
          </div>

          <div style="background-color:rgba(22, 163, 74, 0.1); padding:12px; border-radius:6px; border:1px solid #16a34a;">
            <h4 style="color:#86efac; font-size:13px; font-weight:600; margin:0 0 8px 0;">Battalion Subordinate Tasks</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Charlie Company</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct supporting operations to fix enemy forces. Prepare to exploit success or reinforce main effort.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Weapons Company</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Provide direct fires in support of company operations. Coordinate with Brigade fires for suppression.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Battalion Headquarters</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct command and control operations. Coordinate tactical communications and medical support.
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
          <h4 style="color:#fde047; font-size:14px; font-weight:600; margin:0 0 8px 0;">Battalion-Level Coordination</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Tactical coordination measures ensure unity of effort across companies and battalion enablers. 
            Instructions synchronize tactical actions and integrate with Brigade operations.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Tactical Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>H-Hour:</strong> 060530ZMAR25 (Battalion attack)</li>
                <li><strong>Battalion Boundaries:</strong> Left: HIGHWAY 15, Right: RIVER DELTA</li>
                <li><strong>Phase Lines:</strong> JULIET (LD), KILO (Intermediate), LIMA (Objective)</li>
                <li><strong>Coordination Points:</strong> Company boundaries, Brigade coordination</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Tactical ROE</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Tactical ROE:</strong> Engage all identified enemy forces</li>
                <li><strong>Escalation:</strong> Battalion commander approval for sensitive targets</li>
                <li><strong>Coordination:</strong> Adjacent company coordination required</li>
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
          <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 8px 0;">Battalion Fire Support</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Battalion integrates organic and supporting fires to enable tactical maneuver. 
            Fire support includes battalion weapons, Brigade fires, and direct fire coordination.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Information Operations</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>OPSEC:</strong> Communications security, movement discipline</li>
                <li><strong>Deception:</strong> Noise and light discipline, camouflage</li>
                <li><strong>Signals:</strong> Visual and audio signals, emergency procedures</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Special Instructions</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Logistics:</strong> Ammunition resupply, water distribution</li>
                <li><strong>Medical:</strong> Battalion medic support, casualty collection</li>
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
          Battalion Execution Doctrinal Foundation
        </h4>
        <p style="color:#6ee7b7; font-size:12px; line-height:1.5; margin:0;">
          <strong>Primary Sources:</strong> ATP 3-21.20 (Infantry Battalion), FM 3-96 (Brigade Combat Team), 
          FM 5-0 (Operations Process), FM 3-0 (Operations).
          <br><br>
          <strong>Battalion-Specific References:</strong> FM 3-21.10 (Infantry Rifle Company), ATP 3-21.8 (Infantry Platoon and Squad), 
          ATP 3-90.5 (Combined Arms Battalion).
        </p>
      </div>
    </div>
  `;
}
