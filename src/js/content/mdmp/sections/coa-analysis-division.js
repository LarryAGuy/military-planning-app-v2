/**
 * MDMP Course of Action Development - Division Level Echelon Analysis
 * Tactical-Operational Interface Doctrinal Framework
 * Source: FM 5-0 (Operations Process), Chapter 12 - Course of Action Development
 * Target: Senior Military Officers at Division Command Level (2-star General)
 */

export const divisionCOAAnalysisModule = {
  getContent() {
    return `
    <div style="padding:20px;">
      <!-- Division Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-chess-rook" style="margin-right:12px; color:#f59e0b; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Division Level COA Development - Doctrinal Framework</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Tactical-Operational Interface and Brigade Coordination Framework</p>
        </div>
      </div>

      <!-- Division-Level COA Development Doctrine -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-book" style="margin-right:8px; color:#1d4ed8;"></i>
          Division-Level COA Development Doctrine
        </h3>

        <div style="background-color:rgba(29, 78, 216, 0.1); padding:12px; border-radius:6px; border:1px solid #1d4ed8; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Division Doctrinal Foundation</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division COA Development:</strong> The systematic application of tactical-operational interface principles by Division commanders and staffs to develop multiple feasible courses of action for accomplishing Division missions within Corps operational guidance. This process integrates operational concepts with tactical execution, coordinating multi-brigade operations across tactical areas while maintaining tactical-operational interface coherence.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Tactical-Operational Principles -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-crosshairs" style="margin-right:8px; color:#1d4ed8;"></i>
              Division Tactical-Operational Principles
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Integration:</strong> Integration of tactical concepts with operational requirements</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Brigade Integration:</strong> Synchronized operations across multiple brigades and tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Functions:</strong> Integration of tactical functions across Division operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Approach:</strong> Development of Division tactical approaches and concepts</p>
              <p style="margin:0;"><strong>• Tactical Sequencing:</strong> Division operation sequencing and tactical phasing coordination</p>
            </div>
          </div>

          <!-- Development Framework -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-cogs" style="margin-right:8px; color:#1d4ed8;"></i>
              Division Development Framework
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Array Forces:</strong> Division-level force positioning and multi-brigade allocation across tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Develop Scheme:</strong> Division tactical concept integrating Corps guidance with brigade capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Assign Tasks:</strong> Mission assignment to subordinate brigades and supporting commands</p>
              <p style="margin:0 0 8px 0;"><strong>• Prepare Sustainment:</strong> Division sustainment architecture supporting extended multi-brigade operations</p>
              <p style="margin:0;"><strong>• Coordinate Integration:</strong> Synchronization of Division operations with Corps and adjacent Divisions</p>
            </div>
          </div>

          <!-- Tactical Considerations -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-pawn" style="margin-right:8px; color:#1d4ed8;"></i>
              Division Tactical Considerations
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Corps Operational Guidance:</strong> Implementation of Corps commander's operational direction and concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Division Tactical Strategy:</strong> Development of Division tactical strategy within Corps framework</p>
              <p style="margin:0 0 8px 0;"><strong>• Brigade Coordination:</strong> Integration with subordinate brigade capabilities and limitations</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Constraints:</strong> Division resource allocation within Corps capability and priority limitations</p>
              <p style="margin:0;"><strong>• Tactical Timeline:</strong> Division tactical tempo and timeline coordination with Corps requirements</p>
            </div>
          </div>

          <!-- Command Relationships -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-sitemap" style="margin-right:8px; color:#1d4ed8;"></i>
              Division Command Relationships
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Division Command:</strong> Division commander authority and responsibility for multi-brigade operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Brigade Commands:</strong> Brigade command integration and tactical coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Commands:</strong> Division artillery, aviation, and logistics command coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Commands:</strong> Multinational Division-level command structure integration</p>
              <p style="margin:0;"><strong>• Corps Interface:</strong> Interface with Corps command and adjacent Division coordination</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Division COA Development Process -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-process" style="margin-right:8px; color:#6366f1;"></i>
          Division COA Development Process and Tactical Integration Methodology
        </h3>

        <div style="background-color:rgba(99, 102, 241, 0.1); padding:12px; border-radius:6px; border:1px solid #6366f1; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#a5b4fc; font-size:12px; margin:0 0 8px 0;">Division Process Methodology</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division Development Process:</strong> Division COA development follows tactical-operational interface principles integrating Corps operational guidance with tactical requirements and brigade capabilities. The process requires comprehensive tactical planning, extensive multi-brigade coordination, and iterative refinement to produce viable tactical options for Corps commander consideration.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Tactical Planning Phase -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-map" style="margin-right:8px; color:#6366f1;"></i>
              Division Tactical Planning Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Problem Analysis:</strong> Comprehensive analysis of Division tactical problems and challenges</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Environment Analysis:</strong> Analysis of tactical environment, threats, and multi-brigade opportunities</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Approach Development:</strong> Development of Division tactical approaches and concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• End State Visualization:</strong> Clear visualization of Division tactical end states and objectives</p>
              <p style="margin:0;"><strong>• Success Criteria:</strong> Development of Division success criteria and tactical metrics</p>
            </div>
          </div>

          <!-- COA Generation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-lightbulb" style="margin-right:8px; color:#6366f1;"></i>
              Division COA Generation Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Concept Development:</strong> Development of overarching Division tactical concepts and approaches</p>
              <p style="margin:0 0 8px 0;"><strong>• Brigade Integration Design:</strong> Design of multi-brigade integration supporting Division tactical concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Force Array Planning:</strong> Division force positioning and multi-brigade allocation across tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Task Organization:</strong> Assignment of missions and tasks to subordinate brigade commands</p>
              <p style="margin:0;"><strong>• Sustainment Architecture:</strong> Development of Division sustainment and logistics architecture</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tactical-Operational Interface and Brigade Coordination -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-layer-group" style="margin-right:8px; color:#06b6d4;"></i>
          Division Tactical-Operational Interface and Multi-Brigade Coordination
        </h3>

        <div style="background-color:rgba(6, 182, 212, 0.1); padding:12px; border-radius:6px; border:1px solid #06b6d4; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#67e8f9; font-size:12px; margin:0 0 8px 0;">Division Interface Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Tactical-Operational Integration:</strong> Division commanders must seamlessly integrate Corps operational guidance with tactical requirements from subordinate brigade commands, ensuring coherent translation of operational objectives into executable tactical concepts across multiple brigades and tactical areas.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-board" style="margin-right:8px; color:#06b6d4;"></i>
              Division Operational Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Corps Operational Guidance:</strong> Integration of Corps commander's operational direction and campaign plans</p>
              <p style="margin:0 0 8px 0;"><strong>• Division Tactical Direction:</strong> Implementation of Division commander's tactical strategy and concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Objectives Translation:</strong> Conversion of operational end states into Division tactical objectives</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Allocation Guidance:</strong> Division resource prioritization and allocation across brigade operations</p>
              <p style="margin:0;"><strong>• Risk Tolerance Framework:</strong> Division tactical risk acceptance criteria and mitigation strategies</p>
            </div>
          </div>

          <!-- Tactical Coordination -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-network-wired" style="margin-right:8px; color:#06b6d4;"></i>
              Division Tactical Coordination
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Brigade Command Integration:</strong> Synchronization of multiple brigade operations across Division tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Command Coordination:</strong> Integration of Division artillery, aviation, and logistics commands</p>
              <p style="margin:0 0 8px 0;"><strong>• Adjacent Division Interface:</strong> Coordination with adjacent Division commands and Corps elements</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Area Synchronization:</strong> Coordination across multiple brigade tactical areas</p>
              <p style="margin:0;"><strong>• Mission Command Philosophy:</strong> Implementation of decentralized execution with centralized Division planning</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Coalition Integration -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-handshake" style="margin-right:8px; color:#8b5cf6;"></i>
          Division Coalition Integration and Multinational Brigade Coordination
        </h3>

        <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Division Coalition Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division Multinational Integration:</strong> Division COA development must incorporate coalition partner brigade-level capabilities, constraints, and national caveats while maintaining tactical effectiveness across multiple brigades. This requires sophisticated coordination mechanisms and shared understanding of tactical objectives.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Coalition Brigade Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-users" style="margin-right:8px; color:#8b5cf6;"></i>
              Coalition Brigade Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multinational Brigade Commands:</strong> Integration of coalition partner brigade-level commands and capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Battalion-Level Integration:</strong> Coalition partner battalion integration within Division tactical framework</p>
              <p style="margin:0 0 8px 0;"><strong>• National Caveats:</strong> Partner nation Division-level tactical limitations and political constraints</p>
              <p style="margin:0 0 8px 0;"><strong>• Capability Integration:</strong> Coalition Division unique capabilities and specialized force contributions</p>
              <p style="margin:0;"><strong>• Logistics Coordination:</strong> Multinational Division logistics support and host nation coordination</p>
            </div>
          </div>

          <!-- Command Structure Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-sitemap" style="margin-right:8px; color:#8b5cf6;"></i>
              Division Command Structure Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multinational Division Command:</strong> Combined Division command structure establishment and coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Command Relationships:</strong> Division-level tactical control and coordination relationships</p>
              <p style="margin:0 0 8px 0;"><strong>• Staff Integration:</strong> Multinational Division staff integration and liaison coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Planning Synchronization:</strong> Coordinated Division planning processes and shared products</p>
              <p style="margin:0;"><strong>• Information Sharing:</strong> Coalition Division information sharing and security protocols</p>
            </div>
          </div>
        </div>
      </div>

      <!-- SFADC Criteria Application -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-check-double" style="margin-right:8px; color:#ef4444;"></i>
          Division SFADC Criteria Application - Tactical Level Evaluation
        </h3>

        <div style="background-color:rgba(239, 68, 68, 0.1); padding:12px; border-radius:6px; border:1px solid #ef4444; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 8px 0;">Division Evaluation Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division SFADC Application:</strong> Division-level COAs must be rigorously evaluated against SFADC criteria with tactical-level considerations including Corps operational objectives, coalition requirements, multi-brigade resource constraints, and tactical risk tolerance.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Suitable and Feasible -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-bullseye" style="margin-right:8px; color:#ef4444;"></i>
              Division Suitable and Feasible
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Corps Operational Alignment:</strong> Direct contribution to Corps operational objectives and campaign plans</p>
              <p style="margin:0 0 8px 0;"><strong>• Division Mission Accomplishment:</strong> Capability to achieve assigned Division mission and tactical end state</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Brigade Capability:</strong> Sufficient brigade forces available within Division and from Corps reserve</p>
              <p style="margin:0 0 8px 0;"><strong>• Division Logistics Capability:</strong> Division sustainment architecture capable of supporting extended multi-brigade operations</p>
              <p style="margin:0;"><strong>• Tactical Timeline:</strong> Achievable within Division tactical timeline and tempo requirements</p>
            </div>
          </div>

          <!-- Acceptable and Complete -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-balance-scale" style="margin-right:8px; color:#ef4444;"></i>
              Division Acceptable and Complete
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Risk Level:</strong> Risk level acceptable to Corps command and Division leadership</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Acceptance:</strong> Risk level acceptable to coalition Division partners and alliance structures</p>
              <p style="margin:0 0 8px 0;"><strong>• Complete Division Framework:</strong> Comprehensive planning addressing all Division tactical functions</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Brigade Integration:</strong> Complete multi-brigade sustainment planning and coordination</p>
              <p style="margin:0;"><strong>• Risk Mitigation:</strong> Comprehensive Division risk mitigation and contingency planning</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Division Tactical Risk Assessment -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-exclamation-triangle" style="margin-right:8px; color:#f97316;"></i>
          Division Tactical Risk Assessment and Mitigation Framework
        </h3>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fb923c; font-size:12px; margin:0 0 8px 0;">Division Risk Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division Tactical Risk Management:</strong> Division-level risk assessment encompasses tactical risks with potential Corps-level consequences. Risk evaluation must consider probability, impact, and mitigation capabilities across multiple brigades, tactical areas, and coalition operations.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Tactical Risk Categories -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-list-alt" style="margin-right:8px; color:#f97316;"></i>
              Division Tactical Risk Categories
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Risk:</strong> Division mission failure, multi-brigade coordination breakdown, and tactical capability degradation</p>
              <p style="margin:0 0 8px 0;"><strong>• Force Protection Risk:</strong> Brigade-level force protection, casualty management, and unit capability loss</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Risk:</strong> Division-level alliance cohesion, partner nation commitment, and multinational coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Risk:</strong> Division resource depletion, multi-brigade sustainability, and competing priority impacts</p>
              <p style="margin:0;"><strong>• Environmental Risk:</strong> Tactical environment changes, weather impacts, and terrain considerations</p>
            </div>
          </div>

          <!-- Risk Assessment Process -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chart-line" style="margin-right:8px; color:#f97316;"></i>
              Division Risk Assessment Process
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Risk Identification:</strong> Comprehensive identification of Division tactical risks across brigades</p>
              <p style="margin:0 0 8px 0;"><strong>• Probability Assessment:</strong> Statistical and analytical assessment of Division risk probability and likelihood</p>
              <p style="margin:0 0 8px 0;"><strong>• Impact Analysis:</strong> Comprehensive analysis of potential consequences and tactical implications</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Prioritization:</strong> Priority ranking based on probability, impact, and Division tactical significance</p>
              <p style="margin:0;"><strong>• Mitigation Planning:</strong> Development of Division risk mitigation strategies and contingency plans</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Division Resource Allocation -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-chart-pie" style="margin-right:8px; color:#10b981;"></i>
          Division Resource Allocation and Distribution Framework
        </h3>

        <div style="background-color:rgba(16, 185, 129, 0.1); padding:12px; border-radius:6px; border:1px solid #10b981; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 8px 0;">Division Resource Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division Resource Management:</strong> Division commanders must optimize allocation of limited tactical resources across competing brigade priorities, coalition requirements, and tactical timelines. Resource planning encompasses personnel, equipment, logistics, intelligence, and tactical capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Force Allocation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#6ee7b7; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-users-cog" style="margin-right:8px; color:#10b981;"></i>
              Division Force Allocation
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Brigade Allocation:</strong> Distribution of brigade forces across Division tactical areas and mission priorities</p>
              <p style="margin:0 0 8px 0;"><strong>• Division Reserve:</strong> Allocation and employment of Division reserve forces and capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Forces:</strong> Integration and allocation of multinational brigade and battalion contributions</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Commands:</strong> Allocation of Division artillery, aviation, and specialized capabilities</p>
              <p style="margin:0;"><strong>• Force Rotation:</strong> Division force rotation and sustainment planning across multiple brigades</p>
            </div>
          </div>

          <!-- Logistics Resources -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#6ee7b7; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-truck" style="margin-right:8px; color:#10b981;"></i>
              Division Logistics Resources
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Supply Chain Management:</strong> Division supply chain optimization and multi-brigade distribution network</p>
              <p style="margin:0 0 8px 0;"><strong>• Transportation Assets:</strong> Division transportation capability allocation and movement coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Fuel and Energy:</strong> Division fuel distribution and energy resource management across brigades</p>
              <p style="margin:0 0 8px 0;"><strong>• Medical Resources:</strong> Division medical capability and evacuation resource allocation</p>
              <p style="margin:0;"><strong>• Maintenance Support:</strong> Division maintenance capability and equipment serviceability management</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Division Command Considerations -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-star" style="margin-right:8px; color:#f59e0b;"></i>
          Division Command Considerations and Tactical Leadership
        </h3>

        <div style="background-color:rgba(245, 158, 11, 0.1); padding:12px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 8px 0;">Division Command Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division Tactical Command Authority:</strong> Division commanders exercise tactical command authority over multiple brigades, tactical areas, and coalition partners. Command considerations encompass tactical decision-making, tactical-operational interface application, and tactical execution oversight with comprehensive understanding of Corps operational objectives and tactical implications.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Tactical Decision Making -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-king" style="margin-right:8px; color:#f59e0b;"></i>
              Division Tactical Decision Making
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Vision:</strong> Development and communication of Division tactical vision and commander's intent</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Authority:</strong> Exercise of Division tactical decision authority within Corps guidance parameters</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Acceptance:</strong> Division tactical risk acceptance and mitigation decision-making</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Prioritization:</strong> Division resource allocation and priority determination across brigades</p>
              <p style="margin:0;"><strong>• Coalition Leadership:</strong> Multinational Division leadership and alliance relationship management</p>
            </div>
          </div>

          <!-- Tactical Interface Application -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b;"></i>
              Division Tactical Interface Application
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Planning:</strong> Application of tactical planning methodology to Division tactical problems</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Approach:</strong> Development of comprehensive Division tactical approaches</p>
              <p style="margin:0 0 8px 0;"><strong>• Battle Design:</strong> Division battle design and tactical concept development</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Functions:</strong> Integration of tactical functions across Division operations</p>
              <p style="margin:0;"><strong>• Tactical Sequencing:</strong> Division operation sequencing and tactical phasing coordination</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline and Phasing -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-clock" style="margin-right:8px; color:#8b5cf6;"></i>
          Division Timeline and Tactical Phasing Framework
        </h3>

        <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Division Phasing Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division Tactical Timeline Management:</strong> Division operations require comprehensive phasing and timeline coordination across multiple brigades, coalition partners, and tactical timelines. Phasing must accommodate tactical deployment, multi-brigade buildup, sustained operations, and tactical transition with flexible adaptation capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Tactical Phasing -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-layer-group" style="margin-right:8px; color:#8b5cf6;"></i>
              Division Tactical Phasing
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Phase 0:</strong> Shape - Division shaping operations and tactical preparation</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase I:</strong> Deter - Division deterrence and crisis response preparation</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase II:</strong> Seize Initiative - Initial Division operations and tactical advantage establishment</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase III:</strong> Dominate - Major Division combat operations and tactical objective achievement</p>
              <p style="margin:0;"><strong>• Phase IV:</strong> Stabilize - Post-conflict Division stabilization and tactical transition</p>
            </div>
          </div>

          <!-- Timeline Coordination -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-calendar-alt" style="margin-right:8px; color:#8b5cf6;"></i>
              Division Timeline Coordination
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Deployment:</strong> Division force deployment timeline and tactical lift coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Synchronization:</strong> Multinational Division timeline coordination and partner integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Tempo:</strong> Sustainable Division tactical tempo and endurance planning</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Points:</strong> Division tactical decision points and branch/sequel planning triggers</p>
              <p style="margin:0;"><strong>• Transition Planning:</strong> Division phase transition criteria and tactical milestone achievement</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Division Multi-Domain Operations Integration -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-globe" style="margin-right:8px; color:#1d4ed8;"></i>
          Division Multi-Domain Operations Integration and Tactical Convergence
        </h3>

        <div style="background-color:rgba(29, 78, 216, 0.1); padding:12px; border-radius:6px; border:1px solid #1d4ed8; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Division Multi-Domain Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division Multi-Domain Operations:</strong> Division commanders must integrate and synchronize operations across all domains - land, air, maritime, space, and cyberspace - to achieve tactical objectives. Multi-domain convergence requires comprehensive understanding of domain interactions, cross-domain effects, and synchronized multi-brigade operations across tactical areas.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Land Domain Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-mountain" style="margin-right:8px; color:#1d4ed8;"></i>
              Division Land Domain Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multi-Brigade Operations:</strong> Synchronized land operations across multiple brigades and tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Terrain Integration:</strong> Division terrain analysis and multi-domain terrain utilization</p>
              <p style="margin:0 0 8px 0;"><strong>• Ground Maneuver:</strong> Tactical ground maneuver coordination and multi-brigade integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Urban Operations:</strong> Division urban operations and complex terrain navigation</p>
              <p style="margin:0;"><strong>• Coalition Ground Forces:</strong> Multinational ground force integration and coordination</p>
            </div>
          </div>

          <!-- Air Domain Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-plane" style="margin-right:8px; color:#1d4ed8;"></i>
              Division Air Domain Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Division Aviation:</strong> Division aviation integration and multi-brigade aviation coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Air-Ground Integration:</strong> Close air support and Division ground operation coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Airspace Management:</strong> Division airspace coordination and joint airspace integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Air Mobility:</strong> Division air mobility and tactical lift coordination</p>
              <p style="margin:0;"><strong>• Air Defense:</strong> Division air defense and integrated air and missile defense</p>
            </div>
          </div>

          <!-- Space and Cyber Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-satellite" style="margin-right:8px; color:#1d4ed8;"></i>
              Division Space and Cyber Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Space Operations:</strong> Division space capability utilization and space-based enablers</p>
              <p style="margin:0 0 8px 0;"><strong>• Cyber Operations:</strong> Division cyber capability and defensive cyber operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Electronic Warfare:</strong> Division electronic warfare and spectrum management</p>
              <p style="margin:0 0 8px 0;"><strong>• Information Operations:</strong> Division information operations and cognitive domain effects</p>
              <p style="margin:0;"><strong>• Intelligence Integration:</strong> Multi-domain intelligence and reconnaissance integration</p>
            </div>
          </div>

          <!-- Tactical Assessment -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chart-bar" style="margin-right:8px; color:#1d4ed8;"></i>
              Division Tactical Assessment
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Mission Accomplishment:</strong> Division mission objective achievement and tactical end state progress</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Capability:</strong> Division tactical capability maintenance and multi-brigade effectiveness</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Effectiveness:</strong> Multinational Division effectiveness and alliance cohesion measurement</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Efficiency:</strong> Division resource utilization efficiency and optimization assessment</p>
              <p style="margin:0;"><strong>• Tactical Tempo:</strong> Sustainable Division tactical tempo and endurance evaluation</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Division Tactical Innovation and Adaptation -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-lightbulb" style="margin-right:8px; color:#6366f1;"></i>
          Division Tactical Innovation and Adaptive Operations
        </h3>

        <div style="background-color:rgba(99, 102, 241, 0.1); padding:12px; border-radius:6px; border:1px solid #6366f1; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#a5b4fc; font-size:12px; margin:0 0 8px 0;">Division Innovation Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Division Tactical Innovation:</strong> Division commanders must foster tactical innovation and adaptive operations to maintain competitive advantage against peer adversaries. Innovation encompasses tactical techniques, technology integration, organizational adaptation, and continuous learning across multi-brigade operations.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Tactical Innovation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-rocket" style="margin-right:8px; color:#6366f1;"></i>
              Division Tactical Innovation
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Techniques:</strong> Development and refinement of innovative Division tactical techniques and procedures</p>
              <p style="margin:0 0 8px 0;"><strong>• Technology Integration:</strong> Integration of emerging technologies into Division tactical operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Organizational Adaptation:</strong> Adaptive Division organizational structures and command relationships</p>
              <p style="margin:0 0 8px 0;"><strong>• Experimentation:</strong> Tactical experimentation and proof-of-concept validation</p>
              <p style="margin:0;"><strong>• Best Practices:</strong> Identification and dissemination of Division tactical best practices</p>
            </div>
          </div>

          <!-- Adaptive Operations -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-arrows-alt" style="margin-right:8px; color:#6366f1;"></i>
              Division Adaptive Operations
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Flexibility:</strong> Rapid Division adaptation to changing tactical conditions and requirements</p>
              <p style="margin:0 0 8px 0;"><strong>• Learning Organization:</strong> Continuous Division learning and knowledge management systems</p>
              <p style="margin:0 0 8px 0;"><strong>• Feedback Integration:</strong> Integration of tactical lessons learned and after-action reviews</p>
              <p style="margin:0 0 8px 0;"><strong>• Agile Planning:</strong> Agile Division planning processes and rapid decision-making</p>
              <p style="margin:0;"><strong>• Cultural Adaptation:</strong> Development of adaptive Division culture and mindset</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div style="background-color:#374151; padding:16px; border-radius:8px; border-left:4px solid #f59e0b; margin-bottom:20px;">
        <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 8px 0;">
          <i class="fas fa-graduation-cap" style="margin-right:8px;"></i>
          Division COA Development - Educational Framework Summary
        </h4>
        <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
          <strong>UNCLASSIFIED:</strong> This comprehensive doctrinal framework provides senior military officers with essential knowledge for Division-level COA development processes. The framework integrates FM 5-0 doctrine with tactical-operational interface considerations, coalition operations, and multi-brigade coordination requirements essential for effective Division command and strategic military education.
        </p>
      </div>
    </div>
  `;
  }
};

export default divisionCOAAnalysisModule;
