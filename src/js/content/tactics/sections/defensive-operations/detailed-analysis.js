/**
 * Tactics: Defensive Operations - Detailed Analysis
 * Comprehensive doctrinal analysis covering defensive operations principles, techniques, and procedures
 * Source: FM 3-0 (Operations), ADP 3-0 (Operations), FM 7-8 (Infantry Rifle Platoon and Squad), JP 3-0 (Joint Operations)
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 */

export const defensiveOperationsDetailedAnalysisTacticsModule = {
  id: 'defensive-operations-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,
  _handlers: [],
  _styleId: 'do-detailed-styles',
  _lsKey(prefix){ return `do-detailed-${prefix}`; },

  getContent() {
    return `
      <div id="do-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-shield-alt" style="margin-right:8px; color:#60a5fa; font-size:16px;"></i>
            Defensive Operations — Detailed Analysis
          </h3>
        </div>

        <!-- 2x2 Grid -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:12px; align-items:stretch;">
          <!-- Card 1: Defensive Operations Fundamentals -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-shield-alt" style="margin-right:8px; color:#10b981; font-size:12px;"></i>
                Defensive Operations Fundamentals
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Operations conducted to defeat enemy attacks, gain time, economize forces, and develop conditions favorable for offensive or stability operations. Defense is characterized by preparation, security, disruption, massed effects, and flexibility.
              </p>
              <div style="background-color:rgba(16, 185, 129, 0.1); padding:8px; border-radius:4px; border:1px solid #10b981; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 4px 0;">Core Characteristics</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Preparation:</strong> Organize terrain and forces for defense</li>
                  <li><strong>Security:</strong> Provide early warning and protection</li>
                  <li><strong>Disruption:</strong> Break up enemy formations and timing</li>
                  <li><strong>Mass Effects:</strong> Concentrate combat power at decisive points</li>
                  <li><strong>Flexibility:</strong> Adapt to changing enemy actions</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #10b981;">
                <div style="color:#6ee7b7; font-size:12px; font-weight:600; margin-bottom:2px;">Defensive Purposes</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Defeat enemy attacks • Gain time<br>
                  • Economize forces • Create offensive opportunities
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Types of Defensive Operations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-fortress" style="margin-right:8px; color:#3b82f6; font-size:12px;"></i>
                Types of Defensive Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Defensive operations are categorized by their tactical purpose and method of execution. Each type serves specific operational requirements and terrain considerations.
              </p>
              <div style="background-color:rgba(59, 130, 246, 0.1); padding:8px; border-radius:4px; border:1px solid #3b82f6; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 4px 0;">Defensive Types</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Area Defense:</strong> Retain specific terrain</li>
                  <li><strong>Mobile Defense:</strong> Destroy enemy through maneuver</li>
                  <li><strong>Retrograde:</strong> Organized withdrawal operations</li>
                  <li><strong>Perimeter Defense:</strong> 360-degree security</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #3b82f6;">
                <div style="color:#93c5fd; font-size:12px; font-weight:600; margin-bottom:2px;">Selection Factors</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Mission requirements • Enemy capabilities<br>
                  • Terrain characteristics • Available forces
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: Defensive Planning Considerations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-map-marked-alt" style="margin-right:8px; color:#8b5cf6; font-size:12px;"></i>
                Defensive Planning Considerations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Critical factors that influence defensive planning and execution. Commanders must analyze these elements to develop effective defensive schemes of maneuver.
              </p>
              <div style="background-color:rgba(139, 92, 246, 0.1); padding:8px; border-radius:4px; border:1px solid #8b5cf6; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 4px 0;">Planning Factors</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>METT-TC Analysis:</strong> Mission, enemy, terrain, troops, time, civilians</li>
                  <li><strong>Terrain Analysis:</strong> Key terrain, obstacles, avenues of approach</li>
                  <li><strong>Enemy Analysis:</strong> Capabilities, likely courses of action</li>
                  <li><strong>Force Ratios:</strong> Defender advantages and requirements</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #8b5cf6;">
                <div style="color:#c4b5fd; font-size:12px; font-weight:600; margin-bottom:2px;">Key Decisions</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Defensive type • Battle positions<br>
                  • Reserve employment • Counterattack plans
                </div>
              </div>
            </div>
          </div>

          <!-- Card 4: Integration with Other Operations -->
          <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:10px; display:flex; flex-direction:column; min-height:180px;">
            <div style="flex-grow:1;">
              <h4 style="font-size:14px; font-weight:600; color:white; margin:0 0 8px 0; display:flex; align-items:center;">
                <i class="fas fa-sync-alt" style="margin-right:8px; color:#f59e0b; font-size:12px;"></i>
                Integration with Other Operations
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0 0 8px 0;">
                Defensive operations are integrated with offensive and stability operations to achieve operational and strategic objectives. Defense creates conditions for subsequent operations.
              </p>
              <div style="background-color:rgba(245, 158, 11, 0.1); padding:8px; border-radius:4px; border:1px solid #f59e0b; margin-bottom:6px;">
                <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 4px 0;">Integration Methods</h5>
                <ul style="color:#d1d5db; font-size:12px; line-height:1.3; margin:0; padding-left:12px;">
                  <li><strong>Transition to Offense:</strong> Exploit defensive success</li>
                  <li><strong>Stability Operations:</strong> Secure areas and populations</li>
                  <li><strong>Combined Arms:</strong> Integrate all warfighting functions</li>
                  <li><strong>Joint Operations:</strong> Coordinate with other services</li>
                </ul>
              </div>
              <div style="background-color:#374151; padding:6px; border-radius:3px; border-left:2px solid #f59e0b;">
                <div style="color:#fbbf24; font-size:12px; font-weight:600; margin-bottom:2px;">Operational Context</div>
                <div style="color:#d1d5db; font-size:12px; line-height:1.2;">
                  • Unified land operations • Multi-domain operations<br>
                  • Campaign design • Operational approach
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Doctrinal Framework Section -->
        <div style="margin-bottom:20px; padding:12px; background-color:#0f172a; border:1px solid #1e293b; border-radius:8px;">
          <h4 style="font-size:14px; font-weight:600; color:#60a5fa; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-book" style="margin-right:8px; color:#60a5fa; font-size:12px;"></i>
            Defensive Operations Doctrinal Framework
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div style="background-color:#1e293b; padding:10px; border-radius:6px; border:1px solid #334155;">
              <h5 style="font-size:12px; font-weight:600; color:#93c5fd; margin:0 0 6px 0;">Tactical Defense</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Definition:</strong> Operations conducted to defeat enemy attacks, gain time, economize forces, and develop conditions favorable for offensive operations.</p>
                <p style="margin:0;"><strong>Purpose:</strong> Preserve combat power while inflicting maximum casualties on the enemy and creating opportunities for counterattack.</p>
              </div>
            </div>
            <div style="background-color:#1e293b; padding:10px; border-radius:6px; border:1px solid #334155;">
              <h5 style="font-size:12px; font-weight:600; color:#93c5fd; margin:0 0 6px 0;">Command & Control</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Defensive Control:</strong> Coordination of all defensive elements through control measures, communication systems, and battle rhythm.</p>
                <p style="margin:0;"><strong>Decision Points:</strong> Predetermined criteria that trigger specific defensive actions or transitions to other operations.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Area Defense Techniques -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
          <!-- Area Defense -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">
              <i class="fas fa-map-marked" style="margin-right: 8px; color: #3b82f6; font-size: 14px;"></i>
              Area Defense
            </h4>
            <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Execution Method</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Focuses on retaining specific terrain by absorbing enemy attacks in defensive positions and destroying the enemy through fires and counterattacks.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Forward Defense:</strong> Fight enemy at or near forward edge</li>
                  <li style="margin-bottom: 4px;"><strong>Defense in Depth:</strong> Multiple defensive positions</li>
                  <li><strong>Reserve Employment:</strong> Counterattack and reinforcement</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(37, 99, 235, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(37, 99, 235, 0.3);">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Tactical Considerations</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Advantages:</strong> Terrain retention, prepared positions<br>
                  <strong>Disadvantages:</strong> Predictable, resource intensive<br>
                  <strong>Best Use:</strong> Key terrain, urban areas, limited mobility
                </p>
              </div>
            </div>
          </div>

          <!-- Mobile Defense -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">
              <i class="fas fa-route" style="margin-right: 8px; color: #10b981; font-size: 14px;"></i>
              Mobile Defense
            </h4>
            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Execution Method</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Orients on destroying the enemy through maneuver, using minimum forces to fix the enemy and maximum forces to maneuver against enemy flanks and rear.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Fixing Force:</strong> Economy of force operations</li>
                  <li style="margin-bottom: 4px;"><strong>Striking Force:</strong> Main effort maneuver element</li>
                  <li><strong>Mobility:</strong> Rapid repositioning capability</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.3);">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Tactical Considerations</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Advantages:</strong> Flexibility, enemy destruction<br>
                  <strong>Disadvantages:</strong> Complex coordination, terrain dependent<br>
                  <strong>Best Use:</strong> Open terrain, mobile forces, superior mobility
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Defensive Positions and Techniques -->
        <div style="margin-bottom:20px; padding:16px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border:1px solid #334155; border-radius:12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
          <h4 style="font-size:16px; font-weight:700; color:#60a5fa; margin:0 0 16px 0; display:flex; align-items:center; border-bottom:2px solid rgba(96, 165, 250, 0.3); padding-bottom:8px;">
            <i class="fas fa-chess-rook" style="margin-right:10px; color:#60a5fa; font-size:16px;"></i>
            Defensive Positions and Techniques
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
            <div style="background: rgba(37, 99, 235, 0.1); padding:12px; border-radius:8px; border:1px solid rgba(37, 99, 235, 0.3);">
              <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Battle Positions</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Primary Positions:</strong> Main defensive locations with prepared fighting positions, obstacles, and fields of fire.</p>
                <p style="margin:0 0 6px 0;"><strong>Alternate Positions:</strong> Secondary positions to continue the defense if primary positions become untenable.</p>
                <p style="margin:0;"><strong>Supplementary Positions:</strong> Additional positions to cover dead space or provide different fields of fire.</p>
              </div>
            </div>
            <div style="background: rgba(16, 185, 129, 0.1); padding:12px; border-radius:8px; border:1px solid rgba(16, 185, 129, 0.3);">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 8px 0;">Obstacle Integration</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Existing Obstacles:</strong> Natural terrain features that impede enemy movement and provide defensive advantages.</p>
                <p style="margin:0 0 6px 0;"><strong>Reinforcing Obstacles:</strong> Man-made obstacles that enhance natural terrain and channel enemy forces.</p>
                <p style="margin:0;"><strong>Protective Obstacles:</strong> Close-in obstacles that protect defensive positions from direct assault.</p>
              </div>
            </div>
            <div style="background: rgba(139, 92, 246, 0.1); padding:12px; border-radius:8px; border:1px solid rgba(139, 92, 246, 0.3);">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Security Operations</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Outposts:</strong> Forward security elements that provide early warning and initial resistance.</p>
                <p style="margin:0 0 6px 0;"><strong>Listening Posts:</strong> Observation and surveillance positions that monitor enemy activity.</p>
                <p style="margin:0;"><strong>Patrols:</strong> Mobile security elements that gather intelligence and disrupt enemy reconnaissance.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Retrograde Operations -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
          <!-- Withdrawal -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(139, 92, 246, 0.3); padding-bottom: 6px;">
              <i class="fas fa-backward" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
              Withdrawal Operations
            </h4>
            <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Execution Method</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Planned retrograde operation where forces disengage from the enemy and move to more favorable positions while maintaining unit integrity.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Disengagement:</strong> Break contact with enemy forces</li>
                  <li style="margin-bottom: 4px;"><strong>Movement:</strong> Organized displacement to new positions</li>
                  <li><strong>Security:</strong> Rear guard and flank protection</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(139, 92, 246, 0.3);">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Planning Considerations</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Timing:</strong> Coordinated disengagement sequence<br>
                  <strong>Routes:</strong> Multiple withdrawal routes planned<br>
                  <strong>Deception:</strong> Maintain operational security
                </p>
              </div>
            </div>
          </div>

          <!-- Delay Operations -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">
              <i class="fas fa-hourglass-half" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
              Delay Operations
            </h4>
            <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">Execution Method</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Trading space for time by forcing the enemy to deploy and attack while conducting an organized withdrawal to successive positions.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Engagement:</strong> Fight from prepared positions</li>
                  <li style="margin-bottom: 4px;"><strong>Displacement:</strong> Withdraw to subsequent positions</li>
                  <li><strong>Repetition:</strong> Continue process to gain time</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.3);">
              <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Tactical Considerations</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Purpose:</strong> Gain time for other operations<br>
                  <strong>Positions:</strong> Successive delay positions<br>
                  <strong>Obstacles:</strong> Enhance delaying effect
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Multi-Domain Defensive Coordination -->
        <div style="margin-bottom:20px; padding:16px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border:1px solid #334155; border-radius:12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
          <h4 style="font-size:16px; font-weight:700; color:#60a5fa; margin:0 0 16px 0; display:flex; align-items:center; border-bottom:2px solid rgba(96, 165, 250, 0.3); padding-bottom:8px;">
            <i class="fas fa-globe" style="margin-right:10px; color:#60a5fa; font-size:16px;"></i>
            Multi-Domain Defensive Coordination
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="background: rgba(37, 99, 235, 0.1); padding:14px; border-radius:8px; border:1px solid rgba(37, 99, 235, 0.3);">
              <h5 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Land Domain Integration</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 8px 0;"><strong>Ground Forces:</strong> Infantry, armor, artillery, and engineer units coordinate to establish integrated defensive positions with mutually supporting fires and obstacles.</p>
                <p style="margin:0 0 8px 0;"><strong>Air Defense:</strong> Short-range air defense systems protect key defensive positions and provide early warning of air threats.</p>
                <p style="margin:0;"><strong>Electronic Warfare:</strong> Defensive electronic warfare systems protect friendly communications while disrupting enemy command and control.</p>
              </div>
            </div>
            <div style="background: rgba(16, 185, 129, 0.1); padding:14px; border-radius:8px; border:1px solid rgba(16, 185, 129, 0.3);">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 10px 0;">Air and Space Integration</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 8px 0;"><strong>Air Support:</strong> Close air support, interdiction, and air superiority missions support ground defensive operations.</p>
                <p style="margin:0 0 8px 0;"><strong>Intelligence:</strong> Airborne and space-based intelligence, surveillance, and reconnaissance provide situational awareness.</p>
                <p style="margin:0;"><strong>Logistics:</strong> Air mobility and space-based communications support defensive sustainment operations.</p>
              </div>
            </div>
          </div>
          <div style="margin-top:12px; background: rgba(139, 92, 246, 0.1); padding:14px; border-radius:8px; border:1px solid rgba(139, 92, 246, 0.3);">
            <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 10px 0;">Cyber and Information Operations</h5>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>Cyber Defense:</strong> Protect friendly networks and systems from enemy cyber attacks while maintaining operational capability.</p>
              <p style="margin:0 0 8px 0;"><strong>Information Operations:</strong> Counter enemy information operations and maintain information superiority in the operational environment.</p>
              <p style="margin:0;"><strong>Command and Control:</strong> Ensure reliable communications and data sharing across all domains and echelons.</p>
            </div>
          </div>
        </div>

        <!-- Defensive Fire Support -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
          <!-- Direct Fire Support -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">
              <i class="fas fa-crosshairs" style="margin-right: 8px; color: #dc2626; font-size: 14px;"></i>
              Direct Fire Support
            </h4>
            <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Fire Support Elements</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Direct fire weapons systems integrated into defensive positions to engage enemy forces with observed fires.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Small Arms:</strong> Individual and crew-served weapons</li>
                  <li style="margin-bottom: 4px;"><strong>Anti-Tank:</strong> Tank and anti-tank missile systems</li>
                  <li><strong>Fighting Vehicles:</strong> Infantry fighting vehicles and tanks</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(220, 38, 38, 0.3);">
              <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Employment Principles</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Interlocking Fires:</strong> Overlapping fields of fire<br>
                  <strong>Mutual Support:</strong> Units support adjacent positions<br>
                  <strong>Depth:</strong> Fires throughout defensive depth
                </p>
              </div>
            </div>
          </div>

          <!-- Indirect Fire Support -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">
              <i class="fas fa-bullseye" style="margin-right: 8px; color: #3b82f6; font-size: 14px;"></i>
              Indirect Fire Support
            </h4>
            <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Fire Support Systems</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Indirect fire systems that engage targets beyond line of sight to support defensive operations.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Artillery:</strong> Field artillery and rocket systems</li>
                  <li style="margin-bottom: 4px;"><strong>Mortars:</strong> Company and battalion mortar systems</li>
                  <li><strong>Naval/Air:</strong> Naval gunfire and close air support</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(37, 99, 235, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(37, 99, 235, 0.3);">
              <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Fire Missions</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Preparatory Fires:</strong> Pre-planned target engagement<br>
                  <strong>Defensive Fires:</strong> Final protective fires<br>
                  <strong>Counterfire:</strong> Counter-battery operations
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Defensive Control Measures -->
        <div style="margin-bottom:20px; padding:16px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border:1px solid #334155; border-radius:12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
          <h4 style="font-size:16px; font-weight:700; color:#60a5fa; margin:0 0 16px 0; display:flex; align-items:center; border-bottom:2px solid rgba(96, 165, 250, 0.3); padding-bottom:8px;">
            <i class="fas fa-map-signs" style="margin-right:10px; color:#60a5fa; font-size:16px;"></i>
            Defensive Control Measures
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
            <div style="background: rgba(37, 99, 235, 0.1); padding:12px; border-radius:8px; border:1px solid rgba(37, 99, 235, 0.3);">
              <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Fire Control Measures</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Final Protective Line:</strong> Predetermined line of fires designed to stop enemy assault on defensive positions.</p>
                <p style="margin:0 0 6px 0;"><strong>Principal Direction of Fire:</strong> Direction assigned to weapons or units as primary orientation for engagement.</p>
                <p style="margin:0;"><strong>Target Reference Points:</strong> Easily recognizable points used to control and coordinate fires.</p>
              </div>
            </div>
            <div style="background: rgba(16, 185, 129, 0.1); padding:12px; border-radius:8px; border:1px solid rgba(16, 185, 129, 0.3);">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 8px 0;">Maneuver Control Measures</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Battle Positions:</strong> Defensive positions oriented on likely enemy avenues of approach.</p>
                <p style="margin:0 0 6px 0;"><strong>Engagement Areas:</strong> Areas where forces plan to destroy enemy forces with direct and indirect fires.</p>
                <p style="margin:0;"><strong>Sector of Fire:</strong> Area assigned to a unit or weapon system for engagement responsibility.</p>
              </div>
            </div>
            <div style="background: rgba(139, 92, 246, 0.1); padding:12px; border-radius:8px; border:1px solid rgba(139, 92, 246, 0.3);">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Coordination Measures</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 6px 0;"><strong>Phase Lines:</strong> Control measures used to coordinate movement and fires during defensive operations.</p>
                <p style="margin:0 0 6px 0;"><strong>Checkpoints:</strong> Predetermined points used for navigation and coordination between units.</p>
                <p style="margin:0;"><strong>Contact Points:</strong> Points where adjacent units maintain physical contact and coordination.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Defensive Planning Process -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
          <!-- Intelligence Preparation -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">
              <i class="fas fa-search" style="margin-right: 8px; color: #10b981; font-size: 14px;"></i>
              Intelligence Preparation of the Battlefield
            </h4>
            <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">IPB Process</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Systematic analysis of enemy, terrain, weather, and civil considerations in a specific area of operations.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Define Battlefield:</strong> Identify area of interest and influence</li>
                  <li style="margin-bottom: 4px;"><strong>Describe Effects:</strong> Analyze terrain and weather impacts</li>
                  <li style="margin-bottom: 4px;"><strong>Evaluate Threat:</strong> Determine enemy capabilities and doctrine</li>
                  <li><strong>Determine COAs:</strong> Develop enemy courses of action</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.3);">
              <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Defensive Applications</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Avenues of Approach:</strong> Identify enemy approach routes<br>
                  <strong>Key Terrain:</strong> Determine critical defensive terrain<br>
                  <strong>Obstacles:</strong> Analyze natural and artificial barriers
                </p>
              </div>
            </div>
          </div>

          <!-- Course of Action Development -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">
              <i class="fas fa-route" style="margin-right: 8px; color: #f59e0b; font-size: 14px;"></i>
              Defensive Course of Action Development
            </h4>
            <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 8px 0;">COA Development Steps</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Systematic process to develop viable defensive courses of action that accomplish the mission.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Analyze Relative Combat Power:</strong> Compare friendly and enemy forces</li>
                  <li style="margin-bottom: 4px;"><strong>Generate Options:</strong> Develop multiple defensive approaches</li>
                  <li style="margin-bottom: 4px;"><strong>Array Forces:</strong> Position units for optimal defensive effect</li>
                  <li><strong>Develop Concept:</strong> Create detailed execution concept</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(245, 158, 11, 0.3);">
              <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">COA Considerations</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Feasibility:</strong> Can the mission be accomplished<br>
                  <strong>Acceptability:</strong> Risk versus gain analysis<br>
                  <strong>Suitability:</strong> Solves the tactical problem
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Combined Arms Defensive Integration -->
        <div style="margin-bottom:20px; padding:16px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border:1px solid #334155; border-radius:12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
          <h4 style="font-size:16px; font-weight:700; color:#60a5fa; margin:0 0 16px 0; display:flex; align-items:center; border-bottom:2px solid rgba(96, 165, 250, 0.3); padding-bottom:8px;">
            <i class="fas fa-cogs" style="margin-right:10px; color:#60a5fa; font-size:16px;"></i>
            Combined Arms Defensive Integration
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="background: rgba(37, 99, 235, 0.1); padding:14px; border-radius:8px; border:1px solid rgba(37, 99, 235, 0.3);">
              <h5 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Infantry Integration</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 8px 0;"><strong>Close Combat:</strong> Infantry provides the capability to close with and destroy enemy forces in close combat, particularly in restrictive terrain.</p>
                <p style="margin:0 0 8px 0;"><strong>Terrain Control:</strong> Infantry can occupy and control key terrain that vehicles cannot access, providing depth to the defense.</p>
                <p style="margin:0;"><strong>Urban Operations:</strong> Infantry excels in urban defensive operations where buildings and structures provide natural defensive positions.</p>
              </div>
            </div>
            <div style="background: rgba(16, 185, 129, 0.1); padding:14px; border-radius:8px; border:1px solid rgba(16, 185, 129, 0.3);">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 10px 0;">Armor Integration</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 8px 0;"><strong>Mobile Defense:</strong> Armor provides the mobility and firepower necessary for mobile defensive operations and counterattacks.</p>
                <p style="margin:0 0 8px 0;"><strong>Anti-Armor:</strong> Tank systems provide long-range anti-armor capability to defeat enemy armored formations.</p>
                <p style="margin:0;"><strong>Shock Action:</strong> Armor delivers decisive shock action in counterattacks to destroy penetrating enemy forces.</p>
              </div>
            </div>
          </div>
          <div style="margin-top:12px; display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="background: rgba(139, 92, 246, 0.1); padding:14px; border-radius:8px; border:1px solid rgba(139, 92, 246, 0.3);">
              <h5 style="font-weight:600; color:#c4b5fd; font-size:14px; margin:0 0 10px 0;">Artillery Integration</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 8px 0;"><strong>Fire Support:</strong> Artillery provides responsive indirect fire support to disrupt enemy formations and support defensive operations.</p>
                <p style="margin:0 0 8px 0;"><strong>Counterfire:</strong> Counter-battery operations neutralize enemy indirect fire systems that threaten defensive positions.</p>
                <p style="margin:0;"><strong>Interdiction:</strong> Deep fires interdict enemy reserves and logistics to prevent reinforcement of attacking forces.</p>
              </div>
            </div>
            <div style="background: rgba(245, 158, 11, 0.1); padding:14px; border-radius:8px; border:1px solid rgba(245, 158, 11, 0.3);">
              <h5 style="font-weight:600; color:#fbbf24; font-size:14px; margin:0 0 10px 0;">Engineer Integration</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 8px 0;"><strong>Obstacle Construction:</strong> Engineers construct and emplace obstacles to channel enemy forces into engagement areas.</p>
                <p style="margin:0 0 8px 0;"><strong>Position Preparation:</strong> Engineers improve defensive positions with fighting positions, protective construction, and camouflage.</p>
                <p style="margin:0;"><strong>Mobility Support:</strong> Engineers maintain friendly mobility while denying enemy mobility through obstacle operations.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Defensive Sustainment Operations -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px;">
          <!-- Logistics in Defense -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(139, 92, 246, 0.3); padding-bottom: 6px;">
              <i class="fas fa-truck" style="margin-right: 8px; color: #8b5cf6; font-size: 14px;"></i>
              Defensive Logistics Operations
            </h4>
            <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Sustainment Requirements</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Defensive operations require sustained logistics support to maintain combat effectiveness throughout extended operations.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Ammunition:</strong> High consumption rates for defensive fires</li>
                  <li style="margin-bottom: 4px;"><strong>Fuel:</strong> Support for mobile defensive operations</li>
                  <li style="margin-bottom: 4px;"><strong>Water:</strong> Extended operations in prepared positions</li>
                  <li><strong>Medical:</strong> Casualty evacuation and treatment</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(139, 92, 246, 0.3);">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Distribution Methods</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Forward Arming:</strong> Pre-positioned supplies<br>
                  <strong>Supply Routes:</strong> Protected logistics corridors<br>
                  <strong>Emergency Resupply:</strong> Aerial delivery methods
                </p>
              </div>
            </div>
          </div>

          <!-- Medical Support -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 16px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            <h4 style="font-size: 14px; font-weight: 700; color: white; margin: 0 0 12px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">
              <i class="fas fa-medkit" style="margin-right: 8px; color: #dc2626; font-size: 14px;"></i>
              Medical Support in Defense
            </h4>
            <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 12px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 12px;">
              <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Medical Operations</h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;">Medical support in defensive operations focuses on rapid treatment and evacuation of casualties while maintaining unit strength.</p>
                <ul style="margin: 0; padding-left: 12px;">
                  <li style="margin-bottom: 4px;"><strong>Casualty Collection:</strong> Forward aid stations and collection points</li>
                  <li style="margin-bottom: 4px;"><strong>Treatment:</strong> Immediate and delayed medical care</li>
                  <li style="margin-bottom: 4px;"><strong>Evacuation:</strong> Ground and air medical evacuation</li>
                  <li><strong>Return to Duty:</strong> Rapid return of lightly wounded personnel</li>
                </ul>
              </div>
            </div>
            <div style="background: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid rgba(220, 38, 38, 0.3);">
              <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Medical Planning</h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0;">
                  <strong>Casualty Estimates:</strong> Plan for expected losses<br>
                  <strong>Evacuation Routes:</strong> Protected medical corridors<br>
                  <strong>Mass Casualty:</strong> Surge capability planning
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Risk Management in Defensive Operations -->
        <div style="margin-bottom:20px; padding:16px; background: linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%); border:1px solid rgba(220, 38, 38, 0.3); border-radius:12px;">
          <h4 style="font-size:14px; font-weight:600; color:#fca5a5; margin:0 0 12px 0; display:flex; align-items:center;">
            <i class="fas fa-exclamation-triangle" style="margin-right:8px; color:#fca5a5; font-size:12px;"></i>
            Risk Management in Defensive Operations
          </h4>
          <div style="color:#fecaca; font-size:12px; line-height:1.4;">
            <p style="margin:0 0 8px 0;"><strong>Fratricide Prevention:</strong> Clear fire control measures, positive target identification, and continuous communication between defensive elements to prevent friendly fire incidents.</p>
            <p style="margin:0 0 8px 0;"><strong>Position Compromise:</strong> Operational security measures, deception operations, and alternate positions to prevent enemy detection and targeting of defensive positions.</p>
            <p style="margin:0 0 8px 0;"><strong>Counterattack Risks:</strong> Proper reconnaissance, security measures, and contingency planning to address unexpected enemy reactions to defensive operations.</p>
            <p style="margin:0;"><strong>Sustainment Vulnerabilities:</strong> Protection of supply routes, redundant logistics systems, and emergency resupply procedures to maintain defensive capability.</p>
          </div>
        </div>

        <!-- Transition from Defense -->
        <div style="margin-bottom:20px; padding:16px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border:1px solid #334155; border-radius:12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
          <h4 style="font-size:16px; font-weight:700; color:#60a5fa; margin:0 0 16px 0; display:flex; align-items:center; border-bottom:2px solid rgba(96, 165, 250, 0.3); padding-bottom:8px;">
            <i class="fas fa-exchange-alt" style="margin-right:10px; color:#60a5fa; font-size:16px;"></i>
            Transition from Defensive Operations
          </h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="background: rgba(16, 185, 129, 0.1); padding:14px; border-radius:8px; border:1px solid rgba(16, 185, 129, 0.3);">
              <h5 style="font-weight:600; color:#6ee7b7; font-size:14px; margin:0 0 10px 0;">Transition to Offense</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 8px 0;"><strong>Exploitation:</strong> Capitalize on successful defensive operations by transitioning to offensive operations to exploit enemy weaknesses.</p>
                <p style="margin:0 0 8px 0;"><strong>Counterattack:</strong> Launch immediate counterattacks to destroy enemy forces that have been weakened by defensive fires.</p>
                <p style="margin:0;"><strong>Pursuit:</strong> Pursue withdrawing enemy forces to prevent reorganization and continue the destruction of enemy capabilities.</p>
              </div>
            </div>
            <div style="background: rgba(37, 99, 235, 0.1); padding:14px; border-radius:8px; border:1px solid rgba(37, 99, 235, 0.3);">
              <h5 style="font-weight:600; color:#93c5fd; font-size:14px; margin:0 0 10px 0;">Transition to Stability</h5>
              <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
                <p style="margin:0 0 8px 0;"><strong>Area Security:</strong> Transition to stability operations to secure areas and protect civilian populations after successful defense.</p>
                <p style="margin:0 0 8px 0;"><strong>Civil Support:</strong> Provide support to civil authorities and humanitarian organizations in areas secured through defensive operations.</p>
                <p style="margin:0;"><strong>Reconstruction:</strong> Support infrastructure reconstruction and restoration of essential services in defended areas.</p>
              </div>
            </div>
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
              <p style="margin:0 0 4px 0;"><strong>FM 3-0:</strong> Operations - Unified Land Operations doctrine and defensive operations integration</p>
              <p style="margin:0 0 4px 0;"><strong>ADP 3-0:</strong> Operations - Foundational principles of defensive operations and combined arms integration</p>
              <p style="margin:0 0 4px 0;"><strong>FM 7-8:</strong> Infantry Rifle Platoon and Squad - Small unit defensive techniques and procedures</p>
              <p style="margin:0;"><strong>ATP 3-21.8:</strong> Infantry Platoon and Squad - Detailed defensive tactics and battle drills</p>
            </div>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 4px 0;"><strong>JP 3-0:</strong> Joint Operations - Joint defensive operations and multi-domain coordination</p>
              <p style="margin:0 0 4px 0;"><strong>FM 3-90:</strong> Tactics - Comprehensive defensive operations doctrine and techniques</p>
              <p style="margin:0 0 4px 0;"><strong>ATP 3-90.1:</strong> Armor and Mechanized Infantry Company Team - Mechanized defensive operations</p>
              <p style="margin:0;"><strong>FM 6-0:</strong> Commander and Staff Organization and Operations - Defensive planning and decision-making</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  initialize(){
    console.log('✅ Defensive Operations Detailed Analysis module initialized');
    return true;
  },
  cleanup(){
    console.log('🧹 Defensive Operations Detailed Analysis module cleaned up');
  }
};

export default defensiveOperationsDetailedAnalysisTacticsModule;
