/**
 * OPORD Execution - Corps Level Practical Example
 * Operational-Level Coordination - Division Synchronization
 * Source: FM 3-92 (Corps Operations), FM 5-0 (Operations Process)
 */

export function getCorpsExecutionExample() {
  return `
    <div style="padding:20px;">
      <!-- Corps Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-crown" style="margin-right:12px; color:#a855f7; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Corps Level Execution Example</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Operational-Level Coordination - Division Synchronization</p>
        </div>
      </div>

      <!-- Operation Overview -->
      <div style="background-color:#1e1b4b; border:1px solid #4c1d95; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#c4b5fd; font-size:16px; font-weight:600; margin:0 0 12px 0;">
          <i class="fas fa-star" style="margin-right:8px;"></i>
          Operation ALLIED RESOLVE - XVIII Airborne Corps
        </h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div>
            <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
              <strong>Corps:</strong> XVIII Airborne Corps (-)<br>
              <strong>AOR:</strong> Baltic States AOR, Estonia-Latvia-Lithuania<br>
              <strong>Duration:</strong> 180-day campaign, Phase II-III focus<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color:#e0e7ff; font-size:12px; line-height:1.4; margin:0;">
              <strong>Forces:</strong> 3x Divisions, Corps Artillery, Aviation Brigade<br>
              <strong>Mission:</strong> Conduct operational maneuver, defeat enemy corps<br>
              <strong>Domains:</strong> Land, Air, Space, Cyber, Information<br>
              <strong>Support:</strong> Army fires, joint assets, coalition forces
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
            Corps conducts operational maneuver in support of Third Army strategic objectives to defeat enemy corps.
            Receives operational guidance from Army command and integrates division maneuver with corps enablers across four phases.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I: Operational Preparation</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Division deployment and positioning</li>
                <li>Corps deep operations initiation</li>
                <li>Joint fires integration</li>
                <li>Operational deception</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #f97316;">
              <h5 style="color:#fdba74; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase II: Operational Maneuver</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li>Division synchronized attacks</li>
                <li>Corps reserve commitment</li>
                <li>Deep strike operations</li>
                <li>Operational sustainment</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316;">
          <h4 style="color:#fdba74; font-size:13px; font-weight:600; margin:0 0 8px 0;">Corps Resource Allocation to Divisions</h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:8px;">
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Maneuver:</strong> Division positioning per Army guidance, operational mobility
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Fires:</strong> Corps fires allocation to Divisions, Army fires coordination
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Intelligence:</strong> Army ISR distribution to Division commands
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Logistics:</strong> Operational sustainment allocation to Division operations
            </div>
            <div style="color:#d1d5db; font-size:12px;">
              <strong>Protection:</strong> Corps protection assets allocation to Division sectors
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
          <h4 style="color:#86efac; font-size:14px; font-weight:600; margin:0 0 8px 0;">Division Task Organization</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Corps assigns operational tasks to subordinate divisions and corps enablers. 
            Main effort designation shifts by phase to maintain operational momentum and achieve corps objectives.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase I-II Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>82nd Airborne Division:</strong> Execute Army air assault guidance to seize key terrain.
                Command 1st BCT, 2nd BCT, 3rd BCT. Establish operational bridgehead for follow-on forces.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Corps fires, aviation, division sustainment</div>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #16a34a;">
              <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 6px 0;">Phase III-IV Main Effort</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 6px 0;">
                <strong>1st Armored Division:</strong> Execute Army exploitation guidance through established bridgehead.
                Command 1st ABCT, 2nd ABCT, 3rd ABCT. Defeat enemy operational reserves.
              </p>
              <div style="color:#86efac; font-size:12px; font-style:italic;">Priority: Corps fires, division sustainment, operational intelligence</div>
            </div>
          </div>

          <div style="background-color:rgba(22, 163, 74, 0.1); padding:12px; border-radius:6px; border:1px solid #16a34a;">
            <h4 style="color:#86efac; font-size:13px; font-weight:600; margin:0 0 8px 0;">Corps Subordinate Tasks</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">3rd Infantry Division</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Conduct supporting operations to fix enemy forces. Prepare to exploit success or reinforce main effort.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Corps Artillery</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Provide operational fires in support of division operations. Coordinate with Army fires for deep targets.
                </p>
              </div>
              <div>
                <h5 style="color:#86efac; font-size:12px; font-weight:600; margin:0 0 4px 0;">Corps Aviation</h5>
                <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0;">
                  Provide operational mobility and reconnaissance. Conduct deep attack operations against enemy reserves.
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
          <h4 style="color:#fde047; font-size:14px; font-weight:600; margin:0 0 8px 0;">Corps-Level Coordination</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Operational coordination measures ensure unity of effort across divisions and corps enablers. 
            Instructions synchronize operational actions and integrate with Army and joint operations.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Operational Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>H-Hour:</strong> 041200ZMAR25 (Corps attack)</li>
                <li><strong>Corps Boundaries:</strong> North: RIVER DELTA, South: HIGHWAY 12</li>
                <li><strong>Phase Lines:</strong> GREEN (LD), YELLOW (Intermediate), BLACK (Objective)</li>
                <li><strong>Coordination Points:</strong> Division boundaries, joint coordination</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #eab308;">
              <h5 style="color:#fde047; font-size:12px; font-weight:600; margin:0 0 6px 0;">Operational ROE</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Operational ROE:</strong> Engage all enemy operational forces</li>
                <li><strong>Escalation:</strong> Corps commander approval for strategic targets</li>
                <li><strong>Joint Coordination:</strong> Required for cross-domain operations</li>
                <li><strong>Coalition:</strong> Coordinate with allied forces in sector</li>
              </ul>
            </div>
          </div>

          <div style="background-color:rgba(234, 179, 8, 0.1); padding:12px; border-radius:6px; border:1px solid #eab308;">
            <h4 style="color:#fde047; font-size:13px; font-weight:600; margin:0 0 8px 0;">Operational Domain Coordination</h4>
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:8px;">
              <div style="color:#d1d5db; font-size:12px;">
                <strong>Land Domain:</strong> Division boundary coordination, operational mobility
              </div>
              <div style="color:#d1d5db; font-size:12px;">
                <strong>Air Domain:</strong> Joint airspace coordination, operational airlift
              </div>
              <div style="color:#d1d5db; font-size:12px;">
                <strong>Space:</strong> Operational communications, navigation, ISR
              </div>
              <div style="color:#d1d5db; font-size:12px;">
                <strong>Cyber:</strong> Operational network defense, cyber operations
              </div>
              <div style="color:#d1d5db; font-size:12px;">
                <strong>Information:</strong> Operational messaging, information warfare
              </div>
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
          <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 8px 0;">Corps Fire Support</h4>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 12px 0;">
            Corps integrates organic and supporting fires to enable operational maneuver. 
            Fire support includes corps artillery, Army fires, joint fires, and deep strike capabilities.
          </p>
          
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Information Operations</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Operational Communications:</strong> Unified messaging across divisions</li>
                <li><strong>OPSEC:</strong> Operational security, deception operations</li>
                <li><strong>Cyber Operations:</strong> Operational network protection</li>
                <li><strong>Electronic Warfare:</strong> Operational spectrum management</li>
              </ul>
            </div>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #dc2626;">
              <h5 style="color:#fca5a5; font-size:12px; font-weight:600; margin:0 0 6px 0;">Special Instructions</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:16px;">
                <li><strong>Civil Affairs:</strong> Operational-level civilian coordination</li>
                <li><strong>Legal:</strong> Operational legal review, ROE compliance</li>
                <li><strong>Environmental:</strong> Operational environmental considerations</li>
                <li><strong>Coalition:</strong> Multinational coordination protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Doctrinal Reference -->
      <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:16px; margin-top:20px;">
        <h4 style="font-weight:600; color:#dbeafe; font-size:14px; margin:0 0 8px 0; display:flex; align-items:center;">
          <i class="fas fa-book" style="margin-right:8px; color:#60a5fa;"></i>
          Corps Execution Doctrinal Foundation
        </h4>
        <p style="color:#bfdbfe; font-size:12px; line-height:1.5; margin:0;">
          <strong>Primary Sources:</strong> FM 3-92 (Corps Operations), FM 5-0 (Operations Process), 
          FM 3-0 (Operations), ATP 3-91 (Division Operations).
          <br><br>
          <strong>Corps-Specific References:</strong> ATP 3-90.5 (Combined Arms Battalion), JP 3-31 (Joint Land Operations), 
          FM 3-96 (Brigade Combat Team), ATP 3-09.23 (Field Artillery Cannon Battalion).
        </p>
      </div>
    </div>
  `;
}
