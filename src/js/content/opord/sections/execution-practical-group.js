/**
 * OPORD Execution - Group Level Practical Example
 * Operational-Level Command - Squadron Coordination
 * Source: FM 3-04 (Army Aviation), ATP 3-04.1 (Aviation Tactical Employment)
 */

export function getGroupExecutionExample() {
  return `
    <div style="padding:20px;">
      <!-- Group Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-layer-group" style="margin-right:12px; color:#3b82f6; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Group Level Execution Example</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Operational-Level Command - Squadron Coordination</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#dbeafe; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-helicopter" style="margin-right:8px;"></i>
          Operation ALLIED RESOLVE - 1st Aviation Group
        </h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div>
            <p style="color:#bfdbfe; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
              <strong>Group:</strong> 1st Aviation Group (-)<br>
              <strong>AOR:</strong> Baltic Airspace, Estonia-Latvia-Lithuania<br>
              <strong>Duration:</strong> 180-day campaign, aviation operations<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color:#bfdbfe; font-size:12px; line-height:1.4; margin:0;">
              <strong>Forces:</strong> 3x Aviation Squadrons, 1x Maintenance Squadron<br>
              <strong>Mission:</strong> Conduct operational aviation support, enable ground operations<br>
              <strong>Guidance:</strong> Receives operational guidance from Aviation Brigade<br>
              <strong>Support:</strong> Wing fires, logistics, airspace coordination
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
            Group conducts operational aviation operations in support of Brigade tactical objectives to enable ground maneuver. 
            Receives operational guidance from Aviation Brigade command and integrates squadron operations with group enablers across four phases.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I: Aviation Preparation</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Squadron positioning and reconnaissance</li>
                <li>Airspace coordination and deconfliction</li>
                <li>Aviation maintenance preparation</li>
                <li>Operational security measures</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II: Aviation Operations</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Squadron synchronized operations</li>
                <li>Group reserve commitment</li>
                <li>Deep attack operations</li>
                <li>Aviation sustainment</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316;">
          <h4 style="color:#fdba74; font-size:13px; font-weight:600; margin:0 0 8px 0;">Group Resource Allocation to Squadrons</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Aviation:</strong> Squadron positioning per Brigade guidance, operational mobility
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Fires:</strong> Group fires allocation to Squadrons, Brigade fires coordination
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Intelligence:</strong> Brigade ISR distribution to Squadron commands
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Logistics:</strong> Group sustainment allocation to Squadron operations
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Airspace:</strong> Group airspace allocation to Squadron sectors
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
          <h4 style="color:#86efac; font-size:14px; font-weight:600; margin:0 0 8px 0;">Squadron Task Organization</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Group assigns operational tasks to subordinate aviation squadrons and group enablers. 
            Main effort designation shifts by phase to maintain operational momentum and achieve group objectives.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I-II Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>1st Attack Squadron:</strong> Execute Brigade reconnaissance guidance to identify enemy positions. 
                Command 3x Attack Companies. Establish operational overwatch positions per Brigade plan.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Group fires, maintenance support, squadron ISR</div>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase III-IV Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>2nd Assault Squadron:</strong> Execute Brigade assault guidance to support ground operations. 
                Command 3x Assault Companies. Provide operational mobility for Brigade follow-on forces.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Group reserve, aviation, squadron sustainment</div>
            </div>
          </div>

          <div style="background-color:rgba(22, 163, 74, 0.1); padding:12px; border-radius:6px; border:1px solid #16a34a;">
            <h4 style="color:#86efac; font-size:13px; font-weight:600; margin:0 0 8px 0;">Group Subordinate Tasks</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">3rd Support Squadron</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct supporting operations to enable main effort. Provide logistics and medical evacuation support.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Group Maintenance</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Provide operational maintenance in support of squadron operations. Coordinate with Brigade maintenance.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Group Operations</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct airspace coordination and flight operations. Support squadron mission planning.
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
          <h4 style="color:#fde047; font-size:14px; font-weight:600; margin:0 0 8px 0;">Group-Level Coordination</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Operational coordination measures ensure unity of effort across squadrons and group enablers. 
            Instructions synchronize aviation operations and integrate with Brigade operations.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Aviation Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>H-Hour:</strong> 051800ZMAR25 (Group operations)</li>
                <li><strong>Airspace Boundaries:</strong> AGL 500ft to FL180</li>
                <li><strong>Phase Lines:</strong> HAWK (Initial), EAGLE (Intermediate), FALCON (Final)</li>
                <li><strong>Coordination Points:</strong> Squadron boundaries, Brigade coordination</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Aviation ROE</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Aviation ROE:</strong> Engage all identified enemy aviation forces</li>
                <li><strong>Escalation:</strong> Group commander approval for sensitive targets</li>
                <li><strong>Coordination:</strong> Adjacent squadron coordination required</li>
                <li><strong>Airspace:</strong> Deconfliction with fixed-wing operations</li>
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
          <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 8px 0;">Group Fire Support</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Group integrates organic and supporting fires to enable aviation operations. 
            Fire support includes group aviation fires, Brigade fires, and air-to-air coordination.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Information Operations</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>OPSEC:</strong> Communications security, flight discipline</li>
                <li><strong>Deception:</strong> False flight patterns, electronic warfare</li>
                <li><strong>PSYOP:</strong> Psychological operations, civilian messaging</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Special Instructions</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Aviation:</strong> Forward arming and refueling points</li>
                <li><strong>Medical:</strong> Aviation medical evacuation, casualty collection</li>
                <li><strong>Maintenance:</strong> Forward maintenance operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Doctrinal Reference -->
      <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
        <h4 style="font-weight:600; color:#dbeafe; font-size:14px; margin:0 0 8px 0; display:flex; align-items:center;">
          <i class="fas fa-book" style="margin-right:8px; color:#60a5fa;"></i>
          Group Execution Doctrinal Foundation
        </h4>
        <p style="color:#bfdbfe; font-size:12px; line-height:1.5; margin:0;">
          <strong>Primary Sources:</strong> FM 3-04 (Army Aviation), ATP 3-04.1 (Aviation Tactical Employment), 
          FM 5-0 (Operations Process), FM 3-0 (Operations).
          <br><br>
          <strong>Group-Specific References:</strong> ATP 3-04.7 (Army Aviation Maintenance), FM 3-04.111 (Aviation Brigades), 
          ATP 3-04.17 (Techniques for Airspace Control in the Combat Zone).
        </p>
      </div>
    </div>
  `;
}
