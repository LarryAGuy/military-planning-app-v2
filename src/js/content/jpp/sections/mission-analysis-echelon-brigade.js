/**
 * JPP Step 2: Mission Analysis - Brigade Level Doctrinal Analysis
 * Brigade Combat Team Level - Multi-Battalion Operations
 * Source: JP 5-0 (Joint Planning), Chapter III - Mission Analysis, FM 5-0 (Operations Process)
 *
 * Brigade-Level Command Considerations (Colonel level) with Tactical-Level Integration
 * Expected Length: 20,000-30,000 characters of comprehensive brigade-level mission analysis doctrinal content
 * European Theater/LSCO scenario framework - Brigade tactical mission analysis doctrinal framework
 */

export function getBrigadeMissionAnalysisContent() {
  return `
    <div style="padding: 20px;">
      <!-- Brigade Combat Team Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-chess-rook" style="margin-right: 12px; color: #10b981; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Brigade Combat Team Mission Analysis Doctrinal Framework</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 2 - Brigade Combat Team Command (Colonel)</p>
        </div>
      </div>

      <!-- Brigade Combat Team Overview -->
      <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
        <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-shield" style="margin-right: 8px;"></i>
          JPP Step 2: Brigade Combat Team Mission Analysis Doctrinal Framework - European Theater LSCO
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Command Level:</strong> 1st Armored BCT / 2nd Infantry BCT / 3rd Stryker BCT<br>
              <strong>Doctrinal Source:</strong> JP 5-0 (Joint Planning), Chapter III; FM 5-0 (Nov 2024)<br>
              <strong>Supporting Doctrine:</strong> FM 3-0, FM 3-96, FM 3-90, ADP 3-0, ADP 5-0<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Tactical Focus:</strong> Brigade combat team tactical planning and multi-battalion coordination<br>
              <strong>Primary Output:</strong> BCT tactical approach, combined arms operations, tactical fires integration<br>
              <strong>Key Products:</strong> BCT IPB, tactical CCIR, combined arms plan, BCT sustainment plan<br>
              <strong>Decision Point:</strong> BCT mission analysis briefing and tactical execution guidance
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Brigade Combat Team Doctrinal Analysis Card Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

        <!-- Card 1: Brigade Mission Analysis Process & Combined Arms Operations -->
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
              <i class="fas fa-cogs" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
              Brigade Mission Analysis Process & Combined Arms Operations
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
                Brigade Combat Team Mission Analysis Framework (FM 3-96, Chapter 5)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 1:</strong> Analyze higher headquarters mission and tactical environment from division</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 2:</strong> Determine BCT specified, implied, and essential tasks for tactical objectives</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 3:</strong> Analyze BCT combined arms approach and multi-battalion coordination</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #10b981;">Products:</strong> BCT mission statement, combined arms concept, tactical fires plan</p>
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
                <i class="fas fa-puzzle-piece" style="margin-right: 8px; color: #10b981;"></i>
                Brigade Combined Arms Integration & Multi-Battalion Coordination
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Battalion Integration:</strong> Coordinate with 2-4 maneuver battalions for synchronized operations</p>
                <p style="margin: 0 0 8px 0;">• <strong>BCT Assets:</strong> Employ brigade reconnaissance, fires, engineer, and support assets</p>
                <p style="margin: 0 0 8px 0;">• <strong>Combined Arms:</strong> Integrate infantry, armor, artillery, and engineer capabilities at brigade level</p>
                <p style="margin: 0 0 8px 0;">• <strong>Tactical Fires:</strong> Coordinate brigade fires, close air support, and joint fires integration</p>
                <p style="margin: 0;">• <strong>Tactical Movement:</strong> Plan tactical movement and positioning of maneuver battalions</p>
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
                Brigade Combat Team Mission Analysis Products
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>BCT mission statement and commander's intent</li>
                <li>BCT combined arms concept of operations</li>
                <li>BCT tactical fires plan and target list</li>
                <li>BCT risk assessment and mitigation measures</li>
                <li>BCT mission analysis briefing for division commander</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 2: Brigade Intelligence Preparation of the Battlefield & Reconnaissance -->
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
              <i class="fas fa-search" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
              Brigade Intelligence Preparation of the Battlefield & Reconnaissance
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
                Brigade Intelligence Preparation of the Battlefield (FM 2-0, Chapter 7)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 1:</strong> Define the BCT area of operations and tactical areas of interest</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 2:</strong> Describe environmental effects on BCT operations and tactical capabilities</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 3:</strong> Evaluate threat tactical forces and enemy battalion-level capabilities</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #2563eb;">Products:</strong> BCT IPB products, tactical intelligence collection plan, reconnaissance plan</p>
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
                <i class="fas fa-binoculars" style="margin-right: 8px; color: #2563eb;"></i>
                Brigade Reconnaissance & Surveillance Operations
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>BCT Reconnaissance:</strong> Brigade reconnaissance squadron and cavalry troop operations</p>
                <p style="margin: 0 0 8px 0;">• <strong>Intelligence Collection:</strong> Priority intelligence requirements and collection management</p>
                <p style="margin: 0 0 8px 0;">• <strong>Surveillance Assets:</strong> Unmanned aircraft systems and ground surveillance radar</p>
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
                Brigade Tactical Intelligence Requirements
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Enemy tactical dispositions and strength in BCT area of operations</li>
                <li>Enemy capabilities and intentions affecting BCT mission</li>
                <li>Terrain analysis and mobility corridors for BCT operations</li>
                <li>Weather effects on BCT tactical operations and equipment</li>
                <li>Civilian considerations and population centers in BCT area</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 3: Brigade Sustainment & Tactical Support -->
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
              <i class="fas fa-truck" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
              Brigade Sustainment & Tactical Support
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
                Brigade Combat Team Sustainment Operations (FM 4-0, Chapter 5)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">BCT Sustainment:</strong> Brigade support battalion and forward support companies</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Tactical Logistics:</strong> Class I-IX supply operations and distribution management</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Maintenance Operations:</strong> Field maintenance and battle damage assessment and repair</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #dc2626;">Medical Support:</strong> Brigade medical company and Role 1-2 medical care</p>
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
                Brigade Tactical Support Functions
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>BCT Engineers:</strong> Engineer battalion providing mobility, countermobility, and survivability</p>
                <p style="margin: 0 0 8px 0;">• <strong>BCT Signal:</strong> Signal company providing tactical communications and network support</p>
                <p style="margin: 0 0 8px 0;">• <strong>BCT Military Intelligence:</strong> Military intelligence company providing tactical intelligence</p>
                <p style="margin: 0 0 8px 0;">• <strong>BCT Fires:</strong> Field artillery battalion providing close support fires</p>
                <p style="margin: 0;">• <strong>BCT Protection:</strong> Chemical, biological, radiological, nuclear, and explosive protection</p>
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
                Brigade Personnel & Administrative Support
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Personnel services and human resources support for BCT operations</li>
                <li>Casualty operations and personnel replacement management</li>
                <li>Financial management and legal support for BCT operations</li>
                <li>Religious support and unit ministry team operations</li>
                <li>Postal operations and morale, welfare, and recreation support</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 4: Brigade Command and Control & Tactical Risk Management -->
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
              <i class="fas fa-chess-rook" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
              Brigade Command and Control & Tactical Risk Management
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
                Brigade Combat Team Command and Control Framework (FM 6-0, Chapter 6)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Tactical C2:</strong> BCT command post operations and tactical battle rhythm</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Battalion Coordination:</strong> Command and control of subordinate maneuver battalions</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Division Integration:</strong> Integration with division headquarters and sister BCTs</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #f59e0b;">Tactical Decision Making:</strong> BCT decision-making process and tactical planning</p>
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
                Brigade Risk Management & Critical Information Requirements
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>BCT CCIR:</strong> Information required for BCT commander tactical decision-making</p>
                <p style="margin: 0 0 8px 0;">• <strong>Tactical Risks:</strong> Threats to BCT mission accomplishment and tactical objectives</p>
                <p style="margin: 0 0 8px 0;">• <strong>Decision Points:</strong> Key BCT decisions requiring commander approval and guidance</p>
                <p style="margin: 0 0 8px 0;">• <strong>Risk Mitigation:</strong> BCT-specific risk reduction measures and contingency planning</p>
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
                Brigade Combat Team Mission Analysis Outputs
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>BCT mission analysis briefing</li>
                <li>BCT commander's critical information requirements</li>
                <li>BCT tactical risk assessment and mitigation plan</li>
                <li>BCT planning guidance for subordinate maneuver battalions</li>
                <li>BCT mission analysis products for division commander</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>`;
}

// Export the expected object structure for compatibility with mission-analysis-echelon-analysis.js
export const brigadeEchelonModule = {
  id: 'brigade-mission-analysis',
  title: 'Brigade Combat Team Mission Analysis',
  classification: 'UNCLASSIFIED',
  echelon: 'Brigade',

  getContent() {
    return getBrigadeMissionAnalysisContent();
  }
};

export default brigadeEchelonModule;

