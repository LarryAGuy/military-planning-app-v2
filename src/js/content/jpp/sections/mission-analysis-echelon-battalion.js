/**
 * JPP Step 2: Mission Analysis - Battalion Level Doctrinal Analysis
 * Battalion-Level Tactical Command - Multi-Company Operations
 * Source: JP 5-0 (Joint Planning), Chapter III - Mission Analysis, FM 5-0 (Operations Process)
 *
 * Battalion-Level Command Considerations (Lieutenant Colonel level) with Multi-Company Integration
 * Expected Length: 15,000-25,000 characters of comprehensive battalion-level mission analysis doctrinal content
 * European Theater/LSCO scenario framework - Battalion tactical mission analysis doctrinal framework
 */

export function getBattalionMissionAnalysisContent() {
  return `
    <div style="padding: 20px;">
      <!-- Battalion Tactical Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-flag" style="margin-right: 12px; color: #10b981; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Battalion Tactical Mission Analysis Doctrinal Framework</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 2 - Battalion Command (Lieutenant Colonel)</p>
        </div>
      </div>

      <!-- Battalion Tactical Overview -->
      <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
        <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
          JPP Step 2: Battalion Tactical Mission Analysis Doctrinal Framework - European Theater LSCO
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Command Level:</strong> Infantry Battalion / Armor Battalion / Artillery Battalion<br>
              <strong>Doctrinal Source:</strong> JP 5-0 (Joint Planning), Chapter III; FM 5-0 (Nov 2024)<br>
              <strong>Supporting Doctrine:</strong> FM 3-0, FM 3-21, FM 3-20, FM 3-09, ADP 3-0, ADP 5-0<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Tactical Focus:</strong> Battalion tactical operations and multi-company coordination<br>
              <strong>Primary Output:</strong> Battalion tactical approach, company operations, tactical support<br>
              <strong>Key Products:</strong> Battalion IPB, tactical CCIR, company coordination plan, battalion support plan<br>
              <strong>Decision Point:</strong> Battalion mission analysis briefing and tactical execution guidance
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Battalion Tactical Doctrinal Analysis Card Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

        <!-- Card 1: Battalion Mission Analysis Process & Multi-Company Operations -->
        <div style="
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          border: 1px solid #374151;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          min-height: 500px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(16, 185, 129, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        ">
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
            pointer-events: none;
          "></div>

          <div style="flex-grow: 1; position: relative; z-index: 1;">
            <h4 style="
              font-size: 16px;
              font-weight: 700;
              color: white;
              margin: 0 0 16px 0;
              display: flex;
              align-items: center;
              padding-bottom: 8px;
              border-bottom: 2px solid rgba(16, 185, 129, 0.3);
            ">
              <i class="fas fa-tasks" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
              Battalion Mission Analysis Process & Multi-Company Operations
            </h4>

            <div style="
              background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 100%);
              padding: 16px;
              border-radius: 8px;
              border: 1px solid rgba(16, 185, 129, 0.4);
              margin-bottom: 16px;
              box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(16, 185, 129, 0.1);
            ">
              <h5 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-chess-board" style="margin-right: 8px; color: #10b981;"></i>
                Battalion Tactical Mission Analysis Framework (FM 3-21, Chapter 4)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 1:</strong> Analyze higher headquarters mission and tactical environment from brigade</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 2:</strong> Determine battalion specified, implied, and essential tasks for tactical objectives</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 3:</strong> Analyze battalion tactical approach and multi-company coordination</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #10b981;">Products:</strong> Battalion mission statement, tactical concept, company coordination plan</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
              padding: 16px;
              border-radius: 10px;
              border-left: 4px solid #10b981;
              margin-bottom: 16px;
            ">
              <h5 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #10b981;"></i>
                Battalion Multi-Company Integration & Tactical Coordination
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Company Integration:</strong> Coordinate with 3-4 rifle companies for synchronized tactical operations</p>
                <p style="margin: 0 0 8px 0;">• <strong>Battalion Assets:</strong> Employ battalion headquarters, weapons, and support assets</p>
                <p style="margin: 0 0 8px 0;">• <strong>Tactical Coordination:</strong> Integrate company operations and tactical movement</p>
                <p style="margin: 0 0 8px 0;">• <strong>Fire Support:</strong> Coordinate battalion mortars and tactical fire support</p>
                <p style="margin: 0;">• <strong>Tactical Movement:</strong> Plan tactical movement and positioning of company elements</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              padding: 16px;
              border-radius: 10px;
              border: 1px solid rgba(16, 185, 129, 0.6);
            ">
              <h5 style="color: #6ee7b7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #a7f3d0;"></i>
                Battalion Mission Analysis Products
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Battalion mission statement and commander's intent</li>
                <li>Battalion tactical concept of operations</li>
                <li>Battalion fire support plan and target list</li>
                <li>Battalion risk assessment and mitigation measures</li>
                <li>Battalion mission analysis briefing for brigade commander</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 2: Battalion Intelligence & Tactical Reconnaissance -->
        <div style="
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          border: 1px solid #374151;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          min-height: 500px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        ">
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.05) 0%, transparent 50%);
            pointer-events: none;
          "></div>

          <div style="flex-grow: 1; position: relative; z-index: 1;">
            <h4 style="
              font-size: 16px;
              font-weight: 700;
              color: white;
              margin: 0 0 16px 0;
              display: flex;
              align-items: center;
              padding-bottom: 8px;
              border-bottom: 2px solid rgba(37, 99, 235, 0.3);
            ">
              <i class="fas fa-binoculars" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
              Battalion Intelligence & Tactical Reconnaissance
            </h4>

            <div style="
              background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%);
              padding: 16px;
              border-radius: 8px;
              border: 1px solid rgba(37, 99, 235, 0.4);
              margin-bottom: 16px;
              box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(37, 99, 235, 0.1);
            ">
              <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #2563eb;"></i>
                Battalion Intelligence Preparation & Tactical Collection (FM 2-0, Chapter 10)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 1:</strong> Define the battalion area of operations and tactical areas of interest</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 2:</strong> Describe environmental effects on battalion tactical operations</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 3:</strong> Evaluate threat tactical forces and enemy company-level capabilities</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #2563eb;">Products:</strong> Battalion IPB products, tactical intelligence requirements, reconnaissance plan</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
              padding: 16px;
              border-radius: 10px;
              border-left: 4px solid #2563eb;
              margin-bottom: 16px;
            ">
              <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-search" style="margin-right: 8px; color: #2563eb;"></i>
                Battalion Tactical Reconnaissance & Surveillance Operations
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Tactical Reconnaissance:</strong> Battalion scout platoon and company reconnaissance elements</p>
                <p style="margin: 0 0 8px 0;">• <strong>Intelligence Collection:</strong> Tactical intelligence requirements and collection management</p>
                <p style="margin: 0 0 8px 0;">• <strong>Surveillance Assets:</strong> Ground surveillance radar and observation posts</p>
                <p style="margin: 0 0 8px 0;">• <strong>Human Intelligence:</strong> Tactical human intelligence teams and interrogation operations</p>
                <p style="margin: 0;">• <strong>Counterintelligence:</strong> Force protection and operational security measures</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              padding: 16px;
              border-radius: 10px;
              border: 1px solid rgba(37, 99, 235, 0.6);
            ">
              <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #a7f3d0;"></i>
                Battalion Tactical Intelligence Requirements
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Enemy tactical dispositions and strength in battalion area of operations</li>
                <li>Enemy capabilities and intentions affecting battalion mission</li>
                <li>Terrain analysis and mobility corridors for battalion operations</li>
                <li>Weather effects on battalion tactical operations and equipment</li>
                <li>Civilian considerations and population centers in battalion area</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 3: Battalion Sustainment & Tactical Support -->
        <div style="
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          border: 1px solid #374151;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          min-height: 500px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        ">
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.05) 0%, transparent 50%);
            pointer-events: none;
          "></div>

          <div style="flex-grow: 1; position: relative; z-index: 1;">
            <h4 style="
              font-size: 16px;
              font-weight: 700;
              color: white;
              margin: 0 0 16px 0;
              display: flex;
              align-items: center;
              padding-bottom: 8px;
              border-bottom: 2px solid rgba(220, 38, 38, 0.3);
            ">
              <i class="fas fa-truck-loading" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
              Battalion Sustainment & Tactical Support
            </h4>

            <div style="
              background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%);
              padding: 16px;
              border-radius: 8px;
              border: 1px solid rgba(220, 38, 38, 0.4);
              margin-bottom: 16px;
              box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(220, 38, 38, 0.1);
            ">
              <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-boxes" style="margin-right: 8px; color: #dc2626;"></i>
                Battalion Tactical Sustainment Operations (FM 4-0, Chapter 8)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Battalion Sustainment:</strong> Battalion headquarters company and support elements</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Tactical Logistics:</strong> Class I-IX supply operations and distribution management</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Maintenance Operations:</strong> Field maintenance and battle damage assessment and repair</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #dc2626;">Medical Support:</strong> Battalion aid station and Role 1 medical care</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
              padding: 16px;
              border-radius: 10px;
              border-left: 4px solid #dc2626;
              margin-bottom: 16px;
            ">
              <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-tools" style="margin-right: 8px; color: #dc2626;"></i>
                Battalion Tactical Support Functions
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Battalion Mortars:</strong> 81mm mortar platoon providing close fire support</p>
                <p style="margin: 0 0 8px 0;">• <strong>Battalion Signal:</strong> Communications platoon providing tactical communications</p>
                <p style="margin: 0 0 8px 0;">• <strong>Battalion Intelligence:</strong> Intelligence section providing tactical intelligence</p>
                <p style="margin: 0 0 8px 0;">• <strong>Battalion Engineers:</strong> Engineer platoon providing mobility and survivability</p>
                <p style="margin: 0;">• <strong>Battalion Protection:</strong> CBRN and explosive ordnance disposal support</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              padding: 16px;
              border-radius: 10px;
              border: 1px solid rgba(220, 38, 38, 0.6);
            ">
              <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-heartbeat" style="margin-right: 8px; color: #a7f3d0;"></i>
                Battalion Personnel & Administrative Support
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Personnel services and human resources support for battalion operations</li>
                <li>Casualty operations and personnel replacement management</li>
                <li>Financial management and legal support for battalion operations</li>
                <li>Religious support and unit ministry team operations</li>
                <li>Postal operations and morale, welfare, and recreation support</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 4: Battalion Command and Control & Tactical Risk Management -->
        <div style="
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          border: 1px solid #374151;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          min-height: 500px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        ">
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.05) 0%, transparent 50%);
            pointer-events: none;
          "></div>

          <div style="flex-grow: 1; position: relative; z-index: 1;">
            <h4 style="
              font-size: 16px;
              font-weight: 700;
              color: white;
              margin: 0 0 16px 0;
              display: flex;
              align-items: center;
              padding-bottom: 8px;
              border-bottom: 2px solid rgba(245, 158, 11, 0.3);
            ">
              <i class="fas fa-flag" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
              Battalion Command and Control & Tactical Risk Management
            </h4>

            <div style="
              background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
              padding: 16px;
              border-radius: 8px;
              border: 1px solid rgba(245, 158, 11, 0.4);
              margin-bottom: 16px;
              box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(245, 158, 11, 0.1);
            ">
              <h5 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-network-wired" style="margin-right: 8px; color: #f59e0b;"></i>
                Battalion Tactical Command and Control Framework (FM 6-0, Chapter 9)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Tactical C2:</strong> Battalion command post operations and tactical battle rhythm</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Company Coordination:</strong> Command and control of subordinate rifle companies</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Brigade Integration:</strong> Integration with brigade headquarters and sister battalions</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #f59e0b;">Tactical Decision Making:</strong> Battalion decision-making process and tactical planning</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
              padding: 16px;
              border-radius: 10px;
              border-left: 4px solid #f59e0b;
              margin-bottom: 16px;
            ">
              <h5 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-exclamation-triangle" style="margin-right: 8px; color: #f59e0b;"></i>
                Battalion Risk Management & Critical Information Requirements
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Battalion CCIR:</strong> Information required for battalion commander tactical decision-making</p>
                <p style="margin: 0 0 8px 0;">• <strong>Tactical Risks:</strong> Threats to battalion mission accomplishment and tactical objectives</p>
                <p style="margin: 0 0 8px 0;">• <strong>Decision Points:</strong> Key battalion decisions requiring commander approval and guidance</p>
                <p style="margin: 0 0 8px 0;">• <strong>Risk Mitigation:</strong> Battalion-specific risk reduction measures and contingency planning</p>
                <p style="margin: 0;">• <strong>Tactical Timelines:</strong> Critical decision timelines and tactical execution horizons</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              padding: 16px;
              border-radius: 10px;
              border: 1px solid rgba(245, 158, 11, 0.6);
            ">
              <h5 style="color: #fbbf24; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-clipboard-check" style="margin-right: 8px; color: #a7f3d0;"></i>
                Battalion Mission Analysis Outputs
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Battalion mission analysis briefing</li>
                <li>Battalion commander's critical information requirements</li>
                <li>Battalion tactical risk assessment and mitigation plan</li>
                <li>Battalion planning guidance for subordinate rifle companies</li>
                <li>Battalion mission analysis products for brigade commander</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>`;
}

// Export the expected object structure for compatibility with mission-analysis-echelon-analysis.js
export const battalionEchelonModule = {
  id: 'battalion-mission-analysis',
  title: 'Battalion Tactical Mission Analysis',
  classification: 'UNCLASSIFIED',
  echelon: 'Battalion',

  getContent() {
    return getBattalionMissionAnalysisContent();
  }
};

export default battalionEchelonModule;

