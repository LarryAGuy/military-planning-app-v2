/**
 * Brigade-Level Offensive Operations Practical Examples
 * Large Scale Combat Operations (LSCO) scenarios for operational brigade command
 * European Campaign Context: NATO Article 5 Response Operations - 1st Armored BCT
 * Classification: UNCLASSIFIED//FOR OFFICIAL USE ONLY
 */

export function getBrigadeTacticsExample(){
  return `
    <div style="padding: 20px; background-color: #0f172a; min-height: 100vh;">
      <!-- Brigade Command Header -->
      <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 24px; border-radius: 12px; margin-bottom: 24px; border: 2px solid #475569;">
        <div style="display: flex; align-items: center; margin-bottom: 16px;">
          <i class="fas fa-chess-rook" style="font-size: 28px; color: #f59e0b; margin-right: 16px;"></i>
          <div>
            <h1 style="color: #f1f5f9; font-size: 24px; font-weight: 700; margin: 0; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
              BRIGADE-LEVEL OFFENSIVE OPERATIONS
            </h1>
            <p style="color: #cbd5e1; font-size: 14px; margin: 4px 0 0 0; font-weight: 500;">
              1st Armored Brigade Combat Team • Main Effort Brigade • 3rd Infantry Division
            </p>
          </div>
        </div>

        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <p style="color: #e2e8f0; font-size: 13px; line-height: 1.5; margin: 0;">
            <strong>Brigade Command Authority:</strong> Colonel commanding 4,500 personnel across 2 Armored Battalions,
            1 Mechanized Infantry Battalion, and supporting elements. Executing main effort penetration as part of
            3rd Infantry Division central axis operations in NATO Article 5 response.
          </p>
        </div>
      </div>

      <!-- Brigade Mission and Concept -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #f59e0b; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-bullseye" style="margin-right: 12px; color: #f59e0b;"></i>
          Brigade Mission and Tactical Concept
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b;">
            <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Brigade Mission Statement</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Mission:</strong> 1st Armored Brigade Combat Team attacks to penetrate enemy defensive positions
                along central axis, advances 8km in 12 hours, and seizes Hill 247 as main effort of 3rd Infantry Division.
              </p>
              <p style="margin: 0 0 10px 0;">
                <strong>Commander's Intent:</strong> Achieve rapid breakthrough using massed armor, maintain aggressive tempo
                through coordinated battalion operations, and seize key terrain to enable division success.
              </p>
              <p style="margin: 0;">
                <strong>End State:</strong> Enemy defensive belt penetrated, Hill 247 seized, and battalions positioned
                for follow-on operations.
              </p>
            </div>
          </div>

          <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b;">
            <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Brigade Operational Environment</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Area of Operations:</strong> 15km frontage, 8km depth
              </p>
              <p style="margin: 0 0 10px 0;">
                <strong>Enemy Situation:</strong> 1st Motor Rifle Battalion (reinforced),
                prepared defensive positions, anti-tank obstacles
              </p>
              <p style="margin: 0 0 10px 0;">
                <strong>Adjacent Units:</strong> 2nd ABCT (north), 3rd ABCT (reserve)
              </p>
              <p style="margin: 0 0 10px 0;">
                <strong>Support:</strong> Division artillery priority, close air support,
                engineer support, electronic warfare
              </p>
              <p style="margin: 0;">
                <strong>Timeline:</strong> D+65 H-Hour to H+12 (Brigade Phase I)
              </p>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b; margin-bottom: 16px;">
          <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Brigade Scheme of Maneuver</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fde68a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">1-64 Armor</h4>
              <div style="color: #fef3c7; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Role:</strong> Main effort battalion</p>
                <p style="margin: 0 0 6px 0;"><strong>Mission:</strong> Penetrate center, seize Hill 247</p>
                <p style="margin: 0 0 6px 0;"><strong>Axis:</strong> Central corridor</p>
                <p style="margin: 0;"><strong>Strength:</strong> 58 M1A2 tanks, 800 personnel</p>
              </div>
            </div>

            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fde68a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">2-64 Armor</h4>
              <div style="color: #fef3c7; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Role:</strong> Supporting effort</p>
                <p style="margin: 0 0 6px 0;"><strong>Mission:</strong> Support main effort, exploit success</p>
                <p style="margin: 0 0 6px 0;"><strong>Axis:</strong> Northern approach</p>
                <p style="margin: 0;"><strong>Strength:</strong> 58 M1A2 tanks, 800 personnel</p>
              </div>
            </div>

            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fde68a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">1-15 Infantry</h4>
              <div style="color: #fef3c7; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Role:</strong> Mechanized infantry</p>
                <p style="margin: 0 0 6px 0;"><strong>Mission:</strong> Clear obstacles, secure terrain</p>
                <p style="margin: 0 0 6px 0;"><strong>Position:</strong> Follow and support</p>
                <p style="margin: 0;"><strong>Strength:</strong> 40 M2A3 IFVs, 720 personnel</p>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #f59e0b;">
          <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Success Criteria</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Penetration:</strong> 3km penetration within 4 hours of H-Hour<br>
            • <strong>Key Terrain:</strong> Hill 247 seized within 12 hours<br>
            • <strong>Advance:</strong> 8km total advance within 12 hours<br>
            • <strong>Enemy Destruction:</strong> 70% degradation of opposing battalion
          </div>
        </div>
      </div>

      <!-- Brigade Battalion Organization -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #3b82f6; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-sitemap" style="margin-right: 12px; color: #3b82f6;"></i>
          Brigade Battalion Organization
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(59, 130, 246, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #3b82f6;">
            <h3 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">1st Battalion, 64th Armor</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;"><strong>Role:</strong> Main effort battalion</p>
              <p style="margin: 0 0 8px 0;"><strong>Commander:</strong> Lieutenant Colonel</p>
              <p style="margin: 0 0 8px 0;"><strong>Strength:</strong> 800 personnel</p>
              <p style="margin: 0 0 8px 0;"><strong>Composition:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li>4 Tank Companies (58 M1A2 Abrams)</li>
                <li>1 Mechanized Company (14 M2A3 Bradley)</li>
                <li>1 Forward Support Company</li>
                <li>Headquarters and Headquarters Company</li>
              </ul>
            </div>
          </div>

          <div style="background-color: rgba(59, 130, 246, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #3b82f6;">
            <h3 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">2nd Battalion, 64th Armor</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;"><strong>Role:</strong> Supporting effort</p>
              <p style="margin: 0 0 8px 0;"><strong>Commander:</strong> Lieutenant Colonel</p>
              <p style="margin: 0 0 8px 0;"><strong>Strength:</strong> 800 personnel</p>
              <p style="margin: 0 0 8px 0;"><strong>Composition:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li>4 Tank Companies (58 M1A2 Abrams)</li>
                <li>1 Mechanized Company (14 M2A3 Bradley)</li>
                <li>1 Forward Support Company</li>
                <li>Headquarters and Headquarters Company</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(59, 130, 246, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #3b82f6;">
            <h3 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">1st Battalion, 15th Infantry</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;"><strong>Role:</strong> Mechanized infantry</p>
              <p style="margin: 0 0 8px 0;"><strong>Commander:</strong> Lieutenant Colonel</p>
              <p style="margin: 0 0 8px 0;"><strong>Strength:</strong> 720 personnel</p>
              <p style="margin: 0 0 8px 0;"><strong>Composition:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li>3 Mechanized Companies (40 M2A3 Bradley)</li>
                <li>1 Weapons Company (8 M1126 Stryker)</li>
                <li>1 Forward Support Company</li>
                <li>Headquarters and Headquarters Company</li>
              </ul>
            </div>
          </div>

          <div style="background-color: rgba(59, 130, 246, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #3b82f6;">
            <h3 style="color: #93c5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Brigade Support Elements</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;"><strong>Specialized Units:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li>1st Battalion, 10th Field Artillery (18 M109A7)</li>
                <li>Brigade Support Battalion</li>
                <li>Brigade Engineer Battalion</li>
                <li>Military Intelligence Company</li>
                <li>Signal Company</li>
                <li>Military Police Platoon</li>
              </ul>
              <p style="margin: 8px 0 0 0;"><strong>Personnel:</strong> 1,180</p>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #3b82f6;">
          <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Task Organization</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Main Effort:</strong> 1-64 Armor receives priority of fires and engineer support<br>
            • <strong>Supporting Effort:</strong> 2-64 Armor coordinates with main effort for mutual support<br>
            • <strong>Follow and Support:</strong> 1-15 Infantry clears obstacles and secures terrain<br>
            • <strong>Attachments:</strong> Engineer company attached to lead battalion for obstacle reduction
          </div>
        </div>
      </div>

      <!-- Brigade Tactical Plan -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #10b981; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-chess-board" style="margin-right: 12px; color: #10b981;"></i>
          Brigade Tactical Plan and Execution
        </h2>

        <div style="background-color: rgba(16, 185, 129, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #10b981; margin-bottom: 16px;">
          <h3 style="color: #6ee7b7; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">Phase I: Assault and Penetration (H-Hour to H+6)</h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 12px; border-radius: 6px;">
              <h4 style="color: #a7f3d0; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">H-Hour to H+2: Initial Assault</h4>
              <div style="color: #d1fae5; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;"><strong>H-Hour (0400):</strong> Brigade assault commences</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>1-64 Armor: Main effort, central axis</li>
                  <li>2-64 Armor: Supporting effort, northern axis</li>
                  <li>Brigade artillery: Supporting fires</li>
                  <li>Engineers: Obstacle reduction</li>
                </ul>
                <p style="margin: 8px 0 8px 0;"><strong>H+1 Hour:</strong> Initial contact</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>1-64 Armor: 1km advance achieved</li>
                  <li>Enemy outposts engaged</li>
                  <li>Casualties: Light</li>
                </ul>
              </div>
            </div>

            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 12px; border-radius: 6px;">
              <h4 style="color: #a7f3d0; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">H+2 to H+6: Breakthrough</h4>
              <div style="color: #d1fae5; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;"><strong>Objective:</strong> Penetrate enemy main defensive line</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>1-64 Armor advances 3km, engages enemy main line</li>
                  <li>2-64 Armor supports with flanking maneuver</li>
                  <li>Brigade artillery shifts fires forward</li>
                  <li>Close air support: 8 sorties</li>
                </ul>
                <p style="margin: 8px 0 8px 0;"><strong>Decision Point Alpha (H+4):</strong></p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Assess breakthrough success</li>
                  <li>Consider committing 1-15 Infantry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #f59e0b;">
          <h3 style="color: #fbbf24; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">Phase II: Exploitation (H+6 to H+12)</h3>

          <div style="background-color: rgba(245, 158, 11, 0.2); padding: 12px; border-radius: 6px;">
            <h4 style="color: #fde68a; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">Rapid Advance to Hill 247</h4>
            <div style="color: #fef3c7; font-size: 12px; line-height: 1.4;">
              <p style="margin: 0 0 8px 0;"><strong>Mission:</strong> Exploit breakthrough, advance 5km to Hill 247</p>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                  <p style="margin: 0 0 6px 0;"><strong>1-64 Armor Operations:</strong></p>
                  <ul style="margin: 0; padding-left: 16px;">
                    <li>Continue central axis advance</li>
                    <li>Seize Hill 247</li>
                    <li>Establish overwatch positions</li>
                    <li>Coordinate with 2-64 Armor</li>
                  </ul>
                </div>
                <div>
                  <p style="margin: 0 0 6px 0;"><strong>1-15 Infantry Commitment:</strong></p>
                  <ul style="margin: 0; padding-left: 16px;">
                    <li>Clear bypassed positions</li>
                    <li>Secure flanks and rear</li>
                    <li>Process enemy prisoners</li>
                    <li>Establish security positions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Brigade Fire Support and Intelligence -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #ef4444; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-crosshairs" style="margin-right: 12px; color: #ef4444;"></i>
          Brigade Fire Support and Intelligence Operations
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(239, 68, 68, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #ef4444;">
            <h3 style="color: #fca5a5; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Brigade Artillery</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>1st Battalion, 10th Field Artillery:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Battery A:</strong> 6 M109A7 howitzers</li>
                <li><strong>Battery B:</strong> 6 M109A7 howitzers</li>
                <li><strong>Battery C:</strong> 6 M109A7 howitzers</li>
                <li><strong>Headquarters Battery:</strong> Fire direction center</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Capability:</strong> 18 tubes, 400 personnel</p>
            </div>
          </div>

          <div style="background-color: rgba(239, 68, 68, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #ef4444;">
            <h3 style="color: #fca5a5; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Fire Support Coordination</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Fire Support Elements:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Brigade FSO:</strong> Lieutenant Colonel, fire support</li>
                <li><strong>Battalion FSOs:</strong> 3 elements with battalions</li>
                <li><strong>Company FSOs:</strong> 12 elements with companies</li>
                <li><strong>Air Liaison Officer:</strong> CAS coordination</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Integration:</strong> Division fires and close air support</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(6, 182, 212, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #06b6d4;">
            <h3 style="color: #67e8f9; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Brigade Intelligence</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>S-2 Section:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>S-2:</strong> Major, intelligence</li>
                <li><strong>Analysis Section:</strong> 4 analysts</li>
                <li><strong>Collection Management:</strong> 3 managers</li>
                <li><strong>Counterintelligence:</strong> 2 specialists</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Personnel:</strong> 12 intelligence professionals</p>
            </div>
          </div>

          <div style="background-color: rgba(6, 182, 212, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #06b6d4;">
            <h3 style="color: #67e8f9; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Enemy Assessment</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>1st Motor Rifle Battalion:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Strength:</strong> 420 personnel</li>
                <li><strong>Equipment:</strong> 10 tanks, 30 IFVs</li>
                <li><strong>Artillery:</strong> 6 howitzers</li>
                <li><strong>Air Defense:</strong> 2 systems</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Assessment:</strong> 85% combat effective</p>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #ef4444;">
          <h4 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Fire Support Plan</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Preparatory Fires:</strong> H-30min to H-Hour, 180 rounds on enemy positions<br>
            • <strong>Supporting Fires:</strong> On-call fires for battalion operations<br>
            • <strong>Counterbattery:</strong> Immediate suppression of enemy artillery<br>
            • <strong>Close Support:</strong> 8 CAS sorties allocated to brigade
          </div>
        </div>
      </div>

      <!-- Brigade Logistics and Command -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #ec4899; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-truck" style="margin-right: 12px; color: #ec4899;"></i>
          Brigade Logistics and Command Operations
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(236, 72, 153, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #ec4899;">
            <h3 style="color: #f9a8d4; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Brigade Sustainment</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Brigade Support Battalion:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Distribution Company:</strong> 20 cargo vehicles</li>
                <li><strong>Fuel Company:</strong> 8 fuel tankers</li>
                <li><strong>Ammunition Company:</strong> 6 ammo carriers</li>
                <li><strong>Maintenance Company:</strong> Equipment repair</li>
                <li><strong>Medical Company:</strong> Health support</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Personnel:</strong> 600 sustainment soldiers</p>
            </div>
          </div>

          <div style="background-color: rgba(236, 72, 153, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #ec4899;">
            <h3 style="color: #f9a8d4; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Daily Requirements</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Brigade Consumption (tons/day):</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Class I (Food/Water):</strong> 14 tons</li>
                <li><strong>Class III (Fuel):</strong> 68 tons</li>
                <li><strong>Class V (Ammunition):</strong> 45 tons</li>
                <li><strong>Class VIII (Medical):</strong> 2 tons</li>
                <li><strong>Class IX (Parts):</strong> 9 tons</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Total:</strong> 138 tons/day</p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(139, 92, 246, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #8b5cf6;">
            <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Brigade Command</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>Brigade Headquarters:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Brigade Commander:</strong> Colonel</li>
                <li><strong>Deputy Commander:</strong> Lieutenant Colonel</li>
                <li><strong>Command Sergeant Major:</strong> CSM</li>
                <li><strong>S-1/S-2/S-3/S-4:</strong> Majors</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>HQ Personnel:</strong> 40</p>
            </div>
          </div>

          <div style="background-color: rgba(139, 92, 246, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #8b5cf6;">
            <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Communications</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;"><strong>C4I Systems:</strong></p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>CPCE:</strong> Command post computing</li>
                <li><strong>WIN-T:</strong> Tactical internet</li>
                <li><strong>SINCGARS:</strong> Radio communications</li>
                <li><strong>Blue Force Tracker:</strong> Situational awareness</li>
              </ul>
              <p style="margin: 10px 0 0 0;"><strong>Range:</strong> 25km communications</p>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #ec4899;">
          <h4 style="color: #f9a8d4; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Success Assessment</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Mission Success:</strong> All objectives achieved within timeline<br>
            • <strong>Enemy Destruction:</strong> 70% degradation of opposing battalion<br>
            • <strong>Friendly Casualties:</strong> 2.8% losses, within acceptable limits<br>
            • <strong>Coordination:</strong> Effective integration with division operations
          </div>
        </div>
      </div>

      <!-- Brigade Detailed Timeline -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #3b82f6; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-clock" style="margin-right: 12px; color: #3b82f6;"></i>
          Brigade Detailed Operational Timeline
        </h2>

        <div style="background-color: rgba(59, 130, 246, 0.1); padding: 16px; border-radius: 8px; border: 1px solid #3b82f6; margin-bottom: 16px;">
          <h3 style="color: #93c5fd; font-size: 18px; font-weight: 600; margin: 0 0 16px 0;">D+65: H-Hour Brigade Operations</h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #dbeafe; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">H-1 to H-Hour</h4>
              <div style="color: #e0e7ff; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>H-1 (0300):</strong> Preparatory fires</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Brigade artillery: 18 howitzers</li>
                  <li>Division fires: Priority to brigade</li>
                  <li>Close air support: 4 sorties</li>
                  <li>Engineer preparation</li>
                </ul>
                <p style="margin: 6px 0 0 0;"><strong>H-15min:</strong> Final preparations</p>
              </div>
            </div>

            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #dbeafe; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">H-Hour to H+2</h4>
              <div style="color: #e0e7ff; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>H-Hour (0400):</strong> Assault begins</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>1-64 Armor: Main effort advance</li>
                  <li>2-64 Armor: Supporting attack</li>
                  <li>Engineers: Breach operations</li>
                  <li>Artillery: Shift to support</li>
                </ul>
                <p style="margin: 6px 0 0 0;"><strong>H+2:</strong> 1km penetration</p>
              </div>
            </div>

            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #dbeafe; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">H+2 to H+4</h4>
              <div style="color: #e0e7ff; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Breakthrough:</strong> Enemy main line</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>1-64 Armor: 3km advance</li>
                  <li>Enemy reserves engaged</li>
                  <li>Casualties: 1.8% brigade</li>
                  <li>Medical evacuation active</li>
                </ul>
                <p style="margin: 6px 0 0 0;"><strong>Assessment:</strong> Ahead of schedule</p>
              </div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 12px; border-radius: 6px;">
              <h4 style="color: #dbeafe; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">H+4 to H+8: Exploitation</h4>
              <div style="color: #e0e7ff; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;"><strong>H+4 Decision Point:</strong> Commit 1-15 Infantry</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>1-64 Armor: Engaged enemy main defense</li>
                  <li>2-64 Armor: Flanking maneuver successful</li>
                  <li>1-15 Infantry: Committed to clear obstacles</li>
                  <li>Brigade artillery: Counterbattery fires</li>
                  <li>Air support: 4 additional sorties</li>
                </ul>
                <p style="margin: 8px 0 0 0;"><strong>Result:</strong> Enemy main line penetrated</p>
              </div>
            </div>

            <div style="background-color: rgba(59, 130, 246, 0.2); padding: 12px; border-radius: 6px;">
              <h4 style="color: #dbeafe; font-size: 14px; font-weight: 600; margin: 0 0 10px 0;">H+8 to H+12: Hill 247</h4>
              <div style="color: #e0e7ff; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;"><strong>Final Assault:</strong> 8km total penetration</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li>1-64 Armor: Seizes Hill 247</li>
                  <li>2-64 Armor: Secures northern flank</li>
                  <li>1-15 Infantry: Clears bypassed positions</li>
                  <li>Enemy: Withdrawing in disorder</li>
                  <li>Brigade: Consolidates gains</li>
                </ul>
                <p style="margin: 8px 0 0 0;"><strong>Success:</strong> All objectives achieved</p>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #3b82f6;">
          <h4 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Timeline Success Metrics</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>H+4:</strong> 3km penetration achieved (target: 3km) ✓<br>
            • <strong>H+8:</strong> Enemy main line breached (target: breakthrough) ✓<br>
            • <strong>H+12:</strong> Hill 247 seized (target: key terrain) ✓<br>
            • <strong>Casualties:</strong> 2.8% losses (target: <5%) ✓
          </div>
        </div>
      </div>

      <!-- Brigade Combined Arms Operations -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #8b5cf6; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-layer-group" style="margin-right: 12px; color: #8b5cf6;"></i>
          Brigade Combined Arms Integration
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(139, 92, 246, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #8b5cf6;">
            <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Armor and Infantry Integration</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Combined Arms Teams:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Tank Companies:</strong> 116 M1A2 Abrams tanks</li>
                <li><strong>Mechanized Infantry:</strong> 68 M2A3 Bradley IFVs</li>
                <li><strong>Self-Propelled Artillery:</strong> 18 M109A7 Paladin</li>
                <li><strong>Engineer Vehicles:</strong> 6 M1150 Assault Breacher</li>
                <li><strong>Air Defense:</strong> 4 M1097 Avenger systems</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Integration:</strong> Task-organized combined arms companies
              </p>
            </div>
          </div>

          <div style="background-color: rgba(139, 92, 246, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #8b5cf6;">
            <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Engineer Operations</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Brigade Engineer Battalion:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Combat Engineer Company:</strong> Obstacle reduction</li>
                <li><strong>Bridge Company:</strong> Gap crossing operations</li>
                <li><strong>Clearance Platoon:</strong> Route clearance</li>
                <li><strong>Sapper Platoon:</strong> Assault operations</li>
                <li><strong>Equipment Platoon:</strong> Heavy equipment</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Personnel:</strong> 280 engineers
              </p>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(139, 92, 246, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #8b5cf6; margin-bottom: 16px;">
          <h3 style="color: #c4b5fd; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Combined Arms Coordination</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #ddd6fe; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Fire and Movement</h4>
              <div style="color: #ede9fe; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Tanks provide overwatch</li>
                  <li>Infantry clears obstacles</li>
                  <li>Artillery suppresses enemy</li>
                  <li>Engineers breach barriers</li>
                  <li>All arms coordinate</li>
                </ul>
              </div>
            </div>

            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #ddd6fe; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Intelligence Integration</h4>
              <div style="color: #ede9fe; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Scouts provide reconnaissance</li>
                  <li>SIGINT locates enemy</li>
                  <li>Ground units confirm targets</li>
                  <li>Aviation conducts BDA</li>
                  <li>All-source fusion</li>
                </ul>
              </div>
            </div>

            <div style="background-color: rgba(139, 92, 246, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #ddd6fe; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Sustainment Integration</h4>
              <div style="color: #ede9fe; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Forward arming and refueling</li>
                  <li>Medical evacuation</li>
                  <li>Maintenance forward support</li>
                  <li>Supply convoy coordination</li>
                  <li>Casualty collection points</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #8b5cf6;">
          <h4 style="color: #c4b5fd; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Combined Arms Effectiveness</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Synchronization:</strong> All combat systems integrated for maximum effect<br>
            • <strong>Flexibility:</strong> Task organization adjusted based on mission requirements<br>
            • <strong>Survivability:</strong> Mutual support reduces individual system vulnerabilities<br>
            • <strong>Lethality:</strong> Combined effects exceed sum of individual capabilities
          </div>
        </div>
      </div>

      <!-- Brigade Risk Management -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #f59e0b; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-exclamation-triangle" style="margin-right: 12px; color: #f59e0b;"></i>
          Brigade Risk Management and Contingency Planning
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b;">
            <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Tactical Risk Assessment</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>High-Risk Factors:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Enemy Counterattack:</strong> Tank company against breakthrough</li>
                <li><strong>Obstacle Complexity:</strong> Minefields and barriers</li>
                <li><strong>Friendly Fire:</strong> Multiple battalions in close proximity</li>
                <li><strong>Communication Failure:</strong> Electronic warfare effects</li>
                <li><strong>Casualty Evacuation:</strong> Medical support during advance</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Risk Level:</strong> Medium across all factors
              </p>
            </div>
          </div>

          <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b;">
            <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Risk Mitigation Measures</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Mitigation Strategies:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Reserve Positioning:</strong> 1-15 Infantry ready for commitment</li>
                <li><strong>Engineer Priority:</strong> Dedicated breach teams per battalion</li>
                <li><strong>Fire Coordination:</strong> Detailed control measures and liaison</li>
                <li><strong>Communication Redundancy:</strong> Multiple systems and frequencies</li>
                <li><strong>Medical Forward:</strong> Aid stations with each battalion</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Residual Risk:</strong> Low with mitigation measures
              </p>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(245, 158, 11, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #f59e0b; margin-bottom: 16px;">
          <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Contingency Plans</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fde68a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Branch Plan Alpha</h4>
              <div style="color: #fef3c7; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Trigger:</strong> Main effort stalled</p>
                <p style="margin: 0 0 6px 0;"><strong>Action:</strong> Shift main effort to 2-64 Armor</p>
                <p style="margin: 0 0 6px 0;"><strong>Resources:</strong> Artillery priority shift</p>
                <p style="margin: 0;"><strong>Timeline:</strong> 1-hour execution</p>
              </div>
            </div>

            <div style="background-color: rgba(245, 158, 11, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #fde68a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Branch Plan Bravo</h4>
              <div style="color: #fef3c7; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 6px 0;"><strong>Trigger:</strong> Heavy casualties</p>
                <p style="margin: 0 0 6px 0;"><strong>Action:</strong> Consolidate and defend</p>
                <p style="margin: 0 0 6px 0;"><strong>Resources:</strong> Medical reinforcement</p>
                <p style="margin: 0;"><strong>Timeline:</strong> 2-hour consolidation</p>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #f59e0b;">
          <h4 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Commander's Risk Guidance</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Acceptable Risk:</strong> Moderate tactical risk for operational success<br>
            • <strong>Force Protection:</strong> Minimize casualties while maintaining tempo<br>
            • <strong>Mission Priority:</strong> Seize objectives on schedule to support division<br>
            • <strong>Flexibility:</strong> Adapt plans based on enemy actions and friendly progress
          </div>
        </div>
      </div>

      <!-- Brigade Lessons Learned -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #64748b; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-graduation-cap" style="margin-right: 12px; color: #64748b;"></i>
          Brigade-Level Lessons Learned and Best Practices
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(100, 116, 139, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #64748b;">
            <h3 style="color: #94a3b8; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Tactical Lessons</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Combined Arms:</strong> Integration of all combat systems essential</li>
                <li><strong>Battalion Coordination:</strong> Clear boundaries and mutual support</li>
                <li><strong>Engineer Integration:</strong> Early commitment enables rapid breach</li>
                <li><strong>Fire Support:</strong> Responsive artillery critical for success</li>
                <li><strong>Intelligence Preparation:</strong> Detailed enemy analysis supports planning</li>
                <li><strong>Flexibility:</strong> Adapt to changing tactical conditions</li>
              </ul>
            </div>
          </div>

          <div style="background-color: rgba(100, 116, 139, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #64748b;">
            <h3 style="color: #94a3b8; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Operational Insights</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Mission Command:</strong> Decentralized execution with clear intent</li>
                <li><strong>Tempo Maintenance:</strong> Sustained pressure prevents enemy recovery</li>
                <li><strong>Risk Management:</strong> Calculated risks for tactical advantage</li>
                <li><strong>Sustainment:</strong> Forward logistics enable continuous operations</li>
                <li><strong>Communication:</strong> Redundant systems prevent command failure</li>
                <li><strong>Training:</strong> Realistic combined arms training essential</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #64748b;">
          <h4 style="color: #94a3b8; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade-Level Success Factors</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Leadership:</strong> Decisive command and clear communication of intent<br>
            • <strong>Integration:</strong> Effective combined arms coordination across all systems<br>
            • <strong>Adaptability:</strong> Rapid adjustment to changing tactical conditions<br>
            • <strong>Sustainment:</strong> Continuous logistics support during high-tempo operations<br>
            • <strong>Innovation:</strong> Creative solutions to overcome enemy defenses and obstacles
          </div>
        </div>
      </div>

      <!-- Brigade Final Assessment -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <div style="background-color: #374151; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b;">
          <h3 style="color: #fbbf24; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">1st Armored Brigade Combat Team - Operation Summary</h3>
          <div style="color: #d1d5db; font-size: 13px; line-height: 1.5;">
            <p style="margin: 0 0 10px 0;">
              <strong>Mission Accomplished:</strong> 1st Armored Brigade Combat Team successfully executed main effort
              penetration operations as part of 3rd Infantry Division, achieving all assigned objectives within the
              specified 12-hour timeline. The brigade demonstrated exceptional combined arms coordination, effective
              battalion-level integration, and sustained operational tempo throughout the operation.
            </p>
            <p style="margin: 0 0 10px 0;">
              <strong>Tactical Impact:</strong> Brigade operations directly enabled division breakthrough and contributed
              to overall corps success. The rapid penetration and seizure of Hill 247 disrupted enemy defensive plans
              and created conditions for exploitation operations in the central sector.
            </p>
            <p style="margin: 0;">
              <strong>Legacy:</strong> This operation serves as a model for future brigade-level offensive operations in
              Large Scale Combat Operations, demonstrating the effectiveness of combined arms integration, mission command,
              and adaptive leadership at the tactical level of war.
            </p>
          </div>
        </div>
      </div>

      <!-- Brigade Battle Damage Assessment -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #059669; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-chart-bar" style="margin-right: 12px; color: #059669;"></i>
          Brigade Battle Damage Assessment and Performance Metrics
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(5, 150, 105, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #059669;">
            <h3 style="color: #34d399; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Friendly Force Assessment</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Brigade Casualties (12-hour operation):</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>KIA:</strong> 32 personnel (0.7% of brigade)</li>
                <li><strong>WIA:</strong> 94 personnel (2.1% of brigade)</li>
                <li><strong>Total Casualties:</strong> 126 (2.8% of brigade)</li>
                <li><strong>Equipment Losses:</strong> 3 tanks, 4 IFVs, 1 artillery</li>
                <li><strong>Combat Effectiveness:</strong> 97.2% maintained</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Assessment:</strong> Casualties within acceptable limits for offensive operations
              </p>
            </div>
          </div>

          <div style="background-color: rgba(5, 150, 105, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #059669;">
            <h3 style="color: #34d399; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Enemy Force Destruction</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>1st Motor Rifle Battalion Losses:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Personnel:</strong> 294 casualties (70% of battalion)</li>
                <li><strong>Tanks:</strong> 7 destroyed (70% of tank company)</li>
                <li><strong>IFVs:</strong> 21 destroyed (70% of IFV companies)</li>
                <li><strong>Artillery:</strong> 4 destroyed (67% of artillery)</li>
                <li><strong>Combat Effectiveness:</strong> 30% remaining</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Assessment:</strong> Enemy battalion combat ineffective, mission accomplished
              </p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 16px;">
          <div style="background-color: rgba(5, 150, 105, 0.1); padding: 12px; border-radius: 8px; border: 1px solid #059669;">
            <h3 style="color: #34d399; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">1-64 Armor Performance</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;"><strong>Mission:</strong> Main effort penetration</p>
              <ul style="margin: 0; padding-left: 16px;">
                <li>Advance: 8km in 12 hours ✓</li>
                <li>Hill 247: Seized H+10 ✓</li>
                <li>Casualties: 2.5% (acceptable)</li>
                <li>Equipment: 97% operational</li>
                <li>Morale: High</li>
              </ul>
              <p style="margin: 8px 0 0 0;"><strong>Rating:</strong> Excellent performance</p>
            </div>
          </div>

          <div style="background-color: rgba(5, 150, 105, 0.1); padding: 12px; border-radius: 8px; border: 1px solid #059669;">
            <h3 style="color: #34d399; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">2-64 Armor Performance</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;"><strong>Mission:</strong> Supporting effort</p>
              <ul style="margin: 0; padding-left: 16px;">
                <li>Support: Effective flanking ✓</li>
                <li>Coordination: Excellent ✓</li>
                <li>Casualties: 2.8% (acceptable)</li>
                <li>Equipment: 96% operational</li>
                <li>Flexibility: High</li>
              </ul>
              <p style="margin: 8px 0 0 0;"><strong>Rating:</strong> Very good performance</p>
            </div>
          </div>

          <div style="background-color: rgba(5, 150, 105, 0.1); padding: 12px; border-radius: 8px; border: 1px solid #059669;">
            <h3 style="color: #34d399; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">1-15 Infantry Performance</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;"><strong>Mission:</strong> Follow and support</p>
              <ul style="margin: 0; padding-left: 16px;">
                <li>Commitment: H+4 optimal ✓</li>
                <li>Clearing: Effective ✓</li>
                <li>Casualties: 3.2% (acceptable)</li>
                <li>Equipment: 95% operational</li>
                <li>Initiative: High</li>
              </ul>
              <p style="margin: 8px 0 0 0;"><strong>Rating:</strong> Good performance</p>
            </div>
          </div>
        </div>

        <div style="background-color: rgba(5, 150, 105, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #059669; margin-bottom: 16px;">
          <h3 style="color: #34d399; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Brigade Support Element Performance</h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div style="background-color: rgba(5, 150, 105, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #a7f3d0; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Artillery</h4>
              <div style="color: #d1fae5; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Rounds fired: 720 (preparatory and support)</li>
                  <li>Targets engaged: 54 (95% success rate)</li>
                  <li>Counterbattery: 4 enemy systems destroyed</li>
                  <li>Responsiveness: Average 2.8 minutes</li>
                  <li>Ammunition consumption: 80% of allocation</li>
                </ul>
                <p style="margin: 8px 0 0 0;"><strong>Assessment:</strong> Highly effective fire support</p>
              </div>
            </div>

            <div style="background-color: rgba(5, 150, 105, 0.2); padding: 10px; border-radius: 6px;">
              <h4 style="color: #a7f3d0; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Engineers</h4>
              <div style="color: #d1fae5; font-size: 12px; line-height: 1.4;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li>Obstacles cleared: 12 major obstacles</li>
                  <li>Breaches created: 6 vehicle lanes</li>
                  <li>Mines cleared: 180 anti-tank mines</li>
                  <li>Bridges emplaced: 2 tactical bridges</li>
                  <li>Equipment availability: 94%</li>
                </ul>
                <p style="margin: 8px 0 0 0;"><strong>Assessment:</strong> Critical mobility enabler</p>
              </div>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #059669;">
          <h4 style="color: #34d399; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Overall Brigade Performance Metrics</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Mission Success Rate:</strong> 100% - All objectives achieved within timeline<br>
            • <strong>Casualty Rate:</strong> 2.8% - Within acceptable limits for offensive operations<br>
            • <strong>Equipment Readiness:</strong> 96.1% - High operational availability maintained<br>
            • <strong>Ammunition Consumption:</strong> 78% - Efficient use of allocated resources<br>
            • <strong>Coordination Effectiveness:</strong> 96% - Excellent integration with division operations<br>
            • <strong>Enemy Destruction:</strong> 70% - Opposing battalion rendered combat ineffective
          </div>
        </div>
      </div>

      <!-- Brigade Future Operations Preparation -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #0ea5e9; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-forward" style="margin-right: 12px; color: #0ea5e9;"></i>
          Brigade Preparation for Follow-On Operations
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(14, 165, 233, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #0ea5e9;">
            <h3 style="color: #38bdf8; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Reconstitution Operations</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>24-Hour Reconstitution Plan:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Personnel:</strong> Casualty replacement and medical treatment</li>
                <li><strong>Equipment:</strong> Maintenance, repair, and replacement</li>
                <li><strong>Ammunition:</strong> Resupply to 100% basic load</li>
                <li><strong>Fuel:</strong> Refuel all vehicles and equipment</li>
                <li><strong>Food/Water:</strong> 48-hour supply replenishment</li>
                <li><strong>Medical:</strong> Restock medical supplies and evacuate wounded</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Timeline:</strong> 24 hours to achieve 98% combat effectiveness
              </p>
            </div>
          </div>

          <div style="background-color: rgba(14, 165, 233, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #0ea5e9;">
            <h3 style="color: #38bdf8; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Intelligence Preparation</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Next Phase Intelligence Requirements:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Enemy Situation:</strong> Remaining forces and defensive positions</li>
                <li><strong>Terrain Analysis:</strong> Next 15km advance corridor</li>
                <li><strong>Weather:</strong> 48-hour forecast and impact assessment</li>
                <li><strong>Adjacent Units:</strong> Friendly unit positions and plans</li>
                <li><strong>Logistics:</strong> Supply routes and forward base locations</li>
                <li><strong>Civil Considerations:</strong> Population centers and infrastructure</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Products:</strong> Updated intelligence estimate and targeting list
              </p>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(14, 165, 233, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #0ea5e9;">
            <h3 style="color: #38bdf8; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Task Organization Review</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Adjustments for Next Phase:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Battalion Roles:</strong> Reassess main/supporting effort assignments</li>
                <li><strong>Attachments:</strong> Engineer and artillery task organization</li>
                <li><strong>Reserve:</strong> Designate fresh battalion as brigade reserve</li>
                <li><strong>Support:</strong> Medical and maintenance forward positioning</li>
                <li><strong>Logistics:</strong> Forward supply point establishment</li>
                <li><strong>Communications:</strong> Radio frequency and network updates</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Recommendation:</strong> Rotate 1-64 Armor to reserve, 2-64 Armor to main effort</p>
            </div>
          </div>

          <div style="background-color: rgba(14, 165, 233, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #0ea5e9;">
            <h3 style="color: #38bdf8; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Coordination Requirements</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Higher and Adjacent Coordination:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Division Headquarters:</strong> Next phase mission and timeline</li>
                <li><strong>Adjacent Brigades:</strong> Boundary adjustments and coordination</li>
                <li><strong>Division Artillery:</strong> Fire support priorities</li>
                <li><strong>Division Aviation:</strong> Close air support allocation</li>
                <li><strong>Brigade Support Battalion:</strong> Supply requirements and transportation</li>
                <li><strong>Medical Battalion:</strong> Casualty evacuation and treatment</li>
              </ul>
              <p style="margin: 10px 0 0 0;">
                <strong>Timeline:</strong> Coordination complete within 12 hours
              </p>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #0ea5e9;">
          <h4 style="color: #38bdf8; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Readiness for Follow-On Operations</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Combat Effectiveness:</strong> 97.2% maintained, 98% projected after reconstitution<br>
            • <strong>Morale:</strong> High across all battalions, confidence in leadership and mission<br>
            • <strong>Equipment Status:</strong> 96.1% operational, full capability within 24 hours<br>
            • <strong>Logistics:</strong> Sustainable operations capability for next 48-hour phase<br>
            • <strong>Intelligence:</strong> Comprehensive enemy situation and terrain analysis complete<br>
            • <strong>Coordination:</strong> Effective integration with division and adjacent units established
          </div>
        </div>
      </div>

      <!-- Brigade Training and Development -->
      <div style="background-color: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #334155;">
        <h2 style="color: #7c3aed; font-size: 20px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center;">
          <i class="fas fa-dumbbell" style="margin-right: 12px; color: #7c3aed;"></i>
          Brigade Training and Professional Development
        </h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background-color: rgba(124, 58, 237, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #7c3aed;">
            <h3 style="color: #a78bfa; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Training Recommendations</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Priority Training Areas:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Combined Arms Integration:</strong> Battalion-level coordination exercises</li>
                <li><strong>Breach Operations:</strong> Engineer-infantry-armor coordination</li>
                <li><strong>Fire Support:</strong> Artillery and close air support integration</li>
                <li><strong>Communications:</strong> Multi-echelon command and control</li>
                <li><strong>Medical Operations:</strong> Casualty evacuation procedures</li>
                <li><strong>Logistics:</strong> Forward supply and maintenance operations</li>
              </ul>
            </div>
          </div>

          <div style="background-color: rgba(124, 58, 237, 0.1); padding: 14px; border-radius: 8px; border: 1px solid #7c3aed;">
            <h3 style="color: #a78bfa; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">Professional Development</h3>
            <div style="color: #e5e7eb; font-size: 13px; line-height: 1.5;">
              <p style="margin: 0 0 10px 0;">
                <strong>Leadership Development Focus:</strong>
              </p>
              <ul style="margin: 0; padding-left: 16px;">
                <li><strong>Mission Command:</strong> Decentralized execution principles</li>
                <li><strong>Risk Management:</strong> Tactical decision-making under pressure</li>
                <li><strong>Innovation:</strong> Adaptive problem-solving techniques</li>
                <li><strong>Coalition Operations:</strong> Multinational coordination skills</li>
                <li><strong>Technology Integration:</strong> Modern battlefield systems</li>
                <li><strong>Ethical Leadership:</strong> Values-based decision making</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 4px solid #7c3aed;">
          <h4 style="color: #a78bfa; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Excellence Standards</h4>
          <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
            • <strong>Operational Readiness:</strong> Maintain 95%+ equipment availability and personnel readiness<br>
            • <strong>Training Proficiency:</strong> Achieve "Trained" or higher ratings in all mission-essential tasks<br>
            • <strong>Leadership Development:</strong> 100% of leaders complete professional military education<br>
            • <strong>Innovation Culture:</strong> Encourage creative solutions and continuous improvement<br>
            • <strong>Coalition Interoperability:</strong> Train regularly with NATO and allied forces
          </div>
        </div>
      </div>
    </div>
  `;
}
export default getBrigadeTacticsExample;
