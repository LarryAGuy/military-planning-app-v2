/** Tactics: Battle Drills - Detailed Analysis (Blue theme) */
export const battleDrillsDetailedAnalysisTacticsModule = {
  id: 'battle-drills-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,
  _handlers: [],
  _styleId: 'bd-detailed-styles',
  _lsKey(prefix){ return `bd-detailed-${prefix}`; },

  getContent() {
    return `
      <div id="bd-detailed-analysis-section" style="margin-bottom:24px;">
        <!-- Header -->
        <div style="margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151; display:flex; align-items:center; justify-content:space-between; gap:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-crosshairs" style="margin-right:8px; color:#60a5fa; font-size:16px;"></i>
            Detailed Analysis
          </h3>
        </div>

        <!-- Battle Drills Doctrinal Content -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Battle Drill Fundamentals -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(16, 185, 129, 0.3); padding-bottom: 8px;">
              <i class="fas fa-book-open" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
              Battle Drill Fundamentals
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Definition & Purpose</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0;">
                    Battle drills are collective actions rapidly executed without applying a deliberate decision-making process.
                    They require minimal leader orders to accomplish and represent standard responses to anticipated situations.
                  </p>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #10b981; margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Key Characteristics</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <ul style="margin: 0; padding-left: 16px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #6ee7b7;">Rapid execution under stress:</strong> Immediate response capability</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #6ee7b7;">Minimal verbal commands:</strong> Reduced communication requirements</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #6ee7b7;">Standard responses:</strong> Consistent tactical procedures</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #6ee7b7;">Muscle memory:</strong> Repetitive training development</li>
                    <li><strong style="color: #6ee7b7;">Foundation:</strong> Building blocks for complex operations</li>
                  </ul>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(16, 185, 129, 0.6);">
                <h5 style="font-weight: 700; color: #6ee7b7; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(16, 185, 129, 0.3); padding-bottom: 6px;">Training Standards</h5>
                <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0;"><strong style="color: #a7f3d0;">Execution Requirements:</strong> Battle drills must be executed to standard under varying conditions including limited visibility, adverse weather, and high-stress combat environments. Proficiency requires consistent repetition until execution becomes instinctive.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Doctrinal References -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(37, 99, 235, 0.3); padding-bottom: 8px;">
              <i class="fas fa-file-alt" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
              Doctrinal References
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Primary Publications</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <ul style="margin: 0; padding-left: 16px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">FM 3-21.8:</strong> Infantry Rifle Platoon and Squad</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">ATP 3-21.8:</strong> Infantry Platoon and Squad</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">FM 3-90:</strong> Tactics</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">ATP 3-90.1:</strong> Armor and Mechanized Infantry Company Team</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">FM 3-0:</strong> Operations</li>
                    <li><strong style="color: #93c5fd;">TC 3-21.76:</strong> Ranger Handbook</li>
                  </ul>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #2563eb; margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Supporting References</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <ul style="margin: 0; padding-left: 16px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">FM 6-0:</strong> Commander and Staff Organization</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">ATP 3-21.20:</strong> Infantry Battalion</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #93c5fd;">FM 3-96:</strong> Brigade Combat Team</li>
                    <li><strong style="color: #93c5fd;">ATP 3-91:</strong> Division Operations</li>
                  </ul>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(37, 99, 235, 0.6);">
                <h5 style="font-weight: 700; color: #93c5fd; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(37, 99, 235, 0.3); padding-bottom: 6px;">Reference Currency</h5>
                <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0;"><strong style="color: #a7f3d0;">Current as of 2024:</strong> All references current as of 2024. Consult latest publications for updates and revisions to ensure doctrinal accuracy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Standard Battle Drill Categories -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
            <i class="fas fa-list-ul" style="margin-right: 8px; color: #60a5fa; font-size: 14px;"></i>
            Standard Battle Drill Categories
          </h4>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">

            <!-- Infantry Battle Drills (FM 3-21.8) -->
            <div style="background: #1f2937; border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #16a34a; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-running" style="margin-right: 8px; font-size: 12px;"></i>
                Infantry Battle Drills (FM 3-21.8)
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.5;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;"><strong>BD 1A:</strong> Squad Attack</li>
                  <li style="margin-bottom: 4px;"><strong>BD 1B:</strong> Platoon Attack</li>
                  <li style="margin-bottom: 4px;"><strong>BD 2:</strong> React to Contact</li>
                  <li style="margin-bottom: 4px;"><strong>BD 3:</strong> Break Contact</li>
                  <li style="margin-bottom: 4px;"><strong>BD 4:</strong> React to Ambush</li>
                  <li style="margin-bottom: 4px;"><strong>BD 5:</strong> Knock Out Bunkers</li>
                  <li style="margin-bottom: 4px;"><strong>BD 6:</strong> Enter/Clear a Building</li>
                  <li><strong>BD 7:</strong> Enter/Clear a Trench</li>
                </ul>
                <div style="background: #111827; border-left: 3px solid #16a34a; padding: 8px; border-radius: 4px; margin-top: 12px;">
                  <p style="margin: 0; font-size: 11px; color: #4ade80; font-style: italic;">
                    <i class="fas fa-info-circle" style="margin-right: 6px;"></i>
                    Official numbering system per FM 3-21.8, Infantry Rifle Platoon and Squad
                  </p>
                </div>
              </div>
            </div>

            <!-- Mounted Battle Drills -->
            <div style="background: #1f2937; border: 1px solid #3b82f6; border-radius: 8px; padding: 16px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #3b82f6; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-truck-military" style="margin-right: 8px; font-size: 12px;"></i>
                Mounted Battle Drills
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.5;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">React to Contact (Mounted)</li>
                  <li style="margin-bottom: 4px;">React to IED/Mine</li>
                  <li style="margin-bottom: 4px;">Vehicle Recovery</li>
                  <li style="margin-bottom: 4px;">Convoy Operations</li>
                  <li style="margin-bottom: 4px;">Dismount Procedures</li>
                  <li style="margin-bottom: 4px;">Hasty Defense</li>
                  <li>Movement to Contact</li>
                </ul>
              </div>
            </div>

            <!-- Support Battle Drills -->
            <div style="background: #1f2937; border: 1px solid #8b5cf6; border-radius: 8px; padding: 16px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #8b5cf6; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-hands-helping" style="margin-right: 8px; font-size: 12px;"></i>
                Support Battle Drills
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.5;">
                <ul style="margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Call for Fire</li>
                  <li style="margin-bottom: 4px;">Medical Evacuation</li>
                  <li style="margin-bottom: 4px;">Resupply Operations</li>
                  <li style="margin-bottom: 4px;">Communications Procedures</li>
                  <li style="margin-bottom: 4px;">Air Support Coordination</li>
                  <li style="margin-bottom: 4px;">Engineer Support</li>
                  <li>NBC Procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Execution Standards and Training -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Execution Standards -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 75% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%), radial-gradient(circle at 25% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(220, 38, 38, 0.3); padding-bottom: 8px;">
              <i class="fas fa-stopwatch" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
              Execution Standards
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Performance Criteria</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <ul style="margin: 0; padding-left: 16px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #fca5a5;">Speed:</strong> Immediate response to stimulus</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fca5a5;">Accuracy:</strong> Correct technique execution</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fca5a5;">Coordination:</strong> Synchronized team actions</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fca5a5;">Adaptability:</strong> Effective under varying conditions</li>
                    <li><strong style="color: #fca5a5;">Safety:</strong> Risk mitigation throughout execution</li>
                  </ul>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #dc2626; margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Assessment Methods</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <ul style="margin: 0; padding-left: 16px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #fca5a5;">Go/No-Go evaluation:</strong> Binary pass/fail standards</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fca5a5;">Time-based metrics:</strong> Performance speed requirements</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fca5a5;">Tactical proficiency:</strong> Effectiveness assessment</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fca5a5;">After Action Review:</strong> Continuous improvement process</li>
                    <li><strong style="color: #fca5a5;">Progressive evaluation:</strong> Skill development tracking</li>
                  </ul>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(220, 38, 38, 0.6);">
                <h5 style="font-weight: 700; color: #fca5a5; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(220, 38, 38, 0.3); padding-bottom: 6px;">Critical Standards</h5>
                <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0;"><strong style="color: #a7f3d0;">Non-Negotiable Requirement:</strong> Battle drills must be executed to standard regardless of environmental conditions or stress levels. Failure to meet standards compromises mission success and unit safety.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Training Methodology -->
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1); position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
              <i class="fas fa-graduation-cap" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
              Training Methodology
            </h4>
            <div style="position: relative; z-index: 1;">
              <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Progressive Training Phases</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <ol style="margin: 0; padding-left: 16px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #fbbf24;">Individual:</strong> Basic skills and procedures</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fbbf24;">Team:</strong> Small unit coordination</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fbbf24;">Squad:</strong> Collective task proficiency</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fbbf24;">Platoon:</strong> Integrated operations</li>
                    <li><strong style="color: #fbbf24;">Company:</strong> Complex scenario execution</li>
                  </ol>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b; margin-bottom: 16px;">
                <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Training Conditions</h5>
                <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                  <ul style="margin: 0; padding-left: 16px;">
                    <li style="margin-bottom: 6px;"><strong style="color: #fbbf24;">Daylight operations:</strong> Initial training phase</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fbbf24;">Limited visibility:</strong> Night and low-light conditions</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fbbf24;">Adverse weather:</strong> Environmental challenges</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fbbf24;">High-stress scenarios:</strong> Combat simulation</li>
                    <li style="margin-bottom: 6px;"><strong style="color: #fbbf24;">CBRN environments:</strong> Contaminated areas</li>
                    <li><strong style="color: #fbbf24;">Complex terrain:</strong> Urban and difficult environments</li>
                  </ul>
                </div>
              </div>
              <div style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.6);">
                <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Sustainment Training</h5>
                <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                  <p style="margin: 0;"><strong style="color: #a7f3d0;">Continuous Proficiency:</strong> Regular refresher training maintains proficiency. Battle drills require continuous practice to prevent skill degradation and ensure immediate response capability during combat operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- METT-TC Analysis -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
            <i class="fas fa-crosshairs" style="margin-right: 8px; color: #60a5fa; font-size: 14px;"></i>
            METT-TC Analysis for Battle Drill Selection
          </h4>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-bottom: 20px;">

            <!-- Mission -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #60a5fa; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-bullseye" style="margin-right: 8px; font-size: 12px;"></i>
                Mission
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">Key Considerations:</p>
                <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Type of operation (offensive, defensive, stability)</li>
                  <li style="margin-bottom: 4px;">Mission-essential tasks and constraints</li>
                  <li style="margin-bottom: 4px;">Commander's intent and end state</li>
                  <li>Rules of engagement (ROE) limitations</li>
                </ul>
                <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                  <strong>Impact:</strong> Determines which battle drills are authorized and appropriate for the tactical situation.
                </p>
              </div>
            </div>

            <!-- Enemy -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #60a5fa; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-user-secret" style="margin-right: 8px; font-size: 12px;"></i>
                Enemy
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">Key Considerations:</p>
                <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Enemy capabilities and tactics</li>
                  <li style="margin-bottom: 4px;">Likely enemy courses of action</li>
                  <li style="margin-bottom: 4px;">Enemy weapons systems and ranges</li>
                  <li>Threat level and disposition</li>
                </ul>
                <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                  <strong>Impact:</strong> Influences drill selection, formation, and execution speed based on threat assessment.
                </p>
              </div>
            </div>

            <!-- Terrain -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #60a5fa; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-mountain" style="margin-right: 8px; font-size: 12px;"></i>
                Terrain & Weather
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">Key Considerations:</p>
                <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Observation and fields of fire</li>
                  <li style="margin-bottom: 4px;">Avenues of approach and mobility</li>
                  <li style="margin-bottom: 4px;">Key terrain and obstacles</li>
                  <li>Weather effects on visibility and movement</li>
                </ul>
                <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                  <strong>Impact:</strong> Determines drill modifications for terrain features and environmental conditions.
                </p>
              </div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">

            <!-- Troops -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #60a5fa; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-users" style="margin-right: 8px; font-size: 12px;"></i>
                Troops & Support
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">Key Considerations:</p>
                <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Unit strength and personnel status</li>
                  <li style="margin-bottom: 4px;">Training level and experience</li>
                  <li style="margin-bottom: 4px;">Equipment status and capabilities</li>
                  <li>Available supporting assets</li>
                </ul>
                <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                  <strong>Impact:</strong> Affects drill complexity, execution standards, and required modifications.
                </p>
              </div>
            </div>

            <!-- Time -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #60a5fa; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-clock" style="margin-right: 8px; font-size: 12px;"></i>
                Time Available
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">Key Considerations:</p>
                <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Time for planning and preparation</li>
                  <li style="margin-bottom: 4px;">Time for rehearsals and coordination</li>
                  <li style="margin-bottom: 4px;">Execution timeline constraints</li>
                  <li>Daylight and visibility windows</li>
                </ul>
                <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                  <strong>Impact:</strong> Determines whether to use battle drills versus deliberate planning processes.
                </p>
              </div>
            </div>

            <!-- Civilians -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #60a5fa; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-home" style="margin-right: 8px; font-size: 12px;"></i>
                Civilians
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">Key Considerations:</p>
                <ul style="margin: 0 0 12px 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Civilian presence and density</li>
                  <li style="margin-bottom: 4px;">Cultural and religious factors</li>
                  <li style="margin-bottom: 4px;">Collateral damage concerns</li>
                  <li>Information operations impact</li>
                </ul>
                <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                  <strong>Impact:</strong> Influences drill selection, ROE application, and execution methods.
                </p>
              </div>
            </div>
          </div>

          <div style="background: #111827; border-left: 4px solid #60a5fa; padding: 16px; border-radius: 4px; margin-top: 16px;">
            <p style="margin: 0; color: #93c5fd; font-size: 12px; line-height: 1.5;">
              <strong>METT-TC Integration:</strong> Leaders must continuously assess all METT-TC factors to select appropriate battle drills,
              modify execution procedures, and adapt to changing tactical situations. Battle drills provide rapid response capabilities
              when time-constrained situations prevent deliberate planning processes.
            </p>
          </div>
        </div>

        <!-- Risk Management Section -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
            <i class="fas fa-shield-alt" style="margin-right: 8px; color: #60a5fa; font-size: 14px;"></i>
            Composite Risk Management (CRM) for Battle Drills
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">

            <!-- Risk Assessment Process -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
                Risk Assessment Process
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">CRM Steps for Battle Drills:</p>
                <ol style="margin: 0 0 16px 0; padding-left: 16px;">
                  <li style="margin-bottom: 6px;"><strong>Identify Hazards:</strong> Recognize potential dangers during drill execution</li>
                  <li style="margin-bottom: 6px;"><strong>Assess Hazards:</strong> Determine probability and severity of risks</li>
                  <li style="margin-bottom: 6px;"><strong>Develop Controls:</strong> Create measures to eliminate or reduce risks</li>
                  <li style="margin-bottom: 6px;"><strong>Implement Controls:</strong> Execute risk mitigation measures</li>
                  <li><strong>Supervise & Evaluate:</strong> Monitor effectiveness and adjust as needed</li>
                </ol>

                <div style="background: #111827; border-left: 3px solid #f59e0b; padding: 12px; border-radius: 4px;">
                  <p style="margin: 0; font-size: 11px; color: #fbbf24; font-style: italic;">
                    <i class="fas fa-exclamation-triangle" style="margin-right: 6px;"></i>
                    Risk assessment must be continuous throughout battle drill planning and execution.
                  </p>
                </div>
              </div>
            </div>

            <!-- Common Hazards -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
                Common Battle Drill Hazards
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">High-Risk Areas:</p>
                <ul style="margin: 0 0 16px 0; padding-left: 16px;">
                  <li style="margin-bottom: 6px;"><strong>Weapons Safety:</strong> Muzzle discipline, ammunition handling</li>
                  <li style="margin-bottom: 6px;"><strong>Movement Hazards:</strong> Terrain obstacles, coordination failures</li>
                  <li style="margin-bottom: 6px;"><strong>Communication:</strong> Signal failures, coordination breakdowns</li>
                  <li style="margin-bottom: 6px;"><strong>Environmental:</strong> Weather, visibility, terrain conditions</li>
                  <li style="margin-bottom: 6px;"><strong>Equipment:</strong> Malfunction, maintenance issues</li>
                  <li><strong>Human Factors:</strong> Fatigue, stress, training deficiencies</li>
                </ul>

                <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                  <strong>Priority:</strong> Weapons safety and coordination failures pose the highest risk during battle drill execution.
                </p>
              </div>
            </div>
          </div>

          <!-- Risk Mitigation Strategies -->
          <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
            <h5 style="font-size: 14px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
              Risk Mitigation Strategies
            </h5>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">

              <!-- Safety Controls -->
              <div style="background: #111827; border: 1px solid #dc2626; border-radius: 6px; padding: 12px;">
                <h6 style="font-size: 12px; font-weight: 600; color: #dc2626; margin: 0 0 8px 0;">
                  <i class="fas fa-exclamation-circle" style="margin-right: 6px;"></i>Safety Controls
                </h6>
                <ul style="margin: 0; padding-left: 12px; color: #d1d5db; font-size: 11px;">
                  <li style="margin-bottom: 3px;">Establish clear fields of fire</li>
                  <li style="margin-bottom: 3px;">Enforce muzzle discipline</li>
                  <li style="margin-bottom: 3px;">Use proper protective equipment</li>
                  <li>Maintain ammunition accountability</li>
                </ul>
              </div>

              <!-- Communication Controls -->
              <div style="background: #111827; border: 1px solid #3b82f6; border-radius: 6px; padding: 12px;">
                <h6 style="font-size: 12px; font-weight: 600; color: #3b82f6; margin: 0 0 8px 0;">
                  <i class="fas fa-radio" style="margin-right: 6px;"></i>Communication Controls
                </h6>
                <ul style="margin: 0; padding-left: 12px; color: #d1d5db; font-size: 11px;">
                  <li style="margin-bottom: 3px;">Establish backup communication</li>
                  <li style="margin-bottom: 3px;">Use standardized signals</li>
                  <li style="margin-bottom: 3px;">Confirm understanding</li>
                  <li>Maintain radio discipline</li>
                </ul>
              </div>

              <!-- Training Controls -->
              <div style="background: #111827; border: 1px solid #16a34a; border-radius: 6px; padding: 12px;">
                <h6 style="font-size: 12px; font-weight: 600; color: #16a34a; margin: 0 0 8px 0;">
                  <i class="fas fa-graduation-cap" style="margin-right: 6px;"></i>Training Controls
                </h6>
                <ul style="margin: 0; padding-left: 12px; color: #d1d5db; font-size: 11px;">
                  <li style="margin-bottom: 3px;">Conduct thorough rehearsals</li>
                  <li style="margin-bottom: 3px;">Verify individual proficiency</li>
                  <li style="margin-bottom: 3px;">Practice under stress conditions</li>
                  <li>Maintain training records</li>
                </ul>
              </div>

              <!-- Environmental Controls -->
              <div style="background: #111827; border: 1px solid #8b5cf6; border-radius: 6px; padding: 12px;">
                <h6 style="font-size: 12px; font-weight: 600; color: #8b5cf6; margin: 0 0 8px 0;">
                  <i class="fas fa-cloud-sun" style="margin-right: 6px;"></i>Environmental Controls
                </h6>
                <ul style="margin: 0; padding-left: 12px; color: #d1d5db; font-size: 11px;">
                  <li style="margin-bottom: 3px;">Monitor weather conditions</li>
                  <li style="margin-bottom: 3px;">Assess terrain hazards</li>
                  <li style="margin-bottom: 3px;">Adjust for visibility</li>
                  <li>Plan for contingencies</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Risk Decision Authority -->
          <div style="background: #111827; border-left: 4px solid #dc2626; padding: 16px; border-radius: 4px;">
            <h6 style="font-size: 13px; font-weight: 600; color: #dc2626; margin: 0 0 8px 0;">
              Risk Decision Authority
            </h6>
            <div style="color: #d1d5db; font-size: 12px; line-height: 1.5;">
              <p style="margin: 0 0 8px 0;">
                <strong>Low Risk:</strong> Squad/Team Leader approval • <strong>Moderate Risk:</strong> Platoon Leader approval •
                <strong>High Risk:</strong> Company Commander approval • <strong>Extremely High Risk:</strong> Battalion Commander approval
              </p>
              <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                Leaders at all levels must assess risk continuously and have authority to modify or terminate battle drills
                when risk exceeds acceptable levels or when controls fail.
              </p>
            </div>
          </div>
        </div>

        <!-- Integration with Tactical Operations -->
        <div style="margin-bottom: 24px;">
          <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
            <i class="fas fa-puzzle-piece" style="margin-right: 8px; color: #60a5fa; font-size: 14px;"></i>
            Integration with Tactical Operations
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

            <!-- Tactical Context -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
                Tactical Context Integration
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0;">
                  Battle drills serve as building blocks for complex tactical operations. They provide standardized
                  responses that enable rapid decision-making during fluid combat situations.
                </p>

                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">Key Integration Points:</p>
                <ul style="margin: 0 0 16px 0; padding-left: 16px;">
                  <li style="margin-bottom: 6px;">Movement and maneuver operations</li>
                  <li style="margin-bottom: 6px;">Fire and movement coordination</li>
                  <li style="margin-bottom: 6px;">Defensive position establishment</li>
                  <li style="margin-bottom: 6px;">Reconnaissance and security</li>
                  <li style="margin-bottom: 6px;">Sustainment operations</li>
                  <li>Command and control procedures</li>
                </ul>

                <div style="background: #111827; border-left: 3px solid #10b981; padding: 12px; border-radius: 4px;">
                  <p style="margin: 0; font-size: 11px; color: #34d399; font-style: italic;">
                    <i class="fas fa-lightbulb" style="margin-right: 6px;"></i>
                    Battle drills enable units to maintain momentum during operations by reducing decision-making time.
                  </p>
                </div>
              </div>
            </div>

            <!-- Command Considerations -->
            <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px;">
              <h5 style="font-size: 14px; font-weight: 600; color: #93c5fd; margin: 0 0 12px 0;">
                Command Considerations
              </h5>
              <div style="color: #d1d5db; font-size: 12px; line-height: 1.6;">
                <p style="margin: 0 0 12px 0;">
                  Leaders must understand when to employ battle drills versus deliberate planning processes.
                  Battle drills are most effective in time-constrained, high-stress situations.
                </p>

                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">Leader Responsibilities:</p>
                <ul style="margin: 0 0 16px 0; padding-left: 16px;">
                  <li style="margin-bottom: 6px;">Ensure unit proficiency through training</li>
                  <li style="margin-bottom: 6px;">Adapt drills to mission variables</li>
                  <li style="margin-bottom: 6px;">Maintain situational awareness</li>
                  <li style="margin-bottom: 6px;">Coordinate with adjacent units</li>
                  <li style="margin-bottom: 6px;">Assess effectiveness and adjust</li>
                  <li>Transition to deliberate operations</li>
                </ul>

                <p style="margin: 0 0 12px 0; font-weight: 600; color: #93c5fd;">Decision Factors:</p>
                <ul style="margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Time available for planning</li>
                  <li style="margin-bottom: 4px;">Complexity of the situation</li>
                  <li style="margin-bottom: 4px;">Unit training level</li>
                  <li>Mission requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Battle Drill Execution Process -->
        <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <h4 style="font-size: 16px; font-weight: 600; color: white; margin: 0 0 16px 0; display: flex; align-items: center;">
            <i class="fas fa-cogs" style="margin-right: 8px; color: #60a5fa; font-size: 14px;"></i>
            Battle Drill Execution Process
          </h4>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">

            <!-- Step 1 -->
            <div style="background: #111827; border: 1px solid #16a34a; border-radius: 6px; padding: 16px; text-align: center;">
              <div style="background: #16a34a; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; font-weight: 600; font-size: 14px;">1</div>
              <h5 style="font-size: 13px; font-weight: 600; color: #16a34a; margin: 0 0 8px 0;">STIMULUS</h5>
              <p style="color: #d1d5db; font-size: 11px; line-height: 1.4; margin: 0;">
                Recognition of situation requiring immediate response
              </p>
            </div>

            <!-- Step 2 -->
            <div style="background: #111827; border: 1px solid #3b82f6; border-radius: 6px; padding: 16px; text-align: center;">
              <div style="background: #3b82f6; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; font-weight: 600; font-size: 14px;">2</div>
              <h5 style="font-size: 13px; font-weight: 600; color: #3b82f6; margin: 0 0 8px 0;">REACTION</h5>
              <p style="color: #d1d5db; font-size: 11px; line-height: 1.4; margin: 0;">
                Immediate individual and collective response actions
              </p>
            </div>

            <!-- Step 3 -->
            <div style="background: #111827; border: 1px solid #8b5cf6; border-radius: 6px; padding: 16px; text-align: center;">
              <div style="background: #8b5cf6; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; font-weight: 600; font-size: 14px;">3</div>
              <h5 style="font-size: 13px; font-weight: 600; color: #8b5cf6; margin: 0 0 8px 0;">EXECUTION</h5>
              <p style="color: #d1d5db; font-size: 11px; line-height: 1.4; margin: 0;">
                Coordinated execution of standard procedures
              </p>
            </div>

            <!-- Step 4 -->
            <div style="background: #111827; border: 1px solid #f59e0b; border-radius: 6px; padding: 16px; text-align: center;">
              <div style="background: #f59e0b; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; font-weight: 600; font-size: 14px;">4</div>
              <h5 style="font-size: 13px; font-weight: 600; color: #f59e0b; margin: 0 0 8px 0;">ASSESSMENT</h5>
              <p style="color: #d1d5db; font-size: 11px; line-height: 1.4; margin: 0;">
                Evaluation of effectiveness and transition planning
              </p>
            </div>
          </div>

          <div style="margin-top: 16px; padding: 16px; background: #111827; border-radius: 6px; border-left: 4px solid #60a5fa;">
            <p style="margin: 0; color: #93c5fd; font-size: 12px; line-height: 1.5;">
              <strong>Critical Success Factor:</strong> The entire process from stimulus to assessment must occur rapidly,
              often within seconds, requiring extensive training and muscle memory development. Leaders must be prepared
              to immediately transition from battle drill execution to deliberate tactical operations as the situation develops.
            </p>
          </div>
        </div>

        <!-- Classification Footer -->
        <div style="text-align: center; padding: 16px; border-top: 1px solid #374151; margin-top: 24px;">
          <p style="margin: 0; color: #6b7280; font-size: 12px;">
            <i class="fas fa-shield-alt" style="margin-right: 6px;"></i>
            UNCLASSIFIED - Battle Drill Doctrinal Analysis per FM 3-21.8 and ATP 3-21.8
          </p>
        </div>
      </div>
    `;
  },



  initialize(){
    console.log('✅ Battle Drills Detailed Analysis module initialized');
    return true;
  },
  cleanup(){
    console.log('🧹 Battle Drills Detailed Analysis module cleaned up');
  }
};
export default battleDrillsDetailedAnalysisTacticsModule;

