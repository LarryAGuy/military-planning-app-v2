/**
 * Squadron-Level Offensive Operations Practical Examples
 * Large Scale Combat Operations (LSCO) scenarios for tactical squadron command
 * European Campaign Context: NATO Article 5 Response Operations - 2nd Cavalry Squadron, 3rd Cavalry Regiment
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 */

export function getSquadronTacticsExample(){
  return `
    <div style="padding: 20px; background-color: #0f172a; min-height: 100vh;">
      <!-- Squadron Command Header -->
      <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 24px; border-radius: 12px; margin-bottom: 24px; border: 2px solid #475569;">
        <div style="display: flex; align-items: center; margin-bottom: 16px;">
          <i class="fas fa-horse-head" style="font-size: 28px; color: #dc2626; margin-right: 16px;"></i>
          <div>
            <h1 style="color: #f1f5f9; font-size: 24px; font-weight: 700; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              SQUADRON-LEVEL OFFENSIVE OPERATIONS
            </h1>
            <p style="color: #cbd5e1; font-size: 14px; margin: 4px 0 0 0; font-weight: 500;">
              2nd Cavalry Squadron, 3rd Cavalry Regiment • "Brave Rifles" • 1st Armored Division
            </p>
          </div>
        </div>

        <div style="background-color: rgba(220, 38, 38, 0.1); padding: 12px; border-radius: 8px; border-left: 4px solid #dc2626;">
          <p style="color: #e2e8f0; font-size: 13px; line-height: 1.5; margin: 0;">
            <strong>Squadron Command Authority:</strong> Lieutenant Colonel commanding 520 personnel across 4 Cavalry Troops
            and supporting elements. Conducting reconnaissance and security operations as part of 1st Armored Division
            advance in NATO Article 5 response operations.
          </p>
        </div>
      </div>

      <!-- Squadron Mission and Concept -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #dc2626; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-bullseye" style="margin-right: 12px; color: #dc2626;"></i>
          Squadron Mission and Tactical Concept
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(220, 38, 38, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #dc2626;">
            <h3 style="color: #fca5a5; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Squadron Mission Statement</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Mission:</strong> 2nd Cavalry Squadron conducts reconnaissance and security operations to
                develop the situation, provide early warning, and enable 1st Armored Division maneuver.
              </p>
              <p style="margin: 0 0 10px 0;">
                <strong>Commander's Intent:</strong> Maintain contact with enemy forces, provide continuous intelligence,
                and preserve combat power through aggressive reconnaissance and security operations.
              </p>
              <p style="margin: 0;">
                <strong>End State:</strong> Enemy situation developed, division maneuver enabled, squadron positioned
                for follow-on operations.
              </p>
            </div>
          </div>

          <div style="background-color: rgba(220, 38, 38, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #dc2626;">
            <h3 style="color: #fca5a5; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Squadron Operational Environment</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Area of Operations:</strong> 25km frontage, 15km depth
              </p>
              <p style="margin: 0 0 10px 0;">
                <strong>Enemy Situation:</strong> Enemy reconnaissance battalion with
                BRDM-2 scouts, BMP-2 infantry fighting vehicles
              </p>
              <p style="margin: 0 0 10px 0;">
                <strong>Terrain:</strong> Open terrain with scattered woods,
                multiple river crossings, key observation points
              </p>
              <p style="margin: 0 0 10px 0;">
                <strong>Weather:</strong> Clear conditions, excellent visibility,
                firm ground conditions
              </p>
              <p style="margin: 0;">
                <strong>Timeline:</strong> D+67 H-Hour to H+12 (Squadron Operations)
              </p>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(220, 38, 38, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #dc2626; margin-bottom: 16px;">
          <h3 style="color: #fca5a5; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Squadron Tactical Scheme</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px;">
            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">A Troop</h4>
              <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Mission:</strong> Zone reconnaissance</p>
                <p style="margin: 0 0 6px 0;"><strong>Assets:</strong> 8 M3A3 Bradleys</p>
                <p style="margin: 0 0 6px 0;"><strong>Task:</strong> Northern sector</p>
                <p style="margin: 0;"><strong>Strength:</strong> 130 personnel</p>
              </div>
            </div>

            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">B Troop</h4>
              <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Mission:</strong> Zone reconnaissance</p>
                <p style="margin: 0 0 6px 0;"><strong>Assets:</strong> 8 M3A3 Bradleys</p>
                <p style="margin: 0 0 6px 0;"><strong>Task:</strong> Central sector</p>
                <p style="margin: 0;"><strong>Strength:</strong> 130 personnel</p>
              </div>
            </div>

            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">C Troop</h4>
              <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Mission:</strong> Zone reconnaissance</p>
                <p style="margin: 0 0 6px 0;"><strong>Assets:</strong> 8 M3A3 Bradleys</p>
                <p style="margin: 0 0 6px 0;"><strong>Task:</strong> Southern sector</p>
                <p style="margin: 0;"><strong>Strength:</strong> 130 personnel</p>
              </div>
            </div>

            <div style="background-color: rgba(220, 38, 38, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">D Troop</h4>
              <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Mission:</strong> Tank troop</p>
                <p style="margin: 0 0 6px 0;"><strong>Assets:</strong> 14 M1A2 Abrams</p>
                <p style="margin: 0 0 6px 0;"><strong>Task:</strong> Direct fire support</p>
                <p style="margin: 0;"><strong>Strength:</strong> 130 personnel</p>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #dc2626;">
          <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron Success Criteria</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Intelligence:</strong> Develop enemy situation within 6 hours<br>
            • <strong>Contact:</strong> Maintain contact with enemy forces<br>
            • <strong>Security:</strong> Provide early warning to division<br>
            • <strong>Preservation:</strong> Maintain 90% combat effectiveness
          </div>
        </div>
      </div>

      <!-- Squadron Organization -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #10b981; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-sitemap" style="margin-right: 12px; color: #10b981;"></i>
          Squadron Organization and Assets
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(16, 185, 129, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #10b981;">
            <h3 style="color: #6ee7b7; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Squadron Headquarters</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;"><strong>Command Structure:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Squadron Commander:</strong> Lieutenant Colonel</li>
                <li><strong>Executive Officer:</strong> Major</li>
                <li><strong>Command Sergeant Major:</strong> CSM</li>
                <li><strong>S-1 (Personnel):</strong> Captain</li>
                <li><strong>S-2 (Intelligence):</strong> Captain</li>
                <li><strong>S-3 (Operations):</strong> Major</li>
                <li><strong>S-4 (Logistics):</strong> Captain</li>
              </ul>
              <p style="margin: 8px 0 0 0;"><strong>HQ Personnel:</strong> 30</p>
            </div>
          </div>

          <div style="background-color: rgba(16, 185, 129, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #10b981;">
            <h3 style="color: #6ee7b7; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Squadron Combat Power</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;"><strong>Primary Equipment:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>M3A3 Bradley CFVs:</strong> 24 cavalry fighting vehicles</li>
                <li><strong>M1A2 Abrams Tanks:</strong> 14 tanks (D Troop)</li>
                <li><strong>M113A3 APCs:</strong> 8 vehicles (support)</li>
                <li><strong>M1114 HMMWVs:</strong> 32 vehicles</li>
                <li><strong>OH-58D Kiowa:</strong> 8 scout helicopters</li>
                <li><strong>Shadow UAV:</strong> 4 unmanned aircraft</li>
              </ul>
              <p style="margin: 8px 0 0 0;"><strong>Total Vehicles:</strong> 90</p>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #10b981; margin-bottom: 16px;">
          <h3 style="color: #6ee7b7; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Troop Organization</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #a7f3d0; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Cavalry Troop Structure</h4>
              <div style="color: #d1fae5; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li><strong>Troop Commander:</strong> Captain</li>
                  <li><strong>Executive Officer:</strong> First Lieutenant</li>
                  <li><strong>First Sergeant:</strong> 1SG</li>
                  <li><strong>Scout Platoons:</strong> 2 platoons (4 CFVs each)</li>
                  <li><strong>Troop Headquarters:</strong> Command and support</li>
                  <li><strong>Total CFVs:</strong> 8 M3A3 Bradleys</li>
                </ul>
              </div>
            </div>

            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #a7f3d0; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Support Elements</h4>
              <div style="color: #d1fae5; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li><strong>Support Troop:</strong> Logistics and maintenance</li>
                  <li><strong>Air Cavalry Troop:</strong> OH-58D helicopters</li>
                  <li><strong>Intelligence Section:</strong> Analysis and collection</li>
                  <li><strong>Communications Section:</strong> Signal support</li>
                  <li><strong>Medical Section:</strong> Combat medics</li>
                  <li><strong>Maintenance Section:</strong> Field maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #10b981;">
          <h4 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron Combat Capabilities</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Personnel:</strong> 520 soldiers across 4 cavalry troops and support elements<br>
            • <strong>Reconnaissance:</strong> 24 M3A3 Bradley cavalry fighting vehicles<br>
            • <strong>Direct Fire:</strong> 14 M1A2 Abrams tanks and 24mm chain guns<br>
            • <strong>Aviation:</strong> 8 OH-58D scout helicopters and 4 Shadow UAVs<br>
            • <strong>Mobility:</strong> High mobility across varied terrain
          </div>
        </div>
      </div>

      <!-- Squadron Tactical Plan -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #3b82f6; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-chess-board" style="margin-right: 12px; color: #3b82f6;"></i>
          Squadron Tactical Plan and Execution
        </h2>

        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #3b82f6; margin-bottom: 16px;">
          <h3 style="color: #93c5fd; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">Phase I: Zone Reconnaissance (H-Hour to H+4)</h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 12px; border-radius: 6px;">
              <h4 style="color: #bfdbfe; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">H-Hour to H+2: Deployment</h4>
              <div style="color: #dbeafe; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;"><strong>Formation:</strong> Squadron line formation</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>A Troop: Northern reconnaissance zone</li>
                  <li>B Troop: Central reconnaissance zone</li>
                  <li>C Troop: Southern reconnaissance zone</li>
                  <li>D Troop: Squadron reserve and overwatch</li>
                </ul>
                <p style="margin: 8px 0 8px 0;"><strong>Objectives:</strong></p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Deploy to assigned zones</li>
                  <li>Establish observation posts</li>
                  <li>Begin reconnaissance operations</li>
                </ul>
              </div>
            </div>

            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 12px; border-radius: 6px;">
              <h4 style="color: #bfdbfe; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">H+2 to H+4: Reconnaissance</h4>
              <div style="color: #dbeafe; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;"><strong>Intelligence Collection:</strong></p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Named areas of interest surveillance</li>
                  <li>Route reconnaissance operations</li>
                  <li>Enemy force identification</li>
                  <li>Terrain analysis and reporting</li>
                </ul>
                <p style="margin: 8px 0 8px 0;"><strong>Aviation Support:</strong></p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>OH-58D aerial reconnaissance</li>
                  <li>Shadow UAV surveillance</li>
                  <li>Real-time intelligence reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(239, 68, 68, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #ef4444;">
          <h3 style="color: #fca5a5; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">Phase II: Enemy Contact (H+4 to H+8)</h3>

          <div style="background-color: rgba(239, 68, 68, 0.2); padding: 12px; border-radius: 6px;">
            <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Contact Development</h4>
            <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
              <p style="margin: 0 0 8px 0;"><strong>Enemy Contact:</strong></p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                  <p style="margin: 0 0 6px 0;"><strong>H+4: Initial Contact</strong></p>
                  <ul style="margin: 0; padding-left: 16px;">
                    <li>B Troop identifies enemy reconnaissance</li>
                    <li>8 BRDM-2 scout vehicles</li>
                    <li>12 BMP-2 infantry fighting vehicles</li>
                    <li>Estimated company-sized element</li>
                  </ul>
                </div>
                <div>
                  <p style="margin: 0 0 6px 0;"><strong>H+5 to H+8: Development</strong></p>
                  <ul style="margin: 0; padding-left: 16px;">
                    <li>Maintain contact and observe</li>
                    <li>Develop enemy situation</li>
                    <li>Report to division headquarters</li>
                    <li>Coordinate with adjacent units</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(34, 197, 94, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #22c55e;">
          <h3 style="color: #86efac; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">Phase III: Security Operations (H+8 to H+12)</h3>

          <div style="background-color: rgba(34, 197, 94, 0.2); padding: 12px; border-radius: 6px;">
            <h4 style="color: #bbf7d0; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Screen and Guard Operations</h4>
            <div style="color: #dcfce7; font-size: 12px; line-height: 1.4;">
              <p style="margin: 0 0 8px 0;"><strong>Security Tasks:</strong></p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                  <p style="margin: 0 0 6px 0;"><strong>Screening Operations:</strong></p>
                  <ul style="margin: 0; padding-left: 16px;">
                    <li>Establish screen line</li>
                    <li>Provide early warning</li>
                    <li>Maintain enemy contact</li>
                    <li>Report enemy activities</li>
                  </ul>
                </div>
                <div>
                  <p style="margin: 0 0 6px 0;"><strong>Guard Operations:</strong></p>
                  <ul style="margin: 0; padding-left: 16px;">
                    <li>Protect division main body</li>
                    <li>Delay enemy advance</li>
                    <li>Conduct limited attacks</li>
                    <li>Coordinate withdrawal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Squadron Intelligence -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #06b6d4; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-search" style="margin-right: 12px; color: #06b6d4;"></i>
          Squadron Intelligence and Reconnaissance
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(6, 182, 212, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #06b6d4;">
            <h3 style="color: #67e8f9; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Enemy Situation</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Enemy Forces:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Unit:</strong> 2nd Reconnaissance Battalion, 15th Motor Rifle Brigade</li>
                <li><strong>Strength:</strong> 320 personnel</li>
                <li><strong>Equipment:</strong> 20 BRDM-2 scouts, 24 BMP-2 IFVs</li>
                <li><strong>Mission:</strong> Screen for main body advance</li>
                <li><strong>Capabilities:</strong> AT-5 Spandrel missiles, 30mm cannons</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Assessment:</strong> Aggressive reconnaissance force</p>
            </div>
          </div>

          <div style="background-color: rgba(6, 182, 212, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #06b6d4;">
            <h3 style="color: #67e8f9; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Intelligence Collection</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Collection Assets:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Ground Scouts:</strong> 24 M3A3 Bradley CFVs</li>
                <li><strong>Air Cavalry:</strong> 8 OH-58D Kiowa helicopters</li>
                <li><strong>UAV Support:</strong> 4 Shadow unmanned aircraft</li>
                <li><strong>SIGINT:</strong> Communications intercept capability</li>
                <li><strong>HUMINT:</strong> Local population sources</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Coverage:</strong> 25km forward of friendly forces</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(6, 182, 212, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #06b6d4;">
            <h3 style="color: #67e8f9; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Named Areas of Interest</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Priority Intelligence Requirements:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>NAI 1:</strong> Bridge crossing sites</li>
                <li><strong>NAI 2:</strong> Key road intersections</li>
                <li><strong>NAI 3:</strong> Observation posts</li>
                <li><strong>NAI 4:</strong> Assembly areas</li>
                <li><strong>NAI 5:</strong> Supply routes</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Collection Plan:</strong> Continuous surveillance</p>
            </div>
          </div>

          <div style="background-color: rgba(6, 182, 212, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #06b6d4;">
            <h3 style="color: #67e8f9; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Intelligence Products</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Reporting Requirements:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>SALUTE Reports:</strong> Size, activity, location, unit, time, equipment</li>
                <li><strong>SPOT Reports:</strong> Immediate intelligence reports</li>
                <li><strong>Situation Reports:</strong> Periodic updates</li>
                <li><strong>Intelligence Summaries:</strong> Analytical products</li>
                <li><strong>Battle Damage Assessment:</strong> Post-engagement reports</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Dissemination:</strong> Real-time digital transmission</p>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #06b6d4;">
          <h4 style="color: #67e8f9; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron Intelligence Assessment</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Enemy Strength:</strong> Company-sized reconnaissance force identified<br>
            • <strong>Threat Level:</strong> Moderate - modern equipment but limited numbers<br>
            • <strong>Capabilities:</strong> Anti-tank missiles and rapid movement<br>
            • <strong>Vulnerabilities:</strong> Light armor, limited artillery support<br>
            • <strong>Intelligence Gaps:</strong> Main body location and timeline
          </div>
        </div>
      </div>

      <!-- Squadron Fire Support -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #f59e0b; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-crosshairs" style="margin-right: 12px; color: #f59e0b;"></i>
          Squadron Fire Support and Integration
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b;">
            <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Direct Fire Support</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Squadron Weapons Systems:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>M242 25mm Bushmaster:</strong> 24 chain guns (CFVs)</li>
                <li><strong>M256 120mm Smoothbore:</strong> 14 guns (tanks)</li>
                <li><strong>TOW Missiles:</strong> Anti-tank guided missiles</li>
                <li><strong>M240 Machine Guns:</strong> 7.62mm coaxial and pintle</li>
                <li><strong>M2 .50 Caliber:</strong> Heavy machine guns</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Effective Range:</strong> 4,000 meters (tanks)</p>
            </div>
          </div>

          <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b;">
            <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Indirect Fire Support</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Artillery Support:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Division Artillery:</strong> 155mm M109A7 Paladin</li>
                <li><strong>Squadron Mortars:</strong> 120mm M120 mortars</li>
                <li><strong>Naval Gunfire:</strong> Available on call</li>
                <li><strong>Fire Support Teams:</strong> FIST in each troop</li>
                <li><strong>Digital Integration:</strong> AFATDS fire control</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Response Time:</strong> 2-4 minutes for artillery</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b;">
            <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Aviation Fire Support</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Air Support Assets:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>OH-58D Kiowa:</strong> 8 scout helicopters with Hellfire</li>
                <li><strong>AH-64 Apache:</strong> 2 attack helicopters on call</li>
                <li><strong>A-10 Thunderbolt:</strong> Close air support aircraft</li>
                <li><strong>Joint Terminal Attack Controller:</strong> Air support coordination</li>
                <li><strong>Precision Munitions:</strong> Hellfire missiles, 30mm cannon</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Response Time:</strong> 3-8 minutes</p>
            </div>
          </div>

          <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b;">
            <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Electronic Warfare</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>EW Capabilities:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Communications Jamming:</strong> Enemy radio disruption</li>
                <li><strong>Electronic Protection:</strong> Friendly communications security</li>
                <li><strong>Electronic Attack:</strong> Enemy systems disruption</li>
                <li><strong>Electronic Support:</strong> Intelligence collection</li>
                <li><strong>Countermeasures:</strong> Smoke and chaff systems</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Coverage:</strong> Squadron area of operations</p>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #f59e0b;">
          <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron Fire Support Coordination</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Fire Support Officer:</strong> Captain coordinating all fires<br>
            • <strong>Target Acquisition:</strong> Multi-platform intelligence collection<br>
            • <strong>Synchronization:</strong> Integrated with reconnaissance plan<br>
            • <strong>Safety:</strong> Comprehensive fratricide prevention<br>
            • <strong>Effectiveness:</strong> Real-time battle damage assessment
          </div>
        </div>
      </div>

      <!-- Squadron Logistics -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #ec4899; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-truck" style="margin-right: 12px; color: #ec4899;"></i>
          Squadron Logistics and Sustainment
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(236, 72, 153, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #ec4899;">
            <h3 style="color: #f9a8d4; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Supply Requirements</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Daily Consumption (12-hour operation):</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Class I (Food/Water):</strong> 1.6 tons</li>
                <li><strong>Class III (Fuel):</strong> 12 tons (diesel and JP-8)</li>
                <li><strong>Class V (Ammunition):</strong> 8 tons</li>
                <li><strong>Class VIII (Medical):</strong> 0.3 tons</li>
                <li><strong>Class IX (Parts):</strong> 0.8 tons</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Total:</strong> 22.7 tons/12 hours</p>
            </div>
          </div>

          <div style="background-color: rgba(236, 72, 153, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #ec4899;">
            <h3 style="color: #f9a8d4; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Logistics Assets</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Support Troop:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>M1074 PLS Trucks:</strong> 8 vehicles</li>
                <li><strong>M978 HEMTT Tankers:</strong> 4 fuel trucks</li>
                <li><strong>M88A2 Recovery:</strong> 2 recovery vehicles</li>
                <li><strong>M113A3 Ambulances:</strong> 2 medical vehicles</li>
                <li><strong>Maintenance Teams:</strong> Field maintenance capability</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Personnel:</strong> 80 logistics soldiers</p>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #ec4899;">
          <h4 style="color: #f9a8d4; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron Sustainment Operations</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Resupply:</strong> Forward logistics during reconnaissance operations<br>
            • <strong>Maintenance:</strong> Field maintenance and battle damage repair<br>
            • <strong>Medical:</strong> Combat medics and forward aid station<br>
            • <strong>Transportation:</strong> Organic transportation assets<br>
            • <strong>Coordination:</strong> Division support area integration
          </div>
        </div>
      </div>

      <!-- Squadron Command and Control -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #14b8a6; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-satellite-dish" style="margin-right: 12px; color: #14b8a6;"></i>
          Squadron Command and Control
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(20, 184, 166, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #14b8a6;">
            <h3 style="color: #5eead4; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Command Structure</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Squadron Command Post:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Main CP:</strong> M577A3 command vehicle</li>
                <li><strong>Tactical CP:</strong> Mobile command element</li>
                <li><strong>Alternate CP:</strong> Redundant command capability</li>
                <li><strong>Intelligence Section:</strong> S-2 analysis cell</li>
                <li><strong>Fire Support Element:</strong> FIST coordination</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Personnel:</strong> 20 command and control</p>
            </div>
          </div>

          <div style="background-color: rgba(20, 184, 166, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #14b8a6;">
            <h3 style="color: #5eead4; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Communications</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Communication Systems:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>SINCGARS:</strong> Secure tactical radio</li>
                <li><strong>Blue Force Tracker:</strong> Digital situational awareness</li>
                <li><strong>FBCB2:</strong> Force XXI Battle Command</li>
                <li><strong>EPLRS:</strong> Enhanced position location</li>
                <li><strong>SATCOM:</strong> Satellite communications</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Range:</strong> 50km tactical communications</p>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #14b8a6;">
          <h4 style="color: #5eead4; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron Command and Control Assessment</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Command:</strong> Effective command and control throughout operation<br>
            • <strong>Communications:</strong> Redundant systems ensure connectivity<br>
            • <strong>Coordination:</strong> Seamless integration with division and troops<br>
            • <strong>Situational Awareness:</strong> Real-time battlefield information<br>
            • <strong>Decision Making:</strong> Rapid response to intelligence requirements
          </div>
        </div>
      </div>

      <!-- Squadron Timeline -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #ef4444; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-clock" style="margin-right: 12px; color: #ef4444;"></i>
          Squadron Detailed Timeline
        </h2>

        <div style="background-color: rgba(239, 68, 68, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #ef4444; margin-bottom: 16px;">
          <h3 style="color: #fca5a5; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">D+67: Squadron Operations Timeline</h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">H-1 to H-Hour</h4>
              <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>H-1 (0500):</strong> Final preparations</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Vehicle crews complete pre-combat checks</li>
                  <li>Final intelligence briefing</li>
                  <li>Communications checks complete</li>
                  <li>Aviation assets positioned</li>
                </ul>
                <p style="margin: 6px 0 0 0;"><strong>H-30min:</strong> Movement to line of departure</p>
              </div>
            </div>

            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">H-Hour to H+4</h4>
              <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>H-Hour (0600):</strong> Zone reconnaissance</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Squadron deploys to assigned zones</li>
                  <li>Establish observation posts</li>
                  <li>Begin reconnaissance operations</li>
                  <li>Aviation assets conduct aerial reconnaissance</li>
                </ul>
                <p style="margin: 6px 0 0 0;"><strong>H+2:</strong> Initial intelligence reports</p>
              </div>
            </div>

            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">H+4 to H+8</h4>
              <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Enemy Contact:</strong> Reconnaissance development</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>B Troop makes initial enemy contact</li>
                  <li>Enemy reconnaissance battalion identified</li>
                  <li>Maintain contact and observe</li>
                  <li>Report to division headquarters</li>
                </ul>
                <p style="margin: 6px 0 0 0;"><strong>H+6:</strong> Enemy situation developed</p>
              </div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 12px; border-radius: 6px;">
              <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">H+8 to H+12: Security Operations</h4>
              <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;"><strong>Screen and Guard:</strong></p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Establish screen line</li>
                  <li>Provide early warning to division</li>
                  <li>Conduct limited attacks</li>
                  <li>Coordinate with adjacent units</li>
                  <li>Prepare for withdrawal</li>
                </ul>
                <p style="margin: 8px 0 0 0;"><strong>Result:</strong> Division maneuver enabled</p>
              </div>
            </div>

            <div style="background-color: rgba(239, 68, 68, 0.2); padding: 12px; border-radius: 6px;">
              <h4 style="color: #fecaca; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Mission Results</h4>
              <div style="color: #fee2e2; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;"><strong>Mission Accomplishment:</strong></p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Enemy situation developed and reported</li>
                  <li>Division maneuver successfully enabled</li>
                  <li>Squadron casualties: 12 (2.3% of strength)</li>
                  <li>Equipment losses: 2 vehicles damaged</li>
                  <li>Intelligence requirements satisfied</li>
                </ul>
                <p style="margin: 8px 0 0 0;"><strong>Success:</strong> Complete mission accomplishment</p>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #ef4444;">
          <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron Timeline Success Metrics</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>H+2:</strong> Initial intelligence reports (target: H+2) ✓<br>
            • <strong>H+4:</strong> Enemy contact established (target: H+6) ✓<br>
            • <strong>H+6:</strong> Enemy situation developed (target: H+8) ✓<br>
            • <strong>Casualties:</strong> 2.3% losses (target: <10%) ✓
          </div>
        </div>
      </div>

      <!-- Squadron Assessment -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #059669; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-chart-bar" style="margin-right: 12px; color: #059669;"></i>
          Squadron Battle Damage Assessment
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(5, 150, 105, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #059669;">
            <h3 style="color: #34d399; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Friendly Force Assessment</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Squadron Casualties (12-hour operation):</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>KIA:</strong> 3 personnel (0.6% of squadron)</li>
                <li><strong>WIA:</strong> 9 personnel (1.7% of squadron)</li>
                <li><strong>Total Casualties:</strong> 12 (2.3% of squadron)</li>
                <li><strong>Equipment Losses:</strong> 2 vehicles damaged</li>
                <li><strong>Combat Effectiveness:</strong> 97.7% maintained</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Assessment:</strong> Minimal casualties, high combat effectiveness
              </p>
            </div>
          </div>

          <div style="background-color: rgba(5, 150, 105, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #059669;">
            <h3 style="color: #34d399; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Enemy Force Assessment</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Enemy Reconnaissance Battalion:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Personnel:</strong> 48 casualties (15% of battalion)</li>
                <li><strong>Vehicles:</strong> 6 BRDM-2 scouts destroyed</li>
                <li><strong>IFVs:</strong> 4 BMP-2 vehicles destroyed</li>
                <li><strong>Mission Impact:</strong> Reconnaissance capability degraded</li>
                <li><strong>Withdrawal:</strong> Enemy force withdrew</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Assessment:</strong> Enemy reconnaissance mission disrupted
              </p>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #059669;">
          <h4 style="color: #34d399; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Overall Squadron Performance Metrics</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Mission Success Rate:</strong> 100% - All reconnaissance objectives achieved<br>
            • <strong>Intelligence Collection:</strong> 100% - All PIRs satisfied<br>
            • <strong>Casualty Rate:</strong> 2.3% - Well within acceptable limits<br>
            • <strong>Equipment Losses:</strong> 2% - Minimal impact on capability<br>
            • <strong>Timeline:</strong> Ahead of schedule - Enemy contact H+4 vs H+6<br>
            • <strong>Force Preservation:</strong> 97.7% - Squadron ready for follow-on operations
          </div>
        </div>
      </div>

      <!-- Squadron Training and Standards -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #64748b; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-graduation-cap" style="margin-right: 12px; color: #64748b;"></i>
          Squadron Training and Professional Standards
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(100, 116, 139, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #64748b;">
            <h3 style="color: #94a3b8; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Cavalry Training</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Reconnaissance:</strong> Zone and area reconnaissance techniques</li>
                <li><strong>Security Operations:</strong> Screen, guard, and cover operations</li>
                <li><strong>Intelligence Collection:</strong> Multi-platform intelligence gathering</li>
                <li><strong>Communications:</strong> Digital systems and reporting procedures</li>
                <li><strong>Aviation Integration:</strong> Air-ground coordination</li>
                <li><strong>Survival:</strong> Reconnaissance survival skills</li>
              </ul>
            </div>
          </div>

          <div style="background-color: rgba(100, 116, 139, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #64748b;">
            <h3 style="color: #94a3b8; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Professional Excellence</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Individual Standards:</strong> Physical fitness and technical proficiency</li>
                <li><strong>Crew Standards:</strong> Vehicle crew coordination and effectiveness</li>
                <li><strong>Troop Standards:</strong> Small unit reconnaissance proficiency</li>
                <li><strong>Safety Standards:</strong> Risk management in reconnaissance</li>
                <li><strong>Ethical Standards:</strong> Professional military ethics</li>
                <li><strong>Innovation:</strong> Adaptive reconnaissance techniques</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #64748b;">
          <h4 style="color: #94a3b8; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron-Level Excellence Standards</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Readiness:</strong> Maintain 95%+ personnel and equipment readiness<br>
            • <strong>Training:</strong> Conduct realistic reconnaissance training exercises<br>
            • <strong>Proficiency:</strong> Achieve superior ratings in all evaluated areas<br>
            • <strong>Leadership:</strong> Develop competent reconnaissance leaders<br>
            • <strong>Innovation:</strong> Integrate new reconnaissance technologies<br>
            • <strong>Integration:</strong> Train regularly with supported and supporting units
          </div>
        </div>
      </div>

      <!-- Squadron Final Summary -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <div style="background-color: #374151; padding: 16px; border-radius: 8px; border-left: 4px solid #dc2626;">
          <h3 style="color: #fca5a5; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">2nd Cavalry Squadron - Reconnaissance Excellence Summary</h3>
          <div style="color: #d1d5db; font-size: 13px; line-height: 1.5;">
            <p style="margin: 0 0 10px 0;">
              <strong>Reconnaissance Excellence:</strong> The 2nd Cavalry Squadron demonstrated exceptional reconnaissance
              and security capabilities in conducting zone reconnaissance and security operations. The squadron achieved
              complete mission success while maintaining 97.7% combat effectiveness, showcasing the superior training,
              equipment, and leadership that defines modern cavalry operations.
            </p>
            <p style="margin: 0 0 10px 0;">
              <strong>Intelligence Success:</strong> This operation exemplifies the critical role of cavalry squadrons
              in developing the enemy situation and enabling division maneuver. The integration of ground reconnaissance,
              aviation assets, and advanced intelligence systems provided comprehensive battlefield awareness that enabled
              division success while minimizing friendly casualties.
            </p>
            <p style="margin: 0;">
              <strong>Future Readiness:</strong> With minimal losses and enhanced combat experience, the 2nd Cavalry
              Squadron remains ready for follow-on operations, maintaining the 1st Armored Division's reconnaissance
              and security capabilities and contributing to the overall success of NATO Article 5 response operations.
            </p>
          </div>
        </div>
      </div>

      <!-- Squadron Innovation and Future Operations -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #84cc16; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-rocket" style="margin-right: 12px; color: #84cc16;"></i>
          Squadron Innovation and Future Capabilities
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(132, 204, 22, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #84cc16;">
            <h3 style="color: #bef264; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Advanced Reconnaissance Technology</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Sensor Systems:</strong> Advanced thermal and infrared imaging</li>
                <li><strong>Communications:</strong> Secure satellite and tactical networks</li>
                <li><strong>Navigation:</strong> Precision GPS and inertial systems</li>
                <li><strong>Intelligence Systems:</strong> Real-time analysis and reporting</li>
                <li><strong>Unmanned Systems:</strong> UAV and ground robot integration</li>
                <li><strong>Electronic Warfare:</strong> Advanced countermeasures</li>
              </ul>
            </div>
          </div>

          <div style="background-color: rgba(132, 204, 22, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #84cc16;">
            <h3 style="color: #bef264; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Future Reconnaissance Capabilities</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Artificial Intelligence:</strong> Automated target recognition</li>
                <li><strong>Autonomous Systems:</strong> Unmanned reconnaissance platforms</li>
                <li><strong>Advanced Materials:</strong> Stealth and protection technologies</li>
                <li><strong>Cyber Capabilities:</strong> Electronic intelligence collection</li>
                <li><strong>Space Integration:</strong> Satellite-based reconnaissance</li>
                <li><strong>Multi-Domain Operations:</strong> Cross-domain intelligence fusion</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(132, 204, 22, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #84cc16;">
            <h3 style="color: #bef264; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Lessons Learned Integration</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Reconnaissance Techniques:</strong> Multi-platform intelligence collection</li>
                <li><strong>Security Operations:</strong> Effective screen and guard procedures</li>
                <li><strong>Aviation Integration:</strong> Air-ground coordination excellence</li>
                <li><strong>Communications:</strong> Redundant and secure communications</li>
                <li><strong>Survivability:</strong> Force protection in reconnaissance</li>
                <li><strong>Adaptability:</strong> Flexible response to changing situations</li>
              </ul>
            </div>
          </div>

          <div style="background-color: rgba(132, 204, 22, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #84cc16;">
            <h3 style="color: #bef264; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Follow-On Operations Preparation</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Recovery Operations:</strong> Personnel and equipment recovery</li>
                <li><strong>Resupply:</strong> Ammunition, fuel, and supplies</li>
                <li><strong>Maintenance:</strong> Vehicle and equipment maintenance</li>
                <li><strong>Intelligence Update:</strong> Current enemy situation analysis</li>
                <li><strong>Mission Planning:</strong> Next phase reconnaissance planning</li>
                <li><strong>Training Integration:</strong> Lessons learned incorporation</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #84cc16;">
          <h4 style="color: #bef264; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Squadron Innovation Leadership</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Technology Adoption:</strong> Early adopter of new reconnaissance technologies<br>
            • <strong>Doctrine Development:</strong> Contributing to cavalry tactics evolution<br>
            • <strong>Training Innovation:</strong> Advanced simulation and virtual reality<br>
            • <strong>Partnership:</strong> Collaboration with intelligence and technology communities<br>
            • <strong>Future Focus:</strong> Preparing for next-generation reconnaissance warfare<br>
            • <strong>Readiness:</strong> 18 hours to next mission capability
          </div>
        </div>
      </div>
    </div>
  `;
}
export default getSquadronTacticsExample;
