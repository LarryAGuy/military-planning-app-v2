/**
 * MDMP Receipt of Mission - Group Level Analysis Module
 * Aviation Command Doctrinal Analysis Framework
 * Source: FM 3-04 (Army Aviation), ATP 3-04.1 (Aviation Tactical Employment), FM 5-0 (Nov 2024)
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive Group-level doctrinal content requirements
 * Expected Length: 500-800 lines of comprehensive aviation command doctrinal analysis
 * European Theater/LSCO scenario framework - Group-level (Colonel) aviation command analysis
 */

export const groupReceiptAnalysisModule = {
  id: 'receipt-analysis-group',
  title: 'Group Level Analysis',
  echelon: 'group',

  getContent() {
    return `
      <div style="padding: 20px;">
        <!-- Group Analysis Header -->
        <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
          <i class="fas fa-helicopter" style="margin-right: 12px; color: #16a34a; font-size: 24px;"></i>
          <div>
            <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Group Level Receipt of Mission - Doctrinal Analysis</h2>
            <p style="color: #9ca3af; font-size: 14px; margin: 0;">Aviation Command Analysis Framework (Colonel)</p>
          </div>
        </div>

        <!-- Aviation Command Overview -->
        <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
          <h3 style="color: #dbeafe; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-flag" style="margin-right: 8px;"></i>
            Group Command Aviation Framework - European Theater LSCO
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
                <strong>Command Level:</strong> Aviation Group (Colonel)<br>
                <strong>Geographic Scope:</strong> Group Area of Operations (AO)<br>
                <strong>Planning Horizon:</strong> 4-hour aviation planning cycle<br>
                <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
              </p>
            </div>
            <div>
              <p style="color: #e0e7ff; font-size: 12px; line-height: 1.4; margin: 0;">
                <strong>Aviation Focus:</strong> Multi-Battalion coordination and aviation operations<br>
                <strong>Command Role:</strong> Aviation command and multi-role coordination<br>
                <strong>Joint Integration:</strong> Joint aviation and air-ground coordination<br>
                <strong>Subordinate Commands:</strong> Multiple Aviation Battalions and functional companies
              </p>
            </div>
          </div>
        </div>

        <!-- 2x2 Content Card Grid -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

          <!-- Card 1: Group Command Relationships & Battalion Integration -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Group Command Relationships & Battalion Integration
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Command Authority Structure</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Higher Command:</strong> Division or Corps aviation guidance</p>
                  <p style="margin: 0 0 6px 0;"><strong>Group Command:</strong> Combat Aviation Brigade (CAB), Aviation Group</p>
                  <p style="margin: 0 0 6px 0;"><strong>Subordinate Battalions:</strong> Attack Battalion, Assault Battalion, General Support Battalion</p>
                  <p style="margin: 0 0 6px 0;"><strong>Functional Companies:</strong> Headquarters Company, Maintenance Company, Signal Company</p>
                  <p style="margin: 0 0 6px 0;"><strong>Coalition Integration:</strong> Multinational Aviation Battalion and Company integration</p>
                  <p style="margin: 0;"><strong>Joint Coordination:</strong> Joint aviation and air-ground coordination</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Multi-Battalion Aviation Coordination Framework</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Battalion Task Organization:</strong> Aviation mission task organization</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Integration:</strong> Attack, assault, general support coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Operations:</strong> Group aviation and Battalion aviation integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Sustainment:</strong> Group sustainment and Battalion sustainment</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Maintenance:</strong> Group maintenance and Battalion maintenance coordination</p>
                  <p style="margin: 0;"><strong>Aviation Communications:</strong> Group communications and Battalion communications</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">European Theater Group Integration</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Combat Aviation Brigade:</strong> Multi-role aviation operations<br>
                  <strong>Attack Aviation:</strong> AH-64 Apache operations and coordination<br>
                  <strong>Assault Aviation:</strong> UH-60 Black Hawk operations and coordination<br>
                  <strong>Multinational Integration:</strong> European partner nation aviation coordination
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2: Aviation Operations & Multi-Role Missions -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-plane" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Aviation Operations & Multi-Role Missions
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Aviation Planning Horizons</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Immediate (0-4 hours):</strong> Battalion coordination, aviation positioning</p>
                  <p style="margin: 0 0 6px 0;"><strong>Short-term (4 hours-12 hours):</strong> Aviation operations, multi-role missions</p>
                  <p style="margin: 0 0 6px 0;"><strong>Medium-term (12 hours-48 hours):</strong> Aviation objectives, operational continuity</p>
                  <p style="margin: 0 0 6px 0;"><strong>Long-term (48 hours-7 days):</strong> Aviation stability, force rotation</p>
                  <p style="margin: 0;"><strong>Extended (7+ days):</strong> Regional security, partnership development</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Aviation Operations Integration</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Attack Operations:</strong> Group attack aviation and Battalion attack coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Assault Operations:</strong> Group assault aviation and Battalion assault integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>General Support Operations:</strong> Group general support and Battalion support coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Reconnaissance Operations:</strong> Group reconnaissance and Battalion reconnaissance integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>Medical Evacuation:</strong> Group medical evacuation and Battalion medical coordination</p>
                  <p style="margin: 0;"><strong>Logistics Operations:</strong> Group logistics and Battalion logistics coordination</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Group MDMP Aviation Considerations</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>4-Hour Cycle:</strong> Aviation planning cycle for Group-level decisions<br>
                  <strong>Aviation Factors:</strong> Weather, terrain, enemy air defense considerations<br>
                  <strong>Risk Assessment:</strong> Aviation risk to mission and aircraft protection<br>
                  <strong>Resource Allocation:</strong> Group-wide aviation resource prioritization
                </p>
              </div>
            </div>
          </div>

          <!-- Card 3: Battalion Coordination & Coalition Integration -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-handshake" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Battalion Coordination & Coalition Integration
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Multi-Battalion Aviation Coordination</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Battalion Synchronization:</strong> Multi-Battalion aviation coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Mission Coordination:</strong> Aviation mission management and control</p>
                  <p style="margin: 0 0 6px 0;"><strong>Airspace Control:</strong> Aviation airspace coordination and deconfliction</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Maintenance:</strong> Group maintenance and Battalion maintenance integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Sustainment:</strong> Group sustainment and Battalion sustainment coordination</p>
                  <p style="margin: 0;"><strong>Aviation Communications:</strong> Group communications and Battalion communications</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Coalition Group Integration</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>NATO Framework:</strong> Allied Aviation Battalion and Company integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>European Partners:</strong> German, French, British, Polish Aviation coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Multinational Aviation:</strong> Integration with European multinational aviation</p>
                  <p style="margin: 0 0 6px 0;"><strong>Standardization:</strong> NATO STANAGs and interoperability procedures</p>
                  <p style="margin: 0 0 6px 0;"><strong>Command Integration:</strong> Liaison and coordination mechanisms</p>
                  <p style="margin: 0;"><strong>Resource Sharing:</strong> Coalition capability and resource integration</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Group Aviation Coordination</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Joint Coordination:</strong> Group-level joint aviation and air-ground coordination<br>
                  <strong>Interagency:</strong> Aviation support and information operations coordination<br>
                  <strong>Host Nation:</strong> European host nation aviation coordination<br>
                  <strong>Special Operations:</strong> Group SOF and conventional aviation integration
                </p>
              </div>
            </div>
          </div>

          <!-- Card 4: Group Aviation Functions & Sustainment -->
          <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; min-height: 500px;">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-shipping-fast" style="margin-right: 8px; color: #16a34a; font-size: 14px;"></i>
                Group Aviation Functions & Sustainment
              </h4>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 12px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Aviation Functions</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Operations:</strong> Battalion positioning and aviation operations</p>
                  <p style="margin: 0 0 6px 0;"><strong>Intelligence:</strong> Group intelligence and Battalion intelligence fusion</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Fires:</strong> Group aviation fires coordination and Battalion fires integration</p>
                  <p style="margin: 0 0 6px 0;"><strong>Sustainment:</strong> Group sustainment and Battalion sustainment coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Protection:</strong> Group force protection and Battalion protection coordination</p>
                  <p style="margin: 0;"><strong>Command and Control:</strong> Group C2 architecture and Battalion C2 integration</p>
                </div>
              </div>

              <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 12px;">
                <h5 style="font-weight: 600; color: #4ade80; font-size: 12px; margin: 0 0 8px 0;">Group Aviation Sustainment Framework</h5>
                <div style="color: #d1d5db; font-size: 12px; line-height: 1.4;">
                  <p style="margin: 0 0 6px 0;"><strong>Group Maintenance Company:</strong> Group-level aviation maintenance coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Battalion Sustainment:</strong> Multi-Battalion aviation logistics coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Distribution:</strong> Group distribution and transportation</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Medical:</strong> Group medical and Battalion medical coordination</p>
                  <p style="margin: 0 0 6px 0;"><strong>Aviation Maintenance:</strong> Group maintenance and Battalion maintenance</p>
                  <p style="margin: 0;"><strong>Host Nation Support:</strong> European logistics and infrastructure integration</p>
                </div>
              </div>

              <div style="background-color: #1e40af; padding: 10px; border-radius: 6px; border: 1px solid #3b82f6;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Group Aviation Reach</h5>
                <p style="color: #dbeafe; font-size: 12px; line-height: 1.4; margin: 0;">
                  <strong>Geographic Scope:</strong> Group Area of Operations (AO)<br>
                  <strong>Temporal Scope:</strong> 4-hour aviation planning and execution<br>
                  <strong>Functional Scope:</strong> Multi-Battalion coordination and integration<br>
                  <strong>Coalition Scope:</strong> Multinational aviation battalion and company coordination
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Group-Specific Aviation Doctrinal Analysis -->
        <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
          <h3 style="color: #16a34a; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-helicopter" style="margin-right: 8px;"></i>
            Group-Level Aviation Doctrinal Analysis
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 16px;">
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Aviation Command Authority</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Division/Corps aviation guidance implementation</li>
                <li>Group aviation command authority</li>
                <li>Multi-Battalion aviation coordination</li>
                <li>Aviation operations integration and coordination</li>
                <li>Coalition aviation battalion command relationships</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Aviation Planning Considerations</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Group aviation design and approach</li>
                <li>Multi-Battalion synchronization and coordination</li>
                <li>Aviation operations integration</li>
                <li>Aviation sustainment and logistics</li>
                <li>Aviation risk assessment and mitigation</li>
              </ul>
            </div>
            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #16a34a;">
              <h4 style="color: #4ade80; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Multi-National Integration</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>NATO Allied Group coordination</li>
                <li>European partner aviation battalion integration</li>
                <li>Multinational aviation company coordination</li>
                <li>Host nation support integration</li>
                <li>Coalition capability integration</li>
              </ul>
            </div>
          </div>

          <!-- Group Aviation Doctrinal Framework -->
          <div style="background-color: #374151; padding: 16px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 16px;">
            <h4 style="color: #4ade80; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
              <i class="fas fa-book" style="margin-right: 8px;"></i>
              Group Aviation Doctrinal Framework (FM 3-04, FM 5-0)
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <h5 style="color: #16a34a; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Aviation Planning Principles</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Unity of Command:</strong> Clear Group command authority over subordinate Battalions</li>
                  <li><strong>Unity of Effort:</strong> Synchronized multi-Battalion and coalition coordination</li>
                  <li><strong>Aviation Flexibility:</strong> Adaptive planning for multiple aviation scenarios</li>
                  <li><strong>Aviation Integration:</strong> Attack, assault, general support coordination</li>
                  <li><strong>Aviation Tempo:</strong> Sustained aviation pace and rhythm</li>
                  <li><strong>Aviation Reach:</strong> Geographic and temporal aviation scope</li>
                </ul>
              </div>
              <div>
                <h5 style="color: #16a34a; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Group Aviation Functions</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li><strong>Aviation Operations:</strong> Battalion positioning and aviation execution</li>
                  <li><strong>Aviation Fires:</strong> Group aviation fires coordination and support</li>
                  <li><strong>Aviation Intelligence:</strong> Group intelligence and Battalion intelligence fusion</li>
                  <li><strong>Aviation Sustainment:</strong> Group sustainment and Battalion support</li>
                  <li><strong>Aviation Protection:</strong> Group force protection and security</li>
                  <li><strong>Aviation Command and Control:</strong> Group C2 and Battalion integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Key Doctrinal Takeaways -->
        <div style="background-color: rgba(22, 163, 74, 0.1); border: 1px solid #16a34a; border-radius: 8px; padding: 16px;">
          <h3 style="color: #4ade80; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
            <i class="fas fa-key" style="margin-right: 8px;"></i>
            Group Receipt of Mission - Key Doctrinal Takeaways
          </h3>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Aviation Command Imperatives</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li>Division/Corps aviation guidance implementation through Battalion coordination</li>
                <li>Group aviation command authority and specialized integration</li>
                <li>Multi-Battalion synchronization and aviation operations coordination</li>
                <li>Coalition aviation battalion integration and multinational coordination</li>
                <li>Aviation risk assessment and mitigation across all functions</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #16a34a; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Group Planning Priorities</h4>
              <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                <li>Aviation planning cycle (4 hours) for Group-level decisions</li>
                <li>Group aviation design and operations integration</li>
                <li>Multi-Battalion integration and coalition coordination</li>
                <li>Group sustainment coordination and aviation logistics</li>
                <li>Aviation operations coordination and multi-role mission integration</li>
              </ul>
            </div>
          </div>
        </div>

      </div>`;
  }
};
