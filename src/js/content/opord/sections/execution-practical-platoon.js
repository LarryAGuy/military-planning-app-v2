/**
 * OPORD Execution - Platoon Level Practical Example
 * Tactical-Level Command - Squad/Team Coordination
 * Source: FM 3-21.8 (Infantry Rifle Platoon and Squad), ATP 3-21.8 (Infantry Platoon and Squad)
 */

export function getPlatoonExecutionExample() {
  return `
    <div style="padding:20px;">
      <!-- Platoon Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-users" style="margin-right:12px; color:#10b981; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Platoon Level Execution Example</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Tactical-Level Command - Squad/Team Coordination</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color:#064e3b; border:1px solid #059669; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#a7f3d0; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-crosshairs" style="margin-right:8px;"></i>
          Operation ALLIED RESOLVE - 1st Rifle Platoon
        </h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div>
            <p style="color:#6ee7b7; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
              <strong>Platoon:</strong> 1st Rifle Platoon (-)<br>
              <strong>AOR:</strong> Tallinn Port Sector, Building 12-15<br>
              <strong>Duration:</strong> 180-day campaign, platoon operations<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color:#6ee7b7; font-size:12px; line-height:1.4; margin:0;">
              <strong>Forces:</strong> 3x Rifle Squads, 1x Weapons Squad<br>
              <strong>Mission:</strong> Conduct tactical assault, secure objective<br>
              <strong>Guidance:</strong> Receives tactical guidance from Alpha Company<br>
              <strong>Support:</strong> Company fires, medical, logistics
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
            Platoon conducts tactical assault in support of Company tactical objectives to secure designated objective. 
            Receives tactical guidance from Company command and integrates squad maneuver with platoon enablers across two phases.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I: Tactical Preparation</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Squad positioning and reconnaissance</li>
                <li>Platoon fires preparation</li>
                <li>Obstacle reduction and breaching</li>
                <li>Tactical deception and security</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II: Tactical Assault</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Squad synchronized assault</li>
                <li>Platoon reserve commitment</li>
                <li>Direct fire support</li>
                <li>Tactical sustainment</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316;">
          <h4 style="color:#fdba74; font-size:13px; font-weight:600; margin:0 0 8px 0;">Platoon Resource Allocation to Squads</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Maneuver:</strong> Squad positioning per Company guidance, tactical mobility
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Fires:</strong> Platoon fires allocation to Squads, Company fires coordination
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Intelligence:</strong> Company ISR distribution to Squad leaders
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Logistics:</strong> Platoon sustainment allocation to Squad operations
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Communications:</strong> Platoon communications allocation to Squad sectors
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
          <h4 style="color:#86efac; font-size:14px; font-weight:600; margin:0 0 8px 0;">Squad Task Organization</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Platoon assigns tactical tasks to subordinate rifle squads and weapons squad. 
            Main effort designation shifts by phase to maintain tactical momentum and achieve platoon objectives.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>1st Squad:</strong> Execute Company reconnaissance guidance to identify enemy positions. 
                Command 2x Fire Teams. Establish tactical overwatch positions per Company plan.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Platoon fires, engineer support, squad communications</div>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>2nd Squad:</strong> Execute Company assault guidance through identified routes. 
                Command 2x Fire Teams. Establish tactical foothold for Company follow-on forces.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Platoon reserve, medical, squad sustainment</div>
            </div>
          </div>

          <div style="background-color:rgba(22, 163, 74, 0.1); padding:12px; border-radius:6px; border:1px solid #16a34a;">
            <h4 style="color:#86efac; font-size:13px; font-weight:600; margin:0 0 8px 0;">Platoon Subordinate Tasks</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">3rd Squad</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct supporting operations to fix enemy forces. Prepare to exploit success or reinforce main effort.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Weapons Squad</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Provide direct fires in support of squad operations. Coordinate with Company fires for suppression.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Platoon Headquarters</h5>
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
          <h4 style="color:#fde047; font-size:14px; font-weight:600; margin:0 0 8px 0;">Platoon-Level Coordination</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Tactical coordination measures ensure unity of effort across squads and platoon enablers. 
            Instructions synchronize tactical actions and integrate with Company operations.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Tactical Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>H-Hour:</strong> 060630ZMAR25 (Platoon attack)</li>
                <li><strong>Platoon Boundaries:</strong> Left: TREE LINE, Right: ROAD JUNCTION</li>
                <li><strong>Phase Lines:</strong> ALPHA (LD), BRAVO (Intermediate), CHARLIE (Objective)</li>
                <li><strong>Coordination Points:</strong> Squad boundaries, Company coordination</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Tactical ROE</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Tactical ROE:</strong> Engage all identified enemy forces</li>
                <li><strong>Escalation:</strong> Platoon leader approval for sensitive targets</li>
                <li><strong>Coordination:</strong> Adjacent squad coordination required</li>
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
          <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 8px 0;">Platoon Fire Support</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Platoon integrates organic and supporting fires to enable tactical maneuver. 
            Fire support includes platoon weapons, Company fires, and direct fire coordination.
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
                <li><strong>Medical:</strong> Platoon medic support, casualty collection</li>
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
          Platoon Execution Doctrinal Foundation
        </h4>
        <p style="color:#6ee7b7; font-size:12px; line-height:1.5; margin:0;">
          <strong>Primary Sources:</strong> FM 3-21.8 (Infantry Rifle Platoon and Squad), ATP 3-21.8 (Infantry Platoon and Squad), 
          FM 5-0 (Operations Process), FM 3-0 (Operations).
          <br><br>
          <strong>Platoon-Specific References:</strong> ATP 3-21.20 (Infantry Battalion), FM 3-21.10 (Infantry Rifle Company), 
          ATP 3-21.91 (Stryker Infantry Rifle Platoon and Squad).
        </p>
      </div>
    </div>
  `;
}
