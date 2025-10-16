/**
 * MDMP Receipt of Mission - Brigade Level Analysis Module
 * Tactical Command Doctrinal Analysis Framework
 * Source: FM 3-96 (Brigade Combat Team), ATP 3-96 (Brigade Combat Team), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive Brigade-level doctrinal content requirements
 * Expected Length: 500-800 lines of comprehensive tactical command doctrinal analysis
 * European Theater/LSCO scenario framework - Brigade-level (Colonel) tactical command analysis
 */

export const brigadeReceiptAnalysisModule = {
  id: 'receipt-analysis-brigade',
  title: 'Brigade Level Analysis',
  echelon: 'brigade',

  getContent() {
    return `
      <div style="padding: 20px;">
        <!-- Brigade Analysis Header -->
        <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <i class="fas fa-shield-alt" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
          <div>
            <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Brigade Level Receipt of Mission - Doctrinal Analysis</h2>
            <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical Command Analysis Framework (Colonel)</p>
          </div>
        </div>

        <!-- Tactical Command Overview -->
        <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-flag" style="margin-right: 8px;"></i>
            Brigade Command Tactical Framework - European Theater LSCO
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                <strong>Command Level:</strong> Brigade Combat Team (Colonel)<br>
                <strong>Geographic Scope:</strong> Brigade Area of Operations (AO)<br>
                <strong>Planning Horizon:</strong> 6-hour tactical planning cycle<br>
                <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
              </p>
            </div>
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Tactical Focus:</strong> Multi-Battalion coordination and combined arms integration<br>
                <strong>Command Role:</strong> Tactical command and combined arms coordination<br>
                <strong>Joint Integration:</strong> Close air support and joint fires coordination<br>
                <strong>Subordinate Commands:</strong> Multiple Battalions and functional companies
              </p>
            </div>
          </div>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Card 1: Brigade Command Relationships & Battalion Integration -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Brigade Command Relationships & Battalion Integration
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Command Authority Structure</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Higher Command:</strong> Division tactical guidance and coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Brigade Command:</strong> Armored BCT, Infantry BCT, Stryker BCT</p>
                  <p style="margin: 0 0 6px 0;"><strong>Subordinate Battalions:</strong> Combined Arms Battalions, Infantry Battalions, Cavalry Squadron</p>
                  <p style="margin: 0 0 6px 0;"><strong>Functional Companies:</strong> Artillery, Engineer, Signal, Military Intelligence, Sustainment</p>
                  <p style="margin: 0 0 6px 0;"><strong>Coalition Integration:</strong> Multinational Battalion and Company integration</p>
                  <p style="margin: 0;"><strong>Joint Coordination:</strong> Close air support and joint fires coordination</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Multi-Battalion Coordination Framework</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Battalion Task Organization:</strong> Combined arms task organization and coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Combined Arms Integration:</strong> Infantry, armor, artillery, engineer coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Tactical Fires:</strong> Brigade fires and Battalion fires integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>Reserve Management:</strong> Brigade reserve allocation and employment</p>
                  <p style="margin: 0 0 6px 0;"><strong>Reconnaissance Integration:</strong> Cavalry Squadron and Battalion reconnaissance</p>
                  <p style="margin: 0;"><strong>Sustainment Coordination:</strong> Brigade sustainment and Battalion sustainment</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">European Theater Brigade Integration</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Armored BCT:</strong> Heavy armor and mechanized combined arms operations<br>
                  <strong>Infantry BCT:</strong> Light infantry and dismounted operations<br>
                  <strong>Stryker BCT:</strong> Medium-weight combined arms operations<br>
                  <strong>Multinational Integration:</strong> European partner nation battalion coordination
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2: Combined Arms Operations & Tactical Fires -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Combined Arms Operations & Tactical Fires
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Tactical Planning Horizons</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Immediate (0-6 hours):</strong> Battalion coordination, tactical positioning</p>
                  <p style="margin: 0 0 6px 0;"><strong>Short-term (6 hours-24 hours):</strong> Combined arms operations, tactical fires</p>
                  <p style="margin: 0 0 6px 0;"><strong>Medium-term (24 hours-72 hours):</strong> Tactical objectives, operational continuity</p>
                  <p style="margin: 0 0 6px 0;"><strong>Long-term (72 hours-7 days):</strong> Tactical stability, force rotation</p>
                  <p style="margin: 0;"><strong>Extended (7+ days):</strong> Regional security, partnership development</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Combined Arms Integration</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Infantry-Armor Integration:</strong> Combined arms team coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Artillery Integration:</strong> Brigade fires and Battalion fires coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Engineer Integration:</strong> Mobility, counter-mobility, survivability</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Integration:</strong> Close air support and aviation coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Intelligence Integration:</strong> Brigade intelligence and Battalion intelligence</p>
                  <p style="margin: 0;"><strong>Signal Integration:</strong> Brigade communications and Battalion communications</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade MDMP Tactical Considerations</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>6-Hour Cycle:</strong> Tactical planning cycle for Brigade-level decisions<br>
                  <strong>Tactical Factors:</strong> METT-TC analysis and tactical variables<br>
                  <strong>Risk Assessment:</strong> Tactical risk to mission and force protection<br>
                  <strong>Resource Allocation:</strong> Brigade-wide tactical resource prioritization
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Battalion Task Organization & Coalition Integration -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-handshake" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Battalion Task Organization & Coalition Integration
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Multi-Battalion Task Organization</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Combined Arms Battalions:</strong> Task-organized combined arms teams</p>
                  <p style="margin: 0 0 6px 0;"><strong>Infantry Battalions:</strong> Light, mechanized, and airborne infantry</p>
                  <p style="margin: 0 0 6px 0;"><strong>Cavalry Squadron:</strong> Reconnaissance and security operations</p>
                  <p style="margin: 0 0 6px 0;"><strong>Artillery Battalion:</strong> Field artillery and fires coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Engineer Company:</strong> Mobility, counter-mobility, survivability</p>
                  <p style="margin: 0;"><strong>Support Battalion:</strong> Brigade sustainment and logistics</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Coalition Brigade Integration</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>NATO Framework:</strong> Allied Battalion and Company integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>European Partners:</strong> German, French, British, Polish Battalion coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Multinational Battalions:</strong> Integration with European multinational battalions</p>
                  <p style="margin: 0 0 6px 0;"><strong>Standardization:</strong> NATO STANAGs and interoperability procedures</p>
                  <p style="margin: 0 0 6px 0;"><strong>Command Integration:</strong> Liaison and coordination mechanisms</p>
                  <p style="margin: 0;"><strong>Resource Sharing:</strong> Coalition capability and resource integration</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade Tactical Coordination</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Joint Coordination:</strong> Brigade-level close air support and joint fires<br>
                  <strong>Interagency:</strong> Civil affairs and information operations coordination<br>
                  <strong>Host Nation:</strong> European host nation military coordination<br>
                  <strong>Special Operations:</strong> Brigade SOF and conventional force integration
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Brigade Tactical Functions & Sustainment -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-shipping-fast" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Brigade Tactical Functions & Sustainment
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Tactical Functions</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Movement and Maneuver:</strong> Battalion positioning and tactical maneuver</p>
                  <p style="margin: 0 0 6px 0;"><strong>Intelligence:</strong> Brigade intelligence and Battalion intelligence fusion</p>
                  <p style="margin: 0 0 6px 0;"><strong>Fires:</strong> Brigade fires coordination and Battalion fires integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>Sustainment:</strong> Brigade sustainment and Battalion sustainment coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Protection:</strong> Brigade force protection and Battalion protection coordination</p>
                  <p style="margin: 0;"><strong>Command and Control:</strong> Brigade C2 architecture and Battalion C2 integration</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Brigade Sustainment Framework</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Brigade Support Battalion:</strong> Brigade-level sustainment coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Battalion Sustainment:</strong> Multi-Battalion logistics coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Distribution Management:</strong> Brigade distribution and transportation</p>
                  <p style="margin: 0 0 6px 0;"><strong>Medical Support:</strong> Brigade medical and Battalion medical coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Maintenance Support:</strong> Brigade maintenance and Battalion maintenance</p>
                  <p style="margin: 0;"><strong>Host Nation Support:</strong> European logistics and infrastructure integration</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Brigade Tactical Reach</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Geographic Scope:</strong> Brigade Area of Operations (AO)<br>
                  <strong>Temporal Scope:</strong> 6-hour tactical planning and execution<br>
                  <strong>Functional Scope:</strong> Multi-Battalion coordination and integration<br>
                  <strong>Coalition Scope:</strong> Multinational battalion and company coordination
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Brigade-Specific Tactical Doctrinal Analysis -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
            Brigade-Level Tactical Doctrinal Analysis
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Authority</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Division tactical guidance implementation</li>
                <li>Brigade tactical command authority</li>
                <li>Multi-Battalion tactical coordination</li>
                <li>Combined arms integration and coordination</li>
                <li>Coalition battalion command relationships</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Tactical Planning Considerations</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Brigade tactical design and approach</li>
                <li>Multi-Battalion synchronization and coordination</li>
                <li>Combined arms operations integration</li>
                <li>Tactical sustainment and logistics</li>
                <li>Tactical risk assessment and mitigation</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Multi-National Integration</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>NATO Allied Brigade coordination</li>
                <li>European partner battalion integration</li>
                <li>Multinational company coordination</li>
                <li>Host nation support integration</li>
                <li>Coalition capability integration</li>
              </ul>
            </div>
          </div>

          <!-- Brigade Tactical Doctrinal Framework -->
          <div style="background-color: #374151; padding: 16px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 16px;">
            <h4 style="color: #4ade80; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
              <i class="fas fa-book" style="margin-right: 8px;"></i>
              Brigade Tactical Doctrinal Framework (FM 3-96, FM 5-0)
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <h5 style="color: #16a34a; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Tactical Planning Principles</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Unity of Command:</strong> Clear Brigade command authority over subordinate Battalions</li>
                  <li><strong>Unity of Effort:</strong> Synchronized multi-Battalion and coalition coordination</li>
                  <li><strong>Tactical Flexibility:</strong> Adaptive planning for multiple tactical scenarios</li>
                  <li><strong>Combined Arms Integration:</strong> Infantry, armor, artillery, engineer coordination</li>
                  <li><strong>Tactical Tempo:</strong> Sustained tactical pace and rhythm</li>
                  <li><strong>Tactical Reach:</strong> Geographic and temporal tactical scope</li>
                </ul>
              </div>
              <div>
                <h5 style="color: #16a34a; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Brigade Tactical Functions</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Tactical Maneuver:</strong> Battalion positioning and tactical movement</li>
                  <li><strong>Tactical Fires:</strong> Brigade fires coordination and close support</li>
                  <li><strong>Tactical Intelligence:</strong> Brigade intelligence and Battalion intelligence fusion</li>
                  <li><strong>Tactical Sustainment:</strong> Brigade sustainment and Battalion support</li>
                  <li><strong>Tactical Protection:</strong> Brigade force protection and security</li>
                  <li><strong>Tactical Command and Control:</strong> Brigade C2 and Battalion integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Doctrinal Takeaways -->
        <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
          <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-key" style="margin-right: 8px;"></i>
            Brigade Receipt of Mission - Key Doctrinal Takeaways
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Imperatives</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li>Division tactical guidance implementation through Battalion coordination</li>
                <li>Brigade tactical command authority and combined arms integration</li>
                <li>Multi-Battalion synchronization and tactical maneuver coordination</li>
                <li>Coalition battalion integration and multinational coordination</li>
                <li>Tactical risk assessment and mitigation across all functions</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Brigade Planning Priorities</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li>Tactical planning cycle (6 hours) for Brigade-level decisions</li>
                <li>Brigade tactical design and combined arms operations integration</li>
                <li>Multi-Battalion integration and coalition coordination</li>
                <li>Brigade sustainment coordination and tactical logistics</li>
                <li>Combined arms coordination and tactical fires integration</li>
              </ul>
            </div>
          </div>
        </div>

      </div>`;
  }
};
