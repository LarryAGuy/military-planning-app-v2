/**
 * MDMP Course of Action Development - Corps Level Echelon Analysis
 * Operational Art Application Doctrinal Framework
 * Source: FM 5-0 (Operations Process), Chapter 12 - Course of Action Development
 * Target: Senior Military Officers at Corps Command Level (3-star General)
 */

export const corpsCOAAnalysisModule = {
  getContent() {
    return `
    <div style="padding:20px;">
      <!-- Corps Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-crown" style="margin-right:12px; color:#f59e0b; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Corps Level COA Development - Doctrinal Framework</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Operational Art Application and Multi-Division Coordination Framework</p>
        </div>
      </div>

      <!-- Corps-Level COA Development Doctrine -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-book" style="margin-right:8px; color:#1d4ed8;"></i>
          Corps-Level COA Development Doctrine
        </h3>

        <div style="background-color:rgba(29, 78, 216, 0.1); padding:12px; border-radius:6px; border:1px solid #1d4ed8; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Corps Doctrinal Foundation</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Corps COA Development:</strong> The systematic application of operational art by Corps commanders and staffs to develop multiple feasible courses of action for accomplishing Corps missions within Army operational guidance. This process integrates operational design with tactical execution, coordinating multi-division operations across operational areas while maintaining operational-tactical interface coherence.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Art Principles -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-palette" style="margin-right:8px; color:#1d4ed8;"></i>
              Corps Operational Art Principles
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Design:</strong> Application of operational design methodology to Corps operational problems</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Division Integration:</strong> Synchronized operations across multiple divisions and operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Functions:</strong> Integration of operational functions across Corps operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Approach:</strong> Development of Corps operational approaches and concepts</p>
              <p style="margin:0;"><strong>• Operational Sequencing:</strong> Corps operation sequencing and phasing coordination</p>
            </div>
          </div>

          <!-- Development Framework -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-cogs" style="margin-right:8px; color:#1d4ed8;"></i>
              Corps Development Framework
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Array Forces:</strong> Corps-level force positioning and multi-division allocation across operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Develop Scheme:</strong> Corps operational concept integrating Army guidance with division capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Assign Tasks:</strong> Mission assignment to subordinate divisions and supporting commands</p>
              <p style="margin:0 0 8px 0;"><strong>• Prepare Sustainment:</strong> Corps sustainment architecture supporting extended multi-division operations</p>
              <p style="margin:0;"><strong>• Coordinate Integration:</strong> Synchronization of Corps operations with Army and adjacent Corps</p>
            </div>
          </div>

          <!-- Operational Considerations -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-knight" style="margin-right:8px; color:#1d4ed8;"></i>
              Corps Operational Considerations
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Army Operational Guidance:</strong> Implementation of Army commander's operational direction and concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Operational Strategy:</strong> Development of Corps operational strategy within Army framework</p>
              <p style="margin:0 0 8px 0;"><strong>• Division Coordination:</strong> Integration with subordinate division capabilities and limitations</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Constraints:</strong> Corps resource allocation within Army capability and priority limitations</p>
              <p style="margin:0;"><strong>• Operational Timeline:</strong> Corps operational tempo and timeline coordination with Army requirements</p>
            </div>
          </div>

          <!-- Command Relationships -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-sitemap" style="margin-right:8px; color:#1d4ed8;"></i>
              Corps Command Relationships
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Corps Command:</strong> Corps commander authority and responsibility for multi-division operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Division Commands:</strong> Division command integration and operational coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Commands:</strong> Corps artillery, aviation, and logistics command coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Commands:</strong> Multinational Corps-level command structure integration</p>
              <p style="margin:0;"><strong>• Army Interface:</strong> Interface with Army command and adjacent Corps coordination</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Corps COA Development Process -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-process" style="margin-right:8px; color:#6366f1;"></i>
          Corps COA Development Process and Operational Art Methodology
        </h3>

        <div style="background-color:rgba(99, 102, 241, 0.1); padding:12px; border-radius:6px; border:1px solid #6366f1; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#a5b4fc; font-size:12px; margin:0 0 8px 0;">Corps Process Methodology</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Corps Development Process:</strong> Corps COA development follows operational art principles integrating Army operational guidance with tactical requirements and division capabilities. The process requires comprehensive operational design, extensive multi-division coordination, and iterative refinement to produce viable operational options for Army commander consideration.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Design Phase -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-drafting-compass" style="margin-right:8px; color:#6366f1;"></i>
              Corps Operational Design Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Problem Framing:</strong> Comprehensive framing of Corps operational problems and challenges</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Environment Analysis:</strong> Analysis of operational environment, threats, and multi-division opportunities</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Approach Development:</strong> Development of Corps operational approaches and concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• End State Visualization:</strong> Clear visualization of Corps operational end states and objectives</p>
              <p style="margin:0;"><strong>• Theory of Success:</strong> Development of Corps theory of success and operational logic</p>
            </div>
          </div>

          <!-- COA Generation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-lightbulb" style="margin-right:8px; color:#6366f1;"></i>
              Corps COA Generation Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Concept Development:</strong> Development of overarching Corps operational concepts and approaches</p>
              <p style="margin:0 0 8px 0;"><strong>• Division Integration Design:</strong> Design of multi-division integration supporting Corps operational concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Force Array Planning:</strong> Corps force positioning and multi-division allocation across operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Task Organization:</strong> Assignment of missions and tasks to subordinate division commands</p>
              <p style="margin:0;"><strong>• Sustainment Architecture:</strong> Development of Corps sustainment and logistics architecture</p>
            </div>
          </div>

          <!-- COA Development -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-tools" style="margin-right:8px; color:#6366f1;"></i>
              Corps COA Development Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Detailed Planning:</strong> Comprehensive development of Corps COA details and supporting operational plans</p>
              <p style="margin:0 0 8px 0;"><strong>• Division Coordination Integration:</strong> Integration of Corps staff coordination and subordinate division input</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Assessment:</strong> Comprehensive Corps operational risk assessment and mitigation planning</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Allocation:</strong> Detailed Corps resource allocation and distribution planning across divisions</p>
              <p style="margin:0;"><strong>• Timeline Refinement:</strong> Detailed Corps timeline development and operational phasing refinement</p>
            </div>
          </div>

          <!-- COA Refinement -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-edit" style="margin-right:8px; color:#6366f1;"></i>
              Corps COA Refinement Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Iterative Improvement:</strong> Continuous refinement based on Corps analysis and multi-division coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• SFADC Evaluation:</strong> Application of SFADC criteria and Corps operational feasibility assessment</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Coordination:</strong> Integration of coalition partner Corps-level feedback and requirements</p>
              <p style="margin:0 0 8px 0;"><strong>• Army Coordination:</strong> Coordination with Army command and adjacent Corps requirements</p>
              <p style="margin:0;"><strong>• Final Validation:</strong> Final Corps validation and preparation for Army decision briefing</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Operational Interface and Multi-Division Coordination -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-layer-group" style="margin-right:8px; color:#06b6d4;"></i>
          Corps Operational Interface and Multi-Division Coordination
        </h3>

        <div style="background-color:rgba(6, 182, 212, 0.1); padding:12px; border-radius:6px; border:1px solid #06b6d4; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#67e8f9; font-size:12px; margin:0 0 8px 0;">Corps Interface Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Operational-Tactical Integration:</strong> Corps commanders must seamlessly integrate Army operational guidance with tactical requirements from subordinate division commands, ensuring coherent translation of operational objectives into executable tactical concepts across multiple divisions and operational areas.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-board" style="margin-right:8px; color:#06b6d4;"></i>
              Corps Operational Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Army Operational Guidance:</strong> Integration of Army commander's operational direction and campaign plans</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Operational Direction:</strong> Implementation of Corps commander's operational strategy and concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Objectives Translation:</strong> Conversion of operational end states into Corps tactical objectives</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Allocation Guidance:</strong> Corps resource prioritization and allocation across division operations</p>
              <p style="margin:0;"><strong>• Risk Tolerance Framework:</strong> Corps operational risk acceptance criteria and mitigation strategies</p>
            </div>
          </div>

          <!-- Tactical Coordination -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-network-wired" style="margin-right:8px; color:#06b6d4;"></i>
              Corps Tactical Coordination
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Division Command Integration:</strong> Synchronization of multiple division operations across Corps operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Command Coordination:</strong> Integration of Corps artillery, aviation, and logistics commands</p>
              <p style="margin:0 0 8px 0;"><strong>• Adjacent Corps Interface:</strong> Coordination with adjacent Corps commands and Army elements</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Area Synchronization:</strong> Coordination across multiple division operational areas</p>
              <p style="margin:0;"><strong>• Mission Command Philosophy:</strong> Implementation of decentralized execution with centralized Corps planning</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Coalition Integration -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-handshake" style="margin-right:8px; color:#8b5cf6;"></i>
          Corps Coalition Integration and Multinational Division Coordination
        </h3>

        <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Corps Coalition Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Corps Multinational Integration:</strong> Corps COA development must incorporate coalition partner division-level capabilities, constraints, and national caveats while maintaining operational effectiveness across multiple divisions. This requires sophisticated coordination mechanisms and shared understanding of operational objectives.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Coalition Division Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-users" style="margin-right:8px; color:#8b5cf6;"></i>
              Coalition Division Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multinational Division Commands:</strong> Integration of coalition partner division-level commands and capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Brigade-Level Integration:</strong> Coalition partner brigade integration within Corps operational framework</p>
              <p style="margin:0 0 8px 0;"><strong>• National Caveats:</strong> Partner nation Corps-level operational limitations and political constraints</p>
              <p style="margin:0 0 8px 0;"><strong>• Capability Integration:</strong> Coalition Corps unique capabilities and specialized force contributions</p>
              <p style="margin:0;"><strong>• Logistics Coordination:</strong> Multinational Corps logistics support and host nation coordination</p>
            </div>
          </div>

          <!-- Command Structure Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-sitemap" style="margin-right:8px; color:#8b5cf6;"></i>
              Corps Command Structure Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multinational Corps Command:</strong> Combined Corps command structure establishment and coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Command Relationships:</strong> Corps-level operational control and coordination relationships</p>
              <p style="margin:0 0 8px 0;"><strong>• Staff Integration:</strong> Multinational Corps staff integration and liaison coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Planning Synchronization:</strong> Coordinated Corps planning processes and shared products</p>
              <p style="margin:0;"><strong>• Information Sharing:</strong> Coalition Corps information sharing and security protocols</p>
            </div>
          </div>
        </div>
      </div>

      <!-- SFADC Criteria Application -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-check-double" style="margin-right:8px; color:#ef4444;"></i>
          Corps SFADC Criteria Application - Operational Level Evaluation
        </h3>

        <div style="background-color:rgba(239, 68, 68, 0.1); padding:12px; border-radius:6px; border:1px solid #ef4444; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 8px 0;">Corps Evaluation Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Corps SFADC Application:</strong> Corps-level COAs must be rigorously evaluated against SFADC criteria with operational-level considerations including Army operational objectives, coalition requirements, multi-division resource constraints, and operational risk tolerance.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Suitable and Feasible -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-bullseye" style="margin-right:8px; color:#ef4444;"></i>
              Corps Suitable and Feasible
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Army Operational Alignment:</strong> Direct contribution to Army operational objectives and campaign plans</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Mission Accomplishment:</strong> Capability to achieve assigned Corps mission and operational end state</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Division Capability:</strong> Sufficient division forces available within Corps and from Army reserve</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Logistics Capability:</strong> Corps sustainment architecture capable of supporting extended multi-division operations</p>
              <p style="margin:0;"><strong>• Operational Timeline:</strong> Achievable within Corps operational timeline and tempo requirements</p>
            </div>
          </div>

          <!-- Acceptable and Complete -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-balance-scale" style="margin-right:8px; color:#ef4444;"></i>
              Corps Acceptable and Complete
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Risk Level:</strong> Risk level acceptable to Army command and Corps leadership</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Acceptance:</strong> Risk level acceptable to coalition Corps partners and alliance structures</p>
              <p style="margin:0 0 8px 0;"><strong>• Complete Corps Framework:</strong> Comprehensive planning addressing all Corps operational functions</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Division Integration:</strong> Complete multi-division sustainment planning and coordination</p>
              <p style="margin:0;"><strong>• Risk Mitigation:</strong> Comprehensive Corps risk mitigation and contingency planning</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Corps Operational Risk Assessment -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-exclamation-triangle" style="margin-right:8px; color:#f97316;"></i>
          Corps Operational Risk Assessment and Mitigation Framework
        </h3>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fb923c; font-size:12px; margin:0 0 8px 0;">Corps Risk Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Corps Operational Risk Management:</strong> Corps-level risk assessment encompasses operational and tactical risks with potential Army-level consequences. Risk evaluation must consider probability, impact, and mitigation capabilities across multiple divisions, operational areas, and coalition operations.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Risk Categories -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-list-alt" style="margin-right:8px; color:#f97316;"></i>
              Corps Operational Risk Categories
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Risk:</strong> Corps mission failure, multi-division coordination breakdown, and operational capability degradation</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Risk:</strong> Division-level tactical failure, force protection, and subordinate unit capability loss</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Risk:</strong> Corps-level alliance cohesion, partner nation commitment, and multinational coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Risk:</strong> Corps resource depletion, multi-division sustainability, and competing priority impacts</p>
              <p style="margin:0;"><strong>• Environmental Risk:</strong> Operational environment changes, weather impacts, and terrain considerations</p>
            </div>
          </div>

          <!-- Risk Assessment Process -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chart-line" style="margin-right:8px; color:#f97316;"></i>
              Corps Risk Assessment Process
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Risk Identification:</strong> Comprehensive identification of Corps operational and tactical risks across divisions</p>
              <p style="margin:0 0 8px 0;"><strong>• Probability Assessment:</strong> Statistical and analytical assessment of Corps risk probability and likelihood</p>
              <p style="margin:0 0 8px 0;"><strong>• Impact Analysis:</strong> Comprehensive analysis of potential consequences and operational implications</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Prioritization:</strong> Priority ranking based on probability, impact, and Corps operational significance</p>
              <p style="margin:0;"><strong>• Mitigation Planning:</strong> Development of Corps risk mitigation strategies and contingency plans</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Corps Resource Allocation -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-chart-pie" style="margin-right:8px; color:#10b981;"></i>
          Corps Resource Allocation and Distribution Framework
        </h3>

        <div style="background-color:rgba(16, 185, 129, 0.1); padding:12px; border-radius:6px; border:1px solid #10b981; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 8px 0;">Corps Resource Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Corps Resource Management:</strong> Corps commanders must optimize allocation of limited operational resources across competing division priorities, coalition requirements, and extended operational timelines. Resource planning encompasses personnel, equipment, logistics, intelligence, and operational capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Force Allocation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#6ee7b7; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-users-cog" style="margin-right:8px; color:#10b981;"></i>
              Corps Force Allocation
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Division Allocation:</strong> Distribution of division forces across Corps operational areas and mission priorities</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Reserve:</strong> Allocation and employment of Corps reserve forces and capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Forces:</strong> Integration and allocation of multinational division and brigade contributions</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Commands:</strong> Allocation of Corps artillery, aviation, and specialized capabilities</p>
              <p style="margin:0;"><strong>• Force Rotation:</strong> Corps force rotation and sustainment planning across multiple divisions</p>
            </div>
          </div>

          <!-- Logistics Resources -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#6ee7b7; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-truck" style="margin-right:8px; color:#10b981;"></i>
              Corps Logistics Resources
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Supply Chain Management:</strong> Corps supply chain optimization and multi-division distribution network</p>
              <p style="margin:0 0 8px 0;"><strong>• Transportation Assets:</strong> Corps transportation capability allocation and movement coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Fuel and Energy:</strong> Corps fuel distribution and energy resource management across divisions</p>
              <p style="margin:0 0 8px 0;"><strong>• Medical Resources:</strong> Corps medical capability and evacuation resource allocation</p>
              <p style="margin:0;"><strong>• Maintenance Support:</strong> Corps maintenance capability and equipment serviceability management</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Corps Command Considerations -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-star" style="margin-right:8px; color:#f59e0b;"></i>
          Corps Command Considerations and Operational Leadership
        </h3>

        <div style="background-color:rgba(245, 158, 11, 0.1); padding:12px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 8px 0;">Corps Command Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Corps Operational Command Authority:</strong> Corps commanders exercise operational command authority over multiple divisions, operational areas, and coalition partners. Command considerations encompass operational decision-making, operational art application, and tactical execution oversight with comprehensive understanding of Army operational objectives and tactical implications.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Decision Making -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-king" style="margin-right:8px; color:#f59e0b;"></i>
              Corps Operational Decision Making
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Vision:</strong> Development and communication of Corps operational vision and commander's intent</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Authority:</strong> Exercise of Corps operational decision authority within Army guidance parameters</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Acceptance:</strong> Corps operational risk acceptance and mitigation decision-making</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Prioritization:</strong> Corps resource allocation and priority determination across divisions</p>
              <p style="margin:0;"><strong>• Coalition Leadership:</strong> Multinational Corps leadership and alliance relationship management</p>
            </div>
          </div>

          <!-- Operational Art Application -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-palette" style="margin-right:8px; color:#f59e0b;"></i>
              Corps Operational Art Application
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Design:</strong> Application of operational design methodology to Corps operational problems</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Approach:</strong> Development of comprehensive Corps operational approaches</p>
              <p style="margin:0 0 8px 0;"><strong>• Campaign Design:</strong> Corps campaign design and operational concept development</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Functions:</strong> Integration of operational functions across Corps operations</p>
              <p style="margin:0;"><strong>• Operational Sequencing:</strong> Corps operation sequencing and phasing coordination</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline and Phasing -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-clock" style="margin-right:8px; color:#8b5cf6;"></i>
          Corps Timeline and Operational Phasing Framework
        </h3>

        <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Corps Phasing Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Corps Operational Timeline Management:</strong> Corps operations require comprehensive phasing and timeline coordination across multiple divisions, coalition partners, and operational timelines. Phasing must accommodate operational deployment, multi-division buildup, sustained operations, and operational transition with flexible adaptation capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Phasing -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-layer-group" style="margin-right:8px; color:#8b5cf6;"></i>
              Corps Operational Phasing
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Phase 0:</strong> Shape - Corps shaping operations and operational preparation</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase I:</strong> Deter - Corps deterrence and crisis response preparation</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase II:</strong> Seize Initiative - Initial Corps operations and operational advantage establishment</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase III:</strong> Dominate - Major Corps combat operations and operational objective achievement</p>
              <p style="margin:0;"><strong>• Phase IV:</strong> Stabilize - Post-conflict Corps stabilization and operational transition</p>
            </div>
          </div>

          <!-- Timeline Coordination -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-calendar-alt" style="margin-right:8px; color:#8b5cf6;"></i>
              Corps Timeline Coordination
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Deployment:</strong> Corps force deployment timeline and operational lift coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Synchronization:</strong> Multinational Corps timeline coordination and partner integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Tempo:</strong> Sustainable Corps operational tempo and endurance planning</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Points:</strong> Corps operational decision points and branch/sequel planning triggers</p>
              <p style="margin:0;"><strong>• Transition Planning:</strong> Corps phase transition criteria and operational milestone achievement</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Corps Multi-Domain Operations Integration -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-globe" style="margin-right:8px; color:#1d4ed8;"></i>
          Corps Multi-Domain Operations Integration and Convergence
        </h3>

        <div style="background-color:rgba(29, 78, 216, 0.1); padding:12px; border-radius:6px; border:1px solid #1d4ed8; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Corps Multi-Domain Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Corps Multi-Domain Operations:</strong> Corps commanders must integrate and synchronize operations across all domains - land, air, maritime, space, and cyberspace - to achieve operational objectives. Multi-domain convergence requires comprehensive understanding of domain interactions, cross-domain effects, and synchronized multi-division operations across operational areas.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Land Domain Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-mountain" style="margin-right:8px; color:#1d4ed8;"></i>
              Corps Land Domain Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multi-Division Operations:</strong> Synchronized land operations across multiple divisions and operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Terrain Integration:</strong> Corps terrain analysis and multi-domain terrain utilization</p>
              <p style="margin:0 0 8px 0;"><strong>• Ground Maneuver:</strong> Large-scale ground maneuver coordination and multi-division integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Urban Operations:</strong> Corps urban operations and complex terrain navigation</p>
              <p style="margin:0;"><strong>• Coalition Ground Forces:</strong> Multinational ground force integration and coordination</p>
            </div>
          </div>

          <!-- Air Domain Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-plane" style="margin-right:8px; color:#1d4ed8;"></i>
              Corps Air Domain Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Corps Aviation:</strong> Corps aviation integration and multi-division aviation coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Air-Ground Integration:</strong> Close air support and Corps ground operation coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Airspace Management:</strong> Corps airspace coordination and joint airspace integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Air Mobility:</strong> Corps air mobility and tactical lift coordination</p>
              <p style="margin:0;"><strong>• Air Defense:</strong> Corps air defense and integrated air and missile defense</p>
            </div>
          </div>

          <!-- Space and Cyber Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-satellite" style="margin-right:8px; color:#1d4ed8;"></i>
              Corps Space and Cyber Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Space Operations:</strong> Corps space capability utilization and space-based enablers</p>
              <p style="margin:0 0 8px 0;"><strong>• Cyber Operations:</strong> Corps cyber capability and defensive cyber operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Electronic Warfare:</strong> Corps electronic warfare and spectrum management</p>
              <p style="margin:0 0 8px 0;"><strong>• Information Operations:</strong> Corps information operations and cognitive domain effects</p>
              <p style="margin:0;"><strong>• Intelligence Integration:</strong> Multi-domain intelligence and reconnaissance integration</p>
            </div>
          </div>

          <!-- Operational Assessment -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chart-bar" style="margin-right:8px; color:#1d4ed8;"></i>
              Corps Operational Assessment
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Mission Accomplishment:</strong> Corps mission objective achievement and operational end state progress</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Capability:</strong> Corps operational capability maintenance and multi-division effectiveness</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Effectiveness:</strong> Multinational Corps effectiveness and alliance cohesion measurement</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Efficiency:</strong> Corps resource utilization efficiency and optimization assessment</p>
              <p style="margin:0;"><strong>• Operational Tempo:</strong> Sustainable Corps operational tempo and endurance evaluation</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div style="background-color:#374151; padding:16px; border-radius:8px; border-left:4px solid #f59e0b; margin-bottom:20px;">
        <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 8px 0;">
          <i class="fas fa-graduation-cap" style="margin-right:8px;"></i>
          Corps COA Development - Educational Framework Summary
        </h4>
        <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
          <strong>UNCLASSIFIED:</strong> This comprehensive doctrinal framework provides senior military officers with essential knowledge for Corps-level COA development processes. The framework integrates FM 5-0 doctrine with operational art considerations, coalition operations, and multi-division coordination requirements essential for effective Corps command and strategic military education.
        </p>
      </div>
    </div>
  `;
  }
};

export default corpsCOAAnalysisModule;
