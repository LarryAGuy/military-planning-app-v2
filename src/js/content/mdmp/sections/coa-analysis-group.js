/**
 * MDMP Course of Action Development - Group Level Echelon Analysis
 * Tactical Execution with Operational Coordination Doctrinal Framework
 * Source: FM 5-0 (Operations Process), Chapter 12 - Course of Action Development
 * Target: Senior Military Officers at Group Command Level (Colonel)
 */

export const groupCOAAnalysisModule = {
  getContent() {
    return `
    <div style="padding:20px;">
      <!-- Group Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-layer-group" style="margin-right:12px; color:#f59e0b; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Group Level COA Development - Doctrinal Framework</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Tactical Execution with Operational Coordination and Multi-Battalion Framework</p>
        </div>
      </div>

      <!-- Group-Level COA Development Doctrine -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-book" style="margin-right:8px; color:#1d4ed8;"></i>
          Group-Level COA Development Doctrine
        </h3>

        <div style="background-color:rgba(29, 78, 216, 0.1); padding:12px; border-radius:6px; border:1px solid #1d4ed8; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Group Doctrinal Foundation</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group COA Development:</strong> The systematic application of tactical execution principles by Group commanders and staffs to develop multiple feasible courses of action for accomplishing Group missions within Division tactical guidance. This process integrates tactical concepts with operational coordination, managing multi-battalion operations across tactical areas while maintaining tactical execution effectiveness and operational interface coherence with functional group capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Tactical Execution Principles -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-crosshairs" style="margin-right:8px; color:#1d4ed8;"></i>
              Group Tactical Execution Principles
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Execution:</strong> Direct tactical execution of Division tactical concepts with functional group capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Battalion Integration:</strong> Synchronized operations across multiple battalions and functional tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Functions:</strong> Integration of tactical functions across Group operations with functional focus</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Coordination:</strong> Development of Group tactical coordination and functional execution concepts</p>
              <p style="margin:0;"><strong>• Tactical Sequencing:</strong> Group operation sequencing and tactical execution phasing with functional capabilities</p>
            </div>
          </div>

          <!-- Development Framework -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-cogs" style="margin-right:8px; color:#1d4ed8;"></i>
              Group Development Framework
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Array Forces:</strong> Group-level force positioning and multi-battalion allocation across functional tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Develop Scheme:</strong> Group tactical concept integrating Division guidance with functional battalion capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Assign Tasks:</strong> Mission assignment to subordinate battalions and functional supporting companies</p>
              <p style="margin:0 0 8px 0;"><strong>• Prepare Sustainment:</strong> Group sustainment architecture supporting extended multi-battalion functional operations</p>
              <p style="margin:0;"><strong>• Coordinate Integration:</strong> Synchronization of Group operations with Division and adjacent Groups</p>
            </div>
          </div>

          <!-- Tactical Considerations -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-pawn" style="margin-right:8px; color:#1d4ed8;"></i>
              Group Tactical Considerations
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Division Tactical Guidance:</strong> Implementation of Division commander's tactical direction with functional group focus</p>
              <p style="margin:0 0 8px 0;"><strong>• Group Tactical Strategy:</strong> Development of Group tactical strategy within Division framework with functional capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Battalion Coordination:</strong> Integration with subordinate battalion capabilities and functional limitations</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Constraints:</strong> Group resource allocation within Division capability and functional priority limitations</p>
              <p style="margin:0;"><strong>• Tactical Timeline:</strong> Group tactical tempo and timeline coordination with Division functional requirements</p>
            </div>
          </div>

          <!-- Command Relationships -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-sitemap" style="margin-right:8px; color:#1d4ed8;"></i>
              Group Command Relationships
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Group Command:</strong> Group commander authority and responsibility for multi-battalion functional operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Battalion Commands:</strong> Battalion command integration and functional tactical coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Commands:</strong> Group fires, aviation, and functional logistics command coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Commands:</strong> Multinational Group-level command structure integration</p>
              <p style="margin:0;"><strong>• Division Interface:</strong> Interface with Division command and adjacent Group coordination</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Group COA Development Process -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-process" style="margin-right:8px; color:#6366f1;"></i>
          Group COA Development Process and Functional Tactical Execution Methodology
        </h3>

        <div style="background-color:rgba(99, 102, 241, 0.1); padding:12px; border-radius:6px; border:1px solid #6366f1; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#a5b4fc; font-size:12px; margin:0 0 8px 0;">Group Process Methodology</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Development Process:</strong> Group COA development follows functional tactical execution principles integrating Division tactical guidance with operational coordination requirements and functional battalion capabilities. The process requires comprehensive tactical planning, extensive multi-battalion coordination, and iterative refinement to produce viable functional tactical execution options for Division commander consideration.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Tactical Execution Phase -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-map" style="margin-right:8px; color:#6366f1;"></i>
              Group Functional Tactical Execution Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Mission Analysis:</strong> Comprehensive analysis of Group functional tactical mission and execution requirements</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Environment Analysis:</strong> Analysis of tactical environment, threats, and multi-battalion functional execution opportunities</p>
              <p style="margin:0 0 8px 0;"><strong>• Execution Approach Development:</strong> Development of Group functional tactical execution approaches and concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• End State Visualization:</strong> Clear visualization of Group tactical end states and functional execution objectives</p>
              <p style="margin:0;"><strong>• Success Criteria:</strong> Development of Group success criteria and functional tactical execution metrics</p>
            </div>
          </div>

          <!-- COA Generation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-lightbulb" style="margin-right:8px; color:#6366f1;"></i>
              Group COA Generation Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Concept Development:</strong> Development of overarching Group functional tactical concepts and execution approaches</p>
              <p style="margin:0 0 8px 0;"><strong>• Battalion Integration Design:</strong> Design of multi-battalion integration supporting Group functional tactical concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Force Array Planning:</strong> Group force positioning and multi-battalion allocation across functional tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Task Organization:</strong> Assignment of missions and tasks to subordinate functional battalion commands</p>
              <p style="margin:0;"><strong>• Sustainment Architecture:</strong> Development of Group sustainment and functional logistics architecture</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tactical Interface and Multi-Battalion Coordination -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-layer-group" style="margin-right:8px; color:#06b6d4;"></i>
          Group Tactical Interface and Functional Multi-Battalion Coordination
        </h3>

        <div style="background-color:rgba(6, 182, 212, 0.1); padding:12px; border-radius:6px; border:1px solid #06b6d4; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#67e8f9; font-size:12px; margin:0 0 8px 0;">Group Interface Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Functional Tactical Execution Integration:</strong> Group commanders must seamlessly integrate Division tactical guidance with functional execution requirements from subordinate battalion commands, ensuring coherent translation of tactical objectives into executable functional tactical concepts across multiple battalions and tactical areas with unique group capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Tactical Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-board" style="margin-right:8px; color:#06b6d4;"></i>
              Group Functional Tactical Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Division Tactical Guidance:</strong> Integration of Division commander's tactical direction with functional group focus</p>
              <p style="margin:0 0 8px 0;"><strong>• Group Tactical Direction:</strong> Implementation of Group commander's functional tactical strategy and execution concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Objectives Translation:</strong> Conversion of tactical end states into Group functional execution objectives</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Allocation Guidance:</strong> Group resource prioritization and allocation across functional battalion operations</p>
              <p style="margin:0;"><strong>• Risk Tolerance Framework:</strong> Group tactical risk acceptance criteria and functional mitigation strategies</p>
            </div>
          </div>

          <!-- Functional Execution Coordination -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-network-wired" style="margin-right:8px; color:#06b6d4;"></i>
              Group Functional Execution Coordination
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Battalion Command Integration:</strong> Synchronization of multiple functional battalion operations across Group tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Command Coordination:</strong> Integration of Group fires, aviation, and functional logistics commands</p>
              <p style="margin:0 0 8px 0;"><strong>• Adjacent Group Interface:</strong> Coordination with adjacent Group commands and Division functional elements</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Area Synchronization:</strong> Coordination across multiple battalion functional tactical areas</p>
              <p style="margin:0;"><strong>• Mission Command Philosophy:</strong> Implementation of decentralized execution with centralized Group functional planning</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Coalition Integration -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-handshake" style="margin-right:8px; color:#8b5cf6;"></i>
          Group Coalition Integration and Multinational Functional Battalion Coordination
        </h3>

        <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Group Coalition Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Multinational Integration:</strong> Group COA development must incorporate coalition partner functional battalion-level capabilities, constraints, and national caveats while maintaining tactical effectiveness across multiple functional battalions. This requires sophisticated coordination mechanisms and shared understanding of functional tactical execution objectives.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Coalition Functional Battalion Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-users" style="margin-right:8px; color:#8b5cf6;"></i>
              Coalition Functional Battalion Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multinational Battalion Commands:</strong> Integration of coalition partner functional battalion-level commands and capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Company-Level Integration:</strong> Coalition partner functional company integration within Group tactical framework</p>
              <p style="margin:0 0 8px 0;"><strong>• National Caveats:</strong> Partner nation Group-level tactical limitations and functional political constraints</p>
              <p style="margin:0 0 8px 0;"><strong>• Capability Integration:</strong> Coalition Group unique functional capabilities and force contributions</p>
              <p style="margin:0;"><strong>• Logistics Coordination:</strong> Multinational Group functional logistics support and host nation coordination</p>
            </div>
          </div>

          <!-- Command Structure Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-sitemap" style="margin-right:8px; color:#8b5cf6;"></i>
              Group Command Structure Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multinational Group Command:</strong> Combined Group functional command structure establishment and coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Command Relationships:</strong> Group-level functional tactical control and coordination relationships</p>
              <p style="margin:0 0 8px 0;"><strong>• Staff Integration:</strong> Multinational Group functional staff integration and liaison coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Planning Synchronization:</strong> Coordinated Group functional planning processes and shared products</p>
              <p style="margin:0;"><strong>• Information Sharing:</strong> Coalition Group functional information sharing and security protocols</p>
            </div>
          </div>
        </div>
      </div>

      <!-- SFADC Criteria Application -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-check-double" style="margin-right:8px; color:#ef4444;"></i>
          Group SFADC Criteria Application - Functional Tactical Execution Level Evaluation
        </h3>

        <div style="background-color:rgba(239, 68, 68, 0.1); padding:12px; border-radius:6px; border:1px solid #ef4444; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 8px 0;">Group Evaluation Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group SFADC Application:</strong> Group-level COAs must be rigorously evaluated against SFADC criteria with functional tactical execution considerations including Division tactical objectives, coalition requirements, multi-battalion functional resource constraints, and tactical execution risk tolerance with unique group capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Suitable and Feasible -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-bullseye" style="margin-right:8px; color:#ef4444;"></i>
              Group Suitable and Feasible
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Division Tactical Alignment:</strong> Direct contribution to Division tactical objectives with functional group capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Group Mission Accomplishment:</strong> Capability to achieve assigned Group functional mission and tactical end state</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Battalion Capability:</strong> Sufficient functional battalion forces available within Group and from Division reserve</p>
              <p style="margin:0 0 8px 0;"><strong>• Group Logistics Capability:</strong> Group sustainment architecture capable of supporting extended multi-battalion functional operations</p>
              <p style="margin:0;"><strong>• Tactical Timeline:</strong> Achievable within Group tactical timeline and functional execution tempo requirements</p>
            </div>
          </div>

          <!-- Acceptable and Complete -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-balance-scale" style="margin-right:8px; color:#ef4444;"></i>
              Group Acceptable and Complete
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Risk Level:</strong> Risk level acceptable to Division command and Group functional leadership</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Acceptance:</strong> Risk level acceptable to coalition Group partners and functional alliance structures</p>
              <p style="margin:0 0 8px 0;"><strong>• Complete Group Framework:</strong> Comprehensive planning addressing all Group functional tactical functions</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Battalion Integration:</strong> Complete multi-battalion functional sustainment planning and coordination</p>
              <p style="margin:0;"><strong>• Risk Mitigation:</strong> Comprehensive Group risk mitigation and functional contingency planning</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Group Tactical Risk Assessment -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-exclamation-triangle" style="margin-right:8px; color:#f97316;"></i>
          Group Tactical Risk Assessment and Functional Mitigation Framework
        </h3>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fb923c; font-size:12px; margin:0 0 8px 0;">Group Risk Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Tactical Risk Management:</strong> Group-level risk assessment encompasses functional tactical execution risks with potential Division-level consequences. Risk evaluation must consider probability, impact, and mitigation capabilities across multiple functional battalions, tactical areas, and coalition operations with unique group capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Tactical Risk Categories -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-list-alt" style="margin-right:8px; color:#f97316;"></i>
              Group Functional Tactical Risk Categories
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Execution Risk:</strong> Group functional mission failure, multi-battalion coordination breakdown, and tactical capability degradation</p>
              <p style="margin:0 0 8px 0;"><strong>• Force Protection Risk:</strong> Battalion-level functional force protection, casualty management, and unit capability loss</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Risk:</strong> Group-level alliance cohesion, partner nation commitment, and multinational functional coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Risk:</strong> Group resource depletion, multi-battalion functional sustainability, and competing priority impacts</p>
              <p style="margin:0;"><strong>• Environmental Risk:</strong> Tactical environment changes, weather impacts, and functional terrain considerations</p>
            </div>
          </div>

          <!-- Risk Assessment Process -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chart-line" style="margin-right:8px; color:#f97316;"></i>
              Group Risk Assessment Process
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Risk Identification:</strong> Comprehensive identification of Group functional tactical risks across battalions</p>
              <p style="margin:0 0 8px 0;"><strong>• Probability Assessment:</strong> Statistical and analytical assessment of Group functional risk probability and likelihood</p>
              <p style="margin:0 0 8px 0;"><strong>• Impact Analysis:</strong> Comprehensive analysis of potential consequences and functional tactical implications</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Prioritization:</strong> Priority ranking based on probability, impact, and Group functional tactical significance</p>
              <p style="margin:0;"><strong>• Mitigation Planning:</strong> Development of Group functional risk mitigation strategies and contingency plans</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Group Resource Allocation -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-chart-pie" style="margin-right:8px; color:#10b981;"></i>
          Group Resource Allocation and Functional Distribution Framework
        </h3>

        <div style="background-color:rgba(16, 185, 129, 0.1); padding:12px; border-radius:6px; border:1px solid #10b981; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 8px 0;">Group Resource Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Resource Management:</strong> Group commanders must optimize allocation of limited tactical resources across competing functional battalion priorities, coalition requirements, and tactical execution timelines. Resource planning encompasses personnel, equipment, logistics, intelligence, and functional tactical capabilities unique to group operations.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Force Allocation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#6ee7b7; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-users-cog" style="margin-right:8px; color:#10b981;"></i>
              Group Functional Force Allocation
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Battalion Allocation:</strong> Distribution of functional battalion forces across Group tactical areas and mission priorities</p>
              <p style="margin:0 0 8px 0;"><strong>• Group Reserve:</strong> Allocation and employment of Group reserve forces and functional capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Forces:</strong> Integration and allocation of multinational functional battalion and company contributions</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Commands:</strong> Allocation of Group fires, aviation, and functional capabilities</p>
              <p style="margin:0;"><strong>• Force Rotation:</strong> Group force rotation and sustainment planning across multiple functional battalions</p>
            </div>
          </div>

          <!-- Functional Logistics Resources -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#6ee7b7; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-truck" style="margin-right:8px; color:#10b981;"></i>
              Group Functional Logistics Resources
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Supply Chain Management:</strong> Group functional supply chain optimization and multi-battalion distribution network</p>
              <p style="margin:0 0 8px 0;"><strong>• Transportation Assets:</strong> Group transportation capability allocation and functional movement coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Fuel and Energy:</strong> Group fuel distribution and energy resource management across functional battalions</p>
              <p style="margin:0 0 8px 0;"><strong>• Medical Resources:</strong> Group medical capability and evacuation resource allocation for functional operations</p>
              <p style="margin:0;"><strong>• Maintenance Support:</strong> Group maintenance capability and functional equipment serviceability management</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Group Command Considerations -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-star" style="margin-right:8px; color:#f59e0b;"></i>
          Group Command Considerations and Functional Tactical Leadership
        </h3>

        <div style="background-color:rgba(245, 158, 11, 0.1); padding:12px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 8px 0;">Group Command Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Tactical Command Authority:</strong> Group commanders exercise tactical command authority over multiple functional battalions, tactical areas, and coalition partners. Command considerations encompass functional tactical decision-making, tactical execution leadership, and tactical coordination oversight with comprehensive understanding of Division tactical objectives and functional execution implications.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Tactical Decision Making -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-king" style="margin-right:8px; color:#f59e0b;"></i>
              Group Functional Tactical Decision Making
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Vision:</strong> Development and communication of Group functional tactical vision and commander's intent</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Authority:</strong> Exercise of Group tactical decision authority within Division guidance parameters</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Acceptance:</strong> Group tactical risk acceptance and functional mitigation decision-making</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Prioritization:</strong> Group resource allocation and priority determination across functional battalions</p>
              <p style="margin:0;"><strong>• Coalition Leadership:</strong> Multinational Group leadership and functional alliance relationship management</p>
            </div>
          </div>

          <!-- Functional Tactical Execution Leadership -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-crosshairs" style="margin-right:8px; color:#f59e0b;"></i>
              Group Functional Tactical Execution Leadership
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Planning:</strong> Application of tactical planning methodology to Group functional tactical problems</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Approach:</strong> Development of comprehensive Group functional tactical approaches</p>
              <p style="margin:0 0 8px 0;"><strong>• Battle Execution:</strong> Group battle execution and functional tactical concept implementation</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Functions:</strong> Integration of tactical functions across Group functional operations</p>
              <p style="margin:0;"><strong>• Tactical Sequencing:</strong> Group operation sequencing and functional tactical execution phasing coordination</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline and Phasing -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-clock" style="margin-right:8px; color:#8b5cf6;"></i>
          Group Timeline and Functional Tactical Execution Phasing Framework
        </h3>

        <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Group Phasing Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Tactical Timeline Management:</strong> Group operations require comprehensive phasing and timeline coordination across multiple functional battalions, coalition partners, and tactical execution timelines. Phasing must accommodate tactical deployment, multi-battalion buildup, sustained functional operations, and tactical transition with flexible adaptation capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Tactical Phasing -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-layer-group" style="margin-right:8px; color:#8b5cf6;"></i>
              Group Functional Tactical Phasing
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Phase 0:</strong> Shape - Group functional shaping operations and tactical preparation</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase I:</strong> Deter - Group deterrence and functional crisis response preparation</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase II:</strong> Seize Initiative - Initial Group functional operations and tactical advantage establishment</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase III:</strong> Dominate - Major Group functional combat operations and tactical objective achievement</p>
              <p style="margin:0;"><strong>• Phase IV:</strong> Stabilize - Post-conflict Group stabilization and functional tactical transition</p>
            </div>
          </div>

          <!-- Timeline Coordination -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-calendar-alt" style="margin-right:8px; color:#8b5cf6;"></i>
              Group Timeline Coordination
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Deployment:</strong> Group force deployment timeline and functional tactical lift coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Synchronization:</strong> Multinational Group timeline coordination and functional partner integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Tempo:</strong> Sustainable Group tactical tempo and functional endurance planning</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Points:</strong> Group tactical decision points and functional branch/sequel planning triggers</p>
              <p style="margin:0;"><strong>• Transition Planning:</strong> Group phase transition criteria and functional tactical milestone achievement</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Group Functional Innovation and Adaptive Execution -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-lightbulb" style="margin-right:8px; color:#1d4ed8;"></i>
          Group Functional Innovation and Adaptive Execution Operations
        </h3>

        <div style="background-color:rgba(29, 78, 216, 0.1); padding:12px; border-radius:6px; border:1px solid #1d4ed8; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Group Innovation Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Functional Innovation:</strong> Group commanders must foster functional tactical innovation and adaptive execution operations to maintain competitive advantage against peer adversaries. Innovation encompasses functional tactical execution techniques, technology integration, organizational adaptation, and continuous learning across multi-battalion functional operations with unique group capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Tactical Innovation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-rocket" style="margin-right:8px; color:#1d4ed8;"></i>
              Group Functional Tactical Innovation
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Tactical Execution Techniques:</strong> Development and refinement of innovative Group functional tactical execution techniques and procedures</p>
              <p style="margin:0 0 8px 0;"><strong>• Technology Integration:</strong> Integration of emerging technologies into Group functional tactical execution operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Organizational Adaptation:</strong> Adaptive Group organizational structures and functional command relationships</p>
              <p style="margin:0 0 8px 0;"><strong>• Experimentation:</strong> Functional tactical execution experimentation and proof-of-concept validation</p>
              <p style="margin:0;"><strong>• Best Practices:</strong> Identification and dissemination of Group functional tactical execution best practices</p>
            </div>
          </div>

          <!-- Adaptive Functional Execution -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-arrows-alt" style="margin-right:8px; color:#1d4ed8;"></i>
              Group Adaptive Functional Execution
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Execution Flexibility:</strong> Rapid Group adaptation to changing tactical conditions and functional requirements</p>
              <p style="margin:0 0 8px 0;"><strong>• Learning Organization:</strong> Continuous Group learning and functional knowledge management systems</p>
              <p style="margin:0 0 8px 0;"><strong>• Feedback Integration:</strong> Integration of functional tactical lessons learned and after-action reviews</p>
              <p style="margin:0 0 8px 0;"><strong>• Agile Planning:</strong> Agile Group planning processes and rapid functional decision-making</p>
              <p style="margin:0;"><strong>• Cultural Adaptation:</strong> Development of adaptive Group culture and functional execution mindset</p>
            </div>
          </div>

          <!-- Multi-Domain Functional Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-globe" style="margin-right:8px; color:#1d4ed8;"></i>
              Group Multi-Domain Functional Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Land Domain Operations:</strong> Synchronized functional land operations across multiple battalions and tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Air Domain Integration:</strong> Group aviation integration and functional close air support coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Cyber Operations:</strong> Group cyber capability and functional defensive cyber operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Information Operations:</strong> Group information operations and functional cognitive domain effects</p>
              <p style="margin:0;"><strong>• Intelligence Integration:</strong> Multi-domain intelligence and functional reconnaissance integration</p>
            </div>
          </div>

          <!-- Functional Tactical Assessment -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chart-bar" style="margin-right:8px; color:#1d4ed8;"></i>
              Group Functional Tactical Assessment
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Mission Accomplishment:</strong> Group functional mission objective achievement and tactical end state progress</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Capability:</strong> Group tactical capability maintenance and multi-battalion functional effectiveness</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Effectiveness:</strong> Multinational Group effectiveness and functional alliance cohesion measurement</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Efficiency:</strong> Group resource utilization efficiency and functional optimization assessment</p>
              <p style="margin:0;"><strong>• Tactical Tempo:</strong> Sustainable Group tactical tempo and functional endurance evaluation</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Group Functional Multi-Domain Operations Integration -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-globe-americas" style="margin-right:8px; color:#6366f1;"></i>
          Group Functional Multi-Domain Operations Integration and Convergence Framework
        </h3>

        <div style="background-color:rgba(99, 102, 241, 0.1); padding:12px; border-radius:6px; border:1px solid #6366f1; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#a5b4fc; font-size:12px; margin:0 0 8px 0;">Group Functional Multi-Domain Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Functional Multi-Domain Integration:</strong> Group commanders must orchestrate synchronized functional operations across land, air, maritime, space, and cyberspace domains to achieve tactical objectives with unique group capabilities. Multi-domain operations require comprehensive understanding of domain interactions, cross-domain effects, and integrated planning across multiple functional battalions and tactical areas with coalition partners.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Land Domain Operations -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-mountain" style="margin-right:8px; color:#6366f1;"></i>
              Group Functional Land Domain Operations
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Functional Ground Maneuver:</strong> Group functional ground maneuver coordination across multiple battalion tactical areas with unique capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Fire Support Integration:</strong> Group functional fires coordination including artillery, mortars, and functional direct fire systems</p>
              <p style="margin:0 0 8px 0;"><strong>• Engineer Operations:</strong> Group functional engineer support for mobility, countermobility, and survivability operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Air Defense Integration:</strong> Group functional air defense coordination and protection of tactical formations</p>
              <p style="margin:0;"><strong>• Logistics Operations:</strong> Group functional sustainment operations across extended tactical areas and supply lines</p>
            </div>
          </div>

          <!-- Functional Air Domain Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-plane" style="margin-right:8px; color:#6366f1;"></i>
              Group Functional Air Domain Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Close Air Support:</strong> Group coordination of functional close air support missions and tactical air control</p>
              <p style="margin:0 0 8px 0;"><strong>• Aviation Operations:</strong> Group functional aviation integration including attack, reconnaissance, and transport helicopters</p>
              <p style="margin:0 0 8px 0;"><strong>• Airspace Management:</strong> Group functional airspace coordination and deconfliction across tactical areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Air Mobility:</strong> Group functional air mobility operations and tactical airlift coordination</p>
              <p style="margin:0;"><strong>• Unmanned Systems:</strong> Group functional unmanned aerial systems integration and tactical reconnaissance</p>
            </div>
          </div>

          <!-- Functional Cyber and Information Operations -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-shield-alt" style="margin-right:8px; color:#6366f1;"></i>
              Group Functional Cyber and Information Operations
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Defensive Cyber Operations:</strong> Group functional network defense and cybersecurity across tactical communications</p>
              <p style="margin:0 0 8px 0;"><strong>• Information Operations:</strong> Group functional information operations and cognitive domain effects coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Electronic Warfare:</strong> Group functional electronic warfare capabilities and spectrum management</p>
              <p style="margin:0 0 8px 0;"><strong>• Communications Security:</strong> Group functional communications security and information assurance</p>
              <p style="margin:0;"><strong>• Intelligence Integration:</strong> Group functional intelligence operations and multi-source intelligence fusion</p>
            </div>
          </div>

          <!-- Functional Space Domain Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-satellite" style="margin-right:8px; color:#6366f1;"></i>
              Group Functional Space Domain Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Satellite Communications:</strong> Group functional satellite communications and beyond line-of-sight connectivity</p>
              <p style="margin:0 0 8px 0;"><strong>• GPS and Navigation:</strong> Group functional positioning, navigation, and timing systems integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Space-Based Intelligence:</strong> Group functional utilization of space-based intelligence and reconnaissance</p>
              <p style="margin:0 0 8px 0;"><strong>• Weather Services:</strong> Group functional meteorological support and environmental intelligence</p>
              <p style="margin:0;"><strong>• Space Situational Awareness:</strong> Group functional understanding of space domain threats and capabilities</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Group Functional Tactical Decision-Making Process -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-brain" style="margin-right:8px; color:#06b6d4;"></i>
          Group Functional Tactical Decision-Making Process and Command Philosophy
        </h3>

        <div style="background-color:rgba(6, 182, 212, 0.1); padding:12px; border-radius:6px; border:1px solid #06b6d4; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#67e8f9; font-size:12px; margin:0 0 8px 0;">Group Functional Decision-Making Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Functional Tactical Decision-Making:</strong> Group commanders must make rapid, informed functional tactical decisions under uncertainty while managing multiple functional battalions, coalition partners, and competing priorities. Decision-making processes must balance speed with accuracy, incorporating intelligence, staff analysis, and subordinate commander input to achieve functional tactical objectives.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Decision-Making Process -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-cogs" style="margin-right:8px; color:#06b6d4;"></i>
              Group Functional Decision-Making Process
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Situation Assessment:</strong> Rapid assessment of functional tactical situation, enemy capabilities, and friendly force status</p>
              <p style="margin:0 0 8px 0;"><strong>• Option Development:</strong> Generation of functional tactical options and courses of action for Group operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Analysis:</strong> Comprehensive functional risk assessment and mitigation planning for tactical decisions</p>
              <p style="margin:0 0 8px 0;"><strong>• Staff Integration:</strong> Integration of functional staff analysis, intelligence, and technical expertise</p>
              <p style="margin:0;"><strong>• Decision Implementation:</strong> Rapid implementation and communication of functional tactical decisions</p>
            </div>
          </div>

          <!-- Functional Command Philosophy -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-compass" style="margin-right:8px; color:#06b6d4;"></i>
              Group Functional Command Philosophy
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Mission Command:</strong> Decentralized functional execution with centralized planning and commander's intent</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Initiative:</strong> Empowerment of subordinate commanders to seize functional tactical opportunities</p>
              <p style="margin:0 0 8px 0;"><strong>• Adaptive Leadership:</strong> Flexible leadership approach based on functional tactical situation and subordinate capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Integration:</strong> Inclusive command philosophy incorporating multinational functional perspectives</p>
              <p style="margin:0;"><strong>• Continuous Learning:</strong> Learning organization approach with functional after-action reviews and improvement</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Group Functional Operational Assessment and Metrics -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-chart-line" style="margin-right:8px; color:#8b5cf6;"></i>
          Group Functional Operational Assessment and Performance Metrics Framework
        </h3>

        <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Group Functional Assessment Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Functional Operational Assessment:</strong> Group commanders must continuously assess functional tactical progress, unit effectiveness, and mission accomplishment across multiple functional battalions and tactical areas. Assessment frameworks provide objective measures of functional performance, enabling adaptive planning and resource allocation decisions.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Functional Performance Metrics -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-tachometer-alt" style="margin-right:8px; color:#8b5cf6;"></i>
              Group Functional Performance Metrics
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Mission Effectiveness:</strong> Functional tactical objective achievement rates and mission success metrics</p>
              <p style="margin:0 0 8px 0;"><strong>• Unit Readiness:</strong> Functional battalion readiness levels, equipment status, and personnel availability</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Tempo:</strong> Functional operational tempo sustainability and tactical execution speed</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Efficiency:</strong> Functional resource utilization rates and logistical effectiveness</p>
              <p style="margin:0;"><strong>• Coalition Cohesion:</strong> Multinational functional integration effectiveness and partner satisfaction</p>
            </div>
          </div>

          <!-- Functional Assessment Methods -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-search" style="margin-right:8px; color:#8b5cf6;"></i>
              Group Functional Assessment Methods
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Quantitative Analysis:</strong> Statistical analysis of functional tactical performance and operational data</p>
              <p style="margin:0 0 8px 0;"><strong>• Qualitative Assessment:</strong> Subjective evaluation of functional tactical effectiveness and unit morale</p>
              <p style="margin:0 0 8px 0;"><strong>• After-Action Reviews:</strong> Systematic review of functional tactical operations and lessons learned</p>
              <p style="margin:0 0 8px 0;"><strong>• Intelligence Integration:</strong> Intelligence-driven assessment of enemy capabilities and functional intentions</p>
              <p style="margin:0;"><strong>• Feedback Systems:</strong> Subordinate commander and coalition partner functional feedback integration</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Group Functional Interoperability and Standardization -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-link" style="margin-right:8px; color:#ef4444;"></i>
          Group Functional Interoperability and Standardization Framework
        </h3>

        <div style="background-color:rgba(239, 68, 68, 0.1); padding:12px; border-radius:6px; border:1px solid #ef4444; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 8px 0;">Group Interoperability Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Group Functional Interoperability:</strong> Group commanders must ensure seamless interoperability across functional battalions, coalition partners, and supporting elements. Standardization frameworks enable effective communication, coordination, and integration across diverse functional capabilities and multinational forces.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Technical Interoperability -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-cog" style="margin-right:8px; color:#ef4444;"></i>
              Group Technical Interoperability
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Communications Systems:</strong> Group functional communications interoperability and protocol standardization</p>
              <p style="margin:0 0 8px 0;"><strong>• Information Systems:</strong> Group functional information systems integration and data sharing protocols</p>
              <p style="margin:0 0 8px 0;"><strong>• Equipment Standards:</strong> Group functional equipment compatibility and maintenance standardization</p>
              <p style="margin:0 0 8px 0;"><strong>• Software Integration:</strong> Group functional software systems integration and version control</p>
              <p style="margin:0;"><strong>• Network Architecture:</strong> Group functional network architecture and cybersecurity standards</p>
            </div>
          </div>

          <!-- Procedural Standardization -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-clipboard-list" style="margin-right:8px; color:#ef4444;"></i>
              Group Procedural Standardization
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operating Procedures:</strong> Group functional standard operating procedures and tactical techniques</p>
              <p style="margin:0 0 8px 0;"><strong>• Planning Processes:</strong> Group functional planning process standardization and coordination procedures</p>
              <p style="margin:0 0 8px 0;"><strong>• Reporting Standards:</strong> Group functional reporting formats and information sharing protocols</p>
              <p style="margin:0 0 8px 0;"><strong>• Training Standards:</strong> Group functional training standardization and certification requirements</p>
              <p style="margin:0;"><strong>• Quality Assurance:</strong> Group functional quality assurance and performance standards</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div style="background-color:#374151; padding:16px; border-radius:8px; border-left:4px solid #f59e0b; margin-bottom:20px;">
        <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 8px 0;">
          <i class="fas fa-graduation-cap" style="margin-right:8px;"></i>
          Group COA Development - Educational Framework Summary
        </h4>
        <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
          <strong>UNCLASSIFIED:</strong> This comprehensive doctrinal framework provides senior military officers with essential knowledge for Group-level COA development processes. The framework integrates FM 5-0 doctrine with functional tactical execution considerations, coalition operations, and multi-battalion coordination requirements essential for effective Group command and functional tactical military education.
        </p>
      </div>
    </div>
  `;
  }
};

export default groupCOAAnalysisModule;
