/**
 * OPORD Sustainment - Detailed Analysis Module
 * Contains all content and functionality for the "Detailed Analysis" collapsible section
 * Includes: Logistics Analysis, Personnel Services, Health Service Support, Sustainment Planning
 * Based on FM 5-0 Chapter 10 and FM 4-0 doctrine
 */

export const detailedAnalysisModule = {
  id: 'sustainment-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    return `
      <!-- Detailed Analysis Section - Professional Military Layout -->
      <div id="sustainment-detailed-analysis-section" style="margin-bottom: 24px;">
        <!-- Section Header -->
        <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151; display: flex; align-items: center; justify-content: space-between; gap: 16px;">
          <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
            <i class="fas fa-search" style="margin-right: 8px; color: #60a5fa; font-size: 16px;"></i>
            4. Sustainment - Detailed Analysis
          </h3>
        </div>

        <!-- 2x2 Content Card Grid - Default Viewport Display -->
        <div style="
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 24px;
          min-height: calc(100vh - 300px);
        ">

          <!-- Logistics Analysis Card -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 280px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-boxes" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                a. Logistics Analysis Framework
              </h4>
              <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                Logistics provides the bridge between the national economy and the tactical commander. Analysis focuses on sustainment requirements and capabilities.
              </p>

              <div style="background-color: rgba(96, 165, 250, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #60a5fa; margin-bottom: 16px;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Key Analysis Areas</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Supply requirements and distribution</li>
                  <li style="margin-bottom: 4px;">Transportation capabilities and constraints</li>
                  <li style="margin-bottom: 4px;">Maintenance support requirements</li>
                  <li style="margin-bottom: 4px;">Field services and general engineering</li>
                </ul>
              </div>

              <div style="background-color: rgba(30, 58, 138, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #2563eb; margin-bottom: 16px;">
                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Considerations</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Operational reach and sustainment footprint</li>
                  <li style="margin-bottom: 4px;">Lines of communication security</li>
                  <li style="margin-bottom: 4px;">Host nation support availability</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Personnel Services Card -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 280px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-user-shield" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                b. Personnel Services Analysis
              </h4>
              <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                Personnel services sustain Soldiers and units by providing essential human resources support throughout operations.
              </p>

              <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Core Functions</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Human resources support operations</li>
                  <li style="margin-bottom: 4px;">Financial management operations</li>
                  <li style="margin-bottom: 4px;">Legal support and military justice</li>
                  <li style="margin-bottom: 4px;">Religious support operations</li>
                </ul>
              </div>

              <div style="background-color: rgba(20, 83, 45, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 16px;">
                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 8px 0;">Analysis Focus</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Personnel strength and readiness</li>
                  <li style="margin-bottom: 4px;">Casualty operations and replacement</li>
                  <li style="margin-bottom: 4px;">Morale, welfare, and recreation needs</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Health Service Support Card -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 280px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-notes-medical" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                c. Health Service Support Analysis
              </h4>
              <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                Health service support preserves the force through medical treatment, medical evacuation, and preventive medicine services.
              </p>

              <div style="background-color: rgba(248, 113, 113, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f87171; margin-bottom: 16px;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Medical Functions</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Medical treatment and hospitalization</li>
                  <li style="margin-bottom: 4px;">Medical evacuation and transport</li>
                  <li style="margin-bottom: 4px;">Preventive medicine services</li>
                  <li style="margin-bottom: 4px;">Combat and operational stress control</li>
                </ul>
              </div>

              <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 16px;">
                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Planning Factors</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Casualty estimates and medical requirements</li>
                  <li style="margin-bottom: 4px;">Medical supply and equipment needs</li>
                  <li style="margin-bottom: 4px;">Evacuation routes and medical facilities</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Sustainment Planning Card -->
          <div style="
            background-color: #1f2937;
            border: 1px solid #374151;
            border-radius: 8px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: 100%;
            min-height: 280px;
          ">
            <div style="flex-grow: 1;">
              <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                <i class="fas fa-clipboard-list" style="margin-right: 8px; color: #9333ea; font-size: 12px;"></i>
                d. Sustainment Planning Considerations
              </h4>
              <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                Sustainment planning integrates logistics, personnel services, and health service support to enable continuous operations.
              </p>

              <div style="background-color: rgba(147, 51, 234, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #9333ea; margin-bottom: 16px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Planning Principles</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Integration across all warfighting functions</li>
                  <li style="margin-bottom: 4px;">Anticipation of requirements and capabilities</li>
                  <li style="margin-bottom: 4px;">Responsiveness to changing conditions</li>
                  <li style="margin-bottom: 4px;">Economy and efficiency of resources</li>
                </ul>
              </div>

              <div style="background-color: rgba(76, 29, 149, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #7c3aed; margin-bottom: 16px;">
                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Critical Factors</h5>
                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                  <li style="margin-bottom: 4px;">Operational reach and sustainment footprint</li>
                  <li style="margin-bottom: 4px;">Risk assessment and mitigation</li>
                  <li style="margin-bottom: 4px;">Multinational and joint coordination</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  },

  initialize() {
    try { localStorage.setItem('opord-sustainment-detailed-analysis', 'true'); } catch {}
    return true;
  }
};

