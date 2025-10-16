/**
 * JPP Step 2: Mission Analysis - Corps Level Doctrinal Analysis
 * Corps-Level Operational Command - Multi-Division Operations
 * Source: JP 5-0 (Joint Planning), Chapter III - Mission Analysis, FM 5-0 (Operations Process)
 *
 * Corps-Level Command Considerations (3-Star Lieutenant General level) with Operational-Level Integration
 * Expected Length: 25,000-35,000 characters of comprehensive corps-level mission analysis doctrinal content
 * European Theater/LSCO scenario framework - Corps operational mission analysis doctrinal framework
 */

export function getCorpsMissionAnalysisContent() {
  return `
    <div style="padding: 20px;">
      <!-- Corps Operational Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-crown" style="margin-right: 12px; color: #10b981; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Corps Operational Mission Analysis Doctrinal Framework</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 2 - Corps Command (3-Star Lieutenant General)</p>
        </div>
      </div>

      <!-- Corps Operational Overview -->
      <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
        <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-chess-rook" style="margin-right: 8px;"></i>
          JPP Step 2: Corps Operational Mission Analysis Doctrinal Framework - European Theater LSCO
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Command Level:</strong> XVIII Airborne Corps / V Corps / I Armored Corps<br>
              <strong>Doctrinal Source:</strong> JP 5-0 (Joint Planning), Chapter III; FM 5-0 (Nov 2024)<br>
              <strong>Supporting Doctrine:</strong> FM 3-0, FM 3-94, ADP 3-0, ADP 6-0<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Operational Focus:</strong> Corps-level operational planning and multi-division coordination<br>
              <strong>Primary Output:</strong> Corps operational approach, deep operations planning, sustainment concept<br>
              <strong>Key Products:</strong> Corps IPB, operational CCIR, deep operations plan, corps sustainment plan<br>
              <strong>Decision Point:</strong> Corps mission analysis briefing and operational planning guidance
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Corps Operational Doctrinal Analysis Card Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

        <!-- Card 1: Corps Mission Analysis Process & Operational Planning -->
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
              <i class="fas fa-project-diagram" style="margin-right: 10px; color: #10b981; font-size: 18px; text-shadow: 0 0 12px rgba(16, 185, 129, 0.5);"></i>
              Corps Mission Analysis Process & Operational Planning
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
                Corps Operational Mission Analysis Framework (FM 3-94, Chapter 3)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 1:</strong> Analyze higher headquarters mission and operational environment from Army component</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 2:</strong> Determine corps specified, implied, and essential tasks for operational objectives</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 3:</strong> Analyze corps operational approach and multi-division coordination requirements</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #10b981;">Products:</strong> Corps mission statement, operational approach, deep operations concept, sustainment plan</p>
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
                Corps Operational Framework & Multi-Division Coordination
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Division Integration:</strong> Coordinate with 2-4 divisions for synchronized operations</p>
                <p style="margin: 0 0 8px 0;">• <strong>Corps Assets:</strong> Employ corps artillery, aviation, engineer, and intelligence assets</p>
                <p style="margin: 0 0 8px 0;">• <strong>Deep Operations:</strong> Plan and execute operations beyond division areas of operations</p>
                <p style="margin: 0 0 8px 0;">• <strong>Operational Fires:</strong> Coordinate corps fires, joint fires, and deep strike capabilities</p>
                <p style="margin: 0;">• <strong>Operational Mobility:</strong> Plan operational movement and positioning of divisions</p>
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
                Corps Mission Analysis Products
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Corps mission statement and commander's intent</li>
                <li>Corps operational approach and concept of operations</li>
                <li>Corps deep operations plan and targeting guidance</li>
                <li>Corps risk assessment and mitigation measures</li>
                <li>Corps mission analysis briefing for Army component commander</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 2: Corps Intelligence Preparation of the Battlefield & Deep Operations -->
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
              <i class="fas fa-crosshairs" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
              Corps Intelligence Preparation of the Battlefield & Deep Operations
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
                Corps Intelligence Preparation of the Battlefield (FM 2-0, Chapter 5)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 1:</strong> Define the corps operational environment and deep areas for operational reach</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 2:</strong> Describe environmental effects on corps operations and deep strike capabilities</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 3:</strong> Evaluate threat operational reserves and second echelon forces</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #2563eb;">Products:</strong> Corps IPB products, deep area analysis, operational intelligence requirements</p>
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
                <i class="fas fa-bullseye" style="margin-right: 8px; color: #2563eb;"></i>
                Corps Deep Operations & Operational Fires Analysis
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Deep Targets:</strong> Enemy operational reserves, command posts, logistics nodes, and air defense</p>
                <p style="margin: 0 0 8px 0;">• <strong>Deep Strike Assets:</strong> Corps artillery, aviation, special operations, and joint fires</p>
                <p style="margin: 0 0 8px 0;">• <strong>Operational Reach:</strong> Corps capability to strike targets beyond division areas</p>
                <p style="margin: 0 0 8px 0;">• <strong>Target Development:</strong> High-payoff targets and target value analysis for deep operations</p>
                <p style="margin: 0;">• <strong>Battle Damage Assessment:</strong> Effectiveness evaluation of deep strike operations</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              padding: 16px;
              border-radius: 10px;
              border: 1px solid rgba(37, 99, 235, 0.6);
            ">
              <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-satellite" style="margin-right: 8px; color: #a7f3d0;"></i>
                Corps Intelligence Collection & Reconnaissance
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Corps reconnaissance and surveillance plan for deep areas</li>
                <li>Intelligence collection management and priority intelligence requirements</li>
                <li>Corps intelligence assets coordination and employment</li>
                <li>Joint intelligence support and national-level intelligence integration</li>
                <li>Counterintelligence and operational security for corps operations</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 3: Corps Sustainment & Operational Support -->
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
              Corps Sustainment & Operational Support
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
                Corps Sustainment Operations & Logistics Planning (FM 4-0, Chapter 3)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Operational Sustainment:</strong> Multi-division sustainment operations and distribution management</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Corps Support Command:</strong> Corps sustainment brigade and expeditionary sustainment command integration</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Operational Reach:</strong> Sustainment support for deep operations and extended lines of communication</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #dc2626;">Distribution Operations:</strong> Corps distribution management and supply support activities</p>
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
                <i class="fas fa-wrench" style="margin-right: 8px; color: #dc2626;"></i>
                Corps Operational Support & Enabler Functions
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Corps Engineers:</strong> Mobility, countermobility, survivability, and general engineering support</p>
                <p style="margin: 0 0 8px 0;">• <strong>Corps Signal:</strong> Command, control, communications, computers, and intelligence systems</p>
                <p style="margin: 0 0 8px 0;">• <strong>Corps Military Police:</strong> Area security, circulation control, and detention operations</p>
                <p style="margin: 0 0 8px 0;">• <strong>Corps Aviation:</strong> Attack, reconnaissance, lift, and medical evacuation support</p>
                <p style="margin: 0;">• <strong>Corps Artillery:</strong> Field artillery, air defense artillery, and target acquisition support</p>
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
                Corps Medical & Personnel Support Operations
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Corps medical command and Role 3 medical support</li>
                <li>Personnel services and human resources support for corps operations</li>
                <li>Casualty operations and personnel replacement management</li>
                <li>Financial management and legal support for corps operations</li>
                <li>Religious support and morale, welfare, and recreation services</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 4: Corps Command and Control & Risk Management -->
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
              <i class="fas fa-chess-queen" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
              Corps Command and Control & Risk Management
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
                Corps Command and Control Framework (FM 6-0, Chapter 4)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Operational C2:</strong> Corps command post operations and battle rhythm management</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Division Coordination:</strong> Command and control of subordinate divisions and corps assets</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Joint Coordination:</strong> Integration with joint force and sister service components</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #f59e0b;">Decision Making:</strong> Corps decision-making process and operational planning</p>
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
                <i class="fas fa-exclamation-circle" style="margin-right: 8px; color: #f59e0b;"></i>
                Corps Risk Management & Critical Information Requirements
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Corps CCIR:</strong> Information required for corps commander operational decision-making</p>
                <p style="margin: 0 0 8px 0;">• <strong>Operational Risks:</strong> Threats to corps mission accomplishment and operational objectives</p>
                <p style="margin: 0 0 8px 0;">• <strong>Decision Points:</strong> Key corps decisions requiring commander approval and guidance</p>
                <p style="margin: 0 0 8px 0;">• <strong>Risk Mitigation:</strong> Corps-specific risk reduction measures and contingency planning</p>
                <p style="margin: 0;">• <strong>Operational Timelines:</strong> Critical decision timelines and operational planning horizons</p>
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
                Corps Mission Analysis Outputs
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Corps mission analysis briefing</li>
                <li>Corps commander's critical information requirements</li>
                <li>Corps operational risk assessment and mitigation plan</li>
                <li>Corps planning guidance for subordinate divisions</li>
                <li>Corps mission analysis products for Army component commander</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>`;
}

// Export the expected object structure for compatibility with mission-analysis-echelon-analysis.js
export const corpsEchelonModule = {
  id: 'corps-mission-analysis',
  title: 'Corps Operational Mission Analysis',
  classification: 'UNCLASSIFIED',
  echelon: 'Corps',

  getContent() {
    return getCorpsMissionAnalysisContent();
  }
};

export default corpsEchelonModule;

