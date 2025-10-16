/**
 * JPP Step 2: Mission Analysis - Army Level Doctrinal Analysis
 * Army Service Component Command Level - Theater Support Operations
 * Source: JP 5-0 (Joint Planning), Chapter III - Mission Analysis, FM 5-0 (Operations Process)
 *
 * Army-Level Command Considerations (4-Star General level) with Service Component Integration
 * Expected Length: 25,000-35,000 characters of comprehensive army-level mission analysis doctrinal content
 * European Theater/LSCO scenario framework - Army service component mission analysis doctrinal framework
 */

export function getArmyMissionAnalysisContent() {
  return `
    <div style="padding: 20px;">
      <!-- Army Service Component Header -->
      <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
        <i class="fas fa-star" style="margin-right: 12px; color: #10b981; font-size: 24px;"></i>
        <div>
          <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Army Service Component Mission Analysis Doctrinal Framework</h2>
          <p style="color: #9ca3af; font-size: 14px; margin: 0;">JPP Step 2 - Army Service Component Command (4-Star General)</p>
        </div>
      </div>

      <!-- Army Service Component Overview -->
      <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 16px; margin-bottom: 20px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
        <h3 style="color: #10b981; font-size: 16px; font-weight: 600; margin: 0 0 12px 0;">
          <i class="fas fa-shield-alt" style="margin-right: 8px;"></i>
          JPP Step 2: Army Service Component Mission Analysis Doctrinal Framework - European Theater LSCO
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0 0 8px 0;">
              <strong>Command Level:</strong> U.S. Army Europe and Africa (USAREUR-AF) / Army Service Component Command<br>
              <strong>Doctrinal Source:</strong> JP 5-0 (Joint Planning), Chapter III; FM 5-0 (Nov 2024)<br>
              <strong>Supporting Doctrine:</strong> FM 3-0, FM 4-0, FM 6-0, ADP 3-0, ADP 5-0<br>
              <strong>Classification:</strong> UNCLASSIFIED//FOR OFFICIAL USE ONLY
            </p>
          </div>
          <div>
            <p style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0;">
              <strong>Service Focus:</strong> Army service component integration and theater land force operations<br>
              <strong>Primary Output:</strong> Army component strategy, service-specific planning guidance, force structure<br>
              <strong>Key Products:</strong> Army IPB, service component CCIR, force deployment analysis, sustainment assessment<br>
              <strong>Decision Point:</strong> Army component mission analysis briefing and service-specific guidance
            </p>
          </div>
        </div>
      </div>

      <!-- 2x2 Army Service Component Doctrinal Analysis Card Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

        <!-- Card 1: Army Service Component Mission Analysis Process & Joint Integration -->
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
              Army Service Component Mission Analysis Process & Joint Integration
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
                <i class="fas fa-sitemap" style="margin-right: 8px; color: #10b981;"></i>
                Army Service Component Mission Analysis Framework (FM 5-0, Chapter 8)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 1:</strong> Analyze higher headquarters mission and commander's intent from joint force commander</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 2:</strong> Determine Army service component specified, implied, and essential tasks</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #6ee7b7;">Step 3:</strong> Analyze Army force structure requirements and capabilities assessment</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #10b981;">Products:</strong> Army component mission statement, service-specific planning guidance, force deployment plan</p>
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
                <i class="fas fa-handshake" style="margin-right: 8px; color: #10b981;"></i>
                Joint Force Integration & Service Component Coordination
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Joint Force Commander:</strong> Receive mission, intent, and planning guidance from theater joint force commander</p>
                <p style="margin: 0 0 8px 0;">• <strong>Sister Service Components:</strong> Coordinate with Air Force, Navy, Marine Corps, and Space Force components</p>
                <p style="margin: 0 0 8px 0;">• <strong>Special Operations:</strong> Integrate with Theater Special Operations Command (TSOC) for specialized capabilities</p>
                <p style="margin: 0 0 8px 0;">• <strong>Multinational Integration:</strong> Coordinate with NATO and coalition army components for interoperability</p>
                <p style="margin: 0;">• <strong>Interagency Coordination:</strong> Integrate with civilian agencies and host nation military forces</p>
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
                Army Service Component Mission Analysis Products
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Army component mission statement and commander's intent</li>
                <li>Army service component planning guidance and priorities</li>
                <li>Army force structure analysis and deployment recommendations</li>
                <li>Army component risk assessment and mitigation measures</li>
                <li>Army service component mission analysis briefing for joint force commander</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 2: Army Intelligence Preparation of the Battlefield & Operational Environment -->
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
              Army Intelligence Preparation of the Battlefield & Operational Environment
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
                <i class="fas fa-map" style="margin-right: 8px; color: #2563eb;"></i>
                Army Intelligence Preparation of the Battlefield (FM 2-0, Chapter 4)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 1:</strong> Define the Army operational environment and areas of interest for land operations</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 2:</strong> Describe environmental effects on Army operations and land force capabilities</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Step 3:</strong> Evaluate threat forces and adversary land force capabilities and doctrine</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #2563eb;">Products:</strong> Army IPB products, threat assessment, terrain analysis, weather effects on operations</p>
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
                Army Threat Assessment & Enemy Land Force Analysis
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Enemy Land Forces:</strong> Adversary army structure, doctrine, tactics, and operational capabilities</p>
                <p style="margin: 0 0 8px 0;">• <strong>Enemy Capabilities:</strong> Armor, mechanized infantry, artillery, air defense, and engineer capabilities</p>
                <p style="margin: 0 0 8px 0;">• <strong>Enemy Centers of Gravity:</strong> Critical land force capabilities, command structure, and logistics nodes</p>
                <p style="margin: 0 0 8px 0;">• <strong>Enemy Vulnerabilities:</strong> Weaknesses in land force structure, logistics, and command and control</p>
                <p style="margin: 0;">• <strong>Enemy Courses of Action:</strong> Most likely and most dangerous enemy land force employment options</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              padding: 16px;
              border-radius: 10px;
              border: 1px solid rgba(37, 99, 235, 0.6);
            ">
              <h5 style="color: #93c5fd; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-globe" style="margin-right: 8px; color: #a7f3d0;"></i>
                Army Operational Environment Factors
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Terrain analysis and mobility corridors for land operations</li>
                <li>Weather effects on Army operations and equipment performance</li>
                <li>Infrastructure assessment for Army logistics and sustainment</li>
                <li>Population centers and civilian considerations affecting land operations</li>
                <li>Host nation support capabilities and limitations for Army forces</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 3: Army Force Structure & Sustainment Assessment -->
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
              <i class="fas fa-users" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
              Army Force Structure & Sustainment Assessment
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
                <i class="fas fa-chart-bar" style="margin-right: 8px; color: #dc2626;"></i>
                Army Force Structure Analysis & Deployment Planning (FM 4-0, Chapter 2)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Combat Forces:</strong> Infantry, armor, artillery, aviation, and special operations force requirements</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Enabler Forces:</strong> Engineer, military police, signal, military intelligence, and cyber capabilities</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Support Forces:</strong> Logistics, medical, maintenance, transportation, and sustainment units</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #dc2626;">Force Deployment:</strong> Strategic mobility, reception, staging, onward movement, and integration (RSOI)</p>
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
                <i class="fas fa-truck" style="margin-right: 8px; color: #dc2626;"></i>
                Army Sustainment & Logistics Requirements Assessment
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Supply Operations:</strong> Class I-IX supply requirements, distribution networks, and stockage levels</p>
                <p style="margin: 0 0 8px 0;">• <strong>Maintenance Operations:</strong> Field maintenance, sustainment maintenance, and reset operations</p>
                <p style="margin: 0 0 8px 0;">• <strong>Transportation:</strong> Strategic and tactical mobility assets, convoy operations, and movement control</p>
                <p style="margin: 0 0 8px 0;">• <strong>Medical Support:</strong> Role 1-4 medical care, casualty evacuation, and medical logistics</p>
                <p style="margin: 0;">• <strong>Host Nation Support:</strong> Contracted logistics support, infrastructure use, and local procurement</p>
              </div>
            </div>

            <div style="
              background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
              padding: 16px;
              border-radius: 10px;
              border: 1px solid rgba(220, 38, 38, 0.6);
            ">
              <h5 style="color: #fca5a5; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">
                <i class="fas fa-cog" style="margin-right: 8px; color: #a7f3d0;"></i>
                Army Force Generation & Readiness Assessment
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Unit readiness levels and training status assessment</li>
                <li>Equipment on-hand rates and modernization requirements</li>
                <li>Personnel strength and military occupational specialty fill rates</li>
                <li>Reserve component integration and mobilization timelines</li>
                <li>Force protection and security requirements for deployed forces</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Card 4: Army Risk Assessment & Command and Control -->
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
              <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
              Army Risk Assessment & Command and Control
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
                <i class="fas fa-shield-alt" style="margin-right: 8px; color: #f59e0b;"></i>
                Army Risk Assessment Framework (FM 5-0, Appendix B)
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Tactical Risks:</strong> Threats to Army mission accomplishment and force protection</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Operational Risks:</strong> Threats to Army operational objectives and campaign success</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Strategic Risks:</strong> Threats to Army service component objectives and joint force success</p>
                <p style="margin: 0 0 8px 0;"><strong style="color: #f59e0b;">Risk Mitigation:</strong> Army-specific risk reduction measures and contingency planning</p>
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
                <i class="fas fa-radio" style="margin-right: 8px; color: #f59e0b;"></i>
                Army Command and Control & Critical Information Requirements
              </h5>
              <div style="color: #e5e7eb; font-size: 12px; line-height: 1.4;">
                <p style="margin: 0 0 8px 0;">• <strong>Army CCIR:</strong> Information required for Army component commander decision-making</p>
                <p style="margin: 0 0 8px 0;">• <strong>Decision Points:</strong> Key Army decisions requiring component commander approval</p>
                <p style="margin: 0 0 8px 0;">• <strong>Named Areas of Interest:</strong> Geographic areas requiring continuous Army intelligence collection</p>
                <p style="margin: 0 0 8px 0;">• <strong>Army Indicators:</strong> Warning indicators of threat actions affecting Army operations</p>
                <p style="margin: 0;">• <strong>Army Timelines:</strong> Critical decision timelines and Army planning horizons</p>
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
                Army Mission Analysis Outputs
              </h5>
              <ul style="color: #e0e7ff; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 16px;">
                <li>Army component mission analysis briefing</li>
                <li>Army service component critical information requirements</li>
                <li>Army risk assessment and mitigation plan</li>
                <li>Army planning guidance for subordinate commands</li>
                <li>Army mission analysis products for joint force commander</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>`;
}

// Export the expected object structure for compatibility with mission-analysis-echelon-analysis.js
export const armyEchelonModule = {
  id: 'army-mission-analysis',
  title: 'Army Service Component Mission Analysis',
  classification: 'UNCLASSIFIED',
  echelon: 'Army',

  getContent() {
    return getArmyMissionAnalysisContent();
  }
};

export default armyEchelonModule;

