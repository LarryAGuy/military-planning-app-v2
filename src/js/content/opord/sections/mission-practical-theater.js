/**
 * OPORD Mission - Theater Level Practical Examples
 * Comprehensive theater-level mission content serving as strategic foundation
 * Designed for downward scaffolding to Corps, Army, Division, and lower echelons
 *
 * SPECIAL AUTHORIZATION: Can exceed 300-line limit due to extensive strategic content requirements
 */

export const theaterPracticalModule = {
  getContent() {
    return `
      <!-- Theater-Level Mission Analysis - Strategic Foundation -->
      <div style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-globe" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
            Theater-Level Mission Example: Operation ALLIED RESOLVE
          </h3>
          <p style="color: #9ca3af; font-size: 14px; margin: 8px 0 0 0;">
            Multi-Domain Operations (MDO) across European Theater - Strategic Foundation for Subordinate Commands
          </p>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
        ">

          <!-- Card 1: Theater Mission Statement & Strategic Objectives -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            min-height: 320px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-bullseye" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                Theater Mission Statement & Strategic End State
              </h4>

              <!-- Mission Statement -->
              <div style="background-color: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #10b981; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Theater Mission (5Ws)</h5>
                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>WHO:</strong> U.S. European Command (USEUCOM)<br>
                  <strong>WHAT:</strong> Conduct multi-domain operations to deter aggression and defend NATO territory<br>
                  <strong>WHEN:</strong> Effective 150600Z MAR 25, duration 180 days<br>
                  <strong>WHERE:</strong> European Theater of Operations (ETO), focus Baltic States and Eastern Europe<br>
                  <strong>WHY:</strong> Maintain strategic stability and alliance cohesion IAW National Defense Strategy
                </p>
              </div>

              <!-- Strategic End State -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #10b981;">
                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Strategic End State</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Friendly:</strong> NATO alliance strengthened; U.S. forces postured for rapid response</li>
                  <li><strong>Enemy:</strong> Adversary deterred from territorial aggression; hybrid threats neutralized</li>
                  <li><strong>Terrain:</strong> Key infrastructure protected; strategic lines of communication secured</li>
                  <li><strong>Civil:</strong> Allied populations confident in collective defense; refugee flows managed</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Card 2: Theater Task Organization & Command Relationships -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            min-height: 320px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                Theater Task Organization & Joint Force Structure
              </h4>

              <!-- Main Effort -->
              <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Main Effort</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>V Corps (OPCON):</strong> Ground component commander, Baltic defense</li>
                  <li><strong>Priority:</strong> Fires, ISR, air defense, strategic mobility</li>
                </ul>
              </div>

              <!-- Supporting Efforts -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Supporting Efforts</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>USAFE-AFAFRICA (OPCON):</strong> Air component, air superiority</li>
                  <li><strong>U.S. Naval Forces Europe (OPCON):</strong> Maritime component, sea control</li>
                  <li><strong>USCYBERCOM Europe (OPCON):</strong> Cyber operations, EW</li>
                  <li><strong>USSOCOM Europe (TACON):</strong> Special operations, UW</li>
                </ul>
              </div>

              <!-- Coalition Forces -->
              <div style="background-color: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 4px 0;">Coalition Integration</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  NATO Article 5 activated; UK, French, German, Polish divisions OPCON to respective corps;
                  Multinational Division North (OPCON V Corps)
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Multi-Domain Operations & Strategic Coordination -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            min-height: 320px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-layer-group" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
                Multi-Domain Operations & Strategic Synchronization
              </h4>

              <!-- Domain Integration -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 10px;">
                <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 8px;">
                  <div style="color: #c4b5fd; font-weight: 600; font-size: 12px; margin-bottom: 4px;">Land & Air Domains</div>
                  <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                    <li>Integrated air-land battle</li>
                    <li>Long-range precision fires</li>
                    <li>Rapid strategic mobility</li>
                  </ul>
                </div>
                <div style="background-color: #374151; border-radius: 6px; padding: 8px; border-left: 3px solid #8b5cf6;">
                  <div style="color: #c4b5fd; font-weight: 600; font-size: 12px; margin-bottom: 4px;">Maritime & Space</div>
                  <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                    <li>Sea control operations</li>
                    <li>Satellite communications</li>
                    <li>Space-based ISR</li>
                  </ul>
                </div>
              </div>

              <!-- Cyber & Information Operations -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #ef4444; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Cyber & Information Domain</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Defensive Cyber:</strong> Critical infrastructure protection, network defense</li>
                  <li><strong>Offensive Cyber:</strong> Adversary C2 disruption, logistics targeting</li>
                  <li><strong>Information Operations:</strong> Counter-disinformation, strategic messaging</li>
                  <li><strong>Electronic Warfare:</strong> Spectrum dominance, communications disruption</li>
                </ul>
              </div>

              <!-- Strategic Coordination -->
              <div style="background-color: #111827; padding: 8px; border-radius: 6px; border: 1px dashed #374151;">
                <div style="color: #9ca3af; font-size: 11px; margin-bottom: 4px;">Strategic Synchronization:</div>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Coordinate with STRATCOM, TRANSCOM, and interagency partners;
                  synchronize with NATO Supreme Allied Commander Europe (SACEUR)
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Theater Sustainment & Strategic Communications -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            min-height: 320px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-truck" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                Theater Sustainment & Strategic Communications
              </h4>

              <!-- Strategic Sustainment -->
              <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Theater Sustainment Operations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Strategic Mobility:</strong> TRANSCOM airlift/sealift, host nation support</li>
                  <li><strong>Theater Distribution:</strong> Multi-modal logistics networks, forward staging</li>
                  <li><strong>Medical Support:</strong> Role 4 facilities, strategic MEDEVAC, blood supply</li>
                  <li><strong>Maintenance:</strong> Theater-level repair, strategic parts supply</li>
                </ul>
              </div>

              <!-- Strategic Communications -->
              <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Strategic Communications Architecture</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Command Networks:</strong> SIPR, JWICS, coalition networks</li>
                  <li><strong>Satellite Communications:</strong> MILSTAR, AEHF, commercial SATCOM</li>
                  <li><strong>Interoperability:</strong> NATO standards, coalition interoperability</li>
                </ul>
              </div>

              <!-- Risk Management -->
              <div style="background-color: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 6px; border: 1px solid #ef4444;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Strategic Risk Considerations</h5>
                <p style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0;">
                  Nuclear escalation management; civilian casualty mitigation;
                  alliance cohesion maintenance; strategic communication vulnerabilities
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Theater-Level Coordinating Instructions -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-top: 16px;">
          <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
            <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
            Theater Coordinating Instructions & Strategic Guidance
          </h4>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
            <!-- Strategic CCIR -->
            <div style="background-color: rgba(139, 92, 246, 0.1); border: 1px solid #8b5cf6; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Strategic CCIR</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>PIR 1:</strong> Adversary nuclear posture changes</li>
                <li><strong>PIR 2:</strong> Coalition commitment levels</li>
                <li><strong>FFIR 1:</strong> Strategic mobility capacity</li>
                <li><strong>EEFI 1:</strong> U.S. nuclear readiness status</li>
              </ul>
            </div>

            <!-- Strategic Control Measures -->
            <div style="background-color: #374151; border-radius: 6px; padding: 10px; border-left: 3px solid #8b5cf6;">
              <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Theater Control Measures</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>AOR Boundaries:</strong> USEUCOM/USCENTCOM coordination</li>
                <li><strong>FSCL:</strong> Theater-level fire coordination</li>
                <li><strong>Strategic Mobility Corridors:</strong> Air/sea lanes</li>
                <li><strong>Coalition Coordination Areas:</strong> Multinational boundaries</li>
              </ul>
            </div>

            <!-- Escalation Management -->
            <div style="background-color: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; border-radius: 6px; padding: 10px;">
              <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Escalation Control</h5>
              <ul style="color: #d1d5db; font-size: 11px; line-height: 1.3; margin: 0; padding-left: 14px;">
                <li><strong>ROE:</strong> Presidential approval for strategic targets</li>
                <li><strong>Nuclear Consultation:</strong> NATO Nuclear Planning Group</li>
                <li><strong>De-escalation:</strong> Diplomatic off-ramps maintained</li>
                <li><strong>Strategic Messaging:</strong> Coordinated with State Department</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Doctrinal Foundation Note -->
        <div style="background-color: #111827; border: 1px dashed #374151; border-radius: 6px; padding: 12px; margin-top: 16px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <i class="fas fa-book" style="color: #10b981; margin-right: 8px; font-size: 14px;"></i>
            <h5 style="font-weight: 600; color: #10b981; font-size: 12px; margin: 0;">Doctrinal Foundation for Subordinate Echelons</h5>
          </div>
          <p style="color: #9ca3af; font-size: 12px; line-height: 1.4; margin: 0;">
            This theater-level mission framework cascades to subordinate commands: <strong>Corps</strong> inherits geographic AORs and coalition integration;
            <strong>Army/Division</strong> adapt task organization and sustainment concepts; <strong>Brigade/Battalion</strong> implement tactical tasks within strategic context;
            <strong>Company/Platoon</strong> execute specific missions supporting theater objectives. Each echelon maintains doctrinal alignment per FM 5-0,
            ADP 3-0, and JP 3-0 while scaling complexity to appropriate command level.
          </p>
        </div>
      </div>
    `;
  }
};

