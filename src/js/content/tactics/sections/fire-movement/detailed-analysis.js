/**
 * Tactics: Fire & Movement - Detailed Analysis
 * Comprehensive doctrinal analysis covering fire and movement principles, techniques, and procedures
 * Source: FM 3-0 (Operations), ADP 3-0 (Operations), ATP 3-21.8 (Infantry Platoon and Squad), JP 3-0 (Joint Operations)
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 */

export const fireMovementDetailedAnalysisTacticsModule = {
  id: 'fire-movement-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,
  _handlers: [],
  _styleId: 'fm-detailed-styles',
  _lsKey(prefix){ return `fm-detailed-${prefix}`; },

  getContent() {
    return `
      <div id="fm-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-crosshairs" style="margin-right:8px; color:#60a5fa; font-size:16px;"></i>
            Fire & Movement — Detailed Analysis
          </h3>
        </div>

        <!-- 2x2 Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; align-items:stretch;">
          <!-- Card 1: Fire & Movement Fundamentals -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-bullseye" style="margin-right:8px; color:#10b981; font-size:12px;"></i>
                Fire & Movement Fundamentals
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                The coordinated employment of fires and movement to achieve tactical advantage. Fire supports movement by suppressing enemy forces, while movement positions forces to deliver effective fires.
              </p>
              <div style="background-color:rgba(16, 185, 129, 0.1); padding:8px; border-radius:4px; border:1px solid #10b981; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 4px 0;">Core Principles</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Mutual Support:</strong> Fire enables movement, movement enables fire</li>
                  <li><strong>Suppression:</strong> Fires degrade enemy capability to interfere</li>
                  <li><strong>Positioning:</strong> Movement achieves tactical advantage</li>
                  <li><strong>Timing:</strong> Synchronized execution for maximum effect</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #10b981;">
                <div style="color:#6ee7b7; font-size:12px; font-weight:600; margin-bottom:2px;">Tactical Application</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Squad/team level coordination<br>
                  • Combined arms integration
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Fire Support Techniques -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-fire" style="margin-right:8px; color:#3b82f6; font-size:12px;"></i>
                Fire Support Techniques
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Methods of employing fires to support movement operations. Includes direct and indirect fires coordinated to suppress, neutralize, or destroy enemy forces.
              </p>
              <div style="background-color:rgba(59, 130, 246, 0.1); padding:8px; border-radius:4px; border:1px solid #3b82f6; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 4px 0;">Fire Techniques</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Suppressive Fire:</strong> Degrades enemy capability</li>
                  <li><strong>Covering Fire:</strong> Protects moving elements</li>
                  <li><strong>Overwatch Fire:</strong> Observes and engages threats</li>
                  <li><strong>Supporting Fire:</strong> Assists maneuver elements</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #3b82f6;">
                <div style="color:#93c5fd; font-size:12px; font-weight:600; margin-bottom:2px;">Fire Assets</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Direct fire weapons • Indirect fire systems<br>
                  • Close air support • Naval gunfire
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Movement Techniques -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-running" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
                Movement Techniques
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Methods of moving forces while maintaining security and tactical advantage. Techniques vary based on enemy threat, terrain, and mission requirements.
              </p>
              <div style="background-color:rgba(139, 92, 246, 0.1); padding:8px; border-radius:4px; border:1px solid #8b5cf6; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 4px 0;">Movement Methods</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Traveling:</strong> Fastest, minimal security</li>
                  <li><strong>Traveling Overwatch:</strong> Moderate speed/security</li>
                  <li><strong>Bounding Overwatch:</strong> Maximum security</li>
                  <li><strong>Infiltration:</strong> Covert movement</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #8b5cf6;">
                <div style="color:#c4b5fd; font-size:12px; font-weight:600; margin-bottom:2px;">Considerations</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Enemy situation • Terrain factors<br>
                  • Time constraints • Mission type
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Combined Arms Integration -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-cogs" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Combined Arms Integration
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Synchronized employment of different combat arms and supporting elements to achieve complementary and reinforcing effects in fire and movement operations.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:8px; border-radius:4px; border:1px solid #f59e0b; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 4px 0;">Integration Elements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Infantry:</strong> Close combat and terrain control</li>
                  <li><strong>Armor:</strong> Mobility, protection, firepower</li>
                  <li><strong>Artillery:</strong> Indirect fire support</li>
                  <li><strong>Aviation:</strong> Air mobility and close support</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #f59e0b;">
                <div style="color:#fbbf24; font-size:12px; font-weight:600; margin-bottom:2px;">Coordination</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Fire coordination measures<br>
                  • Movement control measures
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Doctrinal Framework Section -->
        <div style="margin-bottom:20px; padding:12px; background-color:#0f172a; border:1px solid #1e293b; border-radius:8px;">
          <h4 style="font-size:14px; font-weight:600; color:#60a5fa; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Fire & Movement Doctrinal Framework
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#1e293b; padding:10px; border-radius:6px; border:1px solid #334155;">
              <h5 style="font-size:12px; font-weight:600; color:#93c5fd; margin:0 0 6px 0;">Tactical Fire & Movement</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Definition:</strong> The coordinated employment of fires and movement to achieve tactical objectives while minimizing friendly casualties and maximizing enemy losses.</p>
                <p style="margin:0;"><strong>Purpose:</strong> Gain and maintain tactical advantage through synchronized fire support and tactical movement.</p>
              </div>
            </div>
            <div style="background-color:#1e293b; padding:10px; border-radius:6px; border:1px solid #334155;">
              <h5 style="font-size:12px; font-weight:600; color:#93c5fd; margin:0 0 6px 0;">Command & Control</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Fire Control:</strong> Coordination of all fires to support movement operations through fire support coordination measures.</p>
                <p style="margin:0;"><strong>Movement Control:</strong> Direction and coordination of tactical movement through control measures and communication.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tactical Techniques Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
          <!-- Bounding Overwatch -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">
              <i class="fas fa-shield-alt" style="margin-right: 8px; color: #3b82f6; font-size: 14px;"></i>
              Bounding Overwatch Technique
            </h4>
            <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Execution Method</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">One element provides overwatch while another element moves. The overwatching element is positioned to observe the area of movement and engage threats.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Overwatch Element:</strong> Provides security and fire support</li>
                  <li style="margin-bottom: 4px;"><strong>Moving Element:</strong> Advances to next position</li>
                  <li><strong>Communication:</strong> Continuous coordination between elements</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(37, 99, 235, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(37, 99, 235, 0.3);">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Considerations</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Advantages:</strong> Maximum security, mutual support<br>
                  <strong>Disadvantages:</strong> Slower movement, requires coordination<br>
                  <strong>Best Use:</strong> High threat areas, deliberate operations
                </p>
              </div>
            </div>
          </div>

          <!-- Traveling Overwatch -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(22, 163, 74, 0.3); padding-bottom: 6px;">
              <i class="fas fa-eye" style="margin-right: 8px; color: #10b981; font-size: 14px;"></i>
              Traveling Overwatch Technique
            </h4>
            <div style="background: linear-gradient(135deg, rgba(22, 163, 74, 0.15) 0%, rgba(22, 163, 74, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(22, 163, 74, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Execution Method</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Elements move simultaneously with one element positioned to support the other by fire if necessary. Maintains visual contact and mutual support.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Lead Element:</strong> Advances along designated route</li>
                  <li style="margin-bottom: 4px;"><strong>Overwatch Element:</strong> Follows with supporting fires capability</li>
                  <li><strong>Spacing:</strong> Maintains tactical distance for mutual support</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(22, 163, 74, 0.3);">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Tactical Considerations</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Advantages:</strong> Faster than bounding, maintains security<br>
                  <strong>Disadvantages:</strong> Less security than bounding<br>
                  <strong>Best Use:</strong> Moderate threat, time-sensitive operations
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Fire Coordination Measures -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 1px solid #334155; border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
          <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(139, 92, 246, 0.3); padding-bottom: 8px;">
            <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
            Fire Coordination Measures (FCMs)
          </h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <div style="background: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Permissive Measures</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Free Fire Area (FFA):</strong> Fires authorized without coordination</li>
                  <li style="margin-bottom: 4px;"><strong>Coordinated Fire Line (CFL):</strong> Beyond which fires are coordinated</li>
                  <li><strong>Fire Support Coordination Line (FSCL):</strong> Beyond which fires are coordinated</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Restrictive Measures</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>No Fire Area (NFA):</strong> Fires prohibited</li>
                  <li style="margin-bottom: 4px;"><strong>Restrictive Fire Area (RFA):</strong> Fires require coordination</li>
                  <li><strong>Restrictive Fire Line (RFL):</strong> Fires beyond require coordination</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.3);">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Control Measures</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Target Reference Points (TRP):</strong> Easily identifiable points</li>
                  <li style="margin-bottom: 4px;"><strong>Final Protective Fire (FPF):</strong> Predetermined defensive fires</li>
                  <li><strong>Principal Direction of Fire (PDF):</strong> Primary engagement direction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tactical Applications -->
        <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
          <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
            <i class="fas fa-tactics" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
            Tactical Applications of Fire & Movement
          </h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
              <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 10px 0;">Offensive Operations</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong>Attack:</strong> Fire suppresses enemy positions while assault elements maneuver to close with and destroy the enemy.</p>
                <p style="margin: 0 0 8px 0;"><strong>Movement to Contact:</strong> Advance guard provides overwatch while main body moves to establish contact.</p>
                <p style="margin: 0;"><strong>Exploitation:</strong> Rapid movement supported by fires to maintain momentum and prevent enemy reorganization.</p>
              </div>
            </div>
            <div style="background: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
              <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 10px 0;">Defensive Operations</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong>Defense:</strong> Interlocking fires from defensive positions support counterattack movements.</p>
                <p style="margin: 0 0 8px 0;"><strong>Withdrawal:</strong> Covering forces provide fires while main body displaces to subsequent positions.</p>
                <p style="margin: 0;"><strong>Counterattack:</strong> Supporting fires suppress enemy while friendly forces maneuver to counterattack positions.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Risk Mitigation -->
        <div style="background-color:#7f1d1d; border:1px solid #991b1b; border-radius:8px; padding:12px; margin-bottom:20px;">
          <h4 style="font-size:14px; font-weight:600; color:#fca5a5; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-exclamation-triangle" style="margin-right:8px; color:#fca5a5; font-size:12px;"></i>
            Risk Mitigation in Fire & Movement
          </h4>
          <div style="color:#fecaca; font-size:12px; line-height:1.4;">
            <p style="margin:0 0 8px 0;"><strong>Fratricide Prevention:</strong> Clear fire control measures, positive target identification, and continuous communication between fire and maneuver elements.</p>
            <p style="margin:0 0 8px 0;"><strong>Coordination Failures:</strong> Redundant communication systems, standardized procedures, and rehearsals to ensure synchronization.</p>
            <p style="margin:0;"><strong>Tactical Risks:</strong> Proper reconnaissance, security measures, and contingency planning to address unexpected enemy actions or terrain challenges.</p>
          </div>
        </div>

        <!-- Doctrinal References -->
        <div style="background-color:#374151; border:1px solid #4b5563; border-radius:8px; padding:12px;">
          <h4 style="font-size:14px; font-weight:600; color:#d1d5db; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-book-open" style="margin-right:8px; color:#9ca3af; font-size:12px;"></i>
            Authoritative Doctrinal Sources
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 4px 0;"><strong>FM 3-0:</strong> Operations - Unified Land Operations doctrine and fire support integration</p>
              <p style="margin:0 0 4px 0;"><strong>ADP 3-0:</strong> Operations - Foundational principles of fire and movement coordination</p>
              <p style="margin:0;"><strong>ATP 3-21.8:</strong> Infantry Platoon and Squad - Small unit fire and movement techniques</p>
            </div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 4px 0;"><strong>JP 3-0:</strong> Joint Operations - Joint fire support and movement coordination</p>
              <p style="margin:0 0 4px 0;"><strong>FM 3-09:</strong> Field Artillery Operations and Fire Support - Fire coordination procedures</p>
              <p style="margin:0;"><strong>ATP 3-21.20:</strong> Infantry Battalion - Battalion-level fire and movement operations</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  initialize(){
    console.log('✅ Fire & Movement Detailed Analysis module initialized');
    return true;
  },
  cleanup(){
    console.log('🧹 Fire & Movement Detailed Analysis module cleaned up');
  }
};

export default fireMovementDetailedAnalysisTacticsModule;
