/**
 * MDMP Receipt of Mission - Battalion Level Analysis Module
 * Tactical Command Doctrinal Analysis Framework
 * Source: FM 3-21.20 (Infantry Battalion), ATP 3-21.20 (Infantry Battalion), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive Battalion-level doctrinal content requirements
 * Expected Length: 500-700 lines of comprehensive tactical command doctrinal analysis
 * European Theater/LSCO scenario framework - Battalion-level (Lieutenant Colonel) tactical command analysis
 */

export const battalionReceiptAnalysisModule = {
  id: 'receipt-analysis-battalion',
  title: 'Battalion Level Analysis',
  echelon: 'battalion',

  getContent() {
    return `
      <div style="padding: 20px;">
        <!-- Battalion Analysis Header -->
        <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <i class="fas fa-flag" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
          <div>
            <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Battalion Level Receipt of Mission - Doctrinal Analysis</h2>
            <p style="color: #9ca3af; font-size: 14px; margin: 0;">Tactical Command Analysis Framework (Lieutenant Colonel)</p>
          </div>
        </div>

        <!-- Tactical Command Overview -->
        <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-flag" style="margin-right: 8px;"></i>
            Battalion Command Tactical Framework - European Theater LSCO
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                <strong>Command Level:</strong> Battalion (Lieutenant Colonel)<br>
                <strong>Geographic Scope:</strong> Battalion Area of Operations (AO)<br>
                <strong>Planning Horizon:</strong> 3-hour tactical planning cycle<br>
                <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
              </p>
            </div>
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Tactical Focus:</strong> Multi-Company coordination and combined arms execution<br>
                <strong>Command Role:</strong> Tactical command and combined arms execution<br>
                <strong>Joint Integration:</strong> Close air support and tactical fires coordination<br>
                <strong>Subordinate Commands:</strong> Multiple Companies and functional platoons
              </p>
            </div>
          </div>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Card 1: Battalion Command Relationships & Company Integration -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Battalion Command Relationships & Company Integration
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Command Authority Structure</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Higher Command:</strong> Brigade tactical guidance and coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Battalion Command:</strong> Combined Arms Battalion, Infantry Battalion</p>
                  <p style="margin: 0 0 6px 0;"><strong>Subordinate Companies:</strong> Rifle Companies, Weapons Company, Headquarters Company</p>
                  <p style="margin: 0 0 6px 0;"><strong>Functional Platoons:</strong> Mortar Platoon, Anti-Tank Platoon, Reconnaissance Platoon</p>
                  <p style="margin: 0 0 6px 0;"><strong>Coalition Integration:</strong> Multinational Company and Platoon integration</p>
                  <p style="margin: 0;"><strong>Joint Coordination:</strong> Close air support and tactical fires coordination</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Multi-Company Coordination Framework</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Company Task Organization:</strong> Combined arms task organization and coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Combined Arms Execution:</strong> Infantry, armor, artillery, engineer coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Tactical Fires Execution:</strong> Battalion fires and Company fires integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>Reserve Management:</strong> Battalion reserve allocation and employment</p>
                  <p style="margin: 0 0 6px 0;"><strong>Reconnaissance Integration:</strong> Battalion reconnaissance and Company reconnaissance</p>
                  <p style="margin: 0;"><strong>Sustainment Coordination:</strong> Battalion sustainment and Company sustainment</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">European Theater Battalion Integration</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Combined Arms Battalion:</strong> Task-organized combined arms operations<br>
                  <strong>Infantry Battalion:</strong> Light, mechanized, and airborne infantry operations<br>
                  <strong>Armor Battalion:</strong> Tank and mechanized infantry operations<br>
                  <strong>Multinational Integration:</strong> European partner nation company coordination
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2: Combined Arms Execution & Tactical Fires -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Combined Arms Execution & Tactical Fires
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Tactical Planning Horizons</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Immediate (0-3 hours):</strong> Company coordination, tactical positioning</p>
                  <p style="margin: 0 0 6px 0;"><strong>Short-term (3 hours-12 hours):</strong> Combined arms execution, tactical fires</p>
                  <p style="margin: 0 0 6px 0;"><strong>Medium-term (12 hours-24 hours):</strong> Tactical objectives, operational continuity</p>
                  <p style="margin: 0 0 6px 0;"><strong>Long-term (24 hours-72 hours):</strong> Tactical stability, force rotation</p>
                  <p style="margin: 0;"><strong>Extended (72+ hours):</strong> Regional security, partnership development</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Combined Arms Execution</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Infantry-Armor Execution:</strong> Combined arms team execution</p>
                  <p style="margin: 0 0 6px 0;"><strong>Artillery Execution:</strong> Battalion fires and Company fires coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Engineer Execution:</strong> Mobility, counter-mobility, survivability</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Coordination:</strong> Close air support and aviation coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Intelligence Execution:</strong> Battalion intelligence and Company intelligence</p>
                  <p style="margin: 0;"><strong>Signal Execution:</strong> Battalion communications and Company communications</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion MDMP Tactical Considerations</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>3-Hour Cycle:</strong> Tactical planning cycle for Battalion-level decisions<br>
                  <strong>Tactical Factors:</strong> METT-TC analysis and tactical variables<br>
                  <strong>Risk Assessment:</strong> Tactical risk to mission and force protection<br>
                  <strong>Resource Allocation:</strong> Battalion-wide tactical resource prioritization
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Company Task Organization & Coalition Integration -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-handshake" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Company Task Organization & Coalition Integration
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Multi-Company Task Organization</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Rifle Companies:</strong> Task-organized rifle company teams</p>
                  <p style="margin: 0 0 6px 0;"><strong>Weapons Company:</strong> Heavy weapons and fire support</p>
                  <p style="margin: 0 0 6px 0;"><strong>Headquarters Company:</strong> Command, control, and support</p>
                  <p style="margin: 0 0 6px 0;"><strong>Mortar Platoon:</strong> Indirect fire support and coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Anti-Tank Platoon:</strong> Anti-armor and direct fire support</p>
                  <p style="margin: 0;"><strong>Reconnaissance Platoon:</strong> Battalion reconnaissance and security</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Coalition Battalion Integration</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>NATO Framework:</strong> Allied Company and Platoon integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>European Partners:</strong> German, French, British, Polish Company coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Multinational Companies:</strong> Integration with European multinational companies</p>
                  <p style="margin: 0 0 6px 0;"><strong>Standardization:</strong> NATO STANAGs and interoperability procedures</p>
                  <p style="margin: 0 0 6px 0;"><strong>Command Integration:</strong> Liaison and coordination mechanisms</p>
                  <p style="margin: 0;"><strong>Resource Sharing:</strong> Coalition capability and resource integration</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion Tactical Coordination</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Joint Coordination:</strong> Battalion-level close air support and tactical fires<br>
                  <strong>Interagency:</strong> Civil affairs and information operations coordination<br>
                  <strong>Host Nation:</strong> European host nation military coordination<br>
                  <strong>Special Operations:</strong> Battalion SOF and conventional force integration
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Battalion Tactical Functions & Sustainment -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-shipping-fast" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Battalion Tactical Functions & Sustainment
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Tactical Functions</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Movement and Maneuver:</strong> Company positioning and tactical maneuver</p>
                  <p style="margin: 0 0 6px 0;"><strong>Intelligence:</strong> Battalion intelligence and Company intelligence fusion</p>
                  <p style="margin: 0 0 6px 0;"><strong>Fires:</strong> Battalion fires coordination and Company fires integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>Sustainment:</strong> Battalion sustainment and Company sustainment coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Protection:</strong> Battalion force protection and Company protection coordination</p>
                  <p style="margin: 0;"><strong>Command and Control:</strong> Battalion C2 architecture and Company C2 integration</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Battalion Sustainment Framework</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Headquarters Company:</strong> Battalion-level sustainment coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Company Sustainment:</strong> Multi-Company logistics coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Distribution Management:</strong> Battalion distribution and transportation</p>
                  <p style="margin: 0 0 6px 0;"><strong>Medical Support:</strong> Battalion medical and Company medical coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Maintenance Support:</strong> Battalion maintenance and Company maintenance</p>
                  <p style="margin: 0;"><strong>Host Nation Support:</strong> European logistics and infrastructure integration</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Battalion Tactical Reach</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Geographic Scope:</strong> Battalion Area of Operations (AO)<br>
                  <strong>Temporal Scope:</strong> 3-hour tactical planning and execution<br>
                  <strong>Functional Scope:</strong> Multi-Company coordination and integration<br>
                  <strong>Coalition Scope:</strong> Multinational company and platoon coordination
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Battalion-Specific Tactical Doctrinal Analysis -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-flag" style="margin-right: 8px;"></i>
            Battalion-Level Tactical Doctrinal Analysis
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Authority</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Brigade tactical guidance implementation</li>
                <li>Battalion tactical command authority</li>
                <li>Multi-Company tactical coordination</li>
                <li>Combined arms execution and coordination</li>
                <li>Coalition company command relationships</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Tactical Planning Considerations</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Battalion tactical design and approach</li>
                <li>Multi-Company synchronization and coordination</li>
                <li>Combined arms execution integration</li>
                <li>Tactical sustainment and logistics</li>
                <li>Tactical risk assessment and mitigation</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Multi-National Integration</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>NATO Allied Battalion coordination</li>
                <li>European partner company integration</li>
                <li>Multinational platoon coordination</li>
                <li>Host nation support integration</li>
                <li>Coalition capability integration</li>
              </ul>
            </div>
          </div>

          <!-- Battalion Tactical Doctrinal Framework -->
          <div style="background-color: #374151; padding: 16px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 16px;">
            <h4 style="color: #4ade80; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
              <i class="fas fa-book" style="margin-right: 8px;"></i>
              Battalion Tactical Doctrinal Framework (FM 3-21.20, FM 5-0)
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <h5 style="color: #16a34a; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Tactical Planning Principles</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Unity of Command:</strong> Clear Battalion command authority over subordinate Companies</li>
                  <li><strong>Unity of Effort:</strong> Synchronized multi-Company and coalition coordination</li>
                  <li><strong>Tactical Flexibility:</strong> Adaptive planning for multiple tactical scenarios</li>
                  <li><strong>Combined Arms Execution:</strong> Infantry, armor, artillery, engineer coordination</li>
                  <li><strong>Tactical Tempo:</strong> Sustained tactical pace and rhythm</li>
                  <li><strong>Tactical Reach:</strong> Geographic and temporal tactical scope</li>
                </ul>
              </div>
              <div>
                <h5 style="color: #16a34a; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Battalion Tactical Functions</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Tactical Maneuver:</strong> Company positioning and tactical movement</li>
                  <li><strong>Tactical Fires:</strong> Battalion fires coordination and close support</li>
                  <li><strong>Tactical Intelligence:</strong> Battalion intelligence and Company intelligence fusion</li>
                  <li><strong>Tactical Sustainment:</strong> Battalion sustainment and Company support</li>
                  <li><strong>Tactical Protection:</strong> Battalion force protection and security</li>
                  <li><strong>Tactical Command and Control:</strong> Battalion C2 and Company integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Doctrinal Takeaways -->
        <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
          <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-key" style="margin-right: 8px;"></i>
            Battalion Receipt of Mission - Key Doctrinal Takeaways
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Tactical Command Imperatives</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li>Brigade tactical guidance implementation through Company coordination</li>
                <li>Battalion tactical command authority and combined arms execution</li>
                <li>Multi-Company synchronization and tactical maneuver coordination</li>
                <li>Coalition company integration and multinational coordination</li>
                <li>Tactical risk assessment and mitigation across all functions</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Battalion Planning Priorities</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li>Tactical planning cycle (3 hours) for Battalion-level decisions</li>
                <li>Battalion tactical design and combined arms execution integration</li>
                <li>Multi-Company integration and coalition coordination</li>
                <li>Battalion sustainment coordination and tactical logistics</li>
                <li>Combined arms execution coordination and tactical fires integration</li>
              </ul>
            </div>
          </div>
        </div>

      </div>`;
  }
};
