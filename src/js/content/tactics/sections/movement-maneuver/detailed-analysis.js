/** Tactics: Movement & Maneuver - Detailed Analysis (Blue theme) */
export const movementManeuverDetailedAnalysisTacticsModule = {
  id: 'movement-maneuver-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,
  _handlers: [],
  _styleId: 'mm-detailed-styles',
  _lsKey(prefix){ return `mm-detailed-${prefix}`; },

  getContent() {
    return `
      <div id="mm-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-route" style="margin-right:8px; color:#60a5fa; font-size:16px;"></i>
            Detailed Analysis
          </h3>
        </div>

        <!-- Movement & Maneuver Doctrinal Content -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Foundational Movement & Maneuver Doctrine -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 8px;">
              <i class="fas fa-compass" style="margin-right: 10px; color: #3b82f6; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
              Foundational Movement & Maneuver Doctrine
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Definition & Core Principles</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 12px 0;">
                    Movement and maneuver is the related tasks and systems that move and employ forces to achieve a position of relative advantage over the enemy and other threats. Movement is the employment of forces in the operational area through movement in combination with fires to achieve a position of advantage in respect to the enemy.
                  </p>
                  <p style="margin: 0;">
                    Maneuver is the employment of forces in the operational area through movement in combination with fires to achieve a position of advantage in respect to the enemy. Maneuver places the enemy in a position of disadvantage through the flexible application of combat power.
                  </p>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #3b82f6; margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Fundamental Characteristics</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <ul style="margin: 0; padding-left: 16px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">Positioning:</strong> Achieving relative advantage through tactical positioning</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">Flexibility:</strong> Adaptive employment of combat power</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">Integration:</strong> Combined movement with fires and other warfighting functions</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">Tempo:</strong> Speed and timing of tactical actions</li>
                    <li><strong style="color: #93c5fd;">Surprise:</strong> Unexpected employment to achieve tactical advantage</li>
                  </ul>
                </div>
              </div>
              <div style="background: rgba(37, 99, 235, 0.1); padding: 14px; border-radius: 8px; border: 1px solid rgba(37, 99, 235, 0.3);">
                <h5 style="font-weight: 700; color: #93c5fd; font-size: 13px; margin: 0 0 10px 0;">Doctrinal Foundation</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.5;">
                  <p style="margin: 0;">
                    <strong style="color: #93c5fd;">FM 3-0:</strong> Operations - Unified Land Operations doctrine<br>
                    <strong style="color: #93c5fd;">ADP 3-0:</strong> Operations - Foundational operations principles<br>
                    <strong style="color: #93c5fd;">FM 3-90:</strong> Offense and Defense - Tactical movement doctrine
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Types of Movement Operations -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(22, 163, 74, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(22, 163, 74, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(22, 163, 74, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(22, 163, 74, 0.3); padding-bottom: 8px;">
              <i class="fas fa-arrows-alt" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(22, 163, 74, 0.5);"></i>
              Types of Movement Operations
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(22, 163, 74, 0.15) 0%, rgba(22, 163, 74, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(22, 163, 74, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(22, 163, 74, 0.3); padding-bottom: 6px;">Administrative Movement</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;">Movement of forces that is not part of a tactical operation and is conducted with minimal security measures. Used for repositioning, logistics, and non-tactical relocations.</p>
                  <p style="margin: 0; font-style: italic; color: #d1d5db;">Characteristics: Speed, efficiency, minimal security, planned routes</p>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, rgba(22, 163, 74, 0.15) 0%, rgba(22, 163, 74, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(22, 163, 74, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(22, 163, 74, 0.3); padding-bottom: 6px;">Tactical Movement</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;">Movement of forces as part of a tactical operation with appropriate security measures and tactical considerations. Conducted in areas where enemy contact is possible or expected.</p>
                  <p style="margin: 0; font-style: italic; color: #d1d5db;">Characteristics: Security, flexibility, tactical formations, enemy considerations</p>
                </div>
              </div>
              <div style="background: rgba(22, 163, 74, 0.1); padding: 14px; border-radius: 8px; border: 1px solid rgba(22, 163, 74, 0.3);">
                <h5 style="font-weight: 700; color: #6ee7b7; font-size: 13px; margin: 0 0 10px 0;">Movement Techniques</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.5;">
                  <p style="margin: 0;">
                    <strong style="color: #6ee7b7;">Traveling:</strong> Fastest, least secure<br>
                    <strong style="color: #6ee7b7;">Traveling Overwatch:</strong> Moderate speed and security<br>
                    <strong style="color: #6ee7b7;">Bounding Overwatch:</strong> Slowest, most secure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Row -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Maneuver Operations -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 8px;">
              <i class="fas fa-chess-knight" style="margin-right: 10px; color: #ef4444; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
              Maneuver Operations
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Offensive Maneuver</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Envelopment:</strong> Avoiding enemy strength, attacking weakness</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Turning Movement:</strong> Forcing enemy abandonment of positions</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Frontal Attack:</strong> Direct assault on enemy positions</p>
                  <p style="margin: 0;"><strong style="color: #fca5a5;">Penetration:</strong> Breaking through enemy lines</p>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Defensive Maneuver</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Mobile Defense:</strong> Trading space for time and advantage</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Area Defense:</strong> Holding key terrain and positions</p>
                  <p style="margin: 0;"><strong style="color: #fca5a5;">Retrograde:</strong> Organized withdrawal under pressure</p>
                </div>
              </div>
              <div style="background: rgba(220, 38, 38, 0.1); padding: 14px; border-radius: 8px; border: 1px solid rgba(220, 38, 38, 0.3);">
                <h5 style="font-weight: 700; color: #fca5a5; font-size: 13px; margin: 0 0 10px 0;">Maneuver Principles</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.5;">
                  <p style="margin: 0;">
                    <strong style="color: #fca5a5;">Surprise:</strong> Unexpected action<br>
                    <strong style="color: #fca5a5;">Concentration:</strong> Mass at decisive point<br>
                    <strong style="color: #fca5a5;">Flexibility:</strong> Adaptive execution
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Planning Considerations -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(139, 92, 246, 0.3); padding-bottom: 8px;">
              <i class="fas fa-map-marked-alt" style="margin-right: 10px; color: #8b5cf6; font-size: 18px; text-shadow: 0 0 12px rgba(139, 92, 246, 0.5);"></i>
              Planning Considerations
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(139, 92, 246, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #c4b5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(139, 92, 246, 0.3); padding-bottom: 6px;">METT-TC Analysis</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;"><strong style="color: #c4b5fd;">Mission:</strong> Purpose and intent of movement operations</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #c4b5fd;">Enemy:</strong> Threat capabilities and likely courses of action</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #c4b5fd;">Terrain:</strong> Ground conditions affecting movement</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #c4b5fd;">Troops:</strong> Available forces and capabilities</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #c4b5fd;">Time:</strong> Available planning and execution time</p>
                  <p style="margin: 0;"><strong style="color: #c4b5fd;">Civilians:</strong> Population considerations and constraints</p>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
                <h5 style="font-weight: 700; color: #c4b5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(139, 92, 246, 0.3); padding-bottom: 6px;">Key Planning Factors</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <ul style="margin: 0; padding-left: 16px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #c4b5fd;">Routes:</strong> Primary, alternate, and contingency</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #c4b5fd;">Security:</strong> Protection during movement</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #c4b5fd;">Control:</strong> Command and coordination measures</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #c4b5fd;">Logistics:</strong> Sustainment during movement</li>
                    <li><strong style="color: #c4b5fd;">Communications:</strong> Maintaining connectivity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Third Row -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Coordination and Synchronization -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(6, 182, 212, 0.3); padding-bottom: 8px;">
              <i class="fas fa-sync-alt" style="margin-right: 10px; color: #06b6d4; font-size: 18px; text-shadow: 0 0 12px rgba(6, 182, 212, 0.5);"></i>
              Coordination and Synchronization
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(6, 182, 212, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #67e8f9; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(6, 182, 212, 0.3); padding-bottom: 6px;">Warfighting Functions Integration</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;"><strong style="color: #67e8f9;">Fires:</strong> Supporting and enabling movement through suppression</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #67e8f9;">Intelligence:</strong> Providing situational awareness and threat assessment</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #67e8f9;">Protection:</strong> Ensuring force security during movement</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #67e8f9;">Sustainment:</strong> Maintaining logistics support</p>
                  <p style="margin: 0;"><strong style="color: #67e8f9;">Mission Command:</strong> Exercising command and control</p>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(6, 182, 212, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #67e8f9; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(6, 182, 212, 0.3); padding-bottom: 6px;">Control Measures</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;"><strong style="color: #67e8f9;">Boundaries:</strong> Defining areas of responsibility</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #67e8f9;">Phase Lines:</strong> Controlling movement progression</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #67e8f9;">Checkpoints:</strong> Navigation and coordination points</p>
                  <p style="margin: 0;"><strong style="color: #67e8f9;">Contact Points:</strong> Inter-unit coordination locations</p>
                </div>
              </div>
              <div style="background: rgba(6, 182, 212, 0.1); padding: 14px; border-radius: 8px; border: 1px solid rgba(6, 182, 212, 0.3);">
                <h5 style="font-weight: 700; color: #67e8f9; font-size: 13px; margin: 0 0 10px 0;">Synchronization Matrix</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.5;">
                  <p style="margin: 0;">
                    <strong style="color: #67e8f9;">Time:</strong> Sequencing of actions<br>
                    <strong style="color: #67e8f9;">Space:</strong> Geographic coordination<br>
                    <strong style="color: #67e8f9;">Purpose:</strong> Unified objectives
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contemporary Challenges -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
              <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
              Contemporary Challenges
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Multi-Domain Operations</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Land Domain:</strong> Traditional ground movement and maneuver</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Air Domain:</strong> Air mobility and vertical maneuver</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Maritime:</strong> Amphibious and riverine operations</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Space:</strong> Space-based navigation and communications</p>
                  <p style="margin: 0;"><strong style="color: #fbbf24;">Cyberspace:</strong> Digital movement and information maneuver</p>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Modern Threats</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Unmanned Systems:</strong> Drones and autonomous vehicles</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Electronic Warfare:</strong> Communications and navigation disruption</p>
                  <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Precision Fires:</strong> Long-range precision strike capabilities</p>
                  <p style="margin: 0;"><strong style="color: #fbbf24;">Urban Terrain:</strong> Complex urban operational environments</p>
                </div>
              </div>
              <div style="background: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                <h5 style="font-weight: 700; color: #fbbf24; font-size: 13px; margin: 0 0 10px 0;">Adaptive Solutions</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.5;">
                  <p style="margin: 0;">
                    <strong style="color: #fbbf24;">Dispersion:</strong> Reduced signatures<br>
                    <strong style="color: #fbbf24;">Speed:</strong> Rapid movement<br>
                    <strong style="color: #fbbf24;">Deception:</strong> Misleading enemy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Doctrinal References Section -->
        <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
          <h4 style="color: #f8fafc; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center;">
            <i class="fas fa-book" style="margin-right: 12px; color: #0891b2; font-size: 16px;"></i>
            Movement & Maneuver Doctrinal References
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 20px;">

            <!-- Army Doctrine Publications -->
            <div style="background: rgba(8, 145, 178, 0.1); border: 1px solid rgba(8, 145, 178, 0.3); border-radius: 8px; padding: 20px;">
              <h5 style="color: #22d3ee; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                <i class="fas fa-book-open" style="margin-right: 8px;"></i>
                Army Doctrine Publications (ADP)
              </h5>
              <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #a5f3fc;">ADP 3-0:</strong> Operations - Unified Land Operations and movement principles</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #a5f3fc;">ADP 3-90:</strong> Offense and Defense - Fundamental movement and maneuver concepts</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #a5f3fc;">ADP 5-0:</strong> The Operations Process - Planning movement operations</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #a5f3fc;">ADP 6-0:</strong> Mission Command - Command and control of movement</p>
                <p style="margin: 0;"><strong style="color: #a5f3fc;">ADP 4-0:</strong> Sustainment - Logistics support for movement operations</p>
              </div>
            </div>

            <!-- Field Manuals -->
            <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px; padding: 20px;">
              <h5 style="color: #34d399; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
                Army Field Manuals (FM)
              </h5>
              <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">FM 3-0:</strong> Operations - Comprehensive movement and maneuver doctrine</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">FM 3-90:</strong> Offense and Defense - Detailed movement techniques and procedures</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">FM 3-21.8:</strong> The Infantry Rifle Platoon and Squad - Small unit movement</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">FM 3-20.96:</strong> Cavalry Squadron - Reconnaissance and security movement</p>
                <p style="margin: 0;"><strong style="color: #6ee7b7;">FM 3-90.1:</strong> Offense and Defense Volume 1 - Movement fundamentals</p>
              </div>
            </div>

            <!-- Joint Publications -->
            <div style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 8px; padding: 20px;">
              <h5 style="color: #a78bfa; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
                <i class="fas fa-globe" style="margin-right: 8px;"></i>
                Joint Publications (JP)
              </h5>
              <div style="color: #e2e8f0; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #c4b5fd;">JP 3-0:</strong> Joint Operations - Multi-service movement coordination</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #c4b5fd;">JP 3-31:</strong> Command and Control for Joint Land Operations</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #c4b5fd;">JP 3-17:</strong> Air Mobility Operations - Joint movement capabilities</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #c4b5fd;">JP 3-02:</strong> Amphibious Operations - Maritime movement operations</p>
                <p style="margin: 0;"><strong style="color: #c4b5fd;">JP 4-01:</strong> The Defense Transportation System - Strategic movement</p>
              </div>
            </div>
          </div>

          <!-- Integration Framework -->
          <div style="background: linear-gradient(135deg, rgba(8, 145, 178, 0.15) 0%, rgba(8, 145, 178, 0.08) 100%); padding: 20px; border-radius: 10px; border: 1px solid rgba(8, 145, 178, 0.4);">
            <h5 style="color: #22d3ee; font-size: 16px; font-weight: 600; margin: 0 0 16px 0;">
              <i class="fas fa-puzzle-piece" style="margin-right: 8px;"></i>
              Movement & Maneuver Doctrinal Integration Framework
            </h5>
            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
              <p style="margin: 0 0 12px 0;"><strong style="color: #22d3ee;">Foundational Integration:</strong> Movement and maneuver doctrine integrates across all echelons from theater-level strategic movement to squad-level tactical maneuver, providing comprehensive guidance for positioning forces to achieve relative advantage over enemies and threats.</p>
              <p style="margin: 0 0 12px 0;"><strong style="color: #22d3ee;">Warfighting Functions Synchronization:</strong> Movement and maneuver operations require synchronized integration with fires, intelligence, protection, sustainment, and mission command to achieve tactical success and operational objectives.</p>
              <p style="margin: 0 0 12px 0;"><strong style="color: #22d3ee;">Multi-Domain Coordination:</strong> Contemporary movement and maneuver operations integrate land, air, maritime, space, and cyberspace domains to achieve positional advantage and tactical superiority in complex operational environments.</p>
              <p style="margin: 0;"><strong style="color: #22d3ee;">Adaptive Implementation:</strong> Movement and maneuver doctrine provides flexible frameworks that adapt to changing threat environments, technological advances, and operational requirements while maintaining fundamental tactical principles.</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  initialize(){
    console.log('✅ Movement & Maneuver Detailed Analysis module initialized');
    return true;
  },
  cleanup(){
    console.log('🧹 Movement & Maneuver Detailed Analysis module cleaned up');
  }
};
export default movementManeuverDetailedAnalysisTacticsModule;
