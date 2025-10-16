/**
 * JPP Step 2: Mission Analysis - Division Level Doctrinal Analysis
 * Division-Level Tactical Command - Multi-Brigade Operations
 * Source: JP 5-0 (Joint Planning), Chapter III - Mission Analysis, FM 5-0 (Operations Process)
 *
 * Division-Level Command Considerations (2-Star Major General level) with Tactical-Level Integration
 * Expected Length: 25,000-35,000 characters of comprehensive division-level mission analysis doctrinal content
 * European Theater/LSCO scenario framework - Division tactical mission analysis doctrinal framework
 */

export function getDivisionMissionAnalysisContent() {
  return `
    <div style="padding: 20px;">
      <!-- Division Tactical Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-chess-king" style="margin-right: 12px; color: #10b981; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Division Tactical Mission Analysis Doctrinal Framework</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 2 - Division Command (2-Star Major General)</p>
        </div>
      </div>

      <!-- Division Tactical Overview -->
      <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
        <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-chess-knight" style="margin-right: 8px;"></i>
          JPP Step 2: Division Tactical Mission Analysis Doctrinal Framework - European Theater LSCO
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Command Level:</strong> 1st Armored Division / 1st Infantry Division / 82nd Airborne Division<br>
              <strong>Doctrinal Source:</strong> JP 5-0 (Joint Planning), Chapter III; FM 5-0 (Nov 2024)<br>
              <strong>Supporting Doctrine:</strong> FM 3-0, FM 3-96, ADP 3-0, ADP 5-0<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Tactical Focus:</strong> Division-level tactical planning and multi-brigade coordination<br>
              <strong>Primary Output:</strong> Division tactical approach, close operations planning, combined arms integration<br>
              <strong>Key Products:</strong> Division IPB, tactical CCIR, close operations plan, division sustainment plan<br>
              <strong>Decision Point:</strong> Division mission analysis briefing and tactical planning guidance
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Division Tactical Doctrinal Analysis Card Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

        <!-- Card 1: Division Mission Analysis Process & Combined Arms Integration -->
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
              <i class="fas fa-puzzle-piece" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
              Division Mission Analysis Process & Combined Arms Integration
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
                Division Tactical Mission Analysis Framework (FM 3-96, Chapter 4)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 1:</strong> Analyze higher headquarters mission and tactical environment from corps</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 2:</strong> Determine division specified, implied, and essential tasks for tactical objectives</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 3:</strong> Analyze division tactical approach and multi-brigade coordination requirements</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #10b981;">Products:</strong> Division mission statement, tactical approach, close operations concept, sustainment plan</p>
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
                <i class="fas fa-layer-group" style="margin-right: 8px; color: #10b981;"></i>
                Division Combined Arms Integration & Multi-Brigade Coordination
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Brigade Integration:</strong> Coordinate with 3-4 brigade combat teams for synchronized operations</p>
                <p style="margin: 0 0 8px 0;">• <strong>Division Assets:</strong> Employ division artillery, aviation, engineer, and intelligence assets</p>
                <p style="margin: 0 0 8px 0;">• <strong>Combined Arms:</strong> Integrate infantry, armor, artillery, aviation, and engineer capabilities</p>
                <p style="margin: 0 0 8px 0;">• <strong>Tactical Fires:</strong> Coordinate division fires, close air support, and tactical strike capabilities</p>
                <p style="margin: 0;">• <strong>Tactical Mobility:</strong> Plan tactical movement and positioning of brigade combat teams</p>
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
                Division Mission Analysis Products
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Division mission statement and commander's intent</li>
                <li>Division tactical approach and concept of operations</li>
                <li>Division close operations plan and tactical guidance</li>
                <li>Division risk assessment and mitigation measures</li>
                <li>Division mission analysis briefing for corps commander</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 2: Division Intelligence Preparation of the Battlefield & Close Operations -->
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
              Division Intelligence Preparation of the Battlefield & Close Operations
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
                Division Intelligence Preparation of the Battlefield (FM 2-0, Chapter 6)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 1:</strong> Define the division area of operations and areas of interest for tactical operations</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 2:</strong> Describe environmental effects on division operations and tactical capabilities</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 3:</strong> Evaluate threat tactical forces and enemy division-level capabilities</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #2563eb;">Products:</strong> Division IPB products, tactical intelligence requirements, terrain analysis</p>
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
                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #2563eb;"></i>
                Division Threat Assessment & Enemy Tactical Force Analysis
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Enemy Tactical Forces:</strong> Adversary brigade and battalion structure, tactics, and capabilities</p>
                <p style="margin: 0 0 8px 0;">• <strong>Enemy Capabilities:</strong> Infantry, armor, artillery, air defense, and engineer capabilities at tactical level</p>
                <p style="margin: 0 0 8px 0;">• <strong>Enemy Tactical COG:</strong> Critical tactical capabilities, command structure, and logistics support</p>
                <p style="margin: 0 0 8px 0;">• <strong>Enemy Vulnerabilities:</strong> Weaknesses in tactical force structure and command and control</p>
                <p style="margin: 0;">• <strong>Enemy Tactical COAs:</strong> Most likely and most dangerous enemy tactical employment options</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              padding: 16px;
              border-radius: 10px;
              border: 1px solid rgba(37, 99, 235, 0.6);
            ">
              <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-map" style="margin-right: 8px; color: #a7f3d0;"></i>
                Division Tactical Environment Factors
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Terrain analysis and avenues of approach for tactical operations</li>
                <li>Weather effects on division operations and equipment performance</li>
                <li>Urban terrain considerations and civilian population factors</li>
                <li>Key terrain, obstacles, and cover and concealment analysis</li>
                <li>Observation and fields of fire for tactical positioning</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 3: Division Sustainment & Tactical Support -->
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
              Division Sustainment & Tactical Support
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
                Division Sustainment Operations & Tactical Logistics (FM 4-0, Chapter 4)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Tactical Sustainment:</strong> Multi-brigade sustainment operations and forward support</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Division Support Command:</strong> Division sustainment brigade and forward support battalions</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Tactical Logistics:</strong> Class I-IX supply operations and maintenance support</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #dc2626;">Forward Support:</strong> Brigade support battalions and forward logistics elements</p>
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
                Division Tactical Support & Enabler Functions
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Division Engineers:</strong> Mobility, countermobility, survivability, and tactical engineering</p>
                <p style="margin: 0 0 8px 0;">• <strong>Division Signal:</strong> Tactical communications and network operations support</p>
                <p style="margin: 0 0 8px 0;">• <strong>Division Military Police:</strong> Tactical convoy security and area security operations</p>
                <p style="margin: 0 0 8px 0;">• <strong>Division Aviation:</strong> Attack, reconnaissance, and medical evacuation support</p>
                <p style="margin: 0;">• <strong>Division Artillery:</strong> Field artillery and tactical fire support coordination</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              padding: 16px;
              border-radius: 10px;
              border: 1px solid rgba(220, 38, 38, 0.6);
            ">
              <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-medkit" style="margin-right: 8px; color: #a7f3d0;"></i>
                Division Medical & Personnel Support Operations
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Division medical operations and Role 2 medical support</li>
                <li>Personnel services and human resources support for division operations</li>
                <li>Casualty operations and personnel replacement at tactical level</li>
                <li>Financial management and legal support for division operations</li>
                <li>Religious support and morale, welfare, and recreation services</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 4: Division Command and Control & Tactical Risk Management -->
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
              <i class="fas fa-chess-king" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
              Division Command and Control & Tactical Risk Management
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
                Division Command and Control Framework (FM 6-0, Chapter 5)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Tactical C2:</strong> Division command post operations and tactical battle rhythm</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Brigade Coordination:</strong> Command and control of subordinate brigade combat teams</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Corps Integration:</strong> Integration with corps headquarters and sister divisions</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #f59e0b;">Tactical Decision Making:</strong> Division decision-making process and tactical planning</p>
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
                Division Risk Management & Critical Information Requirements
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Division CCIR:</strong> Information required for division commander tactical decision-making</p>
                <p style="margin: 0 0 8px 0;">• <strong>Tactical Risks:</strong> Threats to division mission accomplishment and tactical objectives</p>
                <p style="margin: 0 0 8px 0;">• <strong>Decision Points:</strong> Key division decisions requiring commander approval and guidance</p>
                <p style="margin: 0 0 8px 0;">• <strong>Risk Mitigation:</strong> Division-specific risk reduction measures and contingency planning</p>
                <p style="margin: 0;">• <strong>Tactical Timelines:</strong> Critical decision timelines and tactical planning horizons</p>
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
                Division Mission Analysis Outputs
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Division mission analysis briefing</li>
                <li>Division commander's critical information requirements</li>
                <li>Division tactical risk assessment and mitigation plan</li>
                <li>Division planning guidance for subordinate brigade combat teams</li>
                <li>Division mission analysis products for corps commander</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>`;
}

// Export the expected object structure for compatibility with mission-analysis-echelon-analysis.js
export const divisionEchelonModule = {
  id: 'division-mission-analysis',
  title: 'Division Tactical Mission Analysis',
  classification: 'UNCLASSIFIED',
  echelon: 'Division',

  getContent() {
    return getDivisionMissionAnalysisContent();
  }
};

export default divisionEchelonModule;

