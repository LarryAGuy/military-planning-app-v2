/**
 * Tactics: Offensive Operations - Detailed Analysis
 * Comprehensive doctrinal analysis covering offensive operations principles, techniques, and procedures
 * Source: FM 3-90 (Tactics) Chapter 7, FM 3-0 (Operations), ADP 3-0 (Operations), JP 3-0 (Joint Operations)
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 */

export const offensiveOperationsDetailedAnalysisTacticsModule = {
  id: 'offensive-operations-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,
  _handlers: [],
  _styleId: 'oo-detailed-styles',
  _lsKey(prefix){ return `oo-detailed-${prefix}`; },

  getContent() {
    return `
      <div id="oo-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-sword" style="margin-right:8px; color:#60a5fa; font-size:16px;"></i>
            Offensive Operations — Detailed Analysis
          </h3>
        </div>

        <!-- 2x2 Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; align-items:stretch;">
          <!-- Card 1: Offensive Operations Fundamentals -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-sword" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Offensive Operations Fundamentals
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Operations conducted to defeat and destroy enemy forces and seize terrain, resources, and population centers. Offensive operations impose the commander's will on the enemy and achieve decisive results through aggressive action.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:8px; border-radius:4px; border:1px solid #f59e0b; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 4px 0;">Core Characteristics</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Surprise:</strong> Strike enemy when and where unexpected</li>
                  <li><strong>Concentration:</strong> Mass combat power at decisive point</li>
                  <li><strong>Tempo:</strong> Maintain rapid pace of operations</li>
                  <li><strong>Audacity:</strong> Accept tactical risk for operational gain</li>
                  <li><strong>Flexibility:</strong> Adapt to changing battlefield conditions</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #f59e0b;">
                <div style="color:#fbbf24; font-size:12px; font-weight:600; margin-bottom:2px;">Offensive Purposes</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Destroy enemy forces • Seize key terrain<br>
                  • Disrupt enemy operations • Create decisive conditions
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Types of Offensive Operations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-chess-knight" style="margin-right:8px; color:#3b82f6; font-size:12px;"></i>
                Types of Offensive Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Offensive operations are categorized by their tactical purpose and method of execution. Each type serves specific operational objectives and enemy situations.
              </p>
              <div style="background-color:rgba(59, 130, 246, 0.1); padding:8px; border-radius:4px; border:1px solid #3b82f6; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 4px 0;">Offensive Types</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Movement to Contact:</strong> Gain/regain contact with enemy</li>
                  <li><strong>Attack:</strong> Destroy/defeat enemy in prepared positions</li>
                  <li><strong>Exploitation:</strong> Take advantage of tactical success</li>
                  <li><strong>Pursuit:</strong> Catch/destroy withdrawing enemy</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #3b82f6;">
                <div style="color:#93c5fd; font-size:12px; font-weight:600; margin-bottom:2px;">Selection Factors</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Enemy disposition • Mission requirements<br>
                  • Terrain conditions • Time available
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Offensive Planning Considerations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-map-marked-alt" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
                Offensive Planning Considerations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Critical factors that influence offensive planning and execution. Commanders must analyze these elements to develop effective offensive schemes of maneuver.
              </p>
              <div style="background-color:rgba(139, 92, 246, 0.1); padding:8px; border-radius:4px; border:1px solid #8b5cf6; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 4px 0;">Planning Factors</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Intelligence:</strong> Enemy capabilities and intentions</li>
                  <li><strong>Terrain:</strong> Key terrain and avenues of approach</li>
                  <li><strong>Weather:</strong> Visibility and mobility effects</li>
                  <li><strong>Time:</strong> Planning and preparation requirements</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #8b5cf6;">
                <div style="color:#c4b5fd; font-size:12px; font-weight:600; margin-bottom:2px;">METT-TC Analysis</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Mission • Enemy • Terrain/Weather<br>
                  • Troops • Time • Civilian Considerations
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Command and Control -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-satellite-dish" style="margin-right:8px; color:#ef4444; font-size:12px;"></i>
                Command and Control
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Effective command and control is essential for successful offensive operations. Commanders must maintain situational awareness and direct forces throughout dynamic operations.
              </p>
              <div style="background-color:rgba(239, 68, 68, 0.1); padding:8px; border-radius:4px; border:1px solid #ef4444; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 4px 0;">C2 Requirements</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Situational Awareness:</strong> Real-time battlefield picture</li>
                  <li><strong>Communications:</strong> Reliable command networks</li>
                  <li><strong>Decision Making:</strong> Rapid tactical decisions</li>
                  <li><strong>Synchronization:</strong> Coordinate all elements</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #ef4444;">
                <div style="color:#fca5a5; font-size:12px; font-weight:600; margin-bottom:2px;">Control Measures</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Phase lines • Objectives<br>
                  • Boundaries • Coordination points
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Movement to Contact Operations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-route" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
            Movement to Contact Operations
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:13px; margin:0 0 8px 0;">Purpose and Characteristics</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Movement to contact is an offensive operation designed to develop the situation and establish or regain contact with the enemy. It seeks to make contact with the smallest friendly force possible.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Search and Attack:</strong> Find and fix enemy forces</li>
                <li><strong>Cordon and Search:</strong> Isolate and clear areas</li>
                <li><strong>Reconnaissance in Force:</strong> Determine enemy strength</li>
              </ul>
            </div>

            <div style="background-color:rgba(59, 130, 246, 0.1); padding:10px; border-radius:6px; border:1px solid #3b82f6;">
              <h5 style="font-weight:600; color:#93c5fd; font-size:13px; margin:0 0 8px 0;">Execution Techniques</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Movement to contact employs specific formations and techniques to maintain security while advancing and developing the situation.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Approach March:</strong> Rapid movement to contact</li>
                <li><strong>Search and Attack:</strong> Systematic area clearance</li>
                <li><strong>Reconnaissance Pull:</strong> Intelligence-driven movement</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #f59e0b;">
            <div style="color:#fbbf24; font-size:12px; font-weight:600; margin-bottom:4px;">Key Planning Considerations</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Security:</strong> Maintain all-around security during movement<br>
              • <strong>Flexibility:</strong> Prepare for immediate transition to attack<br>
              • <strong>Intelligence:</strong> Continuous reconnaissance and surveillance<br>
              • <strong>Communications:</strong> Maintain contact with higher headquarters
            </div>
          </div>
        </div>

        <!-- Attack Operations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-crosshairs" style="margin-right:10px; color:#ef4444; font-size:14px;"></i>
            Attack Operations
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(239, 68, 68, 0.1); padding:10px; border-radius:6px; border:1px solid #ef4444;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:13px; margin:0 0 8px 0;">Attack Fundamentals</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                An attack is an offensive operation that destroys or defeats enemy forces, seizes and secures terrain, or both. Attacks may be hasty or deliberate based on time available for planning.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Hasty Attack:</strong> Conducted with minimal preparation</li>
                <li><strong>Deliberate Attack:</strong> Detailed planning and preparation</li>
                <li><strong>Spoiling Attack:</strong> Disrupt enemy preparations</li>
              </ul>
            </div>

            <div style="background-color:rgba(139, 92, 246, 0.1); padding:10px; border-radius:6px; border:1px solid #8b5cf6;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:13px; margin:0 0 8px 0;">Forms of Attack</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Attacks are conducted using various forms based on the relationship between friendly and enemy forces and the tactical situation.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Frontal Attack:</strong> Direct assault on enemy positions</li>
                <li><strong>Envelopment:</strong> Attack around enemy flank</li>
                <li><strong>Turning Movement:</strong> Bypass and attack from rear</li>
                <li><strong>Infiltration:</strong> Small unit penetration</li>
                <li><strong>Penetration:</strong> Breakthrough enemy lines</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #ef4444;">
            <div style="color:#fca5a5; font-size:12px; font-weight:600; margin-bottom:4px;">Attack Phases</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Reconnaissance:</strong> Gather intelligence on enemy positions<br>
              • <strong>Movement:</strong> Deploy forces to attack positions<br>
              • <strong>Deployment:</strong> Transition from movement to attack formation<br>
              • <strong>Assault:</strong> Close with and destroy enemy forces<br>
              • <strong>Consolidation:</strong> Reorganize and prepare for follow-on operations
            </div>
          </div>
        </div>

        <!-- Exploitation and Pursuit Operations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-running" style="margin-right:10px; color:#10b981; font-size:14px;"></i>
            Exploitation and Pursuit Operations
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(16, 185, 129, 0.1); padding:10px; border-radius:6px; border:1px solid #10b981;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:13px; margin:0 0 8px 0;">Exploitation Operations</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Exploitation rapidly follows successful attack operations to take advantage of tactical success and prevent enemy recovery. Speed and audacity are essential.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Rapid Advance:</strong> Maintain momentum of attack</li>
                <li><strong>Bypass Resistance:</strong> Avoid unnecessary engagement</li>
                <li><strong>Seize Objectives:</strong> Capture key terrain/facilities</li>
              </ul>
            </div>

            <div style="background-color:rgba(6, 182, 212, 0.1); padding:10px; border-radius:6px; border:1px solid #06b6d4;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:13px; margin:0 0 8px 0;">Pursuit Operations</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Pursuit operations are designed to catch or cut off a hostile force attempting to escape, with the aim of destroying it. Requires aggressive leadership and rapid movement.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Direct Pressure:</strong> Maintain contact with enemy</li>
                <li><strong>Parallel Pursuit:</strong> Move alongside enemy route</li>
                <li><strong>Encirclement:</strong> Cut off enemy escape routes</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #10b981;">
            <div style="color:#6ee7b7; font-size:12px; font-weight:600; margin-bottom:4px;">Success Factors</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Speed:</strong> Rapid execution before enemy can recover<br>
              • <strong>Aggressiveness:</strong> Maintain pressure on enemy forces<br>
              • <strong>Flexibility:</strong> Adapt to changing enemy actions<br>
              • <strong>Sustainment:</strong> Maintain logistics support during rapid operations
            </div>
          </div>
        </div>

        <!-- Offensive Control Measures -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-map-signs" style="margin-right:10px; color:#f97316; font-size:14px;"></i>
            Offensive Control Measures
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:12px;">
            <div style="background-color:rgba(249, 115, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #f97316;">
              <h5 style="font-weight:600; color:#fb923c; font-size:13px; margin:0 0 8px 0;">Movement Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Line of Departure (LD):</strong> Start line for attack</li>
                <li><strong>Phase Lines (PL):</strong> Control movement phases</li>
                <li><strong>Axis of Advance (AA):</strong> General direction of movement</li>
                <li><strong>Direction of Attack (DOA):</strong> Specific attack direction</li>
                <li><strong>Boundaries:</strong> Unit area of operations limits</li>
              </ul>
            </div>

            <div style="background-color:rgba(249, 115, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #f97316;">
              <h5 style="font-weight:600; color:#fb923c; font-size:13px; margin:0 0 8px 0;">Fire Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Attack by Fire (ABF):</strong> Engage from position</li>
                <li><strong>Support by Fire (SBF):</strong> Overwatch positions</li>
                <li><strong>Final Protective Line:</strong> Last defensive fires</li>
                <li><strong>Target Reference Points:</strong> Fire coordination</li>
                <li><strong>No Fire Areas (NFA):</strong> Restricted fire zones</li>
              </ul>
            </div>

            <div style="background-color:rgba(249, 115, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #f97316;">
              <h5 style="font-weight:600; color:#fb923c; font-size:13px; margin:0 0 8px 0;">Tactical Control Measures</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Objectives (OBJ):</strong> Terrain to be seized</li>
                <li><strong>Assault Positions (AP):</strong> Final preparation areas</li>
                <li><strong>Checkpoints (CP):</strong> Navigation references</li>
                <li><strong>Contact Points:</strong> Unit coordination points</li>
                <li><strong>Passage Points:</strong> Movement through positions</li>
              </ul>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(249, 115, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #f97316;">
              <h5 style="font-weight:600; color:#fb923c; font-size:13px; margin:0 0 8px 0;">Control Measure Planning</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Effective control measures enable commanders to synchronize forces, maintain unit coordination, and achieve tactical objectives while minimizing fratricide risk.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Simplicity:</strong> Easy to understand and execute</li>
                <li><strong>Flexibility:</strong> Adaptable to changing conditions</li>
                <li><strong>Clarity:</strong> Unambiguous identification and purpose</li>
              </ul>
            </div>

            <div style="background-color:rgba(249, 115, 22, 0.1); padding:10px; border-radius:6px; border:1px solid #f97316;">
              <h5 style="font-weight:600; color:#fb923c; font-size:13px; margin:0 0 8px 0;">Coordination Requirements</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Control measures must be coordinated across all echelons and warfighting functions to ensure unity of effort and prevent conflicts.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Vertical Coordination:</strong> Higher and lower echelons</li>
                <li><strong>Lateral Coordination:</strong> Adjacent units</li>
                <li><strong>Functional Coordination:</strong> All warfighting functions</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #f97316;">
            <div style="color:#fb923c; font-size:12px; font-weight:600; margin-bottom:4px;">Implementation Considerations</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Terrain Analysis:</strong> Control measures must account for terrain features<br>
              • <strong>Enemy Situation:</strong> Adapt measures based on enemy capabilities<br>
              • <strong>Time Factors:</strong> Synchronize measures with operational timeline<br>
              • <strong>Communication:</strong> Ensure all units understand control measures
            </div>
          </div>
        </div>

        <!-- Formations and Movement Techniques -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-users" style="margin-right:10px; color:#6366f1; font-size:14px;"></i>
            Formations and Movement Techniques
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:8px; margin-bottom:12px;">
            <div style="background-color:rgba(99, 102, 241, 0.1); padding:10px; border-radius:6px; border:1px solid #6366f1;">
              <h5 style="font-weight:600; color:#a5b4fc; font-size:13px; margin:0 0 8px 0;">Column Formation</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 6px 0;">
                Units arranged in depth along direction of movement.
              </p>
              <ul style="color:#d1d5db; font-size:11px; line-height:1.2; margin:0; padding-left:12px;">
                <li>Maximum control</li>
                <li>Rapid movement</li>
                <li>Limited firepower forward</li>
                <li>Vulnerable to flanking</li>
              </ul>
            </div>

            <div style="background-color:rgba(99, 102, 241, 0.1); padding:10px; border-radius:6px; border:1px solid #6366f1;">
              <h5 style="font-weight:600; color:#a5b4fc; font-size:13px; margin:0 0 8px 0;">Line Formation</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 6px 0;">
                Units arranged abreast perpendicular to direction of movement.
              </p>
              <ul style="color:#d1d5db; font-size:11px; line-height:1.2; margin:0; padding-left:12px;">
                <li>Maximum firepower forward</li>
                <li>Good for final assault</li>
                <li>Difficult to control</li>
                <li>Slow movement</li>
              </ul>
            </div>

            <div style="background-color:rgba(99, 102, 241, 0.1); padding:10px; border-radius:6px; border:1px solid #6366f1;">
              <h5 style="font-weight:600; color:#a5b4fc; font-size:13px; margin:0 0 8px 0;">Wedge Formation</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 6px 0;">
                Lead unit forward, others echeloned to flanks.
              </p>
              <ul style="color:#d1d5db; font-size:11px; line-height:1.2; margin:0; padding-left:12px;">
                <li>Good all-around security</li>
                <li>Flexible deployment</li>
                <li>Moderate control</li>
                <li>Balanced capabilities</li>
              </ul>
            </div>

            <div style="background-color:rgba(99, 102, 241, 0.1); padding:10px; border-radius:6px; border:1px solid #6366f1;">
              <h5 style="font-weight:600; color:#a5b4fc; font-size:13px; margin:0 0 8px 0;">Echelon Formation</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 6px 0;">
                Units arranged diagonally in depth.
              </p>
              <ul style="color:#d1d5db; font-size:11px; line-height:1.2; margin:0; padding-left:12px;">
                <li>Protected flank</li>
                <li>Sequential engagement</li>
                <li>Good for envelopment</li>
                <li>Complex coordination</li>
              </ul>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:12px;">
            <div style="background-color:rgba(99, 102, 241, 0.1); padding:10px; border-radius:6px; border:1px solid #6366f1;">
              <h5 style="font-weight:600; color:#a5b4fc; font-size:13px; margin:0 0 8px 0;">Traveling</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Units move with maximum speed when enemy contact is not expected.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Speed:</strong> Fastest movement technique</li>
                <li><strong>Security:</strong> Minimal security measures</li>
                <li><strong>Use:</strong> Secure areas or time-critical movement</li>
              </ul>
            </div>

            <div style="background-color:rgba(99, 102, 241, 0.1); padding:10px; border-radius:6px; border:1px solid #6366f1;">
              <h5 style="font-weight:600; color:#a5b4fc; font-size:13px; margin:0 0 8px 0;">Traveling Overwatch</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Trail unit maintains visual contact and can provide immediate support.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Speed:</strong> Moderate movement speed</li>
                <li><strong>Security:</strong> Enhanced security posture</li>
                <li><strong>Use:</strong> Possible enemy contact areas</li>
              </ul>
            </div>

            <div style="background-color:rgba(99, 102, 241, 0.1); padding:10px; border-radius:6px; border:1px solid #6366f1;">
              <h5 style="font-weight:600; color:#a5b4fc; font-size:13px; margin:0 0 8px 0;">Bounding Overwatch</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Units alternate movement with one providing overwatch security.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Speed:</strong> Slowest movement technique</li>
                <li><strong>Security:</strong> Maximum security measures</li>
                <li><strong>Use:</strong> Expected enemy contact</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #6366f1;">
            <div style="color:#a5b4fc; font-size:12px; font-weight:600; margin-bottom:4px;">Formation and Movement Selection Factors</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Mission Requirements:</strong> Tactical objectives and commander's intent<br>
              • <strong>Enemy Situation:</strong> Known or suspected enemy positions and capabilities<br>
              • <strong>Terrain and Weather:</strong> Ground conditions and visibility factors<br>
              • <strong>Time Available:</strong> Movement timeline and operational tempo requirements
            </div>
          </div>
        </div>

        <!-- Multi-Domain Operations Integration -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-globe" style="margin-right:10px; color:#8b5cf6; font-size:14px;"></i>
            Multi-Domain Operations Integration
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:12px;">
            <div style="background-color:rgba(139, 92, 246, 0.1); padding:10px; border-radius:6px; border:1px solid #8b5cf6;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:13px; margin:0 0 8px 0;">Land Domain</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Ground maneuver forces</li>
                <li>Artillery and fires</li>
                <li>Engineer support</li>
                <li>Air defense systems</li>
              </ul>
            </div>

            <div style="background-color:rgba(59, 130, 246, 0.1); padding:10px; border-radius:6px; border:1px solid #3b82f6;">
              <h5 style="font-weight:600; color:#93c5fd; font-size:13px; margin:0 0 8px 0;">Air Domain</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Close air support</li>
                <li>Air interdiction</li>
                <li>Air mobility operations</li>
                <li>Intelligence/surveillance</li>
              </ul>
            </div>

            <div style="background-color:rgba(16, 185, 129, 0.1); padding:10px; border-radius:6px; border:1px solid #10b981;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:13px; margin:0 0 8px 0;">Maritime Domain</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Naval gunfire support</li>
                <li>Amphibious operations</li>
                <li>Maritime logistics</li>
                <li>Coastal reconnaissance</li>
              </ul>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px;">
            <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:13px; margin:0 0 8px 0;">Space Domain</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Satellite communications</li>
                <li>GPS navigation</li>
                <li>Intelligence collection</li>
                <li>Missile warning systems</li>
              </ul>
            </div>

            <div style="background-color:rgba(239, 68, 68, 0.1); padding:10px; border-radius:6px; border:1px solid #ef4444;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:13px; margin:0 0 8px 0;">Cyberspace Domain</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Network operations</li>
                <li>Electronic warfare</li>
                <li>Information operations</li>
                <li>Cyber defense</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #8b5cf6;">
            <div style="color:#c4b5fd; font-size:12px; font-weight:600; margin-bottom:4px;">Integration Principles</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Convergence:</strong> Synchronize effects across all domains<br>
              • <strong>Complementarity:</strong> Domains support and reinforce each other<br>
              • <strong>Redundancy:</strong> Multiple pathways to achieve objectives<br>
              • <strong>Resilience:</strong> Maintain capability despite domain degradation
            </div>
          </div>
        </div>

        <!-- Offensive Operations Planning Process -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-clipboard-list" style="margin-right:10px; color:#06b6d4; font-size:14px;"></i>
            Offensive Operations Planning Process
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(6, 182, 212, 0.1); padding:10px; border-radius:6px; border:1px solid #06b6d4;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:13px; margin:0 0 8px 0;">Intelligence Preparation</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Comprehensive analysis of the operational environment to understand enemy capabilities, intentions, and vulnerabilities.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>IPB Process:</strong> Define area, describe effects, evaluate threat</li>
                <li><strong>Enemy Analysis:</strong> Capabilities, doctrine, and likely COAs</li>
                <li><strong>Terrain Analysis:</strong> Key terrain and mobility corridors</li>
                <li><strong>Weather Analysis:</strong> Impact on operations and equipment</li>
              </ul>
            </div>

            <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:13px; margin:0 0 8px 0;">Course of Action Development</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Development of multiple feasible, acceptable, suitable, distinguishable, and complete courses of action.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Array Forces:</strong> Determine unit positions and roles</li>
                <li><strong>Develop Concept:</strong> How forces will accomplish mission</li>
                <li><strong>Assign Tasks:</strong> Specific missions to subordinate units</li>
                <li><strong>Identify Resources:</strong> Required personnel and equipment</li>
              </ul>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(239, 68, 68, 0.1); padding:10px; border-radius:6px; border:1px solid #ef4444;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:13px; margin:0 0 8px 0;">Risk Assessment</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Systematic evaluation of potential hazards and their impact on mission accomplishment.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Identify Hazards:</strong> Tactical, operational, strategic risks</li>
                <li><strong>Assess Risk:</strong> Probability and severity analysis</li>
                <li><strong>Develop Controls:</strong> Mitigation measures and procedures</li>
                <li><strong>Make Decisions:</strong> Accept, avoid, or transfer risk</li>
              </ul>
            </div>

            <div style="background-color:rgba(16, 185, 129, 0.1); padding:10px; border-radius:6px; border:1px solid #10b981;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:13px; margin:0 0 8px 0;">Synchronization Matrix</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Tool for coordinating the timing and effects of combat power across all warfighting functions.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Phase Lines:</strong> Control measures for operation phases</li>
                <li><strong>Decision Points:</strong> Critical decision requirements</li>
                <li><strong>Target Areas:</strong> Priority engagement areas</li>
                <li><strong>Support Tasks:</strong> Enabling and sustaining operations</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #06b6d4;">
            <div style="color:#67e8f9; font-size:12px; font-weight:600; margin-bottom:4px;">Planning Considerations</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Time Available:</strong> Balance planning time with execution requirements<br>
              • <strong>Intelligence Gaps:</strong> Identify and address critical information requirements<br>
              • <strong>Logistics Support:</strong> Ensure adequate sustainment for operations<br>
              • <strong>Command Relationships:</strong> Clear authority and responsibility assignments
            </div>
          </div>
        </div>

        <!-- Offensive Operations Warfighting Functions -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-cogs" style="margin-right:10px; color:#a855f7; font-size:14px;"></i>
            Offensive Operations Warfighting Functions
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:12px;">
            <div style="background-color:rgba(168, 85, 247, 0.1); padding:10px; border-radius:6px; border:1px solid #a855f7;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:13px; margin:0 0 8px 0;">Mission Command</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Commander's intent</li>
                <li>Mission orders</li>
                <li>Disciplined initiative</li>
                <li>Risk acceptance</li>
              </ul>
            </div>

            <div style="background-color:rgba(239, 68, 68, 0.1); padding:10px; border-radius:6px; border:1px solid #ef4444;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:13px; margin:0 0 8px 0;">Movement and Maneuver</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Tactical mobility</li>
                <li>Positioning forces</li>
                <li>Gaining advantage</li>
                <li>Combined arms</li>
              </ul>
            </div>

            <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:13px; margin:0 0 8px 0;">Fires</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Lethal fires</li>
                <li>Non-lethal fires</li>
                <li>Target acquisition</li>
                <li>Battle damage assessment</li>
              </ul>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:12px;">
            <div style="background-color:rgba(59, 130, 246, 0.1); padding:10px; border-radius:6px; border:1px solid #3b82f6;">
              <h5 style="font-weight:600; color:#93c5fd; font-size:13px; margin:0 0 8px 0;">Intelligence</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Collection operations</li>
                <li>Analysis and production</li>
                <li>Dissemination</li>
                <li>Counterintelligence</li>
              </ul>
            </div>

            <div style="background-color:rgba(16, 185, 129, 0.1); padding:10px; border-radius:6px; border:1px solid #10b981;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:13px; margin:0 0 8px 0;">Sustainment</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Logistics operations</li>
                <li>Personnel services</li>
                <li>Health service support</li>
                <li>Maintenance operations</li>
              </ul>
            </div>

            <div style="background-color:rgba(6, 182, 212, 0.1); padding:10px; border-radius:6px; border:1px solid #06b6d4;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:13px; margin:0 0 8px 0;">Protection</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li>Force protection</li>
                <li>Air and missile defense</li>
                <li>Chemical defense</li>
                <li>Operational security</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #a855f7;">
            <div style="color:#c4b5fd; font-size:12px; font-weight:600; margin-bottom:4px;">Integration Requirements</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Synchronization:</strong> Coordinate all functions in time and space<br>
              • <strong>Complementarity:</strong> Functions support and reinforce each other<br>
              • <strong>Redundancy:</strong> Multiple capabilities to accomplish tasks<br>
              • <strong>Flexibility:</strong> Adapt functions to changing conditions
            </div>
          </div>
        </div>

        <!-- Offensive Operations Principles -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-balance-scale" style="margin-right:10px; color:#ec4899; font-size:14px;"></i>
            Principles of Offensive Operations
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(236, 72, 153, 0.1); padding:10px; border-radius:6px; border:1px solid #ec4899;">
              <h5 style="font-weight:600; color:#f9a8d4; font-size:13px; margin:0 0 8px 0;">Fundamental Principles</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:12px;">
                <li><strong>Objective:</strong> Direct operations toward decisive, attainable objectives</li>
                <li><strong>Offensive:</strong> Seize, retain, and exploit the initiative</li>
                <li><strong>Mass:</strong> Concentrate combat power at decisive place and time</li>
                <li><strong>Economy of Force:</strong> Allocate minimum essential combat power</li>
                <li><strong>Maneuver:</strong> Place enemy in position of disadvantage</li>
              </ul>
            </div>

            <div style="background-color:rgba(168, 85, 247, 0.1); padding:10px; border-radius:6px; border:1px solid #a855f7;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:13px; margin:0 0 8px 0;">Supporting Principles</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:12px;">
                <li><strong>Unity of Command:</strong> Ensure unity of effort under one commander</li>
                <li><strong>Security:</strong> Never permit enemy to acquire unexpected advantage</li>
                <li><strong>Surprise:</strong> Strike enemy when, where, and how unexpected</li>
                <li><strong>Simplicity:</strong> Prepare clear, uncomplicated plans and orders</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #ec4899;">
            <div style="color:#f9a8d4; font-size:12px; font-weight:600; margin-bottom:4px;">Application in Offensive Operations</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Concentration:</strong> Mass combat power at the decisive point<br>
              • <strong>Speed:</strong> Rapid execution to maintain momentum<br>
              • <strong>Shock:</strong> Overwhelm enemy through violent action<br>
              • <strong>Exploitation:</strong> Capitalize on success to achieve decisive results
            </div>
          </div>
        </div>

        <!-- Contemporary Challenges and Adaptations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-exclamation-triangle" style="margin-right:10px; color:#f59e0b; font-size:14px;"></i>
            Contemporary Challenges and Adaptations
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:13px; margin:0 0 8px 0;">Modern Battlefield Challenges</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:12px;">
                <li><strong>Peer Competitors:</strong> Near-peer adversary capabilities</li>
                <li><strong>Multi-Domain Threats:</strong> Attacks across all domains</li>
                <li><strong>Information Warfare:</strong> Cognitive and information attacks</li>
                <li><strong>Urban Environments:</strong> Complex terrain and civilian presence</li>
                <li><strong>Technology Integration:</strong> AI, robotics, and autonomous systems</li>
              </ul>
            </div>

            <div style="background-color:rgba(16, 185, 129, 0.1); padding:10px; border-radius:6px; border:1px solid #10b981;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:13px; margin:0 0 8px 0;">Adaptive Solutions</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:12px;">
                <li><strong>Distributed Operations:</strong> Dispersed and networked forces</li>
                <li><strong>Cross-Domain Synergy:</strong> Integrated multi-domain effects</li>
                <li><strong>Human-Machine Teaming:</strong> Enhanced decision-making</li>
                <li><strong>Resilient Networks:</strong> Redundant communication systems</li>
                <li><strong>Rapid Adaptation:</strong> Agile response to threats</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #f59e0b;">
            <div style="color:#fbbf24; font-size:12px; font-weight:600; margin-bottom:4px;">Future Considerations</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Emerging Technologies:</strong> Quantum computing, hypersonics, directed energy<br>
              • <strong>Hybrid Warfare:</strong> Conventional and irregular tactics combination<br>
              • <strong>Space Operations:</strong> Contested space domain operations<br>
              • <strong>Cyber Resilience:</strong> Protection against sophisticated cyber attacks
            </div>
          </div>
        </div>

        <!-- Offensive Operations in Joint Environment -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-handshake" style="margin-right:10px; color:#06b6d4; font-size:14px;"></i>
            Offensive Operations in Joint Environment
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(6, 182, 212, 0.1); padding:10px; border-radius:6px; border:1px solid #06b6d4;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:13px; margin:0 0 8px 0;">Joint Integration</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Land forces must integrate with joint capabilities to achieve maximum effectiveness in offensive operations.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Joint Fires:</strong> Coordinate air, naval, and land-based fires</li>
                <li><strong>Joint Intelligence:</strong> Fused multi-source intelligence</li>
                <li><strong>Joint Logistics:</strong> Integrated sustainment operations</li>
                <li><strong>Joint C2:</strong> Unified command and control systems</li>
              </ul>
            </div>

            <div style="background-color:rgba(139, 92, 246, 0.1); padding:10px; border-radius:6px; border:1px solid #8b5cf6;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:13px; margin:0 0 8px 0;">Multinational Operations</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Coalition and alliance operations require additional coordination and interoperability considerations.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Interoperability:</strong> Compatible systems and procedures</li>
                <li><strong>Cultural Awareness:</strong> Understanding partner capabilities</li>
                <li><strong>Legal Frameworks:</strong> Rules of engagement alignment</li>
                <li><strong>Language Barriers:</strong> Communication protocols</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #06b6d4;">
            <div style="color:#67e8f9; font-size:12px; font-weight:600; margin-bottom:4px;">Joint Planning Considerations</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Unity of Effort:</strong> Coordinate all joint and coalition forces<br>
              • <strong>Complementary Capabilities:</strong> Leverage unique service strengths<br>
              • <strong>Deconfliction:</strong> Prevent fratricide and interference<br>
              • <strong>Synchronization:</strong> Time and coordinate joint effects
            </div>
          </div>
        </div>

        <!-- Offensive Operations Execution Considerations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-play-circle" style="margin-right:10px; color:#10b981; font-size:14px;"></i>
            Offensive Operations Execution Considerations
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(16, 185, 129, 0.1); padding:10px; border-radius:6px; border:1px solid #10b981;">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:13px; margin:0 0 8px 0;">Tempo and Momentum</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Maintaining rapid tempo and operational momentum is critical to offensive success and preventing enemy recovery.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Rapid Decision Making:</strong> Quick tactical decisions</li>
                <li><strong>Continuous Operations:</strong> 24-hour operational cycles</li>
                <li><strong>Bypass Tactics:</strong> Avoid unnecessary delays</li>
                <li><strong>Exploitation Forces:</strong> Capitalize on breakthroughs</li>
              </ul>
            </div>

            <div style="background-color:rgba(245, 158, 11, 0.1); padding:10px; border-radius:6px; border:1px solid #f59e0b;">
              <h5 style="font-weight:600; color:#fbbf24; font-size:13px; margin:0 0 8px 0;">Flexibility and Adaptation</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Offensive operations must adapt to changing enemy actions and battlefield conditions while maintaining focus on objectives.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Branch Plans:</strong> Alternative courses of action</li>
                <li><strong>Sequel Operations:</strong> Follow-on mission planning</li>
                <li><strong>Reserve Employment:</strong> Flexible force commitment</li>
                <li><strong>Mission Command:</strong> Decentralized execution</li>
              </ul>
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(239, 68, 68, 0.1); padding:10px; border-radius:6px; border:1px solid #ef4444;">
              <h5 style="font-weight:600; color:#fca5a5; font-size:13px; margin:0 0 8px 0;">Sustainment During Offensive Operations</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Rapid offensive operations place significant demands on sustainment systems requiring careful planning and execution.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Forward Logistics:</strong> Push supplies to advancing units</li>
                <li><strong>Medical Evacuation:</strong> Rapid casualty evacuation</li>
                <li><strong>Maintenance Support:</strong> Field maintenance capabilities</li>
                <li><strong>Fuel Distribution:</strong> Continuous fuel supply</li>
              </ul>
            </div>

            <div style="background-color:rgba(168, 85, 247, 0.1); padding:10px; border-radius:6px; border:1px solid #a855f7;">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:13px; margin:0 0 8px 0;">Information Operations Integration</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Information operations support offensive operations by shaping the information environment and degrading enemy capabilities.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Electronic Warfare:</strong> Disrupt enemy communications</li>
                <li><strong>Cyber Operations:</strong> Attack enemy networks</li>
                <li><strong>Military Deception:</strong> Mislead enemy commanders</li>
                <li><strong>Public Affairs:</strong> Shape public perception</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #10b981;">
            <div style="color:#6ee7b7; font-size:12px; font-weight:600; margin-bottom:4px;">Execution Success Factors</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Leadership:</strong> Aggressive and competent leadership at all levels<br>
              • <strong>Training:</strong> Realistic and challenging training programs<br>
              • <strong>Equipment:</strong> Modern and well-maintained equipment<br>
              • <strong>Morale:</strong> High unit morale and esprit de corps
            </div>
          </div>
        </div>

        <!-- Transition Operations -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-exchange-alt" style="margin-right:10px; color:#ec4899; font-size:14px;"></i>
            Transition Operations
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
            <div style="background-color:rgba(236, 72, 153, 0.1); padding:10px; border-radius:6px; border:1px solid #ec4899;">
              <h5 style="font-weight:600; color:#f9a8d4; font-size:13px; margin:0 0 8px 0;">Offensive to Defensive Transition</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Forces may need to transition from offensive to defensive operations based on mission requirements or enemy actions.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Consolidation:</strong> Organize captured terrain</li>
                <li><strong>Reorganization:</strong> Redistribute forces and resources</li>
                <li><strong>Defensive Preparations:</strong> Establish defensive positions</li>
                <li><strong>Sustainment:</strong> Resupply and refit operations</li>
              </ul>
            </div>

            <div style="background-color:rgba(6, 182, 212, 0.1); padding:10px; border-radius:6px; border:1px solid #06b6d4;">
              <h5 style="font-weight:600; color:#67e8f9; font-size:13px; margin:0 0 8px 0;">Stability Operations Transition</h5>
              <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0 0 8px 0;">
                Following successful offensive operations, forces may transition to stability operations to secure gains.
              </p>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                <li><strong>Civil Affairs:</strong> Establish civil-military cooperation</li>
                <li><strong>Security Operations:</strong> Maintain law and order</li>
                <li><strong>Infrastructure:</strong> Restore essential services</li>
                <li><strong>Governance:</strong> Support legitimate authority</li>
              </ul>
            </div>
          </div>

          <div style="background-color:#374151; padding:8px; border-radius:4px; border-left:3px solid #ec4899;">
            <div style="color:#f9a8d4; font-size:12px; font-weight:600; margin-bottom:4px;">Transition Planning</div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.3;">
              • <strong>Trigger Events:</strong> Conditions that initiate transition<br>
              • <strong>Resource Allocation:</strong> Redistribute forces and equipment<br>
              • <strong>Mission Handoff:</strong> Transfer responsibilities to appropriate units<br>
              • <strong>Continuity:</strong> Maintain operational effectiveness during transition
            </div>
          </div>
        </div>

        <!-- Doctrinal References -->
        <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:12px; margin-bottom:12px;">
          <h4 style="font-size:16px; font-weight:600; color:white; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:10px; color:#64748b; font-size:14px;"></i>
            Doctrinal References and Further Reading
          </h4>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:rgba(100, 116, 139, 0.1); padding:10px; border-radius:6px; border:1px solid #64748b;">
              <h5 style="font-weight:600; color:#94a3b8; font-size:13px; margin:0 0 8px 0;">Primary Publications</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:12px;">
                <li><strong>FM 3-90 (Tactics):</strong> Chapter 7 - Offensive Operations</li>
                <li><strong>FM 3-0 (Operations):</strong> Chapter 7 - Offensive Operations</li>
                <li><strong>ADP 3-0 (Operations):</strong> Unified Land Operations</li>
                <li><strong>JP 3-0 (Joint Operations):</strong> Joint Offensive Operations</li>
                <li><strong>FM 6-0:</strong> Commander and Staff Organization</li>
                <li><strong>FM 3-96:</strong> Brigade Combat Team</li>
              </ul>
            </div>

            <div style="background-color:rgba(100, 116, 139, 0.1); padding:10px; border-radius:6px; border:1px solid #64748b;">
              <h5 style="font-weight:600; color:#94a3b8; font-size:13px; margin:0 0 8px 0;">Supporting Publications</h5>
              <ul style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0; padding-left:12px;">
                <li><strong>FM 5-0:</strong> Operations Process</li>
                <li><strong>FM 2-0:</strong> Intelligence</li>
                <li><strong>FM 3-13:</strong> Information Operations</li>
                <li><strong>FM 4-0:</strong> Sustainment</li>
                <li><strong>ATP 3-90.1:</strong> Combined Arms Battalion</li>
                <li><strong>FM 3-16:</strong> Multinational Operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  initialize(){
    console.log('✅ Offensive Operations Detailed Analysis module initialized');
    return true;
  },
  cleanup(){
    console.log('🧹 Offensive Operations Detailed Analysis module cleaned up');
  }
};
export default offensiveOperationsDetailedAnalysisTacticsModule;
