/**
 * OPORD Execution - Company Level Practical Example
 * Tactical-Level Command - Platoon Coordination
 * Source: FM 3-21.10 (Infantry Rifle Company), ATP 3-21.20 (Infantry Battalion)
 */

export function getCompanyExecutionExample() {
  return `
    <div style="padding:20px;">
      <!-- Company Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-user-friends" style="margin-right:12px; color:#10b981; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Company Level Execution Example</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Tactical-Level Command - Platoon Coordination</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color:#064e3b; border:1px solid #059669; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#a7f3d0; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-shield-alt" style="margin-right:8px;"></i>
          Operation ALLIED RESOLVE - Alpha Company
        </h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div>
            <p style="color:#6ee7b7; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
              <strong>Company:</strong> Alpha Company, 1st Battalion (-)<br>
              <strong>AOR:</strong> Tallinn Port District, Waterfront Defense<br>
              <strong>Duration:</strong> 180-day campaign, company operations<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color:#6ee7b7; font-size:12px; line-height:1.4; margin:0;">
              <strong>Forces:</strong> 3x Rifle Platoons, 1x Weapons Platoon<br>
              <strong>Mission:</strong> Conduct tactical operations, secure sector<br>
              <strong>Guidance:</strong> Receives tactical guidance from 1st Battalion<br>
              <strong>Support:</strong> Battalion fires, medical, logistics
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
            Company conducts tactical operations in support of Battalion tactical objectives to secure designated sector. 
            Receives tactical guidance from Battalion command and integrates platoon maneuver with company enablers across three phases.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I: Tactical Preparation</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Platoon positioning and reconnaissance</li>
                <li>Company fires preparation</li>
                <li>Obstacle reduction and breaching</li>
                <li>Tactical deception and security</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II: Tactical Operations</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Platoon synchronized operations</li>
                <li>Company reserve commitment</li>
                <li>Direct fire support</li>
                <li>Tactical sustainment</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316;">
          <h4 style="color:#fdba74; font-size:13px; font-weight:600; margin:0 0 8px 0;">Company Resource Allocation to Platoons</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Maneuver:</strong> Platoon positioning per Battalion guidance, tactical mobility
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Fires:</strong> Company fires allocation to Platoons, Battalion fires coordination
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Intelligence:</strong> Battalion ISR distribution to Platoon leaders
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Logistics:</strong> Company sustainment allocation to Platoon operations
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Communications:</strong> Company communications allocation to Platoon sectors
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
          <h4 style="color:#86efac; font-size:14px; font-weight:600; margin:0 0 8px 0;">Platoon Task Organization</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Company assigns tactical tasks to subordinate rifle platoons and weapons platoon. 
            Main effort designation shifts by phase to maintain tactical momentum and achieve company objectives.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>1st Platoon:</strong> Execute Battalion reconnaissance guidance to identify enemy positions. 
                Command 3x Rifle Squads. Establish tactical overwatch positions per Battalion plan.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Company fires, engineer support, platoon communications</div>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>2nd Platoon:</strong> Execute Battalion assault guidance through identified routes. 
                Command 3x Rifle Squads. Establish tactical foothold for Battalion follow-on forces.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Company reserve, medical, platoon sustainment</div>
            </div>
          </div>

          <div style="background-color:rgba(22, 163, 74, 0.1); padding:12px; border-radius:6px; border:1px solid #16a34a;">
            <h4 style="color:#86efac; font-size:13px; font-weight:600; margin:0 0 8px 0;">Company Subordinate Tasks</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">3rd Platoon</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct supporting operations to fix enemy forces. Prepare to exploit success or reinforce main effort.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Weapons Platoon</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Provide direct fires in support of platoon operations. Coordinate with Battalion fires for suppression.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Company Headquarters</h5>
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
          <h4 style="color:#fde047; font-size:14px; font-weight:600; margin:0 0 8px 0;">Company-Level Coordination</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Tactical coordination measures ensure unity of effort across platoons and company enablers. 
            Instructions synchronize tactical actions and integrate with Battalion operations.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Tactical Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>H-Hour:</strong> 060600ZMAR25 (Company attack)</li>
                <li><strong>Company Boundaries:</strong> Left: HILL 205, Right: STREAM JUNCTION</li>
                <li><strong>Phase Lines:</strong> DELTA (LD), ECHO (Intermediate), FOXTROT (Objective)</li>
                <li><strong>Coordination Points:</strong> Platoon boundaries, Battalion coordination</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Tactical ROE</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Tactical ROE:</strong> Engage all identified enemy forces</li>
                <li><strong>Escalation:</strong> Company commander approval for sensitive targets</li>
                <li><strong>Coordination:</strong> Adjacent platoon coordination required</li>
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
          <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 8px 0;">Company Fire Support</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Company integrates organic and supporting fires to enable tactical maneuver. 
            Fire support includes company weapons, Battalion fires, and direct fire coordination.
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
                <li><strong>Medical:</strong> Company medic support, casualty collection</li>
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
          Company Execution Doctrinal Foundation
        </h4>
        <p style="color:#6ee7b7; font-size:12px; line-height:1.5; margin:0;">
          <strong>Primary Sources:</strong> FM 3-21.10 (Infantry Rifle Company), ATP 3-21.20 (Infantry Battalion), 
          FM 5-0 (Operations Process), FM 3-0 (Operations).
          <br><br>
          <strong>Company-Specific References:</strong> FM 3-21.8 (Infantry Rifle Platoon and Squad), ATP 3-21.8 (Infantry Platoon and Squad), 
          ATP 3-21.91 (Stryker Infantry Rifle Platoon and Squad).
        </p>
      </div>
    </div>
  `;
}
